import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const Badge: React.FC<BadgeProps> = ({ variant = "default", className = "", ...props }) => {
  let baseClasses =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring";

  let variantClasses = "";

  switch (variant) {
    case "secondary":
      variantClasses = "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80";
      break;
    case "destructive":
      variantClasses = "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80";
      break;
    case "outline":
      variantClasses = "text-foreground";
      break;
    case "default":
    default:
      variantClasses = "border-transparent bg-primary text-primary-foreground hover:bg-primary/80";
      break;
  }

  const finalClassName = `${baseClasses} ${variantClasses} ${className}`;

  return <div className={finalClassName} {...props} />;
};

export { Badge };