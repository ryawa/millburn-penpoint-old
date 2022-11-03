import { useState } from "react";
import Link from "next/link";

export default function Header({ categories }) {
  const [hidden, setHidden] = useState(true);
  return (
    <header className="my-16">
      <nav className="flex flex-wrap items-center justify-between">
        <Link href="/" className="text-4xl font-bold tracking-tight">
          The Millburn Penpoint
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setHidden(!hidden)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div
          className={`${
            hidden ? "hidden" : ""
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="md:flex md:justify-between md:pt-0">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="md:p-4 py-2 block hover:text-slate-600"
                >
                  {category.data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
