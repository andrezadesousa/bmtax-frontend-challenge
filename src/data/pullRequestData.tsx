import {
  FileCode,
  Wrench,
  TestTube,
  Rocket,
  Settings,
  GitCommit,
} from "lucide-react";

export type Commit = {
  hash: string;
  message: string;
  category:
    | "feat"
    | "fix"
    | "chore"
    | "style"
    | "refactor"
    | "test"
    | "ci"
    | "wip";
};

export const commits: Commit[] = [
  {
    hash: "b550ffe",
    message: "chore: initial project setup",
    category: "chore",
  },
  {
    hash: "7b0310a",
    message: "feat(types): adds Item typing used in challenges",
    category: "feat",
  },
  {
    hash: "615f2f3",
    message: "feat(data): adds dataset of items used in challenge 1",
    category: "feat",
  },
  {
    hash: "7584963",
    message: "feat(package): lucid-icons library added",
    category: "feat",
  },
  {
    hash: "8664f39",
    message: "feat(SearchInput): creates reusable SearchInput component",
    category: "feat",
  },
  {
    hash: "f0c8795",
    message: "feat(ItemList): creates ItemList component for list rendering",
    category: "feat",
  },
  {
    hash: "bbff6bf",
    message:
      "feat(App.css): file removed because it is not used in the project",
    category: "feat",
  },
  {
    hash: "5163431",
    message:
      "feat(challenge1): implements item filtering by text (case-insensitive)",
    category: "feat",
  },
  {
    hash: "c234a6a",
    message: "feat(challenge1): useMemo added to improve performance",
    category: "feat",
  },
  {
    hash: "bae373b",
    message:
      "feat(Cypress): was added to the project to help me with testing and for study purposes",
    category: "feat",
  },
  {
    hash: "6275e21",
    message: "feat(IndexHtml): label configured",
    category: "feat",
  },
  {
    hash: "d1d4d73",
    message: "style(SearchInput): background color added to input",
    category: "style",
  },
  {
    hash: "661782d",
    message:
      "feat(tailwind.config): added tailwind configuration to the project colors",
    category: "feat",
  },
  {
    hash: "7535e2c",
    message: "feat(vite.config): configure alias '@' for directory src",
    category: "feat",
  },
  {
    hash: "180f292",
    message: "feat(Header): component created and added",
    category: "feat",
  },
  {
    hash: "df7baf9",
    message: "style(index.css): Style for Scroll Bar added",
    category: "style",
  },
  {
    hash: "112f2ed",
    message: "style(ItemList): change label color",
    category: "style",
  },
  {
    hash: "81760e5",
    message:
      "feat(Sidebar): sidebar menu component created to list the challenge answers",
    category: "feat",
  },
  {
    hash: "dc173ee",
    message: "style(indexHtml): favicon added",
    category: "style",
  },
  {
    hash: "0a31199",
    message: "feat(App.tsx): challenge 1 completed",
    category: "feat",
  },
  {
    hash: "74af09d",
    message: "wip(Challenge2): challenge 2 initialized",
    category: "wip",
  },
  {
    hash: "e0df6e0",
    message: "wip(Challenge2): code review 90% complete",
    category: "wip",
  },
  {
    hash: "97b364a",
    message: "wip(Challenge2): challenge completed",
    category: "wip",
  },
  {
    hash: "5cb5978",
    message: "feat(review.ts): extract review related types",
    category: "feat",
  },
  {
    hash: "5d0cbd6",
    message: "feat(reviewData.tsx): move review constants and JSX descriptions",
    category: "feat",
  },
  {
    hash: "161ebf7",
    message: "feat(CodeBlock.tsx): reusable code diff component",
    category: "feat",
  },
  {
    hash: "cb560e4",
    message: "feat(ReviewCard.tsx): reusable review card component",
    category: "feat",
  },
  {
    hash: "2da1897",
    message: "feat(PullRequestHeader.tsx): reusable PR header component",
    category: "feat",
  },
  {
    hash: "e7b1589",
    message: "refactor(Challenge2.tsx): componentization of page elements",
    category: "refactor",
  },
  {
    hash: "67345dc",
    message: "wip(Challenge3.tsx): starting the resolution of challenge 3",
    category: "wip",
  },
  {
    hash: "3159420",
    message: "feat(challenge3.ts): extract shared props types",
    category: "feat",
  },
  {
    hash: "2f56e13",
    message: "feat(StaticCodeBlock.tsx): reusable static code block component",
    category: "feat",
  },
  {
    hash: "76b3b99",
    message: "feat(InfoCard.tsx): reusable info card component",
    category: "feat",
  },
  {
    hash: "147ea4e",
    message: "feat(PageHeader.tsx): generic header component",
    category: "feat",
  },
  {
    hash: "cb838f4",
    message: "refactor(PullRequestHeader.tsx): integrate PageHeader",
    category: "refactor",
  },
  {
    hash: "3f881c2",
    message: "refactor(Challenge3.tsx): extract data and subcomponents",
    category: "refactor",
  },
  {
    hash: "c6a576b",
    message: "wip(Challenge4): starting the resolution of challenge 4",
    category: "wip",
  },
  {
    hash: "166bfeb",
    message:
      "wip(Challenge4): performance optimization proposal for multiple endpoints",
    category: "wip",
  },
  {
    hash: "8f5d441",
    message: "wip(Challenge4): example API consumer component",
    category: "wip",
  },
  {
    hash: "15d3972",
    message:
      "feat(challenge4Data.ts): add doc links, toc items and code constants",
    category: "feat",
  },
  {
    hash: "16fee71",
    message: "feat(challenge4.ts): add documentation link and toc types",
    category: "feat",
  },
  {
    hash: "47ac074",
    message: "feat(StickyTOC): reusable sticky table of contents component",
    category: "feat",
  },
  {
    hash: "db13caf",
    message: "feat(DocLinks): reusable documentation reference links grid",
    category: "feat",
  },
  {
    hash: "dbdf535",
    message: "wip(Challenge4): organizing elements on the screen",
    category: "wip",
  },
  {
    hash: "6e483b6",
    message: "wip(Challenge3): text corrections",
    category: "wip",
  },
  {
    hash: "ee15221",
    message: "fix(FlowDiagram): correct api node label and flow description",
    category: "fix",
  },
  {
    hash: "1193055",
    message:
      "feat(LeadsFormPreview): leads registration form preview component",
    category: "feat",
  },
  {
    hash: "0dfdff9",
    message:
      "feat(CollapsibleSection): collapsible documentation section component",
    category: "feat",
  },
  {
    hash: "0a6d65a",
    message: "chore(CodeExample): reusable dark theme code block wrapper",
    category: "chore",
  },
  {
    hash: "f980b19",
    message:
      "chore(tailwind.config): add custom color tokens font sizes and border radius",
    category: "chore",
  },
  {
    hash: "5cbee67",
    message: "chore(.env.example): add example env file",
    category: "chore",
  },
  {
    hash: "fb41d1e",
    message:
      "chore(.gitignore): ignore env files to prevent credential exposure",
    category: "chore",
  },
  {
    hash: "80fa3af",
    message: "refactor(WeatherWidget): move api key to environment variable",
    category: "refactor",
  },
  {
    hash: "60201db",
    message: "feat(Sidebar): add WeatherWidget to profile section",
    category: "feat",
  },
  {
    hash: "a0586d4",
    message: "feat(PageHeader): add goBack button and github badge",
    category: "feat",
  },
  {
    hash: "cebbb59",
    message: "feat(PullRequestHeader): forward props to PageHeader",
    category: "feat",
  },
  {
    hash: "dc75190",
    message: "feat(Challenge1): add onBack prop and github url constant",
    category: "feat",
  },
  {
    hash: "df89040",
    message: "feat(Challenge2): add onBack prop and github url constant",
    category: "feat",
  },
  {
    hash: "c6fb2af",
    message: "feat(Challenge3): add onBack prop and github url constant",
    category: "feat",
  },
  {
    hash: "9f1c8f7",
    message: "feat(Challenge4): add onBack prop and github url constant",
    category: "feat",
  },
  {
    hash: "84ce3fd",
    message: "feat(App): pass onBack callback to challenge pages",
    category: "feat",
  },
  {
    hash: "ed8d9ba",
    message: "chore(firebaserc): configure firebase project association",
    category: "chore",
  },
  {
    hash: "ce036fe",
    message: "chore(firebase-config): add firebase hosting configuration",
    category: "chore",
  },
  {
    hash: "6f3cbd5",
    message: "chore(firebase-cache): add firebase hosting cache metadata",
    category: "chore",
  },
  {
    hash: "f3cafc7",
    message:
      "ci(firebase-hosting-workflow): add firebase hosting preview workflow",
    category: "ci",
  },
  {
    hash: "4a789a9",
    message: "chore(firebase-cache): ignore firebase local cache directory",
    category: "chore",
  },
  {
    hash: "89d2415",
    message: "chore(ThoughtBubble): remove unused component",
    category: "chore",
  },
  {
    hash: "d5c3aaa",
    message: "chore(StepCard): remove unused component",
    category: "chore",
  },
  {
    hash: "62b64c4",
    message: "refactor(ItemList): rename parent folder from List to ItemList",
    category: "refactor",
  },
  {
    hash: "9c6458a",
    message: "refactor(challenge4): rename types file to match domain",
    category: "refactor",
  },
  {
    hash: "5b0a7ce",
    message:
      "refactor(SearchInput): rename parent folder from Input to SearchInput",
    category: "refactor",
  },
  {
    hash: "06eb6f9",
    message:
      "test(home.cy): add cypress tests for home page render and navigation",
    category: "test",
  },
  {
    hash: "37fedf9",
    message:
      "test(sidebar.cy): add cypress tests for sidebar navigation and active state",
    category: "test",
  },
  {
    hash: "061e6bd",
    message:
      "test(challenge1.cy): add cypress tests for real-time item filter behavior",
    category: "test",
  },
  {
    hash: "9801086",
    message:
      "test(challenge2.cy): add cypress tests for code review page render",
    category: "test",
  },
  {
    hash: "de7ebf5",
    message:
      "test(challenge3.cy): add cypress tests for bug analysis page render",
    category: "test",
  },
  {
    hash: "c5a8c13",
    message:
      "test(challenge4.cy): add cypress tests for collapsible sections and jwt page",
    category: "test",
  },
  {
    hash: "526f49f",
    message: "chore(cypress-artifacts): ignore generated test artifacts",
    category: "chore",
  },
];

