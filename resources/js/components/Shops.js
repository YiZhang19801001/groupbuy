import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";
import ShopCard from "./ShopCard";
import ShopCart from "./ShopCartButton";
export default class Shops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_id: this.props.match.params.product_id,
            shops: []
        };
    }

    componentDidMount() {
        axios
            .get(`/groupbuy/public/api/getshops/${this.state.product_id}`)
            .then(res => {
                this.setState({ shops: res.data });
            });
    }
    render() {
        return (
            <div className="shops">
                <Header
                    text="185G BURWOOD ROAD BURWOOD NSW 2134"
                    textClass="normal"
                    backgroundClass="dark"
                />
                <div style={{ height: "30px" }} />
                <div className="banner">
                    <img
                        src="/groupbuy/public/images/banner.png"
                        alt="天府川菜馆"
                    />
                </div>
                <div className="shop-list">
                    {this.state.shops.map(shop => {
                        return <ShopCard key={shop.name} shop={shop} />;
                    })}
                </div>
            </div>
        );
    }
}
