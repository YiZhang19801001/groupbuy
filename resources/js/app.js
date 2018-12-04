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
import { Route, BrowserRouter as Router } from "react-router-dom";

import Section from "./components/demo/Section";
import Confirm from "./components/Confirm";
import Login from "./components/Login";
import Complete from "./components/Complete";
import Products from "./components/Products";
import ShopCart from "./components/ShopCart";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shopping_cart_list: [],
            mode: 1,
            paymentMethod: "Cash",
            date: {},
            showChoicePannel: false
        };

        this.updateShopCartList = this.updateShopCartList.bind(this);
        this.changeMode = this.changeMode.bind(this);
        this.setMethod = this.setMethod.bind(this);
        this.pickupDate = this.pickupDate.bind(this);
    }

    updateShopCartList(newList) {
        this.setState({ shopping_cart_list: newList });
    }

    changeMode(status) {
        this.setState({ mode: status });
    }

    setMethod(method) {
        this.setState({ paymentMethod: method });
    }

    pickupDate(date) {
        this.setState({ date: date });
    }

    render() {
        return (
            <Router>
                <div>
                    <Route
                        exact
                        path="/groupbuy/public/products"
                        render={props => (
                            <Products
                                updateShopCartList={this.updateShopCartList}
                                shoppingCartList={this.state.shopping_cart_list}
                                changeMode={this.changeMode}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/groupbuy/public/"
                        render={props => (
                            <Products
                                updateShopCartList={this.updateShopCartList}
                                shoppingCartList={this.state.shopping_cart_list}
                                changeMode={this.changeMode}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/groupbuy/public/confirm"
                        render={props => (
                            <Confirm
                                updateShopCartList={this.updateShopCartList}
                                shoppingCartList={this.state.shopping_cart_list}
                                changeMode={this.changeMode}
                                setMethod={this.setMethod}
                                pickupDate={this.pickupDate}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/groupbuy/public/login"
                        render={props => (
                            <Login
                                shoppingCartList={this.state.shopping_cart_list}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/groupbuy/public/complete"
                        render={props => (
                            <Complete
                                shoppingCartList={this.state.shopping_cart_list}
                                paymentMethod={this.state.paymentMethod}
                                {...props}
                            />
                        )}
                    />

                    <Route
                        exact
                        path="/groupbuy/public/demo"
                        render={props => (
                            <Section
                                updateShopCartList={this.updateShopCartList}
                                shoppingCartList={this.state.shopping_cart_list}
                                {...props}
                            />
                        )}
                    />

                    <ShopCart
                        updateShopCartList={this.updateShopCartList}
                        shoppingCartList={this.state.shopping_cart_list}
                        mode={this.state.mode}
                        paymentMethod={this.state.paymentMethod}
                    />
                </div>
            </Router>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
