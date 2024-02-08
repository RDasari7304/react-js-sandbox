import './App.css';
import Employee from './Components/Employee.js';
import { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState(
    [
      {
          name: "Rohit Dasari",
          role: "CEO"
      },
      {
          name: "Bunty Babu",
          role: "Dev"
      },
      {
          name: "Ishan Patel",
          role: "Senior Developer"
      },
      {
          name: "Abhiram Menon",
          role: "Lawyer"
      }
    ]
  );
  const showEmployees = true;

  return (
    <div className="App ">
      <header className="App-header">
        <p className='text-center mb-10'>
          Hello, welcome to the application!
        </p>
        {showEmployees ? (
          <>
            <div className='flex flex-wrap justify-center'>
                {employees.map((employee) => {
                  return (
                    <Employee name={employee.name} role={employee.role}/>
                  );
                })}
            </div>
          </>
        ):(
          <h3> No employees to be shown. </h3>
        )}
        
      </header>
    </div>
  );
}

export default App;
