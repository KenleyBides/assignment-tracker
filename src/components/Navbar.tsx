"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/home" },
    { name: "Assignments", href: "/assignments" },
    { name: "History", href: "/history" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <nav className="bg-white border-b-2 border-blue-900 px-8 py-4 flex gap-8 shadow-sm">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-blue-900 font-medium pb-1 border-b-2 ${
              isActive ? "border-blue-900 font-bold" : "border-transparent"
            } hover:border-blue-900 transition-colors duration-200`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}