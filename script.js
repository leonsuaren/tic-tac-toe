const ResetButton = ({  }) => {

}

function checkWinner(state) {
  const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winner.length; i++) {
    const [a, b, c] = winner[i];
    if (state[a] == state[b] && state[a] == state[c] && state[a]) {
      return state[a];
    }
  }
  return null;
}


const Square = ({ id, newState, resetBoard, color, setColor, winner }) => {
  const [status, setStatus] = React.useState(null);
  let XorO = resetBoard;
  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => palet[Math.floor(Math.random()*3)];

  return (
    <button
      onClick={(e) => {
        setColor(getRandomColor)
        let nextPlayer = newState(id)
        setStatus(nextPlayer);
        e.target.style.background = color
      }}
      disabled={winner === 1 || winner === 0 ? true : false}
    >
    <h1>{XorO[status]}</h1>
    </button>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [state, setState] = React.useState(Array(9).fill(null));
  const [resetBoard, setResetBoard] = React.useState(['O', 'X']);
  const [color, setColor] = React.useState('#0c80f3');

  let status = `Player ${player}`;
  let winner = checkWinner(state);
  if (winner !== null) status = `Player ${winner} wins!!` 

  const newState = idOfSquare => {
    let thePlayer = player;
    state[idOfSquare] = player;
    setState(state);
    let nextPlayer = (player + 1) % 2;
    setPlayer(nextPlayer);
    return thePlayer;
  }

  function renderSquare(i) {
    return <Square id={i} newState={newState} resetBoard={resetBoard} color={color} setColor={setColor} winner={winner}></Square>
  }

  return (
    <div className='game-board'>
      <div className='grid-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='grid-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='grid-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className='info'>
        <button onClick={() => {
          setResetBoard([])
          setColor('#0c80f3')
        }

        }>Reset Game</button>
        <h1>{status}</h1>
      </div>
    </div>
  )
}


ReactDOM.render(<Board />, document.getElementById('root'));