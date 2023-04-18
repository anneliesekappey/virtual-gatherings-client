import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import NavBar from './components/NavBar'
import Login from './pages/Login'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/signup" element=<Signup /> />
        <Route path="/login" element=<Login /> />
      </Routes>
    </div>
  )
}

export default App
