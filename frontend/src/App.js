import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./pages/accueil.jsx";
import "./App.css";
import Ressources_Outils from "./pages/PageRessources_Outils/Page_Ressources_Outils.jsx";
import Parcours from "./pages/PageParcours/PageParcours.jsx";
import PagePartenaires from "./pages/PagePartenaires/PagePartenaires.jsx";
import EventDetails from "./pages/eventDetails.jsx";
import Recherche from "./pages/recherche.jsx";
import AlumniDetails from "./pages/AlumniDetails.jsx";
import Formation from "./pages/formation.jsx";
import Alumni from "./pages/Alumni.jsx";
import Relex from "./pages/relex.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Partenariat" element={<PagePartenaires />} />
          <Route
            path="/Etudes&Scolarité/Ressources&Outils"
            element={<Ressources_Outils />}
          />
          <Route path="/" element={<Accueil />} />
          <Route path="news/:id" element={<EventDetails />} />
          <Route path="/Etudes&Scolarité/parcours" element={<Parcours />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/alumniD" element={<AlumniDetails />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/relex" element={<Relex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
