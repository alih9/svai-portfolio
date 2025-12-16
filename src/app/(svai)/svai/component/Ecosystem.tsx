'use client';

import React, { useEffect, useRef, useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

/**
 * Type Definitions
 */
type EcosystemNode = {
  id: string; // Unique ID for finding element
  title: string;
  description: string;
  tags: { label: string; className: string }[]; // className helps us map the specific colors
  icon: string;
  headerIconUrl?: string; // If we needed custom SVGs, but we'll use Iconify for consistency
  headerBg?: string; // Background for the icon box
  headerColor?: string; // Color for the icon
  desktopPos: string; // Tailwind class or string for absolute position (e.g. 'top-[2%] left-[50%] -translate-x-1/2')
};

/**
 * Data Configurations
 * Mapping colors from the original HTML to arbitrary Tailwind values or styles.
 */

// Ingest Sources
const ingestSources: EcosystemNode[] = [
  {
    id: 'sat-in-1',
    title: 'File-Based Sources',
    description: 'Ingest structured and unstructured data from local or network file systems.',
    icon: 'solar:document-add-linear',
    desktopPos: 'top-[2%] left-1/2 -translate-x-1/2',
    tags: [
      { label: 'CSV Files', className: 'text-[#217346] border-[#217346]/30 hover:bg-[#217346]/10' },
      { label: 'TSV Files', className: 'text-[#217346] border-[#217346]/30 hover:bg-[#217346]/10' },
      { label: 'JSON Files', className: 'text-black border-black/30 hover:bg-black/10' },
      { label: 'XML Files', className: 'text-[#F57F17] border-[#F57F17]/30 hover:bg-[#F57F17]/10' },
      { label: 'Excel Files', className: 'text-[#217346] border-[#217346]/30 hover:bg-[#217346]/10' },
    ],
  },
  {
    id: 'sat-in-2',
    title: 'Custom Connectors',
    description: 'Connect proprietary systems using API, SDK, or standard protocols.',
    icon: 'solar:plug-circle-linear',
    desktopPos: 'top-[8%] right-[2%] translate-x-0',
    tags: [
      { label: 'Custom Connectors', className: 'text-sky-500 border-sky-500/30 hover:bg-sky-500/10' },
      { label: 'Custom API / SDK', className: 'text-purple-600 border-purple-600/30 hover:bg-purple-600/10' },
      { label: 'Custom Webhooks', className: 'text-red-500 border-red-500/30 hover:bg-red-500/10' },
      { label: 'JDBC', className: 'text-red-700 border-red-700/30 hover:bg-red-700/10' },
    ],
  },
  {
    id: 'sat-in-3',
    title: 'Cloud & Storage',
    description: 'Securely access data stored in major cloud providers.',
    icon: 'solar:cloud-storage-linear',
    desktopPos: 'top-[38%] right-[3%] translate-x-0',
    tags: [
      { label: 'Amazon S3', className: 'text-[#FF9900] border-[#FF9900]/30 hover:bg-[#FF9900]/10' },
      { label: 'GCS', className: 'text-[#4285F4] border-[#4285F4]/30 hover:bg-[#4285F4]/10' },
      { label: 'Azure Blob', className: 'text-[#007FFF] border-[#007FFF]/30 hover:bg-[#007FFF]/10' },
      { label: 'SharePoint', className: 'text-[#0078D4] border-[#0078D4]/30 hover:bg-[#0078D4]/10' },
      { label: 'Dropbox', className: 'text-[#0061FF] border-[#0061FF]/30 hover:bg-[#0061FF]/10' },
    ],
  },
  {
    id: 'sat-in-4',
    title: 'Databases',
    description: 'Directly sync with transactional and analytical databases.',
    icon: 'solar:database-linear',
    desktopPos: 'top-[38%] left-[3%] translate-x-0',
    tags: [
      { label: 'PostgreSQL', className: 'text-[#336791] border-[#336791]/30 hover:bg-[#336791]/10' },
      { label: 'MySQL', className: 'text-[#4479A1] border-[#4479A1]/30 hover:bg-[#4479A1]/10' },
      { label: 'SQL Server', className: 'text-[#CC2927] border-[#CC2927]/30 hover:bg-[#CC2927]/10' },
      { label: 'Snowflake', className: 'text-[#29B5E8] border-[#29B5E8]/30 hover:bg-[#29B5E8]/10' },
      { label: 'MongoDB', className: 'text-[#47A248] border-[#47A248]/30 hover:bg-[#47A248]/10' },
    ],
  },
  {
    id: 'sat-in-5',
    title: 'Enterprise Tools',
    description: 'Integrate with your team\'s productivity and support platforms.',
    icon: 'solar:briefcase-linear',
    desktopPos: 'top-[8%] left-[2%] translate-x-0',
    tags: [
      { label: 'Confluence', className: 'text-[#172B4D] border-[#172B4D]/30 hover:bg-[#172B4D]/10' },
      { label: 'Jira', className: 'text-[#0052CC] border-[#0052CC]/30 hover:bg-[#0052CC]/10' },
      { label: 'Salesforce', className: 'text-[#00A1E0] border-[#00A1E0]/30 hover:bg-[#00A1E0]/10' },
      { label: 'HubSpot', className: 'text-[#FF7A59] border-[#FF7A59]/30 hover:bg-[#FF7A59]/10' },
      { label: 'Slack', className: 'text-[#4A154B] border-[#4A154B]/30 hover:bg-[#4A154B]/10' },
    ],
  },
];

// Output Destinations
const outputDestinations: EcosystemNode[] = [
  {
    id: 'sat-out-1',
    title: 'E-Commerce',
    description: 'Embed semantic search and product recommendations directly into your digital storefronts.',
    icon: 'solar:cart-5-linear',
    headerBg: 'bg-[#ecfdf5]',
    headerColor: 'text-[#10b981]',
    desktopPos: 'top-[60%] left-[5%] translate-x-0',
    tags: [],
  },
  {
    id: 'sat-out-2',
    title: 'Finance',
    description: 'Provide instant risk analysis, automated compliance checks, and real-time report summaries.',
    icon: 'solar:chart-square-linear',
    headerBg: 'bg-[#fffbeb]',
    headerColor: 'text-[#f59e0b]',
    desktopPos: 'top-[60%] right-[5%] translate-x-0',
    tags: [],
  },
  {
    id: 'sat-out-3',
    title: 'Logistics',
    description: 'Optimize routing, track shipments, and answer operational questions for field teams instantly.',
    icon: 'solar:truck-linear',
    headerBg: 'bg-[#fef2f2]',
    headerColor: 'text-[#ef4444]',
    desktopPos: 'top-[85%] right-[15%] translate-x-0',
    tags: [],
  },
  {
    id: 'sat-out-4',
    title: 'Customer Experience',
    description: 'Empower support agents and automated chatbots with accurate, context-aware knowledge.',
    icon: 'solar:users-group-two-rounded-linear',
    headerBg: 'bg-[#f5f3ff]',
    headerColor: 'text-[#8b5cf6]',
    desktopPos: 'top-[85%] left-[15%] translate-x-0',
    tags: [],
  },
  {
    id: 'sat-out-5',
    title: 'Internal Tools',
    description: 'Build custom AI agents, dashboards, and automated workflows for your employees.',
    icon: 'solar:terminal-linear',
    headerBg: 'bg-[#f1f5f9]',
    headerColor: 'text-[#64748b]',
    desktopPos: 'top-[96%] left-1/2 -translate-x-1/2',
    tags: [],
  },
];


const Ecosystem = () => {
  // State to manage lines drawing
  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number; id: string }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const hubIngestRef = useRef<HTMLDivElement>(null);
  const hubConnectRef = useRef<HTMLDivElement>(null);

  // Helper to calculate center of element relative to container
  const getRelativeCenter = (el: HTMLElement, container: HTMLElement) => {
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    return {
      x: elRect.left - containerRect.left + elRect.width / 2,
      y: elRect.top - containerRect.top + elRect.height / 2,
    };
  };

  const drawLines = () => {
    // We need to wait for the layout to be ready.
    // In a real browser, we might use ResizeObserver or just a safe timeout loop/raf.
    if (!containerRef.current || !hubIngestRef.current || !hubConnectRef.current) return;

    const newLines: typeof lines = [];
    const container = containerRef.current;
    
    // Ingest Lines (only for desktop mainly, we check width inside loop if needed, but CSS handles card visibility)
    // We'll draw them if the elements exist and are visible (width > 0 to be sure).

    // Calculate Ingest Hub Center
    const ingestCenter = getRelativeCenter(hubIngestRef.current, container);
    
    // Calculate Connect Hub Center
    const connectCenter = getRelativeCenter(hubConnectRef.current, container);

    // 1. Lines to Ingest Hub
    ingestSources.forEach(node => {
      const el = document.getElementById(node.id);
      if (el && container && el.offsetParent !== null) { // Check visibility
        const center = getRelativeCenter(el, container);
        newLines.push({
          id: `line-${node.id}`,
          x1: center.x,
          y1: center.y,
          x2: ingestCenter.x,
          y2: ingestCenter.y
        });
      }
    });

    // 2. Lines from Connect Hub
    outputDestinations.forEach(node => {
      const el = document.getElementById(node.id);
      if (el && container && el.offsetParent !== null) {
        const center = getRelativeCenter(el, container);
        newLines.push({
          id: `line-${node.id}`,
          x1: connectCenter.x,
          y1: connectCenter.y,
          x2: center.x,
          y2: center.y
        });
      }
    });

    // 3. Line between Hubs
    newLines.push({
        id: 'line-hubs',
        x1: ingestCenter.x,
        y1: ingestCenter.y,
        x2: connectCenter.x,
        y2: connectCenter.y
    });

    setLines(newLines);
  };

  useEffect(() => {
    // Initial draw
    // We use a small timeout to ensure DOM painting is complete
    const timer = setTimeout(drawLines, 500);
    
    // Redraw on resize
    const handleResize = () => {
      drawLines();
    };

    window.addEventListener('resize', handleResize);
    return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#021210] overflow-hidden text-white font-sans py-20 min-h-[auto] lg:min-h-[1400px]">
        {/* CSS Animations Styles */}
        <style dangerouslySetInnerHTML={{__html: `
            .bg-radial-custom {
                background-image: radial-gradient(circle at 50% 40%, #062b2e 0%, #021210 80%);
            }
            @keyframes flowData { 
                from { stroke-dashoffset: 32; } 
                to { stroke-dashoffset: 0; } 
            }
            .animate-flow {
                animation: flowData 1.5s linear infinite;
            }
            @keyframes pulseHeart {
                0% { box-shadow: 0 0 40px rgba(14, 165, 233, 0.3); transform: translate(-50%, -50%) scale(1); }
                50% { box-shadow: 0 0 80px rgba(14, 165, 233, 0.6); transform: translate(-50%, -50%) scale(1.05); }
                100% { box-shadow: 0 0 40px rgba(14, 165, 233, 0.3); transform: translate(-50%, -50%) scale(1); }
            }
            .animate-heartbeat {
                animation: pulseHeart 3s infinite ease-in-out;
            }
            /* Custom Scrollbar for Tags if needed, but not critical */
        `}} />

      <div className="absolute inset-0 bg-radial-custom pointer-events-none" />

      {/* Main Container - Relative for absolute positioning of children */}
      <div 
        ref={containerRef} 
        className="relative container mx-auto px-4 lg:h-[1300px] flex flex-col lg:block gap-8"
      >
        
        {/* SVG Layer for lines (Desktop only usually, or handled responsively) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block">
            {lines.map(line => (
                <line 
                    key={line.id}
                    x1={line.x1} y1={line.y1}
                    x2={line.x2} y2={line.y2}
                    className="stroke-sky-400 stroke-2 opacity-30"
                    strokeDasharray="8 8"
                >
                    <animate 
                        attributeName="stroke-dashoffset" 
                        from="32" to="0" 
                        dur="1.5s" 
                        repeatCount="indefinite" 
                    />
                </line>
            ))}
        </svg>

        {/* --- INGEST SECTION --- */}

        {/* Ingest Hub */}
        <div 
            ref={hubIngestRef}
            className="lg:absolute lg:top-[22%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
                       relative z-10 w-40 h-40 rounded-full bg-gradient-to-br from-white to-slate-100 
                       border-4 border-sky-500 shadow-[0_0_50px_rgba(14,165,233,0.3)] 
                       flex flex-col items-center justify-center text-center mx-auto lg:mx-0
                       lg:animate-heartbeat"
        >
            <h1 className="text-2xl font-extrabold text-slate-900 leading-none">
                SparkVerse<br/><span className="text-sky-500">AI</span>
            </h1>
            <div className="text-[0.65rem] uppercase tracking-widest font-bold text-slate-500 mt-1">
                Knowledge Hub
            </div>
        </div>

        {/* Ingest Satellites */}
        {ingestSources.map((node, index) => (
            <div
                key={node.id}
                id={node.id}
                className={`
                    relative z-10 bg-white border border-slate-200 rounded-2xl p-5 shadow-xl
                    w-full lg:w-[280px] lg:absolute ${node.desktopPos}
                    cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-sky-500 hover:z-20
                `}
            >
                <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center flex-shrink-0">
                        <IconifyIconClient icon={node.icon} className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{node.title}</h3>
                </div>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    {node.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {node.tags.map((tag, i) => (
                        <span 
                            key={i} 
                            className={`flex items-center gap-1 text-[0.65rem] px-2 py-1 rounded-md border font-semibold transition-colors ${tag.className}`}
                        >
                            <IconifyIconClient icon="solar:tag-linear" className="w-2.5 h-2.5 opacity-70"/>
                            {tag.label}
                        </span>
                    ))}
                </div>
                <button className="text-[0.7rem] font-bold text-sky-500 flex items-center gap-1 mt-auto hover:text-sky-700">
                    <IconifyIconClient icon="solar:eye-linear" className="w-3.5 h-3.5"/>
                    View all
                </button>
            </div>
        ))}


        {/* --- CONNECT SECTION --- */}

        {/* Intelligence Engine Hub */}
        <div 
            ref={hubConnectRef}
            className="lg:absolute lg:top-[72%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
                       relative z-10 w-44 h-44 rounded-full bg-gradient-to-br from-white to-slate-100 
                       border-4 border-sky-500 shadow-[0_0_50px_rgba(14,165,233,0.3)] 
                       flex flex-col items-center justify-center text-center mx-auto lg:mx-0
                       lg:animate-heartbeat"
        >
            <h1 className="text-2xl font-extrabold text-slate-900 leading-none">
                SparkVerse<br/><span className="text-sky-500">AI</span>
            </h1>
            <div className="text-[0.65rem] uppercase tracking-widest font-bold text-sky-900 bg-sky-100 px-2 py-1 rounded-full mt-1.5">
                Intelligence Engine
            </div>
        </div>

        {/* Output Satellites */}
        {outputDestinations.map(node => (
             <div
                key={node.id}
                id={node.id}
                className={`
                    relative z-10 bg-white border border-slate-200 rounded-2xl p-5 shadow-xl
                    w-full lg:w-[280px] lg:absolute ${node.desktopPos}
                    cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-sky-500 hover:z-20
                `}
            >
                <div className="flex items-center gap-2.5 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${node.headerBg || 'bg-slate-100'} ${node.headerColor || 'text-slate-600'}`}>
                        <IconifyIconClient icon={node.icon} className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{node.title}</h3>
                </div>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {node.description}
                </p>
                
                <button className="flex items-center gap-1.5 bg-sky-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-sky-600 transition-colors ml-auto mr-auto lg:mr-auto lg:ml-0">
                    Explore More 
                    <IconifyIconClient icon="solar:arrow-right-linear" className="w-3.5 h-3.5"/>
                </button>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Ecosystem;
