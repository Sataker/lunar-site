interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className = "", href }: CardProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`card p-6 block transition-colors ${className}`}
      >
        {children}
      </a>
    );
  }
  return <div className={`card p-6 ${className}`}>{children}</div>;
}
