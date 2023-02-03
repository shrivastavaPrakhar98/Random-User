import React from 'react';
import Person from './Person';


const PersonList = () => {

    const people = [
        {
            img:1,
            name:"Prakhar Shrivastava",
            Role:"Forntend Developer"
        },
        {
            img:4,
            name:"Shikhar Shrivastava",
            Role:"SalesForce Developer"
        },
        {
            img:3,
            name:" Nitin Khare",
            Role:"Mechanicl engineer"
        }
    ]

   

    return ( 
        <>
        <Person  people = {people[0]}  />
        <Person  people = {people[1]}  />
        <Person  people = {people[2]}  />
        </>
     );
}
 
export default PersonList;