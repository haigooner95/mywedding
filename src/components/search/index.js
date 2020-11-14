import React, { Component } from 'react'

export default class Search extends Component {

    subimtHandler = (e) => {
        e.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.subimtHandler}>
                    <div>
                        <input type="text" className="form-control" placeholder="Search" />
                        <button type="btn"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
        )
    }
}
