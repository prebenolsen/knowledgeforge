import type { SeedSubcategory } from '../types';

export const theAtlanticSlaveTrade: SeedSubcategory = {
  slug: 'the-atlantic-slave-trade',
  name: { en: 'The Atlantic slave trade', no: 'Den atlantiske slavehandelen' },
  modules: [
    {
      slug: 'transatlantic-slave-trade',
      name: { en: 'Transatlantic slave trade', no: 'Den transatlantiske slavehandelen' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'Across which ocean were enslaved Africans transported to the Americas?',
            no: 'Over hvilket hav ble slavebundne afrikanere fraktet til Amerika?'
          },
          answers: [
            { en: 'The Atlantic Ocean', no: 'Atlanterhavet' },
            { en: 'The Pacific Ocean', no: 'Stillehavet' },
            { en: 'The Indian Ocean', no: 'Indiahavet' },
            { en: 'The Arctic Ocean', no: 'Polhavet' }
          ],
          correct: 0,
          explanation: {
            en: 'The transatlantic slave trade carried enslaved Africans across the Atlantic Ocean to the Americas.',
            no: 'Den transatlantiske slavehandelen fraktet slavebundne afrikanere over Atlanterhavet til Amerika.'
          },
          tags: ['atlantic', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'From which continent were people captured and enslaved in the Atlantic slave trade?',
            no: 'Fra hvilket kontinent ble mennesker fanget og slavebundet i den atlantiske slavehandelen?'
          },
          answers: [
            { en: 'Africa', no: 'Afrika' },
            { en: 'Europe', no: 'Europa' },
            { en: 'Australia', no: 'Australia' },
            { en: 'Antarctica', no: 'Antarktis' }
          ],
          correct: 0,
          explanation: {
            en: 'Millions of people were captured in West and Central Africa and shipped across the Atlantic.',
            no: 'Millioner av mennesker ble fanget i Vest- og Sentral-Afrika og skipet over Atlanterhavet.'
          },
          tags: ['africa', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the name of the brutal sea voyage that brought enslaved Africans to the Americas?',
            no: 'Hva kalles den brutale sjøreisen som brakte slavebundne afrikanere til Amerika?'
          },
          answers: [
            { en: 'The Middle Passage', no: 'Mellompassasjen' },
            { en: 'The Silk Road', no: 'Silkeveien' },
            { en: 'The Grand Tour', no: 'Grand Tour' },
            { en: 'The Northwest Passage', no: 'Nordvestpassasjen' }
          ],
          correct: 0,
          explanation: {
            en: 'The Middle Passage was the deadly Atlantic crossing endured by enslaved Africans.',
            no: 'Mellompassasjen var den dødelige atlanterhavskryssingen som slavebundne afrikanere måtte gjennomgå.'
          },
          tags: ['middle-passage', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Roughly during which centuries did the Atlantic slave trade mainly take place?',
            no: 'Omtrent i hvilke århundrer fant den atlantiske slavehandelen hovedsakelig sted?'
          },
          answers: [
            { en: 'The 16th to 19th centuries', no: '1500- til 1800-tallet' },
            { en: 'The 1st to 3rd centuries', no: '100- til 200-tallet' },
            { en: 'The 20th century only', no: 'Bare 1900-tallet' },
            { en: 'The Stone Age', no: 'Steinalderen' }
          ],
          correct: 0,
          explanation: {
            en: 'The Atlantic slave trade operated mainly from the 1500s to the 1800s.',
            no: 'Den atlantiske slavehandelen pågikk hovedsakelig fra 1500-tallet til 1800-tallet.'
          },
          tags: ['timeline', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which European country was one of the largest carriers of enslaved Africans?',
            no: 'Hvilket europeisk land var en av de største transportørene av slavebundne afrikanere?'
          },
          answers: [
            { en: 'Portugal', no: 'Portugal' },
            { en: 'Norway', no: 'Norge' },
            { en: 'Switzerland', no: 'Sveits' },
            { en: 'Finland', no: 'Finland' }
          ],
          correct: 0,
          explanation: {
            en: 'Portugal, along with Britain, transported the largest numbers of enslaved Africans.',
            no: 'Portugal, sammen med Storbritannia, fraktet de største antallene av slavebundne afrikanere.'
          },
          tags: ['portugal', 'europe']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'To which regions were most enslaved Africans taken?',
            no: 'Til hvilke regioner ble de fleste slavebundne afrikanere ført?'
          },
          answers: [
            { en: 'The Caribbean and South America', no: 'Karibia og Sør-Amerika' },
            { en: 'Northern Europe', no: 'Nord-Europa' },
            { en: 'East Asia', no: 'Øst-Asia' },
            { en: 'Australia', no: 'Australia' }
          ],
          correct: 0,
          explanation: {
            en: 'Most enslaved Africans were taken to the Caribbean and South America, especially Brazil.',
            no: 'De fleste slavebundne afrikanere ble ført til Karibia og Sør-Amerika, særlig Brasil.'
          },
          tags: ['destinations', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What trade pattern connected Europe, Africa, and the Americas?',
            no: 'Hvilket handelsmønster forbandt Europa, Afrika og Amerika?'
          },
          answers: [
            { en: 'The triangular trade', no: 'Trekanthandelen' },
            { en: 'The square trade', no: 'Firkanthandelen' },
            { en: 'The circular trade', no: 'Sirkelhandelen' },
            { en: 'The vertical trade', no: 'Den vertikale handelen' }
          ],
          correct: 0,
          explanation: {
            en: 'The triangular trade linked Europe, Africa, and the Americas in a three-way exchange.',
            no: 'Trekanthandelen knyttet Europa, Afrika og Amerika sammen i en treveis utveksling.'
          },
          tags: ['triangular-trade', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Enslaved people were forced to work mainly on what in the Americas?',
            no: 'Slavebundne mennesker ble tvunget til å arbeide hovedsakelig med hva i Amerika?'
          },
          answers: [
            { en: 'Plantations', no: 'Plantasjer' },
            { en: 'Universities', no: 'Universiteter' },
            { en: 'Banks', no: 'Banker' },
            { en: 'Theaters', no: 'Teatre' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved Africans were forced to labor on plantations growing sugar, cotton, and tobacco.',
            no: 'Slavebundne afrikanere ble tvunget til å arbeide på plantasjer som dyrket sukker, bomull og tobakk.'
          },
          tags: ['plantations', 'labor']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which crop grown by enslaved people was especially valuable in the Caribbean?',
            no: 'Hvilken avling dyrket av slavebundne mennesker var spesielt verdifull i Karibia?'
          },
          answers: [
            { en: 'Sugar', no: 'Sukker' },
            { en: 'Wheat', no: 'Hvete' },
            { en: 'Apples', no: 'Epler' },
            { en: 'Potatoes', no: 'Poteter' }
          ],
          correct: 0,
          explanation: {
            en: 'Sugar was the most valuable Caribbean plantation crop produced by enslaved labor.',
            no: 'Sukker var den mest verdifulle plantasjeavlingen i Karibia, produsert ved slavearbeid.'
          },
          tags: ['sugar', 'plantations']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Approximately how many Africans were forcibly transported across the Atlantic?',
            no: 'Omtrent hvor mange afrikanere ble tvangsfraktet over Atlanterhavet?'
          },
          answers: [
            { en: 'Around 12 million', no: 'Rundt 12 millioner' },
            { en: 'Around 50,000', no: 'Rundt 50 000' },
            { en: 'Around 100,000', no: 'Rundt 100 000' },
            { en: 'Around 1,000', no: 'Rundt 1 000' }
          ],
          correct: 0,
          explanation: {
            en: 'An estimated 12 million Africans were forcibly transported across the Atlantic.',
            no: 'Anslagsvis 12 millioner afrikanere ble tvangsfraktet over Atlanterhavet.'
          },
          tags: ['numbers', 'scale']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does "abolition" mean in the context of slavery?',
            no: 'Hva betyr «avskaffelse» (abolition) i forbindelse med slaveri?'
          },
          answers: [
            { en: 'Ending slavery', no: 'Å avskaffe slaveriet' },
            { en: 'Expanding slavery', no: 'Å utvide slaveriet' },
            { en: 'Taxing slavery', no: 'Å skattlegge slaveriet' },
            { en: 'Recording slavery', no: 'Å registrere slaveriet' }
          ],
          correct: 0,
          explanation: {
            en: 'Abolition means the legal ending of slavery and the slave trade.',
            no: 'Avskaffelse betyr den juridiske opphevelsen av slaveriet og slavehandelen.'
          },
          tags: ['abolition', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'From which part of Africa did most enslaved people come?',
            no: 'Fra hvilken del av Afrika kom de fleste slavebundne menneskene?'
          },
          answers: [
            { en: 'West and Central Africa', no: 'Vest- og Sentral-Afrika' },
            { en: 'Northern Egypt', no: 'Nordlige Egypt' },
            { en: 'Southern tip of Africa only', no: 'Bare Afrikas sørspiss' },
            { en: 'The Sahara Desert interior', no: 'Det indre av Sahara' }
          ],
          correct: 0,
          explanation: {
            en: 'Most enslaved people came from West and Central Africa.',
            no: 'De fleste slavebundne menneskene kom fra Vest- og Sentral-Afrika.'
          },
          tags: ['west-africa', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which country received the largest number of enslaved Africans?',
            no: 'Hvilket land mottok det største antallet slavebundne afrikanere?'
          },
          answers: [
            { en: 'Brazil', no: 'Brasil' },
            { en: 'Canada', no: 'Canada' },
            { en: 'Iceland', no: 'Island' },
            { en: 'Ireland', no: 'Irland' }
          ],
          correct: 0,
          explanation: {
            en: 'Brazil received the largest number of enslaved Africans of any single country.',
            no: 'Brasil mottok det største antallet slavebundne afrikanere av noe enkelt land.'
          },
          tags: ['brazil', 'destinations']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What goods did Europeans often trade in Africa for captured people?',
            no: 'Hvilke varer byttet europeere ofte i Afrika mot fangede mennesker?'
          },
          answers: [
            { en: 'Guns, textiles, and manufactured goods', no: 'Våpen, tekstiler og industrivarer' },
            { en: 'Snow and ice', no: 'Snø og is' },
            { en: 'Smartphones', no: 'Smarttelefoner' },
            { en: 'Airplanes', no: 'Fly' }
          ],
          correct: 0,
          explanation: {
            en: 'Europeans traded guns, textiles, alcohol, and other goods for enslaved people.',
            no: 'Europeere byttet våpen, tekstiler, alkohol og andre varer mot slavebundne mennesker.'
          },
          tags: ['trade-goods', 'triangular-trade']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Conditions on slave ships during the Middle Passage were best described as what?',
            no: 'Forholdene på slaveskipene under mellompassasjen beskrives best som hva?'
          },
          answers: [
            { en: 'Overcrowded and deadly', no: 'Overfylte og dødelige' },
            { en: 'Comfortable and safe', no: 'Komfortable og trygge' },
            { en: 'Luxurious', no: 'Luksuriøse' },
            { en: 'Spacious and clean', no: 'Romslige og rene' }
          ],
          correct: 0,
          explanation: {
            en: 'Slave ships were dangerously overcrowded, and many captives died during the Middle Passage.',
            no: 'Slaveskipene var farlig overfylte, og mange fanger døde under mellompassasjen.'
          },
          tags: ['middle-passage', 'conditions']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the triangular trade work?',
            no: 'Hvordan fungerte trekanthandelen?'
          },
          answers: [
            { en: 'Goods to Africa, enslaved people to the Americas, raw materials to Europe', no: 'Varer til Afrika, slavebundne mennesker til Amerika, råvarer til Europa' },
            { en: 'Goods only moved between two European cities', no: 'Varer flyttet bare mellom to europeiske byer' },
            { en: 'People moved from the Americas to Africa', no: 'Mennesker flyttet fra Amerika til Afrika' },
            { en: 'No goods were ever exchanged', no: 'Ingen varer ble noensinne utvekslet' }
          ],
          correct: 0,
          explanation: {
            en: 'Ships carried goods to Africa, enslaved people to the Americas, and plantation products back to Europe.',
            no: 'Skip fraktet varer til Afrika, slavebundne mennesker til Amerika og plantasjeprodukter tilbake til Europa.'
          },
          tags: ['triangular-trade', 'economy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did European plantation owners demand enslaved African labor?',
            no: 'Hvorfor krevde europeiske plantasjeeiere slavebundet afrikansk arbeidskraft?'
          },
          answers: [
            { en: 'They wanted a large, cheap, controllable workforce for cash crops', no: 'De ønsket en stor, billig og kontrollerbar arbeidsstyrke til salgsavlinger' },
            { en: 'They preferred to work the land themselves', no: 'De foretrakk å dyrke jorda selv' },
            { en: 'There was no demand for crops', no: 'Det fantes ingen etterspørsel etter avlinger' },
            { en: 'They wanted fewer workers', no: 'De ønsket færre arbeidere' }
          ],
          correct: 0,
          explanation: {
            en: 'Plantations needed vast cheap labor to produce profitable crops like sugar and tobacco.',
            no: 'Plantasjer trengte enorm billig arbeidskraft for å produsere lønnsomme avlinger som sukker og tobakk.'
          },
          tags: ['labor', 'economy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the Atlantic slave trade affect West African societies?',
            no: 'Hvordan påvirket den atlantiske slavehandelen vestafrikanske samfunn?'
          },
          answers: [
            { en: 'It caused population loss, warfare, and disruption', no: 'Den førte til befolkningstap, krig og oppløsning' },
            { en: 'It strengthened every kingdom equally', no: 'Den styrket alle kongeriker likt' },
            { en: 'It had no social effect', no: 'Den hadde ingen sosial effekt' },
            { en: 'It ended all conflict', no: 'Den avsluttet all konflikt' }
          ],
          correct: 0,
          explanation: {
            en: 'The trade fueled warfare and kidnapping and drained millions from West African societies.',
            no: 'Handelen næret krig og kidnapping og tappet millioner fra vestafrikanske samfunn.'
          },
          tags: ['west-africa', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What role did some African rulers and merchants play in the slave trade?',
            no: 'Hvilken rolle spilte enkelte afrikanske herskere og kjøpmenn i slavehandelen?'
          },
          answers: [
            { en: 'Some captured and sold people to European traders', no: 'Noen fanget og solgte mennesker til europeiske handelsmenn' },
            { en: 'They had no involvement at all', no: 'De var ikke involvert i det hele tatt' },
            { en: 'They only bought European slaves', no: 'De kjøpte bare europeiske slaver' },
            { en: 'They sailed the ships to Europe', no: 'De seilte skipene til Europa' }
          ],
          correct: 0,
          explanation: {
            en: 'Some African states and merchants captured and sold people to Europeans in exchange for goods.',
            no: 'Enkelte afrikanske stater og kjøpmenn fanget og solgte mennesker til europeere i bytte mot varer.'
          },
          tags: ['african-role', 'trade']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why was the death rate so high during the Middle Passage?',
            no: 'Hvorfor var dødeligheten så høy under mellompassasjen?'
          },
          answers: [
            { en: 'Overcrowding, disease, malnutrition, and abuse', no: 'Overfylling, sykdom, underernæring og mishandling' },
            { en: 'Comfortable but boring conditions', no: 'Komfortable, men kjedelige forhold' },
            { en: 'Too much food and rest', no: 'For mye mat og hvile' },
            { en: 'Short, easy journeys', no: 'Korte, enkle reiser' }
          ],
          correct: 0,
          explanation: {
            en: 'Disease, overcrowding, starvation, and cruelty killed a large share of captives at sea.',
            no: 'Sykdom, overfylling, sult og grusomhet drepte en stor andel av fangene til sjøs.'
          },
          tags: ['middle-passage', 'mortality']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the slave trade contribute to European wealth?',
            no: 'Hvordan bidro slavehandelen til europeisk rikdom?'
          },
          answers: [
            { en: 'Profits from trade and plantations enriched ports and merchants', no: 'Profitt fra handel og plantasjer beriket havnebyer og kjøpmenn' },
            { en: 'It caused Europe to lose all its money', no: 'Den fikk Europa til å miste alle pengene sine' },
            { en: 'It had no economic impact', no: 'Den hadde ingen økonomisk virkning' },
            { en: 'It only benefited Africa', no: 'Den gagnet bare Afrika' }
          ],
          correct: 0,
          explanation: {
            en: 'Slave-trade and plantation profits enriched European port cities, merchants, and industries.',
            no: 'Profitt fra slavehandel og plantasjer beriket europeiske havnebyer, kjøpmenn og industrier.'
          },
          tags: ['economy', 'wealth']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Which European nations dominated the slave trade in the 1700s?',
            no: 'Hvilke europeiske nasjoner dominerte slavehandelen på 1700-tallet?'
          },
          answers: [
            { en: 'Britain, Portugal, and France', no: 'Storbritannia, Portugal og Frankrike' },
            { en: 'Norway, Sweden, and Denmark only', no: 'Bare Norge, Sverige og Danmark' },
            { en: 'Russia and Poland', no: 'Russland og Polen' },
            { en: 'Switzerland and Austria', no: 'Sveits og Østerrike' }
          ],
          correct: 0,
          explanation: {
            en: 'Britain, Portugal, and France were among the leading slave-trading nations in the 18th century.',
            no: 'Storbritannia, Portugal og Frankrike var blant de ledende slavehandelsnasjonene på 1700-tallet.'
          },
          tags: ['europe', 'powers']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How were captured Africans typically held before being shipped?',
            no: 'Hvordan ble fangede afrikanere vanligvis holdt før de ble skipet ut?'
          },
          answers: [
            { en: 'In coastal forts and holding dungeons', no: 'I kystfort og fangehull' },
            { en: 'In comfortable inns', no: 'På komfortable vertshus' },
            { en: 'In their own homes', no: 'I sine egne hjem' },
            { en: 'On European ships only', no: 'Bare på europeiske skip' }
          ],
          correct: 0,
          explanation: {
            en: 'Captives were often held in coastal forts, such as Elmina, before the Atlantic crossing.',
            no: 'Fanger ble ofte holdt i kystfort, som Elmina, før atlanterhavskryssingen.'
          },
          tags: ['forts', 'capture']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was a major consequence of the slave trade for the Americas’ population?',
            no: 'Hva var en viktig konsekvens av slavehandelen for befolkningen i Amerika?'
          },
          answers: [
            { en: 'Large African-descended populations formed across the continent', no: 'Store befolkninger av afrikansk avstamning oppstod over hele kontinentet' },
            { en: 'No demographic change occurred', no: 'Ingen demografisk endring skjedde' },
            { en: 'The Americas became uninhabited', no: 'Amerika ble ubebodd' },
            { en: 'Only Europeans remained', no: 'Bare europeere ble igjen' }
          ],
          correct: 0,
          explanation: {
            en: 'The forced migration created large African-descended populations throughout the Americas.',
            no: 'Den tvungne migrasjonen skapte store befolkninger av afrikansk avstamning over hele Amerika.'
          },
          tags: ['demographics', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why is the slave trade described as a forced migration?',
            no: 'Hvorfor beskrives slavehandelen som en tvungen migrasjon?'
          },
          answers: [
            { en: 'People were taken against their will across the ocean', no: 'Mennesker ble ført mot sin vilje over havet' },
            { en: 'People chose to move freely', no: 'Mennesker valgte å flytte fritt' },
            { en: 'It involved only voluntary settlers', no: 'Den omfattet bare frivillige nybyggere' },
            { en: 'No one actually moved', no: 'Ingen flyttet egentlig' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved Africans were forcibly removed from their homelands, making it a coerced migration.',
            no: 'Slavebundne afrikanere ble med makt fjernet fra hjemlandene sine, noe som gjorde det til en tvungen migrasjon.'
          },
          tags: ['forced-migration', 'concepts']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did demand for plantation goods in Europe affect the slave trade?',
            no: 'Hvordan påvirket etterspørselen etter plantasjevarer i Europa slavehandelen?'
          },
          answers: [
            { en: 'Rising demand for sugar and tobacco expanded the trade', no: 'Økende etterspørsel etter sukker og tobakk utvidet handelen' },
            { en: 'It reduced the trade to nothing', no: 'Den reduserte handelen til ingenting' },
            { en: 'It had no connection to the trade', no: 'Den hadde ingen forbindelse til handelen' },
            { en: 'It ended plantations', no: 'Den avsluttet plantasjene' }
          ],
          correct: 0,
          explanation: {
            en: 'Growing European appetite for sugar, tobacco, and coffee drove demand for enslaved labor.',
            no: 'Europas voksende appetitt på sukker, tobakk og kaffe drev etterspørselen etter slavearbeid.'
          },
          tags: ['demand', 'economy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does the "Door of No Return" symbolize?',
            no: 'Hva symboliserer «Door of No Return» (porten ingen vendte tilbake fra)?'
          },
          answers: [
            { en: 'The final departure of captives from Africa', no: 'Fangenes siste avreise fra Afrika' },
            { en: 'A trade tax office', no: 'Et handelsskattekontor' },
            { en: 'A European palace gate', no: 'En porten til et europeisk palass' },
            { en: 'A modern airport', no: 'En moderne flyplass' }
          ],
          correct: 0,
          explanation: {
            en: 'The "Door of No Return" at coastal forts marked captives’ last steps on African soil.',
            no: '«Door of No Return» ved kystfortene markerte fangenes siste skritt på afrikansk jord.'
          },
          tags: ['memory', 'forts']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the slave trade differ from earlier forms of slavery in some societies?',
            no: 'Hvordan skilte slavehandelen seg fra eldre former for slaveri i enkelte samfunn?'
          },
          answers: [
            { en: 'It was racialized and hereditary on a massive scale', no: 'Den var rasebasert og arvelig i enormt omfang' },
            { en: 'It freed everyone after one year', no: 'Den frigjorde alle etter ett år' },
            { en: 'It involved no forced labor', no: 'Den innebar ikke tvangsarbeid' },
            { en: 'It was entirely voluntary', no: 'Den var fullstendig frivillig' }
          ],
          correct: 0,
          explanation: {
            en: 'Atlantic slavery became racially defined and inherited, binding generations to lifelong bondage.',
            no: 'Det atlantiske slaveriet ble rasebasert og arvelig, og bandt generasjoner til livslang trelldom.'
          },
          tags: ['comparison', 'race']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians debate the economic importance of the slave trade to the Industrial Revolution?',
            no: 'Hvorfor diskuterer historikere slavehandelens økonomiske betydning for den industrielle revolusjon?'
          },
          answers: [
            { en: 'They disagree on how much its profits funded industrial growth', no: 'De er uenige om hvor mye profitten finansierte industriell vekst' },
            { en: 'They deny the trade existed', no: 'De benekter at handelen fantes' },
            { en: 'They claim it had no profits', no: 'De hevder den ikke ga profitt' },
            { en: 'They believe industry came first', no: 'De mener industrien kom først' }
          ],
          correct: 0,
          explanation: {
            en: 'Scholars debate the "Williams thesis," which links slave-trade profits to financing British industrialization.',
            no: 'Forskere diskuterer «Williams-tesen», som knytter profitt fra slavehandelen til finansieringen av britisk industrialisering.'
          },
          tags: ['industrial-revolution', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do historians assess African agency in the slave trade?',
            no: 'Hvordan vurderer historikere afrikansk handlingsrom i slavehandelen?'
          },
          answers: [
            { en: 'Some African states participated, but European demand drove the system’s scale', no: 'Enkelte afrikanske stater deltok, men europeisk etterspørsel drev systemets omfang' },
            { en: 'Africans had total control of the trade', no: 'Afrikanere hadde full kontroll over handelen' },
            { en: 'No Africans were ever involved', no: 'Ingen afrikanere var noensinne involvert' },
            { en: 'Europeans were entirely passive', no: 'Europeere var fullstendig passive' }
          ],
          correct: 0,
          explanation: {
            en: 'Historians note African participation while stressing that European demand shaped the trade’s vast scale.',
            no: 'Historikere påpeker afrikansk deltakelse, men understreker at europeisk etterspørsel formet handelens enorme omfang.'
          },
          tags: ['agency', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is estimating the total number of enslaved people difficult?',
            no: 'Hvorfor er det vanskelig å anslå det totale antallet slavebundne mennesker?'
          },
          answers: [
            { en: 'Records are incomplete and many deaths went unrecorded', no: 'Opptegnelser er ufullstendige, og mange dødsfall ble ikke registrert' },
            { en: 'Every voyage was perfectly documented', no: 'Hver reise var perfekt dokumentert' },
            { en: 'No ships kept any records', no: 'Ingen skip førte noen opptegnelser' },
            { en: 'The numbers are legally secret', no: 'Tallene er rettslig hemmelige' }
          ],
          correct: 0,
          explanation: {
            en: 'Gaps in shipping records and unrecorded deaths make precise totals hard to determine.',
            no: 'Hull i skipsregistrene og uregistrerte dødsfall gjør presise totaltall vanskelige å fastslå.'
          },
          tags: ['numbers', 'sources']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the slave trade reshape the demographics of Africa over time?',
            no: 'Hvordan omformet slavehandelen Afrikas demografi over tid?'
          },
          answers: [
            { en: 'It removed millions, skewing populations and weakening some regions', no: 'Den fjernet millioner, forskjøv befolkninger og svekket enkelte regioner' },
            { en: 'It increased Africa’s population', no: 'Den økte Afrikas befolkning' },
            { en: 'It had no demographic effect', no: 'Den hadde ingen demografisk effekt' },
            { en: 'It only affected Europe', no: 'Den påvirket bare Europa' }
          ],
          correct: 0,
          explanation: {
            en: 'The loss of millions, especially young people, distorted populations and weakened affected societies.',
            no: 'Tapet av millioner, særlig unge mennesker, forvrengte befolkninger og svekket berørte samfunn.'
          },
          tags: ['demographics', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the transatlantic slave trade sometimes called a "crime against humanity"?',
            no: 'Hvorfor kalles den transatlantiske slavehandelen noen ganger en «forbrytelse mot menneskeheten»?'
          },
          answers: [
            { en: 'Its scale, brutality, and systematic dehumanization', no: 'Dens omfang, brutalitet og systematiske umenneskeliggjøring' },
            { en: 'It involved very few people', no: 'Den omfattet svært få mennesker' },
            { en: 'It was a brief, minor event', no: 'Den var en kort, ubetydelig hendelse' },
            { en: 'It caused no harm', no: 'Den forårsaket ingen skade' }
          ],
          correct: 0,
          explanation: {
            en: 'Its immense scale, cruelty, and systematic dehumanization led to its description as a crime against humanity.',
            no: 'Det enorme omfanget, grusomheten og den systematiske umenneskeliggjøringen førte til at den beskrives som en forbrytelse mot menneskeheten.'
          },
          tags: ['ethics', 'memory']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the slave trade connect to the rise of racial ideologies?',
            no: 'Hvordan var slavehandelen knyttet til framveksten av raseideologier?'
          },
          answers: [
            { en: 'Justifications for slavery helped construct ideas of racial hierarchy', no: 'Rettferdiggjøringer av slaveriet bidro til å konstruere ideer om rasehierarki' },
            { en: 'It had no link to ideas about race', no: 'Den hadde ingen tilknytning til ideer om rase' },
            { en: 'It promoted racial equality', no: 'Den fremmet raselikhet' },
            { en: 'It ended all prejudice', no: 'Den avsluttet alle fordommer' }
          ],
          correct: 0,
          explanation: {
            en: 'To justify enslaving Africans, Europeans developed ideologies of racial inferiority that long outlasted slavery.',
            no: 'For å rettferdiggjøre slavebinding av afrikanere utviklet europeere ideologier om rasemessig underlegenhet som varte lenge etter slaveriet.'
          },
          tags: ['race', 'ideology']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did the volume of the slave trade peak in the 18th century?',
            no: 'Hvorfor nådde omfanget av slavehandelen sitt høydepunkt på 1700-tallet?'
          },
          answers: [
            { en: 'Booming plantation economies maximized demand for labor', no: 'Blomstrende plantasjeøkonomier maksimerte etterspørselen etter arbeidskraft' },
            { en: 'Demand for crops collapsed', no: 'Etterspørselen etter avlinger kollapset' },
            { en: 'Europe banned all trade', no: 'Europa forbød all handel' },
            { en: 'Plantations were abandoned', no: 'Plantasjene ble forlatt' }
          ],
          correct: 0,
          explanation: {
            en: 'The 18th-century plantation boom, especially in sugar, drove the trade to its highest volumes.',
            no: 'Plantasjeboomen på 1700-tallet, særlig innen sukker, drev handelen til sine høyeste volum.'
          },
          tags: ['peak', 'economy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do modern databases like the Trans-Atlantic Slave Trade Database aid historians?',
            no: 'Hvordan hjelper moderne databaser som Trans-Atlantic Slave Trade Database historikere?'
          },
          answers: [
            { en: 'They compile voyage records to estimate scale and patterns', no: 'De samler reiseopptegnelser for å anslå omfang og mønstre' },
            { en: 'They erase historical records', no: 'De sletter historiske opptegnelser' },
            { en: 'They prove the trade never happened', no: 'De beviser at handelen aldri skjedde' },
            { en: 'They only list European names', no: 'De lister bare opp europeiske navn' }
          ],
          correct: 0,
          explanation: {
            en: 'Such databases aggregate thousands of voyage records, helping quantify the trade’s scale and routes.',
            no: 'Slike databaser samler tusenvis av reiseopptegnelser og hjelper med å tallfeste handelens omfang og ruter.'
          },
          tags: ['sources', 'methods']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the Atlantic slave trade considered central to the formation of the modern Atlantic world?',
            no: 'Hvorfor regnes den atlantiske slavehandelen som sentral i dannelsen av den moderne atlantiske verden?'
          },
          answers: [
            { en: 'It linked the economies, peoples, and cultures of four continents', no: 'Den knyttet sammen økonomiene, folkene og kulturene på fire kontinenter' },
            { en: 'It isolated each continent completely', no: 'Den isolerte hvert kontinent fullstendig' },
            { en: 'It involved only one country', no: 'Den omfattet bare ett land' },
            { en: 'It had no cultural effect', no: 'Den hadde ingen kulturell virkning' }
          ],
          correct: 0,
          explanation: {
            en: 'The trade tied together Europe, Africa, and the Americas economically and culturally, shaping the Atlantic world.',
            no: 'Handelen knyttet Europa, Afrika og Amerika sammen økonomisk og kulturelt og formet den atlantiske verden.'
          },
          tags: ['atlantic-world', 'long-term']
        }
      ]
    },
    {
      slug: 'slavery-in-the-americas',
      name: { en: 'Slavery in the Americas', no: 'Slaveri i Amerika' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'In the southern United States, enslaved people most often worked growing what crop?',
            no: 'I de amerikanske sørstatene arbeidet slavebundne mennesker oftest med å dyrke hvilken avling?'
          },
          answers: [
            { en: 'Cotton', no: 'Bomull' },
            { en: 'Rice only', no: 'Bare ris' },
            { en: 'Bananas', no: 'Bananer' },
            { en: 'Grapes', no: 'Druer' }
          ],
          correct: 0,
          explanation: {
            en: 'Cotton became the dominant crop worked by enslaved people in the US South.',
            no: 'Bomull ble den dominerende avlingen som slavebundne mennesker arbeidet med i de amerikanske sørstatene.'
          },
          tags: ['cotton', 'usa']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'A large farm worked by enslaved people was called what?',
            no: 'Hva ble en stor gård drevet av slavebundne mennesker kalt?'
          },
          answers: [
            { en: 'A plantation', no: 'En plantasje' },
            { en: 'A factory', no: 'En fabrikk' },
            { en: 'A monastery', no: 'Et kloster' },
            { en: 'A castle', no: 'Et slott' }
          ],
          correct: 0,
          explanation: {
            en: 'Plantations were large agricultural estates that relied on enslaved labor.',
            no: 'Plantasjer var store jordbrukseiendommer som var avhengige av slavearbeid.'
          },
          tags: ['plantation', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Enslaved people in the Americas were treated legally as what?',
            no: 'Slavebundne mennesker i Amerika ble juridisk behandlet som hva?'
          },
          answers: [
            { en: 'Property', no: 'Eiendom' },
            { en: 'Free citizens', no: 'Frie borgere' },
            { en: 'Government officials', no: 'Embetsmenn' },
            { en: 'Landowners', no: 'Jordeiere' }
          ],
          correct: 0,
          explanation: {
            en: 'Under slavery, enslaved people were treated as property that could be bought and sold.',
            no: 'Under slaveriet ble slavebundne mennesker behandlet som eiendom som kunne kjøpes og selges.'
          },
          tags: ['property', 'law']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which country abolished slavery last in the Americas, in 1888?',
            no: 'Hvilket land avskaffet slaveriet sist i Amerika, i 1888?'
          },
          answers: [
            { en: 'Brazil', no: 'Brasil' },
            { en: 'The United States', no: 'USA' },
            { en: 'Canada', no: 'Canada' },
            { en: 'Mexico', no: 'Mexico' }
          ],
          correct: 0,
          explanation: {
            en: 'Brazil was the last country in the Americas to abolish slavery, in 1888.',
            no: 'Brasil var det siste landet i Amerika som avskaffet slaveriet, i 1888.'
          },
          tags: ['brazil', 'abolition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Laws that controlled enslaved people in the US were known as what?',
            no: 'Lover som kontrollerte slavebundne mennesker i USA, ble kjent som hva?'
          },
          answers: [
            { en: 'Slave codes', no: 'Slavelover (slave codes)' },
            { en: 'Free codes', no: 'Frihetslover' },
            { en: 'Trade codes', no: 'Handelslover' },
            { en: 'Tax codes', no: 'Skattelover' }
          ],
          correct: 0,
          explanation: {
            en: 'Slave codes were laws that defined the status of enslaved people and restricted their lives.',
            no: 'Slavelover var lover som definerte statusen til slavebundne mennesker og begrenset livene deres.'
          },
          tags: ['slave-codes', 'law']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which year did the United States abolish slavery with the 13th Amendment?',
            no: 'I hvilket år avskaffet USA slaveriet med det 13. grunnlovstillegget?'
          },
          answers: [
            { en: '1865', no: '1865' },
            { en: '1776', no: '1776' },
            { en: '1920', no: '1920' },
            { en: '1800', no: '1800' }
          ],
          correct: 0,
          explanation: {
            en: 'The 13th Amendment abolished slavery in the United States in 1865.',
            no: 'Det 13. grunnlovstillegget avskaffet slaveriet i USA i 1865.'
          },
          tags: ['13th-amendment', 'usa']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Sugar plantations using enslaved labor were especially common in which region?',
            no: 'Sukkerplantasjer med slavearbeid var spesielt vanlige i hvilken region?'
          },
          answers: [
            { en: 'The Caribbean', no: 'Karibia' },
            { en: 'Northern Canada', no: 'Nord-Canada' },
            { en: 'Scandinavia', no: 'Skandinavia' },
            { en: 'Siberia', no: 'Sibir' }
          ],
          correct: 0,
          explanation: {
            en: 'The Caribbean islands were dominated by sugar plantations worked by enslaved Africans.',
            no: 'Øyene i Karibia var dominert av sukkerplantasjer drevet av slavebundne afrikanere.'
          },
          tags: ['caribbean', 'sugar']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What was the system of buying and selling enslaved people at public events called?',
            no: 'Hva ble systemet med å kjøpe og selge slavebundne mennesker på offentlige arrangementer kalt?'
          },
          answers: [
            { en: 'Slave auctions', no: 'Slaveauksjoner' },
            { en: 'Job fairs', no: 'Jobbmesser' },
            { en: 'Town meetings', no: 'Folkemøter' },
            { en: 'Harvest festivals', no: 'Høstfester' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved people were bought and sold at public slave auctions, often splitting families.',
            no: 'Slavebundne mennesker ble kjøpt og solgt på offentlige slaveauksjoner, ofte ved å splitte familier.'
          },
          tags: ['auctions', 'trade']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which document freed enslaved people in Confederate states during the US Civil War?',
            no: 'Hvilket dokument frigjorde slavebundne mennesker i konføderasjonsstatene under den amerikanske borgerkrigen?'
          },
          answers: [
            { en: 'The Emancipation Proclamation', no: 'Frigjøringsproklamasjonen' },
            { en: 'The Declaration of Independence', no: 'Uavhengighetserklæringen' },
            { en: 'The Magna Carta', no: 'Magna Carta' },
            { en: 'The Bill of Rights', no: 'Bill of Rights' }
          ],
          correct: 0,
          explanation: {
            en: 'Lincoln’s Emancipation Proclamation (1863) declared enslaved people in Confederate states free.',
            no: 'Lincolns frigjøringsproklamasjon (1863) erklærte slavebundne mennesker i konføderasjonsstatene frie.'
          },
          tags: ['emancipation', 'civil-war']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Children born to enslaved mothers in the Americas were usually considered what?',
            no: 'Barn født av slavebundne mødre i Amerika ble vanligvis regnet som hva?'
          },
          answers: [
            { en: 'Enslaved from birth', no: 'Slavebundne fra fødselen' },
            { en: 'Automatically free', no: 'Automatisk frie' },
            { en: 'Citizens with full rights', no: 'Borgere med fulle rettigheter' },
            { en: 'European subjects', no: 'Europeiske undersåtter' }
          ],
          correct: 0,
          explanation: {
            en: 'Slavery was hereditary; children of enslaved women were born into slavery.',
            no: 'Slaveriet var arvelig; barn av slavebundne kvinner ble født inn i slaveriet.'
          },
          tags: ['hereditary', 'law']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Besides cotton and sugar, which crop was commonly grown by enslaved people?',
            no: 'Foruten bomull og sukker, hvilken avling ble ofte dyrket av slavebundne mennesker?'
          },
          answers: [
            { en: 'Tobacco', no: 'Tobakk' },
            { en: 'Pineapple ice cream', no: 'Ananasis' },
            { en: 'Chocolate bars', no: 'Sjokoladeplater' },
            { en: 'Rubber tires', no: 'Gummidekk' }
          ],
          correct: 0,
          explanation: {
            en: 'Tobacco was a major plantation crop, especially in the early American colonies.',
            no: 'Tobakk var en viktig plantasjeavling, særlig i de tidlige amerikanske koloniene.'
          },
          tags: ['tobacco', 'crops']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the term for an enslaved person who escaped to freedom?',
            no: 'Hva er betegnelsen på en slavebundet person som rømte til frihet?'
          },
          answers: [
            { en: 'A fugitive (runaway)', no: 'En rømling' },
            { en: 'A merchant', no: 'En kjøpmann' },
            { en: 'A planter', no: 'En plantasjeeier' },
            { en: 'An overseer', no: 'En oppsynsmann' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved people who escaped were called runaways or fugitives, often hunted by slave catchers.',
            no: 'Slavebundne mennesker som rømte, ble kalt rømlinger, ofte jaktet på av slavefangere.'
          },
          tags: ['runaways', 'resistance']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who supervised enslaved workers in the fields?',
            no: 'Hvem overvåket slavebundne arbeidere på markene?'
          },
          answers: [
            { en: 'Overseers', no: 'Oppsynsmenn' },
            { en: 'Judges', no: 'Dommere' },
            { en: 'Bishops', no: 'Biskoper' },
            { en: 'Sailors', no: 'Sjøfolk' }
          ],
          correct: 0,
          explanation: {
            en: 'Overseers managed and disciplined enslaved workers on plantations.',
            no: 'Oppsynsmenn styrte og disiplinerte slavebundne arbeidere på plantasjer.'
          },
          tags: ['overseers', 'plantation']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which large country in South America relied heavily on enslaved labor?',
            no: 'Hvilket stort land i Sør-Amerika var sterkt avhengig av slavearbeid?'
          },
          answers: [
            { en: 'Brazil', no: 'Brasil' },
            { en: 'Norway', no: 'Norge' },
            { en: 'Japan', no: 'Japan' },
            { en: 'Egypt', no: 'Egypt' }
          ],
          correct: 0,
          explanation: {
            en: 'Brazil’s sugar, gold, and coffee economies depended heavily on enslaved labor.',
            no: 'Brasils sukker-, gull- og kaffeøkonomi var sterkt avhengig av slavearbeid.'
          },
          tags: ['brazil', 'economy']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What word describes setting an enslaved person free?',
            no: 'Hvilket ord beskriver det å sette en slavebundet person fri?'
          },
          answers: [
            { en: 'Manumission', no: 'Frigivelse (manumisjon)' },
            { en: 'Conscription', no: 'Verneplikt' },
            { en: 'Coronation', no: 'Kroning' },
            { en: 'Migration', no: 'Migrasjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Manumission is the act of an owner freeing an enslaved person.',
            no: 'Manumisjon er handlingen der en eier frigjør en slavebundet person.'
          },
          tags: ['manumission', 'freedom']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did slavery expand in the US South in the early 1800s?',
            no: 'Hvorfor ekspanderte slaveriet i de amerikanske sørstatene tidlig på 1800-tallet?'
          },
          answers: [
            { en: 'The cotton gin made cotton hugely profitable', no: 'Bomullsrensemaskinen gjorde bomull svært lønnsom' },
            { en: 'Cotton demand collapsed', no: 'Etterspørselen etter bomull kollapset' },
            { en: 'Plantations were banned', no: 'Plantasjer ble forbudt' },
            { en: 'The South industrialized fully', no: 'Sør ble fullt industrialisert' }
          ],
          correct: 0,
          explanation: {
            en: 'The cotton gin boosted cotton profits, driving demand for more enslaved labor.',
            no: 'Bomullsrensemaskinen økte bomullsprofitten og drev etterspørselen etter mer slavearbeid.'
          },
          tags: ['cotton-gin', 'expansion']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did slavery in the Caribbean differ from the US South in mortality?',
            no: 'Hvordan skilte slaveriet i Karibia seg fra de amerikanske sørstatene når det gjaldt dødelighet?'
          },
          answers: [
            { en: 'Brutal sugar work caused much higher death rates in the Caribbean', no: 'Brutalt sukkerarbeid forårsaket langt høyere dødelighet i Karibia' },
            { en: 'The Caribbean had no enslaved people', no: 'Karibia hadde ingen slavebundne mennesker' },
            { en: 'Mortality was identical everywhere', no: 'Dødeligheten var identisk overalt' },
            { en: 'The US South had no deaths', no: 'De amerikanske sørstatene hadde ingen dødsfall' }
          ],
          correct: 0,
          explanation: {
            en: 'Harsh sugar production made Caribbean mortality so high that the trade had to constantly replace workers.',
            no: 'Hard sukkerproduksjon gjorde dødeligheten i Karibia så høy at handelen stadig måtte erstatte arbeidere.'
          },
          tags: ['mortality', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did the enslaved population grow naturally in the US South, unlike many other regions?',
            no: 'Hvorfor vokste den slavebundne befolkningen naturlig i de amerikanske sørstatene, ulikt mange andre regioner?'
          },
          answers: [
            { en: 'Relatively lower mortality allowed the population to reproduce', no: 'Relativt lavere dødelighet lot befolkningen reprodusere seg' },
            { en: 'New arrivals replaced everyone yearly', no: 'Nyankomne erstattet alle hvert år' },
            { en: 'There was no enslaved population', no: 'Det fantes ingen slavebundet befolkning' },
            { en: 'Slavery was voluntary there', no: 'Slaveriet var frivillig der' }
          ],
          correct: 0,
          explanation: {
            en: 'Lower mortality than the Caribbean meant the US enslaved population grew through births.',
            no: 'Lavere dødelighet enn i Karibia gjorde at den slavebundne befolkningen i USA vokste gjennom fødsler.'
          },
          tags: ['demographics', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did slavery shape the economy of the American South?',
            no: 'Hvordan formet slaveriet økonomien i de amerikanske sørstatene?'
          },
          answers: [
            { en: 'It made the South dependent on cash-crop agriculture', no: 'Det gjorde Sør avhengig av salgsavlinger i jordbruket' },
            { en: 'It industrialized the South rapidly', no: 'Det industrialiserte Sør raskt' },
            { en: 'It had no economic role', no: 'Det hadde ingen økonomisk rolle' },
            { en: 'It ended Southern farming', no: 'Det avsluttet jordbruket i Sør' }
          ],
          correct: 0,
          explanation: {
            en: 'Slave labor anchored the South’s economy in plantation cash crops like cotton.',
            no: 'Slavearbeid forankret Sørs økonomi i salgsavlinger på plantasjer som bomull.'
          },
          tags: ['economy', 'south']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was the domestic slave trade in the US?',
            no: 'Hva var den innenlandske slavehandelen i USA?'
          },
          answers: [
            { en: 'The buying and selling of enslaved people within the country', no: 'Kjøp og salg av slavebundne mennesker innenfor landet' },
            { en: 'Importing slaves from Europe', no: 'Import av slaver fra Europa' },
            { en: 'A trade only in goods', no: 'En handel bare med varer' },
            { en: 'Exporting cotton to Africa', no: 'Eksport av bomull til Afrika' }
          ],
          correct: 0,
          explanation: {
            en: 'After importing slaves was banned, a large internal trade moved enslaved people, often southward.',
            no: 'Etter at slaveimport ble forbudt, flyttet en stor innenlandshandel slavebundne mennesker, ofte sørover.'
          },
          tags: ['domestic-trade', 'usa']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did slavery affect enslaved families?',
            no: 'Hvordan påvirket slaveriet slavebundne familier?'
          },
          answers: [
            { en: 'Families were often separated by sale', no: 'Familier ble ofte splittet ved salg' },
            { en: 'Families were always kept together', no: 'Familier ble alltid holdt samlet' },
            { en: 'Slavery had no effect on families', no: 'Slaveriet hadde ingen effekt på familier' },
            { en: 'Families were given new homes', no: 'Familier fikk nye hjem' }
          ],
          correct: 0,
          explanation: {
            en: 'Owners could sell family members separately, tearing apart enslaved families.',
            no: 'Eiere kunne selge familiemedlemmer hver for seg og splitte slavebundne familier.'
          },
          tags: ['family', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What were "maroon" communities?',
            no: 'Hva var «maroon»-samfunn?'
          },
          answers: [
            { en: 'Settlements of escaped enslaved people', no: 'Bosetninger av rømte slavebundne mennesker' },
            { en: 'European trading posts', no: 'Europeiske handelsstasjoner' },
            { en: 'Plantation owners’ clubs', no: 'Plantasjeeieres klubber' },
            { en: 'Royal palaces', no: 'Kongelige palasser' }
          ],
          correct: 0,
          explanation: {
            en: 'Maroon communities were independent settlements formed by people who escaped slavery.',
            no: 'Maroon-samfunn var uavhengige bosetninger dannet av mennesker som rømte fra slaveriet.'
          },
          tags: ['maroons', 'resistance']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why was the 1791–1804 Haitian Revolution significant for slavery?',
            no: 'Hvorfor var den haitiske revolusjonen (1791–1804) betydningsfull for slaveriet?'
          },
          answers: [
            { en: 'Enslaved people overthrew slavery and founded a free state', no: 'Slavebundne mennesker styrtet slaveriet og grunnla en fri stat' },
            { en: 'It expanded slavery worldwide', no: 'Den utvidet slaveriet over hele verden' },
            { en: 'It had no effect on slavery', no: 'Den hadde ingen effekt på slaveriet' },
            { en: 'It restored French rule', no: 'Den gjeninnførte fransk styre' }
          ],
          correct: 0,
          explanation: {
            en: 'The Haitian Revolution led to the first nation founded by formerly enslaved people who abolished slavery.',
            no: 'Den haitiske revolusjonen førte til den første nasjonen grunnlagt av tidligere slavebundne mennesker som avskaffet slaveriet.'
          },
          tags: ['haiti', 'revolution']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did enslaved people resist slavery day to day?',
            no: 'Hvordan gjorde slavebundne mennesker motstand mot slaveriet i hverdagen?'
          },
          answers: [
            { en: 'Through slow work, sabotage, and preserving culture', no: 'Gjennom langsomt arbeid, sabotasje og bevaring av kultur' },
            { en: 'By legally voting against it', no: 'Ved å stemme mot det i valg' },
            { en: 'They never resisted', no: 'De gjorde aldri motstand' },
            { en: 'By buying the plantations', no: 'Ved å kjøpe plantasjene' }
          ],
          correct: 0,
          explanation: {
            en: 'Everyday resistance included working slowly, breaking tools, and keeping cultural traditions alive.',
            no: 'Hverdagsmotstand omfattet å arbeide langsomt, ødelegge redskaper og holde kulturelle tradisjoner i live.'
          },
          tags: ['resistance', 'daily-life']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did slavery vary across the Americas?',
            no: 'Hvordan varierte slaveriet på tvers av Amerika?'
          },
          answers: [
            { en: 'Conditions, laws, and crops differed by region', no: 'Forhold, lover og avlinger varierte fra region til region' },
            { en: 'It was identical everywhere', no: 'Det var identisk overalt' },
            { en: 'It existed only in one colony', no: 'Det fantes bare i én koloni' },
            { en: 'It never involved agriculture', no: 'Det involverte aldri jordbruk' }
          ],
          correct: 0,
          explanation: {
            en: 'Slavery’s laws, treatment, and economic uses varied widely across regions and empires.',
            no: 'Slaveriets lover, behandling og økonomiske bruk varierte mye mellom regioner og imperier.'
          },
          tags: ['comparison', 'regions']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did some US states become "slave states" and others "free states"?',
            no: 'Hvorfor ble enkelte amerikanske delstater «slavestater» og andre «frie stater»?'
          },
          answers: [
            { en: 'Economies and politics differed between North and South', no: 'Økonomi og politikk var ulik i Nord og Sør' },
            { en: 'It was decided by the weather', no: 'Det ble avgjort av været' },
            { en: 'All states allowed slavery equally', no: 'Alle delstater tillot slaveri likt' },
            { en: 'No states allowed slavery', no: 'Ingen delstater tillot slaveri' }
          ],
          correct: 0,
          explanation: {
            en: 'The plantation South depended on slavery, while the more industrial North moved toward abolition.',
            no: 'Plantasjesør var avhengig av slaveri, mens det mer industrialiserte Nord beveget seg mot avskaffelse.'
          },
          tags: ['free-slave-states', 'usa']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was the Underground Railroad?',
            no: 'Hva var Underground Railroad?'
          },
          answers: [
            { en: 'A secret network helping enslaved people escape to freedom', no: 'Et hemmelig nettverk som hjalp slavebundne mennesker å rømme til frihet' },
            { en: 'An actual underground train', no: 'Et faktisk undergrunnstog' },
            { en: 'A plantation tool', no: 'Et plantasjeredskap' },
            { en: 'A European trade route', no: 'En europeisk handelsrute' }
          ],
          correct: 0,
          explanation: {
            en: 'The Underground Railroad was a network of routes and helpers aiding escapes to free states and Canada.',
            no: 'Underground Railroad var et nettverk av ruter og hjelpere som bisto rømninger til frie stater og Canada.'
          },
          tags: ['underground-railroad', 'resistance']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the institution of slavery shape racial attitudes that persisted after abolition?',
            no: 'Hvordan formet slaveriinstitusjonen rasholdninger som vedvarte etter avskaffelsen?'
          },
          answers: [
            { en: 'It entrenched ideas of racial hierarchy that outlived legal slavery', no: 'Den festnet ideer om rasehierarki som overlevde det juridiske slaveriet' },
            { en: 'It ended all prejudice immediately', no: 'Den avsluttet alle fordommer umiddelbart' },
            { en: 'It had no effect on attitudes', no: 'Den hadde ingen effekt på holdninger' },
            { en: 'It promoted full equality', no: 'Den fremmet full likestilling' }
          ],
          correct: 0,
          explanation: {
            en: 'Slavery’s racial justifications fed lasting discrimination and segregation after emancipation.',
            no: 'Slaveriets rasemessige rettferdiggjøringer næret varig diskriminering og segregering etter frigjøringen.'
          },
          tags: ['race', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians compare slave systems in Brazil, the Caribbean, and the US?',
            no: 'Hvorfor sammenligner historikere slavesystemene i Brasil, Karibia og USA?'
          },
          answers: [
            { en: 'To understand differences in mortality, manumission, and race relations', no: 'For å forstå forskjeller i dødelighet, frigivelse og raserelasjoner' },
            { en: 'Because the systems were identical', no: 'Fordi systemene var identiske' },
            { en: 'To prove slavery never happened', no: 'For å bevise at slaveriet aldri skjedde' },
            { en: 'Because only one had slavery', no: 'Fordi bare ett hadde slaveri' }
          ],
          correct: 0,
          explanation: {
            en: 'Comparative study reveals how laws, economies, and demographics shaped distinct slave societies.',
            no: 'Sammenlignende studier viser hvordan lover, økonomier og demografi formet ulike slavesamfunn.'
          },
          tags: ['comparison', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did enslaved people preserve African cultural heritage in the Americas?',
            no: 'Hvordan bevarte slavebundne mennesker afrikansk kulturarv i Amerika?'
          },
          answers: [
            { en: 'Through music, religion, language, and food blended with new influences', no: 'Gjennom musikk, religion, språk og mat blandet med nye påvirkninger' },
            { en: 'By abandoning all traditions', no: 'Ved å forlate alle tradisjoner' },
            { en: 'They had no culture', no: 'De hadde ingen kultur' },
            { en: 'By copying only European customs', no: 'Ved bare å kopiere europeiske skikker' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved communities preserved and adapted African traditions, creating new cultures like in religion and music.',
            no: 'Slavebundne samfunn bevarte og tilpasset afrikanske tradisjoner og skapte nye kulturer innen blant annet religion og musikk.'
          },
          tags: ['culture', 'resistance']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the relationship between slavery and US capitalism debated?',
            no: 'Hvorfor diskuteres forholdet mellom slaveri og amerikansk kapitalisme?'
          },
          answers: [
            { en: 'Scholars dispute how central slave-produced cotton was to national economic growth', no: 'Forskere er uenige om hvor sentral slaveprodusert bomull var for nasjonal økonomisk vekst' },
            { en: 'Everyone agrees it had no effect', no: 'Alle er enige om at det ikke hadde noen effekt' },
            { en: 'Cotton was never produced', no: 'Bomull ble aldri produsert' },
            { en: 'Slavery was unrelated to the economy', no: 'Slaveri var uten tilknytning til økonomien' }
          ],
          correct: 0,
          explanation: {
            en: 'Historians debate how much slave-grown cotton and finance fueled broader US economic development.',
            no: 'Historikere diskuterer hvor mye slavedyrket bomull og finans drev bredere amerikansk økonomisk utvikling.'
          },
          tags: ['capitalism', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did slave revolts influence both fear and policy among slaveholders?',
            no: 'Hvordan påvirket slaveopprør både frykt og politikk blant slaveeiere?'
          },
          answers: [
            { en: 'They prompted harsher controls and deepened anxieties', no: 'De førte til strengere kontroll og dypere uro' },
            { en: 'They were ignored entirely', no: 'De ble fullstendig ignorert' },
            { en: 'They ended slavery instantly', no: 'De avsluttet slaveriet øyeblikkelig' },
            { en: 'They had no political effect', no: 'De hadde ingen politisk effekt' }
          ],
          correct: 0,
          explanation: {
            en: 'Revolts like Nat Turner’s spread fear and led slaveholders to impose tighter, harsher laws.',
            no: 'Opprør som Nat Turners spredte frykt og fikk slaveeiere til å innføre strengere og hardere lover.'
          },
          tags: ['revolts', 'control']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why was the Haitian Revolution alarming to slaveholding societies?',
            no: 'Hvorfor var den haitiske revolusjonen alarmerende for slaveholdende samfunn?'
          },
          answers: [
            { en: 'It proved enslaved people could overthrow slavery and rule themselves', no: 'Den beviste at slavebundne mennesker kunne styrte slaveriet og styre seg selv' },
            { en: 'It strengthened slavery everywhere', no: 'Den styrket slaveriet overalt' },
            { en: 'It had no wider influence', no: 'Den hadde ingen bredere innflytelse' },
            { en: 'It was kept completely secret', no: 'Den ble holdt fullstendig hemmelig' }
          ],
          correct: 0,
          explanation: {
            en: 'Haiti’s successful revolt terrified slaveholders and inspired enslaved people across the Americas.',
            no: 'Haitis vellykkede opprør skremte slaveeiere og inspirerte slavebundne mennesker over hele Amerika.'
          },
          tags: ['haiti', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did legal definitions of race develop to support slavery in the Americas?',
            no: 'Hvordan utviklet juridiske definisjoner av rase seg for å støtte slaveriet i Amerika?'
          },
          answers: [
            { en: 'Laws tied enslavement to African ancestry and inherited status', no: 'Lover knyttet slavebinding til afrikansk avstamning og arvet status' },
            { en: 'Race was never mentioned in law', no: 'Rase ble aldri nevnt i loven' },
            { en: 'Laws freed all people of African descent', no: 'Lover frigjorde alle av afrikansk avstamning' },
            { en: 'Slavery applied equally to Europeans', no: 'Slaveri gjaldt likt for europeere' }
          ],
          correct: 0,
          explanation: {
            en: 'Colonial laws increasingly linked slavery to African descent, making race the basis of lifelong bondage.',
            no: 'Kolonilover knyttet i økende grad slaveri til afrikansk avstamning og gjorde rase til grunnlaget for livslang trelldom.'
          },
          tags: ['race', 'law']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did emancipation differ in outcome between regions like the US and the Caribbean?',
            no: 'Hvordan var utfallet av frigjøringen ulikt mellom regioner som USA og Karibia?'
          },
          answers: [
            { en: 'Differing land, labor, and political systems shaped freedpeople’s lives', no: 'Ulike land-, arbeids- og politiske systemer formet de frigjortes liv' },
            { en: 'Outcomes were identical everywhere', no: 'Utfallene var identiske overalt' },
            { en: 'No region freed enslaved people', no: 'Ingen region frigjorde slavebundne mennesker' },
            { en: 'Emancipation never occurred', no: 'Frigjøringen skjedde aldri' }
          ],
          correct: 0,
          explanation: {
            en: 'Access to land, labor demands, and politics meant freedom brought very different realities by region.',
            no: 'Tilgang til land, arbeidsbehov og politikk gjorde at friheten brakte svært ulike realiteter fra region til region.'
          },
          tags: ['emancipation', 'comparison']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the term "enslaved person" increasingly used instead of "slave"?',
            no: 'Hvorfor brukes betegnelsen «slavebundet person» i økende grad i stedet for «slave»?'
          },
          answers: [
            { en: 'It emphasizes humanity and that enslavement was imposed, not an identity', no: 'Den understreker menneskeverd og at slavebinding ble påtvunget, ikke var en identitet' },
            { en: 'The words mean opposite things', no: 'Ordene betyr motsatte ting' },
            { en: 'It hides what happened', no: 'Den skjuler hva som skjedde' },
            { en: 'It refers only to free people', no: 'Den viser bare til frie mennesker' }
          ],
          correct: 0,
          explanation: {
            en: 'Many historians use "enslaved person" to stress humanity and that slavery was a condition forced on people.',
            no: 'Mange historikere bruker «slavebundet person» for å understreke menneskeverd og at slaveriet var en tilstand påtvunget mennesker.'
          },
          tags: ['terminology', 'historiography']
        }
      ]
    },
    {
      slug: 'lives-of-enslaved-people',
      name: { en: 'Lives of enslaved people', no: 'De slavebundnes liv' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'Where did most enslaved people on plantations live?',
            no: 'Hvor bodde de fleste slavebundne menneskene på plantasjer?'
          },
          answers: [
            { en: 'In small cabins or quarters', no: 'I små hytter eller slavekvarterer' },
            { en: 'In grand mansions', no: 'I storslåtte herskapshus' },
            { en: 'In city hotels', no: 'På byhoteller' },
            { en: 'In castles', no: 'I slott' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved people usually lived in small, crowded cabins in the slave quarters.',
            no: 'Slavebundne mennesker bodde vanligvis i små, overfylte hytter i slavekvarteret.'
          },
          tags: ['housing', 'daily-life']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What kind of work did most enslaved people do on plantations?',
            no: 'Hva slags arbeid utførte de fleste slavebundne menneskene på plantasjer?'
          },
          answers: [
            { en: 'Hard physical field labor', no: 'Hardt fysisk markarbeid' },
            { en: 'Office work', no: 'Kontorarbeid' },
            { en: 'Teaching at schools', no: 'Undervisning på skoler' },
            { en: 'Running banks', no: 'Drift av banker' }
          ],
          correct: 0,
          explanation: {
            en: 'Most enslaved people performed grueling field labor from dawn to dusk.',
            no: 'De fleste slavebundne mennesker utførte slitsomt markarbeid fra morgen til kveld.'
          },
          tags: ['labor', 'daily-life']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What helped enslaved people endure and express their experiences?',
            no: 'Hva hjalp slavebundne mennesker å holde ut og uttrykke sine erfaringer?'
          },
          answers: [
            { en: 'Music and songs', no: 'Musikk og sanger' },
            { en: 'Owning newspapers', no: 'Å eie aviser' },
            { en: 'Voting in elections', no: 'Å stemme i valg' },
            { en: 'Foreign travel', no: 'Utenlandsreiser' }
          ],
          correct: 0,
          explanation: {
            en: 'Music, including spirituals and work songs, helped enslaved people cope and communicate.',
            no: 'Musikk, inkludert spirituals og arbeidssanger, hjalp slavebundne mennesker å mestre og kommunisere.'
          },
          tags: ['music', 'culture']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Enslaved people were usually forbidden from learning to do what?',
            no: 'Slavebundne mennesker ble vanligvis forbudt å lære å gjøre hva?'
          },
          answers: [
            { en: 'Read and write', no: 'Lese og skrive' },
            { en: 'Eat food', no: 'Spise mat' },
            { en: 'Walk', no: 'Gå' },
            { en: 'Sleep', no: 'Sove' }
          ],
          correct: 0,
          explanation: {
            en: 'In many places, laws forbade teaching enslaved people to read and write.',
            no: 'Mange steder forbød lover å lære slavebundne mennesker å lese og skrive.'
          },
          tags: ['literacy', 'restrictions']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What religion did many enslaved people in the Americas adopt and adapt?',
            no: 'Hvilken religion tok mange slavebundne mennesker i Amerika til seg og tilpasset?'
          },
          answers: [
            { en: 'Christianity', no: 'Kristendommen' },
            { en: 'Buddhism', no: 'Buddhismen' },
            { en: 'Shinto', no: 'Shinto' },
            { en: 'Zoroastrianism', no: 'Zoroastrismen' }
          ],
          correct: 0,
          explanation: {
            en: 'Many enslaved people adopted Christianity, often blending it with African traditions.',
            no: 'Mange slavebundne mennesker tok til seg kristendommen, ofte blandet med afrikanske tradisjoner.'
          },
          tags: ['religion', 'culture']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What were religious folk songs sung by enslaved Christians called?',
            no: 'Hva ble religiøse folkesanger sunget av slavebundne kristne kalt?'
          },
          answers: [
            { en: 'Spirituals', no: 'Spirituals' },
            { en: 'Anthems', no: 'Nasjonalsanger' },
            { en: 'Operas', no: 'Operaer' },
            { en: 'Symphonies', no: 'Symfonier' }
          ],
          correct: 0,
          explanation: {
            en: 'Spirituals were religious songs that expressed faith, sorrow, and hope.',
            no: 'Spirituals var religiøse sanger som uttrykte tro, sorg og håp.'
          },
          tags: ['spirituals', 'music']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What was often used to punish enslaved people?',
            no: 'Hva ble ofte brukt til å straffe slavebundne mennesker?'
          },
          answers: [
            { en: 'The whip', no: 'Pisken' },
            { en: 'Gold coins', no: 'Gullmynter' },
            { en: 'Free time', no: 'Fritid' },
            { en: 'Extra food', no: 'Ekstra mat' }
          ],
          correct: 0,
          explanation: {
            en: 'Whipping was a common and brutal punishment used to control enslaved people.',
            no: 'Pisking var en vanlig og brutal straff brukt til å kontrollere slavebundne mennesker.'
          },
          tags: ['punishment', 'violence']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Enslaved people often worked from when to when each day?',
            no: 'Slavebundne mennesker arbeidet ofte fra når til når hver dag?'
          },
          answers: [
            { en: 'From sunrise to sunset', no: 'Fra soloppgang til solnedgang' },
            { en: 'Only one hour a day', no: 'Bare én time om dagen' },
            { en: 'Only at night for fun', no: 'Bare om natten for moro skyld' },
            { en: 'Whenever they chose', no: 'Når de selv ville' }
          ],
          correct: 0,
          explanation: {
            en: 'Field labor typically lasted from sunrise to sunset, often longer at harvest.',
            no: 'Markarbeid varte vanligvis fra soloppgang til solnedgang, ofte lenger i innhøstingen.'
          },
          tags: ['work-hours', 'daily-life']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Besides field work, enslaved people also performed what kind of labor?',
            no: 'Foruten markarbeid, hva slags arbeid utførte slavebundne mennesker også?'
          },
          answers: [
            { en: 'Household and skilled work', no: 'Hus- og håndverksarbeid' },
            { en: 'Space exploration', no: 'Romfart' },
            { en: 'Stock trading', no: 'Aksjehandel' },
            { en: 'Air travel', no: 'Flyreiser' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved people also did domestic work and skilled trades like blacksmithing and carpentry.',
            no: 'Slavebundne mennesker utførte også husarbeid og håndverk som smedarbeid og snekring.'
          },
          tags: ['labor', 'skills']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What did enslaved people often form to support one another?',
            no: 'Hva dannet slavebundne mennesker ofte for å støtte hverandre?'
          },
          answers: [
            { en: 'Close communities and families', no: 'Tette fellesskap og familier' },
            { en: 'Trading companies', no: 'Handelsselskaper' },
            { en: 'Royal courts', no: 'Kongelige hoff' },
            { en: 'National armies', no: 'Nasjonale hærer' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved people built strong community and family bonds for survival and support.',
            no: 'Slavebundne mennesker bygde sterke fellesskaps- og familiebånd for å overleve og støtte hverandre.'
          },
          tags: ['community', 'family']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What kind of food were enslaved people usually given?',
            no: 'Hva slags mat fikk slavebundne mennesker vanligvis?'
          },
          answers: [
            { en: 'Small, basic rations', no: 'Små, enkle rasjoner' },
            { en: 'Lavish banquets', no: 'Overdådige festmåltider' },
            { en: 'Restaurant meals', no: 'Restaurantmåltider' },
            { en: 'Unlimited choices', no: 'Ubegrensede valg' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved people were given minimal rations and often grew extra food themselves.',
            no: 'Slavebundne mennesker fikk minimale rasjoner og dyrket ofte ekstra mat selv.'
          },
          tags: ['food', 'daily-life']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a firsthand written account by a formerly enslaved person called?',
            no: 'Hva kalles en førstehånds skriftlig beretning av en tidligere slavebundet person?'
          },
          answers: [
            { en: 'A slave narrative', no: 'En slaveberetning' },
            { en: 'A trade ledger', no: 'En handelsbok' },
            { en: 'A royal decree', no: 'Et kongelig dekret' },
            { en: 'A ship manifest', no: 'En skipsmanifest' }
          ],
          correct: 0,
          explanation: {
            en: 'Slave narratives, like Frederick Douglass’s, recorded firsthand experiences of slavery.',
            no: 'Slaveberetninger, som Frederick Douglass’, nedtegnet førstehånds erfaringer med slaveriet.'
          },
          tags: ['narratives', 'sources']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which famous formerly enslaved man wrote a powerful autobiography?',
            no: 'Hvilken berømt tidligere slavebundet mann skrev en kraftfull selvbiografi?'
          },
          answers: [
            { en: 'Frederick Douglass', no: 'Frederick Douglass' },
            { en: 'George Washington', no: 'George Washington' },
            { en: 'Napoleon Bonaparte', no: 'Napoleon Bonaparte' },
            { en: 'Christopher Columbus', no: 'Christofer Columbus' }
          ],
          correct: 0,
          explanation: {
            en: 'Frederick Douglass escaped slavery and wrote a famous autobiography exposing its cruelty.',
            no: 'Frederick Douglass rømte fra slaveriet og skrev en berømt selvbiografi som avslørte grusomheten.'
          },
          tags: ['douglass', 'people']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What did enslaved people risk if they tried to escape?',
            no: 'Hva risikerte slavebundne mennesker hvis de forsøkte å rømme?'
          },
          answers: [
            { en: 'Severe punishment if caught', no: 'Hard straff hvis de ble tatt' },
            { en: 'A cash reward', no: 'En pengebelønning' },
            { en: 'A holiday', no: 'En ferie' },
            { en: 'A promotion', no: 'En forfremmelse' }
          ],
          correct: 0,
          explanation: {
            en: 'Escapees who were caught faced brutal punishment, including whipping or sale.',
            no: 'Rømlinger som ble tatt, møtte brutal straff, inkludert pisking eller salg.'
          },
          tags: ['escape', 'punishment']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Enslaved people often kept alive traditions from where?',
            no: 'Slavebundne mennesker holdt ofte i live tradisjoner fra hvor?'
          },
          answers: [
            { en: 'Africa', no: 'Afrika' },
            { en: 'Antarctica', no: 'Antarktis' },
            { en: 'The Moon', no: 'Månen' },
            { en: 'Scandinavia', no: 'Skandinavia' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved people preserved African traditions in music, food, language, and beliefs.',
            no: 'Slavebundne mennesker bevarte afrikanske tradisjoner i musikk, mat, språk og tro.'
          },
          tags: ['african-heritage', 'culture']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did enslaved people develop their own forms of music and storytelling?',
            no: 'Hvorfor utviklet slavebundne mennesker sine egne former for musikk og fortellerkunst?'
          },
          answers: [
            { en: 'To preserve identity, share news, and endure hardship', no: 'For å bevare identitet, dele nyheter og holde ut motgang' },
            { en: 'Because they were paid to perform', no: 'Fordi de fikk betalt for å opptre' },
            { en: 'To entertain European royalty', no: 'For å underholde europeiske kongelige' },
            { en: 'They had no reason', no: 'De hadde ingen grunn' }
          ],
          correct: 0,
          explanation: {
            en: 'Music and stories preserved culture, passed messages, and provided strength under oppression.',
            no: 'Musikk og fortellinger bevarte kultur, formidlet budskap og ga styrke under undertrykkelse.'
          },
          tags: ['culture', 'resistance']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the threat of family separation affect enslaved people’s lives?',
            no: 'Hvordan påvirket trusselen om familieadskillelse livene til slavebundne mennesker?'
          },
          answers: [
            { en: 'It created constant fear and instability', no: 'Den skapte konstant frykt og ustabilitet' },
            { en: 'It made life secure', no: 'Den gjorde livet trygt' },
            { en: 'It had no emotional effect', no: 'Den hadde ingen følelsesmessig virkning' },
            { en: 'It guaranteed family unity', no: 'Den garanterte familiesamhold' }
          ],
          correct: 0,
          explanation: {
            en: 'Because owners could sell family members anytime, enslaved families lived under constant threat.',
            no: 'Fordi eiere kunne selge familiemedlemmer når som helst, levde slavebundne familier under konstant trussel.'
          },
          tags: ['family', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did some enslaved people resist without open rebellion?',
            no: 'Hvordan gjorde noen slavebundne mennesker motstand uten åpent opprør?'
          },
          answers: [
            { en: 'By working slowly, feigning illness, or breaking tools', no: 'Ved å arbeide langsomt, simulere sykdom eller ødelegge redskaper' },
            { en: 'By holding elections', no: 'Ved å holde valg' },
            { en: 'By paying taxes', no: 'Ved å betale skatt' },
            { en: 'They never resisted at all', no: 'De gjorde aldri motstand i det hele tatt' }
          ],
          correct: 0,
          explanation: {
            en: 'Subtle resistance included slowing work, faking sickness, and sabotaging tools and crops.',
            no: 'Subtil motstand omfattet å bremse arbeidet, simulere sykdom og sabotere redskaper og avlinger.'
          },
          tags: ['resistance', 'daily-life']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why was religion important in the lives of many enslaved people?',
            no: 'Hvorfor var religion viktig i livene til mange slavebundne mennesker?'
          },
          answers: [
            { en: 'It offered hope, community, and a sense of dignity', no: 'Den ga håp, fellesskap og en følelse av verdighet' },
            { en: 'It was required to earn wages', no: 'Den var påkrevd for å tjene lønn' },
            { en: 'It had no meaning to them', no: 'Den hadde ingen betydning for dem' },
            { en: 'It was used only by owners', no: 'Den ble bare brukt av eiere' }
          ],
          correct: 0,
          explanation: {
            en: 'Faith gave enslaved people hope, community, and messages of liberation and endurance.',
            no: 'Troen ga slavebundne mennesker håp, fellesskap og budskap om frigjøring og utholdenhet.'
          },
          tags: ['religion', 'culture']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did enslaved people pass down history and knowledge?',
            no: 'Hvordan førte slavebundne mennesker videre historie og kunnskap?'
          },
          answers: [
            { en: 'Through oral traditions and storytelling', no: 'Gjennom muntlige tradisjoner og fortellerkunst' },
            { en: 'Through printed encyclopedias', no: 'Gjennom trykte oppslagsverk' },
            { en: 'Through television', no: 'Gjennom fjernsyn' },
            { en: 'They kept no knowledge', no: 'De bevarte ingen kunnskap' }
          ],
          correct: 0,
          explanation: {
            en: 'Since literacy was often banned, oral storytelling preserved history, skills, and culture.',
            no: 'Siden lesekyndighet ofte var forbudt, bevarte muntlig fortellerkunst historie, ferdigheter og kultur.'
          },
          tags: ['oral-tradition', 'culture']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the work of house slaves differ from field slaves?',
            no: 'Hvordan skilte arbeidet til husslaver seg fra markslaver?'
          },
          answers: [
            { en: 'House slaves did domestic tasks but were under constant supervision', no: 'Husslaver gjorde husarbeid, men var under konstant overvåking' },
            { en: 'House slaves were free', no: 'Husslaver var frie' },
            { en: 'Field slaves were paid more', no: 'Markslaver fikk mer betalt' },
            { en: 'There was no difference', no: 'Det var ingen forskjell' }
          ],
          correct: 0,
          explanation: {
            en: 'House slaves did cooking and cleaning under close watch, while field slaves did heavy outdoor labor.',
            no: 'Husslaver lagde mat og vasket under tett oppsyn, mens markslaver gjorde tungt utearbeid.'
          },
          tags: ['labor', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What role did African languages play in enslaved communities?',
            no: 'Hvilken rolle spilte afrikanske språk i slavebundne samfunn?'
          },
          answers: [
            { en: 'They influenced new creole languages and speech', no: 'De påvirket nye kreolspråk og talemåter' },
            { en: 'They were never used', no: 'De ble aldri brukt' },
            { en: 'They replaced all European languages', no: 'De erstattet alle europeiske språk' },
            { en: 'They had no effect on language', no: 'De hadde ingen effekt på språk' }
          ],
          correct: 0,
          explanation: {
            en: 'African languages blended with European ones to form creole languages in many regions.',
            no: 'Afrikanske språk blandet seg med europeiske og dannet kreolspråk i mange regioner.'
          },
          tags: ['language', 'creole']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why were enslaved people often denied education?',
            no: 'Hvorfor ble slavebundne mennesker ofte nektet utdanning?'
          },
          answers: [
            { en: 'Owners feared literacy would encourage resistance and escape', no: 'Eiere fryktet at lesekyndighet ville oppmuntre til motstand og rømning' },
            { en: 'Schools were too far away', no: 'Skolene lå for langt unna' },
            { en: 'They were too busy with leisure', no: 'De var for opptatt med fritid' },
            { en: 'Education was free for all', no: 'Utdanning var gratis for alle' }
          ],
          correct: 0,
          explanation: {
            en: 'Slaveholders banned literacy fearing educated enslaved people would resist or escape.',
            no: 'Slaveeiere forbød lesekyndighet av frykt for at utdannede slavebundne mennesker ville gjøre motstand eller rømme.'
          },
          tags: ['literacy', 'control']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did enslaved people celebrate and find joy despite their conditions?',
            no: 'Hvordan feiret slavebundne mennesker og fant glede til tross for forholdene sine?'
          },
          answers: [
            { en: 'Through music, dance, weddings, and gatherings', no: 'Gjennom musikk, dans, bryllup og sammenkomster' },
            { en: 'By taking long vacations', no: 'Ved å ta lange ferier' },
            { en: 'They never found any joy', no: 'De fant aldri noen glede' },
            { en: 'By owning businesses', no: 'Ved å eie bedrifter' }
          ],
          correct: 0,
          explanation: {
            en: 'Despite hardship, enslaved people preserved joy through music, dance, faith, and community events.',
            no: 'Til tross for motgang bevarte slavebundne mennesker glede gjennom musikk, dans, tro og fellesskapssamlinger.'
          },
          tags: ['culture', 'community']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did skilled enslaved workers sometimes gain limited advantages?',
            no: 'Hvordan oppnådde dyktige slavebundne arbeidere noen ganger begrensede fordeler?'
          },
          answers: [
            { en: 'Skills could occasionally bring better treatment or hired-out wages', no: 'Ferdigheter kunne av og til gi bedre behandling eller leieinntekter' },
            { en: 'They became plantation owners', no: 'De ble plantasjeeiere' },
            { en: 'They were always freed', no: 'De ble alltid frigjort' },
            { en: 'Skills made no difference', no: 'Ferdigheter gjorde ingen forskjell' }
          ],
          correct: 0,
          explanation: {
            en: 'Skilled enslaved workers were sometimes hired out, occasionally earning small sums or relative privileges.',
            no: 'Dyktige slavebundne arbeidere ble noen ganger leid ut og tjente av og til små summer eller fikk relative privilegier.'
          },
          tags: ['skills', 'daily-life']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why are slave narratives valuable historical sources?',
            no: 'Hvorfor er slaveberetninger verdifulle historiske kilder?'
          },
          answers: [
            { en: 'They give firsthand voices to enslaved people’s experiences', no: 'De gir førstehånds stemmer til slavebundne menneskers erfaringer' },
            { en: 'They were written by slaveowners only', no: 'De ble bare skrevet av slaveeiere' },
            { en: 'They contain no real information', no: 'De inneholder ingen reell informasjon' },
            { en: 'They describe only Europe', no: 'De beskriver bare Europa' }
          ],
          correct: 0,
          explanation: {
            en: 'Slave narratives provide rare firsthand accounts of bondage, resistance, and survival.',
            no: 'Slaveberetninger gir sjeldne førstehånds skildringer av trelldom, motstand og overlevelse.'
          },
          tags: ['narratives', 'sources']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did enslaved people create new cultures that blended African and American elements?',
            no: 'Hvordan skapte slavebundne mennesker nye kulturer som blandet afrikanske og amerikanske elementer?'
          },
          answers: [
            { en: 'Through syncretic religion, music, food, and language', no: 'Gjennom synkretisk religion, musikk, mat og språk' },
            { en: 'By rejecting all traditions', no: 'Ved å forkaste alle tradisjoner' },
            { en: 'By copying Europe exactly', no: 'Ved å kopiere Europa nøyaktig' },
            { en: 'They created nothing new', no: 'De skapte ingenting nytt' }
          ],
          correct: 0,
          explanation: {
            en: 'Blending African heritage with new surroundings produced creole cultures, religions, and musical forms.',
            no: 'Å blande afrikansk arv med nye omgivelser skapte kreolkulturer, religioner og musikkformer.'
          },
          tags: ['syncretism', 'culture']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did gender shape the experiences of enslaved women?',
            no: 'Hvordan formet kjønn erfaringene til slavebundne kvinner?'
          },
          answers: [
            { en: 'They faced field labor plus sexual exploitation and reproductive demands', no: 'De møtte markarbeid i tillegg til seksuell utnyttelse og krav om reproduksjon' },
            { en: 'They were exempt from all work', no: 'De var fritatt for alt arbeid' },
            { en: 'They had identical experiences to men', no: 'De hadde identiske erfaringer som menn' },
            { en: 'They were always freed first', no: 'De ble alltid frigjort først' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved women endured hard labor along with sexual abuse and pressure to bear children who would be enslaved.',
            no: 'Slavebundne kvinner gjennomgikk hardt arbeid sammen med seksuelt misbruk og press om å føde barn som ville bli slavebundne.'
          },
          tags: ['gender', 'women']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians rely on a mix of sources to study enslaved people’s lives?',
            no: 'Hvorfor støtter historikere seg på en blanding av kilder for å studere slavebundne menneskers liv?'
          },
          answers: [
            { en: 'Many records were written by owners, so narratives and archaeology add other views', no: 'Mange opptegnelser ble skrevet av eiere, så beretninger og arkeologi gir andre perspektiver' },
            { en: 'There are no sources at all', no: 'Det finnes ingen kilder i det hele tatt' },
            { en: 'Only owners’ records matter', no: 'Bare eiernes opptegnelser betyr noe' },
            { en: 'All sources agree perfectly', no: 'Alle kilder er helt enige' }
          ],
          correct: 0,
          explanation: {
            en: 'Because owner records dominate, historians combine narratives, oral history, and archaeology for fuller pictures.',
            no: 'Fordi eiernes opptegnelser dominerer, kombinerer historikere beretninger, muntlig historie og arkeologi for et fyldigere bilde.'
          },
          tags: ['sources', 'methods']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did enslaved people’s spirituals carry hidden meanings?',
            no: 'Hvordan bar slavebundne menneskers spirituals skjulte betydninger?'
          },
          answers: [
            { en: 'Some songs encoded messages about escape and freedom', no: 'Noen sanger kodet budskap om rømning og frihet' },
            { en: 'They had no meaning at all', no: 'De hadde ingen betydning i det hele tatt' },
            { en: 'They were written by owners', no: 'De ble skrevet av eiere' },
            { en: 'They were only about farming', no: 'De handlet bare om jordbruk' }
          ],
          correct: 0,
          explanation: {
            en: 'Some spirituals are believed to have carried coded references to escape routes and hopes for freedom.',
            no: 'Noen spirituals antas å ha båret kodede henvisninger til rømningsveier og håp om frihet.'
          },
          tags: ['spirituals', 'resistance']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is studying enslaved people’s agency important to historians?',
            no: 'Hvorfor er det viktig for historikere å studere slavebundne menneskers handlingsrom?'
          },
          answers: [
            { en: 'It shows they actively shaped their lives, not merely passive victims', no: 'Det viser at de aktivt formet livene sine, ikke bare var passive ofre' },
            { en: 'It proves they had no influence', no: 'Det beviser at de ikke hadde noen innflytelse' },
            { en: 'It ignores their experiences', no: 'Det ignorerer deres erfaringer' },
            { en: 'It focuses only on owners', no: 'Det fokuserer bare på eiere' }
          ],
          correct: 0,
          explanation: {
            en: 'Focusing on agency reveals how enslaved people resisted, built families, and preserved culture under oppression.',
            no: 'Å fokusere på handlingsrom viser hvordan slavebundne mennesker gjorde motstand, bygde familier og bevarte kultur under undertrykkelse.'
          },
          tags: ['agency', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did community networks help enslaved people survive?',
            no: 'Hvordan hjalp fellesskapsnettverk slavebundne mennesker å overleve?'
          },
          answers: [
            { en: 'They shared food, childcare, knowledge, and emotional support', no: 'De delte mat, barnepass, kunnskap og emosjonell støtte' },
            { en: 'They isolated each person', no: 'De isolerte hver enkelt' },
            { en: 'They had no networks', no: 'De hadde ingen nettverk' },
            { en: 'They only helped owners', no: 'De hjalp bare eiere' }
          ],
          correct: 0,
          explanation: {
            en: 'Tight community networks pooled resources and care, helping enslaved people endure brutal conditions.',
            no: 'Tette fellesskapsnettverk samlet ressurser og omsorg og hjalp slavebundne mennesker å holde ut brutale forhold.'
          },
          tags: ['community', 'survival']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the constant threat of violence function within slavery?',
            no: 'Hvordan virket den konstante trusselen om vold innenfor slaveriet?'
          },
          answers: [
            { en: 'It was a tool to enforce obedience and maintain control', no: 'Den var et redskap for å fremtvinge lydighet og opprettholde kontroll' },
            { en: 'It was rarely used', no: 'Den ble sjelden brukt' },
            { en: 'It had no role in the system', no: 'Den hadde ingen rolle i systemet' },
            { en: 'It only applied to owners', no: 'Den gjaldt bare eiere' }
          ],
          correct: 0,
          explanation: {
            en: 'Violence and its threat were central to coercing labor and suppressing resistance.',
            no: 'Vold og trusselen om vold var sentrale for å tvinge fram arbeid og undertrykke motstand.'
          },
          tags: ['violence', 'control']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did enslaved people’s cultural contributions have lasting influence?',
            no: 'Hvorfor fikk slavebundne menneskers kulturelle bidrag varig innflytelse?'
          },
          answers: [
            { en: 'Their music, food, and traditions shaped wider American cultures', no: 'Musikken, maten og tradisjonene deres formet bredere amerikanske kulturer' },
            { en: 'They left no cultural mark', no: 'De satte ingen kulturelle spor' },
            { en: 'Their culture disappeared', no: 'Kulturen deres forsvant' },
            { en: 'It influenced only Africa', no: 'Den påvirket bare Afrika' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved people’s traditions deeply influenced music, cuisine, and culture across the Americas.',
            no: 'Slavebundne menneskers tradisjoner påvirket musikk, mat og kultur dypt over hele Amerika.'
          },
          tags: ['culture', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did enslaved people maintain hope across generations?',
            no: 'Hvordan opprettholdt slavebundne mennesker håp gjennom generasjoner?'
          },
          answers: [
            { en: 'Through faith, family, storytelling, and visions of freedom', no: 'Gjennom tro, familie, fortellerkunst og forestillinger om frihet' },
            { en: 'By forgetting the past', no: 'Ved å glemme fortiden' },
            { en: 'They had no hope', no: 'De hadde ikke noe håp' },
            { en: 'By accepting slavery as just', no: 'Ved å akseptere slaveriet som rettferdig' }
          ],
          correct: 0,
          explanation: {
            en: 'Faith, family bonds, stories, and the dream of freedom sustained hope across generations.',
            no: 'Tro, familiebånd, fortellinger og drømmen om frihet holdt håpet i live gjennom generasjoner.'
          },
          tags: ['hope', 'culture']
        }
      ]
    },
    {
      slug: 'abolition-movements',
      name: { en: 'Abolition movements', no: 'Bevegelser for avskaffelse av slaveri' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'What is an "abolitionist"?',
            no: 'Hva er en «abolisjonist»?'
          },
          answers: [
            { en: 'A person who worked to end slavery', no: 'En person som arbeidet for å avskaffe slaveriet' },
            { en: 'A plantation owner', no: 'En plantasjeeier' },
            { en: 'A slave trader', no: 'En slavehandler' },
            { en: 'A ship captain', no: 'En skipskaptein' }
          ],
          correct: 0,
          explanation: {
            en: 'Abolitionists were people who campaigned to abolish slavery and the slave trade.',
            no: 'Abolisjonister var mennesker som kjempet for å avskaffe slaveriet og slavehandelen.'
          },
          tags: ['abolitionist', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which year did Britain abolish the slave trade?',
            no: 'I hvilket år avskaffet Storbritannia slavehandelen?'
          },
          answers: [
            { en: '1807', no: '1807' },
            { en: '1700', no: '1700' },
            { en: '1920', no: '1920' },
            { en: '1750', no: '1750' }
          ],
          correct: 0,
          explanation: {
            en: 'Britain abolished the transatlantic slave trade in 1807.',
            no: 'Storbritannia avskaffet den transatlantiske slavehandelen i 1807.'
          },
          tags: ['britain', '1807']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which escaped enslaved woman helped many others flee via the Underground Railroad?',
            no: 'Hvilken rømte slavebundne kvinne hjalp mange andre å flykte via Underground Railroad?'
          },
          answers: [
            { en: 'Harriet Tubman', no: 'Harriet Tubman' },
            { en: 'Queen Victoria', no: 'Dronning Victoria' },
            { en: 'Joan of Arc', no: 'Jeanne d’Arc' },
            { en: 'Florence Nightingale', no: 'Florence Nightingale' }
          ],
          correct: 0,
          explanation: {
            en: 'Harriet Tubman escaped slavery and led many others to freedom on the Underground Railroad.',
            no: 'Harriet Tubman rømte fra slaveriet og førte mange andre til frihet via Underground Railroad.'
          },
          tags: ['tubman', 'people']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which group was active in the early abolition movement in Britain and America?',
            no: 'Hvilken gruppe var aktiv i den tidlige abolisjonsbevegelsen i Storbritannia og Amerika?'
          },
          answers: [
            { en: 'The Quakers', no: 'Kvekerne' },
            { en: 'The Vikings', no: 'Vikingene' },
            { en: 'The Samurai', no: 'Samuraiene' },
            { en: 'The Pharaohs', no: 'Faraoene' }
          ],
          correct: 0,
          explanation: {
            en: 'Quakers were among the earliest organized opponents of slavery.',
            no: 'Kvekerne var blant de tidligste organiserte motstanderne av slaveriet.'
          },
          tags: ['quakers', 'movement']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which British politician led the parliamentary campaign against the slave trade?',
            no: 'Hvilken britisk politiker ledet den parlamentariske kampen mot slavehandelen?'
          },
          answers: [
            { en: 'William Wilberforce', no: 'William Wilberforce' },
            { en: 'Winston Churchill', no: 'Winston Churchill' },
            { en: 'Oliver Cromwell', no: 'Oliver Cromwell' },
            { en: 'Henry VIII', no: 'Henrik VIII' }
          ],
          correct: 0,
          explanation: {
            en: 'William Wilberforce led the long campaign in Parliament to abolish the British slave trade.',
            no: 'William Wilberforce ledet den lange kampen i parlamentet for å avskaffe den britiske slavehandelen.'
          },
          tags: ['wilberforce', 'people']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which formerly enslaved man became a leading American abolitionist speaker and writer?',
            no: 'Hvilken tidligere slavebundet mann ble en ledende amerikansk abolisjonisttaler og forfatter?'
          },
          answers: [
            { en: 'Frederick Douglass', no: 'Frederick Douglass' },
            { en: 'Thomas Edison', no: 'Thomas Edison' },
            { en: 'Mark Twain', no: 'Mark Twain' },
            { en: 'Andrew Jackson', no: 'Andrew Jackson' }
          ],
          correct: 0,
          explanation: {
            en: 'Frederick Douglass became a powerful abolitionist orator and author after escaping slavery.',
            no: 'Frederick Douglass ble en mektig abolisjonisttaler og forfatter etter å ha rømt fra slaveriet.'
          },
          tags: ['douglass', 'people']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What did abolitionists often use to spread their message?',
            no: 'Hva brukte abolisjonister ofte for å spre budskapet sitt?'
          },
          answers: [
            { en: 'Pamphlets, speeches, and newspapers', no: 'Pamfletter, taler og aviser' },
            { en: 'Television ads', no: 'TV-reklamer' },
            { en: 'Social media', no: 'Sosiale medier' },
            { en: 'Radio broadcasts', no: 'Radiosendinger' }
          ],
          correct: 0,
          explanation: {
            en: 'Abolitionists spread their message through pamphlets, public speeches, and newspapers.',
            no: 'Abolisjonister spredte budskapet sitt gjennom pamfletter, offentlige taler og aviser.'
          },
          tags: ['methods', 'movement']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which year did the United States abolish slavery nationwide?',
            no: 'I hvilket år avskaffet USA slaveriet i hele landet?'
          },
          answers: [
            { en: '1865', no: '1865' },
            { en: '1776', no: '1776' },
            { en: '1812', no: '1812' },
            { en: '1900', no: '1900' }
          ],
          correct: 0,
          explanation: {
            en: 'The 13th Amendment abolished slavery throughout the United States in 1865.',
            no: 'Det 13. grunnlovstillegget avskaffet slaveriet i hele USA i 1865.'
          },
          tags: ['usa', '1865']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What famous anti-slavery novel was written by Harriet Beecher Stowe?',
            no: 'Hvilken berømt antislaveriroman ble skrevet av Harriet Beecher Stowe?'
          },
          answers: [
            { en: 'Uncle Tom’s Cabin', no: 'Onkel Toms hytte' },
            { en: 'Moby Dick', no: 'Moby Dick' },
            { en: 'Robinson Crusoe', no: 'Robinson Crusoe' },
            { en: 'Don Quixote', no: 'Don Quijote' }
          ],
          correct: 0,
          explanation: {
            en: 'Uncle Tom’s Cabin (1852) powerfully depicted slavery’s cruelty and boosted abolitionism.',
            no: 'Onkel Toms hytte (1852) skildret slaveriets grusomhet kraftfullt og styrket abolisjonismen.'
          },
          tags: ['uncle-toms-cabin', 'culture']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which US president issued the Emancipation Proclamation?',
            no: 'Hvilken amerikansk president utstedte frigjøringsproklamasjonen?'
          },
          answers: [
            { en: 'Abraham Lincoln', no: 'Abraham Lincoln' },
            { en: 'George Washington', no: 'George Washington' },
            { en: 'Thomas Jefferson', no: 'Thomas Jefferson' },
            { en: 'Theodore Roosevelt', no: 'Theodore Roosevelt' }
          ],
          correct: 0,
          explanation: {
            en: 'President Abraham Lincoln issued the Emancipation Proclamation in 1863.',
            no: 'President Abraham Lincoln utstedte frigjøringsproklamasjonen i 1863.'
          },
          tags: ['lincoln', 'emancipation']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What year did Britain abolish slavery itself in most of its empire?',
            no: 'Hvilket år avskaffet Storbritannia selve slaveriet i mesteparten av imperiet sitt?'
          },
          answers: [
            { en: '1833', no: '1833' },
            { en: '1707', no: '1707' },
            { en: '1945', no: '1945' },
            { en: '1900', no: '1900' }
          ],
          correct: 0,
          explanation: {
            en: 'The Slavery Abolition Act of 1833 ended slavery across most of the British Empire.',
            no: 'Slavery Abolition Act fra 1833 avskaffet slaveriet i mesteparten av Det britiske imperiet.'
          },
          tags: ['britain', '1833']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What was the famous abolitionist image showing a kneeling enslaved man asking?',
            no: 'Hva spurte det berømte abolisjonistbildet av en knelende slavebundet mann om?'
          },
          answers: [
            { en: '"Am I not a man and a brother?"', no: '«Er jeg ikke en mann og en bror?»' },
            { en: '"Where is my pay?"', no: '«Hvor er lønnen min?»' },
            { en: '"When is dinner?"', no: '«Når er middagen?»' },
            { en: '"What is the date?"', no: '«Hvilken dato er det?»' }
          ],
          correct: 0,
          explanation: {
            en: 'The famous abolitionist medallion asked, "Am I not a man and a brother?"',
            no: 'Den berømte abolisjonistmedaljongen spurte: «Er jeg ikke en mann og en bror?»'
          },
          tags: ['symbols', 'movement']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which war in the US led to the end of slavery there?',
            no: 'Hvilken krig i USA førte til slutten på slaveriet der?'
          },
          answers: [
            { en: 'The Civil War', no: 'Borgerkrigen' },
            { en: 'The Revolutionary War', no: 'Uavhengighetskrigen' },
            { en: 'World War I', no: 'Første verdenskrig' },
            { en: 'The War of 1812', no: 'Krigen i 1812' }
          ],
          correct: 0,
          explanation: {
            en: 'The American Civil War (1861–1865) led to the abolition of slavery in the United States.',
            no: 'Den amerikanske borgerkrigen (1861–1865) førte til avskaffelsen av slaveriet i USA.'
          },
          tags: ['civil-war', 'usa']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Formerly enslaved people who spoke about their experiences helped do what?',
            no: 'Tidligere slavebundne mennesker som fortalte om sine erfaringer, bidro til å gjøre hva?'
          },
          answers: [
            { en: 'Build public support for abolition', no: 'Bygge offentlig støtte for avskaffelse' },
            { en: 'Promote the slave trade', no: 'Fremme slavehandelen' },
            { en: 'Hide slavery’s cruelty', no: 'Skjule slaveriets grusomhet' },
            { en: 'End all newspapers', no: 'Avskaffe alle aviser' }
          ],
          correct: 0,
          explanation: {
            en: 'First-hand testimony from formerly enslaved people swayed public opinion toward abolition.',
            no: 'Førstehånds vitnesbyrd fra tidligere slavebundne mennesker vippet opinionen mot avskaffelse.'
          },
          tags: ['testimony', 'movement']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which woman was both an abolitionist and a women’s rights advocate, known for the "Ain’t I a Woman?" speech?',
            no: 'Hvilken kvinne var både abolisjonist og forkjemper for kvinners rettigheter, kjent for talen «Ain’t I a Woman?»'
          },
          answers: [
            { en: 'Sojourner Truth', no: 'Sojourner Truth' },
            { en: 'Cleopatra', no: 'Kleopatra' },
            { en: 'Marie Curie', no: 'Marie Curie' },
            { en: 'Rosa Parks', no: 'Rosa Parks' }
          ],
          correct: 0,
          explanation: {
            en: 'Sojourner Truth was a formerly enslaved abolitionist and women’s rights advocate.',
            no: 'Sojourner Truth var en tidligere slavebundet abolisjonist og forkjemper for kvinners rettigheter.'
          },
          tags: ['sojourner-truth', 'people']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the Enlightenment influence the abolition movement?',
            no: 'Hvordan påvirket opplysningstiden abolisjonsbevegelsen?'
          },
          answers: [
            { en: 'Ideas of natural rights and equality challenged slavery’s legitimacy', no: 'Ideer om naturrettigheter og likhet utfordret slaveriets legitimitet' },
            { en: 'It encouraged more slavery', no: 'Den oppmuntret til mer slaveri' },
            { en: 'It had no effect on abolition', no: 'Den hadde ingen effekt på avskaffelsen' },
            { en: 'It banned all philosophy', no: 'Den forbød all filosofi' }
          ],
          correct: 0,
          explanation: {
            en: 'Enlightenment ideals of liberty, equality, and natural rights undermined justifications for slavery.',
            no: 'Opplysningstidens idealer om frihet, likhet og naturrettigheter undergravde rettferdiggjøringene av slaveriet.'
          },
          tags: ['enlightenment', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did religion contribute to abolitionism?',
            no: 'Hvordan bidro religion til abolisjonismen?'
          },
          answers: [
            { en: 'Many activists argued slavery was a sin against God', no: 'Mange aktivister hevdet at slaveriet var en synd mot Gud' },
            { en: 'All churches supported slavery', no: 'Alle kirker støttet slaveriet' },
            { en: 'Religion had no role', no: 'Religion hadde ingen rolle' },
            { en: 'It promoted the slave trade', no: 'Den fremmet slavehandelen' }
          ],
          correct: 0,
          explanation: {
            en: 'Religious groups like Quakers and evangelicals condemned slavery as morally and spiritually wrong.',
            no: 'Religiøse grupper som kvekere og evangelikale fordømte slaveriet som moralsk og åndelig galt.'
          },
          tags: ['religion', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did enslaved people themselves contribute to abolition?',
            no: 'Hvordan bidro slavebundne mennesker selv til avskaffelsen?'
          },
          answers: [
            { en: 'Through revolts, escapes, and testimony', no: 'Gjennom opprør, rømninger og vitnesbyrd' },
            { en: 'They played no part', no: 'De spilte ingen rolle' },
            { en: 'Only by buying freedom', no: 'Bare ved å kjøpe seg fri' },
            { en: 'By supporting slaveholders', no: 'Ved å støtte slaveeiere' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved people drove abolition through resistance, escapes, revolts, and powerful testimony.',
            no: 'Slavebundne mennesker drev avskaffelsen gjennom motstand, rømninger, opprør og kraftfulle vitnesbyrd.'
          },
          tags: ['agency', 'resistance']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did the Haitian Revolution matter for abolition movements?',
            no: 'Hvorfor var den haitiske revolusjonen viktig for abolisjonsbevegelsene?'
          },
          answers: [
            { en: 'It showed enslaved people could win their own freedom', no: 'Den viste at slavebundne mennesker kunne vinne sin egen frihet' },
            { en: 'It strengthened the slave trade', no: 'Den styrket slavehandelen' },
            { en: 'It had no influence', no: 'Den hadde ingen innflytelse' },
            { en: 'It ended all revolutions', no: 'Den avsluttet alle revolusjoner' }
          ],
          correct: 0,
          explanation: {
            en: 'Haiti’s successful revolt inspired abolitionists and frightened slaveholding powers.',
            no: 'Haitis vellykkede opprør inspirerte abolisjonister og skremte slaveholdende makter.'
          },
          tags: ['haiti', 'connections']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What economic argument did some abolitionists make?',
            no: 'Hvilket økonomisk argument fremmet enkelte abolisjonister?'
          },
          answers: [
            { en: 'That free labor could be more efficient than slavery', no: 'At fritt arbeid kunne være mer effektivt enn slaveri' },
            { en: 'That slavery had no costs', no: 'At slaveriet ikke hadde noen kostnader' },
            { en: 'That trade should stop entirely', no: 'At all handel skulle stanse helt' },
            { en: 'That money was unimportant', no: 'At penger var uviktige' }
          ],
          correct: 0,
          explanation: {
            en: 'Some abolitionists argued that free, paid labor would be more productive than coerced slavery.',
            no: 'Noen abolisjonister hevdet at fritt, betalt arbeid ville være mer produktivt enn tvunget slaveri.'
          },
          tags: ['economy', 'arguments']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did boycotts of slave-produced goods support abolition?',
            no: 'Hvordan støttet boikott av slaveproduserte varer avskaffelsen?'
          },
          answers: [
            { en: 'Consumers refused sugar and goods made by enslaved labor', no: 'Forbrukere avviste sukker og varer laget med slavearbeid' },
            { en: 'They bought more slave goods', no: 'De kjøpte flere slavevarer' },
            { en: 'Boycotts were illegal', no: 'Boikotter var ulovlige' },
            { en: 'They had no effect', no: 'De hadde ingen effekt' }
          ],
          correct: 0,
          explanation: {
            en: 'Boycotts of slave-grown sugar and goods pressured producers and raised public awareness.',
            no: 'Boikott av slavedyrket sukker og varer la press på produsenter og økte folkelig bevissthet.'
          },
          tags: ['boycott', 'methods']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did abolitionists use the testimony of formerly enslaved people?',
            no: 'Hvordan brukte abolisjonister vitnesbyrd fra tidligere slavebundne mennesker?'
          },
          answers: [
            { en: 'As powerful firsthand evidence of slavery’s cruelty', no: 'Som kraftfulle førstehånds bevis på slaveriets grusomhet' },
            { en: 'They ignored such testimony', no: 'De ignorerte slike vitnesbyrd' },
            { en: 'Only to defend slavery', no: 'Bare for å forsvare slaveriet' },
            { en: 'To promote the slave trade', no: 'For å fremme slavehandelen' }
          ],
          correct: 0,
          explanation: {
            en: 'First-person accounts by people like Douglass gave abolitionism moral force and credibility.',
            no: 'Førstehånds beretninger fra folk som Douglass ga abolisjonismen moralsk kraft og troverdighet.'
          },
          tags: ['testimony', 'methods']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did Britain abolish the slave trade before slavery itself?',
            no: 'Hvorfor avskaffet Storbritannia slavehandelen før selve slaveriet?'
          },
          answers: [
            { en: 'Ending the trade was politically easier as a first step', no: 'Å avslutte handelen var politisk lettere som et første skritt' },
            { en: 'Slavery had already ended', no: 'Slaveriet var allerede avsluttet' },
            { en: 'There was no slavery in Britain’s colonies', no: 'Det fantes ikke slaveri i Storbritannias kolonier' },
            { en: 'The trade was never legal', no: 'Handelen var aldri lovlig' }
          ],
          correct: 0,
          explanation: {
            en: 'Abolishing the trade in 1807 was a politically achievable first step before ending slavery in 1833.',
            no: 'Å avskaffe handelen i 1807 var et politisk gjennomførbart første skritt før slaveriet ble avskaffet i 1833.'
          },
          tags: ['britain', 'stages']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the abolition movement connect to early women’s rights activism?',
            no: 'Hvordan var abolisjonsbevegelsen knyttet til tidlig kvinnerettighetsaktivisme?'
          },
          answers: [
            { en: 'Many women abolitionists also campaigned for their own rights', no: 'Mange kvinnelige abolisjonister kjempet også for sine egne rettigheter' },
            { en: 'Women were banned from the movement', no: 'Kvinner var utestengt fra bevegelsen' },
            { en: 'There was no connection', no: 'Det fantes ingen forbindelse' },
            { en: 'It opposed women’s rights', no: 'Den motarbeidet kvinners rettigheter' }
          ],
          correct: 0,
          explanation: {
            en: 'Women active in abolition often went on to lead the early women’s rights movement.',
            no: 'Kvinner som var aktive i abolisjonsbevegelsen, gikk ofte videre til å lede den tidlige kvinnerettighetsbevegelsen.'
          },
          tags: ['womens-rights', 'connections']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did escaped slaves’ stories reach wide audiences?',
            no: 'Hvordan nådde rømte slavers historier et bredt publikum?'
          },
          answers: [
            { en: 'Through published narratives and speaking tours', no: 'Gjennom publiserte beretninger og foredragsturneer' },
            { en: 'Only through secret letters', no: 'Bare gjennom hemmelige brev' },
            { en: 'They were never shared', no: 'De ble aldri delt' },
            { en: 'Through television', no: 'Gjennom fjernsyn' }
          ],
          correct: 0,
          explanation: {
            en: 'Published slave narratives and lecture tours spread these stories widely and built support.',
            no: 'Publiserte slaveberetninger og foredragsturneer spredte disse historiene vidt og bygde støtte.'
          },
          tags: ['narratives', 'methods']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was a common argument made by defenders of slavery against abolition?',
            no: 'Hvilket argument fremmet forsvarere av slaveriet ofte mot avskaffelse?'
          },
          answers: [
            { en: 'That the economy depended on enslaved labor', no: 'At økonomien var avhengig av slavearbeid' },
            { en: 'That slavery was unprofitable', no: 'At slaveriet var ulønnsomt' },
            { en: 'That enslaved people should vote', no: 'At slavebundne mennesker burde stemme' },
            { en: 'That abolition was easy', no: 'At avskaffelse var enkelt' }
          ],
          correct: 0,
          explanation: {
            en: 'Pro-slavery advocates claimed plantation economies would collapse without enslaved labor.',
            no: 'Slaveritilhengere hevdet at plantasjeøkonomiene ville kollapse uten slavearbeid.'
          },
          tags: ['opposition', 'arguments']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians debate the relative importance of moral versus economic causes of abolition?',
            no: 'Hvorfor diskuterer historikere den relative betydningen av moralske kontra økonomiske årsaker til avskaffelsen?'
          },
          answers: [
            { en: 'Some stress moral campaigns; others emphasize shifting economic interests', no: 'Noen vektlegger moralske kampanjer; andre understreker skiftende økonomiske interesser' },
            { en: 'Everyone agrees on a single cause', no: 'Alle er enige om én enkelt årsak' },
            { en: 'Abolition had no causes', no: 'Avskaffelsen hadde ingen årsaker' },
            { en: 'There was no debate', no: 'Det fantes ingen debatt' }
          ],
          correct: 0,
          explanation: {
            en: 'Scholars debate whether moral activism or changing economic interests mattered more in ending slavery.',
            no: 'Forskere diskuterer om moralsk aktivisme eller skiftende økonomiske interesser betydde mest for å avslutte slaveriet.'
          },
          tags: ['debate', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did formerly enslaved people’s activism challenge the idea that abolition was a "gift" from white reformers?',
            no: 'Hvordan utfordret tidligere slavebundne menneskers aktivisme ideen om at avskaffelsen var en «gave» fra hvite reformatorer?'
          },
          answers: [
            { en: 'It showed Black activists and rebels were central to ending slavery', no: 'Den viste at svarte aktivister og opprørere var sentrale i å avslutte slaveriet' },
            { en: 'It proved they did nothing', no: 'Den beviste at de ikke gjorde noe' },
            { en: 'It supported the gift idea', no: 'Den støttet gaveideen' },
            { en: 'It had no effect on the narrative', no: 'Den hadde ingen effekt på fortellingen' }
          ],
          correct: 0,
          explanation: {
            en: 'Recent scholarship highlights how Black activism, resistance, and revolt were crucial to abolition, not just white reformers.',
            no: 'Nyere forskning fremhever hvordan svart aktivisme, motstand og opprør var avgjørende for avskaffelsen, ikke bare hvite reformatorer.'
          },
          tags: ['agency', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did abolition in one country pressure others to follow?',
            no: 'Hvordan la avskaffelse i ett land press på andre til å følge etter?'
          },
          answers: [
            { en: 'Diplomatic, naval, and moral pressure spread abolition internationally', no: 'Diplomatisk, marinemilitært og moralsk press spredte avskaffelsen internasjonalt' },
            { en: 'Each country acted in total isolation', no: 'Hvert land handlet i full isolasjon' },
            { en: 'Abolition never spread', no: 'Avskaffelsen spredte seg aldri' },
            { en: 'It strengthened the slave trade', no: 'Den styrket slavehandelen' }
          ],
          correct: 0,
          explanation: {
            en: 'After abolishing the trade, Britain used naval patrols and diplomacy to press other nations to end it too.',
            no: 'Etter å ha avskaffet handelen brukte Storbritannia marinepatruljer og diplomati for å presse andre nasjoner til også å avslutte den.'
          },
          tags: ['international', 'spread']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why was compensation paid to slaveholders, not the enslaved, after British abolition?',
            no: 'Hvorfor ble erstatning utbetalt til slaveeiere, ikke til de slavebundne, etter britisk avskaffelse?'
          },
          answers: [
            { en: 'Enslaved people were legally treated as property whose owners were compensated', no: 'Slavebundne mennesker ble juridisk behandlet som eiendom hvis eiere ble kompensert' },
            { en: 'The enslaved received all the money', no: 'De slavebundne fikk alle pengene' },
            { en: 'No money was ever paid', no: 'Ingen penger ble noensinne utbetalt' },
            { en: 'Slaveholders refused payment', no: 'Slaveeiere avslo betaling' }
          ],
          correct: 0,
          explanation: {
            en: 'Because law treated enslaved people as property, Britain paid slaveholders compensation for their "loss."',
            no: 'Fordi loven behandlet slavebundne mennesker som eiendom, betalte Storbritannia slaveeiere erstatning for deres «tap».'
          },
          tags: ['compensation', 'injustice']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did print culture transform the abolition movement?',
            no: 'Hvordan forandret trykkekultur abolisjonsbevegelsen?'
          },
          answers: [
            { en: 'Cheap pamphlets, images, and newspapers built mass public opinion', no: 'Billige pamfletter, bilder og aviser bygde en bred opinion' },
            { en: 'It silenced all debate', no: 'Den kvelte all debatt' },
            { en: 'It had no effect', no: 'Den hadde ingen effekt' },
            { en: 'It only reached slaveholders', no: 'Den nådde bare slaveeiere' }
          ],
          correct: 0,
          explanation: {
            en: 'Mass-produced print spread abolitionist arguments and imagery to a wide public.',
            no: 'Masseprodusert trykk spredte abolisjonistiske argumenter og bilder til et bredt publikum.'
          },
          tags: ['print', 'methods']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did abolition not immediately end racial injustice?',
            no: 'Hvorfor avsluttet ikke avskaffelsen umiddelbart rasemessig urettferdighet?'
          },
          answers: [
            { en: 'Racism, segregation, and economic exclusion persisted after legal freedom', no: 'Rasisme, segregering og økonomisk utestengning vedvarte etter juridisk frihet' },
            { en: 'Racism ended instantly', no: 'Rasismen tok slutt øyeblikkelig' },
            { en: 'Everyone became equal at once', no: 'Alle ble likestilte med en gang' },
            { en: 'There was no racism to begin with', no: 'Det fantes ingen rasisme til å begynne med' }
          ],
          correct: 0,
          explanation: {
            en: 'Legal abolition left intact deep racism, segregation, and economic barriers that endured for generations.',
            no: 'Juridisk avskaffelse lot dyp rasisme, segregering og økonomiske barrierer bestå i generasjoner.'
          },
          tags: ['aftermath', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the abolition movement become one of the first international human rights campaigns?',
            no: 'Hvordan ble abolisjonsbevegelsen en av de første internasjonale menneskerettighetskampanjene?'
          },
          answers: [
            { en: 'It mobilized mass petitions and cross-border activism around a moral cause', no: 'Den mobiliserte masseunderskrifter og grenseoverskridende aktivisme rundt en moralsk sak' },
            { en: 'It stayed within one town', no: 'Den holdt seg innenfor én by' },
            { en: 'It avoided public involvement', no: 'Den unngikk offentlig deltakelse' },
            { en: 'It had no organization', no: 'Den hadde ingen organisering' }
          ],
          correct: 0,
          explanation: {
            en: 'Abolitionism pioneered mass petitions, boycotts, and transnational organizing for a moral cause.',
            no: 'Abolisjonismen var banebrytende med masseunderskrifter, boikott og tverrnasjonal organisering for en moralsk sak.'
          },
          tags: ['human-rights', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did the timing of abolition vary so much between countries?',
            no: 'Hvorfor varierte tidspunktet for avskaffelse så mye mellom land?'
          },
          answers: [
            { en: 'Economic reliance, politics, and activism differed in each society', no: 'Økonomisk avhengighet, politikk og aktivisme var ulik i hvert samfunn' },
            { en: 'All countries abolished it the same year', no: 'Alle land avskaffet det samme år' },
            { en: 'Timing was random', no: 'Tidspunktet var tilfeldig' },
            { en: 'No country ever abolished it', no: 'Ingen land avskaffet det noensinne' }
          ],
          correct: 0,
          explanation: {
            en: 'Differing economic dependence on slavery, political systems, and activism led to varied abolition dates.',
            no: 'Ulik økonomisk avhengighet av slaveri, ulike politiske systemer og ulik aktivisme førte til varierende avskaffelsesdatoer.'
          },
          tags: ['timing', 'comparison']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do historians view the role of slave resistance in forcing abolition?',
            no: 'Hvordan ser historikere på slavemotstandens rolle i å fremtvinge avskaffelse?'
          },
          answers: [
            { en: 'Ongoing revolts and escapes made slavery costly and harder to sustain', no: 'Vedvarende opprør og rømninger gjorde slaveriet kostbart og vanskeligere å opprettholde' },
            { en: 'Resistance had no influence', no: 'Motstand hadde ingen innflytelse' },
            { en: 'It strengthened slavery', no: 'Den styrket slaveriet' },
            { en: 'It was entirely invented', no: 'Den var fullstendig oppdiktet' }
          ],
          correct: 0,
          explanation: {
            en: 'Persistent resistance raised the costs and risks of slavery, contributing to pressure for abolition.',
            no: 'Vedvarende motstand økte kostnadene og risikoen ved slaveriet og bidro til presset for avskaffelse.'
          },
          tags: ['resistance', 'historiography']
        }
      ]
    },
    {
      slug: 'long-term-effects',
      name: { en: 'Long-term effects', no: 'Langsiktige virkninger' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'The descendants of enslaved Africans form large communities in which region today?',
            no: 'Etterkommerne av slavebundne afrikanere utgjør store samfunn i hvilken region i dag?'
          },
          answers: [
            { en: 'The Americas', no: 'Amerika' },
            { en: 'Antarctica', no: 'Antarktis' },
            { en: 'Central Asia', no: 'Sentral-Asia' },
            { en: 'Scandinavia', no: 'Skandinavia' }
          ],
          correct: 0,
          explanation: {
            en: 'Large communities of African descent live throughout the Americas as a result of the slave trade.',
            no: 'Store samfunn av afrikansk avstamning lever over hele Amerika som følge av slavehandelen.'
          },
          tags: ['diaspora', 'demographics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the spread of African peoples and culture worldwide called?',
            no: 'Hva kalles spredningen av afrikanske folk og kultur over hele verden?'
          },
          answers: [
            { en: 'The African diaspora', no: 'Den afrikanske diasporaen' },
            { en: 'The Renaissance', no: 'Renessansen' },
            { en: 'The Reformation', no: 'Reformasjonen' },
            { en: 'The Enlightenment', no: 'Opplysningstiden' }
          ],
          correct: 0,
          explanation: {
            en: 'The African diaspora refers to communities of African descent spread around the world.',
            no: 'Den afrikanske diasporaen viser til samfunn av afrikansk avstamning spredt over hele verden.'
          },
          tags: ['diaspora', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which music genres have roots in the experiences of enslaved Africans and their descendants?',
            no: 'Hvilke musikksjangre har røtter i erfaringene til slavebundne afrikanere og deres etterkommere?'
          },
          answers: [
            { en: 'Blues and jazz', no: 'Blues og jazz' },
            { en: 'Classical opera', no: 'Klassisk opera' },
            { en: 'Medieval chant', no: 'Middelaldersang' },
            { en: 'Baroque concertos', no: 'Barokkonserter' }
          ],
          correct: 0,
          explanation: {
            en: 'Blues, jazz, and many later genres grew from African American musical traditions.',
            no: 'Blues, jazz og mange senere sjangre vokste fram fra afroamerikanske musikktradisjoner.'
          },
          tags: ['music', 'culture']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The slave trade contributed to lasting inequality based on what?',
            no: 'Slavehandelen bidro til varig ulikhet basert på hva?'
          },
          answers: [
            { en: 'Race', no: 'Rase' },
            { en: 'Height', no: 'Høyde' },
            { en: 'Eye color', no: 'Øyenfarge' },
            { en: 'Handedness', no: 'Hånddominans' }
          ],
          correct: 0,
          explanation: {
            en: 'The slave trade helped entrench racial inequality that persists in many societies.',
            no: 'Slavehandelen bidro til å festne rasemessig ulikhet som vedvarer i mange samfunn.'
          },
          tags: ['race', 'inequality']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which continent was economically weakened by the loss of millions of people?',
            no: 'Hvilket kontinent ble økonomisk svekket av tapet av millioner mennesker?'
          },
          answers: [
            { en: 'Africa', no: 'Afrika' },
            { en: 'Europe', no: 'Europa' },
            { en: 'Australia', no: 'Australia' },
            { en: 'North America', no: 'Nord-Amerika' }
          ],
          correct: 0,
          explanation: {
            en: 'Africa lost millions of people, which disrupted and weakened many of its societies.',
            no: 'Afrika mistet millioner mennesker, noe som forstyrret og svekket mange av samfunnene der.'
          },
          tags: ['africa', 'consequences']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the modern term for acknowledging and repairing past wrongs of slavery?',
            no: 'Hva er det moderne begrepet for å erkjenne og bøte på fortidens urett ved slaveriet?'
          },
          answers: [
            { en: 'Reparations', no: 'Reparasjoner (oppreisning)' },
            { en: 'Taxation', no: 'Beskatning' },
            { en: 'Colonization', no: 'Kolonisering' },
            { en: 'Immigration', no: 'Innvandring' }
          ],
          correct: 0,
          explanation: {
            en: 'Reparations refers to efforts to acknowledge and compensate for the harms of slavery.',
            no: 'Reparasjoner viser til tiltak for å erkjenne og kompensere for skadene fra slaveriet.'
          },
          tags: ['reparations', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Many foods in the Americas were influenced by traditions from where?',
            no: 'Mange matretter i Amerika ble påvirket av tradisjoner fra hvor?'
          },
          answers: [
            { en: 'Africa', no: 'Afrika' },
            { en: 'Antarctica', no: 'Antarktis' },
            { en: 'The Arctic', no: 'Arktis' },
            { en: 'Outer space', no: 'Verdensrommet' }
          ],
          correct: 0,
          explanation: {
            en: 'African culinary traditions deeply shaped the cuisines of the Americas.',
            no: 'Afrikanske mattradisjoner formet matkulturene i Amerika dypt.'
          },
          tags: ['food', 'culture']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The legacy of slavery is connected to later struggles for what?',
            no: 'Arven etter slaveriet er knyttet til senere kamper for hva?'
          },
          answers: [
            { en: 'Civil rights and equality', no: 'Borgerrettigheter og likestilling' },
            { en: 'Larger armies', no: 'Større hærer' },
            { en: 'More colonies', no: 'Flere kolonier' },
            { en: 'Faster ships', no: 'Raskere skip' }
          ],
          correct: 0,
          explanation: {
            en: 'The injustices of slavery fueled later civil rights and equality movements.',
            no: 'Urettferdighetene ved slaveriet næret senere borgerrettighets- og likestillingsbevegelser.'
          },
          tags: ['civil-rights', 'connections']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Creole and other blended languages emerged partly from what?',
            no: 'Kreol- og andre blandingsspråk oppstod delvis fra hva?'
          },
          answers: [
            { en: 'Contact between African and European languages', no: 'Kontakt mellom afrikanske og europeiske språk' },
            { en: 'Pure Latin only', no: 'Bare ren latin' },
            { en: 'Ancient Greek alone', no: 'Bare gammelgresk' },
            { en: 'No languages at all', no: 'Ingen språk i det hele tatt' }
          ],
          correct: 0,
          explanation: {
            en: 'Creole languages formed from the mixing of African and European languages under slavery.',
            no: 'Kreolspråk oppstod fra blandingen av afrikanske og europeiske språk under slaveriet.'
          },
          tags: ['language', 'creole']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which holiday in the US celebrates the end of slavery?',
            no: 'Hvilken høytid i USA feirer slutten på slaveriet?'
          },
          answers: [
            { en: 'Juneteenth', no: 'Juneteenth' },
            { en: 'Thanksgiving', no: 'Thanksgiving' },
            { en: 'Halloween', no: 'Halloween' },
            { en: 'Labor Day', no: 'Arbeidernes dag' }
          ],
          correct: 0,
          explanation: {
            en: 'Juneteenth commemorates the emancipation of enslaved people in the United States.',
            no: 'Juneteenth minnes frigjøringen av slavebundne mennesker i USA.'
          },
          tags: ['juneteenth', 'memory']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Slavery’s legacy includes economic gaps between which groups in many countries?',
            no: 'Arven etter slaveriet omfatter økonomiske forskjeller mellom hvilke grupper i mange land?'
          },
          answers: [
            { en: 'Different racial groups', no: 'Ulike rasegrupper' },
            { en: 'Left- and right-handed people', no: 'Venstre- og høyrehendte' },
            { en: 'Tall and short people', no: 'Høye og lave mennesker' },
            { en: 'City and country names', no: 'By- og landnavn' }
          ],
          correct: 0,
          explanation: {
            en: 'Slavery contributed to lasting economic disparities between racial groups.',
            no: 'Slaveriet bidro til varige økonomiske forskjeller mellom rasegrupper.'
          },
          tags: ['inequality', 'economy']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Many religions in the Americas blend Christian and African elements. This is called what?',
            no: 'Mange religioner i Amerika blander kristne og afrikanske elementer. Hva kalles dette?'
          },
          answers: [
            { en: 'Syncretism', no: 'Synkretisme' },
            { en: 'Colonialism', no: 'Kolonialisme' },
            { en: 'Capitalism', no: 'Kapitalisme' },
            { en: 'Nationalism', no: 'Nasjonalisme' }
          ],
          correct: 0,
          explanation: {
            en: 'Syncretism describes the blending of African and Christian traditions in faiths like Vodou and Candomblé.',
            no: 'Synkretisme beskriver blandingen av afrikanske og kristne tradisjoner i religioner som vodou og candomblé.'
          },
          tags: ['religion', 'syncretism']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Studying the slave trade helps us understand the roots of what modern issue?',
            no: 'Å studere slavehandelen hjelper oss å forstå røttene til hvilket moderne problem?'
          },
          answers: [
            { en: 'Racial inequality', no: 'Rasemessig ulikhet' },
            { en: 'Weather forecasting', no: 'Værvarsling' },
            { en: 'Space travel', no: 'Romfart' },
            { en: 'Computer programming', no: 'Dataprogrammering' }
          ],
          correct: 0,
          explanation: {
            en: 'Understanding the slave trade illuminates the historical roots of modern racial inequality.',
            no: 'Å forstå slavehandelen belyser de historiske røttene til moderne rasemessig ulikhet.'
          },
          tags: ['relevance', 'inequality']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Africa’s borders and instability today are partly linked to what historical force?',
            no: 'Afrikas grenser og ustabilitet i dag er delvis knyttet til hvilken historisk kraft?'
          },
          answers: [
            { en: 'The slave trade and colonialism', no: 'Slavehandelen og kolonialismen' },
            { en: 'The Renaissance', no: 'Renessansen' },
            { en: 'The Ice Age', no: 'Istiden' },
            { en: 'The printing press', no: 'Trykkpressen' }
          ],
          correct: 0,
          explanation: {
            en: 'The slave trade and later colonialism deeply shaped Africa’s development and borders.',
            no: 'Slavehandelen og senere kolonialisme formet Afrikas utvikling og grenser dypt.'
          },
          tags: ['africa', 'long-term']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Memorials and museums about slavery help societies do what?',
            no: 'Minnesmerker og museer om slaveriet hjelper samfunn med å gjøre hva?'
          },
          answers: [
            { en: 'Remember and learn from the past', no: 'Huske og lære av fortiden' },
            { en: 'Forget history', no: 'Glemme historien' },
            { en: 'Restart the slave trade', no: 'Starte slavehandelen på nytt' },
            { en: 'Ban all education', no: 'Forby all utdanning' }
          ],
          correct: 0,
          explanation: {
            en: 'Memorials and museums help societies remember slavery and learn from its history.',
            no: 'Minnesmerker og museer hjelper samfunn med å huske slaveriet og lære av historien.'
          },
          tags: ['memory', 'education']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the slave trade contribute to the wealth gap between Europe and Africa?',
            no: 'Hvordan bidro slavehandelen til velstandsgapet mellom Europa og Afrika?'
          },
          answers: [
            { en: 'It enriched Europe while draining and destabilizing Africa', no: 'Den beriket Europa mens den tappet og destabiliserte Afrika' },
            { en: 'It enriched Africa and harmed Europe', no: 'Den beriket Afrika og skadet Europa' },
            { en: 'It had no economic effect', no: 'Den hadde ingen økonomisk effekt' },
            { en: 'It made both equally wealthy', no: 'Den gjorde begge like rike' }
          ],
          correct: 0,
          explanation: {
            en: 'Profits flowed to Europe while Africa lost population and suffered disruption, widening inequalities.',
            no: 'Profitt strømmet til Europa mens Afrika mistet befolkning og led under oppløsning, noe som økte ulikhetene.'
          },
          tags: ['economy', 'inequality']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the slave trade shape the cultures of the Americas?',
            no: 'Hvordan formet slavehandelen kulturene i Amerika?'
          },
          answers: [
            { en: 'African influences shaped music, food, religion, and language', no: 'Afrikanske påvirkninger formet musikk, mat, religion og språk' },
            { en: 'It erased all African culture', no: 'Den utslettet all afrikansk kultur' },
            { en: 'It had no cultural impact', no: 'Den hadde ingen kulturell innvirkning' },
            { en: 'It only affected Europe', no: 'Den påvirket bare Europa' }
          ],
          correct: 0,
          explanation: {
            en: 'African heritage profoundly shaped American music, cuisine, religion, and speech.',
            no: 'Afrikansk arv formet amerikansk musikk, mat, religion og tale dypt.'
          },
          tags: ['culture', 'long-term']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did segregation and discrimination follow the end of slavery in many places?',
            no: 'Hvorfor fulgte segregering og diskriminering etter slutten på slaveriet mange steder?'
          },
          answers: [
            { en: 'Racial hierarchies created under slavery persisted', no: 'Rasehierarkier skapt under slaveriet vedvarte' },
            { en: 'Everyone became equal at once', no: 'Alle ble likestilte med en gang' },
            { en: 'Slavery left no legacy', no: 'Slaveriet etterlot ingen arv' },
            { en: 'Discrimination was illegal', no: 'Diskriminering var ulovlig' }
          ],
          correct: 0,
          explanation: {
            en: 'The racial ideologies built to justify slavery lived on in segregation and discrimination.',
            no: 'Raseideologiene som ble bygd for å rettferdiggjøre slaveriet, levde videre i segregering og diskriminering.'
          },
          tags: ['segregation', 'race']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How is the slave trade connected to modern debates about reparations?',
            no: 'Hvordan er slavehandelen knyttet til moderne debatter om oppreisning?'
          },
          answers: [
            { en: 'Some argue descendants and nations deserve compensation for lasting harm', no: 'Noen hevder at etterkommere og nasjoner fortjener kompensasjon for varig skade' },
            { en: 'No one discusses reparations', no: 'Ingen diskuterer oppreisning' },
            { en: 'It is unrelated to slavery', no: 'Den er uten tilknytning til slaveriet' },
            { en: 'Reparations were already fully paid', no: 'Oppreisning er allerede fullt utbetalt' }
          ],
          correct: 0,
          explanation: {
            en: 'Debates over reparations stem from the lasting economic and social harms of slavery.',
            no: 'Debatter om oppreisning stammer fra de varige økonomiske og sosiale skadene fra slaveriet.'
          },
          tags: ['reparations', 'modern']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the slave trade affect West African political structures?',
            no: 'Hvordan påvirket slavehandelen vestafrikanske politiske strukturer?'
          },
          answers: [
            { en: 'It strengthened some states based on slaving and weakened others', no: 'Den styrket enkelte stater basert på slavehandel og svekket andre' },
            { en: 'It had no political effect', no: 'Den hadde ingen politisk effekt' },
            { en: 'It unified all of Africa', no: 'Den forente hele Afrika' },
            { en: 'It abolished all kingdoms', no: 'Den avskaffet alle kongeriker' }
          ],
          correct: 0,
          explanation: {
            en: 'Some African states grew powerful through the trade while raids and warfare destabilized others.',
            no: 'Enkelte afrikanske stater ble mektige gjennom handelen, mens razziaer og krig destabiliserte andre.'
          },
          tags: ['africa', 'politics']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did African religions survive in the Americas?',
            no: 'Hvordan overlevde afrikanske religioner i Amerika?'
          },
          answers: [
            { en: 'They blended with Christianity into new faiths', no: 'De blandet seg med kristendommen til nye religioner' },
            { en: 'They disappeared completely', no: 'De forsvant fullstendig' },
            { en: 'They replaced all other religions', no: 'De erstattet alle andre religioner' },
            { en: 'They were never practiced', no: 'De ble aldri praktisert' }
          ],
          correct: 0,
          explanation: {
            en: 'African beliefs blended with Christianity to form religions like Vodou, Santería, and Candomblé.',
            no: 'Afrikanske trosforestillinger blandet seg med kristendommen og dannet religioner som vodou, santería og candomblé.'
          },
          tags: ['religion', 'syncretism']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the slave trade influence the global economy?',
            no: 'Hvordan påvirket slavehandelen den globale økonomien?'
          },
          answers: [
            { en: 'It linked continents in a system producing valuable cash crops', no: 'Den knyttet kontinenter sammen i et system som produserte verdifulle salgsavlinger' },
            { en: 'It isolated all economies', no: 'Den isolerte alle økonomier' },
            { en: 'It had no economic role', no: 'Den hadde ingen økonomisk rolle' },
            { en: 'It ended global trade', no: 'Den avsluttet global handel' }
          ],
          correct: 0,
          explanation: {
            en: 'The slave trade tied global markets together around plantation crops like sugar, cotton, and tobacco.',
            no: 'Slavehandelen knyttet globale markeder sammen rundt plantasjeavlinger som sukker, bomull og tobakk.'
          },
          tags: ['economy', 'globalization']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why do many countries now hold days of remembrance for the slave trade?',
            no: 'Hvorfor holder mange land i dag minnedager for slavehandelen?'
          },
          answers: [
            { en: 'To honor victims and confront the history honestly', no: 'For å hedre ofre og møte historien ærlig' },
            { en: 'To celebrate the slave trade', no: 'For å feire slavehandelen' },
            { en: 'To forget the past', no: 'For å glemme fortiden' },
            { en: 'To promote slavery', no: 'For å fremme slaveri' }
          ],
          correct: 0,
          explanation: {
            en: 'Remembrance days honor the victims and encourage societies to confront this history.',
            no: 'Minnedager hedrer ofrene og oppmuntrer samfunn til å møte denne historien.'
          },
          tags: ['memory', 'modern']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the descendants of enslaved people influence global culture?',
            no: 'Hvordan påvirket etterkommerne av slavebundne mennesker den globale kulturen?'
          },
          answers: [
            { en: 'Through music, art, sport, literature, and politics worldwide', no: 'Gjennom musikk, kunst, idrett, litteratur og politikk over hele verden' },
            { en: 'They had no global influence', no: 'De hadde ingen global innflytelse' },
            { en: 'Only in one country', no: 'Bare i ett land' },
            { en: 'By rejecting all culture', no: 'Ved å forkaste all kultur' }
          ],
          correct: 0,
          explanation: {
            en: 'African-descended people shaped global music, art, sport, literature, and political movements.',
            no: 'Mennesker av afrikansk avstamning formet global musikk, kunst, idrett, litteratur og politiske bevegelser.'
          },
          tags: ['culture', 'global']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What connection exists between slavery and the US Civil War?',
            no: 'Hvilken sammenheng finnes mellom slaveriet og den amerikanske borgerkrigen?'
          },
          answers: [
            { en: 'Disputes over slavery were a central cause of the war', no: 'Strider om slaveriet var en sentral årsak til krigen' },
            { en: 'Slavery was unrelated to the war', no: 'Slaveriet var uten tilknytning til krigen' },
            { en: 'The war happened before slavery', no: 'Krigen skjedde før slaveriet' },
            { en: 'Slavery ended the war instantly', no: 'Slaveriet avsluttet krigen øyeblikkelig' }
          ],
          correct: 0,
          explanation: {
            en: 'Conflict over slavery’s expansion was a central cause of the American Civil War.',
            no: 'Konflikten om slaveriets utvidelse var en sentral årsak til den amerikanske borgerkrigen.'
          },
          tags: ['civil-war', 'connections']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did slavery affect family structures among descendants over generations?',
            no: 'Hvordan påvirket slaveriet familiestrukturer blant etterkommere gjennom generasjoner?'
          },
          answers: [
            { en: 'Forced separations left long-lasting social effects', no: 'Tvungne adskillelser etterlot langvarige sosiale virkninger' },
            { en: 'It had no effect on families', no: 'Det hadde ingen effekt på familier' },
            { en: 'It strengthened all families equally', no: 'Det styrket alle familier likt' },
            { en: 'It created new royal dynasties', no: 'Det skapte nye kongelige dynastier' }
          ],
          correct: 0,
          explanation: {
            en: 'The forced separation of families under slavery had social effects felt across generations.',
            no: 'Den tvungne adskillelsen av familier under slaveriet hadde sosiale virkninger som merkes gjennom generasjoner.'
          },
          tags: ['family', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do scholars debate the slave trade’s long-term economic impact on Africa?',
            no: 'Hvorfor diskuterer forskere slavehandelens langsiktige økonomiske virkning på Afrika?'
          },
          answers: [
            { en: 'They assess how depopulation and instability affected later development', no: 'De vurderer hvordan avfolkning og ustabilitet påvirket senere utvikling' },
            { en: 'They deny Africa was involved', no: 'De benekter at Afrika var involvert' },
            { en: 'They claim it helped Africa grow', no: 'De hevder den hjalp Afrika å vokse' },
            { en: 'They believe it had no effect', no: 'De mener den ikke hadde noen effekt' }
          ],
          correct: 0,
          explanation: {
            en: 'Historians examine how population loss and disruption shaped Africa’s long-term economic trajectory.',
            no: 'Historikere undersøker hvordan befolkningstap og oppløsning formet Afrikas langsiktige økonomiske utvikling.'
          },
          tags: ['africa', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does the concept of "structural racism" connect to slavery’s legacy?',
            no: 'Hvordan henger begrepet «strukturell rasisme» sammen med arven etter slaveriet?'
          },
          answers: [
            { en: 'Systems built during slavery embedded inequality into institutions', no: 'Systemer bygd under slaveriet festnet ulikhet i institusjoner' },
            { en: 'Racism ended with slavery', no: 'Rasismen tok slutt med slaveriet' },
            { en: 'It has no link to history', no: 'Det har ingen tilknytning til historien' },
            { en: 'It only concerns individuals', no: 'Det gjelder bare enkeltpersoner' }
          ],
          correct: 0,
          explanation: {
            en: 'Structural racism describes how inequalities rooted in slavery became embedded in laws and institutions.',
            no: 'Strukturell rasisme beskriver hvordan ulikheter forankret i slaveriet ble innbakt i lover og institusjoner.'
          },
          tags: ['structural-racism', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the "Black Atlantic" a useful concept for historians?',
            no: 'Hvorfor er «Det svarte Atlanterhav» et nyttig begrep for historikere?'
          },
          answers: [
            { en: 'It frames a shared transnational culture created by the African diaspora', no: 'Det rammer inn en felles tverrnasjonal kultur skapt av den afrikanske diasporaen' },
            { en: 'It describes only one country', no: 'Det beskriver bare ett land' },
            { en: 'It ignores African influence', no: 'Det overser afrikansk påvirkning' },
            { en: 'It refers to ocean temperatures', no: 'Det viser til havtemperaturer' }
          ],
          correct: 0,
          explanation: {
            en: 'The "Black Atlantic" highlights a shared diasporic culture spanning Africa, the Americas, and Europe.',
            no: '«Det svarte Atlanterhav» fremhever en felles diasporakultur som spenner over Afrika, Amerika og Europa.'
          },
          tags: ['black-atlantic', 'culture']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do debates over memorializing slavery reflect present-day politics?',
            no: 'Hvordan gjenspeiler debatter om å minnes slaveriet dagens politikk?'
          },
          answers: [
            { en: 'Disputes over monuments and curricula reveal ongoing struggles over memory', no: 'Strider om monumenter og pensum avslører pågående kamper om minne' },
            { en: 'There are no such debates', no: 'Det finnes ingen slike debatter' },
            { en: 'Everyone agrees fully', no: 'Alle er helt enige' },
            { en: 'Memory has no political role', no: 'Minne har ingen politisk rolle' }
          ],
          correct: 0,
          explanation: {
            en: 'Conflicts over monuments, holidays, and school curricula show that slavery’s memory remains politically charged.',
            no: 'Konflikter om monumenter, høytider og skolepensum viser at minnet om slaveriet fortsatt er politisk ladet.'
          },
          tags: ['memory', 'politics']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the racial wealth gap often traced back to slavery and its aftermath?',
            no: 'Hvorfor spores det rasemessige formuesgapet ofte tilbake til slaveriet og dets ettervirkninger?'
          },
          answers: [
            { en: 'Generations were denied wages, land, and inherited wealth', no: 'Generasjoner ble nektet lønn, land og arvet formue' },
            { en: 'It has no historical roots', no: 'Det har ingen historiske røtter' },
            { en: 'Wealth was shared equally', no: 'Formue ble delt likt' },
            { en: 'Slavery created equality', no: 'Slaveriet skapte likhet' }
          ],
          correct: 0,
          explanation: {
            en: 'Enslaved people and their descendants were long denied pay, property, and inheritance, widening the wealth gap.',
            no: 'Slavebundne mennesker og etterkommerne deres ble lenge nektet lønn, eiendom og arv, noe som økte formuesgapet.'
          },
          tags: ['wealth-gap', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the slave trade contribute to early globalization?',
            no: 'Hvordan bidro slavehandelen til tidlig globalisering?'
          },
          answers: [
            { en: 'It integrated economies and peoples across four continents', no: 'Den integrerte økonomier og folk på fire kontinenter' },
            { en: 'It isolated each region', no: 'Den isolerte hver region' },
            { en: 'It had no global reach', no: 'Den hadde ingen global rekkevidde' },
            { en: 'It stopped all trade', no: 'Den stanset all handel' }
          ],
          correct: 0,
          explanation: {
            en: 'By linking the economies of Europe, Africa, and the Americas, the trade was a driver of early globalization.',
            no: 'Ved å knytte sammen økonomiene i Europa, Afrika og Amerika var handelen en drivkraft for tidlig globalisering.'
          },
          tags: ['globalization', 'economy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do some governments and institutions issue apologies for slavery?',
            no: 'Hvorfor gir enkelte regjeringer og institusjoner unnskyldninger for slaveriet?'
          },
          answers: [
            { en: 'To acknowledge historical responsibility and address its legacy', no: 'For å erkjenne historisk ansvar og håndtere arven' },
            { en: 'To restart the slave trade', no: 'For å starte slavehandelen på nytt' },
            { en: 'To deny it happened', no: 'For å benekte at det skjedde' },
            { en: 'For no reason at all', no: 'Uten noen grunn i det hele tatt' }
          ],
          correct: 0,
          explanation: {
            en: 'Apologies acknowledge historical wrongs and are part of broader efforts to address slavery’s legacy.',
            no: 'Unnskyldninger erkjenner historisk urett og er en del av et bredere arbeid for å håndtere arven etter slaveriet.'
          },
          tags: ['apology', 'reconciliation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does studying slavery’s legacy challenge national historical narratives?',
            no: 'Hvordan utfordrer studiet av arven etter slaveriet nasjonale historiefortellinger?'
          },
          answers: [
            { en: 'It forces nations to confront uncomfortable roles in slavery and profit', no: 'Det tvinger nasjoner til å konfrontere ubehagelige roller i slaveri og profitt' },
            { en: 'It confirms every nation was innocent', no: 'Det bekrefter at hver nasjon var uskyldig' },
            { en: 'It has no effect on history', no: 'Det har ingen effekt på historien' },
            { en: 'It erases all national history', no: 'Det utsletter all nasjonal historie' }
          ],
          correct: 0,
          explanation: {
            en: 'Examining slavery’s legacy compels nations to reckon with their participation in and profit from it.',
            no: 'Å granske arven etter slaveriet tvinger nasjoner til å gjøre opp med sin deltakelse i og profitt fra det.'
          },
          tags: ['memory', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the slave trade considered foundational to the modern world, not just a past event?',
            no: 'Hvorfor regnes slavehandelen som grunnleggende for den moderne verden, ikke bare en fortidig hendelse?'
          },
          answers: [
            { en: 'It shaped economies, demographics, racial ideas, and cultures still present today', no: 'Den formet økonomier, demografi, raseforestillinger og kulturer som fortsatt finnes i dag' },
            { en: 'It had only short-term effects', no: 'Den hadde bare kortsiktige virkninger' },
            { en: 'It is irrelevant to the present', no: 'Den er irrelevant for nåtiden' },
            { en: 'It affected only the 1600s', no: 'Den påvirket bare 1600-tallet' }
          ],
          correct: 0,
          explanation: {
            en: 'Its lasting effects on economies, populations, racial ideologies, and cultures make it foundational to the modern world.',
            no: 'De varige virkningene på økonomier, befolkninger, raseideologier og kulturer gjør den grunnleggende for den moderne verden.'
          },
          tags: ['modern-world', 'long-term']
        }
      ]
    }
  ]
};