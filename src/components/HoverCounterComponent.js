import React from "react";
import HocComponet from "./common/HocComponent";

class HoverCounterComponent extends React.Component{
    render(){
        const { count, ClickCounter} = this.props;
        return(
            <>
                <h1 onMouseOver={ClickCounter}>This Is Hover Function counts : {count}</h1>
            </>
        )
    }
}

export default HocComponet(HoverCounterComponent,10);