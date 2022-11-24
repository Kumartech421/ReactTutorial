import React from "react";
import CommonFn from "./common/CommonFn";

class Counter extends React.Component{
    render(){
        const {count, increment } = this.props;
        return (
            <h1 onMouseOver={increment}>Mouse Hover increment counts {count}</h1>
        )
    }
}

export default CommonFn(Counter,20);