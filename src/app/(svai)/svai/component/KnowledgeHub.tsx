'use client';

import React, { useEffect, useRef, useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

/**
 * Type Definitions
 */
type KnowledgeHubNode = {
  id: string; // Unique ID for finding element
  title: string;
  description?: string;
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
const ingestSources: KnowledgeHubNode[] = [
  {
    id: 'sat-in-1',
    title: 'File-Based Sources',
    // description: 'Ingest structured and unstructured data from local or network file systems.',
    icon: 'solar:document-add-linear',
    desktopPos: 'top-[0%] left-1/2 -translate-x-1/2',
    tags: [
      { label: 'CSV Files', className: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' },
      { label: 'TSV Files', className: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' },
    ],
  },
  {
    id: 'sat-in-2',
    title: 'Custom Connectors',
    // description: 'Connect proprietary systems using API, SDK, or standard protocols.',
    icon: 'solar:plug-circle-linear',
    desktopPos: 'top-[8%] right-[10%] translate-x-0',
    tags: [
      { label: 'Custom Connectors', className: 'text-sky-400 border-sky-400/30 bg-sky-400/10' },
      { label: 'API / SDK', className: 'text-purple-400 border-purple-400/30 bg-purple-400/10' },
    ],
  },
  {
    id: 'sat-in-3',
    title: 'Cloud & Storage',
    // description: 'Securely access data stored in major cloud providers.',
    icon: 'solar:cloud-storage-linear',
    desktopPos: 'top-[33%] right-[5%] translate-x-0',
    tags: [
      { label: 'AWS S3', className: 'text-amber-400 border-amber-400/30 bg-amber-400/10' },
      { label: 'GCS', className: 'text-blue-400 border-blue-400/30 bg-blue-400/10' },
      { label: 'Azure Blob', className: 'text-sky-400 border-sky-400/30 bg-sky-400/10' },
    ],
  },
  {
    id: 'sat-in-4',
    title: 'Databases',
    // description: 'Directly sync with transactional and analytical databases.',
    icon: 'solar:database-linear',
    desktopPos: 'top-[33%] left-[5%] translate-x-0',
    tags: [
      { label: 'PostgreSQL', className: 'text-blue-400 border-blue-400/30 bg-blue-400/10' },
      { label: 'MySQL', className: 'text-sky-400 border-sky-400/30 bg-sky-400/10' },
      { label: 'SQL', className: 'text-red-400 border-red-400/30 bg-red-400/10' },
    ],
  },
  {
    id: 'sat-in-5',
    title: 'Enterprise Tools',
    // description: 'Integrate with your team\'s productivity and support platforms.',
    icon: 'solar:briefcase-linear',
    desktopPos: 'top-[8%] left-[10%] translate-x-0',
    tags: [
      { label: 'Confluence', className: 'text-slate-300 border-slate-300/30 bg-slate-300/10' },
      { label: 'Jira', className: 'text-blue-400 border-blue-400/30 bg-blue-400/10' },
      { label: 'HubSpot', className: 'text-orange-400 border-orange-400/30 bg-orange-400/10' },
    ],
  },
];

// Output Destinations
const outputDestinations: KnowledgeHubNode[] = [
  {
    id: 'sat-out-1',
    title: 'E-Commerce',
    description: 'Embed semantic search and product recommendations directly into your digital storefronts.',
    icon: 'solar:cart-5-linear',
    headerBg: 'bg-[#ecfdf5]',
    headerColor: 'text-[#10b981]',
    desktopPos: 'top-[55%] left-[5%] translate-x-0',
    tags: [],
  },
  {
    id: 'sat-out-2',
    title: 'Finance',
    description: 'Provide instant risk analysis, automated compliance checks, and real-time report summaries.',
    icon: 'solar:chart-square-linear',
    headerBg: 'bg-[#fffbeb]',
    headerColor: 'text-[#f59e0b]',
    desktopPos: 'top-[55%] right-[5%] translate-x-0',
    tags: [],
  },
  {
    id: 'sat-out-3',
    title: 'Logistics',
    description: 'Optimize routing, track shipments, and answer operational questions for field teams instantly.',
    icon: 'solar:truck-linear',
    headerBg: 'bg-[#fef2f2]',
    headerColor: 'text-[#ef4444]',
    desktopPos: 'top-[80%] right-[15%] translate-x-0',
    tags: [],
  },
  {
    id: 'sat-out-4',
    title: 'Customer Experience',
    description: 'Empower support agents and automated chatbots with accurate, context-aware knowledge.',
    icon: 'solar:users-group-two-rounded-linear',
    headerBg: 'bg-[#f5f3ff]',
    headerColor: 'text-[#8b5cf6]',
    desktopPos: 'top-[80%] left-[15%] translate-x-0',
    tags: [],
  },
  {
    id: 'sat-out-5',
    title: 'Internal Tools',
    description: 'Build custom AI agents, dashboards, and automated workflows for your employees.',
    icon: 'solar:terminal-linear',
    headerBg: 'bg-[#f1f5f9]',
    headerColor: 'text-[#64748b]',
    desktopPos: 'top-[90%] left-1/2 -translate-x-1/2',
    tags: [],
  },
];


const KnowledgeHub = () => {
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
    <section className="relative w-full bg-dark overflow-hidden text-white font-sans py-20">
        {/* CSS Animations Styles */}
        <style dangerouslySetInnerHTML={{__html: `
            .bg-radial-custom {
                background-image: radial-gradient(circle at 50% 40%, rgba(23, 169, 255, 0.1) 0%, #061d19 80%);
            }
            @keyframes flowData { 
                from { stroke-dashoffset: 32; } 
                to { stroke-dashoffset: 0; } 
            }
            .animate-flow {
                animation: flowData 1.5s linear infinite;
            }
            @keyframes pulseHeart {
                0% { box-shadow: 0 0 40px rgba(23, 169, 255, 0.3); transform: translate(-50%, -50%) scale(1); }
                50% { box-shadow: 0 0 80px rgba(23, 169, 255, 0.6); transform: translate(-50%, -50%) scale(1.05); }
                100% { box-shadow: 0 0 40px rgba(23, 169, 255, 0.3); transform: translate(-50%, -50%) scale(1); }
            }
            .animate-heartbeat {
                animation: pulseHeart 3s infinite ease-in-out;
            }
        `}} />

      <div className="absolute inset-0 bg-radial-custom pointer-events-none" />

      {/* Main Container - Relative for absolute positioning of children */}
      <div 
        ref={containerRef} 
        className="relative container mx-auto px-4 lg:h-[1000px] flex flex-col lg:block gap-8"
      >
        
        {/* SVG Layer for lines (Desktop only usually, or handled responsively) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block">
            {lines.map(line => (
                <line 
                    key={line.id}
                    x1={line.x1} y1={line.y1}
                    x2={line.x2} y2={line.y2}
                    className="stroke-primary stroke-2 opacity-40"
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
            className="lg:absolute lg:top-[30%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
                       relative z-10 w-40 h-40 rounded-full bg-dark/80 backdrop-blur-xl
                       border-4 border-primary shadow-[0_0_50px_rgba(23,169,255,0.3)] 
                       flex flex-col items-center justify-center text-center mx-auto lg:mx-0
                       lg:animate-heartbeat"
        >
            <h1 className="text-2xl font-extrabold text-white leading-none">
                SparkVerse<br/><span className="text-primary">AI</span>
            </h1>
            <div className="text-[0.65rem] uppercase tracking-widest font-bold text-slate-400 mt-1">
                Knowledge Hub
            </div>
        </div>

        {/* Ingest Satellites */}
        {ingestSources.map((node, index) => (
            <div
                key={node.id}
                id={node.id}
                className={`
                    relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl
                    w-full lg:w-[280px] lg:absolute ${node.desktopPos}
                    cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/20 hover:border-primary/50 hover:z-20
                `}
            >
                <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <IconifyIconClient icon={node.icon} className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{node.title}</h3>
                </div>
                <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                    {node.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {node.tags.map((tag, i) => (
                        <span 
                            key={i} 
                            className={`flex items-center gap-1 text-[0.65rem] px-2 py-1 rounded-md border font-bold transition-all ${tag.className}`}
                        >
                            <IconifyIconClient icon="solar:tag-linear" className="w-2.5 h-2.5 opacity-70"/>
                            {tag.label}
                        </span>
                    ))}
                </div>
                <button className="text-[0.7rem] font-bold text-primary flex items-center gap-1 mt-auto hover:text-white transition-colors">
                    <IconifyIconClient icon="solar:eye-linear" className="w-3.5 h-3.5"/>
                    View all
                </button>
            </div>
        ))}


        {/* --- CONNECT SECTION --- */}

        {/* Intelligence Engine Hub */}
        <div 
            ref={hubConnectRef}
            className="lg:absolute lg:top-[70%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
                       relative z-10 w-44 h-44 rounded-full bg-dark/80 backdrop-blur-xl
                       border-4 border-primary shadow-[0_0_50px_rgba(23,169,255,0.3)] 
                       flex flex-col items-center justify-center text-center mx-auto lg:mx-0
                       lg:animate-heartbeat"
        >
            <h1 className="text-2xl font-extrabold text-white leading-none">
                SparkVerse<br/><span className="text-primary">AI</span>
            </h1>
            <div className="text-[0.65rem] uppercase tracking-widest font-bold text-primary bg-primary/10 px-2 py-1 rounded-full mt-1.5 border border-primary/20">
                Intelligence Engine
            </div>
        </div>

        {/* Output Satellites */}
        {outputDestinations.map(node => (
             <div
                key={node.id}
                id={node.id}
                className={`
                    relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl
                    w-full lg:w-[280px] lg:absolute ${node.desktopPos}
                    cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/20 hover:border-primary/50 hover:z-20
                `}
            >
                <div className="flex items-center gap-2.5 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${node.headerBg?.includes('bg-') ? node.headerBg.replace('bg-', 'bg-opacity-20 bg-') : 'bg-white/10'} ${node.headerColor || 'text-slate-400'}`}>
                        <IconifyIconClient icon={node.icon} className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{node.title}</h3>
                </div>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {node.description}
                </p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeHub;