export const getCategoryIcon = (category: Commit["category"]) => {
  switch (category) {
    case "feat":
      return <FileCode size={14} className="text-diff-add-line" />;
    case "fix":
      return <Wrench size={14} className="text-diff-remove-line" />;
    case "test":
      return <TestTube size={14} className="text-primary-light" />;
    case "ci":
      return <Rocket size={14} className="text-yellow-500" />;
    case "refactor":
      return <Settings size={14} className="text-primary-medium" />;
    default:
      return <GitCommit size={14} className="text-code-lineNumber" />;
  }
};

export const getCategoryColor = (category: Commit["category"]): string => {
  switch (category) {
    case "feat":
      return "bg-diff-add-bg text-diff-add-line border-diff-add-border";
    case "fix":
      return "bg-diff-remove-bg text-diff-remove-line border-diff-remove-border";
    case "test":
      return "bg-primary-light/10 text-primary-light border-primary-light";
    case "ci":
      return "bg-yellow-50 text-yellow-600 border-yellow-500";
    case "refactor":
      return "bg-surface-light text-primary-medium border-primary-medium";
    case "style":
      return "bg-purple-50 text-purple-600 border-purple-400";
    case "wip":
      return "bg-orange-50 text-orange-600 border-orange-400";
    default:
      return "bg-code-header text-code-text border-code-border";
  }
};

