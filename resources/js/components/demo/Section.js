// ES6 Imports
import React, { Component } from "react";
//import * as Scroll from "react-scroll";
// import {
//     Link,
//     Element,
//     Events,
//     animateScroll as scroll,
//     scrollSpy,
//     scroller,
//     Button
// } from "react-scroll";

import { Link, Element, animateScroll as scroll } from "react-scroll";

export default class Section extends Component {
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollToBottom() {
        scroll.scrollToBottom();
    }
    scrollTo() {
        scroll.scrollTo(100);
    }
    scrollMore() {
        scroll.scrollMore(100);
    }
    handleSetActive(to) {
        console.log(to);
    }
    render() {
        return (
            <div className="demo">
                <Link
                    activeClass="active"
                    to="测试1"
                    spy={true}
                    smooth={true}
                    duration={300}
                    onSetActive={this.handleSetActive}
                >
                    Test 1
                </Link>
                <Link
                    activeClass="active"
                    to="test2"
                    spy={true}
                    smooth={true}
                    duration={300}
                    onSetActive={this.handleSetActive}
                >
                    Test 2 (delay)
                </Link>
                <Link
                    className="test6"
                    to="anchor"
                    spy={true}
                    smooth={true}
                    duration={300}
                    onSetActive={this.handleSetActive}
                >
                    Test 6 (anchor)
                </Link>

                <div>
                    <div>
                        <Element
                            style={{ marginTop: "20px" }}
                            name="测试1"
                            className="element"
                        >
                            test 1
                        </Element>

                        <Element name="test2" className="element">
                            test 2
                        </Element>
                    </div>
                </div>

                <div id="anchor" className="element">
                    test 6 (anchor)
                </div>

                <Link to="firstInsideContainer" containerId="containerElement">
                    Go to first element inside container
                </Link>

                <Link to="secondInsideContainer" containerId="containerElement">
                    Go to second element inside container
                </Link>
                <div className="element" id="containerElement">
                    <Element name="firstInsideContainer">
                        first element inside container
                    </Element>

                    <Element name="secondInsideContainer">
                        second element inside container
                    </Element>
                </div>

                <a onClick={this.scrollToTop}>To the top!</a>
                <br />
                <a onClick={this.scrollToBottom}>To the bottom!</a>
                <br />
                <a onClick={this.scrollTo}>Scroll to 100px from the top</a>
                <br />
                <a onClick={this.scrollMore}>
                    Scroll 100px more from the current position!
                </a>
            </div>
        );
    }
}
