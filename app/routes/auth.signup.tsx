import Button from "~/components/button";
import Input from "~/components/input";
import { getUserEmail, signUp } from "~/utils/session.server";
import { Form, Link } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const email = await getUserEmail(request);

  if (email) {
    return redirect("/");
  }

  return null;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name || !username || !email || !password) {
    return { success: false, error: "Invalid input" };
  }

  if (
    typeof name !== "string" ||
    typeof username !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return { success: false, error: "Invalid input" };
  }

  return await signUp(name, username, email, password);
};

export default function SignUp() {
  return (
    <main className="flex flex-col justify-center items-center h-screen gap-7">
      <div className="flex flex-col items-center gap-7">
        <h1 className="text-2xl self-center">Welcome!</h1>
        <Form
          className="flex flex-col gap-5 border border-black p-5 rounded-md bg-gray-100"
          method="POST"
        >
          <Input name="email" label="Email" type="email" placeholder="Email" />
          <Input name="name" label="Name" type="text" placeholder="Name" />
          <Input
            name="username"
            label="Username"
            type="text"
            placeholder="Username"
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
          />
          <Button type="submit" fullWidth>Sign up</Button>
        </Form>
        <Link to="/auth/login" className="text-sm">
          Already have an account? Login
        </Link>
      </div>
    </main>
  );
}
