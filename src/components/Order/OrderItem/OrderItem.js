import React from "react";
import SvgButton from "../SvgButton/SvgButton";
import "./OrderItem.css";
import minusButton from "../../../images/circle_minus.svg";
import plusButton from "../../../images/circle_plus.svg";
import removeButton from "../../../images/circle_remove.svg";

function OrderItem() {
  return (
    <>
      <div className="order-item__image"></div>
      <div className="order-item__wrp">
        <p className="order-item__title">
          Nestle Nesquik Chocolate Lowfat Milk, 16 pk
        </p>
        <div className="order-item__control-wrp">
          <div className="order-item__amount-wrp">
            <SvgButton width={20} height={20} img={plusButton} />
            <span className="order-item__amount">4</span>
            <SvgButton width={20} height={20} img={minusButton} />
          </div>
          <span className="order-item__sum">$11.54</span>
        </div>
      </div>
      <div className="order-item__remove">
        <SvgButton width={20} height={20} img={removeButton} />
      </div>
    </>
  );
}

export default OrderItem;
