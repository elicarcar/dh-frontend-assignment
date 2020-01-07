import styled from "styled-components";

const Input = styled.input.attrs(props => ({
  value: props.value,
  onChange: props.searchInput,
  onFocus: props.handleFocus,
  onBlur: props.handleBlur
}))`
  border: 1px solid #bfc5cd;
  border-radius: 7px;
  color: #798697;
  padding: 10px;
  outline: none;

  &:hover {
    border: 1px solid #4a4a4a;
  }
`;

export default Input;
