import React, { FunctionComponent, Fragment } from "react";

import Hello from "../Hello";
import "./App.scss";

const App: FunctionComponent = () => (
  <Fragment>
    <Hello compiler="TypeScript" framework="React" />
  </Fragment>
);

export default App;
