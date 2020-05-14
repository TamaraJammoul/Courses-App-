import React, { Component } from "react";
export default class CartItem extends Component {
  render() {
    const { id, title, img, price, total, count } = this.props.item;
    const { removeItem } = this.props.value;

    return (
      <div className="row my-1 text-capitalize text-center wow pulse">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", heigth: "5rem" }}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <span className="d-lg-none">product :</span> {title}
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <strong>
            <span className="d-lg-none">price :</span> ${price}
          </strong>
        </div>

        <div className="col-10 mx-auto col-lg-2 wow fadeInRight">
          <div className=" cart-icon" onClick={() => removeItem(id)}>
            <i className="fas fa-trash" />
          </div>
        </div>
      </div>
    );
  }
}
