import CrewNav from "@/components/Crew/crewNav";
import Image from "next/image";
import "../crew.css";
import data from "/data/data.json";

const Mark = () => {
  const markData = data.crew[1];
  return (
    <>
      <div className="image-container">
        <Image
          src={markData.images.png}
          width={152}
          height={222}
          alt="mark shuttleworth"
        />
      </div>
      <CrewNav />
      <div className="text-container">
        <p className="role">{markData.role.toUpperCase()}</p>
        <h1 className="title">{markData.name.toUpperCase()}</h1>
        <p className="bio-details">{markData.bio}</p>
      </div>
    </>
  );
};

export default Mark;
