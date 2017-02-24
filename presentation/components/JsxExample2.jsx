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
                <CodePane lang="jsx" source={jsxExample2} />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <List style={{ fontSize: 28}}>
                    <li>
                        Curly braces "escape" from JSX back into normal JS expressions. They are used to
                        insert values from variables and comment out code
                    </li>
                    <li>
                        A few attribute names differ from plain HTML.  In particular, use
                        <Code style={{fontSize : 28}}>className</Code> instead of <Code style={{fontSize : 28}}>class</Code>
                        for HTML/CSS class values.
                    </li>
                    <li>
                        Render methods <i>must</i> return a single root element
                    </li>
                    <li>
                        JSX uses capitalization to differentiate between HTML elements and React
                        components.  If the first letter is lowercase, the tag is assumed to be an
                        HTML element, and turned into a string.  If it's uppercase, the tag is
                        assumed to be a variable name in scope (usually a component).
                    </li>
                    <li>A common mistake is to give
                        a variable a camelcase name and render it, like&nbsp;
                        <Code style={{fontSize : 28}}>{"<myComponent>"}</Code>. React turns that into&nbsp;
                        <Code style={{fontSize : 28}}>{`{type : "myComponent"}`}</Code>, which breaks, instead of&nbsp;
                        <Code style={{fontSize : 28}}>{`{type : MyComponent}`}</Code>.)
                    </li>

                </List>
            </Fill>

        </Layout>




    </Slide>
);