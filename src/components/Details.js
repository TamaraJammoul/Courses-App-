import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
export default class Details extends Component {
  state = {
    highlighted: -1,
  };
  highLightRate = (high) => (evt) => {
    this.ListeningStateChangedEvent({
      highlighted: high,
    });
  };
  /* rateClicked = (star) => (evt) => {
    fetch(
      `${process.env.REACT_APP_API_URL}/api/movies/${this.props.movie.id}/rate_movie/`,
      {
        method: "POST",
        headers: {
          content_type: "application/json",
          Authorization: `Token ${this.props.token}`,
        },
        body: JSON.stringify({ stars: star + 1 }),
      }
    )
      .then((resp) => resp.json())
      .then((resp) => this.getDetail())
      .catch((error) => console.log(error));
  };*/
  /* getDetail = () => {
    fetch(
      `${process.env.REACT_APP_API_URL}/api/movies/${this.props.movie.id}/`,
      {
        method: "GET",
        headers: {
          content_type: "application/json",
          Authorization: `Token ${this.props.token}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => this.props.updateMovie(resp))
      .catch((error) => console.log(error));
  };*/
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
            rating,
          } = value.detailProduct;

          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className="row mb-5">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                {/* prdoduct info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model : {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div className="rate_container">
                    <h2>Rate it!</h2>
                    {[...Array(5)].map((e, i) => {
                      return (
                        <i
                          key={i}
                          className={
                            this.state.highlighted > i - 1
                              ? "star fa fa-star"
                              : "fa fa-star"
                          }
                          onMouseEnter={this.highLightRate(i)}
                          onMouseLeave={this.highLightRate(-1)}
                          // onClick={this.rateClicked(i)}
                        />
                      );
                    })}
                  </div>
                  <div>
                    <Link to="/courselist">
                      <ButtonContainer>back to Courses</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-6">
                  <h2>Course Sections</h2>
                  <div className="row">
                    <div className="col-md-12 mt-5">
                      <div class="btn-group ">
                        <button type="button" class="btn btn-danger">
                          Section one
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">
                            skjhajkh
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-5">
                      <div class="btn-group ">
                        <button type="button" class="btn btn-danger">
                          Section two
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-5">
                      {" "}
                      <div class="btn-group ">
                        <button type="button" class="btn btn-danger">
                          Section three
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <ReactPlayer
                    controls
                    url="https://www.youtube.com/watch?v=7sDY4m8KNLc&t=300s"
                  />
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
