import { Component } from "react";

export default class ColorButton extends Component {

    constructor() {
        super();

        this.state = {
            color: 'white'
        }
    }
    btnChgColor = (e) => {
        let buttonValue = e.target.textContent;
        this.setState({color: buttonValue});

    }

    render() {
        return (
            <div style={{
                backgroundColor: this.state.color
            }}>
                <button onClick={this.btnChgColor}>green</button> <br />
                <button onClick={this.btnChgColor}>pink</button> <br />
                <button onClick={this.btnChgColor}>blue</button> <br />
                <button onClick={this.btnChgColor}>red</button> <br />
                <button onClick={this.btnChgColor}>brown</button> <br />
                <button onClick={this.btnChgColor}>grey</button> <br />
                <button onClick={this.btnChgColor}>orange</button> <br />
                <button onClick={this.btnChgColor}>gold</button> <br />

            </div>
        );
    }
}