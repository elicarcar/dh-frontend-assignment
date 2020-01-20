import React, { useState } from "react";
import Wrapper from "./DropdownSearchWrapper/Wrapper.js";
import Nav from "./DropdownSearchNav/Nav.js";
import List from "./DropdownSearchList/List.js";
import ListItems from "./DropdownListItems/ListItems.js";
import Label from "./DropdownLabel/DropdownLabel.js";
import Input from "./DropdownInput/Input.js";

const DropdownSearch = ({ setName, contactNames = [], inputRef, navRef }) => {
  const [nameToFilter, setNameToFilter] = useState(/(?:)/);
  const [displaySearchIcon, setDisplaySearchIcon] = useState(false);
  const [contactName, setContactName] = useState("");
  const noMatch =
    contactNames.filter(name => nameToFilter.test(name.name)).length === 0;

  const handleInputChange = e => {
    const searchedName = e.target.value;
    setNameToFilter(new RegExp(e.target.value, "i"));
    setContactName(searchedName);
  };

  const handleFocus = () => {
    return setTimeout(function() {
      setDisplaySearchIcon(true);
    }, 100);
  };

  const handleBlur = () => {
    setDisplaySearchIcon(false);
  };

  const getContact = name => {
    setContactName(name);
  };

  const getSelectedName = name => {
    setName(name);
  };

  return (
    <Wrapper displaySearchIcon={displaySearchIcon} divRef={divRef}>
      <Input
        data-testid="contact-input"
        value={contactName}
        handleInputChange={e => handleInputChange(e)}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        inputRef={inputRef}
      />
      <Label htmlFor="contact">Contact</Label>
      <Nav ref={navRef} data-testid="navBar">
        <List>
          {noMatch ? (
            <ListItems key="no-match" noMatch data-testid="no-match">
              No match
            </ListItems>
          ) : (
            contactNames
              .sort((a, b) => (a.name < b.name ? -1 : 0))
              .filter(
                name => nameToFilter.test(name.name) && name.name !== null
              )
              .map((person, i) => (
                <ListItems
                  key={i}
                  handleClick={() => getContact(person.name)}
                  handleSelect={() => getSelectedName(person.name)}
                >
                  {person.name}
                </ListItems>
              ))
          )}
        </List>
      </Nav>
    </Wrapper>
  );
};

export default DropdownSearch;
