import React from "react";

//function Greet() {
 // return (
 //   <div>
 //     <h1>Hello, Abhinav!</h1>
  //  </div>
 // );
//}

 const Greet = (pros) => {
    console.log(pros);
 return (
   <div>
     <h1>Hello, {pros.name}!</h1>
     <h2>Hero Name: {pros.heroname}</h2>
        {pros.children}
        {/* {props.children} can be used to access children props */}
        {/* <h1>Hello, {props.name}!</h1> */}
        {/* <h2>Hero Name: {props.heroname}</h2> */}
   </div>
 )
};

export default Greet;