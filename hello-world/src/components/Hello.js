import React from "react";

const Hello = () => {
   // return(<div>
    //    <h1> hello wellcome</h1>
    //    </div>)   
    
    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello, Abhinav!'))
  };

  export default Hello;