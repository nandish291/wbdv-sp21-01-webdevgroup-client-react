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
    const image=["https://media-exp1.licdn.com/dms/image/C561BAQE-51J-8KkMZg/company-background_" +
    "10000/0/1548357920228?e=2159024400&v=beta&t=D9EoYj6SBCp9zbnp8ZZdHpF27Kl29zabOtAvJw3qz4w",
    "https://images.squarespace-cdn.com/content/v1/5c61efd690f904b93596d50e/1561129923" +
    "012-FD9SCIT8KZU9KBZP913K/ke17ZwdGBToddI8pDm48kGXwgjHEuVNbZ3x_ZLK9yfJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkD" +
    "syUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0rQeu_A0VlcGJEiWdfSJ_zUG3Nzwshj_" +
    "9rDX5DA1pj5TBAJ60InsIWh1qSYou_rB8w/10_AE-Events_Celebrity+Series+Stage+Lighting.jpg",
     "https://images.squarespace-cdn.com/content/55c37beae4b0336075603f86/1443039469134-" +
     "E9SLQBQ2OW1Y69KPKFDO/image-asset.jpeg?content-type=image%2Fjpeg",
     "https://www.alphagamma.eu/wp-content/uploads/2019/12/alphagamma-The-ultimate-list-o" +
     "f-startup-events-happening-in-Europe-in-2020-opportunities-1.jpg"
    ]
    var i;
    for(i=0;i<props.events.length;i++)
    {
        props.events[i].image=image[i%4];
    }
    return(
        <div style={{paddingTop:"2em"}}>
            <Carousel infiniteLoop={true} showThumbs={false} autoPlay={true} interval={3000} centerMode={true}>
               {
                    props.events.map(eve=>
                        <div key={eve.id}>
                            <ImageContainer eve={eve} src={eve.image} height={"50vH"} />
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