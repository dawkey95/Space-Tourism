import DestinationNav from "@/components/Destination/destinationNav";
import Image from "next/image";
import data from "/data/data.json";
import "../planet.css";

const Titan = () => {
  const titanData = data.destinations[3];
  return (
    <>
      <div className="planet-container">
        <Image
          className="mobile-image"
          src={titanData.images.webp}
          width={170}
          height={170}
          alt="titan"
        />
        <Image
          className="tablet-image"
          src={titanData.images.webp}
          width={300}
          height={300}
          alt="titan"
        />
        <Image
          className="desktop-image"
          src={titanData.images.webp}
          width={445}
          height={445}
          alt="titan"
        />
        <div className="content-container">
          <DestinationNav />
          <div className="text-container">
            <h1 className="title">{titanData.name.toUpperCase()}</h1>
            <p className="details">{titanData.description}</p>
          </div>
          <div className="details-container">
            <div className="distance">
              <h2 className="distance-title">AVG. DISTANCE</h2>
              <p className="distance-details">
                {titanData.distance.toUpperCase()}
              </p>
            </div>
            <div className="travel-time">
              <h2 className="travel-title">EST. TRAVEL TIME</h2>
              <p className="travel-details">{titanData.travel.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Titan;
