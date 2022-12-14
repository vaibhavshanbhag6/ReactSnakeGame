export const intervalmove = (direction, flag) =>{
    return {
        type : "INTERVAL",
        payload : direction,
        start: flag
    }
}

export const resetgame = () =>{
    return{
        type : "RESET"
    }
}

export const setfood = () =>{
    return{
        type : "setfood"
    }
}