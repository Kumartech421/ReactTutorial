import React from "react";

const CommonHoc = (WrappedComponent) => {
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
    
            this.state = {
                count : 0
            }
        }
        increament = () => {
            this.setState(prevstate => {
                return {count: prevstate.count+1}
            })
        }
        decrement = () => {
            this.setState(prevstate => {
                return {count: prevstate.count-1}
            })
        }
        render(){
            return(
                <WrappedComponent count = {this.state.count} increament = {this.increament} decrement={this.decrement} {...this.props}/>
            )
        }
    }
    return NewComponent;
}

export default CommonHoc;