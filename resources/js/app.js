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

import Products from "./components/Products";
import ShopCart from "./components/ShopCart";
import Confirm from "./components/Confirm";
import Section from "./components/demo/Section";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { shopping_cart_list: [], mode: 1 };

        this.updateShopCartList = this.updateShopCartList.bind(this);
        this.changeMode = this.changeMode.bind(this);
    }

    updateShopCartList(newList) {
        this.setState({ shopping_cart_list: newList });
    }

    changeMode(status) {
        this.setState({ mode: status });
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
                    />
                </div>
            </Router>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
