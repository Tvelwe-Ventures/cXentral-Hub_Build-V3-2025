import React, { useState, useEffect, useRef } from 'react';

const JourneyFlowVisualization = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [visualizationType, setVisualizationType] = useState('sankey'); // 'sankey', 'flow', 'nodes'
  
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const togglePlayPause = () => setIsPlaying(!isPlaying);
  
  // Define color scheme based on theme
  const theme = {
    bg: isDarkMode ? 'bg-[#0D0D15]' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    mutedText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    cardBg: isDarkMode ? 'bg-[#1A1A24]' : 'bg-white',
    border: isDarkMode ? 'border-gray-800' : 'border-gray-200',
    path: isDarkMode ? '#3E4758' : '#DADADA',
    gradientStart: isDarkMode ? '#11142B' : '#F5FAFF',
    gradientEnd: isDarkMode ? '#1A1A3A' : '#EBF3FF',
    // Node colors
    discovery: '#14B8A6',  // teal for discovery
    consideration: '#0EA5E9', // sky blue for consideration 
    purchase: '#F59E0B',  // amber for purchase
    retention: '#8B5CF6',  // purple for retention
    // Chart background color
    chartBg: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
  };
  
  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-300`}>
      {/* Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <button 
          onClick={togglePlayPause}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <select
          value={visualizationType}
          onChange={(e) => setVisualizationType(e.target.value)}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}
        >
          <option value="sankey">Sankey Diagram</option>
          <option value="flow">Flow Diagram</option>
          <option value="nodes">Node Map</option>
        </select>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Customer Journey Analysis</h1>
          <p className={theme.mutedText}>
            Visualizing and analyzing customer journeys across touchpoints
          </p>
        </div>
        
        {/* Main Animation Area */}
        <div className={`max-w-5xl mx-auto ${theme.cardBg} border ${theme.border} rounded-xl p-6 shadow-lg overflow-hidden`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">E-Commerce Customer Journey</h2>
            <div className="flex items-center gap-2">
              <span className={theme.mutedText}>Last 30 days • 10,462 sessions</span>
            </div>
          </div>
          
          {/* Journey Visualization */}
          <div className="relative rounded-lg overflow-hidden" style={{height: '600px'}}>
            <div 
              className="absolute inset-0 transition-colors duration-500" 
              style={{
                background: `linear-gradient(to bottom, ${theme.gradientStart}, ${theme.gradientEnd})`
              }}
            >
              {/* Subtle grid pattern overlay */}
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: isDarkMode ? 
                    `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
                    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)` : 
                    `linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), 
                    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              ></div>
            </div>
            
            {visualizationType === 'sankey' && (
              <SankeyDiagram theme={theme} isPlaying={isPlaying} />
            )}
            
            {visualizationType === 'flow' && (
              <FlowDiagram theme={theme} isPlaying={isPlaying} />
            )}
            
            {visualizationType === 'nodes' && (
              <NodeMap theme={theme} isPlaying={isPlaying} />
            )}
          </div>
          
          {/* Metrics Row */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-3 rounded bg-[#14B8A6] bg-opacity-10 border border-[#14B8A6] border-opacity-20">
              <div className="text-sm font-medium mb-1 text-[#14B8A6]">Discovery</div>
              <div className="text-2xl font-bold">10,462</div>
              <div className="text-xs mt-1 flex items-center">
                <span className="text-green-500 mr-1">↑ 12%</span>
                <span className={theme.mutedText}>vs last month</span>
              </div>
            </div>
            
            <div className="p-3 rounded bg-[#0EA5E9] bg-opacity-10 border border-[#0EA5E9] border-opacity-20">
              <div className="text-sm font-medium mb-1 text-[#0EA5E9]">Consideration</div>
              <div className="text-2xl font-bold">4,835</div>
              <div className="text-xs mt-1 flex items-center">
                <span className="text-green-500 mr-1">↑ 8%</span>
                <span className={theme.mutedText}>vs last month</span>
              </div>
            </div>
            
            <div className="p-3 rounded bg-[#F59E0B] bg-opacity-10 border border-[#F59E0B] border-opacity-20">
              <div className="text-sm font-medium mb-1 text-[#F59E0B]">Purchase</div>
              <div className="text-2xl font-bold">1,527</div>
              <div className="text-xs mt-1 flex items-center">
                <span className="text-green-500 mr-1">↑ 15%</span>
                <span className={theme.mutedText}>vs last month</span>
              </div>
            </div>
            
            <div className="p-3 rounded bg-[#8B5CF6] bg-opacity-10 border border-[#8B5CF6] border-opacity-20">
              <div className="text-sm font-medium mb-1 text-[#8B5CF6]">Retention</div>
              <div className="text-2xl font-bold">832</div>
              <div className="text-xs mt-1 flex items-center">
                <span className="text-red-500 mr-1">↓ 3%</span>
                <span className={theme.mutedText}>vs last month</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Developer Notes */}
        <div className={`max-w-5xl mx-auto mt-8 ${theme.cardBg} border ${theme.border} rounded-xl p-6 shadow-lg`}>
          <h2 className="text-xl font-semibold mb-4">Developer Implementation Notes</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Visualization Types</h3>
              <p className={theme.mutedText}>
                The prototype showcases three different journey visualization approaches: 
                Sankey diagram (showing proportional flows between stages), 
                Flow diagram (showing detailed path analysis), and
                Node map (showing node relationships with conversion metrics).
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Animation Approach</h3>
              <p className={theme.mutedText}>
                The visualization uses SVG for the main structure with CSS animations for the flow effects.
                For a production implementation, consider using D3.js to render the visualization dynamically
                based on actual journey data.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Performance Considerations</h3>
              <p className={theme.mutedText}>
                For large datasets, consider rendering the flows in canvas rather than SVG for better performance.
                Progressive loading of journey data can also improve initial load times.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Data Integration</h3>
              <p className={theme.mutedText}>
                The visualization should be connected to your journey analytics engine via API to display real-time
                journey data. Include filtering options by date range, customer segments, and channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sankey Diagram Component - Similar to Image 1
const SankeyDiagram = ({ theme, isPlaying }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1000 600" className="relative z-10">
      {/* Background for chart area */}
      <rect x="50" y="50" width="900" height="500" fill={theme.chartBg} rx="4" />
      
      {/* Stage 1: Discovery */}
      <g>
        <rect x="80" y="100" width="140" height="400" fill={theme.discovery} rx="4" />
        <text x="150" y="310" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Discovery</text>
        <text x="150" y="335" textAnchor="middle" fill="white" fontSize="14">10,462 visitors</text>
        <text x="150" y="355" textAnchor="middle" fill="white" fontSize="12">100%</text>
      </g>
      
      {/* Flow from Discovery to Consideration */}
      <path d="M220,300 C270,300 270,250 320,250" stroke={theme.path} strokeWidth="160" fill="none" opacity="0.5" />
      <path d="M220,300 C270,300 270,250 320,250" stroke={theme.discovery} strokeWidth="140" fill="none" opacity="0.7">
        {isPlaying && (
          <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="3s" repeatCount="indefinite" />
        )}
      </path>
      <text x="270" y="240" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="14">4,835</text>
      <text x="270" y="260" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="12">46.2%</text>
      
      {/* Stage 2: Consideration */}
      <g>
        <rect x="320" y="100" width="140" height="300" fill={theme.consideration} rx="4" />
        <text x="390" y="260" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Consideration</text>
        <text x="390" y="285" textAnchor="middle" fill="white" fontSize="14">4,835 visitors</text>
        <text x="390" y="305" textAnchor="middle" fill="white" fontSize="12">46.2%</text>
      </g>
      
      {/* Flow from Consideration to Purchase */}
      <path d="M460,250 C510,250 510,200 560,200" stroke={theme.path} strokeWidth="120" fill="none" opacity="0.5" />
      <path d="M460,250 C510,250 510,200 560,200" stroke={theme.consideration} strokeWidth="100" fill="none" opacity="0.7">
        {isPlaying && (
          <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="3s" repeatCount="indefinite" />
        )}
      </path>
      <text x="510" y="190" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="14">1,527</text>
      <text x="510" y="210" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="12">31.6%</text>
      
      {/* Stage 3: Purchase */}
      <g>
        <rect x="560" y="100" width="140" height="200" fill={theme.purchase} rx="4" />
        <text x="630" y="210" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Purchase</text>
        <text x="630" y="235" textAnchor="middle" fill="white" fontSize="14">1,527 visitors</text>
        <text x="630" y="255" textAnchor="middle" fill="white" fontSize="12">14.6%</text>
      </g>
      
      {/* Flow from Purchase to Retention */}
      <path d="M700,200 C750,200 750,170 800,170" stroke={theme.path} strokeWidth="80" fill="none" opacity="0.5" />
      <path d="M700,200 C750,200 750,170 800,170" stroke={theme.purchase} strokeWidth="60" fill="none" opacity="0.7">
        {isPlaying && (
          <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="3s" repeatCount="indefinite" />
        )}
      </path>
      <text x="750" y="160" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="14">832</text>
      <text x="750" y="180" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="12">54.5%</text>
      
      {/* Stage 4: Retention */}
      <g>
        <rect x="800" y="100" width="140" height="140" fill={theme.retention} rx="4" />
        <text x="870" y="170" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Retention</text>
        <text x="870" y="195" textAnchor="middle" fill="white" fontSize="14">832 visitors</text>
        <text x="870" y="215" textAnchor="middle" fill="white" fontSize="12">7.9%</text>
      </g>
      
      {/* Dropoff paths - discovery to exit */}
      <path d="M220,400 C270,400 270,500 320,500" stroke={theme.path} strokeWidth="80" fill="none" opacity="0.3" />
      <text x="270" y="490" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="14">5,627 exit</text>
      <text x="270" y="510" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="12">53.8%</text>
      
      {/* Dropoff paths - consideration to exit */}
      <path d="M460,350 C510,350 510,500 560,500" stroke={theme.path} strokeWidth="60" fill="none" opacity="0.3" />
      <text x="510" y="490" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="14">3,308 exit</text>
      <text x="510" y="510" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="12">68.4%</text>
      
      {/* Dropoff paths - purchase to exit */}
      <path d="M700,300 C750,300 750,500 800,500" stroke={theme.path} strokeWidth="40" fill="none" opacity="0.3" />
      <text x="750" y="490" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="14">695 exit</text>
      <text x="750" y="510" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="12">45.5%</text>
      
      {/* Exit point */}
      <rect x="800" y="480" width="140" height="40" fill="#9CA3AF" rx="4" opacity="0.5" />
      <text x="870" y="505" textAnchor="middle" fill={theme.text === 'text-white' ? "white" : "black"} fontSize="14">Exit</text>
      
      {/* Animation particles */}
      {isPlaying && (
        <>
          {/* Discovery to Consideration particles */}
          <circle r="4" fill={theme.discovery}>
            <animateMotion path="M220,300 C270,300 270,250 320,250" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill={theme.discovery}>
            <animateMotion path="M220,300 C270,300 270,250 320,250" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
          
          {/* Consideration to Purchase particles */}
          <circle r="4" fill={theme.consideration}>
            <animateMotion path="M460,250 C510,250 510,200 560,200" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill={theme.consideration}>
            <animateMotion path="M460,250 C510,250 510,200 560,200" dur="3s" begin="1.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Purchase to Retention particles */}
          <circle r="4" fill={theme.purchase}>
            <animateMotion path="M700,200 C750,200 750,170 800,170" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill={theme.purchase}>
            <animateMotion path="M700,200 C750,200 750,170 800,170" dur="3s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Dropoff particles */}
          <circle r="3" fill="#9CA3AF">
            <animateMotion path="M220,400 C270,400 270,500 320,500" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="#9CA3AF">
            <animateMotion path="M460,350 C510,350 510,500 560,500" dur="4s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="#9CA3AF">
            <animateMotion path="M700,300 C750,300 750,500 800,500" dur="4s" begin="2s" repeatCount="indefinite" />
          </circle>
        </>
      )}
    </svg>
  );
};

