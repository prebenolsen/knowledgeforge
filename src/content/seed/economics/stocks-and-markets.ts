import type { SeedSubcategory } from '../types';

export const stocksAndMarkets: SeedSubcategory = {
  slug: 'stocks-and-markets',
  name: { en: 'Stocks and Markets', no: 'Aksjer og markeder' },
  questions: [
    {
      difficulty: 'easy',
      question: {
        en: 'In what country is NASDAQ based?',
        no: 'I hvilket land ligger NASDAQ?'
      },
      answers: [
        { en: 'United States', no: 'USA' },
        { en: 'United Kingdom', no: 'Storbritannia' },
        { en: 'Germany', no: 'Tyskland' },
        { en: 'Japan', no: 'Japan' }
      ],
      correct: 0,
      explanation: {
        en: 'NASDAQ is headquartered in New York City, United States.',
        no: 'NASDAQ har hovedkontor i New York City, USA.'
      },
      tags: ['stock exchanges', 'financial markets']
    },
    {
      difficulty: 'easy',
      question: {
        en: 'Who wrote The Wealth of Nations?',
        no: 'Hvem skrev The Wealth of Nations?'
      },
      answers: [
        { en: 'Adam Smith', no: 'Adam Smith' },
        { en: 'Karl Marx', no: 'Karl Marx' },
        { en: 'John Keynes', no: 'John Keynes' },
        { en: 'David Ricardo', no: 'David Ricardo' }
      ],
      correct: 0,
      explanation: {
        en: 'Adam Smith published The Wealth of Nations in 1776.',
        no: 'Adam Smith publiserte The Wealth of Nations i 1776.'
      },
      tags: ['economics', 'classic works']
    },
    {
      difficulty: 'hard',
      question: {
        en: 'What does a yield curve inversion historically tend to signal?',
        no: 'Hva har en invertert rentekurve historisk pleid å signalisere?'
      },
      answers: [
        { en: 'A possible recession', no: 'En mulig resesjon' },
        { en: 'Rising inflation', no: 'Økende inflasjon' },
        { en: 'A stock rally', no: 'Et aksjerally' },
        { en: 'Currency appreciation', no: 'Styrket valuta' }
      ],
      correct: 0,
      explanation: {
        en: 'When short-term yields exceed long-term yields, it has often preceded recessions.',
        no: 'Når korte renter overstiger lange renter, har det ofte kommet før resesjoner.'
      },
      tags: ['bonds', 'macro']
    }
  ]
};
