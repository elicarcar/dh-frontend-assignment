import React, { useState, useLayoutEffect, useRef } from "react";
import DropdownSearch from "./components/DropdownSearch/DropdownSearch.js";
import Container from "./components/Container/Container.js";
import mock_names from "./MOCK_DATA.json";
import useKey from "./customHooks/useKey";

function App() {
  const navRef = useRef(null);
  const inputRef = useRef(null);
  const divRef = useRef();
  const list = mock_names.filter(Boolean);
  const [contact, setContact] = useState("");

  const [windowSize, setWindowSize] = useState(window.innerHeight);

  function handleResize() {
    const newWindowHeightValue = window.innerHeight;
    setWindowSize(newWindowHeightValue);
  }

  function useWindowSize() {
    useLayoutEffect(() => {
      let divSize = 0;
      if (navRef && inputRef) {
        const { height } = divRef.current.getBoundingClientRect();
        divSize = height;
      }

      if (divSize > windowSize / 2) {
        navRef.current.style.top = "-270px";
      } else {
        navRef.current.style.top = "0px";
      }

      window.addEventListener("resize", () => handleResize());
      return () => {
        window.removeEventListener("resize", () => handleResize());
      };
    }, [windowSize]);
  }

  useWindowSize();

  function onEnter() {
    return inputRef.current.focus();
  }

  function onESC() {
    return inputRef.current.blur();
  }

  useKey("Enter", onEnter);
  useKey("Escape", onESC);

  const setName = name => {
    setContact(name);
  };

  return (
    <Container>
      <DropdownSearch
        divRef={divRef}
        navRef={navRef}
        inputRef={inputRef}
        contactNames={list}
        setName={name => setName(name)}
      />
    </Container>
  );
}

export default App;
