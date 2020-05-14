import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand wow bounce" to="#">
          MY <span className="danger">Course</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenue"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle Navication"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-3"></div>
        <div className="collapse navbar-collapse" id="#navbarMenue">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                {" "}
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/favourite" className="nav-link">
                {" "}
                Favourite
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/courselist" className="nav-link">
                Courses
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/contactus" className="nav-link">
                Contact US
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>

          <Link to="/cart" className="ml-auto wow backInUp">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus " />
              </span>
            </ButtonContainer>
          </Link>
        </div>
      </nav>
    );
  }
}
