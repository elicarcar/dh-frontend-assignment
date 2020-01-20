import styled from "styled-components";

const ListItems = styled.li.attrs(props => ({
  onClick: props.handleClick,
  displayItem: props.displayItem,
  id: props.id
}))`
  font-family: "Helvetica";
  color: #798697;
  line-height: 30px;
  padding: 1px;
  padding-left: 11px;
  font-size: 14px;
  cursor: ${props => (props.noMatch ? "not-allowed" : "pointer")};
  &:hover {
    color: #4a4a4a;
    background: #f7f7f7;
  }
`;

export default ListItems;
