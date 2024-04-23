import { BUY_CAKE } from "../cake/cakeTypes"
import { BUY_ICECREAM } from "./iceCreamType"

const initialState = {
    numOfIceCream: 40
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCream: numOfIceCream - 1
        };
        default: return state
    }
}

export default iceCreamReducer