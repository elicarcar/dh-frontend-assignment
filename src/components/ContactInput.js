import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 20px;
  &:before {
    display: ${props => (props.displaySearchIcon ? "block" : "none")};
    position: absolute;
    content: " ⚲ ";
    top: 4px;
    left: 2px;
    height: 10px;
    width: 24px;
    margin-right: 5px;
    transform: rotate(-45deg);
  }

  &:after {
    display: block;
    position: absolute;
    top: 9px;
    right: 9px;
    content: " 8 ";
  }
`;

const Nav = styled.nav`
  display: block;
  background-color: blue;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  height: 180px;
  width: 180px;
  overflow: hidden;
  overflow-y: scroll;
  border-radius: 3px;
  border: 1px solid #bfc5cd;
  box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
`;

const Label = styled.label`
  position: absolute;
  padding-left: 12px;
  margin-bottom: 15px;
  top: 9px;
  left: 0px;
  transition: transform;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 0.5;
  user-select: none;
  transition: transform 0.3s;
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
    display: none;
  }

  &:focus,
  &:not(:placeholder-shown) {
    & + ${Label} {
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
  displaySearchIcon
}) => {
  return (
    <Wrapper displaySearchIcon={displaySearchIcon}>
      <Input
        id="contact"
        type="text"
        placeholder="Type or Search.."
        value={value}
        onChange={searchInput}
        onBlur={handleBlur}
        onFocus={handleFocus}
        displaySearchIcon={displaySearchIcon}
      />
      <Label htmlFor="contact">Contact</Label>
      <Nav>
        <List>{}</List>
      </Nav>
    </Wrapper>
  );
};

export default ContactInput;
