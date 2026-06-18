import type { SeedSubcategory } from '../types';

export const theFirstCivilizations: SeedSubcategory = {
  slug: 'the-first-civilizations',
  name: { en: 'The first civilizations', no: 'De første sivilisasjonene' },
  modules: [
    {
      slug: 'ancient-egypt',
      name: { en: 'Ancient Egypt', no: 'Det gamle Egypt' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'Along which river did ancient Egyptian civilization develop?',
            no: 'Langs hvilken elv utviklet den gamle egyptiske sivilisasjonen seg?'
          },
          answers: [
            { en: 'The Nile', no: 'Nilen' },
            { en: 'The Amazon', no: 'Amazonas' },
            { en: 'The Tigris', no: 'Tigris' },
            { en: 'The Yangtze', no: 'Yangtze' }
          ],
          correct: 0,
          explanation: {
            en: 'Ancient Egypt developed along the Nile River, whose floods enriched the soil for farming.',
            no: 'Det gamle Egypt utviklet seg langs Nilen, hvis flommer gjorde jorda fruktbar for jordbruk.'
          },
          tags: ['nile', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What were ancient Egyptian kings called?',
            no: 'Hva ble de gamle egyptiske kongene kalt?'
          },
          answers: [
            { en: 'Pharaohs', no: 'Faraoer' },
            { en: 'Emperors', no: 'Keisere' },
            { en: 'Caliphs', no: 'Kalifer' },
            { en: 'Tsars', no: 'Tsarer' }
          ],
          correct: 0,
          explanation: {
            en: 'The rulers of ancient Egypt were called pharaohs.',
            no: 'Herskerne i det gamle Egypt ble kalt faraoer.'
          },
          tags: ['pharaoh', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What large stone structures were built as tombs for Egyptian pharaohs?',
            no: 'Hvilke store steinbygninger ble bygd som gravkamre for egyptiske faraoer?'
          },
          answers: [
            { en: 'Pyramids', no: 'Pyramider' },
            { en: 'Cathedrals', no: 'Katedraler' },
            { en: 'Ziggurats', no: 'Ziqqurater' },
            { en: 'Castles', no: 'Slott' }
          ],
          correct: 0,
          explanation: {
            en: 'The pyramids were monumental tombs built for pharaohs.',
            no: 'Pyramidene var monumentale gravkamre bygd for faraoer.'
          },
          tags: ['pyramids', 'architecture']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the famous Egyptian writing system using pictures and symbols called?',
            no: 'Hva kalles det berømte egyptiske skriftsystemet med bilder og symboler?'
          },
          answers: [
            { en: 'Hieroglyphs', no: 'Hieroglyfer' },
            { en: 'Cuneiform', no: 'Kileskrift' },
            { en: 'The alphabet', no: 'Alfabetet' },
            { en: 'Runes', no: 'Runer' }
          ],
          correct: 0,
          explanation: {
            en: 'Ancient Egyptians wrote using hieroglyphs, a system of pictures and symbols.',
            no: 'De gamle egypterne skrev med hieroglyfer, et system av bilder og symboler.'
          },
          tags: ['hieroglyphs', 'writing']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the large statue with a lion’s body and human head near the pyramids called?',
            no: 'Hva kalles den store statuen med løvekropp og menneskehode nær pyramidene?'
          },
          answers: [
            { en: 'The Sphinx', no: 'Sfinksen' },
            { en: 'The Colossus', no: 'Kolossen' },
            { en: 'The Minotaur', no: 'Minotauros' },
            { en: 'The Oracle', no: 'Orakelet' }
          ],
          correct: 0,
          explanation: {
            en: 'The Great Sphinx of Giza has a lion’s body and a human head.',
            no: 'Den store sfinksen i Giza har løvekropp og menneskehode.'
          },
          tags: ['sphinx', 'monuments']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What did Egyptians do to preserve bodies for the afterlife?',
            no: 'Hva gjorde egypterne for å bevare kropper til livet etter døden?'
          },
          answers: [
            { en: 'Mummification', no: 'Mumifisering' },
            { en: 'Cremation', no: 'Kremering' },
            { en: 'Freezing', no: 'Frysing' },
            { en: 'Burial at sea', no: 'Sjøbegravelse' }
          ],
          correct: 0,
          explanation: {
            en: 'Egyptians used mummification to preserve bodies for the afterlife.',
            no: 'Egypterne brukte mumifisering for å bevare kropper til livet etter døden.'
          },
          tags: ['mummification', 'religion']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which young pharaoh’s nearly intact tomb was discovered in 1922?',
            no: 'Hvilken ung faraos nesten uberørte grav ble oppdaget i 1922?'
          },
          answers: [
            { en: 'Tutankhamun', no: 'Tutankhamon' },
            { en: 'Julius Caesar', no: 'Julius Cæsar' },
            { en: 'Hammurabi', no: 'Hammurabi' },
            { en: 'Alexander the Great', no: 'Aleksander den store' }
          ],
          correct: 0,
          explanation: {
            en: 'Tutankhamun’s tomb, found in 1922, was famous for its treasures.',
            no: 'Tutankhamons grav, funnet i 1922, var berømt for sine skatter.'
          },
          tags: ['tutankhamun', 'pharaoh']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which famous female ruler was the last active pharaoh of Egypt?',
            no: 'Hvilken berømt kvinnelig hersker var den siste aktive faraoen i Egypt?'
          },
          answers: [
            { en: 'Cleopatra', no: 'Kleopatra' },
            { en: 'Nefertari', no: 'Nefertari' },
            { en: 'Joan of Arc', no: 'Jeanne d’Arc' },
            { en: 'Boudica', no: 'Boudica' }
          ],
          correct: 0,
          explanation: {
            en: 'Cleopatra VII was the last active ruler of the Ptolemaic Kingdom of Egypt.',
            no: 'Kleopatra VII var den siste aktive herskeren i det ptolemeiske kongedømmet Egypt.'
          },
          tags: ['cleopatra', 'pharaoh']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What writing material did Egyptians make from a river plant?',
            no: 'Hvilket skrivemateriale laget egypterne av en elveplante?'
          },
          answers: [
            { en: 'Papyrus', no: 'Papyrus' },
            { en: 'Paper', no: 'Papir' },
            { en: 'Parchment', no: 'Pergament' },
            { en: 'Silk', no: 'Silke' }
          ],
          correct: 0,
          explanation: {
            en: 'Egyptians made papyrus from a reed plant growing along the Nile.',
            no: 'Egypterne laget papyrus av en sivplante som vokste langs Nilen.'
          },
          tags: ['papyrus', 'writing']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The ancient Egyptians worshipped how many gods?',
            no: 'De gamle egypterne tilba hvor mange guder?'
          },
          answers: [
            { en: 'Many gods', no: 'Mange guder' },
            { en: 'Only one god', no: 'Bare én gud' },
            { en: 'No gods', no: 'Ingen guder' },
            { en: 'Exactly two gods', no: 'Nøyaktig to guder' }
          ],
          correct: 0,
          explanation: {
            en: 'Ancient Egyptian religion was polytheistic, with many gods such as Ra, Osiris, and Isis.',
            no: 'Den gamle egyptiske religionen var polyteistisk, med mange guder som Ra, Osiris og Isis.'
          },
          tags: ['religion', 'polytheism']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which Egyptian sun god was one of the most important deities?',
            no: 'Hvilken egyptisk solgud var en av de viktigste gudene?'
          },
          answers: [
            { en: 'Ra', no: 'Ra' },
            { en: 'Zeus', no: 'Zevs' },
            { en: 'Thor', no: 'Tor' },
            { en: 'Vishnu', no: 'Vishnu' }
          ],
          correct: 0,
          explanation: {
            en: 'Ra was the Egyptian sun god and one of the most important deities.',
            no: 'Ra var den egyptiske solguden og en av de viktigste gudene.'
          },
          tags: ['ra', 'gods']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The largest pyramids were built at which site?',
            no: 'De største pyramidene ble bygd ved hvilket sted?'
          },
          answers: [
            { en: 'Giza', no: 'Giza' },
            { en: 'Babylon', no: 'Babylon' },
            { en: 'Athens', no: 'Aten' },
            { en: 'Rome', no: 'Roma' }
          ],
          correct: 0,
          explanation: {
            en: 'The famous Great Pyramids were built at Giza, near modern Cairo.',
            no: 'De berømte store pyramidene ble bygd ved Giza, nær dagens Kairo.'
          },
          tags: ['giza', 'pyramids']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What object helped scholars decode Egyptian hieroglyphs?',
            no: 'Hvilken gjenstand hjalp forskere med å tyde egyptiske hieroglyfer?'
          },
          answers: [
            { en: 'The Rosetta Stone', no: 'Rosettasteinen' },
            { en: 'The Code of Hammurabi', no: 'Hammurabis lov' },
            { en: 'The Dead Sea Scrolls', no: 'Dødehavsrullene' },
            { en: 'The Magna Carta', no: 'Magna Carta' }
          ],
          correct: 0,
          explanation: {
            en: 'The Rosetta Stone, with the same text in three scripts, allowed hieroglyphs to be decoded.',
            no: 'Rosettasteinen, med samme tekst i tre skriftsystemer, gjorde det mulig å tyde hieroglyfene.'
          },
          tags: ['rosetta-stone', 'writing']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What was the main role of priests in ancient Egypt?',
            no: 'Hva var prestenes viktigste rolle i det gamle Egypt?'
          },
          answers: [
            { en: 'Serving the gods and temples', no: 'Å tjene gudene og templene' },
            { en: 'Commanding the navy', no: 'Å lede marinen' },
            { en: 'Printing books', no: 'Å trykke bøker' },
            { en: 'Building roads only', no: 'Bare å bygge veier' }
          ],
          correct: 0,
          explanation: {
            en: 'Priests served the gods, performed rituals, and maintained the temples.',
            no: 'Prestene tjente gudene, utførte ritualer og holdt templene ved like.'
          },
          tags: ['priests', 'religion']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The yearly flooding of the Nile was important because it did what?',
            no: 'Den årlige flommen i Nilen var viktig fordi den gjorde hva?'
          },
          answers: [
            { en: 'Made the land fertile for farming', no: 'Gjorde jorda fruktbar for jordbruk' },
            { en: 'Destroyed all the crops', no: 'Ødela alle avlingene' },
            { en: 'Froze the river', no: 'Frøs elven' },
            { en: 'Created mountains', no: 'Skapte fjell' }
          ],
          correct: 0,
          explanation: {
            en: 'The Nile’s annual flood deposited rich silt, making farming possible in the desert.',
            no: 'Nilens årlige flom avsatte næringsrik slam og gjorde jordbruk mulig i ørkenen.'
          },
          tags: ['nile', 'agriculture']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why was the Nile essential to Egyptian civilization?',
            no: 'Hvorfor var Nilen avgjørende for den egyptiske sivilisasjonen?'
          },
          answers: [
            { en: 'It provided water, fertile soil, and transport', no: 'Den ga vann, fruktbar jord og transport' },
            { en: 'It blocked all trade', no: 'Den blokkerte all handel' },
            { en: 'It was only used for sport', no: 'Den ble bare brukt til sport' },
            { en: 'It had no practical use', no: 'Den hadde ingen praktisk nytte' }
          ],
          correct: 0,
          explanation: {
            en: 'The Nile supplied drinking water, irrigated crops, and served as a highway for trade and travel.',
            no: 'Nilen ga drikkevann, vannet avlinger og fungerte som en ferdselsåre for handel og reise.'
          },
          tags: ['nile', 'importance']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How was ancient Egyptian society structured?',
            no: 'Hvordan var det gamle egyptiske samfunnet strukturert?'
          },
          answers: [
            { en: 'As a hierarchy with the pharaoh at the top', no: 'Som et hierarki med faraoen på toppen' },
            { en: 'As a society with no leaders', no: 'Som et samfunn uten ledere' },
            { en: 'As a democracy of equals', no: 'Som et demokrati av likemenn' },
            { en: 'As nomadic clans only', no: 'Bare som nomadiske klaner' }
          ],
          correct: 0,
          explanation: {
            en: 'Egyptian society was a hierarchy: pharaoh, officials and priests, scribes, artisans, farmers, and slaves.',
            no: 'Det egyptiske samfunnet var et hierarki: farao, embetsmenn og prester, skrivere, håndverkere, bønder og slaver.'
          },
          tags: ['society', 'hierarchy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did Egyptians build elaborate tombs and pyramids?',
            no: 'Hvorfor bygde egypterne forseggjorte gravkamre og pyramider?'
          },
          answers: [
            { en: 'They believed in an afterlife requiring preparation', no: 'De trodde på et liv etter døden som krevde forberedelse' },
            { en: 'They needed grain storage', no: 'De trengte kornlager' },
            { en: 'They wanted military forts', no: 'De ønsket militære festninger' },
            { en: 'They had no religious reason', no: 'De hadde ingen religiøs grunn' }
          ],
          correct: 0,
          explanation: {
            en: 'Belief in an afterlife led Egyptians to build tombs and preserve bodies for the journey beyond death.',
            no: 'Troen på et liv etter døden fikk egypterne til å bygge gravkamre og bevare kropper til reisen etter døden.'
          },
          tags: ['afterlife', 'tombs']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What role did scribes play in Egyptian society?',
            no: 'Hvilken rolle spilte skrivere i det egyptiske samfunnet?'
          },
          answers: [
            { en: 'They recorded taxes, laws, and records using writing', no: 'De nedtegnet skatter, lover og opptegnelser med skrift' },
            { en: 'They led armies into battle', no: 'De ledet hærer i kamp' },
            { en: 'They built the pyramids alone', no: 'De bygde pyramidene alene' },
            { en: 'They had no important role', no: 'De hadde ingen viktig rolle' }
          ],
          correct: 0,
          explanation: {
            en: 'Scribes were literate officials who kept records of taxes, trade, laws, and religious texts.',
            no: 'Skrivere var lesekyndige embetsmenn som førte opptegnelser over skatter, handel, lover og religiøse tekster.'
          },
          tags: ['scribes', 'writing']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Egyptians view the pharaoh’s role?',
            no: 'Hvordan så egypterne på faraoens rolle?'
          },
          answers: [
            { en: 'As a god-king linking the people to the gods', no: 'Som en gudekonge som forbandt folket med gudene' },
            { en: 'As an elected mayor', no: 'Som en valgt ordfører' },
            { en: 'As a foreign ambassador', no: 'Som en utenlandsk ambassadør' },
            { en: 'As an ordinary farmer', no: 'Som en vanlig bonde' }
          ],
          correct: 0,
          explanation: {
            en: 'The pharaoh was seen as a divine ruler, a link between the gods and the people.',
            no: 'Faraoen ble sett på som en guddommelig hersker, et bindeledd mellom gudene og folket.'
          },
          tags: ['pharaoh', 'religion']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did geography help protect ancient Egypt from invaders?',
            no: 'Hvordan bidro geografien til å beskytte det gamle Egypt mot inntrengere?'
          },
          answers: [
            { en: 'Deserts and seas formed natural barriers', no: 'Ørkener og hav dannet naturlige barrierer' },
            { en: 'It had no natural defenses', no: 'Det hadde ingen naturlige forsvar' },
            { en: 'High mountains surrounded the delta', no: 'Høye fjell omkranset deltaet' },
            { en: 'Thick forests blocked all routes', no: 'Tette skoger sperret alle ruter' }
          ],
          correct: 0,
          explanation: {
            en: 'Surrounding deserts and the Mediterranean and Red Seas protected Egypt from many invasions.',
            no: 'Omkringliggende ørkener og Middelhavet og Rødehavet beskyttet Egypt mot mange invasjoner.'
          },
          tags: ['geography', 'defense']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does the process of mummification reveal about Egyptian beliefs?',
            no: 'Hva avslører mumifiseringsprosessen om egyptiske trosforestillinger?'
          },
          answers: [
            { en: 'That they believed the body was needed in the afterlife', no: 'At de trodde kroppen var nødvendig i livet etter døden' },
            { en: 'That they feared all the dead', no: 'At de fryktet alle døde' },
            { en: 'That they rejected religion', no: 'At de avviste religion' },
            { en: 'That they had no burial customs', no: 'At de ikke hadde gravskikker' }
          ],
          correct: 0,
          explanation: {
            en: 'Mummification reflects the belief that the preserved body was needed for life after death.',
            no: 'Mumifisering gjenspeiler troen på at den bevarte kroppen var nødvendig for livet etter døden.'
          },
          tags: ['mummification', 'beliefs']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did trade benefit ancient Egypt?',
            no: 'Hvordan tjente det gamle Egypt på handel?'
          },
          answers: [
            { en: 'It brought goods like gold, wood, and incense', no: 'Den brakte varer som gull, tre og røkelse' },
            { en: 'It isolated Egypt completely', no: 'Den isolerte Egypt fullstendig' },
            { en: 'It had no economic value', no: 'Den hadde ingen økonomisk verdi' },
            { en: 'It only exported sand', no: 'Den eksporterte bare sand' }
          ],
          correct: 0,
          explanation: {
            en: 'Egypt traded grain and goods for timber, gold, incense, and luxury items from other lands.',
            no: 'Egypt byttet korn og varer mot tømmer, gull, røkelse og luksusvarer fra andre land.'
          },
          tags: ['trade', 'economy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why were the annual Nile floods predictable and useful?',
            no: 'Hvorfor var de årlige nilflommene forutsigbare og nyttige?'
          },
          answers: [
            { en: 'They came at regular times, letting farmers plan planting', no: 'De kom til faste tider og lot bøndene planlegge såingen' },
            { en: 'They came randomly without warning', no: 'De kom tilfeldig uten forvarsel' },
            { en: 'They destroyed all farmland', no: 'De ødela all dyrkbar mark' },
            { en: 'They never actually occurred', no: 'De fant aldri egentlig sted' }
          ],
          correct: 0,
          explanation: {
            en: 'The Nile flooded predictably each year, allowing Egyptians to organize farming around it.',
            no: 'Nilen flommet forutsigbart hvert år, slik at egypterne kunne organisere jordbruket rundt den.'
          },
          tags: ['nile', 'agriculture']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was the purpose of Egyptian temples?',
            no: 'Hva var formålet med de egyptiske templene?'
          },
          answers: [
            { en: 'To honor the gods and hold religious rituals', no: 'Å ære gudene og holde religiøse ritualer' },
            { en: 'To serve as marketplaces only', no: 'Bare å fungere som markedsplasser' },
            { en: 'To store weapons', no: 'Å lagre våpen' },
            { en: 'To house foreign armies', no: 'Å huse utenlandske hærer' }
          ],
          correct: 0,
          explanation: {
            en: 'Temples were centers of worship where priests served the gods and performed rituals.',
            no: 'Templene var sentre for tilbedelse der prester tjente gudene og utførte ritualer.'
          },
          tags: ['temples', 'religion']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did ancient Egypt’s long stability compare to many neighbors?',
            no: 'Hvordan var det gamle Egypts langvarige stabilitet sammenlignet med mange naboer?'
          },
          answers: [
            { en: 'It lasted for thousands of years with lasting traditions', no: 'Det varte i tusenvis av år med varige tradisjoner' },
            { en: 'It collapsed after a single year', no: 'Det brøt sammen etter ett år' },
            { en: 'It never had any government', no: 'Det hadde aldri noen styreform' },
            { en: 'It changed completely every decade', no: 'Det endret seg fullstendig hvert tiår' }
          ],
          correct: 0,
          explanation: {
            en: 'Egyptian civilization endured for around 3,000 years with remarkable cultural continuity.',
            no: 'Den egyptiske sivilisasjonen varte i omkring 3 000 år med bemerkelsesverdig kulturell kontinuitet.'
          },
          tags: ['stability', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What advances did ancient Egyptians make in mathematics and engineering?',
            no: 'Hvilke fremskritt gjorde de gamle egypterne innen matematikk og ingeniørkunst?'
          },
          answers: [
            { en: 'Geometry and techniques to build huge monuments', no: 'Geometri og teknikker for å bygge enorme monumenter' },
            { en: 'They used no mathematics', no: 'De brukte ingen matematikk' },
            { en: 'They invented the steam engine', no: 'De oppfant dampmaskinen' },
            { en: 'They had no engineering skill', no: 'De hadde ingen ingeniørferdigheter' }
          ],
          correct: 0,
          explanation: {
            en: 'Egyptians used practical geometry and engineering to build pyramids, temples, and irrigation systems.',
            no: 'Egypterne brukte praktisk geometri og ingeniørkunst for å bygge pyramider, templer og vanningssystemer.'
          },
          tags: ['mathematics', 'engineering']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the unification of Upper and Lower Egypt shape its early history?',
            no: 'Hvordan formet foreningen av Øvre og Nedre Egypt den tidlige historien dens?'
          },
          answers: [
            { en: 'It created a unified kingdom under a single ruler', no: 'Den skapte et samlet kongerike under én hersker' },
            { en: 'It split Egypt into many states', no: 'Den delte Egypt i mange stater' },
            { en: 'It ended Egyptian civilization', no: 'Den avsluttet den egyptiske sivilisasjonen' },
            { en: 'It had no political effect', no: 'Den hadde ingen politisk effekt' }
          ],
          correct: 0,
          explanation: {
            en: 'The unification of Upper and Lower Egypt around 3100 BCE formed one of the world’s first nation-states.',
            no: 'Foreningen av Øvre og Nedre Egypt omkring 3100 f.Kr. dannet en av verdens første nasjonalstater.'
          },
          tags: ['unification', 'history']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians divide Egyptian history into Old, Middle, and New Kingdoms?',
            no: 'Hvorfor deler historikere egyptisk historie inn i Gamleriket, Mellomriket og Nyriket?'
          },
          answers: [
            { en: 'They mark periods of strong unity separated by times of instability', no: 'De markerer perioder med sterk enhet adskilt av tider med ustabilitet' },
            { en: 'They are based on modern calendars', no: 'De er basert på moderne kalendere' },
            { en: 'They describe three different countries', no: 'De beskriver tre ulike land' },
            { en: 'They have no historical basis', no: 'De har ingen historisk grunnlag' }
          ],
          correct: 0,
          explanation: {
            en: 'The Old, Middle, and New Kingdoms were eras of centralized power, divided by unstable "Intermediate Periods."',
            no: 'Gamleriket, Mellomriket og Nyriket var epoker med sentralisert makt, adskilt av ustabile «mellomperioder».'
          },
          tags: ['periods', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the pharaoh Akhenaten attempt to change Egyptian religion?',
            no: 'Hvordan forsøkte faraoen Akhenaten å endre egyptisk religion?'
          },
          answers: [
            { en: 'He promoted worship of a single sun disk, the Aten', no: 'Han fremmet tilbedelse av en enkelt solskive, Aten' },
            { en: 'He banned all gods forever', no: 'Han forbød alle guder for alltid' },
            { en: 'He introduced Christianity', no: 'Han innførte kristendommen' },
            { en: 'He abolished religion entirely', no: 'Han avskaffet religion fullstendig' }
          ],
          correct: 0,
          explanation: {
            en: 'Akhenaten promoted worship of the Aten, a near-monotheistic shift later reversed after his death.',
            no: 'Akhenaten fremmet tilbedelse av Aten, et nesten monoteistisk skifte som senere ble reversert etter hans død.'
          },
          tags: ['akhenaten', 'religion']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the Rosetta Stone considered so important to Egyptology?',
            no: 'Hvorfor regnes Rosettasteinen som så viktig for egyptologien?'
          },
          answers: [
            { en: 'Its parallel texts let scholars finally decipher hieroglyphs', no: 'Dens parallelle tekster lot forskere endelig tyde hieroglyfene' },
            { en: 'It was the first pyramid', no: 'Den var den første pyramiden' },
            { en: 'It was a pharaoh’s throne', no: 'Den var en faraos trone' },
            { en: 'It listed all Egyptian kings', no: 'Den listet opp alle egyptiske konger' }
          ],
          correct: 0,
          explanation: {
            en: 'Because it repeated one decree in Greek and two Egyptian scripts, the Rosetta Stone unlocked hieroglyphs.',
            no: 'Fordi den gjentok ett dekret på gresk og to egyptiske skriftsystemer, låste Rosettasteinen opp hieroglyfene.'
          },
          tags: ['rosetta-stone', 'egyptology']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did Egyptian religion reinforce the pharaoh’s political power?',
            no: 'Hvordan styrket egyptisk religion faraoens politiske makt?'
          },
          answers: [
            { en: 'Divine kingship made obedience a religious duty', no: 'Det guddommelige kongedømmet gjorde lydighet til en religiøs plikt' },
            { en: 'Religion opposed the pharaoh', no: 'Religionen motarbeidet faraoen' },
            { en: 'It made the pharaoh powerless', no: 'Den gjorde faraoen maktesløs' },
            { en: 'It had no political role', no: 'Den hadde ingen politisk rolle' }
          ],
          correct: 0,
          explanation: {
            en: 'By portraying the pharaoh as divine, religion made loyalty to him a sacred obligation.',
            no: 'Ved å fremstille faraoen som guddommelig gjorde religionen lojalitet mot ham til en hellig plikt.'
          },
          tags: ['religion', 'power']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did monumental building projects require strong central authority?',
            no: 'Hvorfor krevde monumentale byggeprosjekter sterk sentral myndighet?'
          },
          answers: [
            { en: 'They needed organized labor, resources, and planning on a vast scale', no: 'De krevde organisert arbeidskraft, ressurser og planlegging i stor skala' },
            { en: 'They needed no coordination', no: 'De krevde ingen koordinering' },
            { en: 'They were built by single individuals', no: 'De ble bygd av enkeltpersoner' },
            { en: 'They required no resources', no: 'De krevde ingen ressurser' }
          ],
          correct: 0,
          explanation: {
            en: 'Building pyramids demanded a centralized state able to mobilize labor, food, and materials.',
            no: 'Å bygge pyramider krevde en sentralisert stat som kunne mobilisere arbeidskraft, mat og materialer.'
          },
          tags: ['monuments', 'state']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How have modern discoveries changed views of who built the pyramids?',
            no: 'Hvordan har moderne funn endret synet på hvem som bygde pyramidene?'
          },
          answers: [
            { en: 'Evidence suggests skilled paid laborers, not only slaves, built them', no: 'Funn tyder på at dyktige, betalte arbeidere, ikke bare slaver, bygde dem' },
            { en: 'They prove no one built them', no: 'De beviser at ingen bygde dem' },
            { en: 'They show foreigners built them alone', no: 'De viser at utlendinger bygde dem alene' },
            { en: 'They confirm the pyramids are natural', no: 'De bekrefter at pyramidene er naturlige' }
          ],
          correct: 0,
          explanation: {
            en: 'Archaeology of workers’ villages indicates organized, skilled laborers, not just enslaved people, built the pyramids.',
            no: 'Arkeologi av arbeiderlandsbyer tyder på at organiserte, dyktige arbeidere, ikke bare slaver, bygde pyramidene.'
          },
          tags: ['pyramids', 'archaeology']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did Egypt’s relationship with Nubia shape its history?',
            no: 'Hvordan formet Egypts forhold til Nubia historien dets?'
          },
          answers: [
            { en: 'Trade, conflict, and even Nubian rule influenced both regions', no: 'Handel, konflikt og til og med nubisk styre påvirket begge regionene' },
            { en: 'They never had any contact', no: 'De hadde aldri noen kontakt' },
            { en: 'Nubia destroyed Egypt instantly', no: 'Nubia ødela Egypt øyeblikkelig' },
            { en: 'It had no historical impact', no: 'Det hadde ingen historisk innvirkning' }
          ],
          correct: 0,
          explanation: {
            en: 'Egypt and Nubia exchanged goods and warred, and Nubian kings even ruled Egypt as the 25th Dynasty.',
            no: 'Egypt og Nubia utvekslet varer og førte krig, og nubiske konger styrte til og med Egypt som det 25. dynastiet.'
          },
          tags: ['nubia', 'relations']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did ancient Egyptian civilization eventually decline?',
            no: 'Hvorfor gikk den gamle egyptiske sivilisasjonen til slutt tilbake?'
          },
          answers: [
            { en: 'Foreign conquests, internal weakness, and economic strain combined', no: 'Utenlandske erobringer, indre svakhet og økonomisk press virket sammen' },
            { en: 'A single flood ended it overnight', no: 'En enkelt flom avsluttet den over natten' },
            { en: 'It never actually declined', no: 'Den gikk aldri egentlig tilbake' },
            { en: 'It was abandoned voluntarily', no: 'Den ble forlatt frivillig' }
          ],
          correct: 0,
          explanation: {
            en: 'Egypt declined through repeated foreign conquest (Assyrians, Persians, Greeks, Romans) and internal troubles.',
            no: 'Egypt gikk tilbake gjennom gjentatte utenlandske erobringer (assyrere, persere, grekere, romere) og indre problemer.'
          },
          tags: ['decline', 'causes']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did writing contribute to the strength of the Egyptian state?',
            no: 'Hvordan bidro skriftspråket til den egyptiske statens styrke?'
          },
          answers: [
            { en: 'It enabled administration, taxation, and record-keeping', no: 'Det muliggjorde administrasjon, beskatning og dokumentasjon' },
            { en: 'It weakened government control', no: 'Det svekket regjeringens kontroll' },
            { en: 'It was used only for decoration', no: 'Det ble bare brukt til pynt' },
            { en: 'It had no administrative use', no: 'Det hadde ingen administrativ nytte' }
          ],
          correct: 0,
          explanation: {
            en: 'Writing let officials record taxes, manage resources, and administer a large, organized state.',
            no: 'Skrift lot embetsmenn registrere skatter, forvalte ressurser og administrere en stor, organisert stat.'
          },
          tags: ['writing', 'state']
        }
      ]
    },
    {
      slug: 'mesopotamian-civilization',
      name: { en: 'Mesopotamian civilization', no: 'Den mesopotamiske sivilisasjonen' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'Between which two rivers did Mesopotamian civilization develop?',
            no: 'Mellom hvilke to elver utviklet den mesopotamiske sivilisasjonen seg?'
          },
          answers: [
            { en: 'The Tigris and the Euphrates', no: 'Tigris og Eufrat' },
            { en: 'The Nile and the Congo', no: 'Nilen og Kongo' },
            { en: 'The Amazon and the Plata', no: 'Amazonas og La Plata' },
            { en: 'The Ganges and the Indus', no: 'Ganges og Indus' }
          ],
          correct: 0,
          explanation: {
            en: 'Mesopotamia developed between the Tigris and Euphrates rivers.',
            no: 'Mesopotamia utviklet seg mellom elvene Tigris og Eufrat.'
          },
          tags: ['rivers', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does the name "Mesopotamia" mean?',
            no: 'Hva betyr navnet «Mesopotamia»?'
          },
          answers: [
            { en: 'Land between the rivers', no: 'Landet mellom elvene' },
            { en: 'Land of the pyramids', no: 'Pyramidenes land' },
            { en: 'Land of gold', no: 'Gullets land' },
            { en: 'Land of the sea', no: 'Havets land' }
          ],
          correct: 0,
          explanation: {
            en: '"Mesopotamia" is Greek for "land between the rivers."',
            no: '«Mesopotamia» er gresk for «landet mellom elvene».'
          },
          tags: ['definition', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which modern country is most of ancient Mesopotamia located?',
            no: 'I hvilket moderne land ligger mesteparten av det gamle Mesopotamia?'
          },
          answers: [
            { en: 'Iraq', no: 'Irak' },
            { en: 'Egypt', no: 'Egypt' },
            { en: 'Greece', no: 'Hellas' },
            { en: 'India', no: 'India' }
          ],
          correct: 0,
          explanation: {
            en: 'Most of ancient Mesopotamia lies in modern-day Iraq.',
            no: 'Mesteparten av det gamle Mesopotamia ligger i dagens Irak.'
          },
          tags: ['iraq', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the world’s earliest known writing system, developed in Mesopotamia, called?',
            no: 'Hva kalles verdens tidligste kjente skriftsystem, utviklet i Mesopotamia?'
          },
          answers: [
            { en: 'Cuneiform', no: 'Kileskrift' },
            { en: 'Hieroglyphs', no: 'Hieroglyfer' },
            { en: 'The Latin alphabet', no: 'Det latinske alfabetet' },
            { en: 'Braille', no: 'Blindeskrift' }
          ],
          correct: 0,
          explanation: {
            en: 'Cuneiform, made with wedge-shaped marks on clay, is among the earliest writing systems.',
            no: 'Kileskrift, laget med kileformede tegn i leire, er blant de tidligste skriftsystemene.'
          },
          tags: ['cuneiform', 'writing']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which people are often credited with creating the first Mesopotamian cities?',
            no: 'Hvilket folk får ofte æren for å ha skapt de første mesopotamiske byene?'
          },
          answers: [
            { en: 'The Sumerians', no: 'Sumererne' },
            { en: 'The Romans', no: 'Romerne' },
            { en: 'The Aztecs', no: 'Aztekerne' },
            { en: 'The Vikings', no: 'Vikingene' }
          ],
          correct: 0,
          explanation: {
            en: 'The Sumerians built some of the world’s first cities in southern Mesopotamia.',
            no: 'Sumererne bygde noen av verdens første byer i det sørlige Mesopotamia.'
          },
          tags: ['sumerians', 'cities']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What large stepped temple towers did Mesopotamians build?',
            no: 'Hvilke store trappeformede tempeltårn bygde mesopotamerne?'
          },
          answers: [
            { en: 'Ziggurats', no: 'Ziqqurater' },
            { en: 'Pyramids', no: 'Pyramider' },
            { en: 'Cathedrals', no: 'Katedraler' },
            { en: 'Pagodas', no: 'Pagoder' }
          ],
          correct: 0,
          explanation: {
            en: 'Ziggurats were massive stepped temple towers dedicated to the gods.',
            no: 'Ziqqurater var massive trappeformede tempeltårn viet til gudene.'
          },
          tags: ['ziggurat', 'architecture']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which Babylonian king is famous for an early written law code?',
            no: 'Hvilken babylonsk konge er berømt for en tidlig skreven lovsamling?'
          },
          answers: [
            { en: 'Hammurabi', no: 'Hammurabi' },
            { en: 'Tutankhamun', no: 'Tutankhamon' },
            { en: 'Julius Caesar', no: 'Julius Cæsar' },
            { en: 'Cyrus', no: 'Kyros' }
          ],
          correct: 0,
          explanation: {
            en: 'King Hammurabi of Babylon issued one of the earliest known written law codes.',
            no: 'Kong Hammurabi av Babylon utstedte en av de tidligste kjente skrevne lovsamlingene.'
          },
          tags: ['hammurabi', 'law']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What useful round invention is often credited to Mesopotamia?',
            no: 'Hvilken nyttig rund oppfinnelse tilskrives ofte Mesopotamia?'
          },
          answers: [
            { en: 'The wheel', no: 'Hjulet' },
            { en: 'The clock', no: 'Klokken' },
            { en: 'The compass', no: 'Kompasset' },
            { en: 'The telescope', no: 'Teleskopet' }
          ],
          correct: 0,
          explanation: {
            en: 'Mesopotamia is associated with early use of the wheel for transport and pottery.',
            no: 'Mesopotamia forbindes med tidlig bruk av hjulet til transport og keramikk.'
          },
          tags: ['wheel', 'inventions']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'On what material did Mesopotamians usually write?',
            no: 'På hvilket materiale skrev mesopotamerne vanligvis?'
          },
          answers: [
            { en: 'Clay tablets', no: 'Leirtavler' },
            { en: 'Papyrus scrolls', no: 'Papyrusruller' },
            { en: 'Paper books', no: 'Papirbøker' },
            { en: 'Silk cloth', no: 'Silkestoff' }
          ],
          correct: 0,
          explanation: {
            en: 'Scribes pressed cuneiform signs into wet clay tablets, which then hardened.',
            no: 'Skrivere presset kileskrifttegn inn i våte leirtavler, som deretter herdet.'
          },
          tags: ['clay-tablets', 'writing']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Was Mesopotamian religion polytheistic or monotheistic?',
            no: 'Var mesopotamisk religion polyteistisk eller monoteistisk?'
          },
          answers: [
            { en: 'Polytheistic (many gods)', no: 'Polyteistisk (mange guder)' },
            { en: 'Monotheistic (one god)', no: 'Monoteistisk (én gud)' },
            { en: 'Atheistic (no gods)', no: 'Ateistisk (ingen guder)' },
            { en: 'It had no religion', no: 'Den hadde ingen religion' }
          ],
          correct: 0,
          explanation: {
            en: 'Mesopotamians worshipped many gods, each often linked to a city or natural force.',
            no: 'Mesopotamerne tilba mange guder, ofte knyttet til en by eller en naturkraft.'
          },
          tags: ['religion', 'polytheism']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'An early powerful city-state of Sumer was which of these?',
            no: 'En tidlig mektig bystat i Sumer var hvilken av disse?'
          },
          answers: [
            { en: 'Ur', no: 'Ur' },
            { en: 'Paris', no: 'Paris' },
            { en: 'Tokyo', no: 'Tokyo' },
            { en: 'Cairo', no: 'Kairo' }
          ],
          correct: 0,
          explanation: {
            en: 'Ur was a major Sumerian city-state in southern Mesopotamia.',
            no: 'Ur var en betydelig sumerisk bystat i det sørlige Mesopotamia.'
          },
          tags: ['ur', 'cities']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which famous ancient epic comes from Mesopotamia?',
            no: 'Hvilket berømt gammelt epos kommer fra Mesopotamia?'
          },
          answers: [
            { en: 'The Epic of Gilgamesh', no: 'Gilgamesh-eposet' },
            { en: 'The Odyssey', no: 'Odysseen' },
            { en: 'The Aeneid', no: 'Aeneiden' },
            { en: 'Beowulf', no: 'Beowulf' }
          ],
          correct: 0,
          explanation: {
            en: 'The Epic of Gilgamesh is one of the world’s oldest known works of literature.',
            no: 'Gilgamesh-eposet er et av verdens eldste kjente litterære verk.'
          },
          tags: ['gilgamesh', 'literature']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The region of Mesopotamia is part of what fertile crescent-shaped area?',
            no: 'Mesopotamia er en del av hvilket fruktbart, halvmåneformet område?'
          },
          answers: [
            { en: 'The Fertile Crescent', no: 'Den fruktbare halvmåne' },
            { en: 'The Sahara', no: 'Sahara' },
            { en: 'The Great Plains', no: 'Prærien' },
            { en: 'The Rift Valley', no: 'Riftdalen' }
          ],
          correct: 0,
          explanation: {
            en: 'Mesopotamia lies in the Fertile Crescent, a region of early agriculture.',
            no: 'Mesopotamia ligger i Den fruktbare halvmåne, et område med tidlig jordbruk.'
          },
          tags: ['fertile-crescent', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What did Mesopotamian farmers build to bring river water to their fields?',
            no: 'Hva bygde mesopotamiske bønder for å føre elvevann til markene sine?'
          },
          answers: [
            { en: 'Irrigation canals', no: 'Vanningskanaler' },
            { en: 'Highways', no: 'Motorveier' },
            { en: 'Railroads', no: 'Jernbaner' },
            { en: 'Lighthouses', no: 'Fyrtårn' }
          ],
          correct: 0,
          explanation: {
            en: 'Mesopotamians dug irrigation canals to water crops from the rivers.',
            no: 'Mesopotamerne gravde vanningskanaler for å vanne avlinger fra elvene.'
          },
          tags: ['irrigation', 'agriculture']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which empire, with its capital at Babylon, became powerful in Mesopotamia?',
            no: 'Hvilket imperium, med hovedstad i Babylon, ble mektig i Mesopotamia?'
          },
          answers: [
            { en: 'The Babylonian Empire', no: 'Det babylonske rike' },
            { en: 'The Roman Empire', no: 'Romerriket' },
            { en: 'The Inca Empire', no: 'Inkariket' },
            { en: 'The Mongol Empire', no: 'Mongolriket' }
          ],
          correct: 0,
          explanation: {
            en: 'The Babylonian Empire, centered on Babylon, was a major Mesopotamian power.',
            no: 'Det babylonske rike, med sentrum i Babylon, var en betydelig makt i Mesopotamia.'
          },
          tags: ['babylon', 'empires']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did the first cities arise in Mesopotamia’s river valleys?',
            no: 'Hvorfor oppstod de første byene i Mesopotamias elvedaler?'
          },
          answers: [
            { en: 'Fertile soil and irrigation produced food surpluses', no: 'Fruktbar jord og vanning ga matoverskudd' },
            { en: 'The land was barren desert', no: 'Landet var goldt ørkenland' },
            { en: 'There was no water at all', no: 'Det fantes ikke vann i det hele tatt' },
            { en: 'People avoided the rivers', no: 'Folk unngikk elvene' }
          ],
          correct: 0,
          explanation: {
            en: 'River-fed farming created food surpluses that allowed dense settlements and the first cities.',
            no: 'Elvevannet jordbruket skapte matoverskudd som muliggjorde tette bosetninger og de første byene.'
          },
          tags: ['cities', 'agriculture']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did writing first develop in Mesopotamia?',
            no: 'Hvordan utviklet skriften seg først i Mesopotamia?'
          },
          answers: [
            { en: 'From record-keeping for trade and taxes', no: 'Fra dokumentasjon for handel og skatter' },
            { en: 'From writing poetry only', no: 'Bare fra å skrive poesi' },
            { en: 'It appeared fully formed overnight', no: 'Den dukket opp ferdig utviklet over natten' },
            { en: 'It came from Egypt unchanged', no: 'Den kom fra Egypt uendret' }
          ],
          correct: 0,
          explanation: {
            en: 'Cuneiform grew out of simple marks used to record goods, trade, and taxes.',
            no: 'Kileskriften vokste ut av enkle tegn brukt til å registrere varer, handel og skatter.'
          },
          tags: ['writing', 'origins']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was significant about the Code of Hammurabi?',
            no: 'Hva var betydningsfullt med Hammurabis lov?'
          },
          answers: [
            { en: 'It was a written set of laws with set punishments', no: 'Det var en skreven samling lover med fastsatte straffer' },
            { en: 'It abolished all laws', no: 'Den avskaffet alle lover' },
            { en: 'It was never written down', no: 'Den ble aldri skrevet ned' },
            { en: 'It applied only to gods', no: 'Den gjaldt bare guder' }
          ],
          correct: 0,
          explanation: {
            en: 'The Code of Hammurabi publicly set out laws and punishments, shaping later legal ideas.',
            no: 'Hammurabis lov fastsatte offentlig lover og straffer og påvirket senere juridiske ideer.'
          },
          tags: ['hammurabi', 'law']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why were ziggurats built at the center of Mesopotamian cities?',
            no: 'Hvorfor ble ziqqurater bygd i sentrum av mesopotamiske byer?'
          },
          answers: [
            { en: 'They were temples connecting the city to its god', no: 'De var templer som forbandt byen med dens gud' },
            { en: 'They were used as prisons', no: 'De ble brukt som fengsler' },
            { en: 'They were marketplaces', no: 'De var markedsplasser' },
            { en: 'They were simple houses', no: 'De var enkle hus' }
          ],
          correct: 0,
          explanation: {
            en: 'Ziggurats were religious centers, homes for the city’s patron god and focus of worship.',
            no: 'Ziqqurater var religiøse sentre, hjem for byens skytsgud og midtpunkt for tilbedelse.'
          },
          tags: ['ziggurat', 'religion']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How were Sumerian city-states governed?',
            no: 'Hvordan ble sumeriske bystater styrt?'
          },
          answers: [
            { en: 'Each had its own ruler and patron god', no: 'Hver hadde sin egen hersker og skytsgud' },
            { en: 'They were all ruled by one emperor', no: 'De ble alle styrt av én keiser' },
            { en: 'They had no government', no: 'De hadde ingen styreform' },
            { en: 'They were ruled from Egypt', no: 'De ble styrt fra Egypt' }
          ],
          correct: 0,
          explanation: {
            en: 'Sumer was made up of independent city-states, each with its own king and god.',
            no: 'Sumer bestod av uavhengige bystater, hver med sin egen konge og gud.'
          },
          tags: ['city-states', 'government']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did trade benefit Mesopotamian cities?',
            no: 'Hvordan tjente mesopotamiske byer på handel?'
          },
          answers: [
            { en: 'It brought materials like timber, stone, and metals they lacked', no: 'Den brakte materialer som tre, stein og metaller de manglet' },
            { en: 'It gave them sand they needed', no: 'Den ga dem sanden de trengte' },
            { en: 'It isolated them from neighbors', no: 'Den isolerte dem fra naboer' },
            { en: 'It had no benefit', no: 'Den hadde ingen nytte' }
          ],
          correct: 0,
          explanation: {
            en: 'Lacking timber, stone, and metal, Mesopotamians traded grain and crafts for these resources.',
            no: 'Siden de manglet tre, stein og metall, byttet mesopotamerne korn og håndverk mot disse ressursene.'
          },
          tags: ['trade', 'economy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why is Mesopotamia often called "the cradle of civilization"?',
            no: 'Hvorfor kalles Mesopotamia ofte «sivilisasjonens vugge»?'
          },
          answers: [
            { en: 'Many early features of civilization first appeared there', no: 'Mange tidlige trekk ved sivilisasjonen oppstod først der' },
            { en: 'It was the only place people ever lived', no: 'Det var det eneste stedet folk noensinne bodde' },
            { en: 'It had no cities', no: 'Det hadde ingen byer' },
            { en: 'It rejected all new ideas', no: 'Det avviste alle nye ideer' }
          ],
          correct: 0,
          explanation: {
            en: 'Cities, writing, law codes, and organized states all emerged early in Mesopotamia.',
            no: 'Byer, skrift, lovsamlinger og organiserte stater oppstod tidlig i Mesopotamia.'
          },
          tags: ['cradle-of-civilization', 'significance']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Mesopotamian mathematics influence how we measure time?',
            no: 'Hvordan påvirket mesopotamisk matematikk hvordan vi måler tid?'
          },
          answers: [
            { en: 'Their base-60 system shaped our 60-minute hours', no: 'Deres 60-tallssystem formet våre timer på 60 minutter' },
            { en: 'They invented the decimal week', no: 'De oppfant tiukers-uken' },
            { en: 'They had no number system', no: 'De hadde ikke noe tallsystem' },
            { en: 'They measured nothing', no: 'De målte ingenting' }
          ],
          correct: 0,
          explanation: {
            en: 'The Mesopotamian base-60 (sexagesimal) system underlies our 60 minutes and 360-degree circle.',
            no: 'Det mesopotamiske 60-tallssystemet (seksagesimalt) ligger bak våre 60 minutter og 360 graders sirkel.'
          },
          tags: ['mathematics', 'legacy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What environmental challenges did Mesopotamians face?',
            no: 'Hvilke miljøutfordringer møtte mesopotamerne?'
          },
          answers: [
            { en: 'Unpredictable floods and few natural barriers', no: 'Uforutsigbare flommer og få naturlige barrierer' },
            { en: 'Constant snow and ice', no: 'Konstant snø og is' },
            { en: 'No water sources nearby', no: 'Ingen vannkilder i nærheten' },
            { en: 'Total isolation from rivers', no: 'Full isolasjon fra elver' }
          ],
          correct: 0,
          explanation: {
            en: 'The Tigris and Euphrates flooded unpredictably, and open plains left cities exposed to invasion.',
            no: 'Tigris og Eufrat flommet uforutsigbart, og åpne sletter gjorde byene utsatt for invasjon.'
          },
          tags: ['environment', 'challenges']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the role of priests connect to economic life in Mesopotamia?',
            no: 'Hvordan var prestenes rolle knyttet til det økonomiske livet i Mesopotamia?'
          },
          answers: [
            { en: 'Temples managed land, stores, and redistribution of goods', no: 'Templene forvaltet land, lagre og omfordeling av varer' },
            { en: 'Priests had no economic role', no: 'Prester hadde ingen økonomisk rolle' },
            { en: 'Temples banned all trade', no: 'Templene forbød all handel' },
            { en: 'Priests only farmed alone', no: 'Prester drev bare jordbruk alene' }
          ],
          correct: 0,
          explanation: {
            en: 'Temples were major economic institutions, holding land and managing surplus goods.',
            no: 'Templene var viktige økonomiske institusjoner som eide land og forvaltet overskuddsvarer.'
          },
          tags: ['temples', 'economy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the Akkadian Empire change Mesopotamia?',
            no: 'Hvordan endret Akkaderriket Mesopotamia?'
          },
          answers: [
            { en: 'It united many city-states under one ruler', no: 'Det forente mange bystater under én hersker' },
            { en: 'It abolished all cities', no: 'Det avskaffet alle byer' },
            { en: 'It had no political effect', no: 'Det hadde ingen politisk effekt' },
            { en: 'It ended all writing', no: 'Det avsluttet all skrift' }
          ],
          correct: 0,
          explanation: {
            en: 'Under Sargon, the Akkadian Empire united Mesopotamian city-states into one of the first empires.',
            no: 'Under Sargon forente Akkaderriket de mesopotamiske bystatene til et av de første imperiene.'
          },
          tags: ['akkad', 'empires']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the invention of writing in Mesopotamia considered a turning point in history?',
            no: 'Hvorfor regnes oppfinnelsen av skriften i Mesopotamia som et vendepunkt i historien?'
          },
          answers: [
            { en: 'It allowed knowledge, laws, and records to be stored and passed on', no: 'Den lot kunnskap, lover og opptegnelser lagres og føres videre' },
            { en: 'It ended all communication', no: 'Den avsluttet all kommunikasjon' },
            { en: 'It had no lasting impact', no: 'Den hadde ingen varig virkning' },
            { en: 'It was used only once', no: 'Den ble bare brukt én gang' }
          ],
          correct: 0,
          explanation: {
            en: 'Writing enabled administration, literature, and the transmission of knowledge across generations.',
            no: 'Skrift muliggjorde administrasjon, litteratur og overføring av kunnskap gjennom generasjoner.'
          },
          tags: ['writing', 'significance']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the "eye for an eye" principle in Hammurabi’s Code reflect its society?',
            no: 'Hvordan gjenspeilte prinsippet om «øye for øye» i Hammurabis lov samfunnet det kom fra?'
          },
          answers: [
            { en: 'Punishments varied by social class, showing a hierarchical society', no: 'Straffene varierte etter samfunnsklasse, noe som viste et hierarkisk samfunn' },
            { en: 'Everyone was treated identically', no: 'Alle ble behandlet helt likt' },
            { en: 'There were no punishments', no: 'Det fantes ingen straffer' },
            { en: 'It applied only to kings', no: 'Den gjaldt bare konger' }
          ],
          correct: 0,
          explanation: {
            en: 'The Code prescribed different penalties depending on whether victims were nobles, commoners, or slaves.',
            no: 'Loven foreskrev ulike straffer avhengig av om ofrene var adelige, vanlige folk eller slaver.'
          },
          tags: ['hammurabi', 'society']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why were Mesopotamian city-states often in conflict with one another?',
            no: 'Hvorfor lå mesopotamiske bystater ofte i konflikt med hverandre?'
          },
          answers: [
            { en: 'They competed over land, water, and trade', no: 'De konkurrerte om land, vann og handel' },
            { en: 'They never interacted', no: 'De hadde aldri kontakt' },
            { en: 'They shared a single ruler', no: 'De delte én hersker' },
            { en: 'They had no resources to fight over', no: 'De hadde ingen ressurser å kjempe om' }
          ],
          correct: 0,
          explanation: {
            en: 'Competition over fertile land, water rights, and trade routes led to frequent warfare between city-states.',
            no: 'Konkurranse om fruktbar jord, vannrettigheter og handelsruter førte til hyppig krig mellom bystatene.'
          },
          tags: ['conflict', 'city-states']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did irrigation both strengthen and threaten Mesopotamian agriculture over time?',
            no: 'Hvordan både styrket og truet vanning det mesopotamiske jordbruket over tid?'
          },
          answers: [
            { en: 'It boosted crops but caused salt buildup that harmed the soil', no: 'Den økte avlingene, men forårsaket saltopphopning som skadet jorda' },
            { en: 'It had no effect on the soil', no: 'Den hadde ingen effekt på jorda' },
            { en: 'It made farming impossible from the start', no: 'Den gjorde jordbruk umulig fra starten' },
            { en: 'It only ever helped', no: 'Den var alltid bare til hjelp' }
          ],
          correct: 0,
          explanation: {
            en: 'Irrigation raised yields but gradually salinized the soil, reducing fertility over centuries.',
            no: 'Vanning økte avlingene, men gjorde jorda gradvis saltere og reduserte fruktbarheten over århundrer.'
          },
          tags: ['irrigation', 'environment']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did Mesopotamian religion reflect anxieties about the natural world?',
            no: 'Hvordan gjenspeilte mesopotamisk religion bekymringer for naturen?'
          },
          answers: [
            { en: 'Gods of storms and floods mirrored an unpredictable environment', no: 'Guder for storm og flom speilet et uforutsigbart miljø' },
            { en: 'Religion ignored nature entirely', no: 'Religionen ignorerte naturen fullstendig' },
            { en: 'There were no nature gods', no: 'Det fantes ingen naturguder' },
            { en: 'Gods controlled nothing', no: 'Gudene kontrollerte ingenting' }
          ],
          correct: 0,
          explanation: {
            en: 'Worship of gods linked to storms and floods reflected fear of the harsh, unpredictable rivers.',
            no: 'Tilbedelsen av guder knyttet til storm og flom gjenspeilte frykten for de harde, uforutsigbare elvene.'
          },
          tags: ['religion', 'environment']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the Epic of Gilgamesh important to understanding ancient thought?',
            no: 'Hvorfor er Gilgamesh-eposet viktig for å forstå antikkens tenkning?'
          },
          answers: [
            { en: 'It explores mortality, friendship, and the search for meaning', no: 'Det utforsker dødelighet, vennskap og søken etter mening' },
            { en: 'It is only a tax record', no: 'Det er bare en skatteoppgave' },
            { en: 'It contains no ideas', no: 'Det inneholder ingen ideer' },
            { en: 'It was written in modern times', no: 'Det ble skrevet i moderne tid' }
          ],
          correct: 0,
          explanation: {
            en: 'Gilgamesh grapples with death, friendship, and meaning, revealing early human reflection on existence.',
            no: 'Gilgamesh utforsker død, vennskap og mening, og avslører tidlig menneskelig refleksjon over tilværelsen.'
          },
          tags: ['gilgamesh', 'thought']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the openness of Mesopotamia’s geography affect its political history?',
            no: 'Hvordan påvirket åpenheten i Mesopotamias geografi den politiske historien?'
          },
          answers: [
            { en: 'Lacking natural barriers, it saw repeated invasions and changing empires', no: 'Uten naturlige barrierer opplevde det gjentatte invasjoner og skiftende imperier' },
            { en: 'It was never invaded', no: 'Det ble aldri invadert' },
            { en: 'It stayed under one dynasty forever', no: 'Det forble under ett dynasti for alltid' },
            { en: 'Geography had no effect', no: 'Geografien hadde ingen effekt' }
          ],
          correct: 0,
          explanation: {
            en: 'Without protective deserts or mountains, Mesopotamia was repeatedly invaded and ruled by successive powers.',
            no: 'Uten beskyttende ørkener eller fjell ble Mesopotamia gjentatte ganger invadert og styrt av skiftende makter.'
          },
          tags: ['geography', 'empires']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did Mesopotamia compare with Egypt as an early civilization?',
            no: 'Hvordan var Mesopotamia sammenlignet med Egypt som tidlig sivilisasjon?'
          },
          answers: [
            { en: 'Both relied on rivers, but Mesopotamia was more fragmented and invasion-prone', no: 'Begge bygde på elver, men Mesopotamia var mer oppdelt og utsatt for invasjon' },
            { en: 'They had nothing in common', no: 'De hadde ingenting til felles' },
            { en: 'Mesopotamia had no rivers', no: 'Mesopotamia hadde ingen elver' },
            { en: 'Egypt had no government', no: 'Egypt hadde ingen styreform' }
          ],
          correct: 0,
          explanation: {
            en: 'Both were river civilizations, but Egypt’s isolation brought stability while Mesopotamia faced more turmoil.',
            no: 'Begge var elvesivilisasjoner, men Egypts isolasjon ga stabilitet, mens Mesopotamia opplevde mer uro.'
          },
          tags: ['comparison', 'egypt']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians rely heavily on clay tablets to study Mesopotamia?',
            no: 'Hvorfor støtter historikere seg sterkt på leirtavler for å studere Mesopotamia?'
          },
          answers: [
            { en: 'Baked clay survived for millennia, preserving records and literature', no: 'Brent leire overlevde i årtusener og bevarte opptegnelser og litteratur' },
            { en: 'No other evidence exists at all', no: 'Det finnes ikke noe annet bevis i det hele tatt' },
            { en: 'The tablets are modern forgeries', no: 'Tavlene er moderne forfalskninger' },
            { en: 'They contain no information', no: 'De inneholder ingen informasjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Durable clay tablets preserved vast records, letting historians reconstruct Mesopotamian life and thought.',
            no: 'Holdbare leirtavler bevarte enorme mengder opptegnelser og lar historikere rekonstruere mesopotamisk liv og tenkning.'
          },
          tags: ['sources', 'archaeology']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the concept of written law in Mesopotamia influence later civilizations?',
            no: 'Hvordan påvirket ideen om skreven lov i Mesopotamia senere sivilisasjoner?'
          },
          answers: [
            { en: 'It established the idea of public, codified rules for society', no: 'Den etablerte ideen om offentlige, kodifiserte regler for samfunnet' },
            { en: 'It discouraged all later laws', no: 'Den motvirket alle senere lover' },
            { en: 'It had no influence beyond its time', no: 'Den hadde ingen innflytelse utover sin egen tid' },
            { en: 'It applied only to gods', no: 'Den gjaldt bare guder' }
          ],
          correct: 0,
          explanation: {
            en: 'Mesopotamian written codes pioneered the idea of public, recorded laws that influenced later legal traditions.',
            no: 'Mesopotamiske skrevne lover var banebrytende for ideen om offentlige, nedtegnede lover som påvirket senere rettstradisjoner.'
          },
          tags: ['law', 'legacy']
        }
      ]
    },
    {
      slug: 'foundations-of-civilization',
      name: { en: 'Foundations of civilization', no: 'Sivilisasjonens grunnlag' },
      questions: []
    }
  ]
};