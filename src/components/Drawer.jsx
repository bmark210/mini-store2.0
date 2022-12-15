import React from "react";
import ShoppingBasket from "./shoppingBasket";
const Drawer = ({
  onClickOut,
  selectedCards,
  setSelectedCards,
  onClickPurchases,
  purchases,
  fullPrice,
}) => {
  return (
    <>
      <div className="drawer">
        <h2>
          Корзина
          <img
            style={{ cursor: "pointer" }}
            onClick={onClickOut}
            className="cross"
            width={32}
            height={32}
            src="/img/cross.svg"
          />
        </h2>
        <ShoppingBasket
          purchases={purchases}
          onClickPurchases={onClickPurchases}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          onClickOut={onClickOut}
          fullPrice={fullPrice}
        />
      </div>
    </>
  );
};
export default Drawer;
