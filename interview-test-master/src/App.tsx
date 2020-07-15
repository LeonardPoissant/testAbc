import React, { useState } from "react";
import styled from "styled-components";

import { GetUsersComponent } from "./GetUsersComponent";
import { UsersList } from "./UsersList";

import image from "../public/sort-arrows.svg";

const API_URL = "http://localhost:8099";

interface UsersPropsType {
  age?: number;
  usersAgeCategories?: [];
  data?: [];
  user?: {};
  name?: {};
  orderedUsers?: [];
  [key: string]: any;
}

interface NamePropsType {
  firstName?: string;
  lastName?: string;
  [key: string]: any;
}

interface AgeFilterPropsType {
  minAge?: string;
  maxAge?: string;
}

const App: React.FC<
  UsersPropsType & AgeFilterPropsType & NamePropsType
> = () => {
  const [users, setUsers] = useState<UsersPropsType[]>([]);
  const [minAge, setMinAge] = useState<string>("");
  const [maxAge, setMaxAge] = useState<string>("");

  const endPoints = [
    `${API_URL}/users/kids`,
    `${API_URL}/users/adults`,
    `${API_URL}/users/seniors`,
  ];
  const requests = endPoints.map((endPoint) => fetch(endPoint));

  const handleGetUsers = (e: React.MouseEvent<HTMLButtonElement>) => {
    Promise.all(requests)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((responses) => {
        setUsers(responses);
      });
    console.log(users);
  };

  const handleMinAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setMinAge(value);
  };
  const handleMaxAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;

    setMaxAge(value);
  };

  const unStringedMinAge = parseInt(minAge);
  const unStringedMaxAge = parseInt(maxAge);

  console.log("MinAge", minAge);
  console.log("MaxAge", typeof maxAge);

  const flattedenedUsers: any = [];

  users.forEach((user) => {
    if (user.data)
      user.data.forEach((indivualUser: any) => {
        flattedenedUsers.push(indivualUser);
      });
  });

  const AlphabeticalUsers = flattedenedUsers.sort(function (a: any, b: any) {
    if (a.name.firstName === b.name.firstName) {
      return b.age - a.age;
    }

    return a.name.firstName > b.name.firstName ? 1 : -1;
  });

  const fullName = AlphabeticalUsers.map((user: any) => {
    return user.name.firstName + " " + user.name.lastName;
  });

  return (
    <>
      <div className="App" />
      <h1>Planned Test</h1>
      <Wrapper>
        <h2>Users</h2>
        <div>
          <CardsWrapper>
            <RetrieveUsersCard>
              <MinAgeWrapper>
                <MinAge
                  type="number"
                  placeholder="Min"
                  onChange={handleMinAge}
                />
              </MinAgeWrapper>
              <MaxAgeWrapper>
                <MaxAge
                  type="number"
                  placeholder="Max"
                  onChange={handleMaxAge}
                />
              </MaxAgeWrapper>
              <Button onClick={(e) => handleGetUsers(e)}>Retrieve Users</Button>
            </RetrieveUsersCard>

            <UsersListCard>
              <UpperCard>
                <SearchBar placeholder="Search Users" />
              </UpperCard>
              <Filters>
                <Name>
                  NAME
                  <img src="src/Screen Shot 2020-07-13 at 5.39.20 PM.png"></img>
                </Name>
                <Age>
                  AGE
                  <img src="public/sort-arrows.svg"></img>
                </Age>
              </Filters>

              {AlphabeticalUsers.map((user: NamePropsType) => {
                if (
                  user.age >= unStringedMinAge &&
                  user.age <= unStringedMaxAge
                )
                  return (
                    <UserDisplay>
                      <Input type="checkbox" />
                      <UserFullName>
                        {user.name.firstName} {user.name.lastName}
                      </UserFullName>
                      <UserAge>{user.age}</UserAge>
                    </UserDisplay>
                  );
              })}
            </UsersListCard>
          </CardsWrapper>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const RetrieveUsersCard = styled.div`
  border-radius: 5px;
  border-style: solid;
  border-color: #888888;
  border-width: 1px;
  box-shadow: 5px 10px 10px #888888;
  max-height: 150px;
  min-height: 150px;
  width: 150px;
`;

const MinAgeWrapper = styled.div``;

const MaxAgeWrapper = styled.div``;

const MinAge = styled.input`
  width: 75%;
  margin: 5%;
`;

const MaxAge = styled.input`
  width: 75%;
  margin: 5%;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 10px;
  width: 100px;
  background-color: green;
  color: white;
  font-size: 10px;
`;

const UsersListCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 400px;
  max-width: 400px;
  margin-right: 200px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 5px 10px 10px #888888;
  border-color: #888888;
`;

const UpperCard = styled.div`
  padding: 20px;
  border-bottom-style: solid;
  border-color: #888888;
  border-bottom-width: 1px;
`;

const SearchBar = styled.input`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  border-width: 1px;
  border-color: #888888;
  width: 100%;
`;

const UserDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 10%;
`;

const UserFullName = styled.div`
  flex-direction: column;
  width: 45%;
`;

const UserAge = styled.div`
  flex-direction: column;
  width: 33%;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Name = styled.div`
  width: 20%;
`;

const Age = styled.div`
  width: 20%;
`;

const Svg = styled.svg`
  color: black;
`;

export default App;
