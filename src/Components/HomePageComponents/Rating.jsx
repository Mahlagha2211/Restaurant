import styles from "../../cssStyle/HomePageStyle/Rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
export default function Rating() {
  return (
    <div className={`${styles.Rating}  `}>
      <span>1M+ </span>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStarHalf} />
      <span>4.5 Rating Star</span>
    </div>
  );
}
