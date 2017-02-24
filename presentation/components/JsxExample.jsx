import React from "react";

import {
    Appear,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    ComponentPlayground,
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


import jsxExample from "raw-loader!./examples/JsxExample";
import jsxExample2 from "raw-loader!./examples/JsxExample2";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            JSX Syntax
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <CodePane lang="jsx" source={jsxExample} />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <List style={{ fontSize: 28}}>
                    <li>
                        JSX is syntax sugar for nested function calls. Not required to use React,
                        but almost everyone uses it. Requires compilation process, usually with Babel.
                    </li>
                    <li>
                        JSX "tags" are turned into <Code style={{fontSize : 28}}>React.createElement()</Code> calls
                        (which could be written by hand without JSX).
                        Those calls return plain JS objects describing the output. (Those "elements" look like

                        <Code style={{fontSize : 28}}>{"{type : thingToRender, props : {}, children : []}"}</Code>.)
                    </li>

                </List>
            </Fill>
        </Layout>




    </Slide>
);