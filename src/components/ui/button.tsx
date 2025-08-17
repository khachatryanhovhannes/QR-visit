"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", "aria-label": ariaLabel, ...props }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case "default":
          return {
            backgroundColor: "var(--accent)",
            color: "white",
          };
        case "destructive":
          return {
            backgroundColor: "var(--error)",
            color: "white",
          };
        case "outline":
          return {
            border: "1px solid var(--border)",
            backgroundColor: "var(--card-background)",
            color: "var(--primary-text)",
          };
        case "secondary":
          return {
            backgroundColor: "var(--background)",
            color: "var(--primary-text)",
          };
        case "ghost":
          return {
            color: "var(--primary-text)",
          };
        case "link":
          return {
            color: "var(--accent)",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          };
        default:
          return {};
      }
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        style={getVariantStyles()}
        ref={ref}
        aria-label={ariaLabel}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
