import React, { useState } from "react";
import styled from "styled-components";

import { GetUsersComponent } from "./GetUsersComponent";
import { UsersList } from "./UsersList";

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
  const [, setMinAge] = useState<string>("");
  const [, setMaxAge] = useState<string>("");

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

  // const orderedUsers = users.map((usersAgecategories: NamePropsType) => {
  //   if (usersAgecategories.data) {
  //     usersAgecategories.data.name.sort(function (a: any, b: any) {
  //       if (a.firstName < b.firstName) {
  //         return -1;
  //       }

  //       if (a.firstName > b.firstName) {
  //         return 1;
  //       }
  //       return 0;
  //     });

  //     console.log(orderedUsers);
  //   }
  // });

  return (
    <>
      <div className="App" />
      <h1>Planned Test</h1>
      <MainCard>
        <RetrieveUsersCard>
          <h2>Users</h2>
          <MinAge type="number" placeholder="min" onChange={handleMinAge} />
          <MaxAge type="number" placeholder="max" onChange={handleMaxAge} />
          <Button onClick={(e) => handleGetUsers(e)}>Retrieve Users</Button>
        </RetrieveUsersCard>

        <UsersListCard>
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
          {users.map((usersAgeCategories: NamePropsType) => {
            if (usersAgeCategories.data)
              return usersAgeCategories.data.map((user: NamePropsType) => {
                const orderedUsers = Object.values(user.name).sort(function (
                  a: any,
                  b: any
                ) {
                  if (a.firstName < b.firstName) {
                    return -1;
                  }
                  if (a.firstName > b.firstName) {
                    return 1;
                  }
                  return 0;
                });

                console.log(orderedUsers);

                return (
                  <UserDisplay>
                    <input type="checkbox" />
                    <div>
                      {user.name.firstName} {user.name.lastName}
                    </div>
                    <div>{user.age}</div>
                  </UserDisplay>
                );
              });
          })}
        </UsersListCard>
      </MainCard>
    </>
  );
};

const MainCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const RetrieveUsersCard = styled.div`
  border-radius: 10px;
  border-style: solid;
  border-color: black;
`;

const MinAge = styled.input``;

const MaxAge = styled.input``;

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
  border-radius: 10px;
  border-style: solid;
  border-color: black;
`;

const SearchBar = styled.input``;

const UserDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.div``;

const Age = styled.div``;

const Svg = styled.svg`
  color: black;
`;

export default App;
