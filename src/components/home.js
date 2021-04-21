import React from "react";
import PrimarySearchAppBar from "./utils/navBar"
import CarouselComp from "./landing-page/carouselComp";
import Recommendations from "./landing-page/recommendations";
import Scroller from "./utils/Scorller";

const Home= ()=> {

    return(
        <div>
            <PrimarySearchAppBar/>
            <CarouselComp/>
            <Recommendations/>
            <Scroller/>
        </div>
        )
}

export default Home;