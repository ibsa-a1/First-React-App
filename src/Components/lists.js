import React from 'react'

function Programming() {
    const prog = ['C++', 'Java', 'Python', 'JavaScript']
  return (
    <div>

      {/* <h1>{prog[0]}</h1>
      <h1>{prog[1]}</h1>
      <h1>{prog[1]}</h1>
      <h1>{prog[3]}</h1> */}     {/*//We can use this method but it will be difficult to use 
                              when the number of member in the array is too many */}




      {/* {
        prog.map((name) => <h1>{name}</h1>)
      } */}
      {/*This method renders the lists but Each child in a list should have a unique "key" prop.
      It causes an error in our console */}




      {/* {
        prog.map((name) => <h1 key={name}>{name}</h1>)
      } */}
      {
        /*Here we use the name of the list members as their key */
      }
      {/*This method renders the lists and there is no error in the console. But, if we have 2 same member in our Array,
      it will cause an error in our console, because the key is not unique since 2 members have the same name */}

      {
        prog.map((name, index) => <h1 key={index}>{name}</h1>)
      }
      {/*This method is the preferred method and shows no error in our console */}
      
    </div>
  )
}

export default Programming
