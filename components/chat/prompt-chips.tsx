"use client";

interface PromptChipsProps {
  prompts: string[];
  onSelect: (prompt: string) => void;
  variant?: "primary" | "subtle";
}

export function PromptChips({ prompts, onSelect, variant = "primary" }: PromptChipsProps) {
  const classes =
    variant === "subtle"
      ? "rounded-full border border-naya-line bg-naya-shell/70 px-3 py-1.5 text-left text-xs text-naya-mauve transition hover:border-naya-rose/60 hover:text-naya-roseDeep focus:outline-none focus:ring-2 focus:ring-naya-rose/30"
      : "rounded-full border border-naya-line bg-white px-3 py-1.5 text-left text-xs text-naya-ink transition hover:border-naya-rose hover:text-naya-roseDeep focus:outline-none focus:ring-2 focus:ring-naya-rose/40";

  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          type="button"
          onClick={() => onSelect(prompt)}
          className={classes}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
