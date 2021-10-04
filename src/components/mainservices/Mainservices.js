// import React from 'react';
import React, { useEffect, useState } from 'react';
import Maincourses from '../maincouses/Maincourses';
import './Mainservices.css'

const Mainservices = () => {
    const[tutors,setTutors] = useState([]);

    useEffect(() =>{
        fetch('./product.JSON')
        .then(res => res.json())
        .then(data =>setTutors(data));
    },[])
    return (
        <div className='tutor-container p-3'>
            <h6 className='small-title'>Popular Courses</h6>
              <h1 className='title'>Featured Courses</h1>
            <div className='tutorlist'>
              {
                  tutors.map(tutor =><Maincourses
                    mentors={tutor}
                  key={tutor.age}
                  
                  ></Maincourses>)
              }
            </div>
        </div>
    );
};

export default Mainservices;