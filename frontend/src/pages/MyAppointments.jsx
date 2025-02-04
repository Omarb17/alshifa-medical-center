import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className="pb-3 mt-12 font-medium border-b text-blue-5">
        My Appointments
      </p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b"
            key={index}
          >
            <div>
              <img className="w-32 bg-blue-1" src={item.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-blue-5">
              <p className="text-lg font-bold text-blue-7">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="mt-1 font-bold text-blue-8">Address:</p>
              <p className="text-sm">{item.address.line1}</p>
              <p className="text-sm">{item.address.line2}</p>
              <p className="mt-1 text-sm ">
                <span className="text-sm font-bold text-blue-8">
                  Date & Time:
                </span>
                03,february 2025 6:05
              </p>
            </div>
            <div></div>
            <div className="flex flex-col justify-end gap-2">
              <button className="py-2 text-sm text-center transition-all duration-300 border text-blue-5 sm:min-w-48 hover:bg-green-600 hover:text-blue-1">
                Pay Online
              </button>
              <button className="py-2 text-sm text-center transition-all duration-300 border text-blue-5 sm:min-w-48 hover:bg-red-600 hover:text-blue-1">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
