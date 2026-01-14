import React from "react";
import "./PromoVideo.scss";

import image from '../../images/table1.jpeg'

const PromoVideo = () => {
  return (

    <div className="video-slider-container">
      {/* <iframe
          src=""
          width="90%"
          height="100%"
          allow="autoplay; fullscreen"
          title="promo"
        ></iframe> */}
      <img src={image} width="100%"  loading="lazy"/>
    </div>

  );
};

export default PromoVideo;
