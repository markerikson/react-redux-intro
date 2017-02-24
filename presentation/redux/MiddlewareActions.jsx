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


import middlewareBehavior from "./images/middleware-behavior.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([middlewareBehavior]);


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={5}>
            Redux Middleware
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <Image src={middlewareBehavior} width="900px" />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <Text style={{textAlign : "left", fontSize : 32}}>

                    A middleware can inspect actions and state, modify actions, dispatch other actions, stop
                    actions from reaching the reducers, and much more.
                    <br /><br />
                    Middleware are also a good place for managing persistent server
                    connections via websockets, and other similar behavior.
                </Text>
            </Fill>
        </Layout>

    </Slide>
);