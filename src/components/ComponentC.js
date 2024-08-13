import { useContext } from 'react'
import {Data,Data1} from '../App'


function ComponentC() {

  const name = useContext(Data)
  const age = useContext(Data1)

  return <>
   <h1>My name is: {name} & i'm {age} years old</h1>

  </>
}

export default ComponentC



// import {Data} from '../App'


// function ComponentC() {
//   return <>
//    <Data.Consumer>
//       {(name) => {
//         return <h1>{`My name is: ${name}`}</h1>
//       }}
//    </Data.Consumer>

//   </>
// }

// export default ComponentC