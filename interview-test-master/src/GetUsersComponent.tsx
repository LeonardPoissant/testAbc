import React from "react";

import styled from "styled-components";
import { Button } from "./RetrieveUsersButton";
import { AgeFilter } from "./AgeFilter";

export const GetUsersComponent: React.FC = () => {
  return (
    <Wrapper className="COMPONENT">
      <AgeFilter />
      <Button />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 10px;
  border-style: solid;
  border-color: black;
`;
