import styles from "./Map.module.css";
import { NavLink } from "react-router-dom";

function Map() {
  return (
    <div className={styles.mapContainer}>
      {" "}
      <h1>Map</h1>
      <ul>
        <li>
          <NavLink to="form">FORM</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Map;
