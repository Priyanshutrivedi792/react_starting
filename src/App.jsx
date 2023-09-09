import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import But from './app1'
import Header from './header'
import Items from './list'
const handleClick = () => {
  console.log("Button clicked!");
};

function App(props){
  return (
    <>
    <But name={"sahil"} onclick ={handleClick} />
    <Header tittle ={"LEARNING REACT"} />
    <Items items={["Mangoes","Pineapple","Grapes"]}></Items>
    </>
  )

}

export default App
