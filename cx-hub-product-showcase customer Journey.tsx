import React, { useState } from 'react';
import { ChevronRight, ArrowRight, X, Check, Play, Pause, Settings, Edit, Users, PhoneCall, MessageSquare, Bell, RefreshCw, Send } from 'lucide-react';

const ProductShowcaseDemo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentShowcase, setCurrentShowcase] = useState('orchestration');
  
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  const theme = {
    bg: isDarkMode ? 'bg-[#0D0D15]' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    mutedText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    subheading: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    cardBg: isDarkMode ? 'bg-[#1A1A24]' : 'bg-white',
    border: isDarkMode ? 'border-gray-800' : 'border-gray-200',
    shadow: isDarkMode ? 'shadow-none' : 'shadow-sm',
    accent: 'text-[#2358E9]',
    accentBg: 'bg-[#2358E9]',
    accentBorder: 'border-[#2358E9]',
    accentLight: isDarkMode ? 'bg-[#2358E9]/10' : 'bg-[#2358E9]/5'
  };
  
  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-300`}>
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
        >
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>
      
      {/* Showcase Navigation */}
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {[
            { id: 'orchestration', name: 'Journey Orchestration' },
            { id: 'integration', name: 'Vendor Integration' },
            { id: 'workflow', name: 'Workflow Builder' },
            { id: 'dataflow', name: 'Real-time Data Flow' }
          ].map(item => (
            <button
              key={item.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                currentShowcase === item.id 
                  ? `${theme.accentBg} text-white` 
                  : `border ${theme.border} ${theme.text}`
              }`}
              onClick={() => setCurrentShowcase(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      
      {currentShowcase === 'orchestration' && (
        <JourneyOrchestrationShowcase theme={theme} />
      )}
      
      {currentShowcase === 'integration' && (
        <VendorIntegrationShowcase theme={theme} />
      )}
      
      {currentShowcase === 'workflow' && (
        <WorkflowBuilderShowcase theme={theme} />
      )}
      
      {currentShowcase === 'dataflow' && (
        <DataFlowShowcase theme={theme} />
      )}
    </div>
  );
};

