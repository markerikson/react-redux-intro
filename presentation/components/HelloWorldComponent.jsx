import React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    ComponentPlayground,
} from "spectacle";


const codeSample = require("raw-loader!./examples/HelloWorldComponent.jsx");

export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            Hello World Component
        </Heading>
        <br />

        <ComponentPlayground
            theme="dark"
            code={codeSample}
        />

    </Slide>
);