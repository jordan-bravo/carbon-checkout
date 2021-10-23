import { ReactElement } from "react";
import ProgressComponent from "../../components/ProgressComponent";
import CartComponent from "../../components/CartComponent";

type CartPageProps = {
  setPageType: Function;
};

export const CartPage = ({ setPageType }: CartPageProps): ReactElement => {
  return (
    <>
      <ProgressComponent progressType="cart" />
      <CartComponent setPageType={setPageType} />
    </>
  );
};
