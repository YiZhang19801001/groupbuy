import React, { Component } from "react";
import axios from "axios";

import ShopCard from "./ShopCard";
export default class PickUpAddress extends Component {
    constructor(props) {
        super(props);

        this.state = { shops: [], show: "none", selectIndex: 0 };
        this.toggleContent = this.toggleContent.bind(this);
        this.selecting = this.selecting.bind(this);
    }

    componentDidMount() {
        // axios call here to set available shop and dates
        axios.get("/groupbuy/public/api/getshops/2").then(res => {
            this.setState({ shops: res.data.shop_with_date });
        });
    }

    toggleContent() {
        if (this.state.show === "none") {
            this.setState({ show: "block" });
        } else {
            this.setState({ show: "none" });
        }
    }

    selecting(index) {
        this.setState({ selectIndex: index });
    }

    render() {
        return (
            <div className="pickup-address">
                <div onClick={this.toggleContent} className="header">
                    <span>Choose your pick-up shop and date</span>
                    <i className="material-icons">
                        {this.state.show === "block"
                            ? "keyboard_arrow_up"
                            : "keyboard_arrow_down"}
                    </i>
                </div>
                <div className="content" style={{ display: this.state.show }}>
                    {this.state.shops.map((shop, index) => {
                        return (
                            <ShopCard
                                key={`${shop.name}${shop.valid_date}`}
                                shop={shop}
                                isSelected={index == this.state.selectIndex}
                                selecting={this.selecting}
                                pickupDate={this.props.pickupDate}
                                index={index}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
