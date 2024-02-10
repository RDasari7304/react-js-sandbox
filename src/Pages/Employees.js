import '../App.css';
import Employee from '../Components/Employee.js';
import AddEmployee from '../Components/AddEmployee.js';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';

function Employees() {
  const [employees, setEmployees] = useState(
    [
      {
          id: 0,
          name: "Rohit Dasari",
          role: "CEO"
      },
      {
          id: 1,
          name: "Bunty Babu",
          role: "Dev"
      },
      {
          id: 2,
          name: "Ishan Patel",
          role: "Senior Developer"
      },
      {
          id: 3,
          name: "Abhiram Menon",
          role: "Lawyer"
      }
    ]
  );
  const showEmployees = true;

  function addEmployee(name, role){
    console.log("Adding new employee " + JSON.stringify({name: name, role: role}));
    const newEmployee = {
      id: uuid(),
      name: name,
      role: role
    }
    setEmployees([...employees, newEmployee]);
  }

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
        if(id == employee.id){
          return {
            ...employee,
            name: newName,
            role: newRole
          }
        }else{
          return employee;
        }
    });

    setEmployees(updatedEmployees);

  }

  return (
    <div className="App bg-slate-100 min-h-screen">
        {showEmployees ? (
          <>
            <div className='flex flex-wrap justify-center'>
                {employees.map((employee) => {
                  return (
                    <Employee key= {employee.id} id={employee.id} name={employee.name} role={employee.role} updateEmployee= {updateEmployee}/>
                  );
                })}
            </div>
            <div className='flex justify-center mt-5'>
              <AddEmployee addEmployee= {addEmployee}/>
            </div>
          </>
        ):(
          <h3> No employees to be shown. </h3>
        )}
        
    </div>
  );
}

export default Employees;
