// Import React
import React from "react";

// Import Spectacle Core tags
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


export default (
    <Slide bgColor="primary" align="center top"  maxWidth="1400px">
        <Heading textColor="black" size={4}>
            "Separation of Concerns"?
        </Heading>

        <BlockQuote>
            <div style={{textColor : "black", border: "2px solid black", backgroundColor : "lightgray", padding : 5}}>
                <p style={{fontSize : 28}}>
                    Templates encourage a poor separation of concerns.  "View Model" tightly couples
                    a template to display logic.  Display logic and markup are inevitably tightly coupled.&nbsp;
                    <b>Templates separate <i>technologies</i>, not <i>concerns</i></b>.
                </p>

                <p style={{fontSize : 32}}>
                        React components are <b>"...a highly cohesive building block for UIs
                    loosely coupled with other components."</b>
                </p>

            </div>
            <Cite>
                Pete Hunt: &nbsp;
                <a href="http://www.slideshare.net/floydophone/react-preso-v2">
                   React: Rethinking Best Practices
                </a>
            </Cite>
        </BlockQuote>

        <List style={{ fontSize: 36}}>
            <li>
                If code frequently changes together, it should stay together
            </li>
            <li>
                React allows you to focus on building components, not templates
            </li>
            <li>
                Combining "markup" and JavaScript reduces context switching
            </li>
            <li>
                Full power of Javascript for rendering logic
            </li>
        </List>

    </Slide>
);