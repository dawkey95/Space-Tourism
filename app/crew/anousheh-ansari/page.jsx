import CrewNav from "@/components/Crew/crewNav";
import Image from "next/image";
import "../crew.css";
import data from "/data/data.json";

const Anousheh = () => {
  const anoushehData = data.crew[3];
  return (
    <>
      <div className="image-container">
        <Image
          src={anoushehData.images.png}
          width={177}
          height={222}
          alt="anousheh ansari"
        />
      </div>
      <CrewNav />
      <div className="text-container">
        <p className="role">{anoushehData.role.toUpperCase()}</p>
        <h1 className="title">{anoushehData.name.toUpperCase()}</h1>
        <p className="bio-details">{anoushehData.bio}</p>
      </div>
    </>
  );
};

export default Anousheh;


