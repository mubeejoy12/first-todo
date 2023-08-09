import styles from "../src/components/style.module.css";
import Sidebar from "./components/Sidebar";
import AllTask from "./components/Alltask";
import { useState } from "react";

function App() {
  const [currentCategory, setCurrentCategory] = useState("All");
  return (
    <div className={styles.mainpage}>
      <div className={styles.rectangle}>
        <Sidebar
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <div className={styles.line} />
        <AllTask currentCategory={currentCategory} />

      </div>
    </div>
  );
}

export default App;
