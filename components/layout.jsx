import Meta from "./meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="container mx-auto px-5">
        <main>{children}</main>
      </div>
    </>
  );
}
