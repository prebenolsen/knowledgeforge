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
      questions: [
  {
    difficulty: 'easy',
    question: {
      en: 'What term describes the Nazi regime\'s systematic murder of six million Jewish people?',
      no: 'Hva kalles naziregimets systematiske mord på seks millioner jødiske mennesker?'
    },
    answers: [
      { en: 'The Holocaust', no: 'Holokaust' },
      { en: 'The Diaspora', no: 'Diasporaen' },
      { en: 'The Inquisition', no: 'Inkvisjonen' },
      { en: 'The Crusades', no: 'Korstogene' }
    ],
    correct: 0,
    explanation: {
      en: 'The Holocaust refers to the systematic, state-sponsored persecution and murder of six million Jews by the Nazi regime.',
      no: 'Holokaust refererer til naziregimets systematiske, statsstyrte forfølgelse og mord på seks millioner jøder.'
    },
    tags: ['holocaust', 'definition']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Which group was the primary target of the Holocaust?',
      no: 'Hvilken gruppe var det primære målet for Holokaust?'
    },
    answers: [
      { en: 'Polish civilians', no: 'Polske sivile' },
      { en: 'Soviet soldiers', no: 'Sovjetiske soldater' },
      { en: 'Jewish people', no: 'Jødiske mennesker' },
      { en: 'German communists', no: 'Tyske kommunister' }
    ],
    correct: 2,
    explanation: {
      en: 'Jewish people were the primary target of the Holocaust, with approximately six million murdered.',
      no: 'Jødiske mennesker var det primære målet for Holokaust, med omtrent seks millioner drepte.'
    },
    tags: ['victims', 'jews']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What were the Nuremberg Laws of 1935?',
      no: 'Hva var Nürnberglovene fra 1935?'
    },
    answers: [
      { en: 'Postwar trials of Nazi criminals', no: 'Etterkrigsoppgjør for nazistiske kriminelle' },
      { en: 'War declarations against France', no: 'Krigserklæringer mot Frankrike' },
      { en: 'Racial laws stripping Jews of German citizenship', no: 'Raselovene som fratok jøder tysk statsborgerskap' },
      { en: 'Military regulations for the SS', no: 'Militære reguleringer for SS' }
    ],
    correct: 2,
    explanation: {
      en: 'The Nuremberg Laws were antisemitic laws that stripped Jewish people of German citizenship and rights.',
      no: 'Nürnberglovene var antisemittiske lover som fratok jødiske mennesker tysk statsborgerskap og rettigheter.'
    },
    tags: ['nuremberg-laws', '1935']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What was Kristallnacht?',
      no: 'Hva var Krystallnatten?'
    },
    answers: [
      { en: 'A coordinated night of violence against Jews across Germany in 1938', no: 'En koordinert natt med vold mot jøder over hele Tyskland i 1938' },
      { en: 'The signing of the Nazi-Soviet Pact', no: 'Signeringen av den nazistisk-sovjetiske pakten' },
      { en: 'The Allied bombing of Nuremberg', no: 'De alliertes bombing av Nürnberg' },
      { en: 'The liberation of Berlin', no: 'Frigjøringen av Berlin' }
    ],
    correct: 0,
    explanation: {
      en: 'Kristallnacht, the Night of Broken Glass, was a pogrom in November 1938 when Nazi forces attacked Jewish homes, businesses, and synagogues.',
      no: 'Krystallnatten var et pogrom i november 1938 der nazistyrker angrep jødiske hjem, forretninger og synagoger.'
    },
    tags: ['kristallnacht', '1938']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Which Nazi extermination camp killed the largest number of people?',
      no: 'Hvilken nazistisk utryddelsesleir drepte flest mennesker?'
    },
    answers: [
      { en: 'Dachau', no: 'Dachau' },
      { en: 'Treblinka', no: 'Treblinka' },
      { en: 'Buchenwald', no: 'Buchenwald' },
      { en: 'Auschwitz-Birkenau', no: 'Auschwitz-Birkenau' }
    ],
    correct: 3,
    explanation: {
      en: 'Auschwitz-Birkenau was the largest Nazi extermination camp, where over one million people, mostly Jews, were murdered.',
      no: 'Auschwitz-Birkenau var den største nazistiske utryddelsesleiren, der over én million mennesker, de fleste jøder, ble drept.'
    },
    tags: ['auschwitz', 'extermination-camps']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Who led the SS and oversaw the implementation of the Holocaust?',
      no: 'Hvem ledet SS og hadde tilsyn med gjennomføringen av Holokaust?'
    },
    answers: [
      { en: 'Heinrich Himmler', no: 'Heinrich Himmler' },
      { en: 'Joseph Goebbels', no: 'Joseph Goebbels' },
      { en: 'Albert Speer', no: 'Albert Speer' },
      { en: 'Erwin Rommel', no: 'Erwin Rommel' }
    ],
    correct: 0,
    explanation: {
      en: 'Heinrich Himmler was the head of the SS and had primary responsibility for carrying out the Holocaust.',
      no: 'Heinrich Himmler var leder for SS og hadde hovedansvar for gjennomføringen av Holokaust.'
    },
    tags: ['himmler', 'ss']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What did the Nazi term "Final Solution" refer to?',
      no: 'Hva refererte det nazistiske begrepet "Endløsningen" til?'
    },
    answers: [
      { en: 'A peace plan for Europe', no: 'En fredsplan for Europa' },
      { en: 'The Nazi plan to exterminate all Jewish people', no: 'Den nazistiske planen om å utrydde alle jødiske mennesker' },
      { en: 'A military strategy against the Soviet Union', no: 'En militær strategi mot Sovjetunionen' },
      { en: 'An economic recovery program', no: 'Et økonomisk gjenoppbyggingsprogram' }
    ],
    correct: 1,
    explanation: {
      en: 'The Final Solution was the Nazi plan for the genocide of the Jewish people across Europe.',
      no: 'Endløsningen var den nazistiske planen om folkemord på det jødiske folk i Europa.'
    },
    tags: ['final-solution', 'genocide']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'In which period did the Holocaust primarily take place?',
      no: 'I hvilken periode fant Holokaust hovedsakelig sted?'
    },
    answers: [
      { en: '1933–1936', no: '1933–1936' },
      { en: '1938–1940', no: '1938–1940' },
      { en: '1941–1945', no: '1941–1945' },
      { en: '1945–1948', no: '1945–1948' }
    ],
    correct: 2,
    explanation: {
      en: 'Systematic mass murder of Jews escalated dramatically from 1941 onwards until the end of the war in 1945.',
      no: 'Systematisk massedrep av jøder eskalerte dramatisk fra 1941 og frem til krigens slutt i 1945.'
    },
    tags: ['dates', 'timeline']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Approximately how many Jewish people were murdered during the Holocaust?',
      no: 'Omtrent hvor mange jødiske mennesker ble drept under Holokaust?'
    },
    answers: [
      { en: '600,000', no: '600 000' },
      { en: '1 million', no: '1 million' },
      { en: '6 million', no: '6 millioner' },
      { en: '60 million', no: '60 millioner' }
    ],
    correct: 2,
    explanation: {
      en: 'Approximately six million Jewish people were murdered during the Holocaust, representing about two-thirds of European Jews.',
      no: 'Omtrent seks millioner jødiske mennesker ble drept under Holokaust, noe som utgjorde omtrent to tredjedeler av Europas jøder.'
    },
    tags: ['victims', 'numbers']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What were Nazi concentration camps?',
      no: 'Hva var nazistiske konsentrasjonsleirer?'
    },
    answers: [
      { en: 'Military training facilities', no: 'Militære treningsanlegg' },
      { en: 'Refugee centers', no: 'Flyktningsentre' },
      { en: 'Facilities for detaining and persecuting political and racial enemies of the regime', no: 'Anlegg for å internere og forfølge politiske og rasemessige fiender av regimet' },
      { en: 'Prisoner-of-war camps for Allied soldiers', no: 'Krigsfangeleirer for allierte soldater' }
    ],
    correct: 2,
    explanation: {
      en: 'Concentration camps were used to imprison, exploit, and kill political opponents, Jews, and other groups deemed enemies of the Nazi state.',
      no: 'Konsentrasjonsleirer ble brukt til å fengsle, utnytte og drepe politiske motstandere, jøder og andre grupper som ble ansett som fiender av den nazistiske staten.'
    },
    tags: ['concentration-camps', 'definition']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What were ghettos in the context of the Holocaust?',
      no: 'Hva var gettoer i Holokausts kontekst?'
    },
    answers: [
      { en: 'Underground resistance hideouts', no: 'Underjordiske gjemmesteder for motstandsbevegelsen' },
      { en: 'Military occupation zones', no: 'Militære okkupasjonssoner' },
      { en: 'Luxury areas reserved for Nazi officials', no: 'Luksuriøse områder reservert for nazistiske tjenestemenn' },
      { en: 'Isolated, overcrowded areas where Jews were forced to live', no: 'Isolerte, overfylte områder der jøder ble tvunget til å bo' }
    ],
    correct: 3,
    explanation: {
      en: 'Ghettos were sealed-off areas in cities where Jews were forced to live in terrible conditions before deportation.',
      no: 'Gettoer var inngjerdede områder i byer der jøder ble tvunget til å bo under forferdelige forhold før deportasjon.'
    },
    tags: ['ghettos', 'definition']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'At which conference in 1942 did Nazi officials coordinate the details of the Final Solution?',
      no: 'På hvilken konferanse i 1942 koordinerte nazistiske tjenestemenn detaljene rundt Endløsningen?'
    },
    answers: [
      { en: 'Wannsee Conference', no: 'Wannsee-konferansen' },
      { en: 'Yalta Conference', no: 'Jaltakonferansen' },
      { en: 'Potsdam Conference', no: 'Potsdamkonferansen' },
      { en: 'Munich Conference', no: 'Münchenkonferansen' }
    ],
    correct: 0,
    explanation: {
      en: 'The Wannsee Conference in January 1942 was where senior Nazi officials coordinated the implementation of the Final Solution.',
      no: 'Wannsee-konferansen i januar 1942 var der høytstående nazistiske tjenestemenn koordinerte gjennomføringen av Endløsningen.'
    },
    tags: ['wannsee', 'final-solution']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Who was Adolf Eichmann?',
      no: 'Hvem var Adolf Eichmann?'
    },
    answers: [
      { en: 'Commander of the German air force', no: 'Sjef for den tyske luftvåpenet' },
      { en: 'The Nazi official who organized the deportation of Jews to death camps', no: 'Den nazistiske tjenestemannen som organiserte deportasjonen av jøder til dødsleirene' },
      { en: 'Head of the Gestapo', no: 'Leder for Gestapo' },
      { en: 'Chief of Nazi propaganda', no: 'Sjef for nazistisk propaganda' }
    ],
    correct: 1,
    explanation: {
      en: 'Adolf Eichmann was the SS officer responsible for organizing the logistics of the deportation of Jews to extermination camps.',
      no: 'Adolf Eichmann var SS-offiseren som hadde ansvar for å organisere logistikken rundt deportasjonen av jøder til utryddelsesleirene.'
    },
    tags: ['eichmann', 'deportation']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Which country\'s forces liberated Auschwitz in January 1945?',
      no: 'Hvilket lands styrker frigjorde Auschwitz i januar 1945?'
    },
    answers: [
      { en: 'The United States', no: 'USA' },
      { en: 'The United Kingdom', no: 'Storbritannia' },
      { en: 'France', no: 'Frankrike' },
      { en: 'The Soviet Union', no: 'Sovjetunionen' }
    ],
    correct: 3,
    explanation: {
      en: 'Soviet forces liberated Auschwitz-Birkenau on 27 January 1945, revealing the full horror of the death camp to the world.',
      no: 'Sovjetiske styrker frigjorde Auschwitz-Birkenau 27. januar 1945 og avslørte for verden den fulle redselen ved dødsleiren.'
    },
    tags: ['liberation', 'auschwitz', '1945']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What were the Nuremberg Trials?',
      no: 'Hva var Nürnbergprosessene?'
    },
    answers: [
      { en: 'Large Nazi Party rallies held in Nuremberg', no: 'Store nazistiske partidager holdt i Nürnberg' },
      { en: 'Postwar international trials of Nazi war criminals', no: 'Internasjonale etterkrigsrettsaker mot nazistiske krigsforbrytere' },
      { en: 'Military battles fought near Nuremberg', no: 'Militære slag utkjempet nær Nürnberg' },
      { en: 'Peace negotiations after World War I', no: 'Fredsforhandlinger etter første verdenskrig' }
    ],
    correct: 1,
    explanation: {
      en: 'The Nuremberg Trials (1945–1946) were international military tribunals that prosecuted leading Nazis for war crimes and crimes against humanity.',
      no: 'Nürnbergprosessene (1945–1946) var internasjonale militærdomstoler som stilte ledende nazister for retten for krigsforbrytelser og forbrytelser mot menneskeheten.'
    },
    tags: ['nuremberg-trials', 'postwar']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Why did antisemitism intensify in Germany after World War I?',
      no: 'Hvorfor ble antisemittismen sterkere i Tyskland etter første verdenskrig?'
    },
    answers: [
      { en: 'Jews were scapegoated for Germany\'s defeat and economic hardship', no: 'Jøder ble gjort til syndebukker for Tysklands nederlag og økonomiske vanskeligheter' },
      { en: 'A Jewish uprising in 1919 angered the German public', no: 'Et jødisk opprør i 1919 provoserte den tyske befolkningen' },
      { en: 'Jews controlled the German military', no: 'Jøder kontrollerte det tyske militæret' },
      { en: 'Jews refused to pay war reparations', no: 'Jøder nektet å betale krigserstatninger' }
    ],
    correct: 0,
    explanation: {
      en: 'Following defeat in WWI, economic collapse, and humiliation from the Treaty of Versailles, Jews were falsely blamed for Germany\'s problems.',
      no: 'Etter nederlaget i første verdenskrig, det økonomiske sammenbruddet og ydmykelsen fra Versaillestraktaten ble jøder urettmessig beskyldt for Tysklands problemer.'
    },
    tags: ['antisemitism', 'causes', 'wwi']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did the Nazi system of ghettos contribute to the later genocide?',
      no: 'Hvordan bidro det nazistiske gettosystemet til det senere folkemordet?'
    },
    answers: [
      { en: 'They provided Jewish people with opportunities to escape', no: 'De ga jødiske mennesker muligheter til å flykte' },
      { en: 'They concentrated and isolated Jews, making mass deportation easier to organize', no: 'De konsentrerte og isolerte jøder, noe som gjorde massedeportasjon lettere å organisere' },
      { en: 'They strengthened Jewish political resistance movements', no: 'De styrket jødiske politiske motstandsbevegelser' },
      { en: 'They reduced the Nazi administrative burden', no: 'De reduserte den nazistiske administrative byrden' }
    ],
    correct: 1,
    explanation: {
      en: 'Ghettos concentrated Jews in sealed areas, weakening them through starvation and disease before deportation to extermination camps.',
      no: 'Gettoene samlet jøder i inngjerdede områder, der de ble svekket av sult og sykdom før deportasjon til utryddelsesleirene.'
    },
    tags: ['ghettos', 'genocide', 'causes']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What was the primary purpose of the Wannsee Conference?',
      no: 'Hva var det primære formålet med Wannsee-konferansen?'
    },
    answers: [
      { en: 'To negotiate a ceasefire with the Soviet Union', no: 'Å forhandle frem en våpenhvile med Sovjetunionen' },
      { en: 'To plan the Allied invasion of Europe', no: 'Å planlegge de alliertes invasjon av Europa' },
      { en: 'To coordinate the systematic murder of Jews across occupied Europe', no: 'Å koordinere det systematiske drapet på jøder i okkupert Europa' },
      { en: 'To discuss German industrial production targets', no: 'Å diskutere mål for tysk industriell produksjon' }
    ],
    correct: 2,
    explanation: {
      en: 'At Wannsee in January 1942, senior Nazi officials coordinated how the Final Solution would be implemented across all occupied territories.',
      no: 'På Wannsee i januar 1942 koordinerte høytstående nazistiske tjenestemenn hvordan Endløsningen skulle gjennomføres i alle okkuperte territorier.'
    },
    tags: ['wannsee', 'final-solution']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did Nazi propaganda contribute to the Holocaust?',
      no: 'Hvordan bidro nazistisk propaganda til Holokaust?'
    },
    answers: [
      { en: 'It discouraged violence against minority groups', no: 'Den frarådet vold mot minoritetsgrupper' },
      { en: 'It promoted peaceful emigration of Jews from Germany', no: 'Den fremmet fredelig emigrasjon av jøder fra Tyskland' },
      { en: 'It united German Jews and non-Jews against the government', no: 'Den samlet tyske jøder og ikke-jøder mot regjeringen' },
      { en: 'It spread antisemitic hatred and dehumanized Jewish people', no: 'Den spredte antisemittisk hat og avhumaniserte jødiske mennesker' }
    ],
    correct: 3,
    explanation: {
      en: 'Nazi propaganda portrayed Jews as a racial threat, making persecution seem justified and enabling the broader population to accept or participate in genocide.',
      no: 'Nazistisk propaganda fremstilte jøder som en rasemessig trussel, noe som fikk forfølgelse til å virke berettiget og gjorde det mulig for befolkningen å akseptere eller delta i folkemordet.'
    },
    tags: ['propaganda', 'antisemitism']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What connection does the Holocaust have to modern international law?',
      no: 'Hvilken sammenheng har Holokaust med moderne internasjonal rett?'
    },
    answers: [
      { en: 'It led to the United Nations Genocide Convention in 1948', no: 'Det førte til FNs folkemordkonvensjon i 1948' },
      { en: 'It ended the use of international military tribunals', no: 'Det avsluttet bruken av internasjonale militærdomstoler' },
      { en: 'It established the League of Nations', no: 'Det opprettet Folkeforbundet' },
      { en: 'It created the International Criminal Court in 1945', no: 'Det opprettet Den internasjonale straffedomstolen i 1945' }
    ],
    correct: 0,
    explanation: {
      en: 'The Holocaust directly influenced the 1948 UN Genocide Convention and the Universal Declaration of Human Rights.',
      no: 'Holokaust påvirket direkte FNs folkemordkonvensjon fra 1948 og verdenserklæringen om menneskerettigheter.'
    },
    tags: ['international-law', 'genocide-convention']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What role did collaborators in occupied countries play in the Holocaust?',
      no: 'Hvilken rolle spilte kollaboratører i okkuperte land under Holokaust?'
    },
    answers: [
      { en: 'All occupied populations resisted Nazi orders entirely', no: 'Alle okkuperte befolkninger motsatte seg nazistiske ordrer fullstendig' },
      { en: 'Some local governments and police aided in the deportation of Jews', no: 'Noen lokale myndigheter og politi hjalp til med deportasjonen av jøder' },
      { en: 'Collaboration only occurred in Eastern Europe', no: 'Kollaborasjon fant bare sted i Øst-Europa' },
      { en: 'Collaborators were always punished during the war', no: 'Kollaboratører ble alltid straffet under krigen' }
    ],
    correct: 1,
    explanation: {
      en: 'In many occupied countries, local police and authorities actively assisted the Nazis in identifying and deporting Jews.',
      no: 'I mange okkuperte land hjalp lokalt politi og myndigheter aktivt nazistene med å identifisere og deportere jøder.'
    },
    tags: ['collaboration', 'occupied-europe']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Why is Kristallnacht considered a turning point in Nazi persecution of Jews?',
      no: 'Hvorfor regnes Krystallnatten som et vendepunkt i nazistenes forfølgelse av jøder?'
    },
    answers: [
      { en: 'It marked the start of World War II', no: 'Den markerte starten på andre verdenskrig' },
      { en: 'It escalated Nazi violence from legal discrimination to open, organized brutality', no: 'Den eskalerte nazistisk vold fra juridisk diskriminering til åpen, organisert brutalitet' },
      { en: 'It was the first time any Jews were arrested in Germany', no: 'Det var første gang noen jøder ble arrestert i Tyskland' },
      { en: 'It was when the Final Solution was officially approved', no: 'Det var da Endløsningen ble offisielt godkjent' }
    ],
    correct: 1,
    explanation: {
      en: 'Kristallnacht in 1938 showed the regime\'s willingness to use open mass violence, marking a dramatic escalation beyond legal discrimination.',
      no: 'Krystallnatten i 1938 viste regimets vilje til å bruke åpen massevold og markerte en dramatisk eskalering utover juridisk diskriminering.'
    },
    tags: ['kristallnacht', 'turning-point']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What distinguished extermination camps from ordinary concentration camps?',
      no: 'Hva skilte utryddelsesleirer fra vanlige konsentrasjonsleirer?'
    },
    answers: [
      { en: 'Extermination camps were specifically designed for immediate industrial-scale killing', no: 'Utryddelsesleirer var spesielt utformet for umiddelbart industrimessig drap' },
      { en: 'Concentration camps used gas chambers while extermination camps did not', no: 'Konsentrasjonsleirer brukte gasskamre, mens utryddelsesleirer ikke gjorde det' },
      { en: 'Extermination camps held military prisoners of war', no: 'Utryddelsesleirer holdt militære krigsfanger' },
      { en: 'There was no meaningful difference between them', no: 'Det var ingen meningsfull forskjell mellom dem' }
    ],
    correct: 0,
    explanation: {
      en: 'Extermination camps such as Treblinka and Sobibor were built solely to kill people as efficiently as possible, unlike concentration camps which also held prisoners for labor.',
      no: 'Utryddelsesleirer som Treblinka og Sobibor ble bygget utelukkende for å drepe mennesker så effektivt som mulig, i motsetning til konsentrasjonsleirer som også holdt fanger til tvangsarbeid.'
    },
    tags: ['extermination-camps', 'comparison']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What was the role of the Einsatzgruppen in the Holocaust?',
      no: 'Hvilken rolle spilte Einsatzgruppen i Holokaust?'
    },
    answers: [
      { en: 'They guarded concentration camps inside Germany', no: 'De voktet konsentrasjonsleirer inne i Tyskland' },
      { en: 'They ran the Nazi propaganda ministry', no: 'De drev det nazistiske propagandaministeriet' },
      { en: 'Mobile SS units that conducted mass shootings of Jews in Eastern Europe', no: 'Mobile SS-enheter som gjennomførte massehenrettelser av jøder i Øst-Europa' },
      { en: 'They led the German invasion of France', no: 'De ledet den tyske invasjonen av Frankrike' }
    ],
    correct: 2,
    explanation: {
      en: 'The Einsatzgruppen were mobile killing squads that followed German forces into the Soviet Union and murdered over one million Jews through mass shootings.',
      no: 'Einsatzgruppen var mobile drapsenheter som fulgte tyske styrker inn i Sovjetunionen og drepte over én million jøder gjennom masseskytinger.'
    },
    tags: ['einsatzgruppen', 'mass-shootings']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did Jewish people and others resist Nazi persecution?',
      no: 'Hvordan motsto jødiske mennesker og andre nazistisk forfølgelse?'
    },
    answers: [
      { en: 'There was no significant resistance to the Nazis', no: 'Det var ingen betydelig motstand mot nazistene' },
      { en: 'Through armed uprisings, underground networks, and acts of cultural preservation', no: 'Gjennom væpnede opprør, underjordiske nettverk og handlinger for kulturell bevaring' },
      { en: 'Only through legal petitions to the German government', no: 'Kun gjennom juridiske begjæringer til den tyske regjeringen' },
      { en: 'By collaborating with the Nazis to gain more protection', no: 'Ved å samarbeide med nazistene for å oppnå mer beskyttelse' }
    ],
    correct: 1,
    explanation: {
      en: 'Despite enormous odds, Jewish people resisted through uprisings like Warsaw, smuggling, rescue networks, and maintaining cultural and religious life.',
      no: 'Til tross for enorme odds motsto jødiske mennesker gjennom opprør som Warszawa, smugling, redningsnettverk og ved å opprettholde kulturelt og religiøst liv.'
    },
    tags: ['resistance', 'uprising']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What was the significance of the Warsaw Ghetto Uprising of 1943?',
      no: 'Hva var betydningen av opprøret i Warszawaghettoen i 1943?'
    },
    answers: [
      { en: 'It successfully liberated the ghetto from Nazi control', no: 'Det frigjorde ghettoen fra nazistisk kontroll' },
      { en: 'Jewish fighters held out against German forces in the largest armed Jewish resistance of the Holocaust', no: 'Jødiske krigere holdt stand mot tyske styrker i den største væpnede jødiske motstanden under Holokaust' },
      { en: 'It was organized by German military deserters', no: 'Det ble organisert av tyske militærdesertører' },
      { en: 'It directly triggered Germany\'s eventual surrender', no: 'Det utløste direkte Tysklands endelige kapitulasjon' }
    ],
    correct: 1,
    explanation: {
      en: 'The Warsaw Ghetto Uprising was the largest single Jewish revolt during the Holocaust, lasting weeks against overwhelming German force.',
      no: 'Opprøret i Warszawaghettoen var den største enkeltjødiske oppstanden under Holokaust og varte i uker mot overveldende tyske styrker.'
    },
    tags: ['warsaw', 'uprising', 'resistance']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Why did some countries protect more Jewish people from the Nazis than others?',
      no: 'Hvorfor beskyttet noen land flere jødiske mennesker mot nazistene enn andre?'
    },
    answers: [
      { en: 'Countries that protected Jews received financial rewards from the Allies', no: 'Land som beskyttet jøder mottok økonomiske belønninger fra de allierte' },
      { en: 'Only neutral countries offered any protection', no: 'Bare nøytrale land tilbød noen form for beskyttelse' },
      { en: 'All countries were equally resistant to Nazi pressure', no: 'Alle land var like motstandsdyktige mot nazistisk press' },
      { en: 'Attitudes toward Jews, government policies, and geography all played a role', no: 'Holdninger til jøder, myndighetspolitikk og geografi spilte alle en rolle' }
    ],
    correct: 3,
    explanation: {
      en: 'Countries like Denmark saved most of their Jews, while others collaborated. Multiple factors — geography, ideology, resistance culture — determined outcomes.',
      no: 'Land som Danmark reddet de fleste av sine jøder, mens andre samarbeidet. Flere faktorer — geografi, ideologi, motstandskultur — avgjorde utfallet.'
    },
    tags: ['rescue', 'comparison', 'countries']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did the Holocaust connect to broader developments during World War II?',
      no: 'Hvordan var Holokaust knyttet til bredere utviklingstrekk under andre verdenskrig?'
    },
    answers: [
      { en: 'It was entirely separate from military events', no: 'Det var fullstendig atskilt fra militære hendelser' },
      { en: 'Genocide intensified as Germany expanded eastward and as the regime became more radical', no: 'Folkemordet intensiverte seg ettersom Tyskland ekspanderte østover og regimet ble mer radikalt' },
      { en: 'Allied victories immediately slowed the pace of killing', no: 'Allierte seire bremset umiddelbart drapstempoet' },
      { en: 'The Holocaust began only after Germany started losing the war', no: 'Holokaust begynte først etter at Tyskland begynte å tape krigen' }
    ],
    correct: 1,
    explanation: {
      en: 'The Holocaust escalated in parallel with German military expansion, especially after the invasion of the Soviet Union in 1941.',
      no: 'Holokaust eskalerte parallelt med tysk militær ekspansjon, særlig etter invasjonen av Sovjetunionen i 1941.'
    },
    tags: ['wwii', 'connections']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What long-term demographic effect did the Holocaust have on Jewish communities in Europe?',
      no: 'Hvilken langsiktig demografisk effekt hadde Holokaust på jødiske samfunn i Europa?'
    },
    answers: [
      { en: 'European Jewish populations recovered quickly after 1945', no: 'Europeiske jødiske befolkninger kom seg raskt etter 1945' },
      { en: 'Jewish populations grew due to Allied emigration programs', no: 'Jødiske befolkninger vokste på grunn av allierte emigrasjonsprogrammer' },
      { en: 'Effects were limited to Eastern European communities', no: 'Effektene var begrenset til østeuropeiske samfunn' },
      { en: 'The Holocaust devastated European Jewish communities, wiping out approximately two-thirds of European Jews', no: 'Holokaust ødela europeiske jødiske samfunn og utryddet omtrent to tredjedeler av Europas jøder' }
    ],
    correct: 3,
    explanation: {
      en: 'Before the Holocaust, Europe had about nine million Jews. Approximately six million were murdered, permanently transforming Jewish demography worldwide.',
      no: 'Før Holokaust hadde Europa omtrent ni millioner jøder. Omtrent seks millioner ble drept, noe som permanent forandret jødisk demografi over hele verden.'
    },
    tags: ['demographics', 'consequences']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did the Holocaust change the definition and prosecution of war crimes?',
      no: 'Hvordan endret Holokaust definisjonen og straffeforfølgelsen av krigsforbrytelser?'
    },
    answers: [
      { en: 'It introduced the legal concepts of crimes against humanity and genocide to international law', no: 'Det introduserte de juridiske begrepene forbrytelser mot menneskeheten og folkemord i internasjonal rett' },
      { en: 'It had no lasting impact on international legal definitions', no: 'Det hadde ingen varig innvirkning på internasjonale juridiske definisjoner' },
      { en: 'It ended the use of international criminal tribunals', no: 'Det avsluttet bruken av internasjonale straffedomstoler' },
      { en: 'It only led to national-level legal reforms inside Germany', no: 'Det førte bare til nasjonale juridiske reformer i Tyskland' }
    ],
    correct: 0,
    explanation: {
      en: 'The Nuremberg Trials established the precedent for prosecuting crimes against humanity and genocide, reshaping international law.',
      no: 'Nürnbergprosessene la grunnlaget for å straffeforfølge forbrytelser mot menneskeheten og folkemord og omformet internasjonal rett.'
    },
    tags: ['international-law', 'war-crimes', 'legacy']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What is the central debate between intentionalists and functionalists in Holocaust historiography?',
      no: 'Hva er den sentrale debatten mellom intensjonalister og funksjonalister i Holokaust-historiografien?'
    },
    answers: [
      { en: 'Whether genocide was planned from the start or evolved through bureaucratic processes', no: 'Om folkemordet var planlagt fra begynnelsen eller utviklet seg gjennom byråkratiske prosesser' },
      { en: 'Whether Hitler personally knew about the killings', no: 'Om Hitler personlig kjente til drapene' },
      { en: 'Whether Germany or the Soviet Union bears greater responsibility', no: 'Om Tyskland eller Sovjetunionen har større ansvar' },
      { en: 'Whether the Holocaust began before or after World War II', no: 'Om Holokaust begynte før eller etter andre verdenskrig' }
    ],
    correct: 0,
    explanation: {
      en: 'Intentionalists argue Hitler planned genocide from the beginning; functionalists see it as evolving from bureaucratic radicalization and improvisation.',
      no: 'Intensjonalister hevder at Hitler planla folkemordet fra begynnelsen; funksjonalister ser det som noe som utviklet seg gjennom byråkratisk radikalisering og improvisasjon.'
    },
    tags: ['historiography', 'intentionalism', 'functionalism']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What is the core argument of Daniel Goldhagen\'s book "Hitler\'s Willing Executioners"?',
      no: 'Hva er kjerneargumentet i Daniel Goldhagens bok "Hitlers villige bødler"?'
    },
    answers: [
      { en: 'Only SS officers participated in the mass killings', no: 'Bare SS-offiserer deltok i massehenrettelsene' },
      { en: 'Ordinary Germans were driven by deep eliminationist antisemitism to participate willingly', no: 'Vanlige tyskere ble drevet av dyp, eliminatorisk antisemittisme til å delta villig' },
      { en: 'The Holocaust was primarily an economic rather than ideological policy', no: 'Holokaust var primært en økonomisk snarere enn ideologisk politikk' },
      { en: 'German soldiers were coerced under immediate threat of death', no: 'Tyske soldater ble tvunget under umiddelbar drapstrussel' }
    ],
    correct: 1,
    explanation: {
      en: 'Goldhagen controversially argued that ordinary German men participated willingly because of a long-standing eliminationist antisemitism unique to German culture.',
      no: 'Goldhagen hevdet kontroversielt at vanlige tyske menn deltok frivillig på grunn av en langvarig eliminatorisk antisemittisme som var unik for tysk kultur.'
    },
    tags: ['goldhagen', 'perpetrators', 'historiography']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'How did Zygmunt Bauman interpret the Holocaust in relation to modernity?',
      no: 'Hvordan tolket Zygmunt Bauman Holokaust i relasjon til modernitet?'
    },
    answers: [
      { en: 'As a unique medieval-style breakdown of civilization', no: 'Som et unikt middelalderliknende sammenbrudd av sivilisasjonen' },
      { en: 'As caused primarily by ancient religious hatreds', no: 'Som primært forårsaket av eldgamle religiøse hatfølelser' },
      { en: 'As a product of modern bureaucracy, rationality, and industrialization', no: 'Som et produkt av moderne byråkrati, rasjonalitet og industrialisering' },
      { en: 'As resulting from Germany\'s specific geographic isolation', no: 'Som et resultat av Tysklands spesifikke geografiske isolasjon' }
    ],
    correct: 2,
    explanation: {
      en: 'Bauman argued the Holocaust was not a breakdown of civilization but a product of modern rationality, bureaucracy, and technology.',
      no: 'Bauman hevdet at Holokaust ikke var et sammenbrudd av sivilisasjonen, men et produkt av moderne rasjonalitet, byråkrati og teknologi.'
    },
    tags: ['bauman', 'modernity', 'historiography']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'Why has the Allied decision not to bomb the rail lines to Auschwitz been debated by historians?',
      no: 'Hvorfor har de alliertes beslutning om ikke å bombe jernbanelinjene til Auschwitz blitt debattert av historikere?'
    },
    answers: [
      { en: 'Historians debate whether bombing was technically feasible and whether it would have meaningfully reduced the death toll', no: 'Historikere debatterer om bombing var teknisk gjennomførbart og om det ville ha redusert dødstallet vesentlig' },
      { en: 'No Allied bombing raids ever took place anywhere near the region', no: 'Ingen allierte bomberaid fant noen gang sted i nærheten av regionen' },
      { en: 'The Allies were entirely unaware of Auschwitz until 1945', no: 'De allierte var fullstendig uvitende om Auschwitz frem til 1945' },
      { en: 'Bombing railway lines was prohibited by international law', no: 'Bombing av jernbanelinjer var forbudt etter internasjonal rett' }
    ],
    correct: 0,
    explanation: {
      en: 'Intelligence about Auschwitz reached Allied leaders by 1944, but debates persist about whether bombing rail lines was feasible and how many lives it would have saved.',
      no: 'Etterretning om Auschwitz nådde allierte ledere innen 1944, men debattene fortsetter om bombing av jernbanelinjer var gjennomførbart og hvor mange liv det ville ha reddet.'
    },
    tags: ['allies', 'bombing', 'debate']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What do many historians emphasize to explain why bystanders in occupied Europe did not intervene more to protect Jews?',
      no: 'Hva fremhever mange historikere for å forklare hvorfor tilskuere i okkupert Europa ikke grep inn mer for å beskytte jøder?'
    },
    answers: [
      { en: 'Bystanders lacked any knowledge of what was happening', no: 'Tilskuere manglet all kunnskap om hva som skjedde' },
      { en: 'Fear, social conformity, and propaganda that normalized persecution reduced intervention', no: 'Frykt, sosial konformitet og propaganda som normaliserte forfølgelse reduserte inngrep' },
      { en: 'All bystanders were actively involved as perpetrators', no: 'Alle tilskuere var aktivt involvert som gjerningspersoner' },
      { en: 'Economic incentives to help victims were entirely insufficient', no: 'Økonomiske insentiver for å hjelpe ofre var fullstendig utilstrekkelige' }
    ],
    correct: 1,
    explanation: {
      en: 'Research shows that fear of punishment, social pressure, dehumanizing propaganda, and gradual normalization all made intervention less likely.',
      no: 'Forskning viser at frykt for straff, sosialt press, avhumaniserende propaganda og gradvis normalisering alle gjorde inngrep mindre sannsynlig.'
    },
    tags: ['bystanders', 'complicity', 'psychology']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What feature of the Holocaust makes historians most cautious when comparing it to other genocides?',
      no: 'Hvilken egenskap ved Holokaust gjør historikere mest forsiktige når de sammenligner det med andre folkemord?'
    },
    answers: [
      { en: 'Its combination of industrial-scale murder, state machinery, and an explicit ideological goal of total extermination', no: 'Kombinasjonen av industrimessig massedrap, statsapparat og et eksplisitt ideologisk mål om total utryddelse' },
      { en: 'That it occurred in Europe rather than elsewhere', no: 'At det fant sted i Europa snarere enn andre steder' },
      { en: 'That it targeted a primarily religious minority group', no: 'At det rammet en primært religiøs minoritetsgruppe' },
      { en: 'That it took place during a world war', no: 'At det fant sted under en verdenskrig' }
    ],
    correct: 0,
    explanation: {
      en: 'Many historians note that the Holocaust\'s combination of explicit exterminatory ideology, modern industrial methods, and total state mobilization makes direct comparisons complex.',
      no: 'Mange historikere bemerker at Holokausts kombinasjon av eksplisitt utryddelsesideologi, moderne industrielle metoder og total statsmobilisering gjør direkte sammenligninger komplekse.'
    },
    tags: ['uniqueness', 'comparison', 'genocide']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What debate exists around whether perpetrators were motivated by ideology or other factors?',
      no: 'Hvilken debatt eksisterer rundt om gjerningspersonene var motivert av ideologi eller andre faktorer?'
    },
    answers: [
      { en: 'Whether perpetrators acted alone or always in organized groups', no: 'Om gjerningspersonene handlet alene eller alltid i organiserte grupper' },
      { en: 'Whether perpetrators were driven by genuine antisemitism or by careerism and peer pressure', no: 'Om gjerningspersonene ble drevet av ekte antisemittisme eller av karrierisme og gruppepress' },
      { en: 'Whether ideology played any role whatsoever in the Holocaust', no: 'Om ideologi spilte noen rolle overhodet i Holokaust' },
      { en: 'Whether all perpetrators were German nationals', no: 'Om alle gjerningspersoner var tyske statsborgere' }
    ],
    correct: 1,
    explanation: {
      en: 'Scholars such as Christopher Browning and Daniel Goldhagen have famously disagreed on whether perpetrators were ideologically motivated or acted out of conformity and careerism.',
      no: 'Akademikere som Christopher Browning og Daniel Goldhagen har berømt vært uenige om hvorvidt gjerningspersonene var ideologisk motivert eller handlet ut fra konformitet og karrierisme.'
    },
    tags: ['perpetrators', 'motivation', 'debate']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'How did the Holocaust shape international human rights law after 1945?',
      no: 'Hvordan formet Holokaust internasjonal menneskerettighetslov etter 1945?'
    },
    answers: [
      { en: 'It directly influenced the UN Genocide Convention and the Universal Declaration of Human Rights', no: 'Det påvirket direkte FNs folkemordkonvensjon og verdenserklæringen om menneskerettigheter' },
      { en: 'It had no lasting impact on international law', no: 'Det hadde ingen varig innvirkning på internasjonal rett' },
      { en: 'It led only to changes in the laws of armed conflict', no: 'Det førte bare til endringer i krigens lover og sedvaner' },
      { en: 'It resulted in the dissolution of the United Nations', no: 'Det resulterte i oppløsningen av FN' }
    ],
    correct: 0,
    explanation: {
      en: 'The Holocaust provided the moral impetus for the 1948 Genocide Convention, the UDHR, and the framework for international criminal accountability.',
      no: 'Holokaust ga det moralske grunnlaget for folkemordkonvensjonen av 1948, verdenserklæringen og rammeverket for internasjonal strafferettslig ansvarlighet.'
    },
    tags: ['human-rights', 'international-law', 'legacy']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What connection did Nazi racial policy have with the 19th-century eugenics movement?',
      no: 'Hvilken sammenheng hadde nazistisk rasepolitikk med eugenikk-bevegelsen på 1800-tallet?'
    },
    answers: [
      { en: 'The Nazi racial laws predated the eugenics movement entirely', no: 'De nazistiske raselovene kom forut for eugenikk-bevegelsen i sin helhet' },
      { en: 'Nazi scientists were openly critical of eugenics', no: 'Nazistiske vitenskapsmenn var åpent kritiske til eugenikk' },
      { en: 'Eugenics provided a pseudo-scientific foundation for Nazi racial categories and genocide', no: 'Eugenikk ga et pseudovitenskapelig grunnlag for nazistiske rasekategorier og folkemord' },
      { en: 'There was no meaningful connection between eugenics and the Holocaust', no: 'Det var ingen meningsfull sammenheng mellom eugenikk og Holokaust' }
    ],
    correct: 2,
    explanation: {
      en: 'The Nazis drew on European and American eugenics to justify racial categories and policies, turning pseudoscientific theories into instruments of mass murder.',
      no: 'Nazistene trakk på europeisk og amerikansk eugenikk for å rettferdiggjøre rasekategorier og politikk, og gjorde pseudovitenskapelige teorier om til instrumenter for massemord.'
    },
    tags: ['eugenics', 'racial-policy', 'science']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What economic dimensions did the Holocaust involve beyond the act of mass murder itself?',
      no: 'Hvilke økonomiske dimensjoner innebar Holokaust utover selve massedrapet?'
    },
    answers: [
      { en: 'Genocide generated no economic benefit for the Nazi state', no: 'Folkemord ga ingen økonomisk gevinst for den nazistiske staten' },
      { en: 'Economic factors were entirely irrelevant to the Holocaust', no: 'Økonomiske faktorer var fullstendig irrelevante for Holokaust' },
      { en: 'Jewish victims financially benefited from the ghetto system', no: 'Jødiske ofre tjente finansielt på ghettosystemet' },
      { en: 'Nazi policies systematically looted Jewish property and exploited victims as forced labor', no: 'Nazistisk politikk plyndret systematisk jødisk eiendom og utnyttet ofre som tvangsarbeidskraft' }
    ],
    correct: 3,
    explanation: {
      en: 'The Holocaust involved the seizure of Jewish businesses, bank accounts, and valuables, as well as the exploitation of concentration camp prisoners as slave labor for German industry.',
      no: 'Holokaust innebar beslagleggelse av jødiske virksomheter, bankkontoer og verdisaker, samt utnyttelse av konsentrasjonsleirfanger som slavearbeidskraft for tysk industri.'
    },
    tags: ['economics', 'looting', 'forced-labor']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'Why do many historians argue the Holocaust should be considered historically unique?',
      no: 'Hvorfor hevder mange historikere at Holokaust bør betraktes som historisk unikt?'
    },
    answers: [
      { en: 'Because genocide was entirely unknown before 1939', no: 'Fordi folkemord var fullstendig ukjent før 1939' },
      { en: 'Because its combination of total extermination as an explicit goal and industrial bureaucratic organization is without clear precedent', no: 'Fordi kombinasjonen av total utryddelse som et eksplisitt mål og industriell byråkratisk organisering er uten klart historisk sidestykke' },
      { en: 'Because it occurred only within German national borders', no: 'Fordi det bare fant sted innenfor tyske nasjonale grenser' },
      { en: 'Because the Holocaust was the only genocide in history to target a single ethnic group', no: 'Fordi Holokaust var det eneste folkemordet i historien som rettet seg mot én enkelt etnisk gruppe' }
    ],
    correct: 1,
    explanation: {
      en: 'While debates exist, many historians point to the unprecedented combination of modern technology, total state power, and explicit ideological commitment to total extermination.',
      no: 'Selv om debattene eksisterer, peker mange historikere på den enestående kombinasjonen av moderne teknologi, total statsmakt og eksplisitt ideologisk forpliktelse til total utryddelse.'
    },
    tags: ['uniqueness', 'historiography']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What role did modern bureaucracy play in enabling the Holocaust?',
      no: 'Hvilken rolle spilte moderne byråkrati i å muliggjøre Holokaust?'
    },
    answers: [
      { en: 'Bureaucracy prevented the Holocaust from spreading beyond Germany', no: 'Byråkratiet forhindret Holokaust i å spre seg utover Tyskland' },
      { en: 'Only informal groups without bureaucratic structures carried out the killings', no: 'Bare uformelle grupper uten byråkratiske strukturer gjennomførte drapene' },
      { en: 'Hitler personally directed every single aspect of the killings', no: 'Hitler ledet personlig ethvert aspekt av drapene' },
      { en: 'Modern administrative systems allowed genocide to be organized, tracked, and executed on a continent-wide scale', no: 'Moderne administrative systemer muliggjorde at folkemord kunne organiseres, spores og gjennomføres i kontinental skala' }
    ],
    correct: 3,
    explanation: {
      en: 'The Holocaust relied on modern bureaucratic systems — railway timetables, census data, administrative records — to coordinate mass murder across Europe.',
      no: 'Holokaust var avhengig av moderne byråkratiske systemer — jernbanetabeller, folketellingsdata, administrative registre — for å koordinere massedrapet i Europa.'
    },
    tags: ['bureaucracy', 'modernity', 'organization']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'How did perpetrators typically justify their participation in the Holocaust?',
      no: 'Hvordan rettferdiggjorde gjerningspersonene typisk sin deltakelse i Holokaust?'
    },
    answers: [
      { en: 'Through open pride in their actions expressed publicly at the time', no: 'Gjennom åpen stolthet over handlingene sine uttrykt offentlig på det tidspunktet' },
      { en: 'By consistently denying all knowledge of the killings', no: 'Ved konsekvent å benekte all kunnskap om drapene' },
      { en: 'By claiming they personally opposed the killings but had no choice', no: 'Ved å hevde at de personlig var imot drapene men ikke hadde noe valg' },
      { en: 'Through appeals to following orders, duty, and the normalization of violence within their group setting', no: 'Gjennom å vise til ordrefølging, pliktfølelse og normalisering av vold innenfor gruppesettingen' }
    ],
    correct: 3,
    explanation: {
      en: 'Research on perpetrators reveals that many cited military duty, obedience to orders, and peer conformity rather than expressing personal hatred.',
      no: 'Forskning på gjerningspersonene avslører at mange viste til militær plikt, lydighet mot ordrer og jevnaldringskonformitet snarere enn å gi uttrykk for personlig hat.'
    },
    tags: ['perpetrators', 'psychology', 'justification']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'How did the Holocaust influence the development of Zionism and international support for Israel?',
      no: 'Hvordan påvirket Holokaust utviklingen av sionisme og internasjonal støtte til Israel?'
    },
    answers: [
      { en: 'The Holocaust had no connection to Jewish political movements', no: 'Holokaust hadde ingen sammenheng med jødiske politiske bevegelser' },
      { en: 'Zionism emerged only as a direct response to the Wannsee Conference', no: 'Sionisme oppsto bare som en direkte respons på Wannsee-konferansen' },
      { en: 'Israel was founded before the Holocaust occurred', no: 'Israel ble grunnlagt før Holokaust fant sted' },
      { en: 'The Holocaust strengthened the argument for a Jewish homeland and accelerated international support for the establishment of Israel', no: 'Holokaust styrket argumentet for et jødisk hjemland og akselererte internasjonal støtte til etableringen av Israel' }
    ],
    correct: 3,
    explanation: {
      en: 'While Zionism predated the Holocaust, the genocide dramatically intensified the urgency of a Jewish state, contributing to the founding of Israel in 1948.',
      no: 'Selv om sionisme kom forut for Holokaust, intensiverte folkemordet dramatisk hastverket med en jødisk stat og bidro til grunnleggelsen av Israel i 1948.'
    },
    tags: ['zionism', 'israel', 'legacy']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What is the key weakness historians identify in purely intentionalist interpretations of the Holocaust?',
      no: 'Hvilken svakhet identifiserer historikere i rent intensjonalistiske tolkninger av Holokaust?'
    },
    answers: [
      { en: 'They overstate the role of technology in enabling mass murder', no: 'De overdriver teknologiens rolle i å muliggjøre massedrapet' },
      { en: 'They ignore the importance of Adolf Hitler entirely', no: 'De ignorerer Adolf Hitlers betydning fullstendig' },
      { en: 'They understate the role of the Catholic Church', no: 'De undervurderer den katolske kirkens rolle' },
      { en: 'They struggle to account for the improvised and uneven development of anti-Jewish policy in the early Nazi years', no: 'De sliter med å forklare den improviserte og ujevne utviklingen av antijødisk politikk i de tidlige naziårene' }
    ],
    correct: 3,
    explanation: {
      en: 'Critics of intentionalism argue that anti-Jewish policy evolved haphazardly in the 1930s rather than following a clear master plan, supporting more functionalist readings.',
      no: 'Kritikere av intensjonalisme hevder at antijødisk politikk utviklet seg tilfeldig på 1930-tallet snarere enn å følge en klar overordnet plan, noe som støtter mer funksjonalistiske tolkninger.'
    },
    tags: ['historiography', 'intentionalism', 'criticism']
  }
      ]
    },
    {
      slug: 'global-conflict',
      name: { en: 'Global conflict', no: 'Global conflict' },
      questions: [
  {
    difficulty: 'easy',
    question: {
      en: 'In which year did World War II begin with Germany\'s invasion of Poland?',
      no: 'I hvilket år begynte andre verdenskrig med Tysklands invasjon av Polen?'
    },
    answers: [
      { en: '1937', no: '1937' },
      { en: '1939', no: '1939' },
      { en: '1941', no: '1941' },
      { en: '1945', no: '1945' }
    ],
    correct: 1,
    explanation: {
      en: 'Germany invaded Poland on 1 September 1939, triggering declarations of war from Britain and France.',
      no: 'Tyskland invaderte Polen 1. september 1939, noe som utløste krigserklæringer fra Storbritannia og Frankrike.'
    },
    tags: ['wwii', 'dates', '1939']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'In which year did World War II end?',
      no: 'I hvilket år sluttet andre verdenskrig?'
    },
    answers: [
      { en: '1943', no: '1943' },
      { en: '1944', no: '1944' },
      { en: '1945', no: '1945' },
      { en: '1946', no: '1946' }
    ],
    correct: 2,
    explanation: {
      en: 'World War II ended in 1945, with Germany surrendering in May and Japan surrendering in August following the atomic bombings.',
      no: 'Andre verdenskrig sluttet i 1945, med Tysklands kapitulasjon i mai og Japans kapitulasjon i august etter atombombingen.'
    },
    tags: ['wwii', 'dates', '1945']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Which three countries formed the core of the Allied powers?',
      no: 'Hvilke tre land utgjorde kjernen i de allierte maktene?'
    },
    answers: [
      { en: 'Germany, Italy, and Japan', no: 'Tyskland, Italia og Japan' },
      { en: 'France, Spain, and Portugal', no: 'Frankrike, Spania og Portugal' },
      { en: 'The United States, the United Kingdom, and the Soviet Union', no: 'USA, Storbritannia og Sovjetunionen' },
      { en: 'China, India, and Australia', no: 'Kina, India og Australia' }
    ],
    correct: 2,
    explanation: {
      en: 'The US, UK, and Soviet Union formed the core Allied powers, though many other nations also fought against the Axis.',
      no: 'USA, Storbritannia og Sovjetunionen utgjorde kjernen i de allierte maktene, selv om mange andre nasjoner også kjempet mot aksemaktene.'
    },
    tags: ['allies', 'allied-powers']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Which three countries formed the main Axis powers?',
      no: 'Hvilke tre land utgjorde de viktigste aksemaktene?'
    },
    answers: [
      { en: 'The US, the UK, and France', no: 'USA, Storbritannia og Frankrike' },
      { en: 'Germany, Italy, and Japan', no: 'Tyskland, Italia og Japan' },
      { en: 'The USSR, Poland, and Czechoslovakia', no: 'Sovjetunionen, Polen og Tsjekkoslovakia' },
      { en: 'Britain, Canada, and Australia', no: 'Storbritannia, Canada og Australia' }
    ],
    correct: 1,
    explanation: {
      en: 'Germany, Italy, and Japan formed the Axis powers, united by the Tripartite Pact of 1940.',
      no: 'Tyskland, Italia og Japan dannet aksemaktene, forent av trepartsavtalen fra 1940.'
    },
    tags: ['axis-powers']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What was D-Day?',
      no: 'Hva var D-dagen?'
    },
    answers: [
      { en: 'Japan\'s attack on the US naval base at Pearl Harbor', no: 'Japans angrep på den amerikanske marinbasen i Pearl Harbor' },
      { en: 'The Allied naval invasion of Normandy, France, on 6 June 1944', no: 'De alliertes marineinvasjon av Normandie i Frankrike 6. juni 1944' },
      { en: 'Germany\'s invasion of the Soviet Union', no: 'Tysklands invasjon av Sovjetunionen' },
      { en: 'The Allied bombing of Dresden', no: 'De alliertes bombing av Dresden' }
    ],
    correct: 1,
    explanation: {
      en: 'D-Day, 6 June 1944, was the largest seaborne invasion in history and opened the long-anticipated Western Front in Europe.',
      no: 'D-dagen, 6. juni 1944, var den største sjøbårne invasjonen i historien og åpnet den lenge ventede vestfronten i Europa.'
    },
    tags: ['d-day', 'normandy', '1944']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Which event brought the United States into World War II?',
      no: 'Hvilken hendelse brakte USA inn i andre verdenskrig?'
    },
    answers: [
      { en: 'Germany\'s invasion of Poland', no: 'Tysklands invasjon av Polen' },
      { en: 'The fall of France in 1940', no: 'Frankrikes fall i 1940' },
      { en: 'Japan\'s attack on Pearl Harbor on 7 December 1941', no: 'Japans angrep på Pearl Harbor 7. desember 1941' },
      { en: 'Italy\'s declaration of war on the United States', no: 'Italias krigserklæring mot USA' }
    ],
    correct: 2,
    explanation: {
      en: 'Japan\'s surprise attack on the US naval base at Pearl Harbor, Hawaii, on 7 December 1941 brought the US into the war.',
      no: 'Japans overraskelsesangrep på den amerikanske marinebasen i Pearl Harbor, Hawaii, 7. desember 1941 brakte USA inn i krigen.'
    },
    tags: ['pearl-harbor', 'us-entry', '1941']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Who was the British Prime Minister who led Britain through most of World War II?',
      no: 'Hvem var den britiske statsministeren som ledet Storbritannia gjennom mesteparten av andre verdenskrig?'
    },
    answers: [
      { en: 'Neville Chamberlain', no: 'Neville Chamberlain' },
      { en: 'Anthony Eden', no: 'Anthony Eden' },
      { en: 'Clement Attlee', no: 'Clement Attlee' },
      { en: 'Winston Churchill', no: 'Winston Churchill' }
    ],
    correct: 3,
    explanation: {
      en: 'Winston Churchill served as British Prime Minister from May 1940 and became one of the defining figures of Allied leadership.',
      no: 'Winston Churchill tjente som britisk statsminister fra mai 1940 og ble en av de sentrale skikkelsene i alliert lederskap.'
    },
    tags: ['churchill', 'britain']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What was the name of Germany\'s invasion of the Soviet Union launched in June 1941?',
      no: 'Hva var navnet på Tysklands invasjon av Sovjetunionen som ble lansert i juni 1941?'
    },
    answers: [
      { en: 'Operation Overlord', no: 'Operasjon Overlord' },
      { en: 'Operation Sea Lion', no: 'Operasjon Sjøløve' },
      { en: 'Operation Market Garden', no: 'Operasjon Market Garden' },
      { en: 'Operation Barbarossa', no: 'Operasjon Barbarossa' }
    ],
    correct: 3,
    explanation: {
      en: 'Operation Barbarossa, launched on 22 June 1941, was the largest military operation in history and opened the Eastern Front.',
      no: 'Operasjon Barbarossa, iverksatt 22. juni 1941, var den største militæroperasjonen i historien og åpnet Østfronten.'
    },
    tags: ['barbarossa', 'soviet-union']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Which Japanese city was struck by the first atomic bomb in August 1945?',
      no: 'Hvilken japansk by ble rammet av den første atombomben i august 1945?'
    },
    answers: [
      { en: 'Nagasaki', no: 'Nagasaki' },
      { en: 'Tokyo', no: 'Tokyo' },
      { en: 'Osaka', no: 'Osaka' },
      { en: 'Hiroshima', no: 'Hiroshima' }
    ],
    correct: 3,
    explanation: {
      en: 'The atomic bomb was dropped on Hiroshima on 6 August 1945, followed by Nagasaki on 9 August, leading to Japan\'s surrender.',
      no: 'Atombomben ble sluppet over Hiroshima 6. august 1945, etterfulgt av Nagasaki 9. august, noe som førte til Japans kapitulasjon.'
    },
    tags: ['hiroshima', 'atomic-bomb', '1945']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Who was the US President for most of World War II?',
      no: 'Hvem var USAs president under mesteparten av andre verdenskrig?'
    },
    answers: [
      { en: 'Harry S. Truman', no: 'Harry S. Truman' },
      { en: 'Dwight D. Eisenhower', no: 'Dwight D. Eisenhower' },
      { en: 'Herbert Hoover', no: 'Herbert Hoover' },
      { en: 'Franklin D. Roosevelt', no: 'Franklin D. Roosevelt' }
    ],
    correct: 3,
    explanation: {
      en: 'Franklin D. Roosevelt led the US through most of the war and died in April 1945, shortly before the German surrender.',
      no: 'Franklin D. Roosevelt ledet USA gjennom mesteparten av krigen og døde i april 1945, kort tid før Tysklands kapitulasjon.'
    },
    tags: ['roosevelt', 'us-president']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What was the Battle of Britain?',
      no: 'Hva var Slaget om Storbritannia?'
    },
    answers: [
      { en: 'The Allied liberation of Paris', no: 'De alliertes frigjøring av Paris' },
      { en: 'A German air campaign against Britain in 1940', no: 'En tysk luftkampanje mot Storbritannia i 1940' },
      { en: 'The Allied invasion of northern France', no: 'De alliertes invasjon av Nord-Frankrike' },
      { en: 'A naval battle in the English Channel in 1942', no: 'Et sjøslag i Den engelske kanal i 1942' }
    ],
    correct: 1,
    explanation: {
      en: 'The Battle of Britain was the German Luftwaffe\'s air campaign against Britain in 1940, the first major campaign fought entirely by air forces.',
      no: 'Slaget om Storbritannia var den tyske Luftwaffes luftkampanje mot Storbritannia i 1940 — den første store kampanjen som utelukkende ble ført av luftstyrker.'
    },
    tags: ['battle-of-britain', '1940']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'In which year did the United States formally enter World War II?',
      no: 'I hvilket år gikk USA formelt inn i andre verdenskrig?'
    },
    answers: [
      { en: '1939', no: '1939' },
      { en: '1940', no: '1940' },
      { en: '1941', no: '1941' },
      { en: '1943', no: '1943' }
    ],
    correct: 2,
    explanation: {
      en: 'The United States entered the war after the attack on Pearl Harbor on 7 December 1941.',
      no: 'USA gikk inn i krigen etter angrepet på Pearl Harbor 7. desember 1941.'
    },
    tags: ['us-entry', 'dates']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'What was the Eastern Front?',
      no: 'Hva var Østfronten?'
    },
    answers: [
      { en: 'The Allied campaign in North Africa', no: 'De alliertes kampanje i Nord-Afrika' },
      { en: 'The conflict between Germany and France in 1940', no: 'Konflikten mellom Tyskland og Frankrike i 1940' },
      { en: 'The war zone between Germany and the Soviet Union', no: 'Krigslinjen mellom Tyskland og Sovjetunionen' },
      { en: 'The naval fighting across the Pacific Ocean', no: 'Sjøkampene over Stillehavet' }
    ],
    correct: 2,
    explanation: {
      en: 'The Eastern Front was the theatre of war between Germany and the Soviet Union, the largest and most deadly land theatre of World War II.',
      no: 'Østfronten var krigsskueplassen mellom Tyskland og Sovjetunionen — den største og dødeligste landkrigen under andre verdenskrig.'
    },
    tags: ['eastern-front', 'soviet-union']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Who was the leader of the Soviet Union during World War II?',
      no: 'Hvem var Sovjetunionens leder under andre verdenskrig?'
    },
    answers: [
      { en: 'Vladimir Lenin', no: 'Vladimir Lenin' },
      { en: 'Nikita Khrushchev', no: 'Nikita Khrusjtsjov' },
      { en: 'Leon Trotsky', no: 'Leon Trotskij' },
      { en: 'Joseph Stalin', no: 'Josef Stalin' }
    ],
    correct: 3,
    explanation: {
      en: 'Joseph Stalin led the Soviet Union throughout World War II and was a central figure in Allied strategy.',
      no: 'Josef Stalin ledet Sovjetunionen gjennom hele andre verdenskrig og var en sentral skikkelse i alliert strategi.'
    },
    tags: ['stalin', 'soviet-union']
  },
  {
    difficulty: 'easy',
    question: {
      en: 'Which battle is widely considered the turning point on the Eastern Front?',
      no: 'Hvilket slag regnes som vendepunktet på Østfronten?'
    },
    answers: [
      { en: 'Battle of Moscow', no: 'Slaget om Moskva' },
      { en: 'Battle of Kursk', no: 'Slaget ved Kursk' },
      { en: 'Battle of Berlin', no: 'Slaget om Berlin' },
      { en: 'Battle of Stalingrad', no: 'Slaget om Stalingrad' }
    ],
    correct: 3,
    explanation: {
      en: 'The Battle of Stalingrad (1942–1943) ended with Germany\'s first major encirclement defeat and marked the beginning of the Soviet strategic advance westward.',
      no: 'Slaget om Stalingrad (1942–1943) endte med Tysklands første store innringing og markerte begynnelsen på den sovjetiske strategiske fremrykkingen vestover.'
    },
    tags: ['stalingrad', 'turning-point', 'eastern-front']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Why did Japan attack Pearl Harbor in December 1941?',
      no: 'Hvorfor angrep Japan Pearl Harbor i desember 1941?'
    },
    answers: [
      { en: 'To prevent the United States from intervening in Japanese expansion across Asia', no: 'For å hindre USA i å gripe inn i japansk ekspansjon i Asia' },
      { en: 'To support Germany\'s invasion of the Soviet Union', no: 'For å støtte Tysklands invasjon av Sovjetunionen' },
      { en: 'To conquer Hawaii as permanent Japanese territory', no: 'For å erobre Hawaii som permanent japansk territorium' },
      { en: 'To retaliate for a US bombing of Tokyo', no: 'For å gjengjelde en amerikansk bombing av Tokyo' }
    ],
    correct: 0,
    explanation: {
      en: 'Japan sought to cripple the US Pacific Fleet to prevent American interference with Japanese expansion into Southeast Asia and the Pacific.',
      no: 'Japan søkte å lamsle den amerikanske Stillehavsflåten for å hindre amerikansk innblanding i japansk ekspansjon inn i Sørøst-Asia og Stillehavet.'
    },
    tags: ['pearl-harbor', 'japan', 'causes']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did US entry into World War II change the course of the conflict?',
      no: 'Hvordan endret USAs inntreden i andre verdenskrig krigens gang?'
    },
    answers: [
      { en: 'It caused Germany to surrender immediately', no: 'Det fikk Tyskland til å kapitulere umiddelbart' },
      { en: 'It provided massive industrial capacity and military manpower to the Allied cause', no: 'Det ga enorm industrikapasitet og militær mannskapsstyrke til den allierte saken' },
      { en: 'It shifted all fighting exclusively to the Pacific Theater', no: 'Det flyttet all kamp eksklusivt til Stillehavsregionen' },
      { en: 'It had little strategic effect on the European war', no: 'Det hadde liten strategisk effekt på krigen i Europa' }
    ],
    correct: 1,
    explanation: {
      en: 'US entry brought overwhelming industrial output, Lend-Lease aid, and eventually millions of troops, fundamentally shifting the balance against the Axis.',
      no: 'USAs inntreden brakte overveldende industriell produksjon, lend-lease-hjelp og til slutt millioner av soldater, noe som fundamentalt forskjøv balansen mot aksemaktene.'
    },
    tags: ['us-entry', 'consequences']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Why was the Eastern Front the most devastating theatre of World War II?',
      no: 'Hvorfor var Østfronten det mest ødeleggende krigsskueplassen under andre verdenskrig?'
    },
    answers: [
      { en: 'It was fought entirely in underground fortifications', no: 'Den ble utkjempet utelukkende i underjordiske festningsverk' },
      { en: 'It involved chemical weapons not used elsewhere', no: 'Den involverte kjemiske våpen som ikke ble brukt andre steder' },
      { en: 'It combined massive conventional armies with ideological warfare and genocidal policies', no: 'Den kombinerte massive konvensjonelle hærer med ideologisk krigføring og folkemordspolitikk' },
      { en: 'It was the only front where Germany won major victories', no: 'Det var den eneste fronten der Tyskland vant store seire' }
    ],
    correct: 2,
    explanation: {
      en: 'The Eastern Front combined the largest land battles in history with Nazi ideological war, genocide, and mass starvation of Soviet prisoners, causing tens of millions of deaths.',
      no: 'Østfronten kombinerte de største landslagene i historien med nazistisk ideologisk krig, folkemord og massesvelt av sovjetiske fanger, noe som forårsaket titusenvis av millioner av dødsfall.'
    },
    tags: ['eastern-front', 'casualties', 'ideology']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What made World War II a "total war"?',
      no: 'Hva gjorde andre verdenskrig til en "total krig"?'
    },
    answers: [
      { en: 'Only professional soldiers were involved on both sides', no: 'Bare profesjonelle soldater var involvert på begge sider' },
      { en: 'Air forces played no significant role', no: 'Luftstyrker spilte ingen vesentlig rolle' },
      { en: 'It was fought entirely by volunteer armies', no: 'Den ble utelukkende utkjempet av frivillige hærer' },
      { en: 'Entire national economies, civilian populations, and resources were mobilized for the war effort', no: 'Hele nasjonale økonomier, sivilbefolkninger og ressurser ble mobilisert for krigsinnsatsen' }
    ],
    correct: 3,
    explanation: {
      en: 'Total war meant that the distinction between combatants and civilians collapsed, with entire societies mobilized for war production, military service, and ideological struggle.',
      no: 'Total krig betydde at skillet mellom stridende og sivile brøt sammen, med hele samfunn mobilisert for krigsproduksjon, militærtjeneste og ideologisk kamp.'
    },
    tags: ['total-war', 'definition']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did World War II extend beyond Europe into Asia and Africa?',
      no: 'Hvordan utvidet andre verdenskrig seg utover Europa til Asia og Afrika?'
    },
    answers: [
      { en: 'Germany directly conquered Africa independently of Italy', no: 'Tyskland erobret Afrika direkte uavhengig av Italia' },
      { en: 'No significant fighting occurred outside Europe', no: 'Ingen vesentlig kamp fant sted utenfor Europa' },
      { en: 'Japan expanded across Asia while the Allies fought in North Africa and the broader Pacific', no: 'Japan ekspanderte i Asia mens de allierte kjempet i Nord-Afrika og det bredere Stillehavet' },
      { en: 'The war spread only through naval blockades', no: 'Krigen spredte seg bare gjennom sjøblokader' }
    ],
    correct: 2,
    explanation: {
      en: 'While Europe was the central theatre, Japan created a vast Pacific and Asian war, and North Africa and the Mediterranean were also major theatres.',
      no: 'Selv om Europa var den sentrale krigsskueplassen, skapte Japan en enorm krig i Stillehavet og Asia, og Nord-Afrika og Middelhavet var også viktige fronter.'
    },
    tags: ['global-conflict', 'asia', 'africa']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Why is the Battle of Stalingrad considered a turning point on the Eastern Front?',
      no: 'Hvorfor regnes Slaget om Stalingrad som et vendepunkt på Østfronten?'
    },
    answers: [
      { en: 'It was the very first German defeat of the entire war', no: 'Det var det første tyske nederlaget i hele krigen' },
      { en: 'Allied landings in Western Europe coincided with the battle', no: 'Allierte landganger i Vest-Europa sammenfalt med slaget' },
      { en: 'Germany\'s defeat ended its eastern advance and began a sustained Soviet counteroffensive', no: 'Tysklands nederlag stanset fremrykkingen østover og innledet en vedvarende sovjetisk motoffensiv' },
      { en: 'It opened the way for an immediate US invasion of Germany', no: 'Det åpnet veien for en umiddelbar amerikansk invasjon av Tyskland' }
    ],
    correct: 2,
    explanation: {
      en: 'The encirclement and destruction of the German Sixth Army at Stalingrad (Feb 1943) permanently ended German strategic offensive capability in the East.',
      no: 'Innringingen og ødeleggelsen av den tyske 6. armé ved Stalingrad (februar 1943) avsluttet permanent Tysklands strategiske offensivkapasitet i øst.'
    },
    tags: ['stalingrad', 'turning-point']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What was the strategic importance of the Allied North African campaign?',
      no: 'Hva var den strategiske betydningen av de alliertes Nord-Afrika-kampanje?'
    },
    answers: [
      { en: 'North Africa was Germany\'s primary base of operations', no: 'Nord-Afrika var Tysklands primære operasjonsbase' },
      { en: 'Controlling North Africa secured all Middle Eastern oil for the Allies', no: 'Kontroll over Nord-Afrika sikret alt Midtøstens olje for de allierte' },
      { en: 'Winning North Africa enabled the Allies to launch an invasion of southern Europe', no: 'Å vinne Nord-Afrika gjorde det mulig for de allierte å lansere en invasjon av Sør-Europa' },
      { en: 'North Africa was the site of all major naval battles in WWII', no: 'Nord-Afrika var stedet for alle store sjøslag under andre verdenskrig' }
    ],
    correct: 2,
    explanation: {
      en: 'Victory in North Africa by May 1943 gave the Allies a springboard for the invasion of Sicily and Italy, opening a southern front in Europe.',
      no: 'Seier i Nord-Afrika i mai 1943 ga de allierte et springbrett for invasjonen av Sicilia og Italia og åpnet en sørlig front i Europa.'
    },
    tags: ['north-africa', 'strategy']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Why did Operation Barbarossa ultimately fail despite early German successes?',
      no: 'Hvorfor mislyktes Operasjon Barbarossa til tross for tidlige tyske suksesser?'
    },
    answers: [
      { en: 'The Soviet Union surrendered, then quickly recovered', no: 'Sovjetunionen kapitulerte, for deretter å komme seg raskt' },
      { en: 'Allied airstrikes halted the German advance immediately', no: 'Allierte luftangrep stanset den tyske fremrykkingen umiddelbart' },
      { en: 'Germany never deployed sufficient forces for the campaign', no: 'Tyskland sendte aldri ut tilstrekkelige styrker for kampanjen' },
      { en: 'Soviet resistance, vast distances, harsh winter, and overstretched supply lines combined to halt the advance', no: 'Sovjetisk motstand, enorme avstander, hard vinter og overstrakte forsyningslinjer stanset fremrykkingen i kombinasjon' }
    ],
    correct: 3,
    explanation: {
      en: 'Despite early massive gains, Germany could not achieve a knockout blow; Soviet resistance, space, winter, and logistics defeated the campaign.',
      no: 'Til tross for tidlige massive gevinster klarte ikke Tyskland å levere et avgjørende slag; sovjetisk motstand, rom, vinter og logistikk beseiret kampanjen.'
    },
    tags: ['barbarossa', 'failure', 'causes']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What role did Allied logistics and industrial output play in the outcome of the war?',
      no: 'Hvilken rolle spilte alliert logistikk og industriell produksjon i krigens utfall?'
    },
    answers: [
      { en: 'Logistics were irrelevant since battles were won purely by troop morale', no: 'Logistikk var irrelevant siden slag ble vunnet utelukkende av troppsmorale' },
      { en: 'Germany maintained superior supply chains throughout the war', no: 'Tyskland opprettholdt overlegne forsyningskjeder gjennom hele krigen' },
      { en: 'Supply chains only mattered in the Pacific Theatre', no: 'Forsyningskjeder hadde bare betydning i Stillehavsregionen' },
      { en: 'Allied industrial production and supply lines sustained prolonged campaigns across multiple theatres simultaneously', no: 'Alliert industriell produksjon og forsyningslinjer opprettholdt langvarige kampanjer over flere krigsskueplasser samtidig' }
    ],
    correct: 3,
    explanation: {
      en: 'The US produced more war material than all other nations combined, while the Lend-Lease program supplied the Soviet Union and Britain with critical equipment.',
      no: 'USA produserte mer krigsmateriell enn alle andre nasjoner til sammen, mens lend-lease-programmet forsynte Sovjetunionen og Storbritannia med kritisk utstyr.'
    },
    tags: ['logistics', 'industry', 'allies']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did strategic air power change the nature of World War II?',
      no: 'Hvordan endret strategisk luftmakt karakteren av andre verdenskrig?'
    },
    answers: [
      { en: 'Air power was limited to reconnaissance missions throughout the war', no: 'Luftmakt var begrenset til rekognoseringsoppdrag gjennom hele krigen' },
      { en: 'Only Germany used air power effectively', no: 'Bare Tyskland brukte luftmakt effektivt' },
      { en: 'Air forces played no significant role in determining the outcome', no: 'Luftstyrker spilte ingen vesentlig rolle i å avgjøre utfallet' },
      { en: 'Bombing campaigns targeted industrial centers and civilian populations, fundamentally shaping the war', no: 'Bomberkampanjer rettet seg mot industrisentre og sivilbefolkninger og formet krigen fundamentalt' }
    ],
    correct: 3,
    explanation: {
      en: 'Strategic bombing aimed to destroy industry and civilian morale; air superiority also proved essential for D-Day and the Pacific island campaigns.',
      no: 'Strategisk bombing hadde som mål å ødelegge industri og sivilmoralen; luftoverlegenhet viste seg også å være avgjørende for D-dagen og Stillehavets øykampanjer.'
    },
    tags: ['air-power', 'bombing', 'strategy']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What connection exists between World War I and the outbreak of World War II?',
      no: 'Hvilken sammenheng finnes mellom første verdenskrig og utbruddet av andre verdenskrig?'
    },
    answers: [
      { en: 'The wars were completely unrelated events', no: 'Krigene var fullstendig urelaterte hendelser' },
      { en: 'World War I was caused by Japan\'s expansion', no: 'Første verdenskrig ble forårsaket av Japans ekspansjon' },
      { en: 'The Treaty of Versailles created deep resentment and instability that contributed to the rise of Nazism and WWII', no: 'Versaillestraktaten skapte dyp bitterhet og ustabilitet som bidro til fremveksten av nazisme og andre verdenskrig' },
      { en: 'A strong postwar peace collapsed solely due to economic factors with no connection to WWI', no: 'En sterk etterkrigsfred kollapset utelukkende på grunn av økonomiske faktorer uten sammenheng med første verdenskrig' }
    ],
    correct: 2,
    explanation: {
      en: 'The punitive terms of the Versailles Treaty fueled German grievances and economic instability that Nazi propaganda exploited to gain power.',
      no: 'De straffende vilkårene i Versaillestraktaten ga næring til tyske klager og økonomisk ustabilitet som nazistisk propaganda utnyttet for å komme til makten.'
    },
    tags: ['wwi', 'connections', 'causes']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did World War II affect peoples living under European colonial rule?',
      no: 'Hvordan påvirket andre verdenskrig folk som levde under europeisk kolonistyre?'
    },
    answers: [
      { en: 'Colonial populations were entirely unaffected by the war', no: 'Koloniale befolkninger var fullstendig upåvirket av krigen' },
      { en: 'European colonies gained formal independence during the war itself', no: 'Europeiske kolonier oppnådde formell uavhengighet under selve krigen' },
      { en: 'Colonized peoples benefited economically from wartime production demand', no: 'Koloniserte folk hadde fordel av etterspørsel etter krigstidsproduksjon' },
      { en: 'Many colonial subjects were mobilized as soldiers while the war exposed European weakness and accelerated independence movements', no: 'Mange koloniale undersåtter ble mobilisert som soldater mens krigen avslørte europeisk svakhet og akselererte uavhengighetsbevegelser' }
    ],
    correct: 3,
    explanation: {
      en: 'European defeats in Asia revealed that colonial powers were not invincible, inspiring independence movements that gained momentum after 1945.',
      no: 'Europeiske nederlag i Asia avslørte at kolonimakter ikke var usårlige, noe som inspirerte uavhengighetsbevegelser som fikk fart etter 1945.'
    },
    tags: ['colonialism', 'decolonization', 'consequences']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'What was the main Allied strategy in the Pacific War against Japan?',
      no: 'Hva var den viktigste allierte strategien i Stillehavskrigen mot Japan?'
    },
    answers: [
      { en: 'A direct invasion of the Japanese mainland was launched immediately after Pearl Harbor', no: 'En direkte invasjon av det japanske fastlandet ble igangsatt umiddelbart etter Pearl Harbor' },
      { en: 'The atomic bomb was deployed from the very start of the Pacific conflict', no: 'Atombomben ble tatt i bruk fra starten av Stillehavskonflikten' },
      { en: 'Naval blockades alone were used to defeat Japan', no: 'Bare sjøblokader ble brukt for å beseire Japan' },
      { en: 'Island-hopping campaigns captured strategic islands to cut Japanese supply lines and bring air power closer to Japan', no: 'Øyhoppkampanjer inntok strategiske øyer for å kutte japanske forsyningslinjer og bringe luftmakt nærmere Japan' }
    ],
    correct: 3,
    explanation: {
      en: 'The island-hopping strategy bypassed heavily defended Japanese positions to seize key islands needed for airfields and supply bases closer to Japan.',
      no: 'Øyhoppstrategien omgikk sterkt befestede japanske stillinger for å innta nøkkeløyer som trengs for flyplasser og forsyningsbaser nærmere Japan.'
    },
    tags: ['pacific', 'island-hopping', 'strategy']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'Why did Hitler open a second front against the Soviet Union while still at war with Britain?',
      no: 'Hvorfor åpnet Hitler en ny front mot Sovjetunionen mens han fortsatt var i krig med Storbritannia?'
    },
    answers: [
      { en: 'Japan specifically requested German assistance in Asia', no: 'Japan ba spesifikt om tysk hjelp i Asia' },
      { en: 'Britain had agreed to a ceasefire by June 1941', no: 'Storbritannia hadde gått med på en våpenhvile innen juni 1941' },
      { en: 'He sought Lebensraum in the East and intended to destroy Soviet communism and seize resources', no: 'Han søkte Lebensraum i øst og hadde til hensikt å ødelegge sovjetisk kommunisme og beslaglegge ressurser' },
      { en: 'Germany needed only the Caspian Sea oil fields', no: 'Tyskland trengte bare Kaspihavet-oljefeltene' }
    ],
    correct: 2,
    explanation: {
      en: 'Invading the USSR was central to Nazi ideology: Hitler sought living space in the East, wanted to destroy communism, and planned to exploit Soviet resources.',
      no: 'Å invadere Sovjetunionen var sentralt for nazistisk ideologi: Hitler søkte livsrom i øst, ville ødelegge kommunismen og planla å utnytte sovjetiske ressurser.'
    },
    tags: ['barbarossa', 'ideology', 'lebensraum']
  },
  {
    difficulty: 'medium',
    question: {
      en: 'How did naval warfare shape the outcome of World War II?',
      no: 'Hvordan formet sjøkrig utfallet av andre verdenskrig?'
    },
    answers: [
      { en: 'Naval forces played no role in the war\'s outcome', no: 'Marine-styrker spilte ingen rolle i krigens utfall' },
      { en: 'Germany dominated all naval warfare throughout the entire war', no: 'Tyskland dominerte all sjøkrig gjennom hele krigen' },
      { en: 'Naval battles were confined to the Mediterranean Sea', no: 'Sjøslag var begrenset til Middelhavet' },
      { en: 'Control of sea routes was critical to Allied supply chains, troop movements, and ultimately victory', no: 'Kontroll over sjøruter var avgjørende for allierte forsyningskjeder, troppebevegelser og til syvende og sist seier' }
    ],
    correct: 3,
    explanation: {
      en: 'Allied victory in the Battle of the Atlantic secured supply lines to Britain, while naval superiority in the Pacific enabled the island-hopping campaign.',
      no: 'Alliert seier i Atlanterhavsslaget sikret forsyningslinjer til Storbritannia, mens marineoverlegenhet i Stillehavet muliggjorde øyhoppkampanjen.'
    },
    tags: ['naval', 'atlantic', 'pacific', 'strategy']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What is the main historical debate surrounding the US decision to drop atomic bombs on Japan?',
      no: 'Hva er den viktigste historiske debatten rundt USAs beslutning om å slippe atombomber over Japan?'
    },
    answers: [
      { en: 'Whether the bombs were necessary to end the war or whether Japan was already close to surrendering', no: 'Om bombene var nødvendige for å avslutte krigen eller om Japan allerede var nær å kapitulere' },
      { en: 'Whether the Soviet Union approved the use of atomic weapons', no: 'Om Sovjetunionen godkjente bruken av atomvåpen' },
      { en: 'Whether Germany was the intended original target of the atomic bombs', no: 'Om Tyskland var det opprinnelige planlagte målet for atombombene' },
      { en: 'Whether Japan was fully aware of the bombs\' destructive potential', no: 'Om Japan var fullt klar over bombenes ødeleggelsespotensial' }
    ],
    correct: 0,
    explanation: {
      en: 'Revisionists argue Japan would have surrendered without the bombs or a land invasion; traditionalists argue the bombs prevented even greater casualties.',
      no: 'Revisjonister hevder at Japan ville ha kapitulert uten bombene eller en landinvasjon; tradisjonalister hevder at bombene forhindret enda større tap.'
    },
    tags: ['atomic-bomb', 'japan', 'debate']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'Why do many historians credit the Soviet Union as the decisive factor in defeating Nazi Germany?',
      no: 'Hvorfor gir mange historikere Sovjetunionen æren som den avgjørende faktoren i å beseire Nazi-Tyskland?'
    },
    answers: [
      { en: 'The Soviet Union invaded Germany before the other Allies could act', no: 'Sovjetunionen invaderte Tyskland før de andre allierte kunne handle' },
      { en: 'The USSR provided the majority of financial resources to the entire Allied war effort', no: 'Sovjetunionen bidro med hoveddelen av de finansielle ressursene til hele den allierte krigsinnsatsen' },
      { en: 'Soviet naval power dominated the Atlantic Ocean', no: 'Sovjetisk sjømakt dominerte Atlanterhavet' },
      { en: 'The Soviet Union suffered the greatest casualties and bore the largest share of direct fighting against Germany', no: 'Sovjetunionen led de største tapene og bar den største andelen av direkte kamp mot Tyskland' }
    ],
    correct: 3,
    explanation: {
      en: 'The Eastern Front absorbed around 75–80% of all German military effort and the USSR suffered roughly 27 million deaths — by far the largest contribution to Germany\'s defeat.',
      no: 'Østfronten absorberte omtrent 75–80 % av all tysk militær innsats, og Sovjetunionen led omtrent 27 millioner dødsfall — langt den største bidragsyteren til Tysklands nederlag.'
    },
    tags: ['soviet-union', 'eastern-front', 'victory']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What is the main controversy surrounding the Allied strategic bombing of German cities?',
      no: 'Hva er den viktigste kontroversen rundt de alliertes strategiske bombing av tyske byer?'
    },
    answers: [
      { en: 'Whether Germany bombed Allied cities first and thus bears full responsibility', no: 'Om Tyskland bombet allierte byer først og dermed bærer fullt ansvar' },
      { en: 'Whether the bombing campaigns were secretly directed by Hitler', no: 'Om bomberkampanjene ble hemlig ledet av Hitler' },
      { en: 'Whether civilian bombing was militarily effective and morally justifiable', no: 'Om sivil bombing var militært effektivt og moralsk forsvarlig' },
      { en: 'Whether strategic bombing was the only strategy used against Germany', no: 'Om strategisk bombing var den eneste strategien som ble brukt mot Tyskland' }
    ],
    correct: 2,
    explanation: {
      en: 'Critics argue that area bombing of German cities killed hundreds of thousands of civilians without decisively shortening the war, raising serious ethical questions.',
      no: 'Kritikere hevder at arealbombing av tyske byer drepte hundretusenvis av sivile uten å forkorte krigen avgjørende, noe som reiser alvorlige etiske spørsmål.'
    },
    tags: ['bombing', 'ethics', 'debate']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'How did wartime cooperation between the Western Allies and the Soviet Union contribute to later Cold War tensions?',
      no: 'Hvordan bidro krigstidens samarbeid mellom de vestlige allierte og Sovjetunionen til senere spenninger under den kalde krigen?'
    },
    answers: [
      { en: 'Cooperation was so complete that all postwar disagreements were prevented', no: 'Samarbeidet var så fullstendig at alle etterkrigstidens uenigheter ble forhindret' },
      { en: 'The Cold War began only after Stalin\'s death in 1953', no: 'Den kalde krigen begynte først etter Stalins død i 1953' },
      { en: 'The Soviet Union and the United States shared identical postwar goals', no: 'Sovjetunionen og USA delte identiske etterkrigsmål' },
      { en: 'Ideological and strategic differences suppressed during the war re-emerged once Germany was defeated', no: 'Ideologiske og strategiske forskjeller som ble undertrykt under krigen dukket opp igjen da Tyskland var beseiret' }
    ],
    correct: 3,
    explanation: {
      en: 'The Allied coalition was a marriage of convenience; once Germany fell, deep ideological divisions between liberal democracy and Soviet communism rapidly reasserted themselves.',
      no: 'Den allierte koalisjonen var et fornuftsekteskap; da Tyskland falt, hevdet de dype ideologiske skillelinjene mellom liberal demokrati og sovjetisk kommunisme seg raskt på nytt.'
    },
    tags: ['cold-war', 'alliances', 'tensions']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'How did World War II accelerate decolonization movements after 1945?',
      no: 'Hvordan akselererte andre verdenskrig avkoloniseringsbevegelsene etter 1945?'
    },
    answers: [
      { en: 'The war reversed earlier independence movements in Asia and Africa', no: 'Krigen reverserte tidligere uavhengighetsbevegelser i Asia og Afrika' },
      { en: 'Decolonization only became a significant phenomenon in the 1980s', no: 'Avkolonisering ble bare et viktig fenomen på 1980-tallet' },
      { en: 'Colonial peoples remained loyal to European powers after the war', no: 'Koloniale folk forble lojale mot europeiske makter etter krigen' },
      { en: 'The war exposed European weakness, empowered nationalist movements, and depleted colonial powers economically', no: 'Krigen avslørte europeisk svakhet, styrket nasjonalistiske bevegelser og tappet kolonimaktene for ressurser' }
    ],
    correct: 3,
    explanation: {
      en: 'Japanese victories over European powers in Asia shattered the myth of white supremacy; meanwhile, war-weakened European economies could no longer sustain empires.',
      no: 'Japanske seire over europeiske makter i Asia knuste myten om hvit overlegenhet; i mellomtiden kunne krigssvakte europeiske økonomier ikke lenger opprettholde imperier.'
    },
    tags: ['decolonization', 'empires', 'consequences']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'In what sense was World War II fundamentally an ideological war?',
      no: 'I hvilken forstand var andre verdenskrig fundamentalt en ideologisk krig?'
    },
    answers: [
      { en: 'Ideology played no role compared to purely economic and territorial interests', no: 'Ideologi spilte ingen rolle sammenlignet med rent økonomiske og territorielle interesser' },
      { en: 'Both sides shared the same political goals and ideology', no: 'Begge sider delte de samme politiske mål og ideologi' },
      { en: 'Only Japan fought primarily for ideological reasons', no: 'Bare Japan kjempet primært av ideologiske grunner' },
      { en: 'The conflict embodied competing visions of fascism, communism, and liberal democracy', no: 'Konflikten legemliggjorde konkurrerende visjoner om fascisme, kommunisme og liberal demokrati' }
    ],
    correct: 3,
    explanation: {
      en: 'The war was fought not just over territory but over fundamentally different visions of how society should be organized: Nazi racial empire, Soviet communism, and liberal democracy.',
      no: 'Krigen ble ikke bare utkjempet om territorium, men om fundamentalt forskjellige visjoner for hvordan samfunnet skulle organiseres: nazistisk raseimperium, sovjetisk kommunisme og liberal demokrati.'
    },
    tags: ['ideology', 'fascism', 'communism', 'democracy']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What debate exists around certain Allied actions during World War II?',
      no: 'Hvilken debatt finnes rundt visse allierte handlinger under andre verdenskrig?'
    },
    answers: [
      { en: 'Allied war crimes were formally prosecuted at Nuremberg alongside Axis crimes', no: 'Allierte krigsforbrytelser ble formelt straffeforfølgt ved Nürnberg side om side med akseforbryterne' },
      { en: 'No Allied actions have ever been seriously questioned by historians', no: 'Ingen allierte handlinger har noen gang blitt seriøst stilt spørsmål ved av historikere' },
      { en: 'Historians only debate Axis crimes and never Allied actions', no: 'Historikere debatterer bare akseforbryterne og aldri allierte handlinger' },
      { en: 'Critics argue that mass civilian bombing and treatment of prisoners raise moral questions alongside Axis atrocities', no: 'Kritikere hevder at massevis sivil bombing og behandling av fanger reiser moralske spørsmål ved siden av aksegrusomhetene' }
    ],
    correct: 3,
    explanation: {
      en: 'The firebombing of Dresden, Tokyo, and other cities, as well as Soviet treatment of German prisoners, have all been subjects of historical and ethical debate.',
      no: 'Brannbombingen av Dresden, Tokyo og andre byer, samt sovjetisk behandling av tyske fanger, har alle vært gjenstand for historisk og etisk debatt.'
    },
    tags: ['allied-actions', 'ethics', 'debate']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'Which combination of factors best explains why Germany was ultimately defeated?',
      no: 'Hvilken kombinasjon av faktorer forklarer best hvorfor Tyskland til syvende og sist ble beseiret?'
    },
    answers: [
      { en: 'Overextension across multiple fronts, Soviet resilience, and Allied industrial superiority', no: 'Overekspansjon over flere fronter, sovjetisk utholdenhet og alliert industriell overlegenhet' },
      { en: 'A sudden catastrophic lack of military leadership in 1943', no: 'En plutselig katastrofal mangel på militært lederskap i 1943' },
      { en: 'Complete economic collapse that occurred in 1940', no: 'Fullstendig økonomisk kollaps som inntraff i 1940' },
      { en: 'An internal German political revolution that overthrew Hitler before the war\'s end', no: 'En intern tysk politisk revolusjon som styrtet Hitler før krigens slutt' }
    ],
    correct: 0,
    explanation: {
      en: 'Most historians cite Germany\'s two-front war, the failure of Barbarossa, Allied economic dominance, and the Soviet Union\'s resilience as the decisive combination.',
      no: 'De fleste historikere nevner Tysklands tokrigfront, Barbarossas fiasko, alliert økonomisk dominans og Sovjetunionens utholdenhet som den avgjørende kombinasjonen.'
    },
    tags: ['germany', 'defeat', 'causes']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What role did Allied codebreaking, including breaking the Enigma cipher, play in the outcome of the war?',
      no: 'Hvilken rolle spilte alliert kodeknekking, inkludert knekking av Enigma-koden, i krigens utfall?'
    },
    answers: [
      { en: 'Intelligence operations had no measurable effect on the war\'s duration', no: 'Etterretningsoperasjoner hadde ingen målbar effekt på krigens varighet' },
      { en: 'Germany successfully broke all major Allied codes throughout the war', no: 'Tyskland knekte vellykket alle større allierte koder gjennom hele krigen' },
      { en: 'The Enigma machine was captured and broken before the war even began', no: 'Enigma-maskinen ble tatt og knekt allerede før krigen begynte' },
      { en: 'Allied codebreaking provided critical intelligence on German operations, significantly shortening the conflict', no: 'Alliert kodeknekking ga kritisk etterretning om tyske operasjoner og forkortet konflikten betydelig' }
    ],
    correct: 3,
    explanation: {
      en: 'The Ultra intelligence derived from breaking Enigma allowed the Allies to anticipate German movements; historians estimate it shortened the war by up to two years.',
      no: 'Ultra-etterretningen fra knekking av Enigma gjorde det mulig for de allierte å forutse tyske bevegelser; historikere anslår at den forkortet krigen med inntil to år.'
    },
    tags: ['intelligence', 'enigma', 'codebreaking']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'How do historians compare Japanese and German conduct and war aims during World War II?',
      no: 'Hvordan sammenligner historikere japansk og tysk atferd og krigsmål under andre verdenskrig?'
    },
    answers: [
      { en: 'Only Germany committed war crimes; Japan fought entirely within the laws of war', no: 'Bare Tyskland begikk krigsforbrytelser; Japan kjempet fullstendig innenfor krigens lover' },
      { en: 'Japan and Germany had completely identical war aims in every respect', no: 'Japan og Tyskland hadde fullstendig identiske krigsmål i enhver henseende' },
      { en: 'Both pursued ideologically driven expansion involving mass atrocities, though in distinct strategic and cultural contexts', no: 'Begge forfulgte ideologisk drevet ekspansjon som involverte masseovergrep, men i ulike strategiske og kulturelle kontekster' },
      { en: 'German crimes were entirely different in nature from all Japanese actions', no: 'Tyske forbrytelser var fullstendig forskjellige i natur fra alle japanske handlinger' }
    ],
    correct: 2,
    explanation: {
      en: 'Both powers committed massive atrocities — the Holocaust and Nanjing massacre being defining examples — but operated in different ideological frameworks and geographies.',
      no: 'Begge makter begikk massive overgrep — Holokaust og Nanjing-massakren er definerende eksempler — men opererte i ulike ideologiske rammeverk og geografiske kontekster.'
    },
    tags: ['japan', 'germany', 'war-crimes', 'comparison']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What economic and industrial factors best explain the Allied victory in World War II?',
      no: 'Hvilke økonomiske og industrielle faktorer forklarer best alliert seier i andre verdenskrig?'
    },
    answers: [
      { en: 'Industrial capacity played only a minor role compared to troop numbers and morale', no: 'Industrikapasitet spilte bare en mindre rolle sammenlignet med troppetall og moral' },
      { en: 'Germany had a larger industrial base than all Allied powers combined', no: 'Tyskland hadde en større industribase enn alle allierte makter til sammen' },
      { en: 'Only Soviet industrial output contributed meaningfully to Allied victory', no: 'Bare sovjetisk industriell produksjon bidro meningsfylt til alliert seier' },
      { en: 'The Allied powers combined vastly superior industrial output, particularly from the United States, which sustained the war effort across all theatres', no: 'De allierte maktene kombinerte langt overlegen industriell produksjon, særlig fra USA, som opprettholdt krigsinnsatsen på tvers av alle fronter' }
    ],
    correct: 3,
    explanation: {
      en: 'The US alone produced more war material than all Axis powers combined, making the war ultimately one of industrial attrition the Axis could not win.',
      no: 'USA alene produserte mer krigsmateriell enn alle aksemaktene til sammen, noe som gjorde krigen til slutt til en industriell utmattelseskrig aksemaktene ikke kunne vinne.'
    },
    tags: ['industry', 'economy', 'victory']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'How did World War II reshape the postwar global order?',
      no: 'Hvordan omformet andre verdenskrig den globale etterkrigsordenen?'
    },
    answers: [
      { en: 'The war changed only Europe\'s internal political arrangements', no: 'Krigen endret bare Europas interne politiske ordninger' },
      { en: 'The postwar world closely resembled the prewar political order', no: 'Etterkrigstidens verden lignet nøye på den politiske ordenen fra før krigen' },
      { en: 'The war preserved European dominance over global affairs', no: 'Krigen bevarte europeisk dominans over globale anliggender' },
      { en: 'The war produced the United Nations, the Cold War, decolonization, and the rise of American and Soviet global power', no: 'Krigen produserte FN, den kalde krigen, avkolonisering og fremveksten av amerikansk og sovjetisk global makt' }
    ],
    correct: 3,
    explanation: {
      en: 'WWII fundamentally remade the world: European empires declined, two superpowers emerged, the UN was founded, and a nuclear-armed Cold War bipolar order was established.',
      no: 'Andre verdenskrig omformet verden grunnleggende: Europeiske imperier forfalt, to supermakter oppsto, FN ble grunnlagt, og en atomvæpnet kald krig bipolær orden ble etablert.'
    },
    tags: ['postwar', 'global-order', 'consequences']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'How did Soviet and Western Allied military strategies differ during World War II?',
      no: 'Hvordan skilte sovjetisk og vestalliert militærstrategi seg fra hverandre under andre verdenskrig?'
    },
    answers: [
      { en: 'Western Allies bore the primary burden of land combat in Europe', no: 'Vestallierte bar den primære byrden av landkamp i Europa' },
      { en: 'The Soviet Union and Western Allies used completely identical strategies', no: 'Sovjetunionen og vestallierte brukte fullstendig identiske strategier' },
      { en: 'The Soviet Union focused primarily on the Pacific Theatre', no: 'Sovjetunionen fokuserte primært på Stillehavsregionen' },
      { en: 'The Soviets bore the main burden of land war in the East while the West emphasized naval power, air campaigns, and amphibious operations', no: 'Sovjeterne bar den største byrden av landkrig i øst, mens vesten la vekt på sjømakt, luftkampanjer og amfibieoperasjoner' }
    ],
    correct: 3,
    explanation: {
      en: 'Stalin repeatedly demanded a Second Front in the West; while the US and UK prioritized naval, aerial, and amphibious approaches, the USSR fought the largest land war in history.',
      no: 'Stalin krevde gjentatte ganger en andre front i vest; mens USA og Storbritannia prioriterte maritime, luftbårne og amfibietilnærminger, utkjempet Sovjetunionen den største landkrigen i historien.'
    },
    tags: ['strategy', 'comparison', 'allies']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'What debate exists around the nature of collaboration with Nazi occupiers across western Europe?',
      no: 'Hvilken debatt finnes rundt karakteren av kollaborasjon med nazistiske okkupanter i Vest-Europa?'
    },
    answers: [
      { en: 'Collaboration was significant only in France and nowhere else in western Europe', no: 'Kollaborasjon var bare viktig i Frankrike og ingen steder ellers i Vest-Europa' },
      { en: 'All collaboration in Europe was openly admitted and fully prosecuted after the war', no: 'All kollaborasjon i Europa ble åpent innrømmet og fullstendig straffeforfølgt etter krigen' },
      { en: 'Collaboration occurred only in Eastern Europe and not in western nations', no: 'Kollaborasjon fant bare sted i Øst-Europa og ikke i vestlige nasjoner' },
      { en: 'Historians debate the extent to which collaboration was ideologically motivated, opportunistic, or coerced', no: 'Historikere debatterer i hvilken grad kollaborasjon var ideologisk motivert, opportunistisk eller tvunget frem' }
    ],
    correct: 3,
    explanation: {
      en: 'Collaboration varied greatly: some acted from ideological sympathy, others from pragmatism or fear, making postwar moral judgments complex and contested.',
      no: 'Kollaborasjon varierte sterkt: noen handlet ut fra ideologisk sympati, andre ut fra pragmatisme eller frykt, noe som gjør moralske vurderinger etter krigen komplekse og omstridte.'
    },
    tags: ['collaboration', 'occupied-europe', 'debate']
  },
  {
    difficulty: 'hard',
    question: {
      en: 'Why is World War II considered a "total war" in ways that most earlier conflicts were not?',
      no: 'Hvorfor regnes andre verdenskrig som en "total krig" på måter som de fleste tidligere konflikter ikke var?'
    },
    answers: [
      { en: 'Earlier wars consistently involved far larger armies than WWII', no: 'Tidligere kriger involverte konsekvent langt større hærer enn andre verdenskrig' },
      { en: 'Total war simply means any armed conflict lasting more than four years', no: 'Total krig betyr rett og slett enhver væpnet konflikt som varer mer enn fire år' },
      { en: 'Earlier conflicts used more advanced technology than World War II', no: 'Tidligere konflikter brukte mer avansert teknologi enn andre verdenskrig' },
      { en: 'WWII mobilized entire economies and civilian populations, erasing the distinction between the front line and the home front', no: 'Andre verdenskrig mobiliserte hele økonomier og sivilbefolkninger og fjernet skillet mellom frontlinjen og hjemmefronten' }
    ],
    correct: 3,
    explanation: {
      en: 'In WWII, civilians were targeted by bombers, economies were fully militarized, and propaganda mobilized entire populations, creating a new kind of all-encompassing conflict.',
      no: 'I andre verdenskrig ble sivile angrepet av bombefly, økonomier ble fullstendig militarisert, og propaganda mobiliserte hele befolkninger, noe som skapte en ny type altomfattende konflikt.'
    },
    tags: ['total-war', 'historiography', 'comparison']
  }
      ]
    },
    {
      slug: 'post-war-world-order',
      name: { en: 'Post-war world order', no: 'Post-war world order' },
      questions: []
    },
    
    
  ]
};