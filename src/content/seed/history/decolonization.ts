import type { SeedSubcategory } from '../types';

export const decolonization: SeedSubcategory = {
  slug: 'decolonization',
  name: { en: 'Decolonization', no: 'Decolonization' },
  modules: [
    {
      slug: 'end-of-european-empires',
      name: { en: 'End of European empires', no: 'End of European empires' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'What does "decolonization" mean?',
            no: 'Hva betyr «avkolonisering»?'
          },
          answers: [
            { en: 'Colonies gaining independence from imperial powers', no: 'At kolonier oppnår uavhengighet fra imperiemakter' },
            { en: 'Empires conquering new lands', no: 'At imperier erobrer nye landområder' },
            { en: 'Building new colonies', no: 'Å bygge nye kolonier' },
            { en: 'Moving capital cities', no: 'Å flytte hovedsteder' }
          ],
          correct: 0,
          explanation: {
            en: 'Decolonization is the process by which colonies gained independence from European empires.',
            no: 'Avkolonisering er prosessen der kolonier oppnådde uavhengighet fra europeiske imperier.'
          },
          tags: ['definition', 'decolonization']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'After which war did decolonization accelerate dramatically?',
            no: 'Etter hvilken krig akselererte avkoloniseringen dramatisk?'
          },
          answers: [
            { en: 'World War II', no: 'Andre verdenskrig' },
            { en: 'The Napoleonic Wars', no: 'Napoleonskrigene' },
            { en: 'The Thirty Years’ War', no: 'Trettiårskrigen' },
            { en: 'The Crimean War', no: 'Krimkrigen' }
          ],
          correct: 0,
          explanation: {
            en: 'Most rapid decolonization occurred after World War II, especially from the 1940s to the 1960s.',
            no: 'Den raskeste avkoloniseringen skjedde etter andre verdenskrig, særlig fra 1940- til 1960-tallet.'
          },
          tags: ['world-war-ii', 'timeline']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which country gained independence from Britain in 1947?',
            no: 'Hvilket land ble uavhengig fra Storbritannia i 1947?'
          },
          answers: [
            { en: 'India', no: 'India' },
            { en: 'Brazil', no: 'Brasil' },
            { en: 'Japan', no: 'Japan' },
            { en: 'Canada', no: 'Canada' }
          ],
          correct: 0,
          explanation: {
            en: 'India gained independence from British rule in 1947.',
            no: 'India ble uavhengig fra britisk styre i 1947.'
          },
          tags: ['india', '1947']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who led a famous nonviolent movement for India’s independence?',
            no: 'Hvem ledet en berømt ikkevoldelig bevegelse for Indias uavhengighet?'
          },
          answers: [
            { en: 'Mahatma Gandhi', no: 'Mahatma Gandhi' },
            { en: 'Winston Churchill', no: 'Winston Churchill' },
            { en: 'Joseph Stalin', no: 'Josef Stalin' },
            { en: 'Charles de Gaulle', no: 'Charles de Gaulle' }
          ],
          correct: 0,
          explanation: {
            en: 'Mahatma Gandhi led the nonviolent independence movement against British rule in India.',
            no: 'Mahatma Gandhi ledet den ikkevoldelige uavhengighetsbevegelsen mot britisk styre i India.'
          },
          tags: ['gandhi', 'people']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which European country held the largest colonial empire in the 1800s?',
            no: 'Hvilket europeisk land hadde det største kolonirikets på 1800-tallet?'
          },
          answers: [
            { en: 'Britain', no: 'Storbritannia' },
            { en: 'Norway', no: 'Norge' },
            { en: 'Sweden', no: 'Sverige' },
            { en: 'Switzerland', no: 'Sveits' }
          ],
          correct: 0,
          explanation: {
            en: 'Britain held the largest empire, famously described as "the empire on which the sun never sets."',
            no: 'Storbritannia hadde det største imperiet, kjent som «riket der solen aldri går ned».'
          },
          tags: ['britain', 'empires']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'On which continent did most decolonization occur in the 1950s and 1960s?',
            no: 'På hvilket kontinent skjedde mesteparten av avkoloniseringen på 1950- og 1960-tallet?'
          },
          answers: [
            { en: 'Africa', no: 'Afrika' },
            { en: 'Antarctica', no: 'Antarktis' },
            { en: 'North America', no: 'Nord-Amerika' },
            { en: 'Australia', no: 'Australia' }
          ],
          correct: 0,
          explanation: {
            en: 'Many African nations gained independence during the 1950s and 1960s.',
            no: 'Mange afrikanske nasjoner ble uavhengige i løpet av 1950- og 1960-tallet.'
          },
          tags: ['africa', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What name is given to 1960, when many African colonies became independent?',
            no: 'Hvilket navn er gitt til 1960, da mange afrikanske kolonier ble uavhengige?'
          },
          answers: [
            { en: 'The Year of Africa', no: 'Afrikas år' },
            { en: 'The Year of Empire', no: 'Imperiets år' },
            { en: 'The Year of Europe', no: 'Europas år' },
            { en: 'The Year of Trade', no: 'Handelens år' }
          ],
          correct: 0,
          explanation: {
            en: '1960 is called the "Year of Africa" because around 17 African countries gained independence.',
            no: '1960 kalles «Afrikas år» fordi rundt 17 afrikanske land ble uavhengige.'
          },
          tags: ['year-of-africa', '1960']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which country ruled Indochina (Vietnam, Laos, Cambodia) before decolonization?',
            no: 'Hvilket land styrte Indokina (Vietnam, Laos, Kambodsja) før avkoloniseringen?'
          },
          answers: [
            { en: 'France', no: 'Frankrike' },
            { en: 'Portugal', no: 'Portugal' },
            { en: 'Spain', no: 'Spania' },
            { en: 'Germany', no: 'Tyskland' }
          ],
          correct: 0,
          explanation: {
            en: 'France ruled French Indochina until decolonization after World War II.',
            no: 'Frankrike styrte Fransk Indokina fram til avkoloniseringen etter andre verdenskrig.'
          },
          tags: ['france', 'indochina']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which international organization promoted self-determination after World War II?',
            no: 'Hvilken internasjonal organisasjon fremmet selvbestemmelse etter andre verdenskrig?'
          },
          answers: [
            { en: 'The United Nations', no: 'De forente nasjoner' },
            { en: 'NATO', no: 'NATO' },
            { en: 'The Warsaw Pact', no: 'Warszawapakten' },
            { en: 'OPEC', no: 'OPEC' }
          ],
          correct: 0,
          explanation: {
            en: 'The United Nations promoted the principle of self-determination for colonized peoples.',
            no: 'De forente nasjoner fremmet prinsippet om selvbestemmelse for koloniserte folk.'
          },
          tags: ['united-nations', 'self-determination']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is an "empire"?',
            no: 'Hva er et «imperium»?'
          },
          answers: [
            { en: 'A group of territories ruled by a single dominant power', no: 'En gruppe territorier styrt av én dominerende makt' },
            { en: 'A small independent town', no: 'En liten uavhengig by' },
            { en: 'A type of trade union', no: 'En type fagforening' },
            { en: 'A religious festival', no: 'En religiøs høytid' }
          ],
          correct: 0,
          explanation: {
            en: 'An empire is a collection of states or territories controlled by one central power.',
            no: 'Et imperium er en samling stater eller territorier kontrollert av én sentral makt.'
          },
          tags: ['empire', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which country gained independence from France in 1962 after a long war?',
            no: 'Hvilket land ble uavhengig fra Frankrike i 1962 etter en lang krig?'
          },
          answers: [
            { en: 'Algeria', no: 'Algerie' },
            { en: 'Mexico', no: 'Mexico' },
            { en: 'Ireland', no: 'Irland' },
            { en: 'Norway', no: 'Norge' }
          ],
          correct: 0,
          explanation: {
            en: 'Algeria gained independence from France in 1962 after a brutal war.',
            no: 'Algerie ble uavhengig fra Frankrike i 1962 etter en brutal krig.'
          },
          tags: ['algeria', '1962']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Ghana, independent in 1957, had been a colony of which country?',
            no: 'Ghana, uavhengig i 1957, hadde vært koloni under hvilket land?'
          },
          answers: [
            { en: 'Britain', no: 'Storbritannia' },
            { en: 'Italy', no: 'Italia' },
            { en: 'Belgium', no: 'Belgia' },
            { en: 'Russia', no: 'Russland' }
          ],
          correct: 0,
          explanation: {
            en: 'Ghana, formerly the Gold Coast, became the first sub-Saharan African colony to gain independence from Britain in 1957.',
            no: 'Ghana, tidligere Gullkysten, ble den første kolonien sør for Sahara som ble uavhengig fra Storbritannia i 1957.'
          },
          tags: ['ghana', 'britain']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What term describes a colony’s push to govern itself?',
            no: 'Hvilket begrep beskriver en kolonis ønske om å styre seg selv?'
          },
          answers: [
            { en: 'Self-government', no: 'Selvstyre' },
            { en: 'Colonization', no: 'Kolonisering' },
            { en: 'Monarchy', no: 'Monarki' },
            { en: 'Feudalism', no: 'Føydalisme' }
          ],
          correct: 0,
          explanation: {
            en: 'Self-government, or self-determination, is a people’s ability to rule themselves.',
            no: 'Selvstyre, eller selvbestemmelse, er et folks evne til å styre seg selv.'
          },
          tags: ['self-government', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which two European countries clung to African colonies into the 1970s?',
            no: 'Hvilke to europeiske land holdt fast ved afrikanske kolonier inn på 1970-tallet?'
          },
          answers: [
            { en: 'Portugal and (in southern Africa) settler regimes', no: 'Portugal og (i det sørlige Afrika) nybyggerregimer' },
            { en: 'Norway and Denmark', no: 'Norge og Danmark' },
            { en: 'Finland and Iceland', no: 'Finland og Island' },
            { en: 'Austria and Switzerland', no: 'Østerrike og Sveits' }
          ],
          correct: 0,
          explanation: {
            en: 'Portugal held colonies like Angola and Mozambique until 1975, later than most other powers.',
            no: 'Portugal beholdt kolonier som Angola og Mosambik fram til 1975, senere enn de fleste andre maktene.'
          },
          tags: ['portugal', 'late-decolonization']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a "colony"?',
            no: 'Hva er en «koloni»?'
          },
          answers: [
            { en: 'A territory controlled by a foreign power', no: 'Et territorium kontrollert av en fremmed makt' },
            { en: 'An independent republic', no: 'En uavhengig republikk' },
            { en: 'A type of parliament', no: 'En type parlament' },
            { en: 'A trade fair', no: 'En handelsmesse' }
          ],
          correct: 0,
          explanation: {
            en: 'A colony is a region settled or controlled by a distant, more powerful country.',
            no: 'En koloni er et område bosatt eller kontrollert av et fjernt, mektigere land.'
          },
          tags: ['colony', 'definition']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did World War II weaken European colonial powers?',
            no: 'Hvordan svekket andre verdenskrig de europeiske kolonimaktene?'
          },
          answers: [
            { en: 'It drained their economies and military strength', no: 'Den tappet økonomiene og den militære styrken deres' },
            { en: 'It doubled their wealth', no: 'Den doblet rikdommen deres' },
            { en: 'It expanded their empires', no: 'Den utvidet imperiene deres' },
            { en: 'It had no effect on them', no: 'Den hadde ingen effekt på dem' }
          ],
          correct: 0,
          explanation: {
            en: 'The war left European powers economically and militarily exhausted, weakening their grip on colonies.',
            no: 'Krigen etterlot de europeiske maktene økonomisk og militært utmattet, noe som svekket grepet om koloniene.'
          },
          tags: ['world-war-ii', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did colonial soldiers’ wartime service fuel independence demands?',
            no: 'Hvorfor styrket kolonisoldatenes krigstjeneste kravene om uavhengighet?'
          },
          answers: [
            { en: 'They fought for freedom abroad but lacked it at home', no: 'De kjempet for frihet i utlandet, men manglet den hjemme' },
            { en: 'They were paid enormous fortunes', no: 'De ble betalt enorme formuer' },
            { en: 'They were given European citizenship automatically', no: 'De fikk automatisk europeisk statsborgerskap' },
            { en: 'They refused to return home', no: 'De nektet å reise hjem' }
          ],
          correct: 0,
          explanation: {
            en: 'Many colonial troops fought for Allied freedoms, then demanded the same rights in their own lands.',
            no: 'Mange kolonisoldater kjempet for de alliertes friheter og krevde deretter de samme rettighetene i sine egne land.'
          },
          tags: ['soldiers', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the Cold War influence decolonization?',
            no: 'Hvordan påvirket den kalde krigen avkoloniseringen?'
          },
          answers: [
            { en: 'The US and USSR competed for influence among new nations', no: 'USA og Sovjetunionen konkurrerte om innflytelse blant nye nasjoner' },
            { en: 'It stopped all independence movements', no: 'Den stoppet alle uavhengighetsbevegelser' },
            { en: 'It reunited the empires', no: 'Den gjenforente imperiene' },
            { en: 'It had no global effect', no: 'Den hadde ingen global effekt' }
          ],
          correct: 0,
          explanation: {
            en: 'Both superpowers courted newly independent states, shaping the path of decolonization.',
            no: 'Begge supermaktene kurtiserte nylig uavhengige stater og formet avkoloniseringens forløp.'
          },
          tags: ['cold-war', 'context']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was a common economic motive for European powers to keep colonies?',
            no: 'Hva var et vanlig økonomisk motiv for at europeiske makter ville beholde kolonier?'
          },
          answers: [
            { en: 'Access to raw materials and markets', no: 'Tilgang til råvarer og markeder' },
            { en: 'To reduce their own population', no: 'For å redusere sin egen befolkning' },
            { en: 'To give away free land', no: 'For å gi bort gratis land' },
            { en: 'To avoid all trade', no: 'For å unngå all handel' }
          ],
          correct: 0,
          explanation: {
            en: 'Colonies supplied cheap raw materials and served as markets for the imperial power’s goods.',
            no: 'Kolonier leverte billige råvarer og fungerte som markeder for imperiemaktens varer.'
          },
          tags: ['economy', 'motives']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Indian independence in 1947 affect other colonies?',
            no: 'Hvordan påvirket Indias uavhengighet i 1947 andre kolonier?'
          },
          answers: [
            { en: 'It inspired independence movements elsewhere', no: 'Den inspirerte uavhengighetsbevegelser andre steder' },
            { en: 'It ended all colonial trade', no: 'Den avsluttet all kolonihandel' },
            { en: 'It convinced colonies to stay', no: 'Den overbeviste kolonier om å bli værende' },
            { en: 'It had no wider influence', no: 'Den hadde ingen bredere innflytelse' }
          ],
          correct: 0,
          explanation: {
            en: 'India’s success encouraged nationalist movements across Asia and Africa.',
            no: 'Indias suksess oppmuntret nasjonalistiske bevegelser over hele Asia og Afrika.'
          },
          tags: ['india', 'connections']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was the partition of British India in 1947?',
            no: 'Hva var delingen av Britisk India i 1947?'
          },
          answers: [
            { en: 'Its division into India and Pakistan', no: 'Oppdelingen i India og Pakistan' },
            { en: 'A union with Britain', no: 'En union med Storbritannia' },
            { en: 'A merger with China', no: 'En sammenslåing med Kina' },
            { en: 'A return to monarchy', no: 'En tilbakevending til monarki' }
          ],
          correct: 0,
          explanation: {
            en: 'Partition split British India into mainly Hindu India and mainly Muslim Pakistan, causing mass migration and violence.',
            no: 'Delingen splittet Britisk India i et hovedsakelig hinduistisk India og et hovedsakelig muslimsk Pakistan, og forårsaket massemigrasjon og vold.'
          },
          tags: ['partition', 'india']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did some decolonized borders cause later conflicts?',
            no: 'Hvorfor forårsaket noen avkoloniserte grenser senere konflikter?'
          },
          answers: [
            { en: 'They were drawn by Europeans without regard to local groups', no: 'De var trukket opp av europeere uten hensyn til lokale grupper' },
            { en: 'They perfectly matched ethnic boundaries', no: 'De passet perfekt med etniske grenser' },
            { en: 'They were chosen by local referendums everywhere', no: 'De ble valgt ved lokale folkeavstemninger overalt' },
            { en: 'They never affected anyone', no: 'De påvirket aldri noen' }
          ],
          correct: 0,
          explanation: {
            en: 'Arbitrary colonial borders often grouped rival peoples or split communities, fueling later conflict.',
            no: 'Vilkårlige kolonigrenser samlet ofte rivaliserende folk eller delte samfunn, noe som næret senere konflikt.'
          },
          tags: ['borders', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was the "wind of change" speech of 1960 about?',
            no: 'Hva handlet «the wind of change»-talen fra 1960 om?'
          },
          answers: [
            { en: 'British acceptance of African independence', no: 'Britisk aksept av afrikansk uavhengighet' },
            { en: 'A new weather forecast system', no: 'Et nytt værvarslingssystem' },
            { en: 'The expansion of empire', no: 'Utvidelsen av imperiet' },
            { en: 'A trade embargo on Europe', no: 'En handelsblokade mot Europa' }
          ],
          correct: 0,
          explanation: {
            en: 'British PM Harold Macmillan’s "wind of change" speech acknowledged growing African nationalism.',
            no: 'Den britiske statsministeren Harold Macmillans «wind of change»-tale anerkjente den voksende afrikanske nasjonalismen.'
          },
          tags: ['wind-of-change', 'britain']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did nationalism drive decolonization?',
            no: 'Hvordan drev nasjonalisme avkoloniseringen?'
          },
          answers: [
            { en: 'Colonized peoples sought to rule themselves as nations', no: 'Koloniserte folk ønsket å styre seg selv som nasjoner' },
            { en: 'It encouraged colonies to remain dependent', no: 'Den oppmuntret kolonier til å forbli avhengige' },
            { en: 'It united Europe’s empires', no: 'Den forente Europas imperier' },
            { en: 'It had no role at all', no: 'Den hadde ingen rolle i det hele tatt' }
          ],
          correct: 0,
          explanation: {
            en: 'Rising nationalism gave colonized peoples a shared identity and demand for independent statehood.',
            no: 'Økende nasjonalisme ga koloniserte folk en felles identitet og et krav om uavhengig statsdannelse.'
          },
          tags: ['nationalism', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the independence of Belgium’s Congo in 1960 unfold?',
            no: 'Hvordan utspilte uavhengigheten til Belgias Kongo seg i 1960?'
          },
          answers: [
            { en: 'It was rapid and followed by instability and crisis', no: 'Den var rask og ble fulgt av ustabilitet og krise' },
            { en: 'It was slow and carefully planned over decades', no: 'Den var langsom og nøye planlagt over flere tiår' },
            { en: 'It never actually happened', no: 'Den skjedde aldri egentlig' },
            { en: 'It reunited Congo with Belgium', no: 'Den gjenforente Kongo med Belgia' }
          ],
          correct: 0,
          explanation: {
            en: 'Congo’s sudden independence in 1960 was followed by political turmoil and the Congo Crisis.',
            no: 'Kongos plutselige uavhengighet i 1960 ble fulgt av politisk uro og Kongokrisen.'
          },
          tags: ['congo', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is "neocolonialism"?',
            no: 'Hva er «nykolonialisme»?'
          },
          answers: [
            { en: 'Continued economic control over former colonies after independence', no: 'Fortsatt økonomisk kontroll over tidligere kolonier etter uavhengigheten' },
            { en: 'A brand-new colonial empire', no: 'Et helt nytt kolonirike' },
            { en: 'The return of monarchies', no: 'Monarkienes tilbakekomst' },
            { en: 'A type of military uniform', no: 'En type militæruniform' }
          ],
          correct: 0,
          explanation: {
            en: 'Neocolonialism describes indirect control, often economic, exerted over nominally independent former colonies.',
            no: 'Nykolonialisme beskriver indirekte kontroll, ofte økonomisk, utøvd over formelt uavhengige tidligere kolonier.'
          },
          tags: ['neocolonialism', 'concepts']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did some independence struggles turn violent while others were peaceful?',
            no: 'Hvorfor ble noen uavhengighetskamper voldelige mens andre var fredelige?'
          },
          answers: [
            { en: 'It often depended on whether the colonial power resisted or negotiated', no: 'Det avhang ofte av om kolonimakten gjorde motstand eller forhandlet' },
            { en: 'It depended only on the weather', no: 'Det avhang bare av været' },
            { en: 'Violence was required by law', no: 'Vold var lovpålagt' },
            { en: 'Peaceful change was impossible anywhere', no: 'Fredelig endring var umulig overalt' }
          ],
          correct: 0,
          explanation: {
            en: 'Where powers resisted, as in Algeria, wars erupted; where they negotiated, transitions were more peaceful.',
            no: 'Der maktene gjorde motstand, som i Algerie, brøt det ut kriger; der de forhandlet, ble overgangene mer fredelige.'
          },
          tags: ['comparison', 'methods']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What role did the Suez Crisis of 1956 play in decolonization?',
            no: 'Hvilken rolle spilte Suezkrisen i 1956 i avkoloniseringen?'
          },
          answers: [
            { en: 'It exposed the decline of British and French imperial power', no: 'Den avslørte nedgangen i britisk og fransk imperiemakt' },
            { en: 'It restored their global dominance', no: 'Den gjenopprettet deres globale dominans' },
            { en: 'It created the British Empire', no: 'Den skapte Det britiske imperiet' },
            { en: 'It had no political effect', no: 'Den hadde ingen politisk effekt' }
          ],
          correct: 0,
          explanation: {
            en: 'The humiliating Suez outcome showed Britain and France could no longer act as dominant imperial powers.',
            no: 'Det ydmykende utfallet av Suez viste at Storbritannia og Frankrike ikke lenger kunne opptre som dominerende imperiemakter.'
          },
          tags: ['suez', 'connections']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Historians debate whether decolonization was driven more by what two forces?',
            no: 'Historikere diskuterer om avkoloniseringen i større grad ble drevet av hvilke to krefter?'
          },
          answers: [
            { en: 'Colonial nationalist pressure versus metropolitan decisions to withdraw', no: 'Kolonialt nasjonalistisk press kontra beslutninger i moderlandet om å trekke seg ut' },
            { en: 'Weather patterns versus ocean currents', no: 'Værmønstre kontra havstrømmer' },
            { en: 'Sports rivalries versus art movements', no: 'Sportsrivalisering kontra kunstbevegelser' },
            { en: 'Population growth versus shrinking deserts', no: 'Befolkningsvekst kontra krympende ørkener' }
          ],
          correct: 0,
          explanation: {
            en: 'Scholars debate the relative weight of nationalist movements versus European powers’ own choices to let go.',
            no: 'Forskere diskuterer den relative vekten av nasjonalistbevegelser kontra europeiske makters egne valg om å gi slipp.'
          },
          tags: ['historiography', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the economic costs of empire contribute to decolonization?',
            no: 'Hvordan bidro de økonomiske kostnadene ved imperiet til avkoloniseringen?'
          },
          answers: [
            { en: 'Holding colonies grew too expensive relative to the benefits', no: 'Å holde på kolonier ble for dyrt i forhold til fordelene' },
            { en: 'Colonies generated unlimited free profit', no: 'Kolonier ga ubegrenset gratis profitt' },
            { en: 'Empires had no costs at all', no: 'Imperier hadde ingen kostnader i det hele tatt' },
            { en: 'Economics played no role', no: 'Økonomi spilte ingen rolle' }
          ],
          correct: 0,
          explanation: {
            en: 'For some powers, the cost of defending and administering restless colonies outweighed their economic value.',
            no: 'For enkelte makter oversteg kostnadene ved å forsvare og administrere urolige kolonier deres økonomiske verdi.'
          },
          tags: ['economy', 'causes']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the legacy of arbitrary colonial borders still debated today?',
            no: 'Hvorfor er arven etter vilkårlige kolonigrenser fortsatt omdiskutert i dag?'
          },
          answers: [
            { en: 'They are blamed for many post-independence ethnic and political conflicts', no: 'De får skylden for mange etniske og politiske konflikter etter uavhengigheten' },
            { en: 'They were universally praised as perfect', no: 'De ble universelt rost som perfekte' },
            { en: 'They disappeared immediately after independence', no: 'De forsvant umiddelbart etter uavhengigheten' },
            { en: 'They never existed', no: 'De eksisterte aldri' }
          ],
          correct: 0,
          explanation: {
            en: 'Many scholars link instability and conflict in new states to borders imposed during the colonial era.',
            no: 'Mange forskere knytter ustabilitet og konflikt i nye stater til grenser påtvunget under kolonitiden.'
          },
          tags: ['borders', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the idea of self-determination create tensions for colonial powers?',
            no: 'Hvordan skapte ideen om selvbestemmelse spenninger for kolonimaktene?'
          },
          answers: [
            { en: 'They championed it abroad while denying it in their colonies', no: 'De forfektet den i utlandet samtidig som de nektet den i koloniene sine' },
            { en: 'They rejected it everywhere equally', no: 'De avviste den likt overalt' },
            { en: 'It applied only to Europe’s monarchies', no: 'Den gjaldt bare Europas monarkier' },
            { en: 'It had no ideological impact', no: 'Den hadde ingen ideologisk virkning' }
          ],
          correct: 0,
          explanation: {
            en: 'Powers that promoted self-determination after the world wars faced contradictions in ruling their own colonies.',
            no: 'Makter som fremmet selvbestemmelse etter verdenskrigene, møtte selvmotsigelser i å styre sine egne kolonier.'
          },
          tags: ['self-determination', 'contradictions']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is one interpretation of why decolonization was so rapid after 1945?',
            no: 'Hva er én tolkning av hvorfor avkoloniseringen gikk så raskt etter 1945?'
          },
          answers: [
            { en: 'Multiple factors—war, nationalism, superpower pressure—reinforced one another', no: 'Flere faktorer – krig, nasjonalisme, supermaktspress – forsterket hverandre' },
            { en: 'A single law abolished all empires at once', no: 'En enkelt lov avskaffet alle imperier på én gang' },
            { en: 'Europe deliberately expanded its colonies', no: 'Europa utvidet bevisst koloniene sine' },
            { en: 'Nothing changed until the 1990s', no: 'Ingenting endret seg før på 1990-tallet' }
          ],
          correct: 0,
          explanation: {
            en: 'Most historians stress the convergence of weakened empires, rising nationalism, and Cold War dynamics.',
            no: 'De fleste historikere vektlegger sammenfallet av svekkede imperier, økende nasjonalisme og dynamikken i den kalde krigen.'
          },
          tags: ['multiple-causes', 'interpretation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did settler colonies complicate the decolonization process?',
            no: 'Hvordan kompliserte nybyggerkolonier avkoloniseringsprosessen?'
          },
          answers: [
            { en: 'Resident European settlers often resisted majority rule', no: 'Bosatte europeiske nybyggere motsatte seg ofte flertallsstyre' },
            { en: 'They always left immediately and peacefully', no: 'De dro alltid umiddelbart og fredelig' },
            { en: 'They had no influence on politics', no: 'De hadde ingen innflytelse på politikken' },
            { en: 'They guaranteed quick independence', no: 'De garanterte rask uavhengighet' }
          ],
          correct: 0,
          explanation: {
            en: 'In places like Algeria and Rhodesia, settler populations fiercely resisted handing power to the majority.',
            no: 'På steder som Algerie og Rhodesia motsatte nybyggerbefolkninger seg sterkt å overlate makten til flertallet.'
          },
          tags: ['settler-colonies', 'complications']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do some scholars argue independence did not bring full economic freedom?',
            no: 'Hvorfor hevder enkelte forskere at uavhengighet ikke ga full økonomisk frihet?'
          },
          answers: [
            { en: 'Former colonies often remained dependent on former rulers’ economies', no: 'Tidligere kolonier forble ofte avhengige av de tidligere herskernes økonomier' },
            { en: 'All new nations instantly became wealthy', no: 'Alle nye nasjoner ble øyeblikkelig rike' },
            { en: 'Trade with the world stopped completely', no: 'Handel med verden stoppet helt' },
            { en: 'Economic ties were legally banned', no: 'Økonomiske bånd ble forbudt ved lov' }
          ],
          correct: 0,
          explanation: {
            en: 'Many newly independent states stayed economically tied to former colonizers, a pattern critics call neocolonialism.',
            no: 'Mange nylig uavhengige stater forble økonomisk bundet til tidligere kolonimakter, et mønster kritikere kaller nykolonialisme.'
          },
          tags: ['neocolonialism', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the Non-Aligned Movement reflect the aims of newly independent states?',
            no: 'Hvordan gjenspeilte Den alliansefrie bevegelsen målene til nylig uavhengige stater?'
          },
          answers: [
            { en: 'It sought independence from both Cold War blocs', no: 'Den søkte uavhengighet fra begge blokkene i den kalde krigen' },
            { en: 'It joined the Soviet Union outright', no: 'Den sluttet seg helt til Sovjetunionen' },
            { en: 'It re-established colonial rule', no: 'Den gjeninnførte kolonistyre' },
            { en: 'It rejected all independence', no: 'Den avviste all uavhengighet' }
          ],
          correct: 0,
          explanation: {
            en: 'The Non-Aligned Movement let new nations avoid choosing sides between the US and USSR.',
            no: 'Den alliansefrie bevegelsen lot nye nasjoner unngå å velge side mellom USA og Sovjetunionen.'
          },
          tags: ['non-aligned', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the term "decolonization" itself sometimes criticized?',
            no: 'Hvorfor blir selve begrepet «avkolonisering» noen ganger kritisert?'
          },
          answers: [
            { en: 'It can imply a tidy European-led process rather than hard-won struggles', no: 'Det kan antyde en ryddig europeiskledet prosess snarere enn hardt tilkjempede kamper' },
            { en: 'It is too negative about colonies', no: 'Det er for negativt om kolonier' },
            { en: 'It refers only to Asia', no: 'Det viser bare til Asia' },
            { en: 'It describes events before 1800', no: 'Det beskriver hendelser før 1800' }
          ],
          correct: 0,
          explanation: {
            en: 'Critics argue the word can downplay the agency and sacrifices of colonized peoples in winning freedom.',
            no: 'Kritikere hevder at ordet kan tone ned de koloniserte folkenes egeninnsats og ofre for å vinne frihet.'
          },
          tags: ['terminology', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did decolonization reshape the global balance of power?',
            no: 'Hvordan omformet avkoloniseringen den globale maktbalansen?'
          },
          answers: [
            { en: 'It created dozens of new states and shifted influence away from Europe', no: 'Den skapte dusinvis av nye stater og flyttet innflytelse bort fra Europa' },
            { en: 'It made Europe more dominant than ever', no: 'Den gjorde Europa mer dominerende enn noen gang' },
            { en: 'It reduced the number of countries', no: 'Den reduserte antallet land' },
            { en: 'It had no global consequences', no: 'Den hadde ingen globale konsekvenser' }
          ],
          correct: 0,
          explanation: {
            en: 'Decolonization multiplied the number of sovereign states and diminished Europe’s global dominance.',
            no: 'Avkoloniseringen mangedoblet antallet suverene stater og svekket Europas globale dominans.'
          },
          tags: ['global-power', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians say decolonization was uneven across regions?',
            no: 'Hvorfor sier historikere at avkoloniseringen var ujevn på tvers av regioner?'
          },
          answers: [
            { en: 'Timing and violence varied with local conditions and the colonizer’s response', no: 'Tidspunkt og vold varierte med lokale forhold og kolonimaktens respons' },
            { en: 'Every colony became free in the same year', no: 'Hver koloni ble fri i samme år' },
            { en: 'Only one continent was ever colonized', no: 'Bare ett kontinent ble noensinne kolonisert' },
            { en: 'It followed an identical pattern everywhere', no: 'Den fulgte et identisk mønster overalt' }
          ],
          correct: 0,
          explanation: {
            en: 'Independence came at different times and costs depending on local movements and imperial reactions.',
            no: 'Uavhengigheten kom til ulike tider og med ulike kostnader avhengig av lokale bevegelser og imperiereaksjoner.'
          },
          tags: ['comparison', 'interpretation']
        }
      ]
    },
    {
      slug: 'independence-movements',
      name: { en: 'Independence movements', no: 'Independence movements' },
      questions: []
    },
    {
      slug: 'new-nations',
      name: { en: 'New nations', no: 'New nations' },
      questions: []
    }
  ]
};