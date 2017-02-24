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


import middlewareAnimated from "./images/redux-middlewares-animated.gif";

import preloader from "spectacle/lib/utils/preloader";
preloader([middlewareAnimated]);


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={5}>
            Redux Side Effects
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <Image src={middlewareAnimated} width="650px" />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <Text style={{textAlign : "left", fontSize : 32}}>
                    The Redux store is completely synchronous by default.  Dispatching an action does not
                    return until after the reducer function has run and the new state is available.
                <br /><br />
                    Asynchronous code like AJAX calls and timeouts are known as <b>side effects</b>. In a
                    Redux app, middleware provides the ability to do asynchronous work related to the store,
                    and the async logic often lives in action creators.
                </Text>
            </Fill>
        </Layout>

    </Slide>
);