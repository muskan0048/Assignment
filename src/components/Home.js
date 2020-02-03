import React from 'react';
import { Component, Fragment } from "react";
import Word from './Word';
import logo from '../assets/logo.png'
import background from '../assets/image.png'

//variable to store cuurent word
var ab = "";

class Home extends Component {

    state = {
        currentWord: "",
        currentWordCount: "",
        wordArray: []
    }

    // handles alphabets clicked
    handleInput(e) {
        var value = e.target.value;
        if (value != null || value === 'undefined') {
            ab += value;
        }

        this.setState({ currentWord: ab, currentWordCount: ab.length })
    }

    //Capitalizes first alphabet of entered word
    capitalize(s) {
        var firstL = s.slice(0, 1).toUpperCase(); //get the first character and make it Uppercase
        var rest = s.slice(1).toLowerCase(); //get the rest of the string and make it Lowercase
        var text = firstL.concat(rest);
        return text;
    }

    //handles click of done button
    handleButton() {
        var obj = {
            word: this.capitalize(this.state.currentWord),
            wordLength: this.state.currentWordCount
        };
        var arr = this.state.wordArray;
        arr.push(obj)
        this.setState({ wordArray: arr, currentWord: "", currentWordCount: "" })
        ab = ""


    }

    //handles changes made in input field
    handleChange(e) {
        var value = e.target.value
        ab = value
        this.setState({ currentWord: value, currentWordCount: value.length })
    }


    render() {
        return (
            <Fragment>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-4 offset-md-4 col-sm-4">
                            <div className="logo ml-5 pl-5 mb-4 mt-4"><img src={logo} alt="logo" /></div>
                            <h1 className="heading">Give me Five</h1>
                            <div className="row mb-4 ">
                                <div className="col-sm-7 redHr"></div>
                                <div className="col-sm-4 orgHr"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-4 col-sm-4" onClick={e => this.handleInput(e, "value")}>
                            <button className="btnProperty" value="A">A</button>
                            <button className="btnProperty" value="P">P</button>
                            <button className="btnProperty" value="K">K</button>
                            <button className="btnProperty" value="L">L</button>
                            <button className="btnProperty" value="E">E</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-4 col-sm-4" onClick={e => this.handleInput(e, "value")}>
                            <button className="btnProperty" value="B">B</button>
                            <button className="btnProperty" value="S">S</button>
                            <button className="btnProperty" value="R">R</button>
                            <button className="btnProperty" value="I">I</button>
                            <button className="btnProperty" value="M">M</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-4 col-sm-4">
                            <div className="form-group mt-4">
                                <label className="enteredText"> Selected Word:</label><br />
                                <input type="text" name="word" className="form-control-" value={this.state.currentWord} onChange={(e) => this.handleChange(e)} />&nbsp; &nbsp;
                        <button className="btn btn-danger" onClick={(e) => this.handleButton(e)}>Done</button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 offset-md-4 col-sm-4">
                            
                            {this.state.wordArray.length > 0 ?
                                this.state.wordArray.map((item, index) => {
                                    return <Word item={item} key = {index} />
                                })
                                :
                                <div className="enteredText text-left">No Words Yet! Start Building</div>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-4 col-sm-4">
                            <img className="imageBg" src ={background} alt="Bottom"/>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Home;