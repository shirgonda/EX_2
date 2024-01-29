import { Component } from "react";

export default class Calc extends Component{

    constructor(){
        super();
        this.state={
            sum:0
        }
    }

    ChangeNum1=(e) =>{
        this.setState({num1: Number(e.target.value)});
        console.log(this.state.num1);
    }
    ChangeNum2=(e) =>{
        this.setState({num2: Number(e.target.value)});
        console.log(this.state.num2);
    }
    btnSum =() =>{
        this.setState({sum: this.state.num1 + this.state.num2});
    }
    
render(){

    return(
        <div>
        number1: <input type="text" onChange={this.ChangeNum1}/> <br/>
        number2: <input type="text" onChange={this.ChangeNum2}/> <br/>
        <button onClick={this.btnSum}>+</button> <br/>
        sum: {this.state.sum}
        </div>
    );
}


}