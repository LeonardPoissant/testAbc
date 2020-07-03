import React from "react";
import styled from "styled-components";
import { GetUsersComponent } from "./GetUsersComponent";
import { Results } from "./Results";

export const MainCard: React.FC = () => {
  return (
    <Wrapper>
      <GetUsersComponent />
      <Results />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
