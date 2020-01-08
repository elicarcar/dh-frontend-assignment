import React from "react";
import styled from "styled-components";

const Select = styled.select.attrs(props => ({
  displayList: props.displayList
}))`
  display: ${props => (props.displayList ? "block" : "none")};
  margin: 20px;
`;

export default Select;
