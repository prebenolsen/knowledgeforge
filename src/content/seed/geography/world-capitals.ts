import type { SeedSubcategory } from '../types';

export const worldCapitals: SeedSubcategory = {
  slug: 'world-capitals',
  name: { en: 'World Capitals', no: 'Verdens hovedsteder' },
  modules: [
    {
      slug: 'world-geography-basics',
      name: { en: 'World Geography Basics', no: 'Grunnleggende verdensgeografi' },
      questions: [
        {
          difficulty: 'easy',
          question: { en: 'What is the capital of Japan?', no: 'Hva er hovedstaden i Japan?' },
          answers: [
            { en: 'Tokyo', no: 'Tokyo' },
            { en: 'Kyoto', no: 'Kyoto' },
            { en: 'Osaka', no: 'Osaka' },
            { en: 'Seoul', no: 'Seoul' }
          ],
          correct: 0,
          explanation: {
            en: 'Tokyo has been the capital of Japan since 1868.',
            no: 'Tokyo har vært hovedstaden i Japan siden 1868.'
          },
          tags: ['capitals', 'asia']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Which river is the longest in the world?',
            no: 'Hvilken elv er den lengste i verden?'
          },
          answers: [
            { en: 'The Nile', no: 'Nilen' },
            { en: 'The Amazon', no: 'Amazonas' },
            { en: 'The Yangtze', no: 'Yangtze' },
            { en: 'The Mississippi', no: 'Mississippi' }
          ],
          correct: 0,
          explanation: {
            en: 'The Nile is generally considered the longest river at about 6,650 km, though the Amazon is contested.',
            no: 'Nilen regnes vanligvis som den lengste elven på rundt 6 650 km, selv om Amazonas er omdiskutert.'
          },
          tags: ['rivers', 'physical geography']
        }
      ]
    }
  ]
};
