/* # Strategic Resume Data
1. Updated Project Schema
   - Added specific marketing metrics (CTR, CPC, CPL, CVR, ENG)
   - Added `metricStory` for "How I Read This Data"
   - Added `optimization` for outcome narratives
   - Added `brandColors` for dynamic UI theming
2. Projects Included
   - Buchanan's Piña (Scotch Whisky)
   - Project Tía (Social Impact)
   - Moontuner (Digital Wellness)
   - Happy Peach Skin Co. (Grooming)
   - Quantumelodic Mastery (EdTech)
*/

export const resumeData = {
  personal: {
    firstName: "Michael",
    lastName: "Anticoli",
    name: "Michael Anticoli",
    title: "Digital Marketing Strategy • Brand Systems • Audience Engagement",
    email: "michaelanticoli@gmail.com",
    phone: "9733498750",
    location: "Los Angeles, CA, USA",
    summary: "Strategic marketer focused on digital storytelling, audience positioning, and campaign systems across web platforms and emerging AI tools.",
    linkedin: "https://www.linkedin.com/in/michael-anticoli/",
    portfolio: "https://michael-anticoli.lovable.app",
    resumeUrl: "https://media-manager-c.questera.ai/greta-media/23217cf5c3f144814b57e649be11bd1bc25de06192ee36f462debaf27b785876208945591af55e850adffcdaf997019c/documents/YXBwbGljYXRpb24vcGRm/be1e0fb7f36f7ed6c4b105191f9d5b84.pdf" 
  },
  details: [
    {
      title: "Strategic Rigor",
      description: "A disciplined approach to marketing that combines data-driven logic with creative disruption.",
      icon: "FiTarget"
    },
    {
      title: "Digital Ecosystems",
      description: "Building scalable frameworks for digital storytelling and audience engagement.",
      icon: "FiGlobe"
    },
    {
      title: "Performance Marketing",
      description: "Anchoring every campaign in analytics, social listening, and measurable performance.",
      icon: "FiBarChart2"
    },
    {
      title: "Emerging AI Tools",
      description: "Leveraging cutting-edge AI to optimize workflows and enhance creative output.",
      icon: "FiZap"
    }
  ],
  stats: [
    { label: "Social Chatter Surge", number: "300%" },
    { label: "Engagement Lift", number: "62%" },
    { label: "Sales Increase", number: "38%" }
  ],
  featuredProduct: {
    title: "Ikigai App",
    category: "Personal Innovation • Purpose-Driven UX",
    description: "A digital framework designed to help individuals find their 'reason for being' by balancing passion, mission, vocation, and profession.",
    link: "https://ikagai.netlify.app",
    metrics: ["Interactive Framework", "Minimalist UX", "Personal Growth Tool"],
    details: "The Ikigai concept is profound but often difficult to apply practically. I built this app to translate the framework into a dynamic digital experience, moving from static diagrams to an interactive exploration of self."
  },
  projects: [
    {
      id: 1,
      title: "Buchanan's Piña",
      category: "PREMIUM SPIRITS / SCOTCH WHISKY",
      description: "Bridging Cultures with Pineapple Whisky. Where Highland Craft Meets Tropical Heart.",
      objective: "Introduce a new interdisciplinary digital concept to a niche audience.",
      insight: "Culturally curious digital natives interested in music culture, storytelling, and creative technology.",
      strategy: "Narrative-driven visual and written assets designed to simplify a complex concept and create intrigue.",
      channels: ["Website landing pages", "Social discovery", "Digital communities"],
      metrics: { CTR: "4.2%", CPC: "$0.38", CPL: "$12.40", CVR: "11.3%", ENG: "6.8%" },
      metricStory: "CTR above benchmark confirmed the visual concept was landing. I tracked CPC against CPL closely — when they diverged, it signaled the traffic was qualified but the landing page needed refinement, not the ad creative itself.",
      optimization: "High-performing narrative angles expanded across additional formats while lower-performing assets were revised.",
      brandColors: {
        bg: "#0a0a06",
        accent: "#c8a84b",
        glow: "#e8c96b",
        pattern: "#c8a84b"
      }
    },
    {
      id: 2,
      title: "Project Tía",
      category: "SOCIAL IMPACT / DIAGEO",
      description: "Turning responsible drinking into an act of cultural love. Reframing harm reduction through family care.",
      objective: "Reposition responsible drinking from a punitive lecture to a culturally affirming act of family care.",
      insight: "Harm-reduction messaging was perceived as preachy. The 'Tía' archetype offered a trusted, loving entry point.",
      strategy: "Framed safety as 'Simpatía' using textile-inspired visuals and a 'Tía Cadence' sonic identity.",
      channels: ["Social media", "On-premise activations", "Influencer partners"],
      metrics: { CTR: "5.7%", CPC: "$0.21", CPL: "$8.90", CVR: "14.2%", ENG: "9.1%" },
      metricStory: "Engagement rate was the north star here. A 9.1% rate on a social impact campaign confirmed the archetype resonated. Sentiment analysis validated the shift from 'lecture' to 'love'.",
      optimization: "Adjusted language nuances based on regional pilot data before scaling national playbook.",
      brandColors: {
        bg: "#0d0608",
        accent: "#c45e7a",
        glow: "#e8789a",
        pattern: "#c45e7a"
      }
    },
    {
      id: 3,
      title: "MoonTuner",
      category: "DIGITAL WELLNESS",
      description: "Designing an Integrated Lunar Operating System. From horoscopes to phase-based living.",
      objective: "Differentiate from generic horoscope apps by positioning as a rigorous 'Integrated Lunar Operating System'.",
      insight: "Users struggle with engagement gaps between moon phases. They need accountability, not just inspiration.",
      strategy: "Created a synesthetic 'Spectral Storyworld' where visuals, sound, and haptics map to behavioral verbs.",
      channels: ["Mobile App", "Email Curriculum", "Reflection Loops"],
      metrics: { CTR: "3.9%", CPC: "$0.44", CPL: "$15.20", CVR: "8.7%", ENG: "12.4%" },
      metricStory: "Return frequency told more than CTR here. A 12.4% engagement rate meant the Spectral Storyworld was building genuine habit—the core behavioral goal.",
      optimization: "Iterated microcopy and sound levels based on qualitative feedback from abandonment gap diagnostics.",
      brandColors: {
        bg: "#060810",
        accent: "#6b7fd4",
        glow: "#9aaaf0",
        pattern: "#6b7fd4"
      }
    },
    {
      id: 4,
      title: "Happy Peach Skin Co.",
      category: "MEN'S GROOMING & WELLNESS",
      description: "Redefining Masculinity Through Buttock Care. Premium care for men who take self-care seriously.",
      objective: "Creating a new category from a taboo topic while signaling premium quality and emotional safety.",
      insight: "Male consumers curious about services faced a cultural double bind of shame and anxiety.",
      strategy: "Pairing spa codes with a disarming, fruit-forward playfulness to diffuse anxiety.",
      channels: ["Flagship Studio", "Digital Content", "Membership Program"],
      metrics: { CTR: "4.5%", CPC: "$0.42", CPL: "$18.50", CVR: "9.2%", ENG: "7.4%" },
      metricStory: "CPL was initially high due to the 'taboo' barrier. By shifting creative to focus on 'Playful Precision', we saw CVR increase by 15% in the second quarter.",
      optimization: "Expanded the 'Sunset Smooth' sensory concept into home-care product bundles based on studio feedback.",
      brandColors: {
        bg: "#0f0b0a",
        accent: "#f4a261",
        glow: "#e76f51",
        pattern: "#f4a261"
      }
    },
    {
      id: 5,
      title: "Quantumelodic Mastery",
      category: "EDTECH · ASTRO-MUSIC",
      description: "Scoring the Stars: Launching a Synesthetic Astro-Musical Course Brand.",
      objective: "Translating an abstract concept—making music from birth charts—into a clear, desirable brand.",
      insight: "Astrology fans want personalized artifacts; musicians want new generative systems. This bridges both.",
      strategy: "Treating the brand as a playable instrument across symbolic systems with 12 zodiac archetypes.",
      channels: ["Course Platform", "Social Scores", "Live Workshops"],
      metrics: { CTR: "3.2%", CPC: "$0.55", CPL: "$22.00", CVR: "6.5%", ENG: "15.0%" },
      metricStory: "High engagement (15%) compared to moderate CVR suggested the concept was intriguing but required more educational 'nurture' emails to convert.",
      optimization: "Implemented a 5-day 'Astro-Sonic' mini-course which improved CVR by 40% in the next cohort.",
      brandColors: {
        bg: "#0a060d",
        accent: "#9b5de5",
        glow: "#bdb2ff",
        pattern: "#9b5de5"
      }
    }
  ],
  skills: [
    {
      category: "Strategy & Marketing",
      items: [
        { name: "Brand Architecture", description: "Building scalable frameworks for complex global brands" },
        { name: "Market Intelligence", description: "Advanced research methodologies and trend forecasting" },
        { name: "Performance Strategy", description: "KPI-driven planning with focus on ROI and conversion" },
        { name: "Digital Storytelling", description: "Integrating across digital, social, and web platforms" }
      ]
    },
    {
      category: "Platforms & Tools",
      items: [
        "Google Analytics 4 & Data Studio",
        "Meta Ads & TikTok Business Suite",
        "Klaviyo & CRM Integration",
        "Figma & Adobe Creative Cloud",
        "AI Workflow Automation Tools"
      ]
    }
  ]
};