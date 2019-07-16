import React from "react";


export default props =>
(
    <React.Fragment>
        { React.Children.map(props.children, child => React.cloneElement(child, { ...props })) }
        { [1, 3, 4].map(item => Math.pow(item,2)).reduce((item, sum) => sum += item) }
    </React.Fragment>
)