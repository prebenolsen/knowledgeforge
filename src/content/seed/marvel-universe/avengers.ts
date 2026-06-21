import type { SeedSubcategory } from '../types';

export const avengers: SeedSubcategory = {
  slug: 'avengers',
  name: { en: 'Avengers', no: 'Avengers' },
  modules: [
    {
      slug: 'avengers',
      name: { en: 'Avengers (all heroes)', no: 'Avengers (alle heltene)' },
      questions: [
        // ---------------- EASY ----------------
        {
          difficulty: 'easy',
          question: {
            en: "What metal is Captain America's shield made of?",
            no: 'Hvilket metall er Captain Americas skjold laget av?'
          },
          answers: [
            { en: 'Adamantium', no: 'Adamantium' },
            { en: 'Titanium', no: 'Titan' },
            { en: 'Vibranium', no: 'Vibranium' },
            { en: 'Uru', no: 'Uru' }
          ],
          correct: 2,
          explanation: {
            en: "Captain America's shield is made of vibranium, the same rare metal found in Wakanda.",
            no: 'Captain Americas skjold er laget av vibranium, det samme sjeldne metallet som finnes i Wakanda.'
          },
          tags: ['captain-america', 'vibranium']
        },
        {
          difficulty: 'easy',
          question: {
            en: "What is Thor's hammer called?",
            no: 'Hva heter Thors hammer?'
          },
          answers: [
            { en: 'Mjolnir', no: 'Mjølner' },
            { en: 'Stormbreaker', no: 'Stormbreaker' },
            { en: 'Gungnir', no: 'Gungnir' },
            { en: 'Hofund', no: 'Hofund' }
          ],
          correct: 0,
          explanation: {
            en: "Thor's enchanted hammer is Mjolnir, which only the worthy can lift.",
            no: 'Thors fortryllede hammer er Mjølner, som bare den verdige kan løfte.'
          },
          tags: ['thor', 'mjolnir']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the fictional African nation that Black Panther rules?',
            no: 'Hvilken fiktiv afrikansk nasjon hersker Black Panther over?'
          },
          answers: [
            { en: 'Genosha', no: 'Genosha' },
            { en: 'Wakanda', no: 'Wakanda' },
            { en: 'Latveria', no: 'Latveria' },
            { en: 'Sokovia', no: 'Sokovia' }
          ],
          correct: 1,
          explanation: {
            en: 'Black Panther (T’Challa) is king of the technologically advanced nation of Wakanda.',
            no: 'Black Panther (T’Challa) er konge av den teknologisk avanserte nasjonen Wakanda.'
          },
          tags: ['black-panther', 'wakanda']
        },
        {
          difficulty: 'easy',
          question: {
            en: "Who is the God of Mischief and Thor's adopted brother?",
            no: 'Hvem er rampestrekenes gud og Thors adopterte bror?'
          },
          answers: [
            { en: 'Heimdall', no: 'Heimdall' },
            { en: 'Odin', no: 'Odin' },
            { en: 'Hela', no: 'Hela' },
            { en: 'Loki', no: 'Loke' }
          ],
          correct: 3,
          explanation: {
            en: 'Loki, the God of Mischief, is Thor’s adopted brother and a recurring trickster across the MCU.',
            no: 'Loke, rampestrekenes gud, er Thors adopterte bror og en gjentakende skøyer i MCU.'
          },
          tags: ['loki', 'thor']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which team of cosmic heroes includes Star-Lord, Gamora, and Rocket?',
            no: 'Hvilket lag av kosmiske helter inkluderer Star-Lord, Gamora og Rocket?'
          },
          answers: [
            { en: 'The Avengers', no: 'The Avengers' },
            { en: 'The Eternals', no: 'The Eternals' },
            { en: 'Guardians of the Galaxy', no: 'Guardians of the Galaxy' },
            { en: 'The Defenders', no: 'The Defenders' }
          ],
          correct: 2,
          explanation: {
            en: 'Star-Lord, Gamora, Rocket, Groot, and Drax make up the Guardians of the Galaxy.',
            no: 'Star-Lord, Gamora, Rocket, Groot og Drax utgjør Guardians of the Galaxy.'
          },
          tags: ['guardians', 'team']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does S.H.I.E.L.D. director Nick Fury wear over one eye?',
            no: 'Hva har S.H.I.E.L.D.-direktør Nick Fury over det ene øyet?'
          },
          answers: [
            { en: 'An eyepatch', no: 'En øyelapp' },
            { en: 'Glasses', no: 'Briller' },
            { en: 'A monocle', no: 'En monokkel' },
            { en: 'A targeting scope', no: 'Et siktekikkert' }
          ],
          correct: 0,
          explanation: {
            en: 'Nick Fury famously wears an eyepatch over his left eye.',
            no: 'Nick Fury er kjent for å ha en øyelapp over venstre øye.'
          },
          tags: ['nick-fury', 'shield']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which city does Spider-Man (Peter Parker) primarily fight crime?',
            no: 'I hvilken by bekjemper Spider-Man (Peter Parker) hovedsakelig kriminalitet?'
          },
          answers: [
            { en: 'Los Angeles', no: 'Los Angeles' },
            { en: 'New York City', no: 'New York City' },
            { en: 'Chicago', no: 'Chicago' },
            { en: 'Boston', no: 'Boston' }
          ],
          correct: 1,
          explanation: {
            en: 'Peter Parker lives in Queens and protects New York City as Spider-Man.',
            no: 'Peter Parker bor i Queens og beskytter New York City som Spider-Man.'
          },
          tags: ['spider-man', 'new-york']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who is the purple Titan who seeks all six Infinity Stones?',
            no: 'Hvem er den lilla titanen som søker alle de seks Uendelighetssteinene?'
          },
          answers: [
            { en: 'Ronan', no: 'Ronan' },
            { en: 'Ultron', no: 'Ultron' },
            { en: 'Loki', no: 'Loke' },
            { en: 'Thanos', no: 'Thanos' }
          ],
          correct: 3,
          explanation: {
            en: 'Thanos seeks all six Infinity Stones to wipe out half of all life in the universe.',
            no: 'Thanos søker alle de seks Uendelighetssteinene for å utslette halvparten av alt liv i universet.'
          },
          tags: ['thanos', 'infinity-stones']
        },
        {
          difficulty: 'easy',
          question: {
            en: "What is the name of Tony Stark's Manhattan skyscraper that becomes the Avengers' base?",
            no: 'Hva heter Tony Starks skyskraper på Manhattan som blir Avengers’ base?'
          },
          answers: [
            { en: 'The Baxter Building', no: 'Baxter Building' },
            { en: 'The Daily Bugle', no: 'Daily Bugle' },
            { en: 'Stark Tower', no: 'Stark Tower' },
            { en: 'The Sanctum', no: 'Sanctum' }
          ],
          correct: 2,
          explanation: {
            en: 'Stark Tower in Manhattan is rebranded as Avengers Tower after the Battle of New York.',
            no: 'Stark Tower på Manhattan får navnet Avengers Tower etter slaget om New York.'
          },
          tags: ['iron-man', 'stark-tower']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which size-changing hero is played by Paul Rudd?',
            no: 'Hvilken størrelsesendrende helt spilles av Paul Rudd?'
          },
          answers: [
            { en: 'Ant-Man', no: 'Ant-Man' },
            { en: 'The Wasp', no: 'The Wasp' },
            { en: 'Hulk', no: 'Hulk' },
            { en: 'Vision', no: 'Vision' }
          ],
          correct: 0,
          explanation: {
            en: 'Paul Rudd plays Scott Lang, the size-changing hero Ant-Man.',
            no: 'Paul Rudd spiller Scott Lang, den størrelsesendrende helten Ant-Man.'
          },
          tags: ['ant-man', 'cast']
        },
        // ---------------- MEDIUM ----------------
        {
          difficulty: 'medium',
          question: {
            en: "Which Infinity Stone is embedded in Vision's forehead?",
            no: 'Hvilken Uendelighetsstein er festet i Visions panne?'
          },
          answers: [
            { en: 'The Power Stone', no: 'Kraftsteinen' },
            { en: 'The Mind Stone', no: 'Sinnssteinen' },
            { en: 'The Time Stone', no: 'Tidssteinen' },
            { en: 'The Reality Stone', no: 'Virkelighetssteinen' }
          ],
          correct: 1,
          explanation: {
            en: 'The Mind Stone, hidden in Loki’s scepter, powers Vision and sits in his forehead.',
            no: 'Sinnssteinen, skjult i Lokes septer, gir Vision liv og sitter i pannen hans.'
          },
          tags: ['vision', 'mind-stone']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Who sacrifices herself on Vormir to give the Avengers the Soul Stone in "Endgame"?',
            no: 'Hvem ofrer seg selv på Vormir for å gi Avengers Sjelesteinen i «Endgame»?'
          },
          answers: [
            { en: 'Black Widow', no: 'Black Widow' },
            { en: 'Gamora', no: 'Gamora' },
            { en: 'Wanda Maximoff', no: 'Wanda Maximoff' },
            { en: 'Pepper Potts', no: 'Pepper Potts' }
          ],
          correct: 0,
          explanation: {
            en: 'Natasha Romanoff (Black Widow) sacrifices herself on Vormir so Hawkeye can claim the Soul Stone.',
            no: 'Natasha Romanoff (Black Widow) ofrer seg selv på Vormir slik at Hawkeye kan ta Sjelesteinen.'
          },
          tags: ['black-widow', 'soul-stone']
        },
        {
          difficulty: 'medium',
          question: {
            en: "What is the name of Thor's home realm?",
            no: 'Hva heter Thors hjemrike?'
          },
          answers: [
            { en: 'Vanaheim', no: 'Vanaheim' },
            { en: 'Jotunheim', no: 'Jotunheim' },
            { en: 'Asgard', no: 'Asgard' },
            { en: 'Midgard', no: 'Midgard' }
          ],
          correct: 2,
          explanation: {
            en: 'Thor is the prince (and later king) of Asgard, one of the Nine Realms.',
            no: 'Thor er prinsen (og senere kongen) av Asgard, ett av de ni rikene.'
          },
          tags: ['thor', 'asgard']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Who takes up the Captain America shield and mantle after Steve Rogers?',
            no: 'Hvem overtar Captain Americas skjold og rolle etter Steve Rogers?'
          },
          answers: [
            { en: 'Bucky Barnes', no: 'Bucky Barnes' },
            { en: 'Peggy Carter', no: 'Peggy Carter' },
            { en: 'John Walker', no: 'John Walker' },
            { en: 'Sam Wilson', no: 'Sam Wilson' }
          ],
          correct: 3,
          explanation: {
            en: 'An aged Steve Rogers gives his shield to Sam Wilson (Falcon), who becomes the new Captain America.',
            no: 'En eldre Steve Rogers gir skjoldet sitt til Sam Wilson (Falcon), som blir den nye Captain America.'
          },
          tags: ['captain-america', 'sam-wilson']
        },
        {
          difficulty: 'medium',
          question: {
            en: "What is the name of the sorcerers' headquarters in New York City?",
            no: 'Hva heter trollmennenes hovedkvarter i New York City?'
          },
          answers: [
            { en: 'The Triskelion', no: 'Triskelion' },
            { en: 'The Sanctum Sanctorum', no: 'Sanctum Sanctorum' },
            { en: 'Kamar-Taj', no: 'Kamar-Taj' },
            { en: 'The Necropolis', no: 'Necropolis' }
          ],
          correct: 1,
          explanation: {
            en: 'The New York Sanctum Sanctorum is one of three sanctums protecting Earth; Kamar-Taj is the training temple in Nepal.',
            no: 'New York Sanctum Sanctorum er ett av tre sanctum som beskytter Jorden; Kamar-Taj er treningstempelet i Nepal.'
          },
          tags: ['doctor-strange', 'sanctum']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Who challenges T’Challa for the Wakandan throne in "Black Panther"?',
            no: 'Hvem utfordrer T’Challa om Wakandas trone i «Black Panther»?'
          },
          answers: [
            { en: 'Erik "Killmonger" Stevens', no: 'Erik «Killmonger» Stevens' },
            { en: 'Ulysses Klaue', no: 'Ulysses Klaue' },
            { en: 'M’Baku', no: 'M’Baku' },
            { en: 'Nakia', no: 'Nakia' }
          ],
          correct: 0,
          explanation: {
            en: 'Erik "Killmonger" Stevens (N’Jadaka), T’Challa’s cousin, challenges and briefly seizes the throne.',
            no: 'Erik «Killmonger» Stevens (N’Jadaka), T’Challas fetter, utfordrer og overtar tronen for en kort stund.'
          },
          tags: ['black-panther', 'killmonger']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Which organization is revealed to have secretly infiltrated S.H.I.E.L.D. in "The Winter Soldier"?',
            no: 'Hvilken organisasjon avsløres å ha infiltrert S.H.I.E.L.D. i hemmelighet i «The Winter Soldier»?'
          },
          answers: [
            { en: 'A.I.M.', no: 'A.I.M.' },
            { en: 'The Ten Rings', no: 'De ti ringer' },
            { en: 'HYDRA', no: 'HYDRA' },
            { en: 'Leviathan', no: 'Leviathan' }
          ],
          correct: 2,
          explanation: {
            en: 'HYDRA had grown secretly inside S.H.I.E.L.D. for decades, exposed in "Captain America: The Winter Soldier".',
            no: 'HYDRA hadde vokst i hemmelighet inni S.H.I.E.L.D. i flere tiår, avslørt i «Captain America: The Winter Soldier».'
          },
          tags: ['hydra', 'shield']
        },
        {
          difficulty: 'medium',
          question: {
            en: "Which AI's programming forms the basis of the android Vision?",
            no: 'Hvilken KIs programmering danner grunnlaget for androiden Vision?'
          },
          answers: [
            { en: 'FRIDAY', no: 'FRIDAY' },
            { en: 'Ultron', no: 'Ultron' },
            { en: 'KAREN', no: 'KAREN' },
            { en: 'J.A.R.V.I.S.', no: 'J.A.R.V.I.S.' }
          ],
          correct: 3,
          explanation: {
            en: 'Vision is born when J.A.R.V.I.S., the Mind Stone, and a synthetic vibranium body are combined.',
            no: 'Vision blir til når J.A.R.V.I.S., Sinnssteinen og en syntetisk vibranium-kropp kombineres.'
          },
          tags: ['vision', 'jarvis']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the true nature of Star-Lord’s father, Ego, in "Guardians of the Galaxy Vol. 2"?',
            no: 'Hva er den sanne naturen til Star-Lords far, Ego, i «Guardians of the Galaxy Vol. 2»?'
          },
          answers: [
            { en: 'A living Celestial planet', no: 'En levende Celestial-planet' },
            { en: 'A Kree general', no: 'En Kree-general' },
            { en: 'A Frost Giant', no: 'En frostkjempe' },
            { en: 'An Eternal', no: 'En Eternal' }
          ],
          correct: 0,
          explanation: {
            en: 'Ego is a Celestial whose consciousness inhabits a planet he created; he is Peter Quill’s father.',
            no: 'Ego er en Celestial hvis bevissthet bebor en planet han har skapt; han er Peter Quills far.'
          },
          tags: ['guardians', 'ego']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Who is Scarlet Witch’s twin brother, killed in "Avengers: Age of Ultron"?',
            no: 'Hvem er Scarlet Witchs tvillingbror, drept i «Avengers: Age of Ultron»?'
          },
          answers: [
            { en: 'Vision', no: 'Vision' },
            { en: 'Wonder Man', no: 'Wonder Man' },
            { en: 'Pietro "Quicksilver" Maximoff', no: 'Pietro «Quicksilver» Maximoff' },
            { en: 'Hawkeye', no: 'Hawkeye' }
          ],
          correct: 2,
          explanation: {
            en: 'Pietro Maximoff (Quicksilver) dies shielding Hawkeye and a child during the battle of Sokovia.',
            no: 'Pietro Maximoff (Quicksilver) dør mens han beskytter Hawkeye og et barn under slaget om Sokovia.'
          },
          tags: ['quicksilver', 'age-of-ultron']
        },
        // ---------------- HARD ----------------
        {
          difficulty: 'hard',
          question: {
            en: 'In "Captain Marvel", what alien species is Goose the cat actually revealed to be?',
            no: 'I «Captain Marvel», hvilken fremmed art avsløres katten Goose egentlig å være?'
          },
          answers: [
            { en: 'A Skrull', no: 'En Skrull' },
            { en: 'A Kree', no: 'En Kree' },
            { en: 'A Flerken', no: 'En Flerken' },
            { en: 'A Symbiote', no: 'En symbiont' }
          ],
          correct: 2,
          explanation: {
            en: 'Goose is a Flerken — a dangerous alien species with tentacles and a pocket dimension inside it.',
            no: 'Goose er en Flerken — en farlig fremmed art med tentakler og en lommedimensjon inni seg.'
          },
          tags: ['captain-marvel', 'flerken', 'expert']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'In "Endgame", to which year do Captain America and Tony Stark travel to retrieve the Tesseract and Pym Particles from Camp Lehigh?',
            no: 'I «Endgame», hvilket år reiser Captain America og Tony Stark til for å hente Tesserakten og Pym-partiklene fra Camp Lehigh?'
          },
          answers: [
            { en: '1970', no: '1970' },
            { en: '1945', no: '1945' },
            { en: '1989', no: '1989' },
            { en: '2012', no: '2012' }
          ],
          correct: 0,
          explanation: {
            en: 'They travel to 1970 Camp Lehigh, where Tony meets his father Howard and Steve sees Peggy Carter.',
            no: 'De reiser til Camp Lehigh i 1970, hvor Tony møter faren Howard og Steve ser Peggy Carter.'
          },
          tags: ['endgame', 'time-heist', 'expert']
        },
        {
          difficulty: 'hard',
          question: {
            en: "What is the Winter Soldier's real name?",
            no: 'Hva er Winter Soldiers virkelige navn?'
          },
          answers: [
            { en: 'Sam Wilson', no: 'Sam Wilson' },
            { en: 'James "Bucky" Barnes', no: 'James «Bucky» Barnes' },
            { en: 'Brock Rumlow', no: 'Brock Rumlow' },
            { en: 'Isaiah Bradley', no: 'Isaiah Bradley' }
          ],
          correct: 1,
          explanation: {
            en: 'The Winter Soldier is James Buchanan "Bucky" Barnes, Steve Rogers’ best friend, brainwashed by HYDRA.',
            no: 'Winter Soldier er James Buchanan «Bucky» Barnes, Steve Rogers’ beste venn, hjernevasket av HYDRA.'
          },
          tags: ['winter-soldier', 'bucky', 'expert']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What in-universe term do survivors use for the five years after Thanos’s snap?',
            no: 'Hvilket begrep bruker de overlevende om de fem årene etter Thanos’ knips?'
          },
          answers: [
            { en: 'The Snap', no: 'Knipset' },
            { en: 'The Vanishing', no: 'Forsvinningen' },
            { en: 'The Reckoning', no: 'Oppgjøret' },
            { en: 'The Blip', no: 'The Blip' }
          ],
          correct: 3,
          explanation: {
            en: 'Survivors call the period (and the snap’s effect) "the Blip"; the event itself is also called the Decimation.',
            no: 'De overlevende kaller perioden (og effekten av knipset) «the Blip»; selve hendelsen kalles også Decimation.'
          },
          tags: ['endgame', 'the-blip', 'expert']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Who forged Thor’s axe Stormbreaker, and where?',
            no: 'Hvem smidde Thors øks Stormbreaker, og hvor?'
          },
          answers: [
            { en: 'Eitri, on Nidavellir', no: 'Eitri, på Nidavellir' },
            { en: 'Ivaldi, on Svartalfheim', no: 'Ivaldi, på Svartalfheim' },
            { en: 'Brokk, in Asgard', no: 'Brokk, i Asgard' },
            { en: 'Surtur, in Muspelheim', no: 'Surtur, i Muspelheim' }
          ],
          correct: 0,
          explanation: {
            en: 'The dwarf king Eitri (Peter Dinklage) forges Stormbreaker for Thor at the star-forge of Nidavellir.',
            no: 'Dvergkongen Eitri (Peter Dinklage) smir Stormbreaker for Thor ved stjernesmia på Nidavellir.'
          },
          tags: ['thor', 'stormbreaker', 'expert']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'In "Doctor Strange" (2016), which Dark Dimension entity does Strange trap in a time loop to win?',
            no: 'I «Doctor Strange» (2016), hvilket vesen fra Mørkedimensjonen fanger Strange i en tidssløyfe for å vinne?'
          },
          answers: [
            { en: 'Shuma-Gorath', no: 'Shuma-Gorath' },
            { en: 'Mephisto', no: 'Mephisto' },
            { en: 'Dormammu', no: 'Dormammu' },
            { en: 'Nightmare', no: 'Nightmare' }
          ],
          correct: 2,
          explanation: {
            en: 'Strange uses the Time Stone to trap Dormammu in an endless loop, forcing him to bargain and retreat.',
            no: 'Strange bruker Tidssteinen til å fange Dormammu i en endeløs sløyfe, og tvinger ham til å forhandle og trekke seg.'
          },
          tags: ['doctor-strange', 'dormammu', 'expert']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the name of Star-Lord’s spaceship in the first "Guardians of the Galaxy"?',
            no: 'Hva heter Star-Lords romskip i den første «Guardians of the Galaxy»?'
          },
          answers: [
            { en: 'The Benatar', no: 'The Benatar' },
            { en: 'The Milano', no: 'The Milano' },
            { en: 'The Quadrant', no: 'The Quadrant' },
            { en: 'The Eclector', no: 'The Eclector' }
          ],
          correct: 1,
          explanation: {
            en: 'Peter Quill names his ship the Milano after his childhood crush, actress Alyssa Milano.',
            no: 'Peter Quill kaller skipet sitt the Milano etter barndomsforelskelsen sin, skuespilleren Alyssa Milano.'
          },
          tags: ['guardians', 'milano', 'expert']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Which actor provides the performance-capture for Thanos throughout the MCU?',
            no: 'Hvilken skuespiller står for performance-capture av Thanos gjennom MCU?'
          },
          answers: [
            { en: 'Lee Pace', no: 'Lee Pace' },
            { en: 'Djimon Hounsou', no: 'Djimon Hounsou' },
            { en: 'Damion Poitier', no: 'Damion Poitier' },
            { en: 'Josh Brolin', no: 'Josh Brolin' }
          ],
          correct: 3,
          explanation: {
            en: 'Josh Brolin performs Thanos; Damion Poitier briefly played the character in the 2012 "Avengers" mid-credits scene.',
            no: 'Josh Brolin spiller Thanos; Damion Poitier spilte figuren kort i scenen midt i rulleteksten i «Avengers» (2012).'
          },
          tags: ['thanos', 'cast', 'expert']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the real name of the Red Skull, the villain of "Captain America: The First Avenger"?',
            no: 'Hva er det virkelige navnet til Red Skull, skurken i «Captain America: The First Avenger»?'
          },
          answers: [
            { en: 'Johann Schmidt', no: 'Johann Schmidt' },
            { en: 'Heinz Kruger', no: 'Heinz Kruger' },
            { en: 'Arnim Zola', no: 'Arnim Zola' },
            { en: 'Wolfgang von Strucker', no: 'Wolfgang von Strucker' }
          ],
          correct: 0,
          explanation: {
            en: 'Red Skull is Johann Schmidt, head of HYDRA, later cursed to guard the Soul Stone on Vormir.',
            no: 'Red Skull er Johann Schmidt, leder av HYDRA, senere forbannet til å vokte Sjelesteinen på Vormir.'
          },
          tags: ['red-skull', 'captain-america', 'expert']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the name of the Sokovian capital city that Ultron lifts into the sky in "Age of Ultron"?',
            no: 'Hva heter Sokovias hovedstad som Ultron løfter opp i himmelen i «Age of Ultron»?'
          },
          answers: [
            { en: 'Sokovgrad', no: 'Sokovgrad' },
            { en: 'Transia', no: 'Transia' },
            { en: 'Novi Grad', no: 'Novi Grad' },
            { en: 'Zlatograd', no: 'Zlatograd' }
          ],
          correct: 2,
          explanation: {
            en: 'Ultron raises Sokovia’s capital, Novi Grad, intending to drop it as an extinction-level meteor.',
            no: 'Ultron løfter Sokovias hovedstad, Novi Grad, og planlegger å slippe den som en utryddelses-meteoritt.'
          },
          tags: ['ultron', 'sokovia', 'expert']
        }
      ]
    },
    {
      slug: 'iron-man',
      name: { en: 'Iron Man', no: 'Iron Man' },
      questions: [
        // ---------------- EASY ----------------
        {
          difficulty: 'easy',
          question: {
            en: "What is Iron Man's real name?",
            no: 'Hva er Iron Mans virkelige navn?'
          },
          answers: [
            { en: 'Steve Rogers', no: 'Steve Rogers' },
            { en: 'Bruce Banner', no: 'Bruce Banner' },
            { en: 'Tony Stark', no: 'Tony Stark' },
            { en: 'Peter Parker', no: 'Peter Parker' }
          ],
          correct: 2,
          explanation: {
            en: 'Iron Man is the billionaire inventor Tony Stark.',
            no: 'Iron Man er milliardæren og oppfinneren Tony Stark.'
          },
          tags: ['iron-man', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which actor plays Iron Man in the Marvel Cinematic Universe?',
            no: 'Hvilken skuespiller spiller Iron Man i Marvel Cinematic Universe?'
          },
          answers: [
            { en: 'Robert Downey Jr.', no: 'Robert Downey Jr.' },
            { en: 'Chris Evans', no: 'Chris Evans' },
            { en: 'Chris Hemsworth', no: 'Chris Hemsworth' },
            { en: 'Mark Ruffalo', no: 'Mark Ruffalo' }
          ],
          correct: 0,
          explanation: {
            en: 'Robert Downey Jr. portrayed Tony Stark / Iron Man across the MCU.',
            no: 'Robert Downey Jr. spilte Tony Stark / Iron Man gjennom hele MCU.'
          },
          tags: ['iron-man', 'cast']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What company does Tony Stark run?',
            no: 'Hvilket selskap driver Tony Stark?'
          },
          answers: [
            { en: 'Wayne Enterprises', no: 'Wayne Enterprises' },
            { en: 'Stark Industries', no: 'Stark Industries' },
            { en: 'Oscorp', no: 'Oscorp' },
            { en: 'Pym Technologies', no: 'Pym Technologies' }
          ],
          correct: 1,
          explanation: {
            en: 'Tony Stark inherited and ran Stark Industries, a weapons and technology company.',
            no: 'Tony Stark arvet og drev Stark Industries, et våpen- og teknologiselskap.'
          },
          tags: ['iron-man', 'stark-industries']
        },
        {
          difficulty: 'easy',
          question: {
            en: "What device in Tony's chest powers his suit and keeps shrapnel from his heart?",
            no: 'Hvilken innretning i Tonys bryst driver drakten og holder splinter unna hjertet hans?'
          },
          answers: [
            { en: 'A pacemaker', no: 'En pacemaker' },
            { en: 'The Tesseract', no: 'Tesserakten' },
            { en: 'A super-soldier serum', no: 'Et supersoldat-serum' },
            { en: 'The arc reactor', no: 'Buereaktoren (arc reactor)' }
          ],
          correct: 3,
          explanation: {
            en: 'The arc reactor powers the Iron Man armor and keeps shrapnel from reaching his heart.',
            no: 'Buereaktoren driver Iron Man-drakten og hindrer splinter i å nå hjertet hans.'
          },
          tags: ['iron-man', 'arc-reactor']
        },
        {
          difficulty: 'easy',
          question: {
            en: "What is the name of Tony's AI assistant in the early films?",
            no: 'Hva heter Tonys KI-assistent i de tidlige filmene?'
          },
          answers: [
            { en: 'ULTRON', no: 'ULTRON' },
            { en: 'KAREN', no: 'KAREN' },
            { en: 'J.A.R.V.I.S.', no: 'J.A.R.V.I.S.' },
            { en: 'SKYNET', no: 'SKYNET' }
          ],
          correct: 2,
          explanation: {
            en: 'J.A.R.V.I.S. is the artificial intelligence that runs Tony Stark’s home and suits early on.',
            no: 'J.A.R.V.I.S. er den kunstige intelligensen som styrer Tony Starks hjem og drakter i begynnelsen.'
          },
          tags: ['iron-man', 'jarvis']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which year was the first "Iron Man" film released?',
            no: 'Hvilket år ble den første «Iron Man»-filmen utgitt?'
          },
          answers: [
            { en: '2005', no: '2005' },
            { en: '2008', no: '2008' },
            { en: '2012', no: '2012' },
            { en: '2015', no: '2015' }
          ],
          correct: 1,
          explanation: {
            en: '"Iron Man" (2008) launched the Marvel Cinematic Universe.',
            no: '«Iron Man» (2008) startet Marvel Cinematic Universe.'
          },
          tags: ['iron-man', 'release']
        },
        {
          difficulty: 'easy',
          question: {
            en: "What are the classic colors of Iron Man's armor?",
            no: 'Hvilke klassiske farger har Iron Mans rustning?'
          },
          answers: [
            { en: 'Red and gold', no: 'Rød og gull' },
            { en: 'Blue and white', no: 'Blå og hvit' },
            { en: 'Black and silver', no: 'Svart og sølv' },
            { en: 'Green and purple', no: 'Grønn og lilla' }
          ],
          correct: 0,
          explanation: {
            en: "Iron Man's iconic armor is red and gold.",
            no: 'Iron Mans ikoniske rustning er rød og gull.'
          },
          tags: ['iron-man', 'armor']
        },
        {
          difficulty: 'easy',
          question: {
            en: "Who is Tony Stark's longtime assistant and love interest?",
            no: 'Hvem er Tony Starks mangeårige assistent og kjæreste?'
          },
          answers: [
            { en: 'Natasha Romanoff', no: 'Natasha Romanoff' },
            { en: 'Wanda Maximoff', no: 'Wanda Maximoff' },
            { en: 'Maria Hill', no: 'Maria Hill' },
            { en: 'Pepper Potts', no: 'Pepper Potts' }
          ],
          correct: 3,
          explanation: {
            en: 'Pepper Potts is Tony’s assistant who later becomes his partner and wife.',
            no: 'Pepper Potts er Tonys assistent som senere blir partneren og kona hans.'
          },
          tags: ['iron-man', 'pepper-potts']
        },
        {
          difficulty: 'easy',
          question: {
            en: "What is the name of Tony's best friend who becomes War Machine?",
            no: 'Hva heter Tonys bestevenn som blir War Machine?'
          },
          answers: [
            { en: 'Sam Wilson', no: 'Sam Wilson' },
            { en: 'Happy Hogan', no: 'Happy Hogan' },
            { en: 'James "Rhodey" Rhodes', no: 'James «Rhodey» Rhodes' },
            { en: 'Phil Coulson', no: 'Phil Coulson' }
          ],
          correct: 2,
          explanation: {
            en: 'Colonel James "Rhodey" Rhodes wears a militarized Stark suit as War Machine.',
            no: 'Oberst James «Rhodey» Rhodes bruker en militarisert Stark-drakt som War Machine.'
          },
          tags: ['iron-man', 'war-machine']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In "Avengers: Endgame", what does Tony use to finally defeat Thanos?',
            no: 'I «Avengers: Endgame», hva bruker Tony for å endelig beseire Thanos?'
          },
          answers: [
            { en: "Mjolnir, Thor's hammer", no: 'Mjølner, Thors hammer' },
            { en: 'The Infinity Stones, with a snap', no: 'Uendelighetssteinene, med et knips' },
            { en: "Captain America's shield", no: 'Captain Americas skjold' },
            { en: 'The Tesseract', no: 'Tesserakten' }
          ],
          correct: 1,
          explanation: {
            en: 'Tony takes the Infinity Stones into his nanotech gauntlet and snaps to wipe out Thanos and his army.',
            no: 'Tony tar Uendelighetssteinene i nanoteknologi-hansken sin og knipser for å utslette Thanos og hæren hans.'
          },
          tags: ['iron-man', 'endgame']
        },
        // ---------------- MEDIUM ----------------
        {
          difficulty: 'medium',
          question: {
            en: 'In "Iron Man" (2008), in which country is Tony captured and forced to build a weapon?',
            no: 'I «Iron Man» (2008), i hvilket land blir Tony tatt til fange og tvunget til å bygge et våpen?'
          },
          answers: [
            { en: 'Iraq', no: 'Irak' },
            { en: 'Afghanistan', no: 'Afghanistan' },
            { en: 'Sokovia', no: 'Sokovia' },
            { en: 'Wakanda', no: 'Wakanda' }
          ],
          correct: 1,
          explanation: {
            en: 'Tony is ambushed and captured in Afghanistan, where he secretly builds the first Iron Man suit to escape.',
            no: 'Tony blir overfalt og tatt til fange i Afghanistan, hvor han i hemmelighet bygger den første Iron Man-drakten for å rømme.'
          },
          tags: ['iron-man', 'origin']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the name of the terrorist group that captures Tony Stark?',
            no: 'Hva heter terrorgruppen som tar Tony Stark til fange?'
          },
          answers: [
            { en: 'The Ten Rings', no: 'De ti ringer (Ten Rings)' },
            { en: 'HYDRA', no: 'HYDRA' },
            { en: 'A.I.M.', no: 'A.I.M.' },
            { en: 'The Hand', no: 'The Hand' }
          ],
          correct: 0,
          explanation: {
            en: 'The Ten Rings captures Tony; the group reappears across the MCU, notably in "Shang-Chi".',
            no: 'De ti ringer tar Tony til fange; gruppen dukker opp igjen i MCU, særlig i «Shang-Chi».'
          },
          tags: ['iron-man', 'ten-rings']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Who helps Tony survive and build the first arc reactor while held captive?',
            no: 'Hvem hjelper Tony å overleve og bygge den første buereaktoren mens han holdes fanget?'
          },
          answers: [
            { en: 'Obadiah Stane', no: 'Obadiah Stane' },
            { en: 'Aldrich Killian', no: 'Aldrich Killian' },
            { en: 'Ho Yinsen', no: 'Ho Yinsen' },
            { en: 'Justin Hammer', no: 'Justin Hammer' }
          ],
          correct: 2,
          explanation: {
            en: 'Dr. Ho Yinsen builds the original electromagnet/arc reactor with Tony and sacrifices himself for his escape.',
            no: 'Dr. Ho Yinsen bygger den opprinnelige elektromagneten/buereaktoren sammen med Tony og ofrer seg for at han skal slippe unna.'
          },
          tags: ['iron-man', 'yinsen']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'In "Iron Man 2", what was slowly poisoning Tony Stark?',
            no: 'I «Iron Man 2», hva forgiftet Tony Stark sakte?'
          },
          answers: [
            { en: 'Vibranium dust', no: 'Vibranium-støv' },
            { en: 'Extremis injections', no: 'Extremis-injeksjoner' },
            { en: 'Gamma radiation', no: 'Gammastråling' },
            { en: 'The palladium core of his arc reactor', no: 'Palladium-kjernen i buereaktoren hans' }
          ],
          correct: 3,
          explanation: {
            en: 'The palladium core powering his reactor was poisoning his blood, forcing Tony to find a new element.',
            no: 'Palladium-kjernen som drev reaktoren forgiftet blodet hans, og tvang Tony til å finne et nytt grunnstoff.'
          },
          tags: ['iron-man', 'palladium']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What artificial intelligence does Tony create that becomes the villain of "Avengers: Age of Ultron"?',
            no: 'Hvilken kunstig intelligens skaper Tony som blir skurken i «Avengers: Age of Ultron»?'
          },
          answers: [
            { en: 'Ultron', no: 'Ultron' },
            { en: 'Vision', no: 'Vision' },
            { en: 'FRIDAY', no: 'FRIDAY' },
            { en: 'EDITH', no: 'EDITH' }
          ],
          correct: 0,
          explanation: {
            en: 'Tony (with Bruce Banner) builds Ultron as a peacekeeping AI, but it turns against humanity.',
            no: 'Tony (sammen med Bruce Banner) bygger Ultron som en fredsbevarende KI, men den vender seg mot menneskeheten.'
          },
          tags: ['iron-man', 'ultron']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'After J.A.R.V.I.S. becomes Vision, which AI does Tony use afterward?',
            no: 'Etter at J.A.R.V.I.S. blir Vision, hvilken KI bruker Tony deretter?'
          },
          answers: [
            { en: 'KAREN', no: 'KAREN' },
            { en: 'FRIDAY', no: 'FRIDAY' },
            { en: 'JOCASTA', no: 'JOCASTA' },
            { en: 'EDITH', no: 'EDITH' }
          ],
          correct: 1,
          explanation: {
            en: 'From "Age of Ultron" onward Tony relies on FRIDAY as his primary AI assistant.',
            no: 'Fra «Age of Ultron» og utover bruker Tony FRIDAY som sin viktigste KI-assistent.'
          },
          tags: ['iron-man', 'friday']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'In "Captain America: Civil War", what does Tony support that splits the Avengers?',
            no: 'I «Captain America: Civil War», hva støtter Tony som splitter Avengers?'
          },
          answers: [
            { en: 'Disbanding the Avengers entirely', no: 'Å oppløse Avengers helt' },
            { en: 'The Super-Soldier program', no: 'Supersoldat-programmet' },
            { en: 'The Sokovia Accords', no: 'Sokovia-avtalene' },
            { en: 'The Decimation', no: 'Utslettingen' }
          ],
          correct: 2,
          explanation: {
            en: 'Tony backs the Sokovia Accords, government oversight of the Avengers, opposing Captain America.',
            no: 'Tony støtter Sokovia-avtalene, statlig kontroll over Avengers, i opposisjon til Captain America.'
          },
          tags: ['iron-man', 'civil-war']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'In "Iron Man 3", what triggers Tony’s anxiety and panic attacks?',
            no: 'I «Iron Man 3», hva utløser Tonys angst og panikkanfall?'
          },
          answers: [
            { en: "Howard Stark's death", no: 'Howard Starks død' },
            { en: 'The Ultron program failing', no: 'At Ultron-programmet feiler' },
            { en: 'His break-up with Pepper', no: 'Bruddet med Pepper' },
            { en: 'The Battle of New York and the wormhole', no: 'Slaget om New York og ormehullet' }
          ],
          correct: 3,
          explanation: {
            en: 'The near-death wormhole experience in "The Avengers" leaves Tony with PTSD and panic attacks.',
            no: 'Den nær-døden-opplevelsen i ormehullet i «The Avengers» gir Tony PTSD og panikkanfall.'
          },
          tags: ['iron-man', 'iron-man-3']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the name of the virus/technology Aldrich Killian weaponizes in "Iron Man 3"?',
            no: 'Hva heter viruset/teknologien Aldrich Killian gjør om til våpen i «Iron Man 3»?'
          },
          answers: [
            { en: 'Extremis', no: 'Extremis' },
            { en: 'The super-soldier serum', no: 'Supersoldat-serumet' },
            { en: 'Vita-Rays', no: 'Vita-stråler' },
            { en: 'Pym Particles', no: 'Pym-partikler' }
          ],
          correct: 0,
          explanation: {
            en: 'Extremis gives users regeneration and heat powers but can cause them to explode, driving the plot of "Iron Man 3".',
            no: 'Extremis gir brukere regenerering og varmekrefter, men kan få dem til å eksplodere, og driver handlingen i «Iron Man 3».'
          },
          tags: ['iron-man', 'extremis']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'In "Avengers: Infinity War", on which planet does Tony confront Thanos?',
            no: 'I «Avengers: Infinity War», på hvilken planet konfronterer Tony Thanos?'
          },
          answers: [
            { en: 'Sakaar', no: 'Sakaar' },
            { en: 'Xandar', no: 'Xandar' },
            { en: 'Titan', no: 'Titan' },
            { en: 'Vormir', no: 'Vormir' }
          ],
          correct: 2,
          explanation: {
            en: 'Tony, Spider-Man and the Guardians fight Thanos on his ruined homeworld, Titan.',
            no: 'Tony, Spider-Man og Guardians kjemper mot Thanos på hans ødelagte hjemverden, Titan.'
          },
          tags: ['iron-man', 'infinity-war']
        },
        // ---------------- HARD ----------------
        {
          difficulty: 'hard',
          question: {
            en: 'Which Mark armor does Tony deploy via the flying briefcase in "The Avengers" (2012)?',
            no: 'Hvilken Mark-rustning tar Tony i bruk via den flygende kofferten i «The Avengers» (2012)?'
          },
          answers: [
            { en: 'Mark IV', no: 'Mark IV' },
            { en: 'Mark VI', no: 'Mark VI' },
            { en: 'Mark VII', no: 'Mark VII' },
            { en: 'Mark XLII', no: 'Mark XLII' }
          ],
          correct: 2,
          explanation: {
            en: 'The Mark VII deploys from the bracelet-summoned briefcase when Loki throws Tony from Stark Tower.',
            no: 'Mark VII utløses fra kofferten som hentes med armbåndene da Loke kaster Tony ut fra Stark Tower.'
          },
          tags: ['iron-man', 'armor', 'avengers']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What does Tony call the protocol that summons his entire fleet of suits in "Iron Man 3"?',
            no: 'Hva kaller Tony protokollen som tilkaller hele flåten av drakter i «Iron Man 3»?'
          },
          answers: [
            { en: 'The House Party Protocol', no: 'House Party-protokollen' },
            { en: 'The Clean Slate Protocol', no: 'Clean Slate-protokollen' },
            { en: 'The Veronica Protocol', no: 'Veronica-protokollen' },
            { en: 'The Iron Legion Directive', no: 'Iron Legion-direktivet' }
          ],
          correct: 0,
          explanation: {
            en: 'JARVIS launches the "House Party Protocol", sending all of Tony’s remote-controlled suits into the final battle.',
            no: 'JARVIS starter «House Party-protokollen» og sender alle Tonys fjernstyrte drakter inn i sluttkampen.'
          },
          tags: ['iron-man', 'iron-man-3', 'expert']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Who played the villain Ivan Vanko (Whiplash) in "Iron Man 2"?',
            no: 'Hvem spilte skurken Ivan Vanko (Whiplash) i «Iron Man 2»?'
          },
          answers: [
            { en: 'Sam Rockwell', no: 'Sam Rockwell' },
            { en: 'Guy Pearce', no: 'Guy Pearce' },
            { en: 'Jeff Bridges', no: 'Jeff Bridges' },
            { en: 'Mickey Rourke', no: 'Mickey Rourke' }
          ],
          correct: 3,
          explanation: {
            en: 'Mickey Rourke played Ivan Vanko/Whiplash; Sam Rockwell played rival arms dealer Justin Hammer.',
            no: 'Mickey Rourke spilte Ivan Vanko/Whiplash; Sam Rockwell spilte rivaliserende våpenhandler Justin Hammer.'
          },
          tags: ['iron-man', 'iron-man-2', 'cast']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'In "Spider-Man: Far From Home", what is the name of the AI and drone system Tony wills to Peter Parker?',
            no: 'I «Spider-Man: Far From Home», hva heter KI- og dronesystemet Tony testamenterer til Peter Parker?'
          },
          answers: [
            { en: 'KAREN', no: 'KAREN' },
            { en: 'E.D.I.T.H.', no: 'E.D.I.T.H.' },
            { en: 'FRIDAY', no: 'FRIDAY' },
            { en: 'VERONICA', no: 'VERONICA' }
          ],
          correct: 1,
          explanation: {
            en: 'Tony leaves Peter E.D.I.T.H., a glasses-based AI controlling a Stark satellite and drone array.',
            no: 'Tony etterlater Peter E.D.I.T.H., en brille-basert KI som styrer en Stark-satellitt og en droneflåte.'
          },
          tags: ['iron-man', 'edith', 'legacy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What does the acronym E.D.I.T.H. stand for?',
            no: 'Hva står forkortelsen E.D.I.T.H. for?'
          },
          answers: [
            { en: 'Enhanced Defense Intelligence Tactical Helper', no: 'Enhanced Defense Intelligence Tactical Helper' },
            { en: 'Electronic Drone Interface for Tactical Heroes', no: 'Electronic Drone Interface for Tactical Heroes' },
            { en: "Even Dead, I'm The Hero", no: '«Even Dead, I’m The Hero»' },
            { en: 'Emergency Defense In The Homeland', no: 'Emergency Defense In The Homeland' }
          ],
          correct: 2,
          explanation: {
            en: 'In a typically Stark joke, E.D.I.T.H. stands for "Even Dead, I’m The Hero".',
            no: 'I en typisk Stark-spøk står E.D.I.T.H. for «Even Dead, I’m The Hero» (Selv død er jeg helten).'
          },
          tags: ['iron-man', 'edith', 'expert']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Which nanotech Mark armor does Tony wear in the Titan battle in "Avengers: Infinity War"?',
            no: 'Hvilken nanoteknologi-Mark-rustning bruker Tony i Titan-kampen i «Avengers: Infinity War»?'
          },
          answers: [
            { en: 'Mark L (50)', no: 'Mark L (50)' },
            { en: 'Mark XLVI (46)', no: 'Mark XLVI (46)' },
            { en: 'Mark LXXXV (85)', no: 'Mark LXXXV (85)' },
            { en: 'Mark XLIV (44)', no: 'Mark XLIV (44)' }
          ],
          correct: 0,
          explanation: {
            en: 'The Mark L (50) is Tony’s first nanotech suit, forming weapons and tools on demand against Thanos on Titan.',
            no: 'Mark L (50) er Tonys første nanoteknologi-drakt, som danner våpen og verktøy på kommando mot Thanos på Titan.'
          },
          tags: ['iron-man', 'armor', 'infinity-war']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'In "Avengers: Endgame", what shape does Tony model to crack the math of time travel?',
            no: 'I «Avengers: Endgame», hvilken form modellerer Tony for å knekke matematikken bak tidsreiser?'
          },
          answers: [
            { en: 'A tesseract (hypercube)', no: 'En tesserakt (hyperkube)' },
            { en: 'A dodecahedron', no: 'Et dodekaeder' },
            { en: 'A torus', no: 'En torus' },
            { en: 'A Möbius strip', no: 'En Möbius-strip' }
          ],
          correct: 3,
          explanation: {
            en: 'Tony has FRIDAY model the time-travel problem as an inverted Möbius strip, which yields a working result.',
            no: 'Tony lar FRIDAY modellere tidsreiseproblemet som en invertert Möbius-strip, noe som gir et fungerende resultat.'
          },
          tags: ['iron-man', 'endgame', 'expert']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What are Tony Stark’s final words before he snaps in "Avengers: Endgame"?',
            no: 'Hva er Tony Starks siste ord før han knipser i «Avengers: Endgame»?'
          },
          answers: [
            { en: '"Whatever it takes."', no: '«Whatever it takes.»' },
            { en: '"I am Iron Man."', no: '«I am Iron Man.»' },
            { en: '"Part of the journey is the end."', no: '«Part of the journey is the end.»' },
            { en: '"And I... am... Iron Man’s friend."', no: '«And I... am... Iron Man’s friend.»' }
          ],
          correct: 1,
          explanation: {
            en: 'Tony answers Thanos’s "I am inevitable" with "And I am Iron Man," echoing his line from the first film, then snaps.',
            no: 'Tony svarer på Thanos’ «I am inevitable» med «And I am Iron Man», et ekko av replikken fra den første filmen, og knipser så.'
          },
          tags: ['iron-man', 'endgame', 'quote']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'In "Iron Man" (2008), what is the name of Obadiah Stane’s oversized armor?',
            no: 'I «Iron Man» (2008), hva heter Obadiah Stanes overdimensjonerte rustning?'
          },
          answers: [
            { en: 'Iron Monger', no: 'Iron Monger' },
            { en: 'Whiplash', no: 'Whiplash' },
            { en: 'Crimson Dynamo', no: 'Crimson Dynamo' },
            { en: 'Detroit Steel', no: 'Detroit Steel' }
          ],
          correct: 0,
          explanation: {
            en: 'Obadiah Stane builds the massive Iron Monger suit from the Mark I designs to fight Tony.',
            no: 'Obadiah Stane bygger den massive Iron Monger-drakten basert på Mark I-tegningene for å kjempe mot Tony.'
          },
          tags: ['iron-man', 'iron-monger', 'villain']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'In "Iron Man 2", where had Howard Stark hidden the key to synthesizing the new element?',
            no: 'I «Iron Man 2», hvor hadde Howard Stark skjult nøkkelen til å syntetisere det nye grunnstoffet?'
          },
          answers: [
            { en: 'In a safe-deposit box in Switzerland', no: 'I en bankboks i Sveits' },
            { en: 'Encoded in JARVIS’s source code', no: 'Kodet inn i JARVIS sin kildekode' },
            { en: 'In the layout of the 1974 Stark Expo model city', no: 'I utformingen av modellbyen for Stark Expo 1974' },
            { en: 'Engraved on the original arc reactor', no: 'Inngravert på den opprinnelige buereaktoren' }
          ],
          correct: 2,
          explanation: {
            en: 'The diorama of the 1974 Stark Expo encodes the atomic structure of the new element, which Tony recreates to replace palladium.',
            no: 'Dioramaet av Stark Expo 1974 koder atomstrukturen til det nye grunnstoffet, som Tony gjenskaper for å erstatte palladium.'
          },
          tags: ['iron-man', 'iron-man-2', 'expert']
        }
      ]
    },
    {
      slug: 'captain-america',
      name: { en: 'Captain America', no: 'Captain America' },
      questions: []
    },
    {
      slug: 'thor',
      name: { en: 'Thor', no: 'Thor' },
      questions: []
    },
    {
      slug: 'hulk',
      name: { en: 'Hulk', no: 'Hulk' },
      questions: []
    },
    {
      slug: 'black-widow',
      name: { en: 'Black Widow', no: 'Black Widow' },
      questions: []
    },
    {
      slug: 'hawkeye',
      name: { en: 'Hawkeye', no: 'Hawkeye' },
      questions: []
    }
  ]
};
