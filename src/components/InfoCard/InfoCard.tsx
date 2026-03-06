import type { InfoCardProps } from "../../types/challenge3";

const variantStyles: Record<NonNullable<InfoCardProps["variant"]>, string> = {
  error: "border-l-diff-remove-border bg-diff-remove-bg/10",
  success: "border-l-diff-add-border bg-diff-add-bg/10",
  warning: "border-l-yellow-500 bg-yellow-50",
  info: "border-l-primary-light bg-surface-light",
};

export function InfoCard({
  icon,
  title,
  children,
  variant = "info",
}: InfoCardProps) {
  return (
    <div
      className={`border-l-4 ${variantStyles[variant]} p-4 md:p-5 rounded-r-lg`}
    >
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-sm font-semibold text-text-dark">{title}</h3>
      </div>
      <div className="text-sm text-primary-medium leading-relaxed">
        {children}
      </div>
    </div>
  );
}
