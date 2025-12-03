'use client';

import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type EcosystemNode = {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  accentClass?: string;
};

const ingestSources: EcosystemNode[] = [
  {
    title: 'File-Based Sources',
    description: 'Ingest structured and unstructured data from local or network file systems.',
    tags: ['CSV', 'TSV', 'JSON', 'XML', 'Excel', 'Text files'],
    icon: 'solar:document-add-linear',
  },
  {
    title: 'Custom Connectors',
    description: 'Connect proprietary systems using APIs, SDKs or standard protocols.',
    tags: ['Custom connector', 'REST / GraphQL', 'Webhooks', 'JDBC / ODBC'],
    icon: 'solar:plug-circle-linear',
  },
  {
    title: 'Cloud & Storage',
    description: 'Securely access content from major cloud and object storage platforms.',
    tags: ['Amazon S3', 'GCS', 'Azure Blob & File', 'SharePoint', 'OneDrive', 'Dropbox', 'Box'],
    icon: 'solar:cloud-storage-linear',
  },
  {
    title: 'Databases',
    description: 'Sync transactional and analytical databases into the knowledge hub.',
    tags: [
      'Postgres',
      'MySQL',
      'SQL Server',
      'Snowflake',
      'BigQuery',
      'Redshift',
      'MongoDB',
      'DynamoDB',
    ],
    icon: 'solar:database-linear',
  },
  {
    title: 'Enterprise Tools',
    description: 'Bring in knowledge from your productivity, GTM, and support stack.',
    tags: [
      'Confluence',
      'Jira',
      'Notion',
      'Salesforce',
      'ServiceNow',
      'Zendesk',
      'HubSpot',
      'Slack',
      'Git repos',
    ],
    icon: 'solar:briefcase-linear',
  },
];

const outputDestinations: EcosystemNode[] = [
  {
    title: 'E‑Commerce',
    description: 'Embed semantic search, discovery, and recommendations into storefronts.',
    tags: ['Product search', 'Collection navigation', 'Recommendations'],
    icon: 'solar:cart-5-linear',
    accentClass: 'from-emerald-500/20 via-emerald-400/10 to-emerald-500/5',
  },
  {
    title: 'Finance',
    description: 'Power risk analysis, compliance checks, and reporting workflows.',
    tags: ['Risk scoring', 'Compliance QA', 'Portfolio insights'],
    icon: 'solar:chart-square-linear',
    accentClass: 'from-amber-400/25 via-amber-300/10 to-amber-400/5',
  },
  {
    title: 'Logistics',
    description: 'Optimize routing, inventory visibility, and field operations.',
    tags: ['Routing', 'Tracking', 'Operational assistance'],
    icon: 'solar:truck-linear',
    accentClass: 'from-rose-500/25 via-rose-400/10 to-rose-500/5',
  },
  {
    title: 'Customer Experience',
    description: 'Assist agents and chatbots with accurate, context-aware knowledge.',
    tags: ['Agent assist', 'Chatbots', 'Self-service portals'],
    icon: 'solar:users-group-two-rounded-linear',
    accentClass: 'from-violet-500/25 via-violet-400/10 to-violet-500/5',
  },
  {
    title: 'Internal Tools',
    description: 'Build internal AI agents, dashboards, and automated workflows.',
    tags: ['Internal copilots', 'Dashboards', 'Automations'],
    icon: 'solar:terminal-linear',
    accentClass: 'from-slate-500/25 via-slate-400/10 to-slate-500/5',
  },
];

