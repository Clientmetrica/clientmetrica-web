import { AlertTriangle, Clock, GitMerge } from "lucide-react";
import type { ServiceContent } from "@/types/service";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "alert-triangle": AlertTriangle,
  clock: Clock,
  "git-merge": GitMerge,
};

interface ServiceProblemProps {
  service: ServiceContent;
}

export default function ServiceProblem({ service }: ServiceProblemProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy">
            {service.problemHeadline}
          </h2>
          <p className="mt-3 text-brand-navy/60 leading-relaxed">{service.problemSubheadline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.problems.map((problem) => {
            const Icon = ICON_MAP[problem.icon] ?? AlertTriangle;
            return (
              <div key={problem.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-orange" />
                </div>
                <h3 className="font-heading text-base font-bold text-brand-navy mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
