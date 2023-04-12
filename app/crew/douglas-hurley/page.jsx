import CrewNav from "@/components/Crew/crewNav";
import TabletCrewNav from "@/components/Crew/tabletCrewNav";
import Image from "next/image";
import "../crew.css";
import data from "/data/data.json";

const Douglas = () => {
  const douglasData = data.crew[0];
  return (
    <>
      <div className="image-container">
        <Image
          className="mobile-crew"
          src={douglasData.images.png}
          width={177}
          height={222}
          alt="douglas hurley"
        />
      </div>
      <CrewNav />
      <div className="content-container">
        <div className="text-container">
          <p className="role">{douglasData.role.toUpperCase()}</p>
          <h1 className="title">{douglasData.name.toUpperCase()}</h1>
          <p className="bio-details">{douglasData.bio}</p>
          <TabletCrewNav />
        </div>
        <div className="nav-img-container">
          <Image
            className="tablet-crew"
            src={douglasData.images.png}
            width={385}
            height={500}
            alt="douglas hurley"
          />
          <Image
            className="desktop-crew "
            src={douglasData.images.png}
            width={568}
            height={712}
            alt="douglas hurley"
          />
        </div>
      </div>
    </>
  );
};

export default Douglas;
