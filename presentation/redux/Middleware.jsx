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


import middlewareExample from "raw-loader!./examples/MiddlewareExample";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={5}>
            Redux Middleware
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <CodePane lang="javascript" source={middlewareExample} />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <Text style={{textAlign : "left", fontSize : 32}}>
                    Middleware are written in a "functional programming" style,
                    as functions returning functions.
                    <br /><br />
                    Redux includes a function called <Code style={{ fontSize: 28}}>applyMiddleware</Code>,
                    which sets up the middleware pipeline for use with the store.  It takes middleware
                    as parameters, and returns a "store enhancer" that is passed to <Code style={{ fontSize: 28}}>createStore</Code>
                </Text>
            </Fill>
        </Layout>

    </Slide>
);