import type { SeedSubcategory } from '../types';

export const biology: SeedSubcategory = {
  slug: 'biology',
  name: { en: 'Biology', no: 'Biologi' },
  questions: [
    {
      difficulty: 1,
      question: {
        en: 'What gas do plants absorb for photosynthesis?',
        no: 'Hvilken gass tar planter opp til fotosyntese?'
      },
      answers: [
        { en: 'Carbon dioxide', no: 'Karbondioksid' },
        { en: 'Oxygen', no: 'Oksygen' },
        { en: 'Nitrogen', no: 'Nitrogen' },
        { en: 'Hydrogen', no: 'Hydrogen' }
      ],
      correct: 0,
      explanation: {
        en: 'Plants take in CO₂ and release O₂ during photosynthesis.',
        no: 'Planter tar opp CO₂ og slipper ut O₂ under fotosyntesen.'
      },
      tags: ['photosynthesis', 'plants']
    },
    {
      difficulty: 2,
      question: {
        en: 'Which organelle is the "powerhouse" of the cell?',
        no: 'Hvilken organell er cellens "kraftverk"?'
      },
      answers: [
        { en: 'Mitochondrion', no: 'Mitokondrie' },
        { en: 'Nucleus', no: 'Cellekjerne' },
        { en: 'Ribosome', no: 'Ribosom' },
        { en: 'Golgi apparatus', no: 'Golgiapparat' }
      ],
      correct: 0,
      explanation: {
        en: 'Mitochondria produce ATP, the cell’s main energy currency.',
        no: 'Mitokondrier produserer ATP, cellens viktigste energivaluta.'
      },
      tags: ['cells', 'organelles']
    },
    {
      difficulty: 4,
      question: {
        en: 'In DNA replication, which enzyme unwinds the double helix?',
        no: 'I DNA-replikasjon, hvilket enzym vikler ut dobbelheliksen?'
      },
      answers: [
        { en: 'Helicase', no: 'Helikase' },
        { en: 'Ligase', no: 'Ligase' },
        { en: 'Polymerase', no: 'Polymerase' },
        { en: 'Primase', no: 'Primase' }
      ],
      correct: 0,
      explanation: {
        en: 'Helicase unwinds and separates the two DNA strands at the replication fork.',
        no: 'Helikase vikler ut og skiller de to DNA-trådene ved replikasjonsgaffelen.'
      },
      tags: ['dna', 'enzymes']
    }
  ]
};
