import CrewNav from "@/components/Crew/crewNav";
import Image from "next/image";
import "../crew.css";
import data from "/data/data.json";

const Douglas = () => {
  const douglasData = data.crew[0];
  return (
    <>
      <div className="image-container">
        <Image
          src={douglasData.images.png}
          width={177}
          height={222}
          alt="douglas hurley"
        />
      </div>
      <CrewNav />
      <div className="text-container">
        <p className="role">{douglasData.role.toUpperCase()}</p>
        <h1 className="title">{douglasData.name.toUpperCase()}</h1>
        <p className="bio-details">{douglasData.bio}</p>
      </div>
    </>
  );
};

export default Douglas;
