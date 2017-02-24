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


import coreConcepts2 from "raw-loader!./examples/CoreConcepts2";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={5}>
            Redux Core Concepts
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <CodePane lang="jsx" source={coreConcepts2} />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <Heading textColor="tertiary" size={6}>
                    Reducers
                </Heading>
                <Text style={{textAlign : "left", fontSize: 28}}>
                    All state update logic lives in functions called <b>reducers</b>. Since they're
                    just functions, smaller functions can be composed together into larger functions.
                    Because reducer functions are simply <Code style={{ fontSize: 28}}>(state, action) => newState</Code>,
                    they are very easily testable and straightforward to understand.
                </Text>
                <br />
                <Text style={{textAlign : "left", fontSize: 28}}>
                    Reducers should be <i>pure functions</i>, with no side effects.  That means they
                    should only rely on inputs, and not affect anything external.  Reducers need to
                    update data immutably, by making copies of state and modifying the copies before
                    returning them, rather than directly modifying inputs.
                </Text>
            </Fill>
        </Layout>

    </Slide>
);