
import React, { useEffect, useState } from 'react';
import Homecourse from '../homecourse/Homecourse'
import './Homeservices.css'

const Homeservice = () => {
    const[tutors,setTutors] = useState([]);

    useEffect(() =>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data =>setTutors(data));
    },[])
    return (
        
            <div className='tutor-container p-5'>
              <h6 className='small-title'>Popular Courses</h6>
              <h1 className='title'>Featured Courses</h1>
            <div className='tutorlists'>
            
              {
                  tutors.map(tutor =><Homecourse
                  Tutor={tutor}
                //   key={tutor.age}
                  
                  ></Homecourse>)
              }
            </div>
        </div>

    );
};

export default Homeservice;