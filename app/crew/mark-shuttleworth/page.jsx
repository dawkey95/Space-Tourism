import CrewNav from "@/components/Crew/crewNav";
import TabletCrewNav from "@/components/Crew/tabletCrewNav";
import Image from "next/image";
import "../crew.css";
import data from "/data/data.json";

const Mark = () => {
  const markData = data.crew[1];
  return (
    <>
      <div className="image-container">
        <Image
          className="mobile-crew"
          src={markData.images.png}
          width={177}
          height={222}
          alt="mark shuttleworth"
        />
      </div>
      <CrewNav />
      <div className="content-container">
        <div className="text-container">
          <p className="role">{markData.role.toUpperCase()}</p>
          <h1 className="title">{markData.name.toUpperCase()}</h1>
          <p className="bio-details">{markData.bio}</p>
          <TabletCrewNav />
        </div>
        <div className="nav-img-container">
          <Image
            className="tablet-crew"
            src={markData.images.png}
            width={320}
            height={500}
            alt="mark shuttleworth"
          />
          <Image
            className="desktop-crew"
            src={markData.images.png}
            width={453}
            height={654}
            alt="mark shuttleworth"
          />
        </div>
      </div>
    </>
  );
};

export default Mark;
