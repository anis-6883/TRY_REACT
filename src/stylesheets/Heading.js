import React, { useState } from "react";
import styles from "../css/myModule.module.css";

function Heading() {
  const [textColor, setTextColor] = useState("teal");

  const pickTextColor = () => {
    const colors = [
      "violet",
      "lightcoral",
      "burlywood",
      "salmon",
      "peru",
      "maroon",
    ];
    const pickColor = colors[Math.floor(Math.random() * colors.length)];
    return pickColor;
  };

  return (
    <div>
      <h2 className="globalHeading">
        React is a polpular JS Library...GLobal CSS
      </h2>
      <h2 className={styles.moduleHeading}>
        React is a polpular JS Library...Module CSS
      </h2>
      <h2 className={`${styles.moduleHeading2} border`}>
        React is a polpular JS Library...Module & Global CSS
      </h2>

      <h1 style={{ color: textColor, backgroundColor: "lightgray" }}>
        Inline CSS in Heading...
      </h1>
      <button type="button" onClick={() => setTextColor(pickTextColor())}>
        Change Color
      </button>
      <button type="button" onClick={() => setTextColor("teal")}>
        Reset Color
      </button>
    </div>
  );
}

export default Heading;
