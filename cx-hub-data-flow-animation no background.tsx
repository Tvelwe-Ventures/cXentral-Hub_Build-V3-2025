import React, { useState, useEffect, useRef } from 'react';

const DataFlowAnimationPrototype = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const togglePlayPause = () => setIsPlaying(!isPlaying);
  
  const theme = {
    bg: isDarkMode ? 'bg-[#0D0D15]' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    mutedText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    cardBg: isDarkMode ? 'bg-[#1A1A24]' : 'bg-white',
    border: isDarkMode ? 'border-gray-800' : 'border-gray-200',
    accentBg: 'bg-[#2358E9]',
    accentLight: isDarkMode ? 'bg-[#2358E9]/10' : 'bg-[#2358E9]/5',
    sourceBg: isDarkMode ? '#2358E9' : '#2358E9',
    destinationBg: isDarkMode ? '#6c757d' : '#6c757d',
    hubBg: isDarkMode ? 'rgba(35, 88, 233, 0.1)' : 'rgba(35, 88, 233, 0.05)',
    hubBorder: '#2358E9',
    particleFill: '#2358E9'
  };
  
  // Animation frames for particles
  const animationSpeed1 = 3 / animationSpeed;
  const animationSpeed2 = 4 / animationSpeed;
  const animationSpeed3 = 3.5 / animationSpeed;
  const animationSpeed4 = 3.2 / animationSpeed;
  
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
          value={animationSpeed}
          onChange={(e) => setAnimationSpeed(Number(e.target.value))}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
        >
          <option value={0.5}>0.5x</option>
          <option value={1}>1x</option>
          <option value={1.5}>1.5x</option>
          <option value={2}>2x</option>
        </select>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Data Flow Animation Prototype</h1>
          <p className={theme.mutedText}>
            Visualizing real-time data movement through the cXentral Hub platform
          </p>
        </div>
        
        {/* Main Animation Area */}
        <div className={`max-w-4xl mx-auto ${theme.cardBg} border ${theme.border} rounded-xl p-6 shadow-lg`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Real-time Data Flow</h2>
            <div className="flex items-center gap-2">
              <span className={theme.mutedText}>Visualization for homepage hero</span>
            </div>
          </div>
          
          <div className="relative h-[500px] overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 800 500">
              {/* Source Systems */}
              <g>
                <rect x="20" y="80" width="120" height="40" rx="4" fill={theme.sourceBg} />
                <text x="80" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">CRM</text>
                
                <rect x="20" y="150" width="120" height="40" rx="4" fill={theme.sourceBg} />
                <text x="80" y="175" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Support</text>
                
                <rect x="20" y="220" width="120" height="40" rx="4" fill={theme.sourceBg} />
                <text x="80" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Website</text>
                
                <rect x="20" y="290" width="120" height="40" rx="4" fill={theme.sourceBg} />
                <text x="80" y="315" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Mobile App</text>
                
                <rect x="20" y="360" width="120" height="40" rx="4" fill={theme.sourceBg} />
                <text x="80" y="385" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">IoT Devices</text>
              </g>
              
              {/* cXentral Hub - Central Processing */}
              <g>
                <rect x="300" y="120" width="200" height="280" rx="8" fill={theme.hubBg} stroke={theme.hubBorder} strokeWidth="2" />
                <text x="400" y="155" textAnchor="middle" fill={isDarkMode ? 'white' : '#2358E9'} fontSize="18" fontWeight="bold">cXentral Hub</text>
                
                {/* Processing Modules */}
                <rect x="325" y="180" width="150" height="30" rx="4" fill={isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} />
                <text x="400" y="200" textAnchor="middle" fill={isDarkMode ? 'white' : '#333'} fontSize="12">Data Collection</text>
                
                <rect x="325" y="230" width="150" height="30" rx="4" fill={isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} />
                <text x="400" y="250" textAnchor="middle" fill={isDarkMode ? 'white' : '#333'} fontSize="12">Processing & Enrichment</text>
                
                <rect x="325" y="280" width="150" height="30" rx="4" fill={isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} />
                <text x="400" y="300" textAnchor="middle" fill={isDarkMode ? 'white' : '#333'} fontSize="12">Transformation</text>
                
                <rect x="325" y="330" width="150" height="30" rx="4" fill={isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} />
                <text x="400" y="350" textAnchor="middle" fill={isDarkMode ? 'white' : '#333'} fontSize="12">Routing & Distribution</text>
              </g>
              
              {/* Destination Systems */}
              <g>
                <rect x="660" y="80" width="120" height="40" rx="4" fill={theme.destinationBg} />
                <text x="720" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Analytics</text>
                
                <rect x="660" y="150" width="120" height="40" rx="4" fill={theme.destinationBg} />
                <text x="720" y="175" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Dashboards</text>
                
                <rect x="660" y="220" width="120" height="40" rx="4" fill={theme.destinationBg} />
                <text x="720" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Automation</text>
                
                <rect x="660" y="290" width="120" height="40" rx="4" fill={theme.destinationBg} />
                <text x="720" y="315" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">Alerts</text>
                
                <rect x="660" y="360" width="120" height="40" rx="4" fill={theme.destinationBg} />
                <text x="720" y="385" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">AI Services</text>
              </g>
              
              {/* Connector Lines */}
              <g>
                {/* Source to Hub Connectors */}
                <path d="M140,100 C200,100 240,140 300,170" stroke={theme.hubBorder} strokeWidth="2" fill="none" strokeDasharray={isPlaying ? "none" : "5,5"} />
                <path d="M140,170 C200,170 240,180 300,200" stroke={theme.hubBorder} strokeWidth="2" fill="none" strokeDasharray={isPlaying ? "none" : "5,5"} />
                <path d="M140,240 C200,240 240,220 300,230" stroke={theme.hubBorder} strokeWidth="2" fill="none" strokeDasharray={isPlaying ? "none" : "5,5"} />
                <path d="M140,310 C200,310 240,260 300,280" stroke={theme.hubBorder} strokeWidth="2" fill="none" strokeDasharray={isPlaying ? "none" : "5,5"} />
                <path d="M140,380 C200,380 240,300 300,330" stroke={theme.hubBorder} strokeWidth="2" fill="none" strokeDasharray={isPlaying ? "none" : "5,5"} />
                
                {/* Hub to Destination Connectors */}
                <path d="M500,170 C560,170 600,100 660,100" stroke={theme.hubBorder} strokeWidth="2" fill="none" strokeDasharray={isPlaying ? "none" : "5,5"} />
                <path d="M500,200 C560,200 600,170 660,170" stroke={theme.hubBorder} strokeWidth="2" fill="none" strokeDasharray={isPlaying ? "none" : "5,5"} />
                <path d="M500,230 C560,230 600,240 660,240" stroke={theme.hubBorder} strokeWidth="2" fill="none" strokeDasharray={isPlaying ? "none" : "5,5"} />
                <path d="M500,280 C560,280 600,310 660,310" stroke={theme.hubBorder} strokeWidth="2" fill="none" strokeDasharray={isPlaying ? "none" : "5,5"} />
                <path d="M500,330 C560,330 600,380 660,380" stroke={theme.hubBorder} strokeWidth="2" fill="none" strokeDasharray={isPlaying ? "none" : "5,5"} />
              </g>
              
              {/* Data Particles */}
              {isPlaying && (
                <g>
                  {/* Source to Hub Particles */}
                  <circle className="data-particle" r="4" fill={theme.particleFill}>
                    <animateMotion
                      path="M140,100 C200,100 240,140 300,170"
                      dur={`${animationSpeed1}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  <circle className="data-particle" r="4" fill={theme.particleFill}>
                    <animateMotion
                      path="M140,170 C200,170 240,180 300,200"
                      dur={`${animationSpeed2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  <circle className="data-particle" r="4" fill={theme.particleFill}>
                    <animateMotion
                      path="M140,240 C200,240 240,220 300,230"
                      dur={`${animationSpeed3}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  <circle className="data-particle" r="4" fill={theme.particleFill}>
                    <animateMotion
                      path="M140,310 C200,310 240,260 300,280"
                      dur={`${animationSpeed4}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  <circle className="data-particle" r="4" fill={theme.particleFill}>
                    <animateMotion
                      path="M140,380 C200,380 240,300 300,330"
                      dur={`${animationSpeed1}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  {/* Hub to Destination Particles */}
                  <circle className="data-particle" r="4" fill={theme.particleFill}>
                    <animateMotion
                      path="M500,170 C560,170 600,100 660,100"
                      dur={`${animationSpeed2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  <circle className="data-particle" r="4" fill={theme.particleFill}>
                    <animateMotion
                      path="M500,200 C560,200 600,170 660,170"
                      dur={`${animationSpeed3}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  <circle className="data-particle" r="4" fill={theme.particleFill}>
                    <animateMotion
                      path="M500,230 C560,230 600,240 660,240"
                      dur={`${animationSpeed4}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  <circle className="data-particle" r="4" fill={theme.particleFill}>
                    <animateMotion
                      path="M500,280 C560,280 600,310 660,310"
                      dur={`${animationSpeed1}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  <circle className="data-particle" r="4" fill={theme.particleFill}>
                    <animateMotion
                      path="M500,330 C560,330 600,380 660,380"
                      dur={`${animationSpeed2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              )}
              
              {/* Processing Visual Effects */}
              {isPlaying && (
                <g>
                  <circle cx="400" cy="260" r="30" fill="transparent" stroke={theme.hubBorder} strokeWidth="1" opacity="0.5">
                    <animate attributeName="r" values="30;40;30" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite" />
                  </circle>
                </g>
              )}
            </svg>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className={`p-3 rounded ${theme.accentLight}`}>
              <div className="text-sm font-medium mb-1">Data Sources</div>
              <div className="text-2xl font-bold text-[#2358E9]">5</div>
              <div className={`text-xs ${theme.mutedText} mt-1`}>connected systems</div>
            </div>
            
            <div className={`p-3 rounded ${theme.accentLight}`}>
              <div className="text-sm font-medium mb-1">Processing</div>
              <div className="text-2xl font-bold text-[#2358E9]">Real-time</div>
              <div className={`text-xs ${theme.mutedText} mt-1`}>continuous flow</div>
            </div>
            
            <div className={`p-3 rounded ${theme.accentLight}`}>
              <div className="text-sm font-medium mb-1">Destinations</div>
              <div className="text-2xl font-bold text-[#2358E9]">5</div>
              <div className={`text-xs ${theme.mutedText} mt-1`}>output systems</div>
            </div>
            
            <div className={`p-3 rounded ${theme.accentLight}`}>
              <div className="text-sm font-medium mb-1">Latency</div>
              <div className="text-2xl font-bold text-[#2358E9]">42ms</div>
              <div className={`text-xs ${theme.mutedText} mt-1`}>average</div>
            </div>
          </div>
        </div>
        
        {/* Developer Notes */}
        <div className={`max-w-4xl mx-auto mt-8 ${theme.cardBg} border ${theme.border} rounded-xl p-6 shadow-lg`}>
          <h2 className="text-xl font-semibold mb-4">Developer Implementation Notes</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Animation Technique</h3>
              <p className={theme.mutedText}>
                SVG with animateMotion elements for the data particles moving along paths. CSS transitions for color changes.
                This approach allows fluid movement along curved paths that would be difficult with CSS animations alone.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Responsiveness</h3>
              <p className={theme.mutedText}>
                The animation container should maintain a minimum height on mobile, with the SVG viewBox adjusting 
                to preserve the visual elements. Consider alternative layouts for very small screens.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Performance Considerations</h3>
              <p className={theme.mutedText}>
                Optimize by reducing animation complexity on low-powered devices. Consider implementing 
                requestAnimationFrame with React hooks rather than SVG animation elements if better performance is needed.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Theming</h3>
              <p className={theme.mutedText}>
                Animation supports both light and dark modes with appropriate color adjustments.
                Animation elements should inherit theme colors from CSS variables defined at the root level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFlowAnimationPrototype;
