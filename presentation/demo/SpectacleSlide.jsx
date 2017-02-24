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



import spectacleSlide from "raw-loader!./examples/SpectacleSlide.jsx";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            This is a React App!
        </Heading>

        <CodePane lang="jsx" source={spectacleSlide} />

    </Slide>
);