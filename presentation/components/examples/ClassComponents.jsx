import React from "react";

// Modern classes use ES6 class syntax
class ClassSyntax extends React.Component {
    render() {
        return (
            <div>
                Hello World!
            </div>
        );
    }
}

// The older-style createClass syntax will be deprecated soon
const CreateClassSyntax = React.createClass({
    render : function() {
        return (
            <div>
                Hello World!
            </div>
        );
    }
});