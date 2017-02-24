import React from "react";

import {
    Appear,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    Deck,
    Fit,
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


import iamdeveloper from "./images/iamdeveloper-onclick.png"

import preloader from "spectacle/lib/utils/preloader";
preloader([iamdeveloper]);

export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            React Events - Deja Vu?
        </Heading>


        <Image src={iamdeveloper} />

        <Text style={{textAlign : "left"}}>
            React manages event handling internally.  Event handlers declared in
            a component are automatically managed by the framework, using event
            delegation to simplify handling and improve performance.  It also normalizes
            event behavior across browsers.
        </Text>


    </Slide>
);