// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
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


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1200px">
        <Heading textColor="black" size={4}>
            React Ecosystem
        </Heading>

        <List >
            <li>
                Entirely possible to build a React app with no other dependencies,
                but most apps use a variety of additional libraries for specific capabilities.
                <List style={{ fontSize: 28, marginLeft : 20}}>
                    <li>
                        Good news: can pick exactly the libraries you need for your use cases.
                    </li>
                    <li>
                        Bad news: need to pick exactly the libraries you need for your use cases.

                    </li>
                </List>
            </li>
            <ListItem >
                Common libraries
                <List style={{ fontSize: 28, marginLeft : 20}}>
                    <li>
                        AJAX requests: Axios, SuperAgent, Fetch
                    </li>
                    <li>
                        Routing: React-Router
                    </li>
                    <li>
                        State management: Redux, MobX
                    </li>
                    <li>
                        Data/utilities: Immutable.js, Lodash
                    </li>
                </List>
            </ListItem>
            <ListItem >
                Build tools
                <List style={{ fontSize: 28, marginLeft : 20}}>
                    <li>
                        Babel: compiles ES6/JSX to widely-compatible ES5
                    </li>
                    <li>
                        Webpack: reads multiple JS module formats, loads non-JS formats
                        such as CSS and images, runs Babel, and generates optimized
                        output bundles for deployment
                    </li>
                </List>
            </ListItem>
        </List>

    </Slide>
);