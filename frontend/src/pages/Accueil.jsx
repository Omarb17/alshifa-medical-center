import Header from "../components/Header";
import MenuDeSpécialité from "../components/MenuDeSpécialité";
import LesMeilleursMédecins from "../components/LesMeilleursMédecins";
import Banner from "../components/Banner";

const Accueil = () => {
  return (
    <div>
      <Header />
      <MenuDeSpécialité />
      <LesMeilleursMédecins />
      <Banner />
    </div>
  );
};

export default Accueil;
