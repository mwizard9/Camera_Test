import React from 'react'
import { useState, useEffect } from 'react';
import phonedata from '../Phone.json';

const PhoneResult = () => {
    const [phones, setPhones] = useState(phonedata);

    // useEffect(() => {
    //   fetch('../Phone.json')
      
    //     .then(response => response.json())
    //     .then(data => setPhones(phonedata))
    //     .catch(error => console.log(error));
    //     console.log(setPhones,'this is phone data')
        
    // }, []);
  return (
    <div>
       <div>
      <h1>Phone List</h1>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
    
        {phones.map((phone,index )=> (
             <tr key={phone.id}>
             <td>{phone.name}</td>
             <td>{phone.count}</td>
             </tr>
            
          
        ))}
    
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default PhoneResult
