import { useState } from 'react'; 

function RegisterForm() { 
  const [form, setForm] = useState({ 
    firstName: 'Luke', 
    lastName: 'Jones', 
    email: 'lukeJones@sculpture.com', 
  }); 

  return ( 
    <div> 

        <label> First name: </label>
        <input onChange={e => { setForm({ ...form, firstName: e.target.value }); }} /> 
       
        <label> Last name: </label>
        <input onChange={e => { setForm({ ...form, lastName: e.target.value }); }} /> 
       
        <label> Email: </label>
        <input onChange={e => { setForm({ ...form, email: e.target.value }); }} /> 
       
      <p> {form.firstName}{' '} {form.lastName}{' '} ({form.email})</p> 
    </div> 
  ); 
} 

export default RegisterForm