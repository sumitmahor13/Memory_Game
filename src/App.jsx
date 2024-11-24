import { useContext, useState } from 'react'
import './App.css'
import Init from './components/Init'
import Game from './components/Game'
import Win from './components/Win'
import { AppContext } from '../AppContext'

function App() {

  const {state} = useContext(AppContext)
  
  return (
    <>
      <div>
        {state === 'init' && <Init/> }
        {state === 'play' && <Game/> }
        {state === 'win' && <Win/> }
      </div>
    </>
  )
}

export default App
