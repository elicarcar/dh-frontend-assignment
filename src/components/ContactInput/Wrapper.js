import styled from "styled-components";
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
    content: " v ";
  }
`;

export default Wrapper;
