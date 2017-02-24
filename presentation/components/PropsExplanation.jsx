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


import propsExample from "raw-loader!./examples/PropsExample";
import propTypes from "raw-loader!./examples/PropTypes.txt";


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            Props and PropTypes
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <CodePane lang="jsx" source={propsExample} />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <List style={{ fontSize: 28}}>
                    <li>
                        Props are values passed from parent to child.  They are <b>read-only</b>.

                    </li>
                    <li>
                        Props are combined into a single object.  That object is available as
                        <Code style={{ fontSize: 28}}>this.props</Code> for class components,
                        and is the only parameter for functional components
                    </li>
                    <li>
                        Anything can be passed as a prop: primitives, objects, arrays, functions,
                        component types, rendered components, and more.
                    </li>
                    <li>
                        React includes <Code style={{ fontSize: 28}}>PropTypes</Code>, which provide
                        runtime type checking of props in development, and can serve as documentation
                        for a component.
                    </li>
                </List>
                <CodePane lang="js" source={propTypes} />
            </Fill>
        </Layout>


    </Slide>
);