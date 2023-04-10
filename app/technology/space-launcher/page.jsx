import TechNav from "/components/tech/techNav";
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
        />
      </div>
      <TechNav />
      <div className="text-container">
        <h2 className="terminology-title">THE TERMINOLOGY...</h2>
        <h1 className="title">{launcherData.name.toUpperCase()}</h1>
        <p className="description">{launcherData.description}</p>
      </div>
    </>
  );
};

export default Launcher;
