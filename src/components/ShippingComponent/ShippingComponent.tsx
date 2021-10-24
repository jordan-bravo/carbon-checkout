import { ReactElement } from "react";
import {
  Row,
  Column,
  TextInput,
  Dropdown,
  Button,
} from "carbon-components-react";
import { listOfUnitedStates } from "../../data/listOfUnitedStates";
import { ShippingInfo } from "../../models/shippingInfo";

type ShippingComponentProps = {
  setPageType: Function;
  shippingInfo: ShippingInfo;
  setShippingInfo: Function;
};

export const ShippingComponent = ({
  setPageType,
  shippingInfo,
  setShippingInfo,
}: ShippingComponentProps): ReactElement => {
  return (
    <>
      <Row>
        <Column>
          <TextInput
            id="address"
            invalidText="A valid value is required"
            labelText="Address"
            placeholder="Street address"
            onChange={(e) => setShippingInfo(e.target.value)}
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
          <Button kind="secondary" onClick={() => setPageType("cart")}>
            Back to cart
          </Button>
        </Column>
        <Column>
          <Button onClick={() => setPageType("payment")}>
            Proceed to payment
          </Button>
        </Column>
      </Row>
    </>
  );
};
