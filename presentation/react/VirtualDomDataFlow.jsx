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
            Managing the UI
        </Heading>

        <Heading textColor="tertiary" size={6}>
            Declarative Rendering
        </Heading>
        <List style={{fontSize : 32}}>
            <li>
                Completely recreating the entire UI on every update is not efficient
            </li>
            <li>
                Rendering a component returns <i>descriptions</i> of what the UI should look like now
            </li>
            <li>
                React uses those descriptions to update the UI efficiently
            </li>
        </List>
        <Heading textColor="tertiary" size={5}>
            One-Way Data Flow
        </Heading>
        <List style={{fontSize : 32}}>
            <li>
                Components pass data to their children
            </li>
            <li>
                Component rendering is based on internal state plus data from parent
            </li>
            <li>
                Predictable top-down data flow makes it easier to understand reason for UI contents
            </li>
        </List>


    </Slide>
);