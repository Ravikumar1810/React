// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Lodoboard from './LodoBoard';
import TodoList from './TodoList';
import Lottery from './Lottery';
import Ticket from './Ticket';

function App() {
  

  return (
    <>  
    <Lottery n={3} winningSum={15} />
    </>
  )
}

export default App
