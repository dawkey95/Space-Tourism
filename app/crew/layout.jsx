import Header from "@/components/NavHeader";
import './layout.css';

const DestinationLayout = ({ children }) => {
  return (
    <>
      <section className="crew-section">
        <div className="background">
          <Header />
          <div className="crew-container">
            <h2 className="crew-cta">
              <strong className="crew-01">02</strong> MEET YOUR CREW
            </h2>
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationLayout;
