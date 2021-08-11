import ButtonPanel from "./buttonPanel";
import Display from "./display";
import React from "react";
import calculate from "../logic/calculate";

export default class App extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "total": null,
            "next": null,
            "operation": null
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick (btnName) {

        const calculator = calculate(
            this.state,
            btnName
        );
        this.setState({...calculator});

    }

    render () {

        const {next, total} = this.state,
            result = next
                ? next && next.toString()
                : total && total.toString();
        return (
            <div>
                <Display result={result || "0"} />

                <ButtonPanel clickHandler={this.handleClick} />
            </div>
        );

    }

}
