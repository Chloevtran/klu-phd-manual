/* ------------------------------------------------------------------
   KLU PhD Workshop 2026 · Field Manual — content & configuration
   Edit this file to update the manual. No build step required.
------------------------------------------------------------------- */

window.CONFIG = {
  // SOS button: lost or in trouble → copy location, then open the group chat.
  whatsappGroupUrl: "https://chat.whatsapp.com/EeG8CNcSBSO9e3Y4491HNF?mode=gi_t",

  // On-call contact shown under the SOS steps.
  coordinator: { name: "Ms. Pham Phuong Anh (Audrey)", role: "Project Coordinator", phone: "+84797967488" },

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
// Tuesday, Thursday and Friday: assemble at 07:45, bus at 08:00.
const ASSEMBLE_LATE = { time: "07:45–08:00", what: "Assemble in the hotel lobby. Bus departs at 08:00 sharp.", strong: true };
const TO_CAMPUS_LATE = { ...TO_CAMPUS, time: "08:00–08:45" };
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
    partner: ["in cooperation with", "Ho Chi Minh City University of Technology"],
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
        { t: "title", text: "Vietnam as a live management laboratory." },
        { t: "p", text: "Welcome to Ho Chi Minh City and the PhD Workshop! Over the next five days, you will engage with an international faculty team and a diverse cohort of doctoral researchers from 12 countries across Africa, Asia, Europe and the Americas, exploring logistics and supply chain management in one of Asia’s most dynamic economic environments." },
        { t: "p", text: "Vietnam offers a particularly valuable context for research. Its rapid economic growth and expanding role in global supply chains are accompanied by significant institutional and administrative changes. Understanding how businesses, supply chains and institutions adapt to these transformations raises important questions for both academic research and managerial practice." },
        { t: "p", text: "This workshop brings research closer to the real world. Through lectures, interactive discussions, industry visits, a practitioner panel and a PhD poster session, you will connect theoretical perspectives with practical challenges and receive feedback on your own research. We encourage you to look beyond your individual projects and consider how different national and institutional contexts can challenge assumptions and open new research directions." },
        { t: "p", text: "Make the most of this opportunity to exchange ideas with faculty, practitioners and fellow doctoral researchers. Approach each session with curiosity, engage critically with different perspectives, and reflect on how your research can contribute to both academic debates and real-world practice." },
        { t: "p", text: "Treat this manual as a guide rather than a fixed script. Schedules may change, and field visits may bring unexpected insights. Keep your research journal throughout the week, and use each experience to refine your questions, challenge your assumptions and strengthen your perspective as a researcher." },
        { t: "p", text: "We look forward to learning with you." },
        { t: "quote", label: "From the Campus Director", text: "You are not here to validate what you already know about Vietnam. You are here to revise it. The country will reward attentive observers, and confound the lazy ones. Read the country the way you would read a balance sheet, patiently, line by line, and with attention to what is missing.", by: "Dr. Viet Dung Trinh", role: "Campus Director (Asia), KLU Saigon" },
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
        { t: "lead", small: true, text: "These themes are not a checklist. They are the questions that will return, in different forms, across every site, every roundtable, every dinner. Memorize them." },
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
      introRule: false,
      blocks: [
        {
          t: "accordion",
          collapsed: true,
          items: [
            {
              kicker: "Vietnam snapshot · Part I",
              title: "Why Vietnam matters now.",
              blocks: [
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
              ],
            },
            {
              kicker: "Vietnam snapshot · Part II",
              title: "What to keep in view.",
              blocks: [
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
              ],
            },
            {
              kicker: "Vietnam snapshot · Part III",
              title: "The southern logistics geography in 2026.",
              blocks: [
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
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- IV */
    {
      id: "programme",
      num: "IV",
      title: "Daily Program",
      hint: "Five learning lenses",
      intro: "Six days, five learning lenses. Each day pairs the schedule with a learning objective and a closing reflection question.",
      introRule: false,
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
                { time: "18:10–18:20", what: "Assemble in the hotel lobby. Bus to the Welcome Dinner departs at 18:20 sharp", strong: true },
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
                { time: "15:00–16:30", what: "Return to the hotel to freshen up and rest" },
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
              dress: "Smart casual",
              slots: [
                ASSEMBLE_LATE,
                TO_CAMPUS_LATE,
                { time: "09:00–10:30", what: "Session 5: Field Experiments: Principles and Design", who: "Prof. Rafael Escamilla" },
                COFFEE,
                { time: "11:00–12:30", what: "Session 6: Field Experiments: Application and Implementation", who: "Prof. Rafael Escamilla" },
                LUNCH,
                { time: "13:30–15:00", what: "Session 7: Cold Chain Research linking to Field Experiments", who: "Prof. Leila Goedhals-Gerber" },
                { time: "15:15–15:45", what: "Bus transfers to Deutsches Haus" },
                { time: "16:00–18:00", what: "Session 8: Industry Panel – Current Challenges in Industry and Expectations from Research", who: "Prof. Tri Mikael Tran", where: DEUTSCHES_HAUS },
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
              dress: "Smart casual + closed shoes",
              dressNote: "Bringing changing clothes is recommended for your comfort.",
              slots: [
                { time: "07:50–08:00", what: "Assemble in the hotel lobby. Bus to Phu My Ward departs at 08:00 sharp", strong: true },
                { time: "08:00–10:00", what: "Bus transfers to Phu My Ward" },
                { time: "10:00–11:30", what: "Field Trip: Cai Mep International Terminal (CMIT)", where: "Cai Mep–Thi Vai port cluster, Tan Phuoc Ward" },
                { time: "11:30–13:20", what: "Lunch break", minor: true },
                { time: "13:20–13:45", what: "Bus transfers to Ba Son Corporation" },
                { time: "13:45–15:30", what: "Field Trip: Ba Son Corporation", where: "Phu My Industrial Park II, Phu My Ward" },
                { time: "15:30–18:00", what: "Coach back to Renaissance Hotel", note: "Debrief Field Trip & Research ideation session · Online" },
                { time: "18:15", what: "Bus pickup at hotel for Mam Mam Eatery and Lounge" },
                { time: "18:30–20:30", what: "Dinner Speech: Manufacturing in Vietnam", who: "Mr. Dang Viet Hai – Constantia", where: "Mam Mam Eatery and Lounge, The Nexus Building, 3A-3B Ton Duc Thang St., Saigon Ward" },
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
                ASSEMBLE_LATE,
                TO_CAMPUS_LATE,
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
                ASSEMBLE_LATE,
                TO_CAMPUS_LATE,
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
      intro: "Five themes, fifteen sessions, one arc: from why research matters, through how to test it in the field, to what Vietnam’s logistics system can teach it, what breaks it, and what it owes the planet. Each brief gives the frame to carry into the room, the reading to do beforehand, and the numbers to argue with.",
      blocks: [
        {
          t: "accordion",
          sessions: true,
          collapsed: true,
          items: [
            {
              kicker: "Major Session · One",
              title: "Creating impact with research.",
              sub: "Most logistics research is read by other logistics researchers. This session asks what it would take for a doctoral project to be read by a port operator, a ministry or a fleet owner, and to change what they do.",
              blocks: [
                { t: "h", text: "Session focus" },
                { t: "p", text: "The morning places Vietnam’s logistics and supply chain challenges in front of the cohort as a live research agenda. The afternoon turns to method: how to formulate questions that are both publishable and useful, how to tell a feasible project from an ambitious one, and how to work responsibly with generative AI. The evening poster session is the first test: 24 projects, each pitched to practitioners who will ask “so what” before “how”." },
                { t: "outcomes", items: ["Distinguish the three impact channels open to a doctoral project (publication, practice, policy) and state which one their own project is aimed at.", "Apply the RRBM criteria of credible and useful knowledge to their own research question.", "Reformulate a research question so that a named stakeholder in Vietnam would recognise the problem as theirs.", "Set boundaries for generative AI in the research process and state which steps must remain auditable."] },
                { t: "h", text: "Suggested reading" },
                {
                  t: "reading",
                  items: [
                    { kicker: "RRBM Community", title: "A Vision of Responsible Research in Business and Management", body: "Seven principles of credible and useful research. The scorecard for Monday’s discussion.", href: "https://www.rrbm.network/position-paper/" },
                    { kicker: "AHK Vietnam · 2026", title: "AHK Vietnam Brochure 2026: Business Hub Vietnam", body: "Economic indicators, investment by region and sector, workforce, trade connectivity. Required reading before Session 1.", href: "https://vietnam.ahk.de/en/info/ahk-vietnam-brochure-2026" },
                    { kicker: "EuroCham · October 2026", title: "Business Confidence Index Q3 2026", body: "What European firms in Vietnam say constrains them. A list of research problems in survey form.", href: "https://eurochamvn.org/eurocham-business-confidence-index-q3-2026-translating-economic-gains-into-business-opportunities/" },
                  ],
                },
                { t: "h", text: "Reflection questions" },
                { t: "list", items: ["Name one person outside academia who would change a decision if your main finding were true. If you cannot, what would you have to change about the question?", "Which RRBM principle does your current design satisfy least well, and is that a cost you are choosing or one you have not noticed?", "Vietnam grew 9 percent in the first nine months of 2026 while European firms reported eight operational hurdles each. Which of those hurdles is a logistics research question, and which is simply a complaint?"] },
                { t: "h", text: "Numbers to know going in" },
                {
                  t: "numbers",
                  items: [
                    { n: "9.0%", l: "Vietnam GDP growth, first nine months of 2026 (Q3: 9.95% year on year)" },
                    { n: "78.3", l: "EuroCham Business Confidence Index, Q3 2026; nine in ten respondents would recommend Vietnam" },
                    { n: "88%", l: "German companies in Vietnam rating their business situation good or satisfactory; more than half plan to expand in 2026" },
                    { n: "USD 50 bn", l: "Registered FDI, first nine months of 2026; USD 21 bn realised, a five-year high" },
                  ],
                },
                { t: "note", text: "Sources: EuroCham BCI Q3 2026; AHK World Business Outlook Fall 2025; Ministry of Finance." },
                { t: "h", text: "Three impact channels" },
                { t: "p", text: "Doctoral projects rarely travel down more than one of these. Choose deliberately." },
                {
                  t: "matrix",
                  cols: ["Channel", "Who reads it", "What the design needs", "What it rarely delivers"],
                  rows: [
                    ["Publication", "Reviewers, future researchers", "Identification strategy, theoretical contribution, generalisable setting", "A change in practice within five years"],
                    ["Practice", "A firm or a sector association", "A partner with data, a decision about to be made, a result usable in their planning cycle", "A general theory; the setting is usually one firm"],
                    ["Policy", "A ministry, a provincial authority, an industry body", "Scale, timing aligned to a strategy or decree, comparison with regional peers", "Causal identification"],
                  ],
                },
              ],
            },
            {
              kicker: "Major Session · Two",
              title: "Field experiments.",
              sub: "Operations management adopted the field experiment late and is still learning how to run one. Vietnam, with high-volume operations, thin management systems and partners willing to try things, is one of the better places in Asia to design one.",
              blocks: [
                { t: "h", text: "Session focus" },
                { t: "p", text: "Two morning sessions cover principles and design, then application and implementation: randomisation units, treatment definition, outcome measurement, power, partner management and what to do when the business interrupts the experiment. The afternoon applies the logic to cold chain performance, where temperature data, product loss and export rejection give unusually clean outcome variables. The industry panel closes the day with practitioners saying which problems they would let a researcher experiment on." },
                { t: "outcomes", items: ["Specify the five design decisions of a field experiment (unit, treatment, outcome, duration, partner) for one question from their own project.", "Distinguish a field experiment from a natural experiment, a pilot and an A/B test, and state which inference each supports.", "Identify the outcome variables available in a Vietnamese cold chain and the data owner for each.", "Translate a practitioner’s problem into a treatment that can be randomised without stopping the operation."] },
                { t: "h", text: "Suggested reading" },
                {
                  t: "reading",
                  items: [
                    { kicker: "Gao, Li & Sun · Journal of Operations Management, 2023", title: "Field experiments in operations management", body: "The review that organises the OM literature and gives a design-to-analysis roadmap. Read the roadmap before Session 5.", href: "https://ink.library.smu.edu.sg/sis_research/7488" },
                    { kicker: "Kenan Institute / JOM · 2023", title: "Registered Reports in Operations Management: Lessons from an Experimental Trial", body: "What pre-approved designs did and did not fix.", href: "https://kenaninstitute.unc.edu/publication/registered-reports-in-operations-management-lessons-from-an-experimental-trial/" },
                    { kicker: "ASEAN Briefing · 2025", title: "Vietnam Cold-Chain and Agritech Opportunities for Foreign Investors", body: "Capacity, coverage and post-harvest loss behind Tuesday afternoon.", href: "https://www.aseanbriefing.com/news/vietnam-cold-chain-and-agritech-opportunities-for-foreign-investors/" },
                  ],
                },
                { t: "h", text: "Reflection questions" },
                { t: "list", items: ["Take the central claim of your dissertation. What would the treatment be, who would be randomised, and what would the partner have to stop doing for you to run it?", "A cold chain operator offers you one warehouse and three months. What is the smallest experiment that would still be worth publishing?", "The panel will describe problems in their own words. Which contain a counterfactual, and which are requests for a description?"] },
                { t: "h", text: "Numbers to know going in" },
                {
                  t: "numbers",
                  items: [
                    { n: "~1.35 m", l: "Commercial cold-storage pallet positions in Vietnam, 2025, at about 80% utilisation" },
                    { n: "20–25%", l: "Share of Vietnam’s key perishable exports moving through a cold chain; Thailand 40–50%" },
                    { n: "USD 11.3 bn", l: "Vietnam seafood exports, 2025; 2026 target USD 11.5 bn" },
                    { n: "45%", l: "Southern Vietnam’s share of the national cold-chain logistics market, 2026" },
                  ],
                },
                { t: "note", text: "Sources: Ken Research; ASEAN Briefing; VASEP; Mordor Intelligence." },
                { t: "h", text: "Four ways to learn from the field" },
                { t: "p", text: "Use this on Tuesday morning and again when a panellist says “we tried that once”." },
                {
                  t: "matrix",
                  cols: ["Design", "Who assigns treatment", "Internal validity", "External validity", "Typical Vietnam setting"],
                  rows: [
                    ["Field experiment", "The researcher, randomly", "High", "High for that setting", "One 3PL, several depots, rotating a routing or scheduling rule"],
                    ["Natural experiment", "A policy or shock", "Medium to high if assignment is exogenous", "High", "The 10-hour driving cap in force since 1 January 2025; the 2025 provincial mergers"],
                    ["Firm pilot or A/B test", "The firm, usually not randomly", "Low to medium", "High", "A platform testing a delivery-window option in one district"],
                    ["Observational study", "Nobody; units self-select", "Low without an instrument", "High", "Panel data on dwell times across the Cai Mep cluster"],
                  ],
                },
                { t: "p", text: "Common failure modes: partner drift (the treatment changes mid-way), contamination (treated and control depots share drivers or managers), outcome capture (the metric exists in a system nobody reconciles), short horizons, and ethics by omission (a treatment that lowers driver pay is still a treatment)." },
              ],
            },
            {
              kicker: "Major Session · Three",
              title: "Insights into Vietnamese logistics.",
              sub: "The south’s logistics system is being recomposed in front of you. A shipyard that moved from the city centre to deep water and a terminal cluster among the seven most efficient in the world sit a few kilometres apart in Phu My. Read them as one system.",
              blocks: [
                { t: "h", text: "Session focus" },
                { t: "p", text: "Wednesday is the week’s only full field day and the anchor for Section VI. Ba Son shows manufacturing logistics at project scale: long cycle times, heavy and irregular inbound flows, a state-owned enterprise building commercial capability. CMIT shows flow logistics at container scale: vessel calls, barge feeds, yard dwell, and the discipline that keeps a terminal accident-free for more than five years. The evening speech turns to what a mid-sized European manufacturer in Ho Chi Minh City needs from Vietnamese logistics, and what it does not get." },
                { t: "outcomes", items: ["Describe the southern logistics geography after the 2025 administrative reform as one intra-city system rather than three provinces.", "Explain why the Cai Mep–Thi Vai cluster competes on efficiency rather than transshipment, and what the barge share at CMIT implies for hinterland research.", "Identify at least two researchable operational constraints at each site using the four lenses in Section VI.", "Position a European manufacturer’s logistics requirements against what the local 3PL market offers."] },
                { t: "h", text: "Suggested reading" },
                {
                  t: "reading",
                  items: [
                    { kicker: "Ministry of Industry and Trade · 2025", title: "Vietnam Logistics Report 2025", body: "The official baseline: logistics cost around 16 percent of GDP, road at 75 percent of freight volume, and the 2025 to 2035 strategy targets.", href: "https://logistics.gov.vn/lowering-logistics-costs-strengthening-vietnam-s-global-connectivity" },
                    { kicker: "Vietnam Port Association · 2025", title: "CMIT celebrates the 2,000,000 TEU milestone", body: "The terminal’s own account of 2025. Read before the visit so questions go beyond the briefing.", href: "https://www.vpa.org.vn/cmit-celebrates-the-2000000-teu-milestone-within-the-first-11-months-of-2025/" },
                    { kicker: "AHK Vietnam · 2025/26", title: "Current Status of German Investments in Vietnam", body: "576 German companies, 117 manufacturing sites, most within 40 km of the HCMC business district. Context for the dinner speech.", href: "https://vietnam.ahk.de/en/info/current-status-of-german-investments-in-vietnam-2025-26" },
                  ],
                },
                { t: "h", text: "Reflection questions" },
                { t: "list", items: ["Ba Son builds and repairs ships; CMIT moves boxes. Which has the harder logistics problem, and by which measure?", "Most of CMIT’s throughput arrives by barge, not by truck. Which textbook assumption about hinterland connectivity fails first?", "The Cai Mep cluster is in the global top seven for efficiency, yet Vietnam ranks 43rd on the LPI. Where, physically, is the gap between the two numbers?"] },
                { t: "h", text: "Numbers to know going in" },
                {
                  t: "numbers",
                  items: [
                    { n: "~7.3 m TEU", l: "Cai Mep–Thi Vai cluster throughput, 2025; first half of 2026 up 9% year on year" },
                    { n: "2.0 m TEU", l: "CMIT handling in the first 11 months of 2025, including 1.1 m TEU from mother vessels (up 28%); 1,900+ consecutive accident-free days" },
                    { n: "Top 7", l: "Cai Mep’s rank among 400+ container ports in the World Bank / S&P Global Container Port Performance Index 2024" },
                    { n: "75%", l: "Road share of Vietnam’s freight volume, 2025; inland waterway 20%, rail 0.2%" },
                  ],
                },
                { t: "note", text: "Sources: Vietnam Port Association; CMIT; Vietnam Logistics Report 2025." },
                { t: "h", text: "Two sites, two units of analysis" },
                { t: "p", text: "The same framework applied to two very different operations." },
                {
                  t: "matrix",
                  cols: ["Site", "What it is", "Scale", "Unit of analysis"],
                  rows: [
                    ["Ba Son Corporation, Phu My Industrial Park II", "State-owned shipbuilder under the Ministry of National Defence, lineage to 1863, relocated from the Saigon riverfront; builds, repairs and converts vessels, plus offshore and renewable-energy work", "95 ha; 1,385 m of berth; builds to 70,000 DWT, repairs to 150,000 DWT; thousands of staff", "The project: one hull, its bill of materials, its critical path"],
                    ["Cai Mep International Terminal (CMIT), Tan Phuoc Ward", "Deep-water container terminal in the Cai Mep–Thi Vai cluster, joint venture with APM Terminals, serving ultra-large vessels on Asia–US and Asia–Europe services", "About 2.2 m TEU a year including barges; cluster draft 14 to 15.5 m", "The vessel call: berth window, crane moves, yard dwell, barge connection"],
                  ],
                },
              ],
            },
            {
              kicker: "Major Session · Four",
              title: "Challenges for logistics operations.",
              sub: "Three pressures sit inside every logistics operation in Vietnam at once: a tariff regime that has changed five times in eighteen months, a freight market 150 percent above a year ago, and a trucking sector that cannot staff the trucks it owns. None can be optimised away. They have to be designed for.",
              blocks: [
                { t: "h", text: "Session focus" },
                { t: "p", text: "The morning is macro: how geopolitics has moved into supply chain design, and what forecasting freight rates can and cannot do when the Strait of Hormuz, Red Sea routing and US trade law all move within a quarter. The afternoon is human: driver fatigue as a measurable operational variable, and a case study on improving truck driver welfare without destroying unit economics. The through-line is decision making under uncertainty, whether the decision maker is a network planner or a dispatcher at 02:00." },
                { t: "outcomes", items: ["Model a tariff or routing shock as a design parameter rather than an event to be forecast.", "Evaluate a freight-rate forecast on its intended use and state when a volatility measure is more useful than a point estimate.", "Specify how driver fatigue can be measured in a Vietnamese fleet and which measures are already collected under the 2025 journey-monitoring rules.", "Build a welfare intervention a fleet owner would adopt, with the cost line and the retention or safety benefit on the same page."] },
                { t: "h", text: "Suggested reading" },
                {
                  t: "reading",
                  items: [
                    { kicker: "Drewry · weekly", title: "World Container Index", body: "The benchmark Session 10 will use. Check the latest reading on the morning of the session.", href: "https://www.drewry.co.uk/supply-chain-advisors/world-container-index-weekly-update/world-container-index-assessed-by-drewry" },
                    { kicker: "AHK · May 2026", title: "AHK World Business Outlook Spring 2026", body: "4,500 German firms abroad surveyed after the Hormuz blockade; in Vietnam 80 percent name supply chain disruption as a business risk.", href: "https://www.dihk.de/en/newsroom/ahk-world-business-outlook-spring-2026-global-economy-in-crisis-mode-177294" },
                    { kicker: "Nguyen et al. · IJRR, 2025", title: "Working conditions, health and job satisfaction of long-haul truck drivers in Vietnam", body: "Survey of 312 Vietnamese drivers. The closest local evidence base for Sessions 11 and 12.", href: "https://www.ijrrjournal.com/IJRR_Vol.12_Issue.12_December2025/IJRR95.pdf" },
                  ],
                },
                { t: "h", text: "Reflection questions" },
                { t: "list", items: ["The US tariff on Vietnamese goods has been 10, 46, 10, 20, 0, 10 and 12.5 percent at different points since April 2025. Which changes should have altered a well-designed supply chain, and which should it have absorbed?", "Vietnam capped commercial driving at 10 hours a day and 48 hours a week from 1 January 2025. As a natural experiment, what is the outcome variable, the comparison group, and the confound?", "If improving driver welfare costs a fleet 5 to 10 percent in wages, what has to be true about retention, accidents or utilisation for the owner to say yes?"] },
                { t: "h", text: "Numbers to know going in" },
                {
                  t: "numbers",
                  items: [
                    { n: "USD 4,485", l: "Drewry World Container Index per 40 ft container, 15 October 2026, roughly 150% above a year earlier" },
                    { n: "12.5%", l: "US Section 301 duty on most Vietnamese goods since 24 July 2026; the 20% tariff and 40% transshipment rate ended in February 2026" },
                    { n: "25–30%", l: "Share of Vietnam’s tractor-trailers idle because operators cannot recruit Category CE drivers" },
                    { n: "10 h / 48 h", l: "Daily and weekly driving caps for commercial drivers in Vietnam, in force since 1 January 2025" },
                  ],
                },
                { t: "note", text: "Sources: Drewry; USTR and CBP notices; Vietnam Automobile Transport Association; Road Traffic Order and Safety Law 2024." },
                { t: "h", text: "Eighteen months of US tariff change for Vietnamese goods" },
                { t: "p", text: "The worked example of geopolitics inside the operation. Each row was a planning assumption at the time." },
                {
                  t: "matrix",
                  cols: ["Date", "Measure", "Rate on Vietnamese-origin goods"],
                  rows: [
                    ["April 2025", "Reciprocal tariff baseline; 46% country rate announced and suspended within a day", "10%"],
                    ["August 2025", "Reciprocal rate set; transshipped goods face a separate rate", "20% (40% if transshipped)"],
                    ["October 2025", "US–Vietnam trade framework announced, not finalised", "20% maintained"],
                    ["February 2026", "Supreme Court rules the tariffs unauthorised; temporary surcharge replaces them", "10%"],
                    ["July 2026", "Surcharge expires; Section 301 duty begins", "12.5%"],
                    ["Open", "Section 301 investigations on excess capacity and intellectual property pending", "Unsettled"],
                  ],
                },
                { t: "p", text: "Six operating tensions for Thursday: speed versus origin traceability; contract versus spot; utilisation versus fatigue; two drivers versus one on north–south runs; enforcement versus retention; resilience versus cost." },
              ],
            },
            {
              kicker: "Major Session · Five",
              title: "Sustainability.",
              sub: "Logistics is usually discussed as a source of emissions to be cut. Prof. McKinnon’s recent work widens the frame: logistics is also a victim of climate change, the delivery system for adaptation and relief, and the industry that will have to move and store the carbon other sectors remove. Vietnam is where all of those roles are visible at once.",
              blocks: [
                { t: "h", text: "Session focus" },
                { t: "p", text: "Session 13 takes the least-researched role first: the freight and storage requirements of carbon dioxide removal and capture at scale. Session 14 turns to adaptation in a country that lost more than USD 3 billion to storms and floods in 2025 and whose main export delta is sinking. Session 15 closes the week with McKinnon’s reading of the open research agenda in logistics and SCM, and invites each participant to place their own project on it." },
                { t: "outcomes", items: ["Describe the roles logistics plays in the climate crisis and state which one their research touches.", "Estimate, in order of magnitude, the freight task created by carbon removal at the scale of national net-zero commitments.", "Frame a climate-adaptation research question for southern Vietnam with a measurable logistics outcome and a plausible data source.", "Position their dissertation against a research gap named in Session 15."] },
                { t: "h", text: "Suggested reading" },
                {
                  t: "reading",
                  items: [
                    { kicker: "McKinnon · IJLRA, 2024", title: "Logistics and climate: an assessment of logistics’ multiple roles in the climate crisis", body: "The paper behind all three Friday sessions. Required reading.", href: "https://www.tandfonline.com/doi/full/10.1080/13675567.2024.2367534" },
                    { kicker: "McKinnon · keynote, 2024", title: "Role of Logistics in a Resilient Net Zero Europe", body: "The slide version of Session 13, with the geography of carbon capture, transport and storage.", href: "https://www.ost-ausschuss.de/sites/default/files/pm_pdf/Role%20of%20Logistics%20in%20a%20Resilient%20Net%20Zero%20Europe%20%20(McKinnon%20%20keynote)%20%2028-11-2024%20with%20weblinks.pdf" },
                    { kicker: "Government of Viet Nam / UNDP · 2024", title: "Viet Nam National Adaptation Plan 2021 to 2030", body: "The policy frame for Session 14: priority sectors, phase 2 (2026 to 2030), the Mekong Delta.", href: "https://www.undp.org/sites/g/files/zskgke326/files/2024-11/2024_update_viet_nam_nap_2021-2030_with_vision_to_2050_final_small.pdf" },
                  ],
                },
                { t: "h", text: "Reflection questions" },
                { t: "list", items: ["If Vietnam’s net-zero 2050 commitment required moving and storing captured CO₂ at even a fraction of today’s container volumes, which of Wednesday’s sites would be involved, and in what role?", "Adaptation spending flows to dykes, pumps and early warning. Where in that spending is a logistics decision being made badly for lack of evidence?", "Which research gap named on Friday could you address with the data you already have, and which would require a new partnership?"] },
                { t: "h", text: "Numbers to know going in" },
                {
                  t: "numbers",
                  items: [
                    { n: "~12%", l: "Logistics’ share of energy-related CO₂ once storage and handling are added to freight transport" },
                    { n: "USD 3.2 bn", l: "Vietnam’s economic losses from storms and floods in 2025; USD 3.5 bn in 2024 after Typhoon Yagi" },
                    { n: "50% / 95%", l: "Mekong Delta share of Vietnam’s rice production and of rice exports" },
                    { n: "0.2%", l: "Rail share of Vietnam’s freight volume, 2025" },
                  ],
                },
                { t: "note", text: "Sources: McKinnon (2024); official damage estimates; World Bank; Vietnam Logistics Report 2025." },
                { t: "h", text: "Logistics’ roles in the climate crisis, read for Vietnam" },
                { t: "p", text: "Adapted from McKinnon (2024). The right-hand column is where the research is thin." },
                {
                  t: "matrix",
                  cols: ["Role", "Vietnamese instance", "Research gap"],
                  rows: [
                    ["Cause", "75% road share; 2.4 to 2.75 billion e-commerce parcels a year", "Mode shift economics for a road-dominated network"],
                    ["Victim", "USD 3.2 bn storm losses in 2025; Mekong Delta subsidence and salt intrusion", "Resilience investment appraisal at depot and corridor level"],
                    ["Decarboniser", "Electric last-mile fleets; port electrification at Cai Mep", "Firm-level adoption evidence; what moves a small carrier"],
                    ["Adapter", "Can Tho flood infrastructure; NAP phase 2 (2026 to 2030)", "Almost none; logistics is absent from most adaptation plans"],
                    ["Remover", "Not yet; net-zero 2050 implies a future demand", "Scale, routing and port requirements of CDR and CCS supply chains in Southeast Asia"],
                    ["Humanitarian responder", "Typhoon Yagi (2024); central Vietnam floods (2025)", "Pre-positioning, last-mile access, coordination with private 3PLs"],
                    ["Supplier of low-carbon technology", "Offshore wind supply chains through Phu My and Vung Tau", "Port and heavy-lift capacity planning for the energy transition"],
                  ],
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
      intro: "Four lenses, applied in the same order at every site. An executive leaves a visit with a judgement; a researcher leaves with a question. The lenses are built to produce the question.",
      blocks: [
        {
          t: "accordion",
          collapsed: true,
          items: [
            {
              kicker: "The four lenses",
              title: "Operations, change, logistics, innovation.",
              blocks: [
                {
                  t: "tiles",
                  items: [
                    { k: "01 · Operations", observe: "Process flow and layout. Bottlenecks and buffers. Automation versus labour. Safety signals. Throughput markers. What is inspected, by whom, how often.", ask: "What is measured on this floor every day, and who looks at the number?" },
                    { k: "02 · Change", observe: "What changed in the last three years and who decided. Pace of decisions. Where new practice stalls. Who trains whom. Where planning, quality and finance lag operations.", ask: "Which change did the operation resist, and what finally moved it?" },
                    { k: "03 · Logistics", observe: "Inbound and outbound modes. Where material, boxes or hulls wait. Handover points with 3PLs, customs, port or customer. Tracking and exceptions. Dependence on one corridor, port or customer.", ask: "Where does this site’s lead time actually go, and which part does the site control?" },
                    { k: "04 · Innovation", observe: "Technology in use versus on display. Data that exists but is not used. Pilots and what happens when they end. Sustainability measures that are operational versus declaratory.", ask: "What would this site try if a researcher ran the experiment and absorbed the risk?" },
                  ],
                },
                { t: "outcomes", label: "Working method", items: ["Allocate attention across the four lenses deliberately; the common failure is to spend thirty minutes on operations and never reach innovation.", "Write at least one specific, dated observation under each lens before leaving the site.", "In the Q&A, ask one question per lens. The logistics question is the one most hosts do not expect.", "That evening, name in the reflection journal the lens that produced the strongest research question."] },
              ],
            },
          ],
        },
        {
          t: "accordion",
          collapsed: true,
          items: [
            {
              kicker: "Method",
              title: "From observation to research question.",
              blocks: [
              { t: "lead", text: "A good site visit yields twenty observations and one question. Complete the five steps in the online debrief on Wednesday afternoon." },
              {
                t: "steps",
                items: [
                  { k: "Observation", v: "What you saw, in operational terms, with time and place." },
                  { k: "Anomaly", v: "Why it is surprising against theory, the textbook, or what the host said." },
                  { k: "Mechanism", v: "Why it happens, in terms a manager at the site would recognise." },
                  { k: "Question", v: "Written with a comparison in it: this site versus another, before versus after, treated versus untreated." },
                  { k: "Design", v: "The smallest study that would answer it, the data owner, and what the site would have to agree to. If this is impossible, go back to step 4." },
                ],
              },
              {
                t: "factbox",
                label: "Example",
                facts: [
                  ["Observation", "At CMIT, barges queue at the river berth while quay cranes stand idle between vessel calls."],
                  ["Anomaly", "The terminal ranks top seven globally for vessel-side efficiency, yet the barge side looks unmanaged."],
                  ["Mechanism", "Barge arrivals follow Cat Lai and Mekong schedules the terminal does not control."],
                  ["Question", "Does a shared barge-slot booking system across the cluster reduce barge dwell without reducing vessel productivity?"],
                  ["Design", "Staggered rollout across terminals; dwell and crane productivity as outcomes; the port association as data owner."],
                ],
              },
              ],
            },
          ],
        },

        {
          t: "accordion",
          collapsed: true,
          items: [
            {
              kicker: "Site guide · Wednesday 10:00",
              title: "Cai Mep International Terminal.",
              blocks: [
              { t: "p", text: "A deep-water container terminal in the Cai Mep–Thi Vai cluster and a joint venture with APM Terminals. In 2025 it handled more than two million TEU including barges, with mother-vessel volume up 28 percent and more than 1,900 consecutive accident-free days. The cluster ranks seventh in the world on the Container Port Performance Index. It is the week’s example of flow logistics, and the physical location of the gap between Vietnam’s port efficiency and its 43rd-place LPI ranking." },
              {
                t: "matrix",
                guide: true,
                cols: ["Lens", "What to look for", "Questions to ask the host"],
                rows: [
                  ["Operations", "Crane moves per hour and berth occupancy. Yard layout and equipment. Truck and barge gates. How 1,900 accident-free days are sustained.", "What is the berth productivity target for an ultra-large vessel call, and what was it last month? Which shift is hardest to staff?"],
                  ["Change", "Lean and Kaizen practice: boards, cycles, who leads them. Alliance changes and their effect on schedules. What the 2025 provincial merger changed in practice.", "What was the last operating practice you changed because a shipping line asked for it? Did the merger change any approval or planning process?"],
                  ["Logistics", "Barge versus truck share and where barges come from. Dwell by cargo type. Customs: digital versus paper, clearance times. Empty-container positioning.", "What share of boxes move by barge, and what is the barge dwell? Where is the next inland rail or ICD link that would change gate traffic?"],
                  ["Innovation", "Terminal operating system and data sharing with lines and barge operators. Electrification of yard equipment. Cooperation across the cluster.", "Which dataset do you hold that nobody outside the terminal has analysed? What would you let a research team test on one berth or shift?"],
                ],
              },
              { t: "p", text: "Research hooks: hinterland connectivity where the hinterland is a river; terminal efficiency versus national logistics performance; customs digitalisation as a natural experiment; capacity risk as roughly 8 million TEU of new cluster capacity lands in four years." },
              ],
            },
          ],
        },
        {
          t: "accordion",
          collapsed: true,
          items: [
            {
              kicker: "Site guide · Wednesday 13:45",
              title: "Ba Son Corporation.",
              blocks: [
              { t: "p", text: "Vietnam’s oldest shipbuilder and one of its two largest, a state-owned enterprise under the Ministry of National Defence that relocated from the Saigon riverfront to a 95-hectare deep-water site at Phu My. It builds, repairs and converts vessels and has added offshore, renewable-energy and logistics work. It is the week’s only example of project logistics: long cycle times, heavy and irregular inbound flows, a workforce in the thousands." },
              {
                t: "matrix",
                guide: true,
                cols: ["Lens", "What to look for", "Questions to ask the host"],
                rows: [
                  ["Operations", "Block assembly sequence and crane coverage. Where hulls wait between stages. Welding and coating quality control. Safety culture in a heavy-industry site.", "How many vessels are on the yard today, and how many were planned? What is the critical path on the largest project?"],
                  ["Change", "The relocation: what was redesigned and what was simply moved. Commercial versus defence work. How welders, fitters and planners are trained and retained.", "What did the move to Phu My change in how work is planned? Which commercial capability is the yard building now?"],
                  ["Logistics", "Inbound steel plate, engines and equipment: origin, mode, lead time. Staging of long-lead items. Delivery to owners and sea trials.", "What is the longest lead-time item on a typical build, and where does it come from? How much of the supply base is Vietnamese?"],
                  ["Innovation", "Design and planning software. Offshore wind work: real orders or capability statements. Cooperation with universities or foreign yards.", "What would you build here in 2030 that you cannot build today, and what is missing?"],
                ],
              },
              { t: "p", text: "Research hooks: project logistics and supplier development in state-owned manufacturing; skills formation in heavy industry; dual-use capacity and commercial planning; offshore wind supply chains in southern Vietnam." },
              ],
            },
          ],
        },


        {
          t: "accordion",
          collapsed: true,
          items: [
            {
              kicker: "Observation sheet",
              title: "One sheet per site.",
              blocks: [
              { t: "lead", text: "Fill one sheet per site during or right after the visit." },
              {
                t: "sheet",
                sites: ["Ba Son Corporation", "Cai Mep International Terminal"],
                lenses: ["Operations", "Change", "Logistics", "Innovation"],
                rows: ["What I saw?", "What surprised me?", "Likely mechanism", "Research question", "Data owner / partner"],
              },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- VII */
    {
      id: "journal",
      num: "VII",
      title: "Reflection Journal",
      hint: "Daily template",
      intro: "Twenty minutes, every evening. The discipline matters more than the volume.",
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
        {
          t: "info",
          label: "Poster session",
          rows: [
            ["Date", "Monday, 26 October 2026"],
            ["Time", "18:30–20:30"],
            ["Venue", "Floor 2, Deutsches Haus, 33 Le Duan St., Saigon Ward"],
            ["Format", "Poster session with flying dinner on-site & wrap-up"],
            ["Return", "Bus back to the hotel at 21:00"],
          ],
        },
        { t: "note", text: "Tap a poster to open it full size and zoom in." },
        {
          t: "posters",
          // Rendered from the PDFs in poster/ (not published): 800 px to show, 1800 px to zoom.
          items: [
            { src: "assets/posters/poster-01.jpg", full: "assets/posters/poster-01-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-02.jpg", full: "assets/posters/poster-02-full.jpg", w: 800, h: 1132 },
            { src: "assets/posters/poster-03.jpg", full: "assets/posters/poster-03-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-04.jpg", full: "assets/posters/poster-04-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-05.jpg", full: "assets/posters/poster-05-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-06.jpg", full: "assets/posters/poster-06-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-07.jpg", full: "assets/posters/poster-07-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-08.jpg", full: "assets/posters/poster-08-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-09.jpg", full: "assets/posters/poster-09-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-10.jpg", full: "assets/posters/poster-10-full.jpg", w: 800, h: 1132 },
            { src: "assets/posters/poster-11.jpg", full: "assets/posters/poster-11-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-12.jpg", full: "assets/posters/poster-12-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-13.jpg", full: "assets/posters/poster-13-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-14.jpg", full: "assets/posters/poster-14-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-15.jpg", full: "assets/posters/poster-15-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-16.jpg", full: "assets/posters/poster-16-full.jpg", w: 800, h: 1131 },
            { src: "assets/posters/poster-17.jpg", full: "assets/posters/poster-17-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-18.jpg", full: "assets/posters/poster-18-full.jpg", w: 800, h: 1131 },
            { src: "assets/posters/poster-19.jpg", full: "assets/posters/poster-19-full.jpg", w: 800, h: 1133 },
            { src: "assets/posters/poster-20.jpg", full: "assets/posters/poster-20-full.jpg", w: 800, h: 1133 },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- IX */
    {
      id: "practical",
      num: "IX",
      title: "Practical Reference",
      hint: "Getting around and staying safe",
      intro: "None of this is critical to the intellectual program; all of it is useful when something goes sideways.",
      blocks: [
        { t: "sosbanner" },
        {
          t: "cards",
          items: [
            { kicker: "Climate & what to wear", body: "Late October in southern Vietnam: warm and humid, around 25–33 °C, at the tail end of the rainy season — expect short, heavy afternoon showers. Bring a folding umbrella. Dress code: smart casual. We will let you know if any session calls for a different dress code." },
            { kicker: "Transport", body: "Program transfers are handled by KLU Saigon. For personal movement use Grab, Be or Xanh SM (all-electric). Install one before arrival and link a payment card. Metered taxis (Vinasun, Mai Linh) are reliable; avoid unmetered street taxis." },
            { kicker: "Currency & payment", body: "Vietnamese dong (VND) is the only legal tender — roughly 25,000–26,000 VND to 1 USD. Cards work in hotels and most retail; cash is needed for small restaurants and street commerce. Tipping is not expected but appreciated (5–10%)." },
            { kicker: "Health & safety", body: "Drink bottled water, use sun protection and mosquito repellent in the evening. Travel insurance with medical evacuation cover is each participant’s responsibility." },
            { kicker: "Connectivity", body: "A local eSIM (Viettel, Vinaphone or Mobifone) is the simplest option, available on arrival or via Airalo. WhatsApp and Google services work normally; Zalo is the most used local messenger." },
            { kicker: "Time & pace", body: "UTC+7 — six hours ahead of Hamburg after the European clock change on 25 October. Business hours are typically 08:00–17:30 with a long midday break at many institutions." },
          ],
        },
        { t: "kicker", rule: true, text: "Key contacts & emergencies" },
        { t: "lead", text: "If something is wrong, contact the KLU Saigon program team first. They will route from there. For genuine emergencies, the numbers below are the primary line." },
        { t: "h", text: "Program contacts · KLU Saigon" },
        {
          t: "contacts",
          items: [
            { label: "Campus Director", name: "Dr. Viet Dung Trinh", detail: ["Campus Director (Asia), Saigon Campus", "Available throughout the program for any matter requiring senior intervention."] },
            { label: "KLU Saigon Office", name: "19F Deutsches Haus", detail: ["33 Le Duan St., Sai Gon Ward, Ho Chi Minh City", "Reception during the program: Monday–Friday, 08:30 to 17:30."] },
            { label: "Project Manager", name: "Ms. Thuy Tran (Chloev)", detail: ["Available throughout the program for any matter requiring intervention."], email: "thuy.tran@klu.org" },
            { label: "Project Coordinator", name: "Ms. Pham Phuong Anh (Audrey)", detail: ["On call throughout the week for logistics, transfers, dietary needs, and on-site adjustments.", "+84 797 967 488"], email: "phuonganh.pham@klu.org", tel: "+84797967488" },
          ],
        },
        { t: "h", text: "Program accommodation" },
        {
          t: "contacts",
          items: [
            { label: "Hotel · 25–30 October", name: "Renaissance Riverside Hotel Saigon", detail: ["8-15 Ton Duc Thang, Sai Gon Ward, Ho Chi Minh City", "Tel. 028 3822 0033", "Room held continuously across the trip."], tel: "+842838220033" },
          ],
        },
        { t: "h", text: "Emergency numbers · Vietnam" },
        {
          t: "contacts",
          items: [
            { label: "115", name: "Ambulance", detail: "Public emergency medical service. For complex cases, the program coordinator will redirect to international hospitals.", tel: "115" },
            { label: "113", name: "Police", detail: "For accidents, theft, or matters requiring an official report. English-speaking operators are not guaranteed; KLU staff can assist.", tel: "113" },
            { label: "114", name: "Fire", detail: "Fire and rescue services.", tel: "114" },
          ],
        },
        { t: "closing", text: "Education teaches you to think. Travel teaches you to understand.", sub: ["Carry the operations mindset.", "Practice it everywhere."] },
      ],
    },
  ],
};
