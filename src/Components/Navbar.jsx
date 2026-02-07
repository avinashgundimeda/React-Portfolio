import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full flex justify-center sticky top-0 z-50 ">
      <div className="max-w-6xl w-full flex justify-center py-5">
        <div className="flex gap-1.5 px-2 py-1 rounded-full border border-gray-200 bg-white shadow-sm">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                text-sm px-4 py-2 rounded-full transition-all font-medium
                ${
                  pathname === link.path
                    ? "text-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
