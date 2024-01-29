import { Component } from "react";

export default class CCtable extends Component {

    constructor() {
        super();
        this.state = {
            MyWidth:'100%'
        }
    }
    OneClick =() =>{
        this.setState({MyWidth: '50%'});
    }
    DoubleClick =()=>{
        console.log("aaa");
        this.setState({MyWidth: '100%'});

    }

    render() {
        const cellStyle = {
            border: '1px solid black',
            padding: '8px'
        }
        return (
            <div>
                <table style={{border:'1px solid black', borderCollapse:'collapse',
                width: this.state.MyWidth
                }}
                onClick={this.OneClick}
                onDoubleClick ={this.DoubleClick}>
                    <tr>
                        <td style={cellStyle}>this</td>
                        <td style={cellStyle}>is</td>
                        <td style={cellStyle}>my</td>

                    </tr>
                    <tr>
                        <td style={cellStyle}>first</td>
                        <td style={cellStyle}>table</td>
                        <td style={cellStyle}>:)</td>

                    </tr>

                </table>
            </div>
        );
    }



}