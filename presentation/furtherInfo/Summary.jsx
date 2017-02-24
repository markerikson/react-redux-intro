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
        <Heading textColor="black" size={5}>
            Summary
        </Heading>


        <List>
            <ListItem>
                React and Redux are a powerful combination for building modern web apps
            </ListItem>
            <ListItem >
                Predictable data flow and component architecture make understanding,
                developing, and debugging an application much easier and consistent
            </ListItem>
            <ListItem >
               Both libraries push you towards better understanding of Javascript, and
                encourage use of good programming principles, without locking you into
                a rigid architecture or fixed approach.
            </ListItem>
            <ListItem >
                Vibrant ecosystem allows developers to pick and choose specific libraries
                and tools that meet their needs (for better or worse)
            </ListItem>
        </List>

    </Slide>
);