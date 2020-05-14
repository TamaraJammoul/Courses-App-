import React, { Component } from "react";
import "./css/App.css";
import WOW from "wowjs";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Home from "./components/Home";
class App extends Component {
  componentDidMount() {
    const wow = new WOW.WOW({ resetAnimation: true });
    wow.init();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/courselist" component={CourseList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />

          <Route component={Default} />
        </Switch>
        <Modal />

        <ScrollUpButton />
      </React.Fragment>
    );
  }
}

export default App;
