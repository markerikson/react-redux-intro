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


import pmmLogo from "./images/project-minimek-logo.png";
import pmmScreenshot from "./images/pilot-details-draft.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([pmmLogo, pmmScreenshot]);


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Image src={pmmLogo} />

        <Image src={pmmScreenshot} width="1000px"/>

    </Slide>
);