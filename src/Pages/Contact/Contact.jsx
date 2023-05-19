import React from 'react';
import { RiCalendarEventFill, RiPhoneFill, RiUserLocationFill } from 'react-icons/ri';

const Contact = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content my-20 rounded">
        <div className='text-white flex items-center'>
            <div className='text-3xl'>
                <RiCalendarEventFill></RiCalendarEventFill>
            </div>
            <div>
          <p className='text-xl'>We are open Sunday-thrusday</p>

          <h1 className='text-3xl font-semibold'>10:00 am - 9:00 pm</h1>
            </div>
         
        </div> 
        <div className='text-white flex items-center'>
            <div className='text-3xl'>
                <RiPhoneFill></RiPhoneFill>
            </div>
            <div>
          <p className='text-xl'>Have a question?</p>

          <h1 className='text-3xl font-semibold'>+2546 251 2658</h1>
            </div>
         
        </div> 

        <div className='text-white flex items-center'>
            <div className='text-3xl'>
                <RiUserLocationFill></RiUserLocationFill>
            </div>
            <div>
          <p className='text-xl'>our address</p>

          <h1 className='text-2xl font-semibold'>204 Bashundhara city level 4 <br /> Dhaka Bangladesh</h1>
            </div>
         
        </div> 
      </footer>
    );
};

export default Contact;