import { logout } from "~/utils/session.server";
import { redirect } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => redirect("/");
export const action: ActionFunction = async ({ request }) => logout(request);
