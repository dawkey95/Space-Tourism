import CrewNav from "@/components/Crew/crewNav";
import TabletCrewNav from "@/components/Crew/tabletCrewNav";
import Image from "next/image";
import "../crew.css";
import data from "/data/data.json";

const Victor = () => {
  const victorData = data.crew[2];
  return (
    <>
      <div className="image-container">
        <Image
          className="mobile-crew"
          src={victorData.images.png}
          width={177}
          height={222}
          alt="victor glover"
        />
      </div>
      <CrewNav />
      <div className="content-container">
        <div className="text-container">
          <p className="role">{victorData.role.toUpperCase()}</p>
          <h1 className="title">{victorData.name.toUpperCase()}</h1>
          <p className="bio-details">{victorData.bio}</p>
          <TabletCrewNav />
        </div>
        <div className="nav-img-container">
          <Image
            className="tablet-crew"
            src={victorData.images.png}
            width={385}
            height={500}
            alt="victor glover"
          />
          <Image
            className="desktop-crew"
            src={victorData.images.png}
            width={554}
            height={681}
            alt="victor glover"
          />
        </div>
      </div>
    </>
  );
};

export default Victor;
