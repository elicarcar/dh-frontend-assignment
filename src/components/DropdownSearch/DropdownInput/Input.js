import styled from "styled-components";
import Nav from "../DropdownSearchNav/Nav.js";
import Label from "../DropdownLabel/DropdownLabel";

const Input = styled.input.attrs(props => ({
  id: "contact-input",
  name: "contact",
  type: "text",
  placeholder: "Type or Search..",
  autoComplete: "off",
  value: props.value,
  onChange: props.handleInputChange,
  onBlur: props.handleBlur,
  onFocus: props.handleFocus,
  ref: props.inputRef
}))`
  border: 1px solid #bfc5cd;
  border-radius: 7px;
  color: #4a4a4a;
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

export default Input;
