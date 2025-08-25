import React from 'react'
import Contact from '../Contact/Contact';


const ContactList = ({waitinguser, ondelete}) => {
  return (
    <div >
<div className='grid grid-cols-3 gap-5'>
{waitinguser.map(item => <Contact key={item.id} usenumber={item.number} username={item.name} usrid={item.id} onDelete={ondelete} />)} 

</div>









    
        
    
    </div>
    
  )
}

export default ContactList