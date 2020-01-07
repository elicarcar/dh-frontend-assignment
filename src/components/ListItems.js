import styled from "styled-components";

const ListItems = styled.li.attrs(props => ({
  onClick: props.setValue,
  onMouseUp: props.handleMouseUp,
  displayItem: props.displayItem,
  id: props.id
}))`
  color: #798697;
  line-height: 30px;
  display: ${props => (props.displayItem ? "block" : "none")}
  font-size: 14px;
  padding: 5px;
  cursor:pointer;
  &:hover {
    color: #4a4a4a;
    background: #f7f7f7;
  }
`;

export default ListItems;
