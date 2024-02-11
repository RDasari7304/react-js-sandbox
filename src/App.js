import './App.css';
import Dictionary from './Components/Dictionary.js';
import Navbar from './Components/Navbar.js';
import Employees from './Pages/Employees.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App bg-slate-100 min-h-screen">
        
          <BrowserRouter>
            <Navbar>
              <Routes>
                <Route path= '/' element= {<Employees />} /> 
                <Route path= '/Dictionary' element= {<Dictionary />} />
              </Routes>
            </Navbar>
          </BrowserRouter>
    </div>
  );
}

export default App;
