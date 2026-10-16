/* ------------------------------------------------------------------
   KLU PhD Workshop 2026 · Field Manual — content & configuration
   Edit this file to update the manual. No build step required.
------------------------------------------------------------------- */

window.CONFIG = {
  // Group supporter shown in the SOS panel. Leave phone empty to hide
  // the call / WhatsApp / Zalo / SMS buttons. Use international format.
  supportName: "KLU Saigon group support",
  supportPhone: "", // e.g. "+84901234567"
  coordinatorEmail: "thuy.tran@klu.org",

  // Places shown on the "Show to driver" card (Vietnamese for the driver).
  places: [
    {
      label: "Hotel",
      name: "Hotel — to be confirmed",
      address: "",
    },
    {
      label: "KLU Saigon Office",
      name: "Deutsches Haus, tầng 19",
      address: "33 Lê Duẩn, Phường Sài Gòn, TP. Hồ Chí Minh",
    },
    {
      label: "HCMUT · KLU Asia Campus",
      name: "Trường Đại học Bách Khoa – ĐHQG TP.HCM (Tòa A4)",
      address: "268 Lý Thường Kiệt, Phường Diên Hồng, TP. Hồ Chí Minh",
    },
  ],
};

window.MANUAL = {
  cover: {
    kicker: "PhD Field Manual",
    title: "Vietnam",
    year: "2026",
    subtitle: "A Study Trip Manual for participants of the KLU PhD Workshop.",
    tagline: "Economic Context · Executive Immersion · Strategic Reflection",
    place: ["Saigon", "Ho Chi Minh City", "Vietnam"],
    host: "KLU Saigon",
    partner: "in cooperation with Ho Chi Minh City University of Technology",
    dates: "25–30 October 2026",
  },

  imprint: [
    { t: "p", text: "Prepared by the Office of the Campus Director, KLU Saigon, in cooperation with the MBA Programme Office, Kühne Logistics University, Hamburg, and the School of Industrial Management, Ho Chi Minh City University of Technology (HCMUT)." },
    { t: "h", text: "Programme period" },
    { t: "p", text: "Sunday, 25 October to Friday, 30 October 2026" },
    { t: "h", text: "Use" },
    { t: "p", text: "This manual is issued to participants of the PhD Workshop 2026. It is a learning instrument: a structured frame for observation, reflection and research ideation during five days of workshop sessions and fieldwork. It is not a tourist guide. Schedules are indicative and may be adjusted on operational grounds." },
  ],

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
      title: "Vietnam Executive Snapshot",
      hint: "A briefing for the week",
      intro: "Why Vietnam matters now, what is moving, what is not, and what is binding.",
      blocks: [
        { t: "kicker", text: "Part I" },
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
            { kicker: "Manufacturing & services rise together", body: "Vietnam is one of the few economies where manufacturing share of GDP has held above 24% over the past decade while modern services (finance, logistics, ICT) have expanded simultaneously. This dual-track development is the basis for arguments that Vietnam may avoid the premature de-industrialization observed elsewhere." },
            { kicker: "The China plus one anchor", body: "Vietnam captured a disproportionate share of the manufacturing reallocation that began in 2018. Samsung now produces a substantial portion of its global smartphone output here; Foxconn, Pegatron, LG, Intel, Bosch and a long list of European mid-caps have followed." },
            { kicker: "FDI momentum", body: "Annual FDI inflows have remained robust through global slowdowns. Korean, Singaporean, Japanese and Chinese capital lead by stock; European and Taiwanese inflows have accelerated since EVFTA. Quality of investment — R&D intensity, supplier development depth, local content — is rising more slowly, and this is the open question." },
            { kicker: "Demographics & consumption", body: "The middle class is the binding consumption story. Urban household formation continues at pace; modern retail and digital commerce have grown faster than nominal GDP." },
            { kicker: "Logistics & infrastructure", body: "Container throughput at Cai Mep–Thi Vai now competes with regional hubs on cost; the Lach Huyen deep-water complex serves the northern industrial corridor. The North–South Expressway is closing. Power transmission and rail remain weaker links." },
            { kicker: "Constraints & risks", body: "Mid-management talent supply is structurally short. Power reliability is a known operational risk. Regulatory complexity requires institutional patience. The administrative reforms of 2025 — provincial consolidation and redrawn municipal boundaries — add a transitional layer that will take time to settle." },
          ],
        },

        { t: "kicker", text: "Part II" },
        { t: "title", text: "What to keep in view." },
        { t: "callout", label: "Strategic position", text: "Vietnam sits at the operational seam of two supply geographies: to the north, deep integration with southern Chinese supplier networks; to the south, growing connection to ASEAN and Indian Ocean lanes. That dual position is the strategic asset." },
        {
          t: "cards",
          items: [
            { kicker: "What is actually working", list: ["Industrial parks function: established corridors in the south and north deliver power, land and labour at competitive cost.", "Trade agreement implementation is unusually effective by emerging-market standards.", "FDI institutions and chambers (EuroCham, AHK Vietnam, AmCham) provide working interfaces for foreign firms.", "Infrastructure investment is accelerating; expressways and southern port capacity will reset cost curves."] },
            { kicker: "What is moving slowly", list: ["Domestic capital markets remain shallow; corporate financing is bank-dominated.", "Vocational and middle-management training has not kept pace with industrial complexity.", "Energy transition is contested between demand growth and decarbonization commitments."] },
            { kicker: "What is binding", list: ["Talent depth — operations leadership, controllership, digital product roles.", "Power reliability — grid expansion has lagged demand.", "Institutional patience — decisions that take three weeks in Hamburg can take three months here."] },
            { kicker: "Recent context to read into", body: "The 2025 administrative reform redrew the southern industrial map. Binh Duong, Ba Ria–Vung Tau and the urban core of Saigon now sit inside a single municipality: the south’s logistics geography is no longer cross-border, it is intra-city." },
          ],
        },

        { t: "kicker", text: "Part III" },
        { t: "title", text: "The southern logistics geography in 2026." },
        { t: "lead", text: "Four anchor projects describe how the south’s logistics system is being recomposed. Read them as one integrated region, not as separate provincial initiatives." },
        {
          t: "cards",
          items: [
            { kicker: "Project 01", title: "Cai Mep–Thi Vai expansion", body: "Deep-water port complex, Phuong Phu My. Phase II under construction; throughput already competitive on cost with regional peers. Closes the cost gap with Singapore on transshipment." },
            { kicker: "Project 02", title: "Binh Duong–Vung Tau rail link", body: "Inland-to-port multimodal corridor led by Becamex IDC and Thaco. First inland-to-deep-water rail in southern Vietnam; triggers a modal shift from road to rail." },
            { kicker: "Project 03", title: "Can Gio–Vung Tau coastal corridor", body: "Coastal urban and freight integration led by VinGroup. Tests whether private-led infrastructure can deliver at regional scale." },
            { kicker: "Project 04", title: "North–South Expressway, final segments", body: "Continuous high-speed road from Lang Son to Ca Mau. Secondary cities become reachable at scale for the first time." },
          ],
        },
        { t: "note", text: "Figures are indicative; confirm against the latest World Bank, GSO and AHK publications." },
      ],
    },

    /* ---------------------------------------------------------- IV */
    {
      id: "programme",
      num: "IV",
      title: "Daily Programme",
      hint: "Day by day, 25–30 October",
      intro: "Each day pairs the schedule with a learning objective, observation prompts and a closing reflection question.",
      blocks: [
        { t: "notice", text: "The detailed schedule, venues and speakers will be confirmed by KLU Saigon before arrival. This page will be updated — pull to refresh before each day." },
        {
          t: "days",
          items: [
            { day: "Day One", date: "Sunday · 25 October", focus: "Arrival & welcome", slots: [], reflection: "Which of my pre-trip assumptions about Vietnam has already been challenged by what I have seen on the ground today?" },
            { day: "Day Two", date: "Monday · 26 October", focus: "Workshop sessions", slots: [], reflection: "" },
            { day: "Day Three", date: "Tuesday · 27 October", focus: "Workshop sessions & fieldwork", slots: [], reflection: "" },
            { day: "Day Four", date: "Wednesday · 28 October", focus: "Industry visits", slots: [], reflection: "" },
            { day: "Day Five", date: "Thursday · 29 October", focus: "Practitioner panel & PhD poster session", slots: [], reflection: "" },
            { day: "Day Six", date: "Friday · 30 October", focus: "Synthesis & closing", slots: [], reflection: "What is my single biggest revision to my research questions, and how will this week change the way I approach my project?" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- V */
    {
      id: "sessions",
      num: "V",
      title: "Major Sessions",
      hint: "Outlook · Change · Logistics · Innovation",
      intro: "Four anchor sessions structure the week’s intellectual arc.",
      blocks: [
        { t: "notice", text: "Dates, times and speakers to be confirmed." },
        {
          t: "accordion",
          items: [
            {
              kicker: "Session One",
              title: "Vietnam economic outlook",
              blocks: [
                { t: "p", text: "A working brief on Vietnam’s growth drivers, structural constraints and strategic role in Asian supply chains. Participants leave with a defensible mental model of how Vietnam fits into global production networks, and where the model is most likely to break." },
                { t: "h", text: "Learning outcomes" },
                { t: "list", items: ["Identify and weigh the principal drivers of Vietnamese growth: FDI, manufacturing depth, demographics, trade agreements.", "Assess Vietnam’s competitiveness relative to Indonesia, Thailand, the Philippines and India.", "Identify the structural constraints that bound the growth ceiling.", "Evaluate Vietnam’s position in Asian supply chains, including the limits of the China plus one thesis."] },
                {
                  t: "table",
                  head: ["", "VN", "ID", "TH", "PH", "IN"],
                  rows: [
                    ["GDP growth 2024", "~7.0%", "~5.0%", "~2.5%", "~5.5%", "~7.0%"],
                    ["Manuf. % GDP", "~24%", "~19%", "~25%", "~18%", "~17%"],
                    ["FDI 2024 (USD bn)", "~36", "~22", "~13", "~9", "~71"],
                    ["LPI rank 2023", "43", "61", "34", "43", "38"],
                  ],
                  note: "Indicative. Sources: World Bank, GSO Vietnam.",
                },
                { t: "h", text: "Reflection questions" },
                { t: "list", items: ["What would a credible bear case on Vietnam look like over five years, and what indicators would tell you it is materializing?", "Which growth drivers are durable structural features, and which depend on the current geopolitical configuration?", "Which single capability would do the most to lift Vietnam’s value capture in global production networks?"] },
              ],
            },
            {
              kicker: "Session Two",
              title: "Change management in transition economies",
              blocks: [
                { t: "p", text: "Transition economies do not move from low-cost production to managerial capability in a straight line. The interesting questions live in the gap. The session is organized around seven working propositions." },
                {
                  t: "rows",
                  items: [
                    { k: "01 · Beyond low cost", v: "Economies move past low-cost assembly toward capability and value creation — unevenly within countries, firms and teams." },
                    { k: "02 · Scale outpaces system", v: "Supply chains scale faster than the management systems that govern them." },
                    { k: "03 · Partners, not vendors", v: "Firms increasingly need strategic partners in transition markets, not arm’s-length suppliers." },
                    { k: "04 · Talent is the bottleneck", v: "The binding constraint is mid-management depth." },
                    { k: "05 · Change without disruption", v: "Change has to be designed for moving systems that cannot stop production." },
                    { k: "06 · Markets ahead of institutions", v: "Markets often modernize faster than the institutions that regulate them." },
                    { k: "07 · Geopolitics inside the operation", v: "Tariffs, export controls and diplomacy now sit inside operational decisions." },
                  ],
                },
                { t: "h", text: "Reflection questions" },
                { t: "list", items: ["Which two propositions are most researchable with the data and access available in Vietnam?", "What concrete signal would show that managerial capability is catching up with the productive economy?"] },
              ],
            },
            {
              kicker: "Session Three",
              title: "Transportation & distribution",
              blocks: [
                { t: "p", text: "The logistics geography of the enlarged Ho Chi Minh City: deep-water ports, the Binh Duong–Vung Tau rail corridor, the Can Gio–Vung Tau coastal axis, and whether southern Vietnam can move from manufacturing platform to integrated logistics hub." },
                {
                  t: "stats",
                  items: [
                    { n: "~9m", l: "Cai Mep–Thi Vai TEU, 2024" },
                    { n: "43", l: "Vietnam LPI rank, 2023" },
                    { n: "~75%", l: "Road share of inland freight" },
                    { n: "16–20%", l: "Logistics cost as share of GDP" },
                  ],
                },
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
                  note: "SG = Singapore · TPP = Tanjung Pelepas · LCB = Laem Chabang. Indicative reading frame, not a like-for-like benchmark.",
                },
                { t: "h", text: "Reflection questions" },
                { t: "list", items: ["If the rail link comes online on schedule, where should firms locate inventory and distribution centres in southern Vietnam?", "What is the right unit of analysis for logistics research here: the port, the corridor, the city-region, or the cross-border flow?"] },
              ],
            },
            {
              kicker: "Session Four",
              title: "Product innovation",
              blocks: [
                { t: "p", text: "For supply chain managers, product innovation is rarely just a product question: each new product category creates a different supply chain problem. The Booz Allen Hamilton (1982) typology gives a working frame." },
                {
                  t: "rows",
                  items: [
                    { k: "01 · New-to-the-world", v: "The product creates its own market; the route to market has to be built in parallel." },
                    { k: "02 · New product lines", v: "New to the firm, established in the market: new sourcing, processing and quality capability." },
                    { k: "03 · Additions to lines", v: "Variants and SKUs; the risk is SKU proliferation outpacing planning capability." },
                    { k: "04 · Improvements", v: "Better versions of the same product; innovation lives mostly in operations." },
                    { k: "05 · Repositionings", v: "Same product, new market — often the largest supply chain transformation." },
                    { k: "06 · Cost reductions", v: "Same performance at lower cost; almost always a supply chain question." },
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
      hint: "Operations · Management · Strategy",
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
      id: "culture",
      num: "VII",
      title: "Cultural Intelligence",
      hint: "Reading the room in Vietnam",
      intro: "Practical guidance for working in Vietnamese business and academic environments. None of this is universal; all of it is observable. Treat as working hypotheses, not rules.",
      blocks: [
        {
          t: "cards",
          items: [
            { kicker: "Hierarchy and openness", body: "Vietnamese business culture is more hierarchical than the European average and more open than the regional average. Senior figures expect protocol; junior staff are often candid. Read the room twice — once for hierarchy, once for openness." },
            { kicker: "Communication style", body: "Indirect signalling is common. “We will study this carefully” can mean genuine engagement or polite refusal; the difference is in tone, follow-up and the next meeting." },
            { kicker: "Relationship building", body: "Trust precedes transaction. The dinner that follows a meeting is rarely incidental. This is not inefficiency; it is risk management where contractual enforcement is uneven." },
            { kicker: "How discussions actually work", body: "Discussions often unfold in two registers: the formal language of the meeting, and a parallel register of asides and side conversations. Both carry signal." },
            { kicker: "Trust and credibility", body: "Credibility is built through specificity, follow-through and patience. The visitor who comes back twice and remembers what was said the first time is taken seriously." },
            { kicker: "The role of seniority", body: "Seniority is not only about decision authority; it is about who can carry an agreement back to a wider system." },
            { kicker: "Punctuality", body: "Punctuality at scheduled meetings is respected, but agendas slip when senior figures are present. Build buffers." },
            { kicker: "Saving face", body: "Less about preventing embarrassment, more about preserving the operability of relationships. A disagreement made privately can build credibility; the same disagreement made publicly destroys it." },
          ],
        },
        { t: "callout", label: "Insight", text: "The most underestimated skill in Vietnam is patience — not slowness, but the willingness to let conversations breathe and to respect timelines that European calendars treat as soft." },
      ],
    },

    /* ---------------------------------------------------------- VIII */
    {
      id: "journal",
      num: "VIII",
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

    /* ---------------------------------------------------------- IX */
    {
      id: "practical",
      num: "IX",
      title: "Practical Reference",
      hint: "Logistics, contacts, emergencies",
      intro: "None of this is critical to the intellectual programme; all of it is useful when something goes sideways.",
      blocks: [
        { t: "sosbanner" },
        {
          t: "cards",
          items: [
            { kicker: "Climate & what to wear", body: "Late October in southern Vietnam: warm and humid, around 25–33 °C, at the tail end of the rainy season — expect short, heavy afternoon showers. Bring a folding umbrella. Smart business for company visits and institutional sessions; closed-toe shoes are mandatory at industrial sites." },
            { kicker: "Transport", body: "Programme transfers are handled by KLU Saigon. For personal movement use Grab, Be or Xanh SM (all-electric). Install one before arrival and link a payment card. Metered taxis (Vinasun, Mai Linh) are reliable; avoid unmetered street taxis." },
            { kicker: "Currency & payment", body: "Vietnamese dong (VND) is the only legal tender — roughly 25,000–26,000 VND to 1 USD. Cards work in hotels and most retail; cash is needed for small restaurants and street commerce. Tipping is not expected but appreciated (5–10%)." },
            { kicker: "Health & safety", body: "Drink bottled water, use sun protection and mosquito repellent in the evening. Travel insurance with medical evacuation cover is each participant’s responsibility." },
            { kicker: "Connectivity", body: "A local eSIM (Viettel, Vinaphone or Mobifone) is the simplest option, available on arrival or via Airalo. WhatsApp and Google services work normally; Zalo is the most used local messenger." },
            { kicker: "Time", body: "UTC+7 — six hours ahead of Hamburg after the European clock change on 25 October. Business hours are typically 08:00–17:30 with a long midday break at many institutions." },
          ],
        },
        { t: "kicker", text: "Key contacts" },
        {
          t: "contacts",
          items: [
            { label: "Campus Director", name: "Dr. Viet Dung Trinh", detail: "Campus Director (Asia), KLU Saigon · available throughout the programme for any matter requiring senior intervention." },
            { label: "Programme coordinator", name: "Ms. Thuy Tran", detail: "Logistics, transfers, dietary needs and on-site adjustments.", email: "thuy.tran@klu.org" },
            { label: "KLU Saigon Office", name: "19F Deutsches Haus", detail: "33 Le Duan, Phuong Sai Gon, Ho Chi Minh City · Mon–Fri, 08:30–17:30." },
            { label: "HCMUT partner", name: "School of Industrial Management", detail: "Ho Chi Minh City University of Technology · Building A4, 268 Ly Thuong Kiet." },
          ],
        },
        { t: "kicker", text: "Emergency numbers · Vietnam" },
        {
          t: "contacts",
          items: [
            { label: "115", name: "Ambulance", detail: "Public emergency medical service. For complex cases the coordinator will redirect to an international hospital.", tel: "115" },
            { label: "113", name: "Police", detail: "Accidents, theft, or matters requiring an official report. English is not guaranteed; KLU staff can assist.", tel: "113" },
            { label: "114", name: "Fire & rescue", detail: "Fire and rescue services.", tel: "114" },
          ],
        },
        { t: "kicker", text: "International hospitals · HCMC" },
        {
          t: "contacts",
          items: [
            { label: "Hospital", name: "FV Hospital", detail: "6 Nguyen Luong Bang, Tan Phu ward (former District 7) · 24/7 emergency.", tel: "+842854113333" },
            { label: "Clinic", name: "Raffles Medical", detail: "285B Dien Bien Phu, Xuan Hoa ward (former District 3).", tel: "+842838240777" },
            { label: "Clinic", name: "Family Medical Practice", detail: "Diamond Plaza, 34 Le Duan, Phuong Sai Gon.", tel: "+842838227848" },
          ],
        },
        { t: "closing", text: "Education teaches you to think. Travel teaches you to understand.", sub: "Carry the operations mindset. Practice it everywhere." },
      ],
    },
  ],
};
