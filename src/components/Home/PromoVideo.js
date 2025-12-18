import React from "react";
import "./PromoVideo.scss";
import promoVideo from "../../images/welcomeSection.mp4"; 


const PromoVideo = () => {
  return (

      <div className="video-slider-container">
        <iframe
          src=""
          width="90%"
          height="100%"
          allow="autoplay; fullscreen"
          title="promo"
        ></iframe>

      </div>
    
  );
};

export default PromoVideo;
