import React from "react";
import ImageContainer from "../utils/imagecontainer";

const Recommendations=()=>{
    return(
        <div>
            <h1>recommendations</h1>
            <span>
                <ImageContainer src={"https://media-exp1.licdn.com/dms/image/C561BAQE-51J-8KkMZg/company-background_" +
                "10000/0/1548357920228?e=2159024400&v=beta&t=D9EoYj6SBCp9zbnp8ZZdHpF27Kl29zabOtAvJw3qz4w"} height={"30vh"}
                width={"20vh"} padding={"2em"}/>
                <ImageContainer src={"https://media-exp1.licdn.com/dms/image/C561BAQE-51J-8KkMZg/company-background_" +
                "10000/0/1548357920228?e=2159024400&v=beta&t=D9EoYj6SBCp9zbnp8ZZdHpF27Kl29zabOtAvJw3qz4w"} height={"30vh"}
                                width={"20vh"} padding={"2em"}/>
                <ImageContainer src={"https://media-exp1.licdn.com/dms/image/C561BAQE-51J-8KkMZg/company-background_1" +
                "0000/0/1548357920228?e=2159024400&v=beta&t=D9EoYj6SBCp9zbnp8ZZdHpF27Kl29zabOtAvJw3qz4w"} height={"30vh"}
                                width={"20vh"} padding={"2em"}/>
                <ImageContainer src={"https://media-exp1.licdn.com/dms/image/C561BAQE-51J-8KkMZg/company-background_" +
                "10000/0/1548357920228?e=2159024400&v=beta&t=D9EoYj6SBCp9zbnp8ZZdHpF27Kl29zabOtAvJw3qz4w"} height={"30vh"}
                                width={"20vh"} padding={"2em"}/>
            </span>
        </div>
    )
}

export default Recommendations;