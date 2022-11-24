import React from 'react';

const HocComponet = (WrappedComponet, number) => {
    class NewComponet extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                count : 0
            }
        };
        ClickCounter = () => {
            this.setState(prevState => {
                return {count : prevState.count + number }
            })
        }
        render(){
            return(
                <WrappedComponet count = {this.state.count} ClickCounter={this.ClickCounter} {...this.props} />
            )
        }
    }
    return NewComponet;

}
export default HocComponet;