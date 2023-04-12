import CrewNav from "@/components/Crew/crewNav";
import TabletCrewNav from "@/components/Crew/tabletCrewNav";
import Image from "next/image";
import "../crew.css";
import data from "/data/data.json";

const Anousheh = () => {
  const anoushehData = data.crew[3];
  return (
    <>
      <div className="image-container">
        <Image
          className="mobile-crew"
          src={anoushehData.images.png}
          width={177}
          height={222}
          alt="anousheh ansari"
        />
      </div>
      <CrewNav />
      <div className="content-container">
        <div className="text-container">
          <p className="role">{anoushehData.role.toUpperCase()}</p>
          <h1 className="title">{anoushehData.name.toUpperCase()}</h1>
          <p className="bio-details">{anoushehData.bio}</p>
          <TabletCrewNav />
        </div>
        <div className="nav-img-container">
          <Image
            className="tablet-crew"
            src={anoushehData.images.png}
            width={385}
            height={450}
            alt="anousheh ansari"
          />
          <Image
            className="desktop-crew"
            src={anoushehData.images.png}
            width={615}
            height={607}
            alt="anousheh ansari"
          />
        </div>
      </div>
    </>
  );
};

export default Anousheh;
