import type { SeedSubcategory } from '../types';

export const civilRightsMovement: SeedSubcategory = {
  slug: 'civil-rights-movement',
  name: { en: 'Civil Rights Movement', no: 'Borgerrettighetsbevegelsen' },
  modules: [
    {
      slug: 'segregation',
      name: { en: 'Segregation', no: 'Raseskille' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'What does racial segregation mean?',
            no: 'Hva betyr raseskille (segregering)?'
          },
          answers: [
            { en: 'Separating people based on their race', no: 'Å skille mennesker basert på rase' },
            { en: 'Uniting people of all races', no: 'Å forene mennesker av alle raser' },
            { en: 'Giving everyone equal rights', no: 'Å gi alle like rettigheter' },
            { en: 'Abolishing racial categories', no: 'Å avskaffe rasekategorier' }
          ],
          correct: 0,
          explanation: {
            en: 'Segregation is the enforced separation of people into groups based on race.',
            no: 'Segregering er den påtvungne adskillelsen av mennesker i grupper basert på rase.'
          },
          tags: ['definition', 'segregation']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What were the laws that enforced racial segregation in the American South called?',
            no: 'Hva ble lovene som håndhevet raseskille i det amerikanske Sør kalt?'
          },
          answers: [
            { en: 'New Deal laws', no: 'New Deal-lovene' },
            { en: 'Jim Crow laws', no: 'Jim Crow-lovene' },
            { en: 'Homestead Acts', no: 'Homestead-lovene' },
            { en: 'Reconstruction Acts', no: 'Gjenoppbyggingslovene' }
          ],
          correct: 1,
          explanation: {
            en: 'The Jim Crow laws enforced racial segregation in the Southern United States.',
            no: 'Jim Crow-lovene håndhevet raseskille i sørstatene i USA.'
          },
          tags: ['jim-crow', 'laws']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which 1896 Supreme Court case upheld the idea of "separate but equal"?',
            no: 'Hvilken høyesterettssak fra 1896 stadfestet prinsippet om «atskilt, men likeverdig»?'
          },
          answers: [
            { en: 'Marbury v. Madison', no: 'Marbury mot Madison' },
            { en: 'Brown v. Board of Education', no: 'Brown mot Board of Education' },
            { en: 'Plessy v. Ferguson', no: 'Plessy mot Ferguson' },
            { en: 'Dred Scott v. Sandford', no: 'Dred Scott mot Sandford' }
          ],
          correct: 2,
          explanation: {
            en: 'In Plessy v. Ferguson (1896) the Supreme Court ruled that "separate but equal" facilities were constitutional.',
            no: 'I Plessy mot Ferguson (1896) slo Høyesterett fast at «atskilte, men likeverdige» fasiliteter var grunnlovsmessige.'
          },
          tags: ['plessy', 'supreme-court']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What doctrine allowed segregated facilities as long as they were supposedly equal?',
            no: 'Hvilken doktrine tillot atskilte fasiliteter så lenge de angivelig var likeverdige?'
          },
          answers: [
            { en: '"One person, one vote"', no: '«Én person, én stemme»' },
            { en: '"All men are equal"', no: '«Alle mennesker er like»' },
            { en: '"Equal protection"', no: '«Likt vern»' },
            { en: '"Separate but equal"', no: '«Atskilt, men likeverdig»' }
          ],
          correct: 3,
          explanation: {
            en: 'The "separate but equal" doctrine was used to justify racial segregation for decades.',
            no: 'Doktrinen «atskilt, men likeverdig» ble brukt til å rettferdiggjøre raseskille i flere tiår.'
          },
          tags: ['separate-but-equal', 'doctrine']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which year did Brown v. Board of Education rule school segregation unconstitutional?',
            no: 'I hvilket år erklærte Brown mot Board of Education skolesegregering grunnlovsstridig?'
          },
          answers: [
            { en: '1954', no: '1954' },
            { en: '1968', no: '1968' },
            { en: '1865', no: '1865' },
            { en: '1920', no: '1920' }
          ],
          correct: 0,
          explanation: {
            en: 'In 1954 the Supreme Court ruled in Brown v. Board of Education that segregated public schools were unconstitutional.',
            no: 'I 1954 slo Høyesterett fast i Brown mot Board of Education at segregerte offentlige skoler var grunnlovsstridige.'
          },
          tags: ['brown-v-board', '1954']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Brown v. Board of Education declared segregation unconstitutional in what?',
            no: 'Brown mot Board of Education erklærte segregering grunnlovsstridig innenfor hva?'
          },
          answers: [
            { en: 'Restaurants', no: 'Restauranter' },
            { en: 'Public schools', no: 'Offentlige skoler' },
            { en: 'The military', no: 'Militæret' },
            { en: 'Public transport', no: 'Offentlig transport' }
          ],
          correct: 1,
          explanation: {
            en: 'The ruling specifically declared segregation in public schools unconstitutional.',
            no: 'Dommen erklærte spesifikt segregering i offentlige skoler grunnlovsstridig.'
          },
          tags: ['brown-v-board', 'schools']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which city did Rosa Parks refuse to give up her bus seat in 1955?',
            no: 'I hvilken by nektet Rosa Parks å gi fra seg bussetet sitt i 1955?'
          },
          answers: [
            { en: 'Atlanta', no: 'Atlanta' },
            { en: 'Birmingham', no: 'Birmingham' },
            { en: 'Montgomery', no: 'Montgomery' },
            { en: 'Selma', no: 'Selma' }
          ],
          correct: 2,
          explanation: {
            en: 'Rosa Parks refused to give up her seat in Montgomery, Alabama, sparking a famous boycott.',
            no: 'Rosa Parks nektet å gi fra seg setet sitt i Montgomery i Alabama, noe som utløste en berømt boikott.'
          },
          tags: ['rosa-parks', 'montgomery']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What was the 1955–56 protest against segregated buses called?',
            no: 'Hva ble protesten mot segregerte busser i 1955–56 kalt?'
          },
          answers: [
            { en: 'The March on Washington', no: 'Marsjen mot Washington' },
            { en: 'The Greensboro Sit-in', no: 'Sit-in-aksjonen i Greensboro' },
            { en: 'The Freedom Rides', no: 'Frihetsrittene' },
            { en: 'The Montgomery Bus Boycott', no: 'Bussboikotten i Montgomery' }
          ],
          correct: 3,
          explanation: {
            en: 'The Montgomery Bus Boycott lasted over a year and challenged segregation on city buses.',
            no: 'Bussboikotten i Montgomery varte i over et år og utfordret segregeringen på byens busser.'
          },
          tags: ['montgomery', 'boycott']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which organization, founded in 1909, fought segregation through the courts?',
            no: 'Hvilken organisasjon, grunnlagt i 1909, bekjempet segregering gjennom domstolene?'
          },
          answers: [
            { en: 'NAACP', no: 'NAACP' },
            { en: 'KKK', no: 'KKK' },
            { en: 'FBI', no: 'FBI' },
            { en: 'CIO', no: 'CIO' }
          ],
          correct: 0,
          explanation: {
            en: 'The NAACP (National Association for the Advancement of Colored People) used legal challenges to fight segregation.',
            no: 'NAACP (National Association for the Advancement of Colored People) brukte rettssaker for å bekjempe segregering.'
          },
          tags: ['naacp', 'organizations']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which white supremacist group used violence to enforce segregation?',
            no: 'Hvilken hvit overherredømme-gruppe brukte vold for å håndheve segregering?'
          },
          answers: [
            { en: 'The Black Panthers', no: 'Black Panthers' },
            { en: 'The Ku Klux Klan', no: 'Ku Klux Klan' },
            { en: 'The Freedmen’s Bureau', no: 'Freedmen’s Bureau' },
            { en: 'The NAACP', no: 'NAACP' }
          ],
          correct: 1,
          explanation: {
            en: 'The Ku Klux Klan used terror and violence to maintain white supremacy and segregation.',
            no: 'Ku Klux Klan brukte terror og vold for å opprettholde hvitt overherredømme og segregering.'
          },
          tags: ['kkk', 'violence']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The Little Rock Nine were students who integrated a high school in which state?',
            no: 'Little Rock Nine var elever som integrerte en videregående skole i hvilken delstat?'
          },
          answers: [
            { en: 'Georgia', no: 'Georgia' },
            { en: 'Mississippi', no: 'Mississippi' },
            { en: 'Arkansas', no: 'Arkansas' },
            { en: 'Alabama', no: 'Alabama' }
          ],
          correct: 2,
          explanation: {
            en: 'In 1957 the Little Rock Nine integrated Central High School in Little Rock, Arkansas.',
            no: 'I 1957 integrerte Little Rock Nine Central High School i Little Rock i Arkansas.'
          },
          tags: ['little-rock', 'schools']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which amendment to the US Constitution abolished slavery?',
            no: 'Hvilket grunnlovstillegg i USA avskaffet slaveriet?'
          },
          answers: [
            { en: 'The 1st Amendment', no: 'Det 1. grunnlovstillegget' },
            { en: 'The 19th Amendment', no: 'Det 19. grunnlovstillegget' },
            { en: 'The 21st Amendment', no: 'Det 21. grunnlovstillegget' },
            { en: 'The 13th Amendment', no: 'Det 13. grunnlovstillegget' }
          ],
          correct: 3,
          explanation: {
            en: 'The 13th Amendment, ratified in 1865, abolished slavery in the United States.',
            no: 'Det 13. grunnlovstillegget, ratifisert i 1865, avskaffet slaveriet i USA.'
          },
          tags: ['13th-amendment', 'slavery']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Segregated facilities for Black Americans were often labeled with which word?',
            no: 'Segregerte fasiliteter for svarte amerikanere ble ofte merket med hvilket ord?'
          },
          answers: [
            { en: '"Colored"', no: '«Colored» (farget)' },
            { en: '"Reserved"', no: '«Reservert»' },
            { en: '"Closed"', no: '«Stengt»' },
            { en: '"Private"', no: '«Privat»' }
          ],
          correct: 0,
          explanation: {
            en: 'Signs reading "Colored" marked the separate facilities Black Americans were forced to use.',
            no: 'Skilt med teksten «Colored» merket de atskilte fasilitetene svarte amerikanere ble tvunget til å bruke.'
          },
          tags: ['signs', 'daily-life']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What method was commonly used to prevent Black Americans from voting in the South?',
            no: 'Hvilken metode ble ofte brukt for å hindre svarte amerikanere i å stemme i Sør?'
          },
          answers: [
            { en: 'Free voting cards', no: 'Gratis stemmekort' },
            { en: 'Literacy tests', no: 'Lesekyndighetstester' },
            { en: 'Mandatory voting', no: 'Stemmeplikt' },
            { en: 'Online registration', no: 'Nettregistrering' }
          ],
          correct: 1,
          explanation: {
            en: 'Literacy tests, along with poll taxes, were used to disenfranchise Black voters.',
            no: 'Lesekyndighetstester, sammen med stemmeskatt, ble brukt til å frata svarte velgere stemmeretten.'
          },
          tags: ['voting', 'disenfranchisement']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'On segregated buses in the South, Black passengers were usually required to sit where?',
            no: 'På segregerte busser i Sør måtte svarte passasjerer vanligvis sitte hvor?'
          },
          answers: [
            { en: 'In a separate bus only', no: 'Bare i en egen buss' },
            { en: 'At the front', no: 'Fremst' },
            { en: 'In the back', no: 'Bakerst' },
            { en: 'Next to the driver', no: 'Ved siden av sjåføren' }
          ],
          correct: 2,
          explanation: {
            en: 'Black passengers were forced to sit in the back and give up seats to white riders.',
            no: 'Svarte passasjerer ble tvunget til å sitte bakerst og gi fra seg seter til hvite passasjerer.'
          },
          tags: ['buses', 'daily-life']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Jim Crow laws emerged in the South after the end of which period?',
            no: 'Jim Crow-lovene oppstod i Sør etter slutten på hvilken periode?'
          },
          answers: [
            { en: 'The Great Depression', no: 'Den store depresjonen' },
            { en: 'World War II', no: 'Andre verdenskrig' },
            { en: 'The Cold War', no: 'Den kalde krigen' },
            { en: 'The Reconstruction era', no: 'Gjenoppbyggingstiden' }
          ],
          correct: 3,
          explanation: {
            en: 'As Reconstruction ended in the 1870s, Southern states began passing Jim Crow segregation laws.',
            no: 'Da gjenoppbyggingen tok slutt på 1870-tallet, begynte sørstatene å vedta Jim Crow-segregeringslover.'
          },
          tags: ['reconstruction', 'jim-crow', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was a major consequence of the Plessy v. Ferguson decision?',
            no: 'Hva var en viktig konsekvens av Plessy mot Ferguson-dommen?'
          },
          answers: [
            { en: 'It legalized segregation for decades', no: 'Den gjorde segregering lovlig i flere tiår' },
            { en: 'It ended slavery', no: 'Den avskaffet slaveriet' },
            { en: 'It gave women the vote', no: 'Den ga kvinner stemmerett' },
            { en: 'It desegregated the army', no: 'Den avskaffet segregering i hæren' }
          ],
          correct: 0,
          explanation: {
            en: 'Plessy provided legal cover for segregation across the South until the 1950s.',
            no: 'Plessy ga juridisk dekning for segregering i hele Sør helt til 1950-tallet.'
          },
          tags: ['plessy', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Brown v. Board of Education effectively overturned the principle established in which case?',
            no: 'Brown mot Board of Education opphevet i praksis prinsippet som ble etablert i hvilken sak?'
          },
          answers: [
            { en: 'Marbury v. Madison', no: 'Marbury mot Madison' },
            { en: 'Plessy v. Ferguson', no: 'Plessy mot Ferguson' },
            { en: 'Dred Scott v. Sandford', no: 'Dred Scott mot Sandford' },
            { en: 'Roe v. Wade', no: 'Roe mot Wade' }
          ],
          correct: 1,
          explanation: {
            en: 'Brown rejected the "separate but equal" principle from Plessy, at least in education.',
            no: 'Brown forkastet prinsippet om «atskilt, men likeverdig» fra Plessy, i hvert fall innen utdanning.'
          },
          tags: ['brown-v-board', 'plessy', 'connections']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'One reason many Black Americans moved north in the Great Migration was to escape what?',
            no: 'En grunn til at mange svarte amerikanere flyttet nordover under den store migrasjonen, var å unnslippe hva?'
          },
          answers: [
            { en: 'Factory closures', no: 'Fabrikknedleggelser' },
            { en: 'Cold weather', no: 'Kaldt vær' },
            { en: 'Southern segregation and discrimination', no: 'Segregering og diskriminering i Sør' },
            { en: 'High northern wages', no: 'Høye lønninger i nord' }
          ],
          correct: 2,
          explanation: {
            en: 'Millions left the South to escape Jim Crow segregation and seek opportunity in Northern cities.',
            no: 'Millioner forlot Sør for å unnslippe Jim Crow-segregering og søke muligheter i byene i nord.'
          },
          tags: ['great-migration', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was an outcome of the Montgomery Bus Boycott?',
            no: 'Hva ble et resultat av bussboikotten i Montgomery?'
          },
          answers: [
            { en: 'Buses were banned', no: 'Busser ble forbudt' },
            { en: 'Segregation expanded', no: 'Segregeringen ble utvidet' },
            { en: 'Nothing changed', no: 'Ingenting endret seg' },
            { en: 'The Supreme Court ruled bus segregation unconstitutional', no: 'Høyesterett erklærte bussegregering grunnlovsstridig' }
          ],
          correct: 3,
          explanation: {
            en: 'The boycott led to a Supreme Court ruling that segregation on public buses was unconstitutional.',
            no: 'Boikotten førte til en høyesterettsdom om at segregering på offentlige busser var grunnlovsstridig.'
          },
          tags: ['montgomery', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'In practice, facilities for Black Americans under "separate but equal" were usually what?',
            no: 'I praksis var fasiliteter for svarte amerikanere under «atskilt, men likeverdig» som regel hva?'
          },
          answers: [
            { en: 'Inferior and underfunded', no: 'Dårligere og underfinansierte' },
            { en: 'Better funded', no: 'Bedre finansierte' },
            { en: 'Nonexistent everywhere', no: 'Ikke-eksisterende overalt' },
            { en: 'Identical to white facilities', no: 'Identiske med fasilitetene for hvite' }
          ],
          correct: 0,
          explanation: {
            en: 'Despite the doctrine, Black facilities were almost always inferior and poorly funded.',
            no: 'Til tross for doktrinen var fasiliteter for svarte nesten alltid dårligere og dårlig finansiert.'
          },
          tags: ['separate-but-equal', 'inequality']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Civil rights lawyers argued segregation violated the equal protection clause of which amendment?',
            no: 'Borgerrettighetsadvokater hevdet at segregering brøt med likebeskyttelsesklausulen i hvilket grunnlovstillegg?'
          },
          answers: [
            { en: 'The 18th Amendment', no: 'Det 18. grunnlovstillegget' },
            { en: 'The 14th Amendment', no: 'Det 14. grunnlovstillegget' },
            { en: 'The 2nd Amendment', no: 'Det 2. grunnlovstillegget' },
            { en: 'The 10th Amendment', no: 'Det 10. grunnlovstillegget' }
          ],
          correct: 1,
          explanation: {
            en: 'The 14th Amendment’s equal protection clause became central to challenging segregation.',
            no: 'Likebeskyttelsesklausulen i det 14. grunnlovstillegget ble sentral i kampen mot segregering.'
          },
          tags: ['14th-amendment', 'law']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Segregation enforced by law is best described as what?',
            no: 'Segregering som er håndhevet ved lov, beskrives best som hva?'
          },
          answers: [
            { en: 'Economic segregation', no: 'Økonomisk segregering' },
            { en: 'De facto segregation', no: 'De facto-segregering' },
            { en: 'De jure segregation', no: 'De jure-segregering' },
            { en: 'Voluntary segregation', no: 'Frivillig segregering' }
          ],
          correct: 2,
          explanation: {
            en: 'De jure segregation is created by law, while de facto segregation results from social practice.',
            no: 'De jure-segregering skapes ved lov, mens de facto-segregering oppstår av sosial praksis.'
          },
          tags: ['de-jure', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What did President Eisenhower do to enforce integration at Little Rock in 1957?',
            no: 'Hva gjorde president Eisenhower for å håndheve integrering i Little Rock i 1957?'
          },
          answers: [
            { en: 'Closed the school', no: 'Stengte skolen' },
            { en: 'Repealed Brown v. Board', no: 'Opphevet Brown mot Board' },
            { en: 'Did nothing', no: 'Gjorde ingenting' },
            { en: 'Sent federal troops', no: 'Sendte føderale tropper' }
          ],
          correct: 3,
          explanation: {
            en: 'Eisenhower sent federal troops to protect the Little Rock Nine and enforce the court order.',
            no: 'Eisenhower sendte føderale tropper for å beskytte Little Rock Nine og håndheve rettskjennelsen.'
          },
          tags: ['little-rock', 'federal-power']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Which economic system kept many Black farmers in poverty and dependence in the South?',
            no: 'Hvilket økonomisk system holdt mange svarte bønder i fattigdom og avhengighet i Sør?'
          },
          answers: [
            { en: 'Sharecropping', no: 'Forpaktning (sharecropping)' },
            { en: 'Industrialization', no: 'Industrialisering' },
            { en: 'Free homesteading', no: 'Gratis nybyggerbruk' },
            { en: 'Cooperative farming', no: 'Samvirkejordbruk' }
          ],
          correct: 0,
          explanation: {
            en: 'Sharecropping trapped many Black families in cycles of debt and economic dependence.',
            no: 'Forpaktning fanget mange svarte familier i sirkler av gjeld og økonomisk avhengighet.'
          },
          tags: ['sharecropping', 'economy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The "grandfather clause" in Southern voting laws was designed to do what?',
            no: '«Bestefarsklausulen» i sørstatenes valglover var utformet for å gjøre hva?'
          },
          answers: [
            { en: 'Integrate buses', no: 'Integrere busser' },
            { en: 'Let poor whites vote while blocking Black voters', no: 'La fattige hvite stemme mens svarte velgere ble blokkert' },
            { en: 'Free enslaved people', no: 'Frigjøre slaver' },
            { en: 'Fund Black schools', no: 'Finansiere skoler for svarte' }
          ],
          correct: 1,
          explanation: {
            en: 'Grandfather clauses exempted those whose ancestors could vote before the Civil War, sparing whites but not Black citizens.',
            no: 'Bestefarsklausuler fritok dem hvis forfedre kunne stemme før borgerkrigen, noe som skånet hvite, men ikke svarte borgere.'
          },
          tags: ['voting', 'disenfranchisement']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Legalized racial segregation in South Africa was known as what?',
            no: 'Lovfestet raseskille i Sør-Afrika ble kjent som hva?'
          },
          answers: [
            { en: 'Reconstruction', no: 'Gjenoppbygging' },
            { en: 'Partition', no: 'Deling' },
            { en: 'Apartheid', no: 'Apartheid' },
            { en: 'Jim Crow', no: 'Jim Crow' }
          ],
          correct: 2,
          explanation: {
            en: 'Apartheid was South Africa’s system of legalized racial segregation, comparable to Jim Crow.',
            no: 'Apartheid var Sør-Afrikas system med lovfestet raseskille, sammenlignbart med Jim Crow.'
          },
          tags: ['apartheid', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Black soldiers who served in World War II often returned home to face what?',
            no: 'Svarte soldater som tjenestegjorde i andre verdenskrig, kom ofte hjem til hva?'
          },
          answers: [
            { en: 'Immediate voting rights', no: 'Umiddelbar stemmerett' },
            { en: 'Northern factory bans', no: 'Forbud i fabrikker i nord' },
            { en: 'Full equality', no: 'Full likestilling' },
            { en: 'Continued segregation', no: 'Fortsatt segregering' }
          ],
          correct: 3,
          explanation: {
            en: 'Black veterans returned to ongoing segregation, fueling demands for civil rights.',
            no: 'Svarte krigsveteraner kom tilbake til fortsatt segregering, noe som styrket kravene om borgerrettigheter.'
          },
          tags: ['world-war-ii', 'context']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why was the bus boycott an effective protest tactic in Montgomery?',
            no: 'Hvorfor var bussboikotten en effektiv protesttaktikk i Montgomery?'
          },
          answers: [
            { en: 'Black riders made up a large share of bus revenue', no: 'Svarte passasjerer stod for en stor del av bussinntektene' },
            { en: 'Buses were rarely used', no: 'Busser ble sjelden brukt' },
            { en: 'The city owned no buses', no: 'Byen eide ingen busser' },
            { en: 'White riders also boycotted', no: 'Hvite passasjerer boikottet også' }
          ],
          correct: 0,
          explanation: {
            en: 'Because Black riders were most of the bus system’s customers, the boycott caused serious financial pressure.',
            no: 'Fordi svarte passasjerer utgjorde mesteparten av bussystemets kunder, skapte boikotten et alvorlig økonomisk press.'
          },
          tags: ['montgomery', 'tactics']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Many historians argue the collapse of Reconstruction enabled segregation primarily because of what?',
            no: 'Mange historikere hevder at sammenbruddet av gjenoppbyggingen muliggjorde segregering hovedsakelig på grunn av hva?'
          },
          answers: [
            { en: 'Northern military occupation', no: 'Militær okkupasjon fra nord' },
            { en: 'The withdrawal of federal enforcement in the South', no: 'Tilbaketrekkingen av føderal håndheving i Sør' },
            { en: 'A lack of Black political leaders', no: 'Mangel på svarte politiske ledere' },
            { en: 'The absence of any laws', no: 'Fravær av lover overhodet' }
          ],
          correct: 1,
          explanation: {
            en: 'When federal troops and oversight withdrew after 1877, Southern states were free to impose segregation.',
            no: 'Da føderale tropper og tilsyn ble trukket tilbake etter 1877, stod sørstatene fritt til å innføre segregering.'
          },
          tags: ['reconstruction', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Justice John Marshall Harlan’s dissent in Plessy v. Ferguson is famous for arguing what?',
            no: 'Dommer John Marshall Harlans dissens i Plessy mot Ferguson er berømt for å hevde hva?'
          },
          answers: [
            { en: 'That states should decide', no: 'At delstatene burde bestemme' },
            { en: 'That equality was impossible', no: 'At likhet var umulig' },
            { en: 'That the Constitution is "color-blind"', no: 'At grunnloven er «fargeblind»' },
            { en: 'That segregation was practical', no: 'At segregering var praktisk' }
          ],
          correct: 2,
          explanation: {
            en: 'Harlan’s lone dissent argued that "our Constitution is color-blind," a phrase later widely cited.',
            no: 'Harlans ensomme dissens hevdet at «vår grunnlov er fargeblind», en frase som senere ble mye sitert.'
          },
          tags: ['plessy', 'harlan', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'The practice of denying loans and services to Black neighborhoods, reinforcing segregation, was known as what?',
            no: 'Praksisen med å nekte lån og tjenester til svarte nabolag, som forsterket segregering, ble kjent som hva?'
          },
          answers: [
            { en: 'Blockbusting', no: 'Blockbusting' },
            { en: 'Gerrymandering', no: 'Gerrymandering' },
            { en: 'Filibustering', no: 'Filibustering' },
            { en: 'Redlining', no: 'Redlining' }
          ],
          correct: 3,
          explanation: {
            en: 'Redlining denied mortgages and investment to Black areas, entrenching residential segregation.',
            no: 'Redlining nektet boliglån og investeringer til svarte områder, og festnet bosegregering.'
          },
          tags: ['redlining', 'housing', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Historians generally explain the persistence of segregation as resulting from what?',
            no: 'Historikere forklarer som regel at segregeringen vedvarte som følge av hva?'
          },
          answers: [
            { en: 'A combination of law, economics, and social custom', no: 'En kombinasjon av lov, økonomi og sosiale skikker' },
            { en: 'A single federal law', no: 'En enkelt føderal lov' },
            { en: 'Purely economic forces', no: 'Rent økonomiske krefter' },
            { en: 'Only individual prejudice', no: 'Bare individuelle fordommer' }
          ],
          correct: 0,
          explanation: {
            en: 'Most scholars stress that interlocking legal, economic, and cultural systems sustained segregation.',
            no: 'De fleste forskere understreker at sammenvevde juridiske, økonomiske og kulturelle systemer opprettholdt segregeringen.'
          },
          tags: ['historiography', 'causes']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'A common scholarly criticism of Brown v. Board of Education is that it did what?',
            no: 'En vanlig faglig kritikk av Brown mot Board of Education er at den gjorde hva?'
          },
          answers: [
            { en: 'Applied only to colleges', no: 'Gjaldt bare høyskoler' },
            { en: 'Produced very slow desegregation in practice', no: 'Førte til svært langsom desegregering i praksis' },
            { en: 'Ended segregation overnight', no: 'Avsluttet segregering over natten' },
            { en: 'Had no legal authority', no: 'Hadde ingen rettslig myndighet' }
          ],
          correct: 1,
          explanation: {
            en: 'Critics note that Brown’s "all deliberate speed" allowed many schools to delay integration for years.',
            no: 'Kritikere påpeker at Browns formulering om «all deliberate speed» lot mange skoler utsette integrering i årevis.'
          },
          tags: ['brown-v-board', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'White Southern politicians’ organized opposition to school desegregation was called what?',
            no: 'Hvite sørstatspolitikeres organiserte motstand mot skoledesegregering ble kalt hva?'
          },
          answers: [
            { en: 'The Nullification Crisis', no: 'Nullifiseringskrisen' },
            { en: 'The Solid South', no: 'Det solide Sør' },
            { en: 'Massive Resistance', no: 'Massive Resistance (massiv motstand)' },
            { en: 'The Great Compromise', no: 'Det store kompromisset' }
          ],
          correct: 2,
          explanation: {
            en: '"Massive Resistance" was the strategy of Southern leaders to block court-ordered desegregation.',
            no: '«Massive Resistance» var sørstatsledernes strategi for å blokkere rettsbestemt desegregering.'
          },
          tags: ['massive-resistance', 'opposition']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Some historians argue Jim Crow laws also served what economic purpose?',
            no: 'Enkelte historikere hevder at Jim Crow-lovene også tjente hvilket økonomisk formål?'
          },
          answers: [
            { en: 'Industrializing the North', no: 'Å industrialisere nord' },
            { en: 'Expanding Black land ownership', no: 'Å utvide svartes jordeierskap' },
            { en: 'Encouraging unionization', no: 'Å oppmuntre til fagorganisering' },
            { en: 'Maintaining a cheap, controlled Black labor force', no: 'Å opprettholde en billig, kontrollert svart arbeidsstyrke' }
          ],
          correct: 3,
          explanation: {
            en: 'Segregation helped keep Black workers in low-wage, dependent labor that benefited white employers.',
            no: 'Segregeringen bidro til å holde svarte arbeidere i lavtlønnet, avhengig arbeid som gagnet hvite arbeidsgivere.'
          },
          tags: ['economy', 'interpretation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Discriminatory housing and segregation are often cited as causes of what lasting phenomenon?',
            no: 'Diskriminerende boligpolitikk og segregering trekkes ofte frem som årsaker til hvilket varig fenomen?'
          },
          answers: [
            { en: 'The racial wealth gap', no: 'Det rasemessige formuesgapet' },
            { en: 'Rapid suburban integration', no: 'Rask integrering i forstedene' },
            { en: 'Equal home ownership', no: 'Likt boligeierskap' },
            { en: 'The end of poverty', no: 'Slutten på fattigdom' }
          ],
          correct: 0,
          explanation: {
            en: 'Generations of housing discrimination contributed to a persistent racial wealth gap.',
            no: 'Generasjoner med boligdiskriminering bidro til et vedvarende rasemessig formuesgap.'
          },
          tags: ['wealth-gap', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Defenders of segregation frequently invoked which constitutional argument?',
            no: 'Forsvarere av segregering påberopte seg ofte hvilket grunnlovsargument?'
          },
          answers: [
            { en: 'The commerce clause', no: 'Handelsklausulen' },
            { en: 'States’ rights', no: 'Delstatenes rettigheter' },
            { en: 'Federal supremacy', no: 'Føderalt overherredømme' },
            { en: 'Judicial review', no: 'Domstolsprøving' }
          ],
          correct: 1,
          explanation: {
            en: 'Segregationists argued that states’ rights allowed them to set their own racial laws.',
            no: 'Segregasjonister hevdet at delstatenes rettigheter tillot dem å fastsette sine egne raselover.'
          },
          tags: ['states-rights', 'federalism']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Booker T. Washington and W.E.B. Du Bois disagreed over what approach to segregation?',
            no: 'Booker T. Washington og W.E.B. Du Bois var uenige om hvilken tilnærming til segregering?'
          },
          answers: [
            { en: 'Migration versus emigration', no: 'Innenlands flytting kontra utvandring' },
            { en: 'Religion versus secularism', no: 'Religion kontra sekularisme' },
            { en: 'Gradual accommodation versus immediate civil rights', no: 'Gradvis tilpasning kontra umiddelbare borgerrettigheter' },
            { en: 'Violence versus pacifism', no: 'Vold kontra pasifisme' }
          ],
          correct: 2,
          explanation: {
            en: 'Washington urged gradual economic self-help, while Du Bois demanded immediate civil and political rights.',
            no: 'Washington oppfordret til gradvis økonomisk selvhjelp, mens Du Bois krevde umiddelbare sivile og politiske rettigheter.'
          },
          tags: ['washington', 'du-bois', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'The Great Migration’s long-term effect was what?',
            no: 'Den store migrasjonens langsiktige effekt var hva?'
          },
          answers: [
            { en: 'Emptying Northern cities', no: 'Å tømme byene i nord' },
            { en: 'Ending segregation nationwide', no: 'Å avslutte segregering i hele landet' },
            { en: 'Reducing the US population', no: 'Å redusere USAs befolkning' },
            { en: 'Transforming the demographics of Northern cities', no: 'Å forandre demografien i byene i nord' }
          ],
          correct: 3,
          explanation: {
            en: 'The Great Migration reshaped Northern cities and built political power that later aided the movement.',
            no: 'Den store migrasjonen omformet byene i nord og bygde politisk makt som senere hjalp bevegelsen.'
          },
          tags: ['great-migration', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'The Brown decision controversially relied in part on what kind of evidence?',
            no: 'Brown-dommen støttet seg, på omdiskutert vis, delvis på hva slags bevis?'
          },
          answers: [
            { en: 'Psychological studies of Black children', no: 'Psykologiske studier av svarte barn' },
            { en: 'Economic data only', no: 'Kun økonomiske data' },
            { en: 'Foreign court rulings', no: 'Utenlandske domstolsavgjørelser' },
            { en: 'Religious doctrine', no: 'Religiøs doktrine' }
          ],
          correct: 0,
          explanation: {
            en: 'The Court cited psychological research, such as the Clark "doll tests," on segregation’s harm to children.',
            no: 'Domstolen viste til psykologisk forskning, som Clarks «dukketester», om segregeringens skade på barn.'
          },
          tags: ['brown-v-board', 'evidence', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'The decades around 1900 of intense racism and segregation are sometimes called what?',
            no: 'Tiårene rundt 1900 med intens rasisme og segregering kalles noen ganger hva?'
          },
          answers: [
            { en: 'The "Reconstruction revival"', no: '«Gjenoppbyggingens gjenkomst»' },
            { en: 'The "nadir of American race relations"', no: '«Bunnpunktet i amerikanske raserelasjoner»' },
            { en: 'The "Gilded Age of equality"', no: '«Den forgylte tidsalderen for likhet»' },
            { en: 'The "Progressive integration"', no: '«Den progressive integreringen»' }
          ],
          correct: 1,
          explanation: {
            en: 'Historians often call this period the "nadir," when racism, lynching, and segregation peaked.',
            no: 'Historikere kaller ofte denne perioden «bunnpunktet», da rasisme, lynsjing og segregering var på sitt verste.'
          },
          tags: ['nadir', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'The NAACP Legal Defense Fund’s strategy against segregation focused mainly on what?',
            no: 'NAACPs Legal Defense Funds strategi mot segregering var hovedsakelig rettet mot hva?'
          },
          answers: [
            { en: 'Mass emigration', no: 'Masseutvandring' },
            { en: 'Boycotts of elections', no: 'Valgboikott' },
            { en: 'Carefully chosen court cases', no: 'Nøye utvalgte rettssaker' },
            { en: 'Armed resistance', no: 'Væpnet motstand' }
          ],
          correct: 2,
          explanation: {
            en: 'Led by lawyers like Thurgood Marshall, the LDF built a series of test cases culminating in Brown.',
            no: 'Ledet av advokater som Thurgood Marshall bygde LDF en rekke prøvesaker som kulminerte i Brown.'
          },
          tags: ['naacp', 'legal-strategy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Brown v. Board’s reasoning later supported challenges to segregation in what other areas?',
            no: 'Begrunnelsen i Brown mot Board støttet senere utfordringer mot segregering på hvilke andre områder?'
          },
          answers: [
            { en: 'Only private clubs', no: 'Bare private klubber' },
            { en: 'Foreign policy', no: 'Utenrikspolitikk' },
            { en: 'Military pensions', no: 'Militærpensjoner' },
            { en: 'Public facilities beyond schools', no: 'Offentlige fasiliteter utover skoler' }
          ],
          correct: 3,
          explanation: {
            en: 'Courts extended Brown’s logic to strike down segregation in parks, beaches, and other public facilities.',
            no: 'Domstolene utvidet logikken i Brown til å oppheve segregering i parker, strender og andre offentlige fasiliteter.'
          },
          tags: ['brown-v-board', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do some historians describe segregation as a system rather than just individual prejudice?',
            no: 'Hvorfor beskriver enkelte historikere segregering som et system snarere enn bare individuelle fordommer?'
          },
          answers: [
            { en: 'It was built into laws, institutions, and the economy', no: 'Den var innbygd i lover, institusjoner og økonomien' },
            { en: 'It only existed in private attitudes', no: 'Den fantes bare i private holdninger' },
            { en: 'It was never enforced', no: 'Den ble aldri håndhevet' },
            { en: 'It affected only voting', no: 'Den påvirket kun stemmegivning' }
          ],
          correct: 0,
          explanation: {
            en: 'Scholars stress that segregation was structural, embedded in laws and institutions, not merely personal bias.',
            no: 'Forskere understreker at segregering var strukturell, forankret i lover og institusjoner, ikke bare personlige fordommer.'
          },
          tags: ['structural', 'interpretation']
        }
      ]
    },
    {
      slug: 'equal-rights-movement',
      name: { en: 'Equal rights movement', no: 'Bevegelsen for like rettigheter' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'Who was the most prominent leader of the American Civil Rights Movement?',
            no: 'Hvem var den mest fremtredende lederen for den amerikanske borgerrettighetsbevegelsen?'
          },
          answers: [
            { en: 'Malcolm X', no: 'Malcolm X' },
            { en: 'Martin Luther King Jr.', no: 'Martin Luther King Jr.' },
            { en: 'Thurgood Marshall', no: 'Thurgood Marshall' },
            { en: 'Jesse Jackson', no: 'Jesse Jackson' }
          ],
          correct: 1,
          explanation: {
            en: 'Martin Luther King Jr. became the best-known leader of the movement, advocating nonviolent protest.',
            no: 'Martin Luther King Jr. ble bevegelsens mest kjente leder og forkjemper for ikkevoldelig protest.'
          },
          tags: ['mlk', 'leaders']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'At which 1963 event did Martin Luther King Jr. deliver his "I Have a Dream" speech?',
            no: 'Under hvilken begivenhet i 1963 holdt Martin Luther King Jr. talen «I Have a Dream»?'
          },
          answers: [
            { en: 'The Montgomery Boycott', no: 'Montgomery-boikotten' },
            { en: 'The Greensboro Sit-in', no: 'Sit-in-aksjonen i Greensboro' },
            { en: 'The March on Washington', no: 'Marsjen mot Washington' },
            { en: 'The Selma March', no: 'Selma-marsjen' }
          ],
          correct: 2,
          explanation: {
            en: 'King gave the "I Have a Dream" speech at the 1963 March on Washington for Jobs and Freedom.',
            no: 'King holdt talen «I Have a Dream» under marsjen mot Washington for arbeid og frihet i 1963.'
          },
          tags: ['mlk', 'march-on-washington']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which 1964 law banned discrimination based on race, color, religion, sex, or national origin?',
            no: 'Hvilken lov fra 1964 forbød diskriminering basert på rase, hudfarge, religion, kjønn eller nasjonal opprinnelse?'
          },
          answers: [
            { en: 'The Emancipation Proclamation', no: 'Frigjøringsproklamasjonen' },
            { en: 'The Fair Deal', no: 'Fair Deal' },
            { en: 'The Voting Rights Act', no: 'Voting Rights Act' },
            { en: 'The Civil Rights Act', no: 'Civil Rights Act' }
          ],
          correct: 3,
          explanation: {
            en: 'The Civil Rights Act of 1964 outlawed major forms of discrimination and segregation.',
            no: 'Civil Rights Act fra 1964 forbød de viktigste formene for diskriminering og segregering.'
          },
          tags: ['civil-rights-act', '1964']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which 1965 law aimed to remove barriers preventing Black Americans from voting?',
            no: 'Hvilken lov fra 1965 hadde som mål å fjerne hindringer som hindret svarte amerikanere i å stemme?'
          },
          answers: [
            { en: 'The Voting Rights Act', no: 'Voting Rights Act' },
            { en: 'The Civil Rights Act', no: 'Civil Rights Act' },
            { en: 'The 13th Amendment', no: 'Det 13. grunnlovstillegget' },
            { en: 'The GI Bill', no: 'GI Bill' }
          ],
          correct: 0,
          explanation: {
            en: 'The Voting Rights Act of 1965 banned discriminatory practices like literacy tests.',
            no: 'Voting Rights Act fra 1965 forbød diskriminerende praksiser som lesekyndighetstester.'
          },
          tags: ['voting-rights-act', '1965']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Rosa Parks is often called the "mother" of which movement?',
            no: 'Rosa Parks kalles ofte «moren» til hvilken bevegelse?'
          },
          answers: [
            { en: 'The Labor Movement', no: 'Arbeiderbevegelsen' },
            { en: 'The Civil Rights Movement', no: 'Borgerrettighetsbevegelsen' },
            { en: 'The Suffrage Movement', no: 'Stemmerettsbevegelsen' },
            { en: 'The Temperance Movement', no: 'Avholdsbevegelsen' }
          ],
          correct: 1,
          explanation: {
            en: 'Rosa Parks is often called the "mother of the Civil Rights Movement" for her 1955 stand.',
            no: 'Rosa Parks kalles ofte «moren til borgerrettighetsbevegelsen» for sin handling i 1955.'
          },
          tags: ['rosa-parks', 'leaders']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What method of protest did Martin Luther King Jr. advocate?',
            no: 'Hvilken protestmetode forfektet Martin Luther King Jr.?'
          },
          answers: [
            { en: 'Secession', no: 'Løsrivelse' },
            { en: 'Armed rebellion', no: 'Væpnet opprør' },
            { en: 'Nonviolent resistance', no: 'Ikkevoldelig motstand' },
            { en: 'Economic isolation', no: 'Økonomisk isolasjon' }
          ],
          correct: 2,
          explanation: {
            en: 'King championed nonviolent resistance, inspired in part by Gandhi.',
            no: 'King forfektet ikkevoldelig motstand, delvis inspirert av Gandhi.'
          },
          tags: ['mlk', 'nonviolence']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The 1965 voting rights marches took place between Selma and which city?',
            no: 'Stemmerettsmarsjene i 1965 fant sted mellom Selma og hvilken by?'
          },
          answers: [
            { en: 'Birmingham', no: 'Birmingham' },
            { en: 'Nashville', no: 'Nashville' },
            { en: 'Atlanta', no: 'Atlanta' },
            { en: 'Montgomery', no: 'Montgomery' }
          ],
          correct: 3,
          explanation: {
            en: 'Activists marched from Selma to Montgomery, Alabama, to demand voting rights.',
            no: 'Aktivister marsjerte fra Selma til Montgomery i Alabama for å kreve stemmerett.'
          },
          tags: ['selma', 'voting']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which civil rights figure was associated with the Nation of Islam and Black empowerment?',
            no: 'Hvilken borgerrettighetsperson var knyttet til Nation of Islam og svart selvstendiggjøring?'
          },
          answers: [
            { en: 'Malcolm X', no: 'Malcolm X' },
            { en: 'Medgar Evers', no: 'Medgar Evers' },
            { en: 'Roy Wilkins', no: 'Roy Wilkins' },
            { en: 'A. Philip Randolph', no: 'A. Philip Randolph' }
          ],
          correct: 0,
          explanation: {
            en: 'Malcolm X was a leading voice of the Nation of Islam and Black self-determination.',
            no: 'Malcolm X var en ledende stemme i Nation of Islam og for svart selvbestemmelse.'
          },
          tags: ['malcolm-x', 'leaders']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The 1960 sit-ins protesting segregated lunch counters began in which city?',
            no: 'Sit-in-aksjonene mot segregerte lunsjdisker i 1960 startet i hvilken by?'
          },
          answers: [
            { en: 'Memphis', no: 'Memphis' },
            { en: 'Greensboro', no: 'Greensboro' },
            { en: 'Detroit', no: 'Detroit' },
            { en: 'Chicago', no: 'Chicago' }
          ],
          correct: 1,
          explanation: {
            en: 'The sit-in movement began in Greensboro, North Carolina, in 1960.',
            no: 'Sit-in-bevegelsen startet i Greensboro i Nord-Carolina i 1960.'
          },
          tags: ['greensboro', 'sit-ins']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What were activists who rode interstate buses to challenge segregation called?',
            no: 'Hva ble aktivistene som reiste med busser mellom delstatene for å utfordre segregering, kalt?'
          },
          answers: [
            { en: 'Rough Riders', no: 'Rough Riders' },
            { en: 'Border Patrol', no: 'Grensepatruljen' },
            { en: 'Freedom Riders', no: 'Frihetsryttere (Freedom Riders)' },
            { en: 'Minutemen', no: 'Minutemen' }
          ],
          correct: 2,
          explanation: {
            en: 'The Freedom Riders rode interstate buses to test desegregation rulings in the South.',
            no: 'Freedom Riders reiste med busser mellom delstatene for å teste desegregeringsdommer i Sør.'
          },
          tags: ['freedom-riders', 'protest']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which year was Martin Luther King Jr. assassinated?',
            no: 'I hvilket år ble Martin Luther King Jr. drept?'
          },
          answers: [
            { en: '1972', no: '1972' },
            { en: '1955', no: '1955' },
            { en: '1963', no: '1963' },
            { en: '1968', no: '1968' }
          ],
          correct: 3,
          explanation: {
            en: 'Martin Luther King Jr. was assassinated in 1968.',
            no: 'Martin Luther King Jr. ble drept i 1968.'
          },
          tags: ['mlk', '1968']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who argued Brown v. Board and became the first Black US Supreme Court justice?',
            no: 'Hvem førte Brown mot Board og ble den første svarte høyesterettsdommeren i USA?'
          },
          answers: [
            { en: 'Thurgood Marshall', no: 'Thurgood Marshall' },
            { en: 'Martin Luther King Jr.', no: 'Martin Luther King Jr.' },
            { en: 'Frederick Douglass', no: 'Frederick Douglass' },
            { en: 'Booker T. Washington', no: 'Booker T. Washington' }
          ],
          correct: 0,
          explanation: {
            en: 'Thurgood Marshall argued Brown v. Board and later became the first Black Supreme Court justice.',
            no: 'Thurgood Marshall førte Brown mot Board og ble senere den første svarte høyesterettsdommeren.'
          },
          tags: ['thurgood-marshall', 'leaders']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Martin Luther King Jr. helped lead which civil rights organization?',
            no: 'Martin Luther King Jr. var med på å lede hvilken borgerrettighetsorganisasjon?'
          },
          answers: [
            { en: 'The NRA', no: 'NRA' },
            { en: 'The SCLC', no: 'SCLC' },
            { en: 'The KKK', no: 'KKK' },
            { en: 'The AFL-CIO', no: 'AFL-CIO' }
          ],
          correct: 1,
          explanation: {
            en: 'King helped found and lead the Southern Christian Leadership Conference (SCLC).',
            no: 'King var med på å grunnlegge og lede Southern Christian Leadership Conference (SCLC).'
          },
          tags: ['sclc', 'organizations']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which earlier amendment had granted Black men the right to vote, though it was often ignored in the South?',
            no: 'Hvilket tidligere grunnlovstillegg hadde gitt svarte menn stemmerett, selv om det ofte ble ignorert i Sør?'
          },
          answers: [
            { en: 'The 16th Amendment', no: 'Det 16. grunnlovstillegget' },
            { en: 'The 22nd Amendment', no: 'Det 22. grunnlovstillegget' },
            { en: 'The 15th Amendment', no: 'Det 15. grunnlovstillegget' },
            { en: 'The 13th Amendment', no: 'Det 13. grunnlovstillegget' }
          ],
          correct: 2,
          explanation: {
            en: 'The 15th Amendment (1870) granted voting rights regardless of race, but the South widely evaded it.',
            no: 'Det 15. grunnlovstillegget (1870) ga stemmerett uavhengig av rase, men Sør omgikk det i stor grad.'
          },
          tags: ['15th-amendment', 'voting']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which city was Martin Luther King Jr. assassinated in 1968?',
            no: 'I hvilken by ble Martin Luther King Jr. drept i 1968?'
          },
          answers: [
            { en: 'Selma', no: 'Selma' },
            { en: 'Birmingham', no: 'Birmingham' },
            { en: 'Atlanta', no: 'Atlanta' },
            { en: 'Memphis', no: 'Memphis' }
          ],
          correct: 3,
          explanation: {
            en: 'King was assassinated in Memphis, Tennessee, in April 1968.',
            no: 'King ble drept i Memphis i Tennessee i april 1968.'
          },
          tags: ['mlk', 'memphis']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did leaders like King favor nonviolent protest?',
            no: 'Hvorfor foretrakk ledere som King ikkevoldelig protest?'
          },
          answers: [
            { en: 'It won moral and public sympathy', no: 'Den vant moralsk og folkelig sympati' },
            { en: 'It was legally required', no: 'Den var lovpålagt' },
            { en: 'It guaranteed quick victory', no: 'Den garanterte rask seier' },
            { en: 'It avoided publicity', no: 'Den unngikk offentlig oppmerksomhet' }
          ],
          correct: 0,
          explanation: {
            en: 'Nonviolence gained moral high ground and public sympathy, especially when protesters faced violence.',
            no: 'Ikkevold ga moralsk overtak og folkelig sympati, særlig når demonstranter møtte vold.'
          },
          tags: ['nonviolence', 'strategy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'A major effect of the Civil Rights Act of 1964 was what?',
            no: 'En viktig effekt av Civil Rights Act fra 1964 var hva?'
          },
          answers: [
            { en: 'Abolishing the Senate', no: 'Å avskaffe Senatet' },
            { en: 'Outlawing segregation in public accommodations', no: 'Å forby segregering på offentlige steder' },
            { en: 'Granting statehood to territories', no: 'Å gi territorier status som delstater' },
            { en: 'Ending the Vietnam War', no: 'Å avslutte Vietnamkrigen' }
          ],
          correct: 1,
          explanation: {
            en: 'The Act banned segregation in hotels, restaurants, and other public accommodations.',
            no: 'Loven forbød segregering på hoteller, restauranter og andre offentlige steder.'
          },
          tags: ['civil-rights-act', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was a direct result of the Voting Rights Act of 1965?',
            no: 'Hva var et direkte resultat av Voting Rights Act fra 1965?'
          },
          answers: [
            { en: 'Lower voter turnout', no: 'Lavere valgdeltakelse' },
            { en: 'A new constitution', no: 'En ny grunnlov' },
            { en: 'A large rise in Black voter registration', no: 'En stor økning i registrering av svarte velgere' },
            { en: 'The end of all elections', no: 'Slutten på alle valg' }
          ],
          correct: 2,
          explanation: {
            en: 'The Act dramatically increased Black voter registration, especially in the Deep South.',
            no: 'Loven økte registreringen av svarte velgere dramatisk, særlig i de dype sørstatene.'
          },
          tags: ['voting-rights-act', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The violent attack on marchers at Selma in 1965 helped build support for what?',
            no: 'Det voldelige angrepet på demonstrantene i Selma i 1965 bidro til å bygge støtte for hva?'
          },
          answers: [
            { en: 'The Civil Rights Act', no: 'Civil Rights Act' },
            { en: 'The New Deal', no: 'New Deal' },
            { en: 'The 13th Amendment', no: 'Det 13. grunnlovstillegget' },
            { en: 'The Voting Rights Act', no: 'Voting Rights Act' }
          ],
          correct: 3,
          explanation: {
            en: 'Images of "Bloody Sunday" in Selma increased pressure to pass the Voting Rights Act.',
            no: 'Bilder fra «Bloody Sunday» i Selma økte presset for å vedta Voting Rights Act.'
          },
          tags: ['selma', 'connections']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Malcolm X’s early approach differ from Martin Luther King Jr.’s?',
            no: 'Hvordan skilte Malcolm X’ tidlige tilnærming seg fra Martin Luther King Jr.s?'
          },
          answers: [
            { en: 'He emphasized self-defense and Black separatism', no: 'Han la vekt på selvforsvar og svart separatisme' },
            { en: 'He rejected all protest', no: 'Han avviste all protest' },
            { en: 'He supported segregation laws', no: 'Han støttet segregeringslover' },
            { en: 'He avoided politics entirely', no: 'Han unngikk politikk helt' }
          ],
          correct: 0,
          explanation: {
            en: 'Malcolm X initially stressed self-defense and Black separatism rather than integration.',
            no: 'Malcolm X la i begynnelsen vekt på selvforsvar og svart separatisme fremfor integrering.'
          },
          tags: ['malcolm-x', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The 1963 March on Washington called for what?',
            no: 'Marsjen mot Washington i 1963 krevde hva?'
          },
          answers: [
            { en: 'States’ rights', no: 'Delstatenes rettigheter' },
            { en: 'Jobs and freedom', no: 'Arbeid og frihet' },
            { en: 'War in Vietnam', no: 'Krig i Vietnam' },
            { en: 'Lower taxes', no: 'Lavere skatter' }
          ],
          correct: 1,
          explanation: {
            en: 'It was officially the March on Washington for Jobs and Freedom.',
            no: 'Den het offisielt marsjen mot Washington for arbeid og frihet.'
          },
          tags: ['march-on-washington', 'goals']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did the Cold War add pressure on the US to address civil rights?',
            no: 'Hvorfor la den kalde krigen press på USA for å håndtere borgerrettigheter?'
          },
          answers: [
            { en: 'It was required by the UN', no: 'Det var pålagt av FN' },
            { en: 'It boosted exports', no: 'Det økte eksporten' },
            { en: 'Segregation harmed America’s image abroad', no: 'Segregering skadet USAs omdømme i utlandet' },
            { en: 'The USSR demanded it directly', no: 'Sovjetunionen krevde det direkte' }
          ],
          correct: 2,
          explanation: {
            en: 'Segregation undermined US claims to lead the "free world," giving Cold War rivals propaganda.',
            no: 'Segregering undergravde USAs påstand om å lede «den frie verden» og ga rivalene i den kalde krigen propaganda.'
          },
          tags: ['cold-war', 'context']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The Freedom Rides led to federal enforcement of desegregation in what?',
            no: 'Frihetsrittene førte til føderal håndheving av desegregering innen hva?'
          },
          answers: [
            { en: 'Public schools', no: 'Offentlige skoler' },
            { en: 'The army', no: 'Hæren' },
            { en: 'Housing', no: 'Boligmarkedet' },
            { en: 'Interstate bus travel', no: 'Bussreiser mellom delstater' }
          ],
          correct: 3,
          explanation: {
            en: 'The Freedom Rides pressured the federal government to enforce desegregation of interstate travel.',
            no: 'Frihetsrittene presset den føderale regjeringen til å håndheve desegregering av reiser mellom delstater.'
          },
          tags: ['freedom-riders', 'consequences']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Television coverage of police violence against protesters tended to do what?',
            no: 'TV-dekning av politivold mot demonstranter hadde en tendens til å gjøre hva?'
          },
          answers: [
            { en: 'Increase national sympathy for the movement', no: 'Øke den nasjonale sympatien for bevegelsen' },
            { en: 'Reduce support for the movement', no: 'Redusere støtten til bevegelsen' },
            { en: 'End the movement', no: 'Avslutte bevegelsen' },
            { en: 'Have no effect at all', no: 'Ikke ha noen effekt i det hele tatt' }
          ],
          correct: 0,
          explanation: {
            en: 'Televised images of brutality shocked the nation and boosted support for civil rights.',
            no: 'TV-bilder av brutalitet sjokkerte nasjonen og økte støtten til borgerrettigheter.'
          },
          tags: ['media', 'connections']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The 1963 Birmingham campaign was notable for televised images of what?',
            no: 'Birmingham-kampanjen i 1963 var kjent for TV-bilder av hva?'
          },
          answers: [
            { en: 'Long voting lines', no: 'Lange valgkøer' },
            { en: 'Police dogs and fire hoses used on protesters', no: 'Politihunder og brannslanger brukt mot demonstranter' },
            { en: 'Peaceful negotiations only', no: 'Bare fredelige forhandlinger' },
            { en: 'Military parades', no: 'Militærparader' }
          ],
          correct: 1,
          explanation: {
            en: 'Images of dogs and fire hoses turned on demonstrators, including children, drew national outrage.',
            no: 'Bilder av hunder og brannslanger rettet mot demonstranter, også barn, vakte nasjonal harme.'
          },
          tags: ['birmingham', 'context']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Which organization mobilized young students in sit-ins and Freedom Rides?',
            no: 'Hvilken organisasjon mobiliserte unge studenter i sit-in-aksjoner og frihetsritt?'
          },
          answers: [
            { en: 'NATO', no: 'NATO' },
            { en: 'OPEC', no: 'OPEC' },
            { en: 'SNCC', no: 'SNCC' },
            { en: 'AARP', no: 'AARP' }
          ],
          correct: 2,
          explanation: {
            en: 'The Student Nonviolent Coordinating Committee (SNCC) organized young activists in direct action.',
            no: 'Student Nonviolent Coordinating Committee (SNCC) organiserte unge aktivister i direkte aksjon.'
          },
          tags: ['sncc', 'organizations']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'After Brown v. Board, the movement increasingly added what to its legal strategy?',
            no: 'Etter Brown mot Board la bevegelsen i økende grad til hva i tillegg til den juridiske strategien?'
          },
          answers: [
            { en: 'Armed militias', no: 'Væpnede militser' },
            { en: 'Mass emigration', no: 'Masseutvandring' },
            { en: 'Withdrawal from politics', no: 'Tilbaketrekking fra politikken' },
            { en: 'Mass direct-action protests', no: 'Massedirekteaksjoner' }
          ],
          correct: 3,
          explanation: {
            en: 'Activists combined court victories with boycotts, marches, and sit-ins to force change.',
            no: 'Aktivister kombinerte rettsseire med boikotter, marsjer og sit-in-aksjoner for å fremtvinge endring.'
          },
          tags: ['strategy', 'direct-action']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'King’s "Letter from Birmingham Jail" defended what?',
            no: 'Kings «Letter from Birmingham Jail» forsvarte hva?'
          },
          answers: [
            { en: 'The use of nonviolent direct action now, not later', no: 'Bruken av ikkevoldelig direkte aksjon nå, ikke senere' },
            { en: 'Violent revolt', no: 'Voldelig opprør' },
            { en: 'Patience and inaction', no: 'Tålmodighet og passivitet' },
            { en: 'Continued segregation', no: 'Fortsatt segregering' }
          ],
          correct: 0,
          explanation: {
            en: 'King argued that justice could not wait and defended urgent nonviolent direct action.',
            no: 'King hevdet at rettferdigheten ikke kunne vente, og forsvarte hastende ikkevoldelig direkte aksjon.'
          },
          tags: ['mlk', 'birmingham']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Frustration over poverty and discrimination in Northern cities contributed to what in the mid-1960s?',
            no: 'Frustrasjon over fattigdom og diskriminering i byene i nord bidro til hva på midten av 1960-tallet?'
          },
          answers: [
            { en: 'The end of the movement', no: 'Slutten på bevegelsen' },
            { en: 'Urban uprisings and riots', no: 'Urbane opprør og opptøyer' },
            { en: 'Falling unemployment', no: 'Fallende arbeidsledighet' },
            { en: 'Mass emigration', no: 'Masseutvandring' }
          ],
          correct: 1,
          explanation: {
            en: 'Northern cities saw uprisings as frustration grew over poverty, policing, and segregation.',
            no: 'Byene i nord opplevde opprør da frustrasjonen vokste over fattigdom, politiarbeid og segregering.'
          },
          tags: ['urban-unrest', 'causes']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'The 24th Amendment (1964) abolished what barrier to voting?',
            no: 'Det 24. grunnlovstillegget (1964) avskaffet hvilken hindring for å stemme?'
          },
          answers: [
            { en: 'Voter ID requirements', no: 'Krav om velger-ID' },
            { en: 'Party registration', no: 'Partiregistrering' },
            { en: 'The poll tax in federal elections', no: 'Stemmeskatten i føderale valg' },
            { en: 'Literacy tests entirely', no: 'Lesekyndighetstester fullstendig' }
          ],
          correct: 2,
          explanation: {
            en: 'The 24th Amendment outlawed the poll tax in federal elections, removing a tool used to block voters.',
            no: 'Det 24. grunnlovstillegget forbød stemmeskatten i føderale valg og fjernet et redskap brukt til å blokkere velgere.'
          },
          tags: ['24th-amendment', 'voting']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'A common scholarly debate concerns whether the movement achieved what?',
            no: 'En vanlig faglig debatt dreier seg om hvorvidt bevegelsen oppnådde hva?'
          },
          answers: [
            { en: 'Complete economic parity', no: 'Fullstendig økonomisk likhet' },
            { en: 'No legal change at all', no: 'Ingen juridisk endring i det hele tatt' },
            { en: 'Only symbolic gains', no: 'Bare symbolske gevinster' },
            { en: 'Legal equality without full economic equality', no: 'Juridisk likhet uten full økonomisk likhet' }
          ],
          correct: 3,
          explanation: {
            en: 'Many historians argue the movement won legal rights but left deep economic inequalities unresolved.',
            no: 'Mange historikere hevder at bevegelsen vant juridiske rettigheter, men lot dype økonomiske ulikheter forbli uløst.'
          },
          tags: ['debate', 'economy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'The rise of "Black Power" in the late 1960s reflected what?',
            no: 'Fremveksten av «Black Power» på slutten av 1960-tallet gjenspeilte hva?'
          },
          answers: [
            { en: 'Frustration with the pace of nonviolent reform', no: 'Frustrasjon over tempoet i ikkevoldelig reform' },
            { en: 'Rejection of all civil rights gains', no: 'Avvisning av alle borgerrettighetsgevinster' },
            { en: 'Support for segregation', no: 'Støtte til segregering' },
            { en: 'A decline of activism', no: 'En nedgang i aktivisme' }
          ],
          correct: 0,
          explanation: {
            en: 'Black Power expressed impatience with slow change and emphasized pride, self-reliance, and power.',
            no: 'Black Power uttrykte utålmodighet med treg endring og la vekt på stolthet, selvhjulpenhet og makt.'
          },
          tags: ['black-power', 'interpretation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'The Civil Rights Movement provided a model later used by which other movements?',
            no: 'Borgerrettighetsbevegelsen ga en modell som senere ble brukt av hvilke andre bevegelser?'
          },
          answers: [
            { en: 'No later movements', no: 'Ingen senere bevegelser' },
            { en: 'Women’s, LGBTQ, and disability rights movements', no: 'Kvinne-, LHBTQ- og funksjonshemmedes rettighetsbevegelser' },
            { en: 'Only labor unions', no: 'Bare fagforeninger' },
            { en: 'Only environmental groups', no: 'Bare miljøgrupper' }
          ],
          correct: 1,
          explanation: {
            en: 'Its tactics and legal arguments inspired women’s, LGBTQ, disability, and other rights movements.',
            no: 'Taktikkene og de juridiske argumentene inspirerte kvinne-, LHBTQ-, funksjonshemmedes og andre rettighetsbevegelser.'
          },
          tags: ['legacy', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'In his final years, King increasingly linked civil rights to what?',
            no: 'I sine siste år knyttet King i økende grad borgerrettigheter til hva?'
          },
          answers: [
            { en: 'Space exploration', no: 'Romfart' },
            { en: 'Tax cuts', no: 'Skattekutt' },
            { en: 'Economic justice and poverty', no: 'Økonomisk rettferdighet og fattigdom' },
            { en: 'Foreign trade', no: 'Utenrikshandel' }
          ],
          correct: 2,
          explanation: {
            en: 'King launched the Poor People’s Campaign, linking racial justice to economic inequality.',
            no: 'King startet Poor People’s Campaign og koblet rasemessig rettferdighet til økonomisk ulikhet.'
          },
          tags: ['mlk', 'poor-peoples-campaign']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Recent historians increasingly emphasize what in explaining the movement’s success?',
            no: 'Nyere historikere legger i økende grad vekt på hva når de forklarer bevegelsens suksess?'
          },
          answers: [
            { en: 'Only the Supreme Court', no: 'Bare Høyesterett' },
            { en: 'Only presidents', no: 'Bare presidenter' },
            { en: 'Foreign aid', no: 'Utenlandsk bistand' },
            { en: 'Local grassroots organizers, not just famous leaders', no: 'Lokale grasrotorganisatorer, ikke bare kjente ledere' }
          ],
          correct: 3,
          explanation: {
            en: 'Scholars now stress the role of local organizers and ordinary activists alongside national figures.',
            no: 'Forskere fremhever nå rollen til lokale organisatorer og vanlige aktivister ved siden av nasjonale skikkelser.'
          },
          tags: ['historiography', 'grassroots']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Historians note that federal government action on civil rights was often what?',
            no: 'Historikere påpeker at den føderale regjeringens handling i borgerrettighetssaker ofte var hva?'
          },
          answers: [
            { en: 'Reactive, prompted by activist pressure', no: 'Reaktiv, fremtvunget av press fra aktivister' },
            { en: 'Always proactive', no: 'Alltid proaktiv' },
            { en: 'Entirely absent', no: 'Helt fraværende' },
            { en: 'Driven by the USSR', no: 'Drevet av Sovjetunionen' }
          ],
          correct: 0,
          explanation: {
            en: 'Presidents and Congress often acted only after activists forced civil rights onto the agenda.',
            no: 'Presidenter og Kongressen handlet ofte først etter at aktivister tvang borgerrettigheter på dagsordenen.'
          },
          tags: ['federal-government', 'interpretation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'A key part of the Voting Rights Act was weakened by which 2013 Supreme Court case?',
            no: 'En sentral del av Voting Rights Act ble svekket av hvilken høyesterettssak fra 2013?'
          },
          answers: [
            { en: 'Obergefell v. Hodges', no: 'Obergefell mot Hodges' },
            { en: 'Shelby County v. Holder', no: 'Shelby County mot Holder' },
            { en: 'Citizens United v. FEC', no: 'Citizens United mot FEC' },
            { en: 'Bush v. Gore', no: 'Bush mot Gore' }
          ],
          correct: 1,
          explanation: {
            en: 'Shelby County v. Holder (2013) struck down the formula for federal preclearance of voting changes.',
            no: 'Shelby County mot Holder (2013) opphevet formelen for føderal forhåndsgodkjenning av valgendringer.'
          },
          tags: ['voting-rights-act', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Which factor is often cited as limiting the movement’s gains for many Black Americans?',
            no: 'Hvilken faktor trekkes ofte frem som en begrensning på bevegelsens gevinster for mange svarte amerikanere?'
          },
          answers: [
            { en: 'The absence of leaders', no: 'Fravær av ledere' },
            { en: 'Overly rapid integration', no: 'Altfor rask integrering' },
            { en: 'Persistent economic and residential inequality', no: 'Vedvarende økonomisk ulikhet og bosegregering' },
            { en: 'A lack of any legislation', no: 'Mangel på lovgivning overhodet' }
          ],
          correct: 2,
          explanation: {
            en: 'Despite legal victories, economic and housing inequality limited real-world progress for many.',
            no: 'Til tross for juridiske seire begrenset økonomisk ulikhet og boligulikhet den reelle fremgangen for mange.'
          },
          tags: ['inequality', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Scholars debate whether nonviolence succeeded mainly because it did what?',
            no: 'Forskere debatterer om ikkevold hovedsakelig lyktes fordi den gjorde hva?'
          },
          answers: [
            { en: 'Threatened armed force', no: 'Truet med væpnet makt' },
            { en: 'Avoided all media', no: 'Unngikk alle medier' },
            { en: 'Had government backing from the start', no: 'Hadde myndighetenes støtte fra starten' },
            { en: 'Exposed the violence of segregationists to the public', no: 'Avdekket segregasjonistenes vold for offentligheten' }
          ],
          correct: 3,
          explanation: {
            en: 'Nonviolent protest provoked visible repression, exposing injustice and swaying public opinion.',
            no: 'Ikkevoldelig protest provoserte synlig undertrykking, avdekket urettferdighet og påvirket opinionen.'
          },
          tags: ['nonviolence', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'After his pilgrimage to Mecca, Malcolm X’s views on race evolved toward what?',
            no: 'Etter pilegrimsreisen til Mekka utviklet Malcolm X’ syn på rase seg mot hva?'
          },
          answers: [
            { en: 'Greater openness to interracial cooperation', no: 'Større åpenhet for samarbeid på tvers av raser' },
            { en: 'Stricter separatism', no: 'Strengere separatisme' },
            { en: 'Abandoning activism', no: 'Å forlate aktivismen' },
            { en: 'Supporting segregation', no: 'Å støtte segregering' }
          ],
          correct: 0,
          explanation: {
            en: 'After Mecca, Malcolm X moved toward a more inclusive view of cooperation across racial lines.',
            no: 'Etter Mekka beveget Malcolm X seg mot et mer inkluderende syn på samarbeid på tvers av raseskiller.'
          },
          tags: ['malcolm-x', 'interpretation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Some scholars argue the popular memory of King’s "Dream" speech does what?',
            no: 'Enkelte forskere hevder at den folkelige erindringen av Kings «Dream»-tale gjør hva?'
          },
          answers: [
            { en: 'Ignores the audience', no: 'Ignorerer publikum' },
            { en: 'Downplays his more radical critiques of inequality', no: 'Toner ned hans mer radikale kritikk av ulikhet' },
            { en: 'Exaggerates his radicalism', no: 'Overdriver hans radikalisme' },
            { en: 'Misquotes the date', no: 'Siterer datoen feil' }
          ],
          correct: 1,
          explanation: {
            en: 'Critics argue the sanitized memory of the speech obscures King’s sharper critiques of economic injustice.',
            no: 'Kritikere hevder at den utvannede erindringen av talen skjuler Kings skarpere kritikk av økonomisk urettferdighet.'
          },
          tags: ['mlk', 'memory', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'One contested long-term policy legacy of the movement is what?',
            no: 'En omstridt langsiktig politisk arv etter bevegelsen er hva?'
          },
          answers: [
            { en: 'Prohibition', no: 'Alkoholforbudet' },
            { en: 'The military draft', no: 'Verneplikten' },
            { en: 'Affirmative action', no: 'Kvotering (affirmative action)' },
            { en: 'The gold standard', no: 'Gullstandarden' }
          ],
          correct: 2,
          explanation: {
            en: 'Affirmative action, meant to remedy past discrimination, remains debated decades later.',
            no: 'Kvotering, ment å rette opp tidligere diskriminering, er fortsatt omdiskutert tiår senere.'
          },
          tags: ['affirmative-action', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Figures like Ella Baker and Fannie Lou Hamer highlight what historiographical point?',
            no: 'Skikkelser som Ella Baker og Fannie Lou Hamer fremhever hvilket historiografisk poeng?'
          },
          answers: [
            { en: 'That women were absent from the movement', no: 'At kvinner var fraværende fra bevegelsen' },
            { en: 'That only men led the movement', no: 'At bare menn ledet bevegelsen' },
            { en: 'That leadership did not matter', no: 'At lederskap ikke spilte noen rolle' },
            { en: 'Women’s central but often overlooked leadership', no: 'Kvinners sentrale, men ofte oversette lederskap' }
          ],
          correct: 3,
          explanation: {
            en: 'Historians stress that women provided crucial leadership that traditional accounts often neglected.',
            no: 'Historikere understreker at kvinner stod for avgjørende lederskap som tradisjonelle fremstillinger ofte forsømte.'
          },
          tags: ['women', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'The passage of major civil rights laws in 1964–65 is usually attributed to what combination?',
            no: 'Vedtaket av de store borgerrettighetslovene i 1964–65 tilskrives som regel hvilken kombinasjon?'
          },
          answers: [
            { en: 'Activism, presidential leadership, and public opinion', no: 'Aktivisme, presidentlederskap og opinion' },
            { en: 'A single court ruling', no: 'En enkelt rettsavgjørelse' },
            { en: 'Foreign pressure alone', no: 'Utenlandsk press alene' },
            { en: 'An economic depression', no: 'En økonomisk depresjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Most historians point to a mix of grassroots activism, leaders like Johnson, and shifting public opinion.',
            no: 'De fleste historikere peker på en blanding av grasrotaktivisme, ledere som Johnson og en skiftende opinion.'
          },
          tags: ['legislation', 'multiple-causes']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Most historians conclude the movement fundamentally transformed what?',
            no: 'De fleste historikere konkluderer med at bevegelsen grunnleggende forandret hva?'
          },
          answers: [
            { en: 'The party system only', no: 'Bare partisystemet' },
            { en: 'The legal and political status of Black Americans', no: 'Den juridiske og politiske statusen til svarte amerikanere' },
            { en: 'The US economy entirely', no: 'Hele den amerikanske økonomien' },
            { en: 'American foreign policy', no: 'Amerikansk utenrikspolitikk' }
          ],
          correct: 1,
          explanation: {
            en: 'The movement transformed the legal and political standing of Black Americans, even as inequalities persisted.',
            no: 'Bevegelsen forandret den juridiske og politiske stillingen til svarte amerikanere, selv om ulikheter vedvarte.'
          },
          tags: ['legacy', 'assessment']
        }
      ]
    },
    {
      slug: 'key-figures',
      name: { en: 'Key figures', no: 'Nøkkelpersoner' },
      questions: []
    },
    {
      slug: 'modern-impact',
      name: { en: 'Modern impact', no: 'Moderne betydning' },
      questions: []
    }
  ]
};
