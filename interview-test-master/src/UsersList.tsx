import React from "react";
import styled from "styled-components";
import image from "../public/sort-arrows.svg";

interface UsersPropsType {
  firstName?: string;
  lastName?: string;
  age?: number;
}

export const UsersList: React.FC<UsersPropsType> = (users) => {
  return (
    <Wrapper>
      <SearchBar placeholder="Search Users" />
      <Filters>
        <Name>
          NAME
          <img src="src/public/sort-arrows.svg"></img>
        </Name>
        <Age>
          AGE
          <img src="public/sort-arrows.svg"></img>
        </Age>
      </Filters>
      <UserDisplay>
        <input type="checkbox" />
      </UserDisplay>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border-style: solid;
  border-color: black;
`;

const SearchBar = styled.input``;

const UserDisplay = styled.div``;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.div``;

const Age = styled.div``;

const Svg = styled.svg`
  color: black;
`;
