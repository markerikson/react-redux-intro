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


import reduxLogo from "./images/redux.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([reduxLogo]);


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            What Is Redux?
        </Heading>

        <Image src={reduxLogo} />

        <Text>
            Created by Dan Abramov for a talk at React Europe 2015 to demonstrate the idea of
            "time-travel debugging". Now the most widely used state management tool for React apps.
        </Text>

        <List>
            <ListItem>
                "A predictable state container for JavaScript apps"
            </ListItem>
            <ListItem>
                "Flux taken to its logical conclusion"
            </ListItem>
            <ListItem>
                "A platform for developers to build customized state management for their
                use-cases, while being able to reuse things like the graphical debugger or middleware"
            </ListItem>
        </List>

    </Slide>
);