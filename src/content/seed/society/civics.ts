import type { SeedSubcategory } from '../types';

export const civics: SeedSubcategory = {
  slug: 'civics',
  name: { en: 'Civics', no: 'Samfunnslære' },
  questions: [
    {
      difficulty: 'easy',
      question: {
        en: 'What is the capital of Norway?',
        no: 'Hva er hovedstaden i Norge?'
      },
      answers: [
        { en: 'Oslo', no: 'Oslo' },
        { en: 'Bergen', no: 'Bergen' },
        { en: 'Trondheim', no: 'Trondheim' },
        { en: 'Stavanger', no: 'Stavanger' }
      ],
      correct: 0,
      explanation: {
        en: 'Oslo is the capital and most populous city of Norway.',
        no: 'Oslo er hovedstaden og den mest folkerike byen i Norge.'
      },
      tags: ['government', 'norway']
    },
    {
      difficulty: 'medium',
      question: {
        en: 'What system of government does Norway have?',
        no: 'Hvilken styreform har Norge?'
      },
      answers: [
        { en: 'Constitutional monarchy', no: 'Konstitusjonelt monarki' },
        { en: 'Republic', no: 'Republikk' },
        { en: 'Direct democracy', no: 'Direkte demokrati' },
        { en: 'Federation', no: 'Føderasjon' }
      ],
      correct: 0,
      explanation: {
        en: 'Norway is a constitutional monarchy with a parliamentary system.',
        no: 'Norge er et konstitusjonelt monarki med et parlamentarisk system.'
      },
      tags: ['government', 'norway']
    }
  ]
};
