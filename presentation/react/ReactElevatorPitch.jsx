import React from "react";

import {
    Appear,
    BlockQuote,
    Cite,
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
            What Is React?
        </Heading>

        <Heading textColor="tertiary" size={5}>
            Declarative
        </Heading>
        <Text style={{textAlign : "left"}}>
            React makes it painless to create interactive UIs. Design simple views
            for each state in your application, and React will efficiently update
            and render just the right components when your data changes.

            Declarative views make your code more predictable and easier to debug
        </Text>

        <Heading textColor="tertiary" size={5}>
            Component-Based
        </Heading>
        <Text style={{textAlign : "left"}}>
            Build encapsulated components that manage their own state, then compose
            them to make complex UIs.

            Since component logic is written in JavaScript instead of templates,
            you can easily pass rich data through your app and keep state out of
            the DOM.
        </Text>

        <Cite>
            <a href="https://facebook.github.io/react/">React Documentation</a>
        </Cite>

    </Slide>
);