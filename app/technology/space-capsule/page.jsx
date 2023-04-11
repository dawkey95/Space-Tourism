import TechNav from "/components/tech/techNav";
import Image from "next/image";
import "../technology.css";
import data from "/data/data.json";

const Capsule = () => {
  const capsuleData = data.technology[2];
  return (
    <>
      <div className="image-container">
        <Image
          src={capsuleData.images.landscape}
          width={375}
          height={170}
          alt="space launcher"
          className="mobile-tech"
        />
        <Image
          src={capsuleData.images.landscape}
          width={768}
          height={310}
          alt="space launcher"
          className="tablet-tech"
        />
        <Image
          src={capsuleData.images.landscape}
          width={768}
          height={310}
          alt="space launcher"
          className="desktop-tech"
        />
      </div>
      <div className="text-container">
        <TechNav />
        <h2 className="terminology-title">THE TERMINOLOGY...</h2>
        <h1 className="title">{capsuleData.name.toUpperCase()}</h1>
        <p className="description">{capsuleData.description}</p>
      </div>
    </>
  );
};

export default Capsule;
