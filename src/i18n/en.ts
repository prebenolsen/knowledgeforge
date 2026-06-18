export default {
  app: {
    name: 'KnowledgeForge',
    tagline: 'Learn what you actually know.'
  },
  nav: {
    home: 'Home',
    learn: 'Learn',
    review: 'Review',
    progress: 'Progress'
  },
  auth: {
    signInGithub: 'Continue with GitHub',
    signInEmail: 'Continue with email',
    emailPlaceholder: 'you@example.com',
    passwordPlaceholder: 'Password',
    signInPassword: 'Sign in',
    signUpPassword: 'Create account',
    signInError: 'Incorrect email or password.',
    signUpError: 'Could not create account. The email may already be in use.',
    needAccount: "Don't have an account? Sign up",
    haveAccount: 'Already have an account? Sign in',
    confirmSent: 'Almost there — check your inbox to confirm your email, then sign in.',
    or: 'or',
    signOut: 'Sign out',
    welcome: 'Welcome to KnowledgeForge',
    intro: 'A personal learning engine that tracks what you know and schedules reviews so it sticks.'
  },
  home: {
    greeting: 'Ready to learn?',
    dueToday: 'Due for review today',
    noReviews: 'Nothing due right now. Start a new session below.',
    startReview: 'Start review ({{count}})',
    browse: 'Browse categories',
    takePlacement: 'Take placement test',
    placementHint: 'Estimate your level in 20 questions.'
  },
  categories: {
    title: 'Categories',
    modules: '{{count}} modules',
    questions: '{{count}} questions'
  },
  modules: {
    title: 'Subcategories',
    chooseMode: 'Choose a practice mode'
  },
  mode: {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    mixed: 'Mixed',
    adaptive: 'Adaptive',
    adaptiveHint: 'Adjusts difficulty as you go.'
  },
  difficulty: {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard'
  },
  quiz: {
    question: 'Question {{current}} of {{total}}',
    correct: 'Correct',
    incorrect: 'Incorrect',
    correctAnswer: 'Correct answer',
    explanation: 'Explanation',
    next: 'Next',
    finish: 'Finish',
    quit: 'Quit'
  },
  results: {
    title: 'Session complete',
    score: 'You got {{correct}} of {{total}} right',
    accuracy: 'Accuracy',
    backHome: 'Back to home',
    again: 'Practice again'
  },
  placement: {
    title: 'Placement test',
    intro: '20 questions spanning easy, medium, and hard. No pressure — this just estimates where to start.',
    start: 'Start test',
    resultTitle: 'Your placement',
    recommended: 'Recommended starting level',
    basics: 'Basics',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    continue: 'Continue'
  },
  progress: {
    title: 'Your progress',
    knowledgeMap: 'Knowledge map',
    overall: 'Overall mastery',
    answered: 'Questions answered',
    accuracy: 'Accuracy',
    weakTopics: 'Weak topics',
    byDifficulty: 'By difficulty',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    noData: 'Answer some questions to build your knowledge map.',
    geoTitle: 'Country Atlas',
    geoBest: 'Best score: {{score}}',
    timelineTitle: 'History Timeline',
    timelineBest: 'Best score: {{score}}'
  },
  shape: {
    untested: 'Untested',
    surface: 'Surface knowledge',
    developing: 'Developing',
    solid: 'Solid',
    mastered: 'Mastered'
  },
  geo: {
    title: 'Country Atlas',
    chooseContinent: 'Choose a continent',
    chooseMode: 'Choose a mode',
    modeExplore: 'Explore',
    modeExploreHint: 'Tap any country and name it yourself.',
    modeQuiz: 'Quiz',
    modeQuizHint: 'A country lights up — you type its name.',
    countries: '{{count}} countries',
    tapPrompt: 'Tap a country on the map to name it.',
    questionProgress: 'Country {{current}} of {{total}}',
    placeholder: 'Type the country name',
    submit: 'Check',
    hintLetter: 'First letter',
    hintNextLetter: 'Next letter',
    hintCards: '4 cards',
    correct: 'Correct!',
    incorrect: 'Not quite',
    answerWas: 'It was {{name}}',
    next: 'Next',
    finish: 'Finish',
    score: 'Score: {{score}}',
    summaryTitle: 'Session complete',
    summaryScore: 'Score',
    summarySeen: 'Countries played',
    accuracy: 'Accuracy',
    playAgain: 'Play again',
    backContinents: 'Back to continents'
  },
  timeline: {
    title: 'History Timeline',
    events: '{{count}} events',
    choosePeriod: 'Choose a period',
    chooseRegion: 'Or a theme',
    chooseDifficulty: 'Choose a difficulty',
    diffHint: {
      easy: 'Multiple choice — pick the century or year.',
      medium: 'Place the event on the timeline.',
      hard: 'Recall the exact year.'
    },
    chooseLength: 'How many events?',
    questions: 'events',
    all: 'All',
    progress: 'Event {{current}} of {{total}}',
    promptCentury: 'Which century was {{event}}?',
    promptYear: 'When was {{event}}?',
    promptPlace: 'Place this event on the timeline',
    promptHard: 'In what year was {{event}}?',
    dragHint: 'Drag the marker or type a year below',
    yearPlaceholder: 'Enter a year',
    bce: 'BCE',
    ce: 'CE',
    hint: 'Hint',
    submit: 'Submit',
    exact: 'Exact!',
    close: 'Close!',
    miss: 'Not quite',
    youSaid: 'You said {{year}}',
    next: 'Next',
    finish: 'Finish',
    summaryTitle: 'Round complete',
    summaryScore: 'Score',
    summaryExact: 'Exact hits',
    accuracy: 'Accuracy',
    playAgain: 'Play again',
    backToStart: 'Back to start'
  },
  common: {
    loading: 'Loading…',
    error: 'Something went wrong. Try again.',
    retry: 'Retry',
    back: 'Back',
    language: 'Language'
  }
} as const;
