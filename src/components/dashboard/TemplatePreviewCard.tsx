"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { TEMPLATES } from "@/types";

interface TemplatePreviewCardProps {
  template: typeof TEMPLATES[number];
  selected?: boolean;
  onClick?: () => void;
  tabIndex?: number;
  ariaLabel?: string;
}

export function TemplatePreviewCard({ template, selected, onClick, tabIndex = 0, ariaLabel }: TemplatePreviewCardProps) {
  // Simple visual mockups for each template type
  const renderPreview = () => {
    switch (template.id) {
      case 'classic':
        return <div className="w-24 h-16 bg-background border rounded flex flex-col justify-center items-center shadow-sm dark:bg-card">
          <div className="w-16 h-3 bg-accent mb-1 rounded" />
          <div className="w-12 h-2 bg-muted mb-1 rounded" />
          <div className="w-10 h-2 bg-muted rounded" />
        </div>;
      case 'column':
        return <div className="w-24 h-16 bg-gradient-to-r from-brandBlue to-brandGray border rounded flex dark:from-brandGray dark:to-brandBlue">
          <div className="w-8 h-full bg-accent rounded-l" />
          <div className="flex-1 flex flex-col justify-center pl-1">
            <div className="w-10 h-2 bg-background mb-1 rounded dark:bg-card" />
            <div className="w-8 h-2 bg-background rounded dark:bg-card" />
          </div>
        </div>;
      case 'business':
        return <div className="w-24 h-16 bg-card border-2 border-brandBlue rounded flex flex-col justify-center items-center shadow-md dark:bg-background">
          <div className="w-20 h-3 bg-accent mb-1 rounded" />
          <div className="w-14 h-2 bg-brandGray mb-1 rounded" />
          <div className="w-12 h-2 bg-brandGray rounded" />
        </div>;
      case 'modern':
        return <div className="w-24 h-16 bg-gradient-to-r from-accent to-blue-400 border-2 border-accent rounded-xl flex flex-col justify-center items-center shadow-lg dark:from-blue-900 dark:to-accent">
          <div className="w-16 h-3 bg-white mb-1 rounded dark:bg-background" />
          <div className="w-10 h-2 bg-white rounded dark:bg-background" />
        </div>;
      case 'minimal':
        return <div className="w-24 h-16 bg-background border-2 border-dashed border-brandGray rounded flex flex-col justify-center items-center dark:bg-card">
          <div className="w-12 h-2 bg-muted mb-1 rounded" />
        </div>;
      case 'elegant':
        return <div className="w-24 h-16 bg-gradient-to-br from-gray-200 to-accent border-2 border-accent rounded-xl flex flex-col justify-center items-center shadow-md dark:from-accent dark:to-gray-900">
          <div className="w-14 h-2 bg-white mb-1 rounded dark:bg-background" />
          <div className="w-10 h-2 bg-white rounded dark:bg-background" />
        </div>;
      case 'creative':
        return <div className="w-24 h-16 bg-pink-200 border-2 border-accent rounded-xl flex flex-col justify-center items-center dark:bg-purple-900">
          <div className="w-10 h-2 bg-accent mb-1 rounded rotate-6" />
          <div className="w-8 h-2 bg-blue-400 rounded -rotate-6" />
          <div className="w-6 h-2 bg-brandBlue rounded rotate-3" />
        </div>;
      case 'portfolio':
        return <div className="w-24 h-16 bg-background border-2 border-brandBlue rounded-xl flex flex-col justify-center items-center shadow-sm dark:bg-card">
          <div className="w-16 h-2 bg-accent mb-1 rounded" />
          <div className="w-10 h-2 bg-brandGray rounded" />
          <div className="w-8 h-2 bg-accent rounded" />
        </div>;
      case 'personal':
        return <div className="w-24 h-16 bg-green-100 border-2 border-accent rounded-xl flex flex-col justify-center items-center dark:bg-green-900">
          <div className="w-12 h-2 bg-accent mb-1 rounded" />
          <div className="w-8 h-2 bg-brandGray rounded" />
          <div className="w-6 h-2 bg-accent rounded" />
        </div>;
      case 'agency':
        return <div className="w-24 h-16 bg-blue-100 border-2 border-brandBlue rounded-xl flex flex-col justify-center items-center dark:bg-blue-900">
          <div className="w-18 h-2 bg-accent mb-1 rounded" />
          <div className="w-10 h-2 bg-brandGray rounded" />
          <div className="w-8 h-2 bg-accent rounded" />
        </div>;
      default:
        return <div className="w-24 h-16 bg-muted rounded mb-2 flex items-center justify-center dark:bg-card">
          <span className="text-lg font-bold text-accent">{template.name.charAt(0)}</span>
        </div>;
    }
  };
  return (
    <Card
      className={`p-2 border-2 rounded-lg cursor-pointer transition-colors flex flex-col items-center justify-center ${selected ? "border-accent ring-2 ring-accent" : "border-border"}`}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel || template.name}
      role="button"
      aria-pressed={selected}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
    >
      {renderPreview()}
      <span className="text-sm font-medium text-foreground mb-1">{template.name}</span>
      <span className="text-xs text-muted-foreground text-center">{template.description}</span>
    </Card>
  );
}
