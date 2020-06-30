import React, { useState } from "react";
import styled, { StyledFunction } from "styled-components";

const API_URL = "http://localhost:8099";

interface Users {
  firstName: string;
  lastName: string;
  age: number;
}

export const Button: React.FC<Users & HTMLButtonElement> = () => {
  const [users, setUsers] = useState<Users[]>([]);

  const endPoints = [
    `${API_URL}/users/kids`,
    `${API_URL}/users/adults`,
    `${API_URL}/users/seniors`,
  ];

  const requests = endPoints.map((endPoint) => fetch(endPoint));

  const handleGetUsers = () => {
    Promise.all(requests)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((responses) => {
        setUsers(responses);
        console.log("USERS", users);
      });
    console.log("USERS", users);
  };

  return (
    <>
      <GetUsers onClick={handleGetUsers} users={users}></GetUsers>
    </>
  );
};

// interface WithUsersProps {
//   children(props: join.(Users[]))
// }

// export const WithUsersProps: React.FC<WithUsersProps> = ({ children }) => {
//   return children(WithUsersProps);
// };

const GetUsers = styled.button``;
