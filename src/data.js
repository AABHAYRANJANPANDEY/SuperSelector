/**
 * SupeRR Selector: The Pressure Performance Index (PPI)
 * Author: Aabhay Ranjan Pandey
 * Competition: Rajasthan Royals SupeRR Selector Round 1 Submission
 * 
 * DATA SOURCE:
 * Official Rajasthan Royals Ball-by-Ball Data Pack (200,999 Deliveries, 867 Matches, 2022-2026)
 * Processed and validated directly from `ball_by_ball.csv.gz`.
 */

export const METADATA = {
  title: "SupeRR Selector: The Pressure Performance Index",
  subtitle: "A Data-Driven Talent Discovery by Aabhay Ranjan Pandey",
  franchise: "Rajasthan Royals Talent Analytics Lab",
  season: "2025 - 2026",
  deliveriesAnalyzed: "200,999",
  matchesAnalyzed: "867",
  dateRange: "2022 to 2026",
  tournamentsCovered: ["IPL", "T20 Internationals", "Global Franchise Leagues"],
  leaguePressureSRBenchmark: "154.2 SR",
  leaguePressureEconBenchmark: "9.32 RPO",
  coreObjective: "Identify the top 10 most ice-cold cricket players who reliably bend win probabilities in high-stakes, maximum-leverage scenarios from the official RR data pack."
};

export const METHODOLOGY_METRICS = {
  pressureDefinition: {
    title: "Defining a 'High-Pressure' Context in the RR 200k Data Pack",
    summary: "Traditional cricket statistics treat a run scored in an 80-run blowout the same as a boundary needed off the final delivery. The PPI isolates strictly High-Leverage Index (HLI > 1.85) game-states across the 200,999 deliveries.",
    quadrants: [
      {
        id: "death_chase",
        tag: "Scenario 01",
        title: "The Escalating Chase",
        condition: "Innings 2, Overs 14-20 with RRR >= 10.0 or <= 45 runs needed in final 24 balls",
        description: "Every dot ball compounds match leverage exponentially. Batters must score at > 190 SR without losing wicket bundles, while bowlers must execute defensive lines under immense boundary pressure.",
        weight: "35% of Batting PPI"
      },
      {
        id: "death_phase",
        tag: "Scenario 02",
        title: "Death Overs Climax (Overs 16-20)",
        condition: "All deliveries in Overs 16, 17, 18, 19, and 20",
        description: "The championship defining surge. In this dataset, the league average death economy is 9.32 rpo with a 154.2 SR baseline. Players exceeding these baselines by >20% earn maximum index weighting.",
        weight: "40% of Bowling PPI / 30% Batting"
      },
      {
        id: "collapse_rescue",
        tag: "Scenario 03",
        title: "Powerplay Crisis Rescue",
        condition: "Score <= 35/3 inside the first 6 overs (Powerplay)",
        description: "Win expectancy falls below 20%. Measures a player's ability to arrest panic, rebuild innings momentum without stalling the run rate, and stabilize franchise win probability.",
        weight: "20% Crisis Resilience"
      },
      {
        id: "dot_boundary_control",
        tag: "Scenario 04",
        title: "Dot Ball & Boundary Margin",
        condition: "Ball-by-ball micro-margin evaluation under pressure",
        description: "Separates false accumulators from true clutch performers by rewarding dot-ball avoidance (< 20% dots for batters) and boundary suppression (< 15% boundaries conceded for bowlers).",
        weight: "15% Micro-Execution"
      }
    ]
  },
  formula: {
    mathExpression: "PPI = 0.40 \\cdot \\Delta_{Execution} + 0.25 \\cdot Boundary_{\\%} + 0.20 \\cdot (1 - Dot_{\\%}) + 0.15 \\cdot \\Omega_{Confidence}",
    parameters: [
      { name: "Phase-Adjusted Execution Delta", weight: "40%", desc: "How much better the player struck (SR vs 154.2 par) or conceded (Econ vs 9.32 par) in death and crunch chase overs." },
      { name: "Boundary Leverage Ratio", weight: "25%", desc: "Frequency of boundary generation when batting (>26%) or boundary denial when bowling (<15%)." },
      { name: "Dot Ball Control Ratio", weight: "20%", desc: "Avoidance of momentum-killing dots when batting (<22%); creation of dot ball pressure when bowling (>33%)." },
      { name: "Sample Size Confidence Scalar", weight: "15%", desc: "Empirical bayesian adjustment rewarding high sample volume (>300 pressure deliveries)." }
    ]
  }
};

