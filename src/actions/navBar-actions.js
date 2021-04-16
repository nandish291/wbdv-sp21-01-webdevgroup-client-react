import {findLocationService} from '../services/navBar-service'
import _ from 'lodash'
export const GET_LOCATION="GET_LOCATION";

export const findLocation=(dispatch,location)=>{
    findLocationService(location)
        .then(response=>dispatch({
            type: GET_LOCATION,
            location: _.trim(_.split((response.results[0].formatted_address),',')[1],' ')
        }))
}