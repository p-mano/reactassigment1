import React, { Component } from 'react';


export default class CartDescription extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="div-style">
                            <div className="tile">
                                <div className="wrapper">
                                    <div className="banner-img">
                                        <img src={this.props.description.mediumImage} />
                                    </div>
                                    <div className="header"> <p>{this.props.description.name}</p></div>
                                </div>
                                <div className="footer">
                                    <button className="btn btn-primary" onClick={() => this.props.search()}>Add </button>
                                    <button className="btn btn-danger" onClick={() => this.props.remove()}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
} 