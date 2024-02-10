import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EmployeeForm from './EmployeeForm';

function EditEmployee(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={handleShow}>
            Edit Employee
        </button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >Edit Employee: {props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EmployeeForm id= {props.id} name= {props.name} role= {props.role} updateEmployee= {props.updateEmployee}/>
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
                form= 'editmodal'
            >
                    Update
            </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;