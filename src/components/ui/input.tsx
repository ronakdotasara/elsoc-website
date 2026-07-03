import * as React from "react";
import { cn } from "@/lib/utils";

const fieldClasses = [
  "w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-fg",
  "placeholder:text-fg-subtle transition-colors",
  "hover:border-line-strong",
  "focus:border-volt focus:bg-surface-strong focus:outline-none focus:ring-2 focus:ring-volt/25",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "aria-invalid:border-danger aria-invalid:ring-danger/25",
].join(" ");

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input type={type} ref={ref} className={cn(fieldClasses, className)} {...props} />
  ),
);
Input.displayName = "Input";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(fieldClasses, "min-h-24 resize-y", className)} {...props} />
));
Textarea.displayName = "Textarea";

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("mb-1.5 block text-xs font-medium tracking-wide text-fg-muted", className)}
      {...props}
    />
  ),
);
Label.displayName = "Label";

export { Input, Textarea, Label, fieldClasses };
