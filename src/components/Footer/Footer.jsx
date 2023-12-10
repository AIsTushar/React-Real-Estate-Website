import "./footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="Logo" width={120} />

          <span className="secondaryText">
            {" "}
            Our vision is to make all people <br /> the best place to live for
            them.{" "}
          </span>
        </div>
        {/* Right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">123 Main Street Los Angeles, CA</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
