import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row wow fadeInDown">
          <div className="col-md-4 mx-auto col-lg-2">
            <p className="text-uppercase">Products</p>
          </div>
          <div className="col-md-4 mx-auto col-lg-2">
            <p className="text-uppercase">Title</p>
          </div>
          <div className="col-md-4 mx-auto col-lg-2">
            <p className="text-uppercase">Price</p>
          </div>

          <div className="col-md-4 mx-auto col-lg-2">
            <p className="text-uppercase">Remove</p>
          </div>
        </div>
      </div>
    );
  }
}
