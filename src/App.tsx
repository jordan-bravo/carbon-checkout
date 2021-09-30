import React from "react";
import "./app.scss";
import { Button, Content } from "carbon-components-react";
import ShoppingHeader from "./components/ShoppingHeader/ShoppingHeader";

const App = () => {
  return (
    <>
      <ShoppingHeader />
      <Content>
        <Button>Button</Button>
      </Content>
    </>
  );
};

export default App;
