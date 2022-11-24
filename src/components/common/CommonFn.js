import React from "react";

const CommonFn = ( WrappedComponet, IncrementNo) => {
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count : 0
            };
        }

        increment = () => {
            this.setState(prevState => {
                return { count : prevState.count + IncrementNo }
            })
        }
        render(){
            return(
                <WrappedComponet count={this.state.count} increment={this.increment} {...this.props} />
            )
        }
    }
    return NewComponent;
}
export default CommonFn;