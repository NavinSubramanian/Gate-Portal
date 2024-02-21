import { Link } from 'react-router-dom'
import './App.css'

export default function Signup () {
    return (
        <div className='signupContainer'>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
            <button className="close-button"><Link to='/' style={{color:'white',textDecoration:'none'}}>X</Link></button>
            <h1 style={{margin:'10px 0'}}>Lets Register <br/>Account</h1>
            <p style={{margin:'10px 0'}}>Hello user , you have<br/>a greatful journey</p>
            <input typeof='text' placeholder='Name' className='name'></input>
            <input typeof='text' placeholder='Lastname' className='lastname'></input>
            <input typeof='text' placeholder='Register number' className='num'></input>                  
            <input typeof='text' placeholder='Email' className='username'></input>
            <input typeof='text' placeholder='Password' className='password'></input>
            <button className='loginButton'>Sign up</button>
            <a href='/' style={{textDecoration:'none',color:'black',marginTop:10}}>
            Already  have an account ? <b><Link to='/login'>Login</Link></b>  
            </a>
            </form >
        </div >
    )
}