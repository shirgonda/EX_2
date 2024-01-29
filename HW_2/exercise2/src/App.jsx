import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorButton from './ClassComp/ColorsButton'
import DDet from './ClassComp/DDet'
import CCtable from './ClassComp/CCtable'

function App() {

  return (
    <>
      <CCtable/><br/>
      <ColorButton/> <br/>
      <DDet/>

    </>
  )
}

export default App
