import faker from "faker";
import React, { Component } from "react";

import DateTag from "./DateTag";
import ControlPannel from "./ControlPannel";

export default class ShopCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shop: this.props.shop
        };
    }

    render() {
        return (
            <div className="shop-card">
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
                        {/* <div className="text-info_distance">
                            {this.state.shop.distance}
                        </div> */}
                        <div className="text-info_description">
                            {this.state.shop.address}
                        </div>
                    </div>
                </div>
                <ControlPannel
                    sold={this.state.shop.sold}
                    mode={1}
                    quantity={1}
                />
            </div>
        );
    }
}
