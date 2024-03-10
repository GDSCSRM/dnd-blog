import { Link } from "@remix-run/react";
import Round from "./round";
export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 my-10">
      <div className="flex flex-row gap-10 justify-between p-10 bg-gray-100 rounded-md">
        <div className="flex flex-col gap-5 basis-1/2">
          <div className="flex gap-4 items-center">
            <Round />
            <span className="text-xl font-bold">About</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu.
          </p>
          <div className="flex flex-row gap-4">
            <Round />
            <Round />
            <Round />
            <Round />
          </div>
        </div>
        <div className="flex flex-row justify-around basis-1/2">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <Link to="#">Home</Link>
              <Link to="#">Stories</Link>
              <Link to="#">About</Link>
              <Link to="#">Archives</Link>
              <Link to="#">Contact</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">Categories</h3>
            <ul className="flex flex-col gap-2">
              <Link to="#">Adventure</Link>
              <Link to="#">Entertainment</Link>
              <Link to="#">Technology</Link>
              <Link to="#">Fashion</Link>
              <Link to="#">Business</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">Name</span>
          <p>&copy; Copyright 2024. All rights reserved.</p>
        </div>
        <div className="flex gap-2">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Cookie Policy</Link>
          <Link to="#">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
