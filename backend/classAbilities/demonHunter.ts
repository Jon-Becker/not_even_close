﻿import { Ability } from '../ability'

export const demonicWards: Ability = {
  name: 'Demonic Wards',
  spellId: 203513,
  onByDefault: true,
  dr: 0.1,
  drType: 'magic',
  iconName: 'inv_belt_leather_demonhunter_a_01',
  wowheadLink: 'https://www.wowhead.com/spell=320381/demonic-wards',
}

export const illidariKnowledge: Ability = {
  name: 'Illidari Knowledge',
  spellId: 389696,
  onByDefault: true,
  dr: 0.05,
  drType: 'magic',
  iconName: 'spell_mage_overpowered',
  wowheadLink: 'https://www.wowhead.com/spell=389696/illidari-knowledge',
}

export const willOfTheIllidari: Ability = {
  name: 'Will of the Illidari',
  spellId: 389695,
  onByDefault: true,
  healthIncrease: 0.05,
  iconName: 'ability_demonhunter_spectank',
  wowheadLink: 'https://www.wowhead.com/spell=389695/will-of-the-illidari',
}

export const blur: Ability = {
  name: 'Blur',
  spellId: 198589,
  dr: 0.2,
  iconName: 'ability_demonhunter_blur',
  wowheadLink: 'https://www.wowhead.com/spell=212800/blur',
}

export const deflectingDance: Ability = {
  name: 'Deflecting Dance',
  spellId: 427776,
  absorbHealthMultiplier: 0.15,
  iconName: 'ability_ironmaidens_bladerush',
  wowheadLink: 'https://www.wowhead.com/spell=427776/deflecting-dance',
}

export const demonMuzzle: Ability = {
  name: 'Demon Muzzle',
  spellId: 388111,
  dr: 0.08,
  drType: 'magic',
  iconName: 'spell_fire_fireballgreen',
}

export const demonHide: Ability = {
  name: 'Demon Hide',
  spellId: 428241,
  onByDefault: true,
  dr: 0.05,
  drType: 'physical',
  iconName: 'misc_legionfall_demonhunter',
}

export const havocAbilities = [
  demonicWards,
  illidariKnowledge,
  demonHide,
  willOfTheIllidari,
  demonMuzzle,
  deflectingDance,
  blur,
]
