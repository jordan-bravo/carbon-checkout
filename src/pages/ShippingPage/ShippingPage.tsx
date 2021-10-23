import { ReactElement } from "react";
import ProgressComponent from "../../components/ProgressComponent";
import ShippingComponent from "../../components/ShippingComponent";

type ShippingPageProps = {
  setPageType: Function;
};

export const ShippingPage = ({
  setPageType,
}: ShippingPageProps): ReactElement => {
  return (
    <>
      <ProgressComponent progressType="shipping" />
      <ShippingComponent setPageType={setPageType} />
    </>
  );
};
