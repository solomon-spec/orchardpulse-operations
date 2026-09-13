const destinations = [
  { href: '#harvest-blocks-heading', label: 'Harvest' },
  { href: '#cold-room-heading', label: 'Cold rooms' },
  { href: '#quality-samples-heading', label: 'Quality' },
  { href: '#crew-shifts-heading', label: 'Crews' },
  { href: '#dispatch-loads-heading', label: 'Dispatch' },
  { href: '#irrigation-heading', label: 'Irrigation' },
  { href: '#packing-line-heading', label: 'Packing' },
  { href: '#orchard-alerts-heading', label: 'Alerts' },
  { href: '#equipment-heading', label: 'Equipment' },
  { href: '#delivery-heading', label: 'Deliveries' },
]

export function WorkflowIndex() {
  return (
    <nav className="workflow-index" aria-label="Operational workflows">
      {destinations.map((destination) => (
        <a key={destination.href} href={destination.href}>{destination.label}</a>
      ))}
    </nav>
  )
}
