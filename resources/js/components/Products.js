import React, { Component } from "react";

import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import ShopCart from "./ShopCart";
import Header from "./Header";

export default class Products extends Component {
    render() {
        return (
            <div className="products">
                <Header
                    text="君隆超市"
                    textClass="bold"
                    backgroundClass="dark-lighter"
                />
                <div className="banner">
                    <img
                        src="/groupbuy/public/images/shop_2.png"
                        alt="shop 2"
                    />
                </div>
                <div className="menu">
                    <table>
                        <thead>
                            <tr>
                                <td className="menu-head">点餐</td>
                                <td className="menu-middle">门店信息</td>
                                <td className="menu-middle">点评</td>
                                <td className="menu-end">门店照片</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="main">
                    <CategoryList />
                    <ProductList />
                </div>
                <ShopCart />
            </div>
        );
    }
}
