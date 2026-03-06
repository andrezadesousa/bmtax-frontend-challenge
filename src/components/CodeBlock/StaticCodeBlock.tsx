import { FileCode } from "lucide-react";
import type { StaticCodeBlockProps } from "../../types/challenge3";

const headerColors: Record<
  NonNullable<StaticCodeBlockProps["variant"]>,
  string
> = {
  error: "bg-diff-remove-bg border-diff-remove-border",
  success: "bg-diff-add-bg border-diff-add-border",
  neutral: "bg-code-header border-code-border",
};

const labelColors: Record<
  NonNullable<StaticCodeBlockProps["variant"]>,
  string
> = {
  error: "text-diff-remove-line",
  success: "text-diff-add-line",
  neutral: "text-code-text",
};

export function StaticCodeBlock({
  code,
  filename,
  variant = "neutral",
}: StaticCodeBlockProps) {
  const lines = code.split("\n");

  return (
    <div className="border border-code-border rounded-lg overflow-hidden">
      <div
        className={`flex items-center gap-2 px-4 py-2 border-b ${headerColors[variant]}`}
      >
        <FileCode size={14} className={labelColors[variant]} />
        <span className={`text-xs font-mono ${labelColors[variant]}`}>
          {filename}
        </span>
      </div>

      <div className="bg-code-bg overflow-x-auto">
        <table className="w-full text-xs font-mono">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx}>
                <td className="w-8 px-2 py-0.5 text-right text-code-lineNumber select-none border-r border-code-border">
                  {idx + 1}
                </td>
                <td className="px-3 py-0.5 whitespace-pre text-code-text">
                  {line || " "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
