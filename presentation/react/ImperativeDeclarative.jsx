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


import imperativeExample from "raw-loader!./examples/jQuery";
import declarativeExample from "raw-loader!./examples/react.jsx";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            Declarative Code
        </Heading>

        <Layout>
            <Fill style={{marginRight : 5}}>
                <Heading textColor="tertiary" size={6}>Imperative</Heading>
                <CodePane lang="javascript" source={imperativeExample} />
            </Fill>
            <Fill style={{marginLeft : 5}}>
                <Heading textColor="tertiary" size={6}>Declarative</Heading>
                <CodePane lang="jsx" source={declarativeExample} />
            </Fill>
        </Layout>

        <List style={{fontSize: 32}}>
            <li>
                React is an abstraction away from the DOM
            </li>
            <li>
                Encourages you to think of your application and UI in terms of
                <b><i>state</i></b>, rather than UI manipulations
            </li>
            <li>
                Allows a simplified mental model for data flow
            </li>
            <li>
                Re-render the whole app on every update
            </li>
            <li>
                Mix and match components to build UIs
            </li>
        </List>

    </Slide>
);