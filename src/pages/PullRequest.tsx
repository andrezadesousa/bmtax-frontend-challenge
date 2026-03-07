import {
  GitPullRequest,
  GitMerge,
  GitBranch,
  Clock,
  MessageSquare,
  Check,
  GitCommit,
  FileCode,
} from "lucide-react";
import {
  commits,
  getCategoryIcon,
  getCategoryColor,
  prDescription,
} from "../data/pullRequestData";

export function PullRequest() {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-surface-white min-h-full">
      {/* PR Header - GitHub Style */}
      <header className="mb-6 md:mb-8">
        {/* Title Row */}
        <div className="flex flex-wrap items-start gap-3 mb-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-diff-add-bg rounded-full border border-diff-add-border">
            <GitMerge size={16} className="text-diff-add-line" />
            <span className="text-xs font-medium text-diff-add-line">
              Merged
            </span>
          </div>
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-dark flex-1">
            Feature BMTax Front-End Challenge
            <span className="text-primary-medium font-normal ml-2">#1</span>
          </h1>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-primary-medium mb-4">
          <div className="flex items-center gap-2">
            <img
              src="https://avatars.githubusercontent.com/u/62725350?s=400&u=9d835449a30bc547b5e04d6b949296c42cdc7733&v=4"
              alt="Andreza"
              className="w-5 h-5 md:w-6 md:h-6 rounded-full"
            />
            <span className="font-medium text-text-dark">andrezadesousa</span>
          </div>
          <span>wants to merge</span>
          <span className="font-medium text-text-dark">
            {commits.length} commits
          </span>
          <span>into</span>
          <code className="px-2 py-0.5 bg-surface-light rounded text-primary-light font-mono text-xs">
            main
          </code>
          <span>from</span>
          <code className="px-2 py-0.5 bg-surface-light rounded text-primary-light font-mono text-xs">
            feature/challenges
          </code>
        </div>

        {/* Branch Info */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xxs md:text-xs text-primary-medium">
          <div className="flex items-center gap-1.5">
            <GitBranch size={14} />
            <span>feature/challenges</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>Updated recently</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageSquare size={14} />
            <span>4 conversations</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check size={14} className="text-diff-add-line" />
            <span className="text-diff-add-line">All checks passed</span>
          </div>
        </div>
      </header>

      {/* Tabs - GitHub Style */}
      <div className="border-b border-primary-light/20 mb-6">
        <nav className="flex gap-1 -mb-px overflow-x-auto">
          {[
            { label: "Conversation", icon: MessageSquare, active: false },
            {
              label: "Commits",
              icon: GitCommit,
              active: true,
              count: commits.length,
            },
            {
              label: "Files changed",
              icon: FileCode,
              active: false,
              count: 47,
            },
          ].map((tab) => (
            <button
              key={tab.label}
              className={`flex items-center gap-2 px-3 md:px-4 py-2 text-xs md:text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                tab.active
                  ? "border-primary-light text-text-dark"
                  : "border-transparent text-primary-medium hover:text-text-dark hover:border-primary-light/50"
              }`}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
              {tab.count && (
                <span className="px-1.5 py-0.5 bg-surface-light rounded-full text-xxs">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary Card */}
          <div className="border border-primary-light/20 rounded-lg overflow-hidden">
            <div className="bg-surface-light px-4 py-3 border-b border-primary-light/20">
              <div className="flex items-center gap-3">
                <img
                  src="https://avatars.githubusercontent.com/u/62725350?s=400&u=9d835449a30bc547b5e04d6b949296c42cdc7733&v=4"
                  alt="Andreza"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                />
                <div>
                  <span className="font-medium text-sm text-text-dark">
                    andrezadesousa
                  </span>
                  <span className="text-xs text-primary-medium ml-2">
                    commented
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 md:p-5">
              <h2 className="text-base md:text-lg font-semibold text-text-dark mb-3">
                Summary
              </h2>
              <div className="text-sm text-primary-medium leading-relaxed space-y-3">
                <p>
                  This PR implements the four technical challenges using React,
                  focusing on:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>componentization and clean architecture</li>
                  <li>code review analysis</li>
                  <li>bug investigation from stack trace</li>
                  <li>
                    JWT authentication flow for server-side API consumption
                  </li>
                  <li>Cypress end-to-end tests</li>
                  <li>Firebase hosting deployment</li>
                </ul>
                <p>
                  The commit history below shows the incremental development
                  process.
                </p>
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="border border-primary-light/20 rounded-lg overflow-hidden">
            <div className="bg-surface-light px-4 py-3 border-b border-primary-light/20">
              <span className="font-medium text-sm text-text-dark">
                Description
              </span>
            </div>
            <div className="p-4 md:p-5">{prDescription}</div>
          </div>

          {/* Commits List */}
          <div className="border border-primary-light/20 rounded-lg overflow-hidden">
            <div className="bg-surface-light px-4 py-3 border-b border-primary-light/20 flex items-center gap-2">
              <GitCommit size={16} className="text-primary-medium" />
              <span className="font-medium text-sm text-text-dark">
                Commits
              </span>
              <span className="px-2 py-0.5 bg-primary-light/10 rounded-full text-xs text-primary-light">
                {commits.length}
              </span>
            </div>
            <div className="divide-y divide-primary-light/10 max-h-[500px] overflow-y-auto">
              {commits.map((commit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-surface-light/50 transition-colors"
                >
                  <div className="mt-0.5">
                    {getCategoryIcon(commit.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-text-dark truncate">
                      {commit.message}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="text-xxs font-mono text-primary-medium bg-surface-light px-1.5 py-0.5 rounded">
                        {commit.hash}
                      </code>
                      <span
                        className={`text-xxs px-1.5 py-0.5 rounded border ${getCategoryColor(commit.category)}`}
                      >
                        {commit.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Author Card */}
          <div className="border border-primary-light/20 rounded-lg p-4">
            <h3 className="text-xs font-semibold text-primary-medium uppercase tracking-wider mb-3">
              Author
            </h3>
            <div className="flex items-center gap-3">
              <img
                src="https://avatars.githubusercontent.com/u/62725350?s=400&u=9d835449a30bc547b5e04d6b949296c42cdc7733&v=4"
                alt="Andreza"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium text-sm text-text-dark">Andreza</p>
                <p className="text-xs text-primary-medium">@andrezadesousa</p>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="border border-primary-light/20 rounded-lg p-4">
            <h3 className="text-xs font-semibold text-primary-medium uppercase tracking-wider mb-3">
              Labels
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  label: "frontend",
                  color:
                    "bg-primary-light/10 text-primary-light border-primary-light",
                },
                {
                  label: "challenge",
                  color:
                    "bg-diff-add-bg text-diff-add-line border-diff-add-border",
                },
                {
                  label: "react",
                  color: "bg-blue-50 text-blue-600 border-blue-400",
                },
                {
                  label: "typescript",
                  color: "bg-blue-50 text-blue-700 border-blue-500",
                },
              ].map((item) => (
                <span
                  key={item.label}
                  className={`text-xxs px-2 py-1 rounded-full border ${item.color}`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="border border-primary-light/20 rounded-lg p-4">
            <h3 className="text-xs font-semibold text-primary-medium uppercase tracking-wider mb-3">
              Stats
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-primary-medium">Commits</span>
                <span className="font-medium text-text-dark">
                  {commits.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-medium">Files changed</span>
                <span className="font-medium text-text-dark">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-diff-add-line">Additions</span>
                <span className="font-medium text-diff-add-line">+2,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-diff-remove-line">Deletions</span>
                <span className="font-medium text-diff-remove-line">-156</span>
              </div>
            </div>
          </div>

          {/* Reviewers */}
          <div className="border border-primary-light/20 rounded-lg p-4">
            <h3 className="text-xs font-semibold text-primary-medium uppercase tracking-wider mb-3">
              Reviewers
            </h3>
            <div className="flex items-center gap-2 text-xs text-primary-medium">
              <div className="w-6 h-6 rounded-full bg-surface-light flex items-center justify-center">
                <GitPullRequest size={12} className="text-primary-medium" />
              </div>
              <span>Awaiting review from BMTax team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
