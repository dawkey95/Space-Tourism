import DestinationNav from "@/components/Destination/destinationNav";
import Image from "next/image";
import data from "/data/data.json";
import "../planet.css";

const Titan = () => {
  const titanData = data.destinations[3];
  return (
    <>
      <Image src={titanData.images.png} width={170} height={170} alt="titan" />
      <DestinationNav />
      <div className="text-container">
        <h1 className="title">{titanData.name.toUpperCase()}</h1>
        <p className="details">{titanData.description}</p>
      </div>
      <div className="distance">
        <h2 className="distance-title">AVG. DISTANCE</h2>
        <p className="distance-details">{titanData.distance.toUpperCase()}</p>
      </div>
      <div className="travel-time">
        <h2 className="travel-title">EST. TRAVEL TIME</h2>
        <p className="travel-details">{titanData.travel.toUpperCase()}</p>
      </div>
    </>
  );
};

export default Titan;
