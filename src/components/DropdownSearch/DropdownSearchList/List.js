import styled from "styled-components";
import React from "react";

const Ul = styled.ul`
  list-style: none;
  margin: 2px;
  padding: 0;
  overflow: hidden;
  overflow-y: scroll;
  border-radius: 3px;
  border: 1px solid #bfc5cd;
  box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  min-width: 230px;
  max-width: 350px;
  height: 200px;
  min-height: 100px;
  max-height: 250px;
`;

const List = ({ children }) => {
  return (
    <Div>
      <Ul>{children}</Ul>
    </Div>
  );
};

export default List;
