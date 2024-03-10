import { getUserByEmail, createUser } from "./api.server";
import bcrypt from "bcrypt";
import { createCookieSessionStorage, redirect } from "@remix-run/node";

export const login = async (email: string, password: string) => {
  const user = await getUserByEmail(email);

  if (!user) {
    return { success: false, error: "User not found" };
  }

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) {
    return { success: false, error: "Invalid password" };
  }

  return createUserSession(user.email, "/");
};

export const signUp = async (
  name: string,
  username: string,
  email: string,
  password: string
) => {
  const user = await getUserByEmail(email);

  if (user) {
    return { success: false, error: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await createUser(name, username, email, hashedPassword);

  return createUserSession(newUser.email, "/");
};

const { commitSession, getSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "dnd_blog_session",
      secure: true,
      secrets: ["some-secret"],
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
    },
  });

async function createUserSession(email: string, redirectTo: string) {
  const session = await getSession();
  session.set("email", email);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

function getUserSession(request: Request) {
  return getSession(request.headers.get("Cookie"));
}

export async function getUserEmail(request: Request) {
  const session = await getUserSession(request);
  const email = session.get("email");

  if (typeof email !== "string") return null;
  return email;
}

export async function requireUserEmail(request: Request) {
  const userId = await getUserEmail(request);

  if (!userId) {
    throw redirect("/auth/login");
  }
  return userId;
}

export async function logout(request: Request) {
  const session = await getUserSession(request);

  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}
