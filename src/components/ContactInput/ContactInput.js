import styled from "styled-components";
import React from "react";
import Wrapper from "./Wrapper";
import Nav from "./Nav";

// const Wrapper = styled.div`
//   position: relative;
//   display: inline-block;
//   margin: 20px;
//   &:before {
//     display: ${props => (props.displaySearchIcon ? "block" : "none")};
//     position: absolute;
//     content: " ⚲ ";
//     top: 4px;
//     left: 2px;
//     height: 10px;
//     width: 24px;
//     margin-right: 5px;
//     transform: rotate(-45deg);
//   }

//   &:after {
//     display: block;
//     position: absolute;
//     top: 9px;
//     right: 9px;
//     content: " v ";
//   }
// `;

// const Nav = styled.nav`
//   position: relative;
//   visibility: visible;
//   opacity: 1;
//   transition: visibility 0s, opacity 0.5s;
//   transition-delay: 0.1s;
// `;

const List = styled.ul`
  list-style: none;
  padding: 0;
  height: 200px;
  width: 180px;
  overflow: hidden;
  overflow-y: scroll;
  border-radius: 3px;
  border: 1px solid #bfc5cd;
  box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
`;

const ListItems = styled.li.attrs(props => ({
  onClick: props.setValue,
  displayItem: props.displayItem,
  id: props.id
}))`
  color: #798697;
  line-height: 30px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: #4a4a4a;
    background: #f7f7f7;
  }
`;

const Label = styled.label`
  position: absolute;
  padding-left: 12px;
  margin-bottom: 15px;
  top: 9px;
  left: 0px;
  transition: transform 0.1s;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 0.1);
  opacity: 0.5;
  user-select: none;
`;

const Input = styled.input`
  border: 1px solid #bfc5cd;
  border-radius: 7px;
  color: #798697;
  padding: 10px;
  outline: none;
  transition: all 0.6s;
  transition-delay: 0.2s;

  &::-webkit-input-placeholder {
    opacity: 0;
  }

  &:hover {
    border: 1px solid #4a4a4a;
  }

  &:focus {
    text-indent: 12px;
  }

  &:focus::-webkit-input-placeholder {
    opacity: 1;
  }

  &:not(:focus) ~ ${Nav} {
    visibility: hidden;
    opacity: 0;
  }

  &:focus,
  &:not(:placeholder-shown) {
    & ~ ${Label} {
      transform: scale(0.9) translateY(-135%) translateX(-10px);
      opacity: 1;
      padding-bottom: 2px;
    }
  }
`;

const ContactInput = ({
  value,
  searchInput,
  handleBlur,
  handleFocus,
  displaySearchIcon,
  setValue,
  contactNames = [],
  nameToFilter,
  inputRef,
  navRef,
  divRef
}) => {
  return (
    <Wrapper displaySearchIcon={displaySearchIcon} ref={divRef}>
      <Input
        id="contact"
        type="text"
        placeholder="Type or Search.."
        autoComplete="off"
        value={value}
        onChange={searchInput}
        onBlur={handleBlur}
        onFocus={handleFocus}
        displaySearchIcon={displaySearchIcon}
        ref={inputRef}
      />
      <Label htmlFor="contact">Contact</Label>
      <Nav ref={navRef}>
        <List>
          {contactNames
            .filter(name => nameToFilter.test(name.name) && name !== null)
            .map((person, i) => (
              <ListItems key={i} setValue={() => setValue(person.name)}>
                {person.name}
              </ListItems>
            ))}
        </List>
      </Nav>
    </Wrapper>
  );
};

export default ContactInput;
