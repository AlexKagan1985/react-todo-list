import React from 'react';

 function ListItem(props)  {
    return (props.trigger) ? (
        <div className='d-flex justify-content-center mt-5'>
        <textarea className='bg-warning rounded me-3'></textarea>
        <button className='btn text-white bg-primary rounded me-3'>Edit</button>
        <button className='btn text-white bg-danger rounded me-3'>Delete</button>
        </div>
    ) : "" ;
}

export default ListItem;