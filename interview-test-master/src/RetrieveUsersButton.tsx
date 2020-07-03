import React, { useState } from "react";
import styled, { StyledFunction } from "styled-components";

const API_URL = "http://localhost:8099";

interface Users {
  firstName?: string;
  lastName?: string;
  age?: number;
}

export const Button: React.FC<Users> = ({
  firstName,
  lastName,
  age,
}: Users) => {
  const [users, setUsers] = useState<Users[]>([]);

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
        console.log(responses);
        setUsers(responses);
        console.log("USERS", users);
      });
    console.log("USERS", users);
  };

  return (
    <>
      <GetUsers onClick={(e) => handleGetUsers(e)}>Retrieve Users</GetUsers>
    </>
  );
};

const GetUsers = styled.button`
  border-radius: 30px;
  padding: 10px;
  width: 100px;
  background-color: green;
  color: white;
  font-size: 10px;
`;
