const Square = ({ id, newState }) => {
  const [color, setColor] = React.useState('green');
  const [status, setStatus] = React.useState(null);
  let xo = ['O', 'X'];

  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => palet[Math.floor(Math.random()*3)];
  React.useEffect(() => {
    console.log(`Render ${id}`);
    return () => console.log(`unmounting square ${id}`)
  }, []);

  return (
    <button
      onClick={(e) => {
        let col = getRandomColor()
        setColor(col)
        let nextPlayer = newState({id: id, color: col})
        setStatus(nextPlayer);
        e.target.style.background = col
      }}
    >
    <h1>{xo[status]}</h1>
    </button>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  const [state, setState] = React.useState([]);
  let status = `Player ${player}`;

  const newState = (ob) => {
    let nextPlayer = (player +1) % 2;
    setPlayer(nextPlayer);
    setState([...state, ob]);
    console.log(`Adding state ${JSON.stringify(ob)}`);
    status = `Player ${player}`;
    return nextPlayer;
  }

  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>
  }

  return (
    <div className='game-board'>
      <div className='grid-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='info'>
        <button>Show/Hide Row</button>
        <h1>{status}</h1>
      </div>
    </div>
  )
}

ReactDOM.render(<Board />, document.getElementById('root'));