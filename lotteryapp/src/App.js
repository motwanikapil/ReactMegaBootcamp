import Lottery from './Lottery'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Lottery />
      <Lottery title={'Mini Daily'} maxNum={10} maxBalls={4} />
    </div>
  )
}

export default App
