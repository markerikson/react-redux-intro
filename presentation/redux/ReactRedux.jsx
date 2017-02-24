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


import provider from "./images/react-redux-provider.png";
import connectExample from "raw-loader!./examples/ConnectExample";

import preloader from "spectacle/lib/utils/preloader";
preloader([provider]);


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={5}>
            Using Redux with React
        </Heading>

        <Layout>
            <Fit style={{marginRight : 5}}>
                <Image src={provider} height="450px" />
            </Fit>
            <Fill style={{marginLeft : 5}}>
                <CodePane lang="javascript" source={connectExample} />
            </Fill>
        </Layout>
        <Text style={{textAlign : "left", fontSize : 30}}>
            Redux can be used with any UI layer (such as Angular, Vue, or plain JS), but is most commonly
            used with React. The official <b>React-Redux</b> package provides bindings between React and Redux.<br/><br />
            The <Code style={{ fontSize: 28}}>connect</Code> function generates wrapper "container" components
            that subscribe to the store.  It takes a function called <Code style={{ fontSize: 28}}>mapStateToProps</Code> to
            extract needed data from the store state after every store update, and passes the data to the wrapped component.
            Similarly, <Code style={{ fontSize: 28}}>mapDispatchToProps</Code> gives the wrapped component access
            to <Code style={{ fontSize: 28}}>dispatch</Code>. Finally, the <Code style={{ fontSize: 28}}>{"<Provider>"}</Code>
            component makes the store accessible to all connected components.
        </Text>

    </Slide>
);