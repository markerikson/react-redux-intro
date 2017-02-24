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


import renderExample from "raw-loader!./examples/RenderExample";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            Basic Usage
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <CodePane lang="jsx" source={renderExample} />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <List style={{ fontSize: 28}}>
                    <li>
                        The <Code style={{ fontSize: 28}}>render</Code> method is required for all
                        components. You can think of this as your template.
                    </li>
                    <li>
                        Rendering returns a tree of React component descriptions, which will eventually be
                        turned into HTML
                    </li>
                    <li>
                        The <Code style={{ fontSize: 28}}>ReactDOM.render</Code> method creates a new
                        component tree, initializes the React library, and appends the output from
                        the component and its children to the given HTML element
                    </li>
                </List>
            </Fill>
        </Layout>


    </Slide>
);