// Flow Diagram Component - Similar to Image 2
const FlowDiagram = ({ theme, isPlaying }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1000 600" className="relative z-10">
      {/* Background for chart area */}
      <rect x="50" y="50" width="900" height="500" fill={theme.chartBg} rx="4" />
      
      {/* Source segments - Left side */}
      <g>
        <rect x="80" y="120" width="180" height="60" fill={theme.discovery} rx="4" opacity="0.8" />
        <text x="170" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Organic Search</text>
        <text x="170" y="175" textAnchor="middle" fill="white" fontSize="12">4,218 (40.3%)</text>
        
        <rect x="80" y="190" width="180" height="60" fill={theme.discovery} rx="4" opacity="0.9" />
        <text x="170" y="225" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Direct Traffic</text>
        <text x="170" y="245" textAnchor="middle" fill="white" fontSize="12">3,126 (29.9%)</text>
        
        <rect x="80" y="260" width="180" height="60" fill={theme.discovery} rx="4" opacity="0.7" />
        <text x="170" y="295" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Social Media</text>
        <text x="170" y="315" textAnchor="middle" fill="white" fontSize="12">1,845 (17.6%)</text>
        
        <rect x="80" y="330" width="180" height="60" fill={theme.discovery} rx="4" opacity="0.6" />
        <text x="170" y="365" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Email Campaigns</text>
        <text x="170" y="385" textAnchor="middle" fill="white" fontSize="12">1,273 (12.2%)</text>
      </g>
      
      {/* Destination segments - Right side */}
      <g>
        <rect x="740" y="120" width="180" height="60" fill={theme.consideration} rx="4" opacity="0.8" />
        <text x="830" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Product Page</text>
        <text x="830" y="175" textAnchor="middle" fill="white" fontSize="12">2,985 (28.5%)</text>
        
        <rect x="740" y="190" width="180" height="60" fill={theme.purchase} rx="4" opacity="0.9" />
        <text x="830" y="225" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Checkout</text>
        <text x="830" y="245" textAnchor="middle" fill="white" fontSize="12">1,527 (14.6%)</text>
        
        <rect x="740" y="260" width="180" height="60" fill={theme.retention} rx="4" opacity="0.7" />
        <text x="830" y="295" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Account Page</text>
        <text x="830" y="315" textAnchor="middle" fill="white" fontSize="12">832 (7.9%)</text>
        
        <rect x="740" y="330" width="180" height="60" fill="#9CA3AF" rx="4" opacity="0.6" />
        <text x="830" y="365" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Exit</text>
        <text x="830" y="385" textAnchor="middle" fill="white" fontSize="12">5,118 (48.9%)</text>
      </g>
      
      {/* Flow paths */}
      {/* Organic Search to Product Page */}
      <path d="M260,150 C400,150 620,150 740,150" 
            fill="none" 
            stroke={theme.discovery} 
            strokeWidth="25" 
            opacity="0.6" 
            strokeLinecap="round" />
      
      {/* Direct Traffic to Product Page */}
      <path d="M260,220 C350,220 500,180 740,160" 
            fill="none" 
            stroke={theme.discovery} 
            strokeWidth="20" 
            opacity="0.6" 
            strokeLinecap="round" />
      
      {/* Direct Traffic to Checkout */}
      <path d="M260,220 C350,220 600,210 740,220" 
            fill="none" 
            stroke={theme.discovery} 
            strokeWidth="12" 
            opacity="0.6" 
            strokeLinecap="round" />
      
      {/* Social Media to Product Page */}
      <path d="M260,290 C350,290 500,230 740,170" 
            fill="none" 
            stroke={theme.discovery} 
            strokeWidth="15" 
            opacity="0.6" 
            strokeLinecap="round" />
      
      {/* Social Media to Exit */}
      <path d="M260,290 C350,290 600,340 740,350" 
            fill="none" 
            stroke={theme.discovery} 
            strokeWidth="10" 
            opacity="0.6" 
            strokeLinecap="round" />
      
      {/* Email Campaigns to Checkout */}
      <path d="M260,360 C350,360 600,240 740,220" 
            fill="none" 
            stroke={theme.discovery} 
            strokeWidth="15" 
            opacity="0.6" 
            strokeLinecap="round" />
      
      {/* Email Campaigns to Account Page */}
      <path d="M260,360 C350,360 600,290 740,290" 
            fill="none" 
            stroke={theme.discovery} 
            strokeWidth="10" 
            opacity="0.6" 
            strokeLinecap="round" />
      
      {/* Flow animations */}
      {isPlaying && (
        <>
          {/* Organic Search to Product Page */}
          <circle r="5" fill={theme.discovery}>
            <animateMotion path="M260,150 C400,150 620,150 740,150" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle r="5" fill={theme.discovery}>
            <animateMotion path="M260,150 C400,150 620,150 740,150" dur="4s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle r="5" fill={theme.discovery}>
            <animateMotion path="M260,150 C400,150 620,150 740,150" dur="4s" begin="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Direct Traffic to Product Page */}
          <circle r="4" fill={theme.discovery}>
            <animateMotion path="M260,220 C350,220 500,180 740,160" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill={theme.discovery}>
            <animateMotion path="M260,220 C350,220 500,180 740,160" dur="4s" begin="1.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Direct Traffic to Checkout */}
          <circle r="3" fill={theme.discovery}>
            <animateMotion path="M260,220 C350,220 600,210 740,220" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill={theme.discovery}>
            <animateMotion path="M260,220 C350,220 600,210 740,220" dur="4s" begin="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Social Media to Product Page */}
          <circle r="4" fill={theme.discovery}>
            <animateMotion path="M260,290 C350,290 500,230 740,170" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill={theme.discovery}>
            <animateMotion path="M260,290 C350,290 500,230 740,170" dur="4s" begin="0.8s" repeatCount="indefinite" />
          </circle>
          
          {/* Social Media to Exit */}
          <circle r="3" fill={theme.discovery}>
            <animateMotion path="M260,290 C350,290 600,340 740,350" dur="4s" repeatCount="indefinite" />
          </circle>
          
          {/* Email Campaigns to Checkout */}
          <circle r="4" fill={theme.discovery}>
            <animateMotion path="M260,360 C350,360 600,240 740,220" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill={theme.discovery}>
            <animateMotion path="M260,360 C350,360 600,240 740,220" dur="4s" begin="1.2s" repeatCount="indefinite" />
          </circle>
          
          {/* Email Campaigns to Account Page */}
          <circle r="3" fill={theme.discovery}>
            <animateMotion path="M260,360 C350,360 600,290 740,290" dur="4s" repeatCount="indefinite" />
          </circle>
        </>
      )}
      
      {/* Central analytics node with counts */}
      <g>
        <ellipse cx="500" cy="250" rx="120" ry="80" fill={theme.text === 'text-white' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'} stroke={theme.border} strokeWidth="1" />
        <text x="500" y="220" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : 'black'} fontSize="16" fontWeight="bold">Path Analysis</text>
        <text x="500" y="245" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : 'black'} fontSize="14">10,462 total sessions</text>
        <text x="500" y="265" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : 'black'} fontSize="14">1,527 conversions</text>
        <text x="500" y="285" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : 'black'} fontSize="14">14.6% conversion rate</text>
      </g>
    </svg>
  );
};

