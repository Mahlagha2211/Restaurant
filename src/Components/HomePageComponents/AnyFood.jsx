import styles from "../../cssStyle/HomePageStyle/AnyFood.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
export default function AnyFood(foody) {
  return (
    <div
      className={`${styles.Anyfood} d-flex align-items-center justify-content-center  mt-3 mt-md-0 col-md-3   col-6`}
    >
      <img src={foody.food.strMealThumb} />
      <div>
        <p>{foody.food.strMeal.split(" ")[0]}</p>
        <span >
          Click Here <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </span>
      </div>
    </div>
  );
}
