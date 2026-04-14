import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const sections = [
  { title: "Layout", classes: ["container", "flex", "flex-col", "flex-row", "flex-wrap", "items-center", "justify-center", "justify-between", "grid", "grid-cols-2", "grid-cols-3", "grid-cols-4", "gap-2", "gap-4", "gap-6", "gap-8"] },
  { title: "Spacing", classes: ["p-2", "p-4", "p-6", "p-8", "px-4", "py-4", "m-2", "m-4", "mx-auto", "mb-2", "mb-4", "mb-6", "mt-2", "mt-4"] },
  { title: "Typography", classes: ["text-xs", "text-sm", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "font-medium", "font-semibold", "font-bold", "text-center", "uppercase", "tracking-wide", "leading-relaxed"] },
  { title: "Colors", classes: ["text-primary", "text-secondary", "text-muted", "text-dark", "text-light", "text-danger", "bg-primary", "bg-secondary", "bg-dark", "bg-light", "bg-muted", "bg-gradient"] },
  { title: "Components", classes: ["btn", "btn-primary", "btn-secondary", "btn-outline", "btn-lg", "btn-sm", "card", "badge", "badge-primary", "badge-secondary", "badge-danger", "input", "avatar", "divider"] },
  { title: "Effects", classes: ["shadow", "shadow-md", "shadow-lg", "rounded", "rounded-lg", "rounded-xl", "rounded-full", "border", "border-primary", "animate-fade", "animate-slide-up"] },
];

const CssReference = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="h-full overflow-y-auto p-3 text-sm">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">CSS Classes</h3>
      {sections.map((s) => (
        <div key={s.title} className="mb-1">
          <button
            onClick={() => setOpen(open === s.title ? null : s.title)}
            className="flex items-center gap-1 w-full py-1.5 px-2 rounded text-secondary-foreground hover:bg-secondary/50 transition-colors text-left"
          >
            {open === s.title ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            <span className="font-medium">{s.title}</span>
            <span className="text-muted-foreground ml-auto text-xs">{s.classes.length}</span>
          </button>
          {open === s.title && (
            <div className="flex flex-wrap gap-1 px-2 py-2">
              {s.classes.map((c) => (
                <code key={c} className="text-xs bg-secondary px-1.5 py-0.5 rounded text-primary font-mono">
                  .{c}
                </code>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CssReference;
