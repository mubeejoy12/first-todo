import React from "react";
import styles from "./style.module.css";

const AlllistItems = ["All", "Groceries", "College", "Payments"];

const Sidebar = ({ currentCategory, setCurrentCategory }) => {
  return (
    <div className={styles.sideBar}>
      {AlllistItems.map((item) => (
        <div
          className={currentCategory === item ? styles.selected : styles.item}
          onClick={() => setCurrentCategory(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
