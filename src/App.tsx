import { ReactElement, useState } from "react";
import "./app.scss";
import { Content, Grid } from "carbon-components-react";
import ShippingPage from "./pages/ShippingPage";
import CartPage from "./pages/CartPage";
import HeaderComponent from "./components/HeaderComponent";

const App = (): ReactElement => {
  const [pageType, setPageType] = useState("shipping");
  return (
    <>
      <HeaderComponent />
      <Content>
        <Grid>
          {pageType === "cart" && <CartPage setPageType={setPageType} />}
          {pageType === "shipping" && (
            <ShippingPage setPageType={setPageType} />
          )}
          {pageType === "shipping" && (
            <ShippingPage setPageType={setPageType} />
          )}
          {/* TODO create PaymentPage and PaymentComponent */}
          {/* {pageType === "payment" && (
            <PaymentPage setPageType={setPageType} />
          )} */}
          {/* TODO create ReviewPage and ReviewComponent */}
          {/* {pageType === "review" && (
            <ReviewPage setPageType={setPageType} />
          )} */}
        </Grid>
      </Content>
    </>
  );
};

export default App;
