import styled from "styled-components";

const Wrapper = styled.div.attrs(props => ({
  beforeContent: props.beforeContent,
  afterContent: props.afterContent
}))`
  position: relative;
  display: inline-block;
//   &:before {
//     position: absolute;
//     content: ${beforeContent};
//     top: 8px;
//     right: -9px;
//     height: 10px;
//     width: 24px;
//   }

  &:after {
    // position: absolute;
    // content: ${afterContent};
    // top: 8px;
    // right: -9px;
    // height: 10px;
    // width: 24px;
  }
`;

export default Wrapper;
