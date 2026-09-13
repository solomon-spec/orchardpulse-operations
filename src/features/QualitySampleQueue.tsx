import { useState } from 'react'

const initialSamples = [
  { id: 'sample-104', lot: 'Lot 104', variety: 'Gala' },
  { id: 'sample-219', lot: 'Lot 219', variety: 'Fuji' },
  { id: 'sample-307', lot: 'Lot 307', variety: 'Pear' },
]

export function QualitySampleQueue() {
  const [samples, setSamples] = useState(initialSamples)
  const rotate = () => setSamples(([first, ...rest]) => [...rest, first])

  return (
    <section className="workflow" aria-labelledby="quality-samples-heading">
      <div className="workflow-heading">
        <div><p className="kicker">Quality lab</p><h2 id="quality-samples-heading">Sample queue</h2></div>
        <button type="button" onClick={rotate}>Send first to end</button>
      </div>
      <ol data-testid="quality-sample-list">
        {samples.map((sample, index) => (
          <li key={index}>
            <div><strong>{sample.lot}</strong><span>{sample.variety}</span></div>
            <select aria-label={`Grade for ${sample.lot}`} defaultValue="pending">
              <option value="pending">Pending</option>
              <option value="pass">Pass</option>
              <option value="hold">Hold</option>
            </select>
          </li>
        ))}
      </ol>
    </section>
  )
}
