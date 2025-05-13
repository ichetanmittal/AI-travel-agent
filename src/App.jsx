import './App.css'
import Navbar from './Navbar'
import HomeSection from './HomeSection'
import SignUp from './SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ marginTop: '72px' }}>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
