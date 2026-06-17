import type { SeedSubcategory } from '../types';

export const worldWarII: SeedSubcategory = {
  slug: 'world-war-ii',
  name: { en: 'World War II', no: 'World War II' },
  modules: [
    {
      slug: 'rise-of-nazi-germany',
      name: { en: 'Rise of Nazi Germany', no: 'Rise of Nazi Germany' },
      questions: [
  {
    difficulty: 'easy',
    question: {
      en: 'Who became Chancellor of Germany in 1933?',
      no: 'Hvem ble Tysklands rikskansler i 1933?'
    },
    answers: [
      { en: 'Paul von Hindenburg', no: 'Paul von Hindenburg' },
      { en: 'Adolf Hitler', no: 'Adolf Hitler' },
      { en: 'Joseph Goebbels', no: 'Joseph Goebbels' },
      { en: 'Heinrich Himmler', no: 'Heinrich Himmler' }
    ],
    correct: 1,
    explanation: {
      en: 'Adolf Hitler was appointed Chancellor of Germany on 30 January 1933.',
      no: 'Adolf Hitler ble utnevnt til Tysklands rikskansler 30. januar 1933.'
    },
    tags: ['hitler', 'germany', '1933']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What was the name of the Nazi Party?',
      no: 'Hva var navnet på nazipartiet?'
    },
    answers: [
      { en: 'National Socialist German Workers’ Party', no: 'Det nasjonalsosialistiske tyske arbeiderpartiet' },
      { en: 'German Democratic Party', no: 'Det tyske demokratiske partiet' },
      { en: 'Social Democratic Party', no: 'Sosialdemokratisk parti' },
      { en: 'German National Party', no: 'Det tyske nasjonalpartiet' }
    ],
    correct: 0,
    explanation: {
      en: 'The Nazi Party was officially called the National Socialist German Workers’ Party (NSDAP).',
      no: 'Nazipartiet het offisielt Det nasjonalsosialistiske tyske arbeiderpartiet (NSDAP).'
    },
    tags: ['nsdap', 'party']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'In which year did Adolf Hitler become Chancellor?',
      no: 'I hvilket år ble Adolf Hitler rikskansler?'
    },
    answers: [
      { en: '1939', no: '1939' },
      { en: '1929', no: '1929' },
      { en: '1933', no: '1933' },
      { en: '1918', no: '1918' }
    ],
    correct: 2,
    explanation: {
      en: 'Hitler became Chancellor of Germany in 1933.',
      no: 'Hitler ble Tysklands rikskansler i 1933.'
    },
    tags: ['1933', 'hitler']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What building was damaged in the Reichstag Fire of 1933?',
      no: 'Hvilken bygning ble skadet i Riksdagsbrannen i 1933?'
    },
    answers: [
      { en: 'The Reichstag', no: 'Riksdagen' },
      { en: 'The Brandenburg Gate', no: 'Brandenburger Tor' },
      { en: 'The Chancellery', no: 'Rikskanselliet' },
      { en: 'The Berlin Cathedral', no: 'Berlinerdomen' }
    ],
    correct: 0,
    explanation: {
      en: 'The Reichstag, Germany’s parliament building, was damaged by fire in February 1933.',
      no: 'Riksdagen, Tysklands parlamentsbygning, ble skadet av brann i februar 1933.'
    },
    tags: ['reichstag', '1933']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Who was Germany’s president when Hitler became Chancellor?',
      no: 'Hvem var Tysklands president da Hitler ble rikskansler?'
    },
    answers: [
      { en: 'Wilhelm II', no: 'Wilhelm II' },
      { en: 'Joseph Goebbels', no: 'Joseph Goebbels' },
      { en: 'Paul von Hindenburg', no: 'Paul von Hindenburg' },
      { en: 'Hermann Göring', no: 'Hermann Göring' }
    ],
    correct: 2,
    explanation: {
      en: 'Paul von Hindenburg was president and appointed Hitler as Chancellor.',
      no: 'Paul von Hindenburg var president og utnevnte Hitler til rikskansler.'
    },
    tags: ['hindenburg', 'leadership']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What was the paramilitary wing of the Nazi Party commonly called?',
      no: 'Hva ble nazipartiets paramilitære organisasjon vanligvis kalt?'
    },
    answers: [
      { en: 'SS', no: 'SS' },
      { en: 'Gestapo', no: 'Gestapo' },
      { en: 'SA', no: 'SA' },
      { en: 'Luftwaffe', no: 'Luftwaffe' }
    ],
    correct: 2,
    explanation: {
      en: 'The SA, also known as the Brownshirts, helped the Nazi Party gain influence.',
      no: 'SA, også kjent som brunskjortene, hjalp nazipartiet med å få innflytelse.'
    },
    tags: ['sa', 'brownshirts']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What was the nickname of the SA members?',
      no: 'Hva var kallenavnet på medlemmene av SA?'
    },
    answers: [
      { en: 'Blackshirts', no: 'Svartskjortene' },
      { en: 'Brownshirts', no: 'Brunskjortene' },
      { en: 'Red Guards', no: 'Røde gardister' },
      { en: 'Storm Eagles', no: 'Stormørner' }
    ],
    correct: 1,
    explanation: {
      en: 'SA members were commonly known as the Brownshirts because of their uniforms.',
      no: 'SA-medlemmer ble ofte kalt brunskjortene på grunn av uniformene sine.'
    },
    tags: ['sa', 'brownshirts']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Which law gave Hitler the power to make laws without parliament?',
      no: 'Hvilken lov ga Hitler makt til å lage lover uten parlamentet?'
    },
    answers: [
      { en: 'Nuremberg Laws', no: 'Nürnberglovene' },
      { en: 'Enabling Act', no: 'Fullmaktsloven' },
      { en: 'Anti-Comintern Pact', no: 'Antikominternpakten' },
      { en: 'Dawes Plan', no: 'Dawes-planen' }
    ],
    correct: 1,
    explanation: {
      en: 'The Enabling Act of 1933 allowed Hitler’s government to pass laws without parliamentary approval.',
      no: 'Fullmaktsloven fra 1933 gjorde det mulig for Hitlers regjering å vedta lover uten parlamentarisk godkjenning.'
    },
    tags: ['enabling-act', 'dictatorship']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What economic crisis helped the Nazi Party gain support?',
      no: 'Hvilken økonomisk krise bidro til å øke støtten til nazipartiet?'
    },
    answers: [
      { en: 'The Great Depression', no: 'Den store depresjonen' },
      { en: 'The Oil Crisis', no: 'Oljekrisen' },
      { en: 'The Dot-com Crash', no: 'Dotcom-krakket' },
      { en: 'The Long Depression', no: 'Den lange depresjonen' }
    ],
    correct: 0,
    explanation: {
      en: 'The Great Depression caused massive unemployment and increased support for extremist parties.',
      no: 'Den store depresjonen førte til massiv arbeidsledighet og økt støtte til ekstreme partier.'
    },
    tags: ['economy', 'depression']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Which city hosted the large Nazi Party rallies?',
      no: 'Hvilken by var vertskap for de store nazistiske partidagene?'
    },
    answers: [
      { en: 'Munich', no: 'München' },
      { en: 'Berlin', no: 'Berlin' },
      { en: 'Hamburg', no: 'Hamburg' },
      { en: 'Nuremberg', no: 'Nürnberg' }
    ],
    correct: 3,
    explanation: {
      en: 'Nuremberg was famous for the massive Nazi Party rallies held there.',
      no: 'Nürnberg var kjent for de store nazistiske partidagene som ble holdt der.'
    },
    tags: ['nuremberg', 'rallies']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Who led the Nazi Party before becoming Chancellor?',
      no: 'Hvem ledet nazipartiet før han ble rikskansler?'
    },
    answers: [
      { en: 'Benito Mussolini', no: 'Benito Mussolini' },
      { en: 'Adolf Hitler', no: 'Adolf Hitler' },
      { en: 'Erwin Rommel', no: 'Erwin Rommel' },
      { en: 'Karl Dönitz', no: 'Karl Dönitz' }
    ],
    correct: 1,
    explanation: {
      en: 'Hitler was leader of the Nazi Party before taking power in Germany.',
      no: 'Hitler var leder for nazipartiet før han tok makten i Tyskland.'
    },
    tags: ['hitler', 'party']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What does NSDAP stand for in English?',
      no: 'Hva står NSDAP for på norsk?'
    },
    answers: [
      { en: 'National Socialist German Workers’ Party', no: 'Det nasjonalsosialistiske tyske arbeiderpartiet' },
      { en: 'New Socialist Democratic Alliance Party', no: 'Det nye sosialistiske demokratiske alliansepartiet' },
      { en: 'National Security Defense Party', no: 'Det nasjonale sikkerhets- og forsvarspartiet' },
      { en: 'Northern States Democratic Party', no: 'Det nordlige staters demokratiske parti' }
    ],
    correct: 0,
    explanation: {
      en: 'NSDAP was the abbreviation for the National Socialist German Workers’ Party.',
      no: 'NSDAP var forkortelsen for Det nasjonalsosialistiske tyske arbeiderpartiet.'
    },
    tags: ['nsdap', 'abbreviation']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Which failed 1923 event involved Hitler attempting to seize power?',
      no: 'Hvilken mislykket hendelse i 1923 innebar at Hitler forsøkte å ta makten?'
    },
    answers: [
      { en: 'Beer Hall Putsch', no: 'Ølkjellerkuppet' },
      { en: 'Night of the Long Knives', no: 'De lange knivers natt' },
      { en: 'Kristallnacht', no: 'Krystallnatten' },
      { en: 'Anschluss', no: 'Anschluss' }
    ],
    correct: 0,
    explanation: {
      en: 'The Beer Hall Putsch was Hitler’s failed attempt to seize power in Munich in 1923.',
      no: 'Ølkjellerkuppet var Hitlers mislykkede forsøk på å ta makten i München i 1923.'
    },
    tags: ['putsch', '1923']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What title did Hitler use as Germany’s leader?',
      no: 'Hvilken tittel brukte Hitler som Tysklands leder?'
    },
    answers: [
      { en: 'Kaiser', no: 'Keiser' },
      { en: 'President', no: 'President' },
      { en: 'Führer', no: 'Fører' },
      { en: 'Chancellor-General', no: 'Rikskansler-general' }
    ],
    correct: 2,
    explanation: {
      en: 'Hitler adopted the title Führer after consolidating power.',
      no: 'Hitler tok tittelen Fører etter å ha konsolidert makten.'
    },
    tags: ['führer', 'leadership']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Which treaty was often criticized by the Nazis after World War I?',
      no: 'Hvilken traktat ble ofte kritisert av nazistene etter første verdenskrig?'
    },
    answers: [
      { en: 'Treaty of Brest-Litovsk', no: 'Brest-Litovsk-traktaten' },
      { en: 'Treaty of Versailles', no: 'Versaillestraktaten' },
      { en: 'Treaty of Utrecht', no: 'Utrecht-traktaten' },
      { en: 'Treaty of Tordesillas', no: 'Tordesillas-traktaten' }
    ],
    correct: 1,
    explanation: {
      en: 'The Nazis frequently attacked the Treaty of Versailles and its terms imposed on Germany.',
      no: 'Nazistene kritiserte ofte Versaillestraktaten og vilkårene som ble pålagt Tyskland.'
    },
    tags: ['versailles', 'treaty']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Why did the Great Depression help the Nazi Party gain support in Germany?',
      no: 'Hvorfor bidro den store depresjonen til økt støtte til nazipartiet i Tyskland?'
    },
    answers: [
      { en: 'It increased unemployment and economic hardship', no: 'Den økte arbeidsledighet og økonomiske problemer' },
      { en: 'It gave Germany control of more territory', no: 'Den ga Tyskland kontroll over mer territorium' },
      { en: 'It ended political disagreements', no: 'Den avsluttet politiske uenigheter' },
      { en: 'It strengthened the Weimar government', no: 'Den styrket Weimar-regjeringen' }
    ],
    correct: 0,
    explanation: {
      en: 'Economic crisis and unemployment made many Germans more willing to support extremist parties.',
      no: 'Økonomisk krise og arbeidsledighet gjorde mange tyskere mer villige til å støtte ekstreme partier.'
    },
    tags: ['great-depression', 'economy', 'causes']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What was one major consequence of the Enabling Act of 1933?',
      no: 'Hva var en viktig konsekvens av fullmaktsloven fra 1933?'
    },
    answers: [
      { en: 'Germany became a monarchy', no: 'Tyskland ble et monarki' },
      { en: 'Parliament gained more power', no: 'Parlamentet fikk mer makt' },
      { en: 'Hitler could govern without parliamentary approval', no: 'Hitler kunne styre uten parlamentarisk godkjenning' },
      { en: 'Political parties were strengthened', no: 'Politiske partier ble styrket' }
    ],
    correct: 2,
    explanation: {
      en: 'The Enabling Act helped Hitler establish a dictatorship by bypassing parliament.',
      no: 'Fullmaktsloven hjalp Hitler med å etablere et diktatur ved å omgå parlamentet.'
    },
    tags: ['enabling-act', 'dictatorship']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did the Reichstag Fire help the Nazis consolidate power?',
      no: 'Hvordan hjalp riksdagsbrannen nazistene med å konsolidere makten?'
    },
    answers: [
      { en: 'It justified restrictions on civil liberties', no: 'Den ga grunnlag for å begrense borgerlige rettigheter' },
      { en: 'It increased foreign trade', no: 'Den økte utenrikshandelen' },
      { en: 'It restored the monarchy', no: 'Den gjeninnførte monarkiet' },
      { en: 'It ended unemployment', no: 'Den avsluttet arbeidsledigheten' }
    ],
    correct: 0,
    explanation: {
      en: 'The Nazis used the fire as a reason to suppress opponents and limit freedoms.',
      no: 'Nazistene brukte brannen som begrunnelse for å undertrykke motstandere og begrense friheter.'
    },
    tags: ['reichstag', 'civil-rights']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Why did many Germans oppose the Treaty of Versailles?',
      no: 'Hvorfor motsatte mange tyskere seg Versaillestraktaten?'
    },
    answers: [
      { en: 'It required Germany to join the Soviet Union', no: 'Den krevde at Tyskland skulle bli del av Sovjetunionen' },
      { en: 'It imposed penalties and territorial losses on Germany', no: 'Den påla Tyskland straffer og territorielle tap' },
      { en: 'It banned elections in Germany', no: 'Den forbød valg i Tyskland' },
      { en: 'It created the Nazi Party', no: 'Den opprettet nazipartiet' }
    ],
    correct: 1,
    explanation: {
      en: 'Many Germans viewed the treaty as unfair because of reparations and territorial losses.',
      no: 'Mange tyskere oppfattet traktaten som urettferdig på grunn av erstatningskrav og territorielle tap.'
    },
    tags: ['versailles', 'context']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What was a key difference between the SA and the SS?',
      no: 'Hva var en viktig forskjell mellom SA og SS?'
    },
    answers: [
      { en: 'The SA was a naval force', no: 'SA var en marinestyrke' },
      { en: 'The SS became a more elite and powerful organization', no: 'SS ble en mer elitær og mektig organisasjon' },
      { en: 'The SS opposed Hitler', no: 'SS motsatte seg Hitler' },
      { en: 'The SA controlled the Luftwaffe', no: 'SA kontrollerte Luftwaffe' }
    ],
    correct: 1,
    explanation: {
      en: 'The SS eventually became more influential and loyal directly to Hitler.',
      no: 'SS ble etter hvert mer innflytelsesrik og direkte lojal mot Hitler.'
    },
    tags: ['sa', 'ss', 'comparison']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Why was the Weimar Republic politically unstable?',
      no: 'Hvorfor var Weimarrepublikken politisk ustabil?'
    },
    answers: [
      { en: 'It faced economic crises and frequent political divisions', no: 'Den møtte økonomiske kriser og hyppige politiske splittelser' },
      { en: 'It had no constitution', no: 'Den hadde ingen grunnlov' },
      { en: 'It was ruled by a king', no: 'Den ble styrt av en konge' },
      { en: 'It controlled all European governments', no: 'Den kontrollerte alle europeiske regjeringer' }
    ],
    correct: 0,
    explanation: {
      en: 'Economic problems and divided politics weakened confidence in the republic.',
      no: 'Økonomiske problemer og splittet politikk svekket tilliten til republikken.'
    },
    tags: ['weimar', 'context']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What happened after President Hindenburg died in 1934?',
      no: 'Hva skjedde etter at president Hindenburg døde i 1934?'
    },
    answers: [
      { en: 'Germany held new presidential elections', no: 'Tyskland holdt nytt presidentvalg' },
      { en: 'The monarchy returned', no: 'Monarkiet kom tilbake' },
      { en: 'Hitler combined the offices of president and chancellor', no: 'Hitler slo sammen embetene som president og rikskansler' },
      { en: 'The Nazi Party was dissolved', no: 'Nazipartiet ble oppløst' }
    ],
    correct: 2,
    explanation: {
      en: 'Hitler merged the two positions and strengthened his control over Germany.',
      no: 'Hitler slo sammen de to embetene og styrket sin kontroll over Tyskland.'
    },
    tags: ['hindenburg', 'führer']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did Nazi propaganda contribute to Hitler’s rise?',
      no: 'Hvordan bidro nazistisk propaganda til Hitlers maktovertakelse?'
    },
    answers: [
      { en: 'It encouraged support for Nazi ideas and leadership', no: 'Den skapte støtte for nazistiske ideer og lederskap' },
      { en: 'It reduced Nazi election campaigns', no: 'Den reduserte nazistenes valgkamp' },
      { en: 'It promoted rival parties', no: 'Den fremmet rivaliserende partier' },
      { en: 'It abolished newspapers', no: 'Den avskaffet aviser' }
    ],
    correct: 0,
    explanation: {
      en: 'Propaganda helped spread Nazi messages and build support among voters.',
      no: 'Propaganda bidro til å spre nazistiske budskap og bygge støtte blant velgere.'
    },
    tags: ['propaganda', 'goebbels']
  },
  {
      difficulty: 'medium',
      question: {
          en: 'Why did Hitler order the Night of the Long Knives in 1934?',
          no: 'Hvorfor beordret Hitler De lange knivers natt i 1934?'
      },
      answers: [
          { en: 'To remove perceived rivals within the Nazi movement', no: 'For å fjerne oppfattede rivaler innen nazibevegelsen' },
          { en: 'To invade France', no: 'For å invadere Frankrike' },
          { en: 'To end World War I', no: 'For å avslutte første verdenskrig' },
          { en: 'To create the Weimar Republic', no: 'For å opprette Weimarrepublikken' }
      ],
      correct: 0,
    explanation: {
      en: 'Hitler used the purge to eliminate rivals and strengthen his position.',
      no: 'Hitler brukte utrenskningen til å fjerne rivaler og styrke sin posisjon.'
    },
    tags: ['night-of-the-long-knives', 'power']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Which event came first?',
      no: 'Hvilken hendelse kom først?'
    },
    answers: [
      { en: 'Germany invaded Poland', no: 'Tyskland invaderte Polen' },
      { en: 'Hitler became Chancellor', no: 'Hitler ble rikskansler' },
      { en: 'World War II ended', no: 'Andre verdenskrig sluttet' },
      { en: 'Germany surrendered', no: 'Tyskland kapitulerte' }
    ],
    correct: 1,
    explanation: {
      en: 'Hitler became Chancellor in 1933, years before the invasion of Poland in 1939.',
      no: 'Hitler ble rikskansler i 1933, flere år før invasjonen av Polen i 1939.'
    },
    tags: ['timeline', 'chronology']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What was one consequence of banning opposition parties in Germany?',
      no: 'Hva var en konsekvens av å forby opposisjonspartier i Tyskland?'
    },
    answers: [
      { en: 'Germany became a multi-party democracy', no: 'Tyskland ble et flerpartidemokrati' },
      { en: 'Political competition largely disappeared', no: 'Politisk konkurranse forsvant i stor grad' },
      { en: 'The monarchy was restored', no: 'Monarkiet ble gjeninnført' },
      { en: 'State power decreased', no: 'Statsmakten ble svekket' }
    ],
    correct: 1,
    explanation: {
      en: 'The Nazi Party became the only legal political party.',
      no: 'Nazipartiet ble det eneste lovlige politiske partiet.'
    },
    tags: ['dictatorship', 'politics']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did Hitler’s rise compare with a military coup?',
      no: 'Hvordan skilte Hitlers maktovertakelse seg fra et militærkupp?'
    },
    answers: [
      { en: 'He gained power largely through legal political processes', no: 'Han fikk makten hovedsakelig gjennom lovlige politiske prosesser' },
      { en: 'He was elected king', no: 'Han ble valgt til konge' },
      { en: 'He was appointed by foreign governments', no: 'Han ble utnevnt av utenlandske regjeringer' },
      { en: 'He never held public office', no: 'Han hadde aldri et offentlig embete' }
    ],
    correct: 0,
    explanation: {
      en: 'Hitler used elections, appointments, and legislation to gain power before establishing a dictatorship.',
      no: 'Hitler brukte valg, utnevnelser og lovgivning for å få makt før han etablerte et diktatur.'
    },
    tags: ['comparison', 'rise-to-power']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Why was anti-communism important to Nazi support?',
      no: 'Hvorfor var antikommunisme viktig for støtten til nazistene?'
    },
    answers: [
      { en: 'Many Germans feared a communist revolution', no: 'Mange tyskere fryktet en kommunistisk revolusjon' },
      { en: 'Communists supported Hitler', no: 'Kommunistene støttet Hitler' },
      { en: 'Germany was a communist state', no: 'Tyskland var en kommunistisk stat' },
      { en: 'The Nazis wanted to join the Soviet Union', no: 'Nazistene ønsket å bli med i Sovjetunionen' }
    ],
    correct: 0,
    explanation: {
      en: 'Fear of communism helped the Nazis attract support from conservative groups.',
      no: 'Frykten for kommunisme hjalp nazistene med å tiltrekke seg støtte fra konservative grupper.'
    },
    tags: ['anti-communism', 'causes']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What connection existed between the Reichstag Fire and the Enabling Act?',
      no: 'Hvilken sammenheng fantes mellom riksdagsbrannen og fullmaktsloven?'
    },
    answers: [
      { en: 'The fire helped create conditions for expanded government powers', no: 'Brannen bidro til å skape grunnlag for utvidede regjeringsfullmakter' },
      { en: 'The Enabling Act caused the fire', no: 'Fullmaktsloven forårsaket brannen' },
      { en: 'Both events happened after World War II', no: 'Begge hendelsene skjedde etter andre verdenskrig' },
      { en: 'Neither event involved the Nazis', no: 'Ingen av hendelsene involverte nazistene' }
    ],
    correct: 0,
    explanation: {
      en: 'The Nazis used the crisis atmosphere after the fire to increase state power.',
      no: 'Nazistene brukte krisestemningen etter brannen til å øke statens makt.'
    },
    tags: ['reichstag', 'enabling-act', 'connections']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What was a long-term consequence of Hitler’s rise to power?',
      no: 'Hva var en langsiktig konsekvens av Hitlers maktovertakelse?'
    },
    answers: [
      { en: 'The beginning of the Renaissance', no: 'Begynnelsen på renessansen' },
      { en: 'The formation of the Roman Empire', no: 'Opprettelsen av Romerriket' },
      { en: 'The outbreak of World War II in Europe', no: 'Utbruddet av andre verdenskrig i Europa' },
      { en: 'The end of industrialization', no: 'Slutten på industrialiseringen' }
    ],
    correct: 2,
    explanation: {
      en: 'Hitler’s expansionist policies eventually led to the outbreak of World War II.',
      no: 'Hitlers ekspansjonistiske politikk førte til slutt til utbruddet av andre verdenskrig.'
    },
    tags: ['world-war-ii', 'consequences']
  },
{
difficulty: 'hard',
question: {
en: 'Which factor is most often cited by historians as helping the Nazi Party broaden its appeal beyond its original base during the Great Depression?',
no: 'Hvilken faktor trekkes oftest frem av historikere som årsak til at NSDAP utvidet sin appell utover sin opprinnelige velgerbase under den store depresjonen?'
},
answers: [
{ en: 'Growing fear of economic collapse and unemployment', no: 'Økende frykt for økonomisk kollaps og arbeidsledighet' },
{ en: 'A sudden increase in German colonial wealth', no: 'En plutselig økning i tysk kolonirikdom' },
{ en: 'Support from the Catholic Church alone', no: 'Støtte fra den katolske kirken alene' },
{ en: 'The abolition of all political parties', no: 'Avskaffelsen av alle politiske partier' }
],
correct: 0,
explanation: {
en: 'Many historians argue that mass unemployment and economic insecurity after 1929 expanded Nazi support among previously hesitant voters.',
no: 'Mange historikere mener at massearbeidsledighet og økonomisk usikkerhet etter 1929 utvidet støtten til NSDAP blant tidligere nølende velgere.'
},
tags: ['depression', 'economy', 'support']
},
{
difficulty: 'hard',
question: {
en: 'Why do some historians consider the appointment of Hitler as chancellor in January 1933 a conservative miscalculation?',
no: 'Hvorfor anser enkelte historikere utnevnelsen av Hitler til rikskansler i januar 1933 som en konservativ feilvurdering?'
},
answers: [
{ en: 'Conservatives believed they could control him within government', no: 'Konservative trodde de kunne kontrollere ham innenfor regjeringen' },
{ en: 'They expected immediate military defeat', no: 'De forventet umiddelbart militært nederlag' },
{ en: 'They wanted to restore the monarchy at once', no: 'De ønsket å gjeninnføre monarkiet umiddelbart' },
{ en: 'They opposed all cooperation with industrial elites', no: 'De motsatte seg alt samarbeid med industrielle eliter' }
],
correct: 0,
explanation: {
en: 'A common interpretation is that conservative elites underestimated Hitler and thought they could use his popularity while limiting his power.',
no: 'En vanlig tolkning er at konservative eliter undervurderte Hitler og trodde de kunne utnytte populariteten hans samtidig som de begrenset makten hans.'
},
tags: ['conservatives', 'hitler', 'politics']
},
{
difficulty: 'hard',
question: {
en: 'What long-term weakness of the Weimar Republic is frequently identified as aiding the Nazi rise to power?',
no: 'Hvilken langsiktig svakhet ved Weimarrepublikken blir ofte identifisert som en faktor bak nazistenes maktovertakelse?'
},
answers: [
{ en: 'Its dependence on colonial administration', no: 'Dens avhengighet av koloniforvaltning' },
{ en: 'The lack of a national currency', no: 'Mangelen på en nasjonal valuta' },
{ en: 'Limited democratic legitimacy among parts of the population', no: 'Begrenset demokratisk legitimitet blant deler av befolkningen' },
{ en: 'A ban on mass political parties', no: 'Et forbud mot massepartier' }
],
correct: 2,
explanation: {
en: 'Many Germans never fully accepted the democratic system, making it more vulnerable during periods of crisis.',
no: 'Mange tyskere aksepterte aldri fullt ut det demokratiske systemet, noe som gjorde det mer sårbart i krisetider.'
},
tags: ['weimar', 'democracy', 'causes']
},
{
difficulty: 'hard',
question: {
en: 'Which interpretation best reflects the debate over Nazi electoral success before 1933?',
no: 'Hvilken tolkning gjenspeiler best debatten om nazistenes valgframgang før 1933?'
},
answers: [
{ en: 'It resulted entirely from propaganda', no: 'Den skyldtes utelukkende propaganda' },
{ en: 'It reflected a combination of economic distress, political instability, and effective campaigning', no: 'Den skyldtes en kombinasjon av økonomisk nød, politisk ustabilitet og effektiv valgkamp' },
{ en: 'It was caused solely by foreign intervention', no: 'Den skyldtes utelukkende utenlandsk innblanding' },
{ en: 'It depended only on military support', no: 'Den var avhengig utelukkende av militær støtte' }
],
correct: 1,
explanation: {
en: 'Most historians emphasize multiple interacting factors rather than a single cause.',
no: 'De fleste historikere vektlegger flere samvirkende faktorer fremfor én enkelt årsak.'
},
tags: ['elections', 'historiography', 'support']
},
{
difficulty: 'hard',
question: {
en: 'How did Article 48 contribute to the weakening of parliamentary democracy in Germany?',
no: 'Hvordan bidro artikkel 48 til svekkelsen av det parlamentariske demokratiet i Tyskland?'
},
answers: [
{ en: 'It allowed emergency rule without normal parliamentary approval', no: 'Den muliggjorde nødforordninger uten vanlig parlamentarisk godkjenning' },
{ en: 'It abolished presidential elections', no: 'Den avskaffet presidentvalg' },
{ en: 'It banned trade unions', no: 'Den forbød fagforeninger' },
{ en: 'It transferred power to regional governments', no: 'Den overførte makt til delstatsregjeringene' }
],
correct: 0,
explanation: {
en: 'Frequent use of emergency powers weakened confidence in parliamentary government before Hitler took power.',
no: 'Hyppig bruk av nødforordninger svekket tilliten til parlamentarisk styre før Hitler kom til makten.'
},
tags: ['weimar', 'article48', 'constitution']
},
{
difficulty: 'hard',
question: {
en: 'Which social group showed particularly strong Nazi electoral support in many regions during the early 1930s?',
no: 'Hvilken samfunnsgruppe viste særlig sterk støtte til NSDAP i mange områder tidlig på 1930-tallet?'
},
answers: [
{ en: 'Urban communist workers', no: 'Kommunistiske industriarbeidere i byene' },
{ en: 'Rural Protestant voters', no: 'Protestantiske velgere på landsbygda' },
{ en: 'Recent immigrants', no: 'Nylige innvandrere' },
{ en: 'Senior military officers only', no: 'Kun høytstående militære offiserer' }
],
correct: 1,
explanation: {
en: 'Electoral studies often show especially strong Nazi support among rural Protestant communities.',
no: 'Valgstudier viser ofte særlig sterk støtte til NSDAP blant protestantiske bygdesamfunn.'
},
tags: ['voters', 'religion', 'society']
},
{
difficulty: 'hard',
question: {
en: 'Why is the Reichstag Fire still debated by historians?',
no: 'Hvorfor er riksdagsbrannen fortsatt omdiskutert blant historikere?'
},
answers: [
{ en: 'There is disagreement about the extent of Nazi involvement', no: 'Det er uenighet om omfanget av nazistenes involvering' },
{ en: 'Its date is uncertain', no: 'Datoen er usikker' },
{ en: 'Its location remains unknown', no: 'Stedet er fortsatt ukjent' },
{ en: 'It never actually occurred', no: 'Den fant aldri sted' }
],
correct: 0,
explanation: {
en: 'Historians continue to debate whether the fire was solely the act of Marinus van der Lubbe or involved broader Nazi planning.',
no: 'Historikere diskuterer fortsatt om brannen utelukkende var Marinus van der Lubbes verk eller om den involverte bredere nazistisk planlegging.'
},
tags: ['reichstag', 'debate', 'historiography']
},
{
difficulty: 'hard',
question: {
en: 'What was one consequence of the fragmentation of political parties in late Weimar Germany?',
no: 'Hva var én konsekvens av fragmenteringen av politiske partier i Weimar-Tysklands siste år?'
},
answers: [
{ en: 'Greater parliamentary stability', no: 'Større parlamentarisk stabilitet' },
{ en: 'Fewer coalition governments', no: 'Færre koalisjonsregjeringer' },
{ en: 'Difficulty forming durable governments', no: 'Vanskeligheter med å danne varige regjeringer' },
{ en: 'The elimination of extremist movements', no: 'Eliminering av ekstreme bevegelser' }
],
correct: 2,
explanation: {
en: 'Political fragmentation made stable coalition building increasingly difficult during periods of crisis.',
no: 'Politisk fragmentering gjorde stabile koalisjoner stadig vanskeligere å etablere i krisetider.'
},
tags: ['weimar', 'parties', 'government']
},
{
difficulty: 'hard',
question: {
en: 'Which argument is commonly used by historians who stress structural causes of Hitler’s rise?',
no: 'Hvilket argument brukes ofte av historikere som vektlegger strukturelle årsaker til Hitlers maktovertakelse?'
},
answers: [
{ en: 'German institutions and crises created opportunities that extended beyond Hitler’s personal abilities', no: 'Tyske institusjoner og kriser skapte muligheter som gikk utover Hitlers personlige evner' },
{ en: 'Hitler had no political influence before 1933', no: 'Hitler hadde ingen politisk innflytelse før 1933' },
{ en: 'The Nazi Party lacked popular support', no: 'NSDAP manglet folkelig støtte' },
{ en: 'Foreign governments selected German leaders directly', no: 'Utenlandske regjeringer valgte tyske ledere direkte' }
],
correct: 0,
explanation: {
en: 'Structural interpretations emphasize institutional weaknesses and social conditions rather than individual leadership alone.',
no: 'Strukturelle tolkninger vektlegger institusjonelle svakheter og samfunnsforhold fremfor kun individuell ledelse.'
},
tags: ['historiography', 'structure', 'causes']
},
{
difficulty: 'hard',
question: {
en: 'How did fear of communism influence support for the Nazi movement among some elites?',
no: 'Hvordan påvirket frykten for kommunisme støtten til den nazistiske bevegelsen blant enkelte eliter?'
},
answers: [
{ en: 'It encouraged some elites to view the Nazis as a barrier against the left', no: 'Den fikk enkelte eliter til å se nazistene som en barriere mot venstresiden' },
{ en: 'It led elites to support communist parties', no: 'Den fikk elitene til å støtte kommunistiske partier' },
{ en: 'It eliminated ideological divisions', no: 'Den fjernet ideologiske motsetninger' },
{ en: 'It strengthened parliamentary consensus', no: 'Den styrket parlamentarisk konsensus' }
],
correct: 0,
explanation: {
en: 'Fear of communist revolution encouraged some conservative groups to cooperate with or tolerate the Nazis.',
no: 'Frykten for kommunistisk revolusjon førte til at enkelte konservative grupper samarbeidet med eller tolererte nazistene.'
},
tags: ['communism', 'elites', 'politics']
},
{
difficulty: 'hard',
question: {
en: 'Which economic issue most damaged confidence in the Weimar Republic during its final years?',
no: 'Hvilket økonomisk problem skadet tilliten til Weimarrepublikken mest i dens siste år?'
},
answers: [
{ en: 'Persistent mass unemployment', no: 'Vedvarende massearbeidsledighet' },
{ en: 'Rapid industrial expansion', no: 'Rask industriell ekspansjon' },
{ en: 'Excessive colonial spending', no: 'Overdrevne koloniale utgifter' },
{ en: 'A shortage of export markets caused by decolonization', no: 'Mangel på eksportmarkeder som følge av avkolonisering' }
],
correct: 0,
explanation: {
en: 'The unemployment crisis after 1929 undermined confidence in democratic institutions and mainstream parties.',
no: 'Arbeidsledighetskrisen etter 1929 undergravde tilliten til demokratiske institusjoner og etablerte partier.'
},
tags: ['economy', 'depression', 'weimar']
},
{
difficulty: 'hard',
question: {
en: 'What is a major criticism of explanations that focus only on Hitler’s charisma?',
no: 'Hva er en viktig kritikk av forklaringer som kun fokuserer på Hitlers karisma?'
},
answers: [
{ en: 'They overlook broader political and economic conditions', no: 'De overser bredere politiske og økonomiske forhold' },
{ en: 'They exaggerate the role of trade unions', no: 'De overdriver fagforeningenes rolle' },
{ en: 'They ignore military technology', no: 'De ignorerer militær teknologi' },
{ en: 'They deny the existence of elections', no: 'De benekter at det fantes valg' }
],
correct: 0,
explanation: {
en: 'Many historians argue that personal leadership alone cannot explain the broader context that enabled Nazi success.',
no: 'Mange historikere mener at personlig lederskap alene ikke kan forklare den bredere konteksten som muliggjorde nazistenes framgang.'
},
tags: ['hitler', 'historiography', 'leadership']
},
{
difficulty: 'hard',
question: {
en: 'Which development helped transform Germany from a democracy into a dictatorship after 1933?',
no: 'Hvilken utvikling bidro til å omdanne Tyskland fra et demokrati til et diktatur etter 1933?'
},
answers: [
{ en: 'The restoration of independent regional governments', no: 'Gjenopprettelsen av uavhengige delstatsregjeringer' },
{ en: 'The strengthening of opposition parties', no: 'Styrkingen av opposisjonspartiene' },
{ en: 'The concentration of power through legal and political measures', no: 'Konsentrasjonen av makt gjennom juridiske og politiske tiltak' },
{ en: 'The expansion of parliamentary oversight', no: 'Utvidelsen av parlamentarisk kontroll' }
],
correct: 2,
explanation: {
en: 'The Nazi regime consolidated authority through a series of legal changes and political repression.',
no: 'Naziregimet konsoliderte makten gjennom en rekke juridiske endringer og politisk undertrykking.'
},
tags: ['dictatorship', 'power', 'nazis']
},
{
difficulty: 'hard',
question: {
en: 'Why do historians often distinguish between Nazi electoral success and Nazi seizure of power?',
no: 'Hvorfor skiller historikere ofte mellom nazistenes valgframgang og deres maktovertakelse?'
},
answers: [
{ en: 'Electoral support alone did not automatically grant full control of the state', no: 'Valgstøtte alene ga ikke automatisk full kontroll over staten' },
{ en: 'The Nazis never participated in elections', no: 'Nazistene deltok aldri i valg' },
{ en: 'The German constitution banned political parties', no: 'Den tyske grunnloven forbød politiske partier' },
{ en: 'Hitler became leader through inheritance', no: 'Hitler ble leder gjennom arv' }
],
correct: 0,
explanation: {
en: 'Winning votes was only one step; political deals and institutional decisions were also crucial.',
no: 'Å vinne stemmer var bare ett steg; politiske avtaler og institusjonelle beslutninger var også avgjørende.'
},
tags: ['elections', 'power', 'politics']
},
{
difficulty: 'hard',
question: {
en: 'Which long-term effect of the Nazi rise influenced postwar West German political design?',
no: 'Hvilken langsiktig effekt av nazistenes maktovertakelse påvirket utformingen av Vest-Tysklands politiske system etter krigen?'
},
answers: [
{ en: 'A stronger emphasis on constitutional safeguards for democracy', no: 'Et sterkere fokus på konstitusjonelle vern for demokratiet' },
{ en: 'The abolition of federalism', no: 'Avskaffelsen av føderalisme' },
{ en: 'The elimination of constitutional courts', no: 'Avskaffelsen av konstitusjonelle domstoler' },
{ en: 'The removal of political parties from elections', no: 'Fjerningen av politiske partier fra valg' }
],
correct: 0,
explanation: {
en: 'Postwar institutions were designed in part to prevent the collapse of democracy that occurred during the Nazi rise.',
no: 'Etterkrigstidens institusjoner ble delvis utformet for å forhindre et nytt sammenbrudd av demokratiet slik som under nazistenes maktovertakelse.'
},
tags: ['legacy', 'postwar', 'democracy']
}
]
    },
    {
      slug: 'the-holocaust',
      name: { en: 'The Holocaust', no: 'The Holocaust' },
      questions: []
    },
    {
      slug: 'global-conflict',
      name: { en: 'Global conflict', no: 'Global conflict' },
      questions: []
    },
    {
      slug: 'post-war-world-order',
      name: { en: 'Post-war world order', no: 'Post-war world order' },
      questions: []
    },
    
    
  ]
};