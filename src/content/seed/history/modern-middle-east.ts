import type { SeedSubcategory } from '../types';

export const modernMiddleEast: SeedSubcategory = {
  slug: 'modern-middle-east',
  name: { en: 'Modern Middle East', no: 'Det moderne Midtøsten' },
  modules: [
    {
      slug: 'collapse-of-ottoman-empire',
      name: { en: 'Collapse of Ottoman Empire', no: 'Det osmanske rikets fall' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'The Ottoman Empire was centered on which modern-day country?',
            no: 'Det osmanske riket hadde sitt sentrum i hvilket land i dag?'
          },
          answers: [
            { en: 'Turkey', no: 'Tyrkia' },
            { en: 'Egypt', no: 'Egypt' },
            { en: 'Iran', no: 'Iran' },
            { en: 'Greece', no: 'Hellas' }
          ],
          correct: 0,
          explanation: {
            en: 'The Ottoman Empire was centered on Anatolia, the heartland of modern Turkey.',
            no: 'Det osmanske riket hadde sitt sentrum i Anatolia, kjerneområdet i dagens Tyrkia.'
          },
          tags: ['ottoman', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What was the capital of the Ottoman Empire?',
            no: 'Hva var hovedstaden i Det osmanske riket?'
          },
          answers: [
            { en: 'Ankara', no: 'Ankara' },
            { en: 'Constantinople', no: 'Konstantinopel' },
            { en: 'Baghdad', no: 'Bagdad' },
            { en: 'Cairo', no: 'Kairo' }
          ],
          correct: 1,
          explanation: {
            en: 'Constantinople (today Istanbul) was the Ottoman capital from 1453 until the empire’s end.',
            no: 'Konstantinopel (i dag Istanbul) var osmansk hovedstad fra 1453 til riket gikk under.'
          },
          tags: ['ottoman', 'constantinople']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'After which war did the Ottoman Empire collapse?',
            no: 'Etter hvilken krig brøt Det osmanske riket sammen?'
          },
          answers: [
            { en: 'The Crimean War', no: 'Krimkrigen' },
            { en: 'World War II', no: 'Andre verdenskrig' },
            { en: 'World War I', no: 'Første verdenskrig' },
            { en: 'The Napoleonic Wars', no: 'Napoleonskrigene' }
          ],
          correct: 2,
          explanation: {
            en: 'The Ottoman Empire collapsed in the aftermath of its defeat in World War I.',
            no: 'Det osmanske riket brøt sammen i kjølvannet av nederlaget i første verdenskrig.'
          },
          tags: ['ottoman', 'world-war-i']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'On which side did the Ottoman Empire fight in World War I?',
            no: 'På hvilken side kjempet Det osmanske riket i første verdenskrig?'
          },
          answers: [
            { en: 'The Allies', no: 'De allierte' },
            { en: 'It stayed neutral', no: 'Det forholdt seg nøytralt' },
            { en: 'The Soviet bloc', no: 'Den sovjetiske blokken' },
            { en: 'The Central Powers', no: 'Sentralmaktene' }
          ],
          correct: 3,
          explanation: {
            en: 'The Ottomans allied with Germany and the Central Powers in World War I.',
            no: 'Osmanene allierte seg med Tyskland og sentralmaktene i første verdenskrig.'
          },
          tags: ['ottoman', 'world-war-i']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What nickname described the declining Ottoman Empire in the 1800s?',
            no: 'Hvilket kallenavn beskrev det svekkede osmanske riket på 1800-tallet?'
          },
          answers: [
            { en: '"The sick man of Europe"', no: '«Europas syke mann»' },
            { en: '"The breadbasket of Asia"', no: '«Asias kornkammer»' },
            { en: '"The eternal empire"', no: '«Det evige riket»' },
            { en: '"The workshop of the world"', no: '«Verdens verksted»' }
          ],
          correct: 0,
          explanation: {
            en: 'European powers called the weakening Ottoman state "the sick man of Europe."',
            no: 'Europeiske stormakter kalte den svekkede osmanske staten «Europas syke mann».'
          },
          tags: ['ottoman', 'decline']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who founded the modern Republic of Turkey?',
            no: 'Hvem grunnla den moderne republikken Tyrkia?'
          },
          answers: [
            { en: 'Faisal I', no: 'Faisal I' },
            { en: 'Mustafa Kemal Atatürk', no: 'Mustafa Kemal Atatürk' },
            { en: 'Enver Pasha', no: 'Enver Pasha' },
            { en: 'Mehmed VI', no: 'Mehmed VI' }
          ],
          correct: 1,
          explanation: {
            en: 'Mustafa Kemal, later called Atatürk, founded the Republic of Turkey in 1923.',
            no: 'Mustafa Kemal, senere kalt Atatürk, grunnla republikken Tyrkia i 1923.'
          },
          tags: ['ataturk', 'turkey']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which year was the Republic of Turkey founded?',
            no: 'I hvilket år ble republikken Tyrkia grunnlagt?'
          },
          answers: [
            { en: '1908', no: '1908' },
            { en: '1918', no: '1918' },
            { en: '1923', no: '1923' },
            { en: '1945', no: '1945' }
          ],
          correct: 2,
          explanation: {
            en: 'The Republic of Turkey was proclaimed in 1923.',
            no: 'Republikken Tyrkia ble proklamert i 1923.'
          },
          tags: ['turkey', '1923']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which 1920 treaty sought to partition the Ottoman Empire among the victors?',
            no: 'Hvilken traktat fra 1920 forsøkte å dele Det osmanske riket mellom seierherrene?'
          },
          answers: [
            { en: 'The Treaty of Lausanne', no: 'Lausanne-traktaten' },
            { en: 'The Treaty of Trianon', no: 'Trianon-traktaten' },
            { en: 'The Treaty of Versailles', no: 'Versaillestraktaten' },
            { en: 'The Treaty of Sèvres', no: 'Sèvres-traktaten' }
          ],
          correct: 3,
          explanation: {
            en: 'The Treaty of Sèvres (1920) aimed to divide Ottoman territory among the Allies.',
            no: 'Sèvres-traktaten (1920) tok sikte på å dele osmansk territorium mellom de allierte.'
          },
          tags: ['sevres', 'treaty']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which 1923 treaty recognized the borders of the new Republic of Turkey?',
            no: 'Hvilken traktat fra 1923 anerkjente grensene til den nye republikken Tyrkia?'
          },
          answers: [
            { en: 'The Treaty of Lausanne', no: 'Lausanne-traktaten' },
            { en: 'The Treaty of Sèvres', no: 'Sèvres-traktaten' },
            { en: 'The Treaty of Brest-Litovsk', no: 'Brest-Litovsk-traktaten' },
            { en: 'The Treaty of Rapallo', no: 'Rapallo-traktaten' }
          ],
          correct: 0,
          explanation: {
            en: 'The Treaty of Lausanne (1923) replaced Sèvres and recognized modern Turkey’s borders.',
            no: 'Lausanne-traktaten (1923) erstattet Sèvres og anerkjente grensene til det moderne Tyrkia.'
          },
          tags: ['lausanne', 'treaty']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In addition to sultan, what religious title did Ottoman rulers claim?',
            no: 'I tillegg til sultan, hvilken religiøs tittel gjorde osmanske herskere krav på?'
          },
          answers: [
            { en: 'Pope', no: 'Pave' },
            { en: 'Caliph', no: 'Kalif' },
            { en: 'Patriarch', no: 'Patriark' },
            { en: 'Ayatollah', no: 'Ayatolla' }
          ],
          correct: 1,
          explanation: {
            en: 'Ottoman sultans also claimed the title of Caliph, leader of the Muslim world.',
            no: 'Osmanske sultaner gjorde også krav på tittelen kalif, leder for den muslimske verden.'
          },
          tags: ['caliph', 'religion']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which year was the caliphate abolished by the Turkish republic?',
            no: 'I hvilket år ble kalifatet avskaffet av den tyrkiske republikken?'
          },
          answers: [
            { en: '1950', no: '1950' },
            { en: '1914', no: '1914' },
            { en: '1924', no: '1924' },
            { en: '1934', no: '1934' }
          ],
          correct: 2,
          explanation: {
            en: 'The caliphate was abolished in 1924 as part of Atatürk’s reforms.',
            no: 'Kalifatet ble avskaffet i 1924 som en del av Atatürks reformer.'
          },
          tags: ['caliphate', '1924']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The famous World War I campaign at Gallipoli was fought on Ottoman territory near which strait?',
            no: 'Det berømte felttoget ved Gallipoli i første verdenskrig ble utkjempet på osmansk territorium nær hvilket stred?'
          },
          answers: [
            { en: 'The Strait of Hormuz', no: 'Hormuzstredet' },
            { en: 'The Bosphorus alone', no: 'Bare Bosporos' },
            { en: 'The Strait of Gibraltar', no: 'Gibraltarstredet' },
            { en: 'The Dardanelles', no: 'Dardanellene' }
          ],
          correct: 3,
          explanation: {
            en: 'The Gallipoli campaign (1915–16) was fought to control the Dardanelles strait.',
            no: 'Gallipoli-felttoget (1915–16) ble utkjempet for å kontrollere Dardanellene.'
          },
          tags: ['gallipoli', 'world-war-i']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The Ottoman Empire ruled large parts of which regions at its height?',
            no: 'Det osmanske riket hersket på sitt høydepunkt over store deler av hvilke regioner?'
          },
          answers: [
            { en: 'The Middle East, North Africa, and southeastern Europe', no: 'Midtøsten, Nord-Afrika og Sørøst-Europa' },
            { en: 'South America and the Caribbean', no: 'Sør-Amerika og Karibia' },
            { en: 'East Asia and Australia', no: 'Øst-Asia og Australia' },
            { en: 'Scandinavia and the Baltics', no: 'Skandinavia og Baltikum' }
          ],
          correct: 0,
          explanation: {
            en: 'At its peak the empire spanned the Middle East, North Africa, and the Balkans.',
            no: 'På sitt høydepunkt strakte riket seg over Midtøsten, Nord-Afrika og Balkan.'
          },
          tags: ['ottoman', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which reform-minded movement seized power in the Ottoman Empire in 1908?',
            no: 'Hvilken reformvennlig bevegelse tok makten i Det osmanske riket i 1908?'
          },
          answers: [
            { en: 'The Mamluks', no: 'Mamelukkene' },
            { en: 'The Young Turks', no: 'Ungtyrkerne' },
            { en: 'The Bolsheviks', no: 'Bolsjevikene' },
            { en: 'The Janissaries', no: 'Janitsjarene' }
          ],
          correct: 1,
          explanation: {
            en: 'The Young Turks pushed constitutional reform and modernization after 1908.',
            no: 'Ungtyrkerne presset på for konstitusjonell reform og modernisering etter 1908.'
          },
          tags: ['young-turks', 'reform']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What happened to the Ottoman sultanate in 1922?',
            no: 'Hva skjedde med det osmanske sultanatet i 1922?'
          },
          answers: [
            { en: 'It merged with Persia', no: 'Det ble slått sammen med Persia' },
            { en: 'It was expanded', no: 'Det ble utvidet' },
            { en: 'It was abolished', no: 'Det ble avskaffet' },
            { en: 'It moved to Baghdad', no: 'Det ble flyttet til Bagdad' }
          ],
          correct: 2,
          explanation: {
            en: 'The sultanate was abolished in 1922, ending centuries of Ottoman monarchy.',
            no: 'Sultanatet ble avskaffet i 1922 og avsluttet århundrer med osmansk monarki.'
          },
          tags: ['sultanate', '1922']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why were the Ottomans called "the sick man of Europe"?',
            no: 'Hvorfor ble osmanene kalt «Europas syke mann»?'
          },
          answers: [
            { en: 'It had the largest army in the world', no: 'Det hadde verdens største hær' },
            { en: 'It led Europe’s industrial growth', no: 'Det ledet Europas industrielle vekst' },
            { en: 'It refused all foreign trade', no: 'Det avviste all utenrikshandel' },
            { en: 'The empire was weakening and losing territory', no: 'Riket ble svekket og mistet territorium' }
          ],
          correct: 3,
          explanation: {
            en: 'The phrase reflected the empire’s long decline, military defeats, and territorial losses.',
            no: 'Uttrykket gjenspeilte rikets langvarige nedgang, militære nederlag og territorielle tap.'
          },
          tags: ['decline', 'context']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was a major consequence of the Ottomans joining the Central Powers?',
            no: 'Hva var en viktig konsekvens av at osmanene sluttet seg til sentralmaktene?'
          },
          answers: [
            { en: 'Defeat led to the partition of their territory', no: 'Nederlaget førte til oppdeling av territoriet deres' },
            { en: 'They gained control of Russia', no: 'De fikk kontroll over Russland' },
            { en: 'They avoided the war entirely', no: 'De unngikk krigen helt' },
            { en: 'They expanded into India', no: 'De ekspanderte inn i India' }
          ],
          correct: 0,
          explanation: {
            en: 'Defeat in World War I left Ottoman lands to be divided by the victorious Allies.',
            no: 'Nederlaget i første verdenskrig førte til at osmanske land ble delt av de seirende allierte.'
          },
          tags: ['world-war-i', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'During World War I, the Arab Revolt of 1916 was directed against whom?',
            no: 'Under første verdenskrig var Det arabiske opprøret i 1916 rettet mot hvem?'
          },
          answers: [
            { en: 'Russia', no: 'Russland' },
            { en: 'The Ottoman Empire', no: 'Det osmanske riket' },
            { en: 'The British Empire', no: 'Det britiske imperiet' },
            { en: 'France', no: 'Frankrike' }
          ],
          correct: 1,
          explanation: {
            en: 'Arab forces, encouraged by Britain, revolted against Ottoman rule during the war.',
            no: 'Arabiske styrker, oppmuntret av Storbritannia, gjorde opprør mot osmansk styre under krigen.'
          },
          tags: ['arab-revolt', 'world-war-i']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The Sykes-Picot Agreement was a secret plan by Britain and France to do what?',
            no: 'Sykes-Picot-avtalen var en hemmelig plan fra Storbritannia og Frankrike for å gjøre hva?'
          },
          answers: [
            { en: 'Return Constantinople to Greece', no: 'Gi Konstantinopel tilbake til Hellas' },
            { en: 'Create a single Arab state', no: 'Opprette én samlet arabisk stat' },
            { en: 'Divide Ottoman Arab lands into spheres of influence', no: 'Dele osmanske arabiske land inn i interessesfærer' },
            { en: 'Grant immediate independence to all Arabs', no: 'Gi alle arabere umiddelbar uavhengighet' }
          ],
          correct: 2,
          explanation: {
            en: 'In 1916 Britain and France secretly agreed to divide Ottoman Arab territories between them.',
            no: 'I 1916 ble Storbritannia og Frankrike i hemmelighet enige om å dele osmanske arabiske områder mellom seg.'
          },
          tags: ['sykes-picot', 'partition']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'After World War I, who administered former Ottoman Arab lands under the mandate system?',
            no: 'Etter første verdenskrig, hvem styrte tidligere osmanske arabiske land under mandatsystemet?'
          },
          answers: [
            { en: 'The United States and Russia', no: 'USA og Russland' },
            { en: 'Germany and Italy', no: 'Tyskland og Italia' },
            { en: 'Greece and Bulgaria', no: 'Hellas og Bulgaria' },
            { en: 'Britain and France', no: 'Storbritannia og Frankrike' }
          ],
          correct: 3,
          explanation: {
            en: 'The League of Nations granted Britain and France mandates over former Ottoman territories.',
            no: 'Folkeforbundet ga Storbritannia og Frankrike mandater over tidligere osmanske territorier.'
          },
          tags: ['mandates', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did rising nationalism contribute to the Ottoman Empire’s decline?',
            no: 'Hvordan bidro økende nasjonalisme til Det osmanske rikets nedgang?'
          },
          answers: [
            { en: 'Various ethnic groups sought independence', no: 'Ulike etniske grupper søkte uavhengighet' },
            { en: 'It unified the empire’s peoples', no: 'Den forente rikets folk' },
            { en: 'It strengthened the sultan’s power', no: 'Den styrket sultanens makt' },
            { en: 'It ended European interference', no: 'Den avsluttet europeisk innblanding' }
          ],
          correct: 0,
          explanation: {
            en: 'Nationalist movements among Balkan and Arab peoples broke pieces away from the empire.',
            no: 'Nasjonalistiske bevegelser blant balkan- og arabiske folk rev deler løs fra riket.'
          },
          tags: ['nationalism', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was a key aim of Atatürk’s reforms in the new Turkey?',
            no: 'Hva var et hovedmål med Atatürks reformer i det nye Tyrkia?'
          },
          answers: [
            { en: 'Banning all education', no: 'Å forby all utdanning' },
            { en: 'Secularizing and modernizing the state', no: 'Å sekularisere og modernisere staten' },
            { en: 'Restoring the sultanate', no: 'Å gjeninnføre sultanatet' },
            { en: 'Expanding the caliphate', no: 'Å utvide kalifatet' }
          ],
          correct: 1,
          explanation: {
            en: 'Atatürk pursued secular, Western-style reforms to modernize Turkey.',
            no: 'Atatürk gjennomførte sekulære reformer etter vestlig modell for å modernisere Tyrkia.'
          },
          tags: ['ataturk', 'reform']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The Balkan Wars of 1912–13 affected the Ottoman Empire how?',
            no: 'Hvordan påvirket Balkankrigene i 1912–13 Det osmanske riket?'
          },
          answers: [
            { en: 'They had no territorial impact', no: 'De hadde ingen territoriell innvirkning' },
            { en: 'They gave it control of Greece', no: 'De ga det kontroll over Hellas' },
            { en: 'They stripped away most of its remaining European territory', no: 'De fratok det meste av rikets gjenværende europeiske territorium' },
            { en: 'They doubled its size', no: 'De doblet størrelsen' }
          ],
          correct: 2,
          explanation: {
            en: 'The Balkan Wars cost the Ottomans nearly all their European lands before World War I.',
            no: 'Balkankrigene kostet osmanene nesten alle deres europeiske landområder før første verdenskrig.'
          },
          tags: ['balkan-wars', 'decline']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The 1923 population exchange after the Greco-Turkish War involved whom?',
            no: 'Befolkningsutvekslingen i 1923 etter den gresk-tyrkiske krigen omfattet hvem?'
          },
          answers: [
            { en: 'Arabs and Persians', no: 'Arabere og persere' },
            { en: 'Russians and Armenians', no: 'Russere og armenere' },
            { en: 'Italians and Albanians', no: 'Italienere og albanere' },
            { en: 'Greeks and Turks', no: 'Grekere og tyrkere' }
          ],
          correct: 3,
          explanation: {
            en: 'A compulsory exchange moved Orthodox Christians to Greece and Muslims to Turkey.',
            no: 'En tvungen utveksling flyttet ortodokse kristne til Hellas og muslimer til Tyrkia.'
          },
          tags: ['population-exchange', 'greece']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did the Treaty of Sèvres ultimately fail to take effect?',
            no: 'Hvorfor trådte Sèvres-traktaten til slutt ikke i kraft?'
          },
          answers: [
            { en: 'Turkish nationalist resistance overturned it', no: 'Tyrkisk nasjonalistisk motstand veltet den' },
            { en: 'The Allies cancelled all treaties', no: 'De allierte annullerte alle traktater' },
            { en: 'Germany vetoed it', no: 'Tyskland nedla veto mot den' },
            { en: 'It was never signed', no: 'Den ble aldri undertegnet' }
          ],
          correct: 0,
          explanation: {
            en: 'Atatürk’s nationalist movement defeated the terms, leading to the Treaty of Lausanne instead.',
            no: 'Atatürks nasjonalistbevegelse beseiret vilkårene, noe som førte til Lausanne-traktaten i stedet.'
          },
          tags: ['sevres', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'A major long-term consequence of the empire’s collapse was what?',
            no: 'En viktig langsiktig konsekvens av rikets sammenbrudd var hva?'
          },
          answers: [
            { en: 'The Ottomans regained their lands', no: 'Osmanene fikk tilbake landområdene sine' },
            { en: 'European powers drew the borders of the modern Middle East', no: 'Europeiske stormakter trakk opp grensene i det moderne Midtøsten' },
            { en: 'The region became a single unified state', no: 'Regionen ble én samlet stat' },
            { en: 'All borders disappeared', no: 'Alle grenser forsvant' }
          ],
          correct: 1,
          explanation: {
            en: 'Britain and France redrew the map, creating many of today’s Middle Eastern states.',
            no: 'Storbritannia og Frankrike tegnet kartet på nytt og skapte mange av dagens midtøstenstater.'
          },
          tags: ['borders', 'long-term']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The mass killings and deportations of Armenians in 1915 are widely referred to as what?',
            no: 'Massedrapene og deportasjonene av armenere i 1915 omtales i stor grad som hva?'
          },
          answers: [
            { en: 'The Balkan Exchange', no: 'Balkanutvekslingen' },
            { en: 'The Tanzimat', no: 'Tanzimat' },
            { en: 'The Armenian Genocide', no: 'Det armenske folkemordet' },
            { en: 'The Great Migration', no: 'Den store migrasjonen' }
          ],
          correct: 2,
          explanation: {
            en: 'The 1915 mass killings of Armenians are widely recognized as the Armenian Genocide.',
            no: 'Massedrapene på armenere i 1915 anerkjennes i stor grad som det armenske folkemordet.'
          },
          tags: ['armenian-genocide', 'context']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was a consequence of abolishing the caliphate in 1924?',
            no: 'Hva var en konsekvens av å avskaffe kalifatet i 1924?'
          },
          answers: [
            { en: 'It created a new empire', no: 'Det skapte et nytt imperium' },
            { en: 'It restored the sultanate', no: 'Det gjeninnførte sultanatet' },
            { en: 'It united all Muslim states', no: 'Det forente alle muslimske stater' },
            { en: 'It ended a centuries-old symbol of Islamic political authority', no: 'Det avsluttet et århundregammelt symbol på islamsk politisk autoritet' }
          ],
          correct: 3,
          explanation: {
            en: 'Abolishing the caliphate removed a unifying symbol of Islamic leadership claimed since medieval times.',
            no: 'Avskaffelsen av kalifatet fjernet et samlende symbol på islamsk lederskap som hadde vært hevdet siden middelalderen.'
          },
          tags: ['caliphate', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the war’s end compare for the Ottoman and Austro-Hungarian empires?',
            no: 'Hvordan var krigens slutt sammenlignbar for det osmanske og det østerriksk-ungarske riket?'
          },
          answers: [
            { en: 'Both multi-ethnic empires broke apart after defeat', no: 'Begge de fleretniske rikene gikk i oppløsning etter nederlaget' },
            { en: 'Both expanded after the war', no: 'Begge ekspanderte etter krigen' },
            { en: 'Both remained monarchies', no: 'Begge forble monarkier' },
            { en: 'Both stayed neutral', no: 'Begge forholdt seg nøytrale' }
          ],
          correct: 0,
          explanation: {
            en: 'Like Austria-Hungary, the Ottoman Empire fragmented into successor states after WWI.',
            no: 'Som Østerrike-Ungarn ble Det osmanske riket oppdelt i etterfølgerstater etter første verdenskrig.'
          },
          tags: ['comparison', 'empires']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Historians debating Ottoman decline often disagree over what?',
            no: 'Historikere som diskuterer osmansk nedgang, er ofte uenige om hva?'
          },
          answers: [
            { en: 'Whether it fought in World War I', no: 'Om det deltok i første verdenskrig' },
            { en: 'Whether internal weakness or external pressure mattered more', no: 'Om indre svakhet eller ytre press betydde mest' },
            { en: 'Whether the empire ever existed', no: 'Om riket noen gang eksisterte' },
            { en: 'The location of its capital', no: 'Hvor hovedstaden lå' }
          ],
          correct: 1,
          explanation: {
            en: 'Scholars debate the relative weight of internal decay versus European intervention and economic pressure.',
            no: 'Forskere diskuterer den relative vekten av indre forfall kontra europeisk intervensjon og økonomisk press.'
          },
          tags: ['historiography', 'decline']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the Sykes-Picot Agreement often blamed for later Middle Eastern instability?',
            no: 'Hvorfor får Sykes-Picot-avtalen ofte skylden for senere ustabilitet i Midtøsten?'
          },
          answers: [
            { en: 'It united all Arabs into one state', no: 'Den forente alle arabere i én stat' },
            { en: 'It restored Ottoman rule', no: 'Den gjeninnførte osmansk styre' },
            { en: 'It drew borders ignoring local ethnic and religious realities', no: 'Den trakk grenser som ignorerte lokale etniske og religiøse forhold' },
            { en: 'It granted full independence too quickly', no: 'Den ga full uavhengighet for raskt' }
          ],
          correct: 2,
          explanation: {
            en: 'Critics argue the artificial borders cut across communities and sowed long-term conflict.',
            no: 'Kritikere hevder at de kunstige grensene gikk på tvers av folkegrupper og sådde langvarig konflikt.'
          },
          tags: ['sykes-picot', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'The McMahon-Hussein Correspondence is significant because it appeared to do what?',
            no: 'McMahon-Hussein-korrespondansen er viktig fordi den så ut til å gjøre hva?'
          },
          answers: [
            { en: 'Guarantee Ottoman survival', no: 'Garantere osmansk overlevelse' },
            { en: 'Establish the United Nations', no: 'Opprette De forente nasjoner' },
            { en: 'Divide Europe into blocs', no: 'Dele Europa i blokker' },
            { en: 'Promise Arab independence in exchange for revolt against the Ottomans', no: 'Love arabisk uavhengighet i bytte mot opprør mot osmanene' }
          ],
          correct: 3,
          explanation: {
            en: 'British promises of Arab independence in this correspondence later clashed with Sykes-Picot and the Balfour Declaration.',
            no: 'Britiske løfter om arabisk uavhengighet i denne korrespondansen kolliderte senere med Sykes-Picot og Balfour-erklæringen.'
          },
          tags: ['mcmahon-hussein', 'promises']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Many historians describe the post-war mandate system as what?',
            no: 'Mange historikere beskriver mandatsystemet etter krigen som hva?'
          },
          answers: [
            { en: 'A form of colonialism in a new guise', no: 'En form for kolonialisme i ny innpakning' },
            { en: 'Genuine self-government for Arabs', no: 'Ekte selvstyre for arabere' },
            { en: 'A purely economic union', no: 'En rent økonomisk union' },
            { en: 'A short-lived military alliance', no: 'En kortvarig militærallianse' }
          ],
          correct: 0,
          explanation: {
            en: 'Although framed as guidance toward independence, mandates often functioned as colonial control.',
            no: 'Selv om de ble fremstilt som veiledning mot uavhengighet, fungerte mandatene ofte som kolonial kontroll.'
          },
          tags: ['mandates', 'interpretation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Which economic factor is cited as undermining Ottoman sovereignty before the collapse?',
            no: 'Hvilken økonomisk faktor trekkes frem som undergravende for osmansk suverenitet før sammenbruddet?'
          },
          answers: [
            { en: 'A ban on all foreign loans', no: 'Et forbud mot alle utenlandske lån' },
            { en: 'Foreign debt and the Capitulations granting privileges to Europeans', no: 'Utenlandsgjeld og kapitulasjonene som ga europeere privilegier' },
            { en: 'A surplus of gold reserves', no: 'Et overskudd av gullreserver' },
            { en: 'Rapid industrial dominance', no: 'Rask industriell dominans' }
          ],
          correct: 1,
          explanation: {
            en: 'Massive debt and the Capitulations let European powers control Ottoman finances and trade.',
            no: 'Enorm gjeld og kapitulasjonene lot europeiske stormakter kontrollere osmanske finanser og handel.'
          },
          tags: ['economy', 'capitulations']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does the "sick man of Europe" thesis get criticized by some historians?',
            no: 'Hvordan kritiseres «Europas syke mann»-tesen av enkelte historikere?'
          },
          answers: [
            { en: 'It ignores the empire’s small size', no: 'Den overser rikets lille størrelse' },
            { en: 'It denies the empire existed', no: 'Den benekter at riket eksisterte' },
            { en: 'It downplays Ottoman reform efforts like the Tanzimat', no: 'Den undervurderer osmanske reformforsøk som Tanzimat' },
            { en: 'It overstates Ottoman military weakness', no: 'Den overdriver osmansk militær svakhet' }
          ],
          correct: 2,
          explanation: {
            en: 'Critics note the empire actively reformed (Tanzimat), so "terminal decline" oversimplifies its history.',
            no: 'Kritikere påpeker at riket aktivt reformerte (Tanzimat), så «uunngåelig forfall» forenkler historien for mye.'
          },
          tags: ['tanzimat', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'A long-term effect linked to the abolition of the caliphate is what?',
            no: 'En langsiktig effekt knyttet til avskaffelsen av kalifatet er hva?'
          },
          answers: [
            { en: 'The immediate unification of all Muslims', no: 'Umiddelbar forening av alle muslimer' },
            { en: 'The end of Islam as a religion', no: 'Slutten på islam som religion' },
            { en: 'A return to Ottoman rule', no: 'En gjeninnføring av osmansk styre' },
            { en: 'Debates over Islamic leadership that influence modern movements', no: 'Debatter om islamsk lederskap som påvirker moderne bevegelser' }
          ],
          correct: 3,
          explanation: {
            en: 'The caliphate’s end left a vacuum that later Islamist movements have invoked in calls for its restoration.',
            no: 'Kalifatets slutt etterlot et tomrom som senere islamistiske bevegelser har påberopt seg i krav om gjenopprettelse.'
          },
          tags: ['caliphate', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do scholars disagree about World War I’s role in the empire’s fall?',
            no: 'Hvorfor er forskere uenige om første verdenskrigs rolle i rikets fall?'
          },
          answers: [
            { en: 'Some see it as the trigger, others as an accelerator of long decline', no: 'Noen ser den som utløseren, andre som en akselerator av en lang nedgang' },
            { en: 'They dispute whether the war happened', no: 'De er uenige om krigen fant sted' },
            { en: 'They deny the empire fought in it', no: 'De benekter at riket deltok i den' },
            { en: 'They believe it strengthened the empire', no: 'De mener den styrket riket' }
          ],
          correct: 0,
          explanation: {
            en: 'Historians debate whether WWI caused the collapse or merely sped up a decline already underway.',
            no: 'Historikere diskuterer om første verdenskrig forårsaket sammenbruddet eller bare fremskyndet en nedgang som allerede var i gang.'
          },
          tags: ['world-war-i', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'The Balfour Declaration of 1917 complicated the postwar settlement because it did what?',
            no: 'Balfour-erklæringen fra 1917 kompliserte etterkrigsoppgjøret fordi den gjorde hva?'
          },
          answers: [
            { en: 'Created an independent Kurdistan', no: 'Opprettet et uavhengig Kurdistan' },
            { en: 'Expressed British support for a Jewish national home in Palestine', no: 'Uttrykte britisk støtte til et jødisk nasjonalhjem i Palestina' },
            { en: 'Promised Palestine to France', no: 'Lovte Palestina til Frankrike' },
            { en: 'Restored Ottoman control of Jerusalem', no: 'Gjeninnførte osmansk kontroll over Jerusalem' }
          ],
          correct: 1,
          explanation: {
            en: 'British support for a Jewish homeland conflicted with promises made to Arabs, fueling future disputes.',
            no: 'Britisk støtte til et jødisk hjemland kolliderte med løfter gitt til arabere, og næret framtidige konflikter.'
          },
          tags: ['balfour', 'connections']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do historians assess the relative roles of nationalism and great-power intervention in the collapse?',
            no: 'Hvordan vurderer historikere de relative rollene til nasjonalisme og stormaktsintervensjon i sammenbruddet?'
          },
          answers: [
            { en: 'Only nationalism mattered', no: 'Bare nasjonalisme betydde noe' },
            { en: 'Neither played any role', no: 'Ingen av delene spilte noen rolle' },
            { en: 'Both interacted, with internal nationalism and outside powers reinforcing each other', no: 'Begge virket sammen, der indre nasjonalisme og ytre makter forsterket hverandre' },
            { en: 'Only foreign powers mattered', no: 'Bare utenlandske makter betydde noe' }
          ],
          correct: 2,
          explanation: {
            en: 'Most analyses stress an interplay between internal nationalist movements and external pressures.',
            no: 'De fleste analyser vektlegger et samspill mellom indre nasjonalistbevegelser og ytre press.'
          },
          tags: ['multiple-causes', 'interpretation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'A long-term effect of the 1923 Greek-Turkish population exchange was what?',
            no: 'En langsiktig effekt av den gresk-tyrkiske befolkningsutvekslingen i 1923 var hva?'
          },
          answers: [
            { en: 'It ended all conflict in the region', no: 'Den avsluttet all konflikt i regionen' },
            { en: 'It had no demographic effect', no: 'Den hadde ingen demografisk effekt' },
            { en: 'It restored the Ottoman Empire', no: 'Den gjeninnførte Det osmanske riket' },
            { en: 'It set a controversial precedent for state-organized forced migration', no: 'Den satte en omstridt presedens for statsorganisert tvangsmigrasjon' }
          ],
          correct: 3,
          explanation: {
            en: 'The exchange uprooted nearly two million people and became a model later cited in other forced migrations.',
            no: 'Utvekslingen rykket opp nesten to millioner mennesker og ble en modell som senere ble vist til i andre tvangsmigrasjoner.'
          },
          tags: ['population-exchange', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the recognition of the Armenian Genocide still politically contested?',
            no: 'Hvorfor er anerkjennelsen av det armenske folkemordet fortsatt politisk omstridt?'
          },
          answers: [
            { en: 'Turkey officially disputes the genocide label', no: 'Tyrkia bestrider offisielt folkemordsbetegnelsen' },
            { en: 'No records of the events survive', no: 'Ingen opptegnelser fra hendelsene er bevart' },
            { en: 'The events are too recent to study', no: 'Hendelsene er for nye til å studere' },
            { en: 'No country recognizes it', no: 'Ingen land anerkjenner det' }
          ],
          correct: 0,
          explanation: {
            en: 'Turkey rejects the term "genocide," making international recognition a diplomatic flashpoint.',
            no: 'Tyrkia avviser begrepet «folkemord», noe som gjør internasjonal anerkjennelse til et diplomatisk stridstema.'
          },
          tags: ['armenian-genocide', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How is Atatürk’s legacy debated today?',
            no: 'Hvordan diskuteres Atatürks ettermæle i dag?'
          },
          answers: [
            { en: 'As an Ottoman sultan', no: 'Som en osmansk sultan' },
            { en: 'As both a modernizing hero and an authoritarian who suppressed dissent', no: 'Som både en moderniserende helt og en autoritær leder som undertrykte opposisjon' },
            { en: 'As a defender of the caliphate', no: 'Som en forsvarer av kalifatet' },
            { en: 'As a leader who avoided all reform', no: 'Som en leder som unngikk all reform' }
          ],
          correct: 1,
          explanation: {
            en: 'Atatürk is praised for modernization but criticized for authoritarian methods and forced cultural change.',
            no: 'Atatürk hylles for modernisering, men kritiseres for autoritære metoder og påtvunget kulturell endring.'
          },
          tags: ['ataturk', 'legacy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians say the borders created after 1918 still shape Middle Eastern politics?',
            no: 'Hvorfor sier historikere at grensene som ble skapt etter 1918, fortsatt former politikken i Midtøsten?'
          },
          answers: [
            { en: 'They were redrawn every decade', no: 'De ble tegnet på nytt hvert tiår' },
            { en: 'They were never actually implemented', no: 'De ble aldri faktisk innført' },
            { en: 'They grouped rival communities and divided others into fragile states', no: 'De samlet rivaliserende folkegrupper og delte andre inn i skjøre stater' },
            { en: 'They followed natural ethnic lines perfectly', no: 'De fulgte naturlige etniske linjer perfekt' }
          ],
          correct: 2,
          explanation: {
            en: 'Externally imposed borders left many states with internal divisions that fuel conflict to this day.',
            no: 'Eksternt påtvungne grenser etterlot mange stater med indre splittelser som nærer konflikt den dag i dag.'
          },
          tags: ['borders', 'long-term']
        }
      ]
    },
    {
      slug: 'creation-of-modern-states',
      name: { en: 'Creation of modern states', no: 'Opprettelsen av moderne stater' },
      questions: []
    },
    {
      slug: 'israel-palestine-conflict',
      name: { en: 'Israel/Palestine conflict', no: 'Israel/Palestina-konflikten' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'In what year was the State of Israel established?',
            no: 'I hvilket år ble staten Israel opprettet?'
          },
          answers: [
            { en: '1917', no: '1917' },
            { en: '1967', no: '1967' },
            { en: '1922', no: '1922' },
            { en: '1948', no: '1948' }
          ],
          correct: 3,
          explanation: {
            en: 'The State of Israel was established in 1948.',
            no: 'Staten Israel ble opprettet i 1948.'
          },
          tags: ['israel', '1948']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which body proposed a plan to partition Palestine in 1947?',
            no: 'Hvilket organ foreslo en plan om å dele Palestina i 1947?'
          },
          answers: [
            { en: 'The United Nations', no: 'De forente nasjoner' },
            { en: 'The Arab League', no: 'Den arabiske liga' },
            { en: 'The League of Nations', no: 'Folkeforbundet' },
            { en: 'NATO', no: 'NATO' }
          ],
          correct: 0,
          explanation: {
            en: 'In 1947 the United Nations proposed partitioning Palestine into Jewish and Arab states.',
            no: 'I 1947 foreslo De forente nasjoner å dele Palestina i en jødisk og en arabisk stat.'
          },
          tags: ['un', 'partition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the name of the movement for a Jewish homeland?',
            no: 'Hva heter bevegelsen for et jødisk hjemland?'
          },
          answers: [
            { en: 'Federalism', no: 'Føderalisme' },
            { en: 'Zionism', no: 'Sionisme' },
            { en: 'Pan-Arabism', no: 'Panarabisme' },
            { en: 'Socialism', no: 'Sosialisme' }
          ],
          correct: 1,
          explanation: {
            en: 'Zionism was the movement supporting the establishment of a Jewish homeland.',
            no: 'Sionisme var bevegelsen som støttet opprettelsen av et jødisk hjemland.'
          },
          tags: ['zionism', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which city is considered holy by Jews, Christians, and Muslims and is central to the conflict?',
            no: 'Hvilken by regnes som hellig av jøder, kristne og muslimer og er sentral i konflikten?'
          },
          answers: [
            { en: 'Amman', no: 'Amman' },
            { en: 'Cairo', no: 'Kairo' },
            { en: 'Jerusalem', no: 'Jerusalem' },
            { en: 'Damascus', no: 'Damaskus' }
          ],
          correct: 2,
          explanation: {
            en: 'Jerusalem holds deep religious significance for Judaism, Christianity, and Islam.',
            no: 'Jerusalem har dyp religiøs betydning for jødedommen, kristendommen og islam.'
          },
          tags: ['jerusalem', 'religion']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What do Palestinians call the displacement of 1948?',
            no: 'Hva kaller palestinerne fordrivelsen i 1948?'
          },
          answers: [
            { en: 'The Aliyah', no: 'Aliyah' },
            { en: 'The Intifada', no: 'Intifada' },
            { en: 'The Hijra', no: 'Hijra' },
            { en: 'The Nakba', no: 'Nakba' }
          ],
          correct: 3,
          explanation: {
            en: 'Palestinians call the 1948 displacement the Nakba, meaning "catastrophe."',
            no: 'Palestinerne kaller fordrivelsen i 1948 for Nakba, som betyr «katastrofe».'
          },
          tags: ['nakba', '1948']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which war in 1967 lasted only six days?',
            no: 'Hvilken krig i 1967 varte i bare seks dager?'
          },
          answers: [
            { en: 'The Six-Day War', no: 'Seksdagerskrigen' },
            { en: 'The Suez Crisis', no: 'Suezkrisen' },
            { en: 'The First Intifada', no: 'Den første intifadaen' },
            { en: 'The Yom Kippur War', no: 'Yom Kippur-krigen' }
          ],
          correct: 0,
          explanation: {
            en: 'The Six-Day War of 1967 saw Israel defeat neighboring Arab states in less than a week.',
            no: 'Seksdagerskrigen i 1967 endte med at Israel beseiret nabolandene på under en uke.'
          },
          tags: ['six-day-war', '1967']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does PLO stand for?',
            no: 'Hva står PLO for?'
          },
          answers: [
            { en: 'Palestinian Labour Order', no: 'Den palestinske arbeiderorden' },
            { en: 'Palestine Liberation Organization', no: 'Den palestinske frigjøringsorganisasjonen' },
            { en: 'Pan-Levantine Oil Organization', no: 'Den pan-levantinske oljeorganisasjonen' },
            { en: 'Peace and Land Office', no: 'Freds- og landkontoret' }
          ],
          correct: 1,
          explanation: {
            en: 'The PLO is the Palestine Liberation Organization, founded in 1964.',
            no: 'PLO er Den palestinske frigjøringsorganisasjonen, grunnlagt i 1964.'
          },
          tags: ['plo', 'organizations']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who was the long-time leader and chairman of the PLO?',
            no: 'Hvem var den mangeårige lederen og formannen i PLO?'
          },
          answers: [
            { en: 'Anwar Sadat', no: 'Anwar Sadat' },
            { en: 'King Hussein', no: 'Kong Hussein' },
            { en: 'Yasser Arafat', no: 'Yasser Arafat' },
            { en: 'Gamal Abdel Nasser', no: 'Gamal Abdel Nasser' }
          ],
          correct: 2,
          explanation: {
            en: 'Yasser Arafat led the PLO for decades and became a symbol of the Palestinian cause.',
            no: 'Yasser Arafat ledet PLO i flere tiår og ble et symbol på den palestinske saken.'
          },
          tags: ['arafat', 'leaders']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which two territories are the main areas associated with Palestinians today?',
            no: 'Hvilke to områder er hovedområdene som forbindes med palestinerne i dag?'
          },
          answers: [
            { en: 'Sinai and the Golan Heights', no: 'Sinai og Golanhøydene' },
            { en: 'Lebanon and Syria', no: 'Libanon og Syria' },
            { en: 'Jordan and Egypt', no: 'Jordan og Egypt' },
            { en: 'The West Bank and the Gaza Strip', no: 'Vestbredden og Gazastripen' }
          ],
          correct: 3,
          explanation: {
            en: 'The West Bank and the Gaza Strip are the main Palestinian territories today.',
            no: 'Vestbredden og Gazastripen er de viktigste palestinske områdene i dag.'
          },
          tags: ['west-bank', 'gaza']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The Gaza Strip lies along which body of water?',
            no: 'Gazastripen ligger langs hvilket havområde?'
          },
          answers: [
            { en: 'The Mediterranean Sea', no: 'Middelhavet' },
            { en: 'The Black Sea', no: 'Svartehavet' },
            { en: 'The Persian Gulf', no: 'Persiabukta' },
            { en: 'The Red Sea', no: 'Rødehavet' }
          ],
          correct: 0,
          explanation: {
            en: 'The Gaza Strip borders the Mediterranean Sea.',
            no: 'Gazastripen grenser til Middelhavet.'
          },
          tags: ['gaza', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The Oslo Accords of the 1990s were agreements aimed at what?',
            no: 'Oslo-avtalene på 1990-tallet var avtaler som tok sikte på hva?'
          },
          answers: [
            { en: 'Creating the United Nations', no: 'Å opprette FN' },
            { en: 'Peace between Israel and the Palestinians', no: 'Fred mellom Israel og palestinerne' },
            { en: 'Forming the Arab League', no: 'Å danne Den arabiske liga' },
            { en: 'Ending the Cold War', no: 'Å avslutte den kalde krigen' }
          ],
          correct: 1,
          explanation: {
            en: 'The Oslo Accords were peace agreements between Israel and the PLO in the 1990s.',
            no: 'Oslo-avtalene var fredsavtaler mellom Israel og PLO på 1990-tallet.'
          },
          tags: ['oslo-accords', 'peace']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Before 1948, the region was administered under which British arrangement?',
            no: 'Før 1948 ble regionen styrt under hvilken britisk ordning?'
          },
          answers: [
            { en: 'The Commonwealth', no: 'Samveldet' },
            { en: 'The East India Company', no: 'Det ostindiske kompani' },
            { en: 'The British Mandate for Palestine', no: 'Det britiske mandatet for Palestina' },
            { en: 'The British Raj', no: 'Det britiske Raj' }
          ],
          correct: 2,
          explanation: {
            en: 'Britain governed the area under the Mandate for Palestine from 1920 until 1948.',
            no: 'Storbritannia styrte området under mandatet for Palestina fra 1920 til 1948.'
          },
          tags: ['british-mandate', 'context']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which group has governed the Gaza Strip since 2007?',
            no: 'Hvilken gruppe har styrt Gazastripen siden 2007?'
          },
          answers: [
            { en: 'Hezbollah', no: 'Hizbollah' },
            { en: 'The Muslim Brotherhood of Egypt', no: 'Det muslimske brorskap i Egypt' },
            { en: 'The Arab League', no: 'Den arabiske liga' },
            { en: 'Hamas', no: 'Hamas' }
          ],
          correct: 3,
          explanation: {
            en: 'Hamas took control of the Gaza Strip in 2007.',
            no: 'Hamas tok kontroll over Gazastripen i 2007.'
          },
          tags: ['hamas', 'gaza']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the proposed solution involving two separate states for Israelis and Palestinians called?',
            no: 'Hva kalles den foreslåtte løsningen med to separate stater for israelere og palestinere?'
          },
          answers: [
            { en: 'The two-state solution', no: 'Tostatsløsningen' },
            { en: 'The mandate system', no: 'Mandatsystemet' },
            { en: 'The federation plan', no: 'Føderasjonsplanen' },
            { en: 'The trusteeship', no: 'Formynderskapet' }
          ],
          correct: 0,
          explanation: {
            en: 'The two-state solution envisions independent Israeli and Palestinian states side by side.',
            no: 'Tostatsløsningen ser for seg uavhengige israelske og palestinske stater side om side.'
          },
          tags: ['two-state', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which country signed a landmark 1979 peace treaty with Israel?',
            no: 'Hvilket land undertegnet en banebrytende fredsavtale med Israel i 1979?'
          },
          answers: [
            { en: 'Saudi Arabia', no: 'Saudi-Arabia' },
            { en: 'Egypt', no: 'Egypt' },
            { en: 'Iraq', no: 'Irak' },
            { en: 'Syria', no: 'Syria' }
          ],
          correct: 1,
          explanation: {
            en: 'Egypt and Israel signed a peace treaty in 1979 after the Camp David Accords.',
            no: 'Egypt og Israel undertegnet en fredsavtale i 1979 etter Camp David-avtalene.'
          },
          tags: ['egypt', 'peace']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The 1917 Balfour Declaration expressed British support for what?',
            no: 'Balfour-erklæringen fra 1917 uttrykte britisk støtte til hva?'
          },
          answers: [
            { en: 'Ottoman rule over Palestine', no: 'Osmansk styre over Palestina' },
            { en: 'A French protectorate', no: 'Et fransk protektorat' },
            { en: 'A national home for the Jewish people in Palestine', no: 'Et nasjonalhjem for det jødiske folk i Palestina' },
            { en: 'An independent Arab kingdom', no: 'Et uavhengig arabisk kongerike' }
          ],
          correct: 2,
          explanation: {
            en: 'The Balfour Declaration backed a Jewish national home while pledging to respect existing communities.',
            no: 'Balfour-erklæringen støttet et jødisk nasjonalhjem samtidig som den lovet å respektere eksisterende samfunn.'
          },
          tags: ['balfour', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What happened immediately after Israel declared independence in 1948?',
            no: 'Hva skjedde umiddelbart etter at Israel erklærte uavhengighet i 1948?'
          },
          answers: [
            { en: 'A lasting peace was signed', no: 'En varig fred ble undertegnet' },
            { en: 'The United Nations dissolved', no: 'FN ble oppløst' },
            { en: 'Britain reoccupied the region', no: 'Storbritannia gjenokkuperte regionen' },
            { en: 'Neighboring Arab states went to war with Israel', no: 'Arabiske naboland gikk til krig mot Israel' }
          ],
          correct: 3,
          explanation: {
            en: 'The 1948 Arab-Israeli War broke out when neighboring Arab states attacked the new state.',
            no: 'Den arabisk-israelske krigen i 1948 brøt ut da arabiske naboland angrep den nye staten.'
          },
          tags: ['1948-war', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Which territories did Israel capture in the 1967 Six-Day War?',
            no: 'Hvilke områder erobret Israel i seksdagerskrigen i 1967?'
          },
          answers: [
            { en: 'The West Bank, Gaza, Sinai, Golan Heights, and East Jerusalem', no: 'Vestbredden, Gaza, Sinai, Golanhøydene og Øst-Jerusalem' },
            { en: 'Only the Sinai Peninsula', no: 'Bare Sinaihalvøya' },
            { en: 'Lebanon and Jordan', no: 'Libanon og Jordan' },
            { en: 'No new territory', no: 'Ingen nye områder' }
          ],
          correct: 0,
          explanation: {
            en: 'In 1967 Israel took the West Bank, Gaza, Sinai, the Golan Heights, and East Jerusalem.',
            no: 'I 1967 tok Israel Vestbredden, Gaza, Sinai, Golanhøydene og Øst-Jerusalem.'
          },
          tags: ['six-day-war', 'territory']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What did the 1978 Camp David Accords primarily achieve?',
            no: 'Hva oppnådde Camp David-avtalene i 1978 først og fremst?'
          },
          answers: [
            { en: 'The end of the Cold War', no: 'Slutten på den kalde krigen' },
            { en: 'A framework for peace between Egypt and Israel', no: 'Et rammeverk for fred mellom Egypt og Israel' },
            { en: 'A Palestinian state', no: 'En palestinsk stat' },
            { en: 'Israeli membership in the Arab League', no: 'Israelsk medlemskap i Den arabiske liga' }
          ],
          correct: 1,
          explanation: {
            en: 'The Camp David Accords led to the 1979 Egypt-Israel peace treaty.',
            no: 'Camp David-avtalene førte til fredsavtalen mellom Egypt og Israel i 1979.'
          },
          tags: ['camp-david', 'peace']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What were the First and Second Intifadas?',
            no: 'Hva var den første og den andre intifadaen?'
          },
          answers: [
            { en: 'UN peacekeeping missions', no: 'FN-fredsbevarende operasjoner' },
            { en: 'Egyptian elections', no: 'Egyptiske valg' },
            { en: 'Palestinian uprisings against Israeli occupation', no: 'Palestinske opprør mot israelsk okkupasjon' },
            { en: 'Israeli military parades', no: 'Israelske militærparader' }
          ],
          correct: 2,
          explanation: {
            en: 'The Intifadas were major Palestinian uprisings, the first from 1987 and the second from 2000.',
            no: 'Intifadaene var store palestinske opprør, den første fra 1987 og den andre fra 2000.'
          },
          tags: ['intifada', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'A key outcome of the Oslo Accords was the creation of what?',
            no: 'Et viktig resultat av Oslo-avtalene var opprettelsen av hva?'
          },
          answers: [
            { en: 'The State of Israel', no: 'Staten Israel' },
            { en: 'The Arab League', no: 'Den arabiske liga' },
            { en: 'The United Nations', no: 'De forente nasjoner' },
            { en: 'The Palestinian Authority', no: 'Den palestinske selvstyremyndigheten' }
          ],
          correct: 3,
          explanation: {
            en: 'The Oslo Accords established the Palestinian Authority to govern parts of the territories.',
            no: 'Oslo-avtalene opprettet Den palestinske selvstyremyndigheten til å styre deler av områdene.'
          },
          tags: ['oslo-accords', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The Palestinian refugee issue largely originates from which event?',
            no: 'Det palestinske flyktningspørsmålet stammer i stor grad fra hvilken hendelse?'
          },
          answers: [
            { en: 'The displacement during the 1948 war', no: 'Fordrivelsen under krigen i 1948' },
            { en: 'The Oslo Accords', no: 'Oslo-avtalene' },
            { en: 'The fall of the Ottoman Empire', no: 'Det osmanske rikets fall' },
            { en: 'The Suez Crisis', no: 'Suezkrisen' }
          ],
          correct: 0,
          explanation: {
            en: 'Hundreds of thousands of Palestinians became refugees during and after the 1948 war.',
            no: 'Hundretusenvis av palestinere ble flyktninger under og etter krigen i 1948.'
          },
          tags: ['refugees', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The Yom Kippur War of 1973 began when which states attacked Israel?',
            no: 'Yom Kippur-krigen i 1973 startet da hvilke stater angrep Israel?'
          },
          answers: [
            { en: 'Turkey and Greece', no: 'Tyrkia og Hellas' },
            { en: 'Egypt and Syria', no: 'Egypt og Syria' },
            { en: 'Iran and Iraq', no: 'Iran og Irak' },
            { en: 'Jordan and Lebanon', no: 'Jordan og Libanon' }
          ],
          correct: 1,
          explanation: {
            en: 'Egypt and Syria launched a surprise attack on Israel during Yom Kippur in 1973.',
            no: 'Egypt og Syria innledet et overraskelsesangrep på Israel under Yom Kippur i 1973.'
          },
          tags: ['yom-kippur-war', 'context']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why are Israeli settlements in the West Bank a source of tension?',
            no: 'Hvorfor er israelske bosetninger på Vestbredden en kilde til spenning?'
          },
          answers: [
            { en: 'They are run by the United Nations', no: 'De drives av FN' },
            { en: 'They are uninhabited', no: 'De er ubebodde' },
            { en: 'They are built on land Palestinians claim for a future state', no: 'De bygges på land palestinerne gjør krav på til en framtidig stat' },
            { en: 'They are located inside Egypt', no: 'De ligger inne i Egypt' }
          ],
          correct: 2,
          explanation: {
            en: 'Settlements on occupied land are widely seen as obstacles to a viable Palestinian state.',
            no: 'Bosetninger på okkupert land oppfattes i stor grad som hindringer for en levedyktig palestinsk stat.'
          },
          tags: ['settlements', 'west-bank']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The "Green Line" generally refers to what?',
            no: 'Den «grønne linjen» viser vanligvis til hva?'
          },
          answers: [
            { en: 'A railway through Jerusalem', no: 'En jernbane gjennom Jerusalem' },
            { en: 'The Suez Canal', no: 'Suezkanalen' },
            { en: 'The Jordan River’s source', no: 'Jordanelvas kilde' },
            { en: 'The armistice borders from before the 1967 war', no: 'Våpenhvilegrensene fra før krigen i 1967' }
          ],
          correct: 3,
          explanation: {
            en: 'The Green Line marks the 1949 armistice lines that existed before the 1967 war.',
            no: 'Den grønne linjen markerer våpenhvilelinjene fra 1949 som eksisterte før krigen i 1967.'
          },
          tags: ['green-line', 'borders']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does the status of Jerusalem complicate peace efforts?',
            no: 'Hvordan kompliserer Jerusalems status fredsbestrebelsene?'
          },
          answers: [
            { en: 'Both sides claim it as their capital', no: 'Begge parter gjør krav på den som sin hovedstad' },
            { en: 'Neither side wants it', no: 'Ingen av partene vil ha den' },
            { en: 'It belongs to Egypt', no: 'Den tilhører Egypt' },
            { en: 'It has no religious significance', no: 'Den har ingen religiøs betydning' }
          ],
          correct: 0,
          explanation: {
            en: 'Israelis and Palestinians both claim Jerusalem as their capital, making it deeply contested.',
            no: 'Både israelere og palestinere gjør krav på Jerusalem som sin hovedstad, noe som gjør den dypt omstridt.'
          },
          tags: ['jerusalem', 'connections']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The 1979 Egypt-Israel treaty had what notable consequence for Egypt?',
            no: 'Avtalen mellom Egypt og Israel i 1979 fikk hvilken bemerkelsesverdig konsekvens for Egypt?'
          },
          answers: [
            { en: 'It declared war on Israel again', no: 'Det erklærte krig mot Israel igjen' },
            { en: 'It was temporarily suspended from the Arab League', no: 'Det ble midlertidig suspendert fra Den arabiske liga' },
            { en: 'It joined NATO', no: 'Det ble med i NATO' },
            { en: 'It gained the West Bank', no: 'Det fikk Vestbredden' }
          ],
          correct: 1,
          explanation: {
            en: 'Egypt was suspended from the Arab League for making a separate peace with Israel.',
            no: 'Egypt ble suspendert fra Den arabiske liga for å inngå en separat fred med Israel.'
          },
          tags: ['egypt', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The Suez Crisis of 1956 involved Israel alongside which two European powers?',
            no: 'Suezkrisen i 1956 involverte Israel sammen med hvilke to europeiske stormakter?'
          },
          answers: [
            { en: 'Spain and Portugal', no: 'Spania og Portugal' },
            { en: 'Russia and Greece', no: 'Russland og Hellas' },
            { en: 'Britain and France', no: 'Storbritannia og Frankrike' },
            { en: 'Germany and Italy', no: 'Tyskland og Italia' }
          ],
          correct: 2,
          explanation: {
            en: 'Israel, Britain, and France attacked Egypt in 1956 after Nasser nationalized the Suez Canal.',
            no: 'Israel, Storbritannia og Frankrike angrep Egypt i 1956 etter at Nasser nasjonaliserte Suezkanalen.'
          },
          tags: ['suez-crisis', 'context']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do Israeli and Palestinian narratives of 1948 differ so sharply?',
            no: 'Hvorfor er de israelske og palestinske fortellingene om 1948 så ulike?'
          },
          answers: [
            { en: 'They disagree on the year it happened', no: 'De er uenige om hvilket år det skjedde' },
            { en: 'Neither side acknowledges the war', no: 'Ingen av partene anerkjenner krigen' },
            { en: 'They agree on every detail', no: 'De er enige om hver detalj' },
            { en: 'One frames it as independence, the other as the Nakba catastrophe', no: 'Den ene fremstiller det som uavhengighet, den andre som Nakba-katastrofen' }
          ],
          correct: 3,
          explanation: {
            en: 'For Israelis 1948 marks national independence; for Palestinians it marks dispossession and exile.',
            no: 'For israelere markerer 1948 nasjonal uavhengighet; for palestinere markerer det fordrivelse og eksil.'
          },
          tags: ['narratives', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Israel’s "New Historians" of the 1980s are known for what?',
            no: 'Israels «nye historikere» på 1980-tallet er kjent for hva?'
          },
          answers: [
            { en: 'Reexamining 1948 using newly opened archives', no: 'Å granske 1948 på nytt ved hjelp av nyåpnede arkiver' },
            { en: 'Denying the State of Israel exists', no: 'Å benekte at staten Israel finnes' },
            { en: 'Rejecting all archival research', no: 'Å avvise all arkivforskning' },
            { en: 'Writing only about the Ottoman era', no: 'Å skrive bare om den osmanske tiden' }
          ],
          correct: 0,
          explanation: {
            en: 'The New Historians used declassified records to revisit traditional accounts of 1948.',
            no: 'De nye historikerne brukte avgraderte dokumenter til å revurdere tradisjonelle fremstillinger av 1948.'
          },
          tags: ['new-historians', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Historians debate the 1948 Palestinian exodus largely over what question?',
            no: 'Historikere diskuterer den palestinske flukten i 1948 i stor grad ut fra hvilket spørsmål?'
          },
          answers: [
            { en: 'The exact size of Jerusalem', no: 'Den nøyaktige størrelsen på Jerusalem' },
            { en: 'How much was due to expulsion versus flight from war', no: 'Hvor mye som skyldtes utdrivelse kontra flukt fra krig' },
            { en: 'Whether any Palestinians lived there', no: 'Om noen palestinere bodde der' },
            { en: 'Whether the war occurred', no: 'Om krigen fant sted' }
          ],
          correct: 1,
          explanation: {
            en: 'Scholars debate the balance between forced expulsions and voluntary flight amid the fighting.',
            no: 'Forskere diskuterer balansen mellom tvangsutdrivelser og frivillig flukt under kampene.'
          },
          tags: ['1948', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do many analysts argue settlement expansion threatens the two-state solution?',
            no: 'Hvorfor hevder mange analytikere at bosetningsutvidelse truer tostatsløsningen?'
          },
          answers: [
            { en: 'It has no effect on borders', no: 'Den har ingen innvirkning på grensene' },
            { en: 'It is located only in Israel proper', no: 'Den ligger bare innenfor selve Israel' },
            { en: 'It fragments the land meant for a Palestinian state', no: 'Den fragmenterer landet ment for en palestinsk stat' },
            { en: 'It increases Palestinian territory', no: 'Den øker palestinsk territorium' }
          ],
          correct: 2,
          explanation: {
            en: 'Continued settlements break up the West Bank, making a contiguous Palestinian state harder to form.',
            no: 'Fortsatte bosetninger splitter opp Vestbredden og gjør en sammenhengende palestinsk stat vanskeligere å danne.'
          },
          tags: ['settlements', 'two-state']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Conflicting World War I-era British promises about the region included which three?',
            no: 'Motstridende britiske løfter om regionen fra første verdenskrig omfattet hvilke tre?'
          },
          answers: [
            { en: 'The Oslo, Camp David, and Madrid agreements', no: 'Oslo-, Camp David- og Madrid-avtalene' },
            { en: 'The Versailles, Lausanne, and Sèvres treaties', no: 'Versailles-, Lausanne- og Sèvres-traktatene' },
            { en: 'The Atlantic, Yalta, and Potsdam declarations', no: 'Atlanterhavs-, Jalta- og Potsdam-erklæringene' },
            { en: 'McMahon-Hussein, Sykes-Picot, and the Balfour Declaration', no: 'McMahon-Hussein, Sykes-Picot og Balfour-erklæringen' }
          ],
          correct: 3,
          explanation: {
            en: 'Britain made overlapping, contradictory commitments to Arabs, France, and the Zionist movement.',
            no: 'Storbritannia ga overlappende, motstridende løfter til arabere, Frankrike og den sionistiske bevegelsen.'
          },
          tags: ['promises', 'origins']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'The Palestinian "right of return" is contested mainly because Israel fears what?',
            no: 'Palestinernes «rett til retur» er omstridt hovedsakelig fordi Israel frykter hva?'
          },
          answers: [
            { en: 'It could change the demographic character of the state', no: 'Den kan endre statens demografiske karakter' },
            { en: 'It would shrink Palestinian territory', no: 'Den ville krympe palestinsk territorium' },
            { en: 'It would dissolve the United Nations', no: 'Den ville oppløse FN' },
            { en: 'It applies only to Egypt', no: 'Den gjelder bare Egypt' }
          ],
          correct: 0,
          explanation: {
            en: 'Israel resists a large-scale return of refugees, fearing it would undermine a Jewish majority.',
            no: 'Israel motsetter seg en storstilt retur av flyktninger, av frykt for at det vil undergrave et jødisk flertall.'
          },
          tags: ['right-of-return', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'UN Security Council Resolution 242 (1967) is interpreted differently over what phrase?',
            no: 'FNs sikkerhetsråds resolusjon 242 (1967) tolkes ulikt rundt hvilken formulering?'
          },
          answers: [
            { en: 'The number of member states', no: 'Antallet medlemsstater' },
            { en: 'Withdrawal "from territories" versus "from the territories"', no: 'Tilbaketrekking «fra områder» kontra «fra områdene»' },
            { en: 'The date of the ceasefire', no: 'Datoen for våpenhvilen' },
            { en: 'The name of the conflict', no: 'Navnet på konflikten' }
          ],
          correct: 1,
          explanation: {
            en: 'Ambiguous wording fuels debate over whether Israel must leave all or only some 1967 territory.',
            no: 'Tvetydig ordlyd nærer debatten om hvorvidt Israel må forlate alt eller bare deler av territoriet fra 1967.'
          },
          tags: ['resolution-242', 'interpretation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians say the Oslo peace process ultimately stalled?',
            no: 'Hvorfor sier historikere at Oslo-fredsprosessen til slutt stoppet opp?'
          },
          answers: [
            { en: 'The United Nations cancelled it', no: 'FN annullerte den' },
            { en: 'No leaders supported it', no: 'Ingen ledere støttet den' },
            { en: 'Core issues like borders, refugees, and Jerusalem were left unresolved', no: 'Kjernespørsmål som grenser, flyktninger og Jerusalem ble stående uløst' },
            { en: 'Both sides reached a final agreement', no: 'Begge parter nådde en endelig avtale' }
          ],
          correct: 2,
          explanation: {
            en: 'Oslo deferred the hardest "final status" issues, and violence and distrust eroded the process.',
            no: 'Oslo utsatte de vanskeligste «sluttstatus»-spørsmålene, og vold og mistillit undergravde prosessen.'
          },
          tags: ['oslo-accords', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did Cold War rivalry shape the Arab-Israeli conflict?',
            no: 'Hvordan formet rivaliseringen under den kalde krigen den arabisk-israelske konflikten?'
          },
          answers: [
            { en: 'Both superpowers stayed neutral', no: 'Begge supermaktene forholdt seg nøytrale' },
            { en: 'Only China was involved', no: 'Bare Kina var involvert' },
            { en: 'It ended the conflict immediately', no: 'Den avsluttet konflikten umiddelbart' },
            { en: 'The US and USSR backed opposing sides, fueling an arms race', no: 'USA og Sovjetunionen støttet motstående parter og næret et våpenkappløp' }
          ],
          correct: 3,
          explanation: {
            en: 'Superpower support for Israel and Arab states turned the region into a Cold War arena.',
            no: 'Supermaktenes støtte til Israel og arabiske stater gjorde regionen til en arena for den kalde krigen.'
          },
          tags: ['cold-war', 'external-powers']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'The debate between a "one-state" and "two-state" outcome centers on what tension?',
            no: 'Debatten mellom en «énstats»- og en «tostats»-løsning dreier seg om hvilken spenning?'
          },
          answers: [
            { en: 'Balancing a Jewish-majority state with equal rights for Palestinians', no: 'Å balansere en stat med jødisk flertall mot like rettigheter for palestinere' },
            { en: 'Whether to keep the Ottoman borders', no: 'Om man skal beholde de osmanske grensene' },
            { en: 'Which European power should rule', no: 'Hvilken europeisk stormakt som skal styre' },
            { en: 'The location of the United Nations', no: 'Hvor FN skal ligge' }
          ],
          correct: 0,
          explanation: {
            en: 'A one-state outcome raises questions about reconciling a Jewish state with full Palestinian equality.',
            no: 'En énstatsløsning reiser spørsmål om å forene en jødisk stat med full palestinsk likestilling.'
          },
          tags: ['one-state', 'two-state']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did the 2000 Camp David Summit fail, according to many accounts?',
            no: 'Hvorfor mislyktes Camp David-toppmøtet i 2000, ifølge mange fremstillinger?'
          },
          answers: [
            { en: 'The talks were never held', no: 'Samtalene ble aldri holdt' },
            { en: 'Sides disagreed over Jerusalem, refugees, and final borders', no: 'Partene var uenige om Jerusalem, flyktninger og endelige grenser' },
            { en: 'No leaders attended', no: 'Ingen ledere møtte opp' },
            { en: 'A peace deal was fully signed', no: 'En fredsavtale ble fullt undertegnet' }
          ],
          correct: 1,
          explanation: {
            en: 'Negotiators could not bridge gaps on Jerusalem, refugees, and borders, and each side blamed the other.',
            no: 'Forhandlerne klarte ikke å bygge bro over uenighetene om Jerusalem, flyktninger og grenser, og hver side ga den andre skylden.'
          },
          tags: ['camp-david-2000', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does the blockade of Gaza illustrate the economic dimension of the conflict?',
            no: 'Hvordan illustrerer blokaden av Gaza den økonomiske dimensjonen ved konflikten?'
          },
          answers: [
            { en: 'It boosted Gaza’s exports', no: 'Den økte Gazas eksport' },
            { en: 'It had no economic effect', no: 'Den hadde ingen økonomisk effekt' },
            { en: 'Restrictions on movement and trade have deepened economic hardship', no: 'Restriksjoner på bevegelse og handel har forsterket økonomisk nød' },
            { en: 'It opened Gaza to free global trade', no: 'Den åpnet Gaza for fri global handel' }
          ],
          correct: 2,
          explanation: {
            en: 'The blockade has severely limited Gaza’s economy, a key grievance and humanitarian concern.',
            no: 'Blokaden har sterkt begrenset Gazas økonomi, et sentralt klagepunkt og en humanitær bekymring.'
          },
          tags: ['gaza', 'economy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do scholars describe the conflict as especially "intractable"?',
            no: 'Hvorfor beskriver forskere konflikten som særlig «fastlåst»?'
          },
          answers: [
            { en: 'It involves only a border dispute', no: 'Den dreier seg bare om en grensetvist' },
            { en: 'It has a single, simple cause', no: 'Den har én enkel årsak' },
            { en: 'It is purely economic', no: 'Den er rent økonomisk' },
            { en: 'It combines territorial, religious, national, and historical disputes', no: 'Den kombinerer territorielle, religiøse, nasjonale og historiske stridsspørsmål' }
          ],
          correct: 3,
          explanation: {
            en: 'Overlapping claims to land, identity, religion, and competing histories make resolution exceptionally hard.',
            no: 'Overlappende krav på land, identitet, religion og konkurrerende historier gjør en løsning eksepsjonelt vanskelig.'
          },
          tags: ['intractability', 'multiple-causes']
        }
      ]
    },
    {
      slug: 'oil-and-geopolitics',
      name: { en: 'Oil and geopolitics', no: 'Olje og geopolitikk' },
      questions: []
    }
  ]
};
