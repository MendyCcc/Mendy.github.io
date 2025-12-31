export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  coverImage: string;
  overview: {
    background: string;
    objectives: string[];
    role: string;
    timeline: string;
    tools: string[];
    team?: string;
  };
  process: {
    stage: string;
    description: string;
    images?: string[];
  }[];
  outcome: {
    description: string;
    quote: string;
    images: string[];
  };
}

export const projects: Project[] = [
/*  {
    id: 1,
    slug: 'imagecho-frame',
    title: 'Imagecho Frame + App',
    subtitle: 'Smart frame & companion app for interactive photo storytelling',
    tags: ['UX', 'Product Design', 'IoT'],
    coverImage: 'https://images.unsplash.com/photo-1614442804207-4d864251c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHBob3RvJTIwZnJhbWV8ZW58MXx8fHwxNzYzMDEzNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: {
      background: 'Imagecho Frame reimagines how we experience and share memories in our living spaces. This smart photo frame combines physical presence with digital storytelling, creating an emotional connection between distant family members.',
      objectives: [
        'Design an intuitive companion app for photo management and curation',
        'Create seamless interaction between physical frame and digital ecosystem',
        'Enable meaningful storytelling through contextual photo displays'
      ],
      role: 'Lead UX/UI Designer',
      timeline: '6 months (2024)',
      tools: ['Figma', 'Protopie', 'After Effects', 'Arduino'],
      team: '4 designers, 2 engineers'
    },
    process: [
      {
        stage: 'Research',
        description: 'Conducted ethnographic studies with 15 families to understand photo-sharing behaviors and emotional connections. Discovered that physical displays create stronger emotional bonds than digital galleries.',
        images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800']
      },
      {
        stage: 'Ideation',
        description: 'Explored various interaction models including gesture control, voice commands, and app-based curation. Decided on a hybrid approach that balances automation with personal control.',
        images: ['https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800']
      },
      {
        stage: 'Prototyping',
        description: 'Built interactive prototypes testing different layout systems and transition effects. Iterated on the companion app\'s information architecture to minimize cognitive load.',
        images: ['https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800']
      },
      {
        stage: 'Testing',
        description: 'Conducted usability testing with 20 participants across different age groups. Refined micro-interactions and simplified the setup process based on feedback.',
      },
      {
        stage: 'Implementation',
        description: 'Collaborated with engineering team to ensure design fidelity. Created a comprehensive design system for scalable product development.',
      }
    ],
    outcome: {
      description: 'The final product seamlessly blends into home environments while providing rich, contextual storytelling. The companion app achieved a 4.6/5 rating in beta testing, with users praising its intuitive curation features.',
      quote: 'Design as a bridge between human emotion and intelligent systems.',
      images: [
        'https://images.unsplash.com/photo-1614442804207-4d864251c528?w=1200',
        'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200'
      ]
    }
  },
*/
/*
  {
    id: 2,
    slug: 'imagecho-curator',
    title: 'Imagecho Curator',
    subtitle: 'AI-powered photo management & curation experience',
    tags: ['AI/ML', 'UX', 'Product Design'],
    coverImage: 'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyOTQxNjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: {
      background: 'Imagecho Curator uses machine learning to help users manage and rediscover their photo libraries through intelligent organization and emotional storytelling.',
      objectives: [
        'Design transparent AI interactions that build user trust',
        'Create efficient photo curation workflows',
        'Enable serendipitous photo rediscovery'
      ],
      role: 'UX Designer & Researcher',
      timeline: '5 months (2024)',
      tools: ['Figma', 'Python', 'TensorFlow', 'Principle']
    },
    process: [
      {
        stage: 'Research',
        description: 'Analyzed user behaviors in photo management apps. Found that most users feel overwhelmed by their photo libraries and rarely revisit old memories.',
      },
      {
        stage: 'Ideation',
        description: 'Explored AI-assisted curation models that balance automation with user control. Focused on explainable AI to build trust.',
      },
      {
        stage: 'Prototyping',
        description: 'Created interactive prototypes testing different AI suggestion interfaces and feedback mechanisms.',
      },
      {
        stage: 'Testing',
        description: 'Tested with 25 users to refine AI transparency and control mechanisms.',
      }
    ],
    outcome: {
      description: 'The AI curator successfully reduced photo management time by 60% while increasing user engagement with old memories by 3x.',
      quote: 'Intelligent systems should augment human intention, not replace it.',
      images: ['https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?w=1200']
    }
  },
*/
  {
    id: 3,
    slug: 'Gesture to global',
    title: 'Gesture-based Interaction',
    subtitle: 'Web-based gesture recognition for cross-cultural communication',
    tags: ['Interaction Design', 'Research', 'Web'],
    coverImage: 'https://github.com/MendyCcc/Mendy.github.io/blob/main/src/assets/%20gesture%20to%20global.png?raw=true',
    overview: {
      background: 'An experimental web platform exploring how gesture-based interactions can bridge cultural and linguistic barriers in digital communication.',
      objectives: [
        'Design culturally inclusive gesture vocabularies',
        'Create responsive real-time interaction feedback',
        'Build accessible gesture recognition systems'
      ],
      role: 'Interaction Designer & Researcher',
      timeline: '4 months (2024)',
      tools: ['JavaScript', 'TensorFlow.js', 'Figma', 'WebGL']
    },
    process: [
      {
        stage: 'Research',
        description: 'Conducted cross-cultural studies on gesture meanings across 8 different cultures. Identified universal and culturally-specific gestures.',
      },
      {
        stage: 'Ideation',
        description: 'Designed a gesture vocabulary that minimizes cultural misunderstandings while maintaining expressiveness.',
      },
      {
        stage: 'Prototyping',
        description: 'Built web-based prototypes using machine learning for real-time gesture recognition.',
      },
      {
        stage: 'Testing',
        description: 'Tested with international participants to validate cultural inclusivity and technical accuracy.',
      }
    ],
    outcome: {
      description: 'The platform achieved 92% gesture recognition accuracy across diverse user groups and sparked conversations about inclusive interaction design.',
      quote: 'Gestures speak louder than words when words divide us.',
      images: ['https://cdn.dribbble.com/userupload/14058212/file/original-a25390d4f79fd42900b643a79c832435.mp4']
    }
  },
  {
    id: 4,
    slug: 'urban-rest-hub',
    title: 'Ur:base',
    subtitle: 'Public transport rest-space collaboration design for urban commuters',
    tags: ['Service Design', 'Urban Planning', 'UX'],
    coverImage: 'https://images.unsplash.com/photo-1604071255486-e82a50924cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHB1YmxpYyUyMHNwYWNlfGVufDF8fHx8MTc2MzAxMzU1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    overview: {
      background: 'A service design initiative reimagining public transport waiting areas as restful, productive micro-environments for urban commuters.',
      objectives: [
        'Design calming spaces within chaotic transit environments',
        'Create flexible modules for different transit contexts',
        'Enable productive waiting through thoughtful service touchpoints'
      ],
      role: 'Service Designer',
      timeline: '4 months (2023)',
      tools: ['Service blueprints', 'Figma', 'Physical prototyping', 'Ethnography']
    },
    process: [
      {
        stage: 'Research',
        description: 'Observed commuter behaviors at 12 transit hubs. Identified stress points and unmet needs during waiting periods.',
      },
      {
        stage: 'Ideation',
        description: 'Co-designed with commuters and transit authorities to develop service concepts that balance public good with operational constraints.',
      },
      {
        stage: 'Prototyping',
        description: 'Built 1:1 scale mockups and tested in real transit environments. Iterated on materials, acoustics, and digital touchpoints.',
      },
      {
        stage: 'Implementation',
        description: 'Piloted in 3 stations with ongoing monitoring and refinement based on usage patterns.',
      }
    ],
    outcome: {
      description: 'The pilot installations saw 78% positive feedback and 40% increase in perceived waiting comfort. Now being considered for city-wide rollout.',
      quote: 'Public space design is an act of civic care.',
      images: ['https://images.unsplash.com/photo-1604071255486-e82a50924cf1?w=1200']
    }
  },
  {
    id: 5,
    slug: 'food-waste-awareness',
    title: 'Food Waste Awareness',
    subtitle: 'Service design system reducing household food waste',
    tags: ['Service Design', 'Sustainability', 'Behavioral Design'],
    coverImage: 'https://images.unsplash.com/photo-1635527643921-ce2b9bbd5728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwd2FzdGUlMjBraXRjaGVufGVufDF8fHx8MTc2MzAxMjAzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    overview: {
      background: 'A comprehensive service design system addressing household food waste through awareness, planning tools, and behavioral interventions.',
      objectives: [
        'Design non-judgmental awareness interventions',
        'Create practical planning and tracking tools',
        'Build sustainable behavioral change through positive reinforcement'
      ],
      role: 'Lead Service Designer',
      timeline: '8 months (2020-2021)',
      tools: ['Service design toolkit', 'Figma', 'Mobile prototyping', 'Data analytics']
    },
    process: [
      {
        stage: 'Research',
        description: 'Conducted diary studies with 30 households to understand food purchasing, storage, and disposal patterns. Identified key intervention moments.',
      },
      {
        stage: 'Ideation',
        description: 'Designed service touchpoints across the food lifecycle: purchasing, storing, consuming, and disposing.',
      },
      {
        stage: 'Prototyping',
        description: 'Tested interventions including smart labels, meal planning apps, and community sharing platforms.',
      },
      {
        stage: 'Testing',
        description: 'Ran 3-month pilot with 50 households measuring waste reduction and behavior change.',
      }
    ],
    outcome: {
      description: 'Pilot participants reduced food waste by an average of 35% and reported increased mindfulness around food consumption.',
      quote: 'Small daily choices compound into systemic change.',
      images: ['https://images.unsplash.com/photo-1635527643921-ce2b9bbd5728?w=1200']
    }
  },
  {
    id: 6,
    slug: 'shared-umbrella',
    title: 'Buddy',
    subtitle: 'Shared Umbrella: Sustainable shared umbrella system',
    tags: ['Product Design', 'Service Design', 'Sustainability'],
    coverImage: 'https://images.unsplash.com/photo-1663590961701-d00b0bc85f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bWJyZWxsYSUyMHJhaW4lMjBtaW5pbWFsfGVufDF8fHx8MTc2MzAxMzU1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    overview: {
      background: 'My undergraduate thesis project exploring sharing economy principles applied to urban umbrella usage. Designed to reduce waste and improve urban mobility during unexpected rain.',
      objectives: [
        'Design sustainable product-service system',
        'Create seamless user experience for borrowing and returning',
        'Balance business viability with environmental impact'
      ],
      role: 'Product & Service Designer',
      timeline: '1 year (2018-2019)',
      tools: ['SolidWorks', 'Figma', 'Service blueprints', 'Physical prototyping']
    },
    process: [
      {
        stage: 'Research',
        description: 'Studied existing sharing systems and umbrella usage patterns in urban environments. Identified pain points in current solutions.',
      },
      {
        stage: 'Ideation',
        description: 'Designed integrated system including umbrella product design, rental stations, mobile app, and reverse logistics.',
      },
      {
        stage: 'Prototyping',
        description: 'Created functional prototypes of both the umbrella and station. Tested durability and user experience.',
      },
      {
        stage: 'Testing',
        description: 'Piloted on university campus with 200 users over 2 months. Gathered data on usage patterns and user satisfaction.',
      }
    ],
    outcome: {
      description: 'The system achieved 85% return rate and positive environmental impact assessment. Thesis received honors and interest from sharing economy startups.',
      quote: 'Shared resources build shared responsibility.',
      images: ['https://images.unsplash.com/photo-1663590961701-d00b0bc85f4d?w=1200']
    }
  }
];