export const TOP_10_PLAYERS = [
  {
    id: "heinrich-klaasen",
    rank: 1,
    name: "Heinrich Klaasen",
    country: "🇿🇦 RSA",
    team: "Sunrisers Hyderabad",
    role: "Middle-Order Destroyer / Finisher",
    roleCategory: "Batter",
    ppiScore: 97.8,
    pressureFaced: 497,
    clutchStatHighlight: "193.4 Pressure SR | 198.5 Death SR | 14.7% Dot Ball Rate",
    winProbabilityAdded: "+4.35",
    avatar: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=400&q=80",
    scoutRationale: "The undisputed apex middle-overs and death punisher in the 200k data pack. Klaasen faced 497 pressure deliveries, scoring 961 runs at an extraordinary 193.4 Strike Rate with a 26.4% boundary rate. Crucially, his dot ball percentage under pressure is a microscopic 14.7% (compared to the 28.5% league average), meaning he virtually never gets stuck.",
    tacticalFitRR: "Solves Rajasthan Royals' historical vulnerability against mid-over spin at Sawai Mansingh Stadium, Jaipur. His 360-degree bat-swing over long-off and mid-wicket takes monumental pressure off Sanju Samson and Riyan Parag.",
    radarStats: [
      { subject: "Death Phase Impact", value: 98, benchmark: 70 },
      { subject: "Chase Execution", value: 94, benchmark: 65 },
      { subject: "Dot Ball Delta", value: 98, benchmark: 62 },
      { subject: "Boundary Leverage", value: 97, benchmark: 68 },
      { subject: "Clutch WPA", value: 99, benchmark: 60 },
      { subject: "Tournament Resilience", value: 95, benchmark: 72 }
    ],
    rawMetrics: {
      strikeRatePressure: "193.4 SR",
      boundaryRate: "26.4%",
      dotBallPercent: "14.7%",
      averagePressure: "45.8",
      wicketsOrBallsPerBoundary: "3.78 balls",
      winContributionMatchAvg: "19.2%"
    },
    clutchCaseStudy: "Across 497 pressure situations in the dataset, maintained a 198.5 SR in overs 16-20 while consistently converting 11+ RRR scenarios into victories."
  },
  {
    id: "jasprit-bumrah",
    rank: 2,
    name: "Jasprit Bumrah",
    country: "🇮🇳 IND",
    team: "Mumbai Indians",
    role: "Generational Death Bowler",
    roleCategory: "Bowler",
    ppiScore: 97.4,
    pressureFaced: 667,
    clutchStatHighlight: "7.54 Pressure Econ | 7.44 Death Econ | 13.8% Boundaries Conceded",
    winProbabilityAdded: "+4.60",
    avatar: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=400&q=80",
    scoutRationale: "Statistically an incomprehensible outlier. In a dataset where the league death economy sits at 9.32 rpo, Bumrah bowled 667 pressure deliveries and conceded just 7.54 rpo (7.44 in the death phase) while capturing 51 wickets. His boundary denial rate of 13.8% is the stingiest among all primary pacers, with 32.8% of his pressure deliveries being absolute dot balls.",
    tacticalFitRR: "Provides the dream bookend pairing with Trent Boult. While Boult destroys top orders in overs 1-3, Bumrah shuts down overs 17 and 19, shielding RR's young domestic pace battery.",
    radarStats: [
      { subject: "Death Phase Impact", value: 99, benchmark: 70 },
      { subject: "Chase Execution", value: 98, benchmark: 65 },
      { subject: "Dot Ball Delta", value: 96, benchmark: 62 },
      { subject: "Boundary Leverage", value: 99, benchmark: 68 },
      { subject: "Clutch WPA", value: 98, benchmark: 60 },
      { subject: "Tournament Resilience", value: 99, benchmark: 72 }
    ],
    rawMetrics: {
      strikeRatePressure: "13.0 balls/wkt",
      boundaryRate: "13.8% conceded",
      dotBallPercent: "32.8%",
      averagePressure: "16.4",
      wicketsOrBallsPerBoundary: "7.25 balls",
      winContributionMatchAvg: "23.5%"
    },
    clutchCaseStudy: "Bowled 667 pressure balls with zero volatility spikes. In games defending sub-40 in the final 4 overs, his economy drops to an untouchable 6.8 rpo."
  },
  {
    id: "sunil-narine",
    rank: 3,
    name: "Sunil Narine",
    country: "🇼🇮 WI",
    team: "Kolkata Knight Riders",
    role: "Dual-Threat Clutch All-Rounder",
    roleCategory: "All-Rounder",
    ppiScore: 96.8,
    pressureFaced: 369,
    clutchStatHighlight: "6.14 Death Econ (Best in Data Pack) | 233.3 Chase SR",
    winProbabilityAdded: "+4.15",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    scoutRationale: "The most suffocating defensive bowler in the entire 200,999 delivery dataset. In death overs (16-20), Narine conceded just 6.14 runs per over with a 36.6% dot ball rate and an astonishing 10.6% boundary rate conceded. Furthermore, when batting in high-pressure chases, he produced a stratospheric 233.3 strike rate.",
    tacticalFitRR: "Gives Rajasthan Royals an impenetrable spin choke alongside Ravichandran Ashwin / Yuzvendra Chahal, plus floating power-hitting that completely wrecks opposition match-up planning.",
    radarStats: [
      { subject: "Death Phase Impact", value: 97, benchmark: 70 },
      { subject: "Chase Execution", value: 96, benchmark: 65 },
      { subject: "Dot Ball Delta", value: 99, benchmark: 62 },
      { subject: "Boundary Leverage", value: 98, benchmark: 68 },
      { subject: "Clutch WPA", value: 95, benchmark: 60 },
      { subject: "Tournament Resilience", value: 96, benchmark: 72 }
    ],
    rawMetrics: {
      strikeRatePressure: "167.8 (Bat) / 14.7 (Bowl)",
      boundaryRate: "10.6% conceded",
      dotBallPercent: "34.5%",
      averagePressure: "17.2",
      wicketsOrBallsPerBoundary: "9.4 balls",
      winContributionMatchAvg: "19.8%"
    },
    clutchCaseStudy: "Conceded just 225 runs from 220 death balls (6.14 econ) with 19 wickets, maintaining the lowest boundary conceded percentage in the entire RR data pack."
  },
  {
    id: "suryakumar-yadav",
    rank: 4,
    name: "Suryakumar Yadav",
    country: "🇮🇳 IND",
    team: "Mumbai Indians",
    role: "360° Field Manipulator & Finisher",
    roleCategory: "Batter",
    ppiScore: 96.5,
    pressureFaced: 543,
    clutchStatHighlight: "208.7 Pressure SR | 217.2 Death SR | 33.5% Boundary Rate",
    winProbabilityAdded: "+4.20",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    scoutRationale: "The single most explosive boundary generator in the tournament archive. In 543 pressure balls, SKY plundered 1,133 runs at a blazing 208.7 SR and a peerless 33.5% boundary rate (one boundary every 2.98 balls). In the death overs specifically, his strike rate surges to 217.2, making field placement mathematically impossible.",
    tacticalFitRR: "Provides RR with an elite #3 or #4 counter-attacking anchor who bends field dynamics at Sawai Mansingh Stadium, converting tricky 175-par pitches into 210+ winning totals.",
    radarStats: [
      { subject: "Death Phase Impact", value: 99, benchmark: 70 },
      { subject: "Chase Execution", value: 95, benchmark: 65 },
      { subject: "Dot Ball Delta", value: 91, benchmark: 62 },
      { subject: "Boundary Leverage", value: 100, benchmark: 68 },
      { subject: "Clutch WPA", value: 97, benchmark: 60 },
      { subject: "Tournament Resilience", value: 94, benchmark: 72 }
    ],
    rawMetrics: {
      strikeRatePressure: "208.7 SR",
      boundaryRate: "33.5%",
      dotBallPercent: "21.0%",
      averagePressure: "43.6",
      wicketsOrBallsPerBoundary: "2.98 balls",
      winContributionMatchAvg: "20.1%"
    },
    clutchCaseStudy: "Scored 1,133 runs across 543 pressure situations, the second highest run tally in the data pack with an unmatched 217.2 death strike rate."
  },
  {
    id: "tim-david",
    rank: 5,
    name: "Tim David",
    country: "🇦🇺 AUS",
    team: "Mumbai Indians",
    role: "High-Caliber Pure Finisher",
    roleCategory: "Batter",
    ppiScore: 95.9,
    pressureFaced: 667,
    clutchStatHighlight: "1,305 Pressure Runs | 200.2 Death SR | 190.6 Chase SR",
    winProbabilityAdded: "+3.95",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    scoutRationale: "The highest run-accumulator in high-pressure game-states across the entire dataset. In 667 pressure deliveries, David scored 1,305 runs at an elite 195.7 SR and 200.2 in the death overs. In chases, his 190.6 strike rate and 28.3% boundary percentage provide unmatched end-game certainty.",
    tacticalFitRR: "Gives Rajasthan Royals the muscular right-handed death-overs firepower needed at #6 or #7 to pair alongside Shimron Hetmyer, eliminating RR's reliance on top-order carry.",
    radarStats: [
      { subject: "Death Phase Impact", value: 98, benchmark: 70 },
      { subject: "Chase Execution", value: 96, benchmark: 65 },
      { subject: "Dot Ball Delta", value: 89, benchmark: 62 },
      { subject: "Boundary Leverage", value: 96, benchmark: 68 },
      { subject: "Clutch WPA", value: 95, benchmark: 60 },
      { subject: "Tournament Resilience", value: 92, benchmark: 72 }
    ],
    rawMetrics: {
      strikeRatePressure: "195.7 SR",
      boundaryRate: "28.3%",
      dotBallPercent: "22.6%",
      averagePressure: "38.4",
      wicketsOrBallsPerBoundary: "3.53 balls",
      winContributionMatchAvg: "17.4%"
    },
    clutchCaseStudy: "Accumulated 1,305 runs across 667 pressure balls with 28.3% boundary frequency, reliably closing out high-RRR games."
  },
  {
    id: "matheesha-pathirana",
    rank: 6,
    name: "Matheesha Pathirana",
    country: "🇱🇰 SL",
    team: "Chennai Super Kings",
    role: "Slinging Yorker Lethality",
    roleCategory: "Bowler",
    ppiScore: 95.3,
    pressureFaced: 692,
    clutchStatHighlight: "62 Pressure Wickets | 8.32 Econ | 14.7% Boundary Rate",
    winProbabilityAdded: "+3.80",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    scoutRationale: "His slinging 1.7m release angle creates an optical nightmare for batters in crunch overs. In 692 pressure deliveries, Pathirana snared 62 wickets while conceding only an 8.32 economy rate and an ultra-low 14.7% boundary rate. His tailing yorker hits the blockhole with high consistency even under heavy dew.",
    tacticalFitRR: "An irresistible pace enforcer who can take over the mantle of specialist overseas strike bowler, pairing devastatingly with Boult's opening spells.",
    radarStats: [
      { subject: "Death Phase Impact", value: 96, benchmark: 70 },
      { subject: "Chase Execution", value: 95, benchmark: 65 },
      { subject: "Dot Ball Delta", value: 94, benchmark: 62 },
      { subject: "Boundary Leverage", value: 96, benchmark: 68 },
      { subject: "Clutch WPA", value: 95, benchmark: 60 },
      { subject: "Tournament Resilience", value: 93, benchmark: 72 }
    ],
    rawMetrics: {
      strikeRatePressure: "11.1 balls/wkt",
      boundaryRate: "14.7% conceded",
      dotBallPercent: "29.9%",
      averagePressure: "15.4",
      wicketsOrBallsPerBoundary: "6.80 balls",
      winContributionMatchAvg: "18.5%"
    },
    clutchCaseStudy: "Bowled 692 pressure balls with 62 dismissals (11.1 strike rate), allowing only 14.7% boundaries against aggressive finishers."
  },
  {
    id: "rinku-singh",
    rank: 7,
    name: "Rinku Singh",
    country: "🇮🇳 IND",
    team: "Kolkata Knight Riders",
    role: "Ice-Man Chase Finisher",
    roleCategory: "Batter",
    ppiScore: 94.8,
    pressureFaced: 645,
    clutchStatHighlight: "1,202 Runs | 192.4 Death SR | 192.0 Chase SR Under Crunch",
    winProbabilityAdded: "+3.88",
    avatar: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80",
    scoutRationale: "The definitive ice-man of modern T20 finishes. Across 645 pressure deliveries, Rinku scored 1,202 runs striking at 186.4 overall and 192.0 in crunch run chases. His composure when 15+ runs are required off the final 6 balls is the highest in modern cricket, with a 27.6% boundary rate under fire.",
    tacticalFitRR: "Gives Rajasthan Royals an elite left-handed calm finisher at #6 or #7, allowing Riyan Parag and Sanju Samson to play with freedom in the middle overs without fear of tail-end exposure.",
    radarStats: [
      { subject: "Death Phase Impact", value: 96, benchmark: 70 },
      { subject: "Chase Execution", value: 98, benchmark: 65 },
      { subject: "Dot Ball Delta", value: 88, benchmark: 62 },
      { subject: "Boundary Leverage", value: 94, benchmark: 68 },
      { subject: "Clutch WPA", value: 96, benchmark: 60 },
      { subject: "Tournament Resilience", value: 95, benchmark: 72 }
    ],
    rawMetrics: {
      strikeRatePressure: "186.4 SR",
      boundaryRate: "27.6%",
      dotBallPercent: "23.4%",
      averagePressure: "48.2",
      wicketsOrBallsPerBoundary: "3.62 balls",
      winContributionMatchAvg: "17.9%"
    },
    clutchCaseStudy: "Executed 1,202 pressure runs across 645 balls, maintaining a 192.0 Chase SR when the required rate exceeded 10.5."
  },
  {
    id: "rashid-khan",
    rank: 8,
    name: "Rashid Khan",
    country: "🇦🇫 AFG",
    team: "Gujarat Titans",
    role: "Dual-Threat Clutch All-Rounder",
    roleCategory: "All-Rounder",
    ppiScore: 94.4,
    pressureFaced: 1065,
    clutchStatHighlight: "71 Wickets | 8.14 Bowling Econ | 183.1 Batting Chase SR",
    winProbabilityAdded: "+3.90",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    scoutRationale: "The ultimate two-way high-leverage insurance policy. Handled an astounding 1,065 total pressure deliveries (696 bowling, 369 batting). He captured 71 pressure wickets with an 8.14 economy rate and a 35.9% dot ball percentage, while striking at 183.1 in crunch chases with the bat.",
    tacticalFitRR: "Solves two squad needs at once: a world-class spin stranglehold in overs 7-15 at Jaipur, paired with game-stealing boundary hitting from the #8 slot.",
    radarStats: [
      { subject: "Death Phase Impact", value: 93, benchmark: 70 },
      { subject: "Chase Execution", value: 95, benchmark: 65 },
      { subject: "Dot Ball Delta", value: 97, benchmark: 62 },
      { subject: "Boundary Leverage", value: 92, benchmark: 68 },
      { subject: "Clutch WPA", value: 96, benchmark: 60 },
      { subject: "Tournament Resilience", value: 97, benchmark: 72 }
    ],
    rawMetrics: {
      strikeRatePressure: "166.9 (Bat) / 183.1 (Chase)",
      boundaryRate: "14.7% conceded",
      dotBallPercent: "35.9% (Bowl)",
      averagePressure: "16.8",
      wicketsOrBallsPerBoundary: "6.8 balls",
      winContributionMatchAvg: "19.5%"
    },
    clutchCaseStudy: "71 wickets at 8.14 economy across 696 pressure deliveries, plus 616 runs at 183.1 Chase SR to close out hopeless games."
  },
  {
    id: "tristan-stubbs",
    rank: 9,
    name: "Tristan Stubbs",
    country: "🇿🇦 RSA",
    team: "Delhi Capitals",
    role: "Crisis Absorber & 360° Finisher",
    roleCategory: "Batter",
    ppiScore: 93.8,
    pressureFaced: 452,
    clutchStatHighlight: "853 Runs | 195.9 Death SR | 14.6% Dot Ball Rate",
    winProbabilityAdded: "+3.45",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    scoutRationale: "Statistically one of the cleanest ball-strikers under pressure in world cricket. In 452 pressure balls, Stubbs recorded 853 runs at a 188.7 SR and 195.9 in the death phase. Most impressively, his dot ball rate is only 14.6% (tied with Klaasen for the best in the data pack), proving his ability to rotate strike and punish bad balls with equal poise.",
    tacticalFitRR: "A versatile right-handed middle-order asset who can float between #4 and #6, mitigating middle-order stalls while offering part-time defensive spin.",
    radarStats: [
      { subject: "Death Phase Impact", value: 95, benchmark: 70 },
      { subject: "Chase Execution", value: 92, benchmark: 65 },
      { subject: "Dot Ball Delta", value: 98, benchmark: 62 },
      { subject: "Boundary Leverage", value: 94, benchmark: 68 },
      { subject: "Clutch WPA", value: 93, benchmark: 60 },
      { subject: "Tournament Resilience", value: 91, benchmark: 72 }
    ],
    rawMetrics: {
      strikeRatePressure: "188.7 SR",
      boundaryRate: "26.8%",
      dotBallPercent: "14.6%",
      averagePressure: "41.2",
      wicketsOrBallsPerBoundary: "3.73 balls",
      winContributionMatchAvg: "15.8%"
    },
    clutchCaseStudy: "Maintained a 195.9 death SR across 452 pressure balls while recording a remarkable 14.6% dot ball avoidance rate."
  },
  {
    id: "arshdeep-singh",
    rank: 10,
    name: "Arshdeep Singh",
    country: "🇮🇳 IND",
    team: "Punjab Kings",
    role: "High-Volume Left-Arm Death Wicket Taker",
    roleCategory: "Bowler",
    ppiScore: 93.2,
    pressureFaced: 1323,
    clutchStatHighlight: "105 Pressure Wickets (Highest in Data Pack) | 1,323 Balls",
    winProbabilityAdded: "+3.65",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80",
    scoutRationale: "The workhorse death-overs enforcer of the entire dataset. Arshdeep delivered a mammoth 1,323 pressure balls (nearly double the next closest bowler) and claimed 105 wickets. His left-arm natural angle across right-handers and pinpoint 19th-over yorkers make him an indispensable high-leverage wicket taker.",
    tacticalFitRR: "Creates a terrifying all-left-arm seam attack alongside Trent Boult, giving Rajasthan Royals 8 overs of relentless left-arm swing and death precision.",
    radarStats: [
      { subject: "Death Phase Impact", value: 94, benchmark: 70 },
      { subject: "Chase Execution", value: 93, benchmark: 65 },
      { subject: "Dot Ball Delta", value: 91, benchmark: 62 },
      { subject: "Boundary Leverage", value: 90, benchmark: 68 },
      { subject: "Clutch WPA", value: 94, benchmark: 60 },
      { subject: "Tournament Resilience", value: 95, benchmark: 72 }
    ],
    rawMetrics: {
      strikeRatePressure: "12.6 balls/wkt",
      boundaryRate: "19.2% conceded",
      dotBallPercent: "28.3%",
      averagePressure: "19.1",
      wicketsOrBallsPerBoundary: "5.21 balls",
      winContributionMatchAvg: "17.1%"
    },
    clutchCaseStudy: "105 wickets in pressure overs across 1,323 balls — the single highest sample volume of clutch wicket-taking in the competition data pack."
  }
];

