"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export default function CodeBlock({
  code,
  language = "bash",
  className = "",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`code-block relative ${className}`}>
      <div className="flex items-center justify-between border-b border-border/70 px-4 py-2.5 bg-background/5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-muted/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted ml-2">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted hover:text-foreground transition-colors"
          aria-label="Copy code"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  );
}
