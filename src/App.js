import React, { useState, useLayoutEffect, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import mock_names from "./MOCK_DATA.json";
import ContactInput from "./components/ContactInput/ContactInput.js";
import Container from "./components/Container.js";
import Wrapper from "./components/ContactInput/ContactInput.js";

function App() {
  const filteredNames = mock_names;
  const [displaySearchIcon, setDisplaySearchIcon] = useState(false);
  const [_value, set_Value] = useState("");
  const [nameToFilter, setNameToFilter] = useState(/(?:)/);
  const [displayItem, setDisplayItem] = useState(true);
  const [displayList, setDisplayList] = useState(false);
  const [windowScroll, setWindowScroll] = useState(Math.round(window.scrollY));
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const navRef = useRef(null);
  const inputRef = useRef(null);
  const divRef = useRef();

  useLayoutEffect(() => {
    let divSize = 0;
    if (navRef !== null && inputRef !== null) {
      divSize = divRef.current.getBoundingClientRect().height;
    }

    if (divSize > windowSize / 2) {
      navRef.current.style.top = "-270px";
    } else {
      navRef.current.style.top = "0px";
    }

    window.addEventListener("resize", () => handleResize());
    return () => {
      window.removeEventListener("resize", () => handleResize());
      console.log("events removed");
    };
  }, [windowSize]);

  function handleResize() {
    const newWindowHeightValue = window.innerHeight;
    setWindowSize(newWindowHeightValue);
  }
  const searchInput = e => {
    const newValue = e.target.value;
    setNameToFilter(new RegExp(e.target.value, "i"));
    set_Value(newValue);
  };

  const handleFocus = () => {
    setTimeout(function() {
      setDisplaySearchIcon(true);
    }, 100);
  };

  const setValue = (id, cb) => {
    console.log(id);
    set_Value(id);
  };

  const handleBlur = () => {
    setDisplaySearchIcon(false);
  };

  console.log(_value);
  console.log(navRef.current);

  console.log("window size", windowSize);
  return (
    <Container>
      <ContactInput
        divRef={divRef}
        value={_value}
        handleBlur={handleBlur}
        handleFocus={id => handleFocus(id)}
        searchInput={searchInput}
        displaySearchIcon={displaySearchIcon}
        setValue={setValue}
        nameToFilter={nameToFilter}
        navRef={navRef}
        inputRef={inputRef}
        nameToFilter={nameToFilter}
        contactNames={filteredNames}
      />
    </Container>
  );
}

export default App;
