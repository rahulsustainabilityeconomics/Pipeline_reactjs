import React from "react";
import "./Popup.scss"; // Create a CSS file for styling the popup.
import Close from "../../assets/svg/Close";

const Popup = ({ content, onClose }: { content: any; onClose: any }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          <Close color={"#7B5ECA"}/>
        </button>
        <div className="popup-content-video">
          <video width="100%" height="400" autoPlay muted>
            <source src={content} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Popup;
