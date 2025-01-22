import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import styles from "./BasketSidebar.module.css";
function BasketSideBar({ state, clickHandler }) {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{state.total}</span>
      </div>

      <div>
        <FaHashtag />
        <p>Total:</p>
        <span>{state.quantity}</span>
      </div>

      <div>
        <BsPatchCheck />
        <p>Total:</p>
        <span>{!state.checkOut && "pending..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  );
}

export default BasketSideBar;
