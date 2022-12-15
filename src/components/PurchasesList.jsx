import Card from "./Card";
const PurchasesList = ({ purchases }) => {
  return (
    <>
      <div className="content">
        <h1
          style={{
            paddingTop: "25px",
            marginBottom: "40px",
            width: "800px",
          }}>
          Мои покупки
        </h1>
        <div className="cards__inner">
          {purchases.map((item, index) => (
            <Card key={index} {...item} id={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default PurchasesList;
