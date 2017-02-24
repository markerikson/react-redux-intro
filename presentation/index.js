// Import React
import React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    ComponentPlayground,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/overrides.css");

require("./prism.js");
require("./monokai.css");


const colors = {
    primary: "white",
    secondary : "black",
    tertiary : "red",
    quartenary : "black",
};

const theme = createTheme({
    primary : "white",
    secondary : "#1F2022",
    tertiary : "#03A9FC",
    quartenary : "#CECECE"
}, {
    primary : "Montserrat",
    secondary : "Helvetica"
});


theme.screen.components.listItem.fontSize = "2.0rem";
theme.screen.components.text.fontSize = "1.75rem";

import intro from "./intro";
import react from "./react";
import components from "./components";
import redux from "./redux";
import demo from "./demo";
import furtherInfo from "./furtherInfo";

const slides = intro.concat(
    react,
    components,
    redux,
    demo,
    furtherInfo,
);


export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={[]} progress="number" theme={theme}>
                {React.Children.toArray(slides)}
            </Deck>
        );
    }
}
