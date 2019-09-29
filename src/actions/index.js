import {FETCH_DATA, DELETE_DATA} from "./types";
import Constants from './../constants'

export const fetchData= () => dispatch => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${Constants.API_KEY}/${Constants.LAT},${Constants.LONG}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FETCH_DATA,
                payload: data.hourly
            })
        });
};


export const deleteData = (index) => {
    return {
        type: DELETE_DATA,
        index: index
    }
};
