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
    signInError: 'Incorrect email or password.',
    sendLink: 'Email me a magic link instead',
    linkSent: 'Check your inbox for a sign-in link.',
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
    title: 'Modules',
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
    noData: 'Answer some questions to build your knowledge map.'
  },
  shape: {
    untested: 'Untested',
    surface: 'Surface knowledge',
    developing: 'Developing',
    solid: 'Solid',
    mastered: 'Mastered'
  },
  common: {
    loading: 'Loading…',
    error: 'Something went wrong. Try again.',
    retry: 'Retry',
    back: 'Back',
    language: 'Language'
  }
} as const;
