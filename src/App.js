import User from "./components/User";

function App(){
    
  return (
  <>
    <User
      img="https://media.istockphoto.com/id/1285465107/ko/%EC%82%AC%EC%A7%84/%EB%85%B9%EC%83%89-%EB%92%B7%EB%A7%88%EB%8B%B9-%EC%9E%94%EB%94%94%EB%B0%AD%EC%97%90-%EC%95%89%EC%95%84-%EC%9E%88%EB%8A%94-%EC%B6%A9%EC%84%B1%EC%8A%A4%EB%9F%AC%EC%9A%B4-%EA%B3%A8%EB%93%A0-%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84-%EA%B0%9C%EA%B0%80-%EC%B9%B4%EB%A9%94%EB%9D%BC%EB%A5%BC-%EB%B0%94%EB%9D%BC%EB%B3%B4%EA%B3%A0-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%B5%9C%EA%B3%A0-%ED%92%88%EC%A7%88%EC%9D%98-%EA%B0%9C-%ED%92%88%EC%A2%85-%ED%98%88%ED%86%B5-%ED%91%9C%EB%B3%B8%EC%9D%80-%EC%8A%A4%EB%A7%88%ED%8A%B8-%EA%B7%80%EC%97%AC%EC%9B%80-%EA%B3%A0%EA%B7%80%ED%95%9C-%EC%95%84%EB%A6%84%EB%8B%A4%EC%9B%80%EC%9D%84-%EB%B3%B4%EC%97%AC%EC%A4%8D%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=JvkH_HEF6S2m5SqgfqTIIlVXxXZ9Eo0ByX9wPCLqtuo="
      name = "zzong"
      age={18}
      hobbies={["Coding","Reading","Sleeping"]}
      realData = {{name: "Alex", location:"USA"}}

    />
  </>
  )

}

export default App;





// import { Component } from "react";
// class App extends Component{
//  To show content on the screen 
//  render(){
//     return <h1>Hello Lingling</h1>
//   }
// }





//components
//components are independent and reusable bits of code. They serve the same purpose as Javascript functions, but work in isolation and return HTML

//JSX
//JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

//Exprsesions in JS
//with jsx you can write expressions inside curly braces. The expression can be a react variable, 
//or property, or any other valid javascript expression.
//jsx will execute the expression and return the result

//Lists
//in react, you will render lists with some type of loop. the javascript map()array 
//method is generally the preferred method

//props/properties
//props are arguments passed into react components
//props are passed to components via html attributes