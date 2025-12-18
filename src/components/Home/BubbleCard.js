import { useEffect, useRef, useState } from "react";
import './Home.scss'

const BubbleCard = ({ item, index }) => {
  const textRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      setShowButton(
        textRef.current.scrollHeight > textRef.current.clientHeight
      );
    }
  }, []);

  return (
    <div
      className="bubble-card wow animate__animated animate__fadeInUp"
      data-wow-delay={`${index * 0.3}s`}
    >
      {/* <div className="bubble-image">
        <img src={item.img} alt={item.title} />
      </div> */}

      <h2>{item.title}</h2>

      <p
        ref={textRef}
        className={!expanded ? "clamp-4" : ""}
      >
        {item.text}
      </p>

      {showButton && (
        <button
          className="see-more-btn"
          onClick={() => setExpanded(prev => !prev)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default BubbleCard;
