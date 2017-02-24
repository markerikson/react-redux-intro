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


import pmmLogo from "./images/project-minimek-logo.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([pmmLogo]);


export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Image src={pmmLogo} />

        <Text style={{textAlign : "left"}}>
            The sample application for my <a href="http://blog.isquaredsoftware.com/series/practical-redux">
            "Practical Redux" tutorial series</a>. It's intended to
            demonstrate a variety of intermediate to advanced Redux techniques that I've
            developed while building my actual React+Redux app at work.  The sample app
            isn't a complete full-stack example, but does serve as a useful example of an
            application that's more complex than the usual "TodoMVC" demo.
        </Text>
        <br />
        <Text style={{textAlign : "left"}}>
            <b><i>Project Mini-Mek</i></b> uses concepts from the Battletech game
            universe, and is a miniature version of the&nbsp;
            <a href="http://megamek.info/mekhq">MekHQ campaign management application</a>.
            It allows the user to view, modify, and organize the Pilots and Battlemechs
            that make up a fictional mercenary combat group.
        </Text>
        <br />
        <Text style={{textAlign : "center"}}>
            The source for <b><i>Project Mini-Mek</i></b> is available at &nbsp;
            <b><a href="https://github.com/markerikson/project-minimek">github.com/markerikson/project-minimek</a></b>.
        </Text>



    </Slide>
);