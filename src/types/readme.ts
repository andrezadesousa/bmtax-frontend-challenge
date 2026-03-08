export type TechItem = {
  name: string;
  version: string;
};

export type ScriptItem = {
  command: string;
  description: string;
};

export type ChallengeSection = {
  title: string;
  description: string;
  sections: {
    heading: string;
    items: { label: string; code?: boolean }[];
  }[];
};

export type FileItemProps = {
  type: "folder" | "file";
  name: string;
  depth?: number;
  children?: FileItemProps[];
};
