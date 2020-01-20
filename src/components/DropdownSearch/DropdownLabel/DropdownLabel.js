import styled from "styled-components";

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

export default Label;
