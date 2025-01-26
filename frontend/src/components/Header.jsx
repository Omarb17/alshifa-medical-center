import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col flex-wrap rounded-2xl md:flex-row bg-blue-7 md:px-10 lg:px-20">
      <div className="md-w-1/2 flex flex-col items-start justify-center gap-4 py-10 md-py-[10vw] md:mb-[-30px]">
        <p className="text-3xl font-semibold leading-tight text-blue-1 md:text-4xl lg:text-6xl md:leading-tight lg:leading-tight">
          Prendre rendez-vous
          <br />
          Avec des médecins de <br />
          confiance
        </p>
        <div className="flex flex-col items-center gap-3 text-base font-light text-blue-1 md:flex-row ">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Parcourez simplement notre longue liste <br />
            de médecins de confiance planifiez votre rendez-vous sans tracas
          </p>
        </div>
        <a
          className="flex items-center gap-3 px-3 py-3 m-auto text-xl transition-all rounded-full md:m-0 hover:scale-105 duartion-300 bg-blue-8 text-blue-1 "
          href="#speciality"
        >
          Prendre rendez-vous
          <img className="w-6" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      <div className="relative ml-auto md:w-1/2">
        <img
          className="bottom-0 w-full h-auto p-0 "
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
