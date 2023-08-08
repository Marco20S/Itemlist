
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react'

export default function Edit() {

    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        e.preventDefault()
        setShow(true)


    };

    return (
        <div><h1>Edit</h1>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form 
                        id='add-form'>
                        <input type="text" className='mail' placeholder="item eg toaster" value={item}
                            onChange={(e) => setItem(e.target.value)} />
                        <br />
                        <input type="number" className='mail' placeholder="Quantity eg 2" value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type='submit' className='btnsign' form='add-form'   >Update Item</button>
                    <button className='btnsign' variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    {/* <Button variant="primary">Add</Button> */}
                </Modal.Footer>
            </Modal>




        </div>
    )
}
