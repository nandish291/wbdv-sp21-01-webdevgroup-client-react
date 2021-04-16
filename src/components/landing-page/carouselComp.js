import React,{useEffect} from "react";
import{connect} from "react-redux";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import ImageContainer from "../utils/imagecontainer";
import {Carousel} from "react-responsive-carousel";
import carouselActions from "../../actions/carousel-actions";


const CarouselComp=(
    props
)=>{
    useEffect(()=>
        props.findTrending(),[]
    )
    return(
        <div style={{paddingTop:"2em"}}>
            <Carousel infiniteLoop={true} showThumbs={false} autoPlay={true} interval={3000} centerMode={true}>
               {
                    props.events.map(eve=>
                        <div key={eve.id}>
                            <ImageContainer eve={eve} src={eve.performers[0].image} height={"50vH"} />

                        </div>
                    )
                }
            </Carousel>
        </div>
    )
}

const stmp= (state)=>({
    events: state.carousel.events
})

const dtmp=(dispatch)=>({
    findTrending:()=> carouselActions.findTrending(dispatch)
})

export default connect(stmp,dtmp)(CarouselComp);