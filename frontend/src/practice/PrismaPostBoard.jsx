import React from "react";
import { PrismaTaskCard, prismaSections } from "./PrismaPracticeBoard";

const postSections = prismaSections.filter((section) =>
  section.tasks.some((t) => t.method === "POST")
).map((section) => ({
  ...section,
  tasks: section.tasks.filter((t) => t.method === "POST"),
}));

const PrismaPostBoard = () => {
  return (
    <div className="space-y-8 bg-slate-950 px-4 py-8 sm:px-8">
      <header className="space-y-3 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-slate-100 shadow-xl shadow-slate-900/50">
        <h1 className="text-2xl font-bold tracking-tight text-white">Prisma POST Practice</h1>
        <p className="text-sm text-slate-300">Focused forms for all POST tasks only.</p>
      </header>
      {postSections.map((section) => (
        <div key={section.title} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase text-emerald-200">{section.tasks.length} tasks</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {section.tasks.map((task) => (
              <PrismaTaskCard key={`${task.title}-${task.path}`} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrismaPostBoard;
