import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Learn = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [SlotIndex, setSlotIndex] = useState([0]);
  const [SlotTime, setSlotTime] = useState("");

  const getAvailableSlots = async () => {
    setDocSlots([]);
  };

  return;
};
export default Learn;
