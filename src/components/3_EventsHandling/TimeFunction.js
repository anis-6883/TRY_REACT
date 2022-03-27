import React, { useEffect, useState } from "react";
import Button from "./Button";

function TimeFunction() {
  const [date, setDate] = useState(new Date());
  const [locale, setLocale] = useState("en-US");

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const convertTimeZone = (locale) => {
    setLocale(locale);
  };

  return (
    <div>
      <h5>Hello--{date.toLocaleTimeString(locale)}</h5>
      {/* <button onClick={convertTimeZone}>Convert BD-TimeZone</button> */}
      <Button change={convertTimeZone} locale="bn-BD"/>
    </div>
  );
}

export default TimeFunction;
