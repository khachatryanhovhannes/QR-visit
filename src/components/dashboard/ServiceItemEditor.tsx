import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface ServiceItemEditorProps {
  value: { title: string; description?: string };
  onChange: (value: { title: string; description?: string }) => void;
  onRemove: () => void;
  error?: string;
  index: number;
}

export function ServiceItemEditor({ value, onChange, onRemove, error, index }: ServiceItemEditorProps) {
  return (
    <Card className="p-4 mb-2 flex flex-col gap-2 relative">
      <div className="flex items-center gap-2">
        <Input
          value={value.title}
          onChange={(e) => onChange({ ...value, title: e.target.value })}
          placeholder="Service title"
          maxLength={60}
          aria-label={`Service title ${index + 1}`}
          className={error ? "border-red-500" : ""}
        />
        <Button type="button" variant="ghost" size="icon" onClick={onRemove} aria-label="Remove service">
          <Trash2 className="h-4 w-4 text-red-500" />
        </Button>
      </div>
      <Textarea
        value={value.description || ""}
        onChange={(e) => onChange({ ...value, description: e.target.value })}
        placeholder="Description (optional)"
        maxLength={200}
        aria-label={`Service description ${index + 1}`}
        rows={2}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </Card>
  );
}
