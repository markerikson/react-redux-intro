import React from "react";

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
    <Slide bgColor="primary" align="center top" maxWidth="1400px">
        <Heading textColor="black" size={3}>
            Notes
        </Heading>
        <List style={{fontSize: 32}}>
            <li>
                The code samples use modern Javascript ES6 syntax,
                including classes, arrow functions, and import statements, as well
                as some not-yet-final Javascript features such as class properties.
                None of those are required to use React, but most React applications use
                ES6 and newer features.
            </li>
            <li>
                The material for this presentation is based on two excellent existing presentations: &nbsp;
                <a href="http://elijahmanor.com/talks/react-to-the-future/dist/#/">React to the Future</a> by
                Elijah Manor, and &nbsp;
                <a href="http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/">
                    Redux: From Twitter Hype to Production</a>&nbsp;
                by Jenya Terpil.  It also includes some images from&nbsp;
                <a href="http://www.slideshare.net/visualengin/workshop-22-reactredux-m">Redux Advanced Workshop: Middleware</a>,
                by Visual Engineering.  Full credit to them for the original content.
            </li>
            <li>
                I am currently a Redux maintainer, and spend most of my time answering questions
                about React and Redux.  So, I'm <b><i>just</i></b> a bit biased :)
            </li>
        </List>

    </Slide>
);