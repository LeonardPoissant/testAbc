import React, { useState } from "react";
import styled from "styled-components";

// const API_URL = "http://localhost:8099";

interface UsersPropsType {
  firstName?: string;
  lastName?: string;
  age?: number;
}
// interface AgeFilterPropsType {
//   minAge?: string;
//   maxAge?: string;
// }

export const GetUsersComponent: React.FC<UsersPropsType> = () => {
  // const [users, setUsers] = useState<UsersPropsType[]>([]);
  // const [, setMinAge] = useState<string>("");
  // const [, setMaxAge] = useState<string>("");

  // const endPoints = [
  //   `${API_URL}/users/kids`,
  //   `${API_URL}/users/adults`,
  //   `${API_URL}/users/seniors`,
  // ];
  // const requests = endPoints.map((endPoint) => fetch(endPoint));

  // const handleGetUsers = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   Promise.all(requests)
  //     .then((responses) => Promise.all(responses.map((r) => r.json())))
  //     .then((responses) => {
  //       console.log(responses);
  //       setUsers(responses);
  //       console.log("USERS", users);
  //     });
  //   console.log("USERS", users);
  // };

  // const handleMinAge = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const { value } = e.target;
  //   setMinAge(value);
  // };
  // const handleMaxAge = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const { value } = e.target;

  //   setMaxAge(value);
  // };

  return (
    <Wrapper className="COMPONENT">
      <h2>Users</h2>
      {/* <MinAge type="number" placeholder="min" onChange={handleMinAge} />
      <MaxAge type="number" placeholder="max" onChange={handleMaxAge} />
      <Button onClick={(e) => handleGetUsers(e)}>Retrieve Users</Button> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
