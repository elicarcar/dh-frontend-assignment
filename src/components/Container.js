import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 250px;
`;

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Container;
