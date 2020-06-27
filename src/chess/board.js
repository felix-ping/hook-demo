import React from 'react';
import Square from './square'

class Board extends React.Component {
  renderSquare(i) {
    return (<Square value={this.props.squares[i]}
      onClick={() => { this.props.onClick(i) }}
      key={i}
    />)
  }
  render() {
    return (
      <div>
        {
          Array(3).fill(null).map((item, index) =>
            <div className="board-row" key={index}>{
              Array(3).fill(null).map((item, indexColumn) => (this.renderSquare(index * 3 + indexColumn)
              ))
            }</div>
          )
        }
      </div>
    )
  }
}


export default Board 
