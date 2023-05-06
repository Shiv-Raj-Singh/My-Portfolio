import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom';


import HomePage from './Pages/HomePage'
import Footer from './Components/Footer/Footer';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProjectPage from './Pages/ProjectPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route  path='/'  element={<HomePage/>}  />
            <Route  path='/About'  element={<AboutPage/>}  />
            <Route  path='/Project'  element={<ProjectPage/>}  />
            <Route  path='/Contact'  element={<ContactPage/>}  />

            
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
