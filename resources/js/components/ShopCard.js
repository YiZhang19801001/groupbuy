import faker from "faker";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import DateTag from "./DateTag";

export default class ShopCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shop: {
                name: "",
                distance: "",
                valid_date: [],
                image_url: "",
                description: ""
            }
        };
    }

    componentDidMount() {
        this.setState({ shop: this.props.shop });
    }
    render() {
        return (
            <div className="shop-card">
                <Link to="/groupbuy/public/products">
                    <img
                        src={this.props.shop.image_url}
                        alt={this.state.shop.name}
                    />
                </Link>
                <div className="tag-wrapper">
                    {this.state.shop.valid_date.map(validDate => {
                        return (
                            <DateTag
                                key={faker.random.uuid()}
                                validDate={validDate}
                            />
                        );
                    })}
                </div>
                <div className="text-infos">
                    <div className="text-info_title">
                        {this.state.shop.name}
                    </div>
                    <div className="text-info_details">
                        <div className="text-info_distance">
                            {this.state.shop.distance}
                        </div>
                        <div className="text-info_description">
                            {this.state.shop.address}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
