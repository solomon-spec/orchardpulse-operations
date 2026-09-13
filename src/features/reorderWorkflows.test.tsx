import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ColdRoomPriorityBoard } from './ColdRoomPriorityBoard'
import { CrewShiftBoard } from './CrewShiftBoard'
import { DispatchLoadSequence } from './DispatchLoadSequence'
import { EquipmentInspectionQueue } from './EquipmentInspectionQueue'
import { GrowerDeliveryBoard } from './GrowerDeliveryBoard'
import { HarvestBlockQueue } from './HarvestBlockQueue'
import { IrrigationRunPlan } from './IrrigationRunPlan'
import { OrchardAlertFeed } from './OrchardAlertFeed'
import { PackingLineSchedule } from './PackingLineSchedule'
import { QualitySampleQueue } from './QualitySampleQueue'

function itemNames(testId: string) {
  return [...screen.getByTestId(testId).querySelectorAll('strong')].map((node) => node.textContent)
}

describe('reorderable orchard workflows', () => {
  it('reverses the harvest picking order', async () => {
    const user = userEvent.setup()
    render(<HarvestBlockQueue />)
    expect(itemNames('harvest-block-list')).toEqual(['North Gala', 'River Honeycrisp', 'Hilltop Fuji'])
    await user.click(screen.getByRole('button', { name: 'Reverse picking order' }))
    expect(itemNames('harvest-block-list')).toEqual(['Hilltop Fuji', 'River Honeycrisp', 'North Gala'])
  })

  it('sorts cold rooms from coldest to warmest', async () => {
    const user = userEvent.setup()
    render(<ColdRoomPriorityBoard />)
    expect(itemNames('cold-room-list')).toEqual(['Maple 1', 'Cedar 3', 'Birch 2'])
    await user.click(screen.getByRole('button', { name: 'Sort coldest first' }))
    expect(itemNames('cold-room-list')).toEqual(['Cedar 3', 'Birch 2', 'Maple 1'])
  })

  it('sends the first quality sample to the end', async () => {
    const user = userEvent.setup()
    render(<QualitySampleQueue />)
    expect(itemNames('quality-sample-list')).toEqual(['Lot 104', 'Lot 219', 'Lot 307'])
    await user.click(screen.getByRole('button', { name: 'Send first to end' }))
    expect(itemNames('quality-sample-list')).toEqual(['Lot 219', 'Lot 307', 'Lot 104'])
  })

  it('sorts crew shifts by lead name', async () => {
    const user = userEvent.setup()
    render(<CrewShiftBoard />)
    expect(itemNames('crew-shift-list')).toEqual(['Amber Crew', 'Blue Crew', 'Cider Crew'])
    await user.click(screen.getByRole('button', { name: 'Sort by lead' }))
    expect(itemNames('crew-shift-list')).toEqual(['Cider Crew', 'Amber Crew', 'Blue Crew'])
  })

  it('defers the first dispatch load', async () => {
    const user = userEvent.setup()
    render(<DispatchLoadSequence />)
    expect(itemNames('dispatch-load-list')).toEqual(['Load 41', 'Load 56', 'Load 63'])
    await user.click(screen.getByRole('button', { name: 'Defer first load' }))
    expect(itemNames('dispatch-load-list')).toEqual(['Load 56', 'Load 63', 'Load 41'])
  })

  it('reverses the irrigation zone order', async () => {
    const user = userEvent.setup()
    render(<IrrigationRunPlan />)
    expect(itemNames('irrigation-zone-list')).toEqual(['East slope', 'Creek row', 'Upper bench'])
    await user.click(screen.getByRole('button', { name: 'Reverse zone order' }))
    expect(itemNames('irrigation-zone-list')).toEqual(['Upper bench', 'Creek row', 'East slope'])
  })

  it('sorts packing runs by start time', async () => {
    const user = userEvent.setup()
    render(<PackingLineSchedule />)
    expect(itemNames('packing-run-list')).toEqual(['Bartlett pear', 'Gala apple', 'Fuji apple'])
    await user.click(screen.getByRole('button', { name: 'Sort by start time' }))
    expect(itemNames('packing-run-list')).toEqual(['Gala apple', 'Bartlett pear', 'Fuji apple'])
  })

  it('prioritizes orchard alerts by severity', async () => {
    const user = userEvent.setup()
    render(<OrchardAlertFeed />)
    expect(itemNames('orchard-alert-list')).toEqual(['Wind advisory', 'Cooler door open', 'Fuel delivery delayed'])
    await user.click(screen.getByRole('button', { name: 'Prioritize severity' }))
    expect(itemNames('orchard-alert-list')).toEqual(['Cooler door open', 'Wind advisory', 'Fuel delivery delayed'])
  })

  it('reverses the equipment inspection queue', async () => {
    const user = userEvent.setup()
    render(<EquipmentInspectionQueue />)
    expect(itemNames('equipment-list')).toEqual(['Orchard lift 7', 'Tractor 2', 'Sprayer 4'])
    await user.click(screen.getByRole('button', { name: 'Reverse inspection order' }))
    expect(itemNames('equipment-list')).toEqual(['Sprayer 4', 'Tractor 2', 'Orchard lift 7'])
  })

  it('moves the first grower delivery to the end', async () => {
    const user = userEvent.setup()
    render(<GrowerDeliveryBoard />)
    expect(itemNames('delivery-list')).toEqual(['Canyon Orchard', 'Meadow Fruit', 'Sunrise Acres'])
    await user.click(screen.getByRole('button', { name: 'Move first delivery to end' }))
    expect(itemNames('delivery-list')).toEqual(['Meadow Fruit', 'Sunrise Acres', 'Canyon Orchard'])
  })
})
