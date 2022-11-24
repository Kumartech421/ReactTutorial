import React from 'react';

const WrappedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component{
        render(){
            return(
            <div style={{color : 'red', background:'blue'}}>
                <OriginalComponent />
            </div>
            )
        }
        
    }
    return NewComponent;
}
export default WrappedComponent;