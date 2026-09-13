import { useState } from 'react'

const initialRooms = [
  { id: 'room-maple', name: 'Maple 1', temperature: 36 },
  { id: 'room-cedar', name: 'Cedar 3', temperature: 32 },
  { id: 'room-birch', name: 'Birch 2', temperature: 34 },
]

export function ColdRoomPriorityBoard() {
  const [rooms, setRooms] = useState(initialRooms)

  const sortColdestFirst = () => {
    setRooms((current) => [...current].sort((a, b) => a.temperature - b.temperature))
  }

  return (
    <section className="workflow" aria-labelledby="cold-room-heading">
      <div className="workflow-heading">
        <div><p className="kicker">Cold storage</p><h2 id="cold-room-heading">Room priorities</h2></div>
        <button type="button" onClick={sortColdestFirst}>Sort coldest first</button>
      </div>
      <div className="card-grid" data-testid="cold-room-list">
        {rooms.map((room, index) => (
          <article key={index}>
            <strong>{room.name}</strong>
            <span>{room.temperature}°F</span>
            <label><input type="checkbox" /> Hold for inspection</label>
          </article>
        ))}
      </div>
    </section>
  )
}
