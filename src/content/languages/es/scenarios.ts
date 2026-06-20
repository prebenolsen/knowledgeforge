// ============================================================
// Spanish — sample scenario (bilingual en/no).
//
// CONTENT STATUS (see Questions.md): SAMPLE ONLY — one complete Restaurant
// scenario that exercises all three step kinds (line / choice / build). The
// scenario teaches useful, casual sentences first (no formal "quisiera" here).
// ============================================================

import type { Scenario } from '@/types';

export const ES_SCENARIOS: Scenario[] = [
  {
    id: 'sc-restaurant',
    slug: 'restaurant',
    name: { en: 'At the restaurant', no: 'På restauranten' },
    moduleId: 'es-mod-restaurant',
    level: 'A1',
    steps: [
      {
        kind: 'line',
        speaker: { en: 'Waiter', no: 'Servitør' },
        text: 'Hola, ¿cómo estás?',
        translation: { en: 'Hello, how are you?', no: 'Hei, hvordan har du det?' },
        teach: [
          { term: 'hola', translation: { en: 'hello', no: 'hei' } },
          { term: 'cómo', translation: { en: 'how', no: 'hvordan' } },
          { term: 'estás', translation: { en: 'are you', no: 'har du det' } }
        ]
      },
      {
        kind: 'choice',
        prompt: { en: 'Reply to the waiter', no: 'Svar servitøren' },
        options: [
          {
            text: 'Hola, bien, gracias',
            translation: { en: 'Hello, well, thanks', no: 'Hei, bra, takk' },
            correct: true,
            feedback: { en: 'A natural, friendly reply.', no: 'Et naturlig og vennlig svar.' }
          },
          {
            text: 'Adiós',
            translation: { en: 'Goodbye', no: 'Ha det' },
            correct: false,
            feedback: { en: "That's a goodbye — too early to leave!", no: 'Det er et farvel — for tidlig å gå!' }
          },
          {
            text: 'No entiendo',
            translation: { en: "I don't understand", no: 'Jeg forstår ikke' },
            correct: false,
            feedback: { en: 'Useful phrase, but you can manage a greeting here.', no: 'Nyttig uttrykk, men du klarer en hilsen her.' }
          }
        ]
      },
      {
        kind: 'line',
        speaker: { en: 'Waiter', no: 'Servitør' },
        text: '¿Qué quieres comer?',
        translation: { en: 'What do you want to eat?', no: 'Hva vil du spise?' },
        teach: [
          { term: 'qué', translation: { en: 'what', no: 'hva' } },
          { term: 'comer', translation: { en: 'to eat', no: 'å spise' } }
        ]
      },
      {
        kind: 'build',
        prompt: { en: 'Order a steak', no: 'Bestill en biff' },
        sentenceId: 's-quiero-bistec',
        distractorComponentIds: ['c-una', 'c-cerveza', 'c-cafe']
      },
      {
        kind: 'line',
        speaker: { en: 'Waiter', no: 'Servitør' },
        text: '¡Perfecto! Algo más?',
        translation: { en: 'Perfect! Anything else?', no: 'Perfekt! Noe mer?' },
        teach: [
          { term: 'perfecto', translation: { en: 'perfect', no: 'perfekt' } },
          { term: 'algo más', translation: { en: 'anything else', no: 'noe mer' } }
        ]
      },
      {
        kind: 'choice',
        prompt: { en: 'Ask for the bill', no: 'Be om regningen' },
        options: [
          {
            text: 'La cuenta, por favor',
            translation: { en: 'The bill, please', no: 'Regningen, takk' },
            correct: true,
            feedback: { en: 'Exactly how you ask for the check.', no: 'Akkurat slik du ber om regningen.' }
          },
          {
            text: 'Un baño, por favor',
            translation: { en: 'A bathroom, please', no: 'Et toalett, takk' },
            correct: false,
            feedback: { en: 'You want the bill, not a bathroom on the menu!', no: 'Du vil ha regningen, ikke et toalett på menyen!' }
          },
          {
            text: 'Gracias, hola',
            translation: { en: 'Thanks, hello', no: 'Takk, hei' },
            correct: false,
            feedback: { en: "That doesn't ask for anything.", no: 'Det ber ikke om noe.' }
          }
        ]
      }
    ]
  }
];
