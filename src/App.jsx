import './App.css'
import Navbar from './Navbar'
import HomeSection from './HomeSection'
import BenefitsSection from './BenefitsSection'
import SignUp from './SignUp'
import Login from './Login'
import Dashboard from './Dashboard'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function DashboardWithUser() {
  const location = useLocation();
  const user = location.state?.user || "User";
  return <Dashboard user={user} />;
}

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
          <Route path="/dashboard" element={<DashboardWithUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
