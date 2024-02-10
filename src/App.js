import './App.css';
import Navbar from './Components/Navbar.js';
import Employees from './Pages/Employees.js';

function App() {
  return (
    <div className="App bg-slate-100 min-h-screen">
        <Navbar>
          <Employees />
        </Navbar>
    </div>
  );
}

export default App;
