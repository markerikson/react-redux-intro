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


import sideEffects from "raw-loader!./examples/SideEffectExample";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={5}>
            Redux Side Effects
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <CodePane lang="javascript" source={sideEffects} />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <Text style={{textAlign : "left", fontSize : 32}}>
                   The most commonly used middleware for side effects in Redux are &nbsp;
                    <Code style={{ fontSize: 28}}>redux-thunk</Code>, which lets you pass functions
                    to <Code style={{ fontSize: 28}}>dispatch</Code>, and &nbsp;
                    <Code style={{ fontSize: 28}}>redux-saga</Code>,
                    which uses ES6 generators  to control pausable functions.
                    <br /> <br />
                    Thunks are useful for complex synchronous logic, such as multiple dispatches
                    or conditional dispatching based on store state, and simple async logic.
                    Sagas are useful for complex async logic or ongoing "background thread"-like
                    processing behavior.
                    <br /><br />
                    There are many other addon libraries for managing side effects as well.
                </Text>
            </Fill>
        </Layout>

    </Slide>
);