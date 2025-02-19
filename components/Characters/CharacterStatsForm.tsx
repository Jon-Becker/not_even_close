﻿import { CharacterStatsInput } from '../../backend/characters'
import { NumericInput } from '../Inputs/NumericInput'

interface Props {
  characterStats: CharacterStatsInput
  onChange: (characterStats: CharacterStatsInput) => void
}

export function CharacterStatsForm({ characterStats, onChange }: Props) {
  const onChangeStat =
    (field: keyof CharacterStatsInput) => (value: number | undefined) =>
      onChange({
        ...characterStats,
        [field]: value,
      })

  return (
    <div className="flex gap-4 flex-wrap">
      <NumericInput
        label="Stamina"
        value={characterStats.stamina}
        onChange={onChangeStat('stamina')}
        step={500}
      />
      <NumericInput
        label="Versatility (%)"
        value={characterStats.versatilityPercent}
        onChange={onChangeStat('versatilityPercent')}
        tooltip={<p>Total vers, not just the DR portion.</p>}
      />
      <NumericInput
        label="Avoidance (%)"
        value={characterStats.avoidancePercent}
        onChange={onChangeStat('avoidancePercent')}
      />
    </div>
  )
}
