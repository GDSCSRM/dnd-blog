import { Form, Link, useLocation } from "@remix-run/react";

export default function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "#", label: "Stories" },
    { to: "#", label: "About" },
  ];

  return (
    <nav className="flex justify-between items-center py-5">
      <h1 className="text-xl font-bold">Name</h1>
      <div className="flex gap-10">
        {links.map(({ to, label }) => (
          <Link
            key={label}
            to={to}
            className={`${
              pathname === to && "underline underline-offset-4"
            } text-black hover:underline underline-offset-4`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-2">
        <img
          src="/assets/search.svg"
          alt="Search"
          className="rounded-full bg-gray-100 p-3 border border-black"
        />
        <img
          src="/assets/theme.svg"
          alt="Theme"
          className="rounded-full bg-gray-100 p-3 border border-black"
        />
        <Form
          method="POST"
          action="/auth/logout"
        >
          <button type="submit" className="rounded-full bg-gray-100 p-3 border border-black">
            <img src="/assets/profile.svg" alt="Profile" />
          </button>
        </Form>
      </div>
    </nav>
  );
}
