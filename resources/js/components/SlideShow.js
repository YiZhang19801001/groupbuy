import React from "react";
export default class SlideShow extends React.Component {
    render() {
        return (
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                    />
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                    />
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                    />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="d-block w-100"
                            src="/groupbuy/public/images/slide_1.png"
                            alt="First slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="/groupbuy/public/images/slide_1.png"
                            alt="Second slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="/groupbuy/public/images/slide_1.png"
                            alt="Third slide"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
