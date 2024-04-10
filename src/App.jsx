import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar/>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      current count value is {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <br />
      <button onClick={()=> dispatch(incrementByAmount(5))}>increment by 5</button>
      <br />
      <button onClick={()=>{dispatch(multiply())}}>multiply by 2</button>
    </>
  )
}

export default App
