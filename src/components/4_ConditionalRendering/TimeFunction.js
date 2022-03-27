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

  //   let button;

  //   if (locale === "bn-BD") {
  //     button = <Button change={this.convertTimeZone} locale="en-US" />;
  //   } else {
  //     button = <Button change={this.convertTimeZone} locale="bn-BD" />;
  //   }

  return (
    <div>
      <h5>Hello--{date.toLocaleTimeString(locale)}</h5>
      {/* {button} */}
      {locale === "bn-BD" ? (
        <Button change={convertTimeZone} locale="en-US" show={false} />
      ) : (
        <Button change={convertTimeZone} locale="bn-BD" show={true} />
      )}
    </div>
  );
}

export default TimeFunction;
