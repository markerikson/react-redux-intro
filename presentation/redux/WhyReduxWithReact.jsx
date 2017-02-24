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


import devtools from "./images/devtools.gif";

import preloader from "spectacle/lib/utils/preloader";
preloader([devtools]);


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            Why Use Redux with React?
        </Heading>

        <Text>
           Since a React component can already store data in its internal state, why
            would you need to use Redux to manage that data instead?  Besides "predictable
            state updates" and "centralized state handling", here's a few more reasons:
        </Text>

        <Layout>
            <Fill style={{marginRight : 5}}>
                <Image src={devtools} height="500px"/>
            </Fill>
            <Fill style={{marginLeft : 5}}>
                <Text style={{textAlign : "left", fontSize : 32}}>
                        "Time-travel debugging" allows developers to step back and forth in the history of
                        dispatched actions, see the state and UI at each point in time, and even alter the
                        history by canceling actions.
                </Text>
            </Fill>
        </Layout>


    </Slide>
);