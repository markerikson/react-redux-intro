import React from "react";

import {
    Appear,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";

export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            Components
        </Heading>
        <br />

        <Heading textColor="tertiary" size={5}>Components === State Machines</Heading>
        <Text style={{fontSize: 40}}>
            React thinks of UIs as simple state machines. By thinking of a UI as being in various states and rendering those states, it's easy to keep your UI consistent.

            In React, you simply update a component's state, and then render a new UI based on this new state. React takes care of updating the DOM for you in the most efficient way
        </Text>

        <br />

        <Heading textColor="tertiary" size={5}>Components === Functions</Heading>
        <Text style={{fontSize: 40}}>
           Just like functions take parameters and return a result, components take in
            values and return UI output.  Given the same input values, a component will return
            the same UI output. Often described as <Code style={{ fontSize: 40}}>UI = f(state) </Code>
        </Text>

    </Slide>
);