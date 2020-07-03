import React from "react";
import styled from "styled-components";

import { GetUsersComponent } from "./GetUsersComponent";
import { Results } from "./Results";
import { MainCard } from "./MainCard";

function App() {
  return (
    <>
      <div className="App" />
      <h1>Planned Test</h1>
      <MainCard>
        <GetUsersComponent />
        <Results />
      </MainCard>
    </>
  );
}

export default App;
