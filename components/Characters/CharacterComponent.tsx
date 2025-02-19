import {
  Character,
  CharacterStatsInput,
  Profile,
  UpdateCharacter,
} from '../../backend/characters'
import { CharacterStatsForm } from './CharacterStatsForm'
import { ClassDropdown } from '../Abilities/ClassDropdown'
import { AbilitySelect } from '../Abilities/AbilitySelect'
import { classSpecs, ClassSpec } from '../../backend/classes'
import { LabelledAbilitySelect } from '../Abilities/LabelledAbilitySelect'
import { externals } from '../../backend/groupAbilities/externals'
import { useCallback } from 'react'
import { Ability } from '../../backend/ability'
import dynamic from 'next/dynamic'
import { CreateProfile } from './CreateProfile'
import { LoadProfile } from './LoadProfile'
import { TooltipStyled } from '../Common/TooltipStyled'

interface Props {
  idx: number
  character: Character
  profiles: Profile[]
  updateCharacter: UpdateCharacter
  canRemove: boolean
  removeCharacter: () => void
  handlePaste: () => void
  saveProfile: (name: string) => void
  loadProfile: (profile: Profile | null) => void
  deleteProfile: (profileId: string) => void
}

const PasteButtonNoSsr = dynamic(
  () => import('./PasteButton').then((mod) => mod.PasteButton),
  { ssr: false }
)

export function CharacterComponent({
  idx,
  character,
  profiles,
  updateCharacter,
  canRemove,
  removeCharacter,
  handlePaste,
  saveProfile,
  loadProfile,
  deleteProfile,
}: Props) {
  const setCharacterStats = useCallback(
    (stats: CharacterStatsInput) => updateCharacter({ stats }),
    [updateCharacter]
  )

  const setAbilities = useCallback(
    (abilities: Ability[]) => updateCharacter({ abilities }),
    [updateCharacter]
  )

  const setExternals = useCallback(
    (newExternals: Ability[]) => updateCharacter({ externals: newExternals }),
    [updateCharacter]
  )

  const setSpec = useCallback(
    (spec: ClassSpec) => updateCharacter({ classSpec: spec }),
    [updateCharacter]
  )

  const specAbilities =
    classSpecs[character.classSpec.class][character.classSpec.spec].abilities

  const loadedProfile = profiles.find(
    (profile) => profile.id === character.loadedProfileId
  )

  return (
    <div className="flex flex-col items-start gap-3 w-full">
      <div className="flex justify-between w-full">
        <CharacterStatsForm
          characterStats={character.stats}
          onChange={setCharacterStats}
        />
        <div className="flex flex-col gap-2 items-end">
          <div className="flex gap-2 h-fit">
            <CreateProfile idx={idx} createProfile={saveProfile} />
            <LoadProfile
              idx={idx}
              profiles={profiles}
              loadedProfileId={character.loadedProfileId}
              loadProfile={loadProfile}
              deleteProfile={deleteProfile}
            />
            <PasteButtonNoSsr handlePaste={handlePaste} idx={idx} />

            {canRemove && (
              <div
                className="cursor-pointer text-teal-500"
                onClick={removeCharacter}
                data-tooltip-id={`delete-character-${idx}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <TooltipStyled id={`delete-character-${idx}`}>
                  Remove character
                </TooltipStyled>
              </div>
            )}
          </div>
          {loadedProfile && (
            <div className="flex gap-1">
              <div>Editing:</div>
              <div>{loadedProfile.name}</div>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4 items-start flex-col md:flex-row md:items-center">
        <ClassDropdown onChange={setSpec} selectedClassSpec={character.classSpec} />
        <AbilitySelect
          character={character}
          availableAbilities={specAbilities}
          selectedAbilities={character.abilities}
          setSelectedAbilities={setAbilities}
        />
      </div>

      <LabelledAbilitySelect
        label="Externals"
        availableAbilities={externals}
        selectedAbilities={character.externals}
        setSelectedAbilities={setExternals}
      />
    </div>
  )
}
