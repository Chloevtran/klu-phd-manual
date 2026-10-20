/* ------------------------------------------------------------------
   KLU PhD Workshop 2026 · Field Manual — content & configuration
   Edit this file to update the manual. No build step required.
------------------------------------------------------------------- */

window.CONFIG = {
  // SOS button: lost or in trouble → copy location, then open the group chat.
  whatsappGroupUrl: "https://chat.whatsapp.com/EeG8CNcSBSO9e3Y4491HNF?mode=gi_t",

  // On-call contact shown under the SOS steps.
  coordinator: { name: "Ms. Pham Phuong Anh", role: "Program Coordinator", phone: "+84797967488" },

  // Places shown on the "Show to driver" card (Vietnamese for the driver).
  places: [
    {
      label: "Hotel",
      name: "Renaissance Riverside Hotel Saigon",
      address: "8-15 Tôn Đức Thắng, Phường Sài Gòn, TP. Hồ Chí Minh",
    },
    {
      label: "Deutsches Haus",
      name: "Deutsches Haus",
      address: "33 Lê Duẩn, Phường Sài Gòn, TP. Hồ Chí Minh",
    },
    {
      label: "KLU Asia Campus · HCMUT",
      name: "Trường Đại học Bách Khoa – ĐHQG TP.HCM (Tòa A4)",
      address: "268 Lý Thường Kiệt, Phường Diên Hồng, TP. Hồ Chí Minh",
    },
  ],
};

// Venues used in the daily program.
const CAMPUS = "Floor 3 – A4 Building, HCMUT, 268 Ly Thuong Kiet St., Dien Hong Ward";
const DEUTSCHES_HAUS = "Floor 2 – Deutsches Haus, 33 Le Duan St., Saigon Ward";
const ASSEMBLE = { time: "07:30–07:50", what: "Assemble in the hotel lobby. Bus departs at 07:50 sharp.", strong: true };
const TO_CAMPUS = { time: "07:50–08:45", what: "Bus transfers to KLU Asia Campus", where: CAMPUS };
const COFFEE = { time: "10:30–11:00", what: "Coffee break", minor: true };
const LUNCH = { time: "12:30–13:30", what: "Lunch break", minor: true };

