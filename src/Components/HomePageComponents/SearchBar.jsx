import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "../../cssStyle/HomepageStyle/SearchBar.module.css";
import Location from "./Location";

export default function SearchBar() {
  return (
    <div className={`${styles.searchBar}`}>
      <Location />
      <input type="text" placeholder="Search" />
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.myIcon} />
    </div>
  );
}
