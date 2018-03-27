require("isomorphic-fetch")
require("es6-promise").polyfill()

import {
    API_URL,
    SECRET_KEY
} from './config';

export const resolvers = {
    Query: {
        weather: (root, { city }) => {
            return fetch(`${API_URL}?key=${SECRET_KEY}&cityname=` + encodeURI(city)) 
                .then(rawResponse => {
                    if(rawResponse.status >= 400)
                        throw new Error('Bad response from server')
        
                    return rawResponse.json()
                })
                .then(response => {
                    return response.result
                })
        }
    }
}