import { useCallback, useState } from "react";

export default function ReactQ31() {
  const [value, setValue] = useState("");
  const [debounceValue, setDebounceValue] = useState("");

  // const handleChange = (value) => setValue(value);

  const handleChange = (value) => setDebounceValue(value);
  function debounce(callback, timeout) {
    let timeoutId; // return function (...arg) { //     setValue(arg[0])
    return function () {
      setValue(arguments[0]);
      if (timeoutId) {
        clearTimeout(timeoutId);
      } // const boundCallback = () => callback.apply(this, arg);
      const boundCallback = () => callback.apply(this, arguments);
      timeoutId = setTimeout(boundCallback, timeout);
    };
  }
  const boundDebounce = useCallback(debounce(handleChange, 1000), []);

  return (
    <div>
      <h4>
        Display typed value under input box after stop typing more than 1
        seconds
      </h4>
      <label>Input Value ： </label>
      <input
        type="text"
        value={value}
        onChange={(e) => boundDebounce(e.target.value)}
      />
      <br />
      <label>Lazy display： {debounceValue}</label>
    </div>
  );
}
