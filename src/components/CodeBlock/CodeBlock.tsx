import { FileCode, Plus, Minus } from "lucide-react";
import type { CodeBlockProps, LineType } from "../../types/review";

const getLineType = (line: string, type: "original" | "fixed"): LineType => {
  if (type === "original" && line.includes("[PROBLEMA]")) return "remove";
  if (type === "fixed" && line.includes("[CORREÇÃO]")) return "add";
  return "neutral";
};

export function CodeBlock({ code, type, filename }: CodeBlockProps) {
  const lines = code.split("\n");

  return (
    <div className="flex flex-col h-full border border-code-border rounded-lg overflow-hidden bg-code-bg">
      <div className="flex items-center gap-2 px-4 py-2 bg-code-header border-b border-code-border">
        <FileCode size={14} className="text-code-lineNumber" />
        <span className="text-xs text-code-text font-mono">{filename}</span>
        <span
          className={`ml-auto text-xxs px-2 py-0.5 rounded ${
            type === "original"
              ? "bg-diff-remove-bg text-diff-remove-line"
              : "bg-diff-add-bg text-diff-add-line"
          }`}
        >
          {type === "original" ? "Antes" : "Depois"}
        </span>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-xs font-mono">
          <tbody>
            {lines.map((line, idx) => {
              const lineType = getLineType(line, type);
              const bgClass =
                lineType === "add"
                  ? "bg-diff-add-bg/20"
                  : lineType === "remove"
                    ? "bg-diff-remove-bg/20"
                    : "";
              const borderClass =
                lineType === "add"
                  ? "border-l-2 border-l-diff-add-border"
                  : lineType === "remove"
                    ? "border-l-2 border-l-diff-remove-border"
                    : "border-l-2 border-l-transparent";

              return (
                <tr key={idx} className={`${bgClass} ${borderClass}`}>
                  <td className="w-8 px-2 py-0.5 text-right text-code-lineNumber select-none border-r border-code-border">
                    {idx + 1}
                  </td>
                  <td className="w-6 px-1 py-0.5 text-center select-none">
                    {lineType === "add" && (
                      <Plus size={12} className="text-diff-add-line inline" />
                    )}
                    {lineType === "remove" && (
                      <Minus
                        size={12}
                        className="text-diff-remove-line inline"
                      />
                    )}
                  </td>
                  <td className="px-2 py-0.5 whitespace-pre text-code-text">
                    {line || " "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
