import DestinationNav from "@/components/Destination/destinationNav";
import Image from "next/image";
import "../planet.css";
import data from "/data/data.json";

const Moon = () => {
  const moonData = data.destinations[0];
  return (
    <>
      <div className="planet-container">
        <Image
          className="mobile-image"
          src={moonData.images.webp}
          width={170}
          height={170}
          alt="moon"
        />
        <Image
          className="tablet-image"
          src={moonData.images.webp}
          width={300}
          height={300}
          alt="moon"
        />
        <Image
          className="desktop-image"
          src={moonData.images.webp}
          width={445}
          height={445}
          alt="moon"
        />
        <div className="content-container">
          <DestinationNav />
          <div className="text-container">
            <h1 className="title">{moonData.name.toUpperCase()}</h1>
            <p className="details">{moonData.description}</p>
          </div>
          <div className="details-container">
            <div className="distance">
              <h2 className="distance-title">AVG. DISTANCE</h2>
              <p className="distance-details">
                {moonData.distance.toUpperCase()}
              </p>
            </div>
            <div className="travel-time">
              <h2 className="travel-title">EST. TRAVEL TIME</h2>
              <p className="travel-details">{moonData.travel.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moon;
