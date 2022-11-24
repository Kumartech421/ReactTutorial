import React from "react";

const HocCommon= (ParamComponent) =>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                count : 0
            }
        }

        ClickCounter = () => {
            this.setState(prevstate => {
                return {count: prevstate.count+1}
            })
        }

        HvrCounter = () => {
            this.setState(prevstate => {
                return {count: prevstate.count-1}
            })
        }

        render(){
            return(
                <ParamComponent count={this.state.count} ClickCounter={this.ClickCounter} HvrCounter={this.HvrCounter} {...this.props} />
            )
        }
    }
    return NewComponent;
}
 export default HocCommon;