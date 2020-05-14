import React, { Component } from "react";
import Course from "./Course";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";
export default class CoursetList extends Component {
  state = {
    products: storeProducts,
  };
  render() {
    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <div className="container ">
            <Title name="our" title="Courses" />
            <div className="row ">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Course key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
