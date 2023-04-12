import TechNav from "@/components/Tech/techNav";
import Image from "next/image";
import "../technology.css";
import data from "/data/data.json";

const Launcher = () => {
  const launcherData = data.technology[0];
  return (
    <>
      <div className="image-container">
        <Image
          src={launcherData.images.landscape}
          width={375}
          height={170}
          alt="space launcher"
          className="mobile-tech"
        />
        <Image
          src={launcherData.images.landscape}
          width={768}
          height={310}
          alt="space launcher"
          className="tablet-tech"
        />
      </div>
      <div className="text-container">
        <TechNav />
        <div className="text-sub">
          <h2 className="terminology-title">THE TERMINOLOGY...</h2>
          <h1 className="title">{launcherData.name.toUpperCase()}</h1>
          <p className="description">{launcherData.description}</p>
        </div>
      </div>
      <Image
        src={launcherData.images.portrait}
        width={515}
        height={527}
        alt="space launcher"
        className="desktop-tech"
      />
    </>
  );
};

export default Launcher;
