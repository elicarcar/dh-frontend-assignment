import React, { useState } from "react";
import mock_names from "./MOCK_DATA.json";
import Input from "./components/Input";
import List from "./components/List";
import ListItems from "./components/ListItems";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import ContactInput from "./components/ContactInput.js";

function App() {
  let newValue = "";
  const [nameToFilter, setNameToFilter] = useState(/(?:)/);
  const [displayItem, setDisplayItem] = useState(true);
  const [displayList, setDisplayList] = useState(false);
  const [displaySearchIcon, setDisplaySearchIcon] = useState(false);
  const [_value, set_Value] = useState("");
  const [filteredNames, setFilteredNames] = useState(mock_names);

  const searchInput = e => {
    newValue = e.target.value;
    setNameToFilter(new RegExp(e.target.value, "i"));
    set_Value(newValue);
  };

  console.log(nameToFilter);

  const handleFocus = () => {
    setDisplayList(true);
    setDisplaySearchIcon(true);
  };

  const setValue = (id, cb) => {
    set_Value(id);
    setDisplayList(false);
  };

  const handleBlur = () => {
    setDisplaySearchIcon(false);
    console.log("im blurred");
  };

  console.log(_value);
  return (
    <div>
      <ContactInput
        value={_value}
        handleBlur={handleBlur}
        handleFocus={id => handleFocus(id)}
        searchInput={searchInput}
        displaySearchIcon={displaySearchIcon}
      />

      {/* <Nav displayList={displayList}>
        <List>
          {filteredNames
            .filter(name => nameToFilter.test(name.name) && name !== null)
            .map((person, i) => (
              <ListItems
                key={i}
                displayItem={displayItem}
                setValue={() => setValue(person.name)}
              >
                {person.name}
              </ListItems>
            ))}
        </List>
      </Nav> */}
    </div>
  );
}

export default App;
