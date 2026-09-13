const summary = [
  { label: 'Blocks ready', value: '12' },
  { label: 'Bins cooling', value: '184' },
  { label: 'Loads today', value: '9' },
]

export function App() {
  return (
    <main>
      <header>
        <p className="eyebrow">OrchardPulse</p>
        <h1>Harvest operations</h1>
        <p>Coordinate crews, quality checks, and cold-storage moves.</p>
      </header>
      <section className="summary" aria-label="Today at a glance">
        {summary.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>
    </main>
  )
}
