import React, { useState } from "react";
import styled from "styled-components";

export const GetUsersComponent: React.FC = () => {
  return (
    <div></div>
    // <RetrieveUsersCard>
    //   <MinAgeWrapper>
    //     <MinAge type="number" placeholder="Min" onChange={handleMinAge} />
    //   </MinAgeWrapper>
    //   <MaxAgeWrapper>
    //     <MaxAge type="number" placeholder="Max" onChange={handleMaxAge} />
    //   </MaxAgeWrapper>
    //   <Button onClick={(e) => handleGetUsers(e)}>Retrieve Users</Button>
    // </RetrieveUsersCard>
  );
};

const Wrapper = styled.div`
  border-radius: 10px;
  border-style: solid;
  border-color: black;
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
