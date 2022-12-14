
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Snake from './Snake';
import SnakeFood from './SnakeFood';
import { intervalmove, setfood , resetgame} from './actions';

function App() {

  const dispatch = useDispatch();
  const [direction,setDirection] = useState("RIGHT"); 
  const [start, setStart] = useState(false);
  const [speed,setSpeed] = useState(150);
  
  const snake = useSelector((state) => state.snakemove);
  const foodpos = useSelector((state) => state.foodposition);
   

  useEffect(()=>{

    document.onkeydown = onKeyDown;

    checkIfOutOfBorders();

    cheackEatFood();

    checkEatItself();

    
    const interval = setInterval(()=>{
      dispatch(intervalmove(direction,start));
    },speed);
    
    return () => clearInterval(interval);


  });

  const onKeyDown = (e)=> {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        if(direction !== "DOWN")
          setDirection("UP");
        break;
      case 40:
        if(direction !== "UP")
          setDirection("DOWN");
        break;
      case 37:
        if(direction !== "RIGHT")
          setDirection("LEFT");
        break;
      case 39:
        setStart(true);
        if(direction !== "LEFT")
          setDirection("RIGHT");
        break;
      default:
        console.log("Press valid key!!");
    }
  }

  function checkIfOutOfBorders() {
    let head = snake[snake.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      gameOver();
    }
  }

  function cheackEatFood (){
    let head = snake[snake.length - 1];
    if(foodpos[0] === head[0] && foodpos[1] === head[1]){
      snake.unshift([]);
      dispatch(setfood());
      if(speed>20)
        setSpeed(speed-10);
    }
      
  }

  function checkEatItself(){
    let head = snake[snake.length - 1];
    
    let temp = [...snake];

    temp.pop();

    temp.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        gameOver();
      }
    })
  }

  function gameOver(){
      let score =  snake.length-2;
      alert("Game Over!! Score: " + score);
      setStart(false);
      setDirection("RIGHT");
      setSpeed(150);
      dispatch(resetgame());
  }

  function Header(){
    if(start){
      return <h3>SCORE: {snake.length-2}</h3>;
    }else{
      return <h3>Press -&gt; to Start Game!!</h3>;
    }
    
  }


  return (
    <div className="App">
    <center>
    <h1>SNAKE GAME</h1>
    <Header/>
      <div className='game-zone'>
        <Snake/>
        <SnakeFood/>
      </div>
      </center>
    </div>
  );
}

export default App;
