import React from 'react';
import './logic.css'

class Login extends React.Component{
constructor(props){
    super(props)
    this.state={
        username: "",
        password: ""
    }
    this.changeValues=this.changeValues.bind(this)
    this.submitForm=this.submitForm.bind(this)
}
changeValues(event){
    this.setState({
        [event.target.name]: event.target.value})
    
 //   console.log("Username is "+this.state.username)
   // console.log("Password is"+this.state.password)
}
submitForm(event){
        event.preventDefault()
        console.log(this.state)
}


    render(){
        return(
        <div className="container">
            <h1>Welcome</h1>
            <div id="div-id">
            <form onSubmit={this.submitForm}>
            Username <input type="text" placeholder="Enter Username Here" name="username" className="user-details" onChange={this.changeValues} />
             <br/>
             Password <input type="password" placeholder="Enter Password Here" name="password" className="user-details" onChange={this.changeValues} /> 
             <br/>
            <button type='submit'>Submit</button>
            </form>
             <br/>
            <p>You don't have account with us?</p>
            <a href="https://www.test.com"> Sign Up</a> for free.
            </div>
          </div>)
    }
    }


    export default Login