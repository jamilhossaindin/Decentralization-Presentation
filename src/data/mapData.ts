export interface RegionData {
  id: string;
  name: string;
  capital: string;
  path: string;
  x: number;
  y: number;
  strengths: string[];
  tagline: string;
  description: string;
  metrics: {
    jobs: number; // 0-100 level of concentration
    universities: number; // 0-100 level of concentration
    hospitals: number; // 0-100 level of concentration
    investment: number; // 0-100 level of concentration
    industrialZones: number; // 0-100 level of concentration
  };
}

export const regions: RegionData[] = [
  {
    id: "rangpur",
    name: "Rangpur",
    capital: "Rangpur City",
    path: "M 110 50 L 155 40 L 195 70 L 190 140 L 130 160 L 95 125 Z",
    x: 145,
    y: 95,
    strengths: ["Cold-storage networks", "Potato processing", "Tobacco-to-crop shift", "SME handicraft hubs"],
    tagline: "The Agricultural Powerhouse of the North",
    description: "Rangpur is a major producer of potatoes, maize, and rice. With the Teesta and Dharla rivers, it holds tremendous potential for agro-industrial growth and cold-storage logistics if power and gas infrastructures are decentralized.",
    metrics: {
      jobs: 15,
      universities: 20,
      hospitals: 15,
      investment: 10,
      industrialZones: 15
    }
  },
  {
    id: "rajshahi",
    name: "Rajshahi",
    capital: "Rajshahi City",
    path: "M 130 160 L 190 140 L 190 235 L 210 260 L 150 310 L 65 230 L 90 180 Z",
    x: 135,
    y: 225,
    strengths: ["Mango & Litchi orchards", "Silk weaving heritage", "High-capacity Agro-industry", "Education hub potential"],
    tagline: "The Clean Green Knowledge Capital",
    description: "Famous for its premium silk, high-quality mangoes, and clean atmosphere, Rajshahi boasts deep academic roots with Rajshahi University and RUET. It could easily blossom into Bangladesh's premier R&D and food-processing corridor.",
    metrics: {
      jobs: 25,
      universities: 40,
      hospitals: 25,
      investment: 20,
      industrialZones: 20
    }
  },
  {
    id: "mymensingh",
    name: "Mymensingh",
    capital: "Mymensingh City",
    path: "M 190 140 L 250 120 L 280 135 L 290 190 L 265 220 L 190 235 Z",
    x: 235,
    y: 175,
    strengths: ["Inland fisheries breeding", "Rice research advances", "Jute mills diversification", "Niche poultry feeds"],
    tagline: "The Agronomic Breeding Core",
    description: "Mymensingh sits as a bridge between the northern flatlands and the capital, serving as the research engine for nationwide aquaculture and high-yield rice development. Thriving farms make it a prime candidate for organic bio-tech processing.",
    metrics: {
      jobs: 20,
      universities: 30,
      hospitals: 20,
      investment: 15,
      industrialZones: 15
    }
  },
  {
    id: "sylhet",
    name: "Sylhet",
    capital: "Sylhet City",
    path: "M 290 190 L 340 140 L 420 155 L 415 240 L 320 250 Z",
    x: 360,
    y: 185,
    strengths: ["Global Tea estates", "Remittance-fueled startups", "Eco-tourism & wetlands", "High-potential Gas reserves"],
    tagline: "The Scenic, Rich Tea & Tourism Capital",
    description: "Blessed with extensive rolling hills, tea gardens, and rain-forest wetlands, Sylhet is uniquely funded by dynamic global remittances. With decentralized high-tech services, Sylhet can lead high-end eco-tourism and nature-safe clean tech.",
    metrics: {
      jobs: 30,
      universities: 35,
      hospitals: 30,
      investment: 45,
      industrialZones: 25
    }
  },
  {
    id: "dhaka",
    name: "Dhaka",
    capital: "Dhaka (Over-centralized)",
    path: "M 265 220 L 320 250 L 330 310 L 260 360 L 200 340 L 210 260 Z",
    x: 260,
    y: 285,
    strengths: ["Finance HQ dominance", "Apparel / RMG global engine", "Tech startup central", "Maximum healthcare access"],
    tagline: "The Hyper-Concentrated Engine",
    description: "Dhaka currently commands over 60% of nationwide formal jobs and 80% of major corporate headquarters. This overwhelming concentration has triggered unsustainable rent hikes, critical congestion, and infrastructural tipping points.",
    metrics: {
      jobs: 95,
      universities: 90,
      hospitals: 95,
      investment: 95,
      industrialZones: 85
    }
  },
  {
    id: "cumilla",
    name: "Cumilla",
    capital: "Cumilla City",
    path: "M 330 310 L 380 325 L 360 380 L 310 380 Z",
    x: 345,
    y: 345,
    strengths: ["Cross-border Trade corridors", "Textile & knitwear factories", "Vast agricultural surplus", "Highway logistics hubs"],
    tagline: "The Eastern Logistics & Trade Junction",
    description: "Strategically poised direct-center on the Dhaka-Chattogram highway, Cumilla is an ultra-dense transport and trading hub. It provides an ideal buffer to deflect massive apparel and logistic weights away from Dhaka directly.",
    metrics: {
      jobs: 45,
      universities: 35,
      hospitals: 40,
      investment: 40,
      industrialZones: 45
    }
  },
  {
    id: "khulna",
    name: "Khulna",
    capital: "Khulna City",
    path: "M 150 310 L 200 340 L 260 360 L 240 430 L 220 480 L 130 460 L 120 400 Z",
    x: 180,
    y: 395,
    strengths: ["Shrimp & Seafood exports", "Mongla Sea Port access", "Jute and paper mills restoration", "Sundarbans Eco-conservation"],
    tagline: "The Blue Economy & Coastal Port Gateway",
    description: "Bordering the majestic Sundarbans mangrove forest, Khulna is our gateway to shrimp exporters and maritime trade through Mongla Port. It holds the vital blueprint for sustainable, climate-resilient coastal industrialization.",
    metrics: {
      jobs: 35,
      universities: 45,
      hospitals: 30,
      investment: 40,
      industrialZones: 45
    }
  },
  {
    id: "barishal",
    name: "Barishal",
    capital: "Barishal City",
    path: "M 260 360 L 310 380 L 290 470 L 250 490 L 240 430 Z",
    x: 270,
    y: 430,
    strengths: ["Riverine Logistics network", "Rice milling center", "Guava floating markets", "Deep-sea fishing supply"],
    tagline: "The Floating Markets & Inland Waterways Core",
    description: "Known as the Venice of the Bengal, Barishal is a labyrinth of fertile canals, offering major grain production and intricate river transport networks. Bridge connections like Padma Bridge are now sparking heavy industrial interest.",
    metrics: {
      jobs: 15,
      universities: 25,
      hospitals: 15,
      investment: 15,
      industrialZones: 15
    }
  },
  {
    id: "chattogram",
    name: "Chattogram",
    capital: "Chattogram City",
    path: "M 380 325 L 430 310 L 450 395 L 418 550 L 380 460 L 360 380 Z",
    x: 405,
    y: 440,
    strengths: ["Main Sea Port of Bangladesh", "Heavy steel & shipbreaking", "Hill tracts natural reserves", "Industrial EPZ epicenters"],
    tagline: "The Commercial Trade & Blue Ocean Capital",
    description: "Handling 90% of Bangladesh's import-export volume, Chattogram is our industrial second engine. It offers deep-sea port facilities, mountainous nature reserves, and heavy manufacturing corridors that power the nation's GDP.",
    metrics: {
      jobs: 80,
      universities: 75,
      hospitals: 70,
      investment: 85,
      industrialZones: 90
    }
  }
];

export const connectionFlows = [
  { from: "rangpur", to: "dhaka" },
  { from: "rajshahi", to: "dhaka" },
  { from: "mymensingh", to: "dhaka" },
  { from: "sylhet", to: "dhaka" },
  { from: "khulna", to: "dhaka" },
  { from: "barishal", to: "dhaka" },
  { from: "cumilla", to: "dhaka" },
  { from: "chattogram", to: "dhaka" },
];

export const simulatedMetrics = {
  centralized: {
    dhakaPopulation: "23.5 Million",
    dhakaGrowth: "+4.2% annually",
    trafficSpeed: "4.8 km/h (avg)",
    airQuality: "192 AQI (Unhealthy)",
    regionalBrainDrain: "82% of graduates",
    gdpShare: "44%"
  },
  decentralized: {
    dhakaPopulation: "17.1 Million (STABLE)",
    dhakaGrowth: "+0.8% annually",
    trafficSpeed: "18.5 km/h",
    airQuality: "56 AQI (Moderate)",
    regionalBrainDrain: "19% of graduates",
    gdpShare: "22% (Distributed)"
  }
};
