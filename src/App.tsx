import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Home } from "./pages/Home";
import { Challenge1 } from "./pages/Challenge1";
import { Challenge2 } from "./pages/Challenge2";
import { Challenge3 } from "./pages/Challenge3";
import { Challenge4 } from "./pages/Challenge4";
import { PullRequest } from "./pages/PullRequest";
import { Readme } from "./pages/Readme";

const challenges = [
  { id: 1, title: "Pull Request " },
  { id: 2, title: "Desafio 1 - Filtro" },
  { id: 3, title: "Desafio 2 - Code Review" },
  { id: 4, title: "Desafio 3 - Debug de erro" },
  { id: 5, title: "Desafio 4 - OAuth JWT" },
  { id: 6, title: "README.md" },
];

function App() {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const renderContent = () => {
    switch (activeChallenge) {
      case 0:
        return <Home onNavigate={setActiveChallenge} />;
      case 1:
        return <PullRequest />;
      case 2:
        return <Challenge1 onBack={() => setActiveChallenge(0)} />;
      case 3:
        return <Challenge2 onBack={() => setActiveChallenge(0)} />;
      case 4:
        return <Challenge3 onBack={() => setActiveChallenge(0)} />;
      case 5:
        return <Challenge4 onBack={() => setActiveChallenge(0)} />;
      case 6:
        return <Readme />;
      default:
        return <Home onNavigate={setActiveChallenge} />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-surface-white">
      <Header onMenuToggle={handleMenuToggle} isMenuOpen={isSidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          challenges={challenges}
          activeChallenge={activeChallenge}
          onChallengeSelect={setActiveChallenge}
          isOpen={isSidebarOpen}
          onClose={handleCloseSidebar}
        />

        <main className="flex-1 overflow-auto">{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;
