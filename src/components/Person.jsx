import React from 'react';

const Person = (props) => {
    console.log(props);
    
   const{img , name , Role} = props.people;


    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    
    return ( 
        <>
       <div className='user'>
         <img src={url} alt="no img" />
         <div>
            <h2>{name}</h2>
            <h5>{Role} </h5>
         </div>
       </div>
        </>
     );
}
 
export default Person;