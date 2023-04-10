import DestinationNav from "@/components/Destination/destinationNav";
import Image from "next/image";
import "../planet.css";
import data from "/data/data.json";

const Mars = () => {
  const marsData = data.destinations[1];
  return (
    <>
      <Image src={marsData.images.png} width={170} height={170} alt="mars" />
      <DestinationNav />
      <div className="text-container">
        <h1 className="title">{marsData.name.toUpperCase()}</h1>
        <p className="details">{marsData.description}</p>
      </div>
      <div className="distance">
        <h2 className="distance-title">AVG. DISTANCE</h2>
        <p className="distance-details">{marsData.distance.toUpperCase()}</p>
      </div>
      <div className="travel-time">
        <h2 className="travel-title">EST. TRAVEL TIME</h2>
        <p className="travel-details">{marsData.travel.toUpperCase()}</p>
      </div>
    </>
  );
};

export default Mars;
