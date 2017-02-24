import React from "react";

// The "functional component" syntax lets you use a function as a component.
// It's effectively just the render method
function FunctionalComponentSyntax(props) {
    return (
        <div>
            Hello World!
        </div>
    );
}

// Or, use ES6 arrow function syntax to declare the component
const ArrowFunctionComponent = (props) => (
    <div>
        Hello World!
    </div>
);