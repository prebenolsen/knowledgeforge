import type { SeedCategory } from '../types';
import { ancientGreeceAndDemocracy } from './ancient-greece-and-democracy';
import { civilRightsMovement } from './civil-rights-movement';
import { colonialismAndImperialism } from './colonialism-and-imperialism';
import { decolonization } from './decolonization';
import { modernMiddleEast } from './modern-middle-east';
import { riseOfModernScience } from './rise-of-modern-science';
import { spreadOfMajorReligions } from './spread-of-major-religions';
import { theAgeOfExploration } from './the-age-of-exploration';
import { theAmericanRevolution } from './the-american-revolution';
import { theAtlanticSlaveTrade } from './the-atlantic-slave-trade';
import { theColdWar } from './the-cold-war';
import { theDigitalRevolution } from './the-digital-revolution';
import { theEuropeanUnion } from './the-european-union';
import { theFirstCivilizations } from './the-first-civilizations';
import { theFrenchRevolution } from './the-french-revolution';
import { theHolocaust } from './the-holocaust';
import { theIndustrialRevolution } from './the-industrial-revolution';
import { theMiddleAges } from './the-middle-ages';
import { theRenaissance } from './the-renaissance';
import { theRiseOfChina } from './the-rise-of-china';
import { theRiseOfHumanCivilization } from './the-rise-of-human-civilization';
import { theRomanEmpire } from './the-roman-empire';
import { theRussianRevolution } from './the-russian-revolution';
import { worldWarI } from './world-war-i';
import { worldWarII } from './world-war-ii';

export const history: SeedCategory = {
  slug: 'history',
  name: { en: 'History', no: 'Historie' },
  icon: '🏛️',
  subcategories: [
    theRiseOfHumanCivilization,
    theFirstCivilizations,
    ancientGreeceAndDemocracy,
    theRomanEmpire,
    spreadOfMajorReligions,
    theMiddleAges,
    theRenaissance,
    theAgeOfExploration,
    colonialismAndImperialism,
    theAtlanticSlaveTrade,
    theAmericanRevolution,
    theFrenchRevolution,
    theIndustrialRevolution,
    riseOfModernScience,
    worldWarI,
    theRussianRevolution,
    worldWarII,
    theHolocaust,
    theColdWar,
    civilRightsMovement,
    decolonization,
    theRiseOfChina,
    modernMiddleEast,
    theEuropeanUnion,
    theDigitalRevolution
  ]
};
