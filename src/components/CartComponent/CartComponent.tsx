import { ReactElement } from "react";
import { Row, Column, Button } from "carbon-components-react";

type CartComponentProps = {
  setPageType: Function;
};

export const CartComponent = ({
  setPageType,
}: CartComponentProps): ReactElement => {
  return (
    <>
      <Row className="flex">
        <Column>
          <Button onClick={() => setPageType("shipping")}>
            Proceed to shipping
          </Button>
        </Column>
      </Row>
    </>
  );
};
