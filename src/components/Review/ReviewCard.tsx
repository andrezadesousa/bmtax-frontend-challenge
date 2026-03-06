import { AlertCircle, CheckCircle2 } from "lucide-react";
import type { ReviewItem } from "../../types/review";

export function ReviewCard({ type, title, desc }: ReviewItem) {
  return (
    <div
      className={`flex items-start gap-2 p-2 rounded ${
        type === "error" ? "bg-diff-remove-bg/10" : "bg-diff-add-bg/10"
      }`}
    >
      {type === "error" ? (
        <AlertCircle
          size={14}
          className="text-diff-remove-border shrink-0 mt-0.5"
        />
      ) : (
        <CheckCircle2
          size={14}
          className="text-diff-add-border shrink-0 mt-0.5"
        />
      )}
      <div>
        <p
          className={`text-xs font-medium ${
            type === "error"
              ? "text-diff-remove-border"
              : "text-diff-add-border"
          }`}
        >
          {title}
        </p>
        <p className="text-xxs text-surface-light">{desc}</p>
      </div>
    </div>
  );
}
