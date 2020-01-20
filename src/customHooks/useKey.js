import { useEffect, useRef } from "react";

const useKey = (key, cb) => {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });

  function handleEvent(e) {
    if (e.code === key) {
      callbackRef.current(e);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEvent);
    return () => {
      document.removeEventListener("keydown", handleEvent);
    };
  }, [key]);
};

export default useKey;
