import React from 'react';
import AppStore from "../assets/images/app-store.png";
import GooglePlay from "../assets/images/google-play.png";
import DownChevron from "../assets/images/down-chevron.png";
import Twitch from "../assets/images/twitch.png";
import Twitter from "../assets/images/twitter.png";
import Instagram from "../assets/images/instagram.png";

const Footer = () => {
    return (
        <footer>
          <div className="download-section">
            <button className="app-store">
              <img src={AppStore} alt="app-store" />
              <div className="dowload-text">
                <a href="#">App Store</a>
              </div>
            </button>
            <button className="google-play">
              <img src={GooglePlay} alt="google-play" />
              <div className="dowload-text">
                <a href="#">Google Play</a>
              </div>
            </button>
          </div>
          <div className="down-chevron">
            <img
              src={DownChevron}
              className="down-chevron"
              alt="down-chevron"
            />
          </div>
          <div className="social-media">
            <div className="legal-text">
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </div>
            <div className="social-media-icons">
              <img src={Twitch} className="twitch" alt="twitch" />
              <img src={Twitter} className="twitter" alt="twitter" />
              <img src={Instagram} className="instagram" alt="instagram" />
            </div>
          </div>
        </footer>
    );
}

export default Footer;