import type { SeedSubcategory } from '../types';

export const spreadOfMajorReligions: SeedSubcategory = {
  slug: 'spread-of-major-religions',
  name: { en: 'Spread of major religions', no: 'Utbredelsen av de store religionene' },
  modules: [
    {
      slug: 'christianity',
      name: { en: 'Christianity', no: 'Kristendommen' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'Who is the central figure of Christianity?',
            no: 'Hvem er den sentrale skikkelsen i kristendommen?'
          },
          answers: [
            { en: 'Jesus of Nazareth', no: 'Jesus fra Nasaret' },
            { en: 'Muhammad', no: 'Muhammad' },
            { en: 'Moses', no: 'Moses' },
            { en: 'Abraham', no: 'Abraham' }
          ],
          correct: 0,
          explanation: {
            en: 'Christianity centers on the life and teachings of Jesus of Nazareth.',
            no: 'Kristendommen er sentrert om livet og læren til Jesus fra Nasaret.'
          },
          tags: ['jesus', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the holy book of Christianity?',
            no: 'Hva er kristendommens hellige bok?'
          },
          answers: [
            { en: 'The Quran', no: 'Koranen' },
            { en: 'The Bible', no: 'Bibelen' },
            { en: 'The Torah', no: 'Toraen' },
            { en: 'The Vedas', no: 'Vedaene' }
          ],
          correct: 1,
          explanation: {
            en: 'The Christian holy book is the Bible, made up of the Old and New Testaments.',
            no: 'Kristendommens hellige bok er Bibelen, som består av Det gamle og Det nye testamente.'
          },
          tags: ['bible', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which region did Christianity first emerge?',
            no: 'I hvilken region oppstod kristendommen først?'
          },
          answers: [
            { en: 'Scandinavia', no: 'Skandinavia' },
            { en: 'The Middle East (Roman Judea)', no: 'Midtøsten (romersk Judea)' },
            { en: 'India', no: 'India' },
            { en: 'China', no: 'Kina' }
          ],
          correct: 1,
          explanation: {
            en: 'Christianity began in the 1st century in Roman-controlled Judea in the Middle East.',
            no: 'Kristendommen oppstod på 100-tallet i romersk-kontrollerte Judea i Midtøsten.'
          },
          tags: ['origins', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What do Christians call the four accounts of Jesus’s life in the New Testament?',
            no: 'Hva kaller kristne de fire beretningene om Jesu liv i Det nye testamente?'
          },
          answers: [
            { en: 'The Gospels', no: 'Evangeliene' },
            { en: 'The Psalms', no: 'Salmene' },
            { en: 'The Epistles', no: 'Brevene' },
            { en: 'The Proverbs', no: 'Ordspråkene' }
          ],
          correct: 0,
          explanation: {
            en: 'The four Gospels—Matthew, Mark, Luke, and John—describe Jesus’s life and teachings.',
            no: 'De fire evangeliene – Matteus, Markus, Lukas og Johannes – beskriver Jesu liv og lære.'
          },
          tags: ['gospels', 'bible']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the most important symbol of Christianity?',
            no: 'Hva er kristendommens viktigste symbol?'
          },
          answers: [
            { en: 'The crescent', no: 'Halvmånen' },
            { en: 'The cross', no: 'Korset' },
            { en: 'The lotus', no: 'Lotusen' },
            { en: 'The star', no: 'Stjernen' }
          ],
          correct: 1,
          explanation: {
            en: 'The cross symbolizes the crucifixion of Jesus and is the central Christian symbol.',
            no: 'Korset symboliserer korsfestelsen av Jesus og er det sentrale kristne symbolet.'
          },
          tags: ['cross', 'symbols']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which Christian holiday celebrates the birth of Jesus?',
            no: 'Hvilken kristen høytid feirer Jesu fødsel?'
          },
          answers: [
            { en: 'Easter', no: 'Påske' },
            { en: 'Pentecost', no: 'Pinse' },
            { en: 'Christmas', no: 'Jul' },
            { en: 'Lent', no: 'Faste' }
          ],
          correct: 2,
          explanation: {
            en: 'Christmas celebrates the birth of Jesus, traditionally on 25 December.',
            no: 'Julen feirer Jesu fødsel, tradisjonelt 25. desember.'
          },
          tags: ['christmas', 'holidays']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which Christian holiday celebrates the resurrection of Jesus?',
            no: 'Hvilken kristen høytid feirer Jesu oppstandelse?'
          },
          answers: [
            { en: 'Easter', no: 'Påske' },
            { en: 'Christmas', no: 'Jul' },
            { en: 'Advent', no: 'Advent' },
            { en: 'Epiphany', no: 'Helligtrekongersdag' }
          ],
          correct: 0,
          explanation: {
            en: 'Easter celebrates the resurrection of Jesus from the dead.',
            no: 'Påsken feirer Jesu oppstandelse fra de døde.'
          },
          tags: ['easter', 'holidays']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which empire spread Christianity widely after adopting it?',
            no: 'Hvilket imperium spredte kristendommen vidt etter å ha tatt den til seg?'
          },
          answers: [
            { en: 'The Roman Empire', no: 'Romerriket' },
            { en: 'The Mongol Empire', no: 'Mongolriket' },
            { en: 'The Aztec Empire', no: 'Aztekerriket' },
            { en: 'The Persian Empire', no: 'Perserriket' }
          ],
          correct: 0,
          explanation: {
            en: 'The Roman Empire helped spread Christianity across Europe and the Mediterranean.',
            no: 'Romerriket bidro til å spre kristendommen over Europa og Middelhavsområdet.'
          },
          tags: ['rome', 'spread']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Followers of Jesus who helped spread his message are called what?',
            no: 'Hva kalles Jesu følgere som bidro til å spre budskapet hans?'
          },
          answers: [
            { en: 'Apostles', no: 'Apostler' },
            { en: 'Pharaohs', no: 'Faraoer' },
            { en: 'Caliphs', no: 'Kalifer' },
            { en: 'Monks', no: 'Munker' }
          ],
          correct: 0,
          explanation: {
            en: 'The apostles were Jesus’s close followers who spread Christianity after his death.',
            no: 'Apostlene var Jesu nære følgere som spredte kristendommen etter hans død.'
          },
          tags: ['apostles', 'spread']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the leader of the Roman Catholic Church called?',
            no: 'Hva kalles lederen for Den romersk-katolske kirke?'
          },
          answers: [
            { en: 'The Pope', no: 'Paven' },
            { en: 'The Sultan', no: 'Sultanen' },
            { en: 'The Dalai Lama', no: 'Dalai Lama' },
            { en: 'The Rabbi', no: 'Rabbineren' }
          ],
          correct: 0,
          explanation: {
            en: 'The Pope is the head of the Roman Catholic Church, based in Vatican City.',
            no: 'Paven er overhodet for Den romersk-katolske kirke, med sete i Vatikanstaten.'
          },
          tags: ['pope', 'catholicism']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What do Christians call the belief in one God in three persons?',
            no: 'Hva kaller kristne troen på én Gud i tre personer?'
          },
          answers: [
            { en: 'The Trinity', no: 'Treenigheten' },
            { en: 'The Covenant', no: 'Pakten' },
            { en: 'The Exodus', no: 'Utvandringen' },
            { en: 'The Reformation', no: 'Reformasjonen' }
          ],
          correct: 0,
          explanation: {
            en: 'The Trinity is the Christian belief in God as Father, Son, and Holy Spirit.',
            no: 'Treenigheten er den kristne troen på Gud som Faderen, Sønnen og Den hellige ånd.'
          },
          tags: ['trinity', 'beliefs']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which city was Jesus crucified, according to the Gospels?',
            no: 'I hvilken by ble Jesus korsfestet, ifølge evangeliene?'
          },
          answers: [
            { en: 'Rome', no: 'Roma' },
            { en: 'Jerusalem', no: 'Jerusalem' },
            { en: 'Athens', no: 'Aten' },
            { en: 'Alexandria', no: 'Alexandria' }
          ],
          correct: 1,
          explanation: {
            en: 'According to the Gospels, Jesus was crucified in Jerusalem.',
            no: 'Ifølge evangeliene ble Jesus korsfestet i Jerusalem.'
          },
          tags: ['jerusalem', 'jesus']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which ceremony welcomes a person into the Christian faith with water?',
            no: 'Hvilken seremoni ønsker en person velkommen inn i den kristne tro med vann?'
          },
          answers: [
            { en: 'Baptism', no: 'Dåp' },
            { en: 'Fasting', no: 'Faste' },
            { en: 'Pilgrimage', no: 'Pilegrimsreise' },
            { en: 'Coronation', no: 'Kroning' }
          ],
          correct: 0,
          explanation: {
            en: 'Baptism uses water to symbolize cleansing and entry into the Christian community.',
            no: 'Dåpen bruker vann for å symbolisere renselse og inntreden i det kristne fellesskapet.'
          },
          tags: ['baptism', 'practices']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What are the two main parts of the Christian Bible?',
            no: 'Hva er de to hoveddelene av den kristne bibelen?'
          },
          answers: [
            { en: 'The Old Testament and the New Testament', no: 'Det gamle testamente og Det nye testamente' },
            { en: 'The Quran and the Hadith', no: 'Koranen og hadithene' },
            { en: 'The Vedas and the Upanishads', no: 'Vedaene og upanishadene' },
            { en: 'The Talmud and the Mishnah', no: 'Talmud og Misjna' }
          ],
          correct: 0,
          explanation: {
            en: 'The Bible is divided into the Old Testament and the New Testament.',
            no: 'Bibelen er delt inn i Det gamle testamente og Det nye testamente.'
          },
          tags: ['bible', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Roughly how many followers does Christianity have, making it the world’s largest religion?',
            no: 'Omtrent hvor mange tilhengere har kristendommen, noe som gjør den til verdens største religion?'
          },
          answers: [
            { en: 'About 2 billion', no: 'Omtrent 2 milliarder' },
            { en: 'About 50 million', no: 'Omtrent 50 millioner' },
            { en: 'About 200 million', no: 'Omtrent 200 millioner' },
            { en: 'About 10 million', no: 'Omtrent 10 millioner' }
          ],
          correct: 0,
          explanation: {
            en: 'With roughly 2 billion followers, Christianity is the world’s largest religion.',
            no: 'Med omtrent 2 milliarder tilhengere er kristendommen verdens største religion.'
          },
          tags: ['demographics', 'basics']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the Roman emperor Constantine influence Christianity?',
            no: 'Hvordan påvirket den romerske keiseren Konstantin kristendommen?'
          },
          answers: [
            { en: 'He legalized it and supported its spread', no: 'Han gjorde den lovlig og støttet spredningen' },
            { en: 'He banned it permanently', no: 'Han forbød den for alltid' },
            { en: 'He founded Islam', no: 'Han grunnla islam' },
            { en: 'He destroyed all churches', no: 'Han ødela alle kirker' }
          ],
          correct: 0,
          explanation: {
            en: 'Constantine’s Edict of Milan (313) legalized Christianity, aiding its rapid spread.',
            no: 'Konstantins Milano-edikt (313) gjorde kristendommen lovlig og bidro til den raske spredningen.'
          },
          tags: ['constantine', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was a major effect of the Great Schism of 1054?',
            no: 'Hva var en viktig følge av Det store skisma i 1054?'
          },
          answers: [
            { en: 'It split Christianity into Catholic and Orthodox branches', no: 'Den splittet kristendommen i en katolsk og en ortodoks gren' },
            { en: 'It created Islam', no: 'Den skapte islam' },
            { en: 'It united all churches', no: 'Den forente alle kirker' },
            { en: 'It abolished the papacy', no: 'Den avskaffet pavedømmet' }
          ],
          correct: 0,
          explanation: {
            en: 'The Great Schism divided Christianity into the Roman Catholic and Eastern Orthodox churches.',
            no: 'Det store skisma delte kristendommen i Den romersk-katolske og Den østlig-ortodokse kirke.'
          },
          tags: ['great-schism', 'divisions']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Who began the Protestant Reformation in 1517?',
            no: 'Hvem startet den protestantiske reformasjonen i 1517?'
          },
          answers: [
            { en: 'Martin Luther', no: 'Martin Luther' },
            { en: 'Pope Leo X', no: 'Pave Leo X' },
            { en: 'John Calvin alone', no: 'Bare Jean Calvin' },
            { en: 'Emperor Charles V', no: 'Keiser Karl V' }
          ],
          correct: 0,
          explanation: {
            en: 'Martin Luther’s 95 Theses in 1517 sparked the Protestant Reformation.',
            no: 'Martin Luthers 95 teser i 1517 utløste den protestantiske reformasjonen.'
          },
          tags: ['reformation', 'luther']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the printing press affect the spread of Christianity?',
            no: 'Hvordan påvirket trykkpressen spredningen av kristendommen?'
          },
          answers: [
            { en: 'It made Bibles cheaper and more widely available', no: 'Den gjorde bibler billigere og mer tilgjengelige' },
            { en: 'It banned reading the Bible', no: 'Den forbød å lese Bibelen' },
            { en: 'It had no effect on religion', no: 'Den hadde ingen effekt på religion' },
            { en: 'It destroyed all churches', no: 'Den ødela alle kirker' }
          ],
          correct: 0,
          explanation: {
            en: 'The printing press allowed mass production of Bibles, spreading Christian ideas widely.',
            no: 'Trykkpressen muliggjorde masseproduksjon av bibler og spredte kristne ideer vidt.'
          },
          tags: ['printing-press', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did European colonization affect Christianity globally?',
            no: 'Hvordan påvirket europeisk kolonisering kristendommen globalt?'
          },
          answers: [
            { en: 'It spread Christianity to the Americas, Africa, and Asia', no: 'Den spredte kristendommen til Amerika, Afrika og Asia' },
            { en: 'It confined Christianity to Europe', no: 'Den begrenset kristendommen til Europa' },
            { en: 'It ended missionary work', no: 'Den avsluttet misjonsarbeid' },
            { en: 'It had no global impact', no: 'Den hadde ingen global virkning' }
          ],
          correct: 0,
          explanation: {
            en: 'European colonizers and missionaries spread Christianity across the globe.',
            no: 'Europeiske kolonimakter og misjonærer spredte kristendommen over hele kloden.'
          },
          tags: ['colonization', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was a key teaching that helped early Christianity attract followers?',
            no: 'Hva var en sentral lære som hjalp den tidlige kristendommen med å tiltrekke seg tilhengere?'
          },
          answers: [
            { en: 'A message of salvation open to all people', no: 'Et budskap om frelse åpent for alle mennesker' },
            { en: 'A ban on all worship', no: 'Et forbud mot all tilbedelse' },
            { en: 'Exclusive membership for the rich', no: 'Eksklusivt medlemskap for de rike' },
            { en: 'Rejection of all moral rules', no: 'Avvisning av alle moralske regler' }
          ],
          correct: 0,
          explanation: {
            en: 'Christianity’s promise of salvation for all, regardless of status, drew many converts.',
            no: 'Kristendommens løfte om frelse for alle, uansett status, tiltrakk mange konvertitter.'
          },
          tags: ['teachings', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Who was Paul (the Apostle) and why was he important?',
            no: 'Hvem var Paulus (apostelen), og hvorfor var han viktig?'
          },
          answers: [
            { en: 'A missionary whose letters spread Christianity widely', no: 'En misjonær hvis brev spredte kristendommen vidt' },
            { en: 'A Roman emperor', no: 'En romersk keiser' },
            { en: 'A Jewish high priest who opposed Jesus', no: 'En jødisk yppersteprest som motarbeidet Jesus' },
            { en: 'The founder of Islam', no: 'Grunnleggeren av islam' }
          ],
          correct: 0,
          explanation: {
            en: 'Paul traveled widely and wrote letters that shaped early Christian theology and spread the faith.',
            no: 'Paulus reiste mye og skrev brev som formet tidlig kristen teologi og spredte troen.'
          },
          tags: ['paul', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did monasteries help preserve and spread Christianity in medieval Europe?',
            no: 'Hvordan bidro klostre til å bevare og spre kristendommen i middelalderens Europa?'
          },
          answers: [
            { en: 'They copied texts, educated people, and converted regions', no: 'De kopierte tekster, utdannet folk og konverterte regioner' },
            { en: 'They banned all books', no: 'De forbød alle bøker' },
            { en: 'They had no religious role', no: 'De hadde ingen religiøs rolle' },
            { en: 'They opposed Christianity', no: 'De motarbeidet kristendommen' }
          ],
          correct: 0,
          explanation: {
            en: 'Monasteries preserved learning, copied scriptures, and were centers of missionary activity.',
            no: 'Klostre bevarte lærdom, kopierte skrifter og var sentre for misjonsvirksomhet.'
          },
          tags: ['monasteries', 'medieval']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What were the Crusades?',
            no: 'Hva var korstogene?'
          },
          answers: [
            { en: 'Religious wars largely aimed at controlling the Holy Land', no: 'Religiøse kriger som i stor grad hadde som mål å kontrollere Det hellige land' },
            { en: 'Peaceful trade missions to Asia', no: 'Fredelige handelsekspedisjoner til Asia' },
            { en: 'Scientific expeditions', no: 'Vitenskapelige ekspedisjoner' },
            { en: 'Festivals held in Rome', no: 'Festivaler holdt i Roma' }
          ],
          correct: 0,
          explanation: {
            en: 'The Crusades were medieval religious wars, mainly to control Jerusalem and the Holy Land.',
            no: 'Korstogene var religiøse kriger i middelalderen, hovedsakelig for å kontrollere Jerusalem og Det hellige land.'
          },
          tags: ['crusades', 'medieval']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the Counter-Reformation respond to Protestantism?',
            no: 'Hvordan reagerte motreformasjonen på protestantismen?'
          },
          answers: [
            { en: 'The Catholic Church reformed itself and reaffirmed doctrine', no: 'Den katolske kirke reformerte seg selv og bekreftet læren på ny' },
            { en: 'It abolished the Catholic Church', no: 'Den avskaffet Den katolske kirke' },
            { en: 'It merged with Protestantism', no: 'Den slo seg sammen med protestantismen' },
            { en: 'It created Judaism', no: 'Den skapte jødedommen' }
          ],
          correct: 0,
          explanation: {
            en: 'The Counter-Reformation involved Catholic reforms and a reassertion of doctrine against Protestantism.',
            no: 'Motreformasjonen innebar katolske reformer og en ny bekreftelse av læren mot protestantismen.'
          },
          tags: ['counter-reformation', 'divisions']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Which three branches make up most of Christianity today?',
            no: 'Hvilke tre grener utgjør mesteparten av kristendommen i dag?'
          },
          answers: [
            { en: 'Catholic, Orthodox, and Protestant', no: 'Katolsk, ortodoks og protestantisk' },
            { en: 'Sunni, Shia, and Sufi', no: 'Sunni, sjia og sufi' },
            { en: 'Theravada, Mahayana, and Vajrayana', no: 'Theravada, mahayana og vajrayana' },
            { en: 'Orthodox, Reform, and Conservative', no: 'Ortodoks, reform og konservativ' }
          ],
          correct: 0,
          explanation: {
            en: 'Christianity’s three main branches are Catholic, Eastern Orthodox, and Protestant.',
            no: 'Kristendommens tre hovedgrener er katolsk, østlig-ortodoks og protestantisk.'
          },
          tags: ['branches', 'divisions']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why is Pentecost important in Christian tradition?',
            no: 'Hvorfor er pinsen viktig i kristen tradisjon?'
          },
          answers: [
            { en: 'It marks the Holy Spirit coming to the apostles, often called the church’s birth', no: 'Den markerer at Den hellige ånd kom til apostlene, ofte kalt kirkens fødsel' },
            { en: 'It marks Jesus’s birth', no: 'Den markerer Jesu fødsel' },
            { en: 'It celebrates the printing of the Bible', no: 'Den feirer trykkingen av Bibelen' },
            { en: 'It marks the start of Lent', no: 'Den markerer begynnelsen på fasten' }
          ],
          correct: 0,
          explanation: {
            en: 'Pentecost commemorates the Holy Spirit descending on the apostles, seen as the birth of the church.',
            no: 'Pinsen minnes at Den hellige ånd kom over apostlene, sett på som kirkens fødsel.'
          },
          tags: ['pentecost', 'holidays']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the conversion of rulers help spread Christianity in Europe?',
            no: 'Hvordan bidro herskeres omvendelse til å spre kristendommen i Europa?'
          },
          answers: [
            { en: 'When kings converted, their subjects often followed', no: 'Når konger konverterte, fulgte ofte undersåttene etter' },
            { en: 'It made Christianity illegal', no: 'Det gjorde kristendommen ulovlig' },
            { en: 'Rulers banned the faith', no: 'Herskere forbød troen' },
            { en: 'It had no effect on ordinary people', no: 'Det hadde ingen effekt på vanlige folk' }
          ],
          correct: 0,
          explanation: {
            en: 'The conversion of kings and nobles often led entire kingdoms to adopt Christianity.',
            no: 'Omvendelsen av konger og adelsmenn førte ofte til at hele kongeriker tok til seg kristendommen.'
          },
          tags: ['conversion', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What role did missionaries play in Christianity’s growth?',
            no: 'Hvilken rolle spilte misjonærer i kristendommens vekst?'
          },
          answers: [
            { en: 'They traveled to convert people in new regions', no: 'De reiste for å omvende folk i nye regioner' },
            { en: 'They forbade travel', no: 'De forbød reising' },
            { en: 'They opposed teaching the faith', no: 'De motarbeidet å lære bort troen' },
            { en: 'They only stayed in one city', no: 'De holdt seg bare i én by' }
          ],
          correct: 0,
          explanation: {
            en: 'Missionaries spread Christianity by preaching and converting people in distant lands.',
            no: 'Misjonærer spredte kristendommen ved å forkynne og omvende folk i fjerne land.'
          },
          tags: ['missionaries', 'spread']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians debate the role of the Roman Empire in Christianity’s success?',
            no: 'Hvorfor diskuterer historikere Romerrikets rolle i kristendommens framgang?'
          },
          answers: [
            { en: 'Its roads, trade, and stability both aided spread and earlier persecution shaped the faith', no: 'Veiene, handelen og stabiliteten hjalp spredningen, mens tidligere forfølgelse formet troen' },
            { en: 'The empire never interacted with Christianity', no: 'Imperiet hadde aldri kontakt med kristendommen' },
            { en: 'Rome only existed after Christianity', no: 'Roma fantes bare etter kristendommen' },
            { en: 'The empire banned all travel', no: 'Imperiet forbød all reising' }
          ],
          correct: 0,
          explanation: {
            en: 'Scholars debate how Roman infrastructure, persecution, and later patronage each shaped Christianity’s rise.',
            no: 'Forskere diskuterer hvordan romersk infrastruktur, forfølgelse og senere støtte hver formet kristendommens framvekst.'
          },
          tags: ['rome', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the Council of Nicaea (325) shape Christian doctrine?',
            no: 'Hvordan formet konsilet i Nikea (325) kristen lære?'
          },
          answers: [
            { en: 'It defined core beliefs about the nature of Christ', no: 'Det definerte sentrale trosspørsmål om Kristi natur' },
            { en: 'It abolished the Bible', no: 'Det avskaffet Bibelen' },
            { en: 'It founded Protestantism', no: 'Det grunnla protestantismen' },
            { en: 'It ended all church councils', no: 'Det avsluttet alle kirkemøter' }
          ],
          correct: 0,
          explanation: {
            en: 'The Council of Nicaea addressed disputes over Christ’s divinity and produced the Nicene Creed.',
            no: 'Konsilet i Nikea behandlet stridigheter om Kristi guddommelighet og utarbeidet den nikenske trosbekjennelse.'
          },
          tags: ['nicaea', 'doctrine']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What long-term effects did the Reformation have beyond religion?',
            no: 'Hvilke langsiktige virkninger fikk reformasjonen utover religion?'
          },
          answers: [
            { en: 'It influenced literacy, nationalism, and politics in Europe', no: 'Den påvirket lesekyndighet, nasjonalisme og politikk i Europa' },
            { en: 'It had no effect outside churches', no: 'Den hadde ingen virkning utenfor kirkene' },
            { en: 'It ended all European trade', no: 'Den avsluttet all europeisk handel' },
            { en: 'It united Europe under one church', no: 'Den forente Europa under én kirke' }
          ],
          correct: 0,
          explanation: {
            en: 'The Reformation boosted vernacular literacy and reshaped politics, contributing to nation-states and conflict.',
            no: 'Reformasjonen styrket lesekyndighet på morsmålet og endret politikken, og bidro til nasjonalstater og konflikt.'
          },
          tags: ['reformation', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the relationship between Christianity and colonialism debated by historians?',
            no: 'Hvorfor diskuteres forholdet mellom kristendom og kolonialisme av historikere?'
          },
          answers: [
            { en: 'Missions spread the faith but were often tied to conquest and disruption', no: 'Misjon spredte troen, men var ofte knyttet til erobring og oppløsning av samfunn' },
            { en: 'Colonialism had no link to religion', no: 'Kolonialisme hadde ingen tilknytning til religion' },
            { en: 'Missionaries never left Europe', no: 'Misjonærer forlot aldri Europa' },
            { en: 'Christianity opposed all expansion', no: 'Kristendommen motsatte seg all ekspansjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Scholars debate how missionary work both spread Christianity and was entangled with colonial domination.',
            no: 'Forskere diskuterer hvordan misjonsarbeid både spredte kristendommen og var sammenvevd med kolonial dominans.'
          },
          tags: ['colonialism', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did translating the Bible into local languages affect Christianity?',
            no: 'Hvordan påvirket oversettelsen av Bibelen til lokale språk kristendommen?'
          },
          answers: [
            { en: 'It broadened access but also enabled new interpretations and divisions', no: 'Den utvidet tilgangen, men muliggjorde også nye tolkninger og splittelser' },
            { en: 'It made the Bible unreadable', no: 'Den gjorde Bibelen uleselig' },
            { en: 'It had no doctrinal impact', no: 'Den hadde ingen læremessig virkning' },
            { en: 'It unified all churches permanently', no: 'Den forente alle kirker for alltid' }
          ],
          correct: 0,
          explanation: {
            en: 'Vernacular Bibles let more people read scripture directly, fueling reform movements and new denominations.',
            no: 'Bibler på morsmålet lot flere lese skriften direkte, noe som næret reformbevegelser og nye trossamfunn.'
          },
          tags: ['translation', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did Christianity grow rapidly in the Global South in the 20th century?',
            no: 'Hvorfor vokste kristendommen raskt i det globale sør på 1900-tallet?'
          },
          answers: [
            { en: 'Local leadership, missions, and cultural adaptation drove growth', no: 'Lokalt lederskap, misjon og kulturell tilpasning drev veksten' },
            { en: 'European governments forced everyone to convert', no: 'Europeiske myndigheter tvang alle til å konvertere' },
            { en: 'It was banned in Europe', no: 'Den ble forbudt i Europa' },
            { en: 'No missionaries were involved', no: 'Ingen misjonærer var involvert' }
          ],
          correct: 0,
          explanation: {
            en: 'Indigenous leadership and adaptation to local cultures helped Christianity flourish in Africa, Asia, and Latin America.',
            no: 'Lokalt lederskap og tilpasning til lokale kulturer bidro til at kristendommen blomstret i Afrika, Asia og Latin-Amerika.'
          },
          tags: ['global-south', 'modern']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How do historians interpret the persecution of early Christians under Rome?',
            no: 'Hvordan tolker historikere forfølgelsen av de første kristne under Roma?'
          },
          answers: [
            { en: 'It was sporadic and local more often than constant and empire-wide', no: 'Den var oftere sporadisk og lokal enn konstant og riksomfattende' },
            { en: 'It never actually happened', no: 'Den skjedde aldri egentlig' },
            { en: 'It was ordered every year by every emperor', no: 'Den ble beordret hvert år av hver keiser' },
            { en: 'It only targeted Roman officials', no: 'Den rammet bare romerske embetsmenn' }
          ],
          correct: 0,
          explanation: {
            en: 'Modern scholarship suggests persecution was often intermittent and regional rather than systematic across the empire.',
            no: 'Moderne forskning antyder at forfølgelsen ofte var periodisk og regional snarere enn systematisk i hele riket.'
          },
          tags: ['persecution', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What made Eastern Orthodoxy distinct as it spread into the Slavic world?',
            no: 'Hva gjorde den østlige ortodoksien særegen da den spredte seg til den slaviske verden?'
          },
          answers: [
            { en: 'Use of local languages and close ties between church and state', no: 'Bruk av lokale språk og nære bånd mellom kirke og stat' },
            { en: 'A rejection of all liturgy', no: 'En avvisning av all liturgi' },
            { en: 'Allegiance to the Pope in Rome', no: 'Lojalitet til paven i Roma' },
            { en: 'A ban on church buildings', no: 'Et forbud mot kirkebygg' }
          ],
          correct: 0,
          explanation: {
            en: 'Orthodox missions used Slavic languages (e.g., via Cyril and Methodius) and linked church to local rulers.',
            no: 'Ortodoks misjon brukte slaviske språk (f.eks. via Kyrillos og Methodios) og knyttet kirken til lokale herskere.'
          },
          tags: ['orthodoxy', 'spread']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is "Christianization" of pre-Christian Europe described as a gradual blending?',
            no: 'Hvorfor beskrives «kristningen» av det førkristne Europa som en gradvis sammensmelting?'
          },
          answers: [
            { en: 'Local customs and festivals were often absorbed into Christian practice', no: 'Lokale skikker og fester ble ofte tatt opp i kristen praksis' },
            { en: 'All old traditions vanished instantly', no: 'Alle gamle tradisjoner forsvant øyeblikkelig' },
            { en: 'No local beliefs existed beforehand', no: 'Ingen lokale trosforestillinger fantes på forhånd' },
            { en: 'Christianity rejected every existing custom', no: 'Kristendommen avviste enhver eksisterende skikk' }
          ],
          correct: 0,
          explanation: {
            en: 'Christianization often involved syncretism, with older practices reinterpreted within a Christian framework.',
            no: 'Kristningen innebar ofte synkretisme, der eldre skikker ble omtolket innenfor en kristen ramme.'
          },
          tags: ['christianization', 'syncretism']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did secularization in modern Europe affect Christianity’s role?',
            no: 'Hvordan påvirket sekulariseringen i det moderne Europa kristendommens rolle?'
          },
          answers: [
            { en: 'Church attendance and influence declined in many countries', no: 'Kirkebesøk og innflytelse avtok i mange land' },
            { en: 'It made Christianity the state religion everywhere', no: 'Den gjorde kristendommen til statsreligion overalt' },
            { en: 'It increased church power dramatically', no: 'Den økte kirkemakten dramatisk' },
            { en: 'It had no measurable effect', no: 'Den hadde ingen målbar effekt' }
          ],
          correct: 0,
          explanation: {
            en: 'In much of modern Europe, secularization reduced regular church attendance and institutional influence.',
            no: 'I store deler av det moderne Europa reduserte sekulariseringen jevnlig kirkegang og institusjonell innflytelse.'
          },
          tags: ['secularization', 'modern']
        }
      ]
    },
    {
      slug: 'islam',
      name: { en: 'Islam', no: 'Islam' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'Who is the founding prophet of Islam?',
            no: 'Hvem er islams grunnleggende profet?'
          },
          answers: [
            { en: 'Muhammad', no: 'Muhammad' },
            { en: 'Jesus', no: 'Jesus' },
            { en: 'Abraham', no: 'Abraham' },
            { en: 'Buddha', no: 'Buddha' }
          ],
          correct: 0,
          explanation: {
            en: 'Muslims regard Muhammad as the final prophet who received the Quran.',
            no: 'Muslimer regner Muhammad som den siste profeten som mottok Koranen.'
          },
          tags: ['muhammad', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the holy book of Islam?',
            no: 'Hva er islams hellige bok?'
          },
          answers: [
            { en: 'The Bible', no: 'Bibelen' },
            { en: 'The Quran', no: 'Koranen' },
            { en: 'The Torah', no: 'Toraen' },
            { en: 'The Tripitaka', no: 'Tripitaka' }
          ],
          correct: 1,
          explanation: {
            en: 'The Quran is the holy book of Islam, believed to be the word of God revealed to Muhammad.',
            no: 'Koranen er islams hellige bok, som anses å være Guds ord åpenbart for Muhammad.'
          },
          tags: ['quran', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which city was Muhammad born?',
            no: 'I hvilken by ble Muhammad født?'
          },
          answers: [
            { en: 'Mecca', no: 'Mekka' },
            { en: 'Jerusalem', no: 'Jerusalem' },
            { en: 'Baghdad', no: 'Bagdad' },
            { en: 'Cairo', no: 'Kairo' }
          ],
          correct: 0,
          explanation: {
            en: 'Muhammad was born in Mecca, in present-day Saudi Arabia, around 570 CE.',
            no: 'Muhammad ble født i Mekka, i dagens Saudi-Arabia, rundt år 570.'
          },
          tags: ['mecca', 'muhammad']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What do followers of Islam call themselves?',
            no: 'Hva kaller tilhengere av islam seg selv?'
          },
          answers: [
            { en: 'Muslims', no: 'Muslimer' },
            { en: 'Hindus', no: 'Hinduer' },
            { en: 'Christians', no: 'Kristne' },
            { en: 'Buddhists', no: 'Buddhister' }
          ],
          correct: 0,
          explanation: {
            en: 'Followers of Islam are called Muslims, meaning those who submit to God.',
            no: 'Tilhengere av islam kalles muslimer, som betyr de som underkaster seg Gud.'
          },
          tags: ['muslims', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the name of the one God in Islam?',
            no: 'Hva er navnet på den ene Gud i islam?'
          },
          answers: [
            { en: 'Allah', no: 'Allah' },
            { en: 'Brahma', no: 'Brahma' },
            { en: 'Zeus', no: 'Zevs' },
            { en: 'Vishnu', no: 'Vishnu' }
          ],
          correct: 0,
          explanation: {
            en: 'Allah is the Arabic word for the one God worshipped in Islam.',
            no: 'Allah er det arabiske ordet for den ene Gud som tilbes i islam.'
          },
          tags: ['allah', 'beliefs']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'How many "Pillars of Islam" are there?',
            no: 'Hvor mange «islams søyler» finnes det?'
          },
          answers: [
            { en: 'Five', no: 'Fem' },
            { en: 'Three', no: 'Tre' },
            { en: 'Ten', no: 'Ti' },
            { en: 'Seven', no: 'Sju' }
          ],
          correct: 0,
          explanation: {
            en: 'The Five Pillars are the core acts of worship and practice in Islam.',
            no: 'De fem søylene er de grunnleggende handlingene for tilbedelse og praksis i islam.'
          },
          tags: ['five-pillars', 'practices']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the Muslim place of worship called?',
            no: 'Hva kalles muslimenes bønnested?'
          },
          answers: [
            { en: 'A mosque', no: 'En moské' },
            { en: 'A synagogue', no: 'En synagoge' },
            { en: 'A temple', no: 'Et tempel' },
            { en: 'A cathedral', no: 'En katedral' }
          ],
          correct: 0,
          explanation: {
            en: 'Muslims worship in a mosque, called a "masjid" in Arabic.',
            no: 'Muslimer tilber i en moské, kalt «masjid» på arabisk.'
          },
          tags: ['mosque', 'practices']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Toward which city do Muslims pray?',
            no: 'Mot hvilken by ber muslimer?'
          },
          answers: [
            { en: 'Mecca', no: 'Mekka' },
            { en: 'Medina', no: 'Medina' },
            { en: 'Istanbul', no: 'Istanbul' },
            { en: 'Damascus', no: 'Damaskus' }
          ],
          correct: 0,
          explanation: {
            en: 'Muslims face the Kaaba in Mecca during their daily prayers.',
            no: 'Muslimer vender seg mot Kaba i Mekka under de daglige bønnene.'
          },
          tags: ['mecca', 'prayer']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the Muslim holy month of fasting called?',
            no: 'Hva kalles muslimenes hellige fastemåned?'
          },
          answers: [
            { en: 'Ramadan', no: 'Ramadan' },
            { en: 'Hajj', no: 'Hajj' },
            { en: 'Eid', no: 'Eid' },
            { en: 'Diwali', no: 'Diwali' }
          ],
          correct: 0,
          explanation: {
            en: 'During Ramadan, Muslims fast from dawn to sunset.',
            no: 'Under ramadan faster muslimer fra daggry til solnedgang.'
          },
          tags: ['ramadan', 'practices']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the pilgrimage to Mecca called?',
            no: 'Hva kalles pilegrimsreisen til Mekka?'
          },
          answers: [
            { en: 'The Hajj', no: 'Hajj' },
            { en: 'The Exodus', no: 'Utvandringen' },
            { en: 'The Crusade', no: 'Korstoget' },
            { en: 'The Diaspora', no: 'Diasporaen' }
          ],
          correct: 0,
          explanation: {
            en: 'The Hajj is the pilgrimage to Mecca that Muslims aim to make at least once if able.',
            no: 'Hajj er pilegrimsreisen til Mekka som muslimer søker å gjennomføre minst én gang hvis de er i stand til det.'
          },
          tags: ['hajj', 'practices']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'On which continent did Islam first emerge?',
            no: 'På hvilket kontinent oppstod islam først?'
          },
          answers: [
            { en: 'Asia (the Arabian Peninsula)', no: 'Asia (Den arabiske halvøy)' },
            { en: 'Europe', no: 'Europa' },
            { en: 'South America', no: 'Sør-Amerika' },
            { en: 'Australia', no: 'Australia' }
          ],
          correct: 0,
          explanation: {
            en: 'Islam emerged in the 7th century on the Arabian Peninsula in western Asia.',
            no: 'Islam oppstod på 600-tallet på Den arabiske halvøy i vestlige Asia.'
          },
          tags: ['origins', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What are the two largest branches of Islam?',
            no: 'Hva er de to største grenene av islam?'
          },
          answers: [
            { en: 'Sunni and Shia', no: 'Sunni og sjia' },
            { en: 'Catholic and Protestant', no: 'Katolsk og protestantisk' },
            { en: 'Theravada and Mahayana', no: 'Theravada og mahayana' },
            { en: 'Orthodox and Reform', no: 'Ortodoks og reform' }
          ],
          correct: 0,
          explanation: {
            en: 'The two main branches of Islam are Sunni and Shia.',
            no: 'De to hovedgrenene av islam er sunni og sjia.'
          },
          tags: ['sunni-shia', 'branches']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'To which city did Muhammad migrate in 622 CE?',
            no: 'Til hvilken by utvandret Muhammad i år 622?'
          },
          answers: [
            { en: 'Medina', no: 'Medina' },
            { en: 'Mecca', no: 'Mekka' },
            { en: 'Baghdad', no: 'Bagdad' },
            { en: 'Jerusalem', no: 'Jerusalem' }
          ],
          correct: 0,
          explanation: {
            en: 'Muhammad’s migration (Hijra) to Medina in 622 CE marks the start of the Islamic calendar.',
            no: 'Muhammads utvandring (hijra) til Medina i år 622 markerer begynnelsen på den islamske kalenderen.'
          },
          tags: ['hijra', 'medina']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the Islamic declaration of faith, "There is no god but God...," called?',
            no: 'Hva kalles den islamske trosbekjennelsen, «Det finnes ingen gud uten Gud …»?'
          },
          answers: [
            { en: 'The Shahada', no: 'Shahada' },
            { en: 'The Torah', no: 'Toraen' },
            { en: 'The Creed of Nicaea', no: 'Den nikenske trosbekjennelse' },
            { en: 'The Eightfold Path', no: 'Den åttedelte veien' }
          ],
          correct: 0,
          explanation: {
            en: 'The Shahada is the Islamic declaration of faith and the first Pillar of Islam.',
            no: 'Shahada er den islamske trosbekjennelsen og islams første søyle.'
          },
          tags: ['shahada', 'beliefs']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which sacred structure in Mecca do Muslims circle during pilgrimage?',
            no: 'Hvilken hellig bygning i Mekka går muslimer rundt under pilegrimsreisen?'
          },
          answers: [
            { en: 'The Kaaba', no: 'Kaba' },
            { en: 'The Western Wall', no: 'Vestmuren' },
            { en: 'The Parthenon', no: 'Parthenon' },
            { en: 'The Colosseum', no: 'Colosseum' }
          ],
          correct: 0,
          explanation: {
            en: 'The Kaaba is the cube-shaped shrine in Mecca that pilgrims circle during the Hajj.',
            no: 'Kaba er det kubeformede helligdommen i Mekka som pilegrimer går rundt under hajj.'
          },
          tags: ['kaaba', 'practices']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Islam spread so quickly in its first century?',
            no: 'Hvordan spredte islam seg så raskt i sitt første århundre?'
          },
          answers: [
            { en: 'Through rapid Arab conquests and expanding trade', no: 'Gjennom raske arabiske erobringer og økende handel' },
            { en: 'Only by sea voyages to the Americas', no: 'Bare gjennom sjøreiser til Amerika' },
            { en: 'By banning all travel', no: 'Ved å forby all reising' },
            { en: 'Through European missionaries', no: 'Gjennom europeiske misjonærer' }
          ],
          correct: 0,
          explanation: {
            en: 'Early Islamic expansion combined military conquest with growing trade networks across regions.',
            no: 'Den tidlige islamske ekspansjonen kombinerte militær erobring med voksende handelsnettverk på tvers av regioner.'
          },
          tags: ['expansion', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What caused the split between Sunni and Shia Muslims?',
            no: 'Hva forårsaket splittelsen mellom sunni- og sjiamuslimer?'
          },
          answers: [
            { en: 'A dispute over who should lead the community after Muhammad', no: 'En strid om hvem som skulle lede samfunnet etter Muhammad' },
            { en: 'A disagreement over the alphabet', no: 'En uenighet om alfabetet' },
            { en: 'A debate about trade routes', no: 'En debatt om handelsruter' },
            { en: 'A conflict over the Quran’s existence', no: 'En konflikt om Koranens eksistens' }
          ],
          correct: 0,
          explanation: {
            en: 'The Sunni-Shia split arose over who should succeed Muhammad as leader of the Muslim community.',
            no: 'Splittelsen mellom sunni og sjia oppstod om hvem som skulle etterfølge Muhammad som leder for det muslimske samfunnet.'
          },
          tags: ['sunni-shia', 'divisions']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Who were the "Rashidun," or Rightly Guided Caliphs?',
            no: 'Hvem var «Rashidun», eller de rettledede kalifene?'
          },
          answers: [
            { en: 'The first four leaders after Muhammad', no: 'De fire første lederne etter Muhammad' },
            { en: 'Four Roman emperors', no: 'Fire romerske keisere' },
            { en: 'The authors of the Gospels', no: 'Forfatterne av evangeliene' },
            { en: 'Four Persian kings', no: 'Fire persiske konger' }
          ],
          correct: 0,
          explanation: {
            en: 'The Rashidun were the first four caliphs who led the Muslim community after Muhammad’s death.',
            no: 'Rashidun var de fire første kalifene som ledet det muslimske samfunnet etter Muhammads død.'
          },
          tags: ['caliphs', 'history']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the role of trade routes help spread Islam?',
            no: 'Hvordan bidro handelsruter til å spre islam?'
          },
          answers: [
            { en: 'Merchants carried the faith along land and sea routes', no: 'Kjøpmenn brakte troen med seg langs land- og sjøruter' },
            { en: 'Trade routes were closed to Muslims', no: 'Handelsruter var stengt for muslimer' },
            { en: 'Islam forbade all commerce', no: 'Islam forbød all handel' },
            { en: 'Trade had no role in religion', no: 'Handel hadde ingen rolle i religion' }
          ],
          correct: 0,
          explanation: {
            en: 'Muslim merchants spread Islam to West Africa, South Asia, and Southeast Asia through trade.',
            no: 'Muslimske kjøpmenn spredte islam til Vest-Afrika, Sør-Asia og Sørøst-Asia gjennom handel.'
          },
          tags: ['trade', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was the significance of the Islamic Golden Age?',
            no: 'Hva var betydningen av islams gullalder?'
          },
          answers: [
            { en: 'A flourishing of science, medicine, and learning', no: 'En blomstring av vitenskap, medisin og lærdom' },
            { en: 'A complete ban on education', no: 'Et fullstendig forbud mot utdanning' },
            { en: 'The end of all trade', no: 'Slutten på all handel' },
            { en: 'The fall of Islam', no: 'Islams fall' }
          ],
          correct: 0,
          explanation: {
            en: 'During the Islamic Golden Age, scholars advanced mathematics, astronomy, medicine, and philosophy.',
            no: 'Under islams gullalder utviklet lærde matematikk, astronomi, medisin og filosofi.'
          },
          tags: ['golden-age', 'culture']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How far did Islam spread by 750 CE?',
            no: 'Hvor langt hadde islam spredt seg innen år 750?'
          },
          answers: [
            { en: 'From Spain across North Africa to Central Asia', no: 'Fra Spania over Nord-Afrika til Sentral-Asia' },
            { en: 'Only within one city', no: 'Bare innenfor én by' },
            { en: 'Across the Americas', no: 'Over hele Amerika' },
            { en: 'Throughout Scandinavia', no: 'Over hele Skandinavia' }
          ],
          correct: 0,
          explanation: {
            en: 'By 750 CE, Islamic rule stretched from the Iberian Peninsula to Central Asia.',
            no: 'Innen år 750 strakte islamsk styre seg fra Den iberiske halvøy til Sentral-Asia.'
          },
          tags: ['expansion', 'geography']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is "sharia"?',
            no: 'Hva er «sharia»?'
          },
          answers: [
            { en: 'Islamic law derived from the Quran and traditions', no: 'Islamsk lov utledet fra Koranen og tradisjonene' },
            { en: 'A type of mosque', no: 'En type moské' },
            { en: 'A pilgrimage route', no: 'En pilegrimsrute' },
            { en: 'A musical instrument', no: 'Et musikkinstrument' }
          ],
          correct: 0,
          explanation: {
            en: 'Sharia is Islamic law based on the Quran and the example (Sunnah) of the Prophet.',
            no: 'Sharia er islamsk lov basert på Koranen og profetens eksempel (sunna).'
          },
          tags: ['sharia', 'law']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Islam influence regions like Spain (Al-Andalus)?',
            no: 'Hvordan påvirket islam regioner som Spania (Al-Andalus)?'
          },
          answers: [
            { en: 'It brought advances in architecture, science, and learning', no: 'Den brakte fremskritt innen arkitektur, vitenskap og lærdom' },
            { en: 'It ended all building', no: 'Den avsluttet all bygging' },
            { en: 'It had no cultural impact', no: 'Den hadde ingen kulturell innvirkning' },
            { en: 'It banned universities', no: 'Den forbød universiteter' }
          ],
          correct: 0,
          explanation: {
            en: 'In Al-Andalus, Islamic rule fostered notable achievements in science, art, and architecture.',
            no: 'I Al-Andalus fremmet islamsk styre bemerkelsesverdige prestasjoner innen vitenskap, kunst og arkitektur.'
          },
          tags: ['al-andalus', 'culture']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the relationship between Islam, Christianity, and Judaism?',
            no: 'Hva er forholdet mellom islam, kristendom og jødedom?'
          },
          answers: [
            { en: 'All three are monotheistic and trace roots to Abraham', no: 'Alle tre er monoteistiske og fører røttene tilbake til Abraham' },
            { en: 'They share no beliefs at all', no: 'De deler ingen trosforestillinger i det hele tatt' },
            { en: 'They are all polytheistic', no: 'De er alle polyteistiske' },
            { en: 'They reject all prophets', no: 'De avviser alle profeter' }
          ],
          correct: 0,
          explanation: {
            en: 'Islam, Christianity, and Judaism are Abrahamic, monotheistic faiths sharing common roots.',
            no: 'Islam, kristendom og jødedom er abrahamittiske, monoteistiske religioner med felles røtter.'
          },
          tags: ['abrahamic', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the Ottoman Empire help spread Islam?',
            no: 'Hvordan bidro Det osmanske riket til å spre islam?'
          },
          answers: [
            { en: 'It carried Islam into southeastern Europe and beyond', no: 'Det brakte islam til Sørøst-Europa og videre' },
            { en: 'It banned Islam', no: 'Det forbød islam' },
            { en: 'It confined Islam to Arabia', no: 'Det begrenset islam til Arabia' },
            { en: 'It had no religious role', no: 'Det hadde ingen religiøs rolle' }
          ],
          correct: 0,
          explanation: {
            en: 'The Ottoman Empire extended Islamic rule and culture into the Balkans and other regions.',
            no: 'Det osmanske riket utvidet islamsk styre og kultur til Balkan og andre regioner.'
          },
          tags: ['ottoman', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why is calligraphy especially important in Islamic art?',
            no: 'Hvorfor er kalligrafi spesielt viktig i islamsk kunst?'
          },
          answers: [
            { en: 'Figurative images are often avoided, so writing became a key art form', no: 'Figurative bilder unngås ofte, så skrift ble en sentral kunstform' },
            { en: 'Writing was forbidden', no: 'Skrift var forbudt' },
            { en: 'It had no religious meaning', no: 'Den hadde ingen religiøs betydning' },
            { en: 'Only paintings of people were allowed', no: 'Bare malerier av mennesker var tillatt' }
          ],
          correct: 0,
          explanation: {
            en: 'Because Islamic tradition often avoids depicting living beings, calligraphy became a major art form.',
            no: 'Fordi islamsk tradisjon ofte unngår å avbilde levende vesener, ble kalligrafi en viktig kunstform.'
          },
          tags: ['calligraphy', 'culture']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Islam reach Southeast Asia, such as Indonesia?',
            no: 'Hvordan nådde islam Sørøst-Asia, som Indonesia?'
          },
          answers: [
            { en: 'Mainly through Muslim traders, not conquest', no: 'Hovedsakelig gjennom muslimske handelsmenn, ikke erobring' },
            { en: 'Through European armies', no: 'Gjennom europeiske hærer' },
            { en: 'By a single missionary in one year', no: 'Av en enkelt misjonær på ett år' },
            { en: 'It never reached the region', no: 'Den nådde aldri regionen' }
          ],
          correct: 0,
          explanation: {
            en: 'Islam spread to Southeast Asia largely through trade, making Indonesia the world’s most populous Muslim country.',
            no: 'Islam spredte seg til Sørøst-Asia hovedsakelig gjennom handel, og gjorde Indonesia til verdens mest folkerike muslimske land.'
          },
          tags: ['southeast-asia', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Which Islamic festival marks the end of Ramadan?',
            no: 'Hvilken islamsk høytid markerer slutten på ramadan?'
          },
          answers: [
            { en: 'Eid al-Fitr', no: 'Eid al-Fitr' },
            { en: 'Yom Kippur', no: 'Yom kippur' },
            { en: 'Diwali', no: 'Diwali' },
            { en: 'Easter', no: 'Påske' }
          ],
          correct: 0,
          explanation: {
            en: 'Eid al-Fitr is the festival that celebrates the end of the Ramadan fast.',
            no: 'Eid al-Fitr er høytiden som feirer slutten på ramadanfasten.'
          },
          tags: ['eid', 'holidays']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians say Islam’s spread was not solely due to military conquest?',
            no: 'Hvorfor sier historikere at islams spredning ikke utelukkende skyldtes militær erobring?'
          },
          answers: [
            { en: 'Trade, missionary Sufis, and gradual conversion played major roles', no: 'Handel, misjonerende sufier og gradvis konvertering spilte store roller' },
            { en: 'No conversions ever happened', no: 'Ingen konverteringer skjedde noensinne' },
            { en: 'Conquest was the only factor', no: 'Erobring var den eneste faktoren' },
            { en: 'Islam never spread beyond Arabia', no: 'Islam spredte seg aldri utenfor Arabia' }
          ],
          correct: 0,
          explanation: {
            en: 'Conversion often occurred gradually through trade, Sufi missionaries, and cultural exchange, not just conquest.',
            no: 'Konvertering skjedde ofte gradvis gjennom handel, sufimisjonærer og kulturell utveksling, ikke bare erobring.'
          },
          tags: ['spread', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did Muslim scholars contribute to preserving classical knowledge?',
            no: 'Hvordan bidro muslimske lærde til å bevare klassisk kunnskap?'
          },
          answers: [
            { en: 'They translated and expanded Greek, Persian, and Indian texts', no: 'De oversatte og utvidet greske, persiske og indiske tekster' },
            { en: 'They destroyed all ancient books', no: 'De ødela alle gamle bøker' },
            { en: 'They ignored older learning', no: 'De ignorerte eldre lærdom' },
            { en: 'They forbade mathematics', no: 'De forbød matematikk' }
          ],
          correct: 0,
          explanation: {
            en: 'Scholars in centers like Baghdad translated and built on classical works, later transmitted to Europe.',
            no: 'Lærde i sentre som Bagdad oversatte og bygde videre på klassiske verk, som senere ble overført til Europa.'
          },
          tags: ['golden-age', 'knowledge']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What role did Sufism play in spreading Islam?',
            no: 'Hvilken rolle spilte sufismen i spredningen av islam?'
          },
          answers: [
            { en: 'Its mystical, adaptable approach won converts in many cultures', no: 'Dens mystiske, tilpasningsdyktige tilnærming vant konvertitter i mange kulturer' },
            { en: 'It opposed all conversion', no: 'Den motsatte seg all konvertering' },
            { en: 'It existed only in Europe', no: 'Den fantes bare i Europa' },
            { en: 'It rejected Islam entirely', no: 'Den avviste islam fullstendig' }
          ],
          correct: 0,
          explanation: {
            en: 'Sufi mystics often adapted to local cultures, making Islam accessible and aiding its spread.',
            no: 'Sufimystikere tilpasset seg ofte lokale kulturer, noe som gjorde islam tilgjengelig og fremmet spredningen.'
          },
          tags: ['sufism', 'spread']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the status of "People of the Book" affect non-Muslims under Islamic rule?',
            no: 'Hvordan påvirket statusen som «bokens folk» ikke-muslimer under islamsk styre?'
          },
          answers: [
            { en: 'Jews and Christians could often practice their faith with certain conditions', no: 'Jøder og kristne kunne ofte praktisere troen sin under visse betingelser' },
            { en: 'They were always forced to convert immediately', no: 'De ble alltid tvunget til å konvertere umiddelbart' },
            { en: 'They were forbidden from any worship', no: 'De ble forbudt all tilbedelse' },
            { en: 'They were given full equality everywhere', no: 'De ble gitt full likestilling overalt' }
          ],
          correct: 0,
          explanation: {
            en: 'As "People of the Book," Jews and Christians were often allowed to practice their religion under set conditions, such as paying a tax.',
            no: 'Som «bokens folk» fikk jøder og kristne ofte praktisere religionen sin under fastsatte betingelser, som å betale en skatt.'
          },
          tags: ['dhimmi', 'society']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the transmission of knowledge from the Islamic world important to European history?',
            no: 'Hvorfor er overføringen av kunnskap fra den islamske verden viktig for europeisk historie?'
          },
          answers: [
            { en: 'It helped spark the European Renaissance and scientific revival', no: 'Den bidro til å utløse den europeiske renessansen og vitenskapelig gjenoppblomstring' },
            { en: 'It had no influence on Europe', no: 'Den hadde ingen innflytelse på Europa' },
            { en: 'It ended European learning', no: 'Den avsluttet europeisk lærdom' },
            { en: 'It only affected Arabia', no: 'Den påvirket bare Arabia' }
          ],
          correct: 0,
          explanation: {
            en: 'Translations of Arabic works on science, medicine, and philosophy fed into the European Renaissance.',
            no: 'Oversettelser av arabiske verk om vitenskap, medisin og filosofi bidro til den europeiske renessansen.'
          },
          tags: ['knowledge', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did differing views of religious and political authority deepen the Sunni-Shia divide over time?',
            no: 'Hvordan utdypet ulike syn på religiøs og politisk autoritet skillet mellom sunni og sjia over tid?'
          },
          answers: [
            { en: 'They developed distinct leadership, law, and ritual traditions', no: 'De utviklet egne tradisjoner for lederskap, lov og ritualer' },
            { en: 'They became completely identical', no: 'De ble fullstendig identiske' },
            { en: 'They abandoned all differences', no: 'De forlot alle forskjeller' },
            { en: 'They merged into one branch', no: 'De smeltet sammen til én gren' }
          ],
          correct: 0,
          explanation: {
            en: 'Over centuries Sunni and Shia developed separate religious authorities, legal schools, and practices.',
            no: 'Gjennom århundrer utviklet sunni og sjia egne religiøse autoriteter, lovskoler og praksiser.'
          },
          tags: ['sunni-shia', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do scholars describe early Islamic expansion as both religious and political?',
            no: 'Hvorfor beskriver forskere den tidlige islamske ekspansjonen som både religiøs og politisk?'
          },
          answers: [
            { en: 'Conquest built empires while faith provided unity and legitimacy', no: 'Erobring bygde imperier mens troen ga enhet og legitimitet' },
            { en: 'Religion and politics were entirely separate', no: 'Religion og politikk var helt atskilt' },
            { en: 'There was no political element', no: 'Det fantes ingen politisk dimensjon' },
            { en: 'There was no religious element', no: 'Det fantes ingen religiøs dimensjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Early caliphates expanded territory and authority while Islam offered a shared identity and legitimacy.',
            no: 'Tidlige kalifater utvidet territorium og autoritet, mens islam ga en felles identitet og legitimitet.'
          },
          tags: ['expansion', 'interpretation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did local cultures shape the practice of Islam as it spread?',
            no: 'Hvordan formet lokale kulturer praktiseringen av islam etter hvert som den spredte seg?'
          },
          answers: [
            { en: 'Islam blended with local customs, producing diverse regional traditions', no: 'Islam blandet seg med lokale skikker og skapte mangfoldige regionale tradisjoner' },
            { en: 'It remained identical everywhere', no: 'Den forble identisk overalt' },
            { en: 'Local cultures vanished completely', no: 'Lokale kulturer forsvant helt' },
            { en: 'It rejected all local influence', no: 'Den avviste all lokal påvirkning' }
          ],
          correct: 0,
          explanation: {
            en: 'As Islam spread, it absorbed local customs, creating varied traditions across Africa, Asia, and beyond.',
            no: 'Etter hvert som islam spredte seg, tok den opp lokale skikker og skapte ulike tradisjoner i Afrika, Asia og andre steder.'
          },
          tags: ['syncretism', 'culture']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the term "jihad" often misunderstood in modern discussions?',
            no: 'Hvorfor blir begrepet «jihad» ofte misforstått i moderne diskusjoner?'
          },
          answers: [
            { en: 'It means "struggle" and includes personal, spiritual effort, not only warfare', no: 'Det betyr «kamp» og omfatter personlig, åndelig innsats, ikke bare krigføring' },
            { en: 'It refers only to a holiday', no: 'Det viser bare til en høytid' },
            { en: 'It means pilgrimage', no: 'Det betyr pilegrimsreise' },
            { en: 'It is unrelated to Islam', no: 'Det er uten tilknytning til islam' }
          ],
          correct: 0,
          explanation: {
            en: 'Jihad broadly means "struggle," including the inner spiritual struggle, and is often narrowed inaccurately to violence.',
            no: 'Jihad betyr i vid forstand «kamp», inkludert den indre åndelige kampen, og innsnevres ofte unøyaktig til vold.'
          },
          tags: ['jihad', 'concepts']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the decline of the caliphate affect Islamic political unity?',
            no: 'Hvordan påvirket kalifatets nedgang islamsk politisk enhet?'
          },
          answers: [
            { en: 'Authority fragmented among many states and dynasties', no: 'Autoriteten ble fragmentert mellom mange stater og dynastier' },
            { en: 'It created a single unified Muslim state', no: 'Det skapte én samlet muslimsk stat' },
            { en: 'It ended the religion', no: 'Det avsluttet religionen' },
            { en: 'It had no political effect', no: 'Det hadde ingen politisk effekt' }
          ],
          correct: 0,
          explanation: {
            en: 'As central caliphal power weakened, the Muslim world split into competing states and dynasties.',
            no: 'Da den sentrale kalifmakten ble svekket, ble den muslimske verden delt i konkurrerende stater og dynastier.'
          },
          tags: ['caliphate', 'long-term']
        }
      ]
    },
    {
      slug: 'buddhism',
      name: { en: 'Buddhism', no: 'Buddhismen' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'Who founded Buddhism?',
            no: 'Hvem grunnla buddhismen?'
          },
          answers: [
            { en: 'Siddhartha Gautama (the Buddha)', no: 'Siddhartha Gautama (Buddha)' },
            { en: 'Confucius', no: 'Konfutse' },
            { en: 'Muhammad', no: 'Muhammad' },
            { en: 'Moses', no: 'Moses' }
          ],
          correct: 0,
          explanation: {
            en: 'Buddhism was founded by Siddhartha Gautama, known as the Buddha, meaning "the Awakened One."',
            no: 'Buddhismen ble grunnlagt av Siddhartha Gautama, kjent som Buddha, som betyr «den oppvåknede».'
          },
          tags: ['buddha', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does the title "Buddha" mean?',
            no: 'Hva betyr tittelen «Buddha»?'
          },
          answers: [
            { en: 'The Awakened or Enlightened One', no: 'Den oppvåknede eller opplyste' },
            { en: 'The Great King', no: 'Den store kongen' },
            { en: 'The High Priest', no: 'Den øverste presten' },
            { en: 'The Messenger', no: 'Sendebudet' }
          ],
          correct: 0,
          explanation: {
            en: '"Buddha" means "the Awakened One" or "the Enlightened One."',
            no: '«Buddha» betyr «den oppvåknede» eller «den opplyste».'
          },
          tags: ['buddha', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which country did Buddhism originate?',
            no: 'I hvilket land oppstod buddhismen?'
          },
          answers: [
            { en: 'India', no: 'India' },
            { en: 'China', no: 'Kina' },
            { en: 'Japan', no: 'Japan' },
            { en: 'Egypt', no: 'Egypt' }
          ],
          correct: 0,
          explanation: {
            en: 'Buddhism originated in ancient India around the 5th century BCE.',
            no: 'Buddhismen oppstod i det gamle India rundt 400-tallet f.Kr.'
          },
          tags: ['origins', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'How many "Noble Truths" are central to Buddhism?',
            no: 'Hvor mange «edle sannheter» er sentrale i buddhismen?'
          },
          answers: [
            { en: 'Four', no: 'Fire' },
            { en: 'Two', no: 'To' },
            { en: 'Seven', no: 'Sju' },
            { en: 'Ten', no: 'Ti' }
          ],
          correct: 0,
          explanation: {
            en: 'The Four Noble Truths are a core teaching about suffering and its end.',
            no: 'De fire edle sannheter er en grunnleggende lære om lidelse og dens opphør.'
          },
          tags: ['four-noble-truths', 'teachings']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the Buddhist path to end suffering called?',
            no: 'Hva kalles den buddhistiske veien til å avslutte lidelse?'
          },
          answers: [
            { en: 'The Eightfold Path', no: 'Den åttedelte veien' },
            { en: 'The Five Pillars', no: 'De fem søylene' },
            { en: 'The Ten Commandments', no: 'De ti bud' },
            { en: 'The Golden Rule', no: 'Den gylne regel' }
          ],
          correct: 0,
          explanation: {
            en: 'The Noble Eightfold Path describes the way to end suffering and reach enlightenment.',
            no: 'Den edle åttedelte veien beskriver veien til å avslutte lidelse og oppnå opplysning.'
          },
          tags: ['eightfold-path', 'teachings']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the ultimate goal of Buddhism?',
            no: 'Hva er buddhismens endelige mål?'
          },
          answers: [
            { en: 'Nirvana', no: 'Nirvana' },
            { en: 'Heaven', no: 'Himmelen' },
            { en: 'Wealth', no: 'Rikdom' },
            { en: 'Conquest', no: 'Erobring' }
          ],
          correct: 0,
          explanation: {
            en: 'Nirvana is the state of liberation from suffering and the cycle of rebirth.',
            no: 'Nirvana er tilstanden av befrielse fra lidelse og gjenfødelsens kretsløp.'
          },
          tags: ['nirvana', 'goals']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What practice of focused attention is central to Buddhism?',
            no: 'Hvilken praksis med fokusert oppmerksomhet er sentral i buddhismen?'
          },
          answers: [
            { en: 'Meditation', no: 'Meditasjon' },
            { en: 'Sacrifice', no: 'Ofring' },
            { en: 'Fasting only', no: 'Bare faste' },
            { en: 'Pilgrim taxes', no: 'Pilegrimsavgifter' }
          ],
          correct: 0,
          explanation: {
            en: 'Meditation is a central Buddhist practice for developing insight and calm.',
            no: 'Meditasjon er en sentral buddhistisk praksis for å utvikle innsikt og ro.'
          },
          tags: ['meditation', 'practices']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the Buddhist concept of cause and effect across lives called?',
            no: 'Hva kalles det buddhistiske begrepet om årsak og virkning på tvers av liv?'
          },
          answers: [
            { en: 'Karma', no: 'Karma' },
            { en: 'Dharma', no: 'Dharma' },
            { en: 'Jihad', no: 'Jihad' },
            { en: 'Exodus', no: 'Exodus' }
          ],
          correct: 0,
          explanation: {
            en: 'Karma is the principle that actions have consequences affecting this and future lives.',
            no: 'Karma er prinsippet om at handlinger har konsekvenser som påvirker dette og framtidige liv.'
          },
          tags: ['karma', 'beliefs']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the cycle of birth, death, and rebirth called?',
            no: 'Hva kalles kretsløpet av fødsel, død og gjenfødelse?'
          },
          answers: [
            { en: 'Samsara', no: 'Samsara' },
            { en: 'Nirvana', no: 'Nirvana' },
            { en: 'Hajj', no: 'Hajj' },
            { en: 'Sabbath', no: 'Sabbat' }
          ],
          correct: 0,
          explanation: {
            en: 'Samsara is the continuous cycle of birth, death, and rebirth that Buddhists seek to escape.',
            no: 'Samsara er det vedvarende kretsløpet av fødsel, død og gjenfødelse som buddhister søker å unnslippe.'
          },
          tags: ['samsara', 'beliefs']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What are Buddhist monks’ communities or monasteries part of?',
            no: 'Hva er buddhistiske munkers fellesskap eller klostre en del av?'
          },
          answers: [
            { en: 'The Sangha', no: 'Sangha' },
            { en: 'The Caliphate', no: 'Kalifatet' },
            { en: 'The Vatican', no: 'Vatikanet' },
            { en: 'The Knesset', no: 'Knesset' }
          ],
          correct: 0,
          explanation: {
            en: 'The Sangha is the Buddhist community, especially of monks and nuns.',
            no: 'Sangha er det buddhistiske fellesskapet, særlig av munker og nonner.'
          },
          tags: ['sangha', 'community']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Under what kind of tree is the Buddha said to have reached enlightenment?',
            no: 'Under hva slags tre sies Buddha å ha oppnådd opplysning?'
          },
          answers: [
            { en: 'The Bodhi tree', no: 'Bodhitreet' },
            { en: 'An olive tree', no: 'Et oliventre' },
            { en: 'A palm tree', no: 'Et palmetre' },
            { en: 'An oak tree', no: 'En eik' }
          ],
          correct: 0,
          explanation: {
            en: 'The Buddha is said to have attained enlightenment while meditating under the Bodhi tree.',
            no: 'Buddha sies å ha oppnådd opplysning mens han mediterte under bodhitreet.'
          },
          tags: ['bodhi-tree', 'enlightenment']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What are the two main branches of Buddhism?',
            no: 'Hva er de to hovedgrenene av buddhismen?'
          },
          answers: [
            { en: 'Theravada and Mahayana', no: 'Theravada og mahayana' },
            { en: 'Sunni and Shia', no: 'Sunni og sjia' },
            { en: 'Catholic and Protestant', no: 'Katolsk og protestantisk' },
            { en: 'Orthodox and Reform', no: 'Ortodoks og reform' }
          ],
          correct: 0,
          explanation: {
            en: 'Theravada and Mahayana are the two main traditions of Buddhism.',
            no: 'Theravada og mahayana er de to hovedtradisjonene innen buddhismen.'
          },
          tags: ['branches', 'divisions']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Before enlightenment, what was Siddhartha Gautama by birth?',
            no: 'Før opplysningen, hva var Siddhartha Gautama av fødsel?'
          },
          answers: [
            { en: 'A prince', no: 'En prins' },
            { en: 'A merchant', no: 'En kjøpmann' },
            { en: 'A soldier', no: 'En soldat' },
            { en: 'A fisherman', no: 'En fisker' }
          ],
          correct: 0,
          explanation: {
            en: 'Siddhartha was born a prince before giving up his privileged life to seek enlightenment.',
            no: 'Siddhartha ble født som prins før han ga opp sitt privilegerte liv for å søke opplysning.'
          },
          tags: ['buddha', 'biography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which countries is Buddhism a major religion today?',
            no: 'I hvilke land er buddhismen en stor religion i dag?'
          },
          answers: [
            { en: 'Thailand, Sri Lanka, and Japan', no: 'Thailand, Sri Lanka og Japan' },
            { en: 'Norway, Sweden, and Finland', no: 'Norge, Sverige og Finland' },
            { en: 'Brazil, Argentina, and Chile', no: 'Brasil, Argentina og Chile' },
            { en: 'Egypt, Libya, and Morocco', no: 'Egypt, Libya og Marokko' }
          ],
          correct: 0,
          explanation: {
            en: 'Buddhism is widely practiced in countries such as Thailand, Sri Lanka, Japan, and others in Asia.',
            no: 'Buddhismen praktiseres mye i land som Thailand, Sri Lanka, Japan og andre i Asia.'
          },
          tags: ['geography', 'modern']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What teaching encourages avoiding extremes of pleasure and self-denial?',
            no: 'Hvilken lære oppmuntrer til å unngå ytterpunktene av nytelse og selvfornektelse?'
          },
          answers: [
            { en: 'The Middle Way', no: 'Den gylne middelvei' },
            { en: 'The Crusade', no: 'Korstoget' },
            { en: 'The Covenant', no: 'Pakten' },
            { en: 'The Reformation', no: 'Reformasjonen' }
          ],
          correct: 0,
          explanation: {
            en: 'The Middle Way avoids both indulgence and extreme asceticism.',
            no: 'Den gylne middelvei unngår både overdådig nytelse og ekstrem askese.'
          },
          tags: ['middle-way', 'teachings']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Which Indian emperor helped spread Buddhism in the 3rd century BCE?',
            no: 'Hvilken indisk keiser bidro til å spre buddhismen på 200-tallet f.Kr.?'
          },
          answers: [
            { en: 'Ashoka', no: 'Ashoka' },
            { en: 'Akbar', no: 'Akbar' },
            { en: 'Cyrus', no: 'Kyros' },
            { en: 'Constantine', no: 'Konstantin' }
          ],
          correct: 0,
          explanation: {
            en: 'Emperor Ashoka promoted Buddhism and sent missionaries across and beyond his empire.',
            no: 'Keiser Ashoka fremmet buddhismen og sendte misjonærer over og utenfor riket sitt.'
          },
          tags: ['ashoka', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did the Silk Road affect Buddhism?',
            no: 'Hvordan påvirket Silkeveien buddhismen?'
          },
          answers: [
            { en: 'It carried Buddhism into Central Asia and China', no: 'Den brakte buddhismen til Sentral-Asia og Kina' },
            { en: 'It blocked all religious travel', no: 'Den blokkerte all religiøs reise' },
            { en: 'It confined Buddhism to India', no: 'Den begrenset buddhismen til India' },
            { en: 'It had no effect on religion', no: 'Den hadde ingen effekt på religion' }
          ],
          correct: 0,
          explanation: {
            en: 'Traders and monks spread Buddhism along the Silk Road into Central Asia, China, and beyond.',
            no: 'Handelsmenn og munker spredte buddhismen langs Silkeveien til Sentral-Asia, Kina og videre.'
          },
          tags: ['silk-road', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What experiences are said to have inspired Siddhartha’s spiritual search?',
            no: 'Hvilke opplevelser sies å ha inspirert Siddharthas åndelige søken?'
          },
          answers: [
            { en: 'Encounters with sickness, old age, and death', no: 'Møter med sykdom, alderdom og død' },
            { en: 'Winning a great battle', no: 'Å vinne et stort slag' },
            { en: 'Discovering gold', no: 'Å finne gull' },
            { en: 'Becoming a merchant', no: 'Å bli kjøpmann' }
          ],
          correct: 0,
          explanation: {
            en: 'Seeing sickness, old age, death, and a holy man led Siddhartha to seek the cause of suffering.',
            no: 'Synet av sykdom, alderdom, død og en hellig mann fikk Siddhartha til å søke årsaken til lidelse.'
          },
          tags: ['buddha', 'biography']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does Mahayana Buddhism differ from Theravada?',
            no: 'Hvordan skiller mahayana-buddhismen seg fra theravada?'
          },
          answers: [
            { en: 'It emphasizes compassion and helping all beings reach enlightenment', no: 'Den vektlegger medfølelse og å hjelpe alle vesener til opplysning' },
            { en: 'It rejects the Buddha entirely', no: 'Den avviser Buddha fullstendig' },
            { en: 'It forbids meditation', no: 'Den forbyr meditasjon' },
            { en: 'It worships many warrior gods', no: 'Den tilber mange krigsguder' }
          ],
          correct: 0,
          explanation: {
            en: 'Mahayana emphasizes the bodhisattva ideal of compassion and helping others toward enlightenment.',
            no: 'Mahayana vektlegger bodhisattva-idealet om medfølelse og å hjelpe andre mot opplysning.'
          },
          tags: ['mahayana', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a "bodhisattva" in Mahayana Buddhism?',
            no: 'Hva er en «bodhisattva» i mahayana-buddhismen?'
          },
          answers: [
            { en: 'A being who delays nirvana to help others', no: 'Et vesen som utsetter nirvana for å hjelpe andre' },
            { en: 'A type of temple', no: 'En type tempel' },
            { en: 'A war leader', no: 'En krigsleder' },
            { en: 'A sacred river', no: 'En hellig elv' }
          ],
          correct: 0,
          explanation: {
            en: 'A bodhisattva postpones their own nirvana out of compassion to help other beings.',
            no: 'En bodhisattva utsetter sin egen nirvana av medfølelse for å hjelpe andre vesener.'
          },
          tags: ['bodhisattva', 'mahayana']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Buddhism change as it entered China?',
            no: 'Hvordan endret buddhismen seg da den kom til Kina?'
          },
          answers: [
            { en: 'It blended with local traditions like Daoism, forming new schools', no: 'Den blandet seg med lokale tradisjoner som daoismen og dannet nye skoler' },
            { en: 'It stayed completely unchanged', no: 'Den forble helt uendret' },
            { en: 'It replaced all Chinese culture', no: 'Den erstattet all kinesisk kultur' },
            { en: 'It was immediately banned forever', no: 'Den ble umiddelbart forbudt for alltid' }
          ],
          correct: 0,
          explanation: {
            en: 'In China, Buddhism mixed with local beliefs, giving rise to schools such as Chan (Zen).',
            no: 'I Kina blandet buddhismen seg med lokale trosforestillinger og ga opphav til skoler som Chan (zen).'
          },
          tags: ['china', 'adaptation']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is Zen Buddhism especially known for?',
            no: 'Hva er zen-buddhismen særlig kjent for?'
          },
          answers: [
            { en: 'Emphasis on meditation and direct experience', no: 'Vektlegging av meditasjon og direkte erfaring' },
            { en: 'Animal sacrifice', no: 'Dyreofring' },
            { en: 'Building large armies', no: 'Å bygge store hærer' },
            { en: 'Rejecting all practice', no: 'Å avvise all praksis' }
          ],
          correct: 0,
          explanation: {
            en: 'Zen (Chan) Buddhism stresses meditation and direct insight over scripture alone.',
            no: 'Zen (chan)-buddhismen legger vekt på meditasjon og direkte innsikt framfor skrift alene.'
          },
          tags: ['zen', 'practices']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why did Buddhism decline in India by the medieval period?',
            no: 'Hvorfor gikk buddhismen tilbake i India i middelalderen?'
          },
          answers: [
            { en: 'Hinduism’s revival and later invasions reduced its influence', no: 'Hinduismens gjenoppblomstring og senere invasjoner svekket innflytelsen' },
            { en: 'It was never present in India', no: 'Den fantes aldri i India' },
            { en: 'It spread only because of India', no: 'Den spredte seg bare på grunn av India' },
            { en: 'Indians never practiced any religion', no: 'Indere praktiserte aldri noen religion' }
          ],
          correct: 0,
          explanation: {
            en: 'Buddhism faded in India due to the resurgence of Hinduism and disruptions from later invasions.',
            no: 'Buddhismen avtok i India på grunn av hinduismens gjenoppblomstring og forstyrrelser fra senere invasjoner.'
          },
          tags: ['india', 'decline']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How is Tibetan (Vajrayana) Buddhism distinctive?',
            no: 'Hvordan skiller tibetansk (vajrayana) buddhisme seg ut?'
          },
          answers: [
            { en: 'It uses rituals, mantras, and teachers like the Dalai Lama', no: 'Den bruker ritualer, mantraer og lærere som Dalai Lama' },
            { en: 'It rejects all teachers', no: 'Den avviser alle lærere' },
            { en: 'It forbids meditation', no: 'Den forbyr meditasjon' },
            { en: 'It worships the Roman gods', no: 'Den tilber de romerske gudene' }
          ],
          correct: 0,
          explanation: {
            en: 'Vajrayana Buddhism uses rituals, mantras, and revered teachers, with the Dalai Lama as a key figure.',
            no: 'Vajrayana-buddhismen bruker ritualer, mantraer og ærede lærere, med Dalai Lama som en sentral skikkelse.'
          },
          tags: ['vajrayana', 'tibet']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the "dharma" in Buddhism?',
            no: 'Hva er «dharma» i buddhismen?'
          },
          answers: [
            { en: 'The teachings of the Buddha', no: 'Buddhas lære' },
            { en: 'A type of weapon', no: 'En type våpen' },
            { en: 'A royal title', no: 'En kongelig tittel' },
            { en: 'A trading route', no: 'En handelsrute' }
          ],
          correct: 0,
          explanation: {
            en: 'In Buddhism, the dharma refers to the Buddha’s teachings and the truth they describe.',
            no: 'I buddhismen viser dharma til Buddhas lære og den sannheten den beskriver.'
          },
          tags: ['dharma', 'teachings']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Buddhism reach Japan?',
            no: 'Hvordan nådde buddhismen Japan?'
          },
          answers: [
            { en: 'Through cultural exchange from Korea and China', no: 'Gjennom kulturell utveksling fra Korea og Kina' },
            { en: 'Through European colonizers', no: 'Gjennom europeiske kolonimakter' },
            { en: 'By way of the Americas', no: 'Via Amerika' },
            { en: 'It originated in Japan', no: 'Den oppstod i Japan' }
          ],
          correct: 0,
          explanation: {
            en: 'Buddhism arrived in Japan via Korea and China, blending with native Shinto traditions.',
            no: 'Buddhismen kom til Japan via Korea og Kina og blandet seg med de innfødte shinto-tradisjonene.'
          },
          tags: ['japan', 'spread']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why are Buddhist missionaries different from those of some other religions?',
            no: 'Hvorfor skiller buddhistiske misjonærer seg fra dem i enkelte andre religioner?'
          },
          answers: [
            { en: 'Spread often relied on voluntary adoption and royal patronage rather than conquest', no: 'Spredningen bygde ofte på frivillig overtakelse og kongelig støtte snarere enn erobring' },
            { en: 'They always used military force', no: 'De brukte alltid militær makt' },
            { en: 'They never traveled', no: 'De reiste aldri' },
            { en: 'They forbade teaching others', no: 'De forbød å lære bort til andre' }
          ],
          correct: 0,
          explanation: {
            en: 'Buddhism often spread peacefully through teaching, trade, and the support of rulers like Ashoka.',
            no: 'Buddhismen spredte seg ofte fredelig gjennom undervisning, handel og støtte fra herskere som Ashoka.'
          },
          tags: ['missionaries', 'spread']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did adaptation to local cultures shape the diversity of Buddhism?',
            no: 'Hvordan formet tilpasningen til lokale kulturer mangfoldet i buddhismen?'
          },
          answers: [
            { en: 'It produced distinct traditions like Zen, Pure Land, and Tibetan Buddhism', no: 'Den skapte egne tradisjoner som zen, det rene land og tibetansk buddhisme' },
            { en: 'It kept Buddhism identical everywhere', no: 'Den holdt buddhismen identisk overalt' },
            { en: 'It erased all local cultures', no: 'Den utslettet alle lokale kulturer' },
            { en: 'It had no effect on practice', no: 'Den hadde ingen effekt på praksis' }
          ],
          correct: 0,
          explanation: {
            en: 'As Buddhism spread, it adapted to local cultures, producing varied schools and practices across Asia.',
            no: 'Etter hvert som buddhismen spredte seg, tilpasset den seg lokale kulturer og skapte ulike skoler og praksiser i Asia.'
          },
          tags: ['diversity', 'adaptation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the concept of "no-self" (anatta) philosophically challenging?',
            no: 'Hvorfor er begrepet «ikke-selv» (anatta) filosofisk utfordrende?'
          },
          answers: [
            { en: 'It denies a permanent, unchanging soul, unlike many other religions', no: 'Det benekter en permanent, uforanderlig sjel, i motsetning til mange andre religioner' },
            { en: 'It claims the self is eternal', no: 'Det hevder at selvet er evig' },
            { en: 'It is identical to the idea of a soul', no: 'Det er identisk med ideen om en sjel' },
            { en: 'It denies that suffering exists', no: 'Det benekter at lidelse finnes' }
          ],
          correct: 0,
          explanation: {
            en: 'Anatta holds there is no permanent self, contrasting with belief in an eternal soul elsewhere.',
            no: 'Anatta hevder at det ikke finnes noe permanent selv, i kontrast til troen på en evig sjel andre steder.'
          },
          tags: ['anatta', 'philosophy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did royal patronage shape Buddhism’s spread across Asia?',
            no: 'Hvordan formet kongelig støtte buddhismens spredning i Asia?'
          },
          answers: [
            { en: 'Rulers funded monasteries and missions, boosting the religion’s reach', no: 'Herskere finansierte klostre og misjon og økte religionens rekkevidde' },
            { en: 'Rulers always opposed Buddhism', no: 'Herskere motarbeidet alltid buddhismen' },
            { en: 'Patronage was forbidden', no: 'Støtte var forbudt' },
            { en: 'It had no effect on its spread', no: 'Det hadde ingen effekt på spredningen' }
          ],
          correct: 0,
          explanation: {
            en: 'Support from rulers like Ashoka and later Asian kings funded monasteries and helped Buddhism expand.',
            no: 'Støtte fra herskere som Ashoka og senere asiatiske konger finansierte klostre og bidro til at buddhismen vokste.'
          },
          tags: ['patronage', 'spread']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do scholars compare and contrast Buddhism with Hinduism’s ideas of rebirth?',
            no: 'Hvorfor sammenligner og kontrasterer forskere buddhismen med hinduismens ideer om gjenfødelse?'
          },
          answers: [
            { en: 'Both use karma and rebirth but differ on the existence of a permanent self', no: 'Begge bruker karma og gjenfødelse, men er uenige om det finnes et permanent selv' },
            { en: 'Neither believes in rebirth', no: 'Ingen av dem tror på gjenfødelse' },
            { en: 'They are completely identical', no: 'De er fullstendig identiske' },
            { en: 'Buddhism rejects karma entirely', no: 'Buddhismen avviser karma fullstendig' }
          ],
          correct: 0,
          explanation: {
            en: 'Buddhism and Hinduism share karma and rebirth, but Buddhism rejects the permanent self (atman).',
            no: 'Buddhismen og hinduismen deler karma og gjenfødelse, men buddhismen avviser det permanente selvet (atman).'
          },
          tags: ['hinduism', 'comparison']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did Buddhism influence art and culture across Asia?',
            no: 'Hvordan påvirket buddhismen kunst og kultur i Asia?'
          },
          answers: [
            { en: 'It inspired statues, temples, and painting traditions in many regions', no: 'Den inspirerte statuer, templer og maletradisjoner i mange regioner' },
            { en: 'It banned all art', no: 'Den forbød all kunst' },
            { en: 'It had no cultural influence', no: 'Den hadde ingen kulturell innflytelse' },
            { en: 'It only affected India', no: 'Den påvirket bare India' }
          ],
          correct: 0,
          explanation: {
            en: 'Buddhist themes shaped sculpture, architecture, and painting from India to Japan.',
            no: 'Buddhistiske motiver formet skulptur, arkitektur og maleri fra India til Japan.'
          },
          tags: ['art', 'culture']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is it sometimes debated whether Buddhism is a religion or a philosophy?',
            no: 'Hvorfor diskuteres det noen ganger om buddhismen er en religion eller en filosofi?'
          },
          answers: [
            { en: 'It can lack a creator god while still involving devotion and ritual', no: 'Den kan mangle en skapergud, men likevel innebære hengivenhet og ritualer' },
            { en: 'It always worships many gods', no: 'Den tilber alltid mange guder' },
            { en: 'It rejects all practice and thought', no: 'Den avviser all praksis og tanke' },
            { en: 'It has no teachings at all', no: 'Den har ingen lære i det hele tatt' }
          ],
          correct: 0,
          explanation: {
            en: 'Buddhism often lacks a creator deity but includes ethics, devotion, and ritual, blurring the religion–philosophy line.',
            no: 'Buddhismen mangler ofte en skapergud, men omfatter etikk, hengivenhet og ritualer, noe som visker ut skillet mellom religion og filosofi.'
          },
          tags: ['definition', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the spread of Buddhism interact with existing belief systems in East Asia?',
            no: 'Hvordan samspilte spredningen av buddhismen med eksisterende trossystemer i Øst-Asia?'
          },
          answers: [
            { en: 'It often coexisted and blended with Confucianism, Daoism, and Shinto', no: 'Den eksisterte ofte side om side og blandet seg med konfutsianisme, daoisme og shinto' },
            { en: 'It destroyed all other beliefs', no: 'Den ødela alle andre trosforestillinger' },
            { en: 'It refused any coexistence', no: 'Den nektet enhver sameksistens' },
            { en: 'It was rejected everywhere', no: 'Den ble avvist overalt' }
          ],
          correct: 0,
          explanation: {
            en: 'In East Asia, Buddhism frequently coexisted and merged with Confucian, Daoist, and Shinto practices.',
            no: 'I Øst-Asia eksisterte buddhismen ofte side om side og smeltet sammen med konfutsianske, daoistiske og shinto-praksiser.'
          },
          tags: ['east-asia', 'syncretism']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is "engaged Buddhism" a notable modern development?',
            no: 'Hvorfor er «engasjert buddhisme» en bemerkelsesverdig moderne utvikling?'
          },
          answers: [
            { en: 'It applies Buddhist principles to social and political issues', no: 'Den anvender buddhistiske prinsipper på sosiale og politiske spørsmål' },
            { en: 'It rejects all Buddhist teachings', no: 'Den avviser all buddhistisk lære' },
            { en: 'It bans meditation', no: 'Den forbyr meditasjon' },
            { en: 'It is only about ancient texts', no: 'Den handler bare om gamle tekster' }
          ],
          correct: 0,
          explanation: {
            en: 'Engaged Buddhism applies Buddhist ethics to activism on issues like peace, justice, and the environment.',
            no: 'Engasjert buddhisme anvender buddhistisk etikk på aktivisme rundt spørsmål som fred, rettferdighet og miljø.'
          },
          tags: ['engaged-buddhism', 'modern']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How has Buddhism spread to the West in modern times?',
            no: 'Hvordan har buddhismen spredt seg til Vesten i moderne tid?'
          },
          answers: [
            { en: 'Through immigration, translated texts, and interest in meditation', no: 'Gjennom innvandring, oversatte tekster og interesse for meditasjon' },
            { en: 'Through military conquest of Europe', no: 'Gjennom militær erobring av Europa' },
            { en: 'It has never reached the West', no: 'Den har aldri nådd Vesten' },
            { en: 'Only by banning other religions', no: 'Bare ved å forby andre religioner' }
          ],
          correct: 0,
          explanation: {
            en: 'Buddhism reached the West via Asian immigration, translated teachings, and growing interest in meditation.',
            no: 'Buddhismen nådde Vesten gjennom asiatisk innvandring, oversatt lære og økende interesse for meditasjon.'
          },
          tags: ['west', 'modern']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do historians view Ashoka’s support as a turning point for Buddhism?',
            no: 'Hvorfor ser historikere Ashokas støtte som et vendepunkt for buddhismen?'
          },
          answers: [
            { en: 'It transformed a regional teaching into a widely spreading religion', no: 'Den forvandlet en regional lære til en religion i bred spredning' },
            { en: 'It ended Buddhism completely', no: 'Den avsluttet buddhismen fullstendig' },
            { en: 'It had no lasting impact', no: 'Den hadde ingen varig virkning' },
            { en: 'It confined Buddhism to one village', no: 'Den begrenset buddhismen til én landsby' }
          ],
          correct: 0,
          explanation: {
            en: 'Ashoka’s missions and patronage helped Buddhism grow from a local movement into a major religion.',
            no: 'Ashokas misjon og støtte bidro til at buddhismen vokste fra en lokal bevegelse til en stor religion.'
          },
          tags: ['ashoka', 'historiography']
        }
      ]
    },
    {
      slug: 'judaism',
      name: { en: 'Judaism', no: 'Jødedommen' },
      questions: [
        {
          difficulty: 'easy',
          question: {
            en: 'What is the central holy text of Judaism?',
            no: 'Hva er jødedommens sentrale hellige tekst?'
          },
          answers: [
            { en: 'The Torah', no: 'Toraen' },
            { en: 'The Quran', no: 'Koranen' },
            { en: 'The New Testament', no: 'Det nye testamente' },
            { en: 'The Tripitaka', no: 'Tripitaka' }
          ],
          correct: 0,
          explanation: {
            en: 'The Torah, the first five books of the Hebrew Bible, is central to Judaism.',
            no: 'Toraen, de fem første bøkene i den hebraiske bibelen, er sentral i jødedommen.'
          },
          tags: ['torah', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Judaism is best described as which kind of religion?',
            no: 'Jødedommen beskrives best som hva slags religion?'
          },
          answers: [
            { en: 'Monotheistic (belief in one God)', no: 'Monoteistisk (tro på én Gud)' },
            { en: 'Polytheistic (many gods)', no: 'Polyteistisk (mange guder)' },
            { en: 'Atheistic (no god)', no: 'Ateistisk (ingen gud)' },
            { en: 'Animistic (spirits in nature)', no: 'Animistisk (ånder i naturen)' }
          ],
          correct: 0,
          explanation: {
            en: 'Judaism is a monotheistic religion, one of the first to teach belief in a single God.',
            no: 'Jødedommen er en monoteistisk religion, en av de første til å lære troen på én Gud.'
          },
          tags: ['monotheism', 'beliefs']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who is considered the founding patriarch of the Jewish people?',
            no: 'Hvem regnes som det jødiske folkets grunnleggende stamfar?'
          },
          answers: [
            { en: 'Abraham', no: 'Abraham' },
            { en: 'Jesus', no: 'Jesus' },
            { en: 'Muhammad', no: 'Muhammad' },
            { en: 'Buddha', no: 'Buddha' }
          ],
          correct: 0,
          explanation: {
            en: 'Abraham is regarded as the first patriarch and founder of the covenant with God.',
            no: 'Abraham regnes som den første stamfaren og grunnleggeren av pakten med Gud.'
          },
          tags: ['abraham', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the Jewish place of worship called?',
            no: 'Hva kalles jødenes bønnested?'
          },
          answers: [
            { en: 'A synagogue', no: 'En synagoge' },
            { en: 'A mosque', no: 'En moské' },
            { en: 'A temple of Buddha', no: 'Et buddhisttempel' },
            { en: 'A cathedral', no: 'En katedral' }
          ],
          correct: 0,
          explanation: {
            en: 'Jews worship and gather in a synagogue.',
            no: 'Jøder tilber og samles i en synagoge.'
          },
          tags: ['synagogue', 'practices']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the Jewish day of rest called?',
            no: 'Hva kalles jødenes hviledag?'
          },
          answers: [
            { en: 'The Sabbath (Shabbat)', no: 'Sabbaten (Shabbat)' },
            { en: 'Ramadan', no: 'Ramadan' },
            { en: 'Lent', no: 'Faste' },
            { en: 'Diwali', no: 'Diwali' }
          ],
          correct: 0,
          explanation: {
            en: 'The Sabbath (Shabbat), from Friday evening to Saturday evening, is the Jewish day of rest.',
            no: 'Sabbaten (Shabbat), fra fredag kveld til lørdag kveld, er jødenes hviledag.'
          },
          tags: ['sabbath', 'practices']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'A Jewish religious teacher and leader is called what?',
            no: 'Hva kalles en jødisk religiøs lærer og leder?'
          },
          answers: [
            { en: 'A rabbi', no: 'En rabbiner' },
            { en: 'An imam', no: 'En imam' },
            { en: 'A priest', no: 'En prest' },
            { en: 'A monk', no: 'En munk' }
          ],
          correct: 0,
          explanation: {
            en: 'A rabbi is a teacher and spiritual leader in Judaism.',
            no: 'En rabbiner er en lærer og åndelig leder i jødedommen.'
          },
          tags: ['rabbi', 'leadership']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which symbol is a six-pointed star associated with Judaism?',
            no: 'Hvilket symbol er en sekstakket stjerne forbundet med jødedommen?'
          },
          answers: [
            { en: 'The Star of David', no: 'Davidsstjernen' },
            { en: 'The crescent', no: 'Halvmånen' },
            { en: 'The cross', no: 'Korset' },
            { en: 'The wheel of dharma', no: 'Dharmahjulet' }
          ],
          correct: 0,
          explanation: {
            en: 'The Star of David is a widely recognized symbol of Judaism and the Jewish people.',
            no: 'Davidsstjernen er et vidt anerkjent symbol på jødedommen og det jødiske folk.'
          },
          tags: ['star-of-david', 'symbols']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which region did Judaism originate?',
            no: 'I hvilken region oppstod jødedommen?'
          },
          answers: [
            { en: 'The ancient Middle East (Canaan/Israel)', no: 'Det gamle Midtøsten (Kanaan/Israel)' },
            { en: 'Northern Europe', no: 'Nord-Europa' },
            { en: 'East Asia', no: 'Øst-Asia' },
            { en: 'South America', no: 'Sør-Amerika' }
          ],
          correct: 0,
          explanation: {
            en: 'Judaism originated in the ancient Middle East, in the land of Canaan/Israel.',
            no: 'Jødedommen oppstod i det gamle Midtøsten, i landet Kanaan/Israel.'
          },
          tags: ['origins', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which prophet is said to have received the Ten Commandments?',
            no: 'Hvilken profet sies å ha mottatt De ti bud?'
          },
          answers: [
            { en: 'Moses', no: 'Moses' },
            { en: 'David', no: 'David' },
            { en: 'Solomon', no: 'Salomo' },
            { en: 'Noah', no: 'Noah' }
          ],
          correct: 0,
          explanation: {
            en: 'According to tradition, Moses received the Ten Commandments at Mount Sinai.',
            no: 'Ifølge tradisjonen mottok Moses De ti bud på Sinaifjellet.'
          },
          tags: ['moses', 'commandments']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which Jewish holiday celebrates the Exodus from Egypt?',
            no: 'Hvilken jødisk høytid feirer utvandringen fra Egypt?'
          },
          answers: [
            { en: 'Passover (Pesach)', no: 'Påske (Pesach)' },
            { en: 'Christmas', no: 'Jul' },
            { en: 'Ramadan', no: 'Ramadan' },
            { en: 'Easter', no: 'Påske (kristen)' }
          ],
          correct: 0,
          explanation: {
            en: 'Passover commemorates the Israelites’ liberation from slavery in Egypt.',
            no: 'Pesach (jødisk påske) minnes israelittenes frigjøring fra slaveriet i Egypt.'
          },
          tags: ['passover', 'holidays']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What dietary laws do many Jews follow?',
            no: 'Hvilke kostholdsregler følger mange jøder?'
          },
          answers: [
            { en: 'Kosher laws', no: 'Kosher-regler' },
            { en: 'Halal laws only', no: 'Bare halal-regler' },
            { en: 'No food rules at all', no: 'Ingen matregler i det hele tatt' },
            { en: 'Vegetarian-only laws', no: 'Bare vegetarregler' }
          ],
          correct: 0,
          explanation: {
            en: 'Kosher laws (kashrut) set out which foods are permitted and how they must be prepared.',
            no: 'Kosher-regler (kashrut) fastsetter hvilke matvarer som er tillatt og hvordan de skal tilberedes.'
          },
          tags: ['kosher', 'practices']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the holiest city in Judaism?',
            no: 'Hva er den helligste byen i jødedommen?'
          },
          answers: [
            { en: 'Jerusalem', no: 'Jerusalem' },
            { en: 'Mecca', no: 'Mekka' },
            { en: 'Rome', no: 'Roma' },
            { en: 'Varanasi', no: 'Varanasi' }
          ],
          correct: 0,
          explanation: {
            en: 'Jerusalem is the holiest city in Judaism, home to the ancient Temple.',
            no: 'Jerusalem er den helligste byen i jødedommen, stedet for det gamle tempelet.'
          },
          tags: ['jerusalem', 'geography']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the Jewish coming-of-age ceremony for boys called?',
            no: 'Hva kalles den jødiske overgangsseremonien for gutter?'
          },
          answers: [
            { en: 'Bar Mitzvah', no: 'Bar mitzvah' },
            { en: 'Baptism', no: 'Dåp' },
            { en: 'Confirmation', no: 'Konfirmasjon' },
            { en: 'Hajj', no: 'Hajj' }
          ],
          correct: 0,
          explanation: {
            en: 'A Bar Mitzvah marks a Jewish boy reaching religious adulthood (Bat Mitzvah for girls).',
            no: 'En bar mitzvah markerer at en jødisk gutt når religiøs voksen alder (bat mitzvah for jenter).'
          },
          tags: ['bar-mitzvah', 'practices']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the term for the scattering of Jews outside their homeland?',
            no: 'Hva er betegnelsen på spredningen av jøder utenfor hjemlandet?'
          },
          answers: [
            { en: 'The Diaspora', no: 'Diasporaen' },
            { en: 'The Crusade', no: 'Korstoget' },
            { en: 'The Reformation', no: 'Reformasjonen' },
            { en: 'The Renaissance', no: 'Renessansen' }
          ],
          correct: 0,
          explanation: {
            en: 'The Diaspora refers to Jewish communities living outside the land of Israel.',
            no: 'Diasporaen viser til jødiske samfunn som lever utenfor landet Israel.'
          },
          tags: ['diaspora', 'history']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Which holiday is known as the Jewish New Year?',
            no: 'Hvilken høytid er kjent som den jødiske nyttårsfeiringen?'
          },
          answers: [
            { en: 'Rosh Hashanah', no: 'Rosh hashana' },
            { en: 'Hanukkah', no: 'Hanukka' },
            { en: 'Passover', no: 'Pesach' },
            { en: 'Purim', no: 'Purim' }
          ],
          correct: 0,
          explanation: {
            en: 'Rosh Hashanah is the Jewish New Year, a time of reflection and renewal.',
            no: 'Rosh hashana er den jødiske nyttårsfeiringen, en tid for ettertanke og fornyelse.'
          },
          tags: ['rosh-hashanah', 'holidays']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the "covenant" in Judaism?',
            no: 'Hva er «pakten» i jødedommen?'
          },
          answers: [
            { en: 'A special agreement between God and the Jewish people', no: 'En spesiell avtale mellom Gud og det jødiske folk' },
            { en: 'A trade treaty with Rome', no: 'En handelsavtale med Roma' },
            { en: 'A military alliance', no: 'En militærallianse' },
            { en: 'A type of synagogue', no: 'En type synagoge' }
          ],
          correct: 0,
          explanation: {
            en: 'The covenant is the sacred bond between God and the Jewish people, central to Jewish identity.',
            no: 'Pakten er det hellige båndet mellom Gud og det jødiske folk, sentralt for jødisk identitet.'
          },
          tags: ['covenant', 'beliefs']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What caused the Jewish Diaspora to expand dramatically in 70 CE?',
            no: 'Hva førte til at den jødiske diasporaen utvidet seg dramatisk i år 70?'
          },
          answers: [
            { en: 'The Roman destruction of the Second Temple in Jerusalem', no: 'Romernes ødeleggelse av det andre tempelet i Jerusalem' },
            { en: 'The founding of Christianity', no: 'Grunnleggelsen av kristendommen' },
            { en: 'The rise of Islam', no: 'Islams framvekst' },
            { en: 'The European Renaissance', no: 'Den europeiske renessansen' }
          ],
          correct: 0,
          explanation: {
            en: 'After Rome destroyed the Second Temple in 70 CE, many Jews were dispersed across the empire.',
            no: 'Etter at Roma ødela det andre tempelet i år 70, ble mange jøder spredt over hele riket.'
          },
          tags: ['diaspora', 'rome']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Judaism influence Christianity and Islam?',
            no: 'Hvordan påvirket jødedommen kristendommen og islam?'
          },
          answers: [
            { en: 'It provided monotheism and shared scriptures and prophets', no: 'Den ga monoteisme og felles skrifter og profeter' },
            { en: 'It had no connection to them', no: 'Den hadde ingen tilknytning til dem' },
            { en: 'It rejected belief in God', no: 'Den avviste troen på Gud' },
            { en: 'It worshipped the same gods as Rome', no: 'Den tilba de samme gudene som Roma' }
          ],
          correct: 0,
          explanation: {
            en: 'As the oldest Abrahamic faith, Judaism shaped the monotheism and scriptures of Christianity and Islam.',
            no: 'Som den eldste abrahamittiske religionen formet jødedommen monoteismen og skriftene i kristendommen og islam.'
          },
          tags: ['abrahamic', 'influence']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the Talmud?',
            no: 'Hva er Talmud?'
          },
          answers: [
            { en: 'A collection of rabbinic teachings and law', no: 'En samling av rabbinske læresetninger og lov' },
            { en: 'A book of Christian gospels', no: 'En bok med kristne evangelier' },
            { en: 'A Buddhist scripture', no: 'En buddhistisk skrift' },
            { en: 'A Roman law code', no: 'En romersk lovsamling' }
          ],
          correct: 0,
          explanation: {
            en: 'The Talmud is a central text of rabbinic Judaism, containing law, commentary, and discussion.',
            no: 'Talmud er en sentral tekst i rabbinsk jødedom, med lov, kommentarer og diskusjon.'
          },
          tags: ['talmud', 'texts']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Jewish communities maintain their identity in the Diaspora?',
            no: 'Hvordan opprettholdt jødiske samfunn sin identitet i diasporaen?'
          },
          answers: [
            { en: 'Through religious law, synagogues, and shared traditions', no: 'Gjennom religiøs lov, synagoger og felles tradisjoner' },
            { en: 'By abandoning all customs', no: 'Ved å forlate alle skikker' },
            { en: 'By forming a single empire', no: 'Ved å danne ett imperium' },
            { en: 'By giving up their texts', no: 'Ved å gi opp tekstene sine' }
          ],
          correct: 0,
          explanation: {
            en: 'Jewish law, synagogues, and shared customs helped preserve identity across scattered communities.',
            no: 'Jødisk lov, synagoger og felles skikker bidro til å bevare identiteten i spredte samfunn.'
          },
          tags: ['diaspora', 'identity']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What are the three main movements of modern Judaism?',
            no: 'Hva er de tre hovedretningene i moderne jødedom?'
          },
          answers: [
            { en: 'Orthodox, Conservative, and Reform', no: 'Ortodoks, konservativ og reform' },
            { en: 'Sunni, Shia, and Sufi', no: 'Sunni, sjia og sufi' },
            { en: 'Catholic, Orthodox, and Protestant', no: 'Katolsk, ortodoks og protestantisk' },
            { en: 'Theravada, Mahayana, and Vajrayana', no: 'Theravada, mahayana og vajrayana' }
          ],
          correct: 0,
          explanation: {
            en: 'Modern Judaism includes Orthodox, Conservative, and Reform movements with differing practices.',
            no: 'Moderne jødedom omfatter ortodoks, konservativ og reformretning med ulike praksiser.'
          },
          tags: ['movements', 'modern']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does the Hanukkah festival commemorate?',
            no: 'Hva minnes høytiden hanukka?'
          },
          answers: [
            { en: 'The rededication of the Temple after a revolt', no: 'Gjeninnvielsen av tempelet etter et opprør' },
            { en: 'The Exodus from Egypt', no: 'Utvandringen fra Egypt' },
            { en: 'The birth of Abraham', no: 'Abrahams fødsel' },
            { en: 'The fall of Rome', no: 'Romas fall' }
          ],
          correct: 0,
          explanation: {
            en: 'Hanukkah celebrates the rededication of the Temple after the Maccabean revolt.',
            no: 'Hanukka feirer gjeninnvielsen av tempelet etter Makkabeer-opprøret.'
          },
          tags: ['hanukkah', 'holidays']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Judaism differ from the surrounding ancient religions?',
            no: 'Hvordan skilte jødedommen seg fra de omkringliggende antikke religionene?'
          },
          answers: [
            { en: 'It worshipped one God rather than many', no: 'Den tilba én Gud i stedet for mange' },
            { en: 'It had no scriptures', no: 'Den hadde ingen skrifter' },
            { en: 'It worshipped Roman emperors', no: 'Den tilba romerske keisere' },
            { en: 'It rejected all law', no: 'Den avviste all lov' }
          ],
          correct: 0,
          explanation: {
            en: 'Unlike polytheistic neighbors, ancient Judaism centered on the worship of a single God.',
            no: 'I motsetning til polyteistiske naboer var den gamle jødedommen sentrert om tilbedelsen av én Gud.'
          },
          tags: ['monotheism', 'comparison']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What was the significance of the Babylonian Exile for Judaism?',
            no: 'Hvilken betydning hadde det babylonske eksil for jødedommen?'
          },
          answers: [
            { en: 'It shaped Jewish identity and texts while away from the homeland', no: 'Det formet jødisk identitet og tekster mens folket var borte fra hjemlandet' },
            { en: 'It ended Judaism', no: 'Det avsluttet jødedommen' },
            { en: 'It had no lasting effect', no: 'Det hadde ingen varig virkning' },
            { en: 'It created Christianity', no: 'Det skapte kristendommen' }
          ],
          correct: 0,
          explanation: {
            en: 'The Babylonian Exile (6th century BCE) deeply influenced Jewish worship, identity, and scripture.',
            no: 'Det babylonske eksil (500-tallet f.Kr.) påvirket jødisk gudstjeneste, identitet og skrift dypt.'
          },
          tags: ['babylonian-exile', 'history']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is Yom Kippur?',
            no: 'Hva er yom kippur?'
          },
          answers: [
            { en: 'The Day of Atonement, the holiest day in Judaism', no: 'Forsoningsdagen, den helligste dagen i jødedommen' },
            { en: 'A harvest festival only', no: 'Bare en høstfest' },
            { en: 'The Jewish New Year', no: 'Det jødiske nyttår' },
            { en: 'A celebration of the Exodus', no: 'En feiring av utvandringen' }
          ],
          correct: 0,
          explanation: {
            en: 'Yom Kippur, the Day of Atonement, is the holiest day in the Jewish calendar, marked by fasting and prayer.',
            no: 'Yom kippur, forsoningsdagen, er den helligste dagen i den jødiske kalenderen, preget av faste og bønn.'
          },
          tags: ['yom-kippur', 'holidays']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How did Jews contribute to medieval intellectual life?',
            no: 'Hvordan bidro jøder til intellektuelt liv i middelalderen?'
          },
          answers: [
            { en: 'As scholars, physicians, and translators across cultures', no: 'Som lærde, leger og oversettere på tvers av kulturer' },
            { en: 'By banning all learning', no: 'Ved å forby all lærdom' },
            { en: 'By avoiding all books', no: 'Ved å unngå alle bøker' },
            { en: 'They played no role', no: 'De spilte ingen rolle' }
          ],
          correct: 0,
          explanation: {
            en: 'Jewish scholars, doctors, and translators contributed to learning in both the Islamic world and Christian Europe.',
            no: 'Jødiske lærde, leger og oversettere bidro til lærdom både i den islamske verden og i det kristne Europa.'
          },
          tags: ['medieval', 'scholarship']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is Zionism?',
            no: 'Hva er sionisme?'
          },
          answers: [
            { en: 'A movement supporting a Jewish homeland in the land of Israel', no: 'En bevegelse som støtter et jødisk hjemland i landet Israel' },
            { en: 'A type of synagogue', no: 'En type synagoge' },
            { en: 'A Jewish dietary law', no: 'En jødisk kostholdslov' },
            { en: 'A medieval guild', no: 'En middelaldersk laugsorganisasjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Zionism is the modern movement that supported establishing a Jewish homeland, leading to modern Israel.',
            no: 'Sionisme er den moderne bevegelsen som støttet opprettelsen av et jødisk hjemland, som førte til det moderne Israel.'
          },
          tags: ['zionism', 'modern']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is Judaism often called the first major monotheistic religion?',
            no: 'Hvorfor kalles jødedommen ofte den første store monoteistiske religionen?'
          },
          answers: [
            { en: 'It established enduring worship of a single God that influenced later faiths', no: 'Den etablerte varig tilbedelse av én Gud som påvirket senere religioner' },
            { en: 'It was the only religion ever to exist', no: 'Den var den eneste religionen som noensinne har eksistert' },
            { en: 'It worshipped many gods first', no: 'Den tilba mange guder først' },
            { en: 'It rejected the idea of God', no: 'Den avviste ideen om Gud' }
          ],
          correct: 0,
          explanation: {
            en: 'Judaism’s lasting monotheism shaped the development of Christianity and Islam.',
            no: 'Jødedommens varige monoteisme formet utviklingen av kristendommen og islam.'
          },
          tags: ['monotheism', 'historiography']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did rabbinic Judaism transform the religion after the Temple’s destruction?',
            no: 'Hvordan forvandlet rabbinsk jødedom religionen etter tempelets ødeleggelse?'
          },
          answers: [
            { en: 'Worship shifted from Temple sacrifice to study, prayer, and synagogue life', no: 'Gudstjenesten skiftet fra tempelofring til studier, bønn og synagogeliv' },
            { en: 'Judaism ended completely', no: 'Jødedommen tok helt slutt' },
            { en: 'Sacrifice continued unchanged', no: 'Ofringen fortsatte uendret' },
            { en: 'All texts were abandoned', no: 'Alle tekster ble forlatt' }
          ],
          correct: 0,
          explanation: {
            en: 'Without the Temple, Judaism centered on Torah study, prayer, and the synagogue, led by rabbis.',
            no: 'Uten tempelet ble jødedommen sentrert om torastudier, bønn og synagogen, ledet av rabbinere.'
          },
          tags: ['rabbinic-judaism', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did living as minorities shape Jewish history in Europe?',
            no: 'Hvordan formet det å leve som minoriteter jødisk historie i Europa?'
          },
          answers: [
            { en: 'Communities faced periods of tolerance as well as persecution and expulsion', no: 'Samfunn opplevde perioder med toleranse så vel som forfølgelse og utvisning' },
            { en: 'They were always treated equally', no: 'De ble alltid behandlet likt' },
            { en: 'They never faced any hostility', no: 'De møtte aldri noen fiendtlighet' },
            { en: 'They ruled most of Europe', no: 'De styrte mesteparten av Europa' }
          ],
          correct: 0,
          explanation: {
            en: 'Jewish communities experienced both tolerance and recurring persecution, including expulsions and pogroms.',
            no: 'Jødiske samfunn opplevde både toleranse og tilbakevendende forfølgelse, inkludert utvisninger og pogromer.'
          },
          tags: ['europe', 'persecution']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the Holocaust affect the Jewish world?',
            no: 'Hvordan påvirket Holocaust den jødiske verden?'
          },
          answers: [
            { en: 'It murdered six million Jews and reshaped Jewish life and politics', no: 'Det drepte seks millioner jøder og omformet jødisk liv og politikk' },
            { en: 'It had no lasting impact', no: 'Det hadde ingen varig virkning' },
            { en: 'It increased the Jewish population', no: 'Det økte den jødiske befolkningen' },
            { en: 'It only affected one city', no: 'Det rammet bare én by' }
          ],
          correct: 0,
          explanation: {
            en: 'The Holocaust’s genocide of six million Jews profoundly shaped Jewish identity and the push for Israel.',
            no: 'Holocausts folkemord på seks millioner jøder formet dypt jødisk identitet og kampen for Israel.'
          },
          tags: ['holocaust', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do the differences among Orthodox, Conservative, and Reform Judaism matter?',
            no: 'Hvorfor er forskjellene mellom ortodoks, konservativ og reformjødedom viktige?'
          },
          answers: [
            { en: 'They reflect differing views on tradition, law, and modern life', no: 'De gjenspeiler ulike syn på tradisjon, lov og moderne liv' },
            { en: 'They have no real differences', no: 'De har ingen reelle forskjeller' },
            { en: 'They worship different gods', no: 'De tilber ulike guder' },
            { en: 'They reject the Torah', no: 'De avviser Toraen' }
          ],
          correct: 0,
          explanation: {
            en: 'These movements differ over how strictly to follow tradition and Jewish law in the modern world.',
            no: 'Disse retningene er uenige om hvor strengt man skal følge tradisjon og jødisk lov i den moderne verden.'
          },
          tags: ['movements', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did Jewish thought influence Western ethics and law?',
            no: 'Hvordan påvirket jødisk tenkning vestlig etikk og rett?'
          },
          answers: [
            { en: 'Ideas like the Ten Commandments shaped moral and legal traditions', no: 'Ideer som De ti bud formet moralske og rettslige tradisjoner' },
            { en: 'It had no influence at all', no: 'Den hadde ingen innflytelse i det hele tatt' },
            { en: 'It opposed all written law', no: 'Den motsatte seg all skreven lov' },
            { en: 'It only affected Asia', no: 'Den påvirket bare Asia' }
          ],
          correct: 0,
          explanation: {
            en: 'Jewish moral teachings, including the Ten Commandments, deeply influenced Western ethics and law.',
            no: 'Jødisk morallære, inkludert De ti bud, påvirket vestlig etikk og rett dypt.'
          },
          tags: ['ethics', 'long-term']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the relationship between Jewish religion and Jewish peoplehood complex?',
            no: 'Hvorfor er forholdet mellom jødisk religion og jødisk folketilhørighet komplekst?'
          },
          answers: [
            { en: 'Jewish identity combines religion, ethnicity, culture, and shared history', no: 'Jødisk identitet kombinerer religion, etnisitet, kultur og felles historie' },
            { en: 'It is based only on citizenship', no: 'Den er bare basert på statsborgerskap' },
            { en: 'It has nothing to do with religion', no: 'Den har ingenting med religion å gjøre' },
            { en: 'It is purely a modern invention', no: 'Den er rent en moderne oppfinnelse' }
          ],
          correct: 0,
          explanation: {
            en: 'Being Jewish can involve religion, ethnicity, culture, and peoplehood, which makes identity multifaceted.',
            no: 'Å være jøde kan omfatte religion, etnisitet, kultur og folketilhørighet, noe som gjør identiteten mangefasettert.'
          },
          tags: ['identity', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How did the Enlightenment and emancipation change European Jewish life?',
            no: 'Hvordan endret opplysningstiden og emansipasjonen jødisk liv i Europa?'
          },
          answers: [
            { en: 'Many Jews gained civil rights and engaged more with wider society', no: 'Mange jøder fikk borgerrettigheter og deltok mer i storsamfunnet' },
            { en: 'All Jews left Europe immediately', no: 'Alle jøder forlot Europa umiddelbart' },
            { en: 'It had no social effect', no: 'Det hadde ingen sosial effekt' },
            { en: 'It abolished Judaism', no: 'Det avskaffet jødedommen' }
          ],
          correct: 0,
          explanation: {
            en: 'Emancipation granted Jews citizenship in some states, increasing participation in broader society and prompting new movements.',
            no: 'Emansipasjonen ga jøder statsborgerskap i enkelte stater, økte deltakelsen i storsamfunnet og utløste nye bevegelser.'
          },
          tags: ['emancipation', 'modern']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does Judaism’s emphasis on text and interpretation shape the religion?',
            no: 'Hvordan former jødedommens vekt på tekst og tolkning religionen?'
          },
          answers: [
            { en: 'Ongoing study and debate of scripture keep the tradition dynamic', no: 'Vedvarende studier og debatt om skriften holder tradisjonen dynamisk' },
            { en: 'Texts are never discussed', no: 'Tekster blir aldri diskutert' },
            { en: 'Interpretation is forbidden', no: 'Tolkning er forbudt' },
            { en: 'There are no sacred texts', no: 'Det finnes ingen hellige tekster' }
          ],
          correct: 0,
          explanation: {
            en: 'Judaism’s long tradition of studying and debating scripture, especially in the Talmud, keeps interpretation central.',
            no: 'Jødedommens lange tradisjon med å studere og debattere skriften, særlig i Talmud, holder tolkning sentral.'
          },
          tags: ['interpretation', 'texts']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is Jerusalem central to Jewish history and longing across the Diaspora?',
            no: 'Hvorfor er Jerusalem sentral i jødisk historie og lengsel gjennom diasporaen?'
          },
          answers: [
            { en: 'It was the site of the Temple and a focus of prayer and hope for return', no: 'Den var stedet for tempelet og et midtpunkt for bønn og håp om tilbakevending' },
            { en: 'It had no religious meaning', no: 'Den hadde ingen religiøs betydning' },
            { en: 'It was outside the ancient Jewish world', no: 'Den lå utenfor den gamle jødiske verden' },
            { en: 'It was forgotten in the Diaspora', no: 'Den ble glemt i diasporaen' }
          ],
          correct: 0,
          explanation: {
            en: 'As the location of the Temple, Jerusalem remained central to Jewish worship and the hope of return.',
            no: 'Som stedet for tempelet forble Jerusalem sentral i jødisk gudstjeneste og håpet om tilbakevending.'
          },
          tags: ['jerusalem', 'long-term']
        }
      ]
    },
    {
      slug: 'religion-and-society',
      name: { en: 'Religion and society', no: 'Religion og samfunn' },
      questions: []
    }
  ]
};