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


        <Heading textColor="tertiary" size={5}>
            One-Way Data Flow
        </Heading>
        <List>
            <ListItem>
                Components pass data to their children
            </ListItem>
            <ListItem>
                Component rendering is based on internal state plus data from parent
            </ListItem>
            <ListItem>
                Predictable top-down data flow makes it easier to understand reason for UI contents
            </ListItem>
        </List>

    </Slide>
);