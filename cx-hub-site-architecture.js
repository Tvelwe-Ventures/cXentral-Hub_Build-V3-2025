// cXentral Hub Website Architecture
// React-based component structure with modular design patterns

// Core UI Components Structure
const cXentralHubUIComponents = {
  // Base UI Elements
  atoms: {
    Button: {
      variants: ['primary', 'secondary', 'tertiary', 'ghost'],
      sizes: ['sm', 'md', 'lg'],
      states: ['default', 'hover', 'active', 'disabled'],
    },
    Card: {
      variants: ['elevation', 'outlined', 'filled'],
      sizes: ['sm', 'md', 'lg'],
    },
    Typography: {
      variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'caption', 'button'],
    },
    Icon: {
      types: ['system', 'marketplace', 'vendor', 'development']
    },
    // Other atomic components...
  },

  // Combined Elements
  molecules: {
    AppCard: {
      // For marketplace applications
      composition: ['Card', 'Typography', 'Icon', 'Button'],
      props: ['appName', 'description', 'vendor', 'category', 'rating', 'installHandler']
    },
    VendorIntegrationCard: {
      // For vendor ecosystem display
      composition: ['Card', 'Typography', 'Icon', 'Button'],
      props: ['vendorName', 'integrationPoints', 'featuresEnabled', 'setupComplexity']
    },
    FeatureHighlight: {
      composition: ['Card', 'Typography', 'Icon', 'Button'],
      props: ['title', 'description', 'icon', 'ctaText', 'ctaHandler']
    },
    // Other molecular components...
  },

  // Page Sections
  organisms: {
    Hero: {
      composition: ['Typography', 'Button', 'AnimatedIllustration'],
      variants: ['home', 'platform', 'marketplace', 'developer']
    },
    PlatformPillarsSection: {
      composition: ['Typography', 'FeatureHighlight', 'TabPanel'],
      props: ['activeTab', 'pillarData']
    },
    MarketplaceGrid: {
      composition: ['AppCard', 'SearchFilter', 'Pagination'],
      props: ['apps', 'filters', 'sortOptions', 'onFilterChange']
    },
    VendorEcosystemDisplay: {
      composition: ['VendorIntegrationCard', 'SearchFilter', 'Categorization'],
      props: ['vendors', 'categories', 'onCategorySelect']
    },
    // Other page section components...
  },

  // Full Pages
  templates: {
    HomePage: {
      sections: ['Hero', 'PlatformPillarsSection', 'TestimonialSlider', 'CTASection']
    },
    PlatformPage: {
      sections: ['Hero', 'TabSection', 'FeatureComparisonTable', 'CTASection']
    },
    MarketplacePage: {
      sections: ['Hero', 'MarketplaceGrid', 'CategoryNavigation', 'PopularAppsSection']
    },
    VendorEcosystemPage: {
      sections: ['Hero', 'VendorEcosystemDisplay', 'IntegrationShowcase', 'PartnerCTA']
    },
    DeveloperPortalPage: {
      sections: ['Hero', 'APIDocumentation', 'SDKDownloadSection', 'SampleCodeSection', 'CommunityForumHighlights']
    },
    // Other page templates...
  }
};

// Interactive Components for Platform Demonstration
class PlatformDemoComponents {
  constructor() {
    this.demoState = {
      selectedVendors: [],
      selectedApps: [],
      configuredWorkflows: [],
      activeScenario: null
    };
  }

  // Composable platform demo that allows visitors to "build" a solution
  renderComposablePlatformBuilder() {
    return {
      component: 'ComposablePlatformBuilder',
      props: {
        availableVendors: VENDOR_DATA,
        availableApps: APP_DATA,
        workflowTemplates: WORKFLOW_TEMPLATES,
        onSolutionBuild: this.handleSolutionPreview,
        state: this.demoState
      }
    };
  }

