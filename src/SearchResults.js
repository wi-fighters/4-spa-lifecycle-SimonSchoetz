import React, { Component } from 'react'

export default class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="results">
                <form>
                    <input type={"text"}></input>
                    <button type={"submit"}>Search</button>
                </form>
                <ul className="main-list">
                    <li>
                        <ul className="inner-list">
                            <li><h2>ID</h2></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="inner-list">
                            <li><h2>Name</h2></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="inner-list">
                            <li><h2>Email</h2></li>
                        </ul>
                    </li>


                </ul>

            </div>
        )
    }
}
