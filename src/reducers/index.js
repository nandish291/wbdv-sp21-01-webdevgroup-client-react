import {combineReducers} from "redux";
import CarouselReducer from "./carousel-reducer";
import RecommendationReducer from "./recommendation-reducer";
// import SearchReducer from "./search-reducer";

export default combineReducers({
    carousel: CarouselReducer,
    recommended: RecommendationReducer,
    // search: SearchReducer
})