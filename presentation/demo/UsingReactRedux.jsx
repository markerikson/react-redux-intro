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
            Who uses React and Redux?
        </Heading>


        <List>
            <ListItem>
                Twitter (mobile site)
            </ListItem>
            <ListItem >
                Instagram (mobile app)
            </ListItem>
            <ListItem>
                Reddit (mobile site)
            </ListItem>
            <ListItem >
                Wordpress (Calypso admin panel)
            </ListItem>
            <ListItem>
                Jenkins (BlueOcean control panel)
            </ListItem>
            <ListItem>
                Mozilla Firefox (DevTools)
            </ListItem>
            <ListItem>
                Cloud Imperium Games (Spectrum forums/chat)
            </ListItem>
            <ListItem>
                And many, MANY more!
            </ListItem>
        </List>

    </Slide>
);