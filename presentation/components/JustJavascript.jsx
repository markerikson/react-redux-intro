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


import justJavascript from "./images/ryanflorence-just-javascript.png"

import preloader from "spectacle/lib/utils/preloader";
preloader([justJavascript]);

export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            It's Just Javascript
        </Heading>


        <Image src={justJavascript} />


    </Slide>
);