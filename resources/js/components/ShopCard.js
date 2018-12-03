import React, { Component } from "react";

export default class ShopCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shop: this.props.shop,
            isSelected: this.props.isSelected
        };

        this.selecting = this.selecting.bind(this);
    }

    componentDidMount() {
        this.setState({
            shop: this.props.shop,
            isSelected: this.props.isSelected
        });
    }

    componentWillReceiveProps(newProps) {
        this.setState({ isSelected: newProps.isSelected });
    }

    selecting() {
        this.props.selecting(this.props.index);
    }

    render() {
        return (
            <div
                onClick={this.selecting}
                className={`shop-card${this.state.isSelected ? " active" : ""}`}
            >
                <div
                    className={`name-date${
                        this.state.isSelected ? " active" : ""
                    }`}
                >
                    <span className="name">{this.state.shop.name}</span>
                    <span className="date">{this.state.shop.valid_date}</span>
                </div>
                <span className="phone">{this.state.shop.phone}</span>

                <span className="address">{this.state.shop.address}</span>
            </div>
        );
    }
}
