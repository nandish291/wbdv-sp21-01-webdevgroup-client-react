import React from "react";
import {Carousel} from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageContainer from "../utils/imagecontainer";

const CarouselComp=()=>{

    return(
        <div style={{paddingTop:"2em"}}>
        <Carousel infiniteLoop={true} showThumbs={false} autoPlay={true} interval={3000} centerMode={true}>
            <div>
                <ImageContainer src={"https://media-exp1.licdn.com/dms/image/C561BAQE-51J-8KkMZg/company-background_10000/0/1548357920228?e=2159024400&v=beta&t=D9EoYj6SBCp9zbnp8ZZdHpF27Kl29zabOtAvJw3qz4w"} height={"50vh"}/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <ImageContainer src={"https://images.squarespace-cdn.com/content/v1/5c61efd690f904b93596d50e/1561129923" +
                "012-FD9SCIT8KZU9KBZP913K/ke17ZwdGBToddI8pDm48kGXwgjHEuVNbZ3x_ZLK9yfJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkD" +
                "syUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0rQeu_A0VlcGJEiWdfSJ_zUG3Nzwshj_" +
                "9rDX5DA1pj5TBAJ60InsIWh1qSYou_rB8w/10_AE-Events_Celebrity+Series+Stage+Lighting.jpg"} height={"50vh"}/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <ImageContainer src={"https://images.squarespace-cdn.com/content/55c37beae4b0336075603f86/1443039469134-" +
                "E9SLQBQ2OW1Y69KPKFDO/image-asset.jpeg?content-type=image%2Fjpeg"} height={"50vh"}/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <ImageContainer src={"https://www.alphagamma.eu/wp-content/uploads/2019/12/alphagamma-The-ultimate-list-o" +
                "f-startup-events-happening-in-Europe-in-2020-opportunities-1.jpg"} height={"50vh"}/>
                <p className="legend">Legend 1</p>
            </div>
        </Carousel>
        </div>
    )
}

export default CarouselComp;