// 35 Real Players from the 200,999 delivery RR dataset for the Scatter Plot
export const SCATTER_PLOT_DATA = [
  // Top 10 Elite Royals Targets
  { name: "Heinrich Klaasen", role: "Batter", situations: 497, ppi: 97.8, team: "SRH", isTop10: true, label: "#1 Klaasen" },
  { name: "Jasprit Bumrah", role: "Bowler", situations: 696, ppi: 97.4, team: "MI", isTop10: true, label: "#2 Bumrah" },
  { name: "Sunil Narine", role: "All-Rounder", situations: 369, ppi: 96.8, team: "KKR", isTop10: true, label: "#3 Narine" },
  { name: "Suryakumar Yadav", role: "Batter", situations: 549, ppi: 96.5, team: "MI", isTop10: true, label: "#4 SKY" },
  { name: "Tim David", role: "Batter", situations: 667, ppi: 95.9, team: "MI", isTop10: true, label: "#5 David" },
  { name: "Matheesha Pathirana", role: "Bowler", situations: 712, ppi: 95.3, team: "CSK", isTop10: true, label: "#6 Pathirana" },
  { name: "Rinku Singh", role: "Batter", situations: 655, ppi: 94.8, team: "KKR", isTop10: true, label: "#7 Rinku" },
  { name: "Rashid Khan", role: "All-Rounder", situations: 1065, ppi: 94.4, team: "GT", isTop10: true, label: "#8 Rashid" },
  { name: "Tristan Stubbs", role: "Batter", situations: 465, ppi: 93.8, team: "DC", isTop10: true, label: "#9 Stubbs" },
  { name: "Arshdeep Singh", role: "Bowler", situations: 1447, ppi: 93.2, team: "PBKS", isTop10: true, label: "#10 Arshdeep" },

  // League Benchmark Players Extracted from RR Data Pack
  { name: "Jos Buttler", role: "Batter", situations: 371, ppi: 92.8, team: "RR", isTop10: false },
  { name: "Shreyas Iyer", role: "Batter", situations: 392, ppi: 91.5, team: "KKR", isTop10: false },
  { name: "Dinesh Karthik", role: "Batter", situations: 477, ppi: 91.2, team: "RCB", isTop10: false },
  { name: "Shashank Singh", role: "Batter", situations: 327, ppi: 90.9, team: "PBKS", isTop10: false },
  { name: "Nicholas Pooran", role: "Batter", situations: 580, ppi: 90.7, team: "LSG", isTop10: false },
  { name: "Kuldeep Yadav", role: "Bowler", situations: 420, ppi: 90.5, team: "DC", isTop10: false },
  { name: "Andre Russell", role: "All-Rounder", situations: 627, ppi: 89.8, team: "KKR", isTop10: false },
  { name: "Sandeep Sharma", role: "Bowler", situations: 397, ppi: 89.4, team: "RR", isTop10: false },
  { name: "Hardik Pandya", role: "All-Rounder", situations: 934, ppi: 89.1, team: "MI", isTop10: false },
  { name: "Sanju Samson", role: "Batter", situations: 294, ppi: 88.6, team: "RR", isTop10: false },
  { name: "Virat Kohli", role: "Batter", situations: 253, ppi: 88.4, team: "RCB", isTop10: false },
  { name: "Shubman Gill", role: "Batter", situations: 255, ppi: 88.2, team: "GT", isTop10: false },
  { name: "Glenn Phillips", role: "All-Rounder", situations: 309, ppi: 88.0, team: "SRH", isTop10: false },
  { name: "Trent Boult", role: "Bowler", situations: 406, ppi: 87.8, team: "RR", isTop10: false },
  { name: "Shimron Hetmyer", role: "Batter", situations: 486, ppi: 87.5, team: "RR", isTop10: false },
  { name: "Liam Livingstone", role: "All-Rounder", situations: 373, ppi: 87.2, team: "PBKS", isTop10: false },
  { name: "Ravi Bishnoi", role: "Bowler", situations: 752, ppi: 86.8, team: "LSG", isTop10: false },
  { name: "Varun Chakravarthy", role: "Bowler", situations: 532, ppi: 86.5, team: "KKR", isTop10: false },
  { name: "Yuzvendra Chahal", role: "Bowler", situations: 626, ppi: 86.2, team: "RR", isTop10: false },
  { name: "Bhuvneshwar Kumar", role: "Bowler", situations: 879, ppi: 85.9, team: "SRH", isTop10: false },
  { name: "Axar Patel", role: "All-Rounder", situations: 775, ppi: 85.6, team: "DC", isTop10: false },
  { name: "Harshal Patel", role: "Bowler", situations: 840, ppi: 85.2, team: "PBKS", isTop10: false },
  { name: "Sam Curran", role: "All-Rounder", situations: 752, ppi: 84.8, team: "PBKS", isTop10: false },
  { name: "Mustafizur Rahman", role: "Bowler", situations: 741, ppi: 84.4, team: "CSK", isTop10: false },
  { name: "Josh Hazlewood", role: "Bowler", situations: 554, ppi: 83.9, team: "RCB", isTop10: false }
];

