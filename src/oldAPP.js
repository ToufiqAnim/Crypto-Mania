/* import logo from './logo.svg'; */
import './App.css';
import { useEffect, useState } from 'react';
 
 const container = {  backgroundColor: 'lightyellow',
 color:'cornflowerblue',
 padding: '20px 60px',
 borderRadius: '10px',
 margin: '30px',
 border: '3px solid lightblue'} 

function App() {
  const Products = [
    {name: 'Apple', price: '40000'},
    {name: 'Apple', price: '40000'},
    {name: 'Apple', price: '40000'}
    
  ]
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      {
        Products.map(product => <Names name = {product.name} price = {product.price}></Names>)
        
      }
    </div>
  )
}
function LoadUsers(){
  const [users, setUsers] = useState([])

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  } , [])
  return  (
    <div >
      <h1>User Loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return(
    <div style={container}>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}
function Names(props){
   const [points, setPoints] = useState(1)
  const MyStyle ={
    backgroundColor:'cornflowerblue',
    color:'white',
    border : '2px solid gray',
    borderRadius : '10px',
    padding:'20px',
    margin:'20px',
}



const addBtn=()=>{
  setPoints(points*5);
}
  return (
    <div className = 'brand' style={MyStyle}>
      <h1>Brand: {props.name}</h1>
      <p>Price: {props.price}, Points: {points}</p>
      <button onClick={addBtn} style={{padding:'8px 32px',border:'none', borderRadius:"5px", background:'aqua'}}>Add</button>
    </div>
  )
}
export default App;


/* const products = [
  {name: 'Mobile', price: '20000'},
  {name: 'Laptop', price: '50000'},
  {name: 'Smart Watch', price: '10000'},
  {name: 'KeyBoard', price: '3000'},
  {name: 'Mouse', price: '1200'}
] */

/* {
  products.map(product => <Product name={product.name} price={product.price}></Product>)

} */


/* function Product(props){
  return(
    <div style = {container}>
      <h1>Name: {props.name}</h1>
      <h3>Price: {props.price}</h3>
    </div>
  )
} */

/* import logo from './logo.svg'; */
// import './App.css';
// import { useEffect, useState } from 'react';
/* 
const container = {  backgroundColor: 'lightyellow',
color:'cornflowerblue',
padding: '20px 60px',
borderRadius: '10px',
margin: '30px',
border: '3px solid lightblue'} */
// function App() {

//   return (
//     <div className="App">
//        {/* <Counter></Counter> */}
//        <ExternalUsers></ExternalUsers>
//     </div>
//   )
// }

// function ExternalUsers(){
//   const [users, setUsers] = useState([]);
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => setUsers(data))
//   }, [])
//   return(
//     <div>
//       <h1>External Users</h1>
//       {
//         users.map(user => <User name={user.name} email={user.email}></User>)
//       }
//     </div>
//   )
// }
// function User(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Email: {props.email}</p>
//     </div>
//   )
// }
// function Counter(){
//   const [count, setCount] = useState(0);
//   console.log(count,setCount)
//   const handleIncrease = ()=> setCount(count+1);
//   const handleDecrease = ()=> setCount(count-1);
//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick = {handleIncrease}>Increase</button>
//       <button onClick = {handleDecrease}>Decrease</button>
//     </div>
//   )
// }

// export default App;