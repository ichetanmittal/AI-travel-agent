import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import HomeSection from './HomeSection'

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '72px' }}>
        <HomeSection />
      </div>
    </>
  )
}

export default App
