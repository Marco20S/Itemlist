import { ref } from 'firebase/storage';
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom'
import { database } from '../../../configure/firestore';
import { doc, updateDoc } from 'firebase/firestore';


export default function Card({ data, handleDeleteItem, }) {

    const [item, setItem] = useState(data.item);
    const [quantity, setQuantity] = useState(data.quantity);
    const [show, setShow] = useState(false);
    const [id, setId] = useState("")

    //const id = data.id;

    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        e.preventDefault()
        setShow(true)
    }

    //update item in shopping list
    const handleEdit = async (e, id, Item, Quantity, updateFunction) => {
       e.preventDefault()
        setItem(Item)
        setQuantity(Quantity)
        setId(id)
        setShow(true)

    }

    const handleUpdate = async () => {
        const updateData = doc(database, "List", id)
        await updateDoc(updateData, { Item: item, Quantity: quantity })

    }

    //     const docRef = database.collection('List').doc(id);

    // docRef.update({
    //   Item: 'new value for field1',
    //   Quantity: 'new value for field2',
    // })
    // .then(() => {
    //   console.log('Document updated successfully');
    // })
    // .catch((error) => {
    //   console.error('Error updating document: ', error);
    // });




    return (
        <>

            {/* onClick={() => handleEdit(data.id, data.type, data.price,)} */}
            <div className="center">
                <div className="article-card">
                    <div className="content">
                        <p className="date">{data.Item}</p>
                        <p className="title">{data.Quantity}</p>
                        
                        <button onClick={(e) => handleDeleteItem(e, data.id)} > <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg></button>

                        {/* <button onClick={handleShow}>Edit</button> */}

                        <button onClick={(e) => handleEdit(e, data.id, e, data.Item, e, data.Quantity)} > <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg></button>
                    </div>
                    {/* <img src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80" alt="article-cover" /> */}
                </div>
            </div>


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
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type='submit' className='btnsign' onClick={handleUpdate} >Update Item</button>
                    <button className='btnsign' variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    {/* <Button variant="primary">Add</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}
