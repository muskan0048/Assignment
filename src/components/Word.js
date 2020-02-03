import React from 'react';
import { Component, Fragment } from "react";


class Word extends Component {


    

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className = "col-md-9 ">
                    <p className="word hr">{this.props.item.word}</p>
                    </div>
                    <div className = "col-md-3 ">
                        <button className="wordLength">{this.props.item.wordLength}</button>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Word;