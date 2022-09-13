import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/pages/Home'
import Useful from './components/pages/Useful'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Topnav from './components/Topnav'
import Dashboard from './components/pages/Dashboard'
import Profile from './components/pages/Profile'
import Settings from './components/pages/Settings'
import RequireAuth from './components/RequireAuth'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Topnav />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/useful' exact element={<Useful />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/login' exact element={<Login />} />

        {/*We want to protect these routes*/}
        <Route element={<RequireAuth />} > 
          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/profile' exact element={<Profile />} />
          <Route path='/settings' exact element={<Settings />} />
        </Route>

        </Routes>
      <Footer />
    </Router>
    </div>
    
  );
}

export default App;
