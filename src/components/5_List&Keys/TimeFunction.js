import React, { useEffect, useState } from "react";

function TimeFunction({ locale }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  let arr = [1, 2, 3];

  return (
    <div>
      {/* <h5>Hello--{date.toLocaleTimeString(locale)}</h5> */}
      {arr.map((key) => (
        <h4 key={key}>
          Hello--{date.toLocaleTimeString(locale)}
        </h4>
      ))}
    </div>
  );
}

export default TimeFunction;
