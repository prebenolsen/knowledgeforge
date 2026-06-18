export default {
  app: {
    name: 'KnowledgeForge',
    tagline: 'Lær det du faktisk kan.'
  },
  nav: {
    home: 'Hjem',
    learn: 'Lær',
    review: 'Repetisjon',
    progress: 'Framgang'
  },
  auth: {
    signInGithub: 'Fortsett med GitHub',
    signInEmail: 'Fortsett med e-post',
    emailPlaceholder: 'deg@eksempel.no',
    passwordPlaceholder: 'Passord',
    signInPassword: 'Logg inn',
    signUpPassword: 'Opprett konto',
    signInError: 'Feil e-post eller passord.',
    signUpError: 'Kunne ikke opprette konto. E-posten er kanskje allerede i bruk.',
    needAccount: 'Har du ikke konto? Registrer deg',
    haveAccount: 'Har du allerede konto? Logg inn',
    confirmSent: 'Nesten i mål — sjekk innboksen for å bekrefte e-posten din, og logg deretter inn.',
    or: 'eller',
    signOut: 'Logg ut',
    welcome: 'Velkommen til KnowledgeForge',
    intro: 'En personlig læringsmotor som følger med på hva du kan og planlegger repetisjoner så det sitter.'
  },
  home: {
    greeting: 'Klar for å lære?',
    dueToday: 'Klart for repetisjon i dag',
    noReviews: 'Ingenting klart akkurat nå. Start en ny økt under.',
    startReview: 'Start repetisjon ({{count}})',
    browse: 'Bla i kategorier',
    takePlacement: 'Ta nivåtest',
    placementHint: 'Anslå nivået ditt på 20 spørsmål.'
  },
  categories: {
    title: 'Kategorier',
    modules: '{{count}} moduler',
    questions: '{{count}} spørsmål'
  },
  modules: {
    title: 'Underkategorier',
    chooseMode: 'Velg en øvingsmodus'
  },
  mode: {
    beginner: 'Nybegynner',
    intermediate: 'Middels',
    advanced: 'Avansert',
    mixed: 'Blandet',
    adaptive: 'Adaptiv',
    adaptiveHint: 'Justerer vanskelighetsgrad underveis.'
  },
  difficulty: {
    easy: 'Lett',
    medium: 'Middels',
    hard: 'Vanskelig'
  },
  quiz: {
    question: 'Spørsmål {{current}} av {{total}}',
    correct: 'Riktig',
    incorrect: 'Feil',
    correctAnswer: 'Riktig svar',
    explanation: 'Forklaring',
    next: 'Neste',
    finish: 'Fullfør',
    quit: 'Avslutt'
  },
  results: {
    title: 'Økt fullført',
    score: 'Du fikk {{correct}} av {{total}} riktige',
    accuracy: 'Treffsikkerhet',
    backHome: 'Tilbake til hjem',
    again: 'Øv igjen'
  },
  placement: {
    title: 'Nivåtest',
    intro: '20 spørsmål fordelt på lett, middels og vanskelig. Slapp av — dette anslår bare hvor du bør starte.',
    start: 'Start test',
    resultTitle: 'Ditt nivå',
    recommended: 'Anbefalt startnivå',
    basics: 'Grunnleggende',
    intermediate: 'Middels',
    advanced: 'Avansert',
    continue: 'Fortsett'
  },
  progress: {
    title: 'Din framgang',
    knowledgeMap: 'Kunnskapskart',
    overall: 'Samlet mestring',
    answered: 'Besvarte spørsmål',
    accuracy: 'Treffsikkerhet',
    weakTopics: 'Svake temaer',
    byDifficulty: 'Etter vanskelighetsgrad',
    easy: 'Lett',
    medium: 'Middels',
    hard: 'Vanskelig',
    noData: 'Svar på noen spørsmål for å bygge kunnskapskartet ditt.',
    geoTitle: 'Landatlas',
    geoBest: 'Beste poengsum: {{score}}'
  },
  shape: {
    untested: 'Ikke testet',
    surface: 'Overflatekunnskap',
    developing: 'Under utvikling',
    solid: 'Solid',
    mastered: 'Mestret'
  },
  geo: {
    title: 'Landatlas',
    chooseContinent: 'Velg et kontinent',
    chooseMode: 'Velg en modus',
    modeExplore: 'Utforsk',
    modeExploreHint: 'Trykk på et land og navngi det selv.',
    modeQuiz: 'Quiz',
    modeQuizHint: 'Et land lyser opp — du skriver navnet.',
    countries: '{{count}} land',
    tapPrompt: 'Trykk på et land på kartet for å navngi det.',
    questionProgress: 'Land {{current}} av {{total}}',
    placeholder: 'Skriv landets navn',
    submit: 'Sjekk',
    hintLetter: 'Første bokstav',
    hintNextLetter: 'Neste bokstav',
    hintCards: '4 kort',
    correct: 'Riktig!',
    incorrect: 'Ikke helt',
    answerWas: 'Det var {{name}}',
    next: 'Neste',
    finish: 'Fullfør',
    score: 'Poeng: {{score}}',
    summaryTitle: 'Økt fullført',
    summaryScore: 'Poeng',
    summarySeen: 'Land spilt',
    accuracy: 'Treffsikkerhet',
    playAgain: 'Spill igjen',
    backContinents: 'Tilbake til kontinenter'
  },
  common: {
    loading: 'Laster…',
    error: 'Noe gikk galt. Prøv igjen.',
    retry: 'Prøv igjen',
    back: 'Tilbake',
    language: 'Språk'
  }
} as const;
