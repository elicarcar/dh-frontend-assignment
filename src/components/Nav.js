import styled from "styled-components";

const Nav = styled.nav.attrs(props => ({
  displayList: props.displayList
}))`
  display: ${props => (props.displayList ? "block" : "none")};
  margin: 20px;
`;

export default Nav;
