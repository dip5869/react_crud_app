import axios from 'axios';
import React, { useState } from 'react'


export default function UserForm() {

    const [item_name, setItemname] = useState('');
    const [item_price, setItemprice] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const data = {
            item_name,
            item_price
        }
        console.log('data', data)
        // console.log('item_price',item_price)
        axios.post('http://localhost:3000/postdata', data).then(result => {
            console.log('result', result);
        })
    }

    return (
        <>
            <div className="container">

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label forName="exampleFormControlInput1">Item Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Item Name" name="item_name" value={item_name} onChange={e => setItemname(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label forName="exampleFormControlInput1">Item Price</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Item Price" name="item_price" value={item_price} onChange={e => setItemprice(e.target.value)} />
                    </div>

                    {/* <div className="form-group">
                        <label forName="exampleFormControlSelect1">Example select</label>
                        <select className="form-control" id="exampleFormControlSelect1" name="dropdown" value={dropdown} onChange={e => setDropdown(e.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div> */}
                    {/* <div className="form-group">
                        <label forName="exampleFormControlTextarea1">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="desc" value={desc} onChange={e => setDesc(e.target.value)}></textarea>
                    </div> */}
                    <div className="form-group">
                        <button className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}
