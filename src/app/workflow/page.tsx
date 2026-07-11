import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Projects & Workflow - AAEC Ltd",
  description:
    "AAEC Ltd's methodical 8-stage project lifecycle — from consultation and site analysis through detailed design, construction supervision, and final handover.",
};

const workflowStages = [
  {
    step: "01",
    title: "Consultation",
    description: "Initial meeting to align on project vision, scope, and technical requirements.",
    icon: "handshake",
  },
  {
    step: "02",
    title: "Site Visit",
    description: "Comprehensive site analysis, topographical surveying, and constraint mapping.",
    icon: "location_on",
  },
  {
    step: "03",
    title: "Concept Design",
    description: "Developing preliminary architectural massing and engineering frameworks.",
    icon: "architecture",
  },
  {
    step: "04",
    title: "Detailed Design",
    description: "Rigorous structural calculations, MEP integration, and final blueprint drafting.",
    icon: "straighten",
  },
  {
    step: "05",
    title: "Cost Estimation",
    description: "Meticulous bill of quantities, material sourcing analysis, and budget finalization.",
    icon: "request_quote",
  },
  {
    step: "06",
    title: "Approvals",
    description: "Navigating regulatory frameworks and securing necessary municipal permits.",
    icon: "fact_check",
  },
  {
    step: "07",
    title: "Construction",
    description: "On-site supervision ensuring execution perfectly mirrors structural blueprints.",
    icon: "engineering",
  },
  {
    step: "08",
    title: "Completion",
    description: "Final inspections, technical documentation handover, and project closure.",
    icon: "domain_verification",
  },
];

export default function WorkflowPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background antialiased">
      <SiteNav />

      <main className="flex-grow">
        <section className="relative overflow-hidden border-b border-outline-variant bg-surface-container-lowest py-xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-10 grayscale mix-blend-multiply" />
          <div className="relative z-10 mx-auto max-w-container-max px-md">
            <div className="max-w-2xl">
              <p className="mb-base text-label-md uppercase tracking-wider text-secondary">Project Lifecycle</p>
              <h1 className="mb-md text-display-lg text-primary">Precision in Every Phase</h1>
              <p className="text-body-lg text-on-surface-variant">
                Our methodical 8-stage approach ensures structural integrity, design excellence, and transparent execution from initial concept to final handover.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background py-xl">
          <div className="mx-auto max-w-container-max px-md">
            <div className="relative overflow-x-auto pb-lg pt-md hide-scrollbar">
              <div className="absolute left-md right-md top-[88px] z-0 h-[1px] w-[calc(100vw+800px)] bg-outline-variant lg:w-[1800px]" />
              <div className="relative z-10 flex w-max gap-lg px-md">
                {workflowStages.map((stage) => (
                  <div key={stage.title} className="w-[280px] shrink-0 snap-center">
                    <div className="relative mb-lg">
                      <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant bg-surface-container-lowest text-primary transition-colors duration-300 hover:border-secondary">
                        <span className="material-symbols-outlined">{stage.icon}</span>
                      </div>
                      <div className="absolute left-1/2 top-12 h-6 w-[1px] bg-outline-variant" />
                    </div>
                    <div className="relative border border-outline-variant bg-surface-container-lowest p-md transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(26,43,60,0.08)]">
                      <div className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center border-b border-l border-outline-variant/30 bg-surface-variant">
                        <span className="text-caption text-on-surface-variant">{stage.step}</span>
                      </div>
                      <h3 className="mt-sm mb-xs text-headline-sm text-primary">{stage.title}</h3>
                      <p className="text-body-md text-on-surface-variant">{stage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-md flex items-center justify-end gap-sm opacity-60">
              <span className="material-symbols-outlined text-body-md">swipe_left</span>
              <span className="text-caption uppercase tracking-wider">Scroll to view process</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
