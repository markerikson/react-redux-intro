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
    <Slide bgColor="primary" align="center top" maxWidth="1400px">
        <Heading textColor="black" size={3}>
            Outline
        </Heading>
        <List>
            <ListItem>
                Why Use Javascript Frameworks?
            </ListItem>
            <ListItem>
                Using React to Create User Interfaces
            </ListItem>
            <ListItem>
                State Management with Redux
            </ListItem>
            <ListItem>
                React and Redux in Practice
            </ListItem>
            <ListItem>
                Further Information
            </ListItem>
        </List>
    </Slide>
);