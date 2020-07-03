import React, { createContext, useState } from "react";

const API_URL = "http://localhost:8099";

interface Users {
  user?: Array<string>;
}

export const UsersContext = createContext<Users>({
  user: "Joshn",
});

const UserProvider = ({ children }) => {
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
    <UsersContext.Provider value={handleGetUsers}>
      {children}
    </UsersContext.Provider>
  );
};
