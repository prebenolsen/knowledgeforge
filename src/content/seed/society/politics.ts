import type { SeedSubcategory } from '../types';

export const politics: SeedSubcategory = {
  slug: 'politics',
  name: { en: 'Politics', no: 'Politikk' },
  modules: [
    {
      slug: 'liberalism',
      name: { en: 'Liberalism', no: 'Liberalisme' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'Which value is most central to liberalism?',
            no: 'Hvilken verdi står mest sentralt i liberalismen?'
          },
          answers: [
            { en: 'Individual liberty', no: 'Individuell frihet' },
            { en: 'Absolute monarchy', no: 'Eneveldig monarki' },
            { en: 'State ownership of all property', no: 'Statlig eierskap til all eiendom' },
            { en: 'Rule by a single party', no: 'Styre ved ett enkelt parti' }
          ],
          correct: 0,
          explanation: {
            en: 'Liberalism places individual liberty and personal freedom at the centre of its political philosophy.',
            no: 'Liberalismen setter individuell frihet og personlig frihet i sentrum av sin politiske filosofi.'
          },
          tags: ['liberalism', 'liberty', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which philosopher is often called the "father of liberalism"?',
            no: 'Hvilken filosof blir ofte kalt «liberalismens far»?'
          },
          answers: [
            { en: 'Karl Marx', no: 'Karl Marx' },
            { en: 'John Locke', no: 'John Locke' },
            { en: 'Thomas Hobbes', no: 'Thomas Hobbes' },
            { en: 'Plato', no: 'Platon' }
          ],
          correct: 1,
          explanation: {
            en: 'John Locke is widely regarded as the father of liberalism for his ideas on natural rights and government by consent.',
            no: 'John Locke regnes vidt som liberalismens far for sine ideer om naturlige rettigheter og styre med folkets samtykke.'
          },
          tags: ['liberalism', 'locke', 'philosophers']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does liberalism say should limit the power of government?',
            no: 'Hva mener liberalismen bør begrense statens makt?'
          },
          answers: [
            { en: 'The will of a monarch', no: 'En monarks vilje' },
            { en: 'A state religion', no: 'En statsreligion' },
            { en: 'Individual rights and the rule of law', no: 'Individuelle rettigheter og rettsstaten' },
            { en: 'The size of the army', no: 'Hærens størrelse' }
          ],
          correct: 2,
          explanation: {
            en: 'Liberalism holds that government power should be limited by individual rights and the rule of law.',
            no: 'Liberalismen mener at statsmakten bør begrenses av individuelle rettigheter og rettsstaten.'
          },
          tags: ['liberalism', 'rule-of-law', 'rights']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which economic idea is associated with classical liberalism?',
            no: 'Hvilken økonomisk idé forbindes med klassisk liberalisme?'
          },
          answers: [
            { en: 'Collective farms', no: 'Kollektivbruk' },
            { en: 'State monopolies', no: 'Statlige monopoler' },
            { en: 'Central planning', no: 'Planøkonomi' },
            { en: 'The free market', no: 'Det frie markedet' }
          ],
          correct: 3,
          explanation: {
            en: 'Classical liberalism favours free markets and limited government intervention in the economy.',
            no: 'Klassisk liberalisme går inn for frie markeder og begrenset statlig inngripen i økonomien.'
          },
          tags: ['liberalism', 'free-market', 'economy']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What are "natural rights" in liberal thought?',
            no: 'Hva er «naturlige rettigheter» i liberal tenkning?'
          },
          answers: [
            { en: 'Rights people have simply by being human', no: 'Rettigheter mennesker har bare ved å være menneske' },
            { en: 'Rights earned through military service', no: 'Rettigheter opptjent gjennom militærtjeneste' },
            { en: 'Rights that belong only to nobles', no: 'Rettigheter som bare tilhører adelen' },
            { en: 'Rights granted only by the king', no: 'Rettigheter gitt bare av kongen' }
          ],
          correct: 0,
          explanation: {
            en: 'Liberals argue that natural rights, such as life, liberty and property, belong to all people simply by being human.',
            no: 'Liberale hevder at naturlige rettigheter, som liv, frihet og eiendom, tilhører alle mennesker bare ved å være menneske.'
          },
          tags: ['liberalism', 'natural-rights', 'locke']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which freedom is a core liberal value?',
            no: 'Hvilken frihet er en grunnleggende liberal verdi?'
          },
          answers: [
            { en: 'Freedom from all taxation', no: 'Frihet fra all skatt' },
            { en: 'Freedom of speech', no: 'Ytringsfrihet' },
            { en: 'Freedom from elections', no: 'Frihet fra valg' },
            { en: 'Freedom to abolish courts', no: 'Frihet til å avskaffe domstoler' }
          ],
          correct: 1,
          explanation: {
            en: 'Freedom of speech is one of the core civil liberties that liberalism seeks to protect.',
            no: 'Ytringsfrihet er en av de grunnleggende borgerrettighetene som liberalismen søker å beskytte.'
          },
          tags: ['liberalism', 'free-speech', 'rights']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What kind of government do liberals generally support?',
            no: 'Hvilken styreform støtter liberale generelt?'
          },
          answers: [
            { en: 'Military junta', no: 'Militærjunta' },
            { en: 'Absolute dictatorship', no: 'Eneveldig diktatur' },
            { en: 'Representative democracy', no: 'Representativt demokrati' },
            { en: 'Hereditary monarchy with no parliament', no: 'Arvelig monarki uten parlament' }
          ],
          correct: 2,
          explanation: {
            en: 'Liberalism generally supports representative democracy with constitutional limits on power.',
            no: 'Liberalismen støtter generelt representativt demokrati med konstitusjonelle begrensninger på makten.'
          },
          tags: ['liberalism', 'democracy', 'government']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which document, influenced by liberal ideas, was adopted in France in 1789?',
            no: 'Hvilket dokument, påvirket av liberale ideer, ble vedtatt i Frankrike i 1789?'
          },
          answers: [
            { en: 'The Magna Carta', no: 'Magna Carta' },
            { en: 'The Treaty of Versailles', no: 'Versaillestraktaten' },
            { en: 'The Communist Manifesto', no: 'Det kommunistiske manifest' },
            { en: 'The Declaration of the Rights of Man and of the Citizen', no: 'Erklæringen om menneskets og borgerens rettigheter' }
          ],
          correct: 3,
          explanation: {
            en: 'The 1789 Declaration of the Rights of Man and of the Citizen expressed liberal principles of liberty and equality.',
            no: 'Erklæringen om menneskets og borgerens rettigheter fra 1789 uttrykte liberale prinsipper om frihet og likhet.'
          },
          tags: ['liberalism', 'french-revolution', 'rights']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does "constitutional government" mean to liberals?',
            no: 'Hva betyr «konstitusjonelt styre» for liberale?'
          },
          answers: [
            { en: 'Government bound by a set of fundamental laws', no: 'Styre bundet av et sett grunnleggende lover' },
            { en: 'Government chosen by the army', no: 'Styre valgt av hæren' },
            { en: 'Government run by the church', no: 'Styre drevet av kirken' },
            { en: 'Government with no written rules', no: 'Styre uten skrevne regler' }
          ],
          correct: 0,
          explanation: {
            en: 'Liberals support constitutional government, where rulers are bound by fundamental laws that protect citizens.',
            no: 'Liberale støtter konstitusjonelt styre, der makthaverne er bundet av grunnleggende lover som beskytter borgerne.'
          },
          tags: ['liberalism', 'constitution', 'rule-of-law']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which Scottish thinker wrote "The Wealth of Nations," a key text for economic liberalism?',
            no: 'Hvilken skotsk tenker skrev «Nasjonenes velstand», en nøkkeltekst for økonomisk liberalisme?'
          },
          answers: [
            { en: 'Jean-Jacques Rousseau', no: 'Jean-Jacques Rousseau' },
            { en: 'Adam Smith', no: 'Adam Smith' },
            { en: 'Vladimir Lenin', no: 'Vladimir Lenin' },
            { en: 'Edmund Burke', no: 'Edmund Burke' }
          ],
          correct: 1,
          explanation: {
            en: 'Adam Smith wrote "The Wealth of Nations" (1776), a foundational work for free-market liberal economics.',
            no: 'Adam Smith skrev «Nasjonenes velstand» (1776), et grunnleggende verk for frimarkedsliberal økonomi.'
          },
          tags: ['liberalism', 'adam-smith', 'economy']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Liberalism emerged as a major political force during which period?',
            no: 'Liberalismen vokste fram som en stor politisk kraft i hvilken periode?'
          },
          answers: [
            { en: 'The Bronze Age', no: 'Bronsealderen' },
            { en: 'The Middle Ages', no: 'Middelalderen' },
            { en: 'The Enlightenment', no: 'Opplysningstiden' },
            { en: 'The Stone Age', no: 'Steinalderen' }
          ],
          correct: 2,
          explanation: {
            en: 'Liberalism developed during the Enlightenment of the 17th and 18th centuries.',
            no: 'Liberalismen utviklet seg under opplysningstiden på 1600- og 1700-tallet.'
          },
          tags: ['liberalism', 'enlightenment', 'history']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is "tolerance" in the liberal tradition?',
            no: 'Hva er «toleranse» i den liberale tradisjonen?'
          },
          answers: [
            { en: 'Banning all religions', no: 'Å forby alle religioner' },
            { en: 'Allowing only the state religion', no: 'Å tillate bare statsreligionen' },
            { en: 'Forcing everyone to share one belief', no: 'Å tvinge alle til å dele én tro' },
            { en: 'Accepting different beliefs and ways of life', no: 'Å akseptere ulike trosretninger og levemåter' }
          ],
          correct: 3,
          explanation: {
            en: 'Liberal tolerance means accepting that people may hold different beliefs and live in different ways.',
            no: 'Liberal toleranse betyr å akseptere at folk kan ha ulike oppfatninger og leve på ulike måter.'
          },
          tags: ['liberalism', 'tolerance', 'values']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which of these is a liberal idea about people and government?',
            no: 'Hvilken av disse er en liberal idé om folk og styre?'
          },
          answers: [
            { en: 'Government gets its authority from the consent of the governed', no: 'Staten får sin myndighet fra de styrtes samtykke' },
            { en: 'Government authority comes only from God', no: 'Statsmakt kommer bare fra Gud' },
            { en: 'Only nobles may take part in politics', no: 'Bare adelige kan delta i politikk' },
            { en: 'Citizens should obey without question', no: 'Borgere bør adlyde uten spørsmål' }
          ],
          correct: 0,
          explanation: {
            en: 'A core liberal idea is that legitimate government rests on the consent of the governed.',
            no: 'En grunnleggende liberal idé er at legitimt styre hviler på de styrtes samtykke.'
          },
          tags: ['liberalism', 'consent', 'government']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which principle means treating people equally before the law?',
            no: 'Hvilket prinsipp betyr å behandle folk likt for loven?'
          },
          answers: [
            { en: 'One-party rule', no: 'Ettpartistyre' },
            { en: 'Equality before the law', no: 'Likhet for loven' },
            { en: 'Divine right of kings', no: 'Kongers gudgitte rett' },
            { en: 'Hereditary privilege', no: 'Arvelig privilegium' }
          ],
          correct: 1,
          explanation: {
            en: 'Liberalism upholds equality before the law, so the same rules apply to everyone.',
            no: 'Liberalismen forsvarer likhet for loven, slik at de samme reglene gjelder for alle.'
          },
          tags: ['liberalism', 'equality', 'law']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does a "free press" protect, according to liberals?',
            no: 'Hva beskytter «en fri presse» ifølge liberale?'
          },
          answers: [
            { en: 'The censorship of opponents', no: 'Sensur av motstandere' },
            { en: 'The secrecy of government', no: 'Statens hemmelighold' },
            { en: 'The right to criticise those in power', no: 'Retten til å kritisere makthaverne' },
            { en: 'The monopoly of the state newspaper', no: 'Statsavisens monopol' }
          ],
          correct: 2,
          explanation: {
            en: 'Liberals see a free press as essential for holding power accountable and informing citizens.',
            no: 'Liberale ser en fri presse som avgjørende for å holde makten ansvarlig og informere borgerne.'
          },
          tags: ['liberalism', 'free-press', 'rights']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does classical liberalism differ from modern (social) liberalism on the economy?',
            no: 'Hvordan skiller klassisk liberalisme seg fra moderne (sosial) liberalisme når det gjelder økonomi?'
          },
          answers: [
            { en: 'Both demand full state ownership of industry', no: 'Begge krever fullt statlig eierskap til industrien' },
            { en: 'Modern liberalism opposes all democracy', no: 'Moderne liberalisme motsetter seg alt demokrati' },
            { en: 'Classical liberalism rejects private property', no: 'Klassisk liberalisme avviser privat eiendom' },
            { en: 'Modern liberalism accepts a larger role for the state to ensure welfare', no: 'Moderne liberalisme godtar en større rolle for staten for å sikre velferd' }
          ],
          correct: 3,
          explanation: {
            en: 'Modern (social) liberalism accepts more state action—like welfare and regulation—than classical liberalism, which stresses minimal intervention.',
            no: 'Moderne (sosial) liberalisme godtar mer statlig handling—som velferd og regulering—enn klassisk liberalisme, som vektlegger minimal inngripen.'
          },
          tags: ['liberalism', 'comparison', 'welfare']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did liberalism challenge absolute monarchy?',
            no: 'Hvorfor utfordret liberalismen det eneveldige monarkiet?'
          },
          answers: [
            { en: 'It argued power should rest on consent and law, not divine right', no: 'Den hevdet at makt skulle hvile på samtykke og lov, ikke gudgitt rett' },
            { en: 'It wanted to make the king more powerful', no: 'Den ønsket å gjøre kongen mektigere' },
            { en: 'It opposed all forms of representation', no: 'Den motsatte seg all form for representasjon' },
            { en: 'It demanded rule by the church', no: 'Den krevde styre ved kirken' }
          ],
          correct: 0,
          explanation: {
            en: 'Liberals rejected the divine right of kings, arguing that legitimate authority comes from consent and is limited by law.',
            no: 'Liberale avviste kongers gudgitte rett og hevdet at legitim myndighet kommer fra samtykke og begrenses av lov.'
          },
          tags: ['liberalism', 'monarchy', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the "social contract" idea used by many liberal thinkers?',
            no: 'Hva er ideen om «samfunnskontrakten» som mange liberale tenkere bruker?'
          },
          answers: [
            { en: 'A legal contract to buy land', no: 'En juridisk kontrakt for å kjøpe jord' },
            { en: 'An agreement where people form government to protect their rights', no: 'En avtale der folk danner et styre for å beskytte sine rettigheter' },
            { en: 'A treaty between two monarchs', no: 'En traktat mellom to monarker' },
            { en: 'A church covenant', no: 'En kirkelig pakt' }
          ],
          correct: 1,
          explanation: {
            en: 'Social contract theory holds that people agree to form a government in order to protect their natural rights.',
            no: 'Samfunnskontraktteori hevder at folk blir enige om å danne et styre for å beskytte sine naturlige rettigheter.'
          },
          tags: ['liberalism', 'social-contract', 'theory']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does liberalism view the relationship between the individual and the state?',
            no: 'Hvordan ser liberalismen på forholdet mellom individet og staten?'
          },
          answers: [
            { en: 'The individual has no rights against the state', no: 'Individet har ingen rettigheter overfor staten' },
            { en: 'The individual exists to serve the state', no: 'Individet eksisterer for å tjene staten' },
            { en: 'The state exists mainly to protect individual freedom', no: 'Staten eksisterer hovedsakelig for å beskytte individuell frihet' },
            { en: 'The state should control private life completely', no: 'Staten bør kontrollere privatlivet fullstendig' }
          ],
          correct: 2,
          explanation: {
            en: 'Liberalism sees the state as a means to protect the freedom and rights of individuals, not the other way around.',
            no: 'Liberalismen ser staten som et middel til å beskytte individenes frihet og rettigheter, ikke omvendt.'
          },
          tags: ['liberalism', 'individual', 'state']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why is the separation of powers important in liberal political thought?',
            no: 'Hvorfor er maktfordeling viktig i liberal politisk tenkning?'
          },
          answers: [
            { en: 'It abolishes the courts', no: 'Den avskaffer domstolene' },
            { en: 'It removes the need for elections', no: 'Den fjerner behovet for valg' },
            { en: 'It concentrates power in one leader', no: 'Den samler makten hos én leder' },
            { en: 'It prevents any single branch from gaining too much power', no: 'Den hindrer at én enkelt statsmakt får for mye makt' }
          ],
          correct: 3,
          explanation: {
            en: 'Liberals favour separating legislative, executive and judicial powers so that no single branch can dominate.',
            no: 'Liberale går inn for å skille lovgivende, utøvende og dømmende makt slik at ingen enkelt gren kan dominere.'
          },
          tags: ['liberalism', 'separation-of-powers', 'montesquieu']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did John Stuart Mill expand liberal ideas about freedom?',
            no: 'Hvordan utvidet John Stuart Mill liberale ideer om frihet?'
          },
          answers: [
            { en: 'He defended individual liberty as long as it does not harm others', no: 'Han forsvarte individuell frihet så lenge den ikke skader andre' },
            { en: 'He rejected all individual rights', no: 'Han avviste alle individuelle rettigheter' },
            { en: 'He supported absolute monarchy', no: 'Han støttet eneveldig monarki' },
            { en: 'He argued for censorship of unpopular ideas', no: 'Han argumenterte for sensur av upopulære ideer' }
          ],
          correct: 0,
          explanation: {
            en: 'Mill\'s "harm principle" held that individuals should be free to act unless their actions harm others.',
            no: 'Mills «skadeprinsipp» hevdet at individer bør være frie til å handle med mindre handlingene skader andre.'
          },
          tags: ['liberalism', 'mill', 'freedom']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What consequence did liberalism have for the spread of constitutions in the 1800s?',
            no: 'Hvilken konsekvens fikk liberalismen for spredningen av grunnlover på 1800-tallet?'
          },
          answers: [
            { en: 'It banned parliaments', no: 'Den forbød parlamenter' },
            { en: 'It encouraged many states to adopt written constitutions limiting power', no: 'Den oppmuntret mange stater til å vedta skrevne grunnlover som begrenset makten' },
            { en: 'It abolished constitutions across Europe', no: 'Den avskaffet grunnlover over hele Europa' },
            { en: 'It made monarchs more absolute', no: 'Den gjorde monarker mer eneveldige' }
          ],
          correct: 1,
          explanation: {
            en: 'Liberal movements pushed many 19th-century states to adopt constitutions that limited rulers and protected rights.',
            no: 'Liberale bevegelser drev mange stater på 1800-tallet til å vedta grunnlover som begrenset makthavere og beskyttet rettigheter.'
          },
          tags: ['liberalism', 'constitutions', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does liberalism generally relate to free trade?',
            no: 'Hvordan forholder liberalismen seg generelt til frihandel?'
          },
          answers: [
            { en: 'It bans imports entirely', no: 'Den forbyr import fullstendig' },
            { en: 'It opposes trade between nations', no: 'Den motsetter seg handel mellom nasjoner' },
            { en: 'It tends to support free trade and open markets', no: 'Den har en tendens til å støtte frihandel og åpne markeder' },
            { en: 'It demands total state control of trade', no: 'Den krever total statlig kontroll over handelen' }
          ],
          correct: 2,
          explanation: {
            en: 'Economic liberalism generally supports free trade, arguing it increases prosperity and cooperation.',
            no: 'Økonomisk liberalisme støtter generelt frihandel og hevder at den øker velstand og samarbeid.'
          },
          tags: ['liberalism', 'free-trade', 'economy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why is liberalism often linked to the rise of the middle class?',
            no: 'Hvorfor knyttes liberalismen ofte til middelklassens framvekst?'
          },
          answers: [
            { en: 'The middle class opposed all property rights', no: 'Middelklassen motsatte seg alle eiendomsrettigheter' },
            { en: 'The middle class demanded a return to monarchy', no: 'Middelklassen krevde en tilbakevending til monarki' },
            { en: 'The middle class wanted to keep feudal privileges', no: 'Middelklassen ønsket å beholde føydale privilegier' },
            { en: 'The growing middle class supported rights, free markets and limited government', no: 'Den voksende middelklassen støttet rettigheter, frie markeder og begrenset stat' }
          ],
          correct: 3,
          explanation: {
            en: 'The rising commercial and professional middle class found liberal ideas of rights and free markets attractive.',
            no: 'Den voksende handels- og profesjonsmiddelklassen fant liberale ideer om rettigheter og frie markeder tiltrekkende.'
          },
          tags: ['liberalism', 'middle-class', 'context']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What distinguishes liberalism from conservatism on the question of change?',
            no: 'Hva skiller liberalismen fra konservatismen i spørsmålet om endring?'
          },
          answers: [
            { en: 'Liberalism is generally more open to reform based on reason', no: 'Liberalismen er generelt mer åpen for reform basert på fornuft' },
            { en: 'Liberalism rejects all change', no: 'Liberalismen avviser all endring' },
            { en: 'Conservatism demands constant revolution', no: 'Konservatismen krever konstant revolusjon' },
            { en: 'Both oppose representative government', no: 'Begge motsetter seg representativt styre' }
          ],
          correct: 0,
          explanation: {
            en: 'Liberalism tends to favour reform guided by reason, while conservatism stresses caution and continuity.',
            no: 'Liberalismen har en tendens til å foretrekke reform styrt av fornuft, mens konservatismen vektlegger forsiktighet og kontinuitet.'
          },
          tags: ['liberalism', 'conservatism', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did liberal ideas influence the American Revolution?',
            no: 'Hvordan påvirket liberale ideer den amerikanske revolusjonen?'
          },
          answers: [
            { en: 'They justified rule without any elected assembly', no: 'De rettferdiggjorde styre uten noen valgt forsamling' },
            { en: 'They inspired claims to natural rights and government by consent', no: 'De inspirerte krav om naturlige rettigheter og styre med samtykke' },
            { en: 'They supported continued colonial taxation without representation', no: 'De støttet fortsatt kolonibeskatning uten representasjon' },
            { en: 'They opposed any declaration of independence', no: 'De motsatte seg enhver uavhengighetserklæring' }
          ],
          correct: 1,
          explanation: {
            en: 'The American Declaration of Independence drew on liberal ideas of natural rights and consent of the governed.',
            no: 'Den amerikanske uavhengighetserklæringen bygde på liberale ideer om naturlige rettigheter og de styrtes samtykke.'
          },
          tags: ['liberalism', 'american-revolution', 'rights']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is meant by "civil liberties" in liberal politics?',
            no: 'Hva menes med «borgerrettigheter» (sivile friheter) i liberal politikk?'
          },
          answers: [
            { en: 'Duties owed to a monarch', no: 'Plikter overfor en monark' },
            { en: 'Privileges given only to officials', no: 'Privilegier gitt bare til embetsmenn' },
            { en: 'Basic freedoms protected from government interference', no: 'Grunnleggende friheter beskyttet mot statlig innblanding' },
            { en: 'The right of the state to censor citizens', no: 'Statens rett til å sensurere borgerne' }
          ],
          correct: 2,
          explanation: {
            en: 'Civil liberties are basic freedoms—such as speech, assembly and religion—protected from government interference.',
            no: 'Sivile friheter er grunnleggende friheter—som ytring, forsamling og religion—beskyttet mot statlig innblanding.'
          },
          tags: ['liberalism', 'civil-liberties', 'rights']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why do liberals support an independent judiciary?',
            no: 'Hvorfor støtter liberale et uavhengig rettsvesen?'
          },
          answers: [
            { en: 'So the ruler can decide all cases personally', no: 'Slik at herskeren kan avgjøre alle saker personlig' },
            { en: 'So judges always follow the majority party', no: 'Slik at dommere alltid følger flertallspartiet' },
            { en: 'So the army can run the courts', no: 'Slik at hæren kan styre domstolene' },
            { en: 'So courts can protect rights without political pressure', no: 'Slik at domstolene kan beskytte rettigheter uten politisk press' }
          ],
          correct: 3,
          explanation: {
            en: 'An independent judiciary lets courts uphold rights and the law free from political interference.',
            no: 'Et uavhengig rettsvesen lar domstolene opprettholde rettigheter og loven fritt for politisk innblanding.'
          },
          tags: ['liberalism', 'judiciary', 'rule-of-law']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does liberalism typically view religious freedom?',
            no: 'Hvordan ser liberalismen typisk på religionsfrihet?'
          },
          answers: [
            { en: 'It protects the right to practise, change or reject religion', no: 'Den beskytter retten til å utøve, endre eller forkaste religion' },
            { en: 'It bans all worship', no: 'Den forbyr all tilbedelse' },
            { en: 'It gives the church control of the state', no: 'Den gir kirken kontroll over staten' },
            { en: 'It requires everyone to follow one official religion', no: 'Den krever at alle følger én offisiell religion' }
          ],
          correct: 0,
          explanation: {
            en: 'Liberalism defends religious freedom, including the right to practise, change or reject a faith.',
            no: 'Liberalismen forsvarer religionsfrihet, inkludert retten til å utøve, endre eller forkaste en tro.'
          },
          tags: ['liberalism', 'religious-freedom', 'tolerance']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the core of the debate between "negative" and "positive" liberty in liberal thought?',
            no: 'Hva er kjernen i debatten mellom «negativ» og «positiv» frihet i liberal tenkning?'
          },
          answers: [
            { en: 'Whether liberty applies only in wartime', no: 'Om frihet bare gjelder i krigstid' },
            { en: 'Whether freedom means absence of interference or the real capacity to act', no: 'Om frihet betyr fravær av innblanding eller den reelle evnen til å handle' },
            { en: 'Whether freedom should be abolished', no: 'Om frihet bør avskaffes' },
            { en: 'Whether only nobles can be free', no: 'Om bare adelige kan være frie' }
          ],
          correct: 1,
          explanation: {
            en: 'Isaiah Berlin distinguished negative liberty (freedom from interference) from positive liberty (the real power to act), a central liberal debate.',
            no: 'Isaiah Berlin skilte negativ frihet (frihet fra innblanding) fra positiv frihet (den reelle makten til å handle), en sentral liberal debatt.'
          },
          tags: ['liberalism', 'berlin', 'liberty']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do social liberals justify state action such as welfare while remaining liberal?',
            no: 'Hvordan rettferdiggjør sosialliberale statlig handling som velferd og samtidig forblir liberale?'
          },
          answers: [
            { en: 'By demanding abolition of private property', no: 'Ved å kreve avskaffelse av privat eiendom' },
            { en: 'By supporting one-party rule', no: 'Ved å støtte ettpartistyre' },
            { en: 'By arguing that real freedom requires removing barriers like poverty and ignorance', no: 'Ved å hevde at reell frihet krever at hindre som fattigdom og uvitenhet fjernes' },
            { en: 'By rejecting individual freedom entirely', no: 'Ved å forkaste individuell frihet fullstendig' }
          ],
          correct: 2,
          explanation: {
            en: 'Social liberals argue that genuine freedom requires the state to reduce barriers such as poverty, illness and lack of education.',
            no: 'Sosialliberale hevder at ekte frihet krever at staten reduserer hindre som fattigdom, sykdom og manglende utdanning.'
          },
          tags: ['liberalism', 'social-liberalism', 'welfare']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do critics argue there is a tension between liberalism\'s commitment to liberty and to equality?',
            no: 'Hvorfor hevder kritikere at det er en spenning mellom liberalismens forpliktelse til frihet og til likhet?'
          },
          answers: [
            { en: 'Because liberalism rejects both liberty and equality', no: 'Fordi liberalismen avviser både frihet og likhet' },
            { en: 'Because liberty and equality always mean the same thing', no: 'Fordi frihet og likhet alltid betyr det samme' },
            { en: 'Because liberalism only values tradition', no: 'Fordi liberalismen bare verdsetter tradisjon' },
            { en: 'Because protecting equality may require limiting some economic freedoms', no: 'Fordi å beskytte likhet kan kreve at noen økonomiske friheter begrenses' }
          ],
          correct: 3,
          explanation: {
            en: 'Critics note that promoting equality (e.g. through redistribution) can clash with maximal economic liberty, a long-running liberal dilemma.',
            no: 'Kritikere påpeker at å fremme likhet (f.eks. gjennom omfordeling) kan kollidere med maksimal økonomisk frihet, et vedvarende liberalt dilemma.'
          },
          tags: ['liberalism', 'liberty', 'equality', 'critique']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did John Rawls reshape liberal theory in the 20th century?',
            no: 'Hvordan formet John Rawls liberal teori på nytt på 1900-tallet?'
          },
          answers: [
            { en: 'By arguing for principles of justice chosen behind a "veil of ignorance"', no: 'Ved å argumentere for rettferdighetsprinsipper valgt bak et «uvitenhetens slør»' },
            { en: 'By defending absolute monarchy', no: 'Ved å forsvare eneveldig monarki' },
            { en: 'By calling for the abolition of all government', no: 'Ved å kreve avskaffelse av all stat' },
            { en: 'By rejecting justice as a political value', no: 'Ved å forkaste rettferdighet som en politisk verdi' }
          ],
          correct: 0,
          explanation: {
            en: 'Rawls argued that fair principles of justice are those people would choose behind a "veil of ignorance," not knowing their own position.',
            no: 'Rawls hevdet at rettferdige prinsipper er de folk ville valgt bak et «uvitenhetens slør», uten å kjenne sin egen posisjon.'
          },
          tags: ['liberalism', 'rawls', 'justice']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a common criticism of liberalism from communitarian thinkers?',
            no: 'Hva er en vanlig kritikk av liberalismen fra kommunitære tenkere?'
          },
          answers: [
            { en: 'That it overstates the role of the state', no: 'At den overdriver statens rolle' },
            { en: 'That it pictures individuals as too detached from community and tradition', no: 'At den fremstiller individer som for løsrevet fra fellesskap og tradisjon' },
            { en: 'That it demands collective ownership', no: 'At den krever kollektivt eierskap' },
            { en: 'That it rejects all individual rights', no: 'At den avviser alle individuelle rettigheter' }
          ],
          correct: 1,
          explanation: {
            en: 'Communitarians argue liberalism\'s focus on the autonomous individual underrates how community, culture and tradition shape people.',
            no: 'Kommunitære hevder at liberalismens fokus på det autonome individet undervurderer hvordan fellesskap, kultur og tradisjon former mennesker.'
          },
          tags: ['liberalism', 'communitarianism', 'critique']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do some scholars argue 19th-century liberalism was ambivalent about democracy?',
            no: 'Hvorfor hevder enkelte forskere at 1800-tallets liberalisme var ambivalent til demokrati?'
          },
          answers: [
            { en: 'Liberals supported absolute monarchy over voting', no: 'Liberale støttet eneveldig monarki framfor stemmegivning' },
            { en: 'Liberals opposed all written constitutions', no: 'Liberale motsatte seg alle skrevne grunnlover' },
            { en: 'Many liberals feared that universal suffrage might threaten property and minority rights', no: 'Mange liberale fryktet at allmenn stemmerett kunne true eiendom og minoritetsrettigheter' },
            { en: 'Liberals wanted no elections at all', no: 'Liberale ønsket ingen valg i det hele tatt' }
          ],
          correct: 2,
          explanation: {
            en: 'Many early liberals supported limited suffrage, worried that full democracy might endanger property rights and minorities ("tyranny of the majority").',
            no: 'Mange tidlige liberale støttet begrenset stemmerett, bekymret for at fullt demokrati kunne true eiendomsrett og minoriteter («flertallets tyranni»).'
          },
          tags: ['liberalism', 'democracy', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did neoliberalism in the late 20th century revive classical liberal economics?',
            no: 'Hvordan gjenopplivet nyliberalismen på slutten av 1900-tallet klassisk liberal økonomi?'
          },
          answers: [
            { en: 'By nationalising all industries', no: 'Ved å nasjonalisere all industri' },
            { en: 'By abolishing private property', no: 'Ved å avskaffe privat eiendom' },
            { en: 'By ending all international trade', no: 'Ved å avslutte all internasjonal handel' },
            { en: 'By emphasising deregulation, privatisation and free markets', no: 'Ved å vektlegge deregulering, privatisering og frie markeder' }
          ],
          correct: 3,
          explanation: {
            en: 'Neoliberalism, associated with thinkers like Hayek and Friedman, revived free-market ideas through deregulation and privatisation.',
            no: 'Nyliberalismen, knyttet til tenkere som Hayek og Friedman, gjenopplivet frimarkedsideer gjennom deregulering og privatisering.'
          },
          tags: ['liberalism', 'neoliberalism', 'economy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the "tyranny of the majority" that liberals like Tocqueville and Mill warned about?',
            no: 'Hva er «flertallets tyranni» som liberale som Tocqueville og Mill advarte mot?'
          },
          answers: [
            { en: 'The danger that a democratic majority oppresses minorities or individuals', no: 'Faren for at et demokratisk flertall undertrykker minoriteter eller individer' },
            { en: 'The rule of a single dictator', no: 'En enkelt diktators styre' },
            { en: 'The power of foreign monarchs', no: 'Utenlandske monarkers makt' },
            { en: 'The collapse of all government', no: 'Sammenbruddet av all stat' }
          ],
          correct: 0,
          explanation: {
            en: 'Liberals warned that even democracies can threaten freedom if the majority overrides the rights of minorities and individuals.',
            no: 'Liberale advarte om at selv demokratier kan true friheten dersom flertallet overkjører minoriteters og individers rettigheter.'
          },
          tags: ['liberalism', 'tocqueville', 'mill', 'democracy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do liberal and libertarian views differ on the role of the state?',
            no: 'Hvordan skiller liberale og libertarianske syn seg på statens rolle?'
          },
          answers: [
            { en: 'Both reject private property', no: 'Begge avviser privat eiendom' },
            { en: 'Libertarians want an even more minimal state than most modern liberals', no: 'Libertarianere ønsker en enda mer minimal stat enn de fleste moderne liberale' },
            { en: 'Libertarians demand full state ownership of industry', no: 'Libertarianere krever fullt statlig eierskap til industrien' },
            { en: 'Modern liberals reject all government', no: 'Moderne liberale avviser all stat' }
          ],
          correct: 1,
          explanation: {
            en: 'Libertarians push classical liberal ideas further, favouring a very minimal state, while modern liberals accept more public provision.',
            no: 'Libertarianere fører klassisk liberale ideer videre og foretrekker en svært minimal stat, mens moderne liberale godtar mer offentlig tjenesteyting.'
          },
          tags: ['liberalism', 'libertarianism', 'comparison']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is liberalism sometimes criticised for assuming a "universal" rational individual?',
            no: 'Hvorfor kritiseres liberalismen noen ganger for å anta et «universelt» rasjonelt individ?'
          },
          answers: [
            { en: 'Critics say it rejects reason entirely', no: 'Kritikere sier den forkaster fornuften fullstendig' },
            { en: 'Critics say it supports hereditary rule', no: 'Kritikere sier den støtter arvelig styre' },
            { en: 'Critics say it can ignore differences of culture, gender and power', no: 'Kritikere sier den kan overse forskjeller i kultur, kjønn og makt' },
            { en: 'Critics say it relies too heavily on tradition', no: 'Kritikere sier den lener seg for tungt på tradisjon' }
          ],
          correct: 2,
          explanation: {
            en: 'Feminist and postcolonial critics argue liberalism\'s "universal individual" can mask real differences of gender, culture and power.',
            no: 'Feministiske og postkoloniale kritikere hevder at liberalismens «universelle individ» kan tilsløre reelle forskjeller i kjønn, kultur og makt.'
          },
          tags: ['liberalism', 'critique', 'theory']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did liberalism contribute to the development of human rights after 1945?',
            no: 'Hvordan bidro liberalismen til utviklingen av menneskerettigheter etter 1945?'
          },
          answers: [
            { en: 'It opposed all international agreements', no: 'Den motsatte seg alle internasjonale avtaler' },
            { en: 'It rejected the idea of rights', no: 'Den forkastet ideen om rettigheter' },
            { en: 'It promoted rule by hereditary elites', no: 'Den fremmet styre ved arvelige eliter' },
            { en: 'It provided the idea of universal individual rights underpinning declarations like the UDHR', no: 'Den ga ideen om universelle individuelle rettigheter som ligger til grunn for erklæringer som Verdenserklæringen' }
          ],
          correct: 3,
          explanation: {
            en: 'Liberal ideas of universal individual rights shaped post-war documents like the Universal Declaration of Human Rights (1948).',
            no: 'Liberale ideer om universelle individuelle rettigheter formet etterkrigsdokumenter som Verdenserklæringen om menneskerettigheter (1948).'
          },
          tags: ['liberalism', 'human-rights', 'legacy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a key disagreement between economic liberals and social liberals over inequality?',
            no: 'Hva er en sentral uenighet mellom økonomiske liberale og sosialliberale om ulikhet?'
          },
          answers: [
            { en: 'Whether the state should actively redistribute to reduce inequality', no: 'Om staten aktivt bør omfordele for å redusere ulikhet' },
            { en: 'Whether elections should exist at all', no: 'Om valg overhodet bør finnes' },
            { en: 'Whether to abolish the free market entirely', no: 'Om man skal avskaffe det frie markedet fullstendig' },
            { en: 'Whether individuals have any rights', no: 'Om individer har noen rettigheter' }
          ],
          correct: 0,
          explanation: {
            en: 'Economic liberals stress market outcomes and limited redistribution, while social liberals support more active state efforts to reduce inequality.',
            no: 'Økonomiske liberale vektlegger markedsutfall og begrenset omfordeling, mens sosialliberale støtter mer aktiv statlig innsats for å redusere ulikhet.'
          },
          tags: ['liberalism', 'inequality', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do some historians see liberalism as both a revolutionary and a stabilising force?',
            no: 'Hvorfor ser enkelte historikere liberalismen som både en revolusjonær og en stabiliserende kraft?'
          },
          answers: [
            { en: 'It defended absolute monarchy throughout', no: 'Den forsvarte eneveldig monarki hele veien' },
            { en: 'It overturned old hierarchies but then built stable constitutional orders', no: 'Den veltet gamle hierarkier, men bygde deretter stabile konstitusjonelle ordninger' },
            { en: 'It always opposed any change', no: 'Den motsatte seg alltid enhver endring' },
            { en: 'It rejected constitutions and law', no: 'Den forkastet grunnlover og lov' }
          ],
          correct: 1,
          explanation: {
            en: 'Liberalism helped overthrow absolutist and feudal orders, then provided constitutional frameworks that stabilised new states.',
            no: 'Liberalismen bidro til å styrte absolutistiske og føydale ordninger, og ga deretter konstitusjonelle rammer som stabiliserte nye stater.'
          },
          tags: ['liberalism', 'historiography', 'legacy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did liberalism help dismantle feudal privileges and guilds?',
            no: 'Hvordan bidro liberalismen til å rive ned føydale privilegier og laug?'
          },
          answers: [
            { en: 'By banning all trade', no: 'Ved å forby all handel' },
            { en: 'By restoring serfdom', no: 'Ved å gjeninnføre livegenskap' },
            { en: 'By insisting on equal rights and freedom of contract and occupation', no: 'Ved å insistere på like rettigheter og frihet til å inngå kontrakt og velge yrke' },
            { en: 'By strengthening hereditary noble privilege', no: 'Ved å styrke arvelige adelsprivilegier' }
          ],
          correct: 2,
          explanation: {
            en: 'Liberals attacked feudal privileges and guild restrictions, promoting equal rights and freedom to work and trade.',
            no: 'Liberale angrep føydale privilegier og laugsrestriksjoner og fremmet like rettigheter og frihet til arbeid og handel.'
          },
          tags: ['liberalism', 'feudalism', 'consequences']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do liberals respond to the worry that economic power can distort political equality?',
            no: 'Hvordan svarer liberale på bekymringen om at økonomisk makt kan forvrenge politisk likhet?'
          },
          answers: [
            { en: 'They all reject the idea that money affects politics', no: 'De forkaster alle ideen om at penger påvirker politikk' },
            { en: 'They demand abolition of all private wealth', no: 'De krever avskaffelse av all privat rikdom' },
            { en: 'They oppose political equality entirely', no: 'De motsetter seg politisk likhet fullstendig' },
            { en: 'They disagree: some accept regulation to protect democracy, others trust markets', no: 'De er uenige: noen godtar regulering for å beskytte demokratiet, andre stoler på markedene' }
          ],
          correct: 3,
          explanation: {
            en: 'Liberals split: social liberals support regulating economic power to protect equal political voice, while market liberals are more sceptical of such intervention.',
            no: 'Liberale er splittet: sosialliberale støtter regulering av økonomisk makt for å beskytte lik politisk stemme, mens markedsliberale er mer skeptiske til slik inngripen.'
          },
          tags: ['liberalism', 'inequality', 'democracy', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do some scholars treat classical and modern liberalism as almost rival traditions?',
            no: 'Hvorfor behandler enkelte forskere klassisk og moderne liberalisme som nesten rivaliserende tradisjoner?'
          },
          answers: [
            { en: 'They disagree sharply over the state\'s economic role despite sharing a language of liberty', no: 'De er sterkt uenige om statens økonomiske rolle, selv om de deler et språk om frihet' },
            { en: 'They reject one another\'s belief in individual rights', no: 'De forkaster hverandres tro på individuelle rettigheter' },
            { en: 'One supports monarchy and the other communism', no: 'Den ene støtter monarki og den andre kommunisme' },
            { en: 'Neither accepts democracy', no: 'Ingen av dem godtar demokrati' }
          ],
          correct: 0,
          explanation: {
            en: 'Both prize liberty, but classical liberals want a minimal state while modern liberals accept extensive social provision, dividing the tradition.',
            no: 'Begge verdsetter frihet, men klassiske liberale ønsker en minimal stat mens moderne liberale godtar omfattende sosiale ordninger, noe som splitter tradisjonen.'
          },
          tags: ['liberalism', 'classical', 'modern', 'historiography']
        }
      ]
    },
    {
      slug: 'conservatism',
      name: { en: 'Conservatism', no: 'Konservatisme' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'What does conservatism generally want to preserve?',
            no: 'Hva ønsker konservatismen generelt å bevare?'
          },
          answers: [
            { en: 'A single global government', no: 'Én verdensregjering' },
            { en: 'Established traditions and institutions', no: 'Etablerte tradisjoner og institusjoner' },
            { en: 'Constant revolution', no: 'Konstant revolusjon' },
            { en: 'The abolition of private property', no: 'Avskaffelsen av privat eiendom' }
          ],
          correct: 1,
          explanation: {
            en: 'Conservatism seeks to preserve established traditions, institutions and social order.',
            no: 'Konservatismen søker å bevare etablerte tradisjoner, institusjoner og samfunnsorden.'
          },
          tags: ['conservatism', 'tradition', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which thinker is often called the "father of conservatism"?',
            no: 'Hvilken tenker blir ofte kalt «konservatismens far»?'
          },
          answers: [
            { en: 'Adam Smith', no: 'Adam Smith' },
            { en: 'Karl Marx', no: 'Karl Marx' },
            { en: 'Edmund Burke', no: 'Edmund Burke' },
            { en: 'John Locke', no: 'John Locke' }
          ],
          correct: 2,
          explanation: {
            en: 'Edmund Burke, who criticised the French Revolution, is widely regarded as the father of modern conservatism.',
            no: 'Edmund Burke, som kritiserte den franske revolusjonen, regnes vidt som den moderne konservatismens far.'
          },
          tags: ['conservatism', 'burke', 'philosophers']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'How does conservatism generally view rapid, radical change?',
            no: 'Hvordan ser konservatismen generelt på rask, radikal endring?'
          },
          answers: [
            { en: 'As always desirable', no: 'Som alltid ønskelig' },
            { en: 'As the main goal of politics', no: 'Som politikkens hovedmål' },
            { en: 'As required every year', no: 'Som nødvendig hvert år' },
            { en: 'With caution and scepticism', no: 'Med forsiktighet og skepsis' }
          ],
          correct: 3,
          explanation: {
            en: 'Conservatives are cautious about rapid, radical change, preferring gradual reform.',
            no: 'Konservative er forsiktige med rask, radikal endring og foretrekker gradvis reform.'
          },
          tags: ['conservatism', 'change', 'caution']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which event did Edmund Burke famously criticise?',
            no: 'Hvilken hendelse kritiserte Edmund Burke berømt?'
          },
          answers: [
            { en: 'The French Revolution', no: 'Den franske revolusjonen' },
            { en: 'The Renaissance', no: 'Renessansen' },
            { en: 'The Reformation', no: 'Reformasjonen' },
            { en: 'The Industrial Revolution', no: 'Den industrielle revolusjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Burke\'s "Reflections on the Revolution in France" (1790) criticised the radical upheaval of the French Revolution.',
            no: 'Burkes «Betraktninger om revolusjonen i Frankrike» (1790) kritiserte den radikale omveltningen i den franske revolusjonen.'
          },
          tags: ['conservatism', 'burke', 'french-revolution']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which value is especially important in conservatism?',
            no: 'Hvilken verdi er særlig viktig i konservatismen?'
          },
          answers: [
            { en: 'Removing all institutions', no: 'Å fjerne alle institusjoner' },
            { en: 'Order and stability', no: 'Orden og stabilitet' },
            { en: 'Permanent revolution', no: 'Permanent revolusjon' },
            { en: 'Abolishing the family', no: 'Å avskaffe familien' }
          ],
          correct: 1,
          explanation: {
            en: 'Conservatives place a high value on social order and stability.',
            no: 'Konservative legger stor vekt på samfunnsorden og stabilitet.'
          },
          tags: ['conservatism', 'order', 'values']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'How do conservatives usually regard long-standing institutions like the family or church?',
            no: 'Hvordan ser konservative vanligvis på langvarige institusjoner som familien eller kirken?'
          },
          answers: [
            { en: 'As irrelevant to politics', no: 'Som irrelevante for politikken' },
            { en: 'As harmful and outdated', no: 'Som skadelige og utdaterte' },
            { en: 'As valuable foundations of society', no: 'Som verdifulle grunnpilarer i samfunnet' },
            { en: 'As things to abolish immediately', no: 'Som ting å avskaffe umiddelbart' }
          ],
          correct: 2,
          explanation: {
            en: 'Conservatives value long-standing institutions such as family, religion and community as foundations of social order.',
            no: 'Konservative verdsetter langvarige institusjoner som familie, religion og fellesskap som grunnpilarer i samfunnsordenen.'
          },
          tags: ['conservatism', 'institutions', 'family']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does "tradition" mean in conservative thought?',
            no: 'Hva betyr «tradisjon» i konservativ tenkning?'
          },
          answers: [
            { en: 'New rules invented each year', no: 'Nye regler oppfunnet hvert år' },
            { en: 'Foreign laws imposed by force', no: 'Utenlandske lover påtvunget med makt' },
            { en: 'Plans for total social change', no: 'Planer for total samfunnsendring' },
            { en: 'Customs and practices passed down over time', no: 'Skikker og praksiser overlevert gjennom tid' }
          ],
          correct: 3,
          explanation: {
            en: 'Tradition refers to customs, values and practices handed down through generations, which conservatives respect.',
            no: 'Tradisjon viser til skikker, verdier og praksiser overlevert gjennom generasjoner, som konservative respekterer.'
          },
          tags: ['conservatism', 'tradition', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Conservatives often argue that human nature is:',
            no: 'Konservative hevder ofte at menneskets natur er:'
          },
          answers: [
            { en: 'Imperfect and limited', no: 'Ufullkommen og begrenset' },
            { en: 'Identical for everyone in all ways', no: 'Identisk for alle på alle måter' },
            { en: 'Determined only by the state', no: 'Bestemt bare av staten' },
            { en: 'Perfectible through revolution', no: 'Mulig å fullkommengjøre gjennom revolusjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Conservatives tend to see human nature as imperfect, which makes them sceptical of utopian schemes.',
            no: 'Konservative har en tendens til å se menneskets natur som ufullkommen, noe som gjør dem skeptiske til utopiske prosjekter.'
          },
          tags: ['conservatism', 'human-nature', 'philosophy']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which approach to reform do conservatives generally prefer?',
            no: 'Hvilken tilnærming til reform foretrekker konservative generelt?'
          },
          answers: [
            { en: 'Sudden and total change', no: 'Plutselig og total endring' },
            { en: 'Gradual, careful change', no: 'Gradvis, forsiktig endring' },
            { en: 'No change is ever allowed', no: 'Ingen endring er noensinne tillatt' },
            { en: 'Change decided by lottery', no: 'Endring avgjort ved loddtrekning' }
          ],
          correct: 1,
          explanation: {
            en: 'Conservatives generally prefer gradual, cautious reform over sudden upheaval.',
            no: 'Konservative foretrekker generelt gradvis, forsiktig reform framfor plutselig omveltning.'
          },
          tags: ['conservatism', 'reform', 'change']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Many conservatives support a market economy combined with:',
            no: 'Mange konservative støtter markedsøkonomi kombinert med:'
          },
          answers: [
            { en: 'Abolition of private property', no: 'Avskaffelse av privat eiendom' },
            { en: 'A ban on all trade', no: 'Forbud mot all handel' },
            { en: 'Respect for tradition and social order', no: 'Respekt for tradisjon og samfunnsorden' },
            { en: 'Total state ownership', no: 'Fullt statlig eierskap' }
          ],
          correct: 2,
          explanation: {
            en: 'Many modern conservatives combine support for a market economy with respect for tradition and social order.',
            no: 'Mange moderne konservative kombinerer støtte til markedsøkonomi med respekt for tradisjon og samfunnsorden.'
          },
          tags: ['conservatism', 'economy', 'order']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is "social order" for conservatives?',
            no: 'Hva er «samfunnsorden» for konservative?'
          },
          answers: [
            { en: 'A society with no rules', no: 'Et samfunn uten regler' },
            { en: 'Constant street protest', no: 'Konstante gatedemonstrasjoner' },
            { en: 'Rule by chance', no: 'Styre ved tilfeldighet' },
            { en: 'A stable, structured society with shared rules', no: 'Et stabilt, strukturert samfunn med felles regler' }
          ],
          correct: 3,
          explanation: {
            en: 'Conservatives view social order as a stable, structured society held together by shared rules and institutions.',
            no: 'Konservative ser samfunnsorden som et stabilt, strukturert samfunn holdt sammen av felles regler og institusjoner.'
          },
          tags: ['conservatism', 'order', 'society']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Conservatism first emerged as a clear movement largely in reaction to which century\'s revolutions?',
            no: 'Konservatismen vokste først fram som en tydelig bevegelse hovedsakelig som reaksjon på revolusjonene i hvilket århundre?'
          },
          answers: [
            { en: 'The late 18th century', no: 'Sent på 1700-tallet' },
            { en: 'The 5th century', no: 'På 400-tallet' },
            { en: 'The 21st century', no: 'På 2000-tallet' },
            { en: 'The 1st century', no: 'På 100-tallet' }
          ],
          correct: 0,
          explanation: {
            en: 'Modern conservatism emerged in the late 18th century, especially as a reaction to the French Revolution.',
            no: 'Moderne konservatisme vokste fram sent på 1700-tallet, særlig som en reaksjon på den franske revolusjonen.'
          },
          tags: ['conservatism', 'history', 'origins']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which phrase best fits a conservative attitude?',
            no: 'Hvilket uttrykk passer best med en konservativ holdning?'
          },
          answers: [
            { en: '"Tear it all down and start over"', no: '«Riv alt ned og start på nytt»' },
            { en: '"If it works, be careful about changing it"', no: '«Hvis det fungerer, vær forsiktig med å endre det»' },
            { en: '"Property should be abolished"', no: '«Eiendom bør avskaffes»' },
            { en: '"The past is worthless"', no: '«Fortiden er verdiløs»' }
          ],
          correct: 1,
          explanation: {
            en: 'Conservatives favour preserving what works and changing it only carefully.',
            no: 'Konservative foretrekker å bevare det som fungerer og endre det bare forsiktig.'
          },
          tags: ['conservatism', 'attitude', 'change']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which idea is most associated with conservatism?',
            no: 'Hvilken idé forbindes mest med konservatisme?'
          },
          answers: [
            { en: 'Abolition of all hierarchy', no: 'Avskaffelse av alt hierarki' },
            { en: 'A world without nations', no: 'En verden uten nasjoner' },
            { en: 'Continuity with the past', no: 'Kontinuitet med fortiden' },
            { en: 'Permanent class warfare', no: 'Permanent klassekamp' }
          ],
          correct: 2,
          explanation: {
            en: 'Continuity with the past—building on inherited wisdom and institutions—is central to conservatism.',
            no: 'Kontinuitet med fortiden—å bygge på nedarvet visdom og institusjoner—står sentralt i konservatismen.'
          },
          tags: ['conservatism', 'continuity', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Conservatives often emphasise the importance of:',
            no: 'Konservative legger ofte vekt på betydningen av:'
          },
          answers: [
            { en: 'Abolishing the police and courts', no: 'Å avskaffe politiet og domstolene' },
            { en: 'Ending all national borders', no: 'Å avskaffe alle nasjonale grenser' },
            { en: 'Replacing families with the state', no: 'Å erstatte familier med staten' },
            { en: 'Law, order and personal responsibility', no: 'Lov, orden og personlig ansvar' }
          ],
          correct: 3,
          explanation: {
            en: 'Conservatives commonly stress law and order alongside personal and family responsibility.',
            no: 'Konservative vektlegger gjerne lov og orden sammen med personlig ansvar og familieansvar.'
          },
          tags: ['conservatism', 'order', 'responsibility']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did Burke argue that society is a partnership between past, present and future generations?',
            no: 'Hvorfor hevdet Burke at samfunnet er et partnerskap mellom fortidens, nåtidens og framtidens generasjoner?'
          },
          answers: [
            { en: 'To stress that we inherit and must hand on a social order', no: 'For å understreke at vi arver og må føre videre en samfunnsorden' },
            { en: 'To argue that only the present matters', no: 'For å hevde at bare nåtiden betyr noe' },
            { en: 'To support permanent revolution', no: 'For å støtte permanent revolusjon' },
            { en: 'To justify destroying inherited institutions', no: 'For å rettferdiggjøre ødeleggelse av nedarvede institusjoner' }
          ],
          correct: 0,
          explanation: {
            en: 'Burke saw society as an inheritance across generations, which is why radical change should be approached with care.',
            no: 'Burke så samfunnet som en arv på tvers av generasjoner, og derfor bør radikal endring gripes an med forsiktighet.'
          },
          tags: ['conservatism', 'burke', 'generations']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does conservatism differ from liberalism on the role of tradition?',
            no: 'Hvordan skiller konservatismen seg fra liberalismen når det gjelder tradisjonens rolle?'
          },
          answers: [
            { en: 'Both reject the rule of law', no: 'Begge forkaster rettsstaten' },
            { en: 'Conservatives weigh tradition more heavily than abstract reason', no: 'Konservative vektlegger tradisjon tyngre enn abstrakt fornuft' },
            { en: 'Conservatives reject all tradition', no: 'Konservative forkaster all tradisjon' },
            { en: 'Liberals value tradition above reason', no: 'Liberale verdsetter tradisjon over fornuft' }
          ],
          correct: 1,
          explanation: {
            en: 'Conservatives trust inherited tradition and experience, while liberals tend to rely more on abstract reason and reform.',
            no: 'Konservative stoler på nedarvet tradisjon og erfaring, mens liberale har en tendens til å stole mer på abstrakt fornuft og reform.'
          },
          tags: ['conservatism', 'liberalism', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is "pragmatism" in conservative politics?',
            no: 'Hva er «pragmatisme» i konservativ politikk?'
          },
          answers: [
            { en: 'Following a fixed plan no matter what', no: 'Å følge en fast plan uansett' },
            { en: 'Strict loyalty to a single rigid ideology', no: 'Streng lojalitet til én rigid ideologi' },
            { en: 'Judging policies by practical results rather than abstract theory', no: 'Å vurdere politikk ut fra praktiske resultater framfor abstrakt teori' },
            { en: 'Rejecting all compromise', no: 'Å avvise ethvert kompromiss' }
          ],
          correct: 2,
          explanation: {
            en: 'Conservative pragmatism means judging policy by what works in practice rather than by abstract theory.',
            no: 'Konservativ pragmatisme betyr å vurdere politikk etter hva som fungerer i praksis framfor abstrakt teori.'
          },
          tags: ['conservatism', 'pragmatism', 'approach']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How do conservatives often justify social hierarchy?',
            no: 'Hvordan rettferdiggjør konservative ofte sosialt hierarki?'
          },
          answers: [
            { en: 'As something to abolish completely', no: 'Som noe som skal avskaffes fullstendig' },
            { en: 'As a foreign invention with no value', no: 'Som en utenlandsk oppfinnelse uten verdi' },
            { en: 'As proof that revolution is needed', no: 'Som bevis på at revolusjon trengs' },
            { en: 'As natural and useful for social stability', no: 'Som naturlig og nyttig for samfunnsstabilitet' }
          ],
          correct: 3,
          explanation: {
            en: 'Many conservatives view some degree of hierarchy as natural and as contributing to order and stability.',
            no: 'Mange konservative ser en viss grad av hierarki som naturlig og som et bidrag til orden og stabilitet.'
          },
          tags: ['conservatism', 'hierarchy', 'order']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is "one-nation conservatism" associated with Benjamin Disraeli?',
            no: 'Hva er «én-nasjons-konservatisme» knyttet til Benjamin Disraeli?'
          },
          answers: [
            { en: 'The idea that the wealthy have duties to the poor to keep society united', no: 'Ideen om at de velstående har plikter overfor de fattige for å holde samfunnet samlet' },
            { en: 'The belief that classes should fight each other', no: 'Troen på at klassene bør bekjempe hverandre' },
            { en: 'A call to abolish the monarchy', no: 'Et krav om å avskaffe monarkiet' },
            { en: 'A demand for world revolution', no: 'Et krav om verdensrevolusjon' }
          ],
          correct: 0,
          explanation: {
            en: 'One-nation conservatism holds that the better-off have obligations to the less fortunate to maintain social unity.',
            no: 'Én-nasjons-konservatisme hevder at de bedrestilte har forpliktelser overfor de mindre heldige for å bevare samfunnets enhet.'
          },
          tags: ['conservatism', 'disraeli', 'one-nation']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why are many conservatives sceptical of grand utopian plans?',
            no: 'Hvorfor er mange konservative skeptiske til store utopiske planer?'
          },
          answers: [
            { en: 'They want faster revolution instead', no: 'De ønsker raskere revolusjon i stedet' },
            { en: 'They believe human knowledge and nature are too limited for them to succeed', no: 'De mener menneskelig kunnskap og natur er for begrenset til at de kan lykkes' },
            { en: 'They think utopias are always achievable', no: 'De mener utopier alltid er oppnåelige' },
            { en: 'They reject any kind of planning', no: 'De avviser enhver form for planlegging' }
          ],
          correct: 1,
          explanation: {
            en: 'Conservatives doubt that imperfect humans can perfectly redesign society, so they distrust utopian schemes.',
            no: 'Konservative tviler på at ufullkomne mennesker kan redesigne samfunnet perfekt, og er derfor mistroiske til utopiske prosjekter.'
          },
          tags: ['conservatism', 'utopia', 'human-nature']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does conservatism typically view the nation and patriotism?',
            no: 'Hvordan ser konservatismen typisk på nasjonen og patriotisme?'
          },
          answers: [
            { en: 'As tools only for revolution', no: 'Som verktøy bare for revolusjon' },
            { en: 'As irrelevant to politics', no: 'Som irrelevante for politikken' },
            { en: 'As sources of identity and loyalty worth preserving', no: 'Som kilder til identitet og lojalitet verdt å bevare' },
            { en: 'As outdated ideas to be abolished', no: 'Som utdaterte ideer som skal avskaffes' }
          ],
          correct: 2,
          explanation: {
            en: 'Conservatives generally value the nation and patriotism as important sources of shared identity and stability.',
            no: 'Konservative verdsetter generelt nasjonen og patriotisme som viktige kilder til felles identitet og stabilitet.'
          },
          tags: ['conservatism', 'nation', 'patriotism']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a key difference between conservatism and reactionary politics?',
            no: 'Hva er en sentral forskjell mellom konservatisme og reaksjonær politikk?'
          },
          answers: [
            { en: 'Conservatives demand instant revolution', no: 'Konservative krever umiddelbar revolusjon' },
            { en: 'Reactionaries reject all tradition', no: 'Reaksjonære forkaster all tradisjon' },
            { en: 'There is no difference at all', no: 'Det er ingen forskjell i det hele tatt' },
            { en: 'Conservatives preserve and reform; reactionaries seek to restore a vanished past', no: 'Konservative bevarer og reformerer; reaksjonære søker å gjenopprette en forsvunnet fortid' }
          ],
          correct: 3,
          explanation: {
            en: 'Conservatives aim to preserve and cautiously reform the present, whereas reactionaries want to restore an earlier order.',
            no: 'Konservative søker å bevare og forsiktig reformere nåtiden, mens reaksjonære vil gjenopprette en tidligere orden.'
          },
          tags: ['conservatism', 'reaction', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why do conservatives often value local communities and "small platoons"?',
            no: 'Hvorfor verdsetter konservative ofte lokalsamfunn og «små bataljoner»?'
          },
          answers: [
            { en: 'They see them as building social trust and limiting state power', no: 'De ser dem som byggere av sosial tillit og en begrensning på statsmakten' },
            { en: 'They want them replaced by central planning', no: 'De ønsker dem erstattet av sentral planlegging' },
            { en: 'They regard them as dangerous to order', no: 'De ser dem som farlige for ordenen' },
            { en: 'They believe only the state should organise people', no: 'De mener bare staten bør organisere folk' }
          ],
          correct: 0,
          explanation: {
            en: 'Burke\'s "little platoons"—family, neighbourhood, local groups—are valued for building loyalty and restraining the state.',
            no: 'Burkes «små bataljoner»—familie, nabolag, lokale grupper—verdsettes for å bygge lojalitet og tøyle staten.'
          },
          tags: ['conservatism', 'community', 'burke']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did conservatism respond to the rise of socialism in the 19th century?',
            no: 'Hvordan reagerte konservatismen på sosialismens framvekst på 1800-tallet?'
          },
          answers: [
            { en: 'By adopting socialism wholesale', no: 'Ved å adoptere sosialismen fullstendig' },
            { en: 'By defending property and order, sometimes accepting limited social reform', no: 'Ved å forsvare eiendom og orden, og iblant godta begrenset sosial reform' },
            { en: 'By demanding the abolition of all property', no: 'Ved å kreve avskaffelse av all eiendom' },
            { en: 'By rejecting the nation-state', no: 'Ved å forkaste nasjonalstaten' }
          ],
          correct: 1,
          explanation: {
            en: 'Conservatives defended property and order against socialism, while some accepted limited reforms to ease social tensions.',
            no: 'Konservative forsvarte eiendom og orden mot sosialismen, mens noen godtok begrensede reformer for å dempe sosiale spenninger.'
          },
          tags: ['conservatism', 'socialism', 'context']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What do conservatives mean when they speak of "prudence" in politics?',
            no: 'Hva mener konservative når de snakker om «klokskap» (prudens) i politikken?'
          },
          answers: [
            { en: 'Ignoring all practical effects', no: 'Å ignorere alle praktiske virkninger' },
            { en: 'Following theory regardless of outcome', no: 'Å følge teori uavhengig av utfall' },
            { en: 'Acting cautiously, weighing consequences before changing things', no: 'Å handle forsiktig og veie konsekvenser før man endrer ting' },
            { en: 'Acting as quickly as possible', no: 'Å handle så raskt som mulig' }
          ],
          correct: 2,
          explanation: {
            en: 'Prudence, a key conservative virtue, means weighing likely consequences and acting with caution.',
            no: 'Klokskap, en sentral konservativ dyd, betyr å veie sannsynlige konsekvenser og handle med forsiktighet.'
          },
          tags: ['conservatism', 'prudence', 'values']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does conservatism generally view property rights?',
            no: 'Hvordan ser konservatismen generelt på eiendomsrett?'
          },
          answers: [
            { en: 'As something that should be abolished', no: 'Som noe som bør avskaffes' },
            { en: 'As belonging only to the state', no: 'Som noe som bare tilhører staten' },
            { en: 'As unrelated to liberty', no: 'Som uten sammenheng med frihet' },
            { en: 'As a foundation of freedom and social stability', no: 'Som et grunnlag for frihet og samfunnsstabilitet' }
          ],
          correct: 3,
          explanation: {
            en: 'Conservatives see private property as a basis for individual freedom and a stable social order.',
            no: 'Konservative ser privat eiendom som et grunnlag for individuell frihet og en stabil samfunnsorden.'
          },
          tags: ['conservatism', 'property', 'order']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why might a conservative support an established church or shared moral values?',
            no: 'Hvorfor kan en konservativ støtte en statskirke eller felles moralske verdier?'
          },
          answers: [
            { en: 'To help bind society together and sustain shared norms', no: 'For å bidra til å binde samfunnet sammen og opprettholde felles normer' },
            { en: 'To start a revolution', no: 'For å starte en revolusjon' },
            { en: 'To abolish all religion', no: 'For å avskaffe all religion' },
            { en: 'To weaken social cohesion', no: 'For å svekke samfunnets samhold' }
          ],
          correct: 0,
          explanation: {
            en: 'Conservatives often see shared faith and moral values as helping hold society together.',
            no: 'Konservative ser ofte felles tro og moralske verdier som noe som bidrar til å holde samfunnet sammen.'
          },
          tags: ['conservatism', 'religion', 'cohesion']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does Michael Oakeshott\'s view of conservatism as a "disposition" differ from treating it as an ideology?',
            no: 'Hvordan skiller Michael Oakeshotts syn på konservatisme som en «legning» seg fra å behandle den som en ideologi?'
          },
          answers: [
            { en: 'He rejected tradition entirely', no: 'Han forkastet tradisjon fullstendig' },
            { en: 'He saw it as a temperament preferring the familiar, not a fixed doctrine', no: 'Han så den som et temperament som foretrekker det kjente, ikke en fast lære' },
            { en: 'He treated it as a rigid revolutionary programme', no: 'Han behandlet den som et rigid revolusjonært program' },
            { en: 'He argued it requires a detailed utopian blueprint', no: 'Han hevdet den krever en detaljert utopisk plan' }
          ],
          correct: 1,
          explanation: {
            en: 'Oakeshott described conservatism as a disposition to "prefer the familiar to the unknown," rather than a systematic ideology.',
            no: 'Oakeshott beskrev konservatisme som en legning til å «foretrekke det kjente framfor det ukjente», snarere enn en systematisk ideologi.'
          },
          tags: ['conservatism', 'oakeshott', 'theory']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the central tension within "fusionism" in modern conservatism?',
            no: 'Hva er den sentrale spenningen i «fusjonismen» i moderne konservatisme?'
          },
          answers: [
            { en: 'Between two identical free-market parties', no: 'Mellom to identiske frimarkedspartier' },
            { en: 'Between abolishing and keeping elections', no: 'Mellom å avskaffe og beholde valg' },
            { en: 'Between free-market individualism and traditional moral order', no: 'Mellom frimarkedsindividualisme og tradisjonell moralsk orden' },
            { en: 'Between monarchy and republic', no: 'Mellom monarki og republikk' }
          ],
          correct: 2,
          explanation: {
            en: 'Fusionism tries to combine free-market libertarianism with traditional moral and social conservatism, an uneasy balance.',
            no: 'Fusjonismen forsøker å forene frimarkedslibertarianisme med tradisjonell moralsk og sosial konservatisme, en uavklart balanse.'
          },
          tags: ['conservatism', 'fusionism', 'tension']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do some scholars argue conservatism is inherently context-dependent?',
            no: 'Hvorfor hevder enkelte forskere at konservatismen i seg selv er kontekstavhengig?'
          },
          answers: [
            { en: 'Because it has one fixed programme for all times', no: 'Fordi den har ett fast program for alle tider' },
            { en: 'Because it rejects all national differences', no: 'Fordi den forkaster alle nasjonale forskjeller' },
            { en: 'Because it always demands revolution', no: 'Fordi den alltid krever revolusjon' },
            { en: 'Because what it seeks to conserve depends on the existing order in each society', no: 'Fordi hva den søker å bevare avhenger av den eksisterende ordenen i hvert samfunn' }
          ],
          correct: 3,
          explanation: {
            en: 'Since conservatism defends existing institutions, its concrete content varies with what each society has inherited.',
            no: 'Siden konservatismen forsvarer eksisterende institusjoner, varierer dens konkrete innhold med hva hvert samfunn har arvet.'
          },
          tags: ['conservatism', 'context', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does Burke\'s defence of "prejudice" function in his argument?',
            no: 'Hvordan fungerer Burkes forsvar av «fordom» i hans argument?'
          },
          answers: [
            { en: 'He used it to mean inherited, time-tested wisdom rather than mere bias', no: 'Han brukte det i betydningen nedarvet, tidsprøvd visdom snarere enn ren forutinntatthet' },
            { en: 'He used it to demand the abolition of all custom', no: 'Han brukte det for å kreve avskaffelse av all skikk' },
            { en: 'He meant blind hatred of foreigners', no: 'Han mente blindt hat mot utlendinger' },
            { en: 'He rejected all inherited ideas', no: 'Han forkastet alle nedarvede ideer' }
          ],
          correct: 0,
          explanation: {
            en: 'For Burke, "prejudice" meant the accumulated, often unspoken wisdom embedded in custom and tradition.',
            no: 'For Burke betydde «fordom» den akkumulerte, ofte uuttalte visdommen som ligger i skikk og tradisjon.'
          },
          tags: ['conservatism', 'burke', 'prejudice']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a common critique of conservatism from progressive thinkers?',
            no: 'Hva er en vanlig kritikk av konservatismen fra progressive tenkere?'
          },
          answers: [
            { en: 'That it opposes private property', no: 'At den motsetter seg privat eiendom' },
            { en: 'That defending existing order can preserve injustice and inequality', no: 'At forsvar av eksisterende orden kan bevare urettferdighet og ulikhet' },
            { en: 'That it always demands too much change', no: 'At den alltid krever for mye endring' },
            { en: 'That it rejects all institutions', no: 'At den forkaster alle institusjoner' }
          ],
          correct: 1,
          explanation: {
            en: 'Critics argue that by defending the status quo, conservatism can entrench existing injustices and inequalities.',
            no: 'Kritikere hevder at konservatismen, ved å forsvare status quo, kan sementere eksisterende urettferdighet og ulikhet.'
          },
          tags: ['conservatism', 'critique', 'inequality']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did Cold War conservatism in the United States blend different strands?',
            no: 'Hvordan blandet konservatismen under den kalde krigen i USA ulike strømninger?'
          },
          answers: [
            { en: 'It rejected free markets entirely', no: 'Den forkastet frie markeder fullstendig' },
            { en: 'It abandoned anti-communism', no: 'Den oppga antikommunismen' },
            { en: 'It combined anti-communism, free markets and traditional values', no: 'Den kombinerte antikommunisme, frie markeder og tradisjonelle verdier' },
            { en: 'It merged Marxism with monarchism', no: 'Den forente marxisme med monarkisme' }
          ],
          correct: 2,
          explanation: {
            en: 'American Cold War conservatism fused anti-communism, free-market economics and traditional social values.',
            no: 'Amerikansk konservatisme under den kalde krigen smeltet sammen antikommunisme, frimarkedsøkonomi og tradisjonelle sosiale verdier.'
          },
          tags: ['conservatism', 'cold-war', 'usa']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is there tension between traditional conservatism and free-market neoliberalism?',
            no: 'Hvorfor er det spenning mellom tradisjonell konservatisme og frimarkedsnyliberalisme?'
          },
          answers: [
            { en: 'Both reject private property', no: 'Begge forkaster privat eiendom' },
            { en: 'Neoliberals demand a return to feudalism', no: 'Nyliberale krever en tilbakevending til føydalisme' },
            { en: 'Traditional conservatives oppose all order', no: 'Tradisjonelle konservative motsetter seg all orden' },
            { en: 'Unrestrained markets can disrupt the very traditions and communities conservatives value', no: 'Uhemmede markeder kan forstyrre nettopp de tradisjonene og fellesskapene konservative verdsetter' }
          ],
          correct: 3,
          explanation: {
            en: 'Dynamic, free markets can erode local communities and traditions, creating tension with conservatism\'s emphasis on continuity.',
            no: 'Dynamiske, frie markeder kan undergrave lokalsamfunn og tradisjoner, noe som skaper spenning med konservatismens vekt på kontinuitet.'
          },
          tags: ['conservatism', 'neoliberalism', 'tension']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do conservatives typically respond to the idea of abstract universal rights?',
            no: 'Hvordan reagerer konservative typisk på ideen om abstrakte universelle rettigheter?'
          },
          answers: [
            { en: 'They often prefer concrete inherited rights rooted in specific traditions', no: 'De foretrekker ofte konkrete nedarvede rettigheter forankret i bestemte tradisjoner' },
            { en: 'They reject the idea of any rights', no: 'De forkaster ideen om noen rettigheter' },
            { en: 'They demand abstract rights above all else', no: 'De krever abstrakte rettigheter framfor alt' },
            { en: 'They believe rights come only from revolution', no: 'De mener rettigheter bare kommer fra revolusjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Following Burke, conservatives are often sceptical of abstract universal rights, preferring concrete rights grounded in tradition.',
            no: 'I tråd med Burke er konservative ofte skeptiske til abstrakte universelle rettigheter og foretrekker konkrete rettigheter forankret i tradisjon.'
          },
          tags: ['conservatism', 'rights', 'burke']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What distinguishes "national conservatism" in recent debates?',
            no: 'Hva kjennetegner «nasjonalkonservatisme» i nyere debatter?'
          },
          answers: [
            { en: 'Rejection of all tradition', no: 'Avvisning av all tradisjon' },
            { en: 'A stronger emphasis on national sovereignty, borders and cultural identity', no: 'En sterkere vektlegging av nasjonal suverenitet, grenser og kulturell identitet' },
            { en: 'A demand to abolish the nation-state', no: 'Et krav om å avskaffe nasjonalstaten' },
            { en: 'Support for world government', no: 'Støtte til verdensregjering' }
          ],
          correct: 1,
          explanation: {
            en: 'National conservatism stresses national sovereignty, secure borders and cultural identity over globalising tendencies.',
            no: 'Nasjonalkonservatismen vektlegger nasjonal suverenitet, sikre grenser og kulturell identitet framfor globaliserende tendenser.'
          },
          tags: ['conservatism', 'nationalism', 'modern']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do scholars debate whether conservatism is a coherent ideology at all?',
            no: 'Hvorfor diskuterer forskere om konservatismen i det hele tatt er en sammenhengende ideologi?'
          },
          answers: [
            { en: 'Because it never engages with tradition', no: 'Fordi den aldri forholder seg til tradisjon' },
            { en: 'Because it demands constant revolution', no: 'Fordi den krever konstant revolusjon' },
            { en: 'Because it reacts to circumstances and lacks a single fixed doctrine', no: 'Fordi den reagerer på omstendigheter og mangler én fast lære' },
            { en: 'Because it has one detailed plan for all societies', no: 'Fordi den har én detaljert plan for alle samfunn' }
          ],
          correct: 2,
          explanation: {
            en: 'Because conservatism largely responds to what exists, some argue it is more a disposition than a fixed, coherent ideology.',
            no: 'Fordi konservatismen i stor grad reagerer på det bestående, hevder noen at den er mer en legning enn en fast, sammenhengende ideologi.'
          },
          tags: ['conservatism', 'theory', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does conservative scepticism of reason relate to its view of social change?',
            no: 'Hvordan henger konservativ skepsis til fornuften sammen med dens syn på samfunnsendring?'
          },
          answers: [
            { en: 'It leads conservatives to demand instant revolution', no: 'Det fører konservative til å kreve umiddelbar revolusjon' },
            { en: 'It makes them reject all experience', no: 'Det får dem til å forkaste all erfaring' },
            { en: 'It removes any role for tradition', no: 'Det fjerner enhver rolle for tradisjon' },
            { en: 'Doubting reason\'s power leads to caution about redesigning society', no: 'Tvil om fornuftens kraft fører til forsiktighet med å redesigne samfunnet' }
          ],
          correct: 3,
          explanation: {
            en: 'Because conservatives doubt that abstract reason can fully grasp complex societies, they favour cautious, incremental change.',
            no: 'Fordi konservative tviler på at abstrakt fornuft fullt ut kan begripe komplekse samfunn, foretrekker de forsiktig, gradvis endring.'
          },
          tags: ['conservatism', 'reason', 'change']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What long-term influence did conservatism have on modern democratic politics?',
            no: 'Hvilken langsiktig innflytelse fikk konservatismen på moderne demokratisk politikk?'
          },
          answers: [
            { en: 'It contributed an emphasis on stability, gradual reform and institutional continuity', no: 'Den bidro med en vektlegging av stabilitet, gradvis reform og institusjonell kontinuitet' },
            { en: 'It abolished political parties', no: 'Den avskaffet politiske partier' },
            { en: 'It ended representative government', no: 'Den avsluttet representativt styre' },
            { en: 'It rejected all elections', no: 'Den forkastet alle valg' }
          ],
          correct: 0,
          explanation: {
            en: 'Conservatism contributed lasting emphases on stability, gradual reform and respect for institutions within democracies.',
            no: 'Konservatismen bidro med varige vektlegginger av stabilitet, gradvis reform og respekt for institusjoner i demokratier.'
          },
          tags: ['conservatism', 'legacy', 'democracy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does conservatism generally differ from socialism on equality?',
            no: 'Hvordan skiller konservatismen seg generelt fra sosialismen når det gjelder likhet?'
          },
          answers: [
            { en: 'Both reject private property', no: 'Begge forkaster privat eiendom' },
            { en: 'Conservatives accept some inequality as natural, while socialists seek to reduce it', no: 'Konservative godtar en viss ulikhet som naturlig, mens sosialister søker å redusere den' },
            { en: 'Conservatives demand total economic equality', no: 'Konservative krever total økonomisk likhet' },
            { en: 'Socialists oppose all redistribution', no: 'Sosialister motsetter seg all omfordeling' }
          ],
          correct: 1,
          explanation: {
            en: 'Conservatives tend to accept some inequality and hierarchy as natural, whereas socialists actively seek to reduce inequality.',
            no: 'Konservative har en tendens til å godta en viss ulikhet og hierarki som naturlig, mens sosialister aktivt søker å redusere ulikhet.'
          },
          tags: ['conservatism', 'socialism', 'equality']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did Burke object to the method of the French Revolution more than to all change?',
            no: 'Hvorfor protesterte Burke mer mot den franske revolusjonens metode enn mot all endring?'
          },
          answers: [
            { en: 'He wanted an even faster revolution', no: 'Han ønsket en enda raskere revolusjon' },
            { en: 'He supported abolishing all institutions', no: 'Han støttet avskaffelse av alle institusjoner' },
            { en: 'He opposed sweeping society away by abstract theory rather than reforming it gradually', no: 'Han motsatte seg å feie samfunnet bort med abstrakt teori framfor å reformere det gradvis' },
            { en: 'He rejected any reform whatsoever', no: 'Han forkastet enhver reform overhodet' }
          ],
          correct: 2,
          explanation: {
            en: 'Burke accepted gradual reform but condemned the Revolution\'s attempt to remake society wholesale on abstract principles.',
            no: 'Burke godtok gradvis reform, men fordømte revolusjonens forsøk på å omforme samfunnet fullstendig ut fra abstrakte prinsipper.'
          },
          tags: ['conservatism', 'burke', 'reform']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did Friedrich Hayek write an essay titled "Why I Am Not a Conservative"?',
            no: 'Hvorfor skrev Friedrich Hayek et essay med tittelen «Hvorfor jeg ikke er konservativ»?'
          },
          answers: [
            { en: 'He believed conservatism was too revolutionary', no: 'Han mente konservatismen var for revolusjonær' },
            { en: 'He rejected all free markets', no: 'Han forkastet alle frie markeder' },
            { en: 'He wanted to abolish private property', no: 'Han ville avskaffe privat eiendom' },
            { en: 'He argued conservatism merely resists change without offering a direction or defending liberty', no: 'Han hevdet at konservatismen bare motsetter seg endring uten å gi en retning eller forsvare friheten' }
          ],
          correct: 3,
          explanation: {
            en: 'Hayek, a classical liberal, argued conservatism only brakes change and lacks principles to defend liberty and progress.',
            no: 'Hayek, en klassisk liberal, hevdet at konservatismen bare bremser endring og mangler prinsipper for å forsvare frihet og framgang.'
          },
          tags: ['conservatism', 'hayek', 'critique']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do Anglo-American and continental European conservatism tend to differ?',
            no: 'Hvordan skiller angloamerikansk og kontinentaleuropeisk konservatisme seg vanligvis fra hverandre?'
          },
          answers: [
            { en: 'Anglo-American conservatism leans more toward markets; continental forms stressed church, monarchy and hierarchy', no: 'Angloamerikansk konservatisme heller mer mot markeder; kontinentale former vektla kirke, monarki og hierarki' },
            { en: 'They are identical in every respect', no: 'De er identiske i alle henseender' },
            { en: 'Both demanded the abolition of the state', no: 'Begge krevde avskaffelse av staten' },
            { en: 'Both rejected all tradition', no: 'Begge forkastet all tradisjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Anglo-American conservatism often blends with market liberalism, while older continental conservatism leaned on church, throne and social hierarchy.',
            no: 'Angloamerikansk konservatisme blandes ofte med markedsliberalisme, mens eldre kontinental konservatisme støttet seg på kirke, trone og sosialt hierarki.'
          },
          tags: ['conservatism', 'comparison', 'national-variation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the conservative defence of tradition sometimes accused of being self-serving?',
            no: 'Hvorfor anklages det konservative forsvaret av tradisjon noen ganger for å være egennyttig?'
          },
          answers: [
            { en: 'Critics say it rejects all institutions', no: 'Kritikere sier det forkaster alle institusjoner' },
            { en: 'Critics say it can conveniently protect the interests of those who already hold power', no: 'Kritikere sier det beleilig kan beskytte interessene til dem som allerede har makt' },
            { en: 'Critics say it always favours the poorest', no: 'Kritikere sier det alltid favoriserer de fattigste' },
            { en: 'Critics say it demands constant revolution', no: 'Kritikere sier det krever konstant revolusjon' }
          ],
          correct: 1,
          explanation: {
            en: 'Critics argue that defending inherited order can serve the interests of existing elites who benefit from the status quo.',
            no: 'Kritikere hevder at å forsvare nedarvet orden kan tjene interessene til eksisterende eliter som drar nytte av status quo.'
          },
          tags: ['conservatism', 'critique', 'power']
        }
      ]
    },
    {
      slug: 'socialism',
      name: { en: 'Socialism', no: 'Sosialisme' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'What does socialism generally emphasise?',
            no: 'Hva legger sosialismen generelt vekt på?'
          },
          answers: [
            { en: 'Unlimited private wealth', no: 'Ubegrenset privat rikdom' },
            { en: 'Rule by hereditary nobles', no: 'Styre ved arvelige adelige' },
            { en: 'Social ownership and reducing inequality', no: 'Sosialt eierskap og redusert ulikhet' },
            { en: 'Absolute monarchy', no: 'Eneveldig monarki' }
          ],
          correct: 2,
          explanation: {
            en: 'Socialism emphasises social or collective ownership and reducing economic inequality.',
            no: 'Sosialismen vektlegger sosialt eller kollektivt eierskap og reduksjon av økonomisk ulikhet.'
          },
          tags: ['socialism', 'equality', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Socialists are especially concerned with the interests of which group?',
            no: 'Sosialister er særlig opptatt av interessene til hvilken gruppe?'
          },
          answers: [
            { en: 'Monarchs', no: 'Monarker' },
            { en: 'Large landowners', no: 'Store godseiere' },
            { en: 'The nobility', no: 'Adelen' },
            { en: 'The working class', no: 'Arbeiderklassen' }
          ],
          correct: 3,
          explanation: {
            en: 'Socialism has traditionally focused on improving the conditions of the working class.',
            no: 'Sosialismen har tradisjonelt fokusert på å forbedre arbeiderklassens vilkår.'
          },
          tags: ['socialism', 'working-class', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which idea is central to socialism?',
            no: 'Hvilken idé er sentral i sosialismen?'
          },
          answers: [
            { en: 'Cooperation and solidarity', no: 'Samarbeid og solidaritet' },
            { en: 'Hereditary privilege', no: 'Arvelig privilegium' },
            { en: 'Rule by the wealthy', no: 'Styre ved de rike' },
            { en: 'Competition above all else', no: 'Konkurranse framfor alt' }
          ],
          correct: 0,
          explanation: {
            en: 'Socialism stresses cooperation and solidarity rather than pure individual competition.',
            no: 'Sosialismen vektlegger samarbeid og solidaritet framfor ren individuell konkurranse.'
          },
          tags: ['socialism', 'solidarity', 'values']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which 19th-century thinker is most associated with socialist theory?',
            no: 'Hvilken tenker fra 1800-tallet forbindes mest med sosialistisk teori?'
          },
          answers: [
            { en: 'Adam Smith', no: 'Adam Smith' },
            { en: 'Karl Marx', no: 'Karl Marx' },
            { en: 'Edmund Burke', no: 'Edmund Burke' },
            { en: 'John Locke', no: 'John Locke' }
          ],
          correct: 1,
          explanation: {
            en: 'Karl Marx is the thinker most strongly associated with socialist and communist theory.',
            no: 'Karl Marx er tenkeren som sterkest forbindes med sosialistisk og kommunistisk teori.'
          },
          tags: ['socialism', 'marx', 'philosophers']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What are the "means of production"?',
            no: 'Hva er «produksjonsmidlene»?'
          },
          answers: [
            { en: 'Votes in an election', no: 'Stemmer i et valg' },
            { en: 'The royal family', no: 'Kongefamilien' },
            { en: 'Factories, land and machinery used to produce goods', no: 'Fabrikker, jord og maskiner brukt til å produsere varer' },
            { en: 'The money in people\'s pockets', no: 'Pengene i folks lommer' }
          ],
          correct: 2,
          explanation: {
            en: 'The means of production are the resources—like factories, land and machines—used to produce goods.',
            no: 'Produksjonsmidlene er ressursene—som fabrikker, jord og maskiner—som brukes til å produsere varer.'
          },
          tags: ['socialism', 'means-of-production', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Many socialists support which kind of public services?',
            no: 'Mange sosialister støtter hvilken type offentlige tjenester?'
          },
          answers: [
            { en: 'Services only for the rich', no: 'Tjenester bare for de rike' },
            { en: 'No public services at all', no: 'Ingen offentlige tjenester i det hele tatt' },
            { en: 'Services run only for profit', no: 'Tjenester drevet bare for profitt' },
            { en: 'Free or affordable healthcare and education', no: 'Gratis eller rimelig helse og utdanning' }
          ],
          correct: 3,
          explanation: {
            en: 'Socialists typically support public services such as healthcare and education available to all.',
            no: 'Sosialister støtter typisk offentlige tjenester som helse og utdanning tilgjengelig for alle.'
          },
          tags: ['socialism', 'public-services', 'welfare']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which slogan is associated with socialist and labour movements?',
            no: 'Hvilket slagord forbindes med sosialistiske og arbeiderbevegelser?'
          },
          answers: [
            { en: '"Workers of the world, unite!"', no: '«Arbeidere i alle land, foren dere!»' },
            { en: '"The king can do no wrong"', no: '«Kongen kan ikke gjøre noe galt»' },
            { en: '"Property is sacred above all"', no: '«Eiendom er hellig framfor alt»' },
            { en: '"Tradition first"', no: '«Tradisjon først»' }
          ],
          correct: 0,
          explanation: {
            en: '"Workers of the world, unite!" comes from the Communist Manifesto and is a famous socialist slogan.',
            no: '«Arbeidere i alle land, foren dere!» kommer fra Det kommunistiske manifest og er et berømt sosialistisk slagord.'
          },
          tags: ['socialism', 'slogan', 'labour']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a "trade union"?',
            no: 'Hva er en «fagforening»?'
          },
          answers: [
            { en: 'A bank for nobles', no: 'En bank for adelige' },
            { en: 'An organisation of workers acting together for better conditions', no: 'En organisasjon av arbeidere som handler sammen for bedre vilkår' },
            { en: 'A group of factory owners', no: 'En gruppe fabrikkeiere' },
            { en: 'A royal council', no: 'Et kongelig råd' }
          ],
          correct: 1,
          explanation: {
            en: 'A trade union is an organisation of workers acting collectively for better wages and conditions, central to socialist movements.',
            no: 'En fagforening er en organisasjon av arbeidere som handler kollektivt for bedre lønn og vilkår, sentral i sosialistiske bevegelser.'
          },
          tags: ['socialism', 'trade-union', 'labour']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Socialism grew rapidly as a movement during which period?',
            no: 'Sosialismen vokste raskt som bevegelse i hvilken periode?'
          },
          answers: [
            { en: 'Ancient Egypt', no: 'Det gamle Egypt' },
            { en: 'The Bronze Age', no: 'Bronsealderen' },
            { en: 'The Industrial Revolution', no: 'Den industrielle revolusjon' },
            { en: 'The Stone Age', no: 'Steinalderen' }
          ],
          correct: 2,
          explanation: {
            en: 'Socialism expanded rapidly during the Industrial Revolution in response to harsh factory conditions.',
            no: 'Sosialismen vokste raskt under den industrielle revolusjon som svar på harde fabrikkforhold.'
          },
          tags: ['socialism', 'industrial-revolution', 'history']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does "redistribution of wealth" mean?',
            no: 'Hva betyr «omfordeling av rikdom»?'
          },
          answers: [
            { en: 'Giving all wealth to the monarch', no: 'Å gi all rikdom til monarken' },
            { en: 'Banning all taxation', no: 'Å forby all skatt' },
            { en: 'Concentrating wealth among a few', no: 'Å samle rikdom hos noen få' },
            { en: 'Moving resources to reduce the gap between rich and poor', no: 'Å flytte ressurser for å redusere gapet mellom rik og fattig' }
          ],
          correct: 3,
          explanation: {
            en: 'Redistribution means shifting resources, often through taxation and services, to reduce inequality.',
            no: 'Omfordeling betyr å flytte ressurser, ofte gjennom skatt og tjenester, for å redusere ulikhet.'
          },
          tags: ['socialism', 'redistribution', 'equality']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which colour is traditionally associated with socialism?',
            no: 'Hvilken farge forbindes tradisjonelt med sosialismen?'
          },
          answers: [
            { en: 'Red', no: 'Rød' },
            { en: 'Purple', no: 'Lilla' },
            { en: 'Gold', no: 'Gull' },
            { en: 'Brown', no: 'Brun' }
          ],
          correct: 0,
          explanation: {
            en: 'Red has long been the colour associated with socialist and labour movements.',
            no: 'Rødt har lenge vært fargen forbundet med sosialistiske og arbeiderbevegelser.'
          },
          tags: ['socialism', 'symbols', 'labour']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'A "welfare state" mainly aims to:',
            no: 'En «velferdsstat» har hovedsakelig som mål å:'
          },
          answers: [
            { en: 'End all taxation', no: 'Avskaffe all skatt' },
            { en: 'Provide social security and services to citizens', no: 'Gi sosial sikkerhet og tjenester til borgerne' },
            { en: 'Abolish all public spending', no: 'Avskaffe alle offentlige utgifter' },
            { en: 'Reward only the wealthy', no: 'Belønne bare de velstående' }
          ],
          correct: 1,
          explanation: {
            en: 'A welfare state provides social security and services—often supported by socialists—to protect citizens.',
            no: 'En velferdsstat gir sosial sikkerhet og tjenester—ofte støttet av sosialister—for å beskytte borgerne.'
          },
          tags: ['socialism', 'welfare-state', 'services']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which book did Marx and Engels publish in 1848?',
            no: 'Hvilken bok ga Marx og Engels ut i 1848?'
          },
          answers: [
            { en: 'Reflections on the Revolution in France', no: 'Betraktninger om revolusjonen i Frankrike' },
            { en: 'The Social Contract', no: 'Samfunnskontrakten' },
            { en: 'The Communist Manifesto', no: 'Det kommunistiske manifest' },
            { en: 'The Wealth of Nations', no: 'Nasjonenes velstand' }
          ],
          correct: 2,
          explanation: {
            en: 'Marx and Engels published "The Communist Manifesto" in 1848, a key text for socialism.',
            no: 'Marx og Engels ga ut «Det kommunistiske manifest» i 1848, en nøkkeltekst for sosialismen.'
          },
          tags: ['socialism', 'marx', 'manifesto']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is "nationalisation"?',
            no: 'Hva er «nasjonalisering»?'
          },
          answers: [
            { en: 'Selling all public assets', no: 'Å selge alle offentlige eiendeler' },
            { en: 'Closing all factories', no: 'Å stenge alle fabrikker' },
            { en: 'Banning trade unions', no: 'Å forby fagforeninger' },
            { en: 'Government taking ownership of an industry or company', no: 'At staten tar eierskap til en industri eller bedrift' }
          ],
          correct: 3,
          explanation: {
            en: 'Nationalisation means the state takes ownership of an industry or company, a common socialist policy.',
            no: 'Nasjonalisering betyr at staten tar eierskap til en industri eller bedrift, en vanlig sosialistisk politikk.'
          },
          tags: ['socialism', 'nationalisation', 'economy']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which goal best fits socialism?',
            no: 'Hvilket mål passer best med sosialismen?'
          },
          answers: [
            { en: 'A more equal sharing of wealth and power', no: 'En mer likeverdig fordeling av rikdom og makt' },
            { en: 'Maximising hereditary privilege', no: 'Å maksimere arvelige privilegier' },
            { en: 'Protecting absolute monarchy', no: 'Å beskytte eneveldig monarki' },
            { en: 'Concentrating all wealth in one family', no: 'Å samle all rikdom i én familie' }
          ],
          correct: 0,
          explanation: {
            en: 'Socialism aims for a more equal distribution of wealth and power in society.',
            no: 'Sosialismen sikter mot en mer likeverdig fordeling av rikdom og makt i samfunnet.'
          },
          tags: ['socialism', 'equality', 'goals']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the key difference between revolutionary and reformist socialism?',
            no: 'Hva er den sentrale forskjellen mellom revolusjonær og reformistisk sosialisme?'
          },
          answers: [
            { en: 'Whether unions should exist', no: 'Om fagforeninger bør finnes' },
            { en: 'Whether change should come through revolution or gradual democratic reform', no: 'Om endring skal komme gjennom revolusjon eller gradvis demokratisk reform' },
            { en: 'Whether to support the working class', no: 'Om man skal støtte arbeiderklassen' },
            { en: 'Whether inequality matters', no: 'Om ulikhet betyr noe' }
          ],
          correct: 1,
          explanation: {
            en: 'Revolutionary socialists seek to overthrow capitalism; reformist (social democratic) socialists pursue gradual change through elections.',
            no: 'Revolusjonære sosialister vil styrte kapitalismen; reformistiske (sosialdemokratiske) sosialister søker gradvis endring gjennom valg.'
          },
          tags: ['socialism', 'reform', 'revolution']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does social democracy differ from classical Marxist socialism?',
            no: 'Hvordan skiller sosialdemokratiet seg fra klassisk marxistisk sosialisme?'
          },
          answers: [
            { en: 'It demands a one-party state', no: 'Det krever en ettpartistat' },
            { en: 'It opposes welfare programmes', no: 'Det motsetter seg velferdsordninger' },
            { en: 'It seeks to reform capitalism through democracy rather than abolish it', no: 'Det søker å reformere kapitalismen gjennom demokrati framfor å avskaffe den' },
            { en: 'It rejects all elections', no: 'Det forkaster alle valg' }
          ],
          correct: 2,
          explanation: {
            en: 'Social democracy works within capitalism and democracy, using regulation and welfare rather than revolution.',
            no: 'Sosialdemokratiet virker innenfor kapitalismen og demokratiet, og bruker regulering og velferd framfor revolusjon.'
          },
          tags: ['socialism', 'social-democracy', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did socialism arise as a response to industrial capitalism?',
            no: 'Hvorfor oppstod sosialismen som en reaksjon på industriell kapitalisme?'
          },
          answers: [
            { en: 'Because workers were too wealthy', no: 'Fordi arbeiderne var for rike' },
            { en: 'Because factories did not yet exist', no: 'Fordi fabrikker ennå ikke fantes' },
            { en: 'Because the nobility demanded reform', no: 'Fordi adelen krevde reform' },
            { en: 'Because industrial workers faced poverty, long hours and harsh conditions', no: 'Fordi industriarbeidere møtte fattigdom, lange arbeidsdager og harde forhold' }
          ],
          correct: 3,
          explanation: {
            en: 'Socialism developed in reaction to the poverty and exploitation many workers experienced under industrial capitalism.',
            no: 'Sosialismen utviklet seg som reaksjon på fattigdommen og utbyttingen mange arbeidere opplevde under industriell kapitalisme.'
          },
          tags: ['socialism', 'capitalism', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What did "utopian socialists" like Robert Owen propose?',
            no: 'Hva foreslo «utopiske sosialister» som Robert Owen?'
          },
          answers: [
            { en: 'Building model cooperative communities to show a better way of living', no: 'Å bygge mønstersamfunn basert på samarbeid for å vise en bedre levemåte' },
            { en: 'Immediate violent revolution', no: 'Umiddelbar voldelig revolusjon' },
            { en: 'A return to absolute monarchy', no: 'En tilbakevending til eneveldig monarki' },
            { en: 'Abolishing all cooperation', no: 'Å avskaffe alt samarbeid' }
          ],
          correct: 0,
          explanation: {
            en: 'Early "utopian" socialists like Owen tried to build cooperative communities as models of a fairer society.',
            no: 'Tidlige «utopiske» sosialister som Owen forsøkte å bygge samarbeidssamfunn som modeller for et mer rettferdig samfunn.'
          },
          tags: ['socialism', 'utopian', 'owen']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does socialism generally view economic inequality compared with liberalism?',
            no: 'Hvordan ser sosialismen generelt på økonomisk ulikhet sammenlignet med liberalismen?'
          },
          answers: [
            { en: 'Socialism wants only the rich to prosper', no: 'Sosialismen vil at bare de rike skal ha det godt' },
            { en: 'Socialism sees large inequality as a problem to be actively reduced', no: 'Sosialismen ser stor ulikhet som et problem som aktivt bør reduseres' },
            { en: 'Socialism celebrates unlimited inequality', no: 'Sosialismen feirer ubegrenset ulikhet' },
            { en: 'Socialism ignores inequality entirely', no: 'Sosialismen ignorerer ulikhet fullstendig' }
          ],
          correct: 1,
          explanation: {
            en: 'Socialists see large inequalities as unjust and something the state and society should actively reduce.',
            no: 'Sosialister ser store ulikheter som urettferdige og som noe staten og samfunnet aktivt bør redusere.'
          },
          tags: ['socialism', 'inequality', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What role do trade unions play in socialist movements?',
            no: 'Hvilken rolle spiller fagforeninger i sosialistiske bevegelser?'
          },
          answers: [
            { en: 'They abolish collective bargaining', no: 'De avskaffer kollektive forhandlinger' },
            { en: 'They oppose all worker organisation', no: 'De motsetter seg all arbeiderorganisering' },
            { en: 'They organise workers to win better wages, conditions and political influence', no: 'De organiserer arbeidere for å oppnå bedre lønn, vilkår og politisk innflytelse' },
            { en: 'They represent factory owners', no: 'De representerer fabrikkeiere' }
          ],
          correct: 2,
          explanation: {
            en: 'Unions are central to socialism, organising workers for better conditions and greater political power.',
            no: 'Fagforeninger er sentrale i sosialismen, og organiserer arbeidere for bedre vilkår og større politisk makt.'
          },
          tags: ['socialism', 'unions', 'labour']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did socialism influence the development of welfare states in Europe?',
            no: 'Hvordan påvirket sosialismen utviklingen av velferdsstater i Europa?'
          },
          answers: [
            { en: 'It opposed all public spending', no: 'Den motsatte seg alle offentlige utgifter' },
            { en: 'It demanded the abolition of schools', no: 'Den krevde avskaffelse av skoler' },
            { en: 'It rejected social insurance', no: 'Den forkastet sosialforsikring' },
            { en: 'It pushed for public pensions, healthcare and education for all', no: 'Den drev fram offentlige pensjoner, helsetjenester og utdanning for alle' }
          ],
          correct: 3,
          explanation: {
            en: 'Socialist and labour parties helped create welfare states with public pensions, healthcare and education.',
            no: 'Sosialistiske partier og arbeiderpartier bidro til å skape velferdsstater med offentlige pensjoner, helsetjenester og utdanning.'
          },
          tags: ['socialism', 'welfare-state', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is meant by "class struggle" in socialist theory?',
            no: 'Hva menes med «klassekamp» i sosialistisk teori?'
          },
          answers: [
            { en: 'Conflict between social classes over wealth and power', no: 'Konflikt mellom samfunnsklasser om rikdom og makt' },
            { en: 'A sporting contest', no: 'En sportskonkurranse' },
            { en: 'A war between two nations', no: 'En krig mellom to nasjoner' },
            { en: 'A debate about tradition', no: 'En debatt om tradisjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Class struggle refers to conflict between classes—especially workers and owners—over wealth and power.',
            no: 'Klassekamp viser til konflikt mellom klasser—særlig arbeidere og eiere—om rikdom og makt.'
          },
          tags: ['socialism', 'class-struggle', 'theory']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does democratic socialism differ from communism?',
            no: 'Hvordan skiller demokratisk sosialisme seg fra kommunisme?'
          },
          answers: [
            { en: 'Democratic socialism opposes welfare', no: 'Demokratisk sosialisme motsetter seg velferd' },
            { en: 'Democratic socialism keeps multiparty democracy and civil liberties', no: 'Demokratisk sosialisme beholder flerpartidemokrati og borgerrettigheter' },
            { en: 'Democratic socialism rejects all elections', no: 'Demokratisk sosialisme forkaster alle valg' },
            { en: 'Democratic socialism demands a one-party state', no: 'Demokratisk sosialisme krever en ettpartistat' }
          ],
          correct: 1,
          explanation: {
            en: 'Democratic socialists pursue socialist goals while preserving democracy and civil liberties, unlike one-party communist states.',
            no: 'Demokratiske sosialister forfølger sosialistiske mål samtidig som de bevarer demokrati og borgerrettigheter, i motsetning til ettpartistater.'
          },
          tags: ['socialism', 'democratic-socialism', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why do socialists often criticise unregulated markets?',
            no: 'Hvorfor kritiserer sosialister ofte uregulerte markeder?'
          },
          answers: [
            { en: 'They think markets should never be regulated', no: 'De mener markeder aldri bør reguleres' },
            { en: 'They reject all economic activity', no: 'De forkaster all økonomisk aktivitet' },
            { en: 'They argue such markets produce inequality and exploit workers', no: 'De hevder at slike markeder skaper ulikhet og utbytter arbeidere' },
            { en: 'They believe markets always create equality', no: 'De mener markeder alltid skaper likhet' }
          ],
          correct: 2,
          explanation: {
            en: 'Socialists argue unregulated markets concentrate wealth and exploit workers, requiring regulation or social ownership.',
            no: 'Sosialister hevder at uregulerte markeder samler rikdom og utbytter arbeidere, og krever regulering eller sosialt eierskap.'
          },
          tags: ['socialism', 'markets', 'critique']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a cooperative in socialist economic thought?',
            no: 'Hva er et samvirke (kooperativ) i sosialistisk økonomisk tenkning?'
          },
          answers: [
            { en: 'A company owned by a single tycoon', no: 'Et selskap eid av én magnat' },
            { en: 'A royal monopoly', no: 'Et kongelig monopol' },
            { en: 'A bank run by nobles', no: 'En bank drevet av adelige' },
            { en: 'A business owned and run jointly by its members', no: 'En virksomhet eid og drevet i fellesskap av medlemmene' }
          ],
          correct: 3,
          explanation: {
            en: 'Cooperatives—jointly owned and democratically run by members—are valued in socialist thought as alternatives to private firms.',
            no: 'Samvirker—eid i fellesskap og demokratisk styrt av medlemmene—verdsettes i sosialistisk tenkning som alternativer til private firmaer.'
          },
          tags: ['socialism', 'cooperatives', 'economy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did socialism connect to the expansion of voting rights?',
            no: 'Hvordan hang sosialismen sammen med utvidelsen av stemmeretten?'
          },
          answers: [
            { en: 'Socialist and labour movements pushed for universal suffrage', no: 'Sosialistiske bevegelser og arbeiderbevegelser kjempet for allmenn stemmerett' },
            { en: 'Socialists opposed all voting', no: 'Sosialister motsatte seg all stemmegivning' },
            { en: 'Socialists wanted only the rich to vote', no: 'Sosialister ville at bare de rike skulle stemme' },
            { en: 'Socialists demanded a return to monarchy', no: 'Sosialister krevde en tilbakevending til monarki' }
          ],
          correct: 0,
          explanation: {
            en: 'Socialist and labour movements campaigned to extend the vote to workers and, eventually, all adults.',
            no: 'Sosialistiske bevegelser og arbeiderbevegelser kjempet for å utvide stemmeretten til arbeidere og til slutt alle voksne.'
          },
          tags: ['socialism', 'suffrage', 'democracy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What was the core of the "revisionism" debate launched by Eduard Bernstein?',
            no: 'Hva var kjernen i «revisjonisme»-debatten startet av Eduard Bernstein?'
          },
          answers: [
            { en: 'Whether unions should be illegal', no: 'Om fagforeninger skulle være ulovlige' },
            { en: 'Whether socialism could be achieved gradually through reform rather than revolution', no: 'Om sosialisme kunne oppnås gradvis gjennom reform framfor revolusjon' },
            { en: 'Whether to abolish the working class', no: 'Om man skulle avskaffe arbeiderklassen' },
            { en: 'Whether markets should be banned entirely', no: 'Om markeder skulle forbys fullstendig' }
          ],
          correct: 1,
          explanation: {
            en: 'Bernstein argued socialism could be reached through gradual democratic reform, challenging orthodox Marxist revolution.',
            no: 'Bernstein hevdet at sosialisme kunne nås gjennom gradvis demokratisk reform, og utfordret ortodoks marxistisk revolusjon.'
          },
          tags: ['socialism', 'bernstein', 'revisionism']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did the "socialist calculation debate" challenge central planning?',
            no: 'Hvorfor utfordret «den sosialistiske kalkulasjonsdebatten» planøkonomien?'
          },
          answers: [
            { en: 'Critics demanded the abolition of all money', no: 'Kritikere krevde avskaffelse av alle penger' },
            { en: 'Critics rejected the idea of an economy', no: 'Kritikere forkastet ideen om en økonomi' },
            { en: 'Critics argued planners lack the price signals needed to allocate resources efficiently', no: 'Kritikere hevdet at planleggere mangler prissignalene som trengs for å fordele ressurser effektivt' },
            { en: 'Critics said planning is always perfectly efficient', no: 'Kritikere sa at planlegging alltid er fullkomment effektiv' }
          ],
          correct: 2,
          explanation: {
            en: 'Economists like Mises and Hayek argued that without market prices, central planners cannot rationally allocate resources.',
            no: 'Økonomer som Mises og Hayek hevdet at sentrale planleggere uten markedspriser ikke kan fordele ressurser rasjonelt.'
          },
          tags: ['socialism', 'planning', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does "market socialism" attempt to combine socialist and market ideas?',
            no: 'Hvordan forsøker «markedssosialisme» å forene sosialistiske og markedsmessige ideer?'
          },
          answers: [
            { en: 'By abolishing both markets and ownership', no: 'Ved å avskaffe både markeder og eierskap' },
            { en: 'By giving all firms to a single monarch', no: 'Ved å gi alle bedrifter til én monark' },
            { en: 'By banning all trade', no: 'Ved å forby all handel' },
            { en: 'By keeping markets but placing firms under social or worker ownership', no: 'Ved å beholde markeder, men plassere bedrifter under sosialt eller arbeidereierskap' }
          ],
          correct: 3,
          explanation: {
            en: 'Market socialism retains markets and prices but seeks social or worker ownership of enterprises.',
            no: 'Markedssosialisme beholder markeder og priser, men søker sosialt eller arbeidereierskap av bedrifter.'
          },
          tags: ['socialism', 'market-socialism', 'theory']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What tension exists between socialist internationalism and national labour movements?',
            no: 'Hvilken spenning finnes mellom sosialistisk internasjonalisme og nasjonale arbeiderbevegelser?'
          },
          answers: [
            { en: 'Workers\' cross-border solidarity can conflict with national loyalties and interests', no: 'Arbeideres solidaritet på tvers av grenser kan komme i konflikt med nasjonale lojaliteter og interesser' },
            { en: 'There is never any conflict between them', no: 'Det er aldri noen konflikt mellom dem' },
            { en: 'Internationalism requires abolishing all unions', no: 'Internasjonalisme krever avskaffelse av alle fagforeninger' },
            { en: 'National movements reject all workers', no: 'Nasjonale bevegelser forkaster alle arbeidere' }
          ],
          correct: 0,
          explanation: {
            en: 'In 1914 many socialist parties backed their own nations in war, exposing tension between internationalism and nationalism.',
            no: 'I 1914 støttet mange sosialistiske partier sine egne nasjoner i krig, noe som avdekket spenningen mellom internasjonalisme og nasjonalisme.'
          },
          tags: ['socialism', 'internationalism', 'tension']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the Nordic model reshape ideas about socialism in practice?',
            no: 'Hvordan formet den nordiske modellen ideer om sosialisme i praksis?'
          },
          answers: [
            { en: 'It banned trade and markets', no: 'Den forbød handel og markeder' },
            { en: 'It combined market economies with strong welfare states and high taxation', no: 'Den kombinerte markedsøkonomier med sterke velferdsstater og høy beskatning' },
            { en: 'It abolished private ownership entirely', no: 'Den avskaffet privat eierskap fullstendig' },
            { en: 'It rejected all public services', no: 'Den forkastet alle offentlige tjenester' }
          ],
          correct: 1,
          explanation: {
            en: 'The Nordic model paired market economies with extensive welfare and high taxes, showing a reformist path influenced by social democracy.',
            no: 'Den nordiske modellen forente markedsøkonomier med omfattende velferd og høye skatter, og viste en reformistisk vei påvirket av sosialdemokrati.'
          },
          tags: ['socialism', 'nordic-model', 'social-democracy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do some critics argue socialism faces a problem of incentives?',
            no: 'Hvorfor hevder enkelte kritikere at sosialismen står overfor et insentivproblem?'
          },
          answers: [
            { en: 'They claim incentives are irrelevant in any economy', no: 'De hevder at insentiver er irrelevante i enhver økonomi' },
            { en: 'They claim only monarchy can motivate workers', no: 'De hevder at bare monarki kan motivere arbeidere' },
            { en: 'They claim collective ownership can weaken motivation to work and innovate', no: 'De hevder at kollektivt eierskap kan svekke motivasjonen til å jobbe og innovere' },
            { en: 'They claim socialism guarantees maximum innovation', no: 'De hevder at sosialismen garanterer maksimal innovasjon' }
          ],
          correct: 2,
          explanation: {
            en: 'Critics argue that without private profit, collective systems may weaken individual incentives to work and innovate.',
            no: 'Kritikere hevder at kollektive systemer uten privat profitt kan svekke individuelle insentiver til å arbeide og innovere.'
          },
          tags: ['socialism', 'incentives', 'critique']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the collapse of Soviet communism affect socialist thought in the 1990s?',
            no: 'Hvordan påvirket sammenbruddet av sovjetisk kommunisme sosialistisk tenkning på 1990-tallet?'
          },
          answers: [
            { en: 'It made all socialists adopt central planning', no: 'Det fikk alle sosialister til å innføre planøkonomi' },
            { en: 'It ended all interest in equality', no: 'Det avsluttet all interesse for likhet' },
            { en: 'It restored absolute monarchy', no: 'Det gjenopprettet eneveldig monarki' },
            { en: 'It pushed many socialists toward market-friendly social democracy and "third way" ideas', no: 'Det drev mange sosialister mot markedsvennlig sosialdemokrati og «tredje vei»-ideer' }
          ],
          correct: 3,
          explanation: {
            en: 'After 1991, many socialists moved toward market-accepting social democracy and "third way" politics.',
            no: 'Etter 1991 beveget mange sosialister seg mot markedsaksepterende sosialdemokrati og «tredje vei»-politikk.'
          },
          tags: ['socialism', 'cold-war', 'third-way']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the disagreement between socialists over "equality of outcome" versus "equality of opportunity"?',
            no: 'Hva er uenigheten blant sosialister om «resultatlikhet» kontra «mulighetslikhet»?'
          },
          answers: [
            { en: 'Whether to equalise final results or mainly the starting conditions people face', no: 'Om man skal utjevne de endelige resultatene eller hovedsakelig utgangsbetingelsene folk møter' },
            { en: 'Whether equality matters at all', no: 'Om likhet i det hele tatt betyr noe' },
            { en: 'Whether to abolish all rights', no: 'Om man skal avskaffe alle rettigheter' },
            { en: 'Whether workers should organise', no: 'Om arbeidere bør organisere seg' }
          ],
          correct: 0,
          explanation: {
            en: 'Socialists debate whether to equalise outcomes directly or to ensure fair starting conditions and opportunities.',
            no: 'Sosialister diskuterer om man skal utjevne resultatene direkte eller sikre rettferdige utgangsbetingelser og muligheter.'
          },
          tags: ['socialism', 'equality', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did democratic socialists respond to the charge that socialism threatens individual freedom?',
            no: 'Hvordan svarte demokratiske sosialister på anklagen om at sosialismen truer individuell frihet?'
          },
          answers: [
            { en: 'They demanded a one-party state', no: 'De krevde en ettpartistat' },
            { en: 'They argued that economic security expands real freedom for ordinary people', no: 'De hevdet at økonomisk trygghet utvider den reelle friheten for vanlige folk' },
            { en: 'They agreed freedom should be abolished', no: 'De var enige i at friheten burde avskaffes' },
            { en: 'They denied that freedom exists', no: 'De benektet at frihet finnes' }
          ],
          correct: 1,
          explanation: {
            en: 'Democratic socialists argue that freedom from poverty and insecurity gives people more real, effective freedom.',
            no: 'Demokratiske sosialister hevder at frihet fra fattigdom og usikkerhet gir folk mer reell, virksom frihet.'
          },
          tags: ['socialism', 'freedom', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do scholars distinguish socialism as an economic system from socialism as a political movement?',
            no: 'Hvorfor skiller forskere mellom sosialisme som økonomisk system og sosialisme som politisk bevegelse?'
          },
          answers: [
            { en: 'Because neither involves the working class', no: 'Fordi ingen av dem involverer arbeiderklassen' },
            { en: 'Because socialism has no economic content', no: 'Fordi sosialismen ikke har noe økonomisk innhold' },
            { en: 'The label covers both specific ownership models and broad movements for equality', no: 'Begrepet dekker både bestemte eierskapsmodeller og brede bevegelser for likhet' },
            { en: 'Because the two are identical in every way', no: 'Fordi de to er identiske på alle måter' }
          ],
          correct: 2,
          explanation: {
            en: 'Socialism can mean a specific system of social ownership or a broad political movement for greater equality, and these can differ.',
            no: 'Sosialisme kan bety et bestemt system med sosialt eierskap eller en bred politisk bevegelse for større likhet, og disse kan være forskjellige.'
          },
          tags: ['socialism', 'theory', 'definition']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What lasting influence has socialism had on mainstream politics in democracies?',
            no: 'Hvilken varig innflytelse har sosialismen hatt på etablert politikk i demokratier?'
          },
          answers: [
            { en: 'It abolished all private enterprise everywhere', no: 'Den avskaffet all privat virksomhet overalt' },
            { en: 'It ended democratic elections', no: 'Den avsluttet demokratiske valg' },
            { en: 'It had no influence on other parties', no: 'Den hadde ingen innflytelse på andre partier' },
            { en: 'It normalised welfare states, labour rights and public services across the spectrum', no: 'Den normaliserte velferdsstater, arbeiderrettigheter og offentlige tjenester på tvers av spekteret' }
          ],
          correct: 3,
          explanation: {
            en: 'Even parties that reject socialism have accepted welfare states, labour rights and public services it helped pioneer.',
            no: 'Selv partier som avviser sosialismen har akseptert velferdsstater, arbeiderrettigheter og offentlige tjenester den var med på å innføre.'
          },
          tags: ['socialism', 'legacy', 'welfare-state']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What did the Fabian Society advocate as a path to socialism?',
            no: 'Hva tok Fabian-bevegelsen til orde for som vei til sosialisme?'
          },
          answers: [
            { en: 'Gradual reform through democratic institutions rather than revolution', no: 'Gradvis reform gjennom demokratiske institusjoner framfor revolusjon' },
            { en: 'Immediate armed uprising', no: 'Umiddelbart væpnet opprør' },
            { en: 'A return to feudalism', no: 'En tilbakevending til føydalisme' },
            { en: 'Abolishing all elections', no: 'Å avskaffe alle valg' }
          ],
          correct: 0,
          explanation: {
            en: 'The British Fabians argued for reaching socialism gradually through democratic reform and education, not revolution.',
            no: 'De britiske fabianerne argumenterte for å nå sosialisme gradvis gjennom demokratisk reform og utdanning, ikke revolusjon.'
          },
          tags: ['socialism', 'fabians', 'reform']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does socialism differ from anarchism on the role of the state?',
            no: 'Hvordan skiller sosialismen seg fra anarkismen når det gjelder statens rolle?'
          },
          answers: [
            { en: 'Both reject any change to society', no: 'Begge forkaster enhver endring i samfunnet' },
            { en: 'Most socialists use the state to achieve goals, while anarchists want to abolish it', no: 'De fleste sosialister bruker staten for å nå mål, mens anarkister vil avskaffe den' },
            { en: 'Both want a stronger monarchy', no: 'Begge ønsker et sterkere monarki' },
            { en: 'Anarchists want a larger state than socialists', no: 'Anarkister ønsker en større stat enn sosialister' }
          ],
          correct: 1,
          explanation: {
            en: 'Many socialists rely on the state to deliver reform and ownership, whereas anarchists reject the state itself.',
            no: 'Mange sosialister stoler på staten for å gjennomføre reform og eierskap, mens anarkister forkaster selve staten.'
          },
          tags: ['socialism', 'anarchism', 'state']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What consequence did socialist movements have for working hours and conditions?',
            no: 'Hvilken konsekvens fikk sosialistiske bevegelser for arbeidstid og arbeidsforhold?'
          },
          answers: [
            { en: 'They abolished all paid work', no: 'De avskaffet alt lønnet arbeid' },
            { en: 'They opposed workplace safety laws', no: 'De motsatte seg arbeidsmiljølover' },
            { en: 'They helped win the eight-hour day and safer workplaces', no: 'De bidro til å vinne åttetimersdagen og tryggere arbeidsplasser' },
            { en: 'They lengthened the working day', no: 'De forlenget arbeidsdagen' }
          ],
          correct: 2,
          explanation: {
            en: 'Socialist and labour movements campaigned successfully for shorter hours, the eight-hour day and safer working conditions.',
            no: 'Sosialistiske bevegelser og arbeiderbevegelser kjempet med hell for kortere arbeidstid, åttetimersdagen og tryggere arbeidsforhold.'
          },
          tags: ['socialism', 'labour', 'consequences']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does Antonio Gramsci\'s idea of "hegemony" extend socialist analysis?',
            no: 'Hvordan utvider Antonio Gramscis idé om «hegemoni» den sosialistiske analysen?'
          },
          answers: [
            { en: 'It proves revolution is impossible', no: 'Den beviser at revolusjon er umulig' },
            { en: 'It rejects the idea of class', no: 'Den forkaster ideen om klasse' },
            { en: 'It supports absolute monarchy', no: 'Den støtter eneveldig monarki' },
            { en: 'It shows ruling classes maintain power through cultural consent, not only force', no: 'Den viser at herskende klasser opprettholder makt gjennom kulturelt samtykke, ikke bare makt' }
          ],
          correct: 3,
          explanation: {
            en: 'Gramsci argued the dominant class rules partly through cultural "hegemony"—shaping ideas and consent—so change requires cultural struggle too.',
            no: 'Gramsci hevdet at den dominerende klassen styrer delvis gjennom kulturelt «hegemoni»—ved å forme ideer og samtykke—så endring krever også kulturell kamp.'
          },
          tags: ['socialism', 'gramsci', 'hegemony']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is it debated whether the Nordic countries are genuinely "socialist"?',
            no: 'Hvorfor diskuteres det om de nordiske landene egentlig er «sosialistiske»?'
          },
          answers: [
            { en: 'They combine extensive welfare with private ownership and open markets', no: 'De kombinerer omfattende velferd med privat eierskap og åpne markeder' },
            { en: 'They have fully abolished private business', no: 'De har fullstendig avskaffet privat virksomhet' },
            { en: 'They reject all public services', no: 'De forkaster alle offentlige tjenester' },
            { en: 'They are centrally planned command economies', no: 'De er sentralstyrte kommandoøkonomier' }
          ],
          correct: 0,
          explanation: {
            en: 'Nordic states pair strong welfare and high taxes with capitalist markets and private ownership, so labels like "socialist" are contested.',
            no: 'De nordiske statene forener sterk velferd og høye skatter med kapitalistiske markeder og privat eierskap, så merkelapper som «sosialistisk» er omstridte.'
          },
          tags: ['socialism', 'nordic-model', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What tension exists between centralised state ownership and worker self-management in socialist thought?',
            no: 'Hvilken spenning finnes mellom sentralisert statlig eierskap og arbeidernes selvstyre i sosialistisk tenkning?'
          },
          answers: [
            { en: 'State ownership gives all power to private firms', no: 'Statlig eierskap gir all makt til private firmaer' },
            { en: 'State ownership can concentrate power in a bureaucracy rather than empower workers directly', no: 'Statlig eierskap kan samle makt i et byråkrati snarere enn å gi arbeiderne direkte makt' },
            { en: 'Both always produce identical results', no: 'Begge gir alltid identiske resultater' },
            { en: 'Worker self-management requires abolishing all workplaces', no: 'Arbeidernes selvstyre krever avskaffelse av alle arbeidsplasser' }
          ],
          correct: 1,
          explanation: {
            en: 'Some socialists warn that state ownership can empower a central bureaucracy, which is why others favour worker self-management and cooperatives.',
            no: 'Enkelte sosialister advarer om at statlig eierskap kan styrke et sentralt byråkrati, og derfor foretrekker andre arbeidernes selvstyre og samvirker.'
          },
          tags: ['socialism', 'self-management', 'bureaucracy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did socialist feminists expand traditional socialist analysis?',
            no: 'Hvordan utvidet sosialistiske feminister den tradisjonelle sosialistiske analysen?'
          },
          answers: [
            { en: 'By demanding a return to traditional family roles', no: 'Ved å kreve en tilbakevending til tradisjonelle familieroller' },
            { en: 'By opposing all public services', no: 'Ved å motsette seg alle offentlige tjenester' },
            { en: 'By arguing that unpaid domestic labour and gender inequality also shape exploitation', no: 'Ved å hevde at ubetalt husarbeid og kjønnsulikhet også former utbyttingen' },
            { en: 'By rejecting the idea of class entirely', no: 'Ved å forkaste ideen om klasse fullstendig' }
          ],
          correct: 2,
          explanation: {
            en: 'Socialist feminists argued that class analysis must also account for unpaid domestic work and gender inequality, not just wage labour.',
            no: 'Sosialistiske feminister hevdet at klasseanalysen også må ta hensyn til ubetalt husarbeid og kjønnsulikhet, ikke bare lønnsarbeid.'
          },
          tags: ['socialism', 'feminism', 'theory']
        }
      ]
    },
    {
      slug: 'communism',
      name: { en: 'Communism', no: 'Kommunisme' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'What kind of society does communism aim to create?',
            no: 'Hvilken type samfunn sikter kommunismen mot å skape?'
          },
          answers: [
            { en: 'An absolute monarchy', no: 'Et eneveldig monarki' },
            { en: 'A society ruled by nobles', no: 'Et samfunn styrt av adelige' },
            { en: 'A purely free-market society', no: 'Et rent frimarkedssamfunn' },
            { en: 'A classless society with common ownership', no: 'Et klasseløst samfunn med felles eierskap' }
          ],
          correct: 3,
          explanation: {
            en: 'Communism aims for a classless society in which property is held in common.',
            no: 'Kommunismen sikter mot et klasseløst samfunn der eiendom holdes i fellesskap.'
          },
          tags: ['communism', 'classless', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who, with Friedrich Engels, developed the core ideas of modern communism?',
            no: 'Hvem utviklet, sammen med Friedrich Engels, kjerneideene i moderne kommunisme?'
          },
          answers: [
            { en: 'Karl Marx', no: 'Karl Marx' },
            { en: 'Adam Smith', no: 'Adam Smith' },
            { en: 'John Locke', no: 'John Locke' },
            { en: 'Edmund Burke', no: 'Edmund Burke' }
          ],
          correct: 0,
          explanation: {
            en: 'Karl Marx, together with Friedrich Engels, developed the central ideas of modern communism.',
            no: 'Karl Marx utviklet, sammen med Friedrich Engels, de sentrale ideene i moderne kommunisme.'
          },
          tags: ['communism', 'marx', 'engels']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which slogan summarises the communist ideal of distribution?',
            no: 'Hvilket slagord oppsummerer det kommunistiske idealet for fordeling?'
          },
          answers: [
            { en: '"Tradition first"', no: '«Tradisjon først»' },
            { en: '"From each according to ability, to each according to need"', no: '«Yt etter evne, få etter behov»' },
            { en: '"The winner takes all"', no: '«Vinneren tar alt»' },
            { en: '"Property above all"', no: '«Eiendom framfor alt»' }
          ],
          correct: 1,
          explanation: {
            en: 'The communist ideal is "from each according to his ability, to each according to his needs."',
            no: 'Det kommunistiske idealet er «yt etter evne, få etter behov».'
          },
          tags: ['communism', 'slogan', 'distribution']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which country did communists take power in the 1917 revolution?',
            no: 'I hvilket land tok kommunistene makten i revolusjonen i 1917?'
          },
          answers: [
            { en: 'Britain', no: 'Storbritannia' },
            { en: 'Italy', no: 'Italia' },
            { en: 'Russia', no: 'Russland' },
            { en: 'France', no: 'Frankrike' }
          ],
          correct: 2,
          explanation: {
            en: 'The Bolsheviks took power in Russia during the 1917 October Revolution.',
            no: 'Bolsjevikene tok makten i Russland under oktoberrevolusjonen i 1917.'
          },
          tags: ['communism', 'russia', '1917']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who led the Bolsheviks during the Russian Revolution?',
            no: 'Hvem ledet bolsjevikene under den russiske revolusjonen?'
          },
          answers: [
            { en: 'Tsar Nicholas II', no: 'Tsar Nikolaj II' },
            { en: 'Mikhail Gorbachev', no: 'Mikhail Gorbatsjov' },
            { en: 'Leon Trotsky', no: 'Leon Trotskij' },
            { en: 'Vladimir Lenin', no: 'Vladimir Lenin' }
          ],
          correct: 3,
          explanation: {
            en: 'Vladimir Lenin led the Bolsheviks to power in the 1917 revolution.',
            no: 'Vladimir Lenin ledet bolsjevikene til makten i revolusjonen i 1917.'
          },
          tags: ['communism', 'lenin', 'russia']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What was the communist state formed from Russia called?',
            no: 'Hva het den kommunistiske staten som ble dannet ut fra Russland?'
          },
          answers: [
            { en: 'The Soviet Union', no: 'Sovjetunionen' },
            { en: 'The Ottoman Empire', no: 'Det osmanske riket' },
            { en: 'The Holy Roman Empire', no: 'Det tysk-romerske riket' },
            { en: 'The Republic of Venice', no: 'Republikken Venezia' }
          ],
          correct: 0,
          explanation: {
            en: 'The communist state formed after the revolution was the Soviet Union (USSR).',
            no: 'Den kommunistiske staten som ble dannet etter revolusjonen var Sovjetunionen (USSR).'
          },
          tags: ['communism', 'soviet-union', 'history']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Communism calls for the abolition of which institution?',
            no: 'Kommunismen krever avskaffelse av hvilken institusjon?'
          },
          answers: [
            { en: 'All cities', no: 'Alle byer' },
            { en: 'Private ownership of the means of production', no: 'Privat eierskap til produksjonsmidlene' },
            { en: 'All families', no: 'Alle familier' },
            { en: 'All languages', no: 'Alle språk' }
          ],
          correct: 1,
          explanation: {
            en: 'Communism calls for abolishing private ownership of the means of production in favour of common ownership.',
            no: 'Kommunismen krever avskaffelse av privat eierskap til produksjonsmidlene til fordel for felles eierskap.'
          },
          tags: ['communism', 'property', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which Chinese leader founded the People\'s Republic of China in 1949?',
            no: 'Hvilken kinesisk leder grunnla Folkerepublikken Kina i 1949?'
          },
          answers: [
            { en: 'Deng Xiaoping', no: 'Deng Xiaoping' },
            { en: 'Sun Yat-sen', no: 'Sun Yat-sen' },
            { en: 'Mao Zedong', no: 'Mao Zedong' },
            { en: 'Chiang Kai-shek', no: 'Chiang Kai-shek' }
          ],
          correct: 2,
          explanation: {
            en: 'Mao Zedong led the Communist Party to victory and founded the People\'s Republic of China in 1949.',
            no: 'Mao Zedong ledet kommunistpartiet til seier og grunnla Folkerepublikken Kina i 1949.'
          },
          tags: ['communism', 'mao', 'china']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the "proletariat" in communist theory?',
            no: 'Hva er «proletariatet» i kommunistisk teori?'
          },
          answers: [
            { en: 'The royal family', no: 'Kongefamilien' },
            { en: 'Wealthy factory owners', no: 'Velstående fabrikkeiere' },
            { en: 'Large landowners', no: 'Store godseiere' },
            { en: 'The working class', no: 'Arbeiderklassen' }
          ],
          correct: 3,
          explanation: {
            en: 'The proletariat is the working class, who sell their labour and own no means of production.',
            no: 'Proletariatet er arbeiderklassen, som selger sin arbeidskraft og ikke eier produksjonsmidler.'
          },
          tags: ['communism', 'proletariat', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the "bourgeoisie" in Marxist theory?',
            no: 'Hva er «borgerskapet» (bourgeoisiet) i marxistisk teori?'
          },
          answers: [
            { en: 'The class that owns the means of production', no: 'Klassen som eier produksjonsmidlene' },
            { en: 'Landless peasants', no: 'Jordløse bønder' },
            { en: 'Factory workers', no: 'Fabrikkarbeidere' },
            { en: 'Soldiers', no: 'Soldater' }
          ],
          correct: 0,
          explanation: {
            en: 'The bourgeoisie is the capitalist class that owns the means of production.',
            no: 'Borgerskapet er den kapitalistiske klassen som eier produksjonsmidlene.'
          },
          tags: ['communism', 'bourgeoisie', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which symbol is widely associated with communism?',
            no: 'Hvilket symbol forbindes vidt med kommunismen?'
          },
          answers: [
            { en: 'A double-headed eagle', no: 'En tohodet ørn' },
            { en: 'The hammer and sickle', no: 'Hammer og sigd' },
            { en: 'The fleur-de-lis', no: 'Liljen (fleur-de-lis)' },
            { en: 'A golden crown', no: 'En gullkrone' }
          ],
          correct: 1,
          explanation: {
            en: 'The hammer and sickle, representing workers and peasants, is a famous communist symbol.',
            no: 'Hammer og sigd, som representerer arbeidere og bønder, er et berømt kommunistisk symbol.'
          },
          tags: ['communism', 'symbols', 'soviet-union']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In a communist state, who is supposed to own major industry?',
            no: 'I en kommunistisk stat, hvem skal egentlig eie den store industrien?'
          },
          answers: [
            { en: 'Foreign banks', no: 'Utenlandske banker' },
            { en: 'The nobility', no: 'Adelen' },
            { en: 'The community or state on behalf of the people', no: 'Fellesskapet eller staten på vegne av folket' },
            { en: 'Private shareholders', no: 'Private aksjonærer' }
          ],
          correct: 2,
          explanation: {
            en: 'In communist theory, major industry is owned collectively, usually through the state on behalf of the people.',
            no: 'I kommunistisk teori eies den store industrien kollektivt, vanligvis gjennom staten på vegne av folket.'
          },
          tags: ['communism', 'ownership', 'economy']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which economic system did communists oppose most strongly?',
            no: 'Hvilket økonomisk system motsatte kommunistene seg sterkest?'
          },
          answers: [
            { en: 'Feudalism only', no: 'Bare føydalisme' },
            { en: 'Barter', no: 'Byttehandel' },
            { en: 'Subsistence farming', no: 'Selvbergingsjordbruk' },
            { en: 'Capitalism', no: 'Kapitalisme' }
          ],
          correct: 3,
          explanation: {
            en: 'Communists opposed capitalism, which they saw as based on exploitation of workers.',
            no: 'Kommunister motsatte seg kapitalismen, som de så som basert på utbytting av arbeidere.'
          },
          tags: ['communism', 'capitalism', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which 20th-century conflict divided the world largely between communist and capitalist blocs?',
            no: 'Hvilken konflikt på 1900-tallet delte verden hovedsakelig mellom kommunistiske og kapitalistiske blokker?'
          },
          answers: [
            { en: 'The Cold War', no: 'Den kalde krigen' },
            { en: 'The Hundred Years\' War', no: 'Hundreårskrigen' },
            { en: 'The Napoleonic Wars', no: 'Napoleonskrigene' },
            { en: 'The Crimean War', no: 'Krimkrigen' }
          ],
          correct: 0,
          explanation: {
            en: 'The Cold War divided much of the world between the communist and capitalist blocs.',
            no: 'Den kalde krigen delte store deler av verden mellom den kommunistiske og den kapitalistiske blokken.'
          },
          tags: ['communism', 'cold-war', 'history']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'A "command economy" is one where:',
            no: 'En «kommandoøkonomi» er en der:'
          },
          answers: [
            { en: 'Only nobles control trade', no: 'Bare adelige kontrollerer handelen' },
            { en: 'The state plans and directs production', no: 'Staten planlegger og styrer produksjonen' },
            { en: 'Prices are set only by supply and demand', no: 'Prisene settes bare av tilbud og etterspørsel' },
            { en: 'There is no government at all', no: 'Det ikke finnes noen stat i det hele tatt' }
          ],
          correct: 1,
          explanation: {
            en: 'In a command economy, typical of communist states, the government plans and directs production.',
            no: 'I en kommandoøkonomi, typisk for kommunistiske stater, planlegger og styrer staten produksjonen.'
          },
          tags: ['communism', 'command-economy', 'economy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does communism differ from most forms of socialism?',
            no: 'Hvordan skiller kommunismen seg fra de fleste former for sosialisme?'
          },
          answers: [
            { en: 'Communism supports unlimited private wealth', no: 'Kommunismen støtter ubegrenset privat rikdom' },
            { en: 'Communism rejects the working class', no: 'Kommunismen forkaster arbeiderklassen' },
            { en: 'Communism seeks to abolish private property and class entirely, often via revolution', no: 'Kommunismen vil avskaffe privat eiendom og klasse fullstendig, ofte gjennom revolusjon' },
            { en: 'Communism opposes any change in society', no: 'Kommunismen motsetter seg enhver endring i samfunnet' }
          ],
          correct: 2,
          explanation: {
            en: 'Communism aims to fully abolish private property and class, while many socialists accept reform within a mixed economy.',
            no: 'Kommunismen vil avskaffe privat eiendom og klasse fullstendig, mens mange sosialister godtar reform innenfor en blandingsøkonomi.'
          },
          tags: ['communism', 'socialism', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What did Marx mean by "historical materialism"?',
            no: 'Hva mente Marx med «historisk materialisme»?'
          },
          answers: [
            { en: 'That history is shaped only by great kings', no: 'At historien bare formes av store konger' },
            { en: 'That ideas alone determine events', no: 'At ideer alene bestemmer hendelser' },
            { en: 'That history has no patterns', no: 'At historien ikke har noen mønstre' },
            { en: 'That economic conditions and class relations drive historical change', no: 'At økonomiske forhold og klasseforhold driver historisk endring' }
          ],
          correct: 3,
          explanation: {
            en: 'Historical materialism holds that material economic conditions and class conflict are the main drivers of historical change.',
            no: 'Historisk materialisme hevder at materielle økonomiske forhold og klassekonflikt er hoveddriverne bak historisk endring.'
          },
          tags: ['communism', 'marx', 'theory']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the "dictatorship of the proletariat" in Marxist theory?',
            no: 'Hva er «proletariatets diktatur» i marxistisk teori?'
          },
          answers: [
            { en: 'A transitional stage where workers hold political power after revolution', no: 'En overgangsfase der arbeiderne har politisk makt etter revolusjonen' },
            { en: 'Permanent rule by a single king', no: 'Permanent styre ved én konge' },
            { en: 'Rule by factory owners', no: 'Styre ved fabrikkeiere' },
            { en: 'A government chosen by the church', no: 'En regjering valgt av kirken' }
          ],
          correct: 0,
          explanation: {
            en: 'Marx described a transitional "dictatorship of the proletariat" in which the working class holds power before a classless society emerges.',
            no: 'Marx beskrev et overgangsmessig «proletariatets diktatur» der arbeiderklassen har makten før et klasseløst samfunn oppstår.'
          },
          tags: ['communism', 'marx', 'proletariat']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Lenin adapt Marxism to Russian conditions?',
            no: 'Hvordan tilpasset Lenin marxismen til russiske forhold?'
          },
          answers: [
            { en: 'He abolished the Communist Party', no: 'Han avskaffet kommunistpartiet' },
            { en: 'He argued a disciplined vanguard party could lead the revolution', no: 'Han hevdet at et disiplinert fortroppsparti kunne lede revolusjonen' },
            { en: 'He rejected revolution entirely', no: 'Han forkastet revolusjon fullstendig' },
            { en: 'He insisted only rich countries could have revolution', no: 'Han insisterte på at bare rike land kunne ha revolusjon' }
          ],
          correct: 1,
          explanation: {
            en: 'Lenin argued that a disciplined "vanguard" party of professional revolutionaries could lead workers to revolution.',
            no: 'Lenin hevdet at et disiplinert «fortropps»-parti av profesjonelle revolusjonære kunne lede arbeiderne til revolusjon.'
          },
          tags: ['communism', 'lenin', 'vanguard']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was a major consequence of Soviet collectivisation of agriculture under Stalin?',
            no: 'Hva var en viktig konsekvens av sovjetisk kollektivisering av jordbruket under Stalin?'
          },
          answers: [
            { en: 'A return to private farms', no: 'En tilbakevending til private gårder' },
            { en: 'The end of all industry', no: 'Slutten på all industri' },
            { en: 'Widespread disruption and famine', no: 'Omfattende forstyrrelser og hungersnød' },
            { en: 'Immediate prosperity for all peasants', no: 'Umiddelbar velstand for alle bønder' }
          ],
          correct: 2,
          explanation: {
            en: 'Forced collectivisation caused massive disruption and contributed to deadly famines, especially in Ukraine.',
            no: 'Tvangskollektivisering forårsaket enorme forstyrrelser og bidro til dødelige hungersnøder, særlig i Ukraina.'
          },
          tags: ['communism', 'stalin', 'collectivisation']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did communist parties favour a single-party state in practice?',
            no: 'Hvorfor foretrakk kommunistpartiene en ettpartistat i praksis?'
          },
          answers: [
            { en: 'They wanted many competing parties', no: 'De ønsket mange konkurrerende partier' },
            { en: 'They supported rule by the nobility', no: 'De støttet styre ved adelen' },
            { en: 'They rejected all political organisation', no: 'De forkastet all politisk organisering' },
            { en: 'They claimed the party uniquely represented the working class', no: 'De hevdet at partiet på en unik måte representerte arbeiderklassen' }
          ],
          correct: 3,
          explanation: {
            en: 'Communist parties argued they alone represented the proletariat, justifying one-party rule and suppression of rivals.',
            no: 'Kommunistpartiene hevdet at de alene representerte proletariatet, noe som rettferdiggjorde ettpartistyre og undertrykking av rivaler.'
          },
          tags: ['communism', 'one-party', 'state']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did communism spread after World War II?',
            no: 'Hvordan spredte kommunismen seg etter andre verdenskrig?'
          },
          answers: [
            { en: 'Communist governments were established across Eastern Europe and parts of Asia', no: 'Kommunistiske regjeringer ble etablert over hele Øst-Europa og deler av Asia' },
            { en: 'Communism disappeared after 1945', no: 'Kommunismen forsvant etter 1945' },
            { en: 'Only one country remained communist', no: 'Bare ett land forble kommunistisk' },
            { en: 'Communism spread mainly in Latin America alone', no: 'Kommunismen spredte seg hovedsakelig bare i Latin-Amerika' }
          ],
          correct: 0,
          explanation: {
            en: 'After 1945 communist states arose across Eastern Europe and in countries like China, North Korea and later Cuba and Vietnam.',
            no: 'Etter 1945 oppstod kommunistiske stater over hele Øst-Europa og i land som Kina, Nord-Korea og senere Cuba og Vietnam.'
          },
          tags: ['communism', 'cold-war', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was the Marxist view of religion, famously summarised by Marx?',
            no: 'Hva var det marxistiske synet på religion, berømt oppsummert av Marx?'
          },
          answers: [
            { en: 'Religion guarantees equality', no: 'Religion garanterer likhet' },
            { en: 'Religion is the "opium of the people"', no: 'Religion er «folkets opium»' },
            { en: 'Religion should run the state', no: 'Religion bør styre staten' },
            { en: 'Religion is the basis of class struggle', no: 'Religion er grunnlaget for klassekampen' }
          ],
          correct: 1,
          explanation: {
            en: 'Marx called religion the "opium of the people," arguing it eased suffering but distracted workers from changing their conditions.',
            no: 'Marx kalte religion «folkets opium» og hevdet at den lindret lidelse, men avledet arbeiderne fra å endre sine forhold.'
          },
          tags: ['communism', 'marx', 'religion']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did communist states typically handle the press and free speech?',
            no: 'Hvordan håndterte kommunistiske stater typisk pressen og ytringsfriheten?'
          },
          answers: [
            { en: 'They allowed unlimited opposition newspapers', no: 'De tillot ubegrenset med opposisjonsaviser' },
            { en: 'They abolished all newspapers', no: 'De avskaffet alle aviser' },
            { en: 'They imposed strict censorship and state control of media', no: 'De innførte streng sensur og statlig kontroll av media' },
            { en: 'They guaranteed a fully free press', no: 'De garanterte en helt fri presse' }
          ],
          correct: 2,
          explanation: {
            en: 'Communist regimes generally controlled the media and censored dissent to maintain party authority.',
            no: 'Kommunistiske regimer kontrollerte generelt media og sensurerte opposisjon for å opprettholde partiets autoritet.'
          },
          tags: ['communism', 'censorship', 'state']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was the relationship between communism and the Cold War?',
            no: 'Hva var forholdet mellom kommunismen og den kalde krigen?'
          },
          answers: [
            { en: 'The Cold War had nothing to do with communism', no: 'Den kalde krigen hadde ingenting med kommunismen å gjøre' },
            { en: 'Communism ended the Cold War in 1945', no: 'Kommunismen avsluttet den kalde krigen i 1945' },
            { en: 'The Cold War united communist and capitalist states', no: 'Den kalde krigen forente kommunistiske og kapitalistiske stater' },
            { en: 'The Cold War was largely a rivalry between communist and capitalist powers', no: 'Den kalde krigen var i stor grad en rivalisering mellom kommunistiske og kapitalistiske makter' }
          ],
          correct: 3,
          explanation: {
            en: 'The Cold War was largely a global rivalry between the communist Soviet bloc and the capitalist West.',
            no: 'Den kalde krigen var i stor grad en global rivalisering mellom den kommunistiske sovjetblokken og det kapitalistiske Vesten.'
          },
          tags: ['communism', 'cold-war', 'context']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why is the year 1989 important in the history of communism?',
            no: 'Hvorfor er året 1989 viktig i kommunismens historie?'
          },
          answers: [
            { en: 'Communist governments collapsed across Eastern Europe', no: 'Kommunistiske regjeringer kollapset over hele Øst-Europa' },
            { en: 'Communism was first invented', no: 'Kommunismen ble oppfunnet for første gang' },
            { en: 'The Soviet Union was founded', no: 'Sovjetunionen ble grunnlagt' },
            { en: 'China became communist', no: 'Kina ble kommunistisk' }
          ],
          correct: 0,
          explanation: {
            en: 'In 1989 communist regimes fell across Eastern Europe, symbolised by the fall of the Berlin Wall.',
            no: 'I 1989 falt kommunistiske regimer over hele Øst-Europa, symbolisert ved Berlinmurens fall.'
          },
          tags: ['communism', '1989', 'collapse']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Marx think capitalism would ultimately end?',
            no: 'Hvordan trodde Marx at kapitalismen til slutt ville ta slutt?'
          },
          answers: [
            { en: 'Foreign invasion would end it', no: 'Utenlandsk invasjon ville avslutte den' },
            { en: 'Its own contradictions would lead workers to overthrow it', no: 'Dens egne motsetninger ville få arbeiderne til å styrte den' },
            { en: 'Kings would peacefully abolish it', no: 'Konger ville fredelig avskaffe den' },
            { en: 'It would last forever unchanged', no: 'Den ville vare evig uendret' }
          ],
          correct: 1,
          explanation: {
            en: 'Marx predicted that capitalism\'s internal contradictions would drive the working class to overthrow it.',
            no: 'Marx forutså at kapitalismens indre motsetninger ville drive arbeiderklassen til å styrte den.'
          },
          tags: ['communism', 'marx', 'capitalism']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What was the central dispute between Stalin and Trotsky over revolutionary strategy?',
            no: 'Hva var den sentrale striden mellom Stalin og Trotskij om revolusjonær strategi?'
          },
          answers: [
            { en: 'Whether workers existed at all', no: 'Om arbeidere overhodet fantes' },
            { en: 'Whether to restore the Tsar', no: 'Om man skulle gjeninnsette tsaren' },
            { en: '"Socialism in one country" versus "permanent (world) revolution"', no: '«Sosialisme i ett land» kontra «permanent (verdens)revolusjon»' },
            { en: 'Whether to abolish the Communist Party', no: 'Om man skulle avskaffe kommunistpartiet' }
          ],
          correct: 2,
          explanation: {
            en: 'Stalin championed building "socialism in one country," while Trotsky argued for spreading "permanent revolution" worldwide.',
            no: 'Stalin forsvarte å bygge «sosialisme i ett land», mens Trotskij argumenterte for å spre «permanent revolusjon» verden over.'
          },
          tags: ['communism', 'stalin', 'trotsky']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did Maoism differ from Soviet Marxism-Leninism?',
            no: 'Hvordan skilte maoismen seg fra sovjetisk marxisme-leninisme?'
          },
          answers: [
            { en: 'It rejected revolution entirely', no: 'Den forkastet revolusjon fullstendig' },
            { en: 'It supported capitalist free markets', no: 'Den støttet kapitalistiske frie markeder' },
            { en: 'It abolished the Communist Party', no: 'Den avskaffet kommunistpartiet' },
            { en: 'It placed the peasantry, not the urban proletariat, at the centre of revolution', no: 'Den satte bøndene, ikke det urbane proletariatet, i sentrum av revolusjonen' }
          ],
          correct: 3,
          explanation: {
            en: 'Mao adapted communism to a peasant society, making rural peasants rather than industrial workers the revolutionary base.',
            no: 'Mao tilpasset kommunismen til et bondesamfunn og gjorde landsbygdas bønder, ikke industriarbeidere, til det revolusjonære grunnlaget.'
          },
          tags: ['communism', 'maoism', 'comparison']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians debate whether the Soviet Union ever achieved "communism" in Marx\'s sense?',
            no: 'Hvorfor diskuterer historikere om Sovjetunionen noensinne oppnådde «kommunisme» i Marx\' forstand?'
          },
          answers: [
            { en: 'A classless, stateless society never emerged; a powerful state and party persisted', no: 'Et klasseløst, statsløst samfunn oppstod aldri; en mektig stat og et mektig parti besto' },
            { en: 'Because it abolished the state immediately', no: 'Fordi den avskaffet staten umiddelbart' },
            { en: 'Because Marx praised it directly', no: 'Fordi Marx roste den direkte' },
            { en: 'Because it had no government at all', no: 'Fordi den ikke hadde noen stat i det hele tatt' }
          ],
          correct: 0,
          explanation: {
            en: 'Marx envisioned a stateless, classless end-stage; the USSR instead built a powerful state, so many argue it never reached true communism.',
            no: 'Marx så for seg et statsløst, klasseløst sluttstadium; USSR bygde i stedet en mektig stat, så mange hevder den aldri nådde ekte kommunisme.'
          },
          tags: ['communism', 'soviet-union', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What was the economic significance of Lenin\'s New Economic Policy (NEP)?',
            no: 'Hva var den økonomiske betydningen av Lenins nye økonomiske politikk (NEP)?'
          },
          answers: [
            { en: 'It ended the Communist Party\'s rule', no: 'Den avsluttet kommunistpartiets styre' },
            { en: 'It temporarily allowed limited private trade and markets to revive the economy', no: 'Den tillot midlertidig begrenset privat handel og markeder for å gjenreise økonomien' },
            { en: 'It abolished all money', no: 'Den avskaffet alle penger' },
            { en: 'It fully nationalised every small farm', no: 'Den nasjonaliserte fullstendig hver eneste småbruk' }
          ],
          correct: 1,
          explanation: {
            en: 'The NEP (1921) reintroduced limited private trade and markets to recover from war and War Communism.',
            no: 'NEP (1921) gjeninnførte begrenset privat handel og markeder for å komme seg etter krig og krigskommunisme.'
          },
          tags: ['communism', 'lenin', 'nep']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did Deng Xiaoping\'s reforms change Chinese communism after 1978?',
            no: 'Hvordan endret Deng Xiaopings reformer kinesisk kommunisme etter 1978?'
          },
          answers: [
            { en: 'They restored full central planning', no: 'De gjeninnførte full planøkonomi' },
            { en: 'They ended all foreign trade', no: 'De avsluttet all utenrikshandel' },
            { en: 'They introduced market mechanisms while keeping Communist Party rule', no: 'De innførte markedsmekanismer samtidig som kommunistpartiets styre ble beholdt' },
            { en: 'They abolished the Communist Party', no: 'De avskaffet kommunistpartiet' }
          ],
          correct: 2,
          explanation: {
            en: 'Deng introduced market reforms and private enterprise while preserving one-party Communist rule—"socialism with Chinese characteristics."',
            no: 'Deng innførte markedsreformer og privat virksomhet samtidig som ettpartistyret ble bevart—«sosialisme med kinesiske særtrekk».'
          },
          tags: ['communism', 'deng', 'china']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a central criticism of communism regarding political power?',
            no: 'Hva er en sentral kritikk av kommunismen når det gjelder politisk makt?'
          },
          answers: [
            { en: 'It always produced multiparty democracy', no: 'Den skapte alltid flerpartidemokrati' },
            { en: 'It guaranteed a free press everywhere', no: 'Den garanterte en fri presse overalt' },
            { en: 'It weakened the central state too much', no: 'Den svekket sentralstaten for mye' },
            { en: 'Abolishing checks on the party tended to concentrate power and enable repression', no: 'Å avskaffe kontroll med partiet hadde en tendens til å samle makt og muliggjøre undertrykking' }
          ],
          correct: 3,
          explanation: {
            en: 'Critics argue that concentrating power in a single party, without independent checks, enabled authoritarianism and repression.',
            no: 'Kritikere hevder at å samle makten i ett enkelt parti, uten uavhengig kontroll, muliggjorde autoritarisme og undertrykking.'
          },
          tags: ['communism', 'power', 'critique']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did Western Marxists like the Frankfurt School revise classical communist theory?',
            no: 'Hvorfor reviderte vestlige marxister som Frankfurterskolen klassisk kommunistisk teori?'
          },
          answers: [
            { en: 'They sought to explain why workers in advanced capitalism did not revolt as predicted', no: 'De søkte å forklare hvorfor arbeidere i avansert kapitalisme ikke gjorde opprør som forutsagt' },
            { en: 'They wanted to restore monarchy', no: 'De ønsket å gjeninnføre monarki' },
            { en: 'They rejected the idea of class', no: 'De forkastet ideen om klasse' },
            { en: 'They demanded a return to feudalism', no: 'De krevde en tilbakevending til føydalisme' }
          ],
          correct: 0,
          explanation: {
            en: 'Thinkers like Adorno and Marcuse examined culture and ideology to explain why predicted revolutions in the West did not occur.',
            no: 'Tenkere som Adorno og Marcuse undersøkte kultur og ideologi for å forklare hvorfor de forutsagte revolusjonene i Vesten uteble.'
          },
          tags: ['communism', 'frankfurt-school', 'theory']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the concept of "totalitarianism" shape interpretations of communist states?',
            no: 'Hvordan formet begrepet «totalitarisme» tolkninger av kommunistiske stater?'
          },
          answers: [
            { en: 'It described them as decentralised federations', no: 'Det beskrev dem som desentraliserte forbund' },
            { en: 'It framed them as regimes seeking total control over society, like fascist states', no: 'Det fremstilte dem som regimer som søkte total kontroll over samfunnet, lik fascistiske stater' },
            { en: 'It proved they were liberal democracies', no: 'Det beviste at de var liberale demokratier' },
            { en: 'It showed they had no central government', no: 'Det viste at de ikke hadde noen sentralregjering' }
          ],
          correct: 1,
          explanation: {
            en: 'The totalitarian model grouped communist and fascist regimes as systems seeking total control, though scholars debate the comparison.',
            no: 'Den totalitære modellen grupperte kommunistiske og fascistiske regimer som systemer som søkte total kontroll, selv om forskere diskuterer sammenligningen.'
          },
          tags: ['communism', 'totalitarianism', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What economic problem is often cited to explain the stagnation of Soviet-style economies?',
            no: 'Hvilket økonomisk problem trekkes ofte fram for å forklare stagnasjonen i økonomier av sovjetisk type?'
          },
          answers: [
            { en: 'Private firms dominated the economy', no: 'Private firmaer dominerte økonomien' },
            { en: 'There were no workers available', no: 'Det fantes ingen tilgjengelige arbeidere' },
            { en: 'Central planning struggled to coordinate complex production and innovation efficiently', no: 'Planøkonomien slet med å koordinere kompleks produksjon og innovasjon effektivt' },
            { en: 'There was too much market competition', no: 'Det var for mye markedskonkurranse' }
          ],
          correct: 2,
          explanation: {
            en: 'Without market prices and competition, central planners struggled to allocate resources and encourage innovation, fuelling stagnation.',
            no: 'Uten markedspriser og konkurranse slet sentrale planleggere med å fordele ressurser og fremme innovasjon, noe som bidro til stagnasjon.'
          },
          tags: ['communism', 'planning', 'stagnation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do scholars disagree about the causes of the Soviet Union\'s collapse in 1991?',
            no: 'Hvorfor er forskere uenige om årsakene til Sovjetunionens sammenbrudd i 1991?'
          },
          answers: [
            { en: 'Because there was only one possible cause', no: 'Fordi det bare fantes én mulig årsak' },
            { en: 'Because the collapse never happened', no: 'Fordi sammenbruddet aldri skjedde' },
            { en: 'Because foreign monarchs ordered it', no: 'Fordi utenlandske monarker beordret det' },
            { en: 'They weigh economic stagnation, reform, nationalism and ideology differently', no: 'De vektlegger økonomisk stagnasjon, reform, nasjonalisme og ideologi ulikt' }
          ],
          correct: 3,
          explanation: {
            en: 'Historians weigh economic decline, Gorbachev\'s reforms, nationalist movements and ideological exhaustion differently in explaining 1991.',
            no: 'Historikere vektlegger økonomisk nedgang, Gorbatsjovs reformer, nasjonalistiske bevegelser og ideologisk utmattelse ulikt når de forklarer 1991.'
          },
          tags: ['communism', 'collapse', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does the idea of "alienation" function in Marx\'s critique of capitalism?',
            no: 'Hvordan fungerer ideen om «fremmedgjøring» i Marx\' kritikk av kapitalismen?'
          },
          answers: [
            { en: 'Workers are estranged from their labour, products and human potential under capitalism', no: 'Arbeidere blir fremmedgjort fra sitt arbeid, sine produkter og sitt menneskelige potensial under kapitalismen' },
            { en: 'It means workers own all factories', no: 'Det betyr at arbeiderne eier alle fabrikker' },
            { en: 'It describes harmony between workers and owners', no: 'Det beskriver harmoni mellom arbeidere og eiere' },
            { en: 'It refers to foreign trade only', no: 'Det viser bare til utenrikshandel' }
          ],
          correct: 0,
          explanation: {
            en: 'Marx argued that under capitalism workers are alienated from their labour, its products, fellow workers and their own potential.',
            no: 'Marx hevdet at arbeidere under kapitalismen blir fremmedgjort fra sitt arbeid, sine produkter, sine medarbeidere og sitt eget potensial.'
          },
          tags: ['communism', 'marx', 'alienation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a key debate about the relationship between communist ideology and state violence?',
            no: 'Hva er en sentral debatt om forholdet mellom kommunistisk ideologi og statlig vold?'
          },
          answers: [
            { en: 'Whether workers supported reform', no: 'Om arbeidere støttet reform' },
            { en: 'Whether repression stemmed from the ideology itself or from specific circumstances and leaders', no: 'Om undertrykkingen sprang ut av ideologien selv eller av bestemte omstendigheter og ledere' },
            { en: 'Whether any communist states existed', no: 'Om noen kommunistiske stater eksisterte' },
            { en: 'Whether Marx wrote any books', no: 'Om Marx skrev noen bøker' }
          ],
          correct: 1,
          explanation: {
            en: 'Scholars debate whether mass repression under communist regimes flowed from the ideology itself or from particular leaders and conditions.',
            no: 'Forskere diskuterer om massiv undertrykking under kommunistiske regimer skyldtes ideologien selv eller bestemte ledere og forhold.'
          },
          tags: ['communism', 'violence', 'debate']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Which leader brought communism to power in Cuba in 1959?',
            no: 'Hvilken leder brakte kommunismen til makten på Cuba i 1959?'
          },
          answers: [
            { en: 'Josip Broz Tito', no: 'Josip Broz Tito' },
            { en: 'Ho Chi Minh', no: 'Ho Chi Minh' },
            { en: 'Fidel Castro', no: 'Fidel Castro' },
            { en: 'Mao Zedong', no: 'Mao Zedong' }
          ],
          correct: 2,
          explanation: {
            en: 'Fidel Castro led the 1959 revolution that brought a communist government to power in Cuba.',
            no: 'Fidel Castro ledet revolusjonen i 1959 som brakte en kommunistisk regjering til makten på Cuba.'
          },
          tags: ['communism', 'castro', 'cuba']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was the Warsaw Pact during the Cold War?',
            no: 'Hva var Warszawapakten under den kalde krigen?'
          },
          answers: [
            { en: 'A free-trade agreement among capitalist nations', no: 'En frihandelsavtale mellom kapitalistiske nasjoner' },
            { en: 'A treaty abolishing communism', no: 'En traktat som avskaffet kommunismen' },
            { en: 'An alliance of Western democracies', no: 'En allianse av vestlige demokratier' },
            { en: 'A military alliance of the Soviet Union and Eastern European communist states', no: 'En militærallianse mellom Sovjetunionen og østeuropeiske kommuniststater' }
          ],
          correct: 3,
          explanation: {
            en: 'The Warsaw Pact was a military alliance led by the Soviet Union, binding together Eastern Europe\'s communist states.',
            no: 'Warszawapakten var en militærallianse ledet av Sovjetunionen som bandt sammen Øst-Europas kommuniststater.'
          },
          tags: ['communism', 'warsaw-pact', 'cold-war']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does communism differ from democratic socialism on elections and parties?',
            no: 'Hvordan skiller kommunismen seg fra demokratisk sosialisme når det gjelder valg og partier?'
          },
          answers: [
            { en: 'Communist states usually allowed only one party; democratic socialists accept multiparty elections', no: 'Kommuniststater tillot vanligvis bare ett parti; demokratiske sosialister godtar flerpartivalg' },
            { en: 'Both reject all elections', no: 'Begge forkaster alle valg' },
            { en: 'Communism requires many competing parties', no: 'Kommunismen krever mange konkurrerende partier' },
            { en: 'Democratic socialism bans all parties', no: 'Demokratisk sosialisme forbyr alle partier' }
          ],
          correct: 0,
          explanation: {
            en: 'Communist regimes typically built one-party states, while democratic socialists work within competitive multiparty democracy.',
            no: 'Kommunistiske regimer bygde typisk ettpartistater, mens demokratiske sosialister virker innenfor konkurransebasert flerpartidemokrati.'
          },
          tags: ['communism', 'democratic-socialism', 'comparison']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What did "Eurocommunism" propose in the 1970s?',
            no: 'Hva foreslo «eurokommunismen» på 1970-tallet?'
          },
          answers: [
            { en: 'Full loyalty to the Soviet model', no: 'Full lojalitet til den sovjetiske modellen' },
            { en: 'A communism independent of Moscow that accepted democracy and civil liberties', no: 'En kommunisme uavhengig av Moskva som godtok demokrati og borgerrettigheter' },
            { en: 'A return to Stalinist central planning', no: 'En tilbakevending til stalinistisk planøkonomi' },
            { en: 'The abolition of all communist parties', no: 'Avskaffelse av alle kommunistpartier' }
          ],
          correct: 1,
          explanation: {
            en: 'Eurocommunist parties in Western Europe sought a democratic, pluralist road to socialism independent of Soviet control.',
            no: 'Eurokommunistiske partier i Vest-Europa søkte en demokratisk, pluralistisk vei til sosialisme uavhengig av sovjetisk kontroll.'
          },
          tags: ['communism', 'eurocommunism', 'theory']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did Marx\'s prediction that revolution would come first in advanced capitalist countries prove inaccurate?',
            no: 'Hvorfor viste Marx\' forutsigelse om at revolusjonen først ville komme i avanserte kapitalistiske land seg å være unøyaktig?'
          },
          answers: [
            { en: 'Capitalism disappeared everywhere at once', no: 'Kapitalismen forsvant overalt på én gang' },
            { en: 'Advanced countries all became communist first', no: 'Avanserte land ble alle kommunistiske først' },
            { en: 'Communist revolutions occurred in less industrialised countries like Russia and China instead', no: 'Kommunistiske revolusjoner skjedde i stedet i mindre industrialiserte land som Russland og Kina' },
            { en: 'No revolutions ever happened', no: 'Ingen revolusjoner skjedde noensinne' }
          ],
          correct: 2,
          explanation: {
            en: 'Contrary to Marx, major communist revolutions occurred in agrarian Russia and China, not in the advanced industrial West.',
            no: 'I motsetning til Marx skjedde de store kommunistiske revolusjonene i det agrare Russland og Kina, ikke i det avanserte industrielle Vesten.'
          },
          tags: ['communism', 'marx', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What was the purpose and impact of Mao\'s Cultural Revolution (1966–1976)?',
            no: 'Hva var formålet med og virkningen av Maos kulturrevolusjon (1966–1976)?'
          },
          answers: [
            { en: 'To introduce free-market capitalism', no: 'Å innføre frimarkedskapitalisme' },
            { en: 'To restore the Chinese monarchy', no: 'Å gjeninnføre det kinesiske monarkiet' },
            { en: 'To end the Communist Party', no: 'Å avslutte kommunistpartiet' },
            { en: 'To reassert radical ideology and Mao\'s power; it caused massive upheaval and suffering', no: 'Å gjeninnføre radikal ideologi og Maos makt; den forårsaket enorm omveltning og lidelse' }
          ],
          correct: 3,
          explanation: {
            en: 'Mao launched the Cultural Revolution to renew revolutionary fervour and his own control, but it brought chaos, persecution and great suffering.',
            no: 'Mao satte i gang kulturrevolusjonen for å fornye revolusjonær glød og sin egen kontroll, men den førte til kaos, forfølgelse og store lidelser.'
          },
          tags: ['communism', 'mao', 'cultural-revolution']
        }
      ]
    },
    {
      slug: 'fascism',
      name: { en: 'Fascism', no: 'Fascisme' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'Which leader founded fascism in Italy?',
            no: 'Hvilken leder grunnla fascismen i Italia?'
          },
          answers: [
            { en: 'Benito Mussolini', no: 'Benito Mussolini' },
            { en: 'Karl Marx', no: 'Karl Marx' },
            { en: 'Winston Churchill', no: 'Winston Churchill' },
            { en: 'Joseph Stalin', no: 'Josef Stalin' }
          ],
          correct: 0,
          explanation: {
            en: 'Benito Mussolini founded the fascist movement in Italy and ruled as its leader.',
            no: 'Benito Mussolini grunnla den fascistiske bevegelsen i Italia og styrte som dens leder.'
          },
          tags: ['fascism', 'mussolini', 'italy']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Fascism places the highest value on which of these?',
            no: 'Fascismen legger størst verdi på hvilken av disse?'
          },
          answers: [
            { en: 'Limited government', no: 'Begrenset stat' },
            { en: 'The nation or state above the individual', no: 'Nasjonen eller staten over individet' },
            { en: 'Individual freedom above all', no: 'Individuell frihet framfor alt' },
            { en: 'Worldwide class solidarity', no: 'Verdensomspennende klassesolidaritet' }
          ],
          correct: 1,
          explanation: {
            en: 'Fascism exalts the nation or state above the individual, demanding loyalty and unity.',
            no: 'Fascismen opphøyer nasjonen eller staten over individet og krever lojalitet og enhet.'
          },
          tags: ['fascism', 'nation', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What kind of leadership does fascism favour?',
            no: 'Hvilken type lederskap foretrekker fascismen?'
          },
          answers: [
            { en: 'No leaders at all', no: 'Ingen ledere i det hele tatt' },
            { en: 'Rotating leadership chosen by lottery', no: 'Roterende lederskap valgt ved loddtrekning' },
            { en: 'A single strong, authoritarian leader', no: 'Én sterk, autoritær leder' },
            { en: 'Rule by many competing parties', no: 'Styre ved mange konkurrerende partier' }
          ],
          correct: 2,
          explanation: {
            en: 'Fascism favours a single, strong authoritarian leader who embodies the nation\'s will.',
            no: 'Fascismen foretrekker én sterk, autoritær leder som legemliggjør nasjonens vilje.'
          },
          tags: ['fascism', 'leader', 'authoritarian']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What title did Mussolini take as fascist leader of Italy?',
            no: 'Hvilken tittel tok Mussolini som fascistisk leder av Italia?'
          },
          answers: [
            { en: 'Tsar', no: 'Tsar' },
            { en: 'Caliph', no: 'Kalif' },
            { en: 'Chancellor', no: 'Rikskansler' },
            { en: 'Il Duce', no: 'Il Duce' }
          ],
          correct: 3,
          explanation: {
            en: 'Mussolini took the title "Il Duce," meaning "the leader."',
            no: 'Mussolini tok tittelen «Il Duce», som betyr «føreren» eller «lederen».'
          },
          tags: ['fascism', 'mussolini', 'duce']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which German movement is usually classified as a form of fascism?',
            no: 'Hvilken tysk bevegelse klassifiseres vanligvis som en form for fascisme?'
          },
          answers: [
            { en: 'Nazism', no: 'Nazisme' },
            { en: 'Liberalism', no: 'Liberalisme' },
            { en: 'Social democracy', no: 'Sosialdemokrati' },
            { en: 'Anarchism', no: 'Anarkisme' }
          ],
          correct: 0,
          explanation: {
            en: 'Nazism (German National Socialism) is generally classified as a form of fascism.',
            no: 'Nazisme (tysk nasjonalsosialisme) klassifiseres vanligvis som en form for fascisme.'
          },
          tags: ['fascism', 'nazism', 'germany']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'How does fascism view democracy?',
            no: 'Hvordan ser fascismen på demokrati?'
          },
          answers: [
            { en: 'It is the same as democracy', no: 'Den er det samme som demokrati' },
            { en: 'It rejects liberal democracy as weak and divisive', no: 'Den forkaster liberalt demokrati som svakt og splittende' },
            { en: 'It strongly supports multiparty democracy', no: 'Den støtter sterkt flerpartidemokrati' },
            { en: 'It requires frequent free elections', no: 'Den krever hyppige frie valg' }
          ],
          correct: 1,
          explanation: {
            en: 'Fascism rejects liberal democracy, viewing it as weak, divided and inferior to unified authoritarian rule.',
            no: 'Fascismen forkaster liberalt demokrati og ser det som svakt, splittet og underlegent enhetlig autoritært styre.'
          },
          tags: ['fascism', 'democracy', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which feeling does fascism strongly appeal to?',
            no: 'Hvilken følelse appellerer fascismen sterkt til?'
          },
          answers: [
            { en: 'Class solidarity across borders', no: 'Klassesolidaritet over grenser' },
            { en: 'Individual self-interest', no: 'Individuell egeninteresse' },
            { en: 'Extreme nationalism', no: 'Ekstrem nasjonalisme' },
            { en: 'Global cooperation', no: 'Globalt samarbeid' }
          ],
          correct: 2,
          explanation: {
            en: 'Fascism appeals to extreme nationalism and pride in the nation.',
            no: 'Fascismen appellerer til ekstrem nasjonalisme og stolthet over nasjonen.'
          },
          tags: ['fascism', 'nationalism', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Where does the word "fascism" originate?',
            no: 'Hvor kommer ordet «fascisme» fra?'
          },
          answers: [
            { en: 'A Greek word for democracy', no: 'Et gresk ord for demokrati' },
            { en: 'A French word for freedom', no: 'Et fransk ord for frihet' },
            { en: 'A Russian word for worker', no: 'Et russisk ord for arbeider' },
            { en: 'The Latin "fasces," a bundle of rods symbolising authority', no: 'Det latinske «fasces», et knippe stenger som symboliserte autoritet' }
          ],
          correct: 3,
          explanation: {
            en: 'The term comes from the Latin "fasces," a bundle of rods that symbolised authority in ancient Rome.',
            no: 'Begrepet kommer fra det latinske «fasces», et knippe stenger som symboliserte autoritet i antikkens Roma.'
          },
          tags: ['fascism', 'etymology', 'rome']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Fascist movements typically used which tool to control public opinion?',
            no: 'Fascistiske bevegelser brukte typisk hvilket verktøy for å kontrollere opinionen?'
          },
          answers: [
            { en: 'Propaganda', no: 'Propaganda' },
            { en: 'Free debate', no: 'Fri debatt' },
            { en: 'Independent courts', no: 'Uavhengige domstoler' },
            { en: 'A free press', no: 'En fri presse' }
          ],
          correct: 0,
          explanation: {
            en: 'Fascist regimes relied heavily on propaganda to shape and control public opinion.',
            no: 'Fascistiske regimer baserte seg sterkt på propaganda for å forme og kontrollere opinionen.'
          },
          tags: ['fascism', 'propaganda', 'control']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which decades did fascism rise to power in Europe?',
            no: 'I hvilke tiår steg fascismen til makten i Europa?'
          },
          answers: [
            { en: 'The 1990s and 2000s', no: '1990- og 2000-årene' },
            { en: 'The 1920s and 1930s', no: '1920- og 1930-årene' },
            { en: 'The 1820s and 1830s', no: '1820- og 1830-årene' },
            { en: 'The 1620s and 1630s', no: '1620- og 1630-årene' }
          ],
          correct: 1,
          explanation: {
            en: 'Fascism rose to power in Europe during the 1920s and 1930s, between the two world wars.',
            no: 'Fascismen steg til makten i Europa på 1920- og 1930-tallet, mellom de to verdenskrigene.'
          },
          tags: ['fascism', 'history', 'interwar']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Fascism is generally placed where on the political spectrum?',
            no: 'Fascismen plasseres vanligvis hvor på det politiske spekteret?'
          },
          answers: [
            { en: 'In the exact centre', no: 'I det eksakte sentrum' },
            { en: 'Outside all politics', no: 'Utenfor all politikk' },
            { en: 'On the far right', no: 'På ytre høyre' },
            { en: 'On the far left', no: 'På ytre venstre' }
          ],
          correct: 2,
          explanation: {
            en: 'Fascism is generally classified as a far-right, authoritarian and ultranationalist ideology.',
            no: 'Fascismen klassifiseres vanligvis som en ytterliggående høyreorientert, autoritær og ultranasjonalistisk ideologi.'
          },
          tags: ['fascism', 'spectrum', 'far-right']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What did fascist regimes typically do to opposition parties?',
            no: 'Hva gjorde fascistiske regimer typisk med opposisjonspartier?'
          },
          answers: [
            { en: 'Encouraged many parties to compete', no: 'Oppmuntret mange partier til å konkurrere' },
            { en: 'Gave them equal funding', no: 'Ga dem lik finansiering' },
            { en: 'Let them run the courts', no: 'Lot dem styre domstolene' },
            { en: 'Banned them and created a one-party state', no: 'Forbød dem og opprettet en ettpartistat' }
          ],
          correct: 3,
          explanation: {
            en: 'Fascist regimes banned opposition parties and established one-party dictatorships.',
            no: 'Fascistiske regimer forbød opposisjonspartier og etablerte ettpartidiktaturer.'
          },
          tags: ['fascism', 'one-party', 'dictatorship']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which value is opposed to fascism?',
            no: 'Hvilken verdi står i motsetning til fascismen?'
          },
          answers: [
            { en: 'Pluralism and individual rights', no: 'Pluralisme og individuelle rettigheter' },
            { en: 'Strong central authority', no: 'Sterk sentral autoritet' },
            { en: 'Militarism', no: 'Militarisme' },
            { en: 'National unity by force', no: 'Nasjonal enhet med makt' }
          ],
          correct: 0,
          explanation: {
            en: 'Pluralism and individual rights are directly opposed to fascism\'s demand for unity and obedience.',
            no: 'Pluralisme og individuelle rettigheter står i direkte motsetning til fascismens krav om enhet og lydighet.'
          },
          tags: ['fascism', 'pluralism', 'contrast']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Fascism often glorifies which of the following?',
            no: 'Fascismen forherliger ofte hvilken av følgende?'
          },
          answers: [
            { en: 'International law', no: 'Folkerett' },
            { en: 'War, strength and military power', no: 'Krig, styrke og militær makt' },
            { en: 'Pacifism', no: 'Pasifisme' },
            { en: 'Free trade', no: 'Frihandel' }
          ],
          correct: 1,
          explanation: {
            en: 'Fascism glorifies war, strength and military power as expressions of national vitality.',
            no: 'Fascismen forherliger krig, styrke og militær makt som uttrykk for nasjonal livskraft.'
          },
          tags: ['fascism', 'militarism', 'values']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In 1922, Mussolini came to power partly through which event?',
            no: 'I 1922 kom Mussolini til makten delvis gjennom hvilken hendelse?'
          },
          answers: [
            { en: 'The October Revolution', no: 'Oktoberrevolusjonen' },
            { en: 'The Long March', no: 'Den lange marsjen' },
            { en: 'The March on Rome', no: 'Marsjen mot Roma' },
            { en: 'The storming of the Bastille', no: 'Stormingen av Bastillen' }
          ],
          correct: 2,
          explanation: {
            en: 'Mussolini came to power in 1922 after the March on Rome pressured the king to appoint him prime minister.',
            no: 'Mussolini kom til makten i 1922 etter at marsjen mot Roma presset kongen til å utnevne ham til statsminister.'
          },
          tags: ['fascism', 'mussolini', 'march-on-rome']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does fascism differ from communism on the question of class?',
            no: 'Hvordan skiller fascismen seg fra kommunismen i spørsmålet om klasse?'
          },
          answers: [
            { en: 'Fascism wants to abolish all nations', no: 'Fascismen vil avskaffe alle nasjoner' },
            { en: 'Fascism promotes worldwide working-class revolution', no: 'Fascismen fremmer verdensomspennende arbeiderrevolusjon' },
            { en: 'Fascism demands common ownership of all property', no: 'Fascismen krever felles eierskap til all eiendom' },
            { en: 'Fascism rejects class struggle and stresses national unity instead', no: 'Fascismen forkaster klassekamp og vektlegger nasjonal enhet i stedet' }
          ],
          correct: 3,
          explanation: {
            en: 'Unlike communism, fascism rejects class struggle and instead demands unity of all classes within the nation.',
            no: 'I motsetning til kommunismen forkaster fascismen klassekamp og krever i stedet enhet mellom alle klasser i nasjonen.'
          },
          tags: ['fascism', 'communism', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did fascism gain support in Europe after World War I?',
            no: 'Hvorfor fikk fascismen støtte i Europa etter første verdenskrig?'
          },
          answers: [
            { en: 'Economic crisis, fear of communism and wounded national pride', no: 'Økonomisk krise, frykt for kommunisme og såret nasjonalstolthet' },
            { en: 'Widespread prosperity and stability', no: 'Utbredt velstand og stabilitet' },
            { en: 'Strong faith in liberal democracy', no: 'Sterk tro på liberalt demokrati' },
            { en: 'A lack of any nationalism', no: 'Fravær av all nasjonalisme' }
          ],
          correct: 0,
          explanation: {
            en: 'Post-war economic crisis, fear of communist revolution and bruised national pride helped fascism gain support.',
            no: 'Økonomisk krise etter krigen, frykt for kommunistisk revolusjon og såret nasjonalstolthet bidro til at fascismen fikk støtte.'
          },
          tags: ['fascism', 'causes', 'interwar']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a "scapegoat," and how did fascists use this idea?',
            no: 'Hva er en «syndebukk», og hvordan brukte fascister denne ideen?'
          },
          answers: [
            { en: 'A policy of free trade', no: 'En politikk for frihandel' },
            { en: 'A blamed group; fascists blamed minorities or enemies for national problems', no: 'En gruppe som får skylden; fascister ga minoriteter eller fiender skylden for nasjonale problemer' },
            { en: 'A national hero celebrated by all', no: 'En nasjonalhelt feiret av alle' },
            { en: 'A type of free election', no: 'En type fritt valg' }
          ],
          correct: 1,
          explanation: {
            en: 'Fascists used scapegoating—blaming minorities or "enemies"—to unite supporters and explain national problems.',
            no: 'Fascister brukte syndebukktenkning—å gi minoriteter eller «fiender» skylden—for å samle tilhengere og forklare nasjonale problemer.'
          },
          tags: ['fascism', 'scapegoat', 'propaganda']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did fascism typically relate to big business and capitalism?',
            no: 'Hvordan forholdt fascismen seg typisk til storkapital og kapitalisme?'
          },
          answers: [
            { en: 'It demanded common ownership of all firms', no: 'Den krevde felles eierskap til alle bedrifter' },
            { en: 'It opposed any industry', no: 'Den motsatte seg all industri' },
            { en: 'It often allied with business while subordinating it to the state', no: 'Den allierte seg ofte med næringslivet, men underordnet det staten' },
            { en: 'It abolished all private business', no: 'Den avskaffet all privat virksomhet' }
          ],
          correct: 2,
          explanation: {
            en: 'Fascist regimes usually kept private business but subordinated it to state goals, often allying with industrialists against the left.',
            no: 'Fascistiske regimer beholdt vanligvis privat virksomhet, men underordnet den statens mål, ofte i allianse med industriledere mot venstresiden.'
          },
          tags: ['fascism', 'capitalism', 'state']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is "corporatism" as used by Italian fascism?',
            no: 'Hva er «korporatisme» slik italiensk fascisme brukte begrepet?'
          },
          answers: [
            { en: 'Giving all firms to foreign owners', no: 'Å gi alle bedrifter til utenlandske eiere' },
            { en: 'Abolishing all companies', no: 'Å avskaffe alle selskaper' },
            { en: 'Letting workers own every factory', no: 'Å la arbeiderne eie hver fabrikk' },
            { en: 'Organising the economy into state-controlled groups of employers and workers', no: 'Å organisere økonomien i statskontrollerte grupper av arbeidsgivere og arbeidere' }
          ],
          correct: 3,
          explanation: {
            en: 'Fascist corporatism organised the economy into state-supervised "corporations" of employers and workers to suppress class conflict.',
            no: 'Fascistisk korporatisme organiserte økonomien i statsovervåkede «korporasjoner» av arbeidsgivere og arbeidere for å undertrykke klassekonflikt.'
          },
          tags: ['fascism', 'corporatism', 'economy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did fascism use mass rallies and symbols?',
            no: 'Hvordan brukte fascismen massemønstringer og symboler?'
          },
          answers: [
            { en: 'To create emotional unity and loyalty to the leader and nation', no: 'For å skape følelsesmessig enhet og lojalitet til lederen og nasjonen' },
            { en: 'To encourage open debate and dissent', no: 'For å oppmuntre til åpen debatt og uenighet' },
            { en: 'To weaken the central state', no: 'For å svekke sentralstaten' },
            { en: 'To promote international cooperation', no: 'For å fremme internasjonalt samarbeid' }
          ],
          correct: 0,
          explanation: {
            en: 'Fascists staged mass rallies, uniforms and symbols to build emotional unity and devotion to the leader and nation.',
            no: 'Fascister iscenesatte massemønstringer, uniformer og symboler for å bygge følelsesmessig enhet og hengivenhet til lederen og nasjonen.'
          },
          tags: ['fascism', 'rallies', 'propaganda']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does fascism differ from traditional conservatism?',
            no: 'Hvordan skiller fascismen seg fra tradisjonell konservatisme?'
          },
          answers: [
            { en: 'Fascism supports liberal democracy', no: 'Fascismen støtter liberalt demokrati' },
            { en: 'Fascism is revolutionary and mobilises the masses, not just preserving order', no: 'Fascismen er revolusjonær og mobiliserer massene, ikke bare bevarer orden' },
            { en: 'Fascism simply defends existing institutions cautiously', no: 'Fascismen forsvarer bare eksisterende institusjoner forsiktig' },
            { en: 'Fascism rejects all nationalism', no: 'Fascismen forkaster all nasjonalisme' }
          ],
          correct: 1,
          explanation: {
            en: 'Unlike cautious conservatism, fascism is a radical, mobilising movement seeking to remake society around the nation and leader.',
            no: 'I motsetning til forsiktig konservatisme er fascismen en radikal, mobiliserende bevegelse som vil omforme samfunnet rundt nasjonen og lederen.'
          },
          tags: ['fascism', 'conservatism', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What role did paramilitary groups play in fascist movements?',
            no: 'Hvilken rolle spilte paramilitære grupper i fascistiske bevegelser?'
          },
          answers: [
            { en: 'They protected opposition parties', no: 'De beskyttet opposisjonspartier' },
            { en: 'They ran independent courts', no: 'De drev uavhengige domstoler' },
            { en: 'They intimidated opponents and used violence to gain power', no: 'De skremte motstandere og brukte vold for å oppnå makt' },
            { en: 'They guaranteed free elections', no: 'De garanterte frie valg' }
          ],
          correct: 2,
          explanation: {
            en: 'Paramilitary groups like Italy\'s Blackshirts used street violence and intimidation to crush opponents and seize power.',
            no: 'Paramilitære grupper som Italias svartskjorter brukte gatevold og trusler for å knuse motstandere og gripe makten.'
          },
          tags: ['fascism', 'paramilitary', 'violence']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did fascism view the relationship between the individual and the state?',
            no: 'Hvordan så fascismen på forholdet mellom individet og staten?'
          },
          answers: [
            { en: 'The state exists only to protect individual rights', no: 'Staten eksisterer bare for å beskytte individuelle rettigheter' },
            { en: 'The individual stands above the state', no: 'Individet står over staten' },
            { en: 'The state should be abolished', no: 'Staten bør avskaffes' },
            { en: 'The individual exists to serve the nation and state', no: 'Individet eksisterer for å tjene nasjonen og staten' }
          ],
          correct: 3,
          explanation: {
            en: 'Fascism subordinates the individual to the nation and state, the opposite of liberal individualism.',
            no: 'Fascismen underordner individet nasjonen og staten, det motsatte av liberal individualisme.'
          },
          tags: ['fascism', 'individual', 'state']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did many fascists promote a mythic, glorious national past?',
            no: 'Hvorfor fremmet mange fascister en mytisk, strålende nasjonal fortid?'
          },
          answers: [
            { en: 'To inspire pride and justify national rebirth and expansion', no: 'For å inspirere stolthet og rettferdiggjøre nasjonal gjenfødelse og ekspansjon' },
            { en: 'To encourage people to forget the nation', no: 'For å få folk til å glemme nasjonen' },
            { en: 'To support international brotherhood', no: 'For å støtte internasjonalt brorskap' },
            { en: 'To weaken patriotism', no: 'For å svekke patriotismen' }
          ],
          correct: 0,
          explanation: {
            en: 'Fascists invoked a glorious past (e.g. ancient Rome) to inspire pride and justify national "rebirth" and expansion.',
            no: 'Fascister påkalte en strålende fortid (f.eks. antikkens Roma) for å inspirere stolthet og rettferdiggjøre nasjonal «gjenfødelse» og ekspansjon.'
          },
          tags: ['fascism', 'myth', 'nationalism']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was the eventual consequence of fascist expansionism in the 1930s?',
            no: 'Hva ble den endelige konsekvensen av fascistisk ekspansjonisme på 1930-tallet?'
          },
          answers: [
            { en: 'It strengthened the League of Nations', no: 'Den styrket Folkeforbundet' },
            { en: 'It contributed to the outbreak of World War II', no: 'Den bidro til utbruddet av andre verdenskrig' },
            { en: 'It created lasting world peace', no: 'Den skapte varig verdensfred' },
            { en: 'It ended all nationalism', no: 'Den avsluttet all nasjonalisme' }
          ],
          correct: 1,
          explanation: {
            en: 'Aggressive fascist expansion by Italy, Germany and Japan helped lead to the outbreak of World War II.',
            no: 'Aggressiv fascistisk ekspansjon fra Italia, Tyskland og Japan bidro til utbruddet av andre verdenskrig.'
          },
          tags: ['fascism', 'expansion', 'world-war-ii']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did fascist regimes typically treat women\'s roles?',
            no: 'Hvordan behandlet fascistiske regimer typisk kvinners roller?'
          },
          answers: [
            { en: 'They banned families', no: 'De forbød familier' },
            { en: 'They had no view on the family', no: 'De hadde ikke noe syn på familien' },
            { en: 'They promoted traditional roles centred on motherhood and the family', no: 'De fremmet tradisjonelle roller sentrert om morsrollen og familien' },
            { en: 'They demanded full gender equality', no: 'De krevde full likestilling' }
          ],
          correct: 2,
          explanation: {
            en: 'Fascist regimes generally pushed women toward traditional roles focused on motherhood and raising children for the nation.',
            no: 'Fascistiske regimer skjøv generelt kvinner mot tradisjonelle roller fokusert på morsrollen og oppdragelse av barn for nasjonen.'
          },
          tags: ['fascism', 'gender', 'society']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do scholars find fascism difficult to define precisely?',
            no: 'Hvorfor finner forskere det vanskelig å definere fascismen presist?'
          },
          answers: [
            { en: 'It had a single detailed programme everywhere', no: 'Den hadde ett detaljert program overalt' },
            { en: 'It was identical to liberalism', no: 'Den var identisk med liberalismen' },
            { en: 'It never actually held power', no: 'Den hadde aldri faktisk makt' },
            { en: 'It varied between countries and combined elements without a single fixed doctrine', no: 'Den varierte mellom land og kombinerte elementer uten én fast lære' }
          ],
          correct: 3,
          explanation: {
            en: 'Fascism varied across nations and blended nationalism, authoritarianism and other elements, making a single definition hard.',
            no: 'Fascismen varierte mellom nasjoner og blandet nasjonalisme, autoritarisme og andre elementer, noe som gjør én definisjon vanskelig.'
          },
          tags: ['fascism', 'definition', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What does Robert Paxton emphasise in his approach to understanding fascism?',
            no: 'Hva vektlegger Robert Paxton i sin tilnærming til å forstå fascismen?'
          },
          answers: [
            { en: 'Fascism is best understood through what it does in stages, not just its doctrine', no: 'Fascismen forstås best gjennom hva den gjør i faser, ikke bare gjennom dens lære' },
            { en: 'Fascism is purely an economic theory', no: 'Fascismen er rent en økonomisk teori' },
            { en: 'Fascism has one unchanging written programme', no: 'Fascismen har ett uforanderlig skrevet program' },
            { en: 'Fascism is a form of liberalism', no: 'Fascismen er en form for liberalisme' }
          ],
          correct: 0,
          explanation: {
            en: 'Paxton argued fascism should be studied through its actions and stages of development rather than a fixed set of ideas.',
            no: 'Paxton hevdet at fascismen bør studeres gjennom dens handlinger og utviklingsfaser snarere enn et fast sett ideer.'
          },
          tags: ['fascism', 'paxton', 'theory']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does the concept of "palingenetic ultranationalism" (Roger Griffin) describe fascism\'s core?',
            no: 'Hvordan beskriver begrepet «palingenetisk ultranasjonalisme» (Roger Griffin) fascismens kjerne?'
          },
          answers: [
            { en: 'As a defence of multiparty democracy', no: 'Som et forsvar av flerpartidemokrati' },
            { en: 'As a myth of national rebirth from decadence and decline', no: 'Som en myte om nasjonal gjenfødelse fra dekadanse og forfall' },
            { en: 'As a call for global class revolution', no: 'Som et kall til global klasserevolusjon' },
            { en: 'As support for free-market liberalism', no: 'Som støtte til frimarkedsliberalisme' }
          ],
          correct: 1,
          explanation: {
            en: 'Griffin defined fascism\'s core myth as "palingenetic ultranationalism"—the rebirth of the nation from perceived decline.',
            no: 'Griffin definerte fascismens kjernemyte som «palingenetisk ultranasjonalisme»—nasjonens gjenfødelse fra opplevd forfall.'
          },
          tags: ['fascism', 'griffin', 'rebirth']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians debate whether Italian Fascism and German Nazism are the same thing?',
            no: 'Hvorfor diskuterer historikere om italiensk fascisme og tysk nazisme er det samme?'
          },
          answers: [
            { en: 'Italian Fascism was a form of communism', no: 'Italiensk fascisme var en form for kommunisme' },
            { en: 'Nazism rejected nationalism', no: 'Nazismen forkastet nasjonalisme' },
            { en: 'Nazism centred on racial ideology and antisemitism more than Italian Fascism did', no: 'Nazismen sentrerte mer rundt raseideologi og antisemittisme enn italiensk fascisme gjorde' },
            { en: 'They had no differences at all', no: 'De hadde ingen forskjeller i det hele tatt' }
          ],
          correct: 2,
          explanation: {
            en: 'Both are fascist, but Nazism placed racial ideology and antisemitism at its centre far more than Italian Fascism, sparking debate.',
            no: 'Begge er fascistiske, men nazismen satte raseideologi og antisemittisme i sentrum langt mer enn italiensk fascisme, noe som vekker debatt.'
          },
          tags: ['fascism', 'nazism', 'comparison']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What economic or social conditions are often cited as enabling fascism\'s rise?',
            no: 'Hvilke økonomiske eller sosiale forhold trekkes ofte fram som muliggjørende for fascismens framvekst?'
          },
          answers: [
            { en: 'Long-term prosperity and stable institutions', no: 'Langvarig velstand og stabile institusjoner' },
            { en: 'Strong public trust in liberal government', no: 'Sterk offentlig tillit til liberalt styre' },
            { en: 'The absence of any nationalism', no: 'Fravær av all nasjonalisme' },
            { en: 'Economic crisis, fear of revolution and a weak or distrusted democracy', no: 'Økonomisk krise, frykt for revolusjon og et svakt eller mistrodd demokrati' }
          ],
          correct: 3,
          explanation: {
            en: 'Fascism tended to rise where economic crisis, fear of revolution and distrust of weak democratic institutions combined.',
            no: 'Fascismen hadde en tendens til å vokse fram der økonomisk krise, frykt for revolusjon og mistillit til svake demokratiske institusjoner kom sammen.'
          },
          tags: ['fascism', 'causes', 'conditions']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did fascism\'s view of violence differ from a merely pragmatic use of force?',
            no: 'Hvordan skilte fascismens syn på vold seg fra en rent pragmatisk bruk av makt?'
          },
          answers: [
            { en: 'Fascism often celebrated violence as ennobling and a source of national vitality', no: 'Fascismen feiret ofte vold som foredlende og en kilde til nasjonal livskraft' },
            { en: 'Fascism rejected all use of force', no: 'Fascismen forkastet all bruk av makt' },
            { en: 'Fascism saw violence only as a last resort', no: 'Fascismen så vold bare som en siste utvei' },
            { en: 'Fascism treated violence as regrettable', no: 'Fascismen så vold som beklagelig' }
          ],
          correct: 0,
          explanation: {
            en: 'Fascists frequently glorified violence and struggle as heroic and regenerative, not just as a practical tool.',
            no: 'Fascister forherliget ofte vold og kamp som heroisk og fornyende, ikke bare som et praktisk verktøy.'
          },
          tags: ['fascism', 'violence', 'ideology']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is it debated whether fascism is "anti-modern" or a product of modernity?',
            no: 'Hvorfor diskuteres det om fascismen er «antimoderne» eller et produkt av moderniteten?'
          },
          answers: [
            { en: 'It fully embraced liberal democracy', no: 'Den omfavnet fullt ut liberalt demokrati' },
            { en: 'It rejected liberal values yet used modern technology, mass media and organisation', no: 'Den forkastet liberale verdier, men brukte moderne teknologi, massemedier og organisering' },
            { en: 'It avoided all technology', no: 'Den unngikk all teknologi' },
            { en: 'It existed before the modern era', no: 'Den eksisterte før den moderne tid' }
          ],
          correct: 1,
          explanation: {
            en: 'Fascism attacked liberal modernity yet harnessed modern technology, propaganda and mass mobilisation, fuelling this debate.',
            no: 'Fascismen angrep liberal modernitet, men utnyttet moderne teknologi, propaganda og massemobilisering, noe som nærer denne debatten.'
          },
          tags: ['fascism', 'modernity', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do scholars distinguish fascism from ordinary authoritarianism?',
            no: 'Hvordan skiller forskere fascismen fra vanlig autoritarisme?'
          },
          answers: [
            { en: 'Fascism avoids all ideology', no: 'Fascismen unngår all ideologi' },
            { en: 'Fascism supports free elections', no: 'Fascismen støtter frie valg' },
            { en: 'Fascism mobilises the masses around an ideology of national rebirth, not just enforcing order', no: 'Fascismen mobiliserer massene rundt en ideologi om nasjonal gjenfødelse, ikke bare håndhever orden' },
            { en: 'Fascism leaves citizens politically passive by design', no: 'Fascismen lar borgerne være politisk passive med vilje' }
          ],
          correct: 2,
          explanation: {
            en: 'Unlike merely repressive authoritarian regimes, fascism actively mobilises the masses around an ideology of national renewal.',
            no: 'I motsetning til rent undertrykkende autoritære regimer mobiliserer fascismen aktivt massene rundt en ideologi om nasjonal fornyelse.'
          },
          tags: ['fascism', 'authoritarianism', 'distinction']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the debate over using "fascism" to describe modern political movements?',
            no: 'Hva er debatten om å bruke «fascisme» for å beskrive moderne politiske bevegelser?'
          },
          answers: [
            { en: 'Whether fascism ever existed', no: 'Om fascismen noensinne eksisterte' },
            { en: 'Whether Mussolini led Italy', no: 'Om Mussolini ledet Italia' },
            { en: 'Whether fascism is left-wing', no: 'Om fascismen er venstreorientert' },
            { en: 'Whether the term clarifies real similarities or is overused as a vague insult', no: 'Om begrepet klargjør reelle likheter eller overbrukes som en vag fornærmelse' }
          ],
          correct: 3,
          explanation: {
            en: 'Scholars debate whether labelling current movements "fascist" highlights genuine parallels or dilutes the term into a vague insult.',
            no: 'Forskere diskuterer om å kalle dagens bevegelser «fascistiske» fremhever ekte paralleller eller utvanner begrepet til en vag fornærmelse.'
          },
          tags: ['fascism', 'modern', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did fascist ideology relate to Social Darwinism and ideas of struggle?',
            no: 'Hvordan forholdt fascistisk ideologi seg til sosialdarwinisme og ideer om kamp?'
          },
          answers: [
            { en: 'It drew on notions of nations or races struggling for survival and dominance', no: 'Den bygde på forestillinger om nasjoner eller raser i kamp for overlevelse og dominans' },
            { en: 'It rejected any idea of competition', no: 'Den forkastet enhver idé om konkurranse' },
            { en: 'It promoted universal human equality', no: 'Den fremmet universell menneskelig likhet' },
            { en: 'It opposed all conflict', no: 'Den motsatte seg all konflikt' }
          ],
          correct: 0,
          explanation: {
            en: 'Fascism often drew on Social Darwinist ideas that nations or races compete in a struggle for survival and supremacy.',
            no: 'Fascismen bygde ofte på sosialdarwinistiske ideer om at nasjoner eller raser konkurrerer i en kamp for overlevelse og overherredømme.'
          },
          tags: ['fascism', 'social-darwinism', 'ideology']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do some scholars argue fascism was fundamentally reactionary despite its revolutionary style?',
            no: 'Hvorfor hevder enkelte forskere at fascismen i bunn og grunn var reaksjonær til tross for sin revolusjonære stil?'
          },
          answers: [
            { en: 'It defended liberal democracy', no: 'Den forsvarte liberalt demokrati' },
            { en: 'It used radical methods but served to crush the left and protect existing elites', no: 'Den brukte radikale metoder, men tjente til å knuse venstresiden og beskytte eksisterende eliter' },
            { en: 'It genuinely abolished all hierarchy', no: 'Den avskaffet virkelig alt hierarki' },
            { en: 'It promoted working-class revolution', no: 'Den fremmet arbeiderklassens revolusjon' }
          ],
          correct: 1,
          explanation: {
            en: 'Some scholars stress that, despite radical rhetoric, fascism crushed the left and often protected established elites and property.',
            no: 'Enkelte forskere understreker at fascismen, til tross for radikal retorikk, knuste venstresiden og ofte beskyttet etablerte eliter og eiendom.'
          },
          tags: ['fascism', 'reactionary', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What lasting impact did the defeat of fascism in 1945 have on international politics?',
            no: 'Hvilken varig innvirkning hadde fascismens nederlag i 1945 på internasjonal politikk?'
          },
          answers: [
            { en: 'It ended all nationalism worldwide', no: 'Det avsluttet all nasjonalisme verden over' },
            { en: 'It abolished the nation-state', no: 'Det avskaffet nasjonalstaten' },
            { en: 'It strengthened commitments to human rights and anti-fascist norms', no: 'Det styrket forpliktelser til menneskerettigheter og antifascistiske normer' },
            { en: 'It made fascism the global norm', no: 'Det gjorde fascismen til den globale normen' }
          ],
          correct: 2,
          explanation: {
            en: 'The defeat of fascism reinforced post-war human-rights norms and a broad international rejection of fascist ideology.',
            no: 'Fascismens nederlag styrket etterkrigstidens menneskerettighetsnormer og en bred internasjonal avvisning av fascistisk ideologi.'
          },
          tags: ['fascism', 'legacy', 'human-rights']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did fascism use the "cult of the leader"?',
            no: 'Hvordan brukte fascismen «lederkulten»?'
          },
          answers: [
            { en: 'It encouraged citizens to criticise the leader freely', no: 'Den oppmuntret borgerne til å kritisere lederen fritt' },
            { en: 'It rotated leaders every year', no: 'Den byttet ledere hvert år' },
            { en: 'It abolished the position of leader', no: 'Den avskaffet lederrollen' },
            { en: 'It portrayed the leader as the infallible embodiment of the nation\'s will', no: 'Den fremstilte lederen som nasjonsviljens ufeilbarlige legemliggjøring' }
          ],
          correct: 3,
          explanation: {
            en: 'Fascism built a cult around the leader, presenting him as the wise, infallible embodiment of the nation.',
            no: 'Fascismen bygde en kult rundt lederen og fremstilte ham som den vise, ufeilbarlige legemliggjøringen av nasjonen.'
          },
          tags: ['fascism', 'leader-cult', 'propaganda']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does fascism differ from liberalism on individual rights?',
            no: 'Hvordan skiller fascismen seg fra liberalismen når det gjelder individuelle rettigheter?'
          },
          answers: [
            { en: 'Fascism subordinates individual rights to the nation; liberalism protects them', no: 'Fascismen underordner individuelle rettigheter nasjonen; liberalismen beskytter dem' },
            { en: 'Both place individual rights above the state', no: 'Begge setter individuelle rettigheter over staten' },
            { en: 'Fascism expands civil liberties', no: 'Fascismen utvider borgerrettighetene' },
            { en: 'Liberalism rejects all individual rights', no: 'Liberalismen forkaster alle individuelle rettigheter' }
          ],
          correct: 0,
          explanation: {
            en: 'Where liberalism protects individual rights against the state, fascism subordinates the individual entirely to the nation.',
            no: 'Der liberalismen beskytter individuelle rettigheter mot staten, underordner fascismen individet fullstendig nasjonen.'
          },
          tags: ['fascism', 'liberalism', 'rights']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the Great Depression help fascist movements in the 1930s?',
            no: 'Hvordan hjalp den store depresjonen fascistiske bevegelser på 1930-tallet?'
          },
          answers: [
            { en: 'It weakened nationalism', no: 'Den svekket nasjonalismen' },
            { en: 'Mass unemployment and fear made radical, authoritarian solutions more appealing', no: 'Massearbeidsledighet og frykt gjorde radikale, autoritære løsninger mer tiltrekkende' },
            { en: 'It made people trust liberal democracy more', no: 'Den fikk folk til å stole mer på liberalt demokrati' },
            { en: 'It ended all unemployment', no: 'Den avsluttet all arbeidsledighet' }
          ],
          correct: 1,
          explanation: {
            en: 'The Depression\'s mass unemployment and insecurity made many people receptive to fascism\'s radical, authoritarian promises.',
            no: 'Depresjonens massearbeidsledighet og usikkerhet gjorde mange mottakelige for fascismens radikale, autoritære løfter.'
          },
          tags: ['fascism', 'great-depression', 'causes']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why does Umberto Eco\'s idea of "Ur-Fascism" treat fascism as a set of features rather than a fixed doctrine?',
            no: 'Hvorfor behandler Umberto Ecos idé om «ur-fascisme» fascismen som et sett trekk snarere enn en fast lære?'
          },
          answers: [
            { en: 'He said fascism is a form of liberalism', no: 'Han sa at fascismen er en form for liberalisme' },
            { en: 'He denied fascism ever existed', no: 'Han benektet at fascismen noensinne eksisterte' },
            { en: 'He argued fascism is a loose cluster of traits that can recombine in new forms', no: 'Han hevdet at fascismen er en løs samling trekk som kan settes sammen på nye måter' },
            { en: 'He claimed fascism has one precise written programme', no: 'Han hevdet at fascismen har ett presist skrevet program' }
          ],
          correct: 2,
          explanation: {
            en: 'Eco described "Ur-Fascism" as a fuzzy set of recurring features (e.g. cult of tradition, fear of difference) that can reappear in varied combinations.',
            no: 'Eco beskrev «ur-fascisme» som et uklart sett av gjentakende trekk (f.eks. tradisjonsdyrking, frykt for det fremmede) som kan dukke opp i ulike kombinasjoner.'
          },
          tags: ['fascism', 'eco', 'theory']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How was imperialism connected to fascist ideology in Italy and Germany?',
            no: 'Hvordan var imperialisme knyttet til fascistisk ideologi i Italia og Tyskland?'
          },
          answers: [
            { en: 'Both rejected any territorial expansion', no: 'Begge forkastet enhver territoriell ekspansjon' },
            { en: 'Imperialism was condemned as un-national', no: 'Imperialisme ble fordømt som unasjonalt' },
            { en: 'Both promoted peaceful internationalism', no: 'Begge fremmet fredelig internasjonalisme' },
            { en: 'Expansion and conquest were seen as proof of national strength and destiny', no: 'Ekspansjon og erobring ble sett som bevis på nasjonal styrke og skjebne' }
          ],
          correct: 3,
          explanation: {
            en: 'Fascist regimes pursued empire (Italy in Ethiopia, Germany\'s "Lebensraum") as expressions of national vitality and destiny.',
            no: 'Fascistiske regimer søkte imperium (Italia i Etiopia, Tysklands «Lebensraum») som uttrykk for nasjonal livskraft og skjebne.'
          },
          tags: ['fascism', 'imperialism', 'expansion']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians often stress middle-class and lower-middle-class support for fascism?',
            no: 'Hvorfor vektlegger historikere ofte middelklassens og den lavere middelklassens støtte til fascismen?'
          },
          answers: [
            { en: 'Many felt squeezed between big business and organised labour and feared losing status', no: 'Mange følte seg klemt mellom storkapital og organisert arbeiderbevegelse og fryktet å miste status' },
            { en: 'They were the wealthiest group in society', no: 'De var den rikeste gruppen i samfunnet' },
            { en: 'They had no interest in politics', no: 'De hadde ingen interesse for politikk' },
            { en: 'They consistently supported communism instead', no: 'De støttet konsekvent kommunismen i stedet' }
          ],
          correct: 0,
          explanation: {
            en: 'Many studies emphasise that anxious middle and lower-middle classes, fearing decline and the left, formed an important base for fascism.',
            no: 'Mange studier vektlegger at engstelige deler av middelklassen og den lavere middelklassen, som fryktet nedgang og venstresiden, utgjorde et viktig grunnlag for fascismen.'
          },
          tags: ['fascism', 'class', 'historiography']
        }
      ]
    }
  ]
};
