import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// components
import InputItem from './components/InputItem'
import ListItem from './components/ListItems'

function App() {


  return (
    <>
      <div className="container">
        <InputItem />
        <ListItem />
      </div>
    </>
  )
}

export default App
