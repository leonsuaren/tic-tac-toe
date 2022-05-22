const Square = ({ id, player }) => {
  const [color, setColor] = React.useState('green');
  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => palet[Math.floor(Math.random()*3)];
  React.useEffect(() => {
    console.log(`Render ${id}`);
    return () => console.log(`unmounting square ${id}`)
  }, []);
  
  return (
    <button
      onClick={(e) => {
        setColor(getRandomColor)
        e.target.style.background = color
      }}
    >
    <h1>{id}</h1>
    </button>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  const [mounted, setMounted] = React.useState(true);
  let status = `Player ${player}`;
  function renderSquare(i) {
    return <Square id={i} player={player}></Square>
  }
  const toggle = () => {
    setMounted(!mounted)
  }
  return (
    <div className='game-board'>
      <div className='grid-row'>
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div className='info'>
        <button onClick={toggle}>Show/Hide Row</button>
        <h1>{status}</h1>
      </div>
    </div>
  )
}

ReactDOM.render(<Board />, document.getElementById('root'));