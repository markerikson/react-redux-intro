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

import fluxMVC from "./images/flux-mvc.png";
import fluxFlow from "./images/flux-flow.png"

import preloader from "spectacle/lib/utils/preloader";
preloader([fluxMVC, fluxFlow]);


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            Redux's Predecessor: Flux
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <Image src={fluxMVC} />
                <Image src={fluxFlow} />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <List style={{ fontSize: 32}}>
                    <li>
                        A year after releasing React, Facebook announced the "Flux Architecture":
                        <List style={{ fontSize: 28, marginLeft : 20}}>
                            <li>
                                "We found that two-way data bindings led to cascading updates, where
                                changing one object led to another object changing, which could also
                                trigger more updates. As applications grew, these cascading updates
                                made it very difficult to predict what would change as the result of
                                one user interaction. When updates can only change data within a
                                single round, the system as a whole becomes more predictable."
                            </li>
                            <li>
                                "Flux is more of a pattern than a framework"
                            </li>
                        </List>
                    </li>
                    <li>
                        Basic concepts:
                        <List style={{ fontSize: 28, marginLeft : 20}}>
                            <li>
                                Many <b><i>data stores</i></b> register with a singleton &nbsp;
                                <b><i>dispatcher</i></b>.  To trigger updates, plain object &nbsp;
                                <b><i>actions</i></b> are dispatched, and stores update themselves in response.
                                UI subscribes to stores, reads data on change events.
                            </li>
                        </List>
                    </li>
                </List>
            </Fill>
        </Layout>


    </Slide>
);