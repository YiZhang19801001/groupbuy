/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

import Shops from "./components/Shops";
import Products from "./components/Products";

export default class App extends Component {
    render() {
        return <div />;
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(
        <Router>
            <div>
                <Route
                    exact
                    path="/groupbuy/public/shops/:product_id"
                    component={Shops}
                />
                <Route
                    exact
                    path="/groupbuy/public/products"
                    component={Products}
                />
                <Route exact path="/groupbuy/public/" component={Products} />
            </div>
        </Router>,
        document.getElementById("root")
    );
}
