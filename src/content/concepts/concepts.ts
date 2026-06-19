// ============================================================
// KnowledgeForge — Mental Models & Paradoxes dataset (bilingual en/no).
//
// Hand-authored concepts for the "Mental Models & Paradoxes" activity. Each
// concept carries:
//   - per-difficulty identification prompts (description / scenario / implication)
//   - a seven-part educational `explanation` (the "Explain" view)
//   - `related` concept ids (cross-links + preferred quiz distractors)
//   - an optional `simulation` key for a future interactive demo
//
// CONTENT STATUS (see Questions.md for the per-module checklist):
//   - Probability & Statistics — DONE (15 concepts)
//   - All other modules — pending content passes.
//
// A module needs at least 4 concepts before it becomes playable (see
// lib/concepts.ts). The Explain view is the heart of the activity: the goal is
// understanding, not recall, so the explanation fields are written generously.
// ============================================================

import type { Concept } from '@/types';

export const CONCEPTS: Concept[] = [
  // ============================================================
  // Probability & Statistics
  // ============================================================
  {
    id: 'monty-hall',
    module: 'probability-statistics',
    name: { en: 'Monty Hall Problem', no: 'Monty Hall-problemet' },
    prompts: {
      easy: {
        en: 'Which concept describes the probability puzzle where switching doors increases your chance of winning?',
        no: 'Hvilket konsept beskriver sannsynlighetsgåten der det å bytte dør øker sjansen din for å vinne?'
      },
      medium: {
        en: 'You pick one of three doors. A host who knows what is behind each opens a different door, revealing a goat, then offers to let you switch. Which concept is this?',
        no: 'Du velger én av tre dører. En programleder som vet hva som er bak hver dør, åpner en annen dør og viser en geit, og tilbyr deg å bytte. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why can new information change a probability even when the number of remaining options looks equal?',
        no: 'Hvorfor kan ny informasjon endre en sannsynlighet selv når antallet gjenværende valg ser likt ut?'
      }
    },
    explanation: {
      summary: {
        en: 'With three doors, switching after the host reveals a losing door wins 2/3 of the time — not 1/2.',
        no: 'Med tre dører vinner du 2/3 av gangene ved å bytte etter at programlederen avslører en taperdør — ikke 1/2.'
      },
      whyInteresting: {
        en: 'It shows that probability depends on the information available, not just on the number of choices in front of you. The host’s action is not neutral: because he knows where the prize is and always avoids it, opening a door silently transfers information onto the door he leaves closed.',
        no: 'Det viser at sannsynlighet avhenger av informasjonen som er tilgjengelig, ikke bare av antallet valg foran deg. Programlederens handling er ikke nøytral: fordi han vet hvor premien er og alltid unngår den, overfører det å åpne en dør stille informasjon til døren han lar være lukket.'
      },
      whyIntuitionFails: {
        en: 'People see two closed doors and assume the odds must be 50/50, because two options “feels” symmetric. But the two doors are not symmetric: your original door was picked blindly (1/3 chance of being right), while the other surviving door was deliberately spared by a host who was forced to dodge the prize. That asymmetry is invisible, so intuition throws the extra information away.',
        no: 'Folk ser to lukkede dører og antar at oddsen må være 50/50, fordi to valg “føles” symmetriske. Men de to dørene er ikke symmetriske: din opprinnelige dør ble valgt i blinde (1/3 sjanse for å være riktig), mens den andre gjenværende døren bevisst ble spart av en programleder som var tvunget til å unngå premien. Den asymmetrien er usynlig, så intuisjonen kaster bort den ekstra informasjonen.'
      },
      example: {
        en: 'Your first pick wins 1/3 of the time, and that never changes — the host can’t touch your door. So all the remaining 2/3 of the probability collapses onto the single other door he leaves shut. Switching therefore wins 2/3 of the time. Imagine 100 doors instead: you pick one (1% chance), the host opens 98 goats, and offers the one door he carefully avoided. Switching now wins 99% of the time, and the trick becomes obvious.',
        no: 'Førstevalget ditt vinner 1/3 av gangene, og det endrer seg aldri — programlederen kan ikke røre døren din. Så hele de resterende 2/3 av sannsynligheten samler seg på den ene andre døren han lar være lukket. Å bytte vinner derfor 2/3 av gangene. Se for deg 100 dører i stedet: du velger én (1 % sjanse), programlederen åpner 98 geiter og tilbyr den ene døren han nøye unngikk. Å bytte vinner nå 99 % av gangene, og trikset blir åpenbart.'
      },
      realWorld: {
        en: 'The same conditional-probability reasoning underlies medical test results, spam filtering, search-and-rescue, and any situation where an observer’s knowledge is baked into the evidence you receive. Whenever information arrives through a filter that “knows something”, that filter changes the odds.',
        no: 'Den samme betingede sannsynlighetstankegangen ligger bak medisinske testresultater, spamfiltrering, søk og redning, og enhver situasjon der en observatørs kunnskap er bakt inn i bevisene du mottar. Når informasjon kommer gjennom et filter som “vet noe”, endrer det filteret oddsen.'
      }
    },
    related: ['bayesian-reasoning', 'conditional-probability'],
    simulation: 'monty-hall'
  },
  {
    id: 'birthday-problem',
    module: 'probability-statistics',
    name: { en: 'Birthday Problem', no: 'Bursdagsproblemet' },
    prompts: {
      easy: {
        en: 'Which concept describes how surprisingly few people are needed in a room before two of them very likely share a birthday?',
        no: 'Hvilket konsept beskriver hvor overraskende få personer som trengs i et rom før to av dem svært sannsynlig deler bursdag?'
      },
      medium: {
        en: 'There are 23 people at a party. Someone bets that at least two of them share a birthday. Counterintuitively, that bet is more likely to win than to lose. Which concept is this?',
        no: 'Det er 23 personer i et selskap. Noen vedder på at minst to av dem har bursdag på samme dag. Mot intuisjonen er det mer sannsynlig at veddemålet vinnes enn tapes. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does the chance of a coincidence grow so fast with group size — because what matters is the number of possible pairs, not the number of people?',
        no: 'Hvorfor vokser sjansen for et sammentreff så raskt med gruppestørrelsen — fordi det som teller er antallet mulige par, ikke antallet personer?'
      }
    },
    explanation: {
      summary: {
        en: 'In a group of just 23 people there is about a 50% chance that two share a birthday; at 70 people it exceeds 99.9%.',
        no: 'I en gruppe på bare 23 personer er det rundt 50 % sjanse for at to deler bursdag; ved 70 personer overstiger sjansen 99,9 %.'
      },
      whyInteresting: {
        en: 'It reveals how explosively the number of possible pairings grows, and is the cleanest demonstration of why “amazing coincidences” are statistically routine rather than miraculous. The result feels impossible until you count pairs instead of people.',
        no: 'Det avslører hvor eksplosivt antallet mulige par vokser, og er den klareste demonstrasjonen av hvorfor “utrolige sammentreff” er statistisk dagligdagse snarere enn mirakuløse. Resultatet føles umulig helt til du teller par i stedet for personer.'
      },
      whyIntuitionFails: {
        en: 'We instinctively put ourselves at the centre and ask “how many people share *my* birthday?” — and the answer to that is indeed small. But the problem asks whether *any* two people match, and that counts every possible pair. With 23 people there are 23 × 22 / 2 = 253 distinct pairs, each one its own chance for a collision. Our minds scale with the 23, while the maths scales with the 253.',
        no: 'Vi setter instinktivt oss selv i sentrum og spør “hvor mange deler *min* bursdag?” — og svaret på det er riktignok lite. Men problemet spør om *noen* to personer matcher, og det teller hvert mulige par. Med 23 personer finnes det 23 × 22 / 2 = 253 ulike par, hvert sitt sjanse for et sammentreff. Sinnet vårt skalerer med 23, mens matematikken skalerer med 253.'
      },
      example: {
        en: 'Rather than computing the chance of a match directly, compute the chance that *all* birthdays differ and subtract from 1. The first person is free; the second avoids 1 day (364/365), the third avoids 2 (363/365), and so on. Multiply these out for 23 people and the product drops just below 0.5 — so the chance of at least one shared birthday rises just above 50%.',
        no: 'I stedet for å regne ut sjansen for treff direkte, regner man ut sjansen for at *alle* bursdager er forskjellige og trekker fra 1. Den første personen er fri; den andre unngår 1 dag (364/365), den tredje unngår 2 (363/365), og så videre. Gang dette ut for 23 personer, og produktet faller akkurat under 0,5 — så sjansen for minst én delt bursdag stiger akkurat over 50 %.'
      },
      realWorld: {
        en: 'Beyond party tricks, the same maths underlies the “birthday attack” in cryptography, where finding any two inputs that produce the same hash is far easier than breaking a specific one. It also explains why apparent coincidences (shared names, repeated lottery numbers, matching DNA partial profiles) appear so often in large populations.',
        no: 'Utover selskapstriks ligger den samme matematikken bak “bursdagsangrepet” i kryptografi, der det å finne hvilke som helst to inndata som gir samme hash er langt enklere enn å knekke en bestemt. Det forklarer også hvorfor tilsynelatende sammentreff (delte navn, gjentatte lottotall, delvise DNA-profiler som matcher) dukker opp så ofte i store populasjoner.'
      }
    },
    related: ['conditional-probability', 'law-of-large-numbers'],
    simulation: 'birthday-problem'
  },
  {
    id: 'gamblers-fallacy',
    module: 'probability-statistics',
    name: { en: 'Gambler’s Fallacy', no: 'Gamblerens feilslutning' },
    prompts: {
      easy: {
        en: 'Which concept describes the mistaken belief that a run of one outcome makes the opposite outcome “due” next?',
        no: 'Hvilket konsept beskriver den feilaktige troen på at en rekke av ett utfall gjør det motsatte utfallet “på tur” til å komme neste gang?'
      },
      medium: {
        en: 'A roulette wheel lands on red eight times in a row. A gambler bets big on black, certain that it simply must come up now. Which concept explains his mistake?',
        no: 'Et rulletthjul lander på rødt åtte ganger på rad. En gambler satser stort på svart, sikker på at det rett og slett må komme nå. Hvilket konsept forklarer feilen hans?'
      },
      hard: {
        en: 'Why does a fair coin have no memory, so that past independent results cannot change the odds of the next flip?',
        no: 'Hvorfor har en rettferdig mynt ingen hukommelse, slik at tidligere uavhengige resultater ikke kan endre oddsen for neste kast?'
      }
    },
    explanation: {
      summary: {
        en: 'The false belief that independent random events “balance out” in the short run — that past outcomes change the probability of the next one.',
        no: 'Den feilaktige troen på at uavhengige tilfeldige hendelser “jevner seg ut” på kort sikt — at tidligere utfall endrer sannsynligheten for det neste.'
      },
      whyInteresting: {
        en: 'It exposes a deep confusion between two true ideas: that each flip is independent (no memory), and that long-run averages stabilise (the Law of Large Numbers). The fallacy smuggles the long-run promise into the next single event, where it does not belong.',
        no: 'Den avdekker en dyp forveksling mellom to sanne idéer: at hvert kast er uavhengig (ingen hukommelse), og at langtidsgjennomsnitt stabiliserer seg (de store talls lov). Feilslutningen smugler den langsiktige garantien inn i den neste enkelthendelsen, der den ikke hører hjemme.'
      },
      whyIntuitionFails: {
        en: 'We expect even short sequences to “look random”, so a long streak feels wrong and seems destined to reverse. But a fair coin cannot remember its history; the probability is exactly 50% on every flip, regardless of what came before. The streak is already accounted for — it does not create a debt that the next flip must repay.',
        no: 'Vi forventer at selv korte rekker skal “se tilfeldige ut”, så en lang rekke føles feil og virker bestemt til å snu. Men en rettferdig mynt kan ikke huske historien sin; sannsynligheten er nøyaktig 50 % ved hvert kast, uansett hva som kom før. Rekken er allerede medregnet — den skaper ingen gjeld som neste kast må betale tilbake.'
      },
      example: {
        en: 'After seven heads in a row, the chance of tails on the next flip is still exactly 1/2 — not higher. The coin “owes” you nothing. Note the subtle flip side: the reason a long streak is rare is that *predicting it in advance* is unlikely, but once it has already happened, the next flip is unaffected.',
        no: 'Etter sju kron på rad er sjansen for mynt på neste kast fortsatt nøyaktig 1/2 — ikke høyere. Mynten “skylder” deg ingenting. Legg merke til den subtile baksiden: grunnen til at en lang rekke er sjelden, er at det å *forutsi den på forhånd* er usannsynlig, men når den allerede har skjedd, er det neste kastet upåvirket.'
      },
      realWorld: {
        en: 'It drives bad betting systems, misreadings of stock and sports streaks, and even documented disasters — at a Monte Carlo casino in 1913, the roulette ball landed on black 26 times in a row, and gamblers lost fortunes piling onto red in the belief that it was overdue.',
        no: 'Den driver dårlige veddemålssystemer, feiltolkninger av aksje- og idrettsrekker, og til og med dokumenterte katastrofer — på et kasino i Monte Carlo i 1913 landet rulettkulen på svart 26 ganger på rad, og gamblere tapte formuer ved å hope seg på rødt i troen på at det var på overtid.'
      }
    },
    related: ['law-of-large-numbers', 'regression-to-the-mean', 'expected-value'],
    simulation: 'gamblers-fallacy'
  },
  {
    id: 'law-of-large-numbers',
    module: 'probability-statistics',
    name: { en: 'Law of Large Numbers', no: 'De store talls lov' },
    prompts: {
      easy: {
        en: 'Which concept describes how the average of many random trials gets closer to the true expected value as the number of trials grows?',
        no: 'Hvilket konsept beskriver hvordan gjennomsnittet av mange tilfeldige forsøk nærmer seg den sanne forventningsverdien når antallet forsøk øker?'
      },
      medium: {
        en: 'Flip a fair coin 10 times and you might get 70% heads; flip it 10,000 times and the proportion sits very close to 50%. Which concept is this?',
        no: 'Kast en rettferdig mynt 10 ganger, og du kan få 70 % kron; kast den 10 000 ganger, og andelen ligger svært nær 50 %. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does a larger sample shrink the gap between observed averages and the true probability, without ever guaranteeing that individual results “even out”?',
        no: 'Hvorfor krymper et større utvalg gapet mellom observerte gjennomsnitt og den sanne sannsynligheten, uten noen gang å garantere at enkeltresultater “jevner seg ut”?'
      }
    },
    explanation: {
      summary: {
        en: 'As the number of independent trials grows, the average outcome converges to the expected value.',
        no: 'Etter hvert som antallet uavhengige forsøk øker, nærmer det gjennomsnittlige utfallet seg forventningsverdien.'
      },
      whyInteresting: {
        en: 'It is the bridge between the unpredictable single event and the rock-steady aggregate — the reason that anything random can also be reliable. Casinos, insurers, and pollsters all live on this law: they cannot predict one case, but they can predict the average of millions almost exactly.',
        no: 'Den er broen mellom den uforutsigbare enkelthendelsen og den knallstabile totalen — grunnen til at noe tilfeldig også kan være pålitelig. Kasinoer, forsikringsselskaper og meningsmålere lever alle på denne loven: de kan ikke forutsi ett tilfelle, men de kan forutsi gjennomsnittet av millioner nesten nøyaktig.'
      },
      whyIntuitionFails: {
        en: 'People confuse it with the gambler’s fallacy and imagine it forces short-run correction. It does not. It works not by pulling deviations back, but by drowning them out: as trials accumulate, early flukes become a tiny fraction of the total and the proportion settles. Crucially, the *proportion* converges even though the absolute *count* of, say, extra heads can keep growing.',
        no: 'Folk forveksler den med gamblerens feilslutning og innbiller seg at den tvinger fram kortsiktig korreksjon. Det gjør den ikke. Den virker ikke ved å trekke avvik tilbake, men ved å overdøyve dem: etter hvert som forsøkene hoper seg opp, blir tidlige tilfeldigheter en bitte liten del av totalen, og andelen stabiliserer seg. Avgjørende er det at *andelen* konvergerer selv om det absolutte *antallet* av for eksempel ekstra kron kan fortsette å vokse.'
      },
      example: {
        en: '100 coin flips can easily wander to 58% heads. A million flips will almost certainly land within a fraction of a percent of 50%. Strikingly, after a million flips you might be hundreds of heads away from a perfect 500,000 — yet as a *percentage* you are essentially dead on 50%.',
        no: '100 myntkast kan lett havne på 58 % kron. En million kast vil nesten helt sikkert lande innenfor en brøkdel av en prosent fra 50 %. Slående nok kan du etter en million kast være hundrevis av kron unna et perfekt 500 000 — men som *prosent* er du i praksis nøyaktig på 50 %.'
      },
      realWorld: {
        en: 'It is why casinos and insurance companies profit predictably despite never knowing any single outcome, why larger polls and clinical trials are more trustworthy, and why a single anecdote tells you almost nothing while a large dataset can tell you a great deal.',
        no: 'Det er grunnen til at kasinoer og forsikringsselskaper tjener penger forutsigbart til tross for at de aldri kjenner ett enkelt utfall, hvorfor større meningsmålinger og kliniske studier er mer pålitelige, og hvorfor én anekdote forteller deg nesten ingenting mens et stort datasett kan fortelle deg svært mye.'
      }
    },
    related: ['gamblers-fallacy', 'central-limit-theorem', 'expected-value', 'regression-to-the-mean']
  },
  {
    id: 'bayesian-reasoning',
    module: 'probability-statistics',
    name: { en: 'Bayesian Reasoning', no: 'Bayesiansk resonnement' },
    prompts: {
      easy: {
        en: 'Which concept describes updating your belief in proportion to new evidence, starting from a prior probability?',
        no: 'Hvilket konsept beskriver det å oppdatere troen din i takt med nye bevis, med utgangspunkt i en forhåndssannsynlighet?'
      },
      medium: {
        en: 'A test for a rare disease comes back positive. Before panicking, you weigh how rare the disease is against how often the test gives false alarms, and revise your estimate. Which concept is this?',
        no: 'En test for en sjelden sykdom slår ut positivt. Før du får panikk, veier du hvor sjelden sykdommen er mot hvor ofte testen gir falske alarmer, og justerer anslaget ditt. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why can strong evidence still leave a hypothesis unlikely if you began from a very low prior probability?',
        no: 'Hvorfor kan sterke bevis fortsatt etterlate en hypotese usannsynlig hvis du startet fra en svært lav forhåndssannsynlighet?'
      }
    },
    explanation: {
      summary: {
        en: 'A framework for updating the probability of a belief as new evidence arrives, by combining a prior probability with the strength of the evidence.',
        no: 'Et rammeverk for å oppdatere sannsynligheten for en tro etter hvert som nye bevis kommer, ved å kombinere en forhåndssannsynlighet (prior) med styrken på bevisene.'
      },
      whyInteresting: {
        en: 'It reframes probability as a measure of belief that can be revised rationally, and gives an exact rule — Bayes’ theorem — for how much to revise. It turns “learning from evidence” from a vague instinct into arithmetic, and is the mathematical backbone of modern AI, science, and rational decision-making.',
        no: 'Den omformulerer sannsynlighet som et mål på tro som kan revideres rasjonelt, og gir en eksakt regel — Bayes’ teorem — for hvor mye man skal revidere. Den gjør “å lære av bevis” fra et vagt instinkt til regning, og er den matematiske ryggraden i moderne KI, vitenskap og rasjonell beslutningstaking.'
      },
      whyIntuitionFails: {
        en: 'People anchor on the vivid new evidence (“the test is 99% accurate!”) and quietly drop the prior — how common the thing was to begin with. When the prior is tiny, even strong evidence may only lift the probability a little. Bayes’ theorem forces the base rate back into the calculation, which is exactly the step intuition skips.',
        no: 'Folk forankrer seg i det slående nye beviset (“testen er 99 % nøyaktig!”) og slipper stille prioren — hvor vanlig tingen var i utgangspunktet. Når prioren er bitte liten, kan selv sterke bevis bare løfte sannsynligheten litt. Bayes’ teorem tvinger grunnraten tilbake inn i regnestykket, som er nettopp steget intuisjonen hopper over.'
      },
      example: {
        en: 'A disease affects 1 in 1,000 people, and a test is 99% accurate. You test positive. Out of 1,000 people, the 1 true case tests positive, but so do about 10 of the 999 healthy people (1% of them). So roughly 1 in 11 positives is real — about a 9% chance you are sick, despite the “99% accurate” test. Strong evidence, but it started from a very low prior.',
        no: 'En sykdom rammer 1 av 1 000 personer, og en test er 99 % nøyaktig. Du tester positivt. Av 1 000 personer tester det 1 ekte tilfellet positivt, men det gjør også rundt 10 av de 999 friske (1 % av dem). Så omtrent 1 av 11 positive er ekte — rundt 9 % sjanse for at du er syk, til tross for den “99 % nøyaktige” testen. Sterke bevis, men de startet fra en svært lav prior.'
      },
      realWorld: {
        en: 'It underlies spam filters, medical diagnosis, search engines, machine learning, and forensic evidence. More broadly, it is a discipline for everyday thinking: hold your beliefs as probabilities, and move them by an amount that matches how surprising the new evidence really is.',
        no: 'Den ligger bak spamfiltre, medisinsk diagnostikk, søkemotorer, maskinlæring og rettsmedisinske bevis. Mer generelt er den en disiplin for dagligdags tenkning: hold troen din som sannsynligheter, og flytt dem med en mengde som svarer til hvor overraskende det nye beviset egentlig er.'
      }
    },
    related: ['conditional-probability', 'base-rate-fallacy', 'monty-hall', 'prosecutors-fallacy']
  },
  {
    id: 'conditional-probability',
    module: 'probability-statistics',
    name: { en: 'Conditional Probability', no: 'Betinget sannsynlighet' },
    prompts: {
      easy: {
        en: 'Which concept describes the probability of one event given that another event has already happened?',
        no: 'Hvilket konsept beskriver sannsynligheten for én hendelse gitt at en annen hendelse allerede har skjedd?'
      },
      medium: {
        en: 'The chance that someone owns an umbrella might be 40%, but the chance they own one *given that it rains often where they live* is much higher. Which concept is this?',
        no: 'Sjansen for at noen eier en paraply kan være 40 %, men sjansen for at de eier en *gitt at det regner ofte der de bor* er mye høyere. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why is the probability of A given B usually different from the probability of B given A?',
        no: 'Hvorfor er sannsynligheten for A gitt B vanligvis forskjellig fra sannsynligheten for B gitt A?'
      }
    },
    explanation: {
      summary: {
        en: 'The probability of an event changes once you know that some other, related event has occurred — written P(A | B), “the probability of A given B”.',
        no: 'Sannsynligheten for en hendelse endrer seg når du får vite at en annen, beslektet hendelse har inntruffet — skrevet P(A | B), “sannsynligheten for A gitt B”.'
      },
      whyInteresting: {
        en: 'It is the engine behind almost every surprising result in probability, because it captures the single most important idea: information reshapes the odds. Knowing that B happened shrinks the world of possibilities down to the cases where B is true, and the probability of A is recomputed inside that smaller world.',
        no: 'Den er motoren bak nesten alle overraskende resultater i sannsynlighet, fordi den fanger den enkeltstående viktigste idéen: informasjon omformer oddsen. Å vite at B skjedde, krymper verden av muligheter ned til tilfellene der B er sann, og sannsynligheten for A regnes på nytt inne i den mindre verdenen.'
      },
      whyIntuitionFails: {
        en: 'People treat P(A|B) and P(B|A) as interchangeable — the “confusion of the inverse”. They are usually very different. The probability of clouds given that it is raining is nearly 100%; the probability of rain given that it is cloudy is much lower. Swapping the two is the root of many real errors, from medical misreadings to wrongful convictions.',
        no: 'Folk behandler P(A|B) og P(B|A) som ombyttbare — “forveksling av det inverse”. De er vanligvis svært forskjellige. Sannsynligheten for skyer gitt at det regner er nesten 100 %; sannsynligheten for regn gitt at det er overskyet er mye lavere. Å bytte om de to er roten til mange virkelige feil, fra medisinske feiltolkninger til justismord.'
      },
      example: {
        en: 'Draw two cards from a deck. The chance the second card is an ace is 4/52 in isolation. But *given* that the first card was already an ace, only 3 aces remain among 51 cards, so the conditional probability drops to 3/51. The condition has changed the sample space from which you draw.',
        no: 'Trekk to kort fra en kortstokk. Sjansen for at det andre kortet er et ess er 4/52 isolert sett. Men *gitt* at det første kortet allerede var et ess, er det bare 3 ess igjen blant 51 kort, så den betingede sannsynligheten faller til 3/51. Betingelsen har endret utfallsrommet du trekker fra.'
      },
      realWorld: {
        en: 'It is the foundation of risk assessment, diagnostic testing, insurance pricing, and Bayesian reasoning. Misusing it — confusing P(match | innocent) with P(innocent | match) — produces the prosecutor’s fallacy that has sent innocent people to prison.',
        no: 'Den er grunnlaget for risikovurdering, diagnostisk testing, prising av forsikring og bayesiansk resonnement. Misbruk av den — å forveksle P(match | uskyldig) med P(uskyldig | match) — gir aktorfeilslutningen som har sendt uskyldige i fengsel.'
      }
    },
    related: ['bayesian-reasoning', 'base-rate-fallacy', 'monty-hall', 'prosecutors-fallacy']
  },
  {
    id: 'base-rate-fallacy',
    module: 'probability-statistics',
    name: { en: 'Base Rate Fallacy', no: 'Grunnratefeilslutningen' },
    prompts: {
      easy: {
        en: 'Which concept describes ignoring how common something is overall and focusing only on specific evidence?',
        no: 'Hvilket konsept beskriver det å ignorere hvor vanlig noe er totalt sett, og bare fokusere på spesifikke bevis?'
      },
      medium: {
        en: 'A test for a rare condition is “95% accurate”, so a man with a positive result assumes he almost certainly has it — forgetting how rare the condition is in the first place. Which concept is this?',
        no: 'En test for en sjelden tilstand er “95 % nøyaktig”, så en mann med et positivt resultat antar at han nesten helt sikkert har den — og glemmer hvor sjelden tilstanden er i utgangspunktet. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why can most positive results from an accurate test still be false alarms when the thing being tested for is rare?',
        no: 'Hvorfor kan de fleste positive resultatene fra en nøyaktig test fortsatt være falske alarmer når det man tester for er sjeldent?'
      }
    },
    explanation: {
      summary: {
        en: 'The error of neglecting the underlying frequency (base rate) of an event when judging probability from specific evidence.',
        no: 'Feilen ved å overse den underliggende frekvensen (grunnraten) av en hendelse når man bedømmer sannsynlighet ut fra spesifikke bevis.'
      },
      whyInteresting: {
        en: 'It demonstrates that a test’s accuracy is almost meaningless on its own. To know what a positive result means, you must also know how common the condition is. When the condition is rare, even a very accurate test produces mostly false positives — a result that feels paradoxical but follows directly from the numbers.',
        no: 'Den viser at en tests nøyaktighet er nesten meningsløs alene. For å vite hva et positivt resultat betyr, må du også vite hvor vanlig tilstanden er. Når tilstanden er sjelden, gir selv en svært nøyaktig test for det meste falske positive — et resultat som føles paradoksalt, men som følger direkte av tallene.'
      },
      whyIntuitionFails: {
        en: 'Vivid, specific evidence (a positive test, a matching description, a frightening symptom) grabs attention and crowds out the dull background statistic. Our minds weight the individual case far above the population it sits in, so we leap to a conclusion that ignores how rare that conclusion was to begin with.',
        no: 'Slående, spesifikke bevis (en positiv test, en passende beskrivelse, et skremmende symptom) fanger oppmerksomheten og fortrenger den kjedelige bakgrunnsstatistikken. Sinnet vårt vektlegger enkelttilfellet langt over populasjonen det befinner seg i, så vi hopper til en konklusjon som ignorerer hvor sjelden den konklusjonen var i utgangspunktet.'
      },
      example: {
        en: 'Suppose 1 in 10,000 people in a crowd is a wanted criminal, and a face-recognition system is 99% accurate. When it flags someone, picture 1,000,000 people: it correctly flags the ~100 criminals, but its 1% error rate also wrongly flags ~10,000 innocent people. So a flagged person is innocent about 99% of the time — the base rate overwhelms the test.',
        no: 'Anta at 1 av 10 000 personer i en folkemengde er en etterlyst kriminell, og et ansiktsgjenkjenningssystem er 99 % nøyaktig. Når det flagger noen, se for deg 1 000 000 personer: det flagger korrekt de ~100 kriminelle, men feilraten på 1 % flagger også feilaktig ~10 000 uskyldige. Så en flagget person er uskyldig omtrent 99 % av tiden — grunnraten overdøyver testen.'
      },
      realWorld: {
        en: 'It is critical in medical screening (why mass-screening for rare diseases causes many false alarms), airport and mass surveillance, fraud detection, and security alerts. Whenever a rare event is caught by an imperfect detector, expect the catches to be mostly false.',
        no: 'Den er avgjørende ved medisinsk screening (hvorfor masseundersøkelse for sjeldne sykdommer gir mange falske alarmer), flyplass- og masseovervåking, svindeloppdaging og sikkerhetsvarsler. Når en sjelden hendelse fanges av en ufullkommen detektor, kan man forvente at treffene for det meste er falske.'
      }
    },
    related: ['bayesian-reasoning', 'conditional-probability', 'prosecutors-fallacy']
  },
  {
    id: 'regression-to-the-mean',
    module: 'probability-statistics',
    name: { en: 'Regression to the Mean', no: 'Regresjon mot gjennomsnittet' },
    prompts: {
      easy: {
        en: 'Which concept describes how an extreme result tends to be followed by one closer to the average?',
        no: 'Hvilket konsept beskriver hvordan et ekstremt resultat har en tendens til å bli fulgt av et som ligger nærmere gjennomsnittet?'
      },
      medium: {
        en: 'Athletes featured on a magazine cover after a spectacular season often perform worse the next year, and fans blame a “cover jinx”. Which concept actually explains it?',
        no: 'Idrettsutøvere som havner på et magasinforside etter en spektakulær sesong, presterer ofte dårligere året etter, og fans skylder på en “forsideforbannelse”. Hvilket konsept forklarer det egentlig?'
      },
      hard: {
        en: 'Why can a useless treatment appear to work, simply because patients tend to seek help when their symptoms are at their worst?',
        no: 'Hvorfor kan en virkningsløs behandling se ut til å virke, rett og slett fordi pasienter pleier å søke hjelp når symptomene er på sitt verste?'
      }
    },
    explanation: {
      summary: {
        en: 'When a measurement is partly due to luck, extreme values tend to be followed by more average ones — not because of any cause, but because the extreme luck rarely repeats.',
        no: 'Når en måling delvis skyldes flaks, har ekstreme verdier en tendens til å bli fulgt av mer gjennomsnittlige — ikke på grunn av noen årsak, men fordi den ekstreme flaksen sjelden gjentar seg.'
      },
      whyInteresting: {
        en: 'It is a statistical phantom that manufactures illusions of cause and effect everywhere. Because extremes tend to be followed by normality, *any* intervention applied at an extreme moment — a punishment after a terrible result, a remedy taken when sickest — will appear to work even if it does nothing at all.',
        no: 'Det er et statistisk spøkelse som fabrikkerer illusjoner av årsak og virkning overalt. Fordi ytterpunkter har en tendens til å bli fulgt av normalitet, vil *ethvert* tiltak som settes inn i et ekstremt øyeblikk — en straff etter et forferdelig resultat, en kur tatt når man er sykest — se ut til å virke selv om det ikke gjør noe som helst.'
      },
      whyIntuitionFails: {
        en: 'We crave causal stories, so when an outlier is followed by something ordinary we invent a reason — a jinx, a punishment that worked, a cure that healed. The truer explanation is duller: an extreme result is usually extreme skill *plus* extreme luck, and the luck simply does not come back next time.',
        no: 'Vi higer etter årsaksforklaringer, så når en uteligger følges av noe alminnelig, finner vi opp en grunn — en forbannelse, en straff som virket, en kur som helbredet. Den sannere forklaringen er kjedeligere: et ekstremt resultat er som regel ekstrem dyktighet *pluss* ekstrem flaks, og flaksen kommer rett og slett ikke tilbake neste gang.'
      },
      example: {
        en: 'Pilots praised after an unusually good landing tend to do worse next time, while those scolded after a bad one tend to improve — so instructors “learn” that criticism works and praise backfires. In reality both groups are just drifting back toward their average. The famous lesson: judging interventions by what follows an extreme is deeply misleading without a control group.',
        no: 'Piloter som roses etter en uvanlig god landing, pleier å gjøre det dårligere neste gang, mens de som skjelles ut etter en dårlig, pleier å forbedre seg — så instruktører “lærer” at kritikk virker og ros slår tilbake. I virkeligheten driver begge gruppene bare tilbake mot gjennomsnittet sitt. Den berømte lærdommen: å bedømme tiltak ut fra hva som følger etter et ytterpunkt, er dypt villedende uten en kontrollgruppe.'
      },
      realWorld: {
        en: 'It confounds medical trials (the reason placebo control groups are essential), sports commentary, school and business performance reviews, and policy evaluation. Any time you act because things hit a record high or low, regression to the mean will tend to flatter your decision.',
        no: 'Den forstyrrer medisinske studier (grunnen til at placebo-kontrollgrupper er avgjørende), idrettskommentarer, prestasjonsvurderinger i skole og næringsliv, og politikkevaluering. Hver gang du handler fordi noe traff en rekordtopp eller -bunn, vil regresjon mot gjennomsnittet ha en tendens til å smigre beslutningen din.'
      }
    },
    related: ['law-of-large-numbers', 'correlation-causation', 'gamblers-fallacy']
  },
  {
    id: 'simpsons-paradox',
    module: 'probability-statistics',
    name: { en: 'Simpson’s Paradox', no: 'Simpsons paradoks' },
    prompts: {
      easy: {
        en: 'Which concept describes a trend that appears in separate groups but reverses when the groups are combined?',
        no: 'Hvilket konsept beskriver en trend som vises i separate grupper, men snur når gruppene slås sammen?'
      },
      medium: {
        en: 'A treatment works better than the alternative for men, and better for women, yet appears worse overall once the data for both is pooled together. Which concept is this?',
        no: 'En behandling virker bedre enn alternativet for menn, og bedre for kvinner, men ser likevel dårligere ut totalt sett når dataene for begge slås sammen. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why can aggregating data hide or even reverse the true relationship between two variables?',
        no: 'Hvorfor kan sammenslåing av data skjule eller til og med snu det sanne forholdet mellom to variabler?'
      }
    },
    explanation: {
      summary: {
        en: 'A trend that holds within every subgroup of data can disappear or even reverse when the subgroups are combined, depending on how the groups are weighted.',
        no: 'En trend som holder innenfor hver undergruppe av data, kan forsvinne eller til og med snu når undergruppene slås sammen, avhengig av hvordan gruppene vektes.'
      },
      whyInteresting: {
        en: 'It proves that the very same numbers can tell two opposite stories, depending only on whether you look at the parts or the whole. There is often no single “correct” view — choosing whether to aggregate or to split the data is itself a judgement that can flip the conclusion.',
        no: 'Den beviser at akkurat de samme tallene kan fortelle to motsatte historier, avhengig bare av om du ser på delene eller helheten. Det finnes ofte ingen enkelt “riktig” synsvinkel — valget om å slå sammen eller dele opp dataene er i seg selv en vurdering som kan snu konklusjonen.'
      },
      whyIntuitionFails: {
        en: 'We assume that what is true of every part must be true of the whole. But a lurking variable — usually unequal group sizes or a confounder — can dominate the combined figure. When the subgroups differ both in their outcomes and in how many people they contain, the pooled average is pulled toward the larger groups and the pattern can invert.',
        no: 'Vi antar at det som er sant for hver del, må være sant for helheten. Men en skjult variabel — som regel ulike gruppestørrelser eller en konfunder — kan dominere det sammenslåtte tallet. Når undergruppene skiller seg både i utfall og i hvor mange de inneholder, trekkes det sammenslåtte gjennomsnittet mot de større gruppene, og mønsteret kan snu.'
      },
      example: {
        en: 'In a famous 1973 analysis, UC Berkeley’s graduate admissions looked biased against women overall — men were admitted at a higher rate. But department by department, women were admitted at an equal or higher rate. The catch: women applied disproportionately to the most competitive departments, which admitted few people of either sex, dragging their overall rate down.',
        no: 'I en berømt analyse fra 1973 så opptaket til mastergrad ved UC Berkeley ut til å være skjevt mot kvinner totalt sett — menn ble tatt opp i høyere grad. Men institutt for institutt ble kvinner tatt opp i like høy eller høyere grad. Haken: kvinner søkte uforholdsmessig mye til de mest konkurranseutsatte instituttene, som tok opp få av begge kjønn, og dro den totale raten deres ned.'
      },
      realWorld: {
        en: 'It is a standing warning for anyone interpreting medical, economic, or social statistics. Pooled numbers can be actively misleading, and the “right” grouping must be chosen by understanding the causes behind the data, not by the data alone.',
        no: 'Den er en stående advarsel til alle som tolker medisinsk, økonomisk eller sosial statistikk. Sammenslåtte tall kan være aktivt villedende, og den “riktige” grupperingen må velges ved å forstå årsakene bak dataene, ikke av dataene alene.'
      }
    },
    related: ['correlation-causation', 'conditional-probability', 'sampling-bias']
  },
  {
    id: 'central-limit-theorem',
    module: 'probability-statistics',
    name: { en: 'Central Limit Theorem', no: 'Sentralgrenseteoremet' },
    prompts: {
      easy: {
        en: 'Which concept describes how the average of many independent samples forms a bell curve, no matter the shape of the original data?',
        no: 'Hvilket konsept beskriver hvordan gjennomsnittet av mange uavhengige utvalg danner en klokkekurve, uansett formen på de opprinnelige dataene?'
      },
      medium: {
        en: 'You roll many dice and take their average, then repeat thousands of times. Although a single die is flat (uniform), the averages pile up into a smooth bell shape. Which concept is this?',
        no: 'Du kaster mange terninger og tar gjennomsnittet, og gjentar dette tusenvis av ganger. Selv om én terning er flat (uniform), hoper gjennomsnittene seg opp i en jevn klokkeform. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does the normal distribution appear so often in nature, even when the underlying causes are not themselves bell-shaped?',
        no: 'Hvorfor dukker normalfordelingen opp så ofte i naturen, selv når de underliggende årsakene ikke selv er klokkeformede?'
      }
    },
    explanation: {
      summary: {
        en: 'The sum or average of many independent random influences tends toward a normal (bell-shaped) distribution, regardless of the shape of the original distribution.',
        no: 'Summen eller gjennomsnittet av mange uavhengige tilfeldige påvirkninger nærmer seg en normalfordeling (klokkeformet), uansett formen på den opprinnelige fordelingen.'
      },
      whyInteresting: {
        en: 'It explains the near-universal appearance of the bell curve in nature and is the deep reason statistical inference works at all. Because averages become normal in a predictable way, we can attach precise margins of error to estimates even when we know little about the raw data’s shape.',
        no: 'Den forklarer den nesten universelle forekomsten av klokkekurven i naturen og er den dype grunnen til at statistisk inferens i det hele tatt fungerer. Fordi gjennomsnitt blir normalfordelte på en forutsigbar måte, kan vi knytte presise feilmarginer til estimater selv når vi vet lite om formen på rådataene.'
      },
      whyIntuitionFails: {
        en: 'People expect the output to resemble the input — that averaging flat, lopsided, or spiky data should give something equally messy. Instead, averaging cancels out extremes (a high and a low tend to meet in the middle) and concentrates results near the centre, manufacturing a clean bell curve from almost any starting shape.',
        no: 'Folk forventer at resultatet skal ligne på inndataene — at det å ta gjennomsnitt av flate, skjeve eller piggete data bør gi noe like rotete. I stedet opphever gjennomsnitt ytterpunkter (en høy og en lav møtes gjerne på midten) og samler resultatene nær midten, og fabrikkerer en ren klokkekurve fra nesten hvilken som helst utgangsform.'
      },
      example: {
        en: 'A single die is equally likely to show 1 through 6 — perfectly flat. But the average of 30 dice is overwhelmingly near 3.5, with a smooth bell-shaped spread of values around it. The same mechanism explains why human heights, measurement errors, and test scores all tend to be normally distributed: each is the sum of many small independent factors.',
        no: 'En enkelt terning er like sannsynlig å vise 1 til 6 — fullstendig flatt. Men gjennomsnittet av 30 terninger ligger overveldende nær 3,5, med en jevn klokkeformet spredning av verdier rundt. Den samme mekanismen forklarer hvorfor menneskehøyder, målefeil og prøveresultater alle har en tendens til å være normalfordelte: hver er summen av mange små uavhengige faktorer.'
      },
      realWorld: {
        en: 'It justifies the margin of error in polls, the control limits in factory quality control, and the great majority of statistical tests used across science, medicine, and finance. Almost any time you see a confidence interval, the central limit theorem is doing the work behind it.',
        no: 'Den rettferdiggjør feilmarginen i meningsmålinger, kontrollgrensene i kvalitetskontroll på fabrikker, og det store flertallet av statistiske tester som brukes på tvers av vitenskap, medisin og finans. Nesten hver gang du ser et konfidensintervall, er det sentralgrenseteoremet som gjør jobben bak.'
      }
    },
    related: ['law-of-large-numbers', 'expected-value']
  },
  {
    id: 'expected-value',
    module: 'probability-statistics',
    name: { en: 'Expected Value', no: 'Forventningsverdi' },
    prompts: {
      easy: {
        en: 'Which concept describes the long-run average outcome of a gamble, weighting each result by its probability?',
        no: 'Hvilket konsept beskriver det langsiktige gjennomsnittsutfallet av et veddemål, der hvert resultat vektes med sin sannsynlighet?'
      },
      medium: {
        en: 'A lottery ticket costs $2 but pays $1,000,000 with a one-in-ten-million chance. Multiplying the prize by its probability shows the average value is far below the price. Which concept is this?',
        no: 'En lottokupong koster 2 kr, men gir 1 000 000 kr med én sjanse av ti millioner. Å gange premien med sannsynligheten viser at gjennomsnittsverdien er langt under prisen. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why can a bet be a bad idea even when a huge win is possible, and a good idea even when losses are common?',
        no: 'Hvorfor kan et veddemål være en dårlig idé selv når en enorm gevinst er mulig, og en god idé selv når tap er vanlig?'
      }
    },
    explanation: {
      summary: {
        en: 'The probability-weighted average of all possible outcomes — what you would earn per play on average if you repeated a gamble forever.',
        no: 'Det sannsynlighetsvektede gjennomsnittet av alle mulige utfall — hva du ville tjent per spill i snitt hvis du gjentok et veddemål i det uendelige.'
      },
      whyInteresting: {
        en: 'It compresses an uncertain choice into a single comparable number, making it the cornerstone of rational decision-making under risk. Two bets with wildly different prizes and odds can be ranked instantly once you compute each one’s expected value.',
        no: 'Den komprimerer et usikkert valg til ett sammenlignbart tall, noe som gjør den til hjørnesteinen i rasjonell beslutningstaking under risiko. To veddemål med vidt forskjellige premier og odds kan rangeres umiddelbart når du regner ut forventningsverdien til hvert av dem.'
      },
      whyIntuitionFails: {
        en: 'We are seduced by the *size* of a possible prize or loss rather than its probability-weighted value. A tiny chance at a jackpot feels bigger than the maths allows, and a small chance of ruin feels safely ignorable. (A caveat: for life-changing or catastrophic stakes, pure expected value isn’t the whole story — risk and the value of money itself matter too.)',
        no: 'Vi forføres av *størrelsen* på en mulig gevinst eller et tap snarere enn dens sannsynlighetsvektede verdi. En bitte liten sjanse for jackpot føles større enn matematikken tillater, og en liten sjanse for ruin føles trygt å overse. (Et forbehold: for livsendrende eller katastrofale innsatser er ren forventningsverdi ikke hele historien — risiko og verdien av penger i seg selv betyr også noe.)'
      },
      example: {
        en: 'A lottery with a 1-in-10-million chance to win $1,000,000 has an expected value of just $0.10 per ticket (1,000,000 ÷ 10,000,000). So a $2 ticket loses $1.90 on average, however tempting the jackpot. Casinos and lotteries survive precisely because every bet they offer has a negative expected value for the player.',
        no: 'Et lotteri med 1 sjanse av 10 millioner til å vinne 1 000 000 kr har en forventningsverdi på bare 0,10 kr per kupong (1 000 000 ÷ 10 000 000). Så en kupong til 2 kr taper i snitt 1,90 kr, uansett hvor fristende jackpoten er. Kasinoer og lotterier overlever nettopp fordi hvert veddemål de tilbyr har en negativ forventningsverdi for spilleren.'
      },
      realWorld: {
        en: 'It guides insurance pricing, investment decisions, business strategy, and any choice where outcomes are uncertain but quantifiable. Paired with the Law of Large Numbers, it is why a casino with a tiny edge per bet is guaranteed to profit over millions of plays.',
        no: 'Den styrer prising av forsikring, investeringsbeslutninger, forretningsstrategi og ethvert valg der utfallene er usikre, men målbare. Sammen med de store talls lov er den grunnen til at et kasino med en bitte liten fordel per veddemål er garantert å tjene penger over millioner av spill.'
      }
    },
    related: ['law-of-large-numbers', 'gamblers-fallacy', 'bayesian-reasoning']
  },
  {
    id: 'correlation-causation',
    module: 'probability-statistics',
    name: { en: 'Correlation vs. Causation', no: 'Korrelasjon og kausalitet' },
    prompts: {
      easy: {
        en: 'Which concept warns that two things moving together does not prove one causes the other?',
        no: 'Hvilket konsept advarer om at to ting som beveger seg sammen ikke beviser at den ene forårsaker den andre?'
      },
      medium: {
        en: 'Ice cream sales and drowning deaths rise and fall together over the year, yet banning ice cream would not save a single swimmer. Which concept explains why?',
        no: 'Iskremsalg og drukningsdødsfall stiger og faller sammen gjennom året, men å forby iskrem ville ikke redde en eneste svømmer. Hvilket konsept forklarer hvorfor?'
      },
      hard: {
        en: 'Why can a hidden third variable create a strong statistical link between two things that have no direct effect on each other?',
        no: 'Hvorfor kan en skjult tredje variabel skape en sterk statistisk sammenheng mellom to ting som ikke har noen direkte virkning på hverandre?'
      }
    },
    explanation: {
      summary: {
        en: 'Two variables that move together (correlate) need not be causally linked; the connection may be coincidence, reverse causation, or the work of a hidden common cause.',
        no: 'To variabler som beveger seg sammen (korrelerer) trenger ikke å være årsakssammenhengende; forbindelsen kan være tilfeldig, omvendt kausalitet, eller verket til en skjult felles årsak.'
      },
      whyInteresting: {
        en: 'It is arguably the single most important idea for not being fooled by data. Almost every misleading statistic in the news survives only because the reader silently upgrades a correlation into a cause. Recognising the gap is the beginning of statistical literacy.',
        no: 'Den er uten tvil den enkeltstående viktigste idéen for ikke å bli lurt av data. Nesten hver villedende statistikk i nyhetene overlever bare fordi leseren stille oppgraderer en korrelasjon til en årsak. Å gjenkjenne gapet er begynnelsen på statistisk forståelse.'
      },
      whyIntuitionFails: {
        en: 'Our minds evolved to detect causes from co-occurrence — it was safer to assume the rustle in the grass meant a predator. So when two things rise together, we instantly narrate “one causes the other”, rarely pausing to ask whether a third factor drives both, or whether the causation runs the other way.',
        no: 'Sinnet vårt utviklet seg til å oppdage årsaker fra samtidighet — det var tryggere å anta at raslingen i gresset betydde et rovdyr. Så når to ting stiger sammen, forteller vi øyeblikkelig “den ene forårsaker den andre”, og stopper sjelden for å spørre om en tredje faktor driver begge, eller om kausaliteten går motsatt vei.'
      },
      example: {
        en: 'Ice cream sales and drownings are strongly correlated, but neither causes the other — both are driven by a hidden common cause, hot summer weather, which independently raises ice cream sales and the number of people swimming. Only a controlled experiment, where you change one variable and hold the rest fixed, can establish genuine causation.',
        no: 'Iskremsalg og drukninger er sterkt korrelert, men ingen av dem forårsaker den andre — begge drives av en skjult felles årsak, varmt sommervær, som uavhengig øker iskremsalget og antallet som svømmer. Bare et kontrollert eksperiment, der du endrer én variabel og holder resten fast, kan fastslå ekte kausalitet.'
      },
      realWorld: {
        en: 'It is essential for reading health headlines, economic claims, and advertising (“users of our app are happier!”). It is the very reason randomised controlled trials are the gold standard of evidence: randomisation breaks the link to hidden common causes, isolating the true effect.',
        no: 'Den er avgjørende for å lese helseoverskrifter, økonomiske påstander og reklame (“brukere av appen vår er lykkeligere!”). Den er selve grunnen til at randomiserte kontrollerte studier er gullstandarden for bevis: randomisering bryter koblingen til skjulte felles årsaker og isolerer den sanne effekten.'
      }
    },
    related: ['regression-to-the-mean', 'simpsons-paradox', 'sampling-bias']
  },
  {
    id: 'prosecutors-fallacy',
    module: 'probability-statistics',
    name: { en: 'Prosecutor’s Fallacy', no: 'Aktorfeilslutningen' },
    prompts: {
      easy: {
        en: 'Which concept describes confusing the chance of the evidence given innocence with the chance of innocence given the evidence?',
        no: 'Hvilket konsept beskriver det å forveksle sjansen for bevisene gitt uskyld med sjansen for uskyld gitt bevisene?'
      },
      medium: {
        en: 'A lawyer argues that because a DNA match has only a 1-in-a-million chance of occurring at random, there is only a 1-in-a-million chance the defendant is innocent. Which concept is this error?',
        no: 'En advokat hevder at fordi en DNA-match bare har 1 sjanse av en million for å oppstå tilfeldig, er det bare 1 sjanse av en million for at tiltalte er uskyldig. Hvilket konsept er denne feilen?'
      },
      hard: {
        en: 'Why does a one-in-a-million match in a city of millions point to several possible suspects, rather than to certain guilt?',
        no: 'Hvorfor peker en match på én av en million i en by med millioner mot flere mulige mistenkte, snarere enn mot sikker skyld?'
      }
    },
    explanation: {
      summary: {
        en: 'A reasoning error that confuses P(evidence | innocent) with P(innocent | evidence), making weak statistical evidence sound like near-certain guilt.',
        no: 'En resonneringsfeil som forveksler P(bevis | uskyldig) med P(uskyldig | bevis), og får svake statistiske bevis til å høres ut som nesten sikker skyld.'
      },
      whyInteresting: {
        en: 'It shows how a single, subtle swap of two conditional probabilities can be the difference between freedom and a prison cell. It is the courtroom face of conditional probability, and a stark example of why statistical literacy is not merely academic.',
        no: 'Den viser hvordan én eneste, subtil ombytting av to betingede sannsynligheter kan være forskjellen mellom frihet og en fengselscelle. Den er rettssalens ansikt på betinget sannsynlighet, og et grelt eksempel på hvorfor statistisk forståelse ikke bare er akademisk.'
      },
      whyIntuitionFails: {
        en: '“One in a million” sounds overwhelming, so we hear it as the probability of innocence. But it is really the probability of a random match, and it ignores the base rate: in a population of ten million, roughly ten innocent people would also match by chance. The rarity of the match is not the rarity of innocence.',
        no: '“Én av en million” høres overveldende ut, så vi hører det som sannsynligheten for uskyld. Men det er egentlig sannsynligheten for en tilfeldig match, og det ignorerer grunnraten: i en befolkning på ti millioner ville rundt ti uskyldige også matche ved tilfeldighet. Sjeldenheten til matchen er ikke sjeldenheten til uskyld.'
      },
      example: {
        en: 'In the case of Sally Clark, a mother was convicted partly on the claim that two cot deaths in one family had a “1 in 73 million” chance. The figure was both statistically wrong (it assumed the deaths were independent) and misused as if it were the probability of her innocence. The conviction was later overturned — a textbook prosecutor’s fallacy.',
        no: 'I saken til Sally Clark ble en mor dømt delvis på påstanden om at to krybbedødsfall i én familie hadde en sjanse på “1 av 73 millioner”. Tallet var både statistisk feil (det antok at dødsfallene var uavhengige) og misbrukt som om det var sannsynligheten for hennes uskyld. Domfellelsen ble senere opphevet — en lærebokeksempel på aktorfeilslutningen.'
      },
      realWorld: {
        en: 'It recurs in courtrooms, forensic science, and any argument that dresses a conditional probability up as a verdict. The fix is to always ask the second question: out of everyone who would produce this evidence, how many are actually guilty?',
        no: 'Den dukker stadig opp i rettssaler, rettsmedisin og enhver argumentasjon som kler en betinget sannsynlighet ut som en dom. Løsningen er alltid å stille det andre spørsmålet: av alle som ville produsert dette beviset, hvor mange er faktisk skyldige?'
      }
    },
    related: ['conditional-probability', 'bayesian-reasoning', 'base-rate-fallacy']
  },
  {
    id: 'sampling-bias',
    module: 'probability-statistics',
    name: { en: 'Sampling Bias', no: 'Utvalgsskjevhet' },
    prompts: {
      easy: {
        en: 'Which concept describes drawing conclusions from a sample that is not representative of the whole population?',
        no: 'Hvilket konsept beskriver det å trekke konklusjoner fra et utvalg som ikke er representativt for hele populasjonen?'
      },
      medium: {
        en: 'A magazine surveys its own readers about reading habits and concludes that almost everyone loves magazines. Which concept explains the flawed conclusion?',
        no: 'Et magasin spør sine egne lesere om lesevaner og konkluderer med at nesten alle elsker magasiner. Hvilket konsept forklarer den feilaktige konklusjonen?'
      },
      hard: {
        en: 'Why can a survey with millions of responses still be badly wrong if the respondents were not chosen at random?',
        no: 'Hvorfor kan en undersøkelse med millioner av svar fortsatt være helt feil hvis respondentene ikke ble valgt tilfeldig?'
      }
    },
    explanation: {
      summary: {
        en: 'When the sample studied differs systematically from the population it is meant to represent, every conclusion drawn from it is skewed in the same direction.',
        no: 'Når utvalget som studeres skiller seg systematisk fra populasjonen det skal representere, blir hver konklusjon man trekker fra det, skjev i samme retning.'
      },
      whyInteresting: {
        en: 'It reveals that *how* data is gathered can matter far more than how much of it you have. A biased sample does not get better with size — it just becomes a more confident wrong answer. This is why a small random sample beats a huge self-selected one.',
        no: 'Den avslører at *hvordan* data samles inn kan bety langt mer enn hvor mye du har. Et skjevt utvalg blir ikke bedre med størrelse — det blir bare et mer selvsikkert galt svar. Det er derfor et lite tilfeldig utvalg slår et stort selvvalgt.'
      },
      whyIntuitionFails: {
        en: 'Big numbers feel authoritative, so a survey with a million responses seems unimpeachable. But if those million people selected themselves — by owning a phone, visiting a website, or caring enough to reply — they may differ systematically from everyone who did not, and no amount of extra data corrects that tilt.',
        no: 'Store tall føles autoritative, så en undersøkelse med en million svar virker uangripelig. Men hvis de millionene valgte seg selv — ved å eie en telefon, besøke et nettsted, eller bry seg nok til å svare — kan de skille seg systematisk fra alle som ikke gjorde det, og ingen mengde ekstra data retter opp den skjevheten.'
      },
      example: {
        en: 'In 1936 the Literary Digest mailed a poll to 2.4 million people and confidently predicted Landon would beat Roosevelt. Its lists came from car registrations and telephone books, which in the Depression skewed wealthy and Republican. Roosevelt won in a landslide. A closely related cousin is survivorship bias — studying only the survivors (the planes that returned, the funds that still exist) and missing the silent failures.',
        no: 'I 1936 sendte Literary Digest en måling til 2,4 millioner mennesker og spådde selvsikkert at Landon ville slå Roosevelt. Listene kom fra bilregistreringer og telefonkataloger, som under depresjonen var skjevt mot velstående og republikanske. Roosevelt vant overlegent. En nær slektning er overlevelsesskjevhet — å bare studere de som overlevde (flyene som kom tilbake, fondene som fortsatt finnes) og overse de tause feilene.'
      },
      realWorld: {
        en: 'It undermines online polls, product reviews, social-media sentiment, medical studies, and the training data behind AI systems (which can inherit and amplify whoever was over- or under-represented). It is the reason careful random sampling is one of the most prized tools in statistics.',
        no: 'Den undergraver nettavstemninger, produktanmeldelser, stemninger i sosiale medier, medisinske studier og treningsdataene bak KI-systemer (som kan arve og forsterke hvem som var over- eller underrepresentert). Den er grunnen til at nøye tilfeldig utvalg er et av de mest verdsatte verktøyene i statistikk.'
      }
    },
    related: ['correlation-causation', 'simpsons-paradox', 'law-of-large-numbers']
  },
  {
    id: 'benfords-law',
    module: 'probability-statistics',
    name: { en: 'Benford’s Law', no: 'Benfords lov' },
    prompts: {
      easy: {
        en: 'Which concept describes the surprising pattern that in many real-world datasets, the digit 1 appears as the leading digit far more often than 9?',
        no: 'Hvilket konsept beskriver det overraskende mønsteret at i mange datasett fra virkeligheten opptrer sifferet 1 som ledende siffer langt oftere enn 9?'
      },
      medium: {
        en: 'An auditor checks a company’s expense reports and finds the leading digits don’t follow their natural frequencies — too few 1s, too many 7s. Which concept flags this as possible fraud?',
        no: 'En revisor sjekker et selskaps utgiftsrapporter og finner at de ledende sifrene ikke følger sine naturlige frekvenser — for få 1-ere, for mange 7-ere. Hvilket konsept flagger dette som mulig svindel?'
      },
      hard: {
        en: 'Why do the leading digits of many naturally occurring numbers follow a logarithmic pattern rather than appearing equally often?',
        no: 'Hvorfor følger de ledende sifrene i mange naturlig forekommende tall et logaritmisk mønster i stedet for å opptre like ofte?'
      }
    },
    explanation: {
      summary: {
        en: 'In many natural datasets, the first digit is a 1 about 30% of the time and a 9 less than 5% of the time, following a logarithmic distribution rather than being uniform.',
        no: 'I mange naturlige datasett er det første sifferet 1 omtrent 30 % av tiden og 9 mindre enn 5 % av tiden, og følger en logaritmisk fordeling i stedet for å være uniform.'
      },
      whyInteresting: {
        en: 'It is a hidden order lurking inside messy real-world numbers — populations, river lengths, stock prices, physical constants, street addresses — that no one would expect to share any structure. And it has a powerful practical use: spotting numbers that humans made up.',
        no: 'Det er en skjult orden som lurer inne i rotete tall fra virkeligheten — folketall, elvelengder, aksjekurser, fysiske konstanter, gateadresser — som ingen ville forventet deler noen struktur. Og den har en kraftig praktisk nytte: å avsløre tall som mennesker har funnet på.'
      },
      whyIntuitionFails: {
        en: 'We naturally assume each leading digit 1–9 should be equally likely, around 11% each. But quantities that grow by percentages (multiplicatively) spend much more “time” passing through values that begin with 1 than with 9 — going from 100 to 200 doubles the value, while 900 to 1,000 is only an 11% rise. That uneven journey produces the lopsided digit pattern.',
        no: 'Vi antar naturlig at hvert ledende siffer 1–9 bør være like sannsynlig, rundt 11 % hver. Men størrelser som vokser med prosenter (multiplikativt) tilbringer mye mer “tid” gjennom verdier som begynner med 1 enn med 9 — å gå fra 100 til 200 dobler verdien, mens 900 til 1 000 bare er en økning på 11 %. Den ujevne reisen gir det skjeve siffermønsteret.'
      },
      example: {
        en: 'Across many real datasets, about 30.1% of numbers start with 1, 17.6% with 2, and only 4.6% with 9. People fabricating figures tend to spread the digits out too evenly, so their leading digits look suspiciously uniform — a fingerprint that auditors can detect.',
        no: 'På tvers av mange ekte datasett starter omtrent 30,1 % av tallene med 1, 17,6 % med 2, og bare 4,6 % med 9. Folk som fabrikkerer tall, har en tendens til å spre sifrene for jevnt, så deres ledende siffer ser mistenkelig uniforme ut — et fingeravtrykk som revisorer kan oppdage.'
      },
      realWorld: {
        en: 'It is used in forensic accounting, tax-audit software, and election-fraud detection to flag datasets that may have been invented or manipulated. It has been admitted as evidence in court and applied to everything from corporate books to reported COVID case counts.',
        no: 'Den brukes i rettsmedisinsk regnskap, programvare for skatterevisjon og avsløring av valgfusk for å flagge datasett som kan ha blitt oppdiktet eller manipulert. Den har blitt godtatt som bevis i retten og anvendt på alt fra selskapsregnskaper til rapporterte COVID-tall.'
      }
    },
    related: ['law-of-large-numbers', 'sampling-bias']
  },

  // ============================================================
  // Economics & Systems Thinking
  // ============================================================
  {
    id: 'opportunity-cost',
    module: 'economics-systems',
    name: { en: 'Opportunity Cost', no: 'Alternativkostnad' },
    prompts: {
      easy: {
        en: 'Which concept describes the value of the next-best alternative you give up whenever you make a choice?',
        no: 'Hvilket konsept beskriver verdien av det nest beste alternativet du gir avkall på hver gang du tar et valg?'
      },
      medium: {
        en: 'You spend a free Saturday playing video games. An economist points out the real cost wasn’t zero — it was the hike, the extra shift, or the studying you gave up instead. Which concept is this?',
        no: 'Du bruker en ledig lørdag på å spille videospill. En økonom påpeker at den virkelige kostnaden ikke var null — det var turen, ekstravakten eller lesingen du ga opp i stedet. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why is the true cost of any decision not the money you spend, but the most valuable thing you could have done instead?',
        no: 'Hvorfor er den sanne kostnaden ved enhver beslutning ikke pengene du bruker, men det mest verdifulle du kunne ha gjort i stedet?'
      }
    },
    explanation: {
      summary: {
        en: 'The opportunity cost of a choice is the value of the best alternative you forgo by making it — what you give up, not just what you pay.',
        no: 'Alternativkostnaden ved et valg er verdien av det beste alternativet du gir avkall på ved å ta det — det du gir opp, ikke bare det du betaler.'
      },
      whyInteresting: {
        en: 'It reframes “cost” from money changing hands to alternatives sacrificed, revealing that even free time and “free” choices carry a real price. It is the lens that turns every decision into a comparison rather than an isolated act.',
        no: 'Den omformulerer “kostnad” fra penger som skifter eier til alternativer som ofres, og avslører at selv fritid og “gratis” valg har en virkelig pris. Den er linsen som gjør hver beslutning til en sammenligning snarere enn en isolert handling.'
      },
      whyIntuitionFails: {
        en: 'We tend to count only explicit, out-of-pocket costs and treat anything “free” as costless. But every yes is a no to everything else; ignoring the forgone alternative makes choices look cheaper than they are and leads to systematically poor decisions.',
        no: 'Vi pleier å telle bare eksplisitte kostnader vi betaler direkte, og behandler alt “gratis” som kostnadsfritt. Men hvert ja er et nei til alt annet; å ignorere det tapte alternativet får valg til å se billigere ut enn de er, og fører til systematisk dårlige beslutninger.'
      },
      example: {
        en: 'Choosing to study for a degree may cost $40,000 in tuition — but the larger cost is often the three years of salary you don’t earn while studying. A government building a hospital gives up the school it could have built with the same funds.',
        no: 'Å velge å ta en grad kan koste 40 000 kr i studieavgift — men den større kostnaden er ofte de tre årene med lønn du ikke tjener mens du studerer. En regjering som bygger et sykehus, gir opp skolen den kunne ha bygget for de samme midlene.'
      },
      realWorld: {
        en: 'It underlies every rational budget, investment, and policy trade-off, and is the reason economists insist there is “no such thing as a free lunch”. Time, attention, and capital all have alternative uses.',
        no: 'Den ligger bak ethvert rasjonelt budsjett, enhver investering og ethvert politisk veivalg, og er grunnen til at økonomer insisterer på at “det finnes ikke noe slikt som en gratis lunsj”. Tid, oppmerksomhet og kapital har alle alternative bruksområder.'
      }
    },
    related: ['comparative-advantage', 'incentives', 'sunk-cost-fallacy', 'diminishing-returns']
  },
  {
    id: 'comparative-advantage',
    module: 'economics-systems',
    name: { en: 'Comparative Advantage', no: 'Komparativt fortrinn' },
    prompts: {
      easy: {
        en: 'Which concept explains why two parties both gain from trade even when one of them is better at producing everything?',
        no: 'Hvilket konsept forklarer hvorfor to parter begge tjener på handel selv når den ene er bedre til å produsere alt?'
      },
      medium: {
        en: 'A brilliant lawyer can also type faster than any assistant in town. Yet she still hires an assistant to type, and both end up better off. Which concept explains this?',
        no: 'En glimrende advokat kan også skrive raskere enn noen assistent i byen. Likevel ansetter hun en assistent til å skrive, og begge kommer bedre ut. Hvilket konsept forklarer dette?'
      },
      hard: {
        en: 'Why can a country that is worse at making every product still benefit by specialising and trading?',
        no: 'Hvorfor kan et land som er dårligere til å lage hvert eneste produkt, likevel tjene på å spesialisere seg og handle?'
      }
    },
    explanation: {
      summary: {
        en: 'Even if one party is more productive at everything (an absolute advantage), both gain by specialising in what they give up the least to produce and trading for the rest.',
        no: 'Selv om den ene parten er mer produktiv på alt (et absolutt fortrinn), tjener begge på å spesialisere seg i det de gir opp minst for å produsere, og bytte til seg resten.'
      },
      whyInteresting: {
        en: 'It is one of the least intuitive yet most powerful results in economics: trade creates value not from who is best, but from differences in opportunity cost. It shows cooperation can enrich everyone — even the “inferior” producer.',
        no: 'Det er et av de minst intuitive, men mest kraftfulle resultatene i økonomi: handel skaper verdi ikke ut fra hvem som er best, men ut fra forskjeller i alternativkostnad. Det viser at samarbeid kan berike alle — også den “underlegne” produsenten.'
      },
      whyIntuitionFails: {
        en: 'We assume that if you’re better at everything, you should do everything yourself, and that trade only helps the weaker party. But your time is finite; doing low-value tasks yourself means giving up high-value ones. The gains come from each side focusing where its opportunity cost is lowest.',
        no: 'Vi antar at hvis du er bedre på alt, bør du gjøre alt selv, og at handel bare hjelper den svakere parten. Men tiden din er begrenset; å gjøre lavverdige oppgaver selv betyr å gi opp høyverdige. Gevinsten kommer fra at hver side fokuserer der dens alternativkostnad er lavest.'
      },
      example: {
        en: 'The lawyer earns $500/hour and types twice as fast as a $25/hour assistant. If she types her own letters, each hour of typing costs her $500 of legal work. By delegating typing and doing law, total output rises — so both are better off, despite her being better at both tasks.',
        no: 'Advokaten tjener 500 kr/time og skriver dobbelt så raskt som en assistent til 25 kr/time. Skriver hun brevene sine selv, koster hver skrivetime henne 500 kr i juridisk arbeid. Ved å sette bort skrivingen og drive med jus stiger den samlede produksjonen — så begge kommer bedre ut, til tross for at hun er bedre på begge oppgaver.'
      },
      realWorld: {
        en: 'It is the foundation of the case for international trade, the division of labour, and outsourcing — and explains why even the most capable person or nation benefits from specialising rather than trying to be self-sufficient.',
        no: 'Det er grunnlaget for argumentet for internasjonal handel, arbeidsdeling og utsetting — og forklarer hvorfor selv den mest dyktige personen eller nasjonen tjener på å spesialisere seg snarere enn å prøve å være selvforsynt.'
      }
    },
    related: ['opportunity-cost', 'invisible-hand', 'diminishing-returns']
  },
  {
    id: 'incentives',
    module: 'economics-systems',
    name: { en: 'Incentives', no: 'Insentiver' },
    prompts: {
      easy: {
        en: 'Which concept describes the idea that people change their behaviour in response to the rewards and penalties they face?',
        no: 'Hvilket konsept beskriver idéen om at folk endrer atferd som svar på belønningene og straffene de står overfor?'
      },
      medium: {
        en: 'A city, hoping to reduce cobras, pays a bounty for every dead snake. Soon people are breeding cobras to collect the reward, and the snake population grows. Which concept explains the backfire?',
        no: 'En by som håper å redusere antallet kobraer, betaler en dusør for hver døde slange. Snart avler folk kobraer for å hente belønningen, og slangebestanden vokser. Hvilket konsept forklarer at det slo tilbake?'
      },
      hard: {
        en: 'Why do well-meaning rules so often produce the opposite of their intended effect?',
        no: 'Hvorfor gir velmenende regler så ofte det motsatte av den tiltenkte virkningen?'
      }
    },
    explanation: {
      summary: {
        en: 'People respond to incentives — the rewards and punishments attached to actions — often in ways that are rational for them but unintended by whoever made the rule.',
        no: 'Folk reagerer på insentiver — belønningene og straffene knyttet til handlinger — ofte på måter som er rasjonelle for dem, men utilsiktede av den som lagde regelen.'
      },
      whyInteresting: {
        en: 'It is the central organising idea of economics: to understand or change behaviour, look at the incentives, not at people’s stated intentions. And it carries a warning — any incentive you create will be gamed in ways you didn’t foresee.',
        no: 'Det er den sentrale, organiserende idéen i økonomi: for å forstå eller endre atferd, se på insentivene, ikke på folks uttalte hensikter. Og den bærer en advarsel — ethvert insentiv du skaper, vil bli utnyttet på måter du ikke forutså.'
      },
      whyIntuitionFails: {
        en: 'We design rules around the outcome we want and assume people will pursue that outcome. But people optimise for the reward as written, not the goal behind it. The gap between the two produces perverse incentives and unintended consequences.',
        no: 'Vi utformer regler rundt resultatet vi ønsker, og antar at folk vil strebe etter det resultatet. Men folk optimaliserer for belønningen slik den er skrevet, ikke for målet bak den. Gapet mellom de to gir perverse insentiver og utilsiktede konsekvenser.'
      },
      example: {
        en: 'The “cobra effect”: colonial Delhi paid a bounty per dead cobra, so locals farmed cobras for income; when the scheme ended and the snakes were freed, the population was worse than before. Paying surgeons per operation can encourage unnecessary surgery; rewarding lines of code can produce bloated software.',
        no: '“Kobraeffekten”: kolonitidens Delhi betalte en dusør per døde kobra, så lokalbefolkningen avlet kobraer for inntekt; da ordningen ble avsluttet og slangene sluppet fri, var bestanden verre enn før. Å betale kirurger per operasjon kan oppmuntre til unødvendig kirurgi; å belønne kodelinjer kan gi oppblåst programvare.'
      },
      realWorld: {
        en: 'It shapes tax policy, executive pay, healthcare, environmental regulation, and management. Whenever a system misbehaves, the first question is usually “what is it actually rewarding?”',
        no: 'Den former skattepolitikk, lederlønninger, helsevesen, miljøregulering og ledelse. Når et system oppfører seg galt, er det første spørsmålet vanligvis “hva belønner det egentlig?”'
      }
    },
    related: ['goodharts-law', 'moral-hazard', 'principal-agent-problem', 'externalities']
  },
  {
    id: 'goodharts-law',
    module: 'economics-systems',
    name: { en: 'Goodhart’s Law', no: 'Goodharts lov' },
    prompts: {
      easy: {
        en: 'Which concept warns that when a measure becomes a target, it stops being a good measure?',
        no: 'Hvilket konsept advarer om at når et mål blir et måltall man styrer etter, slutter det å være et godt mål?'
      },
      medium: {
        en: 'A call centre rewards staff for short call times. Calls get shorter — because workers hang up on customers to hit the target, while the actual problems go unsolved. Which concept is this?',
        no: 'Et kundesenter belønner ansatte for korte samtaletider. Samtalene blir kortere — fordi de ansatte legger på røret for å nå måltallet, mens de faktiske problemene forblir uløste. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does optimising hard for a single metric tend to destroy the very quality the metric was meant to capture?',
        no: 'Hvorfor har det å optimalisere hardt for ett enkelt måltall en tendens til å ødelegge nettopp den kvaliteten måltallet skulle fange?'
      }
    },
    explanation: {
      summary: {
        en: 'When a measure of success becomes the target people are rewarded for, they optimise the measure itself — often hollowing out the underlying goal it was only ever a proxy for.',
        no: 'Når et mål på suksess blir måltallet folk belønnes for, optimaliserer de selve måltallet — og uthuler ofte det underliggende målet det bare var en tilnærming til.'
      },
      whyInteresting: {
        en: 'It exposes a deep flaw in management-by-numbers: metrics are useful precisely because no one is gaming them, and the moment they carry rewards, that usefulness erodes. It is the systems-thinking cousin of perverse incentives.',
        no: 'Den avslører en dyp svakhet ved styring etter tall: måltall er nyttige nettopp fordi ingen manipulerer dem, og i det øyeblikket de bærer belønninger, forvitrer den nytten. Den er systemtenkningens slektning av perverse insentiver.'
      },
      whyIntuitionFails: {
        en: 'We assume that if a number reflects the goal, pushing the number up must push the goal up too. But a metric is only a proxy; once it is targeted, people exploit the gap between the proxy and the real aim, improving the number while degrading the substance.',
        no: 'Vi antar at hvis et tall gjenspeiler målet, må det å presse tallet opp også presse målet opp. Men et måltall er bare en tilnærming; når det blir styringsmål, utnytter folk gapet mellom tilnærmingen og det egentlige målet, og forbedrer tallet mens de forringer substansen.'
      },
      example: {
        en: 'Rewarding surgeons by survival rate leads them to refuse the riskiest patients. Paying teachers by test scores produces teaching-to-the-test and even cheating. Tracking “tickets closed” in support encourages closing tickets without fixing the problem.',
        no: 'Å belønne kirurger etter overlevelsesrate får dem til å avvise de mest risikofylte pasientene. Å betale lærere etter prøveresultater gir undervisning rettet mot prøven og til og med juks. Å måle “lukkede saker” i kundestøtte oppmuntrer til å lukke saker uten å løse problemet.'
      },
      realWorld: {
        en: 'It haunts education, healthcare, policing (arrest quotas), corporate KPIs, and AI training, where optimising a proxy reward can produce unintended behaviour. The lesson: watch what a metric does once it has stakes attached.',
        no: 'Den hjemsøker utdanning, helsevesen, politiarbeid (arrestkvoter), bedrifters måltall (KPI-er) og KI-trening, der det å optimalisere en tilnærmet belønning kan gi utilsiktet atferd. Lærdommen: følg med på hva et måltall gjør når det får noe på spill.'
      }
    },
    related: ['incentives', 'principal-agent-problem', 'feedback-loops']
  },
  {
    id: 'market-failure',
    module: 'economics-systems',
    name: { en: 'Market Failure', no: 'Markedssvikt' },
    prompts: {
      easy: {
        en: 'Which concept describes a situation where a free market, left alone, allocates resources inefficiently?',
        no: 'Hvilket konsept beskriver en situasjon der et fritt marked, overlatt til seg selv, fordeler ressurser ineffektivt?'
      },
      medium: {
        en: 'A factory pollutes a river for free because no one owns it, so it over-pollutes even though the harm to everyone downstream outweighs its savings. Which concept is this?',
        no: 'En fabrikk forurenser en elv gratis fordi ingen eier den, så den forurenser for mye selv om skaden på alle nedstrøms overgår besparelsene. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why can a market of perfectly rational, self-interested actors still produce an outcome that is bad for everyone?',
        no: 'Hvorfor kan et marked av fullstendig rasjonelle, egeninteresserte aktører likevel gi et utfall som er dårlig for alle?'
      }
    },
    explanation: {
      summary: {
        en: 'A market failure occurs when freely operating markets allocate goods or resources inefficiently, leaving society worse off than some alternative arrangement could.',
        no: 'Markedssvikt oppstår når frie markeder fordeler goder eller ressurser ineffektivt, slik at samfunnet kommer dårligere ut enn en alternativ ordning kunne gitt.'
      },
      whyInteresting: {
        en: 'It marks the boundary of the “invisible hand”: the conditions under which self-interest does not lead to collective good. Understanding it is what separates blanket faith in markets from a precise account of when and why they need correction.',
        no: 'Den markerer grensen for “den usynlige hånd”: vilkårene der egeninteresse ikke fører til felles beste. Å forstå den er det som skiller blind tro på markeder fra en presis forståelse av når og hvorfor de trenger korreksjon.'
      },
      whyIntuitionFails: {
        en: 'We expect that if every individual trade is voluntary and mutually beneficial, the overall result must be efficient. But when costs spill onto third parties, information is hidden, or goods can’t be priced, individually rational choices can sum to a collectively bad outcome.',
        no: 'Vi forventer at hvis hver enkelt handel er frivillig og gjensidig fordelaktig, må totalresultatet være effektivt. Men når kostnader veltes over på tredjeparter, informasjon er skjult, eller goder ikke kan prissettes, kan individuelt rasjonelle valg summere seg til et kollektivt dårlig utfall.'
      },
      example: {
        en: 'Pollution (an externality), overfishing of unowned seas, monopolies restricting output to raise prices, and the under-provision of public goods like clean air or basic research are all classic market failures — places where prices fail to reflect true costs and benefits.',
        no: 'Forurensning (en eksternalitet), overfiske i eierløse hav, monopoler som begrenser produksjonen for å heve prisene, og underdekning av fellesgoder som ren luft eller grunnforskning er alle klassiske markedssvikt — steder der priser ikke gjenspeiler de sanne kostnadene og fordelene.'
      },
      realWorld: {
        en: 'It is the standard economic justification for taxes, subsidies, regulation, and public provision — from carbon pricing to antitrust law to publicly funded science.',
        no: 'Den er den vanlige økonomiske begrunnelsen for skatter, subsidier, regulering og offentlig tilbud — fra karbonprising til konkurranselovgivning til offentlig finansiert forskning.'
      }
    },
    related: ['externalities', 'public-goods', 'invisible-hand', 'incentives']
  },
  {
    id: 'externalities',
    module: 'economics-systems',
    name: { en: 'Externalities', no: 'Eksternaliteter' },
    prompts: {
      easy: {
        en: 'Which concept describes a cost or benefit from an activity that falls on someone who is not part of the transaction?',
        no: 'Hvilket konsept beskriver en kostnad eller fordel fra en aktivitet som faller på noen som ikke er part i transaksjonen?'
      },
      medium: {
        en: 'A factory’s production imposes pollution on a neighbouring town that gets no say and no compensation, so the factory ignores that cost when deciding how much to produce. Which concept is this?',
        no: 'En fabrikks produksjon påfører en nabolandsby forurensning som verken får medbestemmelse eller kompensasjon, så fabrikken ignorerer den kostnaden når den bestemmer hvor mye den skal produsere. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does an activity get over-produced when its costs are paid by others, and under-produced when its benefits spill over to others?',
        no: 'Hvorfor blir en aktivitet overprodusert når kostnadene betales av andre, og underprodusert når fordelene tilfaller andre?'
      }
    },
    explanation: {
      summary: {
        en: 'An externality is a cost or benefit of an activity borne by third parties who are not part of the deal — like pollution (negative) or a neighbour’s beautiful garden (positive).',
        no: 'En eksternalitet er en kostnad eller fordel ved en aktivitet som bæres av tredjeparter som ikke er del av avtalen — som forurensning (negativ) eller en nabos vakre hage (positiv).'
      },
      whyInteresting: {
        en: 'It explains a huge class of social problems with one idea: when the price of an action doesn’t include all its effects, people do too much of the harmful and too little of the beneficial. It turns moral complaints about pollution into a precise economic diagnosis.',
        no: 'Den forklarer en stor klasse av samfunnsproblemer med én idé: når prisen på en handling ikke inkluderer alle virkningene, gjør folk for mye av det skadelige og for lite av det gunstige. Den gjør moralske klager over forurensning om til en presis økonomisk diagnose.'
      },
      whyIntuitionFails: {
        en: 'We judge the cost of an action by what the actor pays, and assume a voluntary market price reflects true cost. But when part of the cost is dumped on outsiders, the private price is artificially low, so the harmful activity looks cheap and expands beyond what’s good for society.',
        no: 'Vi bedømmer kostnaden ved en handling ut fra hva aktøren betaler, og antar at en frivillig markedspris gjenspeiler den sanne kostnaden. Men når en del av kostnaden dyttes over på utenforstående, er den private prisen kunstig lav, så den skadelige aktiviteten ser billig ut og vokser utover det som er bra for samfunnet.'
      },
      example: {
        en: 'A coal plant’s electricity is cheap partly because the health and climate costs of its smoke are paid by everyone else, not the buyer. Conversely, vaccination has a positive externality — protecting others too — so a pure market tends to under-provide it.',
        no: 'Strømmen fra et kullkraftverk er billig delvis fordi helse- og klimakostnadene ved røyken betales av alle andre, ikke av kjøperen. Omvendt har vaksinasjon en positiv eksternalitet — den beskytter også andre — så et rent marked har en tendens til å tilby for lite av den.'
      },
      realWorld: {
        en: 'It is the core argument for carbon taxes, pollution limits, congestion charges, and subsidies for education and research — all attempts to make prices tell the truth about full costs and benefits.',
        no: 'Den er kjernen i argumentet for karbonavgifter, forurensningsgrenser, køprising og subsidier til utdanning og forskning — alle forsøk på å få prisene til å fortelle sannheten om de fulle kostnadene og fordelene.'
      }
    },
    related: ['market-failure', 'public-goods', 'incentives']
  },
  {
    id: 'supply-and-demand',
    module: 'economics-systems',
    name: { en: 'Supply and Demand', no: 'Tilbud og etterspørsel' },
    prompts: {
      easy: {
        en: 'Which concept describes how the price of a good settles where the amount buyers want equals the amount sellers offer?',
        no: 'Hvilket konsept beskriver hvordan prisen på en vare legger seg der mengden kjøperne vil ha er lik mengden selgerne tilbyr?'
      },
      medium: {
        en: 'After a frost destroys half the coffee crop, coffee prices jump — not because of any decree, but because scarce supply meets unchanged demand. Which concept is this?',
        no: 'Etter at frost ødelegger halvparten av kaffeavlingen, hopper kaffeprisene opp — ikke på grunn av noe påbud, men fordi knapt tilbud møter uendret etterspørsel. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why can prices coordinate millions of strangers, with no central planner, into matching what is produced with what is wanted?',
        no: 'Hvorfor kan priser koordinere millioner av fremmede, uten noen sentral planlegger, slik at det som produseres samsvarer med det som ønskes?'
      }
    },
    explanation: {
      summary: {
        en: 'Prices tend to move toward the level where the quantity supplied equals the quantity demanded, balancing scarcity against desire.',
        no: 'Priser har en tendens til å bevege seg mot nivået der tilbudt mengde er lik etterspurt mengde, og balanserer knapphet mot ønske.'
      },
      whyInteresting: {
        en: 'It is the most basic engine of a market economy: a decentralised signal that needs no one in charge. A price rise tells producers to make more and buyers to use less, automatically steering resources toward where they’re most valued.',
        no: 'Den er den mest grunnleggende motoren i en markedsøkonomi: et desentralisert signal som ikke trenger noen som styrer. En prisøkning forteller produsenter at de skal lage mer og kjøpere at de skal bruke mindre, og styrer automatisk ressurser dit de verdsettes høyest.'
      },
      whyIntuitionFails: {
        en: 'People often see prices as arbitrary or simply “what sellers want”, and react to shortages by demanding price controls. But a price is information; suppressing it (say, with a price cap) removes the signal that would have drawn in more supply, often deepening the very shortage it meant to ease.',
        no: 'Folk ser ofte på priser som vilkårlige eller rett og slett “det selgerne vil ha”, og reagerer på mangel ved å kreve priskontroll. Men en pris er informasjon; å undertrykke den (for eksempel med et pristak) fjerner signalet som ville trukket inn mer tilbud, og forverrer ofte nettopp den mangelen den skulle lette.'
      },
      example: {
        en: 'When a hurricane hits, demand for generators spikes and prices rise. The higher price is painful, but it both rations scarce generators toward those who need them most and lures suppliers to rush more in. Cap the price, and the generators simply vanish from the shelves.',
        no: 'Når en orkan slår til, skyter etterspørselen etter strømaggregater i været og prisene stiger. Den høyere prisen er smertefull, men den både rasjonerer de knappe aggregatene til dem som trenger dem mest og lokker leverandører til å skynde på flere. Sett et tak på prisen, og aggregatene forsvinner rett og slett fra hyllene.'
      },
      realWorld: {
        en: 'It underlies everything from housing costs and wages to surge pricing and interest rates, and is the reason centrally planned economies struggle without the information that prices carry.',
        no: 'Den ligger bak alt fra boligkostnader og lønninger til dynamisk prising og renter, og er grunnen til at planøkonomier sliter uten informasjonen som priser bærer.'
      }
    },
    related: ['invisible-hand', 'incentives', 'diminishing-returns']
  },
  {
    id: 'invisible-hand',
    module: 'economics-systems',
    name: { en: 'Invisible Hand', no: 'Den usynlige hånd' },
    prompts: {
      easy: {
        en: 'Which concept describes how individuals pursuing their own self-interest can unintentionally produce benefits for society as a whole?',
        no: 'Hvilket konsept beskriver hvordan enkeltpersoner som forfølger sin egen egeninteresse, utilsiktet kan skape fordeler for samfunnet som helhet?'
      },
      medium: {
        en: 'A baker bakes bread not out of kindness but to earn a living, yet the town is fed; each tradesperson chasing profit ends up serving everyone’s needs. Which concept is this?',
        no: 'En baker baker brød ikke av godhet, men for å tjene til livets opphold, men likevel blir byen mettet; hver håndverker som jakter på profitt, ender med å dekke alles behov. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why can order and mutual benefit emerge from a market with no one directing it toward that goal?',
        no: 'Hvorfor kan orden og gjensidig nytte oppstå i et marked uten at noen styrer det mot det målet?'
      }
    },
    explanation: {
      summary: {
        en: 'Coined by Adam Smith, the idea that individuals pursuing private gain are “led by an invisible hand” to promote outcomes — like a well-supplied market — that none of them intended.',
        no: 'Myntet av Adam Smith, idéen om at enkeltpersoner som forfølger privat vinning, blir “ledet av en usynlig hånd” til å fremme utfall — som et velforsynt marked — som ingen av dem hadde til hensikt.'
      },
      whyInteresting: {
        en: 'It is a founding insight of economics: useful social order can be an emergent, unplanned result of countless self-interested choices. It reframes “selfish” market activity as a coordinating mechanism rather than mere greed.',
        no: 'Det er en grunnleggende innsikt i økonomi: nyttig samfunnsorden kan være et emergent, uplanlagt resultat av utallige egeninteresserte valg. Den omformulerer “egoistisk” markedsaktivitet som en koordinerende mekanisme snarere enn ren grådighet.'
      },
      whyIntuitionFails: {
        en: 'We assume good collective outcomes require good intentions and a planner to arrange them. The invisible hand shows order can arise bottom-up — but the opposite error is just as common: assuming the hand always works. It only channels self-interest toward the common good under specific conditions, which is why market failures matter.',
        no: 'Vi antar at gode kollektive utfall krever gode hensikter og en planlegger til å ordne dem. Den usynlige hånd viser at orden kan oppstå nedenfra — men den motsatte feilen er like vanlig: å anta at hånden alltid virker. Den kanaliserer bare egeninteresse mot felles beste under bestemte vilkår, og det er derfor markedssvikt betyr noe.'
      },
      example: {
        en: 'No committee assigns who bakes bread, brews coffee, or repairs shoes in a city, yet the shelves are stocked. Prices and profits guide each person toward what others value, coordinating a vast web of strangers without central command.',
        no: 'Ingen komité bestemmer hvem som baker brød, brygger kaffe eller reparerer sko i en by, men likevel er hyllene fylt. Priser og profitt leder hver person mot det andre verdsetter, og koordinerer et enormt nett av fremmede uten sentral kommando.'
      },
      realWorld: {
        en: 'It is the intellectual basis for free markets and decentralised coordination, balanced in modern economics by the study of exactly where the hand fails (externalities, monopoly, public goods) and needs correction.',
        no: 'Den er det intellektuelle grunnlaget for frie markeder og desentralisert koordinering, balansert i moderne økonomi av studiet av nøyaktig hvor hånden svikter (eksternaliteter, monopol, fellesgoder) og trenger korreksjon.'
      }
    },
    related: ['supply-and-demand', 'comparative-advantage', 'market-failure', 'emergence']
  },
  {
    id: 'moral-hazard',
    module: 'economics-systems',
    name: { en: 'Moral Hazard', no: 'Moralsk hasard' },
    prompts: {
      easy: {
        en: 'Which concept describes taking on more risk because you are shielded from its consequences?',
        no: 'Hvilket konsept beskriver det å ta på seg mer risiko fordi du er skjermet fra konsekvensene?'
      },
      medium: {
        en: 'A bank makes reckless bets because it believes the government will bail it out if they fail — so it gambles with other people’s money. Which concept is this?',
        no: 'En bank tar uvettige sjanser fordi den tror staten vil redde den hvis de slår feil — så den gambler med andres penger. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does insuring people against a risk sometimes make them behave in ways that make the risk more likely?',
        no: 'Hvorfor får det å forsikre folk mot en risiko dem noen ganger til å oppføre seg på måter som gjør risikoen mer sannsynlig?'
      }
    },
    explanation: {
      summary: {
        en: 'Moral hazard arises when a party takes greater risks because someone else bears the cost — for example, when insurance or a guaranteed rescue dulls the incentive to be careful.',
        no: 'Moralsk hasard oppstår når en part tar større risiko fordi noen andre bærer kostnaden — for eksempel når forsikring eller en garantert redning sløver insentivet til å være forsiktig.'
      },
      whyInteresting: {
        en: 'It reveals a hidden cost of protection: shielding people from consequences can change their behaviour for the worse. It connects insurance, finance, and policy through one mechanism — the separation of who acts from who pays.',
        no: 'Den avslører en skjult kostnad ved beskyttelse: å skjerme folk fra konsekvenser kan endre atferden deres til det verre. Den knytter forsikring, finans og politikk sammen gjennom én mekanisme — skillet mellom hvem som handler og hvem som betaler.'
      },
      whyIntuitionFails: {
        en: 'We assume that covering someone against a loss simply removes the loss. But it also removes the incentive to avoid it. Once the downside lands on someone else, the careful behaviour that the risk used to enforce quietly disappears.',
        no: 'Vi antar at det å dekke noen mot et tap rett og slett fjerner tapet. Men det fjerner også insentivet til å unngå det. Når baksiden lander på noen andre, forsvinner stille den forsiktige atferden som risikoen pleide å håndheve.'
      },
      example: {
        en: 'A driver with full, no-deductible insurance may park more carelessly. Banks deemed “too big to fail” take outsized risks expecting rescue. After the 2008 crisis, this was a central charge against the bailouts: they protected against losses people had chosen to court.',
        no: 'En sjåfør med full forsikring uten egenandel kan parkere mer uforsiktig. Banker som anses “for store til å feile”, tar enorme sjanser i forventning om redning. Etter krisen i 2008 var dette en sentral anklage mot redningspakkene: de beskyttet mot tap folk selv hadde valgt å oppsøke.'
      },
      realWorld: {
        en: 'It shapes the design of insurance (deductibles and co-pays exist partly to counter it), banking regulation, bailouts, and employment contracts. The cure is usually to make the risk-taker keep “skin in the game”.',
        no: 'Den former utformingen av forsikring (egenandeler og egenbetaling finnes delvis for å motvirke den), bankregulering, redningspakker og arbeidskontrakter. Kuren er som regel å få den som tar risiko til å beholde noe “på spill” selv.'
      }
    },
    related: ['incentives', 'principal-agent-problem', 'externalities']
  },
  {
    id: 'principal-agent-problem',
    module: 'economics-systems',
    name: { en: 'Principal-Agent Problem', no: 'Prinsipal-agent-problemet' },
    prompts: {
      easy: {
        en: 'Which concept describes the conflict that arises when someone hired to act on your behalf has interests of their own?',
        no: 'Hvilket konsept beskriver konflikten som oppstår når noen som er leid inn for å handle på dine vegne, har sine egne interesser?'
      },
      medium: {
        en: 'A homeowner hires a contractor paid by the hour; the contractor has every reason to work slowly, while the owner wants speed. Their goals quietly pull apart. Which concept is this?',
        no: 'En huseier leier en håndverker som betales per time; håndverkeren har all grunn til å jobbe langsomt, mens eieren vil ha fart. Målene deres trekker stille fra hverandre. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why is it so hard to make an employee, manager, or politician act purely in the interest of those they serve?',
        no: 'Hvorfor er det så vanskelig å få en ansatt, leder eller politiker til å handle rent i interessen til dem de tjener?'
      }
    },
    explanation: {
      summary: {
        en: 'The difficulty of ensuring that an “agent” (employee, manager, broker, politician) acts in the interest of the “principal” (owner, client, voter) when their incentives diverge and the principal can’t fully observe the agent’s actions.',
        no: 'Vanskeligheten med å sikre at en “agent” (ansatt, leder, megler, politiker) handler i interessen til “prinsipalen” (eier, klient, velger) når insentivene deres spriker og prinsipalen ikke fullt ut kan observere agentens handlinger.'
      },
      whyInteresting: {
        en: 'It is the hidden friction inside almost every organisation and contract. Once you see it, a huge range of institutions — bonuses, audits, term limits, stock options — appear as attempts to bend the agent’s self-interest back toward the principal’s.',
        no: 'Det er den skjulte friksjonen inne i nesten enhver organisasjon og kontrakt. Når du først ser det, fremstår en lang rekke ordninger — bonuser, revisjoner, perioderbegrensninger, aksjeopsjoner — som forsøk på å bøye agentens egeninteresse tilbake mot prinsipalens.'
      },
      whyIntuitionFails: {
        en: 'We tend to assume that hiring someone to do a job means the job will be done as we’d do it ourselves. But the agent has their own goals (less effort, more pay, lower personal risk), and because we can’t watch everything they do, those goals leak into their choices.',
        no: 'Vi pleier å anta at det å leie noen til å gjøre en jobb betyr at jobben blir gjort slik vi selv ville gjort den. Men agenten har sine egne mål (mindre innsats, mer lønn, lavere personlig risiko), og fordi vi ikke kan se alt de gjør, lekker disse målene inn i valgene deres.'
      },
      example: {
        en: 'Company executives (agents) may chase short-term share bonuses instead of the long-term health shareholders (principals) want. Financial advisers may steer clients toward products that pay the adviser the best commission. A salaried employee may coast when unmonitored.',
        no: 'Bedriftsledere (agenter) kan jage kortsiktige aksjebonuser i stedet for den langsiktige helsen aksjonærene (prinsipalene) ønsker. Finansrådgivere kan styre kunder mot produkter som gir rådgiveren best provisjon. En fastlønnet ansatt kan ta det med ro når ingen følger med.'
      },
      realWorld: {
        en: 'It underlies corporate governance, executive-pay design, government accountability, and contract law. Much of management is the art of aligning agents’ incentives with principals’ goals.',
        no: 'Det ligger bak eierstyring, utforming av lederlønn, offentlig ansvarlighet og kontraktsrett. Mye av ledelse er kunsten å samkjøre agentenes insentiver med prinsipalenes mål.'
      }
    },
    related: ['incentives', 'moral-hazard', 'goodharts-law']
  },
  {
    id: 'public-goods',
    module: 'economics-systems',
    name: { en: 'Public Goods', no: 'Fellesgoder' },
    prompts: {
      easy: {
        en: 'Which concept describes a good that everyone can enjoy without using it up, and from which no one can easily be excluded?',
        no: 'Hvilket konsept beskriver et gode alle kan nyte uten å bruke det opp, og som ingen lett kan utestenges fra?'
      },
      medium: {
        en: 'A lighthouse guides every ship that passes, whether or not its owner paid for it — so each shipowner hopes someone else will fund it, and it may never get built. Which concept is this?',
        no: 'Et fyr veileder hvert skip som passerer, enten eieren har betalt for det eller ikke — så hver skipsreder håper noen andre vil finansiere det, og det blir kanskje aldri bygd. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why do markets tend to under-produce things that benefit everyone but that no one can be charged for?',
        no: 'Hvorfor har markeder en tendens til å underprodusere ting som er til nytte for alle, men som ingen kan kreves betaling for?'
      }
    },
    explanation: {
      summary: {
        en: 'A public good is non-rival (one person’s use doesn’t diminish another’s) and non-excludable (you can’t easily stop non-payers from benefiting), which makes it prone to under-provision by markets.',
        no: 'Et fellesgode er ikke-rivaliserende (én persons bruk reduserer ikke en annens) og ikke-ekskluderbart (du kan ikke lett hindre ikke-betalere i å nyte godt av det), noe som gjør det utsatt for underdekning i markeder.'
      },
      whyInteresting: {
        en: 'It explains why some of the most valuable things in society — clean air, national defence, basic research, street lighting — can’t be left entirely to markets. The very features that make them valuable to all make them unprofitable to provide.',
        no: 'Den forklarer hvorfor noen av de mest verdifulle tingene i samfunnet — ren luft, nasjonalt forsvar, grunnforskning, gatebelysning — ikke kan overlates helt til markeder. Nettopp de egenskapene som gjør dem verdifulle for alle, gjør dem ulønnsomme å tilby.'
      },
      whyIntuitionFails: {
        en: 'We assume that if something is valuable, someone will find it profitable to supply. But if you can’t exclude non-payers, everyone has an incentive to free-ride and let others pay, so the good is starved of funding even though everyone wants it.',
        no: 'Vi antar at hvis noe er verdifullt, vil noen finne det lønnsomt å tilby. Men hvis du ikke kan utestenge ikke-betalere, har alle et insentiv til å gratispassasjere og la andre betale, så godet blir uten finansiering selv om alle ønsker det.'
      },
      example: {
        en: 'If national defence were sold privately, you’d benefit from your neighbours’ purchases whether you paid or not — so you’d be tempted not to pay, as would everyone, and too little defence would be bought. The same logic afflicts public broadcasting, clean air, and the funding of open-source software.',
        no: 'Hvis nasjonalt forsvar ble solgt privat, ville du hatt nytte av naboenes kjøp enten du betalte eller ikke — så du ville bli fristet til å la være å betale, som alle andre, og for lite forsvar ville bli kjøpt. Den samme logikken rammer allmennkringkasting, ren luft og finansieringen av åpen kildekode.'
      },
      realWorld: {
        en: 'It is a core justification for taxation and government provision, and explains free-rider problems in everything from vaccination and climate action to crowdfunding and team projects.',
        no: 'Den er en kjernebegrunnelse for skattlegging og offentlig tilbud, og forklarer gratispassasjerproblemer i alt fra vaksinasjon og klimatiltak til folkefinansiering og gruppeprosjekter.'
      }
    },
    related: ['market-failure', 'externalities', 'tragedy-of-the-commons']
  },
  {
    id: 'creative-destruction',
    module: 'economics-systems',
    name: { en: 'Creative Destruction', no: 'Kreativ ødeleggelse' },
    prompts: {
      easy: {
        en: 'Which concept describes how innovation creates new industries by destroying the old ones they replace?',
        no: 'Hvilket konsept beskriver hvordan innovasjon skaper nye næringer ved å ødelegge de gamle de erstatter?'
      },
      medium: {
        en: 'The car put blacksmiths, stables, and buggy-whip makers out of business, while creating roads, factories, and motels. The same churn later replaced gas lamps, film cameras, and video stores. Which concept is this?',
        no: 'Bilen satte smeder, staller og pisksnertmakere ut av spill, samtidig som den skapte veier, fabrikker og moteller. Den samme omveltningen erstattet senere gasslamper, filmkameraer og videobutikker. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why is the destruction of existing jobs and firms an inherent part of economic progress rather than a sign of failure?',
        no: 'Hvorfor er ødeleggelsen av eksisterende jobber og bedrifter en iboende del av økonomisk fremgang snarere enn et tegn på fiasko?'
      }
    },
    explanation: {
      summary: {
        en: 'Coined by Schumpeter, creative destruction is the process by which innovation continually replaces established products, firms, and jobs with new ones — progress that necessarily dismantles what came before.',
        no: 'Myntet av Schumpeter er kreativ ødeleggelse prosessen der innovasjon stadig erstatter etablerte produkter, bedrifter og jobber med nye — fremgang som nødvendigvis river ned det som kom før.'
      },
      whyInteresting: {
        en: 'It reframes economic growth as a turbulent, ongoing process rather than smooth accumulation. The same force that delivers progress also destroys livelihoods, making it both the engine of rising living standards and a source of real human disruption.',
        no: 'Den omformulerer økonomisk vekst som en turbulent, pågående prosess snarere enn jevn oppsamling. Den samme kraften som gir fremgang, ødelegger også levebrød, noe som gjør den både til motoren bak stigende levestandard og en kilde til virkelig menneskelig omveltning.'
      },
      whyIntuitionFails: {
        en: 'We instinctively see failing industries and lost jobs as purely bad, and are tempted to protect them. But in this view, that churn is how resources move from the obsolete to the productive; freezing it in place to save old jobs can stall the very progress that creates new ones.',
        no: 'Vi ser instinktivt på næringer som svikter og jobber som forsvinner som utelukkende negativt, og fristes til å beskytte dem. Men i dette synet er den omveltningen måten ressurser flyttes fra det foreldede til det produktive; å fryse den fast for å redde gamle jobber kan stanse nettopp den fremgangen som skaper nye.'
      },
      example: {
        en: 'Digital photography destroyed Kodak and the film industry while enabling smartphones, social media, and entire new professions. Streaming dismantled video rental but created vast content industries. Each wave is wrenching for those displaced and transformative for everyone else.',
        no: 'Digital fotografi ødela Kodak og filmindustrien, samtidig som det muliggjorde smarttelefoner, sosiale medier og helt nye yrker. Strømming raserte videoutleie, men skapte enorme innholdsnæringer. Hver bølge er smertefull for dem som fortrenges og forvandlende for alle andre.'
      },
      realWorld: {
        en: 'It frames debates over automation, trade, and technological unemployment, and the policy question of how to keep the dynamism while cushioning the people it dislocates through retraining and safety nets.',
        no: 'Den rammer inn debatter om automatisering, handel og teknologisk arbeidsledighet, og det politiske spørsmålet om hvordan man kan beholde dynamikken samtidig som man demper støtet for dem den fortrenger, gjennom omskolering og sikkerhetsnett.'
      }
    },
    related: ['incentives', 'network-effects', 'opportunity-cost']
  },
  {
    id: 'network-effects',
    module: 'economics-systems',
    name: { en: 'Network Effects', no: 'Nettverkseffekter' },
    prompts: {
      easy: {
        en: 'Which concept describes a product or service that becomes more valuable to each user as more people use it?',
        no: 'Hvilket konsept beskriver et produkt eller en tjeneste som blir mer verdifull for hver bruker etter hvert som flere bruker den?'
      },
      medium: {
        en: 'You join a particular messaging app not because it’s the best, but because everyone you know is already on it — and your joining makes it even more attractive to the next person. Which concept is this?',
        no: 'Du blir med på en bestemt meldingsapp ikke fordi den er best, men fordi alle du kjenner allerede er der — og at du blir med, gjør den enda mer attraktiv for den neste personen. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why can the best product lose to an inferior one that simply attracted more users first?',
        no: 'Hvorfor kan det beste produktet tape mot et dårligere ett som rett og slett tiltrakk seg flere brukere først?'
      }
    },
    explanation: {
      summary: {
        en: 'A network effect occurs when each additional user makes a product more valuable to all the others — phones, social networks, and marketplaces all grow more useful as they grow larger.',
        no: 'En nettverkseffekt oppstår når hver ekstra bruker gjør et produkt mer verdifullt for alle de andre — telefoner, sosiale nettverk og markedsplasser blir alle mer nyttige etter hvert som de vokser seg større.'
      },
      whyInteresting: {
        en: 'It explains why digital markets tend toward winner-take-all dominance and why timing and momentum can matter more than quality. Value comes not from the product alone but from the crowd already using it.',
        no: 'Den forklarer hvorfor digitale markeder har en tendens til vinneren-tar-alt-dominans, og hvorfor timing og momentum kan bety mer enn kvalitet. Verdien kommer ikke fra produktet alene, men fra mengden som allerede bruker det.'
      },
      whyIntuitionFails: {
        en: 'We assume the best product wins on its merits. But when value depends on who else is present, early scale becomes self-reinforcing: more users attract more users, and a merely good product with a head start can lock out a superior latecomer.',
        no: 'Vi antar at det beste produktet vinner på egne meritter. Men når verdien avhenger av hvem andre som er til stede, blir tidlig størrelse selvforsterkende: flere brukere tiltrekker flere brukere, og et bare middels godt produkt med et forsprang kan stenge ute en bedre etternøler.'
      },
      example: {
        en: 'A telephone is useless if no one else has one and invaluable when everyone does. Social networks, payment systems, and ride-hailing (more drivers attract more riders, and vice versa) all ride this loop. It can also create lock-in, trapping users on a platform they’d otherwise leave.',
        no: 'En telefon er ubrukelig hvis ingen andre har en, og uvurderlig når alle har det. Sosiale nettverk, betalingssystemer og samkjøringstjenester (flere sjåfører tiltrekker flere passasjerer, og omvendt) rir alle på denne sløyfen. Den kan også skape innlåsing, og fange brukere på en plattform de ellers ville forlatt.'
      },
      realWorld: {
        en: 'It drives the dominance of big tech platforms, “growth at all costs” startup strategy, standards battles (VHS versus Betamax), and antitrust concerns about entrenched monopolies.',
        no: 'Den driver dominansen til store teknologiplattformer, oppstartsstrategien “vekst for enhver pris”, standardkamper (VHS mot Betamax) og konkurransebekymringer om forskansede monopoler.'
      }
    },
    related: ['feedback-loops', 'creative-destruction', 'invisible-hand']
  },
  {
    id: 'diminishing-returns',
    module: 'economics-systems',
    name: { en: 'Diminishing Returns', no: 'Avtakende utbytte' },
    prompts: {
      easy: {
        en: 'Which concept describes how each additional unit of effort or input eventually yields less and less benefit?',
        no: 'Hvilket konsept beskriver hvordan hver ekstra enhet av innsats eller innsatsfaktor til slutt gir mindre og mindre utbytte?'
      },
      medium: {
        en: 'Adding a second chef to a small kitchen greatly speeds up service; adding a tenth barely helps, as they crowd each other and trip over the same stove. Which concept is this?',
        no: 'Å legge til en kokk nummer to på et lite kjøkken setter farten kraftig opp; å legge til en tiende hjelper knapt, ettersom de trenger seg om hverandre og snubler over samme komfyr. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does pouring ever more of one resource into a fixed system eventually stop helping — and even start to hurt?',
        no: 'Hvorfor slutter det å øse stadig mer av én ressurs inn i et fast system til slutt å hjelpe — og begynner til og med å skade?'
      }
    },
    explanation: {
      summary: {
        en: 'The law of diminishing returns: as you add more of one input while holding others fixed, the extra output from each additional unit eventually falls.',
        no: 'Loven om avtakende utbytte: når du legger til mer av én innsatsfaktor mens de andre holdes faste, faller til slutt det ekstra utbyttet fra hver ekstra enhet.'
      },
      whyInteresting: {
        en: 'It is a near-universal shape of the world — in farming, study, exercise, staffing, and spending — and the quiet reason that “more” is not always better. It turns the question “should we do more?” into “what is the return on the next unit?”',
        no: 'Det er en nesten universell form på verden — i jordbruk, studier, trening, bemanning og pengebruk — og den stille grunnen til at “mer” ikke alltid er bedre. Den gjør spørsmålet “bør vi gjøre mer?” om til “hva er utbyttet av den neste enheten?”'
      },
      whyIntuitionFails: {
        en: 'We tend to assume returns are linear — that if one unit of effort gives a result, ten units give ten times as much. In reality the curve bends: the first hour of study or the first worker adds a lot, the tenth adds little, and beyond some point extra input can even reduce output through congestion, fatigue, or clutter.',
        no: 'Vi pleier å anta at utbyttet er lineært — at hvis én enhet innsats gir et resultat, gir ti enheter ti ganger så mye. I virkeligheten bøyer kurven seg: den første timen med lesing eller den første arbeideren tilfører mye, den tiende tilfører lite, og forbi et visst punkt kan ekstra innsats til og med redusere produksjonen gjennom trengsel, utmattelse eller rot.'
      },
      example: {
        en: 'The first scoop of fertiliser dramatically boosts a crop; the tenth barely moves the yield, and the twentieth can poison the soil. The first hour of revision teaches the most; the eighth consecutive hour, exhausted, teaches almost nothing.',
        no: 'Den første skuffen med gjødsel øker avlingen dramatisk; den tiende rikker knapt utbyttet, og den tjuende kan forgifte jorda. Den første timen med repetisjon lærer mest; den åttende timen på rad, utmattet, lærer nesten ingenting.'
      },
      realWorld: {
        en: 'It guides decisions about investment, hiring, studying, and advertising spend — the art of stopping at the point where the next unit no longer pays for itself (marginal thinking).',
        no: 'Den styrer beslutninger om investering, ansettelser, lesing og annonsebudsjett — kunsten å stoppe på punktet der den neste enheten ikke lenger lønner seg (marginaltenkning).'
      }
    },
    related: ['opportunity-cost', 'expected-value', 'comparative-advantage']
  },
  {
    id: 'feedback-loops',
    module: 'economics-systems',
    name: { en: 'Feedback Loops', no: 'Tilbakekoblingssløyfer' },
    prompts: {
      easy: {
        en: 'Which concept describes a system where the output feeds back to amplify or dampen its own behaviour?',
        no: 'Hvilket konsept beskriver et system der utgangen kobles tilbake for å forsterke eller dempe sin egen oppførsel?'
      },
      medium: {
        en: 'A thermostat senses cold, turns on the heater, and switches off once warm — quietly holding the room steady. A panic, by contrast, feeds on itself: fear drives selling, which drives more fear. Which concept covers both?',
        no: 'En termostat merker kulde, slår på varmen, og slår av når det er varmt — og holder rommet stødig. En panikk, derimot, lever av seg selv: frykt driver salg, som driver mer frykt. Hvilket konsept dekker begge?'
      },
      hard: {
        en: 'Why can small initial changes either spiral out of control or settle into stability, depending on how a system loops back on itself?',
        no: 'Hvorfor kan små innledende endringer enten spinne ut av kontroll eller legge seg til ro i stabilitet, avhengig av hvordan et system kobler tilbake på seg selv?'
      }
    },
    explanation: {
      summary: {
        en: 'A feedback loop is a circular cause-and-effect chain where a system’s output returns as input — reinforcing loops amplify change (vicious or virtuous cycles), while balancing loops counter it and create stability.',
        no: 'En tilbakekoblingssløyfe er en sirkulær årsak-virkning-kjede der et systems utgang vender tilbake som inngang — forsterkende sløyfer øker endring (onde eller gode sirkler), mens balanserende sløyfer motvirker den og skaper stabilitet.'
      },
      whyInteresting: {
        en: 'It is the heart of systems thinking: it explains why systems behave in ways their individual parts don’t suggest, and why some situations explode or collapse while others self-correct. Seeing the loop, not just the line, is what separates systems thinking from simple cause-and-effect.',
        no: 'Den er kjernen i systemtenkning: den forklarer hvorfor systemer oppfører seg på måter delene deres ikke tilsier, og hvorfor noen situasjoner eksploderer eller kollapser mens andre selvkorrigerer. Å se sløyfen, ikke bare linjen, er det som skiller systemtenkning fra enkel årsak-virkning.'
      },
      whyIntuitionFails: {
        en: 'We think in straight lines — A causes B — and miss that B often loops back to affect A. That blind spot makes runaway booms, bank runs, and ecological collapses feel like surprises, and makes well-meant interventions backfire when they strengthen a loop we didn’t see.',
        no: 'Vi tenker i rette linjer — A forårsaker B — og overser at B ofte kobler tilbake og påvirker A. Den blindsonen får løpske oppganger, bankkjør og økologiske kollapser til å føles som overraskelser, og får velmente tiltak til å slå tilbake når de styrker en sløyfe vi ikke så.'
      },
      example: {
        en: 'Balancing (stabilising): a thermostat, or predators and prey keeping each other in check. Reinforcing (amplifying): a bank run, where withdrawals spark fear that sparks more withdrawals; or compound interest, where gains generate further gains. Climate tipping points are feared reinforcing loops.',
        no: 'Balanserende (stabiliserende): en termostat, eller rovdyr og byttedyr som holder hverandre i sjakk. Forsterkende (forsterkende): et bankkjør, der uttak utløser frykt som utløser flere uttak; eller renters rente, der gevinster gir ytterligere gevinster. Klimavippepunkter er fryktede forsterkende sløyfer.'
      },
      realWorld: {
        en: 'Feedback loops underlie economics (bubbles and crashes), ecology, engineering (control systems), epidemics, social-media virality, and climate science — anywhere a system shapes its own future.',
        no: 'Tilbakekoblingssløyfer ligger bak økonomi (bobler og krakk), økologi, ingeniørfag (styringssystemer), epidemier, spredning i sosiale medier og klimavitenskap — overalt hvor et system former sin egen fremtid.'
      }
    },
    related: ['network-effects', 'goodharts-law', 'emergence']
  },

  // ============================================================
  // Psychology & Cognitive Biases
  // ============================================================
  {
    id: 'dunning-kruger-effect',
    module: 'psychology-biases',
    name: { en: 'Dunning-Kruger Effect', no: 'Dunning-Kruger-effekten' },
    prompts: {
      easy: {
        en: 'Which concept describes how people with the least skill in an area often most overestimate their ability?',
        no: 'Hvilket konsept beskriver hvordan folk med minst ferdighet på et område ofte overvurderer evnen sin mest?'
      },
      medium: {
        en: 'A man who has read one article on investing is loudly confident he can beat the market, while a seasoned analyst hedges every claim with caveats. Which concept describes this mismatch of confidence and competence?',
        no: 'En mann som har lest én artikkel om investering, er høylytt sikker på at han kan slå markedet, mens en erfaren analytiker tar forbehold for hver påstand. Hvilket konsept beskriver dette misforholdet mellom selvtillit og kompetanse?'
      },
      hard: {
        en: 'Why does the very lack of skill that makes someone perform badly also leave them unable to see how badly they’re doing?',
        no: 'Hvorfor gjør nettopp mangelen på ferdighet som får noen til å prestere dårlig, dem også ute av stand til å se hvor dårlig de gjør det?'
      }
    },
    explanation: {
      summary: {
        en: 'People with low competence in a domain tend to overestimate it, partly because the skills needed to do well are the same ones needed to recognise you’re doing poorly.',
        no: 'Folk med lav kompetanse på et område har en tendens til å overvurdere den, delvis fordi ferdighetene som trengs for å gjøre det bra, er de samme som trengs for å innse at man gjør det dårlig.'
      },
      whyInteresting: {
        en: 'It links ability and self-awareness in a single loop: incompetence is often invisible to the incompetent. It also has a humbling flip side — genuine experts, aware of all they don’t know, frequently underrate themselves.',
        no: 'Den knytter evne og selvinnsikt sammen i én sløyfe: inkompetanse er ofte usynlig for den inkompetente. Den har også en ydmykende bakside — ekte eksperter, klar over alt de ikke vet, undervurderer ofte seg selv.'
      },
      whyIntuitionFails: {
        en: 'We assume confidence tracks competence, so we trust the most assured voice in the room. But the knowledge required to judge your own performance is the same knowledge you lack, so the least skilled can’t perceive their own gaps and feel sure precisely where they should feel doubt.',
        no: 'Vi antar at selvtillit følger kompetanse, så vi stoler på den mest skråsikre stemmen i rommet. Men kunnskapen som trengs for å bedømme egen prestasjon er den samme kunnskapen du mangler, så de minst dyktige kan ikke oppfatte sine egne hull og føler seg sikre nettopp der de burde føle tvil.'
      },
      example: {
        en: 'A beginner who has just learned a few chess openings may feel they’ve “basically solved” the game, while a grandmaster speaks cautiously about positions they’ve studied for decades. The novice can’t yet see the depth that would reveal their limitations.',
        no: 'En nybegynner som nettopp har lært noen sjakkåpninger, kan føle at de “stort sett har løst” spillet, mens en stormester snakker forsiktig om stillinger de har studert i tiår. Nybegynneren kan ennå ikke se dybden som ville avslørt begrensningene deres.'
      },
      realWorld: {
        en: 'It shows up in workplaces, politics, online debate, and self-assessment, and is a caution to weight expertise over confidence — and to stay humble in areas where you’re a beginner.',
        no: 'Den dukker opp på arbeidsplasser, i politikk, i nettdebatt og i selvvurdering, og er en påminnelse om å vektlegge ekspertise framfor selvtillit — og å være ydmyk på områder der du er nybegynner.'
      }
    },
    related: ['confirmation-bias', 'halo-effect', 'planning-fallacy']
  },
  {
    id: 'confirmation-bias',
    module: 'psychology-biases',
    name: { en: 'Confirmation Bias', no: 'Bekreftelsestendens' },
    prompts: {
      easy: {
        en: 'Which concept describes our tendency to seek, favour, and remember information that supports what we already believe?',
        no: 'Hvilket konsept beskriver tendensen vår til å søke, foretrekke og huske informasjon som støtter det vi allerede tror?'
      },
      medium: {
        en: 'Two people read the same balanced article about a politician; each comes away more convinced of their original opposing view, noticing only the parts that fit. Which concept is this?',
        no: 'To personer leser den samme balanserte artikkelen om en politiker; hver av dem går derfra mer overbevist om sitt opprinnelige, motsatte syn, og legger bare merke til delene som passer. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does showing people evidence on both sides of an issue often push them further apart rather than closer together?',
        no: 'Hvorfor får det å vise folk bevis på begge sider av en sak dem ofte til å fjerne seg fra hverandre snarere enn å nærme seg?'
      }
    },
    explanation: {
      summary: {
        en: 'Confirmation bias is the tendency to search for, interpret, and recall information in a way that confirms our existing beliefs, while discounting evidence that contradicts them.',
        no: 'Bekreftelsestendens er tilbøyeligheten til å søke etter, tolke og huske informasjon på en måte som bekrefter det vi allerede tror, samtidig som vi avfeier bevis som motsier det.'
      },
      whyInteresting: {
        en: 'It is arguably the most pervasive bias in human reasoning, quietly shaping what we read, who we trust, and what we remember. It explains how intelligent people can hold firmly to false beliefs — intelligence is often turned to defending the belief, not testing it.',
        no: 'Den er uten tvil den mest gjennomgripende skjevheten i menneskelig tenkning, og former stille hva vi leser, hvem vi stoler på og hva vi husker. Den forklarer hvordan intelligente mennesker kan holde fast ved falske oppfatninger — intelligens brukes ofte til å forsvare oppfatningen, ikke til å teste den.'
      },
      whyIntuitionFails: {
        en: 'We feel like neutral observers weighing the facts. In reality we act more like lawyers building a case for a conclusion we already hold: friendly evidence is waved through, hostile evidence is scrutinised to death, and the asymmetry feels like objectivity from the inside.',
        no: 'Vi føler oss som nøytrale observatører som veier fakta. I virkeligheten opptrer vi mer som advokater som bygger en sak for en konklusjon vi allerede har: vennlige bevis vinkes gjennom, fiendtlige bevis granskes i hjel, og asymmetrien føles som objektivitet fra innsiden.'
      },
      example: {
        en: 'Given ambiguous evidence, a believer counts the hits and forgets the misses (as with horoscopes or “lucky” rituals). Shown a mixed dossier on a contested topic, partisans on each side rate the supporting studies as strong and the opposing ones as flawed — and leave more polarised than before.',
        no: 'Gitt tvetydige bevis teller en troende treffene og glemmer bommene (som med horoskoper eller “lykkebringende” ritualer). Vist en blandet mappe om et omstridt tema, vurderer tilhengere på hver side de støttende studiene som sterke og de motstridende som mangelfulle — og går derfra mer polariserte enn før.'
      },
      realWorld: {
        en: 'It drives political polarisation, echo chambers and algorithmic filter bubbles, scientific error (why blinding and peer review exist), investing mistakes, and stubborn interpersonal disputes.',
        no: 'Den driver politisk polarisering, ekkokamre og algoritmiske filterbobler, vitenskapelige feil (derfor finnes blinding og fagfellevurdering), investeringstabber og fastlåste mellommenneskelige konflikter.'
      }
    },
    related: ['availability-heuristic', 'anchoring-bias', 'dunning-kruger-effect', 'just-world-hypothesis']
  },
  {
    id: 'availability-heuristic',
    module: 'psychology-biases',
    name: { en: 'Availability Heuristic', no: 'Tilgjengelighetsheuristikken' },
    prompts: {
      easy: {
        en: 'Which concept describes judging how likely something is by how easily examples come to mind?',
        no: 'Hvilket konsept beskriver det å bedømme hvor sannsynlig noe er ut fra hvor lett eksempler dukker opp i tankene?'
      },
      medium: {
        en: 'After seeing news coverage of a plane crash, a traveller feels flying is terribly dangerous and drives instead — though driving is far deadlier per mile. Which concept explains the misjudgement?',
        no: 'Etter å ha sett nyhetsdekning av en flystyrt føler en reisende at det å fly er fryktelig farlig og kjører bil i stedet — selv om bilkjøring er langt dødeligere per kilometer. Hvilket konsept forklarer feilvurderingen?'
      },
      hard: {
        en: 'Why do vivid, memorable events make us systematically overestimate their true frequency?',
        no: 'Hvorfor får levende, minneverdige hendelser oss til systematisk å overvurdere hvor ofte de faktisk skjer?'
      }
    },
    explanation: {
      summary: {
        en: 'A mental shortcut where we estimate the probability or frequency of something by how easily instances spring to mind — so memorable, recent, or emotional events feel more common than they are.',
        no: 'En mental snarvei der vi anslår sannsynligheten eller hyppigheten av noe ut fra hvor lett eksempler dukker opp — så minneverdige, ferske eller følelsesladde hendelser føles vanligere enn de er.'
      },
      whyInteresting: {
        en: 'It reveals that our sense of risk is built not from statistics but from the stories we can recall, which is why media coverage can reshape entire populations’ fears. It connects memory directly to judgement.',
        no: 'Den avslører at risikofølelsen vår ikke bygges fra statistikk, men fra historiene vi kan huske, og det er derfor mediedekning kan omforme hele befolkningers frykt. Den kobler hukommelse direkte til dømmekraft.'
      },
      whyIntuitionFails: {
        en: 'We treat “easy to recall” as a proxy for “common”, which usually works but is hijacked by anything that makes an event memorable — drama, recency, vividness, repetition. Rare-but-spectacular events get over-weighted; common-but-dull ones get ignored.',
        no: 'Vi behandler “lett å huske” som en erstatning for “vanlig”, noe som vanligvis fungerer, men som kapres av alt som gjør en hendelse minneverdig — drama, nylighet, livaktighet, gjentakelse. Sjeldne, men spektakulære hendelser vektes for høyt; vanlige, men kjedelige overses.'
      },
      example: {
        en: 'People overestimate deaths from shark attacks, terrorism, and plane crashes (vivid, heavily reported) and underestimate deaths from heart disease, car accidents, and diabetes (common, undramatic). A recent burglary nearby makes the whole neighbourhood feel crime-ridden.',
        no: 'Folk overvurderer dødsfall fra haiangrep, terrorisme og flystyrt (levende, mye omtalt) og undervurderer dødsfall fra hjertesykdom, bilulykker og diabetes (vanlige, udramatiske). Et nylig innbrudd i nærheten får hele nabolaget til å føles kriminalitetsherjet.'
      },
      realWorld: {
        en: 'It distorts public risk perception and policy, insurance buying after disasters, medical worry, and security spending, and is routinely exploited by news media and advertising.',
        no: 'Den forvrenger offentlig risikooppfatning og politikk, forsikringskjøp etter katastrofer, medisinsk bekymring og sikkerhetsbruk, og utnyttes rutinemessig av nyhetsmedier og reklame.'
      }
    },
    related: ['confirmation-bias', 'anchoring-bias', 'negativity-bias', 'base-rate-fallacy']
  },
  {
    id: 'anchoring-bias',
    module: 'psychology-biases',
    name: { en: 'Anchoring Bias', no: 'Forankringseffekten' },
    prompts: {
      easy: {
        en: 'Which concept describes how an initial number we’re shown skews our later estimates, even when it’s irrelevant?',
        no: 'Hvilket konsept beskriver hvordan et innledende tall vi blir vist, vrir de senere anslagene våre, selv når det er irrelevant?'
      },
      medium: {
        en: 'A jacket marked “was $400, now $250” feels like a bargain, while the same jacket simply priced at $250 feels expensive. The first number quietly set the standard. Which concept is this?',
        no: 'En jakke merket “før 400 kr, nå 250 kr” føles som et røverkjøp, mens den samme jakken bare priset til 250 kr føles dyr. Det første tallet satte stille standarden. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does an arbitrary starting figure — even a random one — pull our judgements toward it?',
        no: 'Hvorfor trekker et vilkårlig utgangstall — til og med et tilfeldig ett — vurderingene våre mot seg?'
      }
    },
    explanation: {
      summary: {
        en: 'Anchoring is the tendency to rely too heavily on the first piece of information (the “anchor”) when making estimates, adjusting insufficiently away from it even when it is arbitrary or irrelevant.',
        no: 'Forankring er tendensen til å lene seg for tungt på den første informasjonen (“ankeret”) når man gjør anslag, og justere for lite bort fra det selv når det er vilkårlig eller irrelevant.'
      },
      whyInteresting: {
        en: 'It shows that judgement is not absolute but relative to whatever reference point happens to be in view — and that the reference point can be planted, accidentally or deliberately. It is one of the most robust and exploitable biases known.',
        no: 'Den viser at dømmekraft ikke er absolutt, men relativ til hvilket referansepunkt som tilfeldigvis er i syne — og at referansepunktet kan plantes, tilfeldig eller bevisst. Den er en av de mest robuste og utnyttbare skjevhetene man kjenner.'
      },
      whyIntuitionFails: {
        en: 'We believe we evaluate things on their merits. But the mind starts from whatever number is nearby and adjusts too little, so a completely irrelevant figure — a list price, a first offer, even a random number — silently drags the final estimate toward itself.',
        no: 'Vi tror vi vurderer ting på egne premisser. Men sinnet starter fra hvilket tall som enn er i nærheten og justerer for lite, så et helt irrelevant tall — en listepris, et første tilbud, til og med et tilfeldig tall — drar stille det endelige anslaget mot seg.'
      },
      example: {
        en: 'In a famous study, people spun a wheel of fortune and then estimated the percentage of African nations in the UN; those who landed on a high number gave far higher estimates, though the wheel was obviously random. Salary negotiations, price tags, and “suggested” donation amounts all exploit anchors.',
        no: 'I en berømt studie snurret folk et lykkehjul og anslo deretter prosentandelen afrikanske land i FN; de som landet på et høyt tall ga langt høyere anslag, selv om hjulet åpenbart var tilfeldig. Lønnsforhandlinger, prislapper og “foreslåtte” donasjonsbeløp utnytter alle ankre.'
      },
      realWorld: {
        en: 'It is the backbone of pricing, sales (“original price” tags), negotiation (first-offer advantage), fundraising suggestions, and legal damage awards.',
        no: 'Den er ryggraden i prising, salg (“førpris”-lapper), forhandling (fordelen ved første bud), innsamlingsforslag og rettslige erstatningsutmålinger.'
      }
    },
    related: ['availability-heuristic', 'framing-effect', 'confirmation-bias']
  },
  {
    id: 'survivorship-bias',
    module: 'psychology-biases',
    name: { en: 'Survivorship Bias', no: 'Overlevelsesskjevhet' },
    prompts: {
      easy: {
        en: 'Which concept describes drawing conclusions only from the examples that “survived”, while the failures are invisible?',
        no: 'Hvilket konsept beskriver det å trekke konklusjoner kun fra eksemplene som “overlevde”, mens fiaskoene er usynlige?'
      },
      medium: {
        en: 'We study the daily habits of billionaire dropouts and conclude that dropping out breeds success — forgetting the millions who dropped out and struggled, and whom no one interviews. Which concept is this?',
        no: 'Vi studerer de daglige vanene til milliardærer som droppet ut, og konkluderer med at det å droppe ut avler suksess — og glemmer de millionene som droppet ut og strevde, og som ingen intervjuer. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does looking only at winners give a dangerously distorted picture of what causes success?',
        no: 'Hvorfor gir det å bare se på vinnerne et farlig forvrengt bilde av hva som skaper suksess?'
      }
    },
    explanation: {
      summary: {
        en: 'The error of focusing on the people or things that passed some selection (survived, succeeded, remained) while overlooking those that didn’t — usually because the failures are no longer visible.',
        no: 'Feilen ved å fokusere på menneskene eller tingene som besto en utvelgelse (overlevde, lyktes, ble igjen) mens man overser dem som ikke gjorde det — som regel fordi fiaskoene ikke lenger er synlige.'
      },
      whyInteresting: {
        en: 'It is a hidden filter on almost all the data we naturally encounter, because failures tend to disappear from view. Spotting it means learning to ask the haunting question: where are the ones that aren’t here to be counted?',
        no: 'Den er et skjult filter på nesten alle dataene vi naturlig støter på, fordi fiaskoer har en tendens til å forsvinne ut av syne. Å oppdage den betyr å lære seg å stille det hjemsøkende spørsmålet: hvor er de som ikke er her til å telles?'
      },
      whyIntuitionFails: {
        en: 'We analyse the data in front of us and forget the data that was silently removed. The successes are visible, loud, and studied; the failures are gone, so any pattern we find among survivors may reflect the selection process, not the cause of success.',
        no: 'Vi analyserer dataene foran oss og glemmer dataene som stille ble fjernet. Suksessene er synlige, høylytte og studerte; fiaskoene er borte, så ethvert mønster vi finner blant de overlevende kan gjenspeile utvelgelsesprosessen, ikke årsaken til suksess.'
      },
      example: {
        en: 'In WWII, analysts wanted to armour the parts of returning bombers with the most bullet holes — until Abraham Wald noted the holes showed where a plane could be hit and still return. The untouched areas were where the downed planes had been struck; those needed the armour. Likewise, “successful people wake at 5am” ignores the failures who also woke at 5am.',
        no: 'Under andre verdenskrig ville analytikere pansre delene av returnerende bombefly med flest kulehull — helt til Abraham Wald påpekte at hullene viste hvor et fly kunne treffes og likevel komme tilbake. De urørte områdene var der de nedskutte flyene var blitt truffet; det var de som trengte panseret. Likeledes overser “suksessrike folk står opp klokka fem” fiaskoene som også sto opp klokka fem.'
      },
      realWorld: {
        en: 'It distorts investing (failed funds quietly close, flattering the survivors’ average returns), business advice, historical “lessons”, architecture (“they built things to last back then” — only the durable buildings remain), and any study of winners.',
        no: 'Den forvrenger investering (fond som mislykkes legges stille ned, noe som smigrer de overlevendes gjennomsnittsavkastning), forretningsråd, historiske “lærdommer”, arkitektur (“de bygde ting som varte den gangen” — bare de solide byggene står igjen), og enhver studie av vinnere.'
      }
    },
    related: ['sampling-bias', 'confirmation-bias', 'correlation-causation']
  },
  {
    id: 'loss-aversion',
    module: 'psychology-biases',
    name: { en: 'Loss Aversion', no: 'Tapsaversjon' },
    prompts: {
      easy: {
        en: 'Which concept describes how the pain of losing something feels stronger than the pleasure of gaining the same thing?',
        no: 'Hvilket konsept beskriver hvordan smerten ved å miste noe føles sterkere enn gleden ved å vinne det samme?'
      },
      medium: {
        en: 'A person who would never accept a coin-flip bet to win $150 or lose $100 — even though the odds favour them — is gripped more by the fear of the loss than the lure of the gain. Which concept is this?',
        no: 'En person som aldri ville godta et myntkast-veddemål om å vinne 150 kr eller tape 100 kr — selv om oddsen favoriserer dem — gripes mer av frykten for tapet enn av lokkingen fra gevinsten. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why do people take irrational risks to avoid a loss, while playing it safe to protect a gain?',
        no: 'Hvorfor tar folk irrasjonelle sjanser for å unngå et tap, mens de spiller det trygt for å beskytte en gevinst?'
      }
    },
    explanation: {
      summary: {
        en: 'Loss aversion is the tendency for losses to loom larger than equivalent gains — psychologically, losing $100 hurts roughly twice as much as gaining $100 feels good.',
        no: 'Tapsaversjon er tendensen til at tap veier tyngre enn tilsvarende gevinster — psykologisk gjør det å tape 100 kr omtrent dobbelt så vondt som det å vinne 100 kr føles godt.'
      },
      whyInteresting: {
        en: 'It is a cornerstone of behavioural economics (Kahneman and Tversky’s prospect theory) and overturns the classic assumption that we value gains and losses symmetrically. It explains a vast range of seemingly irrational but very human behaviour.',
        no: 'Den er en hjørnestein i atferdsøkonomi (Kahneman og Tverskys prospektteori) og velter den klassiske antakelsen om at vi verdsetter gevinster og tap symmetrisk. Den forklarer et stort spekter av tilsynelatende irrasjonell, men svært menneskelig atferd.'
      },
      whyIntuitionFails: {
        en: 'Standard reasoning says $100 is $100 either way. But the mind treats a loss as far more significant than a gain of the same size, so we cling to losing investments, reject favourable bets, and feel a small loss more keenly than a larger windfall.',
        no: 'Vanlig resonnement sier at 100 kr er 100 kr uansett. Men sinnet behandler et tap som langt mer betydningsfullt enn en gevinst av samme størrelse, så vi klamrer oss til tapende investeringer, avviser gunstige veddemål, og kjenner et lite tap sterkere enn en større uventet gevinst.'
      },
      example: {
        en: 'People hold onto falling stocks to avoid “realising” a loss, refuse fair gambles (win $11 or lose $10 on a coin flip — most decline), and value a mug they own more than they’d pay to buy it. “Don’t lose your streak” framings exploit it to keep us engaged.',
        no: 'Folk holder på fallende aksjer for å unngå å “realisere” et tap, avviser rettferdige sjansespill (vinn 11 kr eller tap 10 kr på et myntkast — de fleste sier nei), og verdsetter et krus de eier høyere enn de ville betalt for å kjøpe det. Innramminger som “ikke mist rekken din” utnytter den for å holde oss engasjert.'
      },
      realWorld: {
        en: 'It drives investing mistakes, insurance and warranty sales, marketing (“don’t miss out”), negotiation, and policy design (defaults and “you could lose this benefit” framings).',
        no: 'Den driver investeringstabber, salg av forsikringer og garantier, markedsføring (“ikke gå glipp av det”), forhandling og politikkutforming (standardvalg og innramminger av typen “du kan miste denne fordelen”).'
      }
    },
    related: ['endowment-effect', 'framing-effect', 'sunk-cost-fallacy']
  },
  {
    id: 'sunk-cost-fallacy',
    module: 'psychology-biases',
    name: { en: 'Sunk Cost Fallacy', no: 'Tapte kostnaders feilslutning' },
    prompts: {
      easy: {
        en: 'Which concept describes continuing something only because of what you’ve already invested, not because it’s worth continuing?',
        no: 'Hvilket konsept beskriver det å fortsette med noe kun på grunn av det du allerede har investert, ikke fordi det er verdt å fortsette?'
      },
      medium: {
        en: 'Halfway through a terrible film you’ve paid for, you stay to the end “to get your money’s worth”, even though leaving would free your evening. Which concept is this?',
        no: 'Halvveis i en forferdelig film du har betalt for, blir du sittende til slutten “for å få noe igjen for pengene”, selv om det å gå ville frigjort kvelden din. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why do already-spent, unrecoverable costs irrationally influence decisions that should depend only on the future?',
        no: 'Hvorfor påvirker allerede brukte, ugjenvinnbare kostnader irrasjonelt beslutninger som bare burde avhenge av fremtiden?'
      }
    },
    explanation: {
      summary: {
        en: 'The tendency to keep investing in something — time, money, effort — because of what’s already been spent, even when abandoning it would clearly be better going forward.',
        no: 'Tendensen til å fortsette å investere i noe — tid, penger, innsats — på grunn av det som allerede er brukt, selv når det åpenbart ville vært bedre å gi opp og se framover.'
      },
      whyInteresting: {
        en: 'It pits sound logic against deep emotion: rationally, past costs are gone and only future costs and benefits should matter, yet the urge to “not waste” what we’ve sunk is almost irresistible. It is loss aversion playing out over time.',
        no: 'Den setter god logikk opp mot dyp følelse: rasjonelt sett er tidligere kostnader borte, og bare fremtidige kostnader og fordeler bør telle, men trangen til å “ikke kaste bort” det vi har lagt inn er nesten uimotståelig. Den er tapsaversjon som utspiller seg over tid.'
      },
      whyIntuitionFails: {
        en: 'We feel that quitting “wastes” the prior investment, so we throw good money after bad to justify it. But the money or time is already gone regardless of what we do next; the only rational question is whether continuing is worth it from here, ignoring the past entirely.',
        no: 'Vi føler at det å gi opp “kaster bort” den tidligere investeringen, så vi kaster gode penger etter dårlige for å rettferdiggjøre den. Men pengene eller tiden er allerede borte uansett hva vi gjør videre; det eneste rasjonelle spørsmålet er om det er verdt å fortsette herfra, og se helt bort fra fortiden.'
      },
      example: {
        en: 'Finishing a meal you dislike because you paid for it; staying in an unrewarding career because of the years already invested; a government continuing a doomed project because so much has already been spent (the “Concorde fallacy”).',
        no: 'Å spise opp et måltid du ikke liker fordi du betalte for det; å bli værende i en lite givende karriere på grunn av årene som allerede er investert; en regjering som fortsetter et dødsdømt prosjekt fordi så mye allerede er brukt (“Concorde-feilslutningen”).'
      },
      realWorld: {
        en: 'It traps individuals in bad jobs, relationships, and investments, and drives organisations and governments to pour resources into failing projects. The antidote: decide based on the future, treating the past as a closed account.',
        no: 'Den fanger enkeltpersoner i dårlige jobber, forhold og investeringer, og driver organisasjoner og regjeringer til å øse ressurser inn i prosjekter som mislykkes. Motgiften: bestem ut fra fremtiden, og behandle fortiden som et avsluttet regnskap.'
      }
    },
    related: ['loss-aversion', 'opportunity-cost', 'framing-effect']
  },
  {
    id: 'framing-effect',
    module: 'psychology-biases',
    name: { en: 'Framing Effect', no: 'Innrammingseffekten' },
    prompts: {
      easy: {
        en: 'Which concept describes how the way a choice is worded — not just its content — changes the decision we make?',
        no: 'Hvilket konsept beskriver hvordan måten et valg formuleres på — ikke bare innholdet — endrer beslutningen vi tar?'
      },
      medium: {
        en: 'A surgery described as having a “90% survival rate” is chosen far more often than the identical one described as having a “10% mortality rate”. Which concept is this?',
        no: 'En operasjon beskrevet med “90 % overlevelsesrate” velges langt oftere enn den identiske som beskrives med “10 % dødelighet”. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why do two logically identical descriptions of the same facts lead people to opposite choices?',
        no: 'Hvorfor får to logisk identiske beskrivelser av de samme fakta folk til å ta motsatte valg?'
      }
    },
    explanation: {
      summary: {
        en: 'The framing effect is our tendency to react differently to the same information depending on how it is presented — as a gain or a loss, a chance or a risk — even when the underlying facts are identical.',
        no: 'Innrammingseffekten er tendensen vår til å reagere ulikt på den samme informasjonen avhengig av hvordan den presenteres — som en gevinst eller et tap, en sjanse eller en risiko — selv når de underliggende fakta er identiske.'
      },
      whyInteresting: {
        en: 'It shows that human preferences aren’t fixed and then revealed; they’re partly constructed in the moment by the wording of the question. The frame is not a neutral window onto a choice — it shapes the choice.',
        no: 'Den viser at menneskelige preferanser ikke er fastlagte og deretter avdekkes; de konstrueres delvis i øyeblikket av ordlyden i spørsmålet. Rammen er ikke et nøytralt vindu mot et valg — den former valget.'
      },
      whyIntuitionFails: {
        en: 'We assume that if two statements mean the same thing, we’ll treat them the same. But “90% lean” and “10% fat”, or “survival” and “mortality”, trigger different feelings (gain versus loss), and we respond to the feeling, not the equivalent logic beneath it.',
        no: 'Vi antar at hvis to utsagn betyr det samme, behandler vi dem likt. Men “90 % magert” og “10 % fett”, eller “overlevelse” og “dødelighet”, utløser ulike følelser (gevinst versus tap), og vi reagerer på følelsen, ikke på den likeverdige logikken under.'
      },
      example: {
        en: 'Tversky and Kahneman’s disease problem: people choose a “sure save 200 of 600” option when framed as lives saved, but choose the gamble when the identical outcome is framed as lives lost — flipping their risk preference purely on wording. Marketers exploit this with “95% fat free” and “limited time only”.',
        no: 'Tversky og Kahnemans sykdomsproblem: folk velger et “redd 200 av 600 sikkert”-alternativ når det innrammes som liv reddet, men velger sjansespillet når det identiske utfallet innrammes som liv tapt — og snur risikopreferansen sin utelukkende på ordlyden. Markedsførere utnytter dette med “95 % fettfri” og “kun i en begrenset periode”.'
      },
      realWorld: {
        en: 'It pervades advertising, political messaging, medical consent, public-health campaigns, and “nudge” policy, and is a core reason that how a question is asked can determine its answer.',
        no: 'Den gjennomsyrer reklame, politiske budskap, medisinsk samtykke, folkehelsekampanjer og “dytt”-politikk, og er en kjernegrunn til at måten et spørsmål stilles på kan avgjøre svaret.'
      }
    },
    related: ['anchoring-bias', 'loss-aversion', 'negativity-bias']
  },
  {
    id: 'hindsight-bias',
    module: 'psychology-biases',
    name: { en: 'Hindsight Bias', no: 'Etterpåklokskapseffekten' },
    prompts: {
      easy: {
        en: 'Which concept describes the feeling that a past event was predictable all along, once you already know how it turned out?',
        no: 'Hvilket konsept beskriver følelsen av at en tidligere hendelse var forutsigbar hele tiden, når du først vet hvordan den endte?'
      },
      medium: {
        en: 'After a company collapses, commentators declare the warning signs were “obvious” — though almost none of them predicted it beforehand. Which concept is this?',
        no: 'Etter at et selskap kollapser, erklærer kommentatorer at varseltegnene var “åpenbare” — selv om nesten ingen av dem forutså det på forhånd. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does knowing an outcome make us misremember how uncertain we actually were before it?',
        no: 'Hvorfor får det å kjenne et utfall oss til å feilhuske hvor usikre vi faktisk var før det?'
      }
    },
    explanation: {
      summary: {
        en: 'Hindsight bias — the “I-knew-it-all-along” effect — is our tendency, once we know how something turned out, to see that outcome as having been obvious and predictable from the start.',
        no: 'Etterpåklokskapseffekten — “jeg visste det hele tiden”-effekten — er tendensen vår, når vi først vet hvordan noe endte, til å se det utfallet som åpenbart og forutsigbart fra starten.'
      },
      whyInteresting: {
        en: 'It quietly rewrites our memory of our own past uncertainty, making the world seem more predictable than it is and robbing us of the lessons that genuine surprise should teach. It corrupts our ability to learn from experience.',
        no: 'Den omskriver stille minnet vårt om vår egen tidligere usikkerhet, får verden til å virke mer forutsigbar enn den er, og frarøver oss lærdommene som ekte overraskelse burde gi. Den ødelegger vår evne til å lære av erfaring.'
      },
      whyIntuitionFails: {
        en: 'Once the outcome is known, the mind reorganises the evidence around it and can no longer access how genuinely uncertain things felt beforehand. The known result feels like it was always the obvious one, so we overrate our past — and future — ability to predict.',
        no: 'Når utfallet er kjent, omorganiserer sinnet bevisene rundt det og får ikke lenger tilgang til hvor ekte usikkert ting føltes på forhånd. Det kjente resultatet føles som om det alltid var det åpenbare, så vi overvurderer vår tidligere — og fremtidige — evne til å forutsi.'
      },
      example: {
        en: 'After an election, a market crash, or a sports upset, the result suddenly seems clearly foreseeable, and we unfairly blame decision-makers for “not seeing the obvious”. Doctors judged after a bad outcome are seen as negligent for missing signs that were ambiguous at the time.',
        no: 'Etter et valg, et børskrakk eller et idrettssjokk virker resultatet plutselig klart forutsigbart, og vi klandrer urettferdig beslutningstakere for å “ikke se det åpenbare”. Leger som bedømmes etter et dårlig utfall, anses som uaktsomme for å overse tegn som var tvetydige på det tidspunktet.'
      },
      realWorld: {
        en: 'It produces unfair judgements of doctors, investors, and leaders in hindsight, distorts legal and historical analysis, and breeds overconfidence in our power to predict the future. Keeping a written record of predictions is a common defence.',
        no: 'Den gir urettferdige bedømmelser av leger, investorer og ledere i etterpåklokskapens lys, forvrenger juridisk og historisk analyse, og avler overdreven tro på vår evne til å forutsi fremtiden. Å føre en skriftlig logg over spådommer er et vanlig forsvar.'
      }
    },
    related: ['confirmation-bias', 'dunning-kruger-effect', 'just-world-hypothesis']
  },
  {
    id: 'fundamental-attribution-error',
    module: 'psychology-biases',
    name: { en: 'Fundamental Attribution Error', no: 'Den fundamentale attribusjonsfeilen' },
    prompts: {
      easy: {
        en: 'Which concept describes blaming other people’s behaviour on their character, while excusing our own as caused by circumstances?',
        no: 'Hvilket konsept beskriver det å skylde andres atferd på karakteren deres, mens vi unnskylder vår egen som forårsaket av omstendighetene?'
      },
      medium: {
        en: 'When a stranger cuts you off in traffic, he’s “a reckless jerk”; when you do the same, it’s because you’re late for an emergency. Which concept describes this double standard?',
        no: 'Når en fremmed kjører rett foran deg i trafikken, er han “en hensynsløs idiot”; når du gjør det samme, er det fordi du er sen til en nødsituasjon. Hvilket konsept beskriver denne dobbeltmoralen?'
      },
      hard: {
        en: 'Why do we explain others’ actions by who they are, but our own by the situation we were in?',
        no: 'Hvorfor forklarer vi andres handlinger ut fra hvem de er, men våre egne ut fra situasjonen vi var i?'
      }
    },
    explanation: {
      summary: {
        en: 'The tendency to over-attribute other people’s behaviour to their personality or character, while under-weighting the situational pressures that may have caused it — and to do the reverse for ourselves.',
        no: 'Tendensen til å tilskrive andres atferd for mye til personligheten eller karakteren deres, mens man undervurderer det situasjonsbestemte presset som kan ha forårsaket den — og å gjøre det motsatte for oss selv.'
      },
      whyInteresting: {
        en: 'It exposes a systematic asymmetry in how we judge ourselves versus others, and is a root cause of harsh moral judgement, conflict, and misunderstanding. Seeing it builds empathy: maybe they’re not a bad person, just in a bad situation.',
        no: 'Den avslører en systematisk asymmetri i hvordan vi bedømmer oss selv kontra andre, og er en grunnleggende årsak til harde moralske dommer, konflikt og misforståelser. Å se den bygger empati: kanskje de ikke er et dårlig menneske, bare i en dårlig situasjon.'
      },
      whyIntuitionFails: {
        en: 'When we watch someone act, the person is vivid and the situation is invisible, so we read their behaviour as “just who they are”. From inside our own life, the situation is glaringly obvious, so we excuse ourselves by it. We forget that everyone else is also embedded in circumstances we can’t see.',
        no: 'Når vi ser noen handle, er personen tydelig og situasjonen usynlig, så vi leser atferden deres som “bare den de er”. Fra innsiden av vårt eget liv er situasjonen påfallende åpenbar, så vi unnskylder oss med den. Vi glemmer at alle andre også er innfelt i omstendigheter vi ikke kan se.'
      },
      example: {
        en: 'A coworker who misses a deadline is “lazy and disorganised”, but when you miss one it’s because the brief was unclear and your child was sick. A famous experiment found observers attributed an essay’s pro/anti stance to the writer’s true beliefs even when told the position was assigned at random.',
        no: 'En kollega som bommer på en frist er “lat og uorganisert”, men når du bommer på en, er det fordi oppdraget var uklart og barnet ditt var sykt. Et berømt eksperiment fant at observatører tilskrev en teksts standpunkt forfatterens egentlige overbevisning selv når de fikk vite at standpunktet var tildelt tilfeldig.'
      },
      realWorld: {
        en: 'It fuels interpersonal conflict, prejudice and stereotyping, unfair workplace evaluations, and the failure to fix broken systems (blaming individuals instead of the situations that shape them).',
        no: 'Den nærer mellommenneskelig konflikt, fordommer og stereotypier, urettferdige vurderinger på arbeidsplassen, og manglende evne til å reparere ødelagte systemer (å klandre enkeltpersoner i stedet for situasjonene som former dem).'
      }
    },
    related: ['confirmation-bias', 'halo-effect', 'just-world-hypothesis']
  },
  {
    id: 'halo-effect',
    module: 'psychology-biases',
    name: { en: 'Halo Effect', no: 'Glorieeffekten' },
    prompts: {
      easy: {
        en: 'Which concept describes letting one good trait of a person or thing colour our judgement of all their other traits?',
        no: 'Hvilket konsept beskriver det å la én god egenskap ved en person eller ting farge vurderingen vår av alle de andre egenskapene?'
      },
      medium: {
        en: 'An attractive, well-dressed candidate is assumed to also be smarter, kinder, and more competent — though the interviewer has seen no evidence of any of it. Which concept is this?',
        no: 'En attraktiv, velkledd kandidat antas også å være smartere, snillere og mer kompetent — selv om intervjueren ikke har sett noe bevis på noe av det. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does a single positive impression spill over and bias our judgement of unrelated qualities?',
        no: 'Hvorfor smitter ett enkelt positivt inntrykk over og påvirker vurderingen vår av urelaterte egenskaper?'
      }
    },
    explanation: {
      summary: {
        en: 'The tendency to let one prominent positive (or negative) trait — like attractiveness, likeability, or a strong first impression — bias our perception of a person’s or thing’s other, unrelated qualities.',
        no: 'Tendensen til å la én fremtredende positiv (eller negativ) egenskap — som tiltrekkende utseende, sympati eller et sterkt førsteinntrykk — påvirke oppfatningen vår av en persons eller tings andre, urelaterte egenskaper.'
      },
      whyInteresting: {
        en: 'It shows that our impressions are not assembled trait by trait but smeared by a single overall feeling, which is why first impressions and surface traits carry outsized weight. It connects beauty, charisma, and branding to judgements they have no business affecting.',
        no: 'Den viser at inntrykkene våre ikke settes sammen egenskap for egenskap, men smøres av én samlet følelse, og det er derfor førsteinntrykk og overflateegenskaper får uforholdsmessig stor vekt. Den knytter skjønnhet, karisma og merkevarebygging til vurderinger de ikke har noe med å gjøre.'
      },
      whyIntuitionFails: {
        en: 'We believe we judge each quality on its own evidence. But a strong impression in one dimension creates a global “good” or “bad” feeling that bleeds into all the others, so we “see” competence or honesty that we’ve actually just inferred from charm or looks.',
        no: 'Vi tror vi bedømmer hver egenskap på dens egne bevis. Men et sterkt inntrykk i én dimensjon skaper en samlet “god” eller “dårlig” følelse som blør over i alle de andre, så vi “ser” kompetanse eller ærlighet som vi egentlig bare har sluttet oss til fra sjarm eller utseende.'
      },
      example: {
        en: 'Attractive defendants receive lighter sentences; tall, confident candidates are rated more competent; a sleek product is assumed to work better. A teacher who likes a student’s behaviour grades their work more generously. Celebrities sell products far outside their expertise.',
        no: 'Tiltalende tiltalte får mildere straffer; høye, selvsikre kandidater vurderes som mer kompetente; et elegant produkt antas å fungere bedre. En lærer som liker en elevs oppførsel, vurderer arbeidet deres mer sjenerøst. Kjendiser selger produkter langt utenfor sitt fagfelt.'
      },
      realWorld: {
        en: 'It shapes hiring, performance reviews, marketing and branding, courtroom outcomes, and political appeal, and is a key reason structured, criterion-by-criterion evaluation outperforms gut impressions.',
        no: 'Den former ansettelser, prestasjonsvurderinger, markedsføring og merkevarebygging, rettsavgjørelser og politisk appell, og er en hovedgrunn til at strukturert vurdering, kriterium for kriterium, slår magefølelse.'
      }
    },
    related: ['anchoring-bias', 'fundamental-attribution-error', 'confirmation-bias']
  },
  {
    id: 'planning-fallacy',
    module: 'psychology-biases',
    name: { en: 'Planning Fallacy', no: 'Planleggingsfeilslutningen' },
    prompts: {
      easy: {
        en: 'Which concept describes our tendency to underestimate how long a task will take, even when we know similar tasks have run over?',
        no: 'Hvilket konsept beskriver tendensen vår til å undervurdere hvor lang tid en oppgave vil ta, selv når vi vet at lignende oppgaver har gått over tiden?'
      },
      medium: {
        en: 'A team swears a project will take three months; it takes nine — just like their last three projects, which they’ve conveniently forgotten. Which concept is this?',
        no: 'Et team sverger på at et prosjekt vil ta tre måneder; det tar ni — akkurat som de tre forrige prosjektene deres, som de beleilig har glemt. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why do we keep underestimating completion times even after a lifetime of overrunning them?',
        no: 'Hvorfor fortsetter vi å undervurdere fullføringstider selv etter et helt liv med å overskride dem?'
      }
    },
    explanation: {
      summary: {
        en: 'The tendency to underestimate the time, costs, and risks of future actions while overestimating their benefits — predicting best-case scenarios even against our own track record.',
        no: 'Tendensen til å undervurdere tiden, kostnadene og risikoene ved fremtidige handlinger samtidig som man overvurderer fordelene deres — å forutsi beste utfall selv i strid med vår egen historikk.'
      },
      whyInteresting: {
        en: 'It’s a strikingly stubborn bias: experience barely cures it. It reveals that we plan by imagining a smooth, obstacle-free path (the “inside view”) and ignore the statistical reality of how such projects usually go.',
        no: 'Det er en slående gjenstridig skjevhet: erfaring kurerer den knapt. Den avslører at vi planlegger ved å forestille oss en jevn, hindringsfri vei (“innenfra-perspektivet”) og ignorerer den statistiske virkeligheten av hvordan slike prosjekter vanligvis går.'
      },
      whyIntuitionFails: {
        en: 'We construct plans from an optimistic, step-by-step story of this specific task going right, and discount the unforeseen delays that always, in aggregate, occur. We don’t anchor on how long similar projects actually took (the “outside view”), so we under-budget again and again.',
        no: 'Vi bygger planer fra en optimistisk, trinn-for-trinn-fortelling om at nettopp denne oppgaven går bra, og avskriver de uforutsette forsinkelsene som alltid, samlet sett, inntreffer. Vi forankrer ikke på hvor lang tid lignende prosjekter faktisk tok (“utenfra-perspektivet”), så vi underbudsjetterer gang på gang.'
      },
      example: {
        en: 'Students predicting when they’ll finish a thesis typically finish far later than even their “worst-case” estimate. Mega-projects — the Sydney Opera House, Berlin’s airport, most software launches — routinely run years late and vastly over budget.',
        no: 'Studenter som spår når de skal bli ferdige med en oppgave, blir typisk ferdige langt senere enn selv “verste fall”-anslaget sitt. Megaprosjekter — operahuset i Sydney, flyplassen i Berlin, de fleste programvarelanseringer — blir rutinemessig år forsinket og langt over budsjett.'
      },
      realWorld: {
        en: 'It plagues software development, construction, public infrastructure, and personal goals. The standard remedy is the “outside view”: estimate from how long comparable past projects truly took, not from imagining this one going perfectly.',
        no: 'Den plager programvareutvikling, bygg og anlegg, offentlig infrastruktur og personlige mål. Den vanlige motgiften er “utenfra-perspektivet”: anslå ut fra hvor lang tid sammenlignbare tidligere prosjekter faktisk tok, ikke ut fra å forestille seg at dette går perfekt.'
      }
    },
    related: ['dunning-kruger-effect', 'sunk-cost-fallacy', 'hindsight-bias']
  },
  {
    id: 'endowment-effect',
    module: 'psychology-biases',
    name: { en: 'Endowment Effect', no: 'Eiereffekten' },
    prompts: {
      easy: {
        en: 'Which concept describes valuing something more simply because you own it?',
        no: 'Hvilket konsept beskriver det å verdsette noe høyere rett og slett fordi du eier det?'
      },
      medium: {
        en: 'Give someone a mug and they demand $7 to part with it — but offer them the same mug to buy and they’ll only pay $3. Mere ownership doubled its worth. Which concept is this?',
        no: 'Gi noen et krus, og de krever 70 kr for å gi det fra seg — men tilby dem det samme kruset å kjøpe, og de vil bare betale 30 kr. Bare det å eie det doblet verdien. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does owning something, even briefly, make us demand more to give it up than we’d have paid to get it?',
        no: 'Hvorfor får det å eie noe, selv kort, oss til å kreve mer for å gi det fra oss enn vi ville betalt for å få det?'
      }
    },
    explanation: {
      summary: {
        en: 'The tendency to value something more highly merely because we own it, demanding more to give it up than we would have been willing to pay to acquire it.',
        no: 'Tendensen til å verdsette noe høyere bare fordi vi eier det, og kreve mer for å gi det fra oss enn vi ville vært villige til å betale for å skaffe det.'
      },
      whyInteresting: {
        en: 'It violates a basic assumption of classical economics — that an item’s value to you shouldn’t depend on whether it happens to be in your hands. It ties ownership, identity, and loss aversion together in a single, easily demonstrated effect.',
        no: 'Den bryter med en grunnleggende antakelse i klassisk økonomi — at en gjenstands verdi for deg ikke bør avhenge av om den tilfeldigvis er i dine hender. Den knytter eierskap, identitet og tapsaversjon sammen i én lett påviselig effekt.'
      },
      whyIntuitionFails: {
        en: 'We assume a thing’s value is a fixed property we’d assess the same way as buyer or seller. But once we own it, giving it up registers as a loss (which we feel acutely), while buying it is a mere gain, so the selling price we demand outruns the buying price we’d offer.',
        no: 'Vi antar at en tings verdi er en fast egenskap vi ville vurdert likt som kjøper eller selger. Men når vi først eier den, registreres det å gi den fra oss som et tap (som vi kjenner sterkt), mens det å kjøpe den bare er en gevinst, så salgsprisen vi krever overgår kjøpsprisen vi ville tilbudt.'
      },
      example: {
        en: 'In Kahneman, Knetsch, and Thaler’s classic experiment, students given a mug demanded about twice as much to sell it as other students were willing to pay to buy one. The same logic makes us overvalue our own house, our clutter (“I might need it”), and free-trial products once they feel like ours.',
        no: 'I Kahneman, Knetsch og Thalers klassiske eksperiment krevde studenter som fikk et krus omtrent dobbelt så mye for å selge det som andre studenter var villige til å betale for å kjøpe ett. Den samme logikken får oss til å overvurdere vårt eget hus, rotet vårt (“jeg kan trenge det”), og prøveprodukter når de først føles som våre.'
      },
      realWorld: {
        en: 'It powers free trials and “try before you buy”, money-back guarantees, trade-in negotiations, and our difficulty decluttering, and helps explain sticky status-quo preferences in markets and politics.',
        no: 'Den driver gratis prøveperioder og “prøv før du kjøper”, fornøyd-garantier, innbytteforhandlinger og vansken vår med å rydde, og bidrar til å forklare seige preferanser for status quo i markeder og politikk.'
      }
    },
    related: ['loss-aversion', 'sunk-cost-fallacy', 'anchoring-bias']
  },
  {
    id: 'negativity-bias',
    module: 'psychology-biases',
    name: { en: 'Negativity Bias', no: 'Negativitetsskjevhet' },
    prompts: {
      easy: {
        en: 'Which concept describes how bad events affect us more powerfully than equally good ones?',
        no: 'Hvilket konsept beskriver hvordan dårlige hendelser påvirker oss kraftigere enn like gode?'
      },
      medium: {
        en: 'A worker receives nine compliments and one criticism in a review, and lies awake replaying only the criticism. Which concept is this?',
        no: 'En arbeider får ni komplimenter og én kritikk i en medarbeidersamtale, og ligger våken og spiller bare kritikken om igjen. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why does a single piece of bad news outweigh several pieces of good news of the same size?',
        no: 'Hvorfor veier én enkelt dårlig nyhet tyngre enn flere gode nyheter av samme størrelse?'
      }
    },
    explanation: {
      summary: {
        en: 'The tendency for negative events, emotions, and information to have a greater impact on us than positive ones of equal magnitude — bad is stronger than good.',
        no: 'Tendensen til at negative hendelser, følelser og informasjon har større innvirkning på oss enn positive av samme størrelse — vondt er sterkere enn godt.'
      },
      whyInteresting: {
        en: 'It probably has deep evolutionary roots — missing a threat was far costlier than missing an opportunity — and it shapes memory, relationships, media, and politics. It explains why the world can improve while feeling like it’s getting worse.',
        no: 'Den har trolig dype evolusjonære røtter — å overse en trussel var langt dyrere enn å gå glipp av en mulighet — og den former hukommelse, forhold, medier og politikk. Den forklarer hvorfor verden kan bli bedre samtidig som den føles som om den blir verre.'
      },
      whyIntuitionFails: {
        en: 'We assume good and bad of equal size should roughly cancel. But the mind weights the negative far more heavily, so one harsh comment drowns out many kind ones, one bad experience defines a place, and threatening news grips attention that good news can’t.',
        no: 'Vi antar at godt og vondt av samme størrelse omtrent skal oppheve hverandre. Men sinnet vekter det negative langt tyngre, så én hard kommentar overdøver mange vennlige, én dårlig opplevelse definerer et sted, og truende nyheter griper oppmerksomheten som gode nyheter ikke kan.'
      },
      example: {
        en: 'It takes many positive interactions to offset a single hurtful one in a relationship. A restaurant’s one-star reviews are read far more carefully than its five-star ones. “If it bleeds, it leads” — news favours the negative because we attend to it.',
        no: 'Det skal mange positive samhandlinger til for å oppveie én sårende i et forhold. En restaurants enstjernes anmeldelser leses langt grundigere enn femstjerners. “If it bleeds, it leads” — nyheter favoriserer det negative fordi vi fester oss ved det.'
      },
      realWorld: {
        en: 'It drives the tone of news and social media, political fear appeals, our perception of risk and decline, and relationship dynamics, and is a key reason the world’s measurable progress often goes emotionally unnoticed.',
        no: 'Den driver tonen i nyheter og sosiale medier, politiske skremselsappeller, vår oppfatning av risiko og forfall, og dynamikken i forhold, og er en hovedgrunn til at verdens målbare fremgang ofte går følelsesmessig upåaktet hen.'
      }
    },
    related: ['availability-heuristic', 'loss-aversion', 'framing-effect']
  },
  {
    id: 'just-world-hypothesis',
    module: 'psychology-biases',
    name: { en: 'Just-World Hypothesis', no: 'Rettferdig verden-hypotesen' },
    prompts: {
      easy: {
        en: 'Which concept describes the belief that people generally get what they deserve, so the world is fundamentally fair?',
        no: 'Hvilket konsept beskriver troen på at folk stort sett får som fortjent, slik at verden er grunnleggende rettferdig?'
      },
      medium: {
        en: 'On hearing that someone was robbed, an observer’s first instinct is to ask what the victim did wrong — assuming they must have somehow brought it on themselves. Which concept is this?',
        no: 'Når en observatør hører at noen ble ranet, er det første instinktet å spørre hva offeret gjorde galt — og anta at de på et eller annet vis må ha påført seg det selv. Hvilket konsept er dette?'
      },
      hard: {
        en: 'Why do we so readily blame victims for their misfortune rather than accept that bad things befall good people?',
        no: 'Hvorfor klandrer vi så lett ofre for uhellet deres snarere enn å godta at vonde ting rammer gode mennesker?'
      }
    },
    explanation: {
      summary: {
        en: 'The tendency to believe that the world is fundamentally fair, so that people get what they deserve and deserve what they get — a comforting belief that can curdle into blaming victims.',
        no: 'Tendensen til å tro at verden er grunnleggende rettferdig, slik at folk får som fortjent og fortjener det de får — en trøstende tro som kan surne til offerklandring.'
      },
      whyInteresting: {
        en: 'It reveals how a need for a predictable, controllable world quietly shapes our moral judgements. Believing the world is just protects our sense of safety, but at the cost of compassion for those who suffer.',
        no: 'Den avslører hvordan et behov for en forutsigbar, kontrollerbar verden stille former de moralske dommene våre. Å tro at verden er rettferdig beskytter trygghetsfølelsen vår, men på bekostning av medfølelse med dem som lider.'
      },
      whyIntuitionFails: {
        en: 'We want to feel that effort and virtue reliably pay off and that misfortune can be avoided by being good — because the alternative, that catastrophe can strike anyone undeservedly, is frightening. So when we see suffering, we unconsciously reason backward: they must have deserved it, which preserves the comforting belief.',
        no: 'Vi vil føle at innsats og dyd pålitelig lønner seg og at uhell kan unngås ved å være god — fordi alternativet, at katastrofe kan ramme hvem som helst ufortjent, er skremmende. Så når vi ser lidelse, resonnerer vi ubevisst baklengs: de må ha fortjent det, noe som bevarer den trøstende troen.'
      },
      example: {
        en: 'Victims of assault, poverty, illness, or layoffs are often subtly blamed (“what was she wearing?”, “they must be lazy”). Lerner’s experiments showed observers came to derogate an innocent person they’d watched receive (apparently real) electric shocks they couldn’t stop — devaluing the victim to keep the world feeling fair.',
        no: 'Ofre for overgrep, fattigdom, sykdom eller oppsigelser klandres ofte subtilt (“hva hadde hun på seg?”, “de må være late”). Lerners eksperimenter viste at observatører begynte å nedvurdere en uskyldig person de hadde sett få (tilsynelatende ekte) elektriske støt de ikke kunne stoppe — og devaluerte offeret for å holde verden følt rettferdig.'
      },
      realWorld: {
        en: 'It underlies victim-blaming, attitudes toward poverty and inequality, harsh moralising about the unlucky, and resistance to evidence that outcomes are heavily shaped by chance and circumstance.',
        no: 'Den ligger bak offerklandring, holdninger til fattigdom og ulikhet, hard moralisering over de uheldige, og motstand mot bevis på at utfall er sterkt formet av tilfeldigheter og omstendigheter.'
      }
    },
    related: ['fundamental-attribution-error', 'confirmation-bias', 'hindsight-bias']
  },

  // ============================================================
  // Philosophy
  // ============================================================
  {
    id: 'trolley-problem',
    module: 'philosophy',
    name: { en: 'Trolley Problem', no: 'Trikkeproblemet' },
    prompts: {
      easy: {
        en: 'Which concept describes the moral dilemma of whether to divert a runaway tram to kill one person instead of five?',
        no: 'Hvilket konsept beskriver det moralske dilemmaet om man skal lede en løpsk trikk slik at den dreper én person i stedet for fem?'
      },
      medium: {
        en: 'A runaway tram will kill five people on the track ahead. You can pull a lever to switch it to a side track, where it will kill one person instead. Do you pull it? Which thought experiment is this?',
        no: 'En løpsk trikk vil drepe fem mennesker på sporet foran. Du kan trekke i en spak for å lede den over på et sidespor, der den i stedet dreper én person. Trekker du i den? Hvilket tankeeksperiment er dette?'
      },
      hard: {
        en: 'Why do most people agree to divert a tram to save five at the cost of one, yet refuse to push one person off a bridge to stop it — even though the numbers are identical?',
        no: 'Hvorfor går de fleste med på å lede en trikk for å redde fem på bekostning av én, men nekter å dytte én person ut fra en bro for å stoppe den — selv om tallene er identiske?'
      }
    },
    explanation: {
      summary: {
        en: 'A thought experiment probing our moral intuitions: is it right to actively cause one death in order to prevent five? It pits the numbers (save five) against the act of killing.',
        no: 'Et tankeeksperiment som sonderer de moralske intuisjonene våre: er det riktig å aktivt forårsake ett dødsfall for å hindre fem? Det setter tallene (redd fem) opp mot selve handlingen å drepe.'
      },
      whyInteresting: {
        en: 'It exposes a fault line in ethics between consequences (five deaths are worse than one) and rules or rights (deliberately killing a person is wrong). By varying the scenario, it isolates exactly which features change our moral verdict.',
        no: 'Det blottlegger en bruddlinje i etikken mellom konsekvenser (fem dødsfall er verre enn ett) og regler eller rettigheter (å bevisst drepe en person er galt). Ved å variere scenarioet isolerer det nøyaktig hvilke trekk som endrer den moralske dommen vår.'
      },
      whyIntuitionFails: {
        en: 'Most people pull the lever to save five, but balk at physically pushing a large stranger off a footbridge to stop the same tram and save the same five — even though the body count is identical. Intuition tracks something beyond the numbers: the difference between redirecting a threat and using a person as a mere means.',
        no: 'De fleste trekker i spaken for å redde fem, men kvier seg for fysisk å dytte en stor fremmed ut fra en gangbro for å stoppe den samme trikken og redde de samme fem — selv om dødstallet er identisk. Intuisjonen sporer noe utover tallene: forskjellen mellom å omdirigere en trussel og å bruke en person som et rent middel.'
      },
      example: {
        en: 'Switch version: flip a lever, the tram kills one instead of five — most say yes. Footbridge version: shove one person onto the track to stop it and save five — most say no. The outcomes match; only the nature of the act differs, revealing that how we cause harm matters morally, not just how much.',
        no: 'Spakversjonen: vipp en spak, trikken dreper én i stedet for fem — de fleste sier ja. Gangbroversjonen: dytt én person ut på sporet for å stoppe den og redde fem — de fleste sier nei. Utfallene er like; bare handlingens natur er forskjellig, noe som avslører at hvordan vi forårsaker skade betyr noe moralsk, ikke bare hvor mye.'
      },
      realWorld: {
        en: 'Its descendants shape real debates: how self-driving cars should behave in unavoidable crashes, triage in medicine and war, drone-strike ethics, and the design of any system that must trade some lives against others.',
        no: 'Etterkommerne dets former virkelige debatter: hvordan selvkjørende biler bør oppføre seg i uunngåelige kollisjoner, triage i medisin og krig, etikken bak droneangrep, og utformingen av ethvert system som må veie noen liv mot andre.'
      }
    },
    related: ['utilitarianism', 'categorical-imperative', 'veil-of-ignorance']
  },
  {
    id: 'chinese-room',
    module: 'philosophy',
    name: { en: 'Chinese Room', no: 'Det kinesiske rom' },
    prompts: {
      easy: {
        en: 'Which concept describes the argument that following rules to manipulate symbols isn’t the same as truly understanding them?',
        no: 'Hvilket konsept beskriver argumentet om at det å følge regler for å manipulere symboler ikke er det samme som virkelig å forstå dem?'
      },
      medium: {
        en: 'A man who knows no Chinese sits in a room, using a rulebook to match incoming Chinese symbols with outgoing ones so convincingly that those outside think he understands Chinese — though he understands nothing. Which thought experiment is this?',
        no: 'En mann som ikke kan kinesisk, sitter i et rom og bruker en regelbok til å matche innkommende kinesiske symboler med utgående, så overbevisende at de utenfor tror han forstår kinesisk — selv om han ikke forstår noe. Hvilket tankeeksperiment er dette?'
      },
      hard: {
        en: 'Why might a computer pass every test for understanding language while understanding nothing at all?',
        no: 'Hvorfor kan en datamaskin bestå hver test for språkforståelse mens den ikke forstår noe som helst?'
      }
    },
    explanation: {
      summary: {
        en: 'John Searle’s Chinese Room argues that a computer running a program — like a person mechanically matching Chinese symbols by a rulebook — can produce perfect responses without any genuine understanding, so syntax (symbol manipulation) is not sufficient for semantics (meaning).',
        no: 'John Searles kinesiske rom hevder at en datamaskin som kjører et program — som en person som mekanisk matcher kinesiske symboler etter en regelbok — kan produsere perfekte svar uten noen ekte forståelse, så syntaks (symbolmanipulasjon) er ikke tilstrekkelig for semantikk (mening).'
      },
      whyInteresting: {
        en: 'It strikes at the heart of artificial intelligence: does behaving as if you understand mean you do? It challenges the idea that the right program, running on any hardware, would by itself produce a real mind.',
        no: 'Det treffer kjernen i kunstig intelligens: betyr det å oppføre seg som om du forstår at du faktisk gjør det? Det utfordrer idéen om at det riktige programmet, kjørt på hvilken som helst maskinvare, i seg selv ville produsere et ekte sinn.'
      },
      whyIntuitionFails: {
        en: 'When a system answers our questions fluently, we naturally assume something inside understands. Searle’s point is that the man in the room passes the test perfectly yet grasps nothing — he’s just shuffling symbols — so passing the test can’t be proof of understanding. (Critics reply that the whole system, not the man, might understand.)',
        no: 'Når et system besvarer spørsmålene våre flytende, antar vi naturlig at noe inni forstår. Searles poeng er at mannen i rommet består testen perfekt, men forstår ingenting — han bare stokker symboler — så det å bestå testen kan ikke være bevis på forståelse. (Kritikere svarer at hele systemet, ikke mannen, kanskje forstår.)'
      },
      example: {
        en: 'Imagine slipping notes in Chinese under a door. Inside, an English speaker looks each symbol up in a vast rulebook and copies out the prescribed reply. To those outside, the room “speaks Chinese”. Inside, there is only rote symbol-matching and zero comprehension.',
        no: 'Se for deg at du skyver lapper på kinesisk under en dør. Inne slår en engelsktalende opp hvert symbol i en enorm regelbok og skriver av det foreskrevne svaret. For dem utenfor “snakker rommet kinesisk”. Inne finnes bare mekanisk symbolmatching og null forståelse.'
      },
      realWorld: {
        en: 'It frames ongoing debates about whether large language models “understand” or merely predict text, what consciousness requires, and whether passing the Turing test would ever amount to genuine thought.',
        no: 'Det rammer inn pågående debatter om hvorvidt store språkmodeller “forstår” eller bare forutsier tekst, hva bevissthet krever, og om det å bestå Turing-testen noen gang ville bety ekte tenkning.'
      }
    },
    related: ['philosophical-zombie', 'marys-room', 'brain-in-a-vat']
  },
  {
    id: 'experience-machine',
    module: 'philosophy',
    name: { en: 'Experience Machine', no: 'Opplevelsesmaskinen' },
    prompts: {
      easy: {
        en: 'Which concept describes a machine that could give you any pleasurable experience you want — and asks whether you’d plug in for life?',
        no: 'Hvilket konsept beskriver en maskin som kunne gi deg enhver behagelig opplevelse du ønsker — og spør om du ville koblet deg til for livet?'
      },
      medium: {
        en: 'A machine can give you a lifetime of indistinguishable-from-real experiences of everything you desire — but you’d float in a tank, and none of it would be real. Would you plug in? Which thought experiment is this?',
        no: 'En maskin kan gi deg et helt liv med opplevelser av alt du ønsker, umulige å skille fra virkeligheten — men du ville flyte i en tank, og ingenting av det ville være ekte. Ville du koblet deg til? Hvilket tankeeksperiment er dette?'
      },
      hard: {
        en: 'Why does the fact that most people refuse to plug into a perfect pleasure machine suggest that happiness isn’t all we value?',
        no: 'Hvorfor antyder det faktum at de fleste nekter å koble seg til en perfekt nytelsesmaskin at lykke ikke er alt vi verdsetter?'
      }
    },
    explanation: {
      summary: {
        en: 'Robert Nozick’s experience machine asks whether you would connect to a device guaranteeing a lifetime of perfectly realistic, blissful experiences. Most people say no — suggesting we value more than just our internal feelings.',
        no: 'Robert Nozicks opplevelsesmaskin spør om du ville koblet deg til en innretning som garanterer et helt liv med fullkomment realistiske, lykksalige opplevelser. De fleste sier nei — noe som antyder at vi verdsetter mer enn bare våre indre følelser.'
      },
      whyInteresting: {
        en: 'It is a direct test of hedonism, the view that pleasure is the only thing that ultimately matters. If pleasure were truly all we wanted, plugging in would be an easy yes; our reluctance reveals that we also want our experiences to be real and our achievements genuine.',
        no: 'Det er en direkte test av hedonismen, synet om at nytelse er det eneste som til syvende og sist betyr noe. Hvis nytelse virkelig var alt vi ønsket, ville det å koble seg til vært et enkelt ja; motviljen vår avslører at vi også vil at opplevelsene våre skal være ekte og prestasjonene våre genuine.'
      },
      whyIntuitionFails: {
        en: 'A pure pleasure-seeker should leap at a guaranteed lifetime of bliss. Yet most recoil, because we don’t just want the experience of climbing the mountain — we want actually to climb it, to truly be a certain kind of person, and to be in contact with a real world, not a convincing illusion.',
        no: 'En ren nytelsessøker burde hoppe på et garantert liv i lykksalighet. Likevel viker de fleste tilbake, fordi vi ikke bare vil ha opplevelsen av å bestige fjellet — vi vil faktisk bestige det, virkelig være en bestemt slags person, og være i kontakt med en ekte verden, ikke en overbevisende illusjon.'
      },
      example: {
        en: 'Nozick notes three reasons we hesitate: we want to do things, not just have the experience of doing them; we want to be a certain sort of person, not an indeterminate blob in a tank; and we want to live in contact with reality, not a man-made simulation, however pleasant.',
        no: 'Nozick peker på tre grunner til at vi nøler: vi vil gjøre ting, ikke bare ha opplevelsen av å gjøre dem; vi vil være en bestemt slags person, ikke en ubestemmelig klump i en tank; og vi vil leve i kontakt med virkeligheten, ikke en menneskeskapt simulering, uansett hvor behagelig.'
      },
      realWorld: {
        en: 'It bears on debates about virtual reality, the metaverse, drugs and digital escapism, and what a good life actually consists of — pressing the question of whether authenticity matters beyond felt happiness.',
        no: 'Det berører debatter om virtuell virkelighet, metaverset, rusmidler og digital virkelighetsflukt, og hva et godt liv faktisk består av — og presser spørsmålet om hvorvidt autentisitet betyr noe utover følt lykke.'
      }
    },
    related: ['brain-in-a-vat', 'utilitarianism', 'absurdism']
  },
  {
    id: 'ship-of-theseus',
    module: 'philosophy',
    name: { en: 'Ship of Theseus', no: 'Theseus’ skip' },
    prompts: {
      easy: {
        en: 'Which concept asks whether an object that has had every one of its parts replaced is still the same object?',
        no: 'Hvilket konsept spør om en gjenstand som har fått hver eneste del byttet ut, fortsatt er den samme gjenstanden?'
      },
      medium: {
        en: 'A wooden ship is preserved for centuries; over time every plank rots and is replaced, until no original wood remains. Is it still the same ship? And if someone rebuilt the discarded planks into a ship, which one is the original? Which puzzle is this?',
        no: 'Et treskip bevares i århundrer; med tiden råtner hver planke og byttes ut, til ingen opprinnelig ved er igjen. Er det fortsatt det samme skipet? Og hvis noen bygget de kasserte plankene sammen til et skip, hvilket av dem er originalen? Hvilken gåte er dette?'
      },
      hard: {
        en: 'Why is it so hard to say what makes something the “same” thing over time when all its components have changed?',
        no: 'Hvorfor er det så vanskelig å si hva som gjør noe til den “samme” tingen over tid når alle bestanddelene har endret seg?'
      }
    },
    explanation: {
      summary: {
        en: 'An ancient puzzle about identity: if every plank of a ship is gradually replaced, is it still the same ship? And if the old planks are reassembled, which ship is the original?',
        no: 'En eldgammel gåte om identitet: hvis hver planke i et skip gradvis byttes ut, er det fortsatt det samme skipet? Og hvis de gamle plankene settes sammen igjen, hvilket skip er originalen?'
      },
      whyInteresting: {
        en: 'It shows that “being the same thing over time” is far slipperier than it seems, and forces us to ask what identity even consists of — the matter, the form, the continuity, or the history. The puzzle applies to objects, organisms, institutions, and ourselves.',
        no: 'Den viser at det å “være den samme tingen over tid” er langt mer glatt enn det virker, og tvinger oss til å spørre hva identitet i det hele tatt består av — materien, formen, kontinuiteten eller historien. Gåten gjelder gjenstander, organismer, institusjoner og oss selv.'
      },
      whyIntuitionFails: {
        en: 'We assume each thing has a clear, persistent identity. But two reasonable criteria — continuity of form/function versus continuity of original material — give opposite answers when the planks are reassembled, and neither feels obviously right. Identity turns out to depend on conventions we never had to make explicit.',
        no: 'Vi antar at hver ting har en klar, vedvarende identitet. Men to rimelige kriterier — kontinuitet i form/funksjon versus kontinuitet i opprinnelig materiale — gir motsatte svar når plankene settes sammen igjen, og ingen av dem føles åpenbart riktig. Identitet viser seg å avhenge av konvensjoner vi aldri trengte å gjøre eksplisitte.'
      },
      example: {
        en: 'Your own body replaces most of its cells over years, yet you consider yourself the same person — favouring continuity over original matter. A restored classic car, a rebuilt cathedral, a company that has changed every employee and product: each revives the same puzzle.',
        no: 'Din egen kropp bytter ut de fleste cellene sine i løpet av år, men likevel anser du deg selv som den samme personen — og foretrekker kontinuitet framfor opprinnelig materie. En restaurert veteranbil, en gjenoppbygd katedral, et selskap som har skiftet ut hver ansatt og hvert produkt: hver av dem vekker den samme gåten til live.'
      },
      realWorld: {
        en: 'It informs questions of personal identity (am I the same person as my childhood self?), legal and corporate continuity, the authenticity of restored artworks and heritage sites, and even teleportation and mind-uploading thought experiments.',
        no: 'Den belyser spørsmål om personlig identitet (er jeg den samme personen som barndomsutgaven av meg selv?), juridisk og selskapsmessig kontinuitet, autentisiteten til restaurerte kunstverk og kulturminner, og til og med tankeeksperimenter om teleportering og opplasting av sinnet.'
      }
    },
    related: ['philosophical-zombie', 'brain-in-a-vat', 'free-will-vs-determinism']
  },
  {
    id: 'veil-of-ignorance',
    module: 'philosophy',
    name: { en: 'Veil of Ignorance', no: 'Uvitenhetens slør' },
    prompts: {
      easy: {
        en: 'Which concept describes designing a fair society as if you didn’t know what position you’d occupy within it?',
        no: 'Hvilket konsept beskriver det å utforme et rettferdig samfunn som om du ikke visste hvilken posisjon du ville ha i det?'
      },
      medium: {
        en: 'Asked to design the rules of a society, you must choose them without knowing whether you’ll be born rich or poor, healthy or sick, gifted or struggling. What rules would you pick? Which thought experiment is this?',
        no: 'Bedt om å utforme reglene for et samfunn, må du velge dem uten å vite om du blir født rik eller fattig, frisk eller syk, begavet eller strevende. Hvilke regler ville du valgt? Hvilket tankeeksperiment er dette?'
      },
      hard: {
        en: 'Why does imagining you don’t know your future place in society push you toward fairer rules?',
        no: 'Hvorfor skyver det å forestille seg at du ikke kjenner din fremtidige plass i samfunnet deg mot mer rettferdige regler?'
      }
    },
    explanation: {
      summary: {
        en: 'John Rawls’s method for deciding what is just: choose the principles for a society as if from behind a veil that hides your own future identity, talents, wealth, and circumstances.',
        no: 'John Rawls’ metode for å avgjøre hva som er rettferdig: velg prinsippene for et samfunn som om det var bak et slør som skjuler din egen fremtidige identitet, dine talenter, din rikdom og dine omstendigheter.'
      },
      whyInteresting: {
        en: 'It turns fairness into a vivid procedure: rules are just if you’d accept them not knowing which life you’ll lead. By stripping away self-interest, it forces impartiality and gives a powerful argument for protecting the worst-off — since you might be them.',
        no: 'Den gjør rettferdighet om til en levende prosedyre: regler er rettferdige hvis du ville godtatt dem uten å vite hvilket liv du kommer til å leve. Ved å fjerne egeninteressen tvinger den fram upartiskhet og gir et kraftig argument for å beskytte de dårligst stilte — siden du kan være dem.'
      },
      whyIntuitionFails: {
        en: 'We judge social rules from where we actually stand, which quietly bends our sense of fairness toward our own advantage. The veil removes that bias: not knowing if you’ll be the billionaire or the beggar, you stop designing rules that merely happen to suit you and start designing rules you could live with in any position.',
        no: 'Vi bedømmer samfunnsregler fra der vi faktisk står, noe som stille bøyer rettferdighetssansen vår mot vår egen fordel. Sløret fjerner den skjevheten: uten å vite om du blir milliardæren eller tiggeren, slutter du å utforme regler som bare tilfeldigvis passer deg, og begynner å utforme regler du kunne leve med i hvilken som helst posisjon.'
      },
      example: {
        en: 'Behind the veil, would you choose a society with great wealth for a few and destitution for many, knowing you might be one of the many? Rawls argues rational choosers would secure basic liberties for all and allow inequalities only when they also improve the lot of the least advantaged.',
        no: 'Bak sløret, ville du valgt et samfunn med stor rikdom for noen få og nød for mange, vel vitende om at du kan være en av de mange? Rawls hevder at rasjonelle velgere ville sikret grunnleggende friheter for alle og bare tillatt ulikheter når de også bedrer kårene til de minst privilegerte.'
      },
      realWorld: {
        en: 'It is a touchstone in debates over taxation, welfare, healthcare, discrimination, and justice between generations, offering a way to reason about fairness that doesn’t depend on your own circumstances.',
        no: 'Den er en prøvestein i debatter om skatt, velferd, helsevesen, diskriminering og rettferdighet mellom generasjoner, og tilbyr en måte å resonnere om rettferdighet på som ikke avhenger av dine egne omstendigheter.'
      }
    },
    related: ['trolley-problem', 'utilitarianism', 'just-world-hypothesis']
  },
  {
    id: 'brain-in-a-vat',
    module: 'philosophy',
    name: { en: 'Brain in a Vat', no: 'Hjerne i et kar' },
    prompts: {
      easy: {
        en: 'Which concept describes the possibility that all your experiences could be artificial signals fed to a disembodied brain?',
        no: 'Hvilket konsept beskriver muligheten for at alle opplevelsene dine kunne være kunstige signaler matet til en kroppsløs hjerne?'
      },
      medium: {
        en: 'Imagine your brain floats in a vat, wired to a computer that feeds it exactly the experiences you’re having now. Everything would seem identical — so how could you ever know it isn’t true? Which thought experiment is this?',
        no: 'Tenk deg at hjernen din flyter i et kar, koblet til en datamaskin som mater den med nøyaktig de opplevelsene du har nå. Alt ville virke identisk — så hvordan kunne du noen gang vite at det ikke er sant? Hvilket tankeeksperiment er dette?'
      },
      hard: {
        en: 'Why can’t you prove from the inside that the external world you experience is real?',
        no: 'Hvorfor kan du ikke bevise fra innsiden at den ytre verdenen du opplever er ekte?'
      }
    },
    explanation: {
      summary: {
        en: 'A modern version of radical skepticism: if a computer fed a disembodied brain precisely the signals it now receives, all experience would be unchanged — so how can you know you aren’t one?',
        no: 'En moderne versjon av radikal skeptisisme: hvis en datamaskin matet en kroppsløs hjerne med nøyaktig de signalene den nå mottar, ville all erfaring vært uendret — så hvordan kan du vite at du ikke er en?'
      },
      whyInteresting: {
        en: 'It sharpens the ancient problem of skepticism (Descartes’s “evil demon”, and the basis of films like The Matrix): our entire picture of reality rests on experiences that could, in principle, be perfectly faked. It asks what, if anything, we can know with certainty.',
        no: 'Det skjerper det eldgamle skeptisismeproblemet (Descartes’ “onde demon”, og grunnlaget for filmer som The Matrix): hele bildet vårt av virkeligheten hviler på opplevelser som i prinsippet kunne vært perfekt forfalsket. Det spør hva, om noe, vi kan vite med sikkerhet.'
      },
      whyIntuitionFails: {
        en: 'We take for granted that our senses connect us to a real external world. But every piece of evidence for that world arrives through experiences that a sufficiently good simulation could reproduce exactly, so no internal observation can distinguish reality from a flawless fake — the certainty we feel isn’t actually justified from the inside.',
        no: 'Vi tar for gitt at sansene våre forbinder oss med en ekte ytre verden. Men hvert bevis for den verdenen kommer gjennom opplevelser som en tilstrekkelig god simulering kunne gjengitt nøyaktig, så ingen indre observasjon kan skille virkelighet fra en feilfri forfalskning — sikkerheten vi føler er egentlig ikke berettiget fra innsiden.'
      },
      example: {
        en: 'Descartes imagined an “evil demon” deceiving him about everything, and concluded the one thing he couldn’t doubt was that he was thinking (“I think, therefore I am”). The vat is the same challenge in neuroscience dress; The Matrix dramatises it; the “simulation hypothesis” extends it to whole worlds.',
        no: 'Descartes forestilte seg en “ond demon” som bedro ham om alt, og konkluderte med at det ene han ikke kunne tvile på var at han tenkte (“jeg tenker, altså er jeg”). Karet er den samme utfordringen i nevrovitenskapelig drakt; The Matrix dramatiserer den; “simuleringshypotesen” utvider den til hele verdener.'
      },
      realWorld: {
        en: 'It underlies debates about the limits of knowledge, the reliability of perception, virtual reality and the simulation hypothesis, and what “reality” and “truth” can mean if they can never be verified from within.',
        no: 'Det ligger bak debatter om kunnskapens grenser, sansingens pålitelighet, virtuell virkelighet og simuleringshypotesen, og hva “virkelighet” og “sannhet” kan bety hvis de aldri kan bekreftes innenfra.'
      }
    },
    related: ['chinese-room', 'experience-machine', 'marys-room']
  },
  {
    id: 'categorical-imperative',
    module: 'philosophy',
    name: { en: 'Categorical Imperative', no: 'Det kategoriske imperativ' },
    prompts: {
      easy: {
        en: 'Which concept describes acting only on principles you could will everyone to follow, always treating people as ends, never merely as means?',
        no: 'Hvilket konsept beskriver det å handle bare etter prinsipper du kunne ville at alle skulle følge, og alltid behandle mennesker som mål, aldri bare som midler?'
      },
      medium: {
        en: 'Tempted to make a promise you intend to break, you ask: what if everyone broke promises freely? Promises would become meaningless, so the rule undermines itself. Which moral principle is this test?',
        no: 'Fristet til å gi et løfte du har til hensikt å bryte, spør du: hva om alle brøt løfter fritt? Løfter ville bli meningsløse, så regelen undergraver seg selv. Hvilket moralsk prinsipp er denne testen?'
      },
      hard: {
        en: 'Why does Kant argue that a moral rule must be one you could consistently will to become a universal law for everyone?',
        no: 'Hvorfor hevder Kant at en moralsk regel må være en du konsekvent kunne ville at skulle bli en universell lov for alle?'
      }
    },
    explanation: {
      summary: {
        en: 'Immanuel Kant’s test for moral action: act only on a principle (maxim) that you could rationally will everyone to follow, and always treat people as ends in themselves, never merely as means.',
        no: 'Immanuel Kants test for moralsk handling: handle bare etter et prinsipp (maksime) som du rasjonelt kunne ville at alle skulle følge, og behandle alltid mennesker som mål i seg selv, aldri bare som midler.'
      },
      whyInteresting: {
        en: 'It grounds morality in reason and consistency rather than consequences or feelings. Right and wrong come from whether a rule could be universalised without contradiction — an approach (deontology) that stands as the great rival to outcome-based ethics like utilitarianism.',
        no: 'Den grunngir moral i fornuft og konsistens snarere enn i konsekvenser eller følelser. Rett og galt følger av hvorvidt en regel kunne universaliseres uten selvmotsigelse — en tilnærming (deontologi) som står som den store rivalen til utfallsbasert etikk som utilitarisme.'
      },
      whyIntuitionFails: {
        en: 'We tend to judge actions by their results or by making an exception for ourselves “just this once”. Kant’s test refuses special pleading: if the principle behind your action couldn’t work as a universal law — if a world where everyone did it would be incoherent — then the action is wrong, however tempting or beneficial.',
        no: 'Vi pleier å bedømme handlinger etter resultatene deres eller ved å gjøre et unntak for oss selv “bare denne ene gangen”. Kants test avviser særbehandling: hvis prinsippet bak handlingen din ikke kunne fungere som en universell lov — hvis en verden der alle gjorde det ville være usammenhengende — da er handlingen gal, uansett hvor fristende eller fordelaktig.'
      },
      example: {
        en: 'A lying promise fails the test: if everyone made promises they intended to break, the practice of promising would collapse, so you can’t coherently will it as universal. Likewise, using a person purely as a tool — deceiving or coercing them for your ends — treats them as a means, not an end, and is forbidden.',
        no: 'Et løgnaktig løfte stryker på testen: hvis alle ga løfter de hadde til hensikt å bryte, ville selve praksisen med å love bryte sammen, så du kan ikke konsekvent ville det som universelt. På samme måte behandler det å bruke en person rent som et verktøy — å lure eller tvinge dem for dine egne formål — dem som et middel, ikke et mål, og er forbudt.'
      },
      realWorld: {
        en: 'It underpins duty-based ethics, human-rights thinking (“people are not to be used”), debates on lying, consent, and exploitation, and serves as the principled counterweight to “the ends justify the means” reasoning.',
        no: 'Den underbygger pliktbasert etikk, menneskerettighetstenkning (“mennesker skal ikke brukes”), debatter om løgn, samtykke og utnyttelse, og fungerer som den prinsipielle motvekten til resonnementet om at “målet helliger midlet”.'
      }
    },
    related: ['trolley-problem', 'utilitarianism', 'veil-of-ignorance']
  },
  {
    id: 'is-ought-problem',
    module: 'philosophy',
    name: { en: 'Is-Ought Problem', no: 'Er-bør-problemet' },
    prompts: {
      easy: {
        en: 'Which concept warns that you can’t logically derive a claim about how things ought to be purely from facts about how things are?',
        no: 'Hvilket konsept advarer om at du ikke logisk kan utlede en påstand om hvordan ting bør være rent fra fakta om hvordan ting er?'
      },
      medium: {
        en: 'Someone argues that because something is “natural”, it must therefore be good and right. A philosopher objects that a fact about nature alone can’t establish a moral duty. Which problem is this?',
        no: 'Noen argumenterer for at fordi noe er “naturlig”, må det derfor være godt og riktig. En filosof innvender at et faktum om naturen alene ikke kan fastsette en moralsk plikt. Hvilket problem er dette?'
      },
      hard: {
        en: 'Why can no set of purely factual statements, by itself, logically prove a moral conclusion about what we should do?',
        no: 'Hvorfor kan ingen mengde rent faktuelle utsagn, alene, logisk bevise en moralsk konklusjon om hva vi bør gjøre?'
      }
    },
    explanation: {
      summary: {
        en: 'David Hume’s observation (“Hume’s guillotine”) that arguments often slide from statements of fact (“is”) to statements of value (“ought”) without justification — yet no purely descriptive premises can, by logic alone, entail a moral conclusion.',
        no: 'David Humes observasjon (“Humes giljotin”) om at argumenter ofte glir fra utsagn om fakta (“er”) til utsagn om verdi (“bør”) uten begrunnelse — men ingen rent beskrivende premisser kan, ved logikk alene, medføre en moralsk konklusjon.'
      },
      whyInteresting: {
        en: 'It draws a sharp line between facts and values, exposing a hidden gap in countless everyday and political arguments. It implies that science and observation alone, however complete, can never by themselves tell us what we ought to do — some value premise must always be smuggled in.',
        no: 'Det trekker en skarp grense mellom fakta og verdier, og blottlegger et skjult gap i utallige dagligdagse og politiske argumenter. Det innebærer at vitenskap og observasjon alene, uansett hvor fullstendig, aldri i seg selv kan fortelle oss hva vi bør gjøre — et verdipremiss må alltid smugles inn.'
      },
      whyIntuitionFails: {
        en: 'We routinely reason “this is how things are, therefore this is how they should be” — that what’s natural is good, or that a trend should continue. Hume’s point is that an “ought” can’t appear in the conclusion if it wasn’t already present in the premises; bridging the gap requires a value judgement we often fail to notice we’ve made.',
        no: 'Vi resonnerer rutinemessig “slik er ting, derfor er det slik de bør være” — at det naturlige er godt, eller at en trend bør fortsette. Humes poeng er at et “bør” ikke kan dukke opp i konklusjonen hvis det ikke allerede var til stede i premissene; å bygge bro over gapet krever en verdivurdering vi ofte ikke merker at vi har gjort.'
      },
      example: {
        en: '“Humans naturally eat meat, so eating meat is morally fine” jumps from a fact to a value. “The strong survive in nature, so society should let the weak fail” does the same. In each case a moral premise is silently assumed. The related “naturalistic fallacy” is a close cousin.',
        no: '“Mennesker spiser naturlig kjøtt, så å spise kjøtt er moralsk greit” hopper fra et faktum til en verdi. “De sterke overlever i naturen, så samfunnet bør la de svake gå under” gjør det samme. I hvert tilfelle antas et moralsk premiss stilltiende. Den beslektede “naturalistiske feilslutningen” er en nær slektning.'
      },
      realWorld: {
        en: 'It is fundamental to ethics, the philosophy of science, and political debate, warning us to spot the hidden value assumptions whenever someone argues from “what is” straight to “what should be”.',
        no: 'Det er grunnleggende for etikk, vitenskapsfilosofi og politisk debatt, og advarer oss om å oppdage de skjulte verdiantakelsene når noen argumenterer fra “det som er” rett til “det som bør være”.'
      }
    },
    related: ['categorical-imperative', 'utilitarianism', 'free-will-vs-determinism']
  },
  {
    id: 'philosophical-zombie',
    module: 'philosophy',
    name: { en: 'Philosophical Zombie', no: 'Filosofisk zombie' },
    prompts: {
      easy: {
        en: 'Which concept describes a being that behaves exactly like a conscious person but has no inner experience at all?',
        no: 'Hvilket konsept beskriver et vesen som oppfører seg nøyaktig som en bevisst person, men som ikke har noen indre opplevelse i det hele tatt?'
      },
      medium: {
        en: 'Imagine a being physically identical to you, acting exactly as you do — flinching at pain, saying “that hurts” — but with no inner feeling whatsoever, all dark inside. Could such a being exist? Which thought experiment is this?',
        no: 'Tenk deg et vesen fysisk identisk med deg, som handler nøyaktig som deg — kniper sammen ved smerte, sier “det gjør vondt” — men uten noen indre følelse overhodet, helt mørkt inni. Kunne et slikt vesen eksistere? Hvilket tankeeksperiment er dette?'
      },
      hard: {
        en: 'Why does the very conceivability of a being that acts conscious but feels nothing pose a problem for purely physical explanations of the mind?',
        no: 'Hvorfor utgjør selve tenkbarheten av et vesen som handler bevisst, men ikke føler noe, et problem for rent fysiske forklaringer av sinnet?'
      }
    },
    explanation: {
      summary: {
        en: 'A philosophical zombie (“p-zombie”) is a hypothetical being physically and behaviourally identical to a conscious person but with no subjective inner experience. If such a being is even conceivable, it suggests consciousness may not be fully explained by physical facts alone.',
        no: 'En filosofisk zombie (“p-zombie”) er et hypotetisk vesen fysisk og atferdsmessig identisk med en bevisst person, men uten noen subjektiv indre opplevelse. Hvis et slikt vesen i det hele tatt er tenkbart, antyder det at bevissthet kanskje ikke fullt ut kan forklares av fysiske fakta alene.'
      },
      whyInteresting: {
        en: 'It targets the “hard problem of consciousness”: why is there any inner experience — the redness of red, the feel of pain — at all, rather than just information processing in the dark? The zombie makes vivid the gap between explaining behaviour and explaining felt experience.',
        no: 'Den retter seg mot “det vanskelige bevissthetsproblemet”: hvorfor finnes det noen indre opplevelse i det hele tatt — rødheten i rødt, følelsen av smerte — snarere enn bare informasjonsbehandling i mørket? Zombien gjør gapet mellom å forklare atferd og å forklare følt opplevelse levende.'
      },
      whyIntuitionFails: {
        en: 'We assume that fully explaining the brain’s physical workings would automatically explain consciousness. The zombie suggests otherwise: if we can coherently imagine all the same physical processes with no accompanying experience, then experience seems to be an extra fact that physical description leaves out. (Critics argue p-zombies aren’t truly conceivable.)',
        no: 'Vi antar at en fullstendig forklaring av hjernens fysiske virkemåte automatisk ville forklare bevissthet. Zombien antyder noe annet: hvis vi konsistent kan forestille oss alle de samme fysiske prosessene uten noen ledsagende opplevelse, så ser opplevelse ut til å være et ekstra faktum som fysisk beskrivelse utelater. (Kritikere hevder at p-zombier ikke virkelig er tenkbare.)'
      },
      example: {
        en: 'Picture your exact physical duplicate, atom for atom, who screams and pulls away when burned and reports being in pain — yet there is “nothing it is like” to be them; no pain is actually felt. If that scenario is genuinely conceivable, then subjective experience isn’t captured by the physical story alone.',
        no: 'Se for deg din nøyaktige fysiske kopi, atom for atom, som skriker og trekker seg unna når den brennes og melder at den har vondt — men det er “ingenting det er som” å være den; ingen smerte føles faktisk. Hvis det scenarioet virkelig er tenkbart, så fanges ikke subjektiv opplevelse av den fysiske fortellingen alene.'
      },
      realWorld: {
        en: 'It frames the deepest debates in philosophy of mind and the science of consciousness, and bears on whether an AI that perfectly mimics feelings could ever actually have them.',
        no: 'Den rammer inn de dypeste debattene i sinnsfilosofi og bevissthetsvitenskap, og berører hvorvidt en KI som perfekt etterligner følelser noen gang faktisk kunne ha dem.'
      }
    },
    related: ['chinese-room', 'marys-room', 'brain-in-a-vat']
  },
  {
    id: 'allegory-of-the-cave',
    module: 'philosophy',
    name: { en: 'Allegory of the Cave', no: 'Hulelignelsen' },
    prompts: {
      easy: {
        en: 'Which concept describes prisoners who mistake shadows on a wall for reality, never having seen the world that casts them?',
        no: 'Hvilket konsept beskriver fanger som forveksler skygger på en vegg med virkeligheten, og som aldri har sett verden som kaster dem?'
      },
      medium: {
        en: 'People are chained in a cave their whole lives, seeing only shadows cast on a wall, which they take to be the whole of reality. One escapes, sees the sunlit world, and returns — only to be disbelieved and mocked. Which allegory is this?',
        no: 'Mennesker er lenket i en hule hele livet, og ser bare skygger kastet på en vegg, som de tar for å være hele virkeligheten. Én slipper unna, ser den solfylte verdenen, og vender tilbake — bare for å bli mistrodd og hånet. Hvilken lignelse er dette?'
      },
      hard: {
        en: 'Why might those who have only ever known illusions react with hostility to someone who has glimpsed a deeper reality?',
        no: 'Hvorfor kan de som bare har kjent illusjoner, reagere med fiendtlighet mot noen som har skimtet en dypere virkelighet?'
      }
    },
    explanation: {
      summary: {
        en: 'Plato’s allegory depicts prisoners who, chained facing a wall, take flickering shadows for reality. One is freed, discovers the real world outside, and returns to enlighten the others — who reject him. It dramatises the ascent from illusion to genuine knowledge.',
        no: 'Platons lignelse skildrer fanger som, lenket mot en vegg, tar flimrende skygger for virkeligheten. Én blir satt fri, oppdager den virkelige verdenen utenfor, og vender tilbake for å opplyse de andre — som avviser ham. Den dramatiserer oppstigningen fra illusjon til ekte kunnskap.'
      },
      whyInteresting: {
        en: 'It is a profound metaphor for education, enlightenment, and the difference between appearance and reality. It suggests that what most people accept as obvious truth may be mere shadow, and that seeing past it is disorienting, lonely, and often unwelcome.',
        no: 'Den er en dyptpløyende metafor for utdanning, opplysning og forskjellen mellom tilsynekomst og virkelighet. Den antyder at det de fleste godtar som åpenbar sannhet kan være ren skygge, og at det å se forbi den er forvirrende, ensomt og ofte uvelkomment.'
      },
      whyIntuitionFails: {
        en: 'We assume that what our senses and our culture present to us is simply reality. Plato’s point is that we may be the prisoners — mistaking shadows (opinions, appearances, conventions) for the truth — and that genuine reality (for Plato, the eternal “Forms”) is reached only through a difficult, painful turn of the mind that most resist.',
        no: 'Vi antar at det sansene og kulturen vår viser oss, rett og slett er virkeligheten. Platons poeng er at vi kanskje er fangene — som forveksler skygger (meninger, tilsynekomster, konvensjoner) med sannheten — og at den ekte virkeligheten (for Platon de evige “idéene”) bare nås gjennom en vanskelig, smertefull vending av sinnet som de fleste motsetter seg.'
      },
      example: {
        en: 'The freed prisoner is first blinded by the sun, then gradually comes to see the real objects whose shadows he’d always watched. Returning to the cave, he stumbles in the dark and is ridiculed; the prisoners prefer their familiar shadows and resent the one who challenges them.',
        no: 'Den frigjorte fangen blendes først av solen, og kommer så gradvis til å se de virkelige tingene hvis skygger han alltid hadde sett på. Når han vender tilbake til hulen, snubler han i mørket og blir latterliggjort; fangene foretrekker de kjente skyggene sine og misliker den som utfordrer dem.'
      },
      realWorld: {
        en: 'It echoes through ideas about education as “turning the soul”, propaganda and media as shadow-play, the discomfort of confronting uncomfortable truths, and modern parallels like the simulation hypothesis and The Matrix.',
        no: 'Den gir gjenklang i idéer om utdanning som å “vende sjelen”, propaganda og medier som skyggespill, ubehaget ved å konfrontere ubehagelige sannheter, og moderne paralleller som simuleringshypotesen og The Matrix.'
      }
    },
    related: ['brain-in-a-vat', 'experience-machine', 'free-will-vs-determinism']
  },
  {
    id: 'problem-of-evil',
    module: 'philosophy',
    name: { en: 'Problem of Evil', no: 'Det ondes problem' },
    prompts: {
      easy: {
        en: 'Which concept asks how an all-powerful, all-good God could allow so much suffering to exist?',
        no: 'Hvilket konsept spør hvordan en allmektig, fullkomment god Gud kunne tillate at så mye lidelse finnes?'
      },
      medium: {
        en: 'If a deity is perfectly powerful, perfectly knowing, and perfectly good, why do earthquakes, diseases, and cruelty fall on the innocent? The combination seems contradictory. Which problem is this?',
        no: 'Hvis en guddom er fullkomment mektig, fullkomment vitende og fullkomment god, hvorfor rammer jordskjelv, sykdommer og grusomhet de uskyldige? Kombinasjonen virker selvmotsigende. Hvilket problem er dette?'
      },
      hard: {
        en: 'Why is the existence of pointless suffering considered the strongest logical challenge to belief in an all-powerful, all-loving God?',
        no: 'Hvorfor regnes eksistensen av meningsløs lidelse som den sterkeste logiske utfordringen til troen på en allmektig, altelskende Gud?'
      }
    },
    explanation: {
      summary: {
        en: 'The problem of evil asks how to reconcile the existence of suffering with belief in a God who is at once all-powerful, all-knowing, and perfectly good — for such a being would seem able and willing to prevent it.',
        no: 'Det ondes problem spør hvordan man kan forene eksistensen av lidelse med troen på en Gud som på én gang er allmektig, allvitende og fullkomment god — for et slikt vesen ville tilsynelatende både kunne og ville hindre den.'
      },
      whyInteresting: {
        en: 'It is the oldest and most forceful argument against traditional theism, and the engine behind centuries of theological response (“theodicy”). Whatever one concludes, it sharply frames the relationship between God, freedom, and suffering.',
        no: 'Det er det eldste og mest slagkraftige argumentet mot tradisjonell teisme, og motoren bak århundrer med teologisk svar (“teodisé”). Uansett hva man konkluderer med, rammer det skarpt inn forholdet mellom Gud, frihet og lidelse.'
      },
      whyIntuitionFails: {
        en: 'Each divine attribute seems benign on its own, so the contradiction isn’t obvious. But put together — a being able to prevent all evil, knowing of it, and wanting only good — they seem to entail a world without gratuitous suffering. The visible reality of such suffering is what makes the trio so hard to hold together.',
        no: 'Hver guddommelig egenskap virker harmløs alene, så motsigelsen er ikke åpenbar. Men satt sammen — et vesen som kan hindre alt ondt, vet om det, og bare vil det gode — ser de ut til å medføre en verden uten unødvendig lidelse. Den synlige virkeligheten av slik lidelse er det som gjør de tre så vanskelige å holde sammen.'
      },
      example: {
        en: 'An all-good God would want to prevent a child’s suffering; an all-powerful one could; an all-knowing one would be aware of it. Yet it happens. Proposed resolutions include free will (evil is the price of genuine freedom), soul-making (suffering builds virtue), or denying one of the attributes — each with its own difficulties, especially for “natural” evils like disease.',
        no: 'En fullkomment god Gud ville ønske å hindre et barns lidelse; en allmektig kunne; en allvitende ville være klar over den. Likevel skjer det. Foreslåtte løsninger inkluderer fri vilje (det onde er prisen for ekte frihet), sjelsdannelse (lidelse bygger dyd), eller å benekte én av egenskapene — hver med sine egne vansker, særlig for “naturlig” ondskap som sykdom.'
      },
      realWorld: {
        en: 'It is central to the philosophy of religion and to personal struggles with faith and grief, and its structure — reconciling a benevolent design with visible suffering — recurs in secular debates about whether the universe is indifferent.',
        no: 'Det er sentralt i religionsfilosofien og i personlige kamper med tro og sorg, og strukturen — å forene en velvillig plan med synlig lidelse — gjentar seg i sekulære debatter om hvorvidt universet er likegyldig.'
      }
    },
    related: ['free-will-vs-determinism', 'absurdism', 'just-world-hypothesis']
  },
  {
    id: 'free-will-vs-determinism',
    module: 'philosophy',
    name: { en: 'Free Will vs. Determinism', no: 'Fri vilje og determinisme' },
    prompts: {
      easy: {
        en: 'Which concept describes the tension between the feeling that we choose freely and the idea that everything is caused by what came before?',
        no: 'Hvilket konsept beskriver spenningen mellom følelsen av at vi velger fritt og idéen om at alt er forårsaket av det som kom før?'
      },
      medium: {
        en: 'If every event, including every thought in your brain, is the inevitable result of prior causes obeying physical laws, in what sense did you “freely” choose your breakfast? Which problem is this?',
        no: 'Hvis hver hendelse, inkludert hver tanke i hjernen din, er det uunngåelige resultatet av tidligere årsaker som adlyder fysiske lover, i hvilken forstand valgte du “fritt” frokosten din? Hvilket problem er dette?'
      },
      hard: {
        en: 'Why is it so hard to reconcile moral responsibility with the possibility that all our actions are fully determined by prior causes?',
        no: 'Hvorfor er det så vanskelig å forene moralsk ansvar med muligheten for at alle handlingene våre er fullstendig bestemt av tidligere årsaker?'
      }
    },
    explanation: {
      summary: {
        en: 'The free-will problem asks whether our choices are genuinely free or the inevitable results of prior causes (determinism). If everything we do is fixed by the past plus the laws of nature, it’s unclear how we can be truly free or morally responsible.',
        no: 'Problemet om fri vilje spør om valgene våre er virkelig frie eller de uunngåelige resultatene av tidligere årsaker (determinisme). Hvis alt vi gjør er fastlagt av fortiden pluss naturlovene, er det uklart hvordan vi kan være virkelig frie eller moralsk ansvarlige.'
      },
      whyInteresting: {
        en: 'It sits at the crossroads of physics, neuroscience, ethics, and law. The answer bears directly on whether praise, blame, and punishment make sense — and on what, if anything, our powerful sense of “could have done otherwise” really amounts to.',
        no: 'Det ligger i krysningspunktet mellom fysikk, nevrovitenskap, etikk og juss. Svaret berører direkte om ros, klander og straff gir mening — og hva, om noe, vår sterke følelse av å “kunne ha handlet annerledes” egentlig innebærer.'
      },
      whyIntuitionFails: {
        en: 'We feel, undeniably, that we author our choices and could have acted otherwise. Yet if our decisions are produced by brain states that follow from earlier states and physical law (and randomness doesn’t help — chance isn’t control), it’s unclear where free authorship enters. Both the experience of freedom and the causal picture feel compelling, and they seem to clash.',
        no: 'Vi føler, ubestridelig, at vi er opphav til valgene våre og kunne ha handlet annerledes. Men hvis beslutningene våre produseres av hjernetilstander som følger av tidligere tilstander og fysisk lov (og tilfeldighet hjelper ikke — flaks er ikke kontroll), er det uklart hvor fritt opphav kommer inn. Både opplevelsen av frihet og det årsaksmessige bildet føles overbevisende, og de ser ut til å kollidere.'
      },
      example: {
        en: 'Determinism: rewind the universe to the exact moment of your choice and — same past, same laws — you’d choose identically; in what sense was it free? Compatibilism replies that freedom just means acting from your own desires without coercion, which is consistent with determinism. Libertarian free will insists on a genuinely open future; hard determinism denies free will outright.',
        no: 'Determinisme: spol universet tilbake til det nøyaktige øyeblikket for valget ditt og — samme fortid, samme lover — ville du valgt identisk; i hvilken forstand var det fritt? Kompatibilismen svarer at frihet bare betyr å handle ut fra egne ønsker uten tvang, noe som er forenlig med determinisme. Libertariansk fri vilje insisterer på en virkelig åpen fremtid; hard determinisme benekter fri vilje fullstendig.'
      },
      realWorld: {
        en: 'It underlies the justification of punishment versus rehabilitation in criminal justice, debates over moral responsibility and addiction, and how we interpret neuroscience experiments suggesting the brain “decides” before we’re aware of choosing.',
        no: 'Det ligger bak begrunnelsen for straff kontra rehabilitering i strafferetten, debatter om moralsk ansvar og avhengighet, og hvordan vi tolker nevrovitenskapelige eksperimenter som antyder at hjernen “bestemmer” før vi er klar over at vi velger.'
      }
    },
    related: ['is-ought-problem', 'problem-of-evil', 'ship-of-theseus']
  },
  {
    id: 'utilitarianism',
    module: 'philosophy',
    name: { en: 'Utilitarianism', no: 'Utilitarisme' },
    prompts: {
      easy: {
        en: 'Which concept describes judging actions as right when they produce the greatest happiness for the greatest number?',
        no: 'Hvilket konsept beskriver det å bedømme handlinger som riktige når de gir størst lykke for flest mulig?'
      },
      medium: {
        en: 'Faced with a choice, a decision-maker tallies the total well-being each option would create and picks the one that maximises overall happiness, whoever it falls upon. Which ethical theory is this?',
        no: 'Stilt overfor et valg summerer en beslutningstaker den totale velferden hvert alternativ ville skape, og velger det som maksimerer den samlede lykken, uansett hvem den tilfaller. Hvilken etisk teori er dette?'
      },
      hard: {
        en: 'Why can a theory that maximises total happiness sometimes seem to justify sacrificing an innocent individual for the greater good?',
        no: 'Hvorfor kan en teori som maksimerer den totale lykken noen ganger se ut til å rettferdiggjøre å ofre et uskyldig individ for det felles beste?'
      }
    },
    explanation: {
      summary: {
        en: 'Utilitarianism (Bentham, Mill) holds that the morally right action is the one that produces the greatest overall well-being, counting everyone’s interests equally and judging acts purely by their consequences.',
        no: 'Utilitarisme (Bentham, Mill) hevder at den moralsk riktige handlingen er den som gir størst samlet velferd, der alles interesser teller likt og handlinger bedømmes utelukkende etter konsekvensene sine.'
      },
      whyInteresting: {
        en: 'It offers a clear, impartial, and quantifiable approach to ethics: add up the well-being, and choose the most. Its simplicity and even-handedness are powerful — but the same logic produces troubling cases that have driven moral philosophy for two centuries.',
        no: 'Den tilbyr en klar, upartisk og målbar tilnærming til etikk: legg sammen velferden, og velg det meste. Enkelheten og likebehandlingen er kraftfulle — men den samme logikken gir foruroligende tilfeller som har drevet moralfilosofien i to århundrer.'
      },
      whyIntuitionFails: {
        en: 'Maximising total happiness sounds unobjectionable until it collides with individual rights. Because only the aggregate matters, the theory can in principle endorse sacrificing one innocent person to benefit many — which clashes hard with our intuition that some things may not be done to a person no matter the payoff.',
        no: 'Å maksimere den totale lykken høres uangripelig ut helt til det kolliderer med individuelle rettigheter. Fordi bare summen teller, kan teorien i prinsippet godkjenne å ofre én uskyldig person til fordel for mange — noe som støter hardt mot intuisjonen vår om at noe ikke kan gjøres mot en person uansett gevinst.'
      },
      example: {
        en: 'It cleanly says to divert the trolley to save five at the cost of one. But pushed further — would it be right to secretly harvest one healthy patient’s organs to save five dying ones? — it seems to demand a monstrous act, exposing the tension between maximising good outcomes and respecting individual rights.',
        no: 'Den sier rent ut at man skal lede trikken for å redde fem på bekostning av én. Men presset videre — ville det vært riktig i hemmelighet å høste organene til én frisk pasient for å redde fem døende? — ser den ut til å kreve en monstrøs handling, og blottlegger spenningen mellom å maksimere gode utfall og å respektere individuelle rettigheter.'
      },
      realWorld: {
        en: 'It shapes cost-benefit analysis, public-health and policy decisions (allocating scarce resources for the most benefit), animal-welfare arguments, and the effective-altruism movement, and stands as the chief rival to duty- and rights-based ethics.',
        no: 'Den former kost-nytte-analyse, folkehelse- og politikkbeslutninger (å fordele knappe ressurser for størst nytte), dyrevelferdsargumenter og effektiv altruisme-bevegelsen, og står som hovedrivalen til plikt- og rettighetsbasert etikk.'
      }
    },
    related: ['trolley-problem', 'categorical-imperative', 'veil-of-ignorance']
  },
  {
    id: 'marys-room',
    module: 'philosophy',
    name: { en: 'Mary’s Room', no: 'Marys rom' },
    prompts: {
      easy: {
        en: 'Which concept describes a scientist who knows every physical fact about colour but has never actually seen it?',
        no: 'Hvilket konsept beskriver en vitenskapskvinne som kjenner hvert fysiske faktum om farger, men aldri faktisk har sett dem?'
      },
      medium: {
        en: 'Mary knows every physical fact about colour vision but has lived her whole life in a black-and-white room. When she finally steps outside and sees red for the first time, does she learn something new? Which thought experiment is this?',
        no: 'Mary kjenner hvert fysiske faktum om fargesyn, men har levd hele livet i et svart-hvitt-rom. Når hun endelig går ut og ser rødt for første gang, lærer hun da noe nytt? Hvilket tankeeksperiment er dette?'
      },
      hard: {
        en: 'Why might someone who knows all the physical facts about colour still learn something the moment they first experience it?',
        no: 'Hvorfor kan noen som kjenner alle de fysiske faktaene om farger, likevel lære noe i det øyeblikket de først opplever dem?'
      }
    },
    explanation: {
      summary: {
        en: 'Frank Jackson’s “knowledge argument” imagines a scientist who knows every physical fact about colour vision but has only ever seen black and white. When she first sees red, she seems to learn something new — what red looks like — suggesting subjective experience is a fact beyond all the physical facts.',
        no: 'Frank Jacksons “kunnskapsargument” forestiller seg en vitenskapskvinne som kjenner hvert fysiske faktum om fargesyn, men bare noen gang har sett svart og hvitt. Når hun først ser rødt, ser hun ut til å lære noe nytt — hvordan rødt ser ut — noe som antyder at subjektiv opplevelse er et faktum utover alle de fysiske faktaene.'
      },
      whyInteresting: {
        en: 'Like the philosophical zombie, it challenges physicalism — the view that everything, including the mind, is fully captured by physical facts. If Mary gains new knowledge on seeing colour despite already knowing all the physics, then experience (“qualia”) seems to be something physical description leaves out.',
        no: 'Som den filosofiske zombien utfordrer det fysikalismen — synet om at alt, inkludert sinnet, fullt ut fanges av fysiske fakta. Hvis Mary får ny kunnskap når hun ser farge til tross for at hun allerede kjenner all fysikken, så ser opplevelse (“qualia”) ut til å være noe fysisk beskrivelse utelater.'
      },
      whyIntuitionFails: {
        en: 'We assume that knowing all the scientific facts about colour would be knowing everything about colour. But there seems to be a further thing — what it is actually like to see red — that no amount of physical information conveys, and that Mary grasps only by undergoing the experience. (Critics argue she gains a new ability, not a new fact.)',
        no: 'Vi antar at det å kjenne alle de vitenskapelige faktaene om farger ville være å vite alt om farger. Men det ser ut til å være en ting til — hvordan det faktisk er å se rødt — som ingen mengde fysisk informasjon formidler, og som Mary bare fatter ved selv å gjennomgå opplevelsen. (Kritikere hevder hun får en ny evne, ikke et nytt faktum.)'
      },
      example: {
        en: 'Mary can recite every wavelength, every neuron, every word ever written about red. Yet the moment she leaves her grey room and sees a red rose, there’s a natural sense in which she finally knows what red looks like — knowledge that all her prior physical learning didn’t provide.',
        no: 'Mary kan ramse opp hver bølgelengde, hvert nevron, hvert ord som noen gang er skrevet om rødt. Likevel, i det øyeblikket hun forlater det grå rommet sitt og ser en rød rose, finnes det en naturlig forstand der hun endelig vet hvordan rødt ser ut — kunnskap som all den tidligere fysiske lærdommen hennes ikke ga.'
      },
      realWorld: {
        en: 'It is a central argument in the philosophy of mind about consciousness and qualia, and bears on whether a purely computational system could ever have genuine experiences, or only information about them.',
        no: 'Det er et sentralt argument i sinnsfilosofien om bevissthet og qualia, og berører om et rent beregningsmessig system noen gang kunne ha ekte opplevelser, eller bare informasjon om dem.'
      }
    },
    related: ['chinese-room', 'philosophical-zombie', 'brain-in-a-vat']
  },
  {
    id: 'absurdism',
    module: 'philosophy',
    name: { en: 'Absurdism', no: 'Absurdisme' },
    prompts: {
      easy: {
        en: 'Which concept describes the clash between our search for meaning and a universe that offers none?',
        no: 'Hvilket konsept beskriver sammenstøtet mellom vår søken etter mening og et univers som ikke tilbyr noen?'
      },
      medium: {
        en: 'A person yearns for life to have ultimate meaning, yet finds a silent, indifferent universe that provides no answer. A philosopher says we should neither deny this conflict nor despair, but live fully in spite of it. Which idea is this?',
        no: 'En person lengter etter at livet skal ha en endelig mening, men finner et stumt, likegyldig univers som ikke gir noe svar. En filosof sier at vi verken bør benekte denne konflikten eller fortvile, men leve fullt ut på tross av den. Hvilken idé er dette?'
      },
      hard: {
        en: 'Why does Camus argue that confronting a meaningless universe should lead not to suicide or false hope, but to rebellion and a fuller life?',
        no: 'Hvorfor hevder Camus at det å konfrontere et meningsløst univers ikke bør føre til selvmord eller falskt håp, men til opprør og et fyldigere liv?'
      }
    },
    explanation: {
      summary: {
        en: 'Associated with Albert Camus, absurdism holds that humans naturally crave meaning and clarity, but the universe offers none — and that this collision is “the absurd”. The challenge is to live authentically in the face of it, without resorting to denial or despair.',
        no: 'Forbundet med Albert Camus hevder absurdismen at mennesker naturlig hungrer etter mening og klarhet, men at universet ikke tilbyr noen — og at dette sammenstøtet er “det absurde”. Utfordringen er å leve autentisk i møte med det, uten å ty til fornektelse eller fortvilelse.'
      },
      whyInteresting: {
        en: 'It confronts the question of life’s meaning head-on and gives a distinctive answer: not that life has inherent meaning, nor that we should give up, but that we can revolt against meaninglessness by embracing life passionately anyway. It turns a bleak premise into a call for freedom and lucid joy.',
        no: 'Den konfronterer spørsmålet om livets mening direkte og gir et særegent svar: ikke at livet har en iboende mening, og heller ikke at vi bør gi opp, men at vi kan gjøre opprør mot meningsløsheten ved å omfavne livet lidenskapelig likevel. Den gjør en dyster forutsetning om til en oppfordring til frihet og klarsynt glede.'
      },
      whyIntuitionFails: {
        en: 'Faced with apparent meaninglessness, intuition pulls toward two escapes: either despair (life is pointless, so why go on?) or a comforting leap to religious or ideological meaning. Camus rejects both as evasions of the absurd. He argues we should hold the tension open — fully aware there’s no cosmic meaning, yet choosing to live richly and create our own.',
        no: 'Stilt overfor tilsynelatende meningsløshet trekker intuisjonen mot to fluktveier: enten fortvilelse (livet er meningsløst, så hvorfor fortsette?) eller et trøstende sprang til religiøs eller ideologisk mening. Camus avviser begge som unnvikelser fra det absurde. Han hevder vi bør holde spenningen åpen — fullt klar over at det ikke finnes noen kosmisk mening, men likevel velge å leve rikt og skape vår egen.'
      },
      example: {
        en: 'Camus invokes the myth of Sisyphus, condemned to roll a boulder uphill forever only to watch it roll back. Rather than a figure of pure despair, Camus imagines him conscious and defiant: “one must imagine Sisyphus happy”, finding meaning in the struggle itself rather than in any final goal.',
        no: 'Camus påkaller myten om Sisyfos, dømt til å rulle en kampestein oppoverbakke i evighet bare for å se den rulle ned igjen. I stedet for en skikkelse av ren fortvilelse forestiller Camus seg ham bevisst og trassig: “man må forestille seg Sisyfos lykkelig”, og finne mening i selve kampen snarere enn i noe endelig mål.'
      },
      realWorld: {
        en: 'It speaks to modern questions of purpose in a secular age, to coping with grief and mortality, and to finding self-made meaning and resilience without relying on guarantees from the universe.',
        no: 'Den taler til moderne spørsmål om mening i en sekulær tid, til det å takle sorg og dødelighet, og til å finne selvskapt mening og motstandskraft uten å stole på garantier fra universet.'
      }
    },
    related: ['experience-machine', 'problem-of-evil', 'free-will-vs-determinism']
  }
];
