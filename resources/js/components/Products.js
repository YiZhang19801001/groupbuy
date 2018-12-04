import React, { Component } from "react";
import { Link, Element, Events, animateScroll as scroll } from "react-scroll";

import ProductCard from "./ProductCard";
import Header from "./Header";
import ProcessBar from "./ProcessBar";
import DemoCarousel from "./DemoCarousel";

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.state = { productList: [], categoryList: [], navBarItems: [] };
    }

    componentDidMount() {
        this.props.changeMode(1);

        axios.get("/groupbuy/public/api/getcategories/2").then(res => {
            this.setState({
                categoryList: res.data.categories
            });
        });
        axios.get("/groupbuy/public/api/getproducts/2").then(res => {
            this.setState({ productList: res.data.products });
        });

        for (let index = 0; index < this.state.categoryList.length; index++) {
            this.state.navBarItems[index] = {
                lable: this.state.categoryList[index].name,
                target: this.state.categoryList[index].name
            };
        }
    }
    handleSetActive(to) {
        // triger when navigate to certain seciton
        // to is name of the section
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

                <DemoCarousel />
                <ProcessBar step={1} />
                <div className="main">
                    <div className="category-list">
                        {this.state.categoryList.map(category => {
                            return (
                                <Link
                                    key={category.category_id}
                                    className="category-list-item"
                                    activeClass="active"
                                    to={category.name}
                                    isDynamic={true}
                                    offset={-200}
                                    spy={true}
                                    smooth={true}
                                    duration={300}
                                    onSetActive={this.handleSetActive}
                                    containerId="product-list"
                                >
                                    {category.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div id="product-list" className="product-list">
                        {this.state.productList.map(item => {
                            return (
                                <Element
                                    key={item.categorys.id}
                                    className="product-group"
                                    name={item.categorys.name}
                                >
                                    <span className="category-title">
                                        {item.categorys.name}
                                    </span>
                                    {item.products.map(product => {
                                        let qty = 0;
                                        this.props.shoppingCartList.forEach(
                                            element => {
                                                if (
                                                    element.product_id ===
                                                    product.product_id
                                                ) {
                                                    qty += element.quantity;
                                                }
                                            }
                                        );
                                        return (
                                            <ProductCard
                                                shoppingCartList={
                                                    this.props.shoppingCartList
                                                }
                                                updateShopCartList={
                                                    this.props
                                                        .updateShopCartList
                                                }
                                                key={product.product_id}
                                                product={product}
                                                quantity={qty}
                                            />
                                        );
                                    })}
                                </Element>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
