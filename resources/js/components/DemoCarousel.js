import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false}>
                <div>
                    <img src="/groupbuy/public/images/slide_1.png" />
                </div>
                <div>
                    <img src="/groupbuy/public/images/slide_1.png" />
                </div>
                <div>
                    <img src="/groupbuy/public/images/slide_1.png" />
                </div>
            </Carousel>
        );
    }
}
