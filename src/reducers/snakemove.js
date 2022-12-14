var initState = [[0,0],[0,2]];

const snakemove = (state=[...initState], action) =>{
    
    switch(action.type){
        case 'RESET':
            state = [...initState];
            return state;
        case 'INTERVAL': 
        if(action.start){
            let head = state[state.length-1];
            switch (action.payload) {
                case 'RIGHT':
                head = [head[0] , head[1]+ 2];
                break;
                case 'LEFT':
                head = [head[0], head[1] - 2];
                break;
                case 'DOWN':
                head = [head[0] + 2, head[1]];
                break;
                case 'UP':
                head = [head[0] - 2, head[1]];
                break;
                default: 
                console.log("Default");
                break;

            }
            
            state.shift();
            return [...state,head];

        }
        else{
            state = [...initState];
            return state;
        }
            
        default: return state;
    }
}

export default snakemove;