import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our COntacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We Are always Here to Help by providing the best services for you.
            We believe a good blace to live can make your life better.
          </span>

          <div className="flexColStart contactsModes">
            {/* First Row */}
            <div className="flexStart row">
              {/* First mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>021 234 5678</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* Second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span>021 234 5678</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* Second Row */}
            <div className="flexStart row">
              {/* Third mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span>021 234 5678</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/* Forth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span>021 234 5678</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Contact-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
