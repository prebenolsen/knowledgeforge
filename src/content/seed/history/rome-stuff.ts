import type { SeedSubcategory } from '../types';

export const ancientRome: SeedSubcategory = {
  slug: 'ancient-rome',
  name: { en: 'Ancient Rome', no: 'Antikkens Roma' },
  modules: [
    {
      slug: 'republic-to-empire',
      name: { en: 'Republic to Empire', no: 'Fra republikk til keiserdømme' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'When was the Roman Republic traditionally founded?',
            no: 'Når ble den romerske republikken tradisjonelt grunnlagt?'
          },
          answers: [
            { en: '509 BC', no: '509 f.Kr.' },
            { en: '27 BC', no: '27 f.Kr.' },
            { en: '476 AD', no: '476 e.Kr.' },
            { en: '753 BC', no: '753 f.Kr.' }
          ],
          correct: 0,
          explanation: {
            en: 'The Republic traditionally began in 509 BC after the overthrow of Rome’s last king.',
            no: 'Republikken startet tradisjonelt i 509 f.Kr. etter at Romas siste konge ble styrtet.'
          },
          tags: ['republic', 'dates']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who was the first Roman emperor?',
            no: 'Hvem var den første romerske keiseren?'
          },
          answers: [
            { en: 'Nero', no: 'Nero' },
            { en: 'Augustus', no: 'Augustus' },
            { en: 'Julius Caesar', no: 'Julius Cæsar' },
            { en: 'Trajan', no: 'Trajan' }
          ],
          correct: 1,
          explanation: {
            en: 'Augustus became Rome’s first emperor in 27 BC after defeating his rivals.',
            no: 'Augustus ble Romas første keiser i 27 f.Kr. etter å ha beseiret rivalene sine.'
          },
          tags: ['emperors']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What was the Roman Senate?',
            no: 'Hva var det romerske senatet?'
          },
          answers: [
            { en: 'A military unit', no: 'En militær avdeling' },
            { en: 'A religious festival', no: 'En religiøs festival' },
            { en: 'A political advisory body', no: 'Et politisk rådgivende organ' },
            { en: 'A Roman law code', no: 'En romersk lovsamling' }
          ],
          correct: 2,
          explanation: {
            en: 'The Senate was a powerful political institution that advised magistrates and influenced policy.',
            no: 'Senatet var en mektig politisk institusjon som ga råd til embetsmenn og påvirket politikken.'
          },
          tags: ['senate']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who crossed the Rubicon River in 49 BC, starting a civil war?',
            no: 'Hvem krysset Rubicon-elven i 49 f.Kr. og startet en borgerkrig?'
          },
          answers: [
            { en: 'Julius Caesar', no: 'Julius Cæsar' },
            { en: 'Augustus', no: 'Augustus' },
            { en: 'Pompey', no: 'Pompeius' },
            { en: 'Cicero', no: 'Cicero' }
          ],
          correct: 0,
          explanation: {
            en: 'Caesar crossed the Rubicon with his army, directly challenging the Senate.',
            no: 'Cæsar krysset Rubicon med hæren sin og utfordret senatet direkte.'
          },
          tags: ['caesar']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What title did Roman emperors commonly use?',
            no: 'Hvilken tittel brukte romerske keisere vanligvis?'
          },
          answers: [
            { en: 'Consul', no: 'Konsul' },
            { en: 'Pharaoh', no: 'Farao' },
            { en: 'Caesar', no: 'Cæsar' },
            { en: 'Archon', no: 'Arkon' }
          ],
          correct: 2,
          explanation: {
            en: 'Caesar became a title associated with Roman emperors after Julius Caesar.',
            no: 'Cæsar ble en tittel knyttet til romerske keisere etter Julius Cæsar.'
          },
          tags: ['titles']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which event ended the Roman Republic?',
            no: 'Hvilken hendelse avsluttet den romerske republikken?'
          },
          answers: [
            { en: 'The rise of Augustus as emperor', no: 'Augustus’ maktovertakelse som keiser' },
            { en: 'The Punic Wars', no: 'De puniske krigene' },
            { en: 'The founding of Rome', no: 'Grunnleggelsen av Roma' },
            { en: 'The fall of Constantinople', no: 'Konstantinopels fall' }
          ],
          correct: 0,
          explanation: {
            en: 'Augustus’ victory and new political system marked the transition to the Empire.',
            no: 'Augustus’ seier og nye politiske system markerte overgangen til keiserdømmet.'
          },
          tags: ['transition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which group had the most political power in early Rome?',
            no: 'Hvilken gruppe hadde mest politisk makt i det tidlige Roma?'
          },
          answers: [
            { en: 'Patricians', no: 'Patrisierne' },
            { en: 'Slaves', no: 'Slavene' },
            { en: 'Foreign merchants', no: 'Utenlandske kjøpmenn' },
            { en: 'Gladiators', no: 'Gladiatorer' }
          ],
          correct: 0,
          explanation: {
            en: 'Patricians were the wealthy elite who dominated early Roman politics.',
            no: 'Patrisierne var den rike eliten som dominerte tidlig romersk politikk.'
          },
          tags: ['society']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What was a consul in the Roman Republic?',
            no: 'Hva var en konsul i den romerske republikken?'
          },
          answers: [
            { en: 'A religious leader', no: 'En religiøs leder' },
            { en: 'A chief elected magistrate', no: 'En øverste valgt embetsmann' },
            { en: 'A provincial governor only', no: 'Kun en provinsguvernør' },
            { en: 'A Roman soldier', no: 'En romersk soldat' }
          ],
          correct: 1,
          explanation: {
            en: 'Consuls were the highest elected officials and commanded armies.',
            no: 'Konsuler var de høyeste valgte embetsmennene og ledet hærer.'
          },
          tags: ['republic']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who assassinated Julius Caesar in 44 BC?',
            no: 'Hvem myrdet Julius Cæsar i 44 f.Kr.?'
          },
          answers: [
            { en: 'Roman senators', no: 'Romerske senatorer' },
            { en: 'Germanic tribes', no: 'Germanske stammer' },
            { en: 'Egyptian forces', no: 'Egyptiske styrker' },
            { en: 'The Praetorian Guard', no: 'Pretoriangarden' }
          ],
          correct: 0,
          explanation: {
            en: 'A group of senators killed Caesar because they feared his growing power.',
            no: 'En gruppe senatorer drepte Cæsar fordi de fryktet den økende makten hans.'
          },
          tags: ['caesar']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What was the Pax Romana?',
            no: 'Hva var Pax Romana?'
          },
          answers: [
            { en: 'A Roman civil war', no: 'En romersk borgerkrig' },
            { en: 'A period of relative peace', no: 'En periode med relativ fred' },
            { en: 'A Roman religion', no: 'En romersk religion' },
            { en: 'A military strategy', no: 'En militær strategi' }
          ],
          correct: 1,
          explanation: {
            en: 'Pax Romana was a long period of stability during the early Empire.',
            no: 'Pax Romana var en lang periode med stabilitet under det tidlige keiserdømmet.'
          },
          tags: ['empire']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which Roman leader formed the First Triumvirate?',
            no: 'Hvilken romersk leder var med på å danne det første triumviratet?'
          },
          answers: [
            { en: 'Julius Caesar', no: 'Julius Cæsar' },
            { en: 'Diocletian', no: 'Diokletian' },
            { en: 'Constantine', no: 'Konstantin' },
            { en: 'Nero', no: 'Nero' }
          ],
          correct: 0,
          explanation: {
            en: 'Caesar joined Pompey and Crassus in a political alliance called the First Triumvirate.',
            no: 'Cæsar inngikk en politisk allianse med Pompeius og Crassus kalt det første triumviratet.'
          },
          tags: ['politics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What was the main purpose of Roman legions?',
            no: 'Hva var hovedformålet med romerske legioner?'
          },
          answers: [
            { en: 'Trade', no: 'Handel' },
            { en: 'Military conquest and defense', no: 'Militær erobring og forsvar' },
            { en: 'Religious ceremonies', no: 'Religiøse seremonier' },
            { en: 'Tax collection only', no: 'Kun skatteinnkreving' }
          ],
          correct: 1,
          explanation: {
            en: 'Legions were professional military units that expanded and protected Rome.',
            no: 'Legionene var profesjonelle militære enheter som utvidet og beskyttet Roma.'
          },
          tags: ['army']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which city was destroyed by Mount Vesuvius in 79 AD?',
            no: 'Hvilken by ble ødelagt av Vesuv i 79 e.Kr.?'
          },
          answers: [
            { en: 'Pompeii', no: 'Pompeii' },
            { en: 'Carthage', no: 'Kartago' },
            { en: 'Athens', no: 'Athen' },
            { en: 'Alexandria', no: 'Alexandria' }
          ],
          correct: 0,
          explanation: {
            en: 'Pompeii was buried by volcanic ash from Mount Vesuvius.',
            no: 'Pompeii ble begravd av vulkansk aske fra Vesuv.'
          },
          tags: ['events']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What was the main difference between a republic and an empire?',
            no: 'Hva var hovedforskjellen mellom en republikk og et keiserdømme?'
          },
          answers: [
            { en: 'The size of Rome', no: 'Størrelsen på Roma' },
            { en: 'The concentration of power in one ruler', no: 'Makten samlet hos én hersker' },
            { en: 'The language used', no: 'Språket som ble brukt' },
            { en: 'The existence of armies', no: 'Om det fantes hærer' }
          ],
          correct: 1,
          explanation: {
            en: 'The Empire concentrated political power around the emperor.',
            no: 'Keiserdømmet samlet politisk makt rundt keiseren.'
          },
          tags: ['comparison']
        },

        {
          difficulty: 'medium',
          question: {
            en: 'Why did many Romans support Augustus after years of civil war?',
            no: 'Hvorfor støttet mange romere Augustus etter flere år med borgerkrig?'
          },
          answers: [
            { en: 'He promised stability and peace', no: 'Han lovet stabilitet og fred' },
            { en: 'He abolished the army', no: 'Han avskaffet hæren' },
            { en: 'He ended all taxes', no: 'Han fjernet alle skatter' },
            { en: 'He restored the monarchy openly', no: 'Han gjeninnførte monarkiet åpent' }
          ],
          correct: 0,
          explanation: {
            en: 'After decades of conflict, many Romans valued order more than traditional republican politics.',
            no: 'Etter tiår med konflikt ønsket mange romere orden mer enn tradisjonell republikansk politikk.'
          },
          tags: ['augustus']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What caused the conflict between Caesar and the Senate?',
            no: 'Hva førte til konflikten mellom Cæsar og senatet?'
          },
          answers: [
            { en: 'Fear of Caesar gaining too much power', no: 'Frykt for at Cæsar fikk for mye makt' },
            { en: 'A dispute over Roman religion', no: 'En konflikt om romersk religion' },
            { en: 'A foreign invasion', no: 'En utenlandsk invasjon' },
            { en: 'A shortage of soldiers', no: 'Mangel på soldater' }
          ],
          correct: 0,
          explanation: {
            en: 'Senators feared Caesar would destroy the Republic by becoming too powerful.',
            no: 'Senatorene fryktet at Cæsar ville ødelegge republikken ved å få for mye makt.'
          },
          tags: ['caesar']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Roman expansion affect the Republic?',
            no: 'Hvordan påvirket romersk ekspansjon republikken?'
          },
          answers: [
            { en: 'It created wealth but also social tensions', no: 'Det skapte rikdom, men også sosiale spenninger' },
            { en: 'It ended all political conflicts', no: 'Det avsluttet alle politiske konflikter' },
            { en: 'It made Rome smaller', no: 'Det gjorde Roma mindre' },
            { en: 'It removed the army', no: 'Det fjernet hæren' }
          ],
          correct: 0,
          explanation: {
            en: 'Conquests brought wealth and slaves but increased inequality and instability.',
            no: 'Erobringene ga rikdom og slaver, men økte ulikhet og ustabilitet.'
          },
          tags: ['expansion']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was the role of the Praetorian Guard?',
            no: 'Hva var rollen til pretoriangarden?'
          },
          answers: [
            { en: 'Protecting the emperor', no: 'Å beskytte keiseren' },
            { en: 'Writing Roman laws', no: 'Å skrive romerske lover' },
            { en: 'Managing trade routes', no: 'Å styre handelsruter' },
            { en: 'Building temples', no: 'Å bygge templer' }
          ],
          correct: 0,
          explanation: {
            en: 'The Praetorian Guard protected emperors but also influenced imperial politics.',
            no: 'Pretoriangarden beskyttet keisere, men påvirket også keiserpolitikken.'
          },
          tags: ['army']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why was the assassination of Caesar unsuccessful in restoring the Republic?',
            no: 'Hvorfor lyktes ikke drapet på Cæsar med å gjenopprette republikken?'
          },
          answers: [
            { en: 'New power struggles led to another civil war', no: 'Nye maktkamper førte til en ny borgerkrig' },
            { en: 'Rome immediately abandoned politics', no: 'Roma forlot umiddelbart politikken' },
            { en: 'The army disappeared', no: 'Hæren forsvant' },
            { en: 'The Senate lost all authority overnight', no: 'Senatet mistet all myndighet over natten' }
          ],
          correct: 0,
          explanation: {
            en: 'Caesar’s death created more conflict, eventually allowing Augustus to rise.',
            no: 'Cæsars død skapte mer konflikt og åpnet veien for Augustus.'
          },
          tags: ['transition']
        },

        {
          difficulty: 'hard',
          question: {
            en: 'Which factor most contributed to the decline of the Roman Republic?',
            no: 'Hvilken faktor bidro mest til den romerske republikkens nedgang?'
          },
          answers: [
            { en: 'Military leaders gaining personal armies and influence', no: 'Militære ledere fikk egne hærer og økt innflytelse' },
            { en: 'The end of Roman culture', no: 'Slutten på romersk kultur' },
            { en: 'A complete lack of resources', no: 'Fullstendig mangel på ressurser' },
            { en: 'The disappearance of Roman cities', no: 'Forsvinningen av romerske byer' }
          ],
          correct: 0,
          explanation: {
            en: 'Powerful generals used loyal armies to challenge traditional republican institutions.',
            no: 'Mektige generaler brukte lojale hærer til å utfordre republikanske institusjoner.'
          },
          tags: ['decline']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did Augustus maintain the appearance of republican government?',
            no: 'Hvordan opprettholdt Augustus inntrykket av republikansk styre?'
          },
          answers: [
            { en: 'He kept old institutions while controlling key powers', no: 'Han beholdt gamle institusjoner mens han kontrollerte viktige maktområder' },
            { en: 'He removed the Senate completely', no: 'Han fjernet senatet fullstendig' },
            { en: 'He refused military command', no: 'Han nektet militær kommando' },
            { en: 'He restored all previous elections', no: 'Han gjeninnførte alle tidligere valgordninger' }
          ],
          correct: 0,
          explanation: {
            en: 'Augustus created the Principate, balancing republican traditions with imperial control.',
            no: 'Augustus skapte principatet, som balanserte republikanske tradisjoner med keisermakt.'
          },
          tags: ['principate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did Rome’s large empire create challenges for republican government?',
            no: 'Hvorfor skapte Romas store rike utfordringer for republikansk styre?'
          },
          answers: [
            { en: 'The old system struggled to manage distant territories', no: 'Det gamle systemet slet med å styre fjerne områder' },
            { en: 'Rome stopped having citizens', no: 'Roma sluttet å ha borgere' },
            { en: 'The Senate became a military unit', no: 'Senatet ble en militær avdeling' },
            { en: 'Trade completely ended', no: 'Handelen tok slutt' }
          ],
          correct: 0,
          explanation: {
            en: 'A government designed for a city-state struggled to control a vast empire.',
            no: 'Et styresett laget for en bystat slet med å kontrollere et enormt rike.'
          },
          tags: ['government']
        },

        {
          difficulty: 'hard',
          question: {
            en: 'What was one long-term consequence of Rome’s transition to empire?',
            no: 'Hva var en langsiktig konsekvens av Romas overgang til keiserdømme?'
          },
          answers: [
            { en: 'Greater centralization of political authority', no: 'Mer sentralisering av politisk makt' },
            { en: 'The end of Roman law', no: 'Slutten på romersk lov' },
            { en: 'The disappearance of cities', no: 'Forsvinningen av byer' },
            { en: 'The loss of all provinces', no: 'Tapet av alle provinser' }
          ],
          correct: 0,
          explanation: {
            en: 'The emperor became the central figure of Roman political life.',
            no: 'Keiseren ble sentrum for romersk politisk liv.'
          },
          tags: ['empire']
        },

        {
          difficulty: 'hard',
          question: {
            en: 'Which interpretation best explains why the Roman Empire survived after political changes?',
            no: 'Hvilken forklaring beskriver best hvorfor Romerriket overlevde etter politiske endringer?'
          },
          answers: [
            { en: 'Strong institutions, administration, and military systems supported it', no: 'Sterke institusjoner, administrasjon og militærsystemer støttet det' },
            { en: 'Rome avoided all conflicts', no: 'Roma unngikk alle konflikter' },
            { en: 'Emperors had unlimited success', no: 'Keiserne hadde alltid suksess' },
            { en: 'The Republic remained unchanged', no: 'Republikken forble uendret' }
          ],
          correct: 0,
          explanation: {
            en: 'Rome’s survival depended on complex systems beyond individual rulers.',
            no: 'Romas overlevelse var avhengig av komplekse systemer utover enkeltkeisere.'
          },
          tags: ['legacy']
        },
        {
  difficulty: 'easy',
  question: {
    en: 'Who was the Roman general who defeated Hannibal at the Battle of Zama?',
    no: 'Hvem var den romerske generalen som beseiret Hannibal i slaget ved Zama?'
  },
  answers: [
    { en: 'Scipio Africanus', no: 'Scipio Africanus' },
    { en: 'Marius', no: 'Marius' },
    { en: 'Sulla', no: 'Sulla' },
    { en: 'Crassus', no: 'Crassus' }
  ],
  correct: 0,
  explanation: {
    en: 'Scipio Africanus defeated Hannibal in 202 BC, ending the Second Punic War.',
    no: 'Scipio Africanus beseiret Hannibal i 202 f.Kr. og avsluttet den andre puniske krigen.'
  },
  tags: ['punic-wars']
},
{
  difficulty: 'easy',
  question: {
    en: 'What language was mainly spoken in ancient Rome?',
    no: 'Hvilket språk ble hovedsakelig snakket i antikkens Roma?'
  },
  answers: [
    { en: 'Latin', no: 'Latin' },
    { en: 'Greek', no: 'Gresk' },
    { en: 'Egyptian', no: 'Egyptisk' },
    { en: 'Celtic', no: 'Keltisk' }
  ],
  correct: 0,
  explanation: {
    en: 'Latin was the main language of Rome and influenced many modern languages.',
    no: 'Latin var hovedspråket i Roma og påvirket mange moderne språk.'
  },
  tags: ['culture']
},
{
  difficulty: 'easy',
  question: {
    en: 'Which Roman structure was used for gladiator battles?',
    no: 'Hvilken romersk bygning ble brukt til gladiatorkamper?'
  },
  answers: [
    { en: 'Aqueduct', no: 'Akvadukt' },
    { en: 'Colosseum', no: 'Colosseum' },
    { en: 'Forum', no: 'Forum' },
    { en: 'Pantheon', no: 'Pantheon' }
  ],
  correct: 1,
  explanation: {
    en: 'The Colosseum hosted public spectacles including gladiator fights.',
    no: 'Colosseum arrangerte offentlige forestillinger, inkludert gladiatorkamper.'
  },
  tags: ['culture']
},
{
  difficulty: 'easy',
  question: {
    en: 'What was a province in the Roman Empire?',
    no: 'Hva var en provins i Romerriket?'
  },
  answers: [
    { en: 'A controlled territory outside Italy', no: 'Et kontrollert område utenfor Italia' },
    { en: 'A Roman emperor', no: 'En romersk keiser' },
    { en: 'A military weapon', no: 'Et militært våpen' },
    { en: 'A religious group', no: 'En religiøs gruppe' }
  ],
  correct: 0,
  explanation: {
    en: 'Provinces were territories governed by Rome outside the Italian peninsula.',
    no: 'Provinser var områder styrt av Roma utenfor den italienske halvøya.'
  },
  tags: ['administration']
},
{
  difficulty: 'easy',
  question: {
    en: 'Which emperor was famous for converting to Christianity and founding Constantinople?',
    no: 'Hvilken keiser er kjent for å ha innført kristendommen og grunnlagt Konstantinopel?'
  },
  answers: [
    { en: 'Constantine', no: 'Konstantin' },
    { en: 'Augustus', no: 'Augustus' },
    { en: 'Hadrian', no: 'Hadrian' },
    { en: 'Tiberius', no: 'Tiberius' }
  ],
  correct: 0,
  explanation: {
    en: 'Constantine legalized Christianity and established Constantinople as a new imperial capital.',
    no: 'Konstantin legaliserte kristendommen og etablerte Konstantinopel som ny keiserlig hovedstad.'
  },
  tags: ['emperors']
},
{
  difficulty: 'easy',
  question: {
    en: 'What was the Forum in ancient Rome?',
    no: 'Hva var Forum i antikkens Roma?'
  },
  answers: [
    { en: 'A central public area', no: 'Et sentralt offentlig område' },
    { en: 'A military camp', no: 'En militærleir' },
    { en: 'A palace', no: 'Et palass' },
    { en: 'A prison', no: 'Et fengsel' }
  ],
  correct: 0,
  explanation: {
    en: 'The Roman Forum was a center for politics, religion, and public life.',
    no: 'Forum var et sentrum for politikk, religion og offentlig liv.'
  },
  tags: ['society']
},
{
  difficulty: 'easy',
  question: {
    en: 'What did Romans call their citizen assembly?',
    no: 'Hva kalte romerne folkeforsamlingen sin?'
  },
  answers: [
    { en: 'Comitia', no: 'Comitia' },
    { en: 'Legio', no: 'Legio' },
    { en: 'Senatus', no: 'Senatus' },
    { en: 'Curia', no: 'Curia' }
  ],
  correct: 0,
  explanation: {
    en: 'Comitia were assemblies where Roman citizens voted on laws and officials.',
    no: 'Comitia var forsamlinger der romerske borgere stemte over lover og embetsmenn.'
  },
  tags: ['republic']
},
{
  difficulty: 'medium',
  question: {
    en: 'Why did Roman generals become increasingly powerful during the late Republic?',
    no: 'Hvorfor ble romerske generaler stadig mektigere under slutten av republikken?'
  },
  answers: [
    { en: 'They gained loyalty from professional armies', no: 'De fikk lojalitet fra profesjonelle hærer' },
    { en: 'The Senate gave up all authority', no: 'Senatet ga fra seg all myndighet' },
    { en: 'Rome stopped expanding', no: 'Roma sluttet å ekspandere' },
    { en: 'Citizens lost interest in politics', no: 'Borgerne mistet interessen for politikk' }
  ],
  correct: 0,
  explanation: {
    en: 'Soldiers often became loyal to their commanders because of rewards and victories.',
    no: 'Soldater ble ofte lojale mot kommandantene sine på grunn av belønninger og seire.'
  },
  tags: ['army']
},
{
  difficulty: 'medium',
  question: {
    en: 'What was the significance of the Battle of Actium?',
    no: 'Hva var betydningen av slaget ved Actium?'
  },
  answers: [
    { en: 'It allowed Augustus to become the dominant Roman ruler', no: 'Det gjorde at Augustus ble den dominerende romerske herskeren' },
    { en: 'It ended the Punic Wars', no: 'Det avsluttet de puniske krigene' },
    { en: 'It destroyed Rome completely', no: 'Det ødela Roma fullstendig' },
    { en: 'It created the Republic', no: 'Det skapte republikken' }
  ],
  correct: 0,
  explanation: {
    en: 'Augustus defeated Antony and Cleopatra at Actium, becoming Rome’s undisputed leader.',
    no: 'Augustus beseiret Antonius og Kleopatra ved Actium og ble Romas ubestridte leder.'
  },
  tags: ['augustus']
},
{
  difficulty: 'medium',
  question: {
    en: 'How did Roman citizenship change as the empire expanded?',
    no: 'Hvordan endret romersk statsborgerskap seg da riket vokste?'
  },
  answers: [
    { en: 'It was gradually extended to more people', no: 'Det ble gradvis utvidet til flere mennesker' },
    { en: 'It was removed completely', no: 'Det ble fjernet fullstendig' },
    { en: 'Only soldiers could receive it', no: 'Bare soldater kunne få det' },
    { en: 'It was limited to Rome city forever', no: 'Det var alltid begrenset til Roma by' }
  ],
  correct: 0,
  explanation: {
    en: 'Rome used citizenship as a tool to integrate conquered populations.',
    no: 'Roma brukte statsborgerskap som et middel for å integrere erobrede folkeslag.'
  },
  tags: ['citizenship']
},
{
  difficulty: 'medium',
  question: {
    en: 'Why were Roman roads important for the empire?',
    no: 'Hvorfor var romerske veier viktige for riket?'
  },
  answers: [
    { en: 'They improved military movement and trade', no: 'De forbedret militær transport og handel' },
    { en: 'They replaced the Roman army', no: 'De erstattet den romerske hæren' },
    { en: 'They prevented all invasions', no: 'De hindret alle invasjoner' },
    { en: 'They ended political conflicts', no: 'De avsluttet politiske konflikter' }
  ],
  correct: 0,
  explanation: {
    en: 'Roads connected provinces and allowed armies, goods, and messages to move quickly.',
    no: 'Veiene knyttet sammen provinser og gjorde at hærer, varer og meldinger kunne bevege seg raskt.'
  },
  tags: ['infrastructure']
},
{
  difficulty: 'hard',
  question: {
    en: 'Why do historians debate whether Augustus truly ended the Republic?',
    no: 'Hvorfor diskuterer historikere om Augustus faktisk avsluttet republikken?'
  },
  answers: [
    { en: 'He preserved republican institutions while creating imperial control', no: 'Han bevarte republikanske institusjoner samtidig som han skapte keisermakt' },
    { en: 'He destroyed every Roman tradition', no: 'Han ødela alle romerske tradisjoner' },
    { en: 'He refused political power', no: 'Han avviste politisk makt' },
    { en: 'He returned Rome to monarchy openly', no: 'Han gjorde Roma til et monarki åpent' }
  ],
  correct: 0,
  explanation: {
    en: 'Augustus maintained republican appearances while concentrating real authority.',
    no: 'Augustus beholdt republikanske fasader mens han samlet den virkelige makten.'
  },
  tags: ['historical-debate']
},
{
  difficulty: 'hard',
  question: {
    en: 'How did economic inequality contribute to the fall of the Republic?',
    no: 'Hvordan bidro økonomisk ulikhet til republikkens fall?'
  },
  answers: [
    { en: 'Wealth became concentrated among elites, increasing social conflict', no: 'Rikdom samlet seg hos eliten og økte sosiale konflikter' },
    { en: 'All Romans became equally wealthy', no: 'Alle romere ble like rike' },
    { en: 'Trade completely disappeared', no: 'Handelen forsvant fullstendig' },
    { en: 'The army stopped recruiting soldiers', no: 'Hæren sluttet å rekruttere soldater' }
  ],
  correct: 0,
  explanation: {
    en: 'Growing inequality created tensions that weakened republican institutions.',
    no: 'Økende ulikhet skapte spenninger som svekket republikanske institusjoner.'
  },
  tags: ['economy']
},
{
  difficulty: 'hard',
  question: {
    en: 'What made the Roman Empire different from the Republic politically?',
    no: 'Hva gjorde Romerriket politisk annerledes enn republikken?'
  },
  answers: [
    { en: 'A single emperor held dominant authority', no: 'Én keiser hadde dominerende myndighet' },
    { en: 'Citizens stopped having laws', no: 'Borgerne sluttet å ha lover' },
    { en: 'The Senate disappeared immediately', no: 'Senatet forsvant umiddelbart' },
    { en: 'Rome stopped using armies', no: 'Roma sluttet å bruke hærer' }
  ],
  correct: 0,
  explanation: {
    en: 'The emperor became the central political authority while older institutions remained.',
    no: 'Keiseren ble den sentrale politiske myndigheten mens eldre institusjoner besto.'
  },
  tags: ['government']
}
      ]
    }
  ]
};