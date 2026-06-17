import React from "react";
import { ArrowRight, Factory, Recycle, Shirt, Truck, Users } from "lucide-react";

const processSteps = [
  { icon: Recycle, title: "Waste Collection", description: "Joint collection of pre-consumer textile waste from garment factories." },
  { icon: Truck, title: "Centralized Sorting", description: "Waste is transported to our hub for AI-powered sorting by color and material." },
  { icon: Factory, title: "Recycling Process", description: "Transformation into recycled fibers through mechanical recycling." },
  { icon: Users, title: "MSME Network", description: "Fibers are supplied to our partner MSMEs for spinning into yarn and weaving into fabric." },
  { icon: Shirt, title: "Sustainable Products", description: "Creation of high-value, sustainable garments and textiles with digital traceability." },
];

export function WasteTransformationVisualizer() {
  return (
    <div className="p-8 bg-secondary rounded-lg">
      <h3 className="text-2xl font-bold font-headline text-center mb-8">How the Cluster Model Works</h3>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {processSteps.map((step, index) => (
          <React.Fragment key={step.title}>
            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-3">
                <step.icon className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-sm">{step.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
            </div>
            {index < processSteps.length - 1 && (
              <ArrowRight className="h-8 w-8 text-primary/50 my-4 md:my-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
