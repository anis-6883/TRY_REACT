import { React, useEffect, useRef } from "react";
import Input from "./Input";

function Form() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      {/* <input ref={inputRef} type="text" placeholder="Focus Input..." /> */}
      <Input ref={inputRef} type="text" placeholder="Focus Input..." />
    </>
  );
}

export default Form;
