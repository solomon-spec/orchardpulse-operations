import { ColdRoomPriorityBoard } from './features/ColdRoomPriorityBoard'
import { StatusBadge } from './components/StatusBadge'
import { WorkflowIndex } from './components/WorkflowIndex'
import { CrewShiftBoard } from './features/CrewShiftBoard'
import { DispatchLoadSequence } from './features/DispatchLoadSequence'
import { EquipmentInspectionQueue } from './features/EquipmentInspectionQueue'
import { GrowerDeliveryBoard } from './features/GrowerDeliveryBoard'
import { HarvestBlockQueue } from './features/HarvestBlockQueue'
import { IrrigationRunPlan } from './features/IrrigationRunPlan'
import { OrchardAlertFeed } from './features/OrchardAlertFeed'
import { PackingLineSchedule } from './features/PackingLineSchedule'
import { QualitySampleQueue } from './features/QualitySampleQueue'

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
        <StatusBadge label="All systems operating" />
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
      <WorkflowIndex />
      <div className="workflow-grid">
        <HarvestBlockQueue />
        <ColdRoomPriorityBoard />
        <QualitySampleQueue />
        <CrewShiftBoard />
        <DispatchLoadSequence />
        <IrrigationRunPlan />
        <PackingLineSchedule />
        <OrchardAlertFeed />
        <EquipmentInspectionQueue />
        <GrowerDeliveryBoard />
      </div>
    </main>
  )
}