  // Interactive API playground for developers
  renderAPIDemoPlayground() {
    return {
      component: 'APIDemoPlayground',
      props: {
        endpoints: API_ENDPOINTS,
        sampleRequests: SAMPLE_REQUESTS,
        responses: SAMPLE_RESPONSES,
        onRequestSubmit: this.handleAPIRequest
      }
    };
  }

  // Vendor integration simulator
  renderVendorIntegrationSimulator() {
    return {
      component: 'VendorIntegrationSimulator',
      props: {
        vendorA: {name: 'Salesforce', data: SALESFORCE_SIMULATOR_DATA},
        vendorB: {name: 'ServiceNow', data: SERVICENOW_SIMULATOR_DATA},
        integrationPoints: INTEGRATION_POINTS,
        onIntegrationSelect: this.handleIntegrationSelect
      }
    };
  }

  // Customer journey visualizer
  renderCustomerJourneyVisualizer() {
    return {
      component: 'CustomerJourneyVisualizer',
      props: {
        journeySteps: JOURNEY_STEPS,
        touchpoints: TOUCHPOINT_DATA,
        channelOptions: CHANNEL_OPTIONS,
        onJourneyBuild: this.handleJourneyPreview
      }
    };
  }
}

// Data layer for website content
const contentStructure = {
  // Platform pillar data
  platformPillars: [
    {
      id: 'applications',
      title: 'Applications for Engagement',
      description: 'Enhance engagement across digital, voice, AI and more channels',
      features: [
        {id: 'digital', name: 'Digital Engagement', description: '...'},
        {id: 'voice', name: 'Voice Services', description: '...'},
        // More features
      ],
      caseStudies: [/* Case study data */],
      ctaText: 'Explore Applications'
    },
    // Other pillars similarly structured
  ],

  // Vendor ecosystem data
  vendorEcosystem: [
    {
      id: 'salesforce',
      name: 'Salesforce',
      logo: '/images/vendors/salesforce.svg',
      description: 'Leading CRM solutions for managing customer relations',
      integrationPoints: ['data', 'ui', 'workflow', 'authentication'],
      popularUses: ['Lead management', 'Customer 360', 'Ticket syncing']
    },
    // Other vendors
  ],

  // Sample apps for marketplace
  marketplaceApps: [
    {
      id: 'chatbot-builder',
      name: 'Intelligent Chatbot Builder',
      vendor: 'cXentral',
      category: 'AI',
      description: 'Build, deploy and manage conversational AI across channels',
      rating: 4.7,
      reviews: 128,
      icon: '/images/apps/chatbot-builder.svg'
    },
    // Other apps
  ],

  // Developer resources
  developerResources: {
    gettingStarted: [/* Getting started guides */],
    apiDocs: [/* API documentation */],
    sdks: [/* SDK information */],
    sampleCode: [/* Code samples */],
    tutorials: [/* Tutorial content */]
  }
};

// Site navigation structure
const navigationStructure = [
  {
    label: 'Platform',
    children: [
      {label: 'Applications for Engagement', path: '/platform/applications'},
      {label: 'App Marketplace', path: '/platform/marketplace'},
      {label: 'Vendor Ecosystem', path: '/platform/ecosystem'},
      {label: 'Development Platform', path: '/platform/development'}
    ]
  },
  {
    label: 'Solutions',
    children: [
      {label: 'By Industry', path: '/solutions/industries'},
      {label: 'By Use Case', path: '/solutions/use-cases'},
      {label: 'Customer Stories', path: '/solutions/customer-stories'}
    ]
  },
  {
    label: 'Resources',
    children: [
      {label: 'Documentation', path: '/resources/docs'},
      {label: 'Developer Portal', path: '/resources/developer'},
      {label: 'Community', path: '/resources/community'},
      {label: 'Blog', path: '/resources/blog'}
    ]
  },
  {label: 'About', path: '/about'},
  {label: 'Contact', path: '/contact'}
];

// Export structures for implementation
export {
  cXentralHubUIComponents,
  PlatformDemoComponents,
  contentStructure,
  navigationStructure
};
