import React, { Component } from "react";

import ValidDate from "./ValidDate";

export default class ShopCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shop: this.props.shop,
            isSelected: this.props.isSelected,
            selectedDateIndex: 0
        };

        this.selecting = this.selecting.bind(this);
        this.setDateIndex = this.setDateIndex.bind(this);
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

    setDateIndex(index) {
        this.setState({ selectedDateIndex: index });
    }

    render() {
        return (
            <div
                onClick={this.selecting}
                className={`shop-card${this.state.isSelected ? " active" : ""}`}
            >
                <div
                    className={`shop-info${
                        this.state.isSelected ? " active" : ""
                    }`}
                >
                    <span className="name">{this.state.shop.name}</span>
                    <span
                        className={`phone${
                            this.state.isSelected ? " active" : ""
                        }`}
                    >
                        {this.state.shop.phone}
                    </span>

                    <span
                        className={`address${
                            this.state.isSelected ? " active" : ""
                        }`}
                    >
                        {this.state.shop.address}
                    </span>
                </div>
                <div className="date-container">
                    {this.state.isSelected
                        ? this.state.shop.valid_date.map((date, index) => {
                              return (
                                  <ValidDate
                                      key={`${date.location_id}${date.times}`}
                                      index={index}
                                      selectIndex={this.state.selectedDateIndex}
                                      setDateIndex={this.setDateIndex}
                                      pickupDate={this.props.pickupDate}
                                      date={date}
                                  />
                              );
                          })
                        : null}
                </div>
            </div>
        );
    }
}
