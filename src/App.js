import React from 'react';
import './App.css';
import Snake from './Snake';
import Food from './Food';

const generateRandom = () => {
  const min = 1, max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      snakeDots: [
        [0, 0],
        [2, 0]
      ],
      food: generateRandom(),
      direction: 'RIGHT',
      speed: 200,
      score:0
    }
  }

  checkBounds = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[0] < 0 || head[1] >= 100 || head[1] < 0) this.gameOver();
  }

  checkSelfTouch = () => {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) this.gameOver();
    })
  }

  gameOver = () => {
    alert("GAME OVER");
    this.setState({
      snakeDots: [
        [0, 0],
        [2, 0]
      ],
      food: generateRandom(),
      direction: 'RIGHT',
      speed: 200,
      score:0
    });
  }

  moveSnake = () => {
    let dots = this.state.snakeDots;
    let head = dots[dots.length - 1];
    switch (this.state.direction) {
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({ snakeDots: dots });
  }

  keyPress = (event) => {
    switch (event.keyCode) {
      case 37:
        this.setState({ direction: 'LEFT' });
        break;
      case 38:
        this.setState({ direction: 'UP' });
        break;
      case 39:
        this.setState({ direction: 'RIGHT' });
        break;
      case 40:
        this.setState({ direction: 'DOWN' });
        break;
      default: alert("Use arrow keys to move snake");
    }
  }

  enlarge = () => {
    let snake = [...this.state.snakeDots];
    snake.unshift([]);
    this.setState({ snakeDots: snake });
  }

  eatFood = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] === this.state.food[0] && head[1] === this.state.food[1]) {
      this.setState({ food: generateRandom() });
      let sc=this.state.score;
      sc=sc+10;
      this.setState({ score: sc });
      let sp=this.state.speed;
      if(sp>10) sp=sp-10;
      this.setState({ speed: sp });
      this.enlarge();
    }
  }

  componentDidUpdate() {
    this.checkBounds();
    this.checkSelfTouch();
    this.eatFood();
  }

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.keyPress;
  }

  render() {
    return (<div>
      <h1 className='f-4 tc'>Snake Game</h1>
      <h1 className='f5 tc'>Score:{this.state.score}</h1>
      <div className='game-area'>
        <Snake snakeDots={this.state.snakeDots} />
        <Food food={this.state.food} />
      </div>
    </div>
    );
  }

}

export default App;
