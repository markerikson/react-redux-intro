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


import dataflowAnimated from "./images/redux-dataflow-animated.gif";

import preloader from "spectacle/lib/utils/preloader";
preloader([dataflowAnimated]);


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={5}>
            Redux Data Flow
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <Image src={dataflowAnimated} width="650px" />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <Text style={{textAlign : "left", fontSize : 32}}>
                    Redux features a <b>uni-directional data flow</b>, as opposed to ideas like
                    "two-way data binding", or approaches where any model can be modified by any
                    code at any time:
                </Text>
                <List style={{ fontSize: 28}}>
                    <li>
                        An action is dispatched (often in response to user interaction).
                    </li>
                    <li>
                        The root reducer function is called with the current state and the dispatched action.
                        That root reducer may delegate the work to other smaller reducer functions.  It then
                        returns the new state.
                    </li>
                    <li>
                        The store notifies subscribers by running their callback functions.
                    </li>
                    <li>
                        Subscribers (usually UI components) can retrieve the updated state and re-render.
                    </li>
                </List>
            </Fill>
        </Layout>

    </Slide>
);