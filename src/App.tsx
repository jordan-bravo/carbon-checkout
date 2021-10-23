import { ReactElement, useState } from "react";
import "./app.scss";
import { Content, Grid } from "carbon-components-react";
import ShippingPage from "./pages/ShippingPage";
import HeaderComponent from "./components/HeaderComponent";

const App = (): ReactElement => {
  const [pageType, setPageType] = useState("shipping");
  return (
    <>
      <HeaderComponent />
      <Content>
        <Grid>
          {pageType === "shipping" && (
            <ShippingPage setPageType={setPageType} />
          )}
        </Grid>
      </Content>
    </>
  );
};

export default App;
