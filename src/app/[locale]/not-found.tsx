import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="intro">
        <h1>Page not found</h1>
        <p className="lede">The requested address does not exist.</p>
        <div className="actions">
          <Link className="button-link" href="/">
            Return home
          </Link>
        </div>
      </section>
    </main>
  );
}