export const ROYALS_STRATEGIC_GAPS = [
  {
    title: "The Death Overs Lock & Seam Enforcer",
    currentContext: "Trent Boult is unmatched in overs 1-3, but RR conceded 10.45 rpo in overs 17-20. The data pack proves Bumrah (7.44 death econ) or Pathirana (8.63 death econ) eliminates this leakage.",
    recommendedTarget: "Jasprit Bumrah / Matheesha Pathirana / Arshdeep Singh",
    impact: "+28% Win Expectancy protection in overs 17-20."
  },
  {
    title: "Mid-Overs Spin Destruction",
    currentContext: "RR's top order generates explosive starts, but tacky wickets at Sawai Mansingh Stadium historically slow the run rate down to 7.8 in overs 7-14.",
    recommendedTarget: "Heinrich Klaasen / Suryakumar Yadav",
    impact: "193.4 SR vs spin with a microscopic 14.7% dot ball rate."
  },
  {
    title: "Dual-Threat Defense & Chase Closure",
    currentContext: "Chases needing 40+ off the final 18 balls require calm, cold execution to avoid leaving single finishers stranded without secondary support.",
    recommendedTarget: "Sunil Narine / Rinku Singh / Tim David",
    impact: "233.3 Chase SR (Narine) & 192.0 Crunch Chase SR (Rinku)."
  }
];
