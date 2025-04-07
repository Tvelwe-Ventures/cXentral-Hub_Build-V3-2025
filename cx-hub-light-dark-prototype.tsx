import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Sun, Moon, MoreHorizontal } from 'lucide-react';

const CXentralHubPrototype = () => {
  const [activeTab, setActiveTab] = useState('applications');
  const [highlightedCard, setHighlightedCard] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Animation for hero section
  const [showHeroElements, setShowHeroElements] = useState(false);
  
  useEffect(() => {
    setShowHeroElements(true);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('cxentralTheme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check for system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('cxentralTheme', newTheme ? 'dark' : 'light');
  };
  
  // Theme colors
  const theme = {
    bg: isDarkMode ? 'bg-[#0D0D15]' : 'bg-gray-50',
    navBg: isDarkMode ? 'bg-[#0D0D15] bg-opacity-95' : 'bg-white bg-opacity-95',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    mutedText: isDarkMode ? 'text-gray-400' : 'text-gray-600',
    cardBg: isDarkMode ? 'bg-[#1A1A24]' : 'bg-white',
    cardHoverBg: isDarkMode ? 'hover:bg-[#252532]' : 'hover:bg-gray-50',
    featureCardBg: isDarkMode ? 'bg-[#252532]' : 'bg-white',
    border: isDarkMode ? 'border-gray-800' : 'border-gray-200',
    codeBg: isDarkMode ? 'bg-[#252532]' : 'bg-gray-100',
    accent: 'text-[#2358E9]',
    accentBg: 'bg-[#2358E9]',
    accentHoverBg: 'hover:bg-[#1A46CC]',
    statsCardBg: isDarkMode ? 'bg-[#1A1A24]' : 'bg-white',
    ctaSectionBg: isDarkMode ? 'bg-[#1A1A24]' : 'bg-gray-100',
    footerBg: isDarkMode ? 'bg-[#0D0D15]' : 'bg-gray-50',
    navLinkColor: isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900',
    iconBg: isDarkMode ? 'bg-blue-900 bg-opacity-20' : 'bg-blue-100'
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-300`}>
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${theme.navBg} backdrop-blur-sm border-b ${theme.border} transition-colors duration-300`}>
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center">
            <span className="text-xl font-semibold">cXentral<span className="text-[#2358E9]">Hub</span></span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className={theme.navLinkColor}>Platform</a>
            <a href="#" className={theme.navLinkColor}>Solutions</a>
            <a href="#" className={theme.navLinkColor}>Resources</a>
            <a href="#" className={theme.navLinkColor}>About</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`rounded-full p-2 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`${theme.accentBg} px-6 py-2 rounded-full text-white text-sm font-medium ${theme.accentHoverBg} transition-colors`}>
              Start Free
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Background circles */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 transition-opacity duration-300">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[400px] h-[400px] border border-[#2358E9] opacity-5"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[600px] h-[600px] border border-[#2358E9] opacity-[0.03]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[800px] h-[800px] border border-[#2358E9] opacity-[0.02]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ease-out ${showHeroElements ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              The Composable <span className="text-[#2358E9]">Experience</span> Platform
            </h1>
            
            <p className={`${theme.mutedText} text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-200 ease-out ${showHeroElements ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              Orchestrate customer and employee experiences with unmatched flexibility. Build with composable services, integrate with any vendor, adapt at speed.
            </p>
            
            <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-400 ease-out ${showHeroElements ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              <button className={`${theme.accentBg} px-8 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2 ${theme.accentHoverBg} transition-colors`}>
                Get Started <ChevronRight size={18} />
              </button>
              <button className={`border ${theme.border} px-8 py-3 rounded-full font-medium ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}>
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className={`py-10 border-t ${theme.border} ${isDarkMode ? 'bg-[#0A0A14]' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} text-sm text-center mb-8`}>TRUSTED BY INDUSTRY LEADERS</p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Salesforce', 'Microsoft', 'AWS', 'Google', 'Adobe', 'ServiceNow', 'Zendesk', 'IBM'].map((partner) => (
              <div 
                key={partner} 
                className={`w-24 h-12 ${isDarkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-200 bg-opacity-50'} rounded flex items-center justify-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs transition-colors duration-300`}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Platform Pillars */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Pillars</h2>
            <p className={`${theme.mutedText} text-lg mb-10`}>Four composable layers working together to create seamless experiences.</p>
          </div>
          
          {/* Tabs */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex min-w-max">
              {['applications', 'marketplace', 'ecosystem', 'development'].map((tab) => (
                <button
                  key={tab}
                  className={`px-8 py-4 text-center min-w-[180px] transition-colors rounded-t-lg ${
                    activeTab === tab 
                    ? `${theme.accentBg} text-white` 
                    : `${isDarkMode ? 'bg-[#1A1A24]' : 'bg-gray-100'} ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-${isDarkMode ? 'white' : 'gray-900'}`
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className={`${theme.cardBg} rounded-lg p-8 md:p-10 shadow-sm border ${theme.border} transition-colors duration-300`}>
            {activeTab === 'applications' && (
              <div>
                <h3 className="text-2xl font-bold mb-3">Applications for Engagement</h3>
                <p className={`${theme.mutedText} mb-8 max-w-3xl`}>
                  Connect and engage customers and employees across channels with AI-powered applications designed for seamless experiences.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      id: 'digital',
                      title: 'Digital Channels',
                      description: 'Web, mobile, messaging, and social engagement.',
                      icon: '📱'
                    },
                    {
                      id: 'voice',
                      title: 'Voice Services',
                      description: 'Intelligent routing, voice bots, and omnichannel voice.',
                      icon: '🔊'
                    },
                    {
                      id: 'ai',
                      title: 'AI Capabilities',
                      description: 'Agent copilot, predictive routing, and knowledge automation.',
                      icon: '🧠'
                    },
                    {
                      id: 'wem',
                      title: 'Workforce Engagement',
                      description: 'Scheduling, forecasting, quality management, and coaching.',
                      icon: '👥'
                    },
                    {
                      id: 'self',
                      title: 'Self-Service',
                      description: 'Knowledge base, chatbots, and automated workflows.',
                      icon: '🤖'
                    },
                    {
                      id: 'analytics',
                      title: 'Analytics',
                      description: 'Dashboards, reports, and predictive insights.',
                      icon: '📊'
                    }
                  ].map((feature) => (
                    <div 
                      key={feature.id}
                      className={`${theme.featureCardBg} p-6 rounded-lg cursor-pointer transition-all hover:transform hover:-translate-y-1 ${
                        highlightedCard === feature.id ? 'border-2 border-[#2358E9]' : `border ${theme.border}`
                      } shadow-sm transition-colors duration-300`}
                      onMouseEnter={() => setHighlightedCard(feature.id)}
                      onMouseLeave={() => setHighlightedCard(null)}
                    >
                      <div className={`w-12 h-12 ${theme.iconBg} rounded-full flex items-center justify-center mb-4 transition-colors duration-300`}>
                        <span className="text-xl">{feature.icon}</span>
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                      <p className={`${theme.mutedText} mb-4`}>{feature.description}</p>
                      <button className="text-[#2358E9] font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        Learn more <ArrowRight size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'marketplace' && (
              <div>
                <h3 className="text-2xl font-bold mb-3">App Marketplace</h3>
                <p className={`${theme.mutedText} mb-8 max-w-3xl`}>
                  Extend your platform with 600+ pre-built apps, integrations, and solutions to deliver any experience your customers need.
                </p>
                
                {/* Marketplace content would go here */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((app) => (
                    <div 
                      key={app}
                      className={`${theme.featureCardBg} p-6 rounded-lg cursor-pointer transition-all hover:transform hover:-translate-y-1 border ${theme.border} shadow-sm transition-colors duration-300`}
                    >
                      <div className={`w-12 h-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg mb-4 transition-colors duration-300`}></div>
                      <h4 className="text-xl font-semibold mb-2">App Example {app}</h4>
                      <p className={`${theme.mutedText} mb-4`}>Description of app functionality and benefits.</p>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} text-sm`}>4.9 (120)</span>
                      </div>
                      <button className="text-[#2358E9] font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        View details <ArrowRight size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'ecosystem' && (
              <div>
                <h3 className="text-2xl font-bold mb-3">Vendor Ecosystem</h3>
                <p className={`${theme.mutedText} mb-8 max-w-3xl`}>
                  Seamlessly integrate with your existing tools and systems. No vendor lock-in, ever.
                </p>
                
                {/* Ecosystem content would go here */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: 'Salesforce', description: 'CRM and customer engagement' },
                    { name: 'Microsoft', description: 'Teams, Dynamics, and Azure' },
                    { name: 'AWS', description: 'Cloud infrastructure and services' },
                    { name: 'Google', description: 'Workspace and Cloud Platform' },
                    { name: 'ServiceNow', description: 'Service management and workflows' },
                    { name: 'Zendesk', description: 'Customer service and engagement' }
                  ].map((vendor) => (
                    <div 
                      key={vendor.name}
                      className={`${theme.featureCardBg} p-6 rounded-lg cursor-pointer transition-all hover:transform hover:-translate-y-1 border ${theme.border} shadow-sm transition-colors duration-300`}
                    >
                      <div className={`w-16 h-16 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full mb-6 mx-auto transition-colors duration-300`}></div>
                      <h4 className="text-xl font-semibold mb-2 text-center">{vendor.name}</h4>
                      <p className={`${theme.mutedText} mb-4 text-center`}>{vendor.description}</p>
                      <button className="text-[#2358E9] font-medium flex items-center justify-center gap-1 w-full hover:gap-2 transition-all">
                        See integrations <ArrowRight size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'development' && (
              <div>
                <h3 className="text-2xl font-bold mb-3">Development Platform</h3>
                <p className={`${theme.mutedText} mb-8 max-w-3xl`}>
                  Build, extend, and customize with powerful APIs, SDKs, and developer tools.
                </p>
                
                {/* Code snippet */}
                <div className={`${theme.codeBg} rounded-lg p-6 mb-8 overflow-x-auto transition-colors duration-300`}>
                  <pre className="text-sm font-mono">
                    <span className={isDarkMode ? "text-gray-500" : "text-gray-400"}>// Initialize connection to cXentral Hub API</span>
                    <br />
                    <span className={isDarkMode ? "text-yellow-300" : "text-yellow-600"}>const</span>
                    <span className={isDarkMode ? "text-blue-300" : "text-blue-600"}> cXentralClient = </span>
                    <span className={isDarkMode ? "text-purple-300" : "text-purple-600"}>new</span>
                    <span className={isDarkMode ? "text-blue-300" : "text-blue-600"}> CXentralClient(</span>
                    <span className={isDarkMode ? "text-blue-100" : "text-blue-800"}>{'{'}</span>
                    <br />
                    <span className={isDarkMode ? "text-blue-100" : "text-blue-800"}>  apiKey: </span>
                    <span className={isDarkMode ? "text-green-300" : "text-green-600"}>'your_api_key'</span>
                    <span className={isDarkMode ? "text-white" : "text-black"}>,</span>
                    <br />
                    <span className={isDarkMode ? "text-blue-100" : "text-blue-800"}>  environment: </span>
                    <span className={isDarkMode ? "text-green-300" : "text-green-600"}>'production'</span>
                    <br />
                    <span className={isDarkMode ? "text-blue-100" : "text-blue-800"}>{'}'}</span>
                    <span className={isDarkMode ? "text-white" : "text-black"}>);</span>
                    <br /><br />
                    <span className={isDarkMode ? "text-gray-500" : "text-gray-400"}>// Create a composable workflow</span>
                    <br />
                    <span className={isDarkMode ? "text-yellow-300" : "text-yellow-600"}>const</span>
                    <span className={isDarkMode ? "text-blue-300" : "text-blue-600"}> workflow = </span>
                    <span className={isDarkMode ? "text-purple-300" : "text-purple-600"}>await</span>
                    <span className={isDarkMode ? "text-blue-300" : "text-blue-600"}> cXentralClient.workflows.create(</span>
                    <span className={isDarkMode ? "text-blue-100" : "text-blue-800"}>{'{'}</span>
                    <br />
                    <span className={isDarkMode ? "text-blue-100" : "text-blue-800"}>  name: </span>
                    <span className={isDarkMode ? "text-green-300" : "text-green-600"}>'Customer Support Routing'</span>
                    <span className={isDarkMode ? "text-white" : "text-black"}>,</span>
                    <br />
                    <span className={isDarkMode ? "text-blue-100" : "text-blue-800"}>  triggers: [</span>
                    <span className={isDarkMode ? "text-blue-300" : "text-blue-600"}>{'{'}</span>
                    <span className={isDarkMode ? "text-blue-100" : "text-blue-800"}> type: </span>
                    <span className={isDarkMode ? "text-green-300" : "text-green-600"}>'inbound_message'</span>
                    <span className={isDarkMode ? "text-blue-300" : "text-blue-600"}> {'}'}</span>
                    <span className={isDarkMode ? "text-blue-100" : "text-blue-800"}>]</span>
                    <span className={isDarkMode ? "text-white" : "text-black"}>,</span>
                    <br />
                    <span className={isDarkMode ? "text-blue-100" : "text-blue-800"}>  actions: [</span>
                    <span className={isDarkMode ? "text-green-300" : "text-green-600"}>/* Define workflow steps */</span>
                    <span className={isDarkMode ? "text-blue-100" : "text-blue-800"}>]</span>
                    <br />
                    <span className={isDarkMode ? "text-blue-100" : "text-blue-800"}>{'}'}</span>
                    <span className={isDarkMode ? "text-white" : "text-black"}>);</span>
                  </pre>
                </div>
                
                <div className="flex flex-wrap gap-6">
                  {['APIs', 'SDKs', 'Webhooks', 'Templates', 'Documentation'].map((resource) => (
                    <div 
                      key={resource} 
                      className={`${theme.featureCardBg} p-5 rounded-lg cursor-pointer border ${theme.border} flex items-center gap-3 shadow-sm transition-colors duration-300`}
                    >
                      <div className={`w-8 h-8 ${theme.iconBg} rounded-md flex items-center justify-center transition-colors duration-300`}>
                        <span className="text-blue-400 text-lg">◆</span>
                      </div>
                      <span>{resource}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gradient-to-b from-[#0D0D15] to-[#0A0A12]' : 'bg-gradient-to-b from-gray-50 to-white'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The platform advantage</h2>
            <p className={`${theme.mutedText} text-lg`}>Combining composability, integration capabilities, and developer flexibility into one unified platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${theme.statsCardBg} p-8 rounded-lg border ${theme.border} shadow-sm transition-colors duration-300`}>
              <h3 className="text-4xl font-bold text-[#2358E9] mb-3">4x</h3>
              <h4 className="text-xl font-medium mb-2">Faster Innovation</h4>
              <p className={theme.mutedText}>Build and deploy new experiences in days, not months.</p>
            </div>
            
            <div className={`${theme.statsCardBg} p-8 rounded-lg border ${theme.border} shadow-sm transition-colors duration-300`}>
              <h3 className="text-4xl font-bold text-[#2358E9] mb-3">600+</h3>
              <h4 className="text-xl font-medium mb-2">Marketplace Apps</h4>
              <p className={theme.mutedText}>Extend your platform with pre-built solutions.</p>
            </div>
            
            <div className={`${theme.statsCardBg} p-8 rounded-lg border ${theme.border} shadow-sm transition-colors duration-300`}>
              <h3 className="text-4xl font-bold text-[#2358E9] mb-3">1000+</h3>
              <h4 className="text-xl font-medium mb-2">APIs & Services</h4>
              <p className={theme.mutedText}>Unlimited customization and integration possibilities.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Control Your Platform Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Control your platform.
              <br />
              <span className="text-[#2358E9]">Own your experience.</span>
            </h2>
            <p className={`${theme.mutedText} text-lg`}>
              Fine-tune every aspect of your customer and employee experience with complete control over your platform. No vendor lock-in means you decide what's best for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className={`${theme.cardBg} p-6 rounded-lg mb-8 shadow-sm border ${theme.border} transition-colors duration-300`}>
                <pre className={`text-sm font-mono whitespace-pre-wrap ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>cxentral</span> <span className={isDarkMode ? 'text-blue-300' : 'text-blue-600'}>workflow:create --name=customer_journey --template=support</span>
                  <br /><br />
                  <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}># Output:</span>
                  <br />
                  <span className={isDarkMode ? 'text-green-300' : 'text-green-600'}>✓ Workflow created successfully</span>
                  <br />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>ID: wf_38fde91a</span>
                  <br />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Status: active</span>
                </pre>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className={`${theme.featureCardBg} p-5 rounded-lg border ${theme.border} shadow-sm transition-colors duration-300`}>
                  <h4 className="font-semibold mb-2">Low-Code Builder</h4>
                  <p className={`${theme.mutedText} text-sm`}>Visual workflow editor for business users.</p>
                </div>
                <div className={`${theme.featureCardBg} p-5 rounded-lg border ${theme.border} shadow-sm transition-colors duration-300`}>
                  <h4 className="font-semibold mb-2">Pro-Code APIs</h4>
                  <p className={`${theme.mutedText} text-sm`}>Complete developer control when needed.</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className={`${theme.featureCardBg} p-6 rounded-lg h-full flex flex-col shadow-sm border ${theme.border} transition-colors duration-300`}>
                <h3 className="text-xl font-semibold mb-4">Complete Platform Control</h3>
                <ul className="space-y-4 mb-6 flex-grow">
                  {[
                    'Design and build your own unique experiences',
                    'Choose which vendors to integrate with',
                    'Switch providers without losing data or disrupting experiences',
                    'Future-proof your CX architecture with composable design',
                    'Scale individual components as needed',
                    'Pay only for what you use'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#2358E9] bg-opacity-20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-[#2358E9] text-xs">✓</span>
                      </div>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className={`${theme.accentBg} px-6 py-3 rounded-lg text-white font-medium self-start ${theme.accentHoverBg} transition-colors`}>
                  Start Building Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={`py-20 ${theme.ctaSectionBg} transition-colors duration-300`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button className={`${theme.accentBg} px-8 py-3 rounded-full text-white font-medium flex-grow ${theme.accentHoverBg} transition-colors`}>
              Start Free Trial
            </button>
            <button className={`border ${theme.border} px-8 py-3 rounded-full font-medium flex-grow ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}>
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={`${theme.footerBg} py-12 border-t ${theme.border} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div>
              <h5 className="font-semibold mb-4">Platform</h5>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Applications</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Marketplace</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Ecosystem</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Development</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Solutions</h5>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>By Industry</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>By Use Case</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Customer Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Documentation</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Developer Portal</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Community</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>About</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Careers</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Contact</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Privacy</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Terms</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className={`mt-12 pt-8 border-t ${theme.border} flex flex-col md:flex-row justify-between items-center`}>
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-semibold">cXentral<span className="text-[#2358E9]">Hub</span></span>
            </div>
            
            <div className="flex space-x-6">
              {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map((social) => (
                <a key={social} href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  {social}
                </a>
              ))}
            </div>
            
            <div className={`mt-4 md:mt-0 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} text-sm`}>
              © 2023 cXentral Hub. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CXentralHubPrototype;
