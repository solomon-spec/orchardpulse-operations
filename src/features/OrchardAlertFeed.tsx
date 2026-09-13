import { useState } from 'react'

const initialAlerts = [
  { id: 'alert-wind', title: 'Wind advisory', severity: 2 },
  { id: 'alert-cooler', title: 'Cooler door open', severity: 3 },
  { id: 'alert-fuel', title: 'Fuel delivery delayed', severity: 1 },
]

export function OrchardAlertFeed() {
  const [alerts, setAlerts] = useState(initialAlerts)
  const prioritize = () => setAlerts((current) => [...current].sort((a, b) => b.severity - a.severity))

  return (
    <section className="workflow" aria-labelledby="orchard-alerts-heading">
      <div className="workflow-heading">
        <div><p className="kicker">Exceptions</p><h2 id="orchard-alerts-heading">Operational alerts</h2></div>
        <button type="button" onClick={prioritize}>Prioritize severity</button>
      </div>
      <ul data-testid="orchard-alert-list">
        {alerts.map((alert, index) => (
          <li key={index}>
            <div><strong>{alert.title}</strong><span>Severity {alert.severity}</span></div>
            <label><input type="checkbox" /> Acknowledged</label>
          </li>
        ))}
      </ul>
    </section>
  )
}
