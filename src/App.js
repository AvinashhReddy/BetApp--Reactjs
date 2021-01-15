import axios from 'axios'
import './App.css';

import {useEffect, useState} from 'react'
import {Table ,Button,Card} from 'react-bootstrap'


function App() {

 var [users,setUsers]=useState()
  var [usersPlaying, setUsersPlaying]=useState([])
  var [flag, setFlag]=useState(localStorage.getItem('flags'))
  var [bet,setbet]=useState(getRndInteger)
  
  useEffect(async()=>{
    await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json")
    .then(res=>setUsers(res.data))
   
  },[])
  

 if(!users){
 return <h1>Loading...</h1>
 }
 function getRndInteger(min, max) {
   min=1
   max=9
  return Math.floor(Math.random() * (max - min) ) + min;
}
 const addUsers=(index)=>{
   if(document.getElementById(index).checked){
     let a=[...usersPlaying]
     a.push(index)
 setUsersPlaying(a)


   }
   else{
    let a=[...usersPlaying]
    let i=a.indexOf(index)
    a.splice(i,1)
    setUsersPlaying(a)
   }
   
  
 }
 const playGame=(event)=>{
   event.preventDefault()
   if(usersPlaying.length!=9){
     alert("Make sure You have selected exactly 9 players")
   }
   else{
     setFlag(false)
     localStorage.setItem('flags',false)
   }
 }
 const refresh=()=>{
   setbet(getRndInteger)
 }
 const goback=()=>{
   setFlag(true)
   setUsersPlaying([])
 }


  return (
    <div>{ flag && <>
     <div style={{textAlign:'center',paddingTop:'5vw'}}> <Button variant="secondary" size="lg" onClick={(event)=>playGame(event)}><h3>START</h3></Button></div>
      <div style={{display:'inline-block',verticalAlign:'top',paddingTop:'4vw',paddingLeft:'2vw',width:'10vw'}}>
        <h5 className="text-muted">Playing 9</h5>
        {usersPlaying.map((i)=>{
          return (<p>{users[i].Name}</p>)
        })}
        
        
      </div>
    <div style={{paddingLeft:'4vw',display:'inline-block',verticalAlign:'top',paddingRight:'1vw',paddingTop:'4vw',width:'80vw'}}>
      <Table striped bordered hover variant="dark" size="sm">
  <thead>
    <tr>
      <th>SELECT</th>
      <th>PLAYER NAME</th>
      <th>BET</th>
      <th>PRICE</th>
      <th>WINNINGS</th>
      <th>FATE</th>
      
    </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>{
      return (
      <tr>
      <td>  <input type="checkbox" id={index} onChange={()=>{addUsers(index)}} /></td>
      <td>{user.Name}</td>
      <td>{user.Bet}</td>
      <td>{user.Price}</td>
      {users[index].Bet==bet ? <td>{parseInt(users[index].Price)*2}</td>:<td>0</td>}
      {users[index].Bet==bet ? <td>Won</td>:<td>Lose</td>}
    </tr>
      )

    })}
    
   
  </tbody>
</Table>
    </div>
    </>
}
{!flag &&
<div>
 {usersPlaying.map( (index)=>{
   return (
     <div style={{display:'inline-block' ,padding:'2vw'}}>
    <Card border="secondary" style={{ width: '14rem',height:'9rem' }} bg="dark" text="light">
    <Card.Header>{users[index].Name}</Card.Header>
    <Card.Body>
      <h5>Bet: {users[index].Bet}</h5>
      {users[index].Bet==bet ? <h2>WON</h2>:<h2>LOSE</h2>}
      
    </Card.Body>
  </Card>
  </div>
   )
 }
 )
   
 }
 <div style={{display:'inline-block',paddingLeft:'8vw',verticalAlign:'top'}}><h1 style={{fontSize:'150px'}}><b>{bet}</b></h1> </div>
<div  style={{display:'inline-block',paddingLeft:'10vw',}}> <Button variant="dark" onClick={refresh}>REFRESH</Button></div>
<div  style={{display:'inline-block',paddingLeft:'10vw',}}> <Button variant="dark" onClick={goback}>GO BACK</Button></div>
    </div>


}

    </div>
  );

}

export default App;
