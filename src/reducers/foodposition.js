
const getRandomCoordinates = () => {
        let min = 1;
        let max = 98;
        let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
        let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
        return [x,y];
      }

var initState = getRandomCoordinates();

const foodposition = (state=initState, action) =>{
    if(action.type === "setfood"){
        state = getRandomCoordinates();
    }
    return state;

}

export default foodposition;



