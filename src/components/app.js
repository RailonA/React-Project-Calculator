import ButtonPanel from "./buttonPanel";
import Display from "./display";
import React from "react";
import calculate from "../logic/calculate";

class App extends React.Component {
    construction(props) {
        super(props) {
            this.state = {
                total: '0',
                next: '',
                operation: ''
            };

            this.handleClick = this.handleClick.bind(this);
            this.resultHandler = this.resultHandler.bind(this);
        }

        handleClick = (buttonName) => {
            const result = calculate(this.state, buttonName);
            this.setState(result);
        };

        resultHandler = (total, next) => {
            if (next) {
                return next;
            }
            return total;
        };

        this.render() {
            const {total, next} = this.state;
            return (
                <div className="main-box">
                    <Display result={this.resultHandler(total, next)}/>
                    <ButtonPanel clickHandler={this.handleClick} />
                </div>
            )
        }
    }

}
export default App;
