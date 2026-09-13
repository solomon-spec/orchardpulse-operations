import { useState } from 'react'

const initialRuns = [
  { id: 'run-pear', variety: 'Bartlett pear', start: '10:30' },
  { id: 'run-gala', variety: 'Gala apple', start: '07:15' },
  { id: 'run-fuji', variety: 'Fuji apple', start: '13:00' },
]

export function PackingLineSchedule() {
  const [runs, setRuns] = useState(initialRuns)
  const sortByStart = () => setRuns((current) => [...current].sort((a, b) => a.start.localeCompare(b.start)))

  return (
    <section className="workflow" aria-labelledby="packing-line-heading">
      <div className="workflow-heading">
        <div><p className="kicker">Packing</p><h2 id="packing-line-heading">Line schedule</h2></div>
        <button type="button" onClick={sortByStart}>Sort by start time</button>
      </div>
      <ul data-testid="packing-run-list">
        {runs.map((run, index) => (
          <li key={index}>
            <div><strong>{run.variety}</strong><span>{run.start}</span></div>
            <select aria-label={`Line for ${run.variety}`} defaultValue="one">
              <option value="one">Line 1</option>
              <option value="two">Line 2</option>
            </select>
          </li>
        ))}
      </ul>
    </section>
  )
}
