import type { SeedSubcategory } from '../types';

export const physics: SeedSubcategory = {
  slug: 'physics',
  name: { en: 'Physics', no: 'Fysikk' },
  questions: [
    {
      difficulty: 1,
      question: {
        en: 'What force pulls objects toward the Earth?',
        no: 'Hvilken kraft trekker gjenstander mot jorda?'
      },
      answers: [
        { en: 'Gravity', no: 'Tyngdekraft' },
        { en: 'Friction', no: 'Friksjon' },
        { en: 'Magnetism', no: 'Magnetisme' },
        { en: 'Tension', no: 'Strekk' }
      ],
      correct: 0,
      explanation: {
        en: 'Gravity is the attractive force between masses; Earth pulls objects toward its center.',
        no: 'Tyngdekraft er tiltrekningen mellom masser; jorda trekker gjenstander mot sentrum.'
      },
      tags: ['gravity', 'forces']
    },
    {
      difficulty: 2,
      question: {
        en: 'What is the SI unit of electric current?',
        no: 'Hva er SI-enheten for elektrisk strøm?'
      },
      answers: [
        { en: 'Ampere', no: 'Ampere' },
        { en: 'Volt', no: 'Volt' },
        { en: 'Watt', no: 'Watt' },
        { en: 'Ohm', no: 'Ohm' }
      ],
      correct: 0,
      explanation: {
        en: 'The ampere (A) measures electric current — the flow of electric charge per second.',
        no: 'Ampere (A) måler elektrisk strøm — mengden ladning som passerer per sekund.'
      },
      tags: ['units', 'electricity']
    },
    {
      difficulty: 4,
      question: {
        en: "Why does time pass more slowly near a massive object, per general relativity?",
        no: 'Hvorfor går tiden saktere nær et massivt objekt, ifølge generell relativitet?'
      },
      answers: [
        { en: 'Spacetime curvature', no: 'Krumning av romtid' },
        { en: 'Air resistance', no: 'Luftmotstand' },
        { en: 'Magnetic fields', no: 'Magnetfelt' },
        { en: 'Faster light speed', no: 'Raskere lyshastighet' }
      ],
      correct: 0,
      explanation: {
        en: 'Mass curves spacetime; clocks deeper in a gravitational well tick slower — gravitational time dilation.',
        no: 'Masse krummer romtid; klokker dypere i en gravitasjonsbrønn går saktere — gravitasjonell tidsutvidelse.'
      },
      tags: ['relativity', 'spacetime']
    }
  ]
};
