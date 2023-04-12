import TechNav from "/components/tech/techNav";
import Image from "next/image";
import "../technology.css";
import data from "/data/data.json";

const SpacePort = () => {
  const portData = data.technology[1];
  return (
    <>
      <div className="image-container">
        <Image
          src={portData.images.landscape}
          width={375}
          height={170}
          alt="space port"
          className="mobile-tech"
        />
        <Image
          src={portData.images.landscape}
          width={768}
          height={310}
          alt="space port"
          className="tablet-tech"
        />
      </div>
      <div className="text-container">
        <TechNav />
        <div className="text-sub">
          <h2 className="terminology-title">THE TERMINOLOGY...</h2>
          <h1 className="title">{portData.name.toUpperCase()}</h1>
          <p className="description">{portData.description}</p>
        </div>
      </div>
      <Image
        src={portData.images.portrait}
        width={515}
        height={527}
        alt="space port"
        className="desktop-tech"
      />
    </>
  );
};

export default SpacePort;
