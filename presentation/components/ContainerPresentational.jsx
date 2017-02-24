// Import React
import React from "react";

// Import Spectacle Core tags
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


import containerExample from "raw-loader!./examples/ContainerPresentationalExample";

export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px">
        <Heading textColor="black" size={6}>
            Container/Presentational Components
        </Heading>

        <Layout>
            <Fit style={{marginRight: 5}}>
                <CodePane lang="jsx" source={containerExample} />
            </Fit>
            <Fill style={{marginLeft: 5}}>
                <List style={{ fontSize: 32}}>
                    <li>
                        Common approach for writing React apps is to structure components using
                        the "container / presentational" pattern:
                        <List style={{ fontSize: 28, marginLeft : 20}}>
                            <li>
                                <b>"Container" components</b>: responsible for fetching some kind of data,
                                and passing it as props to presentational children
                            </li>
                            <li>
                                <b>"Presentational" components</b>:  render some portion of UI solely based
                                on props from parent. Usually no meaningful logic.
                            </li>
                        </List>
                    </li>
                </List>
            </Fill>
        </Layout>


    </Slide>
);