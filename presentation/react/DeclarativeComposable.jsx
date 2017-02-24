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
            Declarative and Composable
        </Heading>

        <List>
            <ListItem>
                React is an abstraction away from the DOM
            </ListItem>
            <ListItem>
                Encourages you to think of your application and UI in terms of
                <b><i>state</i></b>, rather than UI manipulations
            </ListItem>
            <ListItem>
                Allows a simplified mental model for data flow
            </ListItem>
            <ListItem>
                Re-render the whole app on every update
            </ListItem>
            <ListItem>
                Mix and match components to build UIs
            </ListItem>
        </List>

    </Slide>
);