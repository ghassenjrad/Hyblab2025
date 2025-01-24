import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page0 from "./page0/page0";
import QuestionPage from "./QuestionPage/QuestionPage";
import DifficultyPage from "./DifficultyPage/DifficultyPage";
import Etape from "./EtapePage/Etape";
import TransitionPage1 from "./TransitionPage1/TransitionPage1";
import TransitionPage2 from "./TransitionPage2/TransitionPage2";
import TransitionPage3 from "./TransitionPage3/TransitionPage3";
import Credit from "./creditPage/creditPage";

const basename = process.env.REACT_APP_BASENAME || "/";
function App() {
  return (
    <Router basename={basename}>
      <Routes>
        {/* Page par défaut : choix de difficulté */}
        <Route path="/difficulty" element={<DifficultyPage />} />
        {/* Page des étapes selon la difficulté */}
        <Route path="/etape/:difficulty" element={<Etape />} />
        {/* Page des questions selon la difficulté et l'étape */}
        <Route path="/etape/:difficulty/:id" element={<QuestionPage />} />
        <Route path="/" element={<Page0 />} />
        {/* Page de transition 1 */}
        <Route path="/transition1" element={<TransitionPage1 />} />
        {/* Page de transition 2 */}
        <Route path="/transition2" element={<TransitionPage2 />} />
        {/* Page de transition 3 */}
        <Route path="/transition3" element={<TransitionPage3 />} />
        {/* Page de credits */}
        <Route path="/credit" element={<Credit />} />

      </Routes>
    </Router>
  );
}

export default App;