const NodeCard = ({ node, align }: { node: EcosystemNode; align: 'top' | 'bottom' }) => {
  return (
    <div
      className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-body-bg/95 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5"
      data-aos={align === 'top' ? 'fade-up' : 'fade-down'}
      data-aos-duration={600}
      data-aos-easing="ease-in-out"
    >
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-white/5 via-white/0 to-white/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex size-9 items-center justify-center rounded-full bg-dark/90 text-primary shadow-[0_0_20px_rgba(23,169,255,0.45)]">
          <IconifyIconClient icon={node.icon} className="size-5" />
        </div>
        <h3 className="text-sm md:text-base lg:text-lg">{node.title}</h3>
      </div>
      <p className="mb-3 text-sm text-dark/80">{node.description}</p>
      <div className="flex flex-wrap gap-2">
        {node.tags.map(tag => (
          <span
            key={tag}
            className="rounded-full border border-black/5 bg-white/80 px-2.5 py-1 text-xs font-medium text-dark/80 shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const DestinationCard = ({ node }: { node: EcosystemNode }) => {
  return (
    <div
      className="group relative flex h-full flex-col justify-between rounded-2xl border border-black/5 bg-white/95 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1.5"
      data-aos="fade-up"
      data-aos-duration={600}
      data-aos-easing="ease-in-out"
    >
      <div
        className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${
          node.accentClass || 'from-primary/25 via-primary/10 to-primary/5'
        } opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex size-9 items-center justify-center rounded-full bg-dark/90 text-primary shadow-[0_0_20px_rgba(23,169,255,0.45)]">
          <IconifyIconClient icon={node.icon} className="size-5" />
        </div>
        <h3 className="text-sm md:text-base lg:text-lg">{node.title}</h3>
      </div>
      <p className="mb-3 text-sm text-dark/80">{node.description}</p>
      <div className="flex flex-wrap gap-2">
        {node.tags.map(tag => (
          <span
            key={tag}
            className="rounded-full border border-black/5 bg-white/90 px-2.5 py-1 text-xs font-medium text-dark/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Ecosystem = () => {
  return (
    <section
      className="bg-dark lg:py-25 md:py-22.5 py-17.5"
      data-aos="fade-up"
      data-aos-duration={700}
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
    >
      <div className="container">
        <div
          className="text-center lg:mb-12.5 mb-7.5"
          data-aos="fade-up"
          data-aos-duration={700}
          data-aos-easing="ease-in-out"
        >
          <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
            The SparkVerse AI Ecosystem
          </div>
          <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl text-white">
            Ingest, connect, and activate intelligence across your stack.
          </h2>
          <p className="text-base text-white/80 md:w-3/5 mx-auto">
            A visual map of how SparkVerse AI ingests data, unifies it into a secure knowledge hub,
            and powers domain‑specific experiences across your business.
          </p>
        </div>
      </div>

      <div className="container-medium">
        <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_50%_40%,#062b2e_0%,#021210_80%)] px-4 py-10 md:px-6 lg:px-10 lg:py-14 shadow-[0_24px_80px_rgba(0,0,0,0.9)]">
          {/* Vertical animated backbone */}
          <div className="pointer-events-none absolute inset-y-8 left-1/2 hidden -translate-x-1/2 lg:block">
            <div className="h-full w-px bg-sky-500/25">
              <div className="h-full w-px animate-pulse bg-[repeating-linear-gradient(to_bottom,rgba(56,189,248,0.9)_0,rgba(56,189,248,0.9)_4px,transparent_4px,transparent_10px)]" />
            </div>
          </div>

          {/* Top: ingest sources */}
          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-200/80">
              <span className="inline-block h-px w-6 bg-sky-400/60" />
              Ingest
              <span className="inline-block h-px w-6 bg-sky-400/60" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {ingestSources.map(node => (
                <NodeCard key={node.title} node={node} align="top" />
              ))}
            </div>
          </div>

          {/* Center hub */}
          <div className="relative z-10 mt-10 flex flex-col items-center gap-4 lg:mt-14">
            <div className="hidden h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-sky-400/40 to-transparent lg:block" />
            <div
              className="relative flex h-36 w-36 items-center justify-center rounded-full border border-sky-400/70 bg-gradient-to-br from-white to-slate-100 text-center shadow-[0_0_60px_rgba(56,189,248,0.70)]"
              data-aos="zoom-in"
              data-aos-duration={700}
              data-aos-easing="ease-out-cubic"
            >
              <div className="absolute -z-10 h-56 w-56 rounded-full bg-sky-500/15 blur-3xl" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                  Knowledge Hub
                </div>
                <h3 className="mt-1 text-lg font-bold text-dark leading-tight">
                  SparkVerse
                  <br />
                  <span className="text-primary">AI</span>
                </h3>
                <p className="mt-1 text-xs text-slate-500">Unified product &amp; knowledge graph</p>
              </div>
            </div>
            <p className="max-w-xl text-center text-xs md:text-sm text-slate-300/90">
              Every source is normalized, enriched, and governed inside a single, privacy‑first
              knowledge layer that powers search, chat, and agents.
            </p>
          </div>

          {/* Bottom: destinations */}
          <div className="relative z-10 mt-10 lg:mt-14">
            <div className="mb-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-200/80">
              <span className="inline-block h-px w-6 bg-sky-400/60" />
              Activate
              <span className="inline-block h-px w-6 bg-sky-400/60" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {outputDestinations.map(node => (
                <DestinationCard key={node.title} node={node} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
