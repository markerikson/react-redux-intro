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


import renderLogic from "raw-loader!./examples/renderLogic";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            Render Logic
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <CodePane lang="jsx" source={renderLogic} />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <List style={{ fontSize: 28}}>
                    <li>
                        Render methods can contain arbitrary logic.  Different people structure
                        their render methods in different ways.  Many use inline logic in their
                        JSX structures, including ternary statements and array mappings.
                    </li>
                    <li>
                        My preferred approach for rendering is to keep all logic outside
                        of the main JSX structure, for clarity.
                    </li>
                </List>
            </Fill>
        </Layout>


    </Slide>
);