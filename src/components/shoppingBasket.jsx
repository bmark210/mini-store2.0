import React from "react";
import Cart from "./Cart";
import GreenButtom from "./UI/GreenButton";

const ShoppingBasket = ({
  selectedCards,
  setSelectedCards,
  onClickPurchases,
  onClickOut,
  purchases,
  fullPrice,
}) => {
  const onClickRemoveCart = (id) => {
    setSelectedCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <>
      {/* {selectedCards.length ? (
        <div>
          <div className="carts_inner">
            {selectedCards.map((item, index) => (
              <Cart
                id={item.id}
                item={item}
                key={index}
                onClickRemoveCart={onClickRemoveCart}
              />
            ))}
          </div>
          <div className="cartTotalBlock">
            <li>
              <span>Итого</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>2 498 руб.</b>
            </li>
            <GreenButtom onClick={() => onClickPurchases()}>
              Оформить заказ
            </GreenButtom>
          </div>
        </div>
      ) : (
        <div className="EmtyShoppingBasket">
          <div>
            <img
              width={120}
              height={120}
              src="./img/emptybox.png"
              alt="emptybox"
            />
            <b>Корзина пустая</b>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          </div>
          <GreenButtom onClick={onClickOut}>Вернуться назад</GreenButtom>
        </div>
      )}
      {console.log(purchases)} */}
      {selectedCards.length ? (
        <div>
          <div className="carts_inner">
            {selectedCards.map((item, index) => (
              <Cart
                id={item.id}
                item={item}
                key={index}
                onClickRemoveCart={onClickRemoveCart}
              />
            ))}
          </div>
          <div className="cartTotalBlock">
            <li>
              <span>Итого</span>
              <div></div>
              <b>{fullPrice} руб.</b>
            </li>
            {/* <li>
              <span>Налог 5%</span>
              <div></div>
              <b>2 498 руб.</b>
            </li> */}
            <GreenButtom onClick={() => onClickPurchases()}>
              Оформить заказ
            </GreenButtom>
          </div>
        </div>
      ) : purchases.length ? (
        <div className="purchasesDone">
          <div>
            <img width={120} height={120} src="./img/done.jpg" alt="done" />
            <b>Заказ оформлен!</b>
            <p>Ваш заказ скоро будет передан курьерской доставке.</p>
          </div>
          <GreenButtom onClick={onClickOut}>Вернуться назад</GreenButtom>
        </div>
      ) : (
        <div className="EmtyShoppingBasket">
          <div>
            <img
              width={120}
              height={120}
              src="./img/emptybox.png"
              alt="emptybox"
            />
            <b>Корзина пустая</b>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          </div>
          <GreenButtom onClick={onClickOut}>Вернуться назад</GreenButtom>
        </div>
      )}
    </>
  );
};
export default ShoppingBasket;
