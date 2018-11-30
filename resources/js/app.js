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

export default class App extends Component {
    constructor(props) {
        super(props);

        // if (localStorage.getItem("aupos_shoppingCart")) {
        //     this.state = {
        //         shopping_cart: localStorage.getItem("aupos_shoppingCart")
        //     };
        // } else {
        //     this.state = { shopping_cart: [] };
        // }
        this.state = { shopping_cart_list: [] };

        this.updateShopCartList = this.updateShopCartList.bind(this);
    }

    updateShopCartList(newList) {
        this.setState({ shopping_cart_list: newList });
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
                                {...props}
                            />
                        )}
                    />

                    <ShopCart
                        updateShopCartList={this.updateShopCartList}
                        shoppingCartList={this.state.shopping_cart_list}
                    />
                </div>
            </Router>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
