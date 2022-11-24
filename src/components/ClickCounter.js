import React from "react";
import CommonFn from "./common/CommonFn";

class ClickCounter extends React.Component{
    render(){
        const {count, increment } = this.props;
        return (
            <button onClick={increment}>Button clicking time {count} and name : {this.props.name}</button>
        )
    }
}

export default CommonFn(ClickCounter, 100);