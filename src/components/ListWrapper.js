import styled from "styled-components";

const ListWrapper = styled.div.attrs(props => ({
  displayBox: props.displayBox
}))`
  display: ${props => (props.displayBox ? "block" : "none")};
  border: 1px solid black;
`;

export default ListWrapper;
