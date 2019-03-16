import React from "react";

import IndexPage from "../src/components/IndexPage/IndexPage";
import App from "../src/App";
import Home from "../src/components/Layout/Home/Home";

const index = () => {
  return (
    <IndexPage>
      <App>
        <Home />
      </App>
    </IndexPage>
  );
};

export default index;
