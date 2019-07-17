import React from "react";


export default props =>
(
    <React.Fragment>
        { React.Children.map(props.children, child => React.cloneElement(child, { ...props })) }
    </React.Fragment>
)