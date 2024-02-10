import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import NewEmployeeForm from './NewEmployeeForm';

function AddEmployee(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button
            onClick={handleShow}
            className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' 
        >
                    Add New Employee
        </button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >Add new Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <NewEmployeeForm addEmployee= {props.addEmployee}/>
        </Modal.Body>
        <Modal.Footer>
            <button 
                className='bg-slate-400 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded' 
                onClick={handleClose}
            >
                    Close
            </button>
            <button
                onClick={handleClose}
                className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' 
                form= 'addmodal'
            >
                    Create
            </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;