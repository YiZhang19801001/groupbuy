import React, { Component } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";
export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { fake_productList: [] };
        axios.get("/groupbuy/public/api/getproducts").then(res => {
            this.setState({ fake_productList: res.data });
        });
    }
    render() {
        return (
            <div>
                {this.state.fake_productList.map(item => {
                    return (
                        <div key={item.category_name} className="product-list">
                            <span className="category-title">
                                {item.category_name}
                            </span>
                            {item.products.map(product => {
                                return (
                                    <ProductCard
                                        key={product.product_name}
                                        product={product}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}
