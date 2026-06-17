
import React from 'react';

const roadmapPhases = [
  {
    phase: "Phase 1: 2025 Q1-Q2",
    title: "Infrastructure Modernization",
    description: "Upgrade MSME facilities with green technology and establish the centralized recycling hub.",
  },
  {
    phase: "Phase 2: 2025 Q3-Q4",
    title: "AI Workflow Integration",
    description: "Deploy our AI-driven ERP (QYSEN) for digital traceability and workflow optimization across the network.",
  },
  {
    phase: "Phase 3: 2026 Q1-Q2",
    title: "Export Readiness",
    description: "Achieve global certifications (GRS, RCS) and begin exporting sustainable products to EU and US markets.",
  },
  {
    phase: "Phase 4: 2026 Q3-Q4",
    title: "Evaluation & Scaling",
    description: "Assess impact, refine processes, and develop a plan for scaling the model nationwide.",
  },
];

export function RoadmapTimeline() {
  return (
    <div>
      <h3 className="text-3xl font-bold font-headline text-center mb-12">Implementation Roadmap (2025-2026)</h3>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>
        {roadmapPhases.map((item, index) => (
          <div
            key={item.title}
            className="flex items-center w-full mb-8 md:[&:nth-child(even)]:flex-row-reverse"
          >
            <div className="hidden md:block w-1/2"></div>
            <div className="w-full md:w-1/2 md:[&:nth-child(odd)]:pr-8 md:[&:nth-child(even)]:pl-8">
              <div className="p-5 rounded-lg bg-secondary shadow-md">
                <p className="text-primary font-semibold text-sm mb-1">{item.phase}</p>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
