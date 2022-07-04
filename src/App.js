import Accueil from "./Accueil/Accueil.js";
import Inscription from "./Inscription/Inscription.js";
import Connexion from "./Connexion/Connexion.js";
import Portfolio from "./Portfolio/Portfolio.js";
import Tarifs from "./Tarifs/Tarifs.js";
import Contact from "./Contact/Contact.js";
import MonCompte from "./Mon Compte/MonCompte.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Tarifs" element={<Tarifs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/MonCompte" element={<MonCompte />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
