import { GitPullRequest, GitBranch, ArrowRight } from "lucide-react";
import { PageHeader } from "../PageHeader/PageHeader";

type PullRequestHeaderProps = {
  prNumber: string;
  sourceBranch: string;
  targetBranch: string;
  title: string;
  description: React.ReactNode;
};

export function PullRequestHeader({
  prNumber,
  sourceBranch,
  targetBranch,
  title,
  description,
}: PullRequestHeaderProps) {
  return (
    <PageHeader
      title={title}
      description={description}
      badges={
        <>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary-light/10 rounded-full">
            <GitPullRequest size={16} className="text-primary-light" />
            <span className="text-xs font-medium text-primary-dark">
              Pull Request #{prNumber}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-light rounded-full">
            <GitBranch size={14} className="text-primary-medium" />
            <span className="text-xxs font-mono text-primary-medium">
              {sourceBranch}
            </span>
            <span className="text-xxs text-primary-medium">
              <ArrowRight size={14} />
            </span>
            <span className="text-xxs font-mono text-primary-medium">
              {targetBranch}
            </span>
          </div>
        </>
      }
    />
  );
}
