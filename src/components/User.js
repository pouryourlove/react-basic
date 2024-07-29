const User = (props) => {
    console.log(props.name)
    return <section>
      <img src={props.img} alt={props.name}/>
      <h1>Name: {props.name}</h1>
      <h3>Hobbies: {props.hobbies}</h3>
      <p>{props.realData.name} {props.realData.location}</p>
    </section>
  }

export default User  
  