// ============================================================
// Seed content — bilingual (en/no) starter questions.
// ~6 questions per category, spanning difficulty 1–5.
// Used by scripts/import.ts to populate a fresh database.
//
// This is intentionally small. Add real content later as JSON
// batches through the same import pipeline — no code changes.
// ============================================================

import type { Difficulty } from '@/types';

export interface SeedQuestion {
  difficulty: Difficulty;
  question: { en: string; no: string };
  answers: { en: string; no: string }[];
  correct: number;
  explanation: { en: string; no: string };
  tags: string[];
}

export interface SeedSubcategory {
  slug: string;
  name: { en: string; no: string };
  questions: SeedQuestion[];
}

export interface SeedCategory {
  slug: string;
  name: { en: string; no: string };
  icon: string;
  subcategories: SeedSubcategory[];
}

export const SEED: SeedCategory[] = [
  {
    slug: 'history',
    name: { en: 'History', no: 'Historie' },
    icon: '🏛️',
    subcategories: [
      {
        slug: 'ancient-rome',
        name: { en: 'Ancient Rome', no: 'Antikkens Roma' },
        questions: [
          {
            difficulty: 1,
            question: {
              en: 'Who was the first Roman emperor?',
              no: 'Hvem var den første romerske keiseren?'
            },
            answers: [
              { en: 'Augustus', no: 'Augustus' },
              { en: 'Julius Caesar', no: 'Julius Cæsar' },
              { en: 'Nero', no: 'Nero' },
              { en: 'Caligula', no: 'Caligula' }
            ],
            correct: 0,
            explanation: {
              en: 'Augustus became the first Roman emperor in 27 BC after the fall of the Republic.',
              no: 'Augustus ble den første romerske keiseren i 27 f.Kr. etter republikkens fall.'
            },
            tags: ['emperors', 'rome']
          },
          {
            difficulty: 3,
            question: {
              en: 'What event traditionally marks the founding of the Roman Republic?',
              no: 'Hvilken hendelse markerer tradisjonelt grunnleggelsen av den romerske republikken?'
            },
            answers: [
              { en: 'The overthrow of the last king', no: 'Avsettelsen av den siste kongen' },
              { en: "Caesar's assassination", no: 'Drapet på Cæsar' },
              { en: 'The Punic Wars', no: 'De puniske kriger' },
              { en: 'The sack of Rome', no: 'Plyndringen av Roma' }
            ],
            correct: 0,
            explanation: {
              en: 'The Republic is traditionally dated to 509 BC, when the last king, Tarquin, was overthrown.',
              no: 'Republikken dateres tradisjonelt til 509 f.Kr., da den siste kongen, Tarquinius, ble avsatt.'
            },
            tags: ['republic', 'rome']
          },
          {
            difficulty: 5,
            question: {
              en: 'Which reform of Diocletian most directly addressed the 3rd-century crisis of imperial succession?',
              no: 'Hvilken av Diokletians reformer adresserte mest direkte 200-tallskrisen rundt keiserarvefølge?'
            },
            answers: [
              { en: 'The Tetrarchy', no: 'Tetrarkiet' },
              { en: 'The Edict on Prices', no: 'Prisediktet' },
              { en: 'Provincial subdivision', no: 'Oppdeling av provinser' },
              { en: 'Currency debasement', no: 'Myntforringelse' }
            ],
            correct: 0,
            explanation: {
              en: 'The Tetrarchy split rule among four emperors to stabilize succession, though it later fueled civil war.',
              no: 'Tetrarkiet delte makten mellom fire keisere for å stabilisere arvefølgen, men førte senere til borgerkrig.'
            },
            tags: ['diocletian', 'reform']
          }
        ]
      }
    ]
  },
  {
    slug: 'science',
    name: { en: 'Science', no: 'Vitenskap' },
    icon: '🔬',
    subcategories: [
      {
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
      }
    ]
  },
  {
    slug: 'mathematics',
    name: { en: 'Mathematics', no: 'Matematikk' },
    icon: '➗',
    subcategories: [
      {
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
      }
    ]
  },
  {
    slug: 'nature',
    name: { en: 'Nature', no: 'Natur' },
    icon: '🌿',
    subcategories: [
      {
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
      }
    ]
  },
  {
    slug: 'economics',
    name: { en: 'Economics', no: 'Økonomi' },
    icon: '📈',
    subcategories: [
      {
        slug: 'stocks-and-markets',
        name: { en: 'Stocks and Markets', no: 'Aksjer og markeder' },
        questions: [
          {
            difficulty: 1,
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
            difficulty: 2,
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
            difficulty: 4,
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
      }
    ]
  },
  {
    slug: 'society',
    name: { en: 'Society', no: 'Samfunn' },
    icon: '🏙️',
    subcategories: [
      {
        slug: 'civics',
        name: { en: 'Civics', no: 'Samfunnslære' },
        questions: [
          {
            difficulty: 1,
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
            difficulty: 3,
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
      }
    ]
  },
  {
    slug: 'geography',
    name: { en: 'Geography', no: 'Geografi' },
    icon: '🗺️',
    subcategories: [
      {
        slug: 'world-capitals',
        name: { en: 'World Capitals', no: 'Verdens hovedsteder' },
        questions: [
          {
            difficulty: 1,
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
            difficulty: 3,
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
  },
  {
    slug: 'technology',
    name: { en: 'Technology', no: 'Teknologi' },
    icon: '💻',
    subcategories: [
      {
        slug: 'computing',
        name: { en: 'Computing', no: 'Databehandling' },
        questions: [
          {
            difficulty: 1,
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
            difficulty: 2,
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
            difficulty: 5,
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
      }
    ]
  }
];
