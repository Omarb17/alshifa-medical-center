import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col flex-wrap rounded-2xl md:flex-row bg-blue-7 md:px-10 lg:px-20 ">
      <div className="md-w-1/2 flex flex-col items-start justify-center gap-7 py-20 md-py-[10vw] md:mb-[-30px]">
        <p className="flex-1 text-3xl font-semibold leading-tight text-blue-1 md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight">
          Prendre rendez-vous
          <br />
          Avec plus de 100 médecins <br /> de confiance
        </p>

        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="flex items-center gap-3 px-5 py-3 m-auto mt-6 text-xl transition-all rounded-full lg:mb-12 md:m-0 hover:scale-105 duartion-300 bg-blue-8 text-blue-1 "
        >
          Créer un compte
        </button>
      </div>
      <div className="relative ml-auto md:w-1/2">
        <img
          className="absolute bottom-0 right-0 w-full h-auto max-w-md p-0 "
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
