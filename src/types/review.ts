import type { ReactNode } from "react";

export type LineType = "add" | "remove" | "neutral";

export type ReviewItemType = "error" | "success";

export type ReviewItem = {
  type: ReviewItemType;
  title: string;
  desc: ReactNode;
};

export type CodeBlockProps = {
  code: string;
  type: "original" | "fixed";
  filename: string;
};
