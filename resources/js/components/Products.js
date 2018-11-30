import React, { Component } from "react";

import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Header from "./Header";
import SlideShow from "./SlideShow";

export default class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="products">
                <Header
                    text="天府川菜馆"
                    textClass="bold"
                    backgroundClass="dark-lighter"
                />
                <div style={{ height: "40px" }} />
                <SlideShow />
                {/* <div className="banner">
                    <img
                        src="/groupbuy/public/images/banner.png"
                        alt="天府川菜馆"
                    />
                </div> */}
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
                    <ProductList
                        updateShopCartList={this.props.updateShopCartList}
                        shoppingCartList={this.props.shoppingCartList}
                    />
                </div>
            </div>
        );
    }
}
