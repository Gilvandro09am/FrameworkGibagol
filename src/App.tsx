import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nome, setNome] = useState('Vini Jr Goat');

  return (
    <>
    <h3> taelis é viado</h3>
      {nome}
    </>
  )
}

export default App
