import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './component.js/HomePage';
import Support from './component.js/Support';
import About from './component.js/About';
import NotFoundPage from './component.js/NotFoundPage';
import Labs from './component.js/Labs';
import MainPage from './component.js/MainPage';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <navbar>
        <ul>
          <NavLink to="/">HOME</NavLink>
        </ul>
        <ul>
          <NavLink to="/about">About</NavLink>
        </ul>
        <ul>
          <NavLink to="/labs">Labs</NavLink>
        </ul>
        <ul>
          <NavLink to="/support">Support</NavLink>
        </ul>
      </navbar>
      
     <Routes>
           
           <Route path="/"  element={<MainPage/>}>
           <Route  index  element={<HomePage></HomePage>}/>
           <Route path="/support" element={<Support></Support>}></Route>
           <Route path="/about" element={ <About/>}></Route>
           <Route path="/labs" element={<Labs/>}></Route>
           <Route path="*" element={ <NotFoundPage/>}></Route>

           </Route>
        

     </Routes>
     
    </div>
  );
}

export default App;
