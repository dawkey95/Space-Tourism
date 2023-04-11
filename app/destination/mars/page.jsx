import DestinationNav from "@/components/Destination/destinationNav";
import Image from "next/image";
import "../planet.css";
import data from "/data/data.json";

const Mars = () => {
  const marsData = data.destinations[1];
  return (
    <>
      <div className="planet-container">
        <Image
          className="mobile-image"
          src={marsData.images.webp}
          width={170}
          height={170}
          alt="mars"
        />
        <Image
          className="tablet-image"
          src={marsData.images.webp}
          width={300}
          height={300}
          alt="mars"
        />
        <Image
          className="desktop-image"
          src={marsData.images.webp}
          width={445}
          height={445}
          alt="mars"
        />
        <div className="content-container">
          <DestinationNav />
          <div className="text-container">
            <h1 className="title">{marsData.name.toUpperCase()}</h1>
            <p className="details">{marsData.description}</p>
          </div>
          <div className="details-container">
            <div className="distance">
              <h2 className="distance-title">AVG. DISTANCE</h2>
              <p className="distance-details">
                {marsData.distance.toUpperCase()}
              </p>
            </div>
            <div className="travel-time">
              <h2 className="travel-title">EST. TRAVEL TIME</h2>
              <p className="travel-details">{marsData.travel.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mars;
