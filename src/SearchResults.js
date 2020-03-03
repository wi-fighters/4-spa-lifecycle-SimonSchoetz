import React, { Component } from 'react'

export default class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    fillList = () => {
        return (
            <li>
                <ul className="table-content">

                    <li>ID</li>
                    <li>Name</li>
                    <li>name@email.scurr</li>
                </ul>
            </li>
        )
    }

    render() {
        return (
            <div className="results">
                <form>
                    <input type={"text"}></input>
                    <button type={"submit"}>Search</button>
                </form>
                <ul className="table-header">
                    <li><h2>ID</h2></li>
                    <li><h2>Name</h2></li>
                    <li><h2>Email</h2></li>
                </ul>
                <ul className="sub-table">
                    {this.fillList()}
                    {this.fillList()}
                    {this.fillList()}
                </ul>

            </div>
        )
    }
}
