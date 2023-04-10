import DestinationNav from "@/components/Destination/destinationNav";
import Image from "next/image";
import '../planet.css';
import data from '/data/data.json';

const Moon = () => {
  const moonData = data.destinations[0];
  return (
    <>
      <Image
        src={moonData.images.png}
        width={170}
        height={170}
        alt="moon"
      />
      <DestinationNav />
      <div className="text-container">
        <h1 className="title">{moonData.name.toUpperCase()}</h1>
        <p className="details">
          {moonData.description}
        </p>
      </div>
      <div className="distance">
        <h2 className="distance-title">AVG. DISTANCE</h2>
        <p className="distance-details">{moonData.distance.toUpperCase()}</p>
      </div>
      <div className="travel-time">
        <h2 className="travel-title">EST. TRAVEL TIME</h2>
        <p className="travel-details">{moonData.travel.toUpperCase()}</p>
      </div>
    </>
  );
};

export default Moon;
