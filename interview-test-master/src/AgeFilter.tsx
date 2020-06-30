import React, { useState } from "react";
import styled from "styled-components";

type Ages = {
  minAge: string;
  maxAge: string;
};

export const AgeFilter: React.FC = () => {
  const [, setMinAge] = useState<string>("");
  const [, setMaxAge] = useState<string>("");
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

  return (
    <div>
      <h2>Users</h2>
      min: <MinAge type="number" onChange={handleMinAge} />
      max: <MaxAge type="number" onChange={handleMaxAge} />
      <button type="button">Filter by age</button>
    </div>
  );
};

const MinAge = styled.input``;

const MaxAge = styled.input``;
