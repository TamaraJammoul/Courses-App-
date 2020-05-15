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
            <ProductConsumer>
              {(value) => {
                return (
                  <div className="input-group md-form form-sm form-2 pl-0">
                    <input
                      className="form-control my-0 py-1 red-border"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                      value={value.search}
                      onChange={value.updateSearch}
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text red lighten-3"
                        id="basic-text1"
                      >
                        <i
                          className="fas fa-search text-grey"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                  </div>
                );
              }}
            </ProductConsumer>

            <div className="row ">
              <ProductConsumer>
                {(value) => {
                  return value.products
                    .filter((product) => {
                      return (
                        product.title.toLowerCase().indexOf(value.search) !== -1
                      );
                    })
                    .map((product) => {
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
