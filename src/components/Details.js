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

              <div className="row ">
                <div className="col-8 mx-auto  text-slanted text-blue my-5 ">
                  <div className="row">
                    <div className="col-md-12 ">
                      {" "}
                      <h1>{title}</h1>
                      <h3 className="text-dark">
                        Become a web developer and build nice web app
                      </h3>
                      <h5>
                        <span className="text-dark">
                          <div className="rate_container">
                            {[...Array(5)].map((e, i) => {
                              return (
                                <i
                                  key={i}
                                  className={
                                    this.state.highlighted > i - 1
                                      ? "star fa fa-star fa-sm"
                                      : "fa fa-star"
                                  }
                                  onMouseEnter={this.highLightRate(i)}
                                  onMouseLeave={this.highLightRate(-1)}
                                  // onClick={this.rateClicked(i)}
                                />
                              );
                            })}
                          </div>
                          {rating} (1000)
                        </span>
                      </h5>
                      <h5 className="text-dark">Created By {company}</h5>
                    </div>
                    <div className="col-md-12">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">What you'll learn</h5>
                          <p class="card-text text-dark">
                            <span>
                              <i class="fas fa-check text-black-50 fa-sm mr-2"></i>
                            </span>
                            Be able to build ANY website you want.
                          </p>
                          <p class="card-text text-dark">
                            <span>
                              <i class="fas fa-check text-black-50 fa-sm mr-2"></i>
                            </span>
                            Build fully-fledged websites and web apps for your
                            startup or business.{" "}
                          </p>{" "}
                          <p class="card-text text-dark">
                            <span>
                              <i class="fas fa-check text-black-50 fa-sm mr-2"></i>
                            </span>
                            Master backend development with Node
                          </p>{" "}
                          <p class="card-text text-dark">
                            <span>
                              <i class="fas fa-check text-black-50 fa-sm mr-2"></i>
                            </span>
                            Learn the latest frameworks and technologies,
                            including Javascript ES6, Bootstrap 4, MongoDB
                          </p>
                        </div>
                      </div>
                      <div class="container mt-5">
                        <div class="row ">
                          <div class="col-md-4">
                            <h4>Course Sections</h4>
                          </div>
                          <div class="col-md-4 ">112 lecturs</div>
                          <div class="col-md-4">23:11:15</div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 mt-5">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle "
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="ml-0 float-left">
                                section one
                              </span>
                              <span className="ml-5 mr-5">10 lectures</span>
                              <span className="ml-5">10:9:8</span>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 mt-5">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle "
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="ml-0 float-left">
                                section one
                              </span>
                              <span className="ml-5 mr-5">10 lectures</span>
                              <span className="ml-5">10:9:8</span>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 mt-5">
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle "
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="ml-0 float-left">
                                section one
                              </span>
                              <span className="ml-5 mr-5">10 lectures</span>
                              <span className="ml-5">10:9:8</span>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to="/courselist">
                    <ButtonContainer>back to Courses</ButtonContainer>
                  </Link>
                </div>
                <div className="col-md-4">
                  <div className="card mt-5">
                    <img
                      className="card-img-top"
                      src={img}
                      alt="Card image cap"
                    />
                    <div className="justify-content-center">
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

                    <div className="card-body text-black-50">
                      <p className="card-text">{title}</p>
                      <p className="card-text">
                        <span>
                          <i className="fas fa-user fa-sm mr-2"></i>
                        </span>
                        made by :{" "}
                        <span className="text-uppercase">{company}</span>
                      </p>
                      <p className="card-text">
                        <span>
                          <i className="fas fa-dollar-sign fa-sm mr-2"></i>
                        </span>
                        price : <span>$</span>
                        {price}{" "}
                      </p>
                      <p className="card-text">
                        <span>
                          <i className="fas fa-star fa-sm mr-2"></i>
                        </span>
                        rating :{rating}{" "}
                      </p>
                      <p className="card-text">
                        <span>
                          <i className="fas fa-mobile fa-sm mr-2"></i>
                        </span>
                        Access on mobile and TV
                      </p>
                      <p className="card-text">
                        <span>
                          <i className="fa fa-play fa-sm mr-2"></i>
                        </span>
                        53.5 hours on-demand video
                      </p>
                      <p className="card-text">
                        <span>
                          <i className="fas fa-clock fa-sm mr-2"></i>
                        </span>
                        Full lifetime access
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
{
  /*<ReactPlayer
                    controls
                    url="https://www.youtube.com/watch?v=7sDY4m8KNLc&t=300s"
                  />*/
}
