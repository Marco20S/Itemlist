import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from './card';

import { database } from '../configure/firestore';
import { getFirestore, collection, setDoc, doc, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import { useDispatch } from 'react-redux';



export default function AddItem() {

    <div>addItem</div>

    const [show, setShow] = useState(false);
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [list, setList] = useState([]);
    const [val, setVal] = useState([]);
    const dispatch = useDispatch()

    const value = collection(database, "List")


    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        e.preventDefault()
        setShow(true)


    };

    //useeffect to retreve data in firestore

    useEffect(() => {
        const getData = async () => {
            const databaseVal = await getDocs(value)
            setVal(databaseVal.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getData()
    }, [])

    // add to firebase
    const addedItem = async (e) => {
        e.preventDefault()
        await addDoc(value, { Item: item, Quantity: quantity })
        alert("item added to list")
    };

    //delete
    const handleDeleteItem = async (e,id) => {
        // e.preventDefault()
        const deleteVal = doc(database, "List", id)
        await deleteDoc(deleteVal)
    }


    // const addUserItems = (e) => {



    //     // // Add the user data to the "user-items" collection in Firestore
    //     // (addDoc(database, "List", id), { item, quantity })
    //     //     .then(() => {
    //     //         // Dispatch an action indicating that the data has been added successfully
    //     //         dispatch({ type: "ADD_ITEMS_SUCCESS", payload: { id, item, quantity } });
    //     //     })
    //     //     .catch((error) => {
    //     //         console.log("Error adding user items: ", error);
    //     //     });
    // };

    console.log(val);



    return (
        <>

            {/* <Button variant="primary" onClick={handleShow}>
                Add New Item
            </Button> */}

            <button className="btnsign-add" onClick={handleShow} > <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>  Add New Item</button>



            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addedItem}
                        id='add-form'>
                        <input type="text" className='mail' placeholder="item eg toaster" value={item}
                            onChange={(e) => setItem(e.target.value)} />
                        <br />
                        <input type="number" className='mail' placeholder="Quantity eg 2" value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type='submit' className='btnsign' form='add-form'  > Add Item</button>
                    <button className='btnsign' variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    {/* <Button variant="primary">Add</Button> */}
                </Modal.Footer>
            </Modal>
            <br/>
            <br/>
            <br/>
            <br/>




            <h3>Added Item</h3>

            {val && val.map((data) => (
                <Card data={data} handleDeleteItem={handleDeleteItem} />
            ))}


        </>

    );
}
