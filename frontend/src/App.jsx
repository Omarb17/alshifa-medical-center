import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import LesMédecins from "./pages/LesMédecins";
import Connexion from "./pages/Connexion";
import QuiSommesNous from "./pages/QuiSommesNous";
import Contact from "./pages/Contact";
import MonProfil from "./pages/MonProfil";
import MesRendezVous from "./pages/MesRendezVous";
import RendezVous from "./pages/RendezVous";
import BarreDeNavigation from "./components/BarreDeNavigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <BarreDeNavigation />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/les-médecins" element={<LesMédecins />} />
        <Route path="/les-médecins/:speciality" element={<LesMédecins />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/qui-sommes-nous?" element={<QuiSommesNous />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mon-profil" element={<MonProfil />} />
        <Route path="/mes-rendez-vous" element={<MesRendezVous />} />
        <Route path="/rendezvous/:médId" element={<RendezVous />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
