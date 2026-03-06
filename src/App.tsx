import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Challenge1 } from "./pages/Challenge1";
import { Challenge2 } from "./pages/Challenge2";
import { Challenge3 } from "./pages/Challenge3";
import { Challenge4 } from "./pages/Challenge4";

const challenges = [
  { id: 1, title: "Desafio 1 - Filtro" },
  { id: 2, title: "Desafio 2 - Code Review" },
  { id: 3, title: "Desafio 3 - Debug de erro" },
  { id: 4, title: "Desafio 4 - OAuth JWT" },
];

function App() {
  const [activeChallenge, setActiveChallenge] = useState(1);

  const renderChallenge = () => {
    switch (activeChallenge) {
      case 1:
        return <Challenge1 />;
      case 2:
        return <Challenge2 />;
      case 3:
        return <Challenge3 />;
      case 4:
        return <Challenge4 />;
      default:
        return <Challenge1 />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-surface-white">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          challenges={challenges}
          activeChallenge={activeChallenge}
          onChallengeSelect={setActiveChallenge}
        />

        <main className="flex-1 overflow-auto">{renderChallenge()}</main>
      </div>
    </div>
  );
}

export default App;
