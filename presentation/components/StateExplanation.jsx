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


import stateExample from "raw-loader!./examples/StateExample";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            Using Component State
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <CodePane lang="jsx" source={stateExample} />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <List style={{ fontSize: 28}}>
                    <li>
                        For ES6 class components, initial state is defined in the constructor,
                        or assigned directly using the Class Properties syntax.  (Older-style &nbsp;
                         <Code style={{ fontSize: 28}}>createClass</Code>-based components use a
                        method called <Code style={{ fontSize: 28}}>getInitialState()</Code>, and
                        functional components do not have state.)
                    </li>
                    <li>
                        The state object is available as <Code style={{ fontSize: 28}}>this.state</Code>,
                        and can be read from directly.
                    </li>
                    <li>
                        State is updated by calling <Code style={{ fontSize: 28}}>{"this.setState({someField : someValue})"}</Code>,
                        which does shallow merges into the existing state object.  You <b><i>should not</i></b>&nbsp;
                        modify the state object directly, as React will not know it was changed.
                    </li>
                    <li>
                        Every call to <Code style={{ fontSize: 28}}>setState</Code> triggers a re-render
                    </li>
                </List>
            </Fill>
        </Layout>


    </Slide>
);