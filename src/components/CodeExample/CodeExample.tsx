interface Props {
  code: string;
}

export function CodeExample({ code }: Props) {
  return (
    <pre className="bg-code-bg text-code-text text-xxs md:text-xs p-3 md:p-4 rounded-lg overflow-x-auto border border-code-border">
      <code>{code}</code>
    </pre>
  );
}
