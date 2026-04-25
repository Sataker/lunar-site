"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLanguage?: boolean;
  showCopy?: boolean;
}

function renderPythonCode(code: string) {
  const escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped
    .replace(/(#.*)$/gm, '<span class="code-comment">$1</span>')
    .replace(/\b(import|as)\b/g, '<span class="code-keyword">$1</span>')
    .replace(/\b(print|completion)\b/g, '<span class="code-fn">$1</span>')
    .replace(
      /\b(model|messages|fallbacks|role|content)\b(?=\s*=|\s*:)/g,
      '<span class="code-attr">$1</span>',
    )
    .replace(/"([^"\\]|\\.)*"/g, '<span class="code-string">$&</span>')
    .replace(/\b(\d+)\b/g, '<span class="code-value">$1</span>');
}

export default function CodeBlock({
  code,
  language = "bash",
  className = "",
  showLanguage = true,
  showCopy = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const renderedCode = language === "python" ? renderPythonCode(code) : code;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`code-block relative ${className}`}>
      <div className="flex items-center justify-between border-b border-border/70 px-4 py-2.5 bg-background/5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          {showLanguage ? (
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted ml-2">
              {language}
            </span>
          ) : null}
        </div>
        {showCopy ? (
          <button
            onClick={handleCopy}
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted hover:text-foreground transition-colors"
            aria-label="Copy code"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        ) : null}
      </div>
      <pre className="overflow-x-auto p-4">
        <code
          className="text-sm leading-[1.7]"
          dangerouslySetInnerHTML={{ __html: renderedCode }}
        />
      </pre>
    </div>
  );
}
