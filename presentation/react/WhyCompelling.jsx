import React from "react";

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


const note = `
- Declarative > Predictable: understanding all states of a component by looking at the file <br />
- Predictable > Confidence: make changes more easily with confidence. Less need to understand<br />
the entire system, just that one part.<br />
- Confidence > Reliable: making changes confidently leads to reliable systems
`;

export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20} notes={note}>
        <Heading textColor="black" size={4}>
            Choosing React
        </Heading>
        <br />

        <Heading textColor="tertiary" size={5}>
            Why Is This Compelling?
        </Heading>

        <Text style={{fontSize: 50}}>
            Declarative → Predictable → Confidence → Reliability
        </Text>
        <Cite>
            Tom Occhino's <a href="https://www.youtube.com/watch?v=KVZ-P-ZI6W4#t=868">ReactConf keynote</a>
        </Cite>

        <br />

        <Heading textColor="tertiary" size={5}>
            What's the Learning Curve?
        </Heading>

        <List>
            <ListItem>
                Learning React's basic concepts and API: <b>EASY</b>
            </ListItem>
            <ListItem>
                Learning to "think in React": <b>INTERMEDIATE</b>
            </ListItem>
            <ListItem>
                Stuff you can do with React: <b>ADVANCED</b>
            </ListItem>
        </List>
    </Slide>
);