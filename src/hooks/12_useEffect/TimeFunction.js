import React, { useEffect, useState } from "react";
import Button from "./Button";

function TimeFunction() {
  const [date, setDate] = useState(new Date());
  const [locale, setLocale] = useState("en-US");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // component unmounted, stop the timer
    return () => {
      clearInterval(interval);
    }

  }, []);

  useEffect(()=>{
    console.log("Count is updated");
  }, [count]);

  const convertTimeZone = (locale) => {
    setLocale(locale);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <h5>Hello--{date.toLocaleTimeString(locale)}</h5>
      
      {locale === "bn-BD" ? (
        <Button change={convertTimeZone} locale="en-US" />
      ) : (
        <Button change={convertTimeZone} locale="bn-BD" />
      )}

      <br/>
      <br/>
      <button type="button" onClick={incrementCount}>Click {count} times</button>
    </div>
  );
}

export default TimeFunction;