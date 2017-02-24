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


import coreConcepts3 from "raw-loader!./examples/CoreConcepts3";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={5}>
            Redux Core Concepts
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <CodePane lang="jsx" source={coreConcepts3} />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <Heading textColor="tertiary" size={6}>
                    Store
                </Heading>
                <Text style={{textAlign : "left", fontSize: 28}}>
                    A Redux store contains the current state value.  Stores are created using the &nbsp;
                    <Code style={{ fontSize: 28}}>createStore</Code> method, which takes the root reducer
                    function and an optional preloaded state value.
                </Text>
                <br />
                <Text style={{textAlign : "left", fontSize: 28}}>
                    Stores have three main methods: <Code style={{ fontSize: 28}}>dispatch</Code>, &nbsp;
                    <Code style={{ fontSize: 28}}>getState</Code>, and <Code style={{ fontSize: 28}}>subscribe</Code>.
                    All subscription callbacks are invoked at the end of every call to <Code style={{ fontSize: 28}}>dispatch</Code>.
                </Text>
            </Fill>
        </Layout>

    </Slide>
);