export const prDescription = (
  <div className="text-sm text-primary-medium leading-relaxed space-y-5">
    <section>
      <h2 className="text-base font-semibold text-text-dark mb-2">
        Project Description
      </h2>
      <p>
        This project implements solutions for four frontend engineering
        challenges using{" "}
        <strong className="text-text-dark">React, TypeScript and Vite</strong>,
        focusing on component architecture, code readability and
        maintainability.
      </p>
      <p className="mt-2">
        The goal was not only to deliver the requested features, but also to
        demonstrate how the code could be structured in a real production
        environment, with reusable components, organized data structures and
        clear separation of concerns.
      </p>
    </section>

    <hr className="border-primary-light/20" />

    <section>
      <h2 className="text-base font-semibold text-text-dark mb-2">
        Architecture Approach
      </h2>
      <p>
        The project was structured with a{" "}
        <strong className="text-text-dark">component-driven approach</strong>,
        prioritizing reuse and clarity.
      </p>
      <p className="mt-2 font-medium text-text-dark">Key decisions:</p>
      <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
        <li>
          Creation of reusable UI components such as:{" "}
          {[
            "SearchInput",
            "ItemList",
            "Sidebar",
            "PageHeader",
            "ReviewCard",
            "CodeBlock",
            "CollapsibleSection",
            "StickyTOC",
          ].map((c, i, arr) => (
            <span key={c}>
              <code className="text-xs bg-surface-light px-1 py-0.5 rounded font-mono text-primary-light">
                {c}
              </code>
              {i < arr.length - 1 ? ", " : ""}
            </span>
          ))}
        </li>
        <li>
          Separation of <strong className="text-text-dark">types</strong>,{" "}
          <strong className="text-text-dark">data</strong>, and{" "}
          <strong className="text-text-dark">UI components</strong> to keep
          responsibilities clear.
        </li>
        <li>
          Usage of{" "}
          <strong className="text-text-dark">TypeScript interfaces</strong> to
          ensure type safety across challenges.
        </li>
        <li>
          Usage of <strong className="text-text-dark">TailwindCSS</strong> for
          styling and design tokens customization.
        </li>
        <li>
          Use of <strong className="text-text-dark">Vite aliases (</strong>
          <code className="text-xs bg-surface-light px-1 py-0.5 rounded font-mono text-primary-light">
            @/
          </code>
          <strong className="text-text-dark">)</strong> to improve import
          readability.
        </li>
      </ul>
    </section>

    <hr className="border-primary-light/20" />

    <section>
      <h2 className="text-base font-semibold text-text-dark mb-3">
        Implemented Challenges
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-text-dark mb-1">
            Challenge 1 — Item Filtering
          </h3>
          <p>
            Implements a searchable list with{" "}
            <strong className="text-text-dark">real-time filtering</strong>.
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
            <li>Case-insensitive text filtering</li>
            <li>
              <code className="text-xs bg-surface-light px-1 py-0.5 rounded font-mono text-primary-light">
                useMemo
              </code>{" "}
              used to avoid unnecessary recalculations
            </li>
            <li>
              Reusable{" "}
              <code className="text-xs bg-surface-light px-1 py-0.5 rounded font-mono text-primary-light">
                SearchInput
              </code>{" "}
              and{" "}
              <code className="text-xs bg-surface-light px-1 py-0.5 rounded font-mono text-primary-light">
                ItemList
              </code>{" "}
              components
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-text-dark mb-1">
            Challenge 2 — Code Review Analysis
          </h3>
          <p>
            A UI simulating a{" "}
            <strong className="text-text-dark">pull request review</strong>,
            highlighting the original problematic code, suggested improvements
            and explanation of the issue. Reusable components were created to
            structure the review interface.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-text-dark mb-1">
            Challenge 3 — Bug Investigation
          </h3>
          <p>
            Analysis of a bug using a provided{" "}
            <strong className="text-text-dark">stack trace</strong>. The page
            presents the stack trace, root cause explanation, proposed fix and
            explanation of why the issue happens.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-text-dark mb-1">
            Challenge 4 — Authentication Flow
          </h3>
          <p>
            Explanation of a{" "}
            <strong className="text-text-dark">
              JWT-based authentication flow
            </strong>{" "}
            for a server-side application that consumes multiple APIs. Includes
            architectural explanation, flow diagram, API consumption example and
            documentation references.
          </p>
        </div>
      </div>
    </section>

    <hr className="border-primary-light/20" />

    <section>
      <h2 className="text-base font-semibold text-text-dark mb-2">Testing</h2>
      <p>
        Basic{" "}
        <strong className="text-text-dark">
          end-to-end tests were implemented with Cypress
        </strong>{" "}
        to validate page navigation, sidebar interactions, search filtering
        behavior, rendering of challenge pages and collapsible documentation
        sections.
      </p>
    </section>

    <hr className="border-primary-light/20" />

    <section>
      <h2 className="text-base font-semibold text-text-dark mb-2">
        Deployment
      </h2>
      <p>
        The project was configured for{" "}
        <strong className="text-text-dark">Firebase Hosting</strong> and can be
        deployed as a static site. Firebase configuration files were added to
        support hosting and preview deployments.
      </p>
    </section>

    <hr className="border-primary-light/20" />

    <section>
      <h2 className="text-base font-semibold text-text-dark mb-2">
        Additional Improvements
      </h2>
      <ul className="list-disc list-inside space-y-1 ml-2">
        <li>Environment variables added for API keys</li>
        <li>
          <code className="text-xs bg-surface-light px-1 py-0.5 rounded font-mono text-primary-light">
            .env.example
          </code>{" "}
          created for safe configuration sharing
        </li>
        <li>Unused components removed</li>
        <li>Folder structure refactored for better domain organization</li>
        <li>Custom Tailwind design tokens added</li>
      </ul>
    </section>

    <hr className="border-primary-light/20" />

    <section>
      <h2 className="text-base font-semibold text-text-dark mb-2">
        Commit History
      </h2>
      <p>
        The commit history below shows the incremental development process and
        architectural evolution of the project.
      </p>
    </section>
  </div>
);
