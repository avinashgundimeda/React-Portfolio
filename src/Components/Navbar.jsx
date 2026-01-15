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
    <nav className="w-full flex justify-center sticky top-0 z-50 bg-white">
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
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
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
