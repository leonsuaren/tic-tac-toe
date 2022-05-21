const Board = () => {
  const [player, setPlayer] = React.useState(-1);
  let status = `Player ${player}`;
  return (
    <div className='game-board'
    onClick={() => {
      setPlayer(s => s + 1);
    }}
    >
      <div className='info'>
        <h1>{status}</h1>
      </div>
    </div>
  )
}

ReactDOM.render(<Board />, document.getElementById('root'));