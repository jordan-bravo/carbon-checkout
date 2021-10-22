import React, { ReactElement } from "react";
import "./app.scss";
import {
  Button,
  Content,
  Dropdown,
  Grid,
  ProgressIndicator,
  ProgressStep,
  Row,
  TextInput,
  Column,
} from "carbon-components-react";
import ShoppingHeader from "./components/ShoppingHeader/ShoppingHeader";
import { listOfUnitedStates } from "./data/listOfUnitedStates";

const App = (): ReactElement => {
  return (
    <>
      <ShoppingHeader />
      <Content>
        <Grid>
          <Row>
            <Column>
              <ProgressIndicator currentIndex={1}>
                <ProgressStep label="Cart" />
                <ProgressStep label="Shipping" />
                <ProgressStep label="Payment" />
                <ProgressStep label="Review" />
              </ProgressIndicator>
            </Column>
          </Row>
          <Row>
            <Column>
              <TextInput
                id="address"
                invalidText="A valid value is required"
                labelText="Address"
                placeholder="Street address"
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <TextInput
                id="address2"
                labelText="Address 2 (optional)"
                placeholder="Apartment, unit, suite"
                invalidText="A valid value is required"
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <TextInput
                id="city"
                labelText="City"
                placeholder=""
                invalidText="A valid value is required"
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Dropdown
                id="state"
                titleText="State"
                label="Select"
                items={listOfUnitedStates}
                itemToString={(item) => (item ? item.label : "")}
                // onChange={action("onChange")}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <TextInput
                id="zip"
                labelText="Zip code"
                placeholder=""
                invalidText="A valid value is required"
              />
            </Column>
          </Row>
          <Row className="flex">
            <Column>
              <Button kind="secondary">Back to cart</Button>
            </Column>
            <Column>
              <Button>Proceed to payment</Button>
            </Column>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default App;
