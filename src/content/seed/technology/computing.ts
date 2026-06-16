import type { SeedSubcategory } from '../types';

export const computing: SeedSubcategory = {
  slug: 'computing',
  name: { en: 'Computing', no: 'Databehandling' },
  questions: [
    {
      difficulty: 'easy',
      question: { en: 'What does "CPU" stand for?', no: 'Hva står "CPU" for?' },
      answers: [
        { en: 'Central Processing Unit', no: 'Central Processing Unit' },
        { en: 'Computer Power Unit', no: 'Computer Power Unit' },
        { en: 'Control Program Utility', no: 'Control Program Utility' },
        { en: 'Central Print Unit', no: 'Central Print Unit' }
      ],
      correct: 0,
      explanation: {
        en: 'CPU stands for Central Processing Unit — the primary component that executes instructions.',
        no: 'CPU står for Central Processing Unit — hovedkomponenten som utfører instruksjoner.'
      },
      tags: ['hardware', 'basics']
    },
    {
      difficulty: 'easy',
      question: {
        en: 'What does "HTTP" primarily transfer?',
        no: 'Hva overfører "HTTP" primært?'
      },
      answers: [
        { en: 'Web pages and resources', no: 'Nettsider og ressurser' },
        { en: 'Email only', no: 'Kun e-post' },
        { en: 'Files over FTP', no: 'Filer over FTP' },
        { en: 'Database records', no: 'Databaseoppføringer' }
      ],
      correct: 0,
      explanation: {
        en: 'HTTP (HyperText Transfer Protocol) transfers web content between clients and servers.',
        no: 'HTTP (HyperText Transfer Protocol) overfører nettinnhold mellom klienter og tjenere.'
      },
      tags: ['web', 'protocols']
    },
    {
      difficulty: 'hard',
      question: {
        en: 'What is the average time complexity of a balanced binary search tree lookup?',
        no: 'Hva er gjennomsnittlig tidskompleksitet for oppslag i et balansert binært søketre?'
      },
      answers: [
        { en: 'O(log n)', no: 'O(log n)' },
        { en: 'O(n)', no: 'O(n)' },
        { en: 'O(1)', no: 'O(1)' },
        { en: 'O(n log n)', no: 'O(n log n)' }
      ],
      correct: 0,
      explanation: {
        en: 'A balanced BST keeps height proportional to log n, so lookups run in O(log n).',
        no: 'Et balansert søketre holder høyden proporsjonal med log n, så oppslag kjører i O(log n).'
      },
      tags: ['algorithms', 'complexity']
    }
  ]
};
