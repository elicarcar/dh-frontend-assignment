import styled from "styled-components";
const Wrapper = styled.div.attrs(props => ({
  id: "wrapper-div",
  ref: props.divRef,
  displaySearchIcon: props.displaySearchIcon
}))`
  position: relative;
  display: inline-block;
  margin: 20px;
  &:before {
    display: ${props => (props.displaySearchIcon ? "block" : "none")};
    position: absolute;
    content: " ⚲ ";
    transform: scale(0.5);
    top: 4px;
    left: 2px;
    height: 10px;
    width: 24px;
    margin-right: 5px;
    transform: rotate(-45deg);
  }

  &:after {
    content: "▼";
    display: block;
    position: absolute;
    top: 11px;
    right: 45px;
  }
`;

export default Wrapper;
