import type { SeedSubcategory } from '../types';

export const theDigitalRevolution: SeedSubcategory = {
  slug: 'the-digital-revolution',
  name: { en: 'The Digital Revolution', no: 'The Digital Revolution' },
  modules: [
    {
      slug: 'computers',
      name: { en: 'Computers', no: 'Computers' },
      questions: []
    },
    {
      slug: 'internet',
      name: { en: 'Internet', no: 'Internet' },
      questions: []
    },
    {
      slug: 'smartphones',
      name: { en: 'Smartphones', no: 'Smartphones' },
      questions: []
    },
    {
      slug: 'artificial-intelligence',
      name: { en: 'Artificial intelligence', no: 'Artificial intelligence' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'What does the abbreviation "AI" stand for?',
            no: 'Hva står forkortelsen «AI» for?'
          },
          answers: [
            { en: 'Automated Internet', no: 'Automatisert internett' },
            { en: 'Artificial Intelligence', no: 'Kunstig intelligens' },
            { en: 'Advanced Information', no: 'Avansert informasjon' },
            { en: 'Applied Innovation', no: 'Anvendt innovasjon' }
          ],
          correct: 1,
          explanation: {
            en: 'AI stands for Artificial Intelligence, the simulation of human intelligence by machines.',
            no: 'AI står for kunstig intelligens (Artificial Intelligence), maskiners etterligning av menneskelig intelligens.'
          },
          tags: ['definition', 'ai']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who is often called the father of artificial intelligence and computer science?',
            no: 'Hvem blir ofte kalt faren til kunstig intelligens og informatikk?'
          },
          answers: [
            { en: 'Alan Turing', no: 'Alan Turing' },
            { en: 'Thomas Edison', no: 'Thomas Edison' },
            { en: 'Isaac Newton', no: 'Isaac Newton' },
            { en: 'Nikola Tesla', no: 'Nikola Tesla' }
          ],
          correct: 0,
          explanation: {
            en: 'Alan Turing laid theoretical foundations for computing and machine intelligence.',
            no: 'Alan Turing la det teoretiske grunnlaget for databehandling og maskinintelligens.'
          },
          tags: ['turing', 'people']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the name of the test proposed to judge if a machine can imitate human conversation?',
            no: 'Hva heter testen som ble foreslått for å avgjøre om en maskin kan etterligne menneskelig samtale?'
          },
          answers: [
            { en: 'The Moore test', no: 'Moore-testen' },
            { en: 'The Turing test', no: 'Turing-testen' },
            { en: 'The Pascal test', no: 'Pascal-testen' },
            { en: 'The Babbage test', no: 'Babbage-testen' }
          ],
          correct: 1,
          explanation: {
            en: 'The Turing test, proposed by Alan Turing in 1950, checks if a machine can pass as human in conversation.',
            no: 'Turing-testen, foreslått av Alan Turing i 1950, sjekker om en maskin kan oppfattes som et menneske i en samtale.'
          },
          tags: ['turing-test', 'concepts']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which decade was the term "artificial intelligence" first coined?',
            no: 'I hvilket tiår ble begrepet «kunstig intelligens» først tatt i bruk?'
          },
          answers: [
            { en: 'The 1950s', no: '1950-tallet' },
            { en: 'The 1980s', no: '1980-tallet' },
            { en: 'The 1920s', no: '1920-tallet' },
            { en: 'The 2000s', no: '2000-tallet' }
          ],
          correct: 0,
          explanation: {
            en: 'The term "artificial intelligence" was coined at the 1956 Dartmouth conference.',
            no: 'Begrepet «kunstig intelligens» ble laget på Dartmouth-konferansen i 1956.'
          },
          tags: ['history', 'dartmouth']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is "machine learning"?',
            no: 'Hva er «maskinlæring»?'
          },
          answers: [
            { en: 'Computers learning patterns from data', no: 'Datamaskiner som lærer mønstre fra data' },
            { en: 'Building physical machines by hand', no: 'Å bygge fysiske maskiner for hånd' },
            { en: 'Teaching humans to use computers', no: 'Å lære mennesker å bruke datamaskiner' },
            { en: 'Repairing broken hardware', no: 'Å reparere ødelagt maskinvare' }
          ],
          correct: 0,
          explanation: {
            en: 'Machine learning lets computers learn patterns from data instead of being explicitly programmed.',
            no: 'Maskinlæring lar datamaskiner lære mønstre fra data i stedet for å bli eksplisitt programmert.'
          },
          tags: ['machine-learning', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which IBM computer defeated world chess champion Garry Kasparov in 1997?',
            no: 'Hvilken IBM-datamaskin slo verdensmesteren i sjakk Garri Kasparov i 1997?'
          },
          answers: [
            { en: 'Watson', no: 'Watson' },
            { en: 'Deep Blue', no: 'Deep Blue' },
            { en: 'ENIAC', no: 'ENIAC' },
            { en: 'HAL', no: 'HAL' }
          ],
          correct: 1,
          explanation: {
            en: 'IBM’s Deep Blue beat world chess champion Garry Kasparov in 1997.',
            no: 'IBMs Deep Blue slo verdensmesteren i sjakk Garri Kasparov i 1997.'
          },
          tags: ['deep-blue', 'milestones']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a "chatbot"?',
            no: 'Hva er en «chatbot»?'
          },
          answers: [
            { en: 'A program that converses with users in natural language', no: 'Et program som samtaler med brukere på naturlig språk' },
            { en: 'A type of computer virus', no: 'En type datavirus' },
            { en: 'A physical cleaning robot', no: 'En fysisk rengjøringsrobot' },
            { en: 'A printer driver', no: 'En skriverdriver' }
          ],
          correct: 0,
          explanation: {
            en: 'A chatbot is software designed to hold conversations with people through text or voice.',
            no: 'En chatbot er programvare laget for å føre samtaler med mennesker gjennom tekst eller tale.'
          },
          tags: ['chatbot', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which of these is a common voice assistant powered by AI?',
            no: 'Hvilken av disse er en vanlig stemmeassistent drevet av AI?'
          },
          answers: [
            { en: 'Siri', no: 'Siri' },
            { en: 'Excel', no: 'Excel' },
            { en: 'Photoshop', no: 'Photoshop' },
            { en: 'Bluetooth', no: 'Bluetooth' }
          ],
          correct: 0,
          explanation: {
            en: 'Siri, like Alexa and Google Assistant, is an AI-powered voice assistant.',
            no: 'Siri, i likhet med Alexa og Google Assistent, er en AI-drevet stemmeassistent.'
          },
          tags: ['voice-assistant', 'applications']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What kind of vehicle uses AI to drive without a human?',
            no: 'Hva slags kjøretøy bruker AI til å kjøre uten et menneske?'
          },
          answers: [
            { en: 'A self-driving car', no: 'En selvkjørende bil' },
            { en: 'A steam train', no: 'Et damptog' },
            { en: 'A sailboat', no: 'En seilbåt' },
            { en: 'A bicycle', no: 'En sykkel' }
          ],
          correct: 0,
          explanation: {
            en: 'Self-driving (autonomous) cars use AI to perceive their surroundings and navigate.',
            no: 'Selvkjørende (autonome) biler bruker AI til å oppfatte omgivelsene og navigere.'
          },
          tags: ['self-driving', 'applications']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does a "neural network" in AI loosely imitate?',
            no: 'Hva etterligner et «nevralt nettverk» i AI løst sett?'
          },
          answers: [
            { en: 'The human brain', no: 'Den menneskelige hjernen' },
            { en: 'A car engine', no: 'En bilmotor' },
            { en: 'A telephone line', no: 'En telefonlinje' },
            { en: 'A river system', no: 'Et elvesystem' }
          ],
          correct: 0,
          explanation: {
            en: 'Artificial neural networks are loosely inspired by the network of neurons in the brain.',
            no: 'Kunstige nevrale nettverk er løst inspirert av nettverket av nevroner i hjernen.'
          },
          tags: ['neural-networks', 'concepts']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is "generative AI" mainly used for?',
            no: 'Hva brukes «generativ AI» hovedsakelig til?'
          },
          answers: [
            { en: 'Creating new text, images, or audio', no: 'Å lage ny tekst, nye bilder eller lyd' },
            { en: 'Cooling computer servers', no: 'Å kjøle ned dataservere' },
            { en: 'Measuring electricity', no: 'Å måle elektrisitet' },
            { en: 'Storing physical files', no: 'Å lagre fysiske dokumenter' }
          ],
          correct: 0,
          explanation: {
            en: 'Generative AI produces new content such as text, images, music, or code.',
            no: 'Generativ AI produserer nytt innhold som tekst, bilder, musikk eller kode.'
          },
          tags: ['generative-ai', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'A program that plays the role of an opponent in a video game often uses what?',
            no: 'Et program som spiller rollen som motstander i et videospill, bruker ofte hva?'
          },
          answers: [
            { en: 'Artificial intelligence', no: 'Kunstig intelligens' },
            { en: 'A printer', no: 'En skriver' },
            { en: 'A microphone', no: 'En mikrofon' },
            { en: 'A barcode scanner', no: 'En strekkodeleser' }
          ],
          correct: 0,
          explanation: {
            en: 'Video games commonly use AI to control non-player characters and opponents.',
            no: 'Videospill bruker ofte AI til å styre datastyrte figurer og motstandere.'
          },
          tags: ['games', 'applications']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a large dataset used to train an AI model often called?',
            no: 'Hva kalles ofte et stort datasett som brukes til å trene en AI-modell?'
          },
          answers: [
            { en: 'Training data', no: 'Treningsdata' },
            { en: 'Cooling data', no: 'Kjøledata' },
            { en: 'Backup tape', no: 'Sikkerhetskopibånd' },
            { en: 'Firmware', no: 'Fastvare' }
          ],
          correct: 0,
          explanation: {
            en: 'AI models learn from large collections of examples known as training data.',
            no: 'AI-modeller lærer av store samlinger med eksempler kjent som treningsdata.'
          },
          tags: ['training-data', 'concepts']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which technology lets AI recognize objects or faces in photographs?',
            no: 'Hvilken teknologi lar AI gjenkjenne objekter eller ansikter i fotografier?'
          },
          answers: [
            { en: 'Computer vision', no: 'Datasyn (computer vision)' },
            { en: 'Spreadsheet macros', no: 'Regnearkmakroer' },
            { en: 'Fiber optics', no: 'Fiberoptikk' },
            { en: 'Disk defragmentation', no: 'Diskdefragmentering' }
          ],
          correct: 0,
          explanation: {
            en: 'Computer vision enables AI systems to interpret and recognize images.',
            no: 'Datasyn gjør at AI-systemer kan tolke og gjenkjenne bilder.'
          },
          tags: ['computer-vision', 'applications']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'A popular AI chatbot released by OpenAI in late 2022 was called what?',
            no: 'En populær AI-chatbot lansert av OpenAI mot slutten av 2022 het hva?'
          },
          answers: [
            { en: 'ChatGPT', no: 'ChatGPT' },
            { en: 'Windows', no: 'Windows' },
            { en: 'Android', no: 'Android' },
            { en: 'Firefox', no: 'Firefox' }
          ],
          correct: 0,
          explanation: {
            en: 'OpenAI released ChatGPT in late 2022, bringing generative AI to a wide audience.',
            no: 'OpenAI lanserte ChatGPT mot slutten av 2022 og brakte generativ AI til et bredt publikum.'
          },
          tags: ['chatgpt', 'milestones']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does machine learning differ from traditional programming?',
            no: 'Hvordan skiller maskinlæring seg fra tradisjonell programmering?'
          },
          answers: [
            { en: 'It learns rules from data rather than following hand-written rules', no: 'Den lærer regler fra data i stedet for å følge håndskrevne regler' },
            { en: 'It never uses computers', no: 'Den bruker aldri datamaskiner' },
            { en: 'It requires no data at all', no: 'Den krever ingen data i det hele tatt' },
            { en: 'It only works on paper', no: 'Den fungerer bare på papir' }
          ],
          correct: 0,
          explanation: {
            en: 'In machine learning, models infer patterns from data instead of relying solely on explicit instructions.',
            no: 'I maskinlæring utleder modeller mønstre fra data i stedet for å være avhengig av eksplisitte instruksjoner alene.'
          },
          tags: ['machine-learning', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did the "AI winter" periods occur in the past?',
            no: 'Hvorfor oppstod periodene med «AI-vinter» tidligere?'
          },
          answers: [
            { en: 'Funding fell when AI failed to meet high expectations', no: 'Finansieringen falt da AI ikke innfridde høye forventninger' },
            { en: 'Computers were banned worldwide', no: 'Datamaskiner ble forbudt over hele verden' },
            { en: 'Electricity became unavailable', no: 'Elektrisitet ble utilgjengelig' },
            { en: 'AI was made illegal', no: 'AI ble gjort ulovlig' }
          ],
          correct: 0,
          explanation: {
            en: 'AI winters were periods of reduced funding and interest after AI failed to live up to hype.',
            no: 'AI-vintre var perioder med redusert finansiering og interesse etter at AI ikke innfridde forventningene.'
          },
          tags: ['ai-winter', 'history']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What development greatly accelerated AI progress in the 2010s?',
            no: 'Hvilken utvikling akselererte AI-fremgangen kraftig på 2010-tallet?'
          },
          answers: [
            { en: 'Deep learning with large datasets and powerful GPUs', no: 'Dyp læring med store datasett og kraftige GPU-er' },
            { en: 'The invention of the telegraph', no: 'Oppfinnelsen av telegrafen' },
            { en: 'The decline of the internet', no: 'Internettets tilbakegang' },
            { en: 'A ban on data collection', no: 'Et forbud mot datainnsamling' }
          ],
          correct: 0,
          explanation: {
            en: 'Deep learning, fueled by big data and GPU computing power, drove the 2010s AI boom.',
            no: 'Dyp læring, drevet av store datamengder og GPU-regnekraft, drev AI-boomen på 2010-tallet.'
          },
          tags: ['deep-learning', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a common concern about bias in AI systems?',
            no: 'Hva er en vanlig bekymring knyttet til skjevhet i AI-systemer?'
          },
          answers: [
            { en: 'They can reproduce unfair patterns present in their training data', no: 'De kan gjenskape urettferdige mønstre som finnes i treningsdataene' },
            { en: 'They always make perfectly neutral decisions', no: 'De tar alltid helt nøytrale beslutninger' },
            { en: 'They cannot process any data', no: 'De kan ikke behandle noen data' },
            { en: 'They refuse to run on computers', no: 'De nekter å kjøre på datamaskiner' }
          ],
          correct: 0,
          explanation: {
            en: 'AI can inherit and amplify biases found in the data it is trained on.',
            no: 'AI kan arve og forsterke skjevheter som finnes i dataene den trenes på.'
          },
          tags: ['bias', 'ethics']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How is "narrow AI" different from "general AI"?',
            no: 'Hvordan skiller «smal AI» seg fra «generell AI»?'
          },
          answers: [
            { en: 'Narrow AI does specific tasks; general AI would handle any task like a human', no: 'Smal AI gjør spesifikke oppgaver; generell AI ville håndtere enhver oppgave som et menneske' },
            { en: 'Narrow AI is larger than general AI', no: 'Smal AI er større enn generell AI' },
            { en: 'They are exactly the same thing', no: 'De er nøyaktig det samme' },
            { en: 'General AI only plays chess', no: 'Generell AI spiller bare sjakk' }
          ],
          correct: 0,
          explanation: {
            en: 'Today’s AI is "narrow," excelling at specific tasks, while human-level general AI does not yet exist.',
            no: 'Dagens AI er «smal» og dyktig på spesifikke oppgaver, mens generell AI på menneskelig nivå ennå ikke finnes.'
          },
          tags: ['narrow-ai', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why are huge amounts of data important for modern AI?',
            no: 'Hvorfor er enorme datamengder viktige for moderne AI?'
          },
          answers: [
            { en: 'More examples generally help models learn better patterns', no: 'Flere eksempler hjelper vanligvis modeller med å lære bedre mønstre' },
            { en: 'Data makes computers run cooler', no: 'Data gjør at datamaskiner kjører kjøligere' },
            { en: 'Data replaces the need for electricity', no: 'Data erstatter behovet for elektrisitet' },
            { en: 'Data slows the models down on purpose', no: 'Data bremser modellene med vilje' }
          ],
          correct: 0,
          explanation: {
            en: 'Large datasets let models learn more robust and accurate patterns.',
            no: 'Store datasett lar modeller lære mer robuste og nøyaktige mønstre.'
          },
          tags: ['big-data', 'context']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is one major way AI is changing the job market?',
            no: 'Hva er en viktig måte AI endrer arbeidsmarkedet på?'
          },
          answers: [
            { en: 'Automating some tasks while creating demand for new skills', no: 'Den automatiserer noen oppgaver mens den skaper behov for nye ferdigheter' },
            { en: 'Eliminating the need for any workers everywhere', no: 'Den fjerner behovet for alle arbeidere overalt' },
            { en: 'Making computers obsolete', no: 'Den gjør datamaskiner overflødige' },
            { en: 'Stopping all economic growth', no: 'Den stopper all økonomisk vekst' }
          ],
          correct: 0,
          explanation: {
            en: 'AI automates certain tasks but also shifts demand toward new roles and skills.',
            no: 'AI automatiserer visse oppgaver, men forskyver også etterspørselen mot nye roller og ferdigheter.'
          },
          tags: ['jobs', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is an "algorithm" in the context of AI?',
            no: 'Hva er en «algoritme» i sammenheng med AI?'
          },
          answers: [
            { en: 'A step-by-step procedure for solving a problem', no: 'En trinnvis fremgangsmåte for å løse et problem' },
            { en: 'A type of computer monitor', no: 'En type dataskjerm' },
            { en: 'A brand of laptop', no: 'Et merke bærbar PC' },
            { en: 'A unit of electricity', no: 'En enhet for elektrisitet' }
          ],
          correct: 0,
          explanation: {
            en: 'An algorithm is a defined sequence of steps a computer follows to solve a problem.',
            no: 'En algoritme er en definert rekke trinn en datamaskin følger for å løse et problem.'
          },
          tags: ['algorithm', 'definition']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does AI help in medicine today?',
            no: 'Hvordan hjelper AI til i medisin i dag?'
          },
          answers: [
            { en: 'Assisting in analyzing scans and detecting diseases', no: 'Den hjelper til med å analysere skanninger og oppdage sykdommer' },
            { en: 'Replacing all hospitals', no: 'Den erstatter alle sykehus' },
            { en: 'Removing the need for any medicine', no: 'Den fjerner behovet for all medisin' },
            { en: 'Banning medical research', no: 'Den forbyr medisinsk forskning' }
          ],
          correct: 0,
          explanation: {
            en: 'AI assists doctors by analyzing medical images and spotting patterns linked to disease.',
            no: 'AI hjelper leger ved å analysere medisinske bilder og oppdage mønstre knyttet til sykdom.'
          },
          tags: ['medicine', 'applications']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does it mean when an AI model "hallucinates"?',
            no: 'Hva betyr det når en AI-modell «hallusinerer»?'
          },
          answers: [
            { en: 'It produces confident but false or made-up information', no: 'Den produserer selvsikker, men falsk eller oppdiktet informasjon' },
            { en: 'It physically overheats', no: 'Den blir fysisk overopphetet' },
            { en: 'It shuts down permanently', no: 'Den slår seg av for godt' },
            { en: 'It refuses to answer anything', no: 'Den nekter å svare på noe' }
          ],
          correct: 0,
          explanation: {
            en: 'Hallucination is when a model generates plausible-sounding but incorrect information.',
            no: 'Hallusinasjon er når en modell genererer troverdig, men feilaktig informasjon.'
          },
          tags: ['hallucination', 'limitations']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why are "large language models" significant?',
            no: 'Hvorfor er «store språkmodeller» betydningsfulle?'
          },
          answers: [
            { en: 'They can generate and understand human-like text at scale', no: 'De kan generere og forstå menneskelignende tekst i stor skala' },
            { en: 'They can only translate Latin', no: 'De kan bare oversette latin' },
            { en: 'They work without any computers', no: 'De fungerer uten datamaskiner' },
            { en: 'They store no information', no: 'De lagrer ingen informasjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Large language models, trained on vast text, can write, summarize, and answer in natural language.',
            no: 'Store språkmodeller, trent på enorme tekstmengder, kan skrive, oppsummere og svare på naturlig språk.'
          },
          tags: ['llm', 'context']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What connection exists between AI progress and computing hardware?',
            no: 'Hvilken sammenheng finnes mellom AI-fremgang og datamaskinvare?'
          },
          answers: [
            { en: 'Faster chips made it possible to train far larger models', no: 'Raskere brikker gjorde det mulig å trene langt større modeller' },
            { en: 'Hardware has no effect on AI', no: 'Maskinvare har ingen effekt på AI' },
            { en: 'AI only runs on paper', no: 'AI kjører bare på papir' },
            { en: 'Slower chips improved AI most', no: 'Tregere brikker forbedret AI mest' }
          ],
          correct: 0,
          explanation: {
            en: 'Advances in processors, especially GPUs, enabled training of much larger AI models.',
            no: 'Fremskritt innen prosessorer, særlig GPU-er, muliggjorde trening av langt større AI-modeller.'
          },
          tags: ['hardware', 'connections']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a "deepfake"?',
            no: 'Hva er en «deepfake»?'
          },
          answers: [
            { en: 'AI-generated fake media that looks or sounds real', no: 'AI-generert falskt medieinnhold som ser ekte ut eller høres ekte ut' },
            { en: 'A very deep database', no: 'En svært dyp database' },
            { en: 'A broken hard drive', no: 'En ødelagt harddisk' },
            { en: 'A secure password', no: 'Et sikkert passord' }
          ],
          correct: 0,
          explanation: {
            en: 'Deepfakes use AI to create convincing but fabricated images, audio, or video.',
            no: 'Deepfakes bruker AI til å lage overbevisende, men oppdiktede bilder, lyd eller video.'
          },
          tags: ['deepfake', 'ethics']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the 1956 Dartmouth conference influence AI?',
            no: 'Hvordan påvirket Dartmouth-konferansen i 1956 AI?'
          },
          answers: [
            { en: 'It launched AI as a formal field of research', no: 'Den lanserte AI som et formelt forskningsfelt' },
            { en: 'It banned AI research', no: 'Den forbød AI-forskning' },
            { en: 'It invented the internet', no: 'Den oppfant internett' },
            { en: 'It ended computer science', no: 'Den avsluttet informatikken' }
          ],
          correct: 0,
          explanation: {
            en: 'The Dartmouth conference of 1956 is widely seen as the founding event of AI as a field.',
            no: 'Dartmouth-konferansen i 1956 regnes i stor grad som den grunnleggende hendelsen for AI som fagfelt.'
          },
          tags: ['dartmouth', 'history']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do experts debate whether passing the Turing test proves true intelligence?',
            no: 'Hvorfor diskuterer eksperter om det å bestå Turing-testen beviser ekte intelligens?'
          },
          answers: [
            { en: 'Imitating conversation may not require genuine understanding', no: 'Å etterligne en samtale krever kanskje ikke ekte forståelse' },
            { en: 'The test cannot be run on computers', no: 'Testen kan ikke kjøres på datamaskiner' },
            { en: 'No machine has ever attempted it', no: 'Ingen maskin har noensinne forsøkt den' },
            { en: 'It measures physical strength', no: 'Den måler fysisk styrke' }
          ],
          correct: 0,
          explanation: {
            en: 'Critics like Searle’s "Chinese Room" argue a system can imitate language without understanding it.',
            no: 'Kritikere som Searles «kinesiske rom» hevder at et system kan etterligne språk uten å forstå det.'
          },
          tags: ['turing-test', 'philosophy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the "alignment problem" in AI safety?',
            no: 'Hva er «justeringsproblemet» (alignment) innen AI-sikkerhet?'
          },
          answers: [
            { en: 'Ensuring AI systems pursue goals that match human values', no: 'Å sikre at AI-systemer forfølger mål som samsvarer med menneskelige verdier' },
            { en: 'Lining up servers in a data center', no: 'Å stille opp servere i et datasenter' },
            { en: 'Adjusting a monitor’s position', no: 'Å justere posisjonen til en skjerm' },
            { en: 'Calibrating a printer', no: 'Å kalibrere en skriver' }
          ],
          correct: 0,
          explanation: {
            en: 'The alignment problem concerns making powerful AI act in accordance with human intentions and values.',
            no: 'Justeringsproblemet handler om å få kraftig AI til å handle i tråd med menneskelige intensjoner og verdier.'
          },
          tags: ['alignment', 'safety']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is explainability a challenge for deep neural networks?',
            no: 'Hvorfor er forklarbarhet en utfordring for dype nevrale nettverk?'
          },
          answers: [
            { en: 'Their internal decision process is often a hard-to-interpret "black box"', no: 'Deres interne beslutningsprosess er ofte en vanskelig tolkbar «svart boks»' },
            { en: 'They keep detailed written logs of every thought', no: 'De fører detaljerte skriftlige logger over hver tanke' },
            { en: 'They are too simple to study', no: 'De er for enkle til å studere' },
            { en: 'They never make predictions', no: 'De gjør aldri prediksjoner' }
          ],
          correct: 0,
          explanation: {
            en: 'Deep networks involve millions of parameters, making their reasoning hard to interpret.',
            no: 'Dype nettverk involverer millioner av parametere, noe som gjør resonnementet deres vanskelig å tolke.'
          },
          tags: ['explainability', 'limitations']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do scholars debate the long-term economic impact of AI automation?',
            no: 'Hvordan diskuterer forskere de langsiktige økonomiske virkningene av AI-automatisering?'
          },
          answers: [
            { en: 'Some predict mass displacement, others net new job creation', no: 'Noen spår masseforflytning, andre netto skaping av nye jobber' },
            { en: 'All agree it will have no effect', no: 'Alle er enige om at den ikke vil ha noen effekt' },
            { en: 'They only study ancient economies', no: 'De studerer bare antikke økonomier' },
            { en: 'They believe money will disappear', no: 'De mener penger vil forsvinne' }
          ],
          correct: 0,
          explanation: {
            en: 'Economists disagree on whether automation will cause lasting unemployment or create new kinds of work.',
            no: 'Økonomer er uenige om automatisering vil føre til varig arbeidsledighet eller skape nye typer arbeid.'
          },
          tags: ['economy', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is meant by the "technological singularity"?',
            no: 'Hva menes med «den teknologiske singulariteten»?'
          },
          answers: [
            { en: 'A hypothetical point where AI surpasses human intelligence and rapidly self-improves', no: 'Et hypotetisk punkt der AI overgår menneskelig intelligens og raskt forbedrer seg selv' },
            { en: 'A single working computer', no: 'En enkelt fungerende datamaskin' },
            { en: 'The first internet connection', no: 'Den første internettforbindelsen' },
            { en: 'A type of programming language', no: 'En type programmeringsspråk' }
          ],
          correct: 0,
          explanation: {
            en: 'The singularity is a speculative scenario in which self-improving AI triggers runaway technological growth.',
            no: 'Singulariteten er et spekulativt scenario der selvforbedrende AI utløser ukontrollert teknologisk vekst.'
          },
          tags: ['singularity', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is data privacy a central ethical issue in modern AI?',
            no: 'Hvorfor er datavern et sentralt etisk spørsmål i moderne AI?'
          },
          answers: [
            { en: 'Training and using AI often relies on vast amounts of personal data', no: 'Trening og bruk av AI bygger ofte på enorme mengder personopplysninger' },
            { en: 'AI never touches any data', no: 'AI berører aldri data' },
            { en: 'Privacy laws apply only to printers', no: 'Personvernlover gjelder bare skrivere' },
            { en: 'Data cannot be stored digitally', no: 'Data kan ikke lagres digitalt' }
          ],
          correct: 0,
          explanation: {
            en: 'AI systems often process personal data, raising concerns about consent, surveillance, and misuse.',
            no: 'AI-systemer behandler ofte personopplysninger, noe som reiser bekymringer om samtykke, overvåking og misbruk.'
          },
          tags: ['privacy', 'ethics']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does the "Chinese Room" argument challenge claims of machine understanding?',
            no: 'Hvordan utfordrer «det kinesiske rom»-argumentet påstander om maskinforståelse?'
          },
          answers: [
            { en: 'It argues following rules to produce output is not the same as understanding meaning', no: 'Det hevder at å følge regler for å produsere svar ikke er det samme som å forstå mening' },
            { en: 'It proves machines are conscious', no: 'Det beviser at maskiner er bevisste' },
            { en: 'It shows computers cannot store data', no: 'Det viser at datamaskiner ikke kan lagre data' },
            { en: 'It is about translating road signs', no: 'Det handler om å oversette veiskilt' }
          ],
          correct: 0,
          explanation: {
            en: 'John Searle’s thought experiment suggests symbol manipulation alone does not constitute genuine understanding.',
            no: 'John Searles tankeeksperiment antyder at symbolmanipulasjon alene ikke utgjør ekte forståelse.'
          },
          tags: ['chinese-room', 'philosophy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do some researchers worry about concentration of AI power in a few companies?',
            no: 'Hvorfor er enkelte forskere bekymret for at AI-makt konsentreres hos noen få selskaper?'
          },
          answers: [
            { en: 'Massive data and computing needs favor a small number of large firms', no: 'Enorme data- og regnekraftbehov favoriserer et lite antall store selskaper' },
            { en: 'AI can only be built by governments', no: 'AI kan bare bygges av myndigheter' },
            { en: 'Small startups control all AI', no: 'Små oppstartsbedrifter kontrollerer all AI' },
            { en: 'There is no cost to building AI', no: 'Det koster ingenting å bygge AI' }
          ],
          correct: 0,
          explanation: {
            en: 'The huge resources needed for frontier AI concentrate influence among a few well-funded organizations.',
            no: 'De enorme ressursene som kreves for ledende AI, konsentrerer innflytelsen hos noen få velfinansierte organisasjoner.'
          },
          tags: ['power', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a key difficulty in regulating AI internationally?',
            no: 'Hva er en sentral vanskelighet ved å regulere AI internasjonalt?'
          },
          answers: [
            { en: 'Countries differ on rules, and the technology evolves faster than laws', no: 'Land er uenige om regler, og teknologien utvikler seg raskere enn lovene' },
            { en: 'AI is identical in every country by law', no: 'AI er identisk i alle land ifølge loven' },
            { en: 'There are no governments interested in it', no: 'Ingen myndigheter er interessert i det' },
            { en: 'AI cannot cross borders', no: 'AI kan ikke krysse landegrenser' }
          ],
          correct: 0,
          explanation: {
            en: 'Differing national interests and fast-moving technology make global AI governance difficult.',
            no: 'Ulike nasjonale interesser og en teknologi i rask endring gjør global AI-styring vanskelig.'
          },
          tags: ['regulation', 'governance']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the question of AI consciousness considered scientifically difficult?',
            no: 'Hvorfor regnes spørsmålet om AI-bevissthet som vitenskapelig vanskelig?'
          },
          answers: [
            { en: 'There is no agreed definition or reliable test for consciousness', no: 'Det finnes ingen omforent definisjon eller pålitelig test for bevissthet' },
            { en: 'Consciousness can be measured with a ruler', no: 'Bevissthet kan måles med en linjal' },
            { en: 'All scientists already agree machines are conscious', no: 'Alle forskere er allerede enige om at maskiner er bevisste' },
            { en: 'Consciousness only applies to software', no: 'Bevissthet gjelder bare programvare' }
          ],
          correct: 0,
          explanation: {
            en: 'Without a clear definition or test for consciousness, claims about machine awareness remain unresolved.',
            no: 'Uten en klar definisjon eller test for bevissthet forblir påstander om maskinbevissthet uavklarte.'
          },
          tags: ['consciousness', 'philosophy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How might AI both help and harm efforts against misinformation?',
            no: 'Hvordan kan AI både hjelpe og skade arbeidet mot feilinformasjon?'
          },
          answers: [
            { en: 'It can detect false content but also generate convincing fakes', no: 'Den kan oppdage falskt innhold, men også generere overbevisende forfalskninger' },
            { en: 'It can only ever tell the truth', no: 'Den kan bare fortelle sannheten' },
            { en: 'It has no role in information at all', no: 'Den har ingen rolle i informasjon i det hele tatt' },
            { en: 'It deletes the entire internet', no: 'Den sletter hele internett' }
          ],
          correct: 0,
          explanation: {
            en: 'AI can flag and filter misinformation, yet the same tools can mass-produce realistic fake content.',
            no: 'AI kan flagge og filtrere feilinformasjon, men de samme verktøyene kan masseprodusere realistisk falskt innhold.'
          },
          tags: ['misinformation', 'dual-use']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do critics caution against describing AI with human terms like "thinking" or "knowing"?',
            no: 'Hvorfor advarer kritikere mot å beskrive AI med menneskelige begreper som «å tenke» eller «å vite»?'
          },
          answers: [
            { en: 'Such language can overstate AI’s abilities and mislead the public', no: 'Slikt språk kan overdrive AIs evner og villede offentligheten' },
            { en: 'It makes AI run faster', no: 'Det får AI til å kjøre raskere' },
            { en: 'It is required by law', no: 'Det er påkrevd ved lov' },
            { en: 'It has no effect on understanding', no: 'Det har ingen innvirkning på forståelsen' }
          ],
          correct: 0,
          explanation: {
            en: 'Anthropomorphic language can create false impressions about what AI systems actually do.',
            no: 'Antropomorft språk kan skape feilaktige inntrykk av hva AI-systemer faktisk gjør.'
          },
          tags: ['anthropomorphism', 'debate']
        }
      ]
    },
    {
      slug: 'impact-on-society',
      name: { en: 'Impact on society', no: 'Impact on society' },
      questions: []
    }
  ]
};