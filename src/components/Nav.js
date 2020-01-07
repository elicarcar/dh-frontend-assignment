import styled from "styled-components";

const Nav = styled.nav.attrs(props => ({
  displayList: props.displayList
}))`
  display: ${props => (props.displayList ? "block" : "none")};
`;

export default Nav;
