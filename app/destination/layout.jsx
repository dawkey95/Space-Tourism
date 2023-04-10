import Header from "@/components/NavHeader";
import "./Destination.css";

const DestinationLayout = ({ children }) => {
  return (
    <>
      <section className="destination-section">
        <Header />
        <div className="destination-container">
          <h2 className="destination-cta">
            <strong className="destination-01">01</strong> PICK YOUR DESTINATION
          </h2>
          {children}
        </div>
      </section>
    </>
  );
};

export default DestinationLayout;
