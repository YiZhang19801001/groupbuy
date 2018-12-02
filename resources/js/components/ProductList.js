import React, { Component } from "react";
import axios from "axios";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        };
    }

    componentDidMount() {
        axios.get("/groupbuy/public/api/getproducts/2").then(res => {
            this.setState({ productList: res.data.products });
        });
    }

    render() {
        return (
            <div className="product-list">
                {this.state.productList.map(item => {
                    return (
                        <div
                            key={item.categorys.id}
                            className="product-group"
                            name={item.categorys.name}
                        >
                            <span className="category-title">
                                {item.categorys.name}
                            </span>
                            {item.products.map(product => {
                                return (
                                    <ProductCard
                                        shoppingCartList={
                                            this.props.shoppingCartList
                                        }
                                        updateShopCartList={
                                            this.props.updateShopCartList
                                        }
                                        key={product.product_id}
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
