import React from "react";

import {
    Appear,
    BlockQuote,
    Cite,
    Code,
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
        <Heading textColor="black" size={4}>
            What Is Redux?
        </Heading>

        <Heading textColor="tertiary" size={6}>
            Predictable
        </Heading>
        <Text style={{textAlign : "left", fontSize: 32}}>
            Redux attempts to make state mutations predictable by imposing certain
            restrictions on how and when updates can happen. These restrictions are reflected
            in the three principles of Redux:
        </Text>
        <List style={{ fontSize: 28, marginLeft : 20}}>
            <li>
                <b>Single source of truth</b>: The state of your whole application is stored
                as a tree of plain objects and arrays within a single store.  (How much you put in
                the store is up to you - not all data needs to live there.)
            </li>
            <li>
                <b>State is read-only</b>: The only way to change the state is to dispatch an &nbsp;
                <b>action</b>, a plain object describing what happened.
            </li>
            <li>
                <b>Changes are made with pure functions</b>: All state updates are performed by pure
                functions called <b>reducers</b>, which are <Code style={{ fontSize: 28}}>(state, action) => newState</Code>
            </li>
        </List>

        <Heading textColor="tertiary" size={6}>
            Centralized
        </Heading>
        <Text style={{textAlign : "left", fontSize: 32}}>
            Having a single store and single state tree enables many powerful techniques: logging
            of all updates, API handling, undo/redo, state persistence, "time-travel debugging",
            error reports with full snapshots of app state, and more.
        </Text>


    </Slide>
);