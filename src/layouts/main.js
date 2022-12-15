import React from "react";
import Navbar from "../components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import MarksPage from "../components/MarksPage";
import PurchasesPage from "../components/PurchasesPage";
function Main() {
  const [cards, setCards] = React.useState([
    {
      id: 1,
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      imgUrl: "/img/1.jpg",
      price: 12999,
    },
    {
      id: 2,
      title: "Мужские Кроссовки Nike Air Max 270",
      imgUrl: "/img/2.jpg",
      price: 12999,
    },
    {
      id: 3,
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      imgUrl: "/img/3.jpg",
      price: 16499,
    },
    {
      id: 4,
      title: "Кроссовки Puma X Aka Boku Future Rider",
      imgUrl: "/img/4.jpg",
      price: 11299,
    },
    {
      id: 5,
      title: "Мужские Кроссовки Under Armour Curry 8",
      imgUrl: "/img/5.jpg",
      price: 16499,
    },
    {
      id: 6,
      title: "Мужские Кроссовки Nike Kyrie 7",
      imgUrl: "/img/6.jpg",
      price: 10799,
    },
    {
      id: 7,
      title: "Мужские Кроссовки Jordan Air Jordan 11",
      imgUrl: "/img/7.jpg",
      price: 11299,
    },
    {
      id: 8,
      title: "Мужские Кроссовки Nike LeBron XVIII",
      imgUrl: "/img/8.jpg",
      price: 15199,
    },
    {
      id: 9,
      title: "Мужские Кроссовки Nike Lebron XVIII Low",
      imgUrl: "/img/1.jpg",
      price: 13999,
    },
    {
      id: 10,
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      imgUrl: "/img/4.jpg",
      price: 8499,
    },
    {
      id: 11,
      title: "Кроссовки Puma X Aka Boku Future Rider",
      imgUrl: "/img/9.jpg",
      price: 8999,
    },
    {
      id: 12,
      title: "Мужские Кроссовки Nike Air Max 270",
      imgUrl: "/img/10.jpg",
      price: 11299,
    },
  ]);
  ///////////////// алгоритм добавления закладок
  const [likedCards, setLikedCards] = React.useState([]);
  const onClickLike = (id) => {
    if (likedCards.some((card) => card.id === id)) {
      setLikedCards((prev) => prev.filter((card) => card.id !== id));
    } else {
      setLikedCards((prev) => [...prev, cards.find((x) => x.id === id)]);
    }
  };
  //////////////// увелтчение цены
  // const [fullPrice, setFullPrice] = React.useState(40);
  ///////////////// алгоритм добавления в корзину
  const [selectedCards, setSelectedCards] = React.useState([]);
  const onClickSelected = (id) => {
    if (selectedCards.some((card) => card.id === id)) {
      setSelectedCards((prev) => prev.filter((card) => card.id !== id));
    } else {
      setSelectedCards((prev) => [...prev, cards.find((x) => x.id === id)]);
      // здесяяя нужно добавление общей цены
    }
  };
  const fullPrice = React.useMemo(() => {
    return selectedCards.reduce((total, card) => total + card.price, 0);
  }, [selectedCards]);

  //////// алгоритм покупок сдеданных покупок
  const [purchases, setPurchases] = React.useState({});
  const onClickPurchases = () => {
    setPurchases([...selectedCards]);
    setSelectedCards([]);
    // console.log(purchases);
  };
  ///////////////// алгоритм открытия и закрытия карзины
  const [open, setOpen] = React.useState(false);
  const onClickOpen = () => {
    setOpen(true);
  };
  const onClickOut = () => {
    setOpen(false);
  };
  ///////////////// поиск карточек
  const [value, setValue] = React.useState("");
  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Navbar
        fullPrice={fullPrice}
        onClickOpen={onClickOpen}
        onClickOut={onClickOut}
        selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
        open={open}
        onClickPurchases={onClickPurchases}
        purchases={purchases}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onClickOut={onClickOut}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
              open={open}
              onClickOpen={onClickOpen}
              cards={cards}
              likedCards={likedCards}
              onClickLike={onClickLike}
              onClickSelected={onClickSelected}
              value={value}
              setValue={setValue}
              onChangeValue={onChangeValue}
            />
          }
        />
        <Route
          path="/markspage"
          element={
            <MarksPage
              cards={cards}
              onClickLike={onClickLike}
              likedCards={likedCards}
              onClickSelected={onClickSelected}
              selectedCards={selectedCards}
            />
          }
        />
        <Route
          path="/purchasespage"
          element={<PurchasesPage purchases={purchases} />}
        />
      </Routes>
    </div>
  );
}

export default Main;
