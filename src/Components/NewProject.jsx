import React from 'react'

const NewProject = () => {



 const people = [
  { name: "Arun Kumar", place: "Chennai" },
  { name: "Divya Raj", place: "Chennai" },
  { name: "Karthik V", place: "Chennai" },
  { name: "Sangeetha R", place: "Coimbatore" },
  { name: "Vignesh M", place: "Coimbatore" },
  { name: "Meena S", place: "Coimbatore" },
  { name: "Ravi Chandran", place: "Trichy" },
  { name: "Anjali Devi", place: "Trichy" },
  { name: "Suresh K", place: "Trichy" },
  { name: "Lakshmi B", place: "Dindigul" },
  { name: "Mohan R", place: "Dindigul" },
  { name: "Priya V", place: "Dindigul" }
];


    
// function filterByCity(city) {
// const peopleListfiltered = people.filter(function (person) {
// return person.place === city;
// });
// return peopleListfiltered;
// }
 
// const chennaiPeople = filterByCity("Chennai");
// const coimbatorePeople = filterByCity("Coimbatore");
// const trichyPeople = filterByCity("Trichy");
 
// console.log("Chennai",chennaiPeople);
// console.log("Coimbatore",coimbatorePeople);
// console.log("Trichy",trichyPeople);


function filterByAlphabets(letter) {
const peopleListfiltered = people.filter(function (person) {
return  person.name[0] === letter;
});
return peopleListfiltered;
}
 
const alphabetA = filterByAlphabets("A");
const alphabetM = filterByAlphabets("M");
const alphabetD = filterByAlphabets("D");
const alphabetS = filterByAlphabets("S");
const alphabetL = filterByAlphabets("L");
const alphabetR = filterByAlphabets("R");
 
console.log("A",alphabetA);
console.log("M",alphabetM);
console.log("D",alphabetD);
console.log("S",alphabetS);
console.log("L",alphabetL);
console.log("R",alphabetR);






  return (
    <div>
      {/* <h1>Chennai</h1>
    

{chennaiPeople.map(function(values){
  return <h3>{values.name}</h3>
 

})}

 <h1>coimbatore</h1>

{coimbatorePeople.map(function(values){
  return<h4>{values.name}</h4>

})}

<h1>Trichy</h1>

{trichyPeople.map(function(values){
  return<h5>{values.name}</h5>

})} */}

<h2>Alphabet A Letter</h2>
{alphabetA.map(function(letters){
  return <h4>{letters.name}</h4>
})}

<h2>Alphabet M Letter</h2>
{alphabetM.map(function(letters){
  return <h4>{letters.name}</h4>
})}

<h2>Alphabet D Letter</h2>
{alphabetD.map(function(letters){
  return <h4>{letters.name}</h4>
})}

<h2>Alphabet S Letter</h2>
{alphabetS.map(function(letters){
  return <h4>{letters.name}</h4>
})}

<h2>Alphabet L Letter</h2>
{alphabetL.map(function(letters){
  return <h4>{letters.name}</h4>
})}
<h2>Alphabet R Letter</h2>
{alphabetR.map(function(letters){
  return <h4>{letters.name}</h4>
})}
  
      
    </div>
  )
}

export default NewProject
