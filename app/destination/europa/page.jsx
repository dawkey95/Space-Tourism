import DestinationNav from "@/components/Destination/destinationNav";
import data from "/data/data.json";
import Image from "next/image";
import "../planet.css";

const Europa = () => {
  const europaData = data.destinations[2];
  return (
    <>
      <Image
        src={europaData.images.png}
        width={170}
        height={170}
        alt="europa"
      />
      <DestinationNav />
      <div className="text-container">
        <h1 className="title">{europaData.name.toUpperCase()}</h1>
        <p className="details">{europaData.description}</p>
      </div>
      <div className="distance">
        <h2 className="distance-title">AVG. DISTANCE</h2>
        <p className="distance-details">{europaData.distance.toUpperCase()}</p>
      </div>
      <div className="travel-time">
        <h2 className="travel-title">EST. TRAVEL TIME</h2>
        <p className="travel-details">{europaData.travel.toUpperCase()}</p>
      </div>
    </>
  );
};

export default Europa;
