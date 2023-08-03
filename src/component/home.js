import React, { useEffect, useState } from 'react'
import Card from './card'
import AddItem from './addItem';


export default function Home() {

    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');

    // useEffect((e)=>{
    //     e.preventDefault();
    //     setItem='';
    //     setQuantity='';


    // },[])




    return (
        <>
            {/* //popup */}
            <br />
            <br />
            <br />
            <br />
            <br />

            <h1>Shopping List</h1>

            <form>


                {/* <input type="text" className='mail' placeholder="item eg toaster" value={item} onChange={(e) => setItem(e.target.value)} />
                <input type="number" className='mail' placeholder="Quantity eg 2" value={setItem} onChange={(e) => setQuantity(e.target.value)} /> */}

                {/* <button type="submit" className="btnsign-add" > <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>  Add New Item</button> */}

                <AddItem />

            </form>

            {/* {data.map((data) => {
                <Card />

            })} */}



        </>

    )
}