// Node Map Component - Similar to Image 3/4
const NodeMap = ({ theme, isPlaying }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1000 600" className="relative z-10">
      {/* Background for chart area */}
      <rect x="50" y="50" width="900" height="500" fill={theme.chartBg} rx="4" />
      
      {/* Center hub */}
      <g>
        <circle cx="500" cy="300" r="70" fill={theme.text === 'text-white' ? 'rgba(35, 88, 233, 0.2)' : 'rgba(35, 88, 233, 0.1)'} stroke="#2358E9" strokeWidth="2" />
        <circle cx="500" cy="300" r="60" fill={theme.text === 'text-white' ? 'rgba(35, 88, 233, 0.4)' : 'rgba(35, 88, 233, 0.2)'} />
        <text x="500" y="290" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="16" fontWeight="bold">cXentral Hub</text>
        <text x="500" y="310" textAnchor="middle" fill={theme.text === 'text-white' ? 'white' : '#2358E9'} fontSize="12">Customer Journey</text>
        
        {isPlaying && (
          <>
            <circle cx="500" cy="300" r="75" fill="none" stroke="#2358E9" strokeWidth="1" opacity="0.4">
              <animate attributeName="r" values="70;90;70" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.1;0.4" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="500" cy="300" r="65" fill="none" stroke="#2358E9" strokeWidth="1" opacity="0.3">
              <animate attributeName="r" values="65;75;65" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.05;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </g>
      
      {/* Connecting paths */}
      <g>
        {/* Website path */}
        <path d="M500,230 C500,180 300,180 250,160" stroke={theme.path} strokeWidth="20" fill="none" opacity="0.2" />
        <path d="M500,230 C500,180 300,180 250,160" stroke={theme.discovery} strokeWidth="18" fill="none" opacity="0.6">
          {isPlaying && (
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="10s" repeatCount="indefinite" />
          )}
        </path>
        
        {/* Mobile App path */}
        <path d="M500,230 C500,150 400,110 250,80" stroke={theme.path} strokeWidth="16" fill="none" opacity="0.2" />
        <path d="M500,230 C500,150 400,110 250,80" stroke={theme.discovery} strokeWidth="14" fill="none" opacity="0.5">
          {isPlaying && (
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="12s" repeatCount="indefinite" />
          )}
        </path>
        
        {/* Support path */}
        <path d="M430,300 C350,300 300,350 250,380" stroke={theme.path} strokeWidth="18" fill="none" opacity="0.2" />
        <path d="M430,300 C350,300 300,350 250,380" stroke={theme.consideration} strokeWidth="16" fill="none" opacity="0.6">
          {isPlaying && (
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="9s" repeatCount="indefinite" />
          )}
        </path>
        
        {/* Social Media path */}
        <path d="M450,350 C400,400 300,450 250,460" stroke={theme.path} strokeWidth="14" fill="none" opacity="0.2" />
        <path d="M450,350 C400,400 300,450 250,460" stroke={theme.consideration} strokeWidth="12" fill="none" opacity="0.5">
          {isPlaying && (
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="11s" repeatCount="indefinite" />
          )}
        </path>
        
        {/* Order System path */}
        <path d="M570,300 C650,300 700,350 750,380" stroke={theme.path} strokeWidth="18" fill="none" opacity="0.2" />
        <path d="M570,300 C650,300 700,350 750,380" stroke={theme.purchase} strokeWidth="16" fill="none" opacity="0.6">
          {isPlaying && (
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="9.5s" repeatCount="indefinite" />
          )}
        </path>
        
        {/* Payment path */}
        <path d="M550,350 C600,400 700,450 750,460" stroke={theme.path} strokeWidth="14" fill="none" opacity="0.2" />
        <path d="M550,350 C600,400 700,450 750,460" stroke={theme.purchase} strokeWidth="12" fill="none" opacity="0.5">
          {isPlaying && (
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="10.5s" repeatCount="indefinite" />
          )}
        </path>
        
        {/* Email path */}
        <path d="M500,370 C500,420 700,440 750,540" stroke={theme.path} strokeWidth="16" fill="none" opacity="0.2" />
        <path d="M500,370 C500,420 700,440 750,540" stroke={theme.retention} strokeWidth="14" fill="none" opacity="0.6">
          {isPlaying && (
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="10s" repeatCount="indefinite" />
          )}
        </path>
        
        {/* Analytics path */}
        <path d="M500,230 C500,180 700,180 750,160" stroke={theme.path} strokeWidth="14" fill="none" opacity="0.2" />
        <path d="M500,230 C500,180 700,180 750,160" stroke={theme.retention} strokeWidth="12" fill="none" opacity="0.5">
          {isPlaying && (
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="12.5s" repeatCount="indefinite" />
          )}
        </path>
        
        {/* Loyalty path */}
        <path d="M500,230 C500,150 600,110 750,80" stroke={theme.path} strokeWidth="12" fill="none" opacity="0.2" />
        <path d="M500,230 C500,150 600,110 750,80" stroke={theme.retention} strokeWidth="10" fill="none" opacity="0.5">
          {isPlaying && (
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="13s" repeatCount="indefinite" />
          )}
        </path>
      </g>
      
      {/* Web Node */}
      <g>
        <circle cx="200" cy="160" r="50" fill={theme.discovery} />
        <circle cx="200" cy="160" r="46" fill="white" fillOpacity="0.2" />
        <text x="200" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Website</text>
        <text x="200" y="175" textAnchor="middle" fill="white" fontSize="12">4,218 visitors</text>
        
        {/* Conversion indicator */}
        <circle cx="250" cy="160" r="15" fill="white" opacity="0.9" />
        <text x="250" y="164" textAnchor="middle" fill={theme.discovery} fontSize="12" fontWeight="bold">46%</text>
      </g>
      
      {/* Mobile App Node */}
      <g>
        <circle cx="200" cy="80" r="40" fill={theme.discovery} />
        <circle cx="200" cy="80" r="36" fill="white" fillOpacity="0.2" />
        <text x="200" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Mobile App</text>
        <text x="200" y="95" textAnchor="middle" fill="white" fontSize="12">2,156 visitors</text>
        
        {/* Conversion indicator */}
        <circle cx="240" cy="80" r="15" fill="white" opacity="0.9" />
        <text x="240" y="84" textAnchor="middle" fill={theme.discovery} fontSize="12" fontWeight="bold">38%</text>
      </g>
      
      {/* Support Node */}
      <g>
        <circle cx="200" cy="380" r="50" fill={theme.consideration} />
        <circle cx="200" cy="380" r="46" fill="white" fillOpacity="0.2" />
        <text x="200" y="375" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Support</text>
        <text x="200" y="395" textAnchor="middle" fill="white" fontSize="12">2,835 contacts</text>
        
        {/* Conversion indicator */}
        <circle cx="250" cy="380" r="15" fill="white" opacity="0.9" />
        <text x="250" y="384" textAnchor="middle" fill={theme.consideration} fontSize="12" fontWeight="bold">52%</text>
      </g>
      
      {/* Social Node */}
      <g>
        <circle cx="200" cy="460" r="40" fill={theme.consideration} />
        <circle cx="200" cy="460" r="36" fill="white" fillOpacity="0.2" />
        <text x="200" y="455" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Social</text>
        <text x="200" y="475" textAnchor="middle" fill="white" fontSize="12">1,845 engagements</text>
        
        {/* Conversion indicator */}
        <circle cx="240" cy="460" r="15" fill="white" opacity="0.9" />
        <text x="240" y="464" textAnchor="middle" fill={theme.consideration} fontSize="12" fontWeight="bold">24%</text>
      </g>
      
      {/* Orders Node */}
      <g>
        <circle cx="800" cy="380" r="50" fill={theme.purchase} />
        <circle cx="800" cy="380" r="46" fill="white" fillOpacity="0.2" />
        <text x="800" y="375" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Orders</text>
        <text x="800" y="395" textAnchor="middle" fill="white" fontSize="12">1,527 orders</text>
        
        {/* Conversion indicator */}
        <circle cx="750" cy="380" r="15" fill="white" opacity="0.9" />
        <text x="750" y="384" textAnchor="middle" fill={theme.purchase} fontSize="12" fontWeight="bold">14.6%</text>
      </g>
      
      {/* Payments Node */}
      <g>
        <circle cx="800" cy="460" r="40" fill={theme.purchase} />
        <circle cx="800" cy="460" r="36" fill="white" fillOpacity="0.2" />
        <text x="800" y="455" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Payments</text>
        <text x="800" y="475" textAnchor="middle" fill="white" fontSize="12">$182,450</text>
        
        {/* Conversion indicator */}
        <circle cx="760" cy="460" r="15" fill="white" opacity="0.9" />
        <text x="760" y="464" textAnchor="middle" fill={theme.purchase} fontSize="12" fontWeight="bold">$119</text>
      </g>
      
      {/* Email Node */}
      <g>
        <circle cx="800" cy="540" r="45" fill={theme.retention} />
        <circle cx="800" cy="540" r="41" fill="white" fillOpacity="0.2" />
        <text x="800" y="535" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Email</text>
        <text x="800" y="555" textAnchor="middle" fill="white" fontSize="12">1,273 subscribers</text>
        
        {/* Conversion indicator */}
        <circle cx="755" cy="540" r="15" fill="white" opacity="0.9" />
        <text x="755" y="544" textAnchor="middle" fill={theme.retention} fontSize="12" fontWeight="bold">65%</text>
      </g>
      
      {/* Analytics Node */}
      <g>
        <circle cx="800" cy="160" r="45" fill={theme.retention} />
        <circle cx="800" cy="160" r="41" fill="white" fillOpacity="0.2" />
        <text x="800" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Analytics</text>
        <text x="800" y="175" textAnchor="middle" fill="white" fontSize="12">Customer Insights</text>
        
        {/* Conversion indicator */}
        <circle cx="755" cy="160" r="15" fill="white" opacity="0.9" />
        <text x="755" y="164" textAnchor="middle" fill={theme.retention} fontSize="12" fontWeight="bold">7.9%</text>
      </g>
      
      {/* Loyalty Node */}
      <g>
        <circle cx="800" cy="80" r="40" fill={theme.retention} />
        <circle cx="800" cy="80" r="36" fill="white" fillOpacity="0.2" />
        <text x="800" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Loyalty</text>
        <text x="800" y="95" textAnchor="middle" fill="white" fontSize="12">832 members</text>
        
        {/* Conversion indicator */}
        <circle cx="760" cy="80" r="15" fill="white" opacity="0.9" />
        <text x="760" y="84" textAnchor="middle" fill={theme.retention} fontSize="12" fontWeight="bold">54%</text>
      </g>
      
      {/* Animated particles */}
      {isPlaying && (
        <>
          {/* Website to Hub */}
          <circle r="3" fill={theme.discovery}>
            <animateMotion path="M250,160 C300,180 500,180 500,230" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill={theme.discovery}>
            <animateMotion path="M250,160 C300,180 500,180 500,230" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
          
          {/* Mobile to Hub */}
          <circle r="3" fill={theme.discovery}>
            <animateMotion path="M250,80 C400,110 500,150 500,230" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill={theme.discovery}>
            <animateMotion path="M250,80 C400,110 500,150 500,230" dur="3s" begin="1.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Support to Hub */}
          <circle r="3" fill={theme.consideration}>
            <animateMotion path="M250,380 C300,350 350,300 430,300" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill={theme.consideration}>
            <animateMotion path="M250,380 C300,350 350,300 430,300" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
          
          {/* Social to Hub */}
          <circle r="3" fill={theme.consideration}>
            <animateMotion path="M250,460 C300,450 400,400 450,350" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill={theme.consideration}>
            <animateMotion path="M250,460 C300,450 400,400 450,350" dur="3s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Hub to Orders */}
          <circle r="3" fill={theme.purchase}>
            <animateMotion path="M570,300 C650,300 700,350 750,380" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill={theme.purchase}>
            <animateMotion path="M570,300 C650,300 700,350 750,380" dur="3s" begin="1.2s" repeatCount="indefinite" />
          </circle>
          
          {/* Hub to Payments */}
          <circle r="3" fill={theme.purchase}>
            <animateMotion path="M550,350 C600,400 700,450 750,460" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill={theme.purchase}>
            <animateMotion path="M550,350 C600,400 700,450 750,460" dur="3s" begin="0.8s" repeatCount="indefinite" />
          </circle>
          
          {/* Hub to Email */}
          <circle r="3" fill={theme.retention}>
            <animateMotion path="M500,370 C500,420 700,440 750,540" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill={theme.retention}>
            <animateMotion path="M500,370 C500,420 700,440 750,540" dur="3s" begin="1.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Hub to Analytics */}
          <circle r="3" fill={theme.retention}>
            <animateMotion path="M500,230 C500,180 700,180 750,160" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill={theme.retention}>
            <animateMotion path="M500,230 C500,180 700,180 750,160" dur="3s" begin="0.6s" repeatCount="indefinite" />
          </circle>
          
          {/* Hub to Loyalty */}
          <circle r="3" fill={theme.retention}>
            <animateMotion path="M500,230 C500,150 600,110 750,80" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill={theme.retention}>
            <animateMotion path="M500,230 C500,150 600,110 750,80" dur="3s" begin="1.8s" repeatCount="indefinite" />
          </circle>
        </>
      )}
    </svg>
  );
};

export default JourneyFlowVisualization;
