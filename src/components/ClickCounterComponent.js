import React from "react";
import HocComponet from "./common/HocComponent";

class ClickCounterComponent extends React.Component{
    render(){
        const { count, ClickCounter, name, skill} = this.props;
        return(
            <>
                <p>{name} - {skill}</p>
                <button onClick={ClickCounter}>Click Counter counts:{count}</button>
            </>
        )
    }
}

export default HocComponet(ClickCounterComponent,100);