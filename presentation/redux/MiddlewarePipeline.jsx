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


import middlewarePipeline from "./images/middleware-pipeline.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([middlewarePipeline]);


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={5}>
            Redux Middleware
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <Image src={middlewarePipeline} width="900px" />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <Text style={{textAlign : "left", fontSize : 32}}>
                    A Redux store can be configured to use <b>middleware</b>.  Middleware provides the
                    capability to run code after an action is dispatched, but before it reaches the reducer.
                    <br /><br />
                    Middlewares form a pipeline that wraps around the <Code style={{ fontSize: 28}}>dispatch</Code>&nbsp;
                    function. Each middleware in the chain can pass actions onward, restart the dispatch pipeline,
                    and access the store state.
                </Text>
            </Fill>
        </Layout>

    </Slide>
);