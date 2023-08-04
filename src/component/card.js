import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({data, handleDeleteItem}) {
    return (
        <>

{/* onClick={() => handleEdit(data.id, data.type, data.price,)} */}
            <div class="center">
                <div class="article-card">
                    <div class="content">
                        <p class="date">{data.Item}</p>
                        <p class="title">{data.Quantity}</p>
                        <button  onClick={() => handleDeleteItem(data.id)} >Delete</button>
                        <button  >Update</button>
                    </div>
                    <img src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80" alt="article-cover" />
                </div>
            </div>
        </>
    )
}