window.MANUAL = {
  cover: {
    kicker: "PhD Field Manual",
    title: "Vietnam",
    year: "2026",
    subtitle: "A Study Trip Manual for participants of the KLU PhD Workshop.",
    tagline: "Economic Context · Research Immersion · Strategic Reflection",
    place: [],
    host: "KLU Saigon",
    partner: "in cooperation with Ho Chi Minh City University of Technology",
    dates: "25–30 October 2026",
  },

  sections: [
    /* ---------------------------------------------------------- I */
    {
      id: "welcome",
      num: "I",
      title: "Welcome",
      hint: "A note from KLU Saigon",
      intro: "An invitation to read Vietnam not as a destination, but as a working economy in motion.",
      blocks: [
        { t: "kicker", text: "A welcome note" },
        { t: "title", text: "Vietnam as a live management laboratory." },
        { t: "p", text: "Welcome to Ho Chi Minh City and the PhD Workshop! Over the next five days, you will engage with an international faculty team and a diverse cohort of doctoral researchers from 12 countries across Africa, Asia, Europe and the Americas, exploring logistics and supply chain management in one of Asia’s most dynamic economic environments." },
        { t: "p", text: "Vietnam offers a particularly valuable context for research. Its rapid economic growth and expanding role in global supply chains are accompanied by significant institutional and administrative changes. Understanding how businesses, supply chains and institutions adapt to these transformations raises important questions for both academic research and managerial practice." },
        { t: "p", text: "This workshop brings research closer to the real world. Through lectures, interactive discussions, industry visits, a practitioner panel and a PhD poster session, you will connect theoretical perspectives with practical challenges and receive feedback on your own research. We encourage you to look beyond your individual projects and consider how different national and institutional contexts can challenge assumptions and open new research directions." },
        { t: "p", text: "Make the most of this opportunity to exchange ideas with faculty, practitioners and fellow doctoral researchers. Approach each session with curiosity, engage critically with different perspectives, and reflect on how your research can contribute to both academic debates and real-world practice." },
        { t: "p", text: "Treat this manual as a guide rather than a fixed script. Schedules may change, and field visits may bring unexpected insights. Keep your research journal throughout the week, and use each experience to refine your questions, challenge your assumptions and strengthen your perspective as a researcher." },
        { t: "p", text: "We look forward to learning with you." },
        // TODO: add the Campus Director's welcome quote in `text`.
        { t: "quote", label: "From the Campus Director", text: "", by: "Dr. Viet Dung Trinh", role: "Campus Director (Asia), KLU Saigon" },
      ],
    },

    /* ---------------------------------------------------------- II */
    {
      id: "themes",
      num: "II",
      title: "Core Learning Themes",
      hint: "Five frames for the week",
      intro: "Five analytical frames that organize the week. Carry them through every visit, every conversation, every evening of reflection.",
      blocks: [
        { t: "kicker", text: "Themes" },
        { t: "title", text: "Five frames for the week." },
        { t: "lead", text: "These themes are not a checklist. They are the questions that will return, in different forms, across every site, every roundtable, every dinner. Memorize them." },
        {
          t: "rows",
          items: [
            { k: "01 · Creating Impact with Research", v: "Research creates impact when it informs decisions, shapes policy, and addresses real-world challenges. The question is how academic knowledge can translate into practical solutions and lasting value for society." },
            { k: "02 · Field Experiments", v: "Field experiments bring research into real-world settings, testing assumptions against practical constraints. Observe how hands-on approaches generate evidence and reveal insights beyond theory." },
            { k: "03 · Insights into Vietnamese Logistics", v: "Vietnam’s logistics sector is shaped by economic growth, evolving trade patterns, and infrastructure development. Understanding its dynamics requires looking beyond growth figures to the operational realities and opportunities on the ground." },
            { k: "04 · Challenges for Logistics Operations", v: "Logistics operations face competing demands for efficiency, reliability, and cost control. Infrastructure constraints, digital integration, and supply chain disruptions challenge businesses to remain competitive and resilient." },
            { k: "05 · Sustainability", v: "Sustainability in logistics goes beyond environmental targets to include resource efficiency and long-term resilience. The challenge is turning sustainability ambitions into measurable improvements while maintaining competitiveness." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- III */
    {
      id: "snapshot",
      num: "III",
      title: "Vietnam Snapshot",
      hint: "A briefing",
      intro: "A briefing for the time-constrained executive: why Vietnam matters now, what is moving, what is not, and what is binding.",
      blocks: [
        { t: "kicker", text: "Vietnam snapshot · Part I" },
        { t: "title", text: "Why Vietnam matters now." },
        { t: "lead", text: "Vietnam is no longer best understood as an emerging market. It is a mid-income manufacturing economy with one of the densest trade agreement networks in the world, an unusually open posture toward foreign capital, and a credible position in the global supply chain conversation." },
        {
          t: "stats",
          items: [
            { n: "100M+", l: "Population, median age in early 30s", d: "Demographic window narrowing toward 2035" },
            { n: "~6–7%", l: "Real GDP growth target band", d: "Among the highest sustained rates in Asia" },
            { n: "17", l: "Free trade agreements in force or signed", d: "CPTPP · EVFTA · RCEP · UKVFTA" },
          ],
        },
        {
          t: "cards",
          items: [
            { kicker: "Manufacturing & services rise together", body: "Vietnam is one of the few economies in the world where manufacturing share of GDP has held above 24% over the past decade while modern services — finance, logistics, ICT — have expanded simultaneously. This dual-track development is rare and is the basis for arguments that Vietnam may avoid the premature de-industrialization observed elsewhere." },
            { kicker: "The China plus one anchor", body: "Vietnam captured a disproportionate share of the manufacturing reallocation that began in 2018. Samsung now produces a substantial portion of its global smartphone output here. Foxconn, Pegatron, LG, Intel, Bosch, and a long list of European mid-caps have followed. The thesis is no longer hypothetical; it is balance sheet reality." },
            { kicker: "FDI momentum", body: "Annual FDI inflows have remained robust through global slowdowns. Korean, Singaporean, Japanese, and Chinese capital lead by stock; European and Taiwanese inflows have accelerated since EVFTA’s full ratification. Quality of investment, measured by R&D intensity, supplier development depth, and local content, is rising more slowly, and this is the open question." },
            { kicker: "Demographics & consumption", body: "The middle class is the binding consumption story. Urban household formation continues at pace; modern retail and digital commerce have grown faster than nominal GDP. Consumer brands underestimate how rapidly category sophistication has compressed." },
            { kicker: "Logistics & infrastructure", body: "Container throughput at Cai Mep–Thi Vai now competes with regional hubs on cost; the Lach Huyen deep-water complex serves the northern industrial corridor. The North–South Expressway is closing. Power transmission and rail remain weaker links; the gap between flagship projects and last-mile reliability is wide." },
            { kicker: "Constraints & risks", body: "Mid-management talent supply is structurally short. Power reliability, particularly in the industrial north, is a known operational risk. Banking sector opacity tied to real estate exposure is a periodic concern. Regulatory complexity, while often overstated, requires institutional patience that smaller foreign firms underestimate. The administrative reforms of 2025 — provincial consolidation, redrawing of municipal boundaries — add a transitional layer that will take time to settle." },
          ],
        },

        { t: "kicker", text: "Vietnam snapshot · Part II" },
        { t: "title", text: "What to keep in view." },
        { t: "lead", text: "A handful of structural facts shape almost every conversation a foreign manager will have in this country. Carry them." },
        { t: "callout", label: "Strategic position · An anchor in the regional supply network", text: "Vietnam sits at the operational seam of two distinct supply geographies. To the north, deep integration with southern Chinese supplier networks; to the south, growing connection to ASEAN and Indian Ocean lanes. Few economies allow a single country footprint to play both sides. That dual position is the strategic asset." },
        {
          t: "cards",
          items: [
            { kicker: "What is actually working", list: ["Industrial parks function. Established corridors in the south (Binh Duong, Dong Nai) and the north (Bac Ninh, Bac Giang, Hai Phong) deliver power, land, and labour at competitive cost.", "Trade agreement implementation is unusually effective by emerging-market standards. Tariff schedules and rules of origin are operational, not aspirational.", "FDI institutions, provincial promotion agencies, EuroCham, AHK Vietnam and AmCham provide working interfaces for foreign firms.", "Infrastructure investment is accelerating. The expressway network and southern port capacity will reset cost curves over the next five years."] },
            { kicker: "What is binding", list: ["Talent depth — especially in operations leadership, finance controllership, and digital product roles.", "Power reliability — northern industrial outages of 2023 are a reminder that grid expansion has lagged demand.", "Institutional patience — decisions that take three weeks in Hamburg can take three months here, sometimes longer. Firms that internalize this thrive; firms that do not, do not.", "Real estate & banking interconnection — a persistent risk corridor; investors should keep watching."] },
            { kicker: "What is moving slowly", list: ["Domestic capital markets remain shallow; corporate financing is bank-dominated and exposed to real estate cycles.", "Vocational and middle-management training has not kept pace with industrial complexity. Firms are training their own managers from a technical baseline.", "Energy transition is contested between speed of demand growth and decarbonization commitments."] },
            { kicker: "Recent context to read into", list: ["The 2025 administrative reform redrew the southern industrial map. Binh Duong, Ba Ria–Vung Tau, and the urban core of Saigon now sit inside a single municipality; the south’s logistics geography is no longer cross-border, it is intra-city.", "Capital is following the new geography. Four anchor infrastructure projects, treated together, describe a single integrated logistics region rather than three separate provinces."] },
          ],
        },

        { t: "kicker", text: "Vietnam snapshot · Part III" },
        { t: "title", text: "The southern logistics geography in 2026." },
        { t: "lead", text: "Four anchor projects describe how the south’s logistics system is being recomposed. Read them as one integrated region, not as separate provincial initiatives." },
        {
          t: "cards",
          items: [
            { kicker: "Project 01", title: "Cai Mep–Thi Vai expansion", sub: "Deep-water port complex · Phuong Phu My", facts: [["Lead", "Vietnamese state operators with international terminal partners."], ["Status", "Phase II under construction; throughput already competitive on cost with regional peers."], ["Strategic implication", "Closes the cost gap with Singapore on transshipment and gives the south a deep-water gateway capable of absorbing the next wave of manufacturing reallocation."]] },
            { kicker: "Project 02", title: "Binh Duong–Vung Tau rail link", sub: "Inland-to-port multimodal corridor", facts: [["Lead", "Becamex IDC and Thaco, with state coordination."], ["Status", "Approved 2024; target completion within the next four to five years."], ["Strategic implication", "First inland-to-deep-water rail in southern Vietnam. Triggers a modal shift from road to rail and rewires distribution economics for inland industrial parks."]] },
            { kicker: "Project 03", title: "Can Gio–Vung Tau coastal corridor", sub: "Coastal urban freight integration", facts: [["Lead", "VinGroup, with municipal coordination."], ["Status", "Master plan approved; phased rollout."], ["Strategic implication", "Integrates urban development, tourism, and freight movement along the southern coast. Tests whether VinGroup-style private-led infrastructure can deliver at regional scale."]] },
            { kicker: "Project 04", title: "North–South Expressway, final segments", sub: "National road network closure", facts: [["Lead", "Ministry of Transport."], ["Status", "Closing through 2024–2026."], ["Strategic implication", "Continuous high-speed road from Lang Son to Ca Mau. Domestic logistics economics shift; secondary cities become reachable for the first time at scale."]] },
          ],
        },
        { t: "callout", label: "Watch the regulatory perimeter", text: "European industrial groups are widening their Vietnam footprint beyond assembly toward regional supply chain HQs and engineering centres. EU CBAM and supply chain due diligence regulation are reshaping conversations with Vietnamese suppliers — expect this to come up at every site." },
      ],
    },

    /* ---------------------------------------------------------- IV */
    {
      id: "programme",
      num: "IV",
      title: "Daily Program",
      hint: "Five learning lenses",
      intro: "Six days, five learning lenses. Each day pairs the schedule with a learning objective and a closing reflection question.",
      blocks: [
        {
          t: "days",
          items: [
            {
              day: "Day One",
              date: "Sunday · 25 October",
              focus: "Arrival Ho Chi Minh City",
              dress: "Smart casual",
              slots: [
                { time: "Afternoon", what: "Hotel check-in at Renaissance Riverside Hotel Saigon. Personal time to acclimatize." },
                { time: "18:10", what: "Bus pickup at hotel for Welcome Dinner" },
                { time: "18:40–21:00", what: "Welcome Dinner. Program briefing and introductions.", where: "LOALOA Vietnam Culture & Dining Show, 108 Nguyen Du Street, Ben Thanh Ward, Ho Chi Minh City" },
              ],
              objective: {
                title: "Observe critically while questioning initial assumptions.",
                text: "Research begins with observation. From the airport approach to the streets of Ho Chi Minh City, pay attention to the visible features of Vietnam’s urban and economic landscape — infrastructure, urban density, and street-level commerce. Treat these first impressions as preliminary observations, not conclusions. Over the next five days, revisit, question, and refine your initial assumptions as you engage with local contexts, industry practices, and fellow researchers.",
              },
              observe: [
                "The efficiency and flow of immigration, transit, and ground transportation.",
                "The density, diversity, and pace of street-level commercial activity.",
                "The presence and visibility of European, Korean, Japanese, and Chinese brands across the urban landscape.",
                "The scale of construction activity and urban vertical density in relation to prior expectations.",
              ],
              lens: "Strategic decisions are only as sound as the assumptions behind them. As Vietnam’s economic and urban landscape continues to evolve, existing mental models may no longer reflect current realities. Use today’s first-hand observations as an opportunity to challenge prior assumptions, gather new evidence, and develop a more nuanced understanding of Vietnam’s changing business environment.",
              reflection: "Which of my pre-trip assumptions about Vietnam has already been challenged by what I have seen on the ground today?",
            },
            {
              day: "Day Two",
              date: "Monday · 26 October",
              focus: "Creating Impact with Research",
              dress: "Smart casual",
              slots: [
                ASSEMBLE,
                TO_CAMPUS,
                { time: "09:00–10:30", what: "Session 1: Welcome & Intro to Logistics and SCM Challenges in Vietnam", who: "Dr. Trinh Viet Dung" },
                COFFEE,
                { time: "11:00–12:30", what: "Session 2: Creating Impact with Research", who: "Prof. Kai Hoberg" },
                LUNCH,
                { time: "13:30–15:00", what: "Session 3: Creating Impact with Research", who: "Prof. Kai Hoberg & Prof. Joubert Van Eeden" },
                { time: "15:00–16:30", what: "Return to the hotel to freshen up and rest", note: "Changing to smart business outfit is recommended" },
                { time: "16:30–17:00", what: "Bus departs at 16:30 sharp and transfers to Deutsches Haus" },
                { time: "17:00–18:30", what: "Session 4: Use of GenAI for Research", who: "Prof. Kai Hoberg & Prof. Rafael Escamilla", where: DEUTSCHES_HAUS },
                { time: "18:30–20:30", what: "Poster session with flying dinner on-site & wrap-up.", note: "Bus back to the hotel at 21:00.", noteStrong: true },
              ],
              objective: {
                title: "Understand how research creates impact beyond academia.",
                text: "Explore how research in logistics and supply chain management addresses real-world challenges in Vietnam, how to formulate impactful and feasible research questions, and how to translate research ideas into practical outcomes. Reflect on the responsible use of GenAI in research and exchange insights and feedback with peers to strengthen research ideas.",
              },
              reflection: "Who could benefit from my research beyond academia, and what would it take to translate my findings into meaningful impact in practice?",
            },
            {
              day: "Day Three",
              date: "Tuesday · 27 October",
              focus: "Field Experiments",
              dress: "Smart business",
              slots: [
                ASSEMBLE,
                TO_CAMPUS,
                { time: "09:00–10:30", what: "Session 5: Field Experiments: Principles and Design", who: "Prof. Rafael Escamilla" },
                COFFEE,
                { time: "11:00–12:30", what: "Session 6: Field Experiments: Application and Implementation", who: "Prof. Rafael Escamilla" },
                LUNCH,
                { time: "13:30–15:00", what: "Session 7: Cold Chain Research linking to Field Experiments", who: "Prof. Leila Goedhals-Gerber" },
                { time: "15:15–15:45", what: "Bus transfers to Deutsches Haus" },
                { time: "16:00–18:00", what: "Session 8: Industry Panel – Current Challenges in Industry and Expectations from Research", who: "Prof. Gordon Wilmsmeier & Prof. Joubert Van Eeden", where: DEUTSCHES_HAUS },
                { time: "18:00–19:00", what: "Dinner and networking" },
              ],
              objective: {
                title: "Understand how field experiments can generate rigorous and practical research insights.",
                text: "Explore how to design feasible field experiments to establish causal relationships and address real-world challenges in logistics and supply chain management, including cold chain performance. Connect experimental research with industry needs by identifying opportunities for collaboration and translating practical challenges into impactful research questions.",
              },
              reflection: "How can field experiments help translate real-world logistics challenges into rigorous research that generates practical solutions and meaningful impact for industry?",
            },
            {
              day: "Day Four",
              date: "Wednesday · 28 October",
              focus: "Insights into Vietnamese Logistics",
              dress: "Smart business + closed shoes",
              dressNote: "Bringing changing clothes is recommended for your comfort.",
              slots: [
                { time: "07:30–09:45", what: "Bus departs from Renaissance Hotel for Phu My Ward (~2.5 hours, allowing for traffic)", strong: true },
                { time: "10:00–12:00", what: "Field Trip: Ba Son Corporation" },
                { time: "12:00–13:30", what: "Lunch break", note: "Bus departs from Ba Son Corporation at 12:00 sharp" },
                { time: "13:30–15:30", what: "Field Trip: Cai Mep International Terminal (CMIT)" },
                { time: "15:30–18:00", what: "Coach back to Renaissance Hotel", note: "Debrief Field Trip & Research ideation session · Online" },
                { time: "18:30–20:30", what: "Dinner Speech: Manufacturing in Vietnam", who: "Mr. Dang Viet Hai – Constantia", where: "Mam Mam Eatery and Lounge" },
              ],
              objective: {
                title: "Connect real-world industry observations with relevant research opportunities in logistics and supply chain management.",
                text: "Explore logistics practices and operational constraints through field visits, translate observations into focused research questions, and understand how manufacturing developments in Vietnam shape logistics requirements and supply chain decisions.",
              },
              reflection: "How can observations from manufacturing and port operations in Vietnam reveal logistics challenges and inspire research questions that address real-world supply chain needs?",
            },
            {
              day: "Day Five",
              date: "Thursday · 29 October",
              focus: "Challenges for Logistics Operations",
              dress: "Smart casual",
              slots: [
                ASSEMBLE,
                TO_CAMPUS,
                { time: "09:00–10:30", what: "Session 9: SC Design and Geopolitics", who: "Prof. Gordon Wilmsmeier" },
                COFFEE,
                { time: "11:00–12:30", what: "Session 10: Forecasting Freight Rates in Volatile Times", who: "Prof. Gordon Wilmsmeier" },
                LUNCH,
                { time: "13:30–15:00", what: "Session 11: Human-Factor Driver Fatigue", who: "Prof. Leila Goedhals-Gerber" },
                { time: "15:00–15:30", what: "Tea break", minor: true },
                { time: "15:30–17:00", what: "Session 12: Case Study: How to Efficiently Improve Welfare of Truck Drivers", who: "Prof. Leila Goedhals-Gerber & Prof. Kai Hoberg" },
                { time: "18:30–20:30", what: "Saigon Food Walk", optional: true },
              ],
              objective: {
                title: "Understand how research can address complex challenges in logistics and supply chain management.",
                text: "Explore how geopolitical uncertainty shapes supply chain design, assess the role of freight rate forecasting in volatile markets, and examine how working conditions and operational decisions affect truck driver fatigue and welfare. Identify research approaches that support informed decision-making and practical improvements in supply chain resilience and driver well-being.",
              },
              reflection: "How can research help logistics and supply chain professionals make better decisions under uncertainty while balancing operational efficiency, supply chain resilience, and truck driver well-being?",
            },
            {
              day: "Day Six",
              date: "Friday · 30 October",
              focus: "Sustainability",
              dress: "Smart casual",
              slots: [
                ASSEMBLE,
                TO_CAMPUS,
                { time: "09:00–10:30", what: "Session 13: Logistics of CO₂ Removal", who: "Prof. Alan McKinnon" },
                COFFEE,
                { time: "11:00–12:30", what: "Session 14: Research Opportunities around Adaptation to Climate Change", who: "Prof. Alan McKinnon" },
                LUNCH,
                { time: "13:30–15:00", what: "Session 15: Current Research Challenges in Logistics and SCM", who: "Prof. Alan McKinnon" },
                { time: "15:00–16:00", what: "Closing session with award hand-over" },
                { time: "16:00–17:00", what: "Real-world e-commerce delivery in Saigon", optional: true },
              ],
              objective: {
                title: "Understand how research can address emerging environmental and operational challenges in logistics and supply chain management.",
                text: "Explore the logistical requirements and trade-offs of CO₂ removal, develop research questions addressing climate change adaptation, and critically identify research gaps that offer opportunities to advance knowledge and deliver practical impact.",
              },
              reflection: "How can logistics and supply chain research address emerging environmental challenges, support climate change adaptation, and identify research gaps that lead to practical and sustainable solutions?",
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- V */
    {
      id: "sessions",
      num: "V",
      title: "Major Sessions",
      hint: "Creating Impact with Research · Field Experiments · Insights into Vietnamese Logistics · Challenges for Logistics Operations · Sustainability",
      intro: "Creating Impact with Research · Field Experiments · Insights into Vietnamese Logistics · Challenges for Logistics Operations · Sustainability",
      blocks: [
        {
          t: "accordion",
          items: [
            {
              kicker: "Session One",
              title: "Vietnam economic outlook",
              sub: "A working brief on Vietnam’s growth drivers, structural constraints, and strategic role in Asian supply chains. Anchored in the analytical frame of the AHK Vietnam annual report.",
              blocks: [
                { t: "h", text: "Session focus" },
                { t: "p", text: "This session establishes the economic baseline against which the rest of the week is read. Participants leave with a defensible mental model of how Vietnam fits into global production networks, and where the model is most likely to break." },
                { t: "h", text: "Learning outcomes" },
                { t: "p", text: "By the end of this session, participants will be able to:" },
                { t: "list", items: ["Identify and weigh the principal drivers of Vietnamese growth: FDI, manufacturing depth, demographic profile, trade agreement networks.", "Assess Vietnam’s competitiveness relative to regional peers (Indonesia, Thailand, the Philippines, India) on cost, capability, and connectivity.", "Identify the structural constraints — talent depth, power reliability, institutional capacity, capital market shallowness — that bound the country’s growth ceiling.", "Evaluate Vietnam’s strategic position in Asian supply chains, including the limits of the China plus one thesis."] },
                { t: "h", text: "Suggested reading" },
                {
                  t: "cards",
                  items: [
                    { kicker: "AHK Vietnam · 2025", title: "Vietnam’s Next Chapter: New Horizons for German Industry", body: "Required reading before Monday’s session. The AHK annual report sets the working frame for the Vietnam outlook session." },
                    { kicker: "World Bank", title: "Vietnam at a Glance · Country Update 2026", body: "The macro and fiscal numbers behind the qualitative picture: growth, FDI, trade balance, debt, and external accounts." },
                    { kicker: "Foreign Affairs · Ongoing coverage", title: "Vietnam in the Reorganization of Asian Manufacturing", body: "Recent essays on China plus one, US–Vietnam economic relations, and the geopolitical frame around supply chain restructuring." },
                  ],
                },
                { t: "h", text: "Reflection questions" },
                { t: "list", items: ["What would a credible bear case on Vietnam look like over a five-year horizon, and what indicators would tell you it is materializing?", "Which of Vietnam’s growth drivers are durable structural features, and which are functions of the current geopolitical configuration?", "If you were the country head of a European mid-cap entering Vietnam in 2026, what would your first ninety days look like?", "What single capability — at the level of the firm, the supplier base, or the institutional environment — would do the most to lift Vietnam’s value capture in global production networks?"] },
                { t: "h", text: "Numbers to know going in" },
                {
                  t: "stats",
                  items: [
                    { n: "~7%", l: "Real GDP growth, 2024–25 average" },
                    { n: "36bn", l: "FDI registered (USD), 2024" },
                    { n: "~24%", l: "Manufacturing share of GDP" },
                    { n: "17", l: "FTAs in force, including EVFTA" },
                  ],
                },
                { t: "note", text: "Sources: World Bank, GSO Vietnam, Ministry of Planning & Investment. Numbers are indicative; confirm against the AHK report and the latest country update before the session." },
                { t: "h", text: "Vietnam in regional context" },
                {
                  t: "table",
                  head: ["", "VN", "ID", "TH", "PH", "IN"],
                  rows: [
                    ["GDP growth 2024", "~7.0%", "~5.0%", "~2.5%", "~5.5%", "~7.0%"],
                    ["Manuf. % of GDP", "~24%", "~19%", "~25%", "~18%", "~17%"],
                    ["FDI 2024 (USD bn)", "~36", "~22", "~13", "~9", "~71"],
                    ["LPI rank 2023", "43", "61", "34", "43", "38"],
                    ["Working-age pop.", "peak ~2030", "rising", "declining", "rising", "rising"],
                  ],
                  note: "VN = Vietnam · ID = Indonesia · TH = Thailand · PH = Philippines · IN = India. Indicative; read alongside the full country tables in the AHK and World Bank reports — numbers shift quarterly.",
                },
              ],
            },
            {
              kicker: "Session Two",
              title: "Change management in transition economies",
              sub: "Transition economies do not move from low-cost production to managerial capability in a straight line. The interesting management questions live in the gap.",
              blocks: [
                { t: "h", text: "The seven propositions" },
                { t: "p", text: "This session is organized around seven working propositions about change management in countries like Vietnam. Each is open to challenge; each maps onto observations participants will make during the week." },
                {
                  t: "rows",
                  items: [
                    { k: "01 · Beyond low cost", v: "Transition economies move past low-cost assembly toward capability and value creation. The transition is uneven within countries, within firms, and within management teams. Where in Vietnam is it furthest along, and where stalled?" },
                    { k: "02 · Scale outpaces system", v: "Supply chains scale faster than the management systems that govern them. Quality, planning, and finance functions tend to lag operations. The result is high-throughput firms with thin governance." },
                    { k: "03 · Partners, not vendors", v: "European firms increasingly need strategic partners in transition markets, not arm’s-length suppliers. The economics of supplier development have shifted; ownership of the relationship is the new procurement question." },
                    { k: "04 · Talent is the bottleneck", v: "Across every industry observed, the binding constraint is the same: mid-management depth. The firm that builds it fastest wins; the firm that imports it forever does not." },
                    { k: "05 · Change without disruption", v: "Transformation in operating businesses is constrained by the requirement to keep production running. The luxury of stop-the-line redesign rarely exists. Change has to be designed for moving systems." },
                    { k: "06 · Markets ahead of institutions", v: "Markets in transition economies often modernize faster than the institutions that regulate them. Capital markets, labour law, and corporate governance routinely lag operational reality. This creates risk and opportunity in equal measure." },
                    { k: "07 · Geopolitics inside the operation", v: "Tariff regimes, export controls, and bilateral diplomacy now sit inside operational decision making. Sourcing, routing, and partnership choices are made under geopolitical assumptions that change quarterly." },
                  ],
                },
                { t: "h", text: "Learning outcomes" },
                { t: "list", items: ["Articulate a coherent model of competitiveness in transition economies that goes beyond cost arbitrage.", "Diagnose the internal transformation challenges of firms scaling faster than their managerial systems.", "Analyze geopolitics, institutional development, and supply chain reconfiguration as joint operating variables."] },
                { t: "h", text: "Suggested reading" },
                {
                  t: "cards",
                  items: [
                    { kicker: "McKinsey · Open insight", title: "The four building blocks of change", body: "The influence model: fostering understanding, reinforcing through formal mechanisms, developing skills, role modelling. Read with Vietnam in mind: each block stresses differently in transition economies." },
                    { kicker: "EuroCham · 2025", title: "Whitebook on Trade and Investment", body: "Annual industry survey covering policy environment, business sentiment, and operational reality for European firms in Vietnam." },
                  ],
                },
                { t: "h", text: "Reflection questions" },
                { t: "list", items: ["Of the seven propositions, which two will most strongly shape your firm’s behaviour in Vietnam over the next three years, and which two will matter least?", "What is the most concrete signal you would look for to know that managerial capability is in fact catching up with the productive economy?", "Describe a scenario in which the China plus one logic that has favoured Vietnam reverses. What would have to change?"] },
                { t: "h", text: "Numbers to know going in" },
                {
                  t: "stats",
                  items: [
                    { n: "~70%", l: "Of corporate change initiatives miss objectives (McKinsey)" },
                    { n: "~7%", l: "Annual labour productivity growth, Vietnam, 2018–2024" },
                    { n: "~30%", l: "SOE share of GDP, the institutional layer change has to navigate" },
                    { n: "#1", l: "Talent depth as most cited constraint in EuroCham / AmCham surveys" },
                  ],
                },
                { t: "h", text: "Common change management failure modes in Vietnam" },
                {
                  t: "rows",
                  items: [
                    { k: "Imported playbook, local context", v: "Applying a Hamburg or Singapore change template directly into a Vietnamese operating company. The frame works; the pacing, the stakeholder map, and the political layer rarely do." },
                    { k: "Founder gravity", v: "In family or founder-led firms, change announced at the top stalls below the layer where senior managers absorb risk. The visible programme moves; the operating system does not." },
                    { k: "Quality lag", v: "Quality, planning, and finance functions are built last, often years after operations is running at scale. Change initiatives that target operations without the supporting governance layer underdeliver." },
                    { k: "Tariff-driven panic", v: "Reactive change driven by a sudden tariff or export control move tends to over-rotate. The strongest firms hold position long enough to read the shock before redesigning the supply chain." },
                  ],
                },
              ],
            },
            {
              kicker: "Session Three",
              title: "Transportation & distribution",
              sub: "A working brief on the logistics geography of the enlarged Ho Chi Minh City: deep-water ports, the Binh Duong–Vung Tau rail corridor, the Can Gio–Vung Tau coastal axis, and whether southern Vietnam can move from manufacturing platform to integrated logistics hub.",
              blocks: [
                { t: "h", text: "Session focus" },
                { t: "p", text: "This session reads the south’s logistics system in place. The 2025 administrative reform put manufacturing inland, deep-water capacity, and the urban core inside one municipality. Participants leave with a working model of how transportation and distribution economics will evolve in southern Vietnam over the next decade." },
                { t: "h", text: "Learning outcomes" },
                { t: "p", text: "By the end of this session, participants will be able to:" },
                { t: "list", items: ["Map the southern logistics system as an integrated whole: inland industrial parks, multimodal corridors, deep-water capacity, and last-mile distribution.", "Quantify the cost curve impact of the Binh Duong–Vung Tau rail link (Becamex, Thaco) on intermodal economics, and identify the breakeven volume at which rail outperforms road.", "Assess the strategic logic of VinGroup’s Can Gio–Vung Tau coastal corridor: urban, tourism, and freight integration along the southern coast.", "Benchmark Vung Tau’s hub trajectory against Singapore, Tanjung Pelepas, and Laem Chabang on the four binding constraints: digital customs, multimodal integration, 3PL/4PL capacity, and logistics talent."] },
                { t: "h", text: "Suggested reading" },
                {
                  t: "cards",
                  items: [
                    { kicker: "MOIT · 2025", title: "Vietnam Logistics Report", body: "Ministry of Industry and Trade. The official baseline on freight volumes, modal mix, port throughput, and infrastructure pipeline." },
                    { kicker: "Notteboom & Rodrigue · Routledge", title: "Port Economics, Management and Policy", body: "Chapters on hinterland connectivity and the port–city relationship. The standard reference for thinking about ports as systems." },
                    { kicker: "World Bank · 2024", title: "Logistics Performance Index", body: "Vietnam’s position vs regional peers on customs, infrastructure, and tracking." },
                  ],
                },
                { t: "h", text: "Reflection questions" },
                { t: "list", items: ["If the Binh Duong–Vung Tau rail link comes online on schedule, what does it change about where your firm should locate inventory and distribution centres in southern Vietnam?", "Vung Tau, Tanjung Pelepas, and Laem Chabang each describe themselves as the next regional hub. What is the one capability investment that would meaningfully separate Vung Tau from the field?", "What is the right unit of analysis for a logistics strategy in southern Vietnam today: the port, the corridor, the city-region, or the cross-border flow?"] },
                { t: "h", text: "Numbers to know going in" },
                {
                  t: "stats",
                  items: [
                    { n: "~9m", l: "Cai Mep–Thi Vai TEU throughput, 2024" },
                    { n: "43", l: "Vietnam LPI rank, World Bank 2023" },
                    { n: "~75%", l: "Road share of inland freight" },
                    { n: "16–20%", l: "Logistics cost as share of GDP" },
                  ],
                },
                { t: "note", text: "Sources: Vietnam Maritime Administration, World Bank LPI, MOIT Logistics Report. Numbers are indicative; confirm against the latest issue before the session." },
                { t: "h", text: "Vung Tau in regional hub context" },
                {
                  t: "table",
                  head: ["", "Cai Mep", "SG", "TPP", "LCB"],
                  rows: [
                    ["TEU 2024 (m)", "~9", "~41", "~12", "~9"],
                    ["Transshipment", "low", "~85%", "~95%", "moderate"],
                    ["Hinterland", "maturing", "limited", "limited", "strong"],
                    ["Multimodal", "under build", "mature", "mature", "mature"],
                    ["Digital customs", "partial", "full", "full", "advanced"],
                  ],
                  note: "Cai Mep = Cai Mep / Vung Tau · SG = Singapore · TPP = Tanjung Pelepas · LCB = Laem Chabang. Indicative comparison: each port serves a different traffic mix; the table is a reading frame, not a like-for-like benchmark.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- VI */
    {
      id: "visits",
      num: "VI",
      title: "Company Visit Observation Framework",
      hint: "Operations · Change · Logistics · Innovation",
      intro: "Three lenses, applied consistently to every company visit. Using the same framework across different sites is what produces comparable observations.",
      blocks: [
        {
          t: "cards",
          items: [
            { kicker: "Lens 01", title: "Operations", body: "The view from the production floor. What is the system actually doing?", list: ["Process flow and layout discipline", "Visible bottlenecks & buffer logic", "Automation depth versus labour intensity", "Safety culture and signal quality", "Throughput and yield benchmarks", "Quality system rigour"] },
            { kicker: "Lens 02", title: "Management", body: "The view from the second tier. Who decides, and how fast?", list: ["Decision speed and escalation pattern", "KPI architecture: what is actually measured?", "Mid-management depth and competence", "Discipline of follow-through", "Information flow up and down the hierarchy", "Talent pipeline visibility"] },
            { kicker: "Lens 03", title: "Strategy", body: "The view from outside. Why does this firm exist, and what protects it?", list: ["Position in the value chain & pricing power", "Source of advantage, moat structure", "Growth logic: capacity, geography, segment", "Risk management: customer, currency, policy", "Capital allocation discipline", "Long-horizon plausibility"] },
          ],
        },
        { t: "callout", label: "Working method", text: "For each visit, allocate observation time across the three lenses deliberately. A common failure mode is to spend the first thirty minutes on operations and never get to strategy. Your journal entry that evening should record at least one specific observation under each lens — and one possible research question." },
      ],
    },

    /* ---------------------------------------------------------- VII */
    {
      id: "journal",
      num: "VII",
      title: "Reflection Journal",
      hint: "Daily template",
      intro: "Twenty minutes, every evening. The discipline matters more than the volume. Your notes are saved on this phone only.",
      blocks: [
        {
          t: "journal",
          days: ["Sun 25", "Mon 26", "Tue 27", "Wed 28", "Thu 29", "Fri 30"],
          prompts: [
            "What surprised me today?",
            "What logistics or management issue was visible, and to whom?",
            "Which assumption in my own research did today challenge?",
            "What research question or field-experiment idea did today suggest?",
            "My single biggest takeaway from today.",
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- VIII */
    {
      id: "posters",
      num: "VIII",
      title: "Research Poster Showcase",
      hint: "24 posters",
      intro: "24 posters from the doctoral researchers of the 2026 cohort.",
      blocks: [
        { t: "callout", label: "Poster session", text: "Monday, 26 October · 18:30–20:30 · Floor 2, Deutsches Haus, 33 Le Duan St. Poster session with flying dinner on-site & wrap-up." },
        // TODO: add the 24 posters, e.g. { k: "01 · Poster title", v: "Presenter · University" }
        { t: "notice", text: "The list of posters will be added here." },
      ],
    },

    /* ---------------------------------------------------------- IX */
    {
      id: "practical",
      num: "IX",
      title: "Practical Reference",
      hint: "Getting around and staying safe",
      intro: "None of this is critical to the intellectual programme; all of it is useful when something goes sideways.",
      blocks: [
        { t: "sosbanner" },
        {
          t: "cards",
          items: [
            { kicker: "Climate & what to wear", body: "Late October in southern Vietnam: warm and humid, around 25–33 °C, at the tail end of the rainy season — expect short, heavy afternoon showers. Bring a folding umbrella. Dress code: smart business for company visits and institutional sessions; closed-toe shoes are mandatory at industrial sites." },
            { kicker: "Transport", body: "Programme transfers are handled by KLU Saigon. For personal movement use Grab, Be or Xanh SM (all-electric). Install one before arrival and link a payment card. Metered taxis (Vinasun, Mai Linh) are reliable; avoid unmetered street taxis." },
            { kicker: "Currency & payment", body: "Vietnamese dong (VND) is the only legal tender — roughly 25,000–26,000 VND to 1 USD. Cards work in hotels and most retail; cash is needed for small restaurants and street commerce. Tipping is not expected but appreciated (5–10%)." },
            { kicker: "Health & safety", body: "Drink bottled water, use sun protection and mosquito repellent in the evening. Travel insurance with medical evacuation cover is each participant’s responsibility." },
            { kicker: "Connectivity", body: "A local eSIM (Viettel, Vinaphone or Mobifone) is the simplest option, available on arrival or via Airalo. WhatsApp and Google services work normally; Zalo is the most used local messenger." },
            { kicker: "Time & pace", body: "UTC+7 — six hours ahead of Hamburg after the European clock change on 25 October. Business hours are typically 08:00–17:30 with a long midday break at many institutions." },
          ],
        },
        { t: "kicker", text: "Key contacts & emergencies" },
        { t: "lead", text: "If something is wrong, contact the KLU Saigon programme team first. They will route from there. For genuine emergencies, the numbers below are the primary line." },
        { t: "h", text: "Program contacts · KLU Saigon" },
        {
          t: "contacts",
          items: [
            { label: "Campus Director", name: "Dr. Viet Dung Trinh", detail: "Campus Director (Asia), Saigon Campus · Available throughout the programme for any matter requiring senior intervention." },
            { label: "KLU Saigon Office", name: "19F Deutsches Haus", detail: "33 Le Duan St., Sai Gon Ward, Ho Chi Minh City · Reception during the programme, Monday–Friday, 08:30 to 17:30." },
            { label: "Program Manager", name: "Ms. Thuy Tran", detail: "Available throughout the program for any matter requiring intervention.", email: "thuy.tran@klu.org" },
            { label: "Program Coordinator", name: "Ms. Pham Phuong Anh", detail: "+84 797 967 488 · On call throughout the week for logistics, transfers, dietary needs, and on-site adjustments.", email: "phuonganh.pham@klu.org", tel: "+84797967488" },
          ],
        },
        { t: "h", text: "Programme accommodation" },
        {
          t: "contacts",
          items: [
            { label: "Hotel · 25–30 October", name: "Renaissance Riverside Hotel Saigon", detail: "8-15 Ton Duc Thang, Sai Gon Ward, Ho Chi Minh City · Tel. 028 3822 0033 · Room held continuously across the trip.", tel: "+842838220033" },
          ],
        },
        { t: "h", text: "Emergency numbers · Vietnam" },
        {
          t: "contacts",
          items: [
            { label: "115", name: "Ambulance", detail: "Public emergency medical service. For complex cases, the programme coordinator will redirect to international hospitals.", tel: "115" },
            { label: "113", name: "Police", detail: "For accidents, theft, or matters requiring an official report. English-speaking operators are not guaranteed; KLU staff can assist.", tel: "113" },
            { label: "114", name: "Fire", detail: "Fire and rescue services.", tel: "114" },
          ],
        },
        { t: "closing", text: "Education teaches you to think. Travel teaches you to understand.", sub: "Carry the operations mindset. Practice it everywhere." },
      ],
    },
  ],
};
