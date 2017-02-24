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
            Component Lifecycle Methods
        </Heading>

        <Text style={{fontSize : 32}}>
            Class components can have lifecycle methods that will be called by React
            at various times.  Any class component can implement some or all of these
            methods, which have various uses:
        </Text>

        <List style={{ fontSize: 28}}>
            <li>
                <Code style={{ fontSize: 28}}>componentWillMount</Code>: Fired once,
                before initial rendering occurs. For ES6 classes, the constructor
                is effectively equivalent.
            </li>
            <li>
                <Code style={{ fontSize: 28}}>componentDidMount</Code>: Fired once,
                after initial rendering occurs.  Actual DOM elements can be accessed here.
                This is a good place to create things like pubsub event subscriptions
                and trigger AJAX data requests for needed data.
            </li>
            <br />
            <li>
                <Code style={{ fontSize: 28}}>componentWillReceiveProps </Code>: Fired when a component
                is receiving new props. You might want to set state based on the props, or
                diff old and new props and trigger additional behavior.
            </li>
            <li>
                <Code style={{ fontSize: 28}}>shouldComponentUpdate </Code>: Fired before
                rendering.  You can compare old props/state vs the new values, and
                <Code style={{ fontSize: 28}}>return false</Code> if you know a re-render isn't needed
            </li>
            <li>
                <Code style={{ fontSize: 28}}>componentDidUpdate</Code>: Fired after the component's
                updates are made to the DOM.  Actual DOM elements can be accessed here.
            </li>
            <br />
            <li>
                <Code style={{ fontSize: 28}}>componentWillUnmount  </Code>: Fired immediately
                before a component is unmounted from the DOM. Good place to remove message
                listeners or general clean up.
            </li>
        </List>


    </Slide>
);