import styles from "../../cssStyle/HomePageStyle/Location.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Location() {
  const navigate = useNavigate();

  const locationHandler = () => {
    navigate("/location");
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className={`${styles.location}`}
        onClick={locationHandler}
      >
        <FontAwesomeIcon icon={faLocationDot} />
        <span>Location</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
    </React.Fragment>
  );
}
