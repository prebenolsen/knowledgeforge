import type { SeedSubcategory } from '../types';

export const arithmetic: SeedSubcategory = {
  slug: 'arithmetic',
  name: { en: 'Arithmetic', no: 'Aritmetikk' },
  questions: [
    {
      difficulty: 1,
      question: { en: 'What is 7 × 8?', no: 'Hva er 7 × 8?' },
      answers: [
        { en: '56', no: '56' },
        { en: '54', no: '54' },
        { en: '64', no: '64' },
        { en: '49', no: '49' }
      ],
      correct: 0,
      explanation: { en: '7 × 8 = 56.', no: '7 × 8 = 56.' },
      tags: ['multiplication']
    },
    {
      difficulty: 3,
      question: {
        en: 'What is the value of 3² + 4²?',
        no: 'Hva er verdien av 3² + 4²?'
      },
      answers: [
        { en: '25', no: '25' },
        { en: '49', no: '49' },
        { en: '12', no: '12' },
        { en: '14', no: '14' }
      ],
      correct: 0,
      explanation: {
        en: '9 + 16 = 25. (Also the 3-4-5 right triangle.)',
        no: '9 + 16 = 25. (Også den rettvinklede 3-4-5-trekanten.)'
      },
      tags: ['exponents', 'pythagoras']
    },
    {
      difficulty: 5,
      question: {
        en: 'What is the derivative of sin(x) with respect to x?',
        no: 'Hva er den deriverte av sin(x) med hensyn på x?'
      },
      answers: [
        { en: 'cos(x)', no: 'cos(x)' },
        { en: '−cos(x)', no: '−cos(x)' },
        { en: '−sin(x)', no: '−sin(x)' },
        { en: 'tan(x)', no: 'tan(x)' }
      ],
      correct: 0,
      explanation: {
        en: 'The derivative of sin(x) is cos(x).',
        no: 'Den deriverte av sin(x) er cos(x).'
      },
      tags: ['calculus', 'derivatives']
    }
  ]
};
