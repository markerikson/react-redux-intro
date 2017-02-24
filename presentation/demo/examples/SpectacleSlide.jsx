import React from "react";
import { Fill,  Heading,  Image, Layout,  Slide, Text } from "spectacle";

import masterDetail from "./images/master-detail.png";
import storeDataflow from "./images/store-dataflow.gif";

export default (
    <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
        <Heading textColor="black" size={4}>
            Why Use Redux with React?
        </Heading>
        <Layout>
            <Fill style={{marginRight : 5}}>
                <Image src={masterDetail} height="500px"/>
            </Fill>
            <Fill style={{marginLeft : 5}}>
                <Image src={storeDataflow} height="500px"/>
            </Fill>
        </Layout>
        <Text style={{textAlign : "left", fontSize : 32}}>
            If multiple components need to display the same data in different ways,
            storing the data outside the component tree makes it easier for each
            component to retrieve the data it needs, without having to pass it as props
            all the way down from top-level components.
        </Text>
    </Slide>
);