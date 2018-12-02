import React, { Component } from "react";
import axios from "axios";

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = { categoryList: [] };
    }

    componentDidMount() {}

    render() {
        return (
            <div className="category-list">
                {this.state.categoryList.map(category => {
                    return (
                        <div
                            key={category.category_id}
                            className="category-list-item"
                        >
                            {category.name}
                        </div>
                    );
                })}
            </div>
        );
    }
}
