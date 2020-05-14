import React, { Component } from "react";
import { Link } from "react-router-dom";
import sec4 from "./../img/pexels-photo-1181298.png";
import fimg from "./../img/wood-coffee-iphone-notebook.png";
import simg from "./../img/people-woman-coffee-meeting.png";
import timg from "./../img/pexels-photo-2115217.png";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid p-0 ">
          <div className="site-content">
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column">
                <h1 className="site-title wow pulse">Courses Web App</h1>
                <p className="site-desc wow pulse">
                  Lorem ipsum dolor sit amet
                </p>
                <div className="d-flex flex-row ">
                  <input
                    type="button"
                    value="Buy Course"
                    className="btn site-btn1 px-4 py-3 mr-4 btn-dark wow fadeInLeft"
                  />
                  <input
                    type="button"
                    value="Know Features"
                    className="btn site-btn2 px-4 py-3 mr-4 btn-light wow fadeInRight"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-1">
          <div className="container text-center">
            <h1 className="heading-1 wow fadeInDown">Fantastic Feature</h1>
            <h2 className="heading-2 wow fadeInDown">
              & Different Type Of Courses
            </h2>
            <p className="p1 ">
              new courses here wellcome sweetie r u ready mn,dkjv kljvklj erw
              reww
            </p>

            <div className="row justify-content-center text-center">
              <div className="col-md-4">
                <div className="card wow zoomIn data-wow-duration='1s' data-wow-delay='1s'">
                  <img
                    className="card-img-top "
                    src={fimg}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card wow zoomIn data-wow-duration='1s' data-wow-delay='1s'">
                  <img
                    className="card-img-top "
                    src={simg}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card wow zoomIn data-wow-duration='1s' data-wow-delay='1s'">
                  <img
                    className="card-img-top "
                    src={timg}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-2">
          <div className="container-fluid">
            <div className="d-flex justify-content-end">
              <div className="d-flex flex-column m-4">
                <h1 className="heading-1 wow slideInDown data-wow-duration='2s' data-wow-delay='1s'">
                  Like & Share your Favourite Courses
                </h1>
                <p className="pare wow slideInDown data-wow-duration='2s' data-wow-delay='1s'">
                  hi iam tamara software enginer love you all
                </p>
                <input
                  type="button"
                  value="show"
                  className="btn btn-danger wow pulse"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4 wow fadeInLeft">
                <div className="d-flex flex-row">
                  <i className="fa fa-question m-2 fa-3x"></i>
                  <div className="d-flex flex-column">
                    <h3 className="m-2">24/7 Support</h3>
                    <p className="m-2">
                      Our CDN powered kits make using our icons faster and more
                      powerful than ever. Make changes without ever pushing code
                      or managing files.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 wow fadeInDown">
                <div className="d-flex flex-row">
                  <i className="fa fa-home m-2 fa-3x"></i>
                  <div className="d-flex flex-column">
                    <h3 className="m-2">24/7 Support</h3>
                    <p className="m-2">
                      Our CDN powered kits make using our icons faster and more
                      powerful than ever. Make changes without ever pushing code
                      or managing files.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 wow fadeInRight">
                <div className="d-flex flex-row">
                  <i class="fa fa-rocket m-2 fa-3x"></i>
                  <div class="d-flex flex-column">
                    <h3 class="m-2">24/7 Support</h3>
                    <p class="m-2">
                      Easily automate your icons' accessibility, control load
                      timing, get Font Awesome Version 4 compatibility, and
                      more.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-4 wow fadeInLeft">
                <div class="d-flex flex-row">
                  <i class="fa fa-user-shield m-2 fa-3x"></i>
                  <div class="d-flex flex-column">
                    <h3 class="m-2">Authorized</h3>
                    <p class="m-2">
                      Our CDN powered kits make using our icons faster and more
                      powerful than ever. Make changes without ever pushing code
                      or managing files.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 wow fadeInUp">
                <div class="d-flex flex-row">
                  <i class="fa fa-search m-2 fa-3x"></i>
                  <div class="d-flex flex-column">
                    <h3 class="m-2">SEO</h3>
                    <p class="m-2">
                      Our CDN powered kits make using our icons faster and more
                      powerful than ever. Make changes without ever pushing code
                      or managing files.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 wow fadeInRight">
                <div class="d-flex flex-row">
                  <i class="fa fa-sliders-h m-2 fa-3x"></i>
                  <div class="d-flex flex-column">
                    <h3 class="m-2">Customize</h3>
                    <p class="m-2">
                      Our CDN powered kits make using our icons faster and more
                      powerful than ever. Make changes without ever pushing code
                      or managing files.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-4 bg-dark">
          <div class="container">
            <div class="row">
              <div class="col-md-7 wow heartBeat">
                <img src={sec4} alt="#" width="590" />
              </div>

              <div class="col-md-5">
                <h1 class="text-white wow fadeInDown">
                  {" "}
                  Didn't Know Where To Start From
                </h1>
                <Link to="#">Join US </Link>
                <p className="para-1">
                  Our CDN powered kits make using our icons faster and more
                  powerful than ever. Make changes without ever pushing code or
                  managing files.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="section-5 text-center">
            <h4 className="mt-5">Get Course from MyCourses</h4>
            <h4 className="my-4">If You Need Any Help?</h4>
            <div className="form-inline justify-content-center wow shakeY data-wow-duration='2s' data-wow-delay='5s'">
              <input
                type="text"
                name="Email"
                id="email"
                placeholder="Enter your email"
                size="40"
                className="form-control px-4 py-2"
              />
              <input
                type="button"
                value="Contact US"
                className="btn btn-danger px-4 py-2"
              />
            </div>
            <div className="social m-5 WOW fadeInUpBig">
              <div className="d-flex flex-row justify-content-center">
                <i className="fab fa-facebook-f m-2"></i>
                <i className="fab fa-twitter m-2"></i>
                <i className="fab fa-instagram m-2"></i>
                <i className="fab fa-youtube m-2"></i>
              </div>
              <hr />
              <h5 className="primary">My Course &copy;</h5>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
