import React from 'react';
// import { List } from 'react-bootstrap-icons';
import ListItem from "./ListItem";
import { useState } from 'react';

function AddToDo() {
  const [addButton,setAddButton] = useState(false);
  

  return (
    <div className='m-5 justify-content-between'>
        <input className='bg-warning rounded me-3'></input>
        <button className='btn text-white bg-primary rounded me-3' onClick={()=> setAddButton(true)}>Add</button>
        <button className='btn text-white bg-danger rounded'>Clear List</button>
        <ListItem trigger={addButton} />
    </div>
  )
}

export default AddToDo;
