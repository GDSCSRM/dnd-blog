import Button from "~/components/button";
import Input from "~/components/input";
import { getUserEmail, login } from "~/utils/session.server";
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

  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { success: false, error: "Invalid email or password" };
  }

  if (typeof email !== "string" || typeof password !== "string") {
    return { success: false, error: "Invalid input" };
  }

  return await login(email, password);
};

export default function Login() {
  return (
    <main className="flex flex-col justify-center items-center h-screen gap-7">
      <div className="flex flex-col items-center gap-7">
        <h1 className="text-2xl self-center">Welcome!</h1>
        <Form
          className="flex flex-col gap-5 border border-black p-5 rounded-md bg-gray-100 w-80"
          method="POST"
        >
          <Button>Authorize with Google</Button>
          <div className="border-t border-black" />
          <Input name="email" label="Email" type="email" placeholder="Email" />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-between">
            <label className="flex gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <p>Forgot password?</p>
          </div>
          <Button type="submit" fullWidth>Login</Button>
        </Form>
        <Link to="/auth/signup" className="text-sm">
          Don't have an account? Sign up
        </Link>
      </div>
    </main>
  );
}
