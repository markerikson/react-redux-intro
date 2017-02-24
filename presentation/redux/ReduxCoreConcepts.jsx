import React from "react";

import {
    Appear,
    BlockQuote,
    Cite,
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


import coreConcepts1 from "raw-loader!./examples/CoreConcepts1";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={5}>
            Redux Core Concepts
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <CodePane lang="javascript" source={coreConcepts1} />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <Heading textColor="tertiary" size={6}>
                    State
                </Heading>
                <Text style={{textAlign : "left", fontSize: 28}}>
                    App state is stored in plain objects, like this Todo example.  There's no "setters",
                    so that different parts of the code can’t change the state arbitrarily.
                    That helps avoid hard-to-reproduce bugs.
                </Text>
                <Heading textColor="tertiary" size={6} style={{paddingTop : 30}}>
                    Actions
                </Heading>
                <Text style={{textAlign : "left", fontSize: 28}}>
                    To change something in the state, you need to dispatch an action. An action
                    is a plain JS object that describes what happened.
                </Text>
                <Heading textColor="tertiary" size={6} style={{paddingTop : 30}}>
                    Action Creators
                </Heading>
                <Text style={{textAlign : "left", fontSize: 28}}>
                    It is common to use <i>action creator</i> functions to encapsulate the process of
                    creating action objects. This may seem like overkill for simple use cases, but
                    consistent use of action creators leads to cleaner code and better reusability.
                    Action creators are not required, but are a good practice.
                </Text>
            </Fill>
        </Layout>

    </Slide>
);