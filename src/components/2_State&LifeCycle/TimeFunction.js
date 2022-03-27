import React, { useEffect, useState } from "react";

function TimeFunction({ locale }) {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState({ counter: 0 });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const clickHandler = () => {
    setCount((prevCount) => ({ counter: prevCount.counter + 1 }));
  };

  const counterHandler = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <br />
      <h5>Hello--{date.toLocaleTimeString(locale)}</h5>

      <button onClick={clickHandler}>Count {count.counter} By Obj</button>
      <br />
      <br />
      <button onClick={counterHandler}>Counter {counter} By Number</button>
    </div>
  );
}

export default TimeFunction;
