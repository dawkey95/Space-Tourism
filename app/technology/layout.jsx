import Header from "@/components/NavHeader";
import "./layout.css";

const TechLayout = ({ children }) => {
  return (
    <>
      <section className="tech-section">
        <div className="background">
          <Header />
            <h2 className="tech-cta">
              <strong className="tech-03">03</strong> SPACE LAUNCH 101
            </h2>
          <div className="tech-container">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechLayout;
