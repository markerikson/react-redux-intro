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


import iamdeveloper from "./images/iamdeveloper-jsx.png"

import preloader from "spectacle/lib/utils/preloader";
preloader([iamdeveloper]);

export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            HTML in my Javascript?!?!?
        </Heading>


        <Image src={iamdeveloper} />


    </Slide>
);