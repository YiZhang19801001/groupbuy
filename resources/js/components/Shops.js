import React, { Component } from "react";
import faker from "faker";

import SlideShow from "./SlideShow";
import Header from "./Header";
import ShopCard from "./ShopCard";
export default class Shops extends Component {
    render() {
        const valid_dates = ["12/10", "11/25"];
        const fake_shops = [
            {
                name: "7-Eleven 代购-George",
                distance: "393米",
                description: "提供超市代购，送货上门",
                image_url: "/groupbuy/public/images/shop_1.png",
                valid_date: valid_dates
            },
            {
                name: "君隆超市 Unity Asia",
                distance: "702米",
                description: "满15起送 $15 Minimum",
                image_url: "/groupbuy/public/images/shop_2.png",
                valid_date: valid_dates
            },
            {
                name: "1927亚洲便利店",
                distance: "764米",
                description: "美味中日韩等饮料+零食",
                image_url: "/groupbuy/public/images/shop_3.png",
                valid_date: valid_dates
            },
            {
                name: "Dawn Blossom悉尼古董",
                distance: "1.7公里",
                description: "",
                image_url: "/groupbuy/public/images/shop_4.png",
                valid_date: valid_dates
            }
        ];
        return (
            <div className="shops">
                <Header
                    text="185G BURWOOD ROAD BURWOOD NSW 2134"
                    textClass="normal"
                    backgroundClass="dark"
                />
                <SlideShow />
                <div className="shop-list">
                    {fake_shops.map(shop => {
                        return <ShopCard key={shop.name} shop={shop} />;
                    })}
                </div>
            </div>
        );
    }
}
