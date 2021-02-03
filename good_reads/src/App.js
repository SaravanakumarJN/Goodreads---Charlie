import React from 'react'
import './App.css'
import { Navbar } from './components/MyBooksCard/Navbar/Navbar'
import { MyBooks } from './pages/MyBooks'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MyBooks/>
    </div>
  )
}

export default App
