import React from "react";

import Square from "./Square";

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          onClick(i);
        }}
        key={i}
      />
    );
  };
  const createBoardHtml = () => {
    let square,
      div = [];
    let num = 0;
    for (let i = 0; i < 3; i++) {
      square = [];
      for (let j = 0; j < 3; j++) {
        num = 3 * i + j;
        square.push(renderSquare(num));
      }
      div.push(
        <div className="board-row" key={i}>
          {square}
        </div>
      );
    }
    return div;
  };

  return (
    <>
      <div>{createBoardHtml()}</div>
    </>
  );
};

export default Board;
