import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        
        <div>
            <h6 className='small-title'>Send a Message</h6>
              <h1 className='title'>Contact us</h1>
            <div className='d-flex justify-content-center'>
            
            <div>
            <form>
        <ul>
            <li>
                <label for="name"><span>Name <span class="required-star">*</span></span></label>
                <input type="text" id="name" name="user_name"/>
            </li>
            <li>
                <label for="mail"><span>Email <span class="required-star">*</span></span></label>
                <input type="email" id="mail" name="user_email"/>
            </li>
            <li>
                <label for="msg"><span>Message</span></label>
                <textarea rows="4" cols="50"></textarea>
            </li>
            <li>
                <input type="submit"/>
            </li>
        </ul>
    </form>
         </div>
         <div className='text-align-center p-5'>
         <h6 className='small-title'>Send a Message</h6>
              <h1 className='title'>We Always Ready <br /> to  Hear From <br /> You</h1>
              <p>Lorem ipsum dolor sit amet, consect etur adi pisicing elit <br /> sed do eiusmod.Lorem ipsum <br />
              dolor sit amet, consect etur adi pisicing elit sed do eiusmod.</p>
              <button className='button'>Contact Us</button>
         </div>
        </div>
        </div>
    );
};

export default Contact;