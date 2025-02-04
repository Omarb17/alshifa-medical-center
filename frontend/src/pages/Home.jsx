import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import Learn from "../components/Learn";

const Accueil = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      <Learn />
    </div>
  );
};

export default Accueil;
