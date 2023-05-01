import React from 'react';

function withWrapper(WrappedComponent) { //Step 2
    return function WrapperComponent(props) {
        return (
            <div style={{ backgroundColor: 'red', padding: '20px' }}>
                <WrappedComponent {...props} />
                {/* Step 3 */}
            </div>
        );
    };
}
function MyComponent(props) {
    return <div>Hello, {props.name}!</div>; //Step 3
}

const MyComponentWithWrapper = withWrapper(MyComponent)//Step 1


const WrapperCompo = () => {
    return <MyComponentWithWrapper name="John" age="20" />; //Step 0

}
export default WrapperCompo;