import React from 'react'
const Wellcome = () => {
   return (  <h1>Wellcome to JSX syntax</h1>);


   //Without JSX, we use React.createElement("tag", {additional attributes like id and classNames as, id: "idName" className = "className"}, "content");

   //React.createElement("h1", null, "Wellcome to JSX syntax");
}
 
export default Wellcome;

//Using JSX makes the code more easier