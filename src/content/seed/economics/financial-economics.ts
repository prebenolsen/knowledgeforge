import type { SeedSubcategory } from '../types';

export const financialEconomics: SeedSubcategory = {
  slug: 'financial-economics',
  name: { en: 'Financial economics', no: 'Finansiell økonomi' },
  modules: [
    {
      slug: 'financial-markets',
      name: { en: 'Financial Markets', no: 'Finansmarkeder' },
      questions: [
        // ---------- EASY ----------
        {
          difficulty: 'easy',
          question: {
            en: 'What is a financial market?',
            no: 'Hva er et finansmarked?'
          },
          answers: [
            { en: 'A place where buyers and sellers trade financial assets', no: 'Et sted der kjøpere og selgere handler finansielle eiendeler' },
            { en: 'A government tax office', no: 'Et statlig skattekontor' },
            { en: 'A type of bank loan', no: 'En type banklån' },
            { en: 'A factory that produces goods', no: 'En fabrikk som produserer varer' }
          ],
          correct: 0,
          explanation: {
            en: 'Financial markets are venues where assets such as stocks, bonds and currencies are bought and sold.',
            no: 'Finansmarkeder er steder der eiendeler som aksjer, obligasjoner og valuta kjøpes og selges.'
          },
          tags: ['definition', 'markets']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does IPO stand for?',
            no: 'Hva står IPO for?'
          },
          answers: [
            { en: 'Internal Profit Order', no: 'Intern profittordre' },
            { en: 'Initial Public Offering', no: 'Børsintroduksjon (Initial Public Offering)' },
            { en: 'International Portfolio Option', no: 'Internasjonal porteføljeopsjon' },
            { en: 'Investment Payout Obligation', no: 'Investeringsutbetalingsforpliktelse' }
          ],
          correct: 1,
          explanation: {
            en: 'An IPO (Initial Public Offering) is when a company first sells its shares to the public.',
            no: 'En IPO (Initial Public Offering) er når et selskap for første gang selger aksjer til allmennheten.'
          },
          tags: ['ipo', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In which city is the New York Stock Exchange located?',
            no: 'I hvilken by ligger New York Stock Exchange?'
          },
          answers: [
            { en: 'Chicago', no: 'Chicago' },
            { en: 'Boston', no: 'Boston' },
            { en: 'New York', no: 'New York' },
            { en: 'Washington', no: 'Washington' }
          ],
          correct: 2,
          explanation: {
            en: 'The NYSE is located on Wall Street in New York City.',
            no: 'NYSE ligger i Wall Street i New York City.'
          },
          tags: ['stock exchanges', 'nyse']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is liquidity in a financial market?',
            no: 'Hva er likviditet i et finansmarked?'
          },
          answers: [
            { en: 'How easily an asset can be bought or sold without affecting its price', no: 'Hvor lett en eiendel kan kjøpes eller selges uten å påvirke prisen' },
            { en: 'The total profit of a company', no: 'Et selskaps totale overskudd' },
            { en: 'The amount of cash a government prints', no: 'Mengden kontanter en stat trykker' },
            { en: 'The interest rate on a loan', no: 'Renten på et lån' }
          ],
          correct: 0,
          explanation: {
            en: 'A liquid asset can be traded quickly with little impact on its price.',
            no: 'En likvid eiendel kan handles raskt med liten innvirkning på prisen.'
          },
          tags: ['liquidity', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a "bull market"?',
            no: 'Hva er et «bull-marked»?'
          },
          answers: [
            { en: 'A market with falling prices', no: 'Et marked med fallende priser' },
            { en: 'A market with rising prices', no: 'Et marked med stigende priser' },
            { en: 'A market that is closed', no: 'Et marked som er stengt' },
            { en: 'A market only for farmers', no: 'Et marked bare for bønder' }
          ],
          correct: 1,
          explanation: {
            en: 'A bull market is a period of generally rising asset prices and optimism.',
            no: 'Et bull-marked er en periode med generelt stigende priser og optimisme.'
          },
          tags: ['bull market', 'terminology']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a "bear market"?',
            no: 'Hva er et «bear-marked»?'
          },
          answers: [
            { en: 'A prolonged period of falling prices', no: 'En langvarig periode med fallende priser' },
            { en: 'A market with record-high prices', no: 'Et marked med rekordhøye priser' },
            { en: 'A market that trades only gold', no: 'Et marked som bare handler gull' },
            { en: 'A weekend market', no: 'Et helgemarked' }
          ],
          correct: 0,
          explanation: {
            en: 'A bear market is marked by sustained price declines, often 20% or more.',
            no: 'Et bear-marked kjennetegnes av vedvarende prisfall, ofte 20 % eller mer.'
          },
          tags: ['bear market', 'terminology']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does a broker do?',
            no: 'Hva gjør en megler?'
          },
          answers: [
            { en: 'Prints money for the central bank', no: 'Trykker penger for sentralbanken' },
            { en: 'Sets tax rates', no: 'Fastsetter skattesatser' },
            { en: 'Arranges trades on behalf of clients', no: 'Gjennomfører handler på vegne av kunder' },
            { en: 'Audits company accounts', no: 'Reviderer selskapers regnskap' }
          ],
          correct: 2,
          explanation: {
            en: 'A broker executes buy and sell orders for clients, usually for a fee or commission.',
            no: 'En megler utfører kjøps- og salgsordrer for kunder, vanligvis mot et gebyr eller en provisjon.'
          },
          tags: ['broker', 'roles']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the foreign exchange (forex) market?',
            no: 'Hva er valutamarkedet (forex)?'
          },
          answers: [
            { en: 'A market for trading currencies', no: 'Et marked for handel med valutaer' },
            { en: 'A market for trading houses', no: 'Et marked for handel med hus' },
            { en: 'A market for trading shares only', no: 'Et marked kun for handel med aksjer' },
            { en: 'A market for government bonds only', no: 'Et marked kun for statsobligasjoner' }
          ],
          correct: 0,
          explanation: {
            en: 'The forex market is where national currencies are traded against one another.',
            no: 'Valutamarkedet er der nasjonale valutaer handles mot hverandre.'
          },
          tags: ['forex', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a stock exchange?',
            no: 'Hva er en børs?'
          },
          answers: [
            { en: 'A central bank branch', no: 'En filial av sentralbanken' },
            { en: 'An organized marketplace for trading securities', no: 'En organisert markedsplass for handel med verdipapirer' },
            { en: 'A type of savings account', no: 'En type sparekonto' },
            { en: 'A tax collection agency', no: 'En skatteinnkrevingsetat' }
          ],
          correct: 1,
          explanation: {
            en: 'A stock exchange is an organized market where securities such as shares are listed and traded.',
            no: 'En børs er et organisert marked der verdipapirer som aksjer noteres og handles.'
          },
          tags: ['stock exchanges', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a ticker symbol?',
            no: 'Hva er en tickerkode?'
          },
          answers: [
            { en: 'A short code identifying a traded security', no: 'En kort kode som identifiserer et verdipapir som handles' },
            { en: 'The price of a bond at maturity', no: 'Prisen på en obligasjon ved forfall' },
            { en: 'A tax form for investors', no: 'Et skatteskjema for investorer' },
            { en: 'A type of trading fee', no: 'En type handelsgebyr' }
          ],
          correct: 0,
          explanation: {
            en: 'A ticker symbol is a short, unique code (e.g. AAPL) used to identify a listed security.',
            no: 'En tickerkode er en kort, unik kode (f.eks. AAPL) som brukes til å identifisere et notert verdipapir.'
          },
          tags: ['ticker', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is market capitalization?',
            no: 'Hva er markedsverdi (market cap)?'
          },
          answers: [
            { en: 'A company total debt', no: 'Et selskaps totale gjeld' },
            { en: 'The yearly profit of a company', no: 'Et selskaps årlige overskudd' },
            { en: 'The total value of a company outstanding shares', no: 'Den samlede verdien av et selskaps utestående aksjer' },
            { en: 'The salary of the CEO', no: 'Lønnen til administrerende direktør' }
          ],
          correct: 2,
          explanation: {
            en: 'Market capitalization equals the share price multiplied by the number of shares outstanding.',
            no: 'Markedsverdi er aksjekursen multiplisert med antall utestående aksjer.'
          },
          tags: ['market cap', 'valuation']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the money market?',
            no: 'Hva er pengemarkedet?'
          },
          answers: [
            { en: 'A market for very short-term debt instruments', no: 'Et marked for svært kortsiktige gjeldsinstrumenter' },
            { en: 'A market for buying real estate', no: 'Et marked for kjøp av eiendom' },
            { en: 'A market for company shares', no: 'Et marked for selskapsaksjer' },
            { en: 'A market for long-term loans only', no: 'Et marked kun for langsiktige lån' }
          ],
          correct: 0,
          explanation: {
            en: 'The money market trades short-term instruments such as Treasury bills and commercial paper.',
            no: 'Pengemarkedet handler kortsiktige instrumenter som statskasseveksler og sertifikater.'
          },
          tags: ['money market', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a commodity in financial markets?',
            no: 'Hva er en råvare i finansmarkeder?'
          },
          answers: [
            { en: 'A share in a technology company', no: 'En aksje i et teknologiselskap' },
            { en: 'A basic raw material such as oil or gold', no: 'Et grunnleggende råstoff som olje eller gull' },
            { en: 'A government bond', no: 'En statsobligasjon' },
            { en: 'A bank deposit', no: 'Et bankinnskudd' }
          ],
          correct: 1,
          explanation: {
            en: 'Commodities are basic goods like oil, gold and wheat that are traded on dedicated markets.',
            no: 'Råvarer er grunnleggende varer som olje, gull og hvete som handles i egne markeder.'
          },
          tags: ['commodities', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a dividend?',
            no: 'Hva er et utbytte?'
          },
          answers: [
            { en: 'A payment a company makes to its shareholders', no: 'En betaling et selskap gjør til sine aksjonærer' },
            { en: 'A fee charged by a stock exchange', no: 'Et gebyr som kreves av en børs' },
            { en: 'A tax on capital gains', no: 'En skatt på kapitalgevinster' },
            { en: 'A loan from a bank', no: 'Et lån fra en bank' }
          ],
          correct: 0,
          explanation: {
            en: 'A dividend is a share of profits distributed by a company to its shareholders.',
            no: 'Et utbytte er en andel av overskuddet som et selskap deler ut til aksjonærene.'
          },
          tags: ['dividend', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the capital market?',
            no: 'Hva er kapitalmarkedet?'
          },
          answers: [
            { en: 'A market for daily groceries', no: 'Et marked for daglige matvarer' },
            { en: 'A market for long-term securities like stocks and bonds', no: 'Et marked for langsiktige verdipapirer som aksjer og obligasjoner' },
            { en: 'A market only for foreign currency', no: 'Et marked kun for utenlandsk valuta' },
            { en: 'A market for short-term loans only', no: 'Et marked kun for kortsiktige lån' }
          ],
          correct: 1,
          explanation: {
            en: 'Capital markets channel long-term funds through instruments such as stocks and bonds.',
            no: 'Kapitalmarkeder kanaliserer langsiktig kapital gjennom instrumenter som aksjer og obligasjoner.'
          },
          tags: ['capital market', 'definition']
        },
        // ---------- MEDIUM ----------
        {
          difficulty: 'medium',
          question: {
            en: 'What is the difference between primary and secondary markets?',
            no: 'Hva er forskjellen mellom primær- og sekundærmarkedet?'
          },
          answers: [
            { en: 'Primary markets issue new securities; secondary markets trade existing ones', no: 'Primærmarkedet utsteder nye verdipapirer; sekundærmarkedet handler eksisterende' },
            { en: 'Primary markets trade bonds; secondary markets trade stocks', no: 'Primærmarkedet handler obligasjoner; sekundærmarkedet handler aksjer' },
            { en: 'Primary markets are domestic; secondary markets are foreign', no: 'Primærmarkedet er innenlandsk; sekundærmarkedet er utenlandsk' },
            { en: 'There is no real difference', no: 'Det er ingen reell forskjell' }
          ],
          correct: 0,
          explanation: {
            en: 'In the primary market companies raise capital by issuing new securities; the secondary market is where investors trade them afterward.',
            no: 'I primærmarkedet henter selskaper kapital ved å utstede nye verdipapirer; i sekundærmarkedet handler investorer dem etterpå.'
          },
          tags: ['primary market', 'secondary market']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the bid-ask spread?',
            no: 'Hva er kjøps-salgs-spreaden (bid-ask)?'
          },
          answers: [
            { en: 'The tax added to each trade', no: 'Skatten som legges til hver handel' },
            { en: 'The difference between the highest buy price and lowest sell price', no: 'Forskjellen mellom høyeste kjøpspris og laveste salgspris' },
            { en: 'The annual return of a stock', no: 'Den årlige avkastningen på en aksje' },
            { en: 'The total volume traded in a day', no: 'Det totale volumet som handles på en dag' }
          ],
          correct: 1,
          explanation: {
            en: 'The bid-ask spread is the gap between the best available buy (bid) and sell (ask) prices, and reflects liquidity and trading cost.',
            no: 'Bid-ask-spreaden er gapet mellom beste kjøpspris (bid) og salgspris (ask), og gjenspeiler likviditet og handelskostnad.'
          },
          tags: ['bid-ask', 'liquidity']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What role do market makers play?',
            no: 'Hvilken rolle spiller market makers?'
          },
          answers: [
            { en: 'They set government interest rates', no: 'De fastsetter statens renter' },
            { en: 'They audit listed companies', no: 'De reviderer noterte selskaper' },
            { en: 'They provide liquidity by quoting buy and sell prices', no: 'De gir likviditet ved å stille kjøps- og salgspriser' },
            { en: 'They collect taxes on trades', no: 'De krever inn skatt på handler' }
          ],
          correct: 2,
          explanation: {
            en: 'Market makers stand ready to buy and sell a security, improving liquidity and earning the spread.',
            no: 'Market makers står klare til å kjøpe og selge et verdipapir, noe som bedrer likviditeten og gir dem spreaden.'
          },
          tags: ['market makers', 'liquidity']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is short selling?',
            no: 'Hva er shortsalg?'
          },
          answers: [
            { en: 'Borrowing and selling an asset hoping to buy it back cheaper', no: 'Å låne og selge en eiendel i håp om å kjøpe den tilbake billigere' },
            { en: 'Selling an asset you bought earlier the same day', no: 'Å selge en eiendel du kjøpte tidligere samme dag' },
            { en: 'Selling shares at a fixed government price', no: 'Å selge aksjer til en fast statlig pris' },
            { en: 'Selling only a small number of shares', no: 'Å selge bare et lite antall aksjer' }
          ],
          correct: 0,
          explanation: {
            en: 'A short seller borrows an asset, sells it, and aims to repurchase it later at a lower price, profiting from the decline.',
            no: 'En shortselger låner en eiendel, selger den og forsøker å kjøpe den tilbake senere til lavere pris, og tjener på fallet.'
          },
          tags: ['short selling', 'strategy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the main economic function of financial markets?',
            no: 'Hva er finansmarkedenes viktigste økonomiske funksjon?'
          },
          answers: [
            { en: 'To set wages across the economy', no: 'Å fastsette lønninger i hele økonomien' },
            { en: 'To allocate capital from savers to borrowers', no: 'Å allokere kapital fra de som sparer til de som låner' },
            { en: 'To print the national currency', no: 'Å trykke den nasjonale valutaen' },
            { en: 'To guarantee profits to investors', no: 'Å garantere overskudd til investorer' }
          ],
          correct: 1,
          explanation: {
            en: 'Financial markets channel savings toward productive investment, allocating capital efficiently.',
            no: 'Finansmarkeder kanaliserer sparing mot produktive investeringer og allokerer kapital effektivt.'
          },
          tags: ['function', 'capital allocation']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What distinguishes exchange-traded from over-the-counter (OTC) markets?',
            no: 'Hva skiller børshandel fra over-the-counter (OTC)-markeder?'
          },
          answers: [
            { en: 'Exchanges are centralized and standardized; OTC trades are bilateral', no: 'Børser er sentraliserte og standardiserte; OTC-handler er bilaterale' },
            { en: 'Exchanges trade only bonds; OTC trades only stocks', no: 'Børser handler bare obligasjoner; OTC handler bare aksjer' },
            { en: 'OTC markets are always larger than exchanges', no: 'OTC-markeder er alltid større enn børser' },
            { en: 'There is no regulatory difference between them', no: 'Det er ingen regulatorisk forskjell mellom dem' }
          ],
          correct: 0,
          explanation: {
            en: 'Exchange trading is centralized with standardized contracts, while OTC trades are negotiated directly between two parties.',
            no: 'Børshandel er sentralisert med standardiserte kontrakter, mens OTC-handler forhandles direkte mellom to parter.'
          },
          tags: ['otc', 'exchanges']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is arbitrage?',
            no: 'Hva er arbitrasje?'
          },
          answers: [
            { en: 'Profiting from price differences for the same asset in different markets', no: 'Å tjene på prisforskjeller for samme eiendel i ulike markeder' },
            { en: 'Investing only in government bonds', no: 'Å investere kun i statsobligasjoner' },
            { en: 'Holding an asset for many years', no: 'Å holde en eiendel i mange år' },
            { en: 'Borrowing to buy a house', no: 'Å låne for å kjøpe et hus' }
          ],
          correct: 0,
          explanation: {
            en: 'Arbitrage exploits price discrepancies for the same asset, and such trading tends to push prices back into line.',
            no: 'Arbitrasje utnytter prisforskjeller for samme eiendel, og slik handel presser prisene tilbake i samsvar.'
          },
          tags: ['arbitrage', 'efficiency']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the difference between a market order and a limit order?',
            no: 'Hva er forskjellen mellom en markedsordre og en limitordre?'
          },
          answers: [
            { en: 'A market order trades at the best available price; a limit order sets a price condition', no: 'En markedsordre handler til beste tilgjengelige pris; en limitordre setter en prisbetingelse' },
            { en: 'A market order is free; a limit order always has a fee', no: 'En markedsordre er gratis; en limitordre har alltid et gebyr' },
            { en: 'A market order is for bonds; a limit order is for stocks', no: 'En markedsordre er for obligasjoner; en limitordre er for aksjer' },
            { en: 'They are two names for the same thing', no: 'De er to navn på det samme' }
          ],
          correct: 0,
          explanation: {
            en: 'A market order executes immediately at the current price, while a limit order only executes at a specified price or better.',
            no: 'En markedsordre utføres umiddelbart til gjeldende pris, mens en limitordre kun utføres til en angitt pris eller bedre.'
          },
          tags: ['orders', 'trading']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How do rising interest rates typically affect stock prices?',
            no: 'Hvordan påvirker stigende renter vanligvis aksjekurser?'
          },
          answers: [
            { en: 'They tend to push stock prices down', no: 'De har en tendens til å presse aksjekursene ned' },
            { en: 'They always raise stock prices', no: 'De hever alltid aksjekursene' },
            { en: 'They have no effect at all', no: 'De har ingen effekt i det hele tatt' },
            { en: 'They only affect bond prices, never stocks', no: 'De påvirker bare obligasjonskurser, aldri aksjer' }
          ],
          correct: 0,
          explanation: {
            en: 'Higher rates raise borrowing costs and discount future earnings more heavily, which generally weighs on stock prices.',
            no: 'Høyere renter øker lånekostnadene og diskonterer fremtidig inntjening hardere, noe som generelt tynger aksjekursene.'
          },
          tags: ['interest rates', 'valuation']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a stock index such as the S&P 500?',
            no: 'Hva er en aksjeindeks som S&P 500?'
          },
          answers: [
            { en: 'A single very large company', no: 'Ett enkelt svært stort selskap' },
            { en: 'A measure tracking the performance of a group of stocks', no: 'Et mål som følger utviklingen til en gruppe aksjer' },
            { en: 'A tax rate on capital gains', no: 'En skattesats på kapitalgevinster' },
            { en: 'A government savings bond', no: 'En statlig spareobligasjon' }
          ],
          correct: 1,
          explanation: {
            en: 'An index aggregates the prices of many stocks to gauge how a market or segment is performing overall.',
            no: 'En indeks samler prisene på mange aksjer for å måle hvordan et marked eller segment utvikler seg samlet.'
          },
          tags: ['index', 's&p 500']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the role of an investment bank in an IPO?',
            no: 'Hvilken rolle har en investeringsbank i en børsintroduksjon?'
          },
          answers: [
            { en: 'It taxes the new shares', no: 'Den skattlegger de nye aksjene' },
            { en: 'It regulates the stock exchange', no: 'Den regulerer børsen' },
            { en: 'It underwrites and helps sell the new shares', no: 'Den garanterer og hjelper med å selge de nye aksjene' },
            { en: 'It guarantees the share price will rise', no: 'Den garanterer at aksjekursen vil stige' }
          ],
          correct: 2,
          explanation: {
            en: 'Investment banks underwrite IPOs, helping price the shares and distribute them to investors.',
            no: 'Investeringsbanker garanterer børsintroduksjoner, hjelper med å prise aksjene og distribuere dem til investorer.'
          },
          tags: ['investment banks', 'ipo']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What typically causes a speculative market bubble?',
            no: 'Hva forårsaker vanligvis en spekulativ markedsboble?'
          },
          answers: [
            { en: 'Prices rising far above fundamental value driven by optimism', no: 'Priser som stiger langt over fundamental verdi drevet av optimisme' },
            { en: 'Government setting fixed low prices', no: 'At staten setter faste lave priser' },
            { en: 'A fall in the money supply', no: 'En reduksjon i pengemengden' },
            { en: 'Companies paying high dividends', no: 'At selskaper betaler høye utbytter' }
          ],
          correct: 0,
          explanation: {
            en: 'Bubbles form when prices detach from fundamentals as buyers expect ever-rising prices, until confidence collapses.',
            no: 'Bobler oppstår når priser løsriver seg fra fundamentale verdier fordi kjøpere venter stadig stigende priser, helt til tilliten kollapser.'
          },
          tags: ['bubbles', 'speculation']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is high-frequency trading (HFT)?',
            no: 'Hva er høyfrekvenshandel (HFT)?'
          },
          answers: [
            { en: 'Trading large blocks of shares once a year', no: 'Å handle store aksjeposter én gang i året' },
            { en: 'Using algorithms to execute many trades at very high speed', no: 'Å bruke algoritmer til å utføre mange handler i svært høy hastighet' },
            { en: 'Trading only at the market open', no: 'Å handle bare ved markedsåpning' },
            { en: 'Buying and holding for decades', no: 'Å kjøpe og holde i tiår' }
          ],
          correct: 1,
          explanation: {
            en: 'HFT uses powerful algorithms to place and cancel large numbers of orders in fractions of a second.',
            no: 'HFT bruker kraftige algoritmer til å plassere og kansellere store mengder ordrer på brøkdeler av et sekund.'
          },
          tags: ['hft', 'technology']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why is price discovery an important function of markets?',
            no: 'Hvorfor er prisoppdagelse en viktig funksjon i markeder?'
          },
          answers: [
            { en: 'It guarantees every investor a profit', no: 'Den garanterer hver investor et overskudd' },
            { en: 'It sets fixed prices that never change', no: 'Den setter faste priser som aldri endres' },
            { en: 'It reflects available information into prices through trading', no: 'Den reflekterer tilgjengelig informasjon i prisene gjennom handel' },
            { en: 'It removes the need for regulation', no: 'Den fjerner behovet for regulering' }
          ],
          correct: 2,
          explanation: {
            en: 'Through buying and selling, markets aggregate information into prices, signaling value to the wider economy.',
            no: 'Gjennom kjøp og salg samler markeder informasjon i prisene og signaliserer verdi til resten av økonomien.'
          },
          tags: ['price discovery', 'function']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does it mean for a market to be volatile?',
            no: 'Hva betyr det at et marked er volatilt?'
          },
          answers: [
            { en: 'Prices move sharply and frequently', no: 'Prisene beveger seg kraftig og hyppig' },
            { en: 'Prices are fixed by the government', no: 'Prisene er fastsatt av staten' },
            { en: 'Trading is suspended', no: 'Handelen er suspendert' },
            { en: 'Only bonds are traded', no: 'Kun obligasjoner handles' }
          ],
          correct: 0,
          explanation: {
            en: 'Volatility measures how much and how quickly prices move; high volatility means large, rapid swings.',
            no: 'Volatilitet måler hvor mye og hvor raskt prisene beveger seg; høy volatilitet betyr store, raske svingninger.'
          },
          tags: ['volatility', 'risk']
        },
        // ---------- HARD ----------
        {
          difficulty: 'hard',
          question: {
            en: 'According to the efficient market hypothesis (EMH), what does the "semi-strong" form claim?',
            no: 'Hva hevder den «halvsterke» formen av hypotesen om effisiente markeder (EMH)?'
          },
          answers: [
            { en: 'Prices reflect only past price data', no: 'Priser gjenspeiler bare historiske prisdata' },
            { en: 'Prices reflect all publicly available information', no: 'Priser gjenspeiler all offentlig tilgjengelig informasjon' },
            { en: 'Prices reflect all information including private insider data', no: 'Priser gjenspeiler all informasjon, inkludert privat innsideinformasjon' },
            { en: 'Prices never reflect any information', no: 'Priser gjenspeiler aldri noen informasjon' }
          ],
          correct: 1,
          explanation: {
            en: 'The semi-strong form holds that prices incorporate all public information, so neither technical nor fundamental analysis yields consistent excess returns.',
            no: 'Den halvsterke formen hevder at priser inneholder all offentlig informasjon, slik at verken teknisk eller fundamental analyse gir konsekvent meravkastning.'
          },
          tags: ['emh', 'efficiency']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is systemic risk in financial markets?',
            no: 'Hva er systemrisiko i finansmarkeder?'
          },
          answers: [
            { en: 'The risk that one firm failure cascades through the whole system', no: 'Risikoen for at ett selskaps fall sprer seg gjennom hele systemet' },
            { en: 'The risk that a single stock falls', no: 'Risikoen for at én enkelt aksje faller' },
            { en: 'The risk of a typo in a trade', no: 'Risikoen for en skrivefeil i en handel' },
            { en: 'The risk of paying too much commission', no: 'Risikoen for å betale for mye provisjon' }
          ],
          correct: 0,
          explanation: {
            en: 'Systemic risk is the danger that the collapse of one institution or market triggers broad contagion across the financial system.',
            no: 'Systemrisiko er faren for at kollapsen i én institusjon eller ett marked utløser bred smitte gjennom hele finanssystemet.'
          },
          tags: ['systemic risk', 'crises']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What role did securitization of subprime mortgages play in the 2008 crisis?',
            no: 'Hvilken rolle spilte verdipapirisering av subprime-boliglån i krisen i 2008?'
          },
          answers: [
            { en: 'It had no measurable effect', no: 'Den hadde ingen målbar effekt' },
            { en: 'It eliminated all credit risk', no: 'Den fjernet all kredittrisiko' },
            { en: 'It spread hidden mortgage risk widely through the financial system', no: 'Den spredte skjult boliglånsrisiko bredt gjennom finanssystemet' },
            { en: 'It only affected a single regional bank', no: 'Den påvirket bare én regional bank' }
          ],
          correct: 2,
          explanation: {
            en: 'Bundling risky mortgages into complex securities dispersed and obscured their risk, amplifying losses when defaults rose.',
            no: 'Å bunte risikable boliglån i komplekse verdipapirer spredte og skjulte risikoen, og forsterket tapene da misligholdene økte.'
          },
          tags: ['2008 crisis', 'securitization']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the purpose of a stock-market circuit breaker?',
            no: 'Hva er formålet med en «circuit breaker» i aksjemarkedet?'
          },
          answers: [
            { en: 'To temporarily halt trading during extreme price moves', no: 'Å midlertidig stanse handelen ved ekstreme prisbevegelser' },
            { en: 'To guarantee a minimum daily return', no: 'Å garantere en minste daglig avkastning' },
            { en: 'To set the closing price each day', no: 'Å fastsette sluttkursen hver dag' },
            { en: 'To collect transaction taxes', no: 'Å kreve inn transaksjonsskatt' }
          ],
          correct: 0,
          explanation: {
            en: 'Circuit breakers pause trading when prices fall sharply, giving participants time to absorb information and curb panic.',
            no: 'Circuit breakers pauser handelen ved kraftige prisfall, slik at aktørene får tid til å bearbeide informasjon og dempe panikk.'
          },
          tags: ['circuit breakers', 'regulation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What does "limits to arbitrage" describe?',
            no: 'Hva beskriver «grenser for arbitrasje» (limits to arbitrage)?'
          },
          answers: [
            { en: 'A legal ban on all arbitrage', no: 'Et juridisk forbud mot all arbitrasje' },
            { en: 'Constraints that prevent arbitrageurs from fully correcting mispricing', no: 'Begrensninger som hindrer arbitrasjører i å fullt ut korrigere feilprising' },
            { en: 'The maximum profit allowed per trade', no: 'Maksimalt tillatt overskudd per handel' },
            { en: 'A rule that prices must converge instantly', no: 'En regel om at priser må konvergere umiddelbart' }
          ],
          correct: 1,
          explanation: {
            en: 'Costs, capital constraints and risk can stop arbitrageurs from eliminating mispricings, so prices may stay irrational for a while.',
            no: 'Kostnader, kapitalbegrensninger og risiko kan hindre arbitrasjører i å fjerne feilprising, slik at priser kan forbli irrasjonelle en stund.'
          },
          tags: ['arbitrage', 'behavioral finance']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What are "dark pools"?',
            no: 'Hva er «dark pools»?'
          },
          answers: [
            { en: 'Illegal markets banned in every country', no: 'Ulovlige markeder som er forbudt i alle land' },
            { en: 'Private trading venues where orders are not publicly displayed', no: 'Private handelsplasser der ordrer ikke vises offentlig' },
            { en: 'Markets that trade only at midnight', no: 'Markeder som bare handler ved midnatt' },
            { en: 'Funds that invest only in oil', no: 'Fond som bare investerer i olje' }
          ],
          correct: 1,
          explanation: {
            en: 'Dark pools let large investors trade without revealing their orders beforehand, reducing market impact but lowering transparency.',
            no: 'Dark pools lar store investorer handle uten å avsløre ordrene på forhånd, noe som reduserer markedspåvirkning, men svekker åpenheten.'
          },
          tags: ['dark pools', 'microstructure']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the distinction between liquidity and solvency crucial in a financial crisis?',
            no: 'Hvorfor er skillet mellom likviditet og soliditet avgjørende i en finanskrise?'
          },
          answers: [
            { en: 'They are identical concepts', no: 'De er identiske begreper' },
            { en: 'A solvent firm can still fail if it cannot raise cash quickly', no: 'Et solvent selskap kan likevel feile hvis det ikke får tak i kontanter raskt' },
            { en: 'Liquidity matters only for governments', no: 'Likviditet betyr bare noe for stater' },
            { en: 'Solvency problems are always temporary', no: 'Soliditetsproblemer er alltid midlertidige' }
          ],
          correct: 1,
          explanation: {
            en: 'A solvent institution (assets exceed liabilities) can still collapse from a liquidity crunch if it cannot fund itself, which is why lenders of last resort exist.',
            no: 'En solvent institusjon (eiendeler overstiger gjeld) kan likevel kollapse av en likviditetsskvis hvis den ikke kan finansiere seg, og derfor finnes långivere i siste instans.'
          },
          tags: ['liquidity', 'solvency']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is "shadow banking"?',
            no: 'Hva er «skyggebankvirksomhet» (shadow banking)?'
          },
          answers: [
            { en: 'Illegal money laundering', no: 'Ulovlig hvitvasking av penger' },
            { en: 'Credit intermediation by non-bank institutions outside normal bank regulation', no: 'Kredittformidling av institusjoner utenfor bank, utenfor vanlig bankregulering' },
            { en: 'Banking done only at night', no: 'Bankvirksomhet som bare skjer om natten' },
            { en: 'A central bank secret reserve', no: 'En hemmelig reserve i sentralbanken' }
          ],
          correct: 1,
          explanation: {
            en: 'Shadow banking refers to credit provided by entities like money-market funds and hedge funds that operate outside traditional bank oversight.',
            no: 'Skyggebankvirksomhet viser til kreditt fra aktører som pengemarkedsfond og hedgefond som opererer utenfor tradisjonelt banktilsyn.'
          },
          tags: ['shadow banking', 'regulation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What primarily caused the 2010 "Flash Crash" in US markets?',
            no: 'Hva forårsaket hovedsakelig «Flash Crash» i amerikanske markeder i 2010?'
          },
          answers: [
            { en: 'A central bank rate hike', no: 'En renteheving fra sentralbanken' },
            { en: 'Interactions among automated high-speed trading algorithms', no: 'Samspill mellom automatiserte høyhastighets handelsalgoritmer' },
            { en: 'A government default', no: 'Et statlig mislighold' },
            { en: 'A sudden ban on short selling', no: 'Et plutselig forbud mot shortsalg' }
          ],
          correct: 1,
          explanation: {
            en: 'On 6 May 2010, the rapid interaction of algorithmic and high-frequency trades briefly evaporated liquidity, sending prices plunging and rebounding within minutes.',
            no: 'Den 6. mai 2010 fikk det raske samspillet mellom algoritmiske og høyfrekvente handler likviditeten til kortvarig å forsvinne, og prisene stupte og spratt tilbake i løpet av minutter.'
          },
          tags: ['flash crash', 'hft']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does the behavioral finance critique challenge the efficient market hypothesis?',
            no: 'Hvordan utfordrer atferdsfinans-kritikken hypotesen om effisiente markeder?'
          },
          answers: [
            { en: 'It argues investors are always perfectly rational', no: 'Den hevder at investorer alltid er fullkomment rasjonelle' },
            { en: 'It argues systematic psychological biases can cause persistent mispricing', no: 'Den hevder at systematiske psykologiske skjevheter kan gi vedvarende feilprising' },
            { en: 'It claims prices are set only by governments', no: 'Den hevder at priser bare settes av staten' },
            { en: 'It denies that markets exist', no: 'Den benekter at markeder finnes' }
          ],
          correct: 1,
          explanation: {
            en: 'Behavioral finance shows that biases like overconfidence and herding can move prices away from fundamentals in ways the EMH does not predict.',
            no: 'Atferdsfinans viser at skjevheter som overdreven selvtillit og flokkadferd kan flytte priser bort fra fundamentale verdier på måter EMH ikke forutsier.'
          },
          tags: ['behavioral finance', 'emh']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What does the VIX index measure?',
            no: 'Hva måler VIX-indeksen?'
          },
          answers: [
            { en: 'Expected near-term volatility implied by S&P 500 options', no: 'Forventet kortsiktig volatilitet implisert av S&P 500-opsjoner' },
            { en: 'The total value of the US stock market', no: 'Den totale verdien av det amerikanske aksjemarkedet' },
            { en: 'The current US inflation rate', no: 'Den gjeldende amerikanske inflasjonsraten' },
            { en: 'The number of shares traded daily', no: 'Antall aksjer som handles daglig' }
          ],
          correct: 0,
          explanation: {
            en: 'The VIX, often called the "fear gauge," reflects the market expectation of volatility derived from S&P 500 option prices.',
            no: 'VIX, ofte kalt «fryktbarometeret», gjenspeiler markedets forventning om volatilitet utledet fra prisene på S&P 500-opsjoner.'
          },
          tags: ['vix', 'volatility']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why can information asymmetry lead to market failure?',
            no: 'Hvorfor kan informasjonsasymmetri føre til markedssvikt?'
          },
          answers: [
            { en: 'Because all participants always have equal information', no: 'Fordi alle aktører alltid har lik informasjon' },
            { en: 'Because one party knowing more can cause adverse selection', no: 'Fordi at én part vet mer kan føre til uheldig utvalg (adverse selection)' },
            { en: 'Because it lowers all transaction costs', no: 'Fordi det senker alle transaksjonskostnader' },
            { en: 'Because it guarantees fair prices', no: 'Fordi det garanterer rettferdige priser' }
          ],
          correct: 1,
          explanation: {
            en: 'When sellers know more than buyers (as in Akerlof "lemons" problem), high-quality assets can be driven out, impairing the market.',
            no: 'Når selgere vet mer enn kjøpere (som i Akerlofs «lemons»-problem), kan eiendeler av høy kvalitet bli presset ut, noe som svekker markedet.'
          },
          tags: ['information asymmetry', 'market failure']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the lender of last resort function of a central bank?',
            no: 'Hva er sentralbankens funksjon som långiver i siste instans?'
          },
          answers: [
            { en: 'Providing emergency liquidity to solvent but illiquid institutions', no: 'Å gi nødlikviditet til solvente, men illikvide institusjoner' },
            { en: 'Guaranteeing profits for all banks', no: 'Å garantere overskudd for alle banker' },
            { en: 'Buying every failing company', no: 'Å kjøpe alle selskaper som feiler' },
            { en: 'Setting stock prices directly', no: 'Å fastsette aksjekurser direkte' }
          ],
          correct: 0,
          explanation: {
            en: 'A central bank lends to fundamentally sound institutions facing a liquidity squeeze, aiming to halt panics and contagion.',
            no: 'En sentralbank låner ut til grunnleggende sunne institusjoner som møter en likviditetsskvis, for å stanse panikk og smitte.'
          },
          tags: ['central bank', 'liquidity']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a key argument against a financial transaction tax (Tobin tax)?',
            no: 'Hva er et sentralt argument mot en finanstransaksjonsskatt (Tobin-skatt)?'
          },
          answers: [
            { en: 'It would guarantee higher prices', no: 'Den ville garantere høyere priser' },
            { en: 'It could reduce liquidity and widen spreads', no: 'Den kan redusere likviditet og øke spreadene' },
            { en: 'It would eliminate all market risk', no: 'Den ville fjerne all markedsrisiko' },
            { en: 'It applies only to government bonds', no: 'Den gjelder bare statsobligasjoner' }
          ],
          correct: 1,
          explanation: {
            en: 'Critics argue a per-trade tax discourages trading, reducing liquidity and potentially raising transaction costs and spreads.',
            no: 'Kritikere hevder at en skatt per handel demper handelen, reduserer likviditeten og kan øke transaksjonskostnader og spreader.'
          },
          tags: ['tobin tax', 'policy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What does "contagion" mean in the context of financial crises?',
            no: 'Hva betyr «smitte» (contagion) i sammenheng med finanskriser?'
          },
          answers: [
            { en: 'A disease spreading among traders', no: 'En sykdom som sprer seg blant handlere' },
            { en: 'The spread of financial distress from one market or country to others', no: 'Spredning av finansiell uro fra ett marked eller land til andre' },
            { en: 'A single stock falling on its own', no: 'En enkelt aksje som faller alene' },
            { en: 'A rise in the central bank balance sheet', no: 'En økning i sentralbankens balanse' }
          ],
          correct: 1,
          explanation: {
            en: 'Contagion describes how shocks in one market transmit to others through linkages, fire sales and shifts in confidence.',
            no: 'Smitte beskriver hvordan sjokk i ett marked overføres til andre gjennom koblinger, tvangssalg og endringer i tillit.'
          },
          tags: ['contagion', 'crises']
        }
      ]
    },
    {
      slug: 'stocks',
      name: { en: 'Stocks', no: 'Aksjer' },
      questions: [
        // ---------- EASY ----------
        {
          difficulty: 'easy',
          question: {
            en: 'What is a stock (share)?',
            no: 'Hva er en aksje?'
          },
          answers: [
            { en: 'A unit of ownership in a company', no: 'En eierandel i et selskap' },
            { en: 'A loan made to a government', no: 'Et lån gitt til en stat' },
            { en: 'A type of insurance policy', no: 'En type forsikringspolise' },
            { en: 'A bank savings account', no: 'En bankkonto for sparing' }
          ],
          correct: 0,
          explanation: {
            en: 'A share represents partial ownership of a company and a claim on its assets and earnings.',
            no: 'En aksje representerer en deleierskap i et selskap og et krav på dets eiendeler og inntjening.'
          },
          tags: ['definition', 'ownership']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'A person who owns shares in a company is called a what?',
            no: 'En person som eier aksjer i et selskap kalles hva?'
          },
          answers: [
            { en: 'A creditor', no: 'En kreditor' },
            { en: 'A shareholder', no: 'En aksjonær' },
            { en: 'A broker', no: 'En megler' },
            { en: 'A regulator', no: 'En tilsynsmyndighet' }
          ],
          correct: 1,
          explanation: {
            en: 'Owners of a company shares are called shareholders or stockholders.',
            no: 'Eiere av et selskaps aksjer kalles aksjonærer.'
          },
          tags: ['shareholder', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'How can shareholders earn income from stocks?',
            no: 'Hvordan kan aksjonærer tjene inntekt på aksjer?'
          },
          answers: [
            { en: 'Only through fixed interest', no: 'Bare gjennom fast rente' },
            { en: 'Through dividends and price appreciation', no: 'Gjennom utbytte og kursøkning' },
            { en: 'Only when the company is sold', no: 'Bare når selskapet selges' },
            { en: 'Through government subsidies', no: 'Gjennom statlige subsidier' }
          ],
          correct: 1,
          explanation: {
            en: 'Shareholders gain from dividends and from selling shares at a higher price than they paid.',
            no: 'Aksjonærer tjener på utbytte og på å selge aksjer til en høyere pris enn de betalte.'
          },
          tags: ['returns', 'dividends']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is common stock?',
            no: 'Hva er ordinære aksjer?'
          },
          answers: [
            { en: 'Shares that usually carry voting rights', no: 'Aksjer som vanligvis gir stemmerett' },
            { en: 'A bond issued by a company', no: 'En obligasjon utstedt av et selskap' },
            { en: 'A guaranteed fixed dividend with no ownership', no: 'Et garantert fast utbytte uten eierskap' },
            { en: 'A short-term bank loan', no: 'Et kortsiktig banklån' }
          ],
          correct: 0,
          explanation: {
            en: 'Common stock represents ownership and typically gives holders the right to vote at shareholder meetings.',
            no: 'Ordinære aksjer representerer eierskap og gir vanligvis innehaverne stemmerett på generalforsamlinger.'
          },
          tags: ['common stock', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does it mean when a stock price "appreciates"?',
            no: 'Hva betyr det når en aksjekurs «stiger i verdi»?'
          },
          answers: [
            { en: 'Its price decreases', no: 'Prisen synker' },
            { en: 'Its price increases', no: 'Prisen øker' },
            { en: 'It pays a dividend', no: 'Den betaler utbytte' },
            { en: 'It is removed from the exchange', no: 'Den fjernes fra børsen' }
          ],
          correct: 1,
          explanation: {
            en: 'Appreciation means the market price of the stock has risen.',
            no: 'Verdistigning betyr at markedsprisen på aksjen har økt.'
          },
          tags: ['appreciation', 'terminology']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a "blue-chip" stock?',
            no: 'Hva er en «blue-chip»-aksje?'
          },
          answers: [
            { en: 'A share in a large, well-established, financially sound company', no: 'En aksje i et stort, veletablert og økonomisk solid selskap' },
            { en: 'A share that is about to be delisted', no: 'En aksje som er i ferd med å bli strøket fra børsen' },
            { en: 'A government bond', no: 'En statsobligasjon' },
            { en: 'A penny stock', no: 'En øreaksje (penny stock)' }
          ],
          correct: 0,
          explanation: {
            en: 'Blue-chip stocks are shares of large, reputable companies with a history of stable performance.',
            no: 'Blue-chip-aksjer er aksjer i store, anerkjente selskaper med en historie med stabil utvikling.'
          },
          tags: ['blue chip', 'terminology']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a stock split?',
            no: 'Hva er en aksjesplitt?'
          },
          answers: [
            { en: 'Dividing existing shares into more shares at a lower price each', no: 'Å dele eksisterende aksjer i flere aksjer til lavere pris hver' },
            { en: 'Selling all company shares to one buyer', no: 'Å selge alle selskapets aksjer til én kjøper' },
            { en: 'Cancelling a company shares', no: 'Å annullere et selskaps aksjer' },
            { en: 'Merging two companies', no: 'Å slå sammen to selskaper' }
          ],
          correct: 0,
          explanation: {
            en: 'In a stock split, each share is divided into several, lowering the price per share while keeping total value the same.',
            no: 'Ved en aksjesplitt deles hver aksje i flere, noe som senker prisen per aksje mens totalverdien holdes uendret.'
          },
          tags: ['stock split', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does "going public" mean for a company?',
            no: 'Hva betyr det for et selskap å «bli børsnotert»?'
          },
          answers: [
            { en: 'Selling its shares to the general public for the first time', no: 'Å selge sine aksjer til allmennheten for første gang' },
            { en: 'Declaring bankruptcy', no: 'Å erklære seg konkurs' },
            { en: 'Closing all its factories', no: 'Å stenge alle fabrikkene sine' },
            { en: 'Becoming a government agency', no: 'Å bli en statlig etat' }
          ],
          correct: 0,
          explanation: {
            en: 'Going public means offering shares to outside investors, usually through an IPO.',
            no: 'Å bli børsnotert betyr å tilby aksjer til eksterne investorer, vanligvis gjennom en børsintroduksjon.'
          },
          tags: ['ipo', 'going public']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is preferred stock generally known for?',
            no: 'Hva er preferanseaksjer vanligvis kjent for?'
          },
          answers: [
            { en: 'Strong voting power in all decisions', no: 'Sterk stemmerett i alle beslutninger' },
            { en: 'Priority for dividends over common stock', no: 'Fortrinnsrett til utbytte foran ordinære aksjer' },
            { en: 'Being completely risk-free', no: 'Å være helt risikofri' },
            { en: 'Being issued only by governments', no: 'Å bli utstedt kun av stater' }
          ],
          correct: 1,
          explanation: {
            en: 'Preferred shares usually pay fixed dividends and rank ahead of common shares for payouts, but often lack voting rights.',
            no: 'Preferanseaksjer betaler vanligvis fast utbytte og prioriteres foran ordinære aksjer ved utbetalinger, men mangler ofte stemmerett.'
          },
          tags: ['preferred stock', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a portfolio?',
            no: 'Hva er en portefølje?'
          },
          answers: [
            { en: 'A single company annual report', no: 'En enkelt bedrifts årsrapport' },
            { en: 'A collection of investments held by an investor', no: 'En samling investeringer som en investor eier' },
            { en: 'A type of stock exchange', no: 'En type børs' },
            { en: 'A government tax form', no: 'Et statlig skatteskjema' }
          ],
          correct: 1,
          explanation: {
            en: 'A portfolio is the combined set of assets, such as stocks and bonds, that an investor owns.',
            no: 'En portefølje er den samlede mengden eiendeler, som aksjer og obligasjoner, som en investor eier.'
          },
          tags: ['portfolio', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a capital gain on a stock?',
            no: 'Hva er en kapitalgevinst på en aksje?'
          },
          answers: [
            { en: 'The dividend paid each year', no: 'Utbyttet som betales hvert år' },
            { en: 'The profit from selling it above the purchase price', no: 'Gevinsten ved å selge den over kjøpsprisen' },
            { en: 'A fee paid to the broker', no: 'Et gebyr betalt til megleren' },
            { en: 'The interest the company pays', no: 'Renten selskapet betaler' }
          ],
          correct: 1,
          explanation: {
            en: 'A capital gain is the profit earned when an asset is sold for more than it cost.',
            no: 'En kapitalgevinst er gevinsten man får når en eiendel selges for mer enn den kostet.'
          },
          tags: ['capital gain', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is an equity?',
            no: 'Hva er egenkapital (equity) i denne sammenhengen?'
          },
          answers: [
            { en: 'Another word for ownership shares in a company', no: 'Et annet ord for eierandeler i et selskap' },
            { en: 'A type of loan', no: 'En type lån' },
            { en: 'A tax on profits', no: 'En skatt på overskudd' },
            { en: 'A foreign currency', no: 'En utenlandsk valuta' }
          ],
          correct: 0,
          explanation: {
            en: 'In markets, "equities" is another term for stocks, representing ownership in companies.',
            no: 'I markeder er «equities» et annet uttrykk for aksjer, som representerer eierskap i selskaper.'
          },
          tags: ['equity', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a dividend yield?',
            no: 'Hva er direkteavkastning (dividend yield)?'
          },
          answers: [
            { en: 'The annual dividend as a percentage of the share price', no: 'Det årlige utbyttet som en prosent av aksjekursen' },
            { en: 'The total profit of the company', no: 'Selskapets totale overskudd' },
            { en: 'The number of shares outstanding', no: 'Antall utestående aksjer' },
            { en: 'The tax rate on dividends', no: 'Skattesatsen på utbytte' }
          ],
          correct: 0,
          explanation: {
            en: 'Dividend yield expresses the annual dividend relative to the current share price as a percentage.',
            no: 'Direkteavkastning uttrykker det årlige utbyttet i forhold til gjeldende aksjekurs som en prosent.'
          },
          tags: ['dividend yield', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'When a company performs poorly, what often happens to its share price?',
            no: 'Når et selskap presterer dårlig, hva skjer ofte med aksjekursen?'
          },
          answers: [
            { en: 'It tends to fall', no: 'Den har en tendens til å falle' },
            { en: 'It is fixed by law', no: 'Den fastsettes ved lov' },
            { en: 'It always stays the same', no: 'Den holder seg alltid lik' },
            { en: 'It is set by the central bank', no: 'Den fastsettes av sentralbanken' }
          ],
          correct: 0,
          explanation: {
            en: 'Poor performance and weak prospects usually reduce demand for a stock, lowering its price.',
            no: 'Svak prestasjon og dårlige utsikter reduserer vanligvis etterspørselen etter en aksje og senker prisen.'
          },
          tags: ['price', 'fundamentals']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is an exchange-traded fund (ETF)?',
            no: 'Hva er et børshandlet fond (ETF)?'
          },
          answers: [
            { en: 'A single company stock', no: 'En enkelt bedrifts aksje' },
            { en: 'A fund holding many assets that trades like a stock', no: 'Et fond som eier mange eiendeler og handles som en aksje' },
            { en: 'A government savings bond', no: 'En statlig spareobligasjon' },
            { en: 'A type of bank account', no: 'En type bankkonto' }
          ],
          correct: 1,
          explanation: {
            en: 'An ETF holds a basket of assets, like an index, but its shares trade on an exchange throughout the day.',
            no: 'Et ETF eier en kurv av eiendeler, som en indeks, men andelene handles på en børs gjennom dagen.'
          },
          tags: ['etf', 'definition']
        },
        // ---------- MEDIUM ----------
        {
          difficulty: 'medium',
          question: {
            en: 'What does the price-to-earnings (P/E) ratio measure?',
            no: 'Hva måler pris/fortjeneste-forholdet (P/E)?'
          },
          answers: [
            { en: 'A company total debt', no: 'Et selskaps totale gjeld' },
            { en: 'The share price relative to earnings per share', no: 'Aksjekursen i forhold til fortjeneste per aksje' },
            { en: 'The dividend paid per year', no: 'Utbyttet som betales per år' },
            { en: 'The number of employees', no: 'Antall ansatte' }
          ],
          correct: 1,
          explanation: {
            en: 'The P/E ratio compares price to earnings per share, indicating how much investors pay per unit of profit.',
            no: 'P/E-forholdet sammenligner pris med fortjeneste per aksje og viser hvor mye investorer betaler per enhet overskudd.'
          },
          tags: ['p/e ratio', 'valuation']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why do growth stocks often pay little or no dividend?',
            no: 'Hvorfor betaler vekstaksjer ofte lite eller ingen utbytte?'
          },
          answers: [
            { en: 'They reinvest profits to expand the business', no: 'De reinvesterer overskudd for å utvide virksomheten' },
            { en: 'They are legally banned from paying dividends', no: 'De er ved lov forbudt å betale utbytte' },
            { en: 'They have no shareholders', no: 'De har ingen aksjonærer' },
            { en: 'They are owned only by governments', no: 'De eies bare av stater' }
          ],
          correct: 0,
          explanation: {
            en: 'Growth companies typically plow earnings back into expansion rather than distributing them, hoping for higher future value.',
            no: 'Vekstselskaper pløyer vanligvis inntjeningen tilbake til ekspansjon i stedet for å dele den ut, i håp om høyere fremtidig verdi.'
          },
          tags: ['growth stocks', 'dividends']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the difference between growth and value stocks?',
            no: 'Hva er forskjellen mellom vekstaksjer og verdiaksjer?'
          },
          answers: [
            { en: 'Growth stocks have high expected expansion; value stocks appear underpriced relative to fundamentals', no: 'Vekstaksjer har høy forventet ekspansjon; verdiaksjer fremstår underpriset i forhold til fundamentale verdier' },
            { en: 'Growth stocks are bonds; value stocks are shares', no: 'Vekstaksjer er obligasjoner; verdiaksjer er aksjer' },
            { en: 'Value stocks never pay dividends', no: 'Verdiaksjer betaler aldri utbytte' },
            { en: 'There is no real difference', no: 'Det er ingen reell forskjell' }
          ],
          correct: 0,
          explanation: {
            en: 'Growth investing targets fast-expanding firms, while value investing seeks stocks trading below their intrinsic worth.',
            no: 'Vekstinvestering retter seg mot raskt voksende selskaper, mens verdiinvestering søker aksjer som handles under sin egenverdi.'
          },
          tags: ['growth', 'value']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What rights do common shareholders typically have?',
            no: 'Hvilke rettigheter har ordinære aksjonærer vanligvis?'
          },
          answers: [
            { en: 'Guaranteed repayment before all creditors', no: 'Garantert tilbakebetaling foran alle kreditorer' },
            { en: 'Voting on major corporate decisions and electing the board', no: 'Stemmerett i store selskapsbeslutninger og valg av styret' },
            { en: 'A fixed interest payment every year', no: 'En fast rentebetaling hvert år' },
            { en: 'The right to set their own dividend', no: 'Rett til å fastsette sitt eget utbytte' }
          ],
          correct: 1,
          explanation: {
            en: 'Common shareholders usually vote on board members and major decisions, but rank last in a liquidation.',
            no: 'Ordinære aksjonærer stemmer vanligvis over styremedlemmer og store beslutninger, men står sist ved en avvikling.'
          },
          tags: ['shareholder rights', 'governance']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'In a company liquidation, where do common shareholders rank?',
            no: 'Ved avvikling av et selskap, hvor i køen står ordinære aksjonærer?'
          },
          answers: [
            { en: 'First, ahead of all creditors', no: 'Først, foran alle kreditorer' },
            { en: 'Last, after creditors and bondholders', no: 'Sist, etter kreditorer og obligasjonseiere' },
            { en: 'They are paid before employees', no: 'De får betalt før ansatte' },
            { en: 'They are always paid in full', no: 'De får alltid full betaling' }
          ],
          correct: 1,
          explanation: {
            en: 'Equity holders have the last claim on assets, receiving anything only after debts and preferred claims are settled.',
            no: 'Aksjeeiere har det siste kravet på eiendeler og får eventuelt utbetaling først etter at gjeld og prioriterte krav er gjort opp.'
          },
          tags: ['liquidation', 'claims']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a share buyback?',
            no: 'Hva er et tilbakekjøp av aksjer?'
          },
          answers: [
            { en: 'A company repurchasing its own shares from the market', no: 'Et selskap som kjøper tilbake sine egne aksjer fra markedet' },
            { en: 'Selling new shares to investors', no: 'Å selge nye aksjer til investorer' },
            { en: 'A government buying private companies', no: 'En stat som kjøper private selskaper' },
            { en: 'A merger of two firms', no: 'En sammenslåing av to selskaper' }
          ],
          correct: 0,
          explanation: {
            en: 'In a buyback a company buys back its shares, reducing supply and often raising earnings per share.',
            no: 'Ved et tilbakekjøp kjøper et selskap tilbake aksjene sine, noe som reduserer tilbudet og ofte øker fortjenesten per aksje.'
          },
          tags: ['buyback', 'corporate actions']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does issuing new shares affect existing shareholders?',
            no: 'Hvordan påvirker utstedelse av nye aksjer eksisterende aksjonærer?'
          },
          answers: [
            { en: 'It can dilute their ownership percentage', no: 'Det kan utvanne deres eierandel' },
            { en: 'It always increases their dividends', no: 'Det øker alltid utbyttet deres' },
            { en: 'It has no effect on them', no: 'Det har ingen effekt på dem' },
            { en: 'It guarantees a higher share price', no: 'Det garanterer en høyere aksjekurs' }
          ],
          correct: 0,
          explanation: {
            en: 'Issuing more shares spreads ownership across a larger base, diluting each existing holder stake.',
            no: 'Å utstede flere aksjer sprer eierskapet over et større antall, og utvanner hver eksisterende eiers andel.'
          },
          tags: ['dilution', 'shares']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is market capitalization used to classify?',
            no: 'Hva brukes markedsverdi til å klassifisere?'
          },
          answers: [
            { en: 'A company size (e.g. large-cap, small-cap)', no: 'Et selskaps størrelse (f.eks. large-cap, small-cap)' },
            { en: 'A company tax bracket', no: 'Et selskaps skatteklasse' },
            { en: 'The number of board members', no: 'Antall styremedlemmer' },
            { en: 'The age of the company', no: 'Selskapets alder' }
          ],
          correct: 0,
          explanation: {
            en: 'Market cap classifies firms into categories like large-, mid- and small-cap, reflecting their total equity value.',
            no: 'Markedsverdi klassifiserer selskaper i kategorier som large-, mid- og small-cap, som gjenspeiler den samlede egenkapitalverdien.'
          },
          tags: ['market cap', 'classification']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why might a company stock fall even after reporting record profits?',
            no: 'Hvorfor kan en aksje falle selv etter rekordoverskudd?'
          },
          answers: [
            { en: 'Because dividends are illegal that year', no: 'Fordi utbytte er ulovlig det året' },
            { en: 'Because results missed analyst expectations', no: 'Fordi resultatene ikke nådde analytikernes forventninger' },
            { en: 'Because profits never affect prices', no: 'Fordi overskudd aldri påvirker prisene' },
            { en: 'Because the exchange forces it down', no: 'Fordi børsen tvinger den ned' }
          ],
          correct: 1,
          explanation: {
            en: 'Prices reflect expectations; if record profits fall short of what investors already priced in, the stock can drop.',
            no: 'Prisene gjenspeiler forventninger; hvis rekordoverskudd er lavere enn det investorene allerede har priset inn, kan aksjen falle.'
          },
          tags: ['expectations', 'earnings']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is an index fund?',
            no: 'Hva er et indeksfond?'
          },
          answers: [
            { en: 'A fund that tries to beat the market by stock-picking', no: 'Et fond som forsøker å slå markedet ved å plukke aksjer' },
            { en: 'A fund that aims to match the performance of a market index', no: 'Et fond som søker å matche utviklingen til en markedsindeks' },
            { en: 'A fund that holds only one stock', no: 'Et fond som eier kun én aksje' },
            { en: 'A fund that invests only in bonds', no: 'Et fond som bare investerer i obligasjoner' }
          ],
          correct: 1,
          explanation: {
            en: 'An index fund passively tracks an index like the S&P 500, offering broad diversification at low cost.',
            no: 'Et indeksfond følger passivt en indeks som S&P 500, og gir bred diversifisering til lav kostnad.'
          },
          tags: ['index fund', 'investing']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does diversification across many stocks aim to reduce?',
            no: 'Hva sikter diversifisering på tvers av mange aksjer på å redusere?'
          },
          answers: [
            { en: 'Company-specific (unsystematic) risk', no: 'Selskapsspesifikk (usystematisk) risiko' },
            { en: 'All possible risk entirely', no: 'All mulig risiko fullstendig' },
            { en: 'The tax on dividends', no: 'Skatten på utbytte' },
            { en: 'The brokerage commission', no: 'Meglerprovisjonen' }
          ],
          correct: 0,
          explanation: {
            en: 'Holding many stocks reduces firm-specific risk, though market-wide (systematic) risk remains.',
            no: 'Å eie mange aksjer reduserer selskapsspesifikk risiko, men markedsomfattende (systematisk) risiko gjenstår.'
          },
          tags: ['diversification', 'risk']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is insider trading?',
            no: 'Hva er innsidehandel?'
          },
          answers: [
            { en: 'Trading by company employees that is always legal', no: 'Handel av ansatte i selskapet som alltid er lovlig' },
            { en: 'Trading on material non-public information, which is illegal', no: 'Handel basert på vesentlig ikke-offentlig informasjon, som er ulovlig' },
            { en: 'Buying shares of your own employer openly', no: 'Å kjøpe aksjer i din egen arbeidsgiver åpent' },
            { en: 'Trading only during market hours', no: 'Å handle bare i åpningstiden' }
          ],
          correct: 1,
          explanation: {
            en: 'Illegal insider trading means buying or selling based on confidential, price-sensitive information not available to the public.',
            no: 'Ulovlig innsidehandel betyr å kjøpe eller selge basert på konfidensiell, kurssensitiv informasjon som ikke er tilgjengelig for allmennheten.'
          },
          tags: ['insider trading', 'regulation']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the role of an annual general meeting (AGM) for shareholders?',
            no: 'Hva er rollen til en generalforsamling for aksjonærer?'
          },
          answers: [
            { en: 'To set the central bank interest rate', no: 'Å fastsette sentralbankens rente' },
            { en: 'To vote on company matters and elect directors', no: 'Å stemme over selskapssaker og velge styremedlemmer' },
            { en: 'To trade shares directly', no: 'Å handle aksjer direkte' },
            { en: 'To collect taxes from investors', no: 'Å kreve inn skatt fra investorer' }
          ],
          correct: 1,
          explanation: {
            en: 'At the AGM, shareholders vote on matters such as board elections, dividends and major decisions.',
            no: 'På generalforsamlingen stemmer aksjonærene over saker som styrevalg, utbytte og store beslutninger.'
          },
          tags: ['agm', 'governance']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does "beta" measure for a stock?',
            no: 'Hva måler «beta» for en aksje?'
          },
          answers: [
            { en: 'Its dividend yield', no: 'Dens direkteavkastning' },
            { en: 'Its sensitivity to overall market movements', no: 'Dens følsomhet for de samlede markedsbevegelsene' },
            { en: 'Its total revenue', no: 'Dens samlede omsetning' },
            { en: 'Its number of shares', no: 'Dens antall aksjer' }
          ],
          correct: 1,
          explanation: {
            en: 'Beta gauges how much a stock tends to move relative to the market; a beta above 1 means greater volatility than the market.',
            no: 'Beta måler hvor mye en aksje pleier å bevege seg i forhold til markedet; en beta over 1 betyr større volatilitet enn markedet.'
          },
          tags: ['beta', 'risk']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What typically happens to a stock when it is added to a major index like the S&P 500?',
            no: 'Hva skjer vanligvis med en aksje når den tas inn i en stor indeks som S&P 500?'
          },
          answers: [
            { en: 'Demand often rises as index funds must buy it', no: 'Etterspørselen øker ofte fordi indeksfond må kjøpe den' },
            { en: 'It is automatically delisted', no: 'Den strykes automatisk fra børsen' },
            { en: 'Its dividends are cancelled', no: 'Utbyttet dens avlyses' },
            { en: 'Trading in it is banned', no: 'Handel i den forbys' }
          ],
          correct: 0,
          explanation: {
            en: 'Index inclusion forces index funds to buy the stock, often boosting demand and its price around the change.',
            no: 'Indeksinkludering tvinger indeksfond til å kjøpe aksjen, noe som ofte øker etterspørselen og prisen rundt endringen.'
          },
          tags: ['index', 'demand']
        },
        // ---------- HARD ----------
        {
          difficulty: 'hard',
          question: {
            en: 'In the dividend discount model, what is a stock value based on?',
            no: 'I utbyttediskonteringsmodellen, hva er en aksjes verdi basert på?'
          },
          answers: [
            { en: 'The present value of expected future dividends', no: 'Nåverdien av forventede fremtidige utbytter' },
            { en: 'The company total number of employees', no: 'Selskapets totale antall ansatte' },
            { en: 'The historical high price of the stock', no: 'Den historiske toppkursen for aksjen' },
            { en: 'The face value printed on the share', no: 'Pålydende verdi trykt på aksjen' }
          ],
          correct: 0,
          explanation: {
            en: 'The dividend discount model values a share as the discounted sum of all expected future dividend payments.',
            no: 'Utbyttediskonteringsmodellen verdsetter en aksje som den diskonterte summen av alle forventede fremtidige utbyttebetalinger.'
          },
          tags: ['valuation', 'ddm']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What does the equity risk premium represent?',
            no: 'Hva representerer aksjerisikopremien (equity risk premium)?'
          },
          answers: [
            { en: 'The tax paid on stock gains', no: 'Skatten betalt på aksjegevinster' },
            { en: 'The extra return investors demand for holding stocks over risk-free assets', no: 'Meravkastningen investorer krever for å eie aksjer fremfor risikofrie eiendeler' },
            { en: 'The dividend a company must pay', no: 'Utbyttet et selskap må betale' },
            { en: 'The fee charged by stock exchanges', no: 'Gebyret som kreves av børser' }
          ],
          correct: 1,
          explanation: {
            en: 'The equity risk premium is the additional expected return over a risk-free rate that compensates investors for stock-market risk.',
            no: 'Aksjerisikopremien er den ekstra forventede avkastningen utover en risikofri rente som kompenserer investorer for aksjemarkedsrisiko.'
          },
          tags: ['risk premium', 'returns']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the "equity premium puzzle" considered a puzzle?',
            no: 'Hvorfor regnes «aksjepremiegåten» (equity premium puzzle) som en gåte?'
          },
          answers: [
            { en: 'Stocks have historically returned far more than bonds, more than standard risk models predict', no: 'Aksjer har historisk gitt langt mer enn obligasjoner, mer enn standard risikomodeller forutsier' },
            { en: 'Stocks and bonds have always returned exactly the same', no: 'Aksjer og obligasjoner har alltid gitt nøyaktig samme avkastning' },
            { en: 'Bonds always outperform stocks', no: 'Obligasjoner gir alltid bedre avkastning enn aksjer' },
            { en: 'No one has ever measured stock returns', no: 'Ingen har noen gang målt aksjeavkastning' }
          ],
          correct: 0,
          explanation: {
            en: 'The puzzle is that historical equity returns exceed bond returns by more than plausible risk aversion can easily explain.',
            no: 'Gåten er at historisk aksjeavkastning overstiger obligasjonsavkastning med mer enn rimelig risikoaversjon lett kan forklare.'
          },
          tags: ['equity premium', 'puzzle']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a key criticism of relying on the P/E ratio alone to value stocks?',
            no: 'Hva er en sentral kritikk av å bruke P/E-forholdet alene til å verdsette aksjer?'
          },
          answers: [
            { en: 'It ignores growth prospects, debt and earnings quality', no: 'Det ignorerer vekstutsikter, gjeld og inntjeningskvalitet' },
            { en: 'It can only be calculated for bonds', no: 'Det kan bare beregnes for obligasjoner' },
            { en: 'It is always identical across companies', no: 'Det er alltid identisk på tvers av selskaper' },
            { en: 'It requires no earnings data', no: 'Det krever ingen inntjeningsdata' }
          ],
          correct: 0,
          explanation: {
            en: 'A bare P/E says nothing about growth, leverage or whether earnings are sustainable, so comparisons can mislead.',
            no: 'Et nakent P/E sier ingenting om vekst, gjeldsgrad eller om inntjeningen er bærekraftig, så sammenligninger kan villede.'
          },
          tags: ['p/e ratio', 'valuation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is "momentum" as a documented stock-market anomaly?',
            no: 'Hva er «momentum» som en dokumentert aksjemarkedsanomali?'
          },
          answers: [
            { en: 'Stocks that did well recently tend to keep outperforming for a time', no: 'Aksjer som har gjort det bra nylig pleier å fortsette å prestere bedre en periode' },
            { en: 'Stock prices never show any trend', no: 'Aksjekurser viser aldri noen trend' },
            { en: 'All stocks rise at exactly the same rate', no: 'Alle aksjer stiger i nøyaktig samme takt' },
            { en: 'Dividends always predict future prices', no: 'Utbytte forutsier alltid fremtidige kurser' }
          ],
          correct: 0,
          explanation: {
            en: 'The momentum anomaly is the empirical tendency for recent winners to keep winning and losers to keep losing over intermediate horizons, challenging strict market efficiency.',
            no: 'Momentum-anomalien er den empiriske tendensen til at nylige vinnere fortsetter å vinne og tapere å tape over mellomlange horisonter, noe som utfordrer streng markedseffisiens.'
          },
          tags: ['momentum', 'anomaly']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How can large-scale share buybacks be criticized?',
            no: 'Hvordan kan storstilte tilbakekjøp av aksjer kritiseres?'
          },
          answers: [
            { en: 'They may prioritize short-term EPS over long-term investment', no: 'De kan prioritere kortsiktig fortjeneste per aksje fremfor langsiktige investeringer' },
            { en: 'They always reduce earnings per share', no: 'De reduserer alltid fortjenesten per aksje' },
            { en: 'They are illegal in all markets', no: 'De er ulovlige i alle markeder' },
            { en: 'They force the company into bankruptcy', no: 'De tvinger selskapet i konkurs' }
          ],
          correct: 0,
          explanation: {
            en: 'Critics argue buybacks can boost per-share metrics and executive pay while diverting cash from R&D and capital investment.',
            no: 'Kritikere hevder tilbakekjøp kan løfte nøkkeltall per aksje og lederlønninger, mens kontanter ledes bort fra FoU og kapitalinvesteringer.'
          },
          tags: ['buyback', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What does a dual-class share structure typically allow founders to do?',
            no: 'Hva lar en aksjestruktur med to klasser vanligvis grunnleggere gjøre?'
          },
          answers: [
            { en: 'Avoid paying any taxes', no: 'Unngå å betale skatt' },
            { en: 'Retain voting control while owning a minority of equity', no: 'Beholde stemmekontroll mens de eier et mindretall av egenkapitalen' },
            { en: 'Guarantee the share price rises', no: 'Garantere at aksjekursen stiger' },
            { en: 'Eliminate all shareholders', no: 'Fjerne alle aksjonærer' }
          ],
          correct: 1,
          explanation: {
            en: 'Dual-class structures give founders shares with extra votes, letting them control decisions despite holding a minority economic stake.',
            no: 'Strukturer med to aksjeklasser gir grunnleggere aksjer med ekstra stemmer, slik at de kontrollerer beslutninger til tross for en økonomisk minoritetsandel.'
          },
          tags: ['dual class', 'governance']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why do some argue passive index investing could distort markets if it dominates?',
            no: 'Hvorfor hevder noen at passiv indeksinvestering kan forvrenge markeder hvis den dominerer?'
          },
          answers: [
            { en: 'It could weaken price discovery as fewer investors analyze fundamentals', no: 'Den kan svekke prisoppdagelse fordi færre investorer analyserer fundamentale forhold' },
            { en: 'It guarantees every stock the same price', no: 'Den garanterer hver aksje samme pris' },
            { en: 'It removes all volatility forever', no: 'Den fjerner all volatilitet for alltid' },
            { en: 'It makes dividends illegal', no: 'Den gjør utbytte ulovlig' }
          ],
          correct: 0,
          explanation: {
            en: 'If most capital tracks indices mechanically, fewer active analysts set prices on fundamentals, potentially weakening price discovery.',
            no: 'Hvis det meste av kapitalen følger indekser mekanisk, er det færre aktive analytikere som priser ut fra fundamentale forhold, noe som kan svekke prisoppdagelsen.'
          },
          tags: ['passive investing', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What was a notable feature of the 2021 "meme stock" episodes (e.g. GameStop)?',
            no: 'Hva var et bemerkelsesverdig trekk ved «meme-aksje»-episodene i 2021 (f.eks. GameStop)?'
          },
          answers: [
            { en: 'Coordinated retail buying drove prices far above fundamentals and squeezed short sellers', no: 'Koordinerte kjøp fra småinvestorer drev prisene langt over fundamentale verdier og presset shortselgere' },
            { en: 'Central banks set the prices directly', no: 'Sentralbanker fastsatte prisene direkte' },
            { en: 'Trading was driven entirely by dividends', no: 'Handelen var helt drevet av utbytte' },
            { en: 'The companies had record profits', no: 'Selskapene hadde rekordoverskudd' }
          ],
          correct: 0,
          explanation: {
            en: 'Retail investors coordinating online drove prices up sharply, triggering short squeezes that forced short sellers to buy and amplified the rise.',
            no: 'Småinvestorer som koordinerte seg på nett drev prisene kraftig opp og utløste short-skvis som tvang shortselgere til å kjøpe og forsterket oppgangen.'
          },
          tags: ['meme stocks', 'short squeeze']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What distinguishes the cost of equity from the cost of debt for a firm?',
            no: 'Hva skiller egenkapitalkostnaden fra gjeldskostnaden for et selskap?'
          },
          answers: [
            { en: 'Equity is a residual claim with no fixed payment; debt has contractual interest', no: 'Egenkapital er et restkrav uten fast betaling; gjeld har kontraktsfestet rente' },
            { en: 'Debt holders own the company; equity holders lend money', no: 'Gjeldseiere eier selskapet; egenkapitaleiere låner ut penger' },
            { en: 'Equity is always cheaper than debt', no: 'Egenkapital er alltid billigere enn gjeld' },
            { en: 'They are identical in every respect', no: 'De er identiske på alle måter' }
          ],
          correct: 0,
          explanation: {
            en: 'Equity holders bear residual risk with no guaranteed payment, so the cost of equity usually exceeds the cost of debt, which has fixed, tax-deductible interest.',
            no: 'Egenkapitaleiere bærer restrisiko uten garantert betaling, så egenkapitalkostnaden overstiger vanligvis gjeldskostnaden, som har fast, skattefradragsberettiget rente.'
          },
          tags: ['cost of capital', 'finance']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a short squeeze?',
            no: 'Hva er en short-skvis (short squeeze)?'
          },
          answers: [
            { en: 'A rising price forcing short sellers to buy back, pushing the price even higher', no: 'En stigende pris som tvinger shortselgere til å kjøpe tilbake, og presser prisen enda høyere' },
            { en: 'A company cutting its dividend', no: 'Et selskap som kutter utbyttet' },
            { en: 'A sudden fall in trading volume', no: 'Et plutselig fall i handelsvolum' },
            { en: 'A regulator banning a stock', no: 'En tilsynsmyndighet som forbyr en aksje' }
          ],
          correct: 0,
          explanation: {
            en: 'When a shorted stock rises, short sellers must buy to cover losses, and that buying can drive the price up further in a feedback loop.',
            no: 'Når en shortet aksje stiger, må shortselgere kjøpe for å dekke tap, og disse kjøpene kan presse prisen ytterligere opp i en selvforsterkende sløyfe.'
          },
          tags: ['short squeeze', 'mechanics']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'According to the Modigliani-Miller theorem (no taxes), how does capital structure affect firm value?',
            no: 'Ifølge Modigliani-Miller-teoremet (uten skatt), hvordan påvirker kapitalstruktur selskapsverdien?'
          },
          answers: [
            { en: 'More debt always raises value', no: 'Mer gjeld øker alltid verdien' },
            { en: 'Capital structure is irrelevant to total firm value', no: 'Kapitalstruktur er irrelevant for selskapets totale verdi' },
            { en: 'Only equity financing creates value', no: 'Bare egenkapitalfinansiering skaper verdi' },
            { en: 'Value depends only on dividends paid', no: 'Verdien avhenger bare av utbetalt utbytte' }
          ],
          correct: 1,
          explanation: {
            en: 'In an idealized world without taxes or frictions, Modigliani-Miller show firm value depends on its assets, not how it is financed.',
            no: 'I en idealisert verden uten skatt eller friksjoner viser Modigliani-Miller at selskapsverdien avhenger av eiendelene, ikke hvordan det finansieres.'
          },
          tags: ['modigliani-miller', 'capital structure']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is "survivorship bias" in evaluating stock-market returns?',
            no: 'Hva er «overlevelsesskjevhet» (survivorship bias) i vurdering av aksjeavkastning?'
          },
          answers: [
            { en: 'Ignoring failed companies, overstating average historical returns', no: 'Å overse selskaper som har gått under, og dermed overdrive gjennomsnittlig historisk avkastning' },
            { en: 'Counting only government bonds', no: 'Å telle bare statsobligasjoner' },
            { en: 'Always including bankrupt firms twice', no: 'Alltid å telle konkursrammede selskaper to ganger' },
            { en: 'A tax applied to long-term holders', no: 'En skatt som gjelder langsiktige eiere' }
          ],
          correct: 0,
          explanation: {
            en: 'Looking only at firms that survived ignores those that failed or were delisted, biasing measured returns upward.',
            no: 'Å se bare på selskaper som overlevde, overser dem som gikk under eller ble strøket, og gir en skjevhet som overdriver målt avkastning.'
          },
          tags: ['survivorship bias', 'statistics']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why can stock prices be more volatile than underlying dividends or earnings (excess volatility)?',
            no: 'Hvorfor kan aksjekurser være mer volatile enn underliggende utbytte eller inntjening (overdreven volatilitet)?'
          },
          answers: [
            { en: 'Shifting expectations, discount rates and sentiment amplify price swings', no: 'Skiftende forventninger, diskonteringsrenter og stemninger forsterker prissvingningene' },
            { en: 'Because dividends change every second', no: 'Fordi utbytte endres hvert sekund' },
            { en: 'Because prices are fixed by regulators', no: 'Fordi priser fastsettes av tilsynsmyndigheter' },
            { en: 'Because earnings are never reported', no: 'Fordi inntjening aldri rapporteres' }
          ],
          correct: 0,
          explanation: {
            en: 'Shiller and others showed prices swing more than fundamentals warrant, as changing discount rates and sentiment magnify movements.',
            no: 'Shiller og andre viste at prisene svinger mer enn fundamentale forhold tilsier, fordi skiftende diskonteringsrenter og stemninger forsterker bevegelsene.'
          },
          tags: ['excess volatility', 'shiller']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a common interpretation of why small-cap stocks have historically outperformed (the size effect)?',
            no: 'Hva er en vanlig tolkning av hvorfor small-cap-aksjer historisk har gitt meravkastning (størrelseseffekten)?'
          },
          answers: [
            { en: 'They carry higher risk and lower liquidity, demanding higher returns', no: 'De bærer høyere risiko og lavere likviditet, og krever derfor høyere avkastning' },
            { en: 'They are guaranteed by governments', no: 'De er garantert av stater' },
            { en: 'They never fall in value', no: 'De faller aldri i verdi' },
            { en: 'They pay no dividends ever', no: 'De betaler aldri utbytte' }
          ],
          correct: 0,
          explanation: {
            en: 'The size effect is often explained as compensation for the greater risk, illiquidity and uncertainty of smaller firms, though its persistence is debated.',
            no: 'Størrelseseffekten forklares ofte som kompensasjon for den større risikoen, illikviditeten og usikkerheten i mindre selskaper, selv om dens varighet er omdiskutert.'
          },
          tags: ['size effect', 'anomaly']
        }
      ]
    },
    {
      slug: 'bonds',
      name: { en: 'Bonds', no: 'Obligasjoner' },
      questions: [
        // ---------- EASY ----------
        {
          difficulty: 'easy',
          question: {
            en: 'What is a bond?',
            no: 'Hva er en obligasjon?'
          },
          answers: [
            { en: 'A share of ownership in a company', no: 'En eierandel i et selskap' },
            { en: 'A type of bank account', no: 'En type bankkonto' },
            { en: 'A tax on investments', no: 'En skatt på investeringer' },
            { en: 'A loan made by an investor to a borrower', no: 'Et lån gitt av en investor til en låntaker' }
          ],
          correct: 3,
          explanation: {
            en: 'A bond is a debt security: the investor lends money and the issuer promises to repay with interest.',
            no: 'En obligasjon er et gjeldspapir: investoren låner ut penger og utstederen lover å betale tilbake med rente.'
          },
          tags: ['definition', 'debt']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the "coupon" of a bond?',
            no: 'Hva er «kupongen» på en obligasjon?'
          },
          answers: [
            { en: 'A discount voucher', no: 'En rabattkupong' },
            { en: 'The tax on the bond', no: 'Skatten på obligasjonen' },
            { en: 'The interest payment the bond makes', no: 'Rentebetalingen obligasjonen gir' },
            { en: 'The price you pay to buy it', no: 'Prisen du betaler for å kjøpe den' }
          ],
          correct: 2,
          explanation: {
            en: 'The coupon is the periodic interest payment a bond pays to its holder.',
            no: 'Kupongen er den periodiske rentebetalingen en obligasjon gir til innehaveren.'
          },
          tags: ['coupon', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does the "face value" (par value) of a bond mean?',
            no: 'Hva betyr «pålydende verdi» (par value) på en obligasjon?'
          },
          answers: [
            { en: 'The broker commission', no: 'Meglerprovisjonen' },
            { en: 'The amount repaid to the holder at maturity', no: 'Beløpet som betales tilbake til innehaveren ved forfall' },
            { en: 'The annual interest rate', no: 'Den årlige renten' },
            { en: 'The current market price', no: 'Gjeldende markedspris' }
          ],
          correct: 1,
          explanation: {
            en: 'Face value is the principal amount the issuer agrees to repay when the bond matures.',
            no: 'Pålydende verdi er hovedstolen utstederen forplikter seg til å betale tilbake når obligasjonen forfaller.'
          },
          tags: ['face value', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a government bond?',
            no: 'Hva er en statsobligasjon?'
          },
          answers: [
            { en: 'A share in a state-owned company', no: 'En aksje i et statseid selskap' },
            { en: 'A loan from one bank to another', no: 'Et lån fra én bank til en annen' },
            { en: 'A type of currency', no: 'En type valuta' },
            { en: 'A bond issued by a national government', no: 'En obligasjon utstedt av en nasjonalstat' }
          ],
          correct: 3,
          explanation: {
            en: 'A government bond is debt issued by a national government to finance spending.',
            no: 'En statsobligasjon er gjeld utstedt av en nasjonalstat for å finansiere utgifter.'
          },
          tags: ['government bonds', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the "maturity" of a bond?',
            no: 'Hva er «løpetiden» (forfall) på en obligasjon?'
          },
          answers: [
            { en: 'The amount of the coupon', no: 'Størrelsen på kupongen' },
            { en: 'The credit rating', no: 'Kredittvurderingen' },
            { en: 'The date the principal must be repaid', no: 'Datoen hovedstolen må betales tilbake' },
            { en: 'The day it was first issued', no: 'Dagen den først ble utstedt' }
          ],
          correct: 2,
          explanation: {
            en: 'Maturity is the date on which the bond principal is due to be repaid to the holder.',
            no: 'Forfall er datoen da obligasjonens hovedstol skal betales tilbake til innehaveren.'
          },
          tags: ['maturity', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who issues corporate bonds?',
            no: 'Hvem utsteder selskapsobligasjoner?'
          },
          answers: [
            { en: 'Stock exchanges', no: 'Børser' },
            { en: 'Companies', no: 'Selskaper' },
            { en: 'Only central banks', no: 'Bare sentralbanker' },
            { en: 'Individual households', no: 'Enkelthusholdninger' }
          ],
          correct: 1,
          explanation: {
            en: 'Corporate bonds are issued by companies to raise debt financing.',
            no: 'Selskapsobligasjoner utstedes av selskaper for å hente gjeldsfinansiering.'
          },
          tags: ['corporate bonds', 'issuers']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Compared with stocks, bonds are generally considered what?',
            no: 'Sammenlignet med aksjer regnes obligasjoner generelt som hva?'
          },
          answers: [
            { en: 'Lower risk', no: 'Lavere risiko' },
            { en: 'Identical in risk', no: 'Identisk i risiko' },
            { en: 'Always risk-free', no: 'Alltid risikofrie' },
            { en: 'Higher risk', no: 'Høyere risiko' }
          ],
          correct: 0,
          explanation: {
            en: 'Bonds typically carry lower risk than stocks because they offer fixed payments and rank ahead of equity in a default.',
            no: 'Obligasjoner har vanligvis lavere risiko enn aksjer fordi de gir faste betalinger og prioriteres foran egenkapital ved mislighold.'
          },
          tags: ['risk', 'comparison']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does a bond credit rating (e.g. AAA) indicate?',
            no: 'Hva indikerer en obligasjons kredittvurdering (f.eks. AAA)?'
          },
          answers: [
            { en: 'The trading volume', no: 'Handelsvolumet' },
            { en: 'The issuer market capitalization', no: 'Utstederens markedsverdi' },
            { en: 'The likelihood the issuer repays its debt', no: 'Sannsynligheten for at utstederen betaler tilbake gjelden' },
            { en: 'The coupon payment date', no: 'Datoen for kupongbetalingen' }
          ],
          correct: 2,
          explanation: {
            en: 'Credit ratings assess the issuer creditworthiness; higher ratings imply lower default risk.',
            no: 'Kredittvurderinger vurderer utstederens kredittverdighet; høyere vurderinger innebærer lavere misligholdsrisiko.'
          },
          tags: ['credit rating', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a "junk bond"?',
            no: 'Hva er en «søppelobligasjon» (junk bond)?'
          },
          answers: [
            { en: 'A bond with no interest', no: 'En obligasjon uten rente' },
            { en: 'A high-yield bond with a low credit rating', no: 'En høyrenteobligasjon med lav kredittvurdering' },
            { en: 'A bond that has already matured', no: 'En obligasjon som allerede har forfalt' },
            { en: 'A government bond', no: 'En statsobligasjon' }
          ],
          correct: 1,
          explanation: {
            en: 'Junk (high-yield) bonds carry below-investment-grade ratings and pay higher interest to compensate for higher default risk.',
            no: 'Søppelobligasjoner (høyrente) har vurderinger under «investment grade» og betaler høyere rente for å kompensere for høyere misligholdsrisiko.'
          },
          tags: ['junk bonds', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a bond yield?',
            no: 'Hva er en obligasjons effektive rente (yield)?'
          },
          answers: [
            { en: 'The total number of bonds issued', no: 'Det totale antallet obligasjoner utstedt' },
            { en: 'The issuer name', no: 'Utstederens navn' },
            { en: 'The maturity date', no: 'Forfallsdatoen' },
            { en: 'The return an investor earns on the bond', no: 'Avkastningen en investor får på obligasjonen' }
          ],
          correct: 3,
          explanation: {
            en: 'A bond yield expresses the return earned, reflecting its coupon and price relative to face value.',
            no: 'En obligasjons yield uttrykker avkastningen man får, og gjenspeiler kupongen og prisen i forhold til pålydende verdi.'
          },
          tags: ['yield', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In the US, short-term government debt securities are called what?',
            no: 'I USA kalles kortsiktige statlige gjeldspapirer hva?'
          },
          answers: [
            { en: 'Mutual funds', no: 'Verdipapirfond' },
            { en: 'Options', no: 'Opsjoner' },
            { en: 'Treasury bills', no: 'Treasury bills (statskasseveksler)' },
            { en: 'Common shares', no: 'Ordinære aksjer' }
          ],
          correct: 2,
          explanation: {
            en: 'Treasury bills (T-bills) are short-term US government securities maturing in a year or less.',
            no: 'Treasury bills (statskasseveksler) er kortsiktige amerikanske statspapirer som forfaller innen ett år eller mindre.'
          },
          tags: ['treasury bills', 'government bonds']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What happens to a bondholder if the issuer pays all coupons and the principal on time?',
            no: 'Hva skjer med en obligasjonseier hvis utstederen betaler alle kuponger og hovedstolen i tide?'
          },
          answers: [
            { en: 'The bond converts to stock', no: 'Obligasjonen konverteres til aksjer' },
            { en: 'The bond has performed as promised', no: 'Obligasjonen har gjort som lovet' },
            { en: 'The issuer has defaulted', no: 'Utstederen har misligholdt' },
            { en: 'The bondholder loses the principal', no: 'Obligasjonseieren mister hovedstolen' }
          ],
          correct: 1,
          explanation: {
            en: 'When all interest and principal are paid as scheduled, the bond has met its obligations to the holder.',
            no: 'Når all rente og hovedstol betales som avtalt, har obligasjonen oppfylt forpliktelsene sine overfor innehaveren.'
          },
          tags: ['repayment', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a municipal bond?',
            no: 'Hva er en kommuneobligasjon?'
          },
          answers: [
            { en: 'A bond issued by a private bank', no: 'En obligasjon utstedt av en privat bank' },
            { en: 'A share in a city company', no: 'En aksje i et bykommunalt selskap' },
            { en: 'A type of currency', no: 'En type valuta' },
            { en: 'A bond issued by a local or regional government', no: 'En obligasjon utstedt av en lokal eller regional myndighet' }
          ],
          correct: 3,
          explanation: {
            en: 'Municipal bonds are issued by local or regional governments to fund public projects.',
            no: 'Kommuneobligasjoner utstedes av lokale eller regionale myndigheter for å finansiere offentlige prosjekter.'
          },
          tags: ['municipal bonds', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a zero-coupon bond?',
            no: 'Hva er en nullkupongobligasjon?'
          },
          answers: [
            { en: 'A bond that never matures', no: 'En obligasjon som aldri forfaller' },
            { en: 'A bond issued only by companies', no: 'En obligasjon utstedt kun av selskaper' },
            { en: 'A bond that pays no periodic interest but is sold at a discount', no: 'En obligasjon som ikke betaler periodisk rente, men selges med rabatt' },
            { en: 'A bond with an extremely high coupon', no: 'En obligasjon med ekstremt høy kupong' }
          ],
          correct: 2,
          explanation: {
            en: 'A zero-coupon bond pays no coupons; investors profit because it is bought below face value and repaid at par.',
            no: 'En nullkupongobligasjon betaler ingen kuponger; investorer tjener fordi den kjøpes under pålydende og betales tilbake til pari.'
          },
          tags: ['zero-coupon', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the principal of a bond?',
            no: 'Hva er hovedstolen i en obligasjon?'
          },
          answers: [
            { en: 'The interest rate', no: 'Renten' },
            { en: 'The amount borrowed that must be repaid', no: 'Beløpet som er lånt og som må betales tilbake' },
            { en: 'The yearly tax', no: 'Den årlige skatten' },
            { en: 'The broker fee', no: 'Meglergebyret' }
          ],
          correct: 1,
          explanation: {
            en: 'The principal is the original sum lent, which the issuer repays at maturity, separate from interest.',
            no: 'Hovedstolen er det opprinnelige beløpet som er lånt, som utstederen betaler tilbake ved forfall, atskilt fra rente.'
          },
          tags: ['principal', 'definition']
        },
        // ---------- MEDIUM ----------
        {
          difficulty: 'medium',
          question: {
            en: 'How do bond prices generally move when market interest rates rise?',
            no: 'Hvordan beveger obligasjonspriser seg generelt når markedsrentene stiger?'
          },
          answers: [
            { en: 'Bond prices rise', no: 'Obligasjonsprisene stiger' },
            { en: 'Bond prices stay fixed', no: 'Obligasjonsprisene holder seg faste' },
            { en: 'Bonds stop trading', no: 'Obligasjonene slutter å handles' },
            { en: 'Bond prices fall', no: 'Obligasjonsprisene faller' }
          ],
          correct: 3,
          explanation: {
            en: 'Bond prices and interest rates move inversely: when rates rise, existing bonds with lower coupons become less attractive and fall in price.',
            no: 'Obligasjonspriser og renter beveger seg motsatt: når rentene stiger, blir eksisterende obligasjoner med lavere kupong mindre attraktive og faller i pris.'
          },
          tags: ['interest rates', 'price']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is "duration" in bond investing?',
            no: 'Hva er «durasjon» i obligasjonsinvestering?'
          },
          answers: [
            { en: 'The size of the coupon only', no: 'Bare størrelsen på kupongen' },
            { en: 'The issuer credit rating', no: 'Utstederens kredittvurdering' },
            { en: 'A measure of a bond price sensitivity to interest-rate changes', no: 'Et mål på en obligasjons prisfølsomhet for renteendringer' },
            { en: 'The number of years since issuance', no: 'Antall år siden utstedelse' }
          ],
          correct: 2,
          explanation: {
            en: 'Duration estimates how much a bond price will change for a given change in interest rates; longer duration means greater sensitivity.',
            no: 'Durasjon anslår hvor mye en obligasjons pris endrer seg ved en gitt renteendring; lengre durasjon betyr større følsomhet.'
          },
          tags: ['duration', 'risk']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why does a bond trade at a "premium" (above face value)?',
            no: 'Hvorfor handles en obligasjon med «overkurs» (over pålydende)?'
          },
          answers: [
            { en: 'It has no coupon', no: 'Den har ingen kupong' },
            { en: 'Its coupon is higher than current market rates', no: 'Dens kupong er høyere enn gjeldende markedsrenter' },
            { en: 'Its coupon is lower than market rates', no: 'Dens kupong er lavere enn markedsrentene' },
            { en: 'The issuer has defaulted', no: 'Utstederen har misligholdt' }
          ],
          correct: 1,
          explanation: {
            en: 'When a bond coupon exceeds prevailing rates, investors pay more than face value, so it trades at a premium.',
            no: 'Når en obligasjons kupong overstiger gjeldende renter, betaler investorer mer enn pålydende, så den handles med overkurs.'
          },
          tags: ['premium', 'pricing']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does "yield to maturity" (YTM) represent?',
            no: 'Hva representerer «yield to maturity» (YTM)?'
          },
          answers: [
            { en: 'Only the next coupon payment', no: 'Bare neste kupongbetaling' },
            { en: 'The issue price only', no: 'Bare emisjonsprisen' },
            { en: 'The credit rating', no: 'Kredittvurderingen' },
            { en: 'The total return if the bond is held until it matures', no: 'Den totale avkastningen hvis obligasjonen holdes til forfall' }
          ],
          correct: 3,
          explanation: {
            en: 'YTM is the total annualized return expected if the bond is held to maturity, accounting for coupons and price relative to par.',
            no: 'YTM er den totale årlige avkastningen man forventer hvis obligasjonen holdes til forfall, medregnet kuponger og pris i forhold til pari.'
          },
          tags: ['ytm', 'yield']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why do longer-maturity bonds usually offer higher yields than short-term bonds?',
            no: 'Hvorfor gir obligasjoner med lengre løpetid vanligvis høyere rente enn kortsiktige obligasjoner?'
          },
          answers: [
            { en: 'Because they pay no coupons', no: 'Fordi de ikke betaler kuponger' },
            { en: 'Because governments require it by law', no: 'Fordi stater krever det ved lov' },
            { en: 'To compensate for greater interest-rate and inflation risk over time', no: 'For å kompensere for større rente- og inflasjonsrisiko over tid' },
            { en: 'Because they are always default-free', no: 'Fordi de alltid er fri for mislighold' }
          ],
          correct: 2,
          explanation: {
            en: 'Longer bonds tie up money longer and face more rate and inflation risk, so investors usually demand higher yields.',
            no: 'Lengre obligasjoner binder penger lenger og møter mer rente- og inflasjonsrisiko, så investorer krever vanligvis høyere rente.'
          },
          tags: ['yield curve', 'maturity']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is default risk for a bond?',
            no: 'Hva er misligholdsrisiko for en obligasjon?'
          },
          answers: [
            { en: 'The risk of paying too much commission', no: 'Risikoen for å betale for mye provisjon' },
            { en: 'The risk the issuer fails to make promised payments', no: 'Risikoen for at utstederen ikke gjør de lovede betalingene' },
            { en: 'The risk that interest rates fall', no: 'Risikoen for at rentene faller' },
            { en: 'The risk the bond matures too early', no: 'Risikoen for at obligasjonen forfaller for tidlig' }
          ],
          correct: 1,
          explanation: {
            en: 'Default (credit) risk is the chance the issuer cannot pay coupons or repay principal as promised.',
            no: 'Misligholds- (kreditt-) risiko er sjansen for at utstederen ikke kan betale kuponger eller hovedstol som lovet.'
          },
          tags: ['default risk', 'credit']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a convertible bond?',
            no: 'Hva er en konvertibel obligasjon?'
          },
          answers: [
            { en: 'A bond paid in foreign currency', no: 'En obligasjon betalt i utenlandsk valuta' },
            { en: 'A bond that never pays interest', no: 'En obligasjon som aldri betaler rente' },
            { en: 'A bond guaranteed by the government', no: 'En obligasjon garantert av staten' },
            { en: 'A bond that can be exchanged for a set number of the issuer shares', no: 'En obligasjon som kan byttes mot et fastsatt antall av utstederens aksjer' }
          ],
          correct: 3,
          explanation: {
            en: 'A convertible bond gives the holder the option to convert it into a predetermined number of the issuer shares.',
            no: 'En konvertibel obligasjon gir innehaveren mulighet til å konvertere den til et forhåndsbestemt antall av utstederens aksjer.'
          },
          tags: ['convertible', 'definition']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does inflation typically affect the real return on a fixed-rate bond?',
            no: 'Hvordan påvirker inflasjon vanligvis realavkastningen på en fastrenteobligasjon?'
          },
          answers: [
            { en: 'Inflation has no effect', no: 'Inflasjon har ingen effekt' },
            { en: 'Inflation guarantees repayment', no: 'Inflasjon garanterer tilbakebetaling' },
            { en: 'Higher inflation erodes the real return', no: 'Høyere inflasjon spiser opp realavkastningen' },
            { en: 'Inflation raises the real return', no: 'Inflasjon øker realavkastningen' }
          ],
          correct: 2,
          explanation: {
            en: 'Because payments are fixed, higher inflation reduces their purchasing power, eroding the real return.',
            no: 'Fordi betalingene er faste, reduserer høyere inflasjon kjøpekraften deres og spiser opp realavkastningen.'
          },
          tags: ['inflation', 'real return']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a callable bond?',
            no: 'Hva er en innløsbar (callable) obligasjon?'
          },
          answers: [
            { en: 'A bond only sold by phone', no: 'En obligasjon som bare selges per telefon' },
            { en: 'A bond the issuer can redeem early before maturity', no: 'En obligasjon utstederen kan innløse tidlig før forfall' },
            { en: 'A bond the holder must sell immediately', no: 'En obligasjon innehaveren må selge umiddelbart' },
            { en: 'A bond that pays no interest', no: 'En obligasjon som ikke betaler rente' }
          ],
          correct: 1,
          explanation: {
            en: 'A callable bond lets the issuer repay it early, often when rates fall, which adds reinvestment risk for the holder.',
            no: 'En innløsbar obligasjon lar utstederen betale den tilbake tidlig, ofte når rentene faller, noe som gir reinvesteringsrisiko for innehaveren.'
          },
          tags: ['callable', 'features']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why might an investor buy government bonds during a stock-market downturn?',
            no: 'Hvorfor kan en investor kjøpe statsobligasjoner under et fall i aksjemarkedet?'
          },
          answers: [
            { en: 'Because they always lose value', no: 'Fordi de alltid taper verdi' },
            { en: 'Because they pay no income', no: 'Fordi de ikke gir inntekt' },
            { en: 'Because they convert to stocks', no: 'Fordi de konverteres til aksjer' },
            { en: 'As a safe haven offering relative stability', no: 'Som en trygg havn som gir relativ stabilitet' }
          ],
          correct: 3,
          explanation: {
            en: 'High-quality government bonds are often seen as safe havens, attracting investors seeking stability when stocks fall.',
            no: 'Statsobligasjoner av høy kvalitet ses ofte som trygge havner, og tiltrekker investorer som søker stabilitet når aksjer faller.'
          },
          tags: ['safe haven', 'flight to quality']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does a "spread" between corporate and government bond yields reflect?',
            no: 'Hva gjenspeiler et «spread» mellom rentene på selskaps- og statsobligasjoner?'
          },
          answers: [
            { en: 'The number of bonds traded', no: 'Antall obligasjoner som handles' },
            { en: 'The stock dividend', no: 'Aksjeutbyttet' },
            { en: 'The extra compensation for the corporate credit risk', no: 'Den ekstra kompensasjonen for selskapets kredittrisiko' },
            { en: 'The brokerage commission', no: 'Meglerprovisjonen' }
          ],
          correct: 2,
          explanation: {
            en: 'The credit spread is the additional yield over government bonds that investors require for taking on corporate default risk.',
            no: 'Kredittspreaden er den ekstra renten utover statsobligasjoner som investorer krever for å ta på seg selskapets misligholdsrisiko.'
          },
          tags: ['credit spread', 'risk']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is reinvestment risk for a bond investor?',
            no: 'Hva er reinvesteringsrisiko for en obligasjonsinvestor?'
          },
          answers: [
            { en: 'The risk the issuer changes its name', no: 'Risikoen for at utstederen endrer navn' },
            { en: 'The risk that coupons must be reinvested at lower rates', no: 'Risikoen for at kuponger må reinvesteres til lavere renter' },
            { en: 'The risk the bond is never issued', no: 'Risikoen for at obligasjonen aldri utstedes' },
            { en: 'The risk of paying tax twice', no: 'Risikoen for å betale skatt to ganger' }
          ],
          correct: 1,
          explanation: {
            en: 'If rates fall, coupon payments (or early-called principal) must be reinvested at lower yields, reducing overall return.',
            no: 'Hvis rentene faller, må kupongbetalinger (eller tidlig innløst hovedstol) reinvesteres til lavere rente, noe som reduserer samlet avkastning.'
          },
          tags: ['reinvestment risk', 'rates']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the relationship between a bond coupon rate and its current yield when the bond trades below par?',
            no: 'Hva er forholdet mellom en obligasjons kupongrente og dens løpende avkastning når obligasjonen handles under pari?'
          },
          answers: [
            { en: 'Current yield is lower than the coupon rate', no: 'Løpende avkastning er lavere enn kupongrenten' },
            { en: 'They are always equal', no: 'De er alltid like' },
            { en: 'The coupon disappears', no: 'Kupongen forsvinner' },
            { en: 'Current yield is higher than the coupon rate', no: 'Løpende avkastning er høyere enn kupongrenten' }
          ],
          correct: 3,
          explanation: {
            en: 'When a bond trades below par, the fixed coupon represents a larger percentage of the lower price, so current yield exceeds the coupon rate.',
            no: 'Når en obligasjon handles under pari, utgjør den faste kupongen en større prosent av den lavere prisen, så løpende avkastning overstiger kupongrenten.'
          },
          tags: ['current yield', 'pricing']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a bond indenture?',
            no: 'Hva er et obligasjonsvilkår (indenture)?'
          },
          answers: [
            { en: 'A tax on bond income', no: 'En skatt på obligasjonsinntekt' },
            { en: 'The broker who sells the bond', no: 'Megleren som selger obligasjonen' },
            { en: 'The legal contract setting the bond terms and the issuer obligations', no: 'Den juridiske kontrakten som fastsetter obligasjonens vilkår og utstederens forpliktelser' },
            { en: 'The market price of the bond', no: 'Markedsprisen på obligasjonen' }
          ],
          correct: 2,
          explanation: {
            en: 'The indenture is the formal agreement specifying coupon, maturity, covenants and the rights of bondholders.',
            no: 'Vilkåret (indenture) er den formelle avtalen som angir kupong, forfall, betingelser (covenants) og obligasjonseiernes rettigheter.'
          },
          tags: ['indenture', 'contract']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a bond ladder?',
            no: 'Hva er en obligasjonsstige (bond ladder)?'
          },
          answers: [
            { en: 'Borrowing to double a bond position', no: 'Å låne for å doble en obligasjonsposisjon' },
            { en: 'Holding bonds with staggered maturities to manage rate and reinvestment risk', no: 'Å eie obligasjoner med trinnvise forfall for å håndtere rente- og reinvesteringsrisiko' },
            { en: 'Buying only one bond with the longest maturity', no: 'Å kjøpe bare én obligasjon med lengst løpetid' },
            { en: 'Selling all bonds on the same day', no: 'Å selge alle obligasjoner samme dag' }
          ],
          correct: 1,
          explanation: {
            en: 'A bond ladder spreads investments across bonds maturing at different times, smoothing reinvestment and reducing exposure to any single rate environment.',
            no: 'En obligasjonsstige sprer investeringer på obligasjoner som forfaller til ulike tider, jevner ut reinvestering og reduserer eksponering for ett enkelt rentemiljø.'
          },
          tags: ['bond ladder', 'strategy']
        },
        // ---------- HARD ----------
        {
          difficulty: 'hard',
          question: {
            en: 'What does an inverted yield curve typically signal?',
            no: 'Hva signaliserer en invertert rentekurve vanligvis?'
          },
          answers: [
            { en: 'Guaranteed economic boom', no: 'Garantert økonomisk oppgang' },
            { en: 'Falling government debt', no: 'Fallende statsgjeld' },
            { en: 'Rising corporate profits', no: 'Stigende selskapsoverskudd' },
            { en: 'A heightened risk of recession', no: 'En forhøyet risiko for resesjon' }
          ],
          correct: 3,
          explanation: {
            en: 'When short-term yields exceed long-term yields, the curve inverts; historically this has often preceded recessions.',
            no: 'Når korte renter overstiger lange renter, inverteres kurven; historisk har dette ofte kommet før resesjoner.'
          },
          tags: ['yield curve', 'recession']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'According to the expectations hypothesis, the shape of the yield curve reflects what?',
            no: 'Ifølge forventningshypotesen gjenspeiler rentekurvens form hva?'
          },
          answers: [
            { en: 'Only current inflation', no: 'Bare gjeldende inflasjon' },
            { en: 'The stock market index level', no: 'Aksjemarkedsindeksens nivå' },
            { en: 'The market expectations of future short-term interest rates', no: 'Markedets forventninger om fremtidige korte renter' },
            { en: 'The total number of bonds issued', no: 'Det totale antallet obligasjoner utstedt' }
          ],
          correct: 2,
          explanation: {
            en: 'The expectations hypothesis holds that long-term rates are an average of expected future short-term rates, shaping the curve.',
            no: 'Forventningshypotesen hevder at lange renter er et gjennomsnitt av forventede fremtidige korte renter, og former kurven.'
          },
          tags: ['expectations hypothesis', 'yield curve']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why does bond convexity matter beyond duration?',
            no: 'Hvorfor er obligasjonens konveksitet viktig utover durasjon?'
          },
          answers: [
            { en: 'It determines the issue date', no: 'Den bestemmer utstedelsesdatoen' },
            { en: 'It captures how duration itself changes as yields move', no: 'Den fanger hvordan durasjonen selv endrer seg når rentene beveger seg' },
            { en: 'It measures the coupon size', no: 'Den måler kupongstørrelsen' },
            { en: 'It sets the credit rating', no: 'Den fastsetter kredittvurderingen' }
          ],
          correct: 1,
          explanation: {
            en: 'Convexity measures the curvature of the price-yield relationship, refining duration estimates for large rate moves.',
            no: 'Konveksitet måler krumningen i forholdet mellom pris og rente, og forbedrer durasjonsanslagene ved store rentebevegelser.'
          },
          tags: ['convexity', 'duration']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the main risk of "duration mismatch" for a financial institution?',
            no: 'Hva er hovedrisikoen ved «durasjonsmismatch» for en finansinstitusjon?'
          },
          answers: [
            { en: 'It guarantees higher profits', no: 'Det garanterer høyere overskudd' },
            { en: 'It removes all interest-rate risk', no: 'Det fjerner all renterisiko' },
            { en: 'It only matters for stocks', no: 'Det betyr bare noe for aksjer' },
            { en: 'Funding short-term while holding long-term assets exposes it to rate shocks', no: 'Å finansiere kortsiktig mens man holder langsiktige eiendeler gir eksponering for rentesjokk' }
          ],
          correct: 3,
          explanation: {
            en: 'If an institution borrows short and lends long, rising short-term rates can sharply raise funding costs while asset values fall, as in some bank failures.',
            no: 'Hvis en institusjon låner kort og låner ut langt, kan stigende korte renter øke finansieringskostnadene kraftig mens eiendelsverdiene faller, som ved enkelte bankkollapser.'
          },
          tags: ['duration mismatch', 'risk']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does quantitative easing (QE) typically affect long-term bond yields?',
            no: 'Hvordan påvirker kvantitative lettelser (QE) vanligvis lange obligasjonsrenter?'
          },
          answers: [
            { en: 'It has no effect on yields', no: 'Den har ingen effekt på rentene' },
            { en: 'It eliminates default risk', no: 'Den fjerner misligholdsrisiko' },
            { en: 'It tends to push them down by raising demand for bonds', no: 'Den har en tendens til å presse dem ned ved å øke etterspørselen etter obligasjoner' },
            { en: 'It always raises them sharply', no: 'Den hever dem alltid kraftig' }
          ],
          correct: 2,
          explanation: {
            en: 'By buying large quantities of bonds, central banks raise their prices and lower long-term yields to ease financial conditions.',
            no: 'Ved å kjøpe store mengder obligasjoner hever sentralbanker prisene og senker de lange rentene for å lette de finansielle forholdene.'
          },
          tags: ['quantitative easing', 'yields']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a credit default swap (CDS) in relation to bonds?',
            no: 'Hva er en kredittbytteavtale (CDS) i forhold til obligasjoner?'
          },
          answers: [
            { en: 'A fee charged by exchanges', no: 'Et gebyr som kreves av børser' },
            { en: 'A contract that pays out if the bond issuer defaults', no: 'En kontrakt som betaler ut hvis obligasjonsutstederen misligholder' },
            { en: 'A bond that pays double coupons', no: 'En obligasjon som betaler dobbel kupong' },
            { en: 'A type of government bond', no: 'En type statsobligasjon' }
          ],
          correct: 1,
          explanation: {
            en: 'A CDS is essentially insurance against an issuer default; the buyer pays premiums and is compensated if a credit event occurs.',
            no: 'En CDS er i praksis en forsikring mot en utsteders mislighold; kjøperen betaler premier og kompenseres hvis en kreditthendelse inntreffer.'
          },
          tags: ['cds', 'credit risk']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why can sovereign bonds of countries that borrow in their own currency be considered less likely to default outright?',
            no: 'Hvorfor kan statsobligasjoner fra land som låner i egen valuta anses som mindre tilbøyelige til direkte mislighold?'
          },
          answers: [
            { en: 'They never pay interest', no: 'De betaler aldri rente' },
            { en: 'They are insured by other countries', no: 'De er forsikret av andre land' },
            { en: 'They have no maturity', no: 'De har ingen løpetid' },
            { en: 'The government can create currency to repay nominal debt', no: 'Staten kan skape valuta for å betale tilbake nominell gjeld' }
          ],
          correct: 3,
          explanation: {
            en: 'A government issuing debt in its own currency can in principle print money to meet nominal obligations, shifting the risk toward inflation rather than outright default.',
            no: 'En stat som utsteder gjeld i egen valuta kan i prinsippet trykke penger for å innfri nominelle forpliktelser, slik at risikoen forskyves mot inflasjon snarere enn direkte mislighold.'
          },
          tags: ['sovereign debt', 'default']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What role did mortgage-backed securities (MBS) play in the 2008 financial crisis?',
            no: 'Hvilken rolle spilte boliglånsbaserte verdipapirer (MBS) i finanskrisen i 2008?'
          },
          answers: [
            { en: 'They were all issued by governments', no: 'De ble alle utstedt av stater' },
            { en: 'They were risk-free by design', no: 'De var risikofrie i utgangspunktet' },
            { en: 'Bundled risky mortgages were rated highly, then collapsed as defaults rose', no: 'Buntede risikable boliglån ble vurdert høyt, og kollapset så da misligholdene økte' },
            { en: 'They had no connection to the crisis', no: 'De hadde ingen forbindelse til krisen' }
          ],
          correct: 2,
          explanation: {
            en: 'MBS pooled mortgages, including subprime loans, and often carried high ratings; when housing defaults surged, their value collapsed, spreading losses.',
            no: 'MBS samlet boliglån, inkludert subprime-lån, og hadde ofte høye vurderinger; da boligmisligholdene skjøt i været, kollapset verdien og spredte tap.'
          },
          tags: ['mbs', '2008 crisis']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the key idea behind immunization of a bond portfolio?',
            no: 'Hva er hovedideen bak immunisering av en obligasjonsportefølje?'
          },
          answers: [
            { en: 'Holding bonds for one day only', no: 'Å holde obligasjoner kun én dag' },
            { en: 'Matching duration to the investment horizon to offset rate risk', no: 'Å matche durasjonen til investeringshorisonten for å motvirke renterisiko' },
            { en: 'Buying only zero-coupon bonds', no: 'Å kjøpe bare nullkupongobligasjoner' },
            { en: 'Avoiding all government bonds', no: 'Å unngå alle statsobligasjoner' }
          ],
          correct: 1,
          explanation: {
            en: 'Immunization sets portfolio duration equal to the horizon so that price and reinvestment effects offset, locking in a target return.',
            no: 'Immunisering setter porteføljens durasjon lik horisonten slik at pris- og reinvesteringseffekter motvirker hverandre og låser en målavkastning.'
          },
          tags: ['immunization', 'strategy']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why are credit-rating agencies sometimes criticized after financial crises?',
            no: 'Hvorfor kritiseres kredittvurderingsbyråer noen ganger etter finanskriser?'
          },
          answers: [
            { en: 'They never rate any bonds', no: 'De vurderer aldri noen obligasjoner' },
            { en: 'They are owned by governments', no: 'De eies av stater' },
            { en: 'They set interest rates directly', no: 'De fastsetter renter direkte' },
            { en: 'Conflicts of interest from issuer-paid ratings may inflate ratings', no: 'Interessekonflikter fra utstederbetalte vurderinger kan blåse opp vurderingene' }
          ],
          correct: 3,
          explanation: {
            en: 'Because issuers pay for ratings, critics argue agencies had incentives to assign overly favorable ratings, notably on structured products before 2008.',
            no: 'Fordi utstedere betaler for vurderinger, hevder kritikere at byråene hadde insentiver til å gi for gunstige vurderinger, særlig på strukturerte produkter før 2008.'
          },
          tags: ['rating agencies', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What distinguishes nominal bonds from inflation-linked bonds (e.g. TIPS)?',
            no: 'Hva skiller nominelle obligasjoner fra inflasjonssikrede obligasjoner (f.eks. TIPS)?'
          },
          answers: [
            { en: 'Inflation-linked bonds never pay interest', no: 'Inflasjonssikrede obligasjoner betaler aldri rente' },
            { en: 'They are economically identical', no: 'De er økonomisk identiske' },
            { en: 'Inflation-linked bonds adjust principal or coupons with a price index', no: 'Inflasjonssikrede obligasjoner justerer hovedstol eller kuponger etter en prisindeks' },
            { en: 'Nominal bonds always pay more', no: 'Nominelle obligasjoner betaler alltid mer' }
          ],
          correct: 2,
          explanation: {
            en: 'Inflation-linked bonds adjust their principal (and thus coupons) with an inflation index, protecting the real value of payments.',
            no: 'Inflasjonssikrede obligasjoner justerer hovedstolen (og dermed kupongene) etter en inflasjonsindeks, og beskytter realverdien av betalingene.'
          },
          tags: ['tips', 'inflation']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is "flight to quality" in bond markets?',
            no: 'Hva er «flukt til kvalitet» (flight to quality) i obligasjonsmarkeder?'
          },
          answers: [
            { en: 'A rise in junk-bond demand', no: 'En økning i etterspørselen etter søppelobligasjoner' },
            { en: 'Investors shifting to safe assets during stress, lowering their yields', no: 'Investorer som flytter til trygge eiendeler under uro, og senker deres renter' },
            { en: 'Investors selling all bonds at once', no: 'Investorer som selger alle obligasjoner samtidig' },
            { en: 'Companies upgrading their products', no: 'Selskaper som oppgraderer produktene sine' }
          ],
          correct: 1,
          explanation: {
            en: 'During turmoil, investors move into safe assets like top-rated government bonds, raising their prices and lowering yields.',
            no: 'Under uro flytter investorer til trygge eiendeler som høyt vurderte statsobligasjoner, noe som hever prisene og senker rentene.'
          },
          tags: ['flight to quality', 'crises']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How can a steepening yield curve be interpreted by markets?',
            no: 'Hvordan kan en brattere rentekurve tolkes av markedene?'
          },
          answers: [
            { en: 'As a guarantee of recession', no: 'Som en garanti for resesjon' },
            { en: 'As proof rates will never change', no: 'Som bevis på at rentene aldri endres' },
            { en: 'As a sign bonds have stopped trading', no: 'Som et tegn på at obligasjoner har sluttet å handles' },
            { en: 'As expectations of stronger growth or higher future inflation', no: 'Som forventninger om sterkere vekst eller høyere fremtidig inflasjon' }
          ],
          correct: 3,
          explanation: {
            en: 'A steeper curve, with long rates rising relative to short rates, often signals expectations of stronger growth or higher inflation ahead.',
            no: 'En brattere kurve, der lange renter stiger i forhold til korte, signaliserer ofte forventninger om sterkere vekst eller høyere inflasjon fremover.'
          },
          tags: ['yield curve', 'growth']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why might very low or negative interest rates create challenges for bond investors?',
            no: 'Hvorfor kan svært lave eller negative renter skape utfordringer for obligasjonsinvestorer?'
          },
          answers: [
            { en: 'They remove all default risk', no: 'De fjerner all misligholdsrisiko' },
            { en: 'They force coupons to double', no: 'De tvinger kupongene til å dobles' },
            { en: 'They reduce income and raise price risk if rates eventually rise', no: 'De reduserer inntekt og øker prisrisiko hvis rentene til slutt stiger' },
            { en: 'They guarantee high returns', no: 'De garanterer høy avkastning' }
          ],
          correct: 2,
          explanation: {
            en: 'Low or negative yields offer little income and expose holders to large price losses if rates later rise, since prices fall as yields climb.',
            no: 'Lave eller negative renter gir lite inntekt og utsetter innehavere for store prisfall hvis rentene senere stiger, siden prisene faller når rentene øker.'
          },
          tags: ['negative rates', 'risk']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a key trade-off when a government finances deficits by issuing more bonds?',
            no: 'Hva er en sentral avveining når en stat finansierer underskudd ved å utstede flere obligasjoner?'
          },
          answers: [
            { en: 'It has no effect on the economy', no: 'Det har ingen effekt på økonomien' },
            { en: 'Higher supply can raise borrowing costs and future interest burdens', no: 'Høyere tilbud kan øke lånekostnadene og fremtidige rentebyrder' },
            { en: 'It always lowers interest rates', no: 'Det senker alltid rentene' },
            { en: 'It eliminates the deficit instantly', no: 'Det fjerner underskuddet umiddelbart' }
          ],
          correct: 1,
          explanation: {
            en: 'Issuing more debt increases supply and future interest costs, and can push up yields if investors demand more compensation.',
            no: 'Å utstede mer gjeld øker tilbudet og fremtidige rentekostnader, og kan presse rentene opp hvis investorer krever mer kompensasjon.'
          },
          tags: ['government debt', 'fiscal policy']
        }
      ]
    },
    {
      slug: 'derivatives',
      name: { en: 'Derivatives', no: 'Derivater' },
      questions: [
        // ---------- EASY ----------
        {
          difficulty: 'easy',
          question: {
            en: 'What is a financial derivative?',
            no: 'Hva er et finansielt derivat?'
          },
          answers: [
            { en: 'A type of company share', no: 'En type selskapsaksje' },
            { en: 'A government tax', no: 'En statlig skatt' },
            { en: 'A savings account', no: 'En sparekonto' },
            { en: 'A contract whose value derives from an underlying asset', no: 'En kontrakt hvis verdi avledes av en underliggende eiendel' }
          ],
          correct: 3,
          explanation: {
            en: 'A derivative is a contract whose value depends on an underlying asset such as a stock, bond, commodity or index.',
            no: 'Et derivat er en kontrakt hvis verdi avhenger av en underliggende eiendel som en aksje, obligasjon, råvare eller indeks.'
          },
          tags: ['definition', 'derivatives']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a call option?',
            no: 'Hva er en kjøpsopsjon (call)?'
          },
          answers: [
            { en: 'A loan from a bank', no: 'Et lån fra en bank' },
            { en: 'A type of bond', no: 'En type obligasjon' },
            { en: 'The right to buy an asset at a set price', no: 'Retten til å kjøpe en eiendel til en fastsatt pris' },
            { en: 'The obligation to sell an asset', no: 'Plikten til å selge en eiendel' }
          ],
          correct: 2,
          explanation: {
            en: 'A call option gives the holder the right, but not the obligation, to buy an asset at a specified strike price.',
            no: 'En kjøpsopsjon gir innehaveren retten, men ikke plikten, til å kjøpe en eiendel til en angitt innløsningskurs.'
          },
          tags: ['call option', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a put option?',
            no: 'Hva er en salgsopsjon (put)?'
          },
          answers: [
            { en: 'A type of share', no: 'En type aksje' },
            { en: 'The right to sell an asset at a set price', no: 'Retten til å selge en eiendel til en fastsatt pris' },
            { en: 'The right to buy an asset', no: 'Retten til å kjøpe en eiendel' },
            { en: 'A guaranteed dividend', no: 'Et garantert utbytte' }
          ],
          correct: 1,
          explanation: {
            en: 'A put option gives the holder the right, but not the obligation, to sell an asset at a specified strike price.',
            no: 'En salgsopsjon gir innehaveren retten, men ikke plikten, til å selge en eiendel til en angitt innløsningskurs.'
          },
          tags: ['put option', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a futures contract?',
            no: 'Hva er en futureskontrakt?'
          },
          answers: [
            { en: 'A share that pays no dividend', no: 'En aksje som ikke betaler utbytte' },
            { en: 'A short-term bank loan', no: 'Et kortsiktig banklån' },
            { en: 'A government grant', no: 'Et statlig tilskudd' },
            { en: 'An agreement to buy or sell an asset at a set price on a future date', no: 'En avtale om å kjøpe eller selge en eiendel til en fastsatt pris på en fremtidig dato' }
          ],
          correct: 3,
          explanation: {
            en: 'A futures contract is a standardized, exchange-traded agreement to trade an asset at a fixed price on a future date.',
            no: 'En futureskontrakt er en standardisert, børshandlet avtale om å handle en eiendel til en fast pris på en fremtidig dato.'
          },
          tags: ['futures', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the "underlying asset" of a derivative?',
            no: 'Hva er den «underliggende eiendelen» til et derivat?'
          },
          answers: [
            { en: 'The exchange where it trades', no: 'Børsen der det handles' },
            { en: 'The tax applied to it', no: 'Skatten som gjelder for det' },
            { en: 'The asset whose price the derivative is based on', no: 'Eiendelen som derivatets pris er basert på' },
            { en: 'The broker who sells it', no: 'Megleren som selger det' }
          ],
          correct: 2,
          explanation: {
            en: 'The underlying asset (e.g. a stock, commodity or index) is what a derivative value is derived from.',
            no: 'Den underliggende eiendelen (f.eks. en aksje, råvare eller indeks) er det derivatets verdi avledes fra.'
          },
          tags: ['underlying', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the "strike price" of an option?',
            no: 'Hva er «innløsningskursen» til en opsjon?'
          },
          answers: [
            { en: 'The current market price of the stock', no: 'Aksjens gjeldende markedspris' },
            { en: 'The price at which the option can be exercised', no: 'Prisen opsjonen kan innløses til' },
            { en: 'The premium paid for the option', no: 'Premien som betales for opsjonen' },
            { en: 'The broker commission', no: 'Meglerprovisjonen' }
          ],
          correct: 1,
          explanation: {
            en: 'The strike (exercise) price is the fixed price at which the holder can buy or sell the underlying asset.',
            no: 'Innløsningskursen er den faste prisen innehaveren kan kjøpe eller selge den underliggende eiendelen til.'
          },
          tags: ['strike price', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is the "premium" of an option?',
            no: 'Hva er «premien» til en opsjon?'
          },
          answers: [
            { en: 'The strike price', no: 'Innløsningskursen' },
            { en: 'The dividend on the stock', no: 'Utbyttet på aksjen' },
            { en: 'The maturity date', no: 'Forfallsdatoen' },
            { en: 'The price paid to buy the option', no: 'Prisen som betales for å kjøpe opsjonen' }
          ],
          correct: 3,
          explanation: {
            en: 'The premium is the upfront price the buyer pays the seller for the rights granted by the option.',
            no: 'Premien er prisen kjøperen betaler selgeren på forhånd for rettighetene opsjonen gir.'
          },
          tags: ['premium', 'options']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a common reason businesses use derivatives?',
            no: 'Hva er en vanlig grunn til at bedrifter bruker derivater?'
          },
          answers: [
            { en: 'To increase the number of employees', no: 'Å øke antall ansatte' },
            { en: 'To issue new shares', no: 'Å utstede nye aksjer' },
            { en: 'To hedge against price or rate risk', no: 'Å sikre seg mot pris- eller renterisiko' },
            { en: 'To avoid paying any taxes', no: 'Å unngå å betale skatt' }
          ],
          correct: 2,
          explanation: {
            en: 'Firms often use derivatives to hedge, locking in prices or rates to reduce exposure to adverse market moves.',
            no: 'Bedrifter bruker ofte derivater til å sikre seg, ved å låse priser eller renter for å redusere eksponering for ugunstige markedsbevegelser.'
          },
          tags: ['hedging', 'uses']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a forward contract?',
            no: 'Hva er en forwardkontrakt?'
          },
          answers: [
            { en: 'A bank deposit', no: 'Et bankinnskudd' },
            { en: 'A customized private agreement to trade an asset later at a set price', no: 'En tilpasset privat avtale om å handle en eiendel senere til en fastsatt pris' },
            { en: 'A share traded on an exchange', no: 'En aksje som handles på en børs' },
            { en: 'A government bond', no: 'En statsobligasjon' }
          ],
          correct: 1,
          explanation: {
            en: 'A forward is a private, customizable contract to buy or sell an asset at a future date for a price agreed today.',
            no: 'En forward er en privat, tilpassbar kontrakt om å kjøpe eller selge en eiendel på en fremtidig dato til en pris avtalt i dag.'
          },
          tags: ['forwards', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does it mean to "exercise" an option?',
            no: 'Hva betyr det å «innløse» en opsjon?'
          },
          answers: [
            { en: 'To cancel the option for free', no: 'Å kansellere opsjonen gratis' },
            { en: 'To sell the underlying stock short', no: 'Å shortselge den underliggende aksjen' },
            { en: 'To pay a dividend', no: 'Å betale utbytte' },
            { en: 'To use the right to buy or sell at the strike price', no: 'Å bruke retten til å kjøpe eller selge til innløsningskursen' }
          ],
          correct: 3,
          explanation: {
            en: 'Exercising means invoking the option right to buy (call) or sell (put) the underlying at the strike price.',
            no: 'Å innløse betyr å bruke opsjonens rett til å kjøpe (call) eller selge (put) det underliggende til innløsningskursen.'
          },
          tags: ['exercise', 'options']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'On what kind of venue are standardized options and futures typically traded?',
            no: 'På hvilken type markedsplass handles standardiserte opsjoner og futures vanligvis?'
          },
          answers: [
            { en: 'At a central bank counter', no: 'Ved en sentralbankskranke' },
            { en: 'In a savings account', no: 'På en sparekonto' },
            { en: 'On organized exchanges', no: 'På organiserte børser' },
            { en: 'Only by phone between friends', no: 'Bare per telefon mellom venner' }
          ],
          correct: 2,
          explanation: {
            en: 'Standardized derivatives like listed options and futures trade on organized, regulated exchanges.',
            no: 'Standardiserte derivater som noterte opsjoner og futures handles på organiserte, regulerte børser.'
          },
          tags: ['exchanges', 'trading']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a swap in finance?',
            no: 'Hva er en bytteavtale (swap) i finans?'
          },
          answers: [
            { en: 'A type of savings account', no: 'En type sparekonto' },
            { en: 'A contract to exchange cash flows between two parties', no: 'En kontrakt om å bytte kontantstrømmer mellom to parter' },
            { en: 'A share issued by a bank', no: 'En aksje utstedt av en bank' },
            { en: 'A government bond', no: 'En statsobligasjon' }
          ],
          correct: 1,
          explanation: {
            en: 'A swap is an agreement between two parties to exchange streams of cash flows, such as fixed for floating interest.',
            no: 'En swap er en avtale mellom to parter om å bytte strømmer av kontantstrømmer, for eksempel fast mot flytende rente.'
          },
          tags: ['swap', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'If you buy a call option and the stock price stays below the strike, what is your maximum loss?',
            no: 'Hvis du kjøper en kjøpsopsjon og aksjekursen holder seg under innløsningskursen, hva er ditt maksimale tap?'
          },
          answers: [
            { en: 'The full value of the stock', no: 'Hele verdien av aksjen' },
            { en: 'Unlimited', no: 'Ubegrenset' },
            { en: 'Nothing at all', no: 'Ingenting i det hele tatt' },
            { en: 'The premium you paid', no: 'Premien du betalte' }
          ],
          correct: 3,
          explanation: {
            en: 'A call buyer can simply let the option expire worthless, so the most they lose is the premium paid.',
            no: 'En kjøper av en call kan bare la opsjonen utløpe verdiløs, så det meste de taper er premien de betalte.'
          },
          tags: ['call option', 'risk']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does "speculation" with derivatives mean?',
            no: 'Hva betyr «spekulasjon» med derivater?'
          },
          answers: [
            { en: 'Lending money to a government', no: 'Å låne penger til en stat' },
            { en: 'Paying dividends to shareholders', no: 'Å betale utbytte til aksjonærer' },
            { en: 'Taking positions to profit from expected price moves', no: 'Å ta posisjoner for å tjene på forventede prisbevegelser' },
            { en: 'Eliminating all risk', no: 'Å fjerne all risiko' }
          ],
          correct: 2,
          explanation: {
            en: 'Speculators use derivatives to bet on price movements, aiming for profit rather than hedging existing risk.',
            no: 'Spekulanter bruker derivater til å vedde på prisbevegelser, med mål om gevinst snarere enn å sikre eksisterende risiko.'
          },
          tags: ['speculation', 'uses']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is "leverage" in the context of derivatives?',
            no: 'Hva er «giring» (leverage) i sammenheng med derivater?'
          },
          answers: [
            { en: 'Avoiding the market entirely', no: 'Å unngå markedet helt' },
            { en: 'Controlling a large position with a small amount of capital', no: 'Å kontrollere en stor posisjon med en liten mengde kapital' },
            { en: 'Owning a company outright', no: 'Å eie et selskap fullt ut' },
            { en: 'Paying off all debt', no: 'Å betale all gjeld' }
          ],
          correct: 1,
          explanation: {
            en: 'Derivatives let traders control large exposures with relatively little capital, amplifying both gains and losses.',
            no: 'Derivater lar handlere kontrollere store eksponeringer med relativt lite kapital, noe som forsterker både gevinster og tap.'
          },
          tags: ['leverage', 'definition']
        },
        // ---------- MEDIUM ----------
        {
          difficulty: 'medium',
          question: {
            en: 'What is the key difference between futures and forward contracts?',
            no: 'Hva er den viktigste forskjellen mellom futures- og forwardkontrakter?'
          },
          answers: [
            { en: 'Futures are always for stocks; forwards for bonds', no: 'Futures er alltid for aksjer; forwards for obligasjoner' },
            { en: 'Forwards have no counterparty', no: 'Forwards har ingen motpart' },
            { en: 'There is no difference', no: 'Det er ingen forskjell' },
            { en: 'Futures are standardized and exchange-traded; forwards are private and customizable', no: 'Futures er standardiserte og børshandlede; forwards er private og tilpassbare' }
          ],
          correct: 3,
          explanation: {
            en: 'Futures are standardized contracts traded on exchanges with daily settlement, while forwards are private OTC agreements with custom terms.',
            no: 'Futures er standardiserte kontrakter som handles på børs med daglig oppgjør, mens forwards er private OTC-avtaler med tilpassede vilkår.'
          },
          tags: ['futures', 'forwards']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does hedging with derivatives differ from speculating?',
            no: 'Hvordan skiller sikring (hedging) med derivater seg fra spekulasjon?'
          },
          answers: [
            { en: 'Speculation removes all risk', no: 'Spekulasjon fjerner all risiko' },
            { en: 'They are the same thing', no: 'De er det samme' },
            { en: 'Hedging reduces existing risk; speculation takes on new risk for profit', no: 'Sikring reduserer eksisterende risiko; spekulasjon tar på seg ny risiko for gevinst' },
            { en: 'Hedging always loses money', no: 'Sikring taper alltid penger' }
          ],
          correct: 2,
          explanation: {
            en: 'A hedger uses derivatives to offset existing exposure, while a speculator deliberately takes on risk hoping to profit from price moves.',
            no: 'En som sikrer bruker derivater for å motvirke eksisterende eksponering, mens en spekulant bevisst tar på seg risiko i håp om gevinst fra prisbevegelser.'
          },
          tags: ['hedging', 'speculation']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the role of a clearinghouse in exchange-traded derivatives?',
            no: 'Hva er rollen til en clearingsentral i børshandlede derivater?'
          },
          answers: [
            { en: 'It collects income tax', no: 'Den krever inn inntektsskatt' },
            { en: 'It acts as counterparty to both sides, reducing default risk', no: 'Den opptrer som motpart til begge sider og reduserer misligholdsrisiko' },
            { en: 'It sets the strike prices', no: 'Den fastsetter innløsningskursene' },
            { en: 'It pays dividends to traders', no: 'Den betaler utbytte til handlere' }
          ],
          correct: 1,
          explanation: {
            en: 'A clearinghouse interposes itself between buyer and seller, guaranteeing performance and managing counterparty risk through margin.',
            no: 'En clearingsentral stiller seg mellom kjøper og selger, garanterer oppfyllelse og håndterer motpartsrisiko gjennom marginkrav.'
          },
          tags: ['clearinghouse', 'risk']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is "margin" in futures trading?',
            no: 'Hva er «margin» i futureshandel?'
          },
          answers: [
            { en: 'The profit guaranteed on each trade', no: 'Gevinsten som garanteres på hver handel' },
            { en: 'A tax on the contract', no: 'En skatt på kontrakten' },
            { en: 'The dividend from the underlying', no: 'Utbyttet fra det underliggende' },
            { en: 'A good-faith deposit to cover potential losses', no: 'Et innskudd i god tro for å dekke mulige tap' }
          ],
          correct: 3,
          explanation: {
            en: 'Margin is collateral posted to the clearinghouse to cover potential losses, ensuring participants can meet obligations.',
            no: 'Margin er sikkerhet stilt til clearingsentralen for å dekke mulige tap, slik at aktørene kan oppfylle forpliktelsene sine.'
          },
          tags: ['margin', 'futures']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why is the potential loss for the seller (writer) of a "naked" call option theoretically unlimited?',
            no: 'Hvorfor er det potensielle tapet for selgeren (utstederen) av en «naken» kjøpsopsjon teoretisk ubegrenset?'
          },
          answers: [
            { en: 'The strike price keeps decreasing', no: 'Innløsningskursen synker stadig' },
            { en: 'The option never expires', no: 'Opsjonen utløper aldri' },
            { en: 'The underlying price can rise without limit', no: 'Prisen på det underliggende kan stige uten grense' },
            { en: 'The premium can fall below zero', no: 'Premien kan falle under null' }
          ],
          correct: 2,
          explanation: {
            en: 'A naked call writer must deliver the asset at the strike no matter how high the price climbs, so losses are theoretically unlimited.',
            no: 'En utsteder av en naken call må levere eiendelen til innløsningskursen uansett hvor høyt prisen klatrer, så tapene er teoretisk ubegrensede.'
          },
          tags: ['options', 'risk']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is an interest rate swap typically used for?',
            no: 'Hva brukes en rentebytteavtale (interest rate swap) vanligvis til?'
          },
          answers: [
            { en: 'Issuing new government bonds', no: 'Å utstede nye statsobligasjoner' },
            { en: 'Exchanging fixed-rate for floating-rate payments to manage rate risk', no: 'Å bytte fastrente mot flytende rente for å håndtere renterisiko' },
            { en: 'Buying shares in a company', no: 'Å kjøpe aksjer i et selskap' },
            { en: 'Paying dividends to shareholders', no: 'Å betale utbytte til aksjonærer' }
          ],
          correct: 1,
          explanation: {
            en: 'In an interest rate swap, parties exchange fixed and floating interest payments to better match their risk preferences.',
            no: 'I en rentebytteavtale bytter parter faste og flytende rentebetalinger for bedre å tilpasse risikopreferansene sine.'
          },
          tags: ['swap', 'interest rate']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does it mean for an option to be "in the money"?',
            no: 'Hva betyr det at en opsjon er «in the money»?'
          },
          answers: [
            { en: 'It has already expired', no: 'Den har allerede utløpt' },
            { en: 'The premium is zero', no: 'Premien er null' },
            { en: 'It pays a dividend', no: 'Den betaler utbytte' },
            { en: 'Exercising it would currently be profitable', no: 'Å innløse den ville for øyeblikket være lønnsomt' }
          ],
          correct: 3,
          explanation: {
            en: 'An option is in the money when its strike is favorable relative to the current price, giving it intrinsic value.',
            no: 'En opsjon er in the money når innløsningskursen er gunstig i forhold til gjeldende pris, slik at den har egenverdi.'
          },
          tags: ['moneyness', 'options']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does leverage in derivatives affect risk?',
            no: 'Hvordan påvirker giring i derivater risikoen?'
          },
          answers: [
            { en: 'It only increases gains, never losses', no: 'Den øker bare gevinster, aldri tap' },
            { en: 'It has no effect on outcomes', no: 'Den har ingen effekt på utfallene' },
            { en: 'It amplifies both potential gains and potential losses', no: 'Den forsterker både mulige gevinster og mulige tap' },
            { en: 'It removes all downside risk', no: 'Den fjerner all nedsiderisiko' }
          ],
          correct: 2,
          explanation: {
            en: 'Because a small outlay controls a large position, leverage magnifies returns in both directions, increasing risk.',
            no: 'Fordi et lite utlegg kontrollerer en stor posisjon, forstørrer giring avkastningen i begge retninger og øker risikoen.'
          },
          tags: ['leverage', 'risk']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a commodity futures contract often used for by producers?',
            no: 'Hva brukes en råvarefutureskontrakt ofte til av produsenter?'
          },
          answers: [
            { en: 'To pay employee wages', no: 'Å betale lønn til ansatte' },
            { en: 'To lock in a selling price and reduce price uncertainty', no: 'Å låse en salgspris og redusere prisusikkerhet' },
            { en: 'To avoid producing goods', no: 'Å unngå å produsere varer' },
            { en: 'To issue company shares', no: 'Å utstede selskapsaksjer' }
          ],
          correct: 1,
          explanation: {
            en: 'A farmer or miner can sell futures to fix the price of future output, hedging against falling commodity prices.',
            no: 'En bonde eller gruvedrift kan selge futures for å fastsette prisen på fremtidig produksjon og sikre seg mot fallende råvarepriser.'
          },
          tags: ['commodity futures', 'hedging']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What distinguishes an American-style option from a European-style option?',
            no: 'Hva skiller en amerikansk opsjon fra en europeisk opsjon?'
          },
          answers: [
            { en: 'American options are only traded in the US', no: 'Amerikanske opsjoner handles bare i USA' },
            { en: 'European options never expire', no: 'Europeiske opsjoner utløper aldri' },
            { en: 'They are priced identically in all cases', no: 'De prises identisk i alle tilfeller' },
            { en: 'American options can be exercised any time before expiry; European only at expiry', no: 'Amerikanske opsjoner kan innløses når som helst før forfall; europeiske kun ved forfall' }
          ],
          correct: 3,
          explanation: {
            en: 'The labels refer to exercise style: American options allow early exercise, while European options can only be exercised at maturity.',
            no: 'Betegnelsene viser til innløsningsstil: amerikanske opsjoner tillater tidlig innløsning, mens europeiske kun kan innløses ved forfall.'
          },
          tags: ['options', 'exercise style']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How can put options be used to protect a stock portfolio?',
            no: 'Hvordan kan salgsopsjoner brukes til å beskytte en aksjeportefølje?'
          },
          answers: [
            { en: 'They eliminate the need to own stocks', no: 'De fjerner behovet for å eie aksjer' },
            { en: 'They pay a fixed dividend', no: 'De betaler et fast utbytte' },
            { en: 'They provide the right to sell at a set price, limiting downside', no: 'De gir rett til å selge til en fastsatt pris, og begrenser nedsiden' },
            { en: 'They guarantee the portfolio always rises', no: 'De garanterer at porteføljen alltid stiger' }
          ],
          correct: 2,
          explanation: {
            en: 'Buying puts (a "protective put") lets an investor sell at the strike if prices fall, capping losses on the holdings.',
            no: 'Å kjøpe puts (en «beskyttende put») lar en investor selge til innløsningskursen hvis prisene faller, og begrenser tap på beholdningen.'
          },
          tags: ['protective put', 'hedging']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is "open interest" in derivatives markets?',
            no: 'Hva er «open interest» i derivatmarkeder?'
          },
          answers: [
            { en: 'The dividend yield of the underlying', no: 'Direkteavkastningen på det underliggende' },
            { en: 'The total number of outstanding contracts not yet settled', no: 'Det totale antallet utestående kontrakter som ennå ikke er gjort opp' },
            { en: 'The interest rate on a loan', no: 'Renten på et lån' },
            { en: 'The premium on a single option', no: 'Premien på en enkelt opsjon' }
          ],
          correct: 1,
          explanation: {
            en: 'Open interest counts the contracts that remain open, indicating market activity and liquidity in a derivative.',
            no: 'Open interest teller kontraktene som fortsatt er åpne, og indikerer markedsaktivitet og likviditet i et derivat.'
          },
          tags: ['open interest', 'markets']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why are derivatives sometimes described as a "zero-sum game" between counterparties?',
            no: 'Hvorfor beskrives derivater noen ganger som et «nullsumsspill» mellom motparter?'
          },
          answers: [
            { en: 'Both parties always lose money', no: 'Begge parter taper alltid penger' },
            { en: 'Both parties always gain equally', no: 'Begge parter tjener alltid likt' },
            { en: 'No money ever changes hands', no: 'Ingen penger skifter noensinne hender' },
            { en: 'One party gain on the contract equals the other party loss', no: 'Den ene partens gevinst på kontrakten tilsvarer den andre partens tap' }
          ],
          correct: 3,
          explanation: {
            en: 'For a derivative contract itself, what one side gains the other loses, so the payoffs net to zero between them (before fees).',
            no: 'For selve derivatkontrakten taper den ene siden det den andre tjener, så utbetalingene summerer til null mellom dem (før gebyrer).'
          },
          tags: ['zero-sum', 'payoffs']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is "marking to market" for a futures position?',
            no: 'Hva er «marking to market» for en futuresposisjon?'
          },
          answers: [
            { en: 'Paying a dividend to the holder', no: 'Å betale utbytte til innehaveren' },
            { en: 'Cancelling the contract daily', no: 'Å kansellere kontrakten daglig' },
            { en: 'Daily settlement of gains and losses based on the closing price', no: 'Daglig oppgjør av gevinster og tap basert på sluttkursen' },
            { en: 'Setting the strike price each morning', no: 'Å fastsette innløsningskursen hver morgen' }
          ],
          correct: 2,
          explanation: {
            en: 'Marking to market revalues the position daily, crediting or debiting the margin account for the day price change.',
            no: 'Marking to market omvurderer posisjonen daglig og krediterer eller debiterer marginkontoen for dagens prisendring.'
          },
          tags: ['mark to market', 'futures']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is a covered call strategy?',
            no: 'Hva er en «covered call»-strategi?'
          },
          answers: [
            { en: 'Borrowing shares to sell short', no: 'Å låne aksjer for å selge short' },
            { en: 'Selling call options against shares you already own', no: 'Å selge kjøpsopsjoner mot aksjer du allerede eier' },
            { en: 'Buying calls without owning the stock', no: 'Å kjøpe calls uten å eie aksjen' },
            { en: 'Selling puts on a government bond', no: 'Å selge puts på en statsobligasjon' }
          ],
          correct: 1,
          explanation: {
            en: 'In a covered call, an investor who owns the underlying shares sells call options on them to earn premium income, capping upside in exchange.',
            no: 'I en covered call selger en investor som eier de underliggende aksjene kjøpsopsjoner på dem for å tjene premieinntekt, mot å begrense oppsiden.'
          },
          tags: ['covered call', 'strategy']
        },
        // ---------- HARD ----------
        {
          difficulty: 'hard',
          question: {
            en: 'What does the Black-Scholes model price?',
            no: 'Hva priser Black-Scholes-modellen?'
          },
          answers: [
            { en: 'Government bonds', no: 'Statsobligasjoner' },
            { en: 'Common stock dividends', no: 'Utbytte på ordinære aksjer' },
            { en: 'Bank deposit rates', no: 'Renter på bankinnskudd' },
            { en: 'European-style options', no: 'Europeiske opsjoner' }
          ],
          correct: 3,
          explanation: {
            en: 'The Black-Scholes model provides a theoretical price for European options based on factors like volatility, time and the risk-free rate.',
            no: 'Black-Scholes-modellen gir en teoretisk pris for europeiske opsjoner basert på faktorer som volatilitet, tid og den risikofrie renten.'
          },
          tags: ['black-scholes', 'pricing']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'In option pricing, what does the "delta" of an option measure?',
            no: 'I opsjonsprising, hva måler en opsjons «delta»?'
          },
          answers: [
            { en: 'The total premium paid', no: 'Den totale premien som er betalt' },
            { en: 'The dividend on the stock', no: 'Utbyttet på aksjen' },
            { en: 'The change in option price for a small change in the underlying price', no: 'Endringen i opsjonsprisen ved en liten endring i prisen på det underliggende' },
            { en: 'The time left to expiry', no: 'Tiden som gjenstår til forfall' }
          ],
          correct: 2,
          explanation: {
            en: 'Delta measures the sensitivity of an option price to changes in the underlying asset price, and is central to hedging.',
            no: 'Delta måler følsomheten i en opsjonspris for endringer i prisen på den underliggende eiendelen, og er sentral i sikring.'
          },
          tags: ['delta', 'greeks']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is "implied volatility"?',
            no: 'Hva er «implisitt volatilitet»?'
          },
          answers: [
            { en: 'The bond coupon rate', no: 'Kupongrenten på en obligasjon' },
            { en: 'The volatility implied by an option market price via a pricing model', no: 'Volatiliteten som er implisert av en opsjons markedspris gjennom en prisingsmodell' },
            { en: 'The historical volatility of the last year', no: 'Den historiske volatiliteten det siste året' },
            { en: 'The dividend growth rate', no: 'Veksttakten i utbyttet' }
          ],
          correct: 1,
          explanation: {
            en: 'Implied volatility is the expected volatility backed out of an option market price using a model like Black-Scholes.',
            no: 'Implisitt volatilitet er den forventede volatiliteten som utledes av en opsjons markedspris ved hjelp av en modell som Black-Scholes.'
          },
          tags: ['implied volatility', 'options']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the principle of put-call parity?',
            no: 'Hva er prinsippet om put-call-paritet?'
          },
          answers: [
            { en: 'Puts always cost more than calls', no: 'Puts koster alltid mer enn calls' },
            { en: 'Calls and puts always have the same price', no: 'Calls og puts har alltid samme pris' },
            { en: 'Options never relate to the underlying', no: 'Opsjoner relaterer seg aldri til det underliggende' },
            { en: 'A fixed relationship links the prices of European puts and calls with the same strike and expiry', no: 'En fast sammenheng knytter prisene på europeiske puts og calls med samme innløsningskurs og forfall' }
          ],
          correct: 3,
          explanation: {
            en: 'Put-call parity ties together the prices of European calls and puts, the underlying and a bond; violations create arbitrage opportunities.',
            no: 'Put-call-paritet binder sammen prisene på europeiske calls og puts, det underliggende og en obligasjon; brudd skaper arbitrasjemuligheter.'
          },
          tags: ['put-call parity', 'arbitrage']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What role did credit default swaps (CDS) play in the 2008 financial crisis?',
            no: 'Hvilken rolle spilte kredittbytteavtaler (CDS) i finanskrisen i 2008?'
          },
          answers: [
            { en: 'They prevented any losses', no: 'De forhindret alle tap' },
            { en: 'They were issued only by governments', no: 'De ble utstedt kun av stater' },
            { en: 'Large, opaque CDS exposures spread losses and led to bailouts (e.g. AIG)', no: 'Store, ugjennomsiktige CDS-eksponeringer spredte tap og førte til redningspakker (f.eks. AIG)' },
            { en: 'They had no role in the crisis', no: 'De hadde ingen rolle i krisen' }
          ],
          correct: 2,
          explanation: {
            en: 'Firms like AIG had sold huge volumes of CDS protection; when mortgage defaults rose, the payouts threatened solvency and required intervention.',
            no: 'Selskaper som AIG hadde solgt enorme volumer CDS-beskyttelse; da boligmisligholdene økte, truet utbetalingene soliditeten og krevde inngripen.'
          },
          tags: ['cds', '2008 crisis']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why can selling options be described as having an asymmetric payoff profile?',
            no: 'Hvorfor kan det å selge opsjoner beskrives som å ha en asymmetrisk utbetalingsprofil?'
          },
          answers: [
            { en: 'No payoff at all', no: 'Ingen utbetaling i det hele tatt' },
            { en: 'Limited gain (the premium) but potentially large losses', no: 'Begrenset gevinst (premien), men potensielt store tap' },
            { en: 'Unlimited gain and no possible loss', no: 'Ubegrenset gevinst og ingen mulig tap' },
            { en: 'Equal gain and loss in all cases', no: 'Lik gevinst og tap i alle tilfeller' }
          ],
          correct: 1,
          explanation: {
            en: 'An option seller collects a fixed premium but bears the open-ended risk if the market moves sharply against them, like "picking up pennies in front of a steamroller."',
            no: 'En opsjonsselger mottar en fast premie, men bærer den åpne risikoen hvis markedet beveger seg kraftig imot dem, som å «plukke opp småmynter foran en dampveivals».'
          },
          tags: ['options', 'asymmetry']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a key danger of "notional value" in derivatives markets?',
            no: 'Hva er en sentral fare ved «notional value» (nominell verdi) i derivatmarkeder?'
          },
          answers: [
            { en: 'It is always equal to the premium', no: 'Den er alltid lik premien' },
            { en: 'It guarantees a profit', no: 'Den garanterer en gevinst' },
            { en: 'It eliminates counterparty risk', no: 'Den fjerner motpartsrisiko' },
            { en: 'Huge notional amounts can mask large hidden exposures', no: 'Enorme nominelle beløp kan skjule store skjulte eksponeringer' }
          ],
          correct: 3,
          explanation: {
            en: 'Notional value (the underlying amount referenced) can be enormous relative to capital, so large positions and systemic risks can build up unseen.',
            no: 'Nominell verdi (det underliggende beløpet det refereres til) kan være enorm i forhold til kapital, så store posisjoner og systemrisiko kan bygge seg opp usett.'
          },
          tags: ['notional value', 'systemic risk']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does "gamma" relate to an option delta?',
            no: 'Hvordan forholder «gamma» seg til en opsjons delta?'
          },
          answers: [
            { en: 'Gamma is the time to expiry', no: 'Gamma er tiden til forfall' },
            { en: 'Gamma is unrelated to delta', no: 'Gamma er uten sammenheng med delta' },
            { en: 'Gamma measures how fast delta changes as the underlying moves', no: 'Gamma måler hvor raskt delta endrer seg når det underliggende beveger seg' },
            { en: 'Gamma is the option premium', no: 'Gamma er opsjonspremien' }
          ],
          correct: 2,
          explanation: {
            en: 'Gamma is the rate of change of delta; high gamma means delta shifts rapidly, making a hedged position harder to keep neutral.',
            no: 'Gamma er endringsraten til delta; høy gamma betyr at delta skifter raskt, noe som gjør en sikret posisjon vanskeligere å holde nøytral.'
          },
          tags: ['gamma', 'greeks']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a collateralized debt obligation (CDO)?',
            no: 'Hva er en collateralized debt obligation (CDO)?'
          },
          answers: [
            { en: 'A type of common stock', no: 'En type ordinær aksje' },
            { en: 'A structured product pooling debt and slicing it into risk tranches', no: 'Et strukturert produkt som samler gjeld og deler den opp i risikotrancher' },
            { en: 'A single corporate bond', no: 'En enkelt selskapsobligasjon' },
            { en: 'A government savings account', no: 'En statlig sparekonto' }
          ],
          correct: 1,
          explanation: {
            en: 'A CDO bundles debt instruments and divides cash flows into tranches of differing risk and priority, a structure central to the 2008 crisis.',
            no: 'En CDO bunter gjeldsinstrumenter og deler kontantstrømmene i trancher med ulik risiko og prioritet, en struktur som var sentral i krisen i 2008.'
          },
          tags: ['cdo', 'structured products']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is counterparty risk especially significant in OTC derivatives?',
            no: 'Hvorfor er motpartsrisiko spesielt betydelig i OTC-derivater?'
          },
          answers: [
            { en: 'They are always settled instantly', no: 'De gjøres alltid opp umiddelbart' },
            { en: 'They carry no value', no: 'De har ingen verdi' },
            { en: 'They are guaranteed by the government', no: 'De er garantert av staten' },
            { en: 'There is no central clearinghouse guaranteeing the trade', no: 'Det finnes ingen sentral clearingsentral som garanterer handelen' }
          ],
          correct: 3,
          explanation: {
            en: 'OTC trades are bilateral, so if one party defaults there is no clearinghouse backstop, raising the importance of counterparty creditworthiness.',
            no: 'OTC-handler er bilaterale, så hvis én part misligholder finnes det ingen clearingsentral som sikrer, noe som øker betydningen av motpartens kredittverdighet.'
          },
          tags: ['counterparty risk', 'otc']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What does "convexity" of an option payoff refer to?',
            no: 'Hva viser «konveksitet» i en opsjons utbetaling til?'
          },
          answers: [
            { en: 'The premium paid upfront', no: 'Premien som betales på forhånd' },
            { en: 'The time to expiry only', no: 'Bare tiden til forfall' },
            { en: 'The nonlinear, curved relationship between payoff and the underlying price', no: 'Det ikke-lineære, krumme forholdet mellom utbetaling og prisen på det underliggende' },
            { en: 'A fixed linear payoff', no: 'En fast lineær utbetaling' }
          ],
          correct: 2,
          explanation: {
            en: 'Options have convex payoffs: gains can accelerate while losses are capped (for buyers), which is valuable amid large price swings.',
            no: 'Opsjoner har konvekse utbetalinger: gevinster kan akselerere mens tap er begrenset (for kjøpere), noe som er verdifullt ved store prissvingninger.'
          },
          tags: ['convexity', 'payoffs']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why did the 1998 collapse of Long-Term Capital Management (LTCM) alarm regulators?',
            no: 'Hvorfor skremte kollapsen av Long-Term Capital Management (LTCM) i 1998 reguleringsmyndighetene?'
          },
          answers: [
            { en: 'It was fully owned by the government', no: 'Det var fullt eid av staten' },
            { en: 'Its highly leveraged derivative positions threatened systemic contagion', no: 'Dets sterkt girede derivatposisjoner truet med systemisk smitte' },
            { en: 'It had no positions at all', no: 'Det hadde ingen posisjoner i det hele tatt' },
            { en: 'It only traded government bonds safely', no: 'Det handlet bare statsobligasjoner trygt' }
          ],
          correct: 1,
          explanation: {
            en: 'LTCM used enormous leverage through derivatives; its near-failure risked dragging down major banks, prompting a coordinated rescue.',
            no: 'LTCM brukte enorm giring gjennom derivater; at det nesten gikk over ende risikerte å trekke med seg store banker, og utløste en koordinert redning.'
          },
          tags: ['ltcm', 'systemic risk']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is "basis risk" in hedging with derivatives?',
            no: 'Hva er «basisrisiko» ved sikring med derivater?'
          },
          answers: [
            { en: 'The risk of paying the premium', no: 'Risikoen for å betale premien' },
            { en: 'The risk the contract never expires', no: 'Risikoen for at kontrakten aldri utløper' },
            { en: 'The risk of earning too much', no: 'Risikoen for å tjene for mye' },
            { en: 'The risk the hedge and the exposure do not move perfectly together', no: 'Risikoen for at sikringen og eksponeringen ikke beveger seg helt likt' }
          ],
          correct: 3,
          explanation: {
            en: 'Basis risk arises when the hedging instrument price and the hedged item price diverge, leaving residual, imperfectly offset risk.',
            no: 'Basisrisiko oppstår når prisen på sikringsinstrumentet og prisen på det sikrede objektet divergerer, slik at det gjenstår en ufullstendig utlignet risiko.'
          },
          tags: ['basis risk', 'hedging']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why are some derivatives criticized as potential "weapons of mass destruction" (Buffett)?',
            no: 'Hvorfor kritiseres enkelte derivater som potensielle «masseødeleggelsesvåpen» (Buffett)?'
          },
          answers: [
            { en: 'They always guarantee profits', no: 'De garanterer alltid gevinst' },
            { en: 'They have no economic use', no: 'De har ingen økonomisk nytte' },
            { en: 'Complexity, leverage and interconnection can transmit shocks across the system', no: 'Kompleksitet, giring og sammenkobling kan overføre sjokk gjennom hele systemet' },
            { en: 'They are physically dangerous objects', no: 'De er fysisk farlige gjenstander' }
          ],
          correct: 2,
          explanation: {
            en: 'Buffett warned that opaque, leveraged and interlinked derivatives can magnify and spread losses rapidly, posing systemic dangers.',
            no: 'Buffett advarte om at ugjennomsiktige, girede og sammenkoblede derivater kan forstørre og spre tap raskt, og utgjøre systemiske farer.'
          },
          tags: ['systemic risk', 'debate']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does theta affect the value of a long option position over time?',
            no: 'Hvordan påvirker theta verdien av en lang opsjonsposisjon over tid?'
          },
          answers: [
            { en: 'It only affects the underlying stock', no: 'Den påvirker bare den underliggende aksjen' },
            { en: 'Time decay erodes the option value as expiry approaches, all else equal', no: 'Tidsforfall spiser opp opsjonsverdien etter hvert som forfall nærmer seg, alt annet likt' },
            { en: 'It increases the option value each day', no: 'Den øker opsjonsverdien for hver dag' },
            { en: 'It has no effect on value', no: 'Den har ingen effekt på verdien' }
          ],
          correct: 1,
          explanation: {
            en: 'Theta captures time decay: holding other factors constant, an option loses time value as it nears expiration, hurting long holders.',
            no: 'Theta fanger tidsforfall: med andre faktorer konstante mister en opsjon tidsverdi når den nærmer seg forfall, noe som rammer langsiktige innehavere.'
          },
          tags: ['theta', 'greeks']
        }
      ]
    },
    {
      slug: 'portfolio-theory',
      name: { en: 'Portfolio Theory', no: 'Porteføljeteori' },
      questions: [
        // ---------- EASY ----------
        {
          difficulty: 'easy',
          question: {
            en: 'What is diversification in investing?',
            no: 'Hva er diversifisering i investering?'
          },
          answers: [
            { en: 'Putting all money into one stock', no: 'Å legge alle penger i én aksje' },
            { en: 'Borrowing to invest more', no: 'Å låne for å investere mer' },
            { en: 'Selling all assets at once', no: 'Å selge alle eiendeler samtidig' },
            { en: 'Spreading investments across different assets to reduce risk', no: 'Å spre investeringer på ulike eiendeler for å redusere risiko' }
          ],
          correct: 3,
          explanation: {
            en: 'Diversification spreads money across many assets so that poor performance in one is offset by others, lowering overall risk.',
            no: 'Diversifisering sprer penger på mange eiendeler slik at svak utvikling i én oppveies av andre, og reduserer samlet risiko.'
          },
          tags: ['diversification', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a portfolio in finance?',
            no: 'Hva er en portefølje i finans?'
          },
          answers: [
            { en: 'A stock exchange', no: 'En børs' },
            { en: 'A tax document', no: 'Et skattedokument' },
            { en: 'A collection of investments held by an investor', no: 'En samling investeringer som en investor eier' },
            { en: 'A single bond', no: 'En enkelt obligasjon' }
          ],
          correct: 2,
          explanation: {
            en: 'A portfolio is the combined set of assets, such as stocks, bonds and cash, that an investor owns.',
            no: 'En portefølje er den samlede mengden eiendeler, som aksjer, obligasjoner og kontanter, som en investor eier.'
          },
          tags: ['portfolio', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'The phrase "don\'t put all your eggs in one basket" best illustrates which idea?',
            no: 'Uttrykket «ikke legg alle eggene i én kurv» illustrerer best hvilken idé?'
          },
          answers: [
            { en: 'Arbitrage', no: 'Arbitrasje' },
            { en: 'Diversification', no: 'Diversifisering' },
            { en: 'Leverage', no: 'Giring' },
            { en: 'Inflation', no: 'Inflasjon' }
          ],
          correct: 1,
          explanation: {
            en: 'The saying captures diversification: spreading risk so a single failure does not ruin the whole portfolio.',
            no: 'Uttrykket fanger diversifisering: å spre risiko slik at en enkelt feil ikke ødelegger hele porteføljen.'
          },
          tags: ['diversification', 'concept']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'In general, higher expected returns tend to come with what?',
            no: 'Generelt sett pleier høyere forventet avkastning å følge med hva?'
          },
          answers: [
            { en: 'Lower risk', no: 'Lavere risiko' },
            { en: 'No risk', no: 'Ingen risiko' },
            { en: 'Guaranteed profit', no: 'Garantert gevinst' },
            { en: 'Higher risk', no: 'Høyere risiko' }
          ],
          correct: 3,
          explanation: {
            en: 'The risk-return trade-off means investors generally must accept more risk to pursue higher expected returns.',
            no: 'Avveiningen mellom risiko og avkastning betyr at investorer generelt må akseptere mer risiko for å søke høyere forventet avkastning.'
          },
          tags: ['risk-return', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does "asset allocation" mean?',
            no: 'Hva betyr «aktivaallokering» (asset allocation)?'
          },
          answers: [
            { en: 'Borrowing money to invest', no: 'Å låne penger for å investere' },
            { en: 'Choosing a single stock', no: 'Å velge én enkelt aksje' },
            { en: 'Deciding how to divide a portfolio among asset classes', no: 'Å bestemme hvordan en portefølje fordeles mellom aktivaklasser' },
            { en: 'Selling all stocks immediately', no: 'Å selge alle aksjer umiddelbart' }
          ],
          correct: 2,
          explanation: {
            en: 'Asset allocation is how an investor splits money among asset classes like stocks, bonds and cash.',
            no: 'Aktivaallokering er hvordan en investor fordeler penger mellom aktivaklasser som aksjer, obligasjoner og kontanter.'
          },
          tags: ['asset allocation', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Who is credited with founding Modern Portfolio Theory?',
            no: 'Hvem regnes som grunnleggeren av moderne porteføljeteori?'
          },
          answers: [
            { en: 'Karl Marx', no: 'Karl Marx' },
            { en: 'Harry Markowitz', no: 'Harry Markowitz' },
            { en: 'Adam Smith', no: 'Adam Smith' },
            { en: 'John Maynard Keynes', no: 'John Maynard Keynes' }
          ],
          correct: 1,
          explanation: {
            en: 'Harry Markowitz introduced Modern Portfolio Theory in his 1952 work on portfolio selection.',
            no: 'Harry Markowitz introduserte moderne porteføljeteori i sitt arbeid om porteføljevalg fra 1952.'
          },
          tags: ['markowitz', 'history']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a "risk-free asset" often considered to be?',
            no: 'Hva regnes en «risikofri eiendel» ofte for å være?'
          },
          answers: [
            { en: 'A small-company stock', no: 'En aksje i et lite selskap' },
            { en: 'A commodity future', no: 'En råvarefuture' },
            { en: 'A junk bond', no: 'En søppelobligasjon' },
            { en: 'A short-term government bond', no: 'En kortsiktig statsobligasjon' }
          ],
          correct: 3,
          explanation: {
            en: 'Short-term government securities are often treated as the risk-free asset because of their very low default risk.',
            no: 'Kortsiktige statspapirer behandles ofte som den risikofrie eiendelen på grunn av sin svært lave misligholdsrisiko.'
          },
          tags: ['risk-free', 'basics']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does "return" on an investment mean?',
            no: 'Hva betyr «avkastning» på en investering?'
          },
          answers: [
            { en: 'The number of shares owned', no: 'Antall aksjer man eier' },
            { en: 'The broker name', no: 'Navnet på megleren' },
            { en: 'The gain or loss generated over a period', no: 'Gevinsten eller tapet som oppstår over en periode' },
            { en: 'The amount of tax owed', no: 'Beløpet man skylder i skatt' }
          ],
          correct: 2,
          explanation: {
            en: 'Return measures the profit or loss on an investment over time, usually expressed as a percentage.',
            no: 'Avkastning måler gevinsten eller tapet på en investering over tid, vanligvis uttrykt som en prosent.'
          },
          tags: ['return', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What does "rebalancing" a portfolio mean?',
            no: 'Hva betyr det å «rebalansere» en portefølje?'
          },
          answers: [
            { en: 'Never changing the portfolio', no: 'Å aldri endre porteføljen' },
            { en: 'Adjusting holdings back to target weights', no: 'Å justere beholdninger tilbake til målvekter' },
            { en: 'Selling everything for cash', no: 'Å selge alt for kontanter' },
            { en: 'Borrowing to buy more stocks', no: 'Å låne for å kjøpe flere aksjer' }
          ],
          correct: 1,
          explanation: {
            en: 'Rebalancing means buying and selling to restore the portfolio to its intended asset allocation.',
            no: 'Rebalansering betyr å kjøpe og selge for å gjenopprette porteføljens tiltenkte aktivaallokering.'
          },
          tags: ['rebalancing', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Why might an investor hold both stocks and bonds?',
            no: 'Hvorfor kan en investor eie både aksjer og obligasjoner?'
          },
          answers: [
            { en: 'Because it is required by law', no: 'Fordi det er påkrevd ved lov' },
            { en: 'To avoid paying any taxes', no: 'Å unngå å betale skatt' },
            { en: 'Because bonds always outperform', no: 'Fordi obligasjoner alltid gir best avkastning' },
            { en: 'To balance growth potential with greater stability', no: 'Å balansere vekstpotensial med større stabilitet' }
          ],
          correct: 3,
          explanation: {
            en: 'Combining stocks (growth) and bonds (stability) helps balance risk and return within a portfolio.',
            no: 'Å kombinere aksjer (vekst) og obligasjoner (stabilitet) bidrar til å balansere risiko og avkastning i en portefølje.'
          },
          tags: ['asset allocation', 'balance']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a benchmark in portfolio management?',
            no: 'Hva er en referanseindeks (benchmark) i porteføljeforvaltning?'
          },
          answers: [
            { en: 'A guaranteed return', no: 'En garantert avkastning' },
            { en: 'A trading fee', no: 'Et handelsgebyr' },
            { en: 'A standard, like an index, used to compare performance', no: 'En standard, som en indeks, brukt til å sammenligne avkastning' },
            { en: 'A type of tax', no: 'En type skatt' }
          ],
          correct: 2,
          explanation: {
            en: 'A benchmark, such as the S&P 500, is a reference used to judge how well a portfolio has performed.',
            no: 'En referanseindeks, som S&P 500, er en referanse som brukes til å vurdere hvor godt en portefølje har gjort det.'
          },
          tags: ['benchmark', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is an investor "risk tolerance"?',
            no: 'Hva er en investors «risikotoleranse»?'
          },
          answers: [
            { en: 'The number of stocks they own', no: 'Antall aksjer de eier' },
            { en: 'How much risk they are willing and able to take', no: 'Hvor mye risiko de er villige og i stand til å ta' },
            { en: 'The total value of their portfolio', no: 'Den totale verdien av porteføljen deres' },
            { en: 'The tax rate they pay', no: 'Skattesatsen de betaler' }
          ],
          correct: 1,
          explanation: {
            en: 'Risk tolerance reflects an investor willingness and capacity to endure fluctuations in portfolio value.',
            no: 'Risikotoleranse gjenspeiler en investors vilje og evne til å tåle svingninger i porteføljeverdien.'
          },
          tags: ['risk tolerance', 'definition']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'Over a long horizon, what has historically tended to offer higher returns than cash?',
            no: 'Over en lang horisont, hva har historisk pleid å gi høyere avkastning enn kontanter?'
          },
          answers: [
            { en: 'Bank deposits', no: 'Bankinnskudd' },
            { en: 'Holding currency under a mattress', no: 'Å oppbevare kontanter under madrassen' },
            { en: 'Short-term Treasury bills', no: 'Kortsiktige statskasseveksler' },
            { en: 'Stocks', no: 'Aksjer' }
          ],
          correct: 3,
          explanation: {
            en: 'Historically, equities have delivered higher long-run returns than cash, compensating investors for greater risk.',
            no: 'Historisk har aksjer gitt høyere langsiktig avkastning enn kontanter, og kompensert investorer for større risiko.'
          },
          tags: ['returns', 'long-term']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is "volatility" used to describe in a portfolio?',
            no: 'Hva brukes «volatilitet» til å beskrive i en portefølje?'
          },
          answers: [
            { en: 'The number of assets held', no: 'Antall eiendeler man eier' },
            { en: 'The broker commission', no: 'Meglerprovisjonen' },
            { en: 'How much its value fluctuates', no: 'Hvor mye verdien svinger' },
            { en: 'The total tax paid', no: 'Den totale skatten betalt' }
          ],
          correct: 2,
          explanation: {
            en: 'Volatility measures how much a portfolio value swings up and down, a common proxy for risk.',
            no: 'Volatilitet måler hvor mye en porteføljes verdi svinger opp og ned, en vanlig indikator på risiko.'
          },
          tags: ['volatility', 'risk']
        },
        {
          difficulty: 'easy',
          question: {
            en: 'What is a passive investment strategy?',
            no: 'Hva er en passiv investeringsstrategi?'
          },
          answers: [
            { en: 'Borrowing heavily to invest', no: 'Å låne tungt for å investere' },
            { en: 'Tracking a market index rather than picking individual winners', no: 'Å følge en markedsindeks i stedet for å plukke enkeltvinnere' },
            { en: 'Trading rapidly every day', no: 'Å handle raskt hver dag' },
            { en: 'Investing only in one company', no: 'Å investere kun i ett selskap' }
          ],
          correct: 1,
          explanation: {
            en: 'Passive investing aims to match a market index, typically through low-cost index funds, rather than actively selecting securities.',
            no: 'Passiv investering søker å matche en markedsindeks, vanligvis gjennom rimelige indeksfond, i stedet for aktivt å velge verdipapirer.'
          },
          tags: ['passive', 'strategy']
        },
        // ---------- MEDIUM ----------
        {
          difficulty: 'medium',
          question: {
            en: 'What is the difference between systematic and unsystematic risk?',
            no: 'Hva er forskjellen mellom systematisk og usystematisk risiko?'
          },
          answers: [
            { en: 'Systematic risk can be fully diversified away', no: 'Systematisk risiko kan diversifiseres helt bort' },
            { en: 'Unsystematic risk affects all assets equally', no: 'Usystematisk risiko påvirker alle eiendeler likt' },
            { en: 'They are identical concepts', no: 'De er identiske begreper' },
            { en: 'Systematic risk affects the whole market; unsystematic is specific to one asset', no: 'Systematisk risiko påvirker hele markedet; usystematisk er spesifikk for én eiendel' }
          ],
          correct: 3,
          explanation: {
            en: 'Systematic (market) risk hits all assets and cannot be diversified away, while unsystematic (specific) risk can be reduced through diversification.',
            no: 'Systematisk (markeds)risiko rammer alle eiendeler og kan ikke diversifiseres bort, mens usystematisk (spesifikk) risiko kan reduseres gjennom diversifisering.'
          },
          tags: ['systematic risk', 'diversification']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why does combining assets with low correlation reduce portfolio risk?',
            no: 'Hvorfor reduserer det å kombinere eiendeler med lav korrelasjon porteføljerisikoen?'
          },
          answers: [
            { en: 'They guarantee higher returns', no: 'De garanterer høyere avkastning' },
            { en: 'They remove all taxes', no: 'De fjerner all skatt' },
            { en: 'Their price movements partly offset each other', no: 'Prisbevegelsene deres oppveier delvis hverandre' },
            { en: 'They always rise together', no: 'De stiger alltid sammen' }
          ],
          correct: 2,
          explanation: {
            en: 'When assets are not perfectly correlated, their swings partly cancel out, so the combined portfolio is less volatile than its parts.',
            no: 'Når eiendeler ikke er fullkomment korrelerte, opphever svingningene deres delvis hverandre, slik at den samlede porteføljen er mindre volatil enn delene.'
          },
          tags: ['correlation', 'risk']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the "efficient frontier" in portfolio theory?',
            no: 'Hva er «den effisiente fronten» i porteføljeteori?'
          },
          answers: [
            { en: 'The portfolio with the most assets', no: 'Porteføljen med flest eiendeler' },
            { en: 'The set of portfolios with the highest return for each level of risk', no: 'Settet av porteføljer med høyest avkastning for hvert risikonivå' },
            { en: 'The riskiest possible portfolio', no: 'Den mest risikable mulige porteføljen' },
            { en: 'A single guaranteed-return asset', no: 'En enkelt eiendel med garantert avkastning' }
          ],
          correct: 1,
          explanation: {
            en: 'The efficient frontier represents portfolios that offer the maximum expected return for a given level of risk.',
            no: 'Den effisiente fronten representerer porteføljer som gir maksimal forventet avkastning for et gitt risikonivå.'
          },
          tags: ['efficient frontier', 'markowitz']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does the Sharpe ratio measure?',
            no: 'Hva måler Sharpe-raten?'
          },
          answers: [
            { en: 'The total value of a portfolio', no: 'Den totale verdien av en portefølje' },
            { en: 'The number of trades made', no: 'Antall handler som er gjort' },
            { en: 'The tax owed on gains', no: 'Skatten man skylder på gevinster' },
            { en: 'Excess return per unit of risk', no: 'Meravkastning per enhet risiko' }
          ],
          correct: 3,
          explanation: {
            en: 'The Sharpe ratio divides return above the risk-free rate by volatility, gauging risk-adjusted performance.',
            no: 'Sharpe-raten deler avkastning utover den risikofrie renten på volatilitet, og måler risikojustert avkastning.'
          },
          tags: ['sharpe ratio', 'performance']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'In the Capital Asset Pricing Model (CAPM), what does beta measure?',
            no: 'I kapitalverdimodellen (CAPM), hva måler beta?'
          },
          answers: [
            { en: 'Its total revenue', no: 'Dens samlede omsetning' },
            { en: 'Its trading volume', no: 'Dens handelsvolum' },
            { en: 'An asset sensitivity to overall market movements', no: 'En eiendels følsomhet for de samlede markedsbevegelsene' },
            { en: 'The dividend it pays', no: 'Utbyttet den betaler' }
          ],
          correct: 2,
          explanation: {
            en: 'In CAPM, beta measures systematic risk, the asset sensitivity to market returns, and drives its expected return.',
            no: 'I CAPM måler beta systematisk risiko, eiendelens følsomhet for markedsavkastning, og bestemmer dens forventede avkastning.'
          },
          tags: ['capm', 'beta']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why can diversification not eliminate all risk?',
            no: 'Hvorfor kan ikke diversifisering fjerne all risiko?'
          },
          answers: [
            { en: 'Because taxes are too high', no: 'Fordi skattene er for høye' },
            { en: 'Systematic market risk affects all assets and remains', no: 'Systematisk markedsrisiko påvirker alle eiendeler og gjenstår' },
            { en: 'Because investors hold too few assets', no: 'Fordi investorer eier for få eiendeler' },
            { en: 'Because returns are guaranteed', no: 'Fordi avkastning er garantert' }
          ],
          correct: 1,
          explanation: {
            en: 'Diversification removes asset-specific risk, but market-wide (systematic) risk cannot be diversified away.',
            no: 'Diversifisering fjerner eiendelsspesifikk risiko, men markedsomfattende (systematisk) risiko kan ikke diversifiseres bort.'
          },
          tags: ['diversification', 'systematic risk']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does correlation of +1 between two assets imply?',
            no: 'Hva innebærer en korrelasjon på +1 mellom to eiendeler?'
          },
          answers: [
            { en: 'They move in exactly opposite directions', no: 'De beveger seg i nøyaktig motsatte retninger' },
            { en: 'They are unrelated', no: 'De er uten sammenheng' },
            { en: 'One always has zero return', no: 'Den ene har alltid null avkastning' },
            { en: 'They move perfectly together', no: 'De beveger seg fullkomment sammen' }
          ],
          correct: 3,
          explanation: {
            en: 'A correlation of +1 means the assets move in lockstep, so combining them gives no diversification benefit.',
            no: 'En korrelasjon på +1 betyr at eiendelene beveger seg i takt, så å kombinere dem gir ingen diversifiseringsgevinst.'
          },
          tags: ['correlation', 'diversification']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the main idea of dollar-cost averaging?',
            no: 'Hva er hovedideen bak gjennomsnittlig kostnadsmetode (dollar-cost averaging)?'
          },
          answers: [
            { en: 'Selling everything at year-end', no: 'Å selge alt ved årsslutt' },
            { en: 'Borrowing to invest a lump sum', no: 'Å låne for å investere et engangsbeløp' },
            { en: 'Investing a fixed amount regularly regardless of price', no: 'Å investere et fast beløp regelmessig uavhengig av pris' },
            { en: 'Investing only when prices peak', no: 'Å investere bare når prisene topper' }
          ],
          correct: 2,
          explanation: {
            en: 'Dollar-cost averaging invests a set amount at regular intervals, buying more units when prices are low and fewer when high.',
            no: 'Gjennomsnittlig kostnadsmetode investerer et fast beløp med jevne mellomrom, og kjøper flere andeler når prisene er lave og færre når de er høye.'
          },
          tags: ['dollar-cost averaging', 'strategy']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How does an investor time horizon usually affect asset allocation?',
            no: 'Hvordan påvirker en investors tidshorisont vanligvis aktivaallokeringen?'
          },
          answers: [
            { en: 'Shorter horizons favor more stocks', no: 'Kortere horisonter favoriserer flere aksjer' },
            { en: 'Longer horizons typically allow a higher allocation to stocks', no: 'Lengre horisonter tillater vanligvis en høyere andel aksjer' },
            { en: 'Longer horizons require all cash', no: 'Lengre horisonter krever bare kontanter' },
            { en: 'Horizon has no effect on allocation', no: 'Horisonten har ingen effekt på allokeringen' }
          ],
          correct: 1,
          explanation: {
            en: 'With more time to recover from downturns, long-horizon investors can usually hold more equities and accept more short-term volatility.',
            no: 'Med mer tid til å hente seg inn etter nedturer kan investorer med lang horisont vanligvis eie flere aksjer og akseptere mer kortsiktig volatilitet.'
          },
          tags: ['time horizon', 'allocation']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What does the security market line (SML) depict?',
            no: 'Hva fremstiller verdipapirmarkedslinjen (SML)?'
          },
          answers: [
            { en: 'A portfolio total taxes', no: 'En porteføljes totale skatt' },
            { en: 'The number of assets held', no: 'Antall eiendeler man eier' },
            { en: 'Trading volume over time', no: 'Handelsvolum over tid' },
            { en: 'Expected return as a function of beta', no: 'Forventet avkastning som en funksjon av beta' }
          ],
          correct: 3,
          explanation: {
            en: 'The SML plots the CAPM relationship between an asset systematic risk (beta) and its expected return.',
            no: 'SML viser CAPM-sammenhengen mellom en eiendels systematiske risiko (beta) og dens forventede avkastning.'
          },
          tags: ['sml', 'capm']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is "alpha" in portfolio management?',
            no: 'Hva er «alfa» i porteføljeforvaltning?'
          },
          answers: [
            { en: 'The number of holdings', no: 'Antall beholdninger' },
            { en: 'The risk-free rate', no: 'Den risikofrie renten' },
            { en: 'Return above what is expected given the risk taken', no: 'Avkastning utover det som forventes gitt risikoen som er tatt' },
            { en: 'The total fees paid', no: 'De totale gebyrene som betales' }
          ],
          correct: 2,
          explanation: {
            en: 'Alpha is the excess return a portfolio earns beyond its benchmark or risk-adjusted expectation, often attributed to skill.',
            no: 'Alfa er meravkastningen en portefølje oppnår utover sin referanseindeks eller risikojusterte forventning, ofte tilskrevet dyktighet.'
          },
          tags: ['alpha', 'performance']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'Why might adding a small allocation to a volatile but uncorrelated asset lower total portfolio risk?',
            no: 'Hvorfor kan det å legge til en liten andel av en volatil, men ukorrelert eiendel senke total porteføljerisiko?'
          },
          answers: [
            { en: 'Because it removes market risk entirely', no: 'Fordi den fjerner markedsrisiko helt' },
            { en: 'Its independent movements offset swings in other holdings', no: 'Dens uavhengige bevegelser oppveier svingninger i andre beholdninger' },
            { en: 'Because volatile assets are risk-free', no: 'Fordi volatile eiendeler er risikofrie' },
            { en: 'Because it guarantees returns', no: 'Fordi den garanterer avkastning' }
          ],
          correct: 1,
          explanation: {
            en: 'Even a risky asset can reduce overall volatility if its returns are uncorrelated, because it does not move with the rest of the portfolio.',
            no: 'Selv en risikabel eiendel kan redusere samlet volatilitet hvis avkastningen er ukorrelert, fordi den ikke beveger seg med resten av porteføljen.'
          },
          tags: ['correlation', 'diversification']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the difference between active and passive portfolio management?',
            no: 'Hva er forskjellen mellom aktiv og passiv porteføljeforvaltning?'
          },
          answers: [
            { en: 'Active always uses bonds; passive uses stocks', no: 'Aktiv bruker alltid obligasjoner; passiv bruker aksjer' },
            { en: 'Passive trades far more frequently', no: 'Passiv handler langt hyppigere' },
            { en: 'There is no difference in cost', no: 'Det er ingen forskjell i kostnad' },
            { en: 'Active tries to beat the market; passive tries to match an index', no: 'Aktiv forsøker å slå markedet; passiv forsøker å matche en indeks' }
          ],
          correct: 3,
          explanation: {
            en: 'Active managers pick securities aiming to outperform, usually at higher cost, while passive strategies aim to replicate an index cheaply.',
            no: 'Aktive forvaltere velger verdipapirer for å gjøre det bedre enn markedet, vanligvis til høyere kostnad, mens passive strategier søker å kopiere en indeks billig.'
          },
          tags: ['active vs passive', 'management']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'What is the role of the risk-free asset in constructing optimal portfolios?',
            no: 'Hva er rollen til den risikofrie eiendelen i å konstruere optimale porteføljer?'
          },
          answers: [
            { en: 'It removes the need for diversification', no: 'Den fjerner behovet for diversifisering' },
            { en: 'It only applies to bonds', no: 'Den gjelder bare obligasjoner' },
            { en: 'Combining it with a risky portfolio lets investors choose any risk level along a line', no: 'Å kombinere den med en risikabel portefølje lar investorer velge et hvilket som helst risikonivå langs en linje' },
            { en: 'It guarantees the highest return', no: 'Den garanterer den høyeste avkastningen' }
          ],
          correct: 2,
          explanation: {
            en: 'Mixing the risk-free asset with the optimal risky portfolio traces the capital market line, letting investors set their preferred risk-return point.',
            no: 'Å blande den risikofrie eiendelen med den optimale risikable porteføljen tegner kapitalmarkedslinjen, slik at investorer kan velge sitt foretrukne risiko-avkastningspunkt.'
          },
          tags: ['capital market line', 'risk-free']
        },
        {
          difficulty: 'medium',
          question: {
            en: 'How is a portfolio expected return calculated from its holdings?',
            no: 'Hvordan beregnes en porteføljes forventede avkastning ut fra beholdningene?'
          },
          answers: [
            { en: 'As the return of the riskiest asset only', no: 'Som avkastningen til kun den mest risikable eiendelen' },
            { en: 'As the weighted average of the expected returns of its assets', no: 'Som det vektede gjennomsnittet av de forventede avkastningene til eiendelene' },
            { en: 'As the highest expected return among its assets', no: 'Som den høyeste forventede avkastningen blant eiendelene' },
            { en: 'As the sum of all asset returns', no: 'Som summen av alle eiendelenes avkastning' }
          ],
          correct: 1,
          explanation: {
            en: 'A portfolio expected return is the weighted average of its assets expected returns, using each asset portfolio weight; risk, however, is not a simple weighted average.',
            no: 'En porteføljes forventede avkastning er det vektede gjennomsnittet av eiendelenes forventede avkastning, basert på hver eiendels porteføljevekt; risiko er derimot ikke et enkelt vektet gjennomsnitt.'
          },
          tags: ['expected return', 'portfolio']
        },
        // ---------- HARD ----------
        {
          difficulty: 'hard',
          question: {
            en: 'A key assumption of mean-variance optimization is that investors care about which two things?',
            no: 'En sentral forutsetning i gjennomsnitt-varians-optimering er at investorer bryr seg om hvilke to ting?'
          },
          answers: [
            { en: 'Only past prices and dividends', no: 'Bare historiske priser og utbytte' },
            { en: 'Only the number of assets held', no: 'Bare antall eiendeler man eier' },
            { en: 'Taxes and broker fees alone', no: 'Bare skatt og meglergebyrer' },
            { en: 'Expected return and variance of returns', no: 'Forventet avkastning og variansen i avkastningen' }
          ],
          correct: 3,
          explanation: {
            en: 'Markowitz mean-variance framework assumes investors optimize based on expected return and the variance (risk) of returns.',
            no: 'Markowitz sitt gjennomsnitt-varians-rammeverk forutsetter at investorer optimerer basert på forventet avkastning og variansen (risikoen) i avkastningen.'
          },
          tags: ['mean-variance', 'markowitz']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a common criticism of using variance/standard deviation as the sole measure of risk?',
            no: 'Hva er en vanlig kritikk av å bruke varians/standardavvik som det eneste risikomålet?'
          },
          answers: [
            { en: 'It can only be applied to bonds', no: 'Det kan bare brukes på obligasjoner' },
            { en: 'It always overstates returns', no: 'Det overdriver alltid avkastningen' },
            { en: 'It treats upside and downside swings as equally undesirable', no: 'Det behandler oppside- og nedsidesvingninger som like uønskede' },
            { en: 'It ignores all price movements', no: 'Det ignorerer alle prisbevegelser' }
          ],
          correct: 2,
          explanation: {
            en: 'Variance penalizes upside volatility the same as downside, which many argue misrepresents how investors actually perceive risk; measures like downside deviation address this.',
            no: 'Varians straffer oppsidevolatilitet på samme måte som nedside, noe mange mener feilfremstiller hvordan investorer faktisk oppfatter risiko; mål som nedsideavvik adresserer dette.'
          },
          tags: ['risk measures', 'critique']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What does the Capital Market Line (CML) represent?',
            no: 'Hva representerer kapitalmarkedslinjen (CML)?'
          },
          answers: [
            { en: 'A bond yield curve', no: 'En obligasjonsrentekurve' },
            { en: 'Risk-return combinations of the risk-free asset and the market portfolio', no: 'Risiko-avkastningskombinasjoner av den risikofrie eiendelen og markedsporteføljen' },
            { en: 'The returns of a single stock', no: 'Avkastningen til en enkelt aksje' },
            { en: 'The inflation rate over time', no: 'Inflasjonsraten over tid' }
          ],
          correct: 1,
          explanation: {
            en: 'The CML shows the efficient risk-return trade-offs available by combining the risk-free asset with the market portfolio.',
            no: 'CML viser de effisiente risiko-avkastningsavveiingene som er tilgjengelige ved å kombinere den risikofrie eiendelen med markedsporteføljen.'
          },
          tags: ['capital market line', 'theory']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does the Arbitrage Pricing Theory (APT) differ from CAPM?',
            no: 'Hvordan skiller arbitrasjeprisingsteorien (APT) seg fra CAPM?'
          },
          answers: [
            { en: 'APT ignores risk entirely', no: 'APT ignorerer risiko helt' },
            { en: 'APT applies only to government bonds', no: 'APT gjelder bare statsobligasjoner' },
            { en: 'They are mathematically identical', no: 'De er matematisk identiske' },
            { en: 'APT allows multiple risk factors, not just market beta', no: 'APT tillater flere risikofaktorer, ikke bare markedsbeta' }
          ],
          correct: 3,
          explanation: {
            en: 'APT models expected return as a function of several systematic risk factors, whereas CAPM relies on a single market factor.',
            no: 'APT modellerer forventet avkastning som en funksjon av flere systematiske risikofaktorer, mens CAPM hviler på én enkelt markedsfaktor.'
          },
          tags: ['apt', 'capm']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What do the Fama-French factors add beyond the single market factor?',
            no: 'Hva tilfører Fama-French-faktorene utover den ene markedsfaktoren?'
          },
          answers: [
            { en: 'A tax-rate factor', no: 'En skattesatsfaktor' },
            { en: 'Nothing new at all', no: 'Ingenting nytt i det hele tatt' },
            { en: 'Size and value (and later profitability/investment) factors', no: 'Størrelses- og verdifaktorer (og senere lønnsomhet/investering)' },
            { en: 'Only an inflation factor', no: 'Bare en inflasjonsfaktor' }
          ],
          correct: 2,
          explanation: {
            en: 'The Fama-French three-factor model adds size (small minus big) and value (high minus low book-to-market) factors to the market factor, improving explanatory power.',
            no: 'Fama-French sin trefaktormodell legger størrelsesfaktor (små minus store) og verdifaktor (høy minus lav bok/marked) til markedsfaktoren, og forbedrer forklaringskraften.'
          },
          tags: ['fama-french', 'factors']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the main practical problem with mean-variance optimization noted by practitioners?',
            no: 'Hva er det viktigste praktiske problemet med gjennomsnitt-varians-optimering som praktikere har påpekt?'
          },
          answers: [
            { en: 'It requires no data', no: 'Den krever ingen data' },
            { en: 'It is highly sensitive to estimation errors in inputs', no: 'Den er svært følsom for estimeringsfeil i inndataene' },
            { en: 'It can only handle two assets', no: 'Den kan bare håndtere to eiendeler' },
            { en: 'It ignores expected returns', no: 'Den ignorerer forventet avkastning' }
          ],
          correct: 1,
          explanation: {
            en: 'Small errors in estimated returns or covariances can produce extreme, unstable allocations, so optimized portfolios can be unreliable in practice.',
            no: 'Små feil i estimert avkastning eller kovarians kan gi ekstreme, ustabile allokeringer, så optimerte porteføljer kan være upålitelige i praksis.'
          },
          tags: ['estimation error', 'critique']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does the behavioral concept of mental accounting challenge classic portfolio theory?',
            no: 'Hvordan utfordrer det atferdsmessige begrepet mentale regnskap klassisk porteføljeteori?'
          },
          answers: [
            { en: 'Investors always optimize perfectly', no: 'Investorer optimerer alltid perfekt' },
            { en: 'It proves diversification is useless', no: 'Det beviser at diversifisering er nytteløst' },
            { en: 'It only applies to bonds', no: 'Det gjelder bare obligasjoner' },
            { en: 'Investors treat money in separate buckets rather than as one fungible portfolio', no: 'Investorer behandler penger i atskilte «bøtter» i stedet for som én ombyttelig portefølje' }
          ],
          correct: 3,
          explanation: {
            en: 'Mental accounting means people segregate funds by purpose and treat them differently, contradicting the assumption of holistic, rational portfolio optimization.',
            no: 'Mentale regnskap betyr at folk skiller midler etter formål og behandler dem ulikt, noe som motsier antakelsen om helhetlig, rasjonell porteføljeoptimering.'
          },
          tags: ['behavioral', 'mental accounting']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is the idea behind risk parity portfolio construction?',
            no: 'Hva er ideen bak risikoparitet (risk parity) i porteføljekonstruksjon?'
          },
          answers: [
            { en: 'Investing only in the riskiest asset', no: 'Å investere kun i den mest risikable eiendelen' },
            { en: 'Avoiding all bonds', no: 'Å unngå alle obligasjoner' },
            { en: 'Allocating so each asset contributes equally to total risk', no: 'Å allokere slik at hver eiendel bidrar likt til total risiko' },
            { en: 'Holding equal dollar amounts of each asset', no: 'Å eie like store kronebeløp av hver eiendel' }
          ],
          correct: 2,
          explanation: {
            en: 'Risk parity weights assets so each contributes the same amount of risk, rather than equal capital, often using leverage on low-risk assets.',
            no: 'Risikoparitet vekter eiendeler slik at hver bidrar med like mye risiko, snarere enn lik kapital, og bruker ofte giring på lavrisikoeiendeler.'
          },
          tags: ['risk parity', 'construction']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why can correlations between assets be especially problematic during market crises?',
            no: 'Hvorfor kan korrelasjoner mellom eiendeler være spesielt problematiske under markedskriser?'
          },
          answers: [
            { en: 'Assets stop trading entirely', no: 'Eiendeler slutter helt å handles' },
            { en: 'Correlations tend to rise toward 1, undermining diversification when it is needed most', no: 'Korrelasjoner pleier å stige mot 1, noe som undergraver diversifisering når den trengs mest' },
            { en: 'Correlations always fall to zero', no: 'Korrelasjoner faller alltid til null' },
            { en: 'Correlations have no effect in crises', no: 'Korrelasjoner har ingen effekt i kriser' }
          ],
          correct: 1,
          explanation: {
            en: 'In crises, assets often sell off together as correlations spike toward 1, so diversification benefits shrink exactly when investors rely on them.',
            no: 'I kriser selges eiendeler ofte ned samtidig fordi korrelasjonene skyter mot 1, så diversifiseringsgevinsten krymper akkurat når investorer er avhengige av den.'
          },
          tags: ['correlation', 'crises']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What does the home bias puzzle describe?',
            no: 'Hva beskriver «home bias»-gåten (hjemmemarkedsskjevhet)?'
          },
          answers: [
            { en: 'Investors only buy foreign assets', no: 'Investorer kjøper bare utenlandske eiendeler' },
            { en: 'Investors hold perfectly global portfolios', no: 'Investorer holder perfekt globale porteføljer' },
            { en: 'Investors avoid all equities', no: 'Investorer unngår alle aksjer' },
            { en: 'Investors over-concentrate in domestic assets, forgoing diversification gains', no: 'Investorer overvekter innenlandske eiendeler og gir avkall på diversifiseringsgevinster' }
          ],
          correct: 3,
          explanation: {
            en: 'The home bias puzzle is the tendency to hold disproportionately domestic securities, contrary to the diversification benefits of global investing.',
            no: 'Home bias-gåten er tendensen til å eie uforholdsmessig mye innenlandske verdipapirer, i strid med diversifiseringsgevinstene ved global investering.'
          },
          tags: ['home bias', 'behavioral']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a central critique behind the equity premium puzzle for portfolio theory?',
            no: 'Hva er en sentral kritikk bak aksjepremiegåten for porteføljeteori?'
          },
          answers: [
            { en: 'Investors are infinitely risk-seeking', no: 'Investorer er uendelig risikosøkende' },
            { en: 'Returns cannot be measured', no: 'Avkastning kan ikke måles' },
            { en: 'Standard models imply implausibly high risk aversion to explain observed returns', no: 'Standardmodeller innebærer urimelig høy risikoaversjon for å forklare observert avkastning' },
            { en: 'Stocks and bonds have identical returns', no: 'Aksjer og obligasjoner har identisk avkastning' }
          ],
          correct: 2,
          explanation: {
            en: 'To reconcile the large historical equity premium with standard utility models, investors would need extreme risk aversion, suggesting the models are incomplete.',
            no: 'For å forene den store historiske aksjepremien med standard nyttemodeller måtte investorer ha ekstrem risikoaversjon, noe som tyder på at modellene er ufullstendige.'
          },
          tags: ['equity premium', 'critique']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does the Black-Litterman model improve on naive mean-variance optimization?',
            no: 'Hvordan forbedrer Black-Litterman-modellen naiv gjennomsnitt-varians-optimering?'
          },
          answers: [
            { en: 'It guarantees the highest return', no: 'Den garanterer den høyeste avkastningen' },
            { en: 'It blends market-implied returns with investor views to give stabler allocations', no: 'Den blander markedsimpliserte avkastninger med investorsyn for å gi stabilere allokeringer' },
            { en: 'It ignores all market data', no: 'Den ignorerer alle markedsdata' },
            { en: 'It requires no return estimates', no: 'Den krever ingen avkastningsestimater' }
          ],
          correct: 1,
          explanation: {
            en: 'Black-Litterman starts from equilibrium market returns and tilts them with the investor views, producing more stable, intuitive portfolios than raw optimization.',
            no: 'Black-Litterman starter fra likevektsavkastning i markedet og justerer den med investorens syn, og gir mer stabile, intuitive porteføljer enn rå optimering.'
          },
          tags: ['black-litterman', 'optimization']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'Why is the "market portfolio" of CAPM hard to observe in practice (Roll critique)?',
            no: 'Hvorfor er CAPMs «markedsportefølje» vanskelig å observere i praksis (Roll-kritikken)?'
          },
          answers: [
            { en: 'It contains only one stock', no: 'Den inneholder bare én aksje' },
            { en: 'It is fixed by the central bank', no: 'Den fastsettes av sentralbanken' },
            { en: 'It excludes all equities', no: 'Den utelukker alle aksjer' },
            { en: 'The true market includes all assets, many of which are unmeasurable', no: 'Det sanne markedet inkluderer alle eiendeler, mange av dem umålbare' }
          ],
          correct: 3,
          explanation: {
            en: 'Roll argued the true market portfolio should include every asset (stocks, bonds, real estate, human capital), making CAPM untestable with any proxy index.',
            no: 'Roll hevdet at den sanne markedsporteføljen burde inkludere alle eiendeler (aksjer, obligasjoner, eiendom, humankapital), noe som gjør CAPM uprøvbar med en hvilken som helst indeks som tilnærming.'
          },
          tags: ['roll critique', 'capm']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'What is a key trade-off when rebalancing a portfolio frequently?',
            no: 'Hva er en sentral avveining ved å rebalansere en portefølje hyppig?'
          },
          answers: [
            { en: 'It removes all market risk', no: 'Den fjerner all markedsrisiko' },
            { en: 'It eliminates the need for diversification', no: 'Den fjerner behovet for diversifisering' },
            { en: 'Tighter risk control versus higher transaction costs and taxes', no: 'Strammere risikokontroll mot høyere transaksjonskostnader og skatt' },
            { en: 'It always raises returns with no cost', no: 'Den hever alltid avkastningen uten kostnad' }
          ],
          correct: 2,
          explanation: {
            en: 'Frequent rebalancing keeps allocations on target but incurs trading costs and taxable events, so investors weigh control against cost.',
            no: 'Hyppig rebalansering holder allokeringene på mål, men medfører handelskostnader og skattepliktige hendelser, så investorer veier kontroll mot kostnad.'
          },
          tags: ['rebalancing', 'trade-off']
        },
        {
          difficulty: 'hard',
          question: {
            en: 'How does prospect theory complicate the assumptions of classic portfolio optimization?',
            no: 'Hvordan kompliserer prospektteori forutsetningene i klassisk porteføljeoptimering?'
          },
          answers: [
            { en: 'Investors only care about average return', no: 'Investorer bryr seg bare om gjennomsnittlig avkastning' },
            { en: 'Investors weight losses more heavily than gains and judge outcomes relative to a reference point', no: 'Investorer vekter tap tyngre enn gevinster og bedømmer utfall i forhold til et referansepunkt' },
            { en: 'Investors are perfectly rational and risk-neutral', no: 'Investorer er fullkomment rasjonelle og risikonøytrale' },
            { en: 'Investors ignore all losses', no: 'Investorer ignorerer alle tap' }
          ],
          correct: 1,
          explanation: {
            en: 'Prospect theory shows people are loss-averse and evaluate gains/losses against a reference point, contradicting the smooth, rational utility assumed by mean-variance models.',
            no: 'Prospektteori viser at folk er tapsaverse og vurderer gevinster/tap mot et referansepunkt, i strid med den jevne, rasjonelle nytten som gjennomsnitt-varians-modeller forutsetter.'
          },
          tags: ['prospect theory', 'behavioral']
        }
      ]
    }
  ]
};
