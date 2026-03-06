import { GitPullRequest, GitBranch, ArrowRight } from "lucide-react";

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
    <header className="mb-6">
      <div className="flex flex-wrap items-center gap-3 mb-3">
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
      </div>

      <h1 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
        {title}
      </h1>

      <p className="text-sm text-primary-medium max-w-3xl leading-relaxed">
        {description}
      </p>
    </header>
  );
}