// Journey Orchestration Showcase
const JourneyOrchestrationShowcase = ({ theme }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">One view of every customer journey</h2>
        <p className={`${theme.subheading} text-lg max-w-2xl mx-auto`}>
          Connect fragmented touchpoints into seamless journeys. Visualize, analyze, and optimize every step of the customer experience.
        </p>
      </div>
      
      {/* Main Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
        {/* Left Panel - Journey Map */}
        <div className={`col-span-1 lg:col-span-2 ${theme.cardBg} border ${theme.border} rounded-xl ${theme.shadow} p-5 flex flex-col`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Customer Journey Map</h3>
            <div className="flex space-x-2">
              <button className={`p-1 rounded ${theme.accentLight}`}>
                <Settings size={16} />
              </button>
              <button className={`p-1 rounded ${theme.accentLight}`}>
                <Edit size={16} />
              </button>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="relative mt-5 mb-4">
            <div className={`absolute left-3 top-0 bottom-0 w-0.5 ${theme.accentBg} bg-opacity-30`}></div>
            
            {/* Journey Stages */}
            {['Awareness', 'Consideration', 'Purchase', 'Onboarding', 'Retention'].map((stage, index) => (
              <div key={stage} className="flex items-start mb-8 relative">
                <div className={`w-6 h-6 rounded-full ${theme.accentBg} flex items-center justify-center flex-shrink-0 z-10`}>
                  <span className="text-white text-xs">{index + 1}</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">{stage}</h4>
                  <div className={`mt-2 text-sm ${theme.mutedText}`}>
                    {stage === 'Awareness' && 'Social media, search, ads'}
                    {stage === 'Consideration' && 'Website, chatbot, email'}
                    {stage === 'Purchase' && 'Checkout, payment confirmation'}
                    {stage === 'Onboarding' && 'Tutorial, knowledge base'}
                    {stage === 'Retention' && 'Support, loyalty program'}
                  </div>
                  <div className="flex mt-2 space-x-2">
                    {['Website', 'Mobile', 'Email', 'Phone'].slice(0, 3 - index % 2).map(channel => (
                      <span key={channel} className={`px-2 py-0.5 text-xs rounded ${theme.accentLight} ${theme.accent}`}>
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Center Panel - Journey Visualization */}
        <div className={`col-span-1 lg:col-span-3 ${theme.cardBg} border ${theme.border} rounded-xl ${theme.shadow} p-5 flex flex-col`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Journey Analytics</h3>
            <div className="flex items-center space-x-3">
              <span className={`text-sm ${theme.mutedText}`}>Last 30 days</span>
              <div className={`p-1 rounded ${theme.accentLight}`}>
                <RefreshCw size={16} className={theme.accent} />
              </div>
            </div>
          </div>
          
          {/* Journey Flow Visualization */}
          <div className="flex-grow pt-4">
            <svg width="100%" height="320" className="overflow-visible">
              {/* Stage Backgrounds */}
              <rect x="10" y="20" width="100" height="280" fill={theme.accentLight} rx="4" opacity="0.3" />
              <rect x="130" y="20" width="100" height="280" fill={theme.accentLight} rx="4" opacity="0.3" />
              <rect x="250" y="20" width="100" height="280" fill={theme.accentLight} rx="4" opacity="0.3" />
              <rect x="370" y="20" width="100" height="280" fill={theme.accentLight} rx="4" opacity="0.3" />
              <rect x="490" y="20" width="100" height="280" fill={theme.accentLight} rx="4" opacity="0.3" />
              
              {/* Stage Labels */}
              <text x="60" y="15" textAnchor="middle" fontSize="12" fill={theme.text === 'text-white' ? 'white' : 'black'}>Awareness</text>
              <text x="180" y="15" textAnchor="middle" fontSize="12" fill={theme.text === 'text-white' ? 'white' : 'black'}>Consideration</text>
              <text x="300" y="15" textAnchor="middle" fontSize="12" fill={theme.text === 'text-white' ? 'white' : 'black'}>Purchase</text>
              <text x="420" y="15" textAnchor="middle" fontSize="12" fill={theme.text === 'text-white' ? 'white' : 'black'}>Onboarding</text>
              <text x="540" y="15" textAnchor="middle" fontSize="12" fill={theme.text === 'text-white' ? 'white' : 'black'}>Retention</text>
              
              {/* Flow Lines */}
              {/* Awareness to Consideration */}
              <path d="M110,100 C120,100 120,80 130,80" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M110,150 C120,150 120,160 130,160" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M110,200 C120,200 120,240 130,240" stroke="#2358E9" strokeWidth="2" fill="none" />
              
              {/* Consideration to Purchase */}
              <path d="M230,80 C240,80 240,60 250,60" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M230,160 C240,160 240,140 250,140" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M230,240 C240,240 240,220 250,220" stroke="#2358E9" strokeWidth="2" fill="none" />
              
              {/* Purchase to Onboarding */}
              <path d="M350,60 C360,60 360,80 370,80" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M350,140 C360,140 360,160 370,160" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M350,220 C360,220 360,240 370,240" stroke="#2358E9" strokeWidth="2" fill="none" />
              
              {/* Onboarding to Retention */}
              <path d="M470,80 C480,80 480,100 490,100" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M470,160 C480,160 480,180 490,180" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M470,240 C480,240 480,260 490,260" stroke="#2358E9" strokeWidth="2" fill="none" />
              
              {/* Node Circles */}
              {/* Awareness */}
              <circle cx="60" cy="100" r="15" fill="#2358E9" />
              <text x="60" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">Ad</text>
              <circle cx="60" cy="150" r="15" fill="#2358E9" />
              <text x="60" y="150" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">SM</text>
              <circle cx="60" cy="200" r="15" fill="#2358E9" />
              <text x="60" y="200" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">SEO</text>
              
              {/* Consideration */}
              <circle cx="180" cy="80" r="15" fill="#2358E9" />
              <text x="180" y="80" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">Web</text>
              <circle cx="180" cy="160" r="15" fill="#2358E9" />
              <text x="180" y="160" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">Bot</text>
              <circle cx="180" cy="240" r="15" fill="#2358E9" />
              <text x="180" y="240" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">Email</text>
              
              {/* Purchase */}
              <circle cx="300" cy="60" r="15" fill="#2358E9" />
              <text x="300" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">Cart</text>
              <circle cx="300" cy="140" r="15" fill="#2358E9" />
              <text x="300" y="140" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">Pay</text>
              <circle cx="300" cy="220" r="15" fill="#2358E9" />
              <text x="300" y="220" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">Conf</text>
              
              {/* Onboarding */}
              <circle cx="420" cy="80" r="15" fill="#2358E9" />
              <text x="420" y="80" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">Tut</text>
              <circle cx="420" cy="160" r="15" fill="#2358E9" />
              <text x="420" y="160" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">KB</text>
              <circle cx="420" cy="240" r="15" fill="#2358E9" />
              <text x="420" y="240" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">Help</text>
              
              {/* Retention */}
              <circle cx="540" cy="100" r="15" fill="#2358E9" />
              <text x="540" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">Spt</text>
              <circle cx="540" cy="180" r="15" fill="#2358E9" />
              <text x="540" y="180" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">Promo</text>
              <circle cx="540" cy="260" r="15" fill="#2358E9" />
              <text x="540" y="260" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">Loy</text>
            </svg>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className={`p-3 rounded ${theme.accentLight}`}>
                <div className="text-sm font-medium mb-1">Conversion Rate</div>
                <div className="text-2xl font-bold text-[#2358E9]">24.7%</div>
              </div>
              <div className={`p-3 rounded ${theme.accentLight}`}>
                <div className="text-sm font-medium mb-1">Avg. Journey Time</div>
                <div className="text-2xl font-bold text-[#2358E9]">16 days</div>
              </div>
              <div className={`p-3 rounded ${theme.accentLight}`}>
                <div className="text-sm font-medium mb-1">Drop-off Rate</div>
                <div className="text-2xl font-bold text-[#2358E9]">18.3%</div>
              </div>
              <div className={`p-3 rounded ${theme.accentLight}`}>
                <div className="text-sm font-medium mb-1">Customer LTV</div>
                <div className="text-2xl font-bold text-[#2358E9]">$840</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${theme.accentLight} flex items-center justify-center mr-3`}>
              <Settings className={theme.accent} size={20} />
            </div>
            <h3 className="font-semibold text-lg">Orchestrate Any Journey</h3>
          </div>
          <p className={`${theme.mutedText}`}>
            Design, automate and optimize customer journeys across channels, departments, and systems.
          </p>
        </div>
        
        <div>
          <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${theme.accentLight} flex items-center justify-center mr-3`}>
              <RefreshCw className={theme.accent} size={20} />
            </div>
            <h3 className="font-semibold text-lg">Real-time Analytics</h3>
          </div>
          <p className={`${theme.mutedText}`}>
            Track journey performance with real-time metrics. Identify bottlenecks and optimize conversion rates.
          </p>
        </div>
        
        <div>
          <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${theme.accentLight} flex items-center justify-center mr-3`}>
              <Users className={theme.accent} size={20} />
            </div>
            <h3 className="font-semibold text-lg">Personalize at Scale</h3>
          </div>
          <p className={`${theme.mutedText}`}>
            Deliver the right message at the right time through the right channel, creating personalized experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

// Vendor Integration Showcase
const VendorIntegrationShowcase = ({ theme }) => {
  // Sample vendors and connections
  const vendors = [
    { id: 'salesforce', name: 'Salesforce', type: 'CRM', connected: true },
    { id: 'zendesk', name: 'Zendesk', type: 'Support', connected: true },
    { id: 'servicenow', name: 'ServiceNow', type: 'ITSM', connected: false },
    { id: 'ms-teams', name: 'Microsoft Teams', type: 'Collaboration', connected: true },
    { id: 'marketo', name: 'Marketo', type: 'Marketing', connected: false },
  ];
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">One platform, endless connections</h2>
        <p className={`${theme.subheading} text-lg max-w-2xl mx-auto`}>
          Connect to any vendor in your technology stack. Share data seamlessly across systems for a unified experience.
        </p>
      </div>
      
      {/* Main Integration Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {/* Connected Systems Panel */}
        <div className={`${theme.cardBg} border ${theme.border} rounded-xl ${theme.shadow} p-5`}>
          <h3 className="font-semibold mb-4">Connected Systems</h3>
          
          <div className="space-y-3">
            {vendors.map(vendor => (
              <div key={vendor.id} className={`p-3 rounded-lg border ${theme.border} flex justify-between items-center`}>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded ${theme.accentLight} flex items-center justify-center mr-3`}>
                    <span className="text-sm font-medium">{vendor.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium">{vendor.name}</div>
                    <div className={`text-xs ${theme.mutedText}`}>{vendor.type}</div>
                  </div>
                </div>
                
                <div className={`px-2 py-1 rounded text-xs ${vendor.connected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {vendor.connected ? 'Connected' : 'Available'}
                </div>
              </div>
            ))}
          </div>
          
          <button className={`mt-4 w-full py-2 border ${theme.border} rounded-lg flex items-center justify-center`}>
            <span className="mr-2">Add New Integration</span>
            <Plus size={16} />
          </button>
        </div>
        
        {/* Central Integration Hub */}
        <div className={`${theme.cardBg} border ${theme.border} rounded-xl ${theme.shadow} p-5 flex flex-col`}>
          <h3 className="font-semibold mb-4">Integration Hub</h3>
          
          <div className="flex-grow flex items-center justify-center">
            <svg width="240" height="240" viewBox="0 0 240 240">
              {/* Central Hub */}
              <circle cx="120" cy="120" r="30" fill="#2358E9" />
              <text x="120" y="120" textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="white">cXentral</text>
              <circle cx="120" cy="120" r="35" fill="none" stroke="#2358E9" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="120" cy="120" r="40" fill="none" stroke="#2358E9" strokeWidth="1" strokeDasharray="2 2" />
              
              {/* Connectors */}
              {/* Salesforce */}
              <circle cx="60" cy="60" r="20" fill={theme.accentLight} stroke="#2358E9" strokeWidth="2" />
              <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill={theme.text === 'text-white' ? 'white' : '#2358E9'}>SF</text>
              <path d="M85,85 L105,105" stroke="#2358E9" strokeWidth="2" />
              
              {/* Zendesk */}
              <circle cx="60" cy="180" r="20" fill={theme.accentLight} stroke="#2358E9" strokeWidth="2" />
              <text x="60" y="180" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill={theme.text === 'text-white' ? 'white' : '#2358E9'}>ZD</text>
              <path d="M85,165 L105,135" stroke="#2358E9" strokeWidth="2" />
              
              {/* Microsoft Teams */}
              <circle cx="180" cy="60" r="20" fill={theme.accentLight} stroke="#2358E9" strokeWidth="2" />
              <text x="180" y="60" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill={theme.text === 'text-white' ? 'white' : '#2358E9'}>MS</text>
              <path d="M155,85 L135,105" stroke="#2358E9" strokeWidth="2" />
              
              {/* ServiceNow */}
              <circle cx="180" cy="180" r="20" fill={theme.accentLight} stroke="#gray" strokeWidth="2" strokeDasharray="3 3" />
              <text x="180" y="180" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill={theme.text === 'text-white' ? 'white' : 'gray'}>SN</text>
              <path d="M155,165 L135,135" stroke="gray" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className={`p-2 rounded bg-green-100 text-green-800 text-center text-sm`}>
              3 Active
            </div>
            <div className={`p-2 rounded bg-blue-100 text-blue-800 text-center text-sm`}>
              2 Available
            </div>
          </div>
        </div>
        
        {/* Data Flow Preview */}
        <div className={`${theme.cardBg} border ${theme.border} rounded-xl ${theme.shadow} p-5`}>
          <h3 className="font-semibold mb-4">Data Flow</h3>
          
          <div className="space-y-3">
            <div className={`p-3 rounded-lg ${theme.accentLight} text-sm`}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Contact Sync</span>
                <span className="text-xs">Real-time</span>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-[#2358E9] flex items-center justify-center text-white">SF</div>
                <div className="mx-2 text-[#2358E9]">
                  <ArrowRight size={16} />
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded bg-[#2358E9] flex items-center justify-center text-white">CX</div>
                <div className="mx-2 text-[#2358E9]">
                  <ArrowRight size={16} />
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded bg-[#2358E9] flex items-center justify-center text-white">ZD</div>
              </div>
            </div>
            
            <div className={`p-3 rounded-lg ${theme.accentLight} text-sm`}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Ticket Updates</span>
                <span className="text-xs">Every 5min</span>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-[#2358E9] flex items-center justify-center text-white">ZD</div>
                <div className="mx-2 text-[#2358E9]">
                  <ArrowRight size={16} />
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded bg-[#2358E9] flex items-center justify-center text-white">CX</div>
                <div className="mx-2 text-[#2358E9]">
                  <ArrowRight size={16} />
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded bg-[#2358E9] flex items-center justify-center text-white">SF</div>
              </div>
            </div>
            
            <div className={`p-3 rounded-lg ${theme.accentLight} text-sm`}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Notifications</span>
                <span className="text-xs">Event-based</span>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-[#2358E9] flex items-center justify-center text-white">CX</div>
                <div className="mx-2 text-[#2358E9]">
                  <ArrowRight size={16} />
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded bg-[#2358E9] flex items-center justify-center text-white">MS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${theme.accentLight} flex items-center justify-center mr-3`}>
              <Zap className={theme.accent} size={20} />
            </div>
            <h3 className="font-semibold text-lg">Connect Anything</h3>
          </div>
          <p className={`${theme.mutedText}`}>
            Seamless integration with any system in your tech stack. Create a unified data layer for better decision making.
          </p>
        </div>
        
        <div>
          <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${theme.accentLight} flex items-center justify-center mr-3`}>
              <Shield className={theme.accent} size={20} />
            </div>
            <h3 className="font-semibold text-lg">Secure & Governed</h3>
          </div>
          <p className={`${theme.mutedText}`}>
            Enterprise-grade security with fine-grained access controls. Manage data flow with complete visibility.
          </p>
        </div>
        
        <div>
          <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${theme.accentLight} flex items-center justify-center mr-3`}>
              <Clock className={theme.accent} size={20} />
            </div>
            <h3 className="font-semibold text-lg">Deploy in Minutes</h3>
          </div>
          <p className={`${theme.mutedText}`}>
            Pre-built connectors and templates get you up and running quickly. No coding required for most integrations.
          </p>
        </div>
      </div>
    </div>
  );
};

// Additional Components needed for other showcases
const Plus = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Shield = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const Zap = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const Clock = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

// Workflow Builder Showcase
const WorkflowBuilderShowcase = ({ theme }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">Build flows without code</h2>
        <p className={`${theme.subheading} text-lg max-w-2xl mx-auto`}>
          Design, test, and deploy complex workflows with an intuitive drag-and-drop interface. No coding required.
        </p>
      </div>
      
      {/* Main Workflow Builder Showcase */}
      <div className={`${theme.cardBg} border ${theme.border} rounded-xl ${theme.shadow} p-5 mb-20 overflow-hidden`}>
        <div className="flex justify-between items-center mb-5">
          <div>
            <h3 className="font-semibold">Support Ticket Router</h3>
            <p className={`text-sm ${theme.mutedText}`}>Routes support tickets based on priority, department, and agent availability</p>
          </div>
          <div className="flex items-center gap-2">
            <button className={`px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm`}>Published</button>
            <button className={`p-1 rounded ${theme.accentLight}`}>
              <Settings size={16} className={theme.accent} />
            </button>
          </div>
        </div>
        
        {/* Workflow Diagram */}
        <div className="relative mt-4 pl-4">
          <svg width="100%" height="380" viewBox="0 0 800 380">
            {/* Connector Lines */}
            <path d="M150,60 L250,60" stroke="#2358E9" strokeWidth="2" fill="none" />
            <path d="M350,60 L450,60" stroke="#2358E9" strokeWidth="2" fill="none" />
            <path d="M550,60 L650,60" stroke="#2358E9" strokeWidth="2" fill="none" />
            
            {/* Decision Branches */}
            <path d="M300,110 L300,180" stroke="#2358E9" strokeWidth="2" fill="none" />
            <path d="M300,180 L180,180" stroke="#2358E9" strokeWidth="2" fill="none" />
            <path d="M300,180 L420,180" stroke="#2358E9" strokeWidth="2" fill="none" />
            <path d="M180,180 L180,220" stroke="#2358E9" strokeWidth="2" fill="none" />
            <path d="M420,180 L420,220" stroke="#2358E9" strokeWidth="2" fill="none" />
            
            {/* Lower Branches */}
            <path d="M180,300 L180,340" stroke="#2358E9" strokeWidth="2" fill="none" />
            <path d="M420,300 L420,340" stroke="#2358E9" strokeWidth="2" fill="none" />
            <path d="M180,340 L300,340" stroke="#2358E9" strokeWidth="2" fill="none" />
            <path d="M420,340 L300,340" stroke="#2358E9" strokeWidth="2" fill="none" />
            <path d="M300,340 L300,380" stroke="#2358E9" strokeWidth="2" fill="none" />
            
            {/* Start Node */}
            <rect x="50" y="40" width="100" height="40" rx="20" fill="#2358E9" />
            <text x="100" y="65" textAnchor="middle" fill="white" fontSize="14">Start</text>
            
            {/* Process Nodes */}
            <rect x="250" y="40" width="100" height="40" rx="5" fill={theme.accentLight} stroke="#2358E9" strokeWidth="2" />
            <text x="300" y="65" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="14">Get Ticket</text>
            
            <rect x="450" y="40" width="100" height="40" rx="5" fill={theme.accentLight} stroke="#2358E9" strokeWidth="2" />
            <text x="500" y="65" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="14">Analyze</text>
            
            <rect x="650" y="40" width="100" height="40" rx="5" fill={theme.accentLight} stroke="#2358E9" strokeWidth="2" />
            <text x="700" y="65" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="14">Enrich</text>
            
            {/* Decision Diamond */}
            <polygon points="300,110 330,140 300,170 270,140" fill={theme.accentLight} stroke="#2358E9" strokeWidth="2" />
            <text x="300" y="145" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="12">Priority?</text>
            
            {/* Branch Labels */}
            <text x="240" y="175" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#333'} fontSize="12">High</text>
            <text x="360" y="175" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#333'} fontSize="12">Normal</text>
            
            {/* Process Rectangles */}
            <rect x="130" y="220" width="100" height="80" rx="5" fill={theme.accentLight} stroke="#2358E9" strokeWidth="2" />
            <text x="180" y="250" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="14">Route to</text>
            <text x="180" y="270" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="14">Priority Queue</text>
            
            <rect x="370" y="220" width="100" height="80" rx="5" fill={theme.accentLight} stroke="#2358E9" strokeWidth="2" />
            <text x="420" y="250" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="14">Route to</text>
            <text x="420" y="270" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="14">Standard Queue</text>
            
            {/* End Node */}
            <rect x="250" y="380" width="100" height="40" rx="20" fill="#6c757d" />
            <text x="300" y="405" textAnchor="middle" fill="white" fontSize="14">End</text>
          </svg>
        </div>
      </div>
      
      {/* Tools Panel Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
        <div className={`col-span-1 ${theme.cardBg} border ${theme.border} rounded-xl ${theme.shadow} p-5`}>
          <h3 className="font-semibold mb-4">Workflow Elements</h3>
          
          <div className="space-y-3">
            <div className={`p-3 rounded-lg border ${theme.border} flex items-center cursor-move`}>
              <div className={`w-8 h-8 rounded ${theme.accentBg} flex items-center justify-center mr-3 text-white`}>
                <Play size={16} />
              </div>
              <span>Trigger</span>
            </div>
            
            <div className={`p-3 rounded-lg border ${theme.border} flex items-center cursor-move`}>
              <div className={`w-8 h-8 rounded ${theme.accentBg} flex items-center justify-center mr-3 text-white`}>
                <MessageSquare size={16} />
              </div>
              <span>Message</span>
            </div>
            
            <div className={`p-3 rounded-lg border ${theme.border} flex items-center cursor-move`}>
              <div className={`w-8 h-8 rounded ${theme.accentBg} flex items-center justify-center mr-3 text-white`}>
                <Check size={16} />
              </div>
              <span>Condition</span>
            </div>
            
            <div className={`p-3 rounded-lg border ${theme.border} flex items-center cursor-move`}>
              <div className={`w-8 h-8 rounded ${theme.accentBg} flex items-center justify-center mr-3 text-white`}>
                <PhoneCall size={16} />
              </div>
              <span>Call Action</span>
            </div>
            
            <div className={`p-3 rounded-lg border ${theme.border} flex items-center cursor-move`}>
              <div className={`w-8 h-8 rounded ${theme.accentBg} flex items-center justify-center mr-3 text-white`}>
                <Bell size={16} />
              </div>
              <span>Notification</span>
            </div>
            
            <div className={`p-3 rounded-lg border ${theme.border} flex items-center cursor-move`}>
              <div className={`w-8 h-8 rounded ${theme.accentBg} flex items-center justify-center mr-3 text-white`}>
                <Pause size={16} />
              </div>
              <span>Wait</span>
            </div>
          </div>
        </div>
        
        <div className={`col-span-1 lg:col-span-3 ${theme.cardBg} border ${theme.border} rounded-xl ${theme.shadow} p-5`}>
          <h3 className="font-semibold mb-4">Properties</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme.mutedText}`}>Element Name</label>
              <input type="text" value="Route to Priority Queue" className={`w-full p-2 rounded border ${theme.border} bg-transparent`} />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme.mutedText}`}>Element Type</label>
              <select className={`w-full p-2 rounded border ${theme.border} bg-transparent`}>
                <option>Action</option>
                <option>Condition</option>
                <option>Trigger</option>
                <option>Message</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-1 ${theme.mutedText}`}>Description</label>
              <textarea className={`w-full p-2 rounded border ${theme.border} bg-transparent`} rows="2">
                Routes high priority tickets to the dedicated priority queue for faster handling.
              </textarea>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme.mutedText}`}>Queue ID</label>
              <input type="text" value="queue_priority_support" className={`w-full p-2 rounded border ${theme.border} bg-transparent`} />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme.mutedText}`}>SLA (minutes)</label>
              <input type="number" value="15" className={`w-full p-2 rounded border ${theme.border} bg-transparent`} />
            </div>
            
            <div className="md:col-span-2">
              <div className="flex items-center mt-3">
                <input type="checkbox" id="notify" className="mr-2" checked />
                <label htmlFor="notify">Send notification to support managers</label>
              </div>
              
              <div className="flex items-center mt-3">
                <input type="checkbox" id="customer" className="mr-2" checked />
                <label htmlFor="customer">Send acknowledgement to customer</label>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-6 gap-3">
            <button className={`px-4 py-2 border ${theme.border} rounded`}>Cancel</button>
            <button className={`px-4 py-2 ${theme.accentBg} text-white rounded`}>Save Changes</button>
          </div>
        </div>
      </div>
      
      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${theme.accentLight} flex items-center justify-center mr-3`}>
              <Edit className={theme.accent} size={20} />
            </div>
            <h3 className="font-semibold text-lg">Visual Builder</h3>
          </div>
          <p className={`${theme.mutedText}`}>
            Drag-and-drop interface for building complex workflows without writing code. Empower business users.
          </p>
        </div>
        
        <div>
          <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${theme.accentLight} flex items-center justify-center mr-3`}>
              <Play className={theme.accent} size={20} />
            </div>
            <h3 className="font-semibold text-lg">Test & Simulate</h3>
          </div>
          <p className={`${theme.mutedText}`}>
            Test your workflows before deploying them. See how they perform with real data and scenarios.
          </p>
        </div>
        
        <div>
          <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${theme.accentLight} flex items-center justify-center mr-3`}>
              <Send className={theme.accent} size={20} />
            </div>
            <h3 className="font-semibold text-lg">Deploy Instantly</h3>
          </div>
          <p className={`${theme.mutedText}`}>
            Publish workflows with one click. Make changes on the fly without disrupting operations.
          </p>
        </div>
      </div>
    </div>
  );
};

// Data Flow Showcase
const DataFlowShowcase = ({ theme }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">Real-time data in motion</h2>
        <p className={`${theme.subheading} text-lg max-w-2xl mx-auto`}>
          Connect, transform, and route data across your enterprise in real-time. Create a unified source of truth.
        </p>
      </div>
      
      {/* Main Data Flow Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
        {/* Data Sources Panel */}
        <div className={`lg:col-span-3 ${theme.cardBg} border ${theme.border} rounded-xl ${theme.shadow} p-5`}>
          <h3 className="font-semibold mb-4">Data Sources</h3>
          
          <div className="space-y-3">
            <div className={`p-3 rounded-lg ${theme.accentLight} border-l-4 border-[#2358E9]`}>
              <div className="font-medium">Salesforce</div>
              <div className={`text-xs ${theme.mutedText} mt-1`}>
                Contacts, Accounts, Opportunities
              </div>
              <div className={`text-xs mt-2 flex items-center ${theme.mutedText}`}>
                <RefreshCw size={12} className="mr-1" />
                <span>Updated 2 min ago</span>
              </div>
            </div>
            
            <div className={`p-3 rounded-lg ${theme.accentLight} border-l-4 border-[#2358E9]`}>
              <div className="font-medium">Zendesk</div>
              <div className={`text-xs ${theme.mutedText} mt-1`}>
                Tickets, Agents, Knowledge Base
              </div>
              <div className={`text-xs mt-2 flex items-center ${theme.mutedText}`}>
                <RefreshCw size={12} className="mr-1" />
                <span>Updated 5 min ago</span>
              </div>
            </div>
            
            <div className={`p-3 rounded-lg ${theme.accentLight} border-l-4 border-[#2358E9]`}>
              <div className="font-medium">Website</div>
              <div className={`text-xs ${theme.mutedText} mt-1`}>
                Visitor Behavior, Form Submissions
              </div>
              <div className={`text-xs mt-2 flex items-center ${theme.mutedText}`}>
                <RefreshCw size={12} className="mr-1" />
                <span>Real-time</span>
              </div>
            </div>
            
            <div className={`p-3 rounded-lg ${theme.accentLight} border-l-4 border-[#2358E9]`}>
              <div className="font-medium">Mobile App</div>
              <div className={`text-xs ${theme.mutedText} mt-1`}>
                User Activity, Push Notifications
              </div>
              <div className={`text-xs mt-2 flex items-center ${theme.mutedText}`}>
                <RefreshCw size={12} className="mr-1" />
                <span>Real-time</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Data Flow Diagram */}
        <div className={`lg:col-span-9 ${theme.cardBg} border ${theme.border} rounded-xl ${theme.shadow} p-5 flex flex-col`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Data Flow Visualization</h3>
            <div className="flex items-center space-x-3">
              <select className={`text-sm border ${theme.border} rounded p-1 bg-transparent`}>
                <option>Last Hour</option>
                <option>Last Day</option>
                <option selected>Last Week</option>
                <option>Last Month</option>
              </select>
              <button className={`p-1 rounded ${theme.accentLight}`}>
                <RefreshCw size={16} className={theme.accent} />
              </button>
            </div>
          </div>
          
          <div className="flex-grow relative overflow-hidden">
            <svg width="100%" height="350" viewBox="0 0 800 350">
              {/* Source Systems */}
              <rect x="20" y="60" width="120" height="40" rx="4" fill="#2358E9" />
              <text x="80" y="85" textAnchor="middle" fill="white" fontSize="12">Salesforce</text>
              
              <rect x="20" y="120" width="120" height="40" rx="4" fill="#2358E9" />
              <text x="80" y="145" textAnchor="middle" fill="white" fontSize="12">Zendesk</text>
              
              <rect x="20" y="180" width="120" height="40" rx="4" fill="#2358E9" />
              <text x="80" y="205" textAnchor="middle" fill="white" fontSize="12">Website</text>
              
              <rect x="20" y="240" width="120" height="40" rx="4" fill="#2358E9" />
              <text x="80" y="265" textAnchor="middle" fill="white" fontSize="12">Mobile App</text>
              
              {/* cXentral Hub */}
              <rect x="250" y="100" width="140" height="140" rx="4" fill={theme.accentLight} stroke="#2358E9" strokeWidth="2" />
              <text x="320" y="130" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="16" fontWeight="bold">cXentral Hub</text>
              <text x="320" y="150" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="12">Data Processing</text>
              <text x="320" y="170" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="12">Transformation</text>
              <text x="320" y="190" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="12">Enrichment</text>
              <text x="320" y="210" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="12">Routing</text>
              
              {/* Destination Systems */}
              <rect x="500" y="60" width="120" height="40" rx="4" fill="#6c757d" />
              <text x="560" y="85" textAnchor="middle" fill="white" fontSize="12">Analytics</text>
              
              <rect x="500" y="120" width="120" height="40" rx="4" fill="#6c757d" />
              <text x="560" y="145" textAnchor="middle" fill="white" fontSize="12">Dashboards</text>
              
              <rect x="500" y="180" width="120" height="40" rx="4" fill="#6c757d" />
              <text x="560" y="205" textAnchor="middle" fill="white" fontSize="12">Automation</text>
              
              <rect x="500" y="240" width="120" height="40" rx="4" fill="#6c757d" />
              <text x="560" y="265" textAnchor="middle" fill="white" fontSize="12">Notifications</text>
              
              {/* Data Flow Lines */}
              <path d="M140,80 C180,80 200,100 250,110" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M140,140 C180,140 200,140 250,150" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M140,200 C180,200 200,190 250,180" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M140,260 C180,260 200,220 250,210" stroke="#2358E9" strokeWidth="2" fill="none" />
              
              <path d="M390,110 C430,110 450,80 500,80" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M390,140 C430,140 450,140 500,140" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M390,180 C430,180 450,180 500,200" stroke="#2358E9" strokeWidth="2" fill="none" />
              <path d="M390,210 C430,210 450,240 500,260" stroke="#2358E9" strokeWidth="2" fill="none" />
              
              {/* Animated Data Particles */}
              <circle cx="180" cy="80" r="4" fill="#2358E9">
                <animate attributeName="cx" from="140" to="250" dur="3s" repeatCount="indefinite" />
                <animate attributeName="cy" from="80" to="110" dur="3s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="180" cy="140" r="4" fill="#2358E9">
                <animate attributeName="cx" from="140" to="250" dur="4s" repeatCount="indefinite" />
                <animate attributeName="cy" from="140" to="150" dur="4s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="180" cy="200" r="4" fill="#2358E9">
                <animate attributeName="cx" from="140" to="250" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="cy" from="200" to="180" dur="3.5s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="180" cy="260" r="4" fill="#2358E9">
                <animate attributeName="cx" from="140" to="250" dur="3.2s" repeatCount="indefinite" />
                <animate attributeName="cy" from="260" to="210" dur="3.2s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="430" cy="110" r="4" fill="#2358E9">
                <animate attributeName="cx" from="390" to="500" dur="3s" repeatCount="indefinite" />
                <animate attributeName="cy" from="110" to="80" dur="3s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="430" cy="140" r="4" fill="#2358E9">
                <animate attributeName="cx" from="390" to="500" dur="4s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="430" cy="180" r="4" fill="#2358E9">
                <animate attributeName="cx" from="390" to="500" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="cy" from="180" to="200" dur="3.5s" repeatCount="indefinite" />
              </circle>
              
              <circle cx="430" cy="210" r="4" fill="#2358E9">
                <animate attributeName="cx" from="390" to="500" dur="3.2s" repeatCount="indefinite" />
                <animate attributeName="cy" from="210" to="260" dur="3.2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className={`p-3 rounded ${theme.accentLight}`}>
              <div className="text-sm font-medium mb-1">Data Processed</div>
              <div className="text-2xl font-bold text-[#2358E9]">1.8M</div>
              <div className="text-xs mt-1">records this week</div>
            </div>
            
            <div className={`p-3 rounded ${theme.accentLight}`}>
              <div className="text-sm font-medium mb-1">Processing Time</div>
              <div className="text-2xl font-bold text-[#2358E9]">42ms</div>
              <div className="text-xs mt-1">average latency</div>
            </div>
            
            <div className={`p-3 rounded ${theme.accentLight}`}>
              <div className="text-sm font-medium mb-1">Success Rate</div>
              <div className="text-2xl font-bold text-[#2358E9]">99.9%</div>
              <div className="text-xs mt-1">processing accuracy</div>
            </div>
            
            <div className={`p-3 rounded ${theme.accentLight}`}>
              <div className="text-sm font-medium mb-1">Active Flows</div>
              <div className="text-2xl font-bold text-[#2358E9]">24</div>
              <div className="text-xs mt-1">data pipelines</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${theme.accentLight} flex items-center justify-center mr-3`}>
              <Zap className={theme.accent} size={20} />
            </div>
            <h3 className="font-semibold text-lg">Real-time Processing</h3>
          </div>
          <p className={`${theme.mutedText}`}>
            Stream data in real-time across systems. React instantly to customer actions and business events.
          </p>
        </div>
        
        <div>
          <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${theme.accentLight} flex items-center justify-center mr-3`}>
              <Settings className={theme.accent} size={20} />
            </div>
            <h3 className="font-semibold text-lg">Transformation</h3>
          </div>
          <p className={`${theme.mutedText}`}>
            Transform, enrich, and normalize data as it flows through your systems. Create a consistent format.
          </p>
        </div>
        
        <div>
          <div className="flex items-center mb-3">
            <div className={`w-10 h-10 rounded-full ${theme.accentLight} flex items-center justify-center mr-3`}>
              <Shield className={theme.accent} size={20} />
            </div>
            <h3 className="font-semibold text-lg">Governance & Control</h3>
          </div>
          <p className={`${theme.mutedText}`}>
            Maintain complete visibility and control over your data. Ensure compliance with regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcaseDemo;
