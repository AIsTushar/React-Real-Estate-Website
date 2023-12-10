import CountUp from "react-countup";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left side */}
        <div className="flexColStart hero-left">
          {/* Title */}
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> MOst Suitable <br />
              Property
            </h1>
          </div>
          {/* Description */}
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find varity of property that suit you very easily
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a property
            </span>
          </div>
          {/* Search bar */}
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          {/* Stats */}
          <div className="flexCenter stats">
            {/* Stat One*/}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={5000} end={7000} duration={4} /> <span>+</span>
              </span>

              <span className="secondaryText">Premium Products</span>
            </div>
            {/* Stat Two*/}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1500} end={1700} duration={4} /> <span>+</span>
              </span>

              <span className="secondaryText">Happy Customer</span>
            </div>
            {/* Stat Three*/}
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>

              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
