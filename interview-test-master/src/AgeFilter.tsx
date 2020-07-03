import React, { useState } from "react";
import styled from "styled-components";

type Ages = {
  minAge?: string;
  maxAge?: string;
};

export const AgeFilter: React.FC<Ages> = ({ minAge, maxAge }: Ages) => {
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
    <Wrapper>
      <h2>Users</h2>
      <MinAge type="number" placeholder="min" onChange={handleMinAge} />
      <MaxAge type="number" placeholder="max" onChange={handleMaxAge} />
      <button type="button">Filter by age</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const MinAge = styled.input``;

const MaxAge = styled.input``;
