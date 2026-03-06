import type { ReactNode } from "react";

export type StaticCodeBlockVariant = "error" | "success" | "neutral";

export type StaticCodeBlockProps = {
  code: string;
  filename: string;
  variant?: StaticCodeBlockVariant;
};

export type InfoCardVariant = "error" | "success" | "warning" | "info";

export type InfoCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  variant?: InfoCardVariant;
};
