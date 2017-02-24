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
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={5}>
            Further Information
        </Heading>
        <List>
            <ListItem>
                Personal Writing
                <List style={{marginLeft : 20, fontSize: 28}}>
                    <li>
                        <a href="http://blog.isquaredsoftware.com/">Mark's Dev Blog</a>:
                        My blog, with React+Redux tutorials, thoughts on idiomatic Redux usage, and more.
                    </li>
                    <li>
                        <a href="http://blog.isquaredsoftware.com/series/practical-redux">Practical Redux</a>:
                        An ongoing tutorial series, demonstrating intermediate to advanced
                        React+Redux usage through development of a sample application
                    </li>
                    <li>
                        <a href="http://blog.isquaredsoftware.com/series/practical-redux">Project Mini-Mek</a>:
                        The sample application for the "Practical Redux" series
                    </li>
                    <li>
                        <a href="http://blog.isquaredsoftware.com/2016/10/presentation-modern-web-dev-overview/">
                            The (R)Evolution of Web Development</a>:
                        A presentation on the history and evolution of web development technology, with an
                        overview of modern web dev tools and trends.
                    </li>
                    <li>
                        <a href="http://redux.js.org/docs/FAQ.html">Redux Docs: FAQ</a>:
                        Answers to commonly-asked questions about Redux usage, with links to further info
                    </li>
                    <li>
                        <a href="http://redux.js.org/docs/FAQ.html">Redux Docs: Structuring Reducers</a>:
                        A guide to writing Redux reducer logic, with key concepts, common mistakes, useful
                        patterns, and links to relevant information.
                    </li>
                    <li>
                        <a href="https://www.fullstackreact.com/articles/redux-with-mark-erikson/">Redux and
                        Why It's Good For you</a>: an introductory article I co-authored, explaining why
                        and how Redux can be useful in a React application.
                    </li>

                </List>
            </ListItem>
            <ListItem>
                Presentation Material Sources
                <List style={{marginLeft : 20, fontSize: 28}}>
                    <li>
                        <a href="http://elijahmanor.com/talks/react-to-the-future/dist/#/">React to the Future</a>, by
                        Elijah Manor
                    </li>
                    <li>
                        <a href="http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/">
                            Redux: From Twitter Hype to Production</a>, by Jenya Terpil
                    </li>
                    <li>
                        <a href="http://www.slideshare.net/visualengin/workshop-22-reactredux-m">
                            Redux Advanced Workshop: Middleware</a>, by Visual Engineering.
                    </li>
                </List>
            </ListItem>


        </List>

    </Slide>
);