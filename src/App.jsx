import './App.css'
import Navbar from './Navbar'
import HomeSection from './HomeSection'
import BenefitsSection from './BenefitsSection'
import SignUp from './SignUp'
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ marginTop: '72px' }}>
        <Routes>
          <Route path="/" element={
            <>
              <HomeSection />
              <BenefitsSection />
            </>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
