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


import reactLogo from "./images/react.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([reactLogo]);


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            What Is React?
        </Heading>

        <Image src={reactLogo} />

        <List>
            <ListItem>
                "A Javascript library for creating user interfaces"
            </ListItem>
            <ListItem>
                "The 'V' in 'MVC'"
            </ListItem>
            <ListItem>
                "A library, not a framework"
            </ListItem>
        </List>

    </Slide>
);