import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from './card';


export default function AddItem() {

    <div>addItem</div>

    const [show, setShow] = useState(false);
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [list, setList] = useState([])
    const [id, setId] = useState(0)

    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        e.preventDefault()
        setShow(true)

       
    };

    const addedItem = (e) => {
        e.preventDefault()
        const currentList = { id:id, item:item,  quantity:quantity}
        setList(currentList)
        setItem ('');
        setQuantity ('');
        setId(id + 1)
        alert("item has been added")
    };

    console.log(list);

    // }

    // useEffect(() => { 
    //     const 

    //         setItem = '';
    //     setQuantity = '';


    // }, [])


    return (
        <>

            {/* <Button variant="primary" onClick={handleShow}>
                Add New Item
            </Button> */}

            <button className="btnsign-add" onClick={handleShow} > <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
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
                        <input type="text" className='mail' placeholder="item eg toaster" value={item} onChange={(e) => setItem(e.target.value)} />
                        <br />
                        <input type="number" className='mail' placeholder="Quantity eg 2" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btnsign' form='add-form' > Add Item</button>
                    <button className='btnsign' variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    {/* <Button variant="primary">Add</Button> */}
                </Modal.Footer>
            </Modal>

            {/* {list && list.map((data) => (
                <Card data={data} />

            ))} */}

        </>

    );
}
