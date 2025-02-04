import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-blue-5 md:mx-10">
      <h1 className="text-3xl font-medium">
        Les meilleurs médecins à réserver
      </h1>
      <p className="text-xl text-center sm:w-2/3">
        Parcourez simplement notre vaste liste de médecins de confiance.
      </p>
      <div className="grid w-full gap-4 px-3 pt-5 grid-cols-auto gap-y-6 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-1 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-blue-1" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-blue-5 ">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p className="text-green-500">Disponible</p>
              </div>
              <p className="text-lg font-medium text-blue-6">{item.name}</p>
              <p className="text-sm text-blue-6">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate(`/doctors`);
          scrollTo(0, 0);
        }}
        className="px-12 py-3 mt-10 text-xl font-black rounded-full bg-blue-5 text-blue-7"
      >
        Plus
      </button>
    </div>
  );
};

export default TopDoctors;
