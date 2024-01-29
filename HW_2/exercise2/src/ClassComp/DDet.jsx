import { Component } from "react";

export default class DDet extends Component {

    constructor() {
        super();
        this.state = {
            paragraph: "",
            PfirstName:"",
            PLastName:"",
            PPsyco:"",
            FirstName: "Enter your first name",
            LastName: "Enter your last name",
            Psyco: "Enter your psychometric score",
            Message: ""
        }


    }

    FocusP = (ShowP, id) => {
        console.log(id);
        if(id == "firstName")
        this.setState({ PfirstName: ShowP });
        else if(id=="lastName")
        this.setState({PLastName: ShowP})
        else{
            this.setState({PPsyco: ShowP})
        }
    }
    NoFocus = (e) => {
        if(this.state.PPsyco == this.state.Psyco){
            if (e.target.value > 555){
                this.setState({ Message: "You were accepted for studies" });
            }
            else{
                this.setState({ Message: "sorry, try again next year" });

            }
        }
        this.setState({ PfirstName: "" ,
        PLastName:"",
        PPsyco:""
    });
    }

    render() {
        return (
            <div>
                <p style={{
                    backgroundColor: "red"
                }}>
                {this.state.PfirstName}</p>
                first name : <input type="text" id="firstName" onFocus={(e) => this.FocusP(this.state.FirstName, e.target.id)} onBlur={this.NoFocus} /> <br /><br />
                <p style={{
                    backgroundColor: "red"
                }}>
                {this.state.PLastName}</p>
                last name : <input type="text" id="lastName" onFocus={(e) => this.FocusP(this.state.LastName, e.target.id)} onBlur={this.NoFocus} /> <br /><br />
                <p style={{
                    backgroundColor: "red"
                }}>
                {this.state.PPsyco}</p>
                psychometric : <input type="text" id="Score" onFocus={(e) => this.FocusP(this.state.Psyco, e.target.id)} onBlur={this.NoFocus} /> <br /><br />
                <p>{this.state.Message}</p>
            </div>
        );

    }
}
