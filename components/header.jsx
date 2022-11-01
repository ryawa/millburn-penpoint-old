import { useState } from "react";

export default function Header({ categories }) {
  const [hidden, setHidden] = useState(true);
  return (
    <header>
      <nav className="my-16 flex flex-wrap items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">
          The Millburn Penpoint
        </h1>
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
                <a
                  className="md:p-4 py-2 block hover:text-slate-600"
                  href={`/categories/${category.slug}`}
                >
                  {category.data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
