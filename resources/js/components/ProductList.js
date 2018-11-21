import React, { Component } from "react";

import ProductCard from "./ProductCard";
export default class ProductList extends Component {
    render() {
        const fake_productList = [
            {
                category_id: 1,
                category_name: "家常菜",
                products: [
                    {
                        product_id: 1,
                        product_name: "招牌羊蝎子",
                        product_price: "$19.77",
                        img_url: "/groupbuy/public/images/product.png"
                    },
                    {
                        product_id: 2,
                        product_name: "上海红烧肉",
                        product_price: "$25.89",
                        img_url: "/groupbuy/public/images/product.png"
                    },
                    {
                        product_id: 3,
                        product_name: "四川回锅肉",
                        product_price: "$21.19",
                        img_url: "/groupbuy/public/images/product.png"
                    },
                    {
                        product_id: 4,
                        product_name: "宫保鸡丁",
                        product_price: "$18.83",
                        img_url: "/groupbuy/public/images/product.png"
                    },
                    {
                        product_id: 5,
                        product_name: "鱼香肉丝",
                        product_price: "$18.83",
                        img_url: "/groupbuy/public/images/product.png"
                    },
                    {
                        product_id: 6,
                        product_name: "辣子鸡丁",
                        product_price: "$19.77",
                        img_url: "/groupbuy/public/images/product.png"
                    }
                ]
            }
        ];

        return (
            <div>
                {fake_productList.map(item => {
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
