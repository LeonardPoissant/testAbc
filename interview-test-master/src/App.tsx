import React from "react";
import styled from "styled-components";

import { Button } from "./RetrieveUsersButton";
import { AgeFilter } from "./AgeFilter";

function App() {
  return (
    <div className="App">
      <h1>Planned Test</h1>
      <AgeFilter />
      <div>
        <Button>Retrieve Users</Button>
      </div>
    </div>
  );
}

export default App;
