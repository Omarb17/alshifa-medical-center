import { useParams } from "react-router-dom";

const LesMédecins = () => {
  const { speciality } = useParams();
  console.log(speciality);

  return <div></div>;
};

export default LesMédecins;
