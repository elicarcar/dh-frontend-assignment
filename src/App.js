import React, { useState } from "react";
import mock_names from "./MOCK_DATA.json";
import styled from "styled-components";
import Input from "./components/Input";
import List from "./components/List";
import ListItems from "./components/ListItems";
import Nav from "./components/Nav";
import SearchIcon from "./SearchIcon";
import Wrapper from "./components/Wrapper.js";

function App() {
  let newValue = "";
  const [nameToFilter, setNameToFilter] = useState(/(?:)/);
  const [displayItem, setDisplayItem] = useState(true);
  const [_value, set_Value] = useState("");
  const [filteredNames, setFilteredNames] = useState(mock_names);
  const [displayList, setDisplayList] = useState(false);

  const searchInput = e => {
    newValue = e.target.value;
    setNameToFilter(new RegExp(e.target.value), "g");
    set_Value(newValue);
  };

  const handleFocus = id => {
    setDisplayList(true);
    console.log(id);
  };

  const setValue = id => {
    console.log(id);
    set_Value(id);
    setDisplayList(false);
  };

  const handleBlur = () => {
    // setDisplayList(false);
  };

  console.log(_value);
  return (
    <div>
      <Input
        value={_value}
        placeholder="Type or search.."
        searchInput={searchInput}
        handleFocus={id => handleFocus(id)}
        handleBlur={handleBlur}
        type="text"
      />

      <Nav displayList={displayList}>
        <List>
          {filteredNames
            .filter(name => nameToFilter.test(name.name))
            .map(person => (
              <ListItems
                displayItem={displayItem}
                setValue={() => setValue(person.name)}
              >
                {person.name}
              </ListItems>
            ))}
        </List>
      </Nav>
    </div>
  );
}

export default App;
