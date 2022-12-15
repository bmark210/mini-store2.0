import React from "react";
import Drawer from "./Drawer";
import "../index.scss";

import { NavLink } from "react-router-dom";
import Header from "./Header";
function Navbar({
  fullPrice,
  onClickOpen,
  onClickOut,
  selectedCards,
  setSelectedCards,
  open,
  onClickPurchases,
  purchases,
}) {
  return (
    <>
      <Header onClickOpen={onClickOpen} fullPrice={fullPrice} />
      <div style={{ display: open ? "block" : "none" }} className="overlay">
        <Drawer
          fullPrice={fullPrice}
          onClickOut={onClickOut}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          open={open}
          onClickPurchases={onClickPurchases}
          purchases={purchases}
        />
      </div>
      <NavLink to="/markspage"></NavLink>
    </>
  );
}

export default Navbar;
