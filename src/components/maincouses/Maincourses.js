import React from 'react';
import './Maincourses.css'

const Maincourses = (props) => {
    const {img,instractorname,coursename,lesson,Sales,Quality,price} = props.mentors;
    return (
        <div>
            
            <div>
            <div className='displayteacher p-3'>
            <img src={img} alt="" />
            <div className='d-flex  justify-content-between p-3 '>
            <h6 className='small-title'>{instractorname}</h6>
            <h6 className='small-title'>{Sales}</h6>
            </div>
            <h5>{coursename}</h5>
            <h6>${price}</h6>
            <div className='d-flex  justify-content-between p-3 '>
            <h6 className='small-title'> lesson:{lesson}</h6>
            <h6 className='small-title'>{Quality}</h6>
            </div>
            <button 
            className='button'>Get Enroled</button>
            
        </div>
            </div>
        </div>
    );
};

export default Maincourses;