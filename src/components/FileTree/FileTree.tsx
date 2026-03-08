import { Folder, File } from "lucide-react";
import type { FileItemProps } from "../../types/readme";

export function FileTreeItem({
  type,
  name,
  depth = 0,
  children,
}: FileItemProps) {
  return (
    <div>
      <div
        className="flex items-center gap-2 py-1 px-2 hover:bg-surface-light rounded text-sm"
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {type === "folder" ? (
          <Folder size={16} className="text-primary-light" />
        ) : (
          <File size={16} className="text-primary-medium" />
        )}
        <span className="text-text-dark">{name}</span>
      </div>
      {children?.map((child, idx) => (
        <FileTreeItem key={idx} {...child} depth={depth + 1} />
      ))}
    </div>
  );
}
