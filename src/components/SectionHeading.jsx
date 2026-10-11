// Shared section wrapper: gives every section an id (for navigation), a heading and a reveal.
export default function Section({ id, title, sub, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="wrap reveal">
        <header className="sec-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {sub && <p>{sub}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
