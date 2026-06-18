// ============================================================
// KnowledgeForge — Timeline event dataset (bilingual en/no).
//
// Hand-authored seed content for the History Timeline game. Each event carries
// a canonical `year` (negative = BCE) used for grading, optional start/end
// years for multi-year events, and the regional/thematic timelines it belongs
// to. This is a starter set — more events are added in later content passes.
// ============================================================

import type { TimelineEvent } from '@/types';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  // ---- Ancient World (3000 BCE – 500 CE) ----
  {
    id: 'great-pyramid-giza',
    title: { en: 'Great Pyramid of Giza built', no: 'Den store pyramiden i Giza bygd' },
    year: -2560,
    regions: ['africa', 'world'],
    description: {
      en: 'Egyptians completed the Great Pyramid as a tomb for the pharaoh Khufu.',
      no: 'Egypterne fullførte Kheopspyramiden som gravkammer for farao Khufu.'
    },
    significance: {
      en: 'The oldest of the Seven Wonders of the Ancient World and the tallest human-made structure for nearly 4,000 years.',
      no: 'Det eldste av oldtidens sju underverker og verdens høyeste byggverk i nesten 4 000 år.'
    }
  },
  {
    id: 'code-of-hammurabi',
    title: { en: 'Code of Hammurabi', no: 'Hammurabis lover' },
    year: -1754,
    regions: ['middle-east', 'world'],
    description: {
      en: 'The Babylonian king Hammurabi issued one of the earliest written legal codes.',
      no: 'Den babylonske kongen Hammurabi innførte en av de tidligste nedskrevne lovsamlingene.'
    },
    significance: {
      en: 'An early example of the rule of law, famous for the principle of proportional punishment.',
      no: 'Et tidlig eksempel på rettsstaten, kjent for prinsippet om gjengjeldelse.'
    }
  },
  {
    id: 'first-olympic-games',
    title: { en: 'First Olympic Games', no: 'De første olympiske leker' },
    year: -776,
    regions: ['europe', 'world'],
    description: {
      en: 'The first recorded Olympic Games were held at Olympia in ancient Greece.',
      no: 'De første nedtegnede olympiske lekene ble holdt i Olympia i antikkens Hellas.'
    },
    significance: {
      en: 'Began a sporting tradition revived as the modern Olympics in 1896.',
      no: 'Startet en idrettstradisjon som ble gjenopplivet som de moderne OL i 1896.'
    }
  },
  {
    id: 'founding-of-rome',
    title: { en: 'Traditional founding of Rome', no: 'Roms tradisjonelle grunnleggelse' },
    year: -753,
    regions: ['europe'],
    description: {
      en: 'According to legend, Romulus founded the city of Rome.',
      no: 'Ifølge legenden grunnla Romulus byen Roma.'
    },
    significance: {
      en: 'Marks the mythical start of a civilization that would dominate the Mediterranean.',
      no: 'Markerer den mytiske begynnelsen på en sivilisasjon som skulle dominere Middelhavet.'
    }
  },
  {
    id: 'birth-of-confucius',
    title: { en: 'Birth of Confucius', no: 'Konfucius blir født' },
    year: -551,
    regions: ['asia'],
    description: {
      en: 'The philosopher Confucius was born in the state of Lu in China.',
      no: 'Filosofen Konfucius ble født i staten Lu i Kina.'
    },
    significance: {
      en: 'His teachings on ethics and social harmony shaped East Asian thought for millennia.',
      no: 'Læren hans om etikk og sosial harmoni preget østasiatisk tenkning i årtusener.'
    }
  },
  {
    id: 'athenian-democracy',
    title: { en: 'Birth of Athenian democracy', no: 'Det athenske demokratiet oppstår' },
    year: -508,
    regions: ['europe', 'world'],
    description: {
      en: 'Cleisthenes introduced reforms that gave citizens a direct say in government.',
      no: 'Kleisthenes innførte reformer som ga borgerne direkte innflytelse over styret.'
    },
    significance: {
      en: 'Established the first known democracy and a model for later representative government.',
      no: 'Etablerte det første kjente demokratiet og en modell for senere folkestyre.'
    }
  },
  {
    id: 'battle-of-marathon',
    title: { en: 'Battle of Marathon', no: 'Slaget ved Marathon' },
    year: -490,
    regions: ['europe', 'military'],
    description: {
      en: 'Athenian forces defeated the invading Persian army on the plain of Marathon.',
      no: 'Athenske styrker beseiret den invaderende persiske hæren på Marathon-sletten.'
    },
    significance: {
      en: 'Preserved Greek independence and inspired the long-distance running event.',
      no: 'Bevarte gresk uavhengighet og ga navn til langdistanseløpet maraton.'
    }
  },
  {
    id: 'death-of-alexander',
    title: { en: 'Death of Alexander the Great', no: 'Aleksander den stores død' },
    year: -323,
    regions: ['europe', 'asia', 'military'],
    description: {
      en: 'Alexander the Great died in Babylon, having conquered an empire from Greece to India.',
      no: 'Aleksander den store døde i Babylon etter å ha erobret et rike fra Hellas til India.'
    },
    significance: {
      en: 'His conquests spread Greek culture across the ancient world (the Hellenistic age).',
      no: 'Erobringene hans spredte gresk kultur over den antikke verden (hellenismen).'
    }
  },
  {
    id: 'qin-unifies-china',
    title: { en: 'Qin unifies China', no: 'Qin samler Kina' },
    year: -221,
    regions: ['asia', 'military'],
    description: {
      en: 'Qin Shi Huang united the warring states into the first Chinese empire.',
      no: 'Qin Shi Huang forente de stridende statene til det første kinesiske keiserriket.'
    },
    significance: {
      en: 'Standardized writing, currency and measures, and began the Great Wall.',
      no: 'Standardiserte skrift, mynt og mål, og påbegynte Den kinesiske mur.'
    }
  },
  {
    id: 'assassination-of-caesar',
    title: { en: 'Assassination of Julius Caesar', no: 'Mordet på Julius Cæsar' },
    year: -44,
    regions: ['europe', 'military'],
    description: {
      en: 'Roman senators assassinated Julius Caesar on the Ides of March.',
      no: 'Romerske senatorer myrdet Julius Cæsar på martsidene.'
    },
    significance: {
      en: 'Triggered civil wars that ended the Roman Republic.',
      no: 'Utløste borgerkriger som gjorde slutt på den romerske republikken.'
    }
  },
  {
    id: 'roman-empire-founded',
    title: { en: 'Roman Empire founded', no: 'Romerriket grunnlegges' },
    year: -27,
    regions: ['europe'],
    description: {
      en: 'Augustus became the first Roman emperor, ending the Republic.',
      no: 'Augustus ble den første romerske keiseren og avsluttet republikken.'
    },
    significance: {
      en: 'Began the Pax Romana, two centuries of relative peace and expansion.',
      no: 'Innledet Pax Romana, to århundrer med relativ fred og ekspansjon.'
    }
  },
  {
    id: 'fall-of-western-rome',
    title: { en: 'Fall of the Western Roman Empire', no: 'Vestromerrikets fall' },
    year: 476,
    regions: ['europe', 'military', 'world'],
    description: {
      en: 'The last Western Roman emperor, Romulus Augustulus, was deposed.',
      no: 'Den siste vestromerske keiseren, Romulus Augustulus, ble avsatt.'
    },
    significance: {
      en: 'Conventionally marks the end of antiquity and the start of the Middle Ages.',
      no: 'Markerer tradisjonelt slutten på antikken og begynnelsen på middelalderen.'
    }
  },

  // ---- Middle Ages (500 – 1500) ----
  {
    id: 'hijra-islam',
    title: { en: 'The Hijra and birth of Islam', no: 'Hijra og islams fremvekst' },
    year: 622,
    regions: ['middle-east', 'world'],
    description: {
      en: 'Muhammad migrated from Mecca to Medina, year one of the Islamic calendar.',
      no: 'Muhammad utvandret fra Mekka til Medina, år én i den islamske kalenderen.'
    },
    significance: {
      en: 'Marks the founding of the Muslim community and the spread of a major world religion.',
      no: 'Markerer grunnleggelsen av det muslimske samfunnet og spredningen av en stor verdensreligion.'
    }
  },
  {
    id: 'lindisfarne-raid',
    title: { en: 'Viking raid on Lindisfarne', no: 'Vikingtoktet mot Lindisfarne' },
    year: 793,
    regions: ['europe', 'military'],
    description: {
      en: 'Norse raiders attacked the monastery of Lindisfarne in England.',
      no: 'Norrøne vikinger angrep klosteret på Lindisfarne i England.'
    },
    significance: {
      en: 'Commonly cited as the start of the Viking Age in Europe.',
      no: 'Regnes ofte som begynnelsen på vikingtiden i Europa.'
    }
  },
  {
    id: 'charlemagne-crowned',
    title: { en: 'Charlemagne crowned emperor', no: 'Karl den store kronet til keiser' },
    year: 800,
    regions: ['europe'],
    description: {
      en: 'The Pope crowned Charlemagne Emperor of the Romans on Christmas Day.',
      no: 'Paven kronet Karl den store til romernes keiser på juledagen.'
    },
    significance: {
      en: 'Revived the idea of empire in Western Europe and tied it to the Church.',
      no: 'Gjenopplivet tanken om et keiserrike i Vest-Europa og knyttet det til kirken.'
    }
  },
  {
    id: 'battle-of-hastings',
    title: { en: 'Battle of Hastings', no: 'Slaget ved Hastings' },
    year: 1066,
    regions: ['europe', 'military'],
    description: {
      en: 'William of Normandy defeated King Harold to conquer England.',
      no: 'Vilhelm av Normandie beseiret kong Harald og erobret England.'
    },
    significance: {
      en: 'The Norman Conquest reshaped English language, law and rule.',
      no: 'Den normanniske erobringen omformet engelsk språk, lov og styre.'
    }
  },
  {
    id: 'first-crusade',
    title: { en: 'First Crusade begins', no: 'Det første korstoget begynner' },
    year: 1096,
    regions: ['europe', 'middle-east', 'military'],
    description: {
      en: 'European Christians set out to capture the Holy Land from Muslim rule.',
      no: 'Europeiske kristne dro ut for å erobre Det hellige land fra muslimsk styre.'
    },
    significance: {
      en: 'Began two centuries of Crusades that linked and clashed Europe and the Middle East.',
      no: 'Innledet to århundrer med korstog som knyttet sammen og satte Europa og Midtøsten opp mot hverandre.'
    }
  },
  {
    id: 'genghis-khan-mongols',
    title: { en: 'Genghis Khan unites the Mongols', no: 'Djengis Khan samler mongolene' },
    year: 1206,
    regions: ['asia', 'military'],
    description: {
      en: 'Temüjin was proclaimed Genghis Khan, uniting the Mongol tribes.',
      no: 'Temüjin ble utropt til Djengis Khan og forente mongolstammene.'
    },
    significance: {
      en: 'Launched the largest contiguous land empire in history.',
      no: 'Grunnla det største sammenhengende landriket i historien.'
    }
  },
  {
    id: 'magna-carta',
    title: { en: 'Magna Carta sealed', no: 'Magna Carta beseglet' },
    year: 1215,
    regions: ['europe', 'world'],
    description: {
      en: 'English barons forced King John to accept limits on royal power.',
      no: 'Engelske baroner tvang kong Johan til å godta grenser for kongemakten.'
    },
    significance: {
      en: 'A landmark for the principle that rulers are subject to the law.',
      no: 'En milepæl for prinsippet om at herskere er underlagt loven.'
    }
  },
  {
    id: 'black-death',
    title: { en: 'The Black Death', no: 'Svartedauden' },
    year: 1347,
    startYear: 1347,
    endYear: 1351,
    regions: ['europe', 'world'],
    description: {
      en: 'A plague pandemic swept through Europe, killing a third of its population.',
      no: 'En pestpandemi feide gjennom Europa og drepte en tredjedel av befolkningen.'
    },
    significance: {
      en: 'Reshaped medieval society, labour and the economy for generations.',
      no: 'Omformet middelaldersamfunnet, arbeidslivet og økonomien i generasjoner.'
    }
  },
  {
    id: 'fall-of-constantinople',
    title: { en: 'Fall of Constantinople', no: 'Konstantinopels fall' },
    year: 1453,
    regions: ['europe', 'middle-east', 'military', 'world'],
    description: {
      en: 'Ottoman forces captured Constantinople, ending the Byzantine Empire.',
      no: 'Osmanske styrker erobret Konstantinopel og gjorde slutt på Det bysantinske riket.'
    },
    significance: {
      en: 'Closed the Middle Ages and pushed Europe to seek new trade routes east.',
      no: 'Avsluttet middelalderen og fikk Europa til å søke nye handelsruter mot øst.'
    }
  },

  // ---- Renaissance & Exploration (1400 – 1800) ----
  {
    id: 'gutenberg-press',
    title: { en: 'Gutenberg printing press', no: 'Gutenbergs trykkpresse' },
    year: 1440,
    regions: ['europe', 'science', 'world'],
    description: {
      en: 'Johannes Gutenberg developed movable-type printing in Europe.',
      no: 'Johannes Gutenberg utviklet boktrykk med løse typer i Europa.'
    },
    significance: {
      en: 'Made books affordable and spread knowledge, fueling the Renaissance and Reformation.',
      no: 'Gjorde bøker rimelige og spredte kunnskap, og næret renessansen og reformasjonen.'
    }
  },
  {
    id: 'columbus-americas',
    title: { en: 'Columbus reaches the Americas', no: 'Columbus når Amerika' },
    year: 1492,
    regions: ['americas', 'europe', 'world'],
    description: {
      en: 'Christopher Columbus crossed the Atlantic and landed in the Caribbean.',
      no: 'Christoffer Columbus krysset Atlanterhavet og gikk i land i Karibia.'
    },
    significance: {
      en: 'Opened sustained contact between Europe and the Americas, transforming both.',
      no: 'Åpnet varig kontakt mellom Europa og Amerika og forandret begge.'
    }
  },
  {
    id: 'mona-lisa',
    title: { en: 'Leonardo paints the Mona Lisa', no: 'Leonardo maler Mona Lisa' },
    year: 1503,
    regions: ['europe'],
    description: {
      en: 'Leonardo da Vinci began painting his famous portrait, the Mona Lisa.',
      no: 'Leonardo da Vinci begynte å male sitt berømte portrett, Mona Lisa.'
    },
    significance: {
      en: 'An icon of Renaissance art and one of the most recognized paintings in the world.',
      no: 'Et ikon for renessansekunsten og et av verdens mest gjenkjennelige malerier.'
    }
  },
  {
    id: '95-theses',
    title: { en: "Luther's 95 Theses", no: 'Luthers 95 teser' },
    year: 1517,
    regions: ['europe', 'world'],
    description: {
      en: 'Martin Luther challenged Church practices, sparking the Reformation.',
      no: 'Martin Luther utfordret kirkens praksis og utløste reformasjonen.'
    },
    significance: {
      en: 'Split Western Christianity and reshaped European religion and politics.',
      no: 'Splittet vestlig kristendom og omformet europeisk religion og politikk.'
    }
  },
  {
    id: 'magellan-circumnavigation',
    title: { en: 'First circumnavigation of the globe', no: 'Den første jordomseilingen' },
    year: 1519,
    startYear: 1519,
    endYear: 1522,
    regions: ['world', 'europe'],
    description: {
      en: "Magellan's expedition set out and became the first to sail around the world.",
      no: 'Magellans ekspedisjon la ut og ble den første til å seile rundt jorden.'
    },
    significance: {
      en: 'Proved the Earth could be circled by sea and revealed its true scale.',
      no: 'Beviste at jorden kunne omseiles og avslørte dens sanne størrelse.'
    }
  },
  {
    id: 'copernicus-heliocentric',
    title: { en: 'Copernicus publishes heliocentrism', no: 'Kopernikus publiserer det heliosentriske syn' },
    year: 1543,
    regions: ['europe', 'science'],
    description: {
      en: 'Copernicus argued that the Earth and planets orbit the Sun.',
      no: 'Kopernikus hevdet at jorden og planetene kretser rundt solen.'
    },
    significance: {
      en: 'Began the Scientific Revolution and a new view of humanity’s place in the cosmos.',
      no: 'Innledet den vitenskapelige revolusjonen og et nytt syn på menneskets plass i universet.'
    }
  },
  {
    id: 'galileo-telescope',
    title: { en: 'Galileo turns a telescope to the sky', no: 'Galilei retter kikkerten mot himmelen' },
    year: 1610,
    regions: ['europe', 'science'],
    description: {
      en: 'Galileo observed moons of Jupiter and craters on the Moon.',
      no: 'Galilei observerte Jupiters måner og kratere på Månen.'
    },
    significance: {
      en: 'Provided evidence for heliocentrism and modern observational astronomy.',
      no: 'Ga belegg for det heliosentriske synet og moderne observasjonsastronomi.'
    }
  },
  {
    id: 'newton-principia',
    title: { en: "Newton's Principia", no: 'Newtons Principia' },
    year: 1687,
    regions: ['europe', 'science', 'world'],
    description: {
      en: 'Isaac Newton published his laws of motion and universal gravitation.',
      no: 'Isaac Newton publiserte sine bevegelseslover og loven om gravitasjon.'
    },
    significance: {
      en: 'Laid the foundation of classical physics for over two centuries.',
      no: 'La grunnlaget for klassisk fysikk i over to århundrer.'
    }
  },

  // ---- Revolutions & Industrial Age (1700 – 1914) ----
  {
    id: 'watt-steam-engine',
    title: { en: "Watt's improved steam engine", no: 'Watts forbedrede dampmaskin' },
    year: 1769,
    regions: ['europe', 'science'],
    description: {
      en: 'James Watt patented a far more efficient steam engine.',
      no: 'James Watt patenterte en langt mer effektiv dampmaskin.'
    },
    significance: {
      en: 'Powered factories and transport, driving the Industrial Revolution.',
      no: 'Drev fabrikker og transport og satte fart på den industrielle revolusjonen.'
    }
  },
  {
    id: 'us-declaration-independence',
    title: { en: 'US Declaration of Independence', no: 'USAs uavhengighetserklæring' },
    year: 1776,
    regions: ['americas', 'world'],
    description: {
      en: 'Thirteen American colonies declared independence from Britain.',
      no: 'Tretten amerikanske kolonier erklærte uavhengighet fra Storbritannia.'
    },
    significance: {
      en: 'Founded the United States and spread Enlightenment ideas of liberty.',
      no: 'Grunnla USA og spredte opplysningstidens idéer om frihet.'
    }
  },
  {
    id: 'french-revolution',
    title: { en: 'French Revolution begins', no: 'Den franske revolusjon begynner' },
    year: 1789,
    startYear: 1789,
    endYear: 1799,
    regions: ['europe', 'world'],
    description: {
      en: 'The storming of the Bastille began a revolution that overthrew the monarchy.',
      no: 'Stormingen av Bastillen innledet en revolusjon som styrtet monarkiet.'
    },
    significance: {
      en: 'Spread ideas of citizenship, equality and democracy across Europe.',
      no: 'Spredte idéer om borgerskap, likhet og demokrati over Europa.'
    }
  },
  {
    id: 'napoleon-emperor',
    title: { en: 'Napoleon crowned Emperor', no: 'Napoleon kronet til keiser' },
    year: 1804,
    regions: ['europe', 'military'],
    description: {
      en: 'Napoleon Bonaparte crowned himself Emperor of the French.',
      no: 'Napoleon Bonaparte kronet seg selv til fransk keiser.'
    },
    significance: {
      en: 'Began an era of wars that reshaped Europe and spread reform.',
      no: 'Innledet en tid med kriger som omformet Europa og spredte reformer.'
    }
  },
  {
    id: 'battle-of-waterloo',
    title: { en: 'Battle of Waterloo', no: 'Slaget ved Waterloo' },
    year: 1815,
    regions: ['europe', 'military'],
    description: {
      en: 'A coalition led by Britain and Prussia defeated Napoleon for the last time.',
      no: 'En koalisjon ledet av Storbritannia og Preussen beseiret Napoleon for siste gang.'
    },
    significance: {
      en: 'Ended the Napoleonic Wars and began decades of relative peace in Europe.',
      no: 'Avsluttet Napoleonskrigene og innledet tiår med relativ fred i Europa.'
    }
  },
  {
    id: 'darwin-origin-species',
    title: { en: "Darwin's On the Origin of Species", no: 'Darwins Artenes opprinnelse' },
    year: 1859,
    regions: ['europe', 'science', 'world'],
    description: {
      en: 'Charles Darwin published his theory of evolution by natural selection.',
      no: 'Charles Darwin publiserte teorien om evolusjon ved naturlig utvalg.'
    },
    significance: {
      en: 'Transformed biology and our understanding of life on Earth.',
      no: 'Forandret biologien og forståelsen vår av livet på jorden.'
    }
  },
  {
    id: 'us-civil-war',
    title: { en: 'American Civil War begins', no: 'Den amerikanske borgerkrigen begynner' },
    year: 1861,
    startYear: 1861,
    endYear: 1865,
    regions: ['americas', 'military'],
    description: {
      en: 'War broke out between the Union and Confederate states over slavery and union.',
      no: 'Krig brøt ut mellom unionen og sørstatene om slaveri og samhold.'
    },
    significance: {
      en: 'Preserved the United States and led to the abolition of slavery.',
      no: 'Bevarte USA og førte til avskaffelsen av slaveriet.'
    }
  },
  {
    id: 'abolition-slavery-us',
    title: { en: 'Slavery abolished in the US', no: 'Slaveriet avskaffes i USA' },
    year: 1865,
    regions: ['americas', 'world'],
    description: {
      en: 'The 13th Amendment abolished slavery throughout the United States.',
      no: 'Det 13. grunnlovstillegget avskaffet slaveriet i hele USA.'
    },
    significance: {
      en: 'A turning point in the long struggle for civil rights.',
      no: 'Et vendepunkt i den lange kampen for borgerrettigheter.'
    }
  },
  {
    id: 'german-unification',
    title: { en: 'Unification of Germany', no: 'Tysklands samling' },
    year: 1871,
    regions: ['europe'],
    description: {
      en: 'German states united into a single empire led by Prussia.',
      no: 'De tyske statene ble forent til ett keiserrike ledet av Preussen.'
    },
    significance: {
      en: 'Created a powerful new state that shifted the European balance of power.',
      no: 'Skapte en mektig ny stat som forskjøv maktbalansen i Europa.'
    }
  },
  {
    id: 'edison-light-bulb',
    title: { en: "Edison's practical light bulb", no: 'Edisons praktiske lyspære' },
    year: 1879,
    regions: ['americas', 'science'],
    description: {
      en: 'Thomas Edison demonstrated a long-lasting incandescent light bulb.',
      no: 'Thomas Edison demonstrerte en langvarig glødelampe.'
    },
    significance: {
      en: 'Helped bring electric lighting and power into everyday life.',
      no: 'Bidro til å bringe elektrisk lys og kraft inn i hverdagen.'
    }
  },
  {
    id: 'wright-first-flight',
    title: { en: 'Wright brothers’ first flight', no: 'Brødrene Wrights første flytur' },
    year: 1903,
    regions: ['americas', 'science'],
    description: {
      en: 'The Wright brothers made the first powered, controlled airplane flight.',
      no: 'Brødrene Wright gjennomførte den første motoriserte, styrte flyturen.'
    },
    significance: {
      en: 'Opened the age of aviation and shrank the world.',
      no: 'Innledet luftfartens tidsalder og krympet verden.'
    }
  },

  // ---- World War I Era (1870 – 1925) ----
  {
    id: 'world-war-i',
    title: { en: 'World War I', no: 'Første verdenskrig' },
    year: 1914,
    startYear: 1914,
    endYear: 1918,
    regions: ['europe', 'world', 'military'],
    description: {
      en: 'A global war centered in Europe pitted the Allies against the Central Powers.',
      no: 'En verdenskrig med tyngdepunkt i Europa satte de allierte mot sentralmaktene.'
    },
    significance: {
      en: 'Killed millions, toppled empires and redrew the map of Europe.',
      no: 'Drepte millioner, veltet keiserriker og tegnet om Europas kart.'
    }
  },
  {
    id: 'einstein-general-relativity',
    title: { en: 'Einstein’s general relativity', no: 'Einsteins generelle relativitetsteori' },
    year: 1915,
    regions: ['europe', 'science', 'world'],
    description: {
      en: 'Albert Einstein published his theory describing gravity as curved spacetime.',
      no: 'Albert Einstein publiserte teorien som beskriver tyngdekraft som krummet romtid.'
    },
    significance: {
      en: 'Revolutionized physics and our understanding of space, time and the universe.',
      no: 'Revolusjonerte fysikken og forståelsen vår av rom, tid og universet.'
    }
  },
  {
    id: 'russian-revolution',
    title: { en: 'Russian Revolution', no: 'Den russiske revolusjon' },
    year: 1917,
    regions: ['europe', 'world', 'military'],
    description: {
      en: 'The Bolsheviks seized power and ended the Russian monarchy.',
      no: 'Bolsjevikene grep makten og gjorde slutt på det russiske monarkiet.'
    },
    significance: {
      en: 'Created the world’s first communist state, the Soviet Union.',
      no: 'Skapte verdens første kommunistiske stat, Sovjetunionen.'
    }
  },

  // ---- World War II Era (1918 – 1950) ----
  {
    id: 'wall-street-crash',
    title: { en: 'Wall Street Crash', no: 'Krakket på Wall Street' },
    year: 1929,
    regions: ['americas', 'world'],
    description: {
      en: 'The US stock market collapsed, triggering the Great Depression.',
      no: 'Det amerikanske aksjemarkedet kollapset og utløste den store depresjonen.'
    },
    significance: {
      en: 'Caused a worldwide economic crisis that lasted through the 1930s.',
      no: 'Forårsaket en verdensomspennende økonomisk krise som varte gjennom 1930-årene.'
    }
  },
  {
    id: 'world-war-ii',
    title: { en: 'World War II', no: 'Andre verdenskrig' },
    year: 1939,
    startYear: 1939,
    endYear: 1945,
    regions: ['world', 'europe', 'military'],
    description: {
      en: 'The deadliest conflict in history, fought between the Allies and the Axis.',
      no: 'Den dødeligste konflikten i historien, mellom de allierte og aksemaktene.'
    },
    significance: {
      en: 'Reshaped global politics and led to the United Nations and the Cold War.',
      no: 'Omformet verdenspolitikken og førte til FN og den kalde krigen.'
    }
  },
  {
    id: 'the-holocaust',
    title: { en: 'The Holocaust', no: 'Holocaust' },
    year: 1941,
    startYear: 1941,
    endYear: 1945,
    regions: ['europe', 'world'],
    description: {
      en: 'Nazi Germany systematically murdered six million Jews and millions of others.',
      no: 'Nazi-Tyskland myrdet systematisk seks millioner jøder og millioner andre.'
    },
    significance: {
      en: 'One of history’s greatest crimes, shaping human-rights law afterward.',
      no: 'En av historiens største forbrytelser, som siden formet menneskerettighetene.'
    }
  },
  {
    id: 'pearl-harbor',
    title: { en: 'Attack on Pearl Harbor', no: 'Angrepet på Pearl Harbor' },
    year: 1941,
    regions: ['americas', 'asia', 'military'],
    description: {
      en: 'Japan attacked the US naval base at Pearl Harbor, Hawaii.',
      no: 'Japan angrep den amerikanske marinebasen Pearl Harbor på Hawaii.'
    },
    significance: {
      en: 'Brought the United States into World War II.',
      no: 'Førte USA inn i andre verdenskrig.'
    }
  },
  {
    id: 'd-day',
    title: { en: 'D-Day landings in Normandy', no: 'D-dagen og landgangen i Normandie' },
    year: 1944,
    regions: ['europe', 'military'],
    description: {
      en: 'Allied forces landed in Normandy to open a western front against Germany.',
      no: 'Allierte styrker gikk i land i Normandie for å åpne en vestfront mot Tyskland.'
    },
    significance: {
      en: 'Began the liberation of Western Europe from Nazi occupation.',
      no: 'Innledet frigjøringen av Vest-Europa fra nazistisk okkupasjon.'
    }
  },
  {
    id: 'hiroshima-bomb',
    title: { en: 'Atomic bombing of Hiroshima', no: 'Atombomben over Hiroshima' },
    year: 1945,
    regions: ['asia', 'military', 'science', 'world'],
    description: {
      en: 'The United States dropped an atomic bomb on the city of Hiroshima.',
      no: 'USA slapp en atombombe over byen Hiroshima.'
    },
    significance: {
      en: 'Hastened the end of World War II and opened the nuclear age.',
      no: 'Framskyndet slutten på andre verdenskrig og innledet atomalderen.'
    }
  },
  {
    id: 'united-nations-founded',
    title: { en: 'United Nations founded', no: 'FN grunnlegges' },
    year: 1945,
    regions: ['world'],
    description: {
      en: 'Fifty-one nations created the United Nations to promote peace.',
      no: 'Femtien nasjoner opprettet De forente nasjoner for å fremme fred.'
    },
    significance: {
      en: 'Became the central forum for international cooperation after the war.',
      no: 'Ble det sentrale forumet for internasjonalt samarbeid etter krigen.'
    }
  },

  // ---- Cold War (1945 – 1991) ----
  {
    id: 'indian-independence',
    title: { en: 'Indian independence', no: 'Indias selvstendighet' },
    year: 1947,
    regions: ['asia', 'world'],
    description: {
      en: 'India gained independence from British rule and was partitioned with Pakistan.',
      no: 'India ble selvstendig fra britisk styre og ble delt med Pakistan.'
    },
    significance: {
      en: 'A milestone of decolonization that inspired movements worldwide.',
      no: 'En milepæl i avkoloniseringen som inspirerte bevegelser verden over.'
    }
  },
  {
    id: 'prc-founded',
    title: { en: "People's Republic of China founded", no: 'Folkerepublikken Kina grunnlegges' },
    year: 1949,
    regions: ['asia', 'world'],
    description: {
      en: 'Mao Zedong proclaimed the People’s Republic after the communist victory.',
      no: 'Mao Zedong utropte Folkerepublikken etter den kommunistiske seieren.'
    },
    significance: {
      en: 'Brought the world’s most populous nation under communist rule.',
      no: 'Brakte verdens folkerikeste nasjon under kommunistisk styre.'
    }
  },
  {
    id: 'berlin-wall-built',
    title: { en: 'Berlin Wall built', no: 'Berlinmuren bygges' },
    year: 1961,
    regions: ['europe', 'world'],
    description: {
      en: 'East Germany built a wall dividing East and West Berlin.',
      no: 'Øst-Tyskland reiste en mur som delte Øst- og Vest-Berlin.'
    },
    significance: {
      en: 'Became the starkest symbol of the Cold War division of Europe.',
      no: 'Ble det sterkeste symbolet på den kalde krigens deling av Europa.'
    }
  },
  {
    id: 'cuban-missile-crisis',
    title: { en: 'Cuban Missile Crisis', no: 'Cubakrisen' },
    year: 1962,
    regions: ['americas', 'military', 'world'],
    description: {
      en: 'The US and USSR confronted each other over Soviet missiles in Cuba.',
      no: 'USA og Sovjetunionen sto mot hverandre om sovjetiske raketter på Cuba.'
    },
    significance: {
      en: 'The closest the Cold War came to nuclear war.',
      no: 'Det nærmeste den kalde krigen kom en atomkrig.'
    }
  },
  {
    id: 'moon-landing',
    title: { en: 'Moon landing', no: 'Månelandingen' },
    year: 1969,
    regions: ['americas', 'science', 'world'],
    description: {
      en: 'Apollo 11 landed and Neil Armstrong became the first human on the Moon.',
      no: 'Apollo 11 landet, og Neil Armstrong ble det første mennesket på Månen.'
    },
    significance: {
      en: 'A peak of the space race and a milestone of human exploration.',
      no: 'Et høydepunkt i romkappløpet og en milepæl i menneskelig utforskning.'
    }
  },
  {
    id: 'fall-of-berlin-wall',
    title: { en: 'Fall of the Berlin Wall', no: 'Berlinmurens fall' },
    year: 1989,
    regions: ['europe', 'world'],
    description: {
      en: 'East Germans opened the Berlin Wall, letting people cross freely.',
      no: 'Øst-tyskerne åpnet Berlinmuren og lot folk krysse fritt.'
    },
    significance: {
      en: 'Symbolized the collapse of communism in Eastern Europe.',
      no: 'Symboliserte kommunismens sammenbrudd i Øst-Europa.'
    }
  },
  {
    id: 'soviet-union-dissolved',
    title: { en: 'Dissolution of the Soviet Union', no: 'Sovjetunionens oppløsning' },
    year: 1991,
    regions: ['europe', 'asia', 'world'],
    description: {
      en: 'The Soviet Union broke apart into fifteen independent republics.',
      no: 'Sovjetunionen gikk i oppløsning til femten uavhengige republikker.'
    },
    significance: {
      en: 'Ended the Cold War and left the United States as the sole superpower.',
      no: 'Avsluttet den kalde krigen og lot USA stå igjen som eneste supermakt.'
    }
  },

  // ---- Modern World (1991 – present) ----
  {
    id: 'world-wide-web',
    title: { en: 'World Wide Web goes public', no: 'World Wide Web blir offentlig' },
    year: 1991,
    regions: ['europe', 'science', 'world'],
    description: {
      en: 'Tim Berners-Lee released the World Wide Web for public use.',
      no: 'Tim Berners-Lee gjorde World Wide Web tilgjengelig for allmennheten.'
    },
    significance: {
      en: 'Launched the modern internet and transformed daily life worldwide.',
      no: 'Lanserte det moderne internettet og forandret hverdagen verden over.'
    }
  },
  {
    id: 'end-of-apartheid',
    title: { en: 'End of apartheid in South Africa', no: 'Apartheid avskaffes i Sør-Afrika' },
    year: 1994,
    regions: ['africa', 'world'],
    description: {
      en: 'Nelson Mandela was elected president in South Africa’s first free election.',
      no: 'Nelson Mandela ble valgt til president i Sør-Afrikas første frie valg.'
    },
    significance: {
      en: 'Ended decades of racial segregation and white-minority rule.',
      no: 'Avsluttet tiår med raseskille og styre av et hvitt mindretall.'
    }
  },
  {
    id: 'september-11',
    title: { en: 'September 11 attacks', no: 'Terrorangrepene 11. september' },
    year: 2001,
    regions: ['americas', 'military', 'world'],
    description: {
      en: 'Coordinated terrorist attacks struck the United States, killing nearly 3,000.',
      no: 'Koordinerte terrorangrep rammet USA og drepte nesten 3 000 mennesker.'
    },
    significance: {
      en: 'Reshaped global security and triggered the War on Terror.',
      no: 'Omformet global sikkerhet og utløste «krigen mot terror».'
    }
  },
  {
    id: 'iphone-launch',
    title: { en: 'The iPhone is introduced', no: 'iPhone lanseres' },
    year: 2007,
    regions: ['americas', 'science'],
    description: {
      en: 'Apple unveiled the iPhone, a touchscreen smartphone.',
      no: 'Apple presenterte iPhone, en smarttelefon med berøringsskjerm.'
    },
    significance: {
      en: 'Ushered in the smartphone era and mobile internet for billions.',
      no: 'Innledet smarttelefonenes tid og mobilt internett for milliarder.'
    }
  },
  {
    id: 'covid-19-pandemic',
    title: { en: 'COVID-19 pandemic begins', no: 'covid-19-pandemien starter' },
    year: 2020,
    regions: ['world', 'asia'],
    description: {
      en: 'A novel coronavirus spread worldwide, causing a global pandemic.',
      no: 'Et nytt koronavirus spredte seg verden over og forårsaket en global pandemi.'
    },
    significance: {
      en: 'Disrupted economies and daily life across the entire planet.',
      no: 'Forstyrret økonomier og dagligliv over hele kloden.'
    }
  }
];
