import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);

  const [appointments, setAppointments] = useState([]);
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    );
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/appointments", {
        headers: { token },
      });

      if (data.success) {
        setAppointments(data.appointments.reverse());
        console.log(data.appointments);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointments = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div>
      <p className="pb-3 mt-12 font-medium border-b text-blue-5">
        My Appointments
      </p>
      <div>
        {appointments.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b"
            key={index}
          >
            <div>
              <img className="w-32 bg-blue-1" src={item.docData.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-blue-5">
              <p className="text-lg font-bold text-blue-7">
                {item.docData.name}
              </p>
              <p>{item.docData.speciality}</p>
              <p className="mt-1 font-bold text-blue-8">Address:</p>
              <p className="text-sm">{item.docData.address.line1}</p>
              <p className="text-sm">{item.docData.address.line2}</p>
              <p className="mt-1 text-sm ">
                <span className="text-sm font-bold text-blue-8">
                  Date & Time:
                </span>
                {slotDateFormat(item.slotDate)} | {item.slotTime}
              </p>
            </div>
            <div></div>
            <div className="flex flex-col justify-end gap-2">
              {!item.cancelled && !item.isCompleted && (
                <button
                  onClick={() => cancelAppointments(item._id)}
                  className="py-2 text-sm text-center transition-all duration-300 border text-blue-5 sm:min-w-48 hover:bg-red-600 hover:text-blue-1"
                >
                  Cancel Appointment
                </button>
              )}
              {item.cancelled && (
                <p className="px-2 py-2 text-red-500 border border-red-500 rounded sm:min-w-48">
                  Appointment Cancelled
                </p>
              )}
              {item.isCompleted && (
                <p className="px-2 py-2 text-green-500 border border-green-500 rounded sm:min-w-48">
                  Appointment Completed
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
