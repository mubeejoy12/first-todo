import { useState } from "react";
import styles from "./style.module.css";
import icon from "../Vector.png";

const AllTask = ({ currentCategory }) => {
  const [value, setValue] = useState("");
  const [valueList, setValueList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValueList([...valueList, { title: value, category: currentCategory }]);
    setValue("");
  };

  const deleteValue = (title) => {
    setValueList(valueList.filter((item) => item.title !== title));
  };

  return (
    <diV className={styles.allTask}>
      <div className={styles.Alltasktext}>All Tasks</div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={value}
          className={styles.form}
          type="text"
          placeholder="Add a new task inside ‘All’ category"
        />
      </form>
      <div>
        {valueList.length > 0 ? (
          <>
            {valueList.map((data, idx) => (
              <div className={styles.listItem} key={idx}>
                <div className={styles.leftContent}>
                  <div className={styles.checkBox} />
                  <span className={styles.title}>{data.title}</span>
                  <div className={styles.category}>{data.category}</div>
                </div>

                <img
                  src={icon}
                  alt="icon"
                  onClick={() => deleteValue(data.title)}
                  className={styles.delete}
                >

                </img>
              </div>
            ))}
          </>
        ) : (
          <span>Kindly add new item</span>
        )}
      </div>
    </diV>
  );
};
export default AllTask;
