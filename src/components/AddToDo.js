import React from 'react';
import ListItem from "./ListItem";

 function AddToDo() {

const addClick = (e) => {
    e.preventDefault();
    return ListItem;
}

  return (
    <div className='m-5 justify-content-between'>
        <input className='bg-warning rounded me-3'></input>
        <button className='btn text-white bg-primary rounded me-3' onClick={addClick}>Add</button>
        <button className='btn text-white bg-danger rounded'>Clear List</button>
        
    </div>
  )
}

export default AddToDo;
