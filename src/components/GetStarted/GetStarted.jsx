import "./getStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth flexCenter g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with us</span>
          <span className="secondaryText">
            Discover a place you'll love to live. <br />
            Subscribe and find super attractive price quotes from us.
          </span>
          <button className="button">
            <a href="mailto:azizultushar98@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
