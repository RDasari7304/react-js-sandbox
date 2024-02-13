import './App.css';
import Navbar from './Components/Navbar.js';
import Employees from './Pages/Employees.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Definition from './Pages/Definition.js';
import Dictionary from './Pages/Dictionary.js';
import StatusError from './Pages/StatusError.js';

function App() {
  return (
    <div className="App bg-slate-100 min-h-screen">
        
          <BrowserRouter>
            <Navbar>
              <Routes>
                <Route path= '/' element= {<Employees />} /> 
                <Route path= '/definition' element= {<Dictionary />} />
                <Route path= '/definition/:search' element= {<Definition />} />
                <Route path= '/404/:search' element= {<StatusError />} />
                <Route path= '*' element= {<StatusError />} />
              </Routes>
            </Navbar>
          </BrowserRouter>
    </div>
  );
}

export default App;
