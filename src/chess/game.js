import React from 'react';
import Board from './board';
import './chess.css'
class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
      stepNumber:0,
      sort:true
    }
  }
  handleClick(i){
    // const history = this.state.history;
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    } 
    squares[i]= this.state.xIsNext?'X':'O'
    this.setState({
      history: history.concat([{
        squares: squares,
        lastIndex: i
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    })
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }
  order(){
    this.setState({
      sort:!this.state.sort
    })
  }
  render() {
    let history = this.state.history
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move  ?
      'Go to move #' + move + ' 最后落棋点(列号，行号):（' + parseInt(step.lastIndex / 3) + ', ' + step.lastIndex % 3 + ')':
      'Go to game start';
      return (
        <li key={move} >
          <button onClick={() => this.jumpTo(move)} className={this.state.stepNumber===move?'active':''}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      console.log(`Game -> render -> winner`, winner)
      
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares}
            onClick={(i) => { this.handleClick(i) }}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() =>{this.order()}}>{this.state.sort?'正':'反'}</button>
          <ol>{this.state.sort?moves:moves.reverse()}</ol>
        </div>
      </div>
    );
  }
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    console.log(a,'b',b,'c',c)
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winnerName: squares[a],
        winIndex: [a, b, c]
      }
    }
  }
  return null;
}
export default Game