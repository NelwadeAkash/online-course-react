import React, { Component } from 'react'
import InputElement from './InputElement'
import Button from '@material-ui/core/Button';
import user from './Data.json'
import './Element.css'

export class Login extends Component {
constructor(props) 
{
    super(props)

    this.state = {

         username:"",
         password:"",

         usernameError:'',
         passwordError:'',
         error:''
    }

    // this.change = this.change.bind(this)

}


submitHandler= (event) =>{

    event.preventDefault();
    console.log("inside submit")
    
    let state = this.state
    let valid = false
    let error = state.error
    
    user.map( (data) => {
        //console.log(data)
        if(state.username == data.username && state.password == data.password) {
            valid=true
        }
    })

    if(!valid){
        error = '*Enter valid credentials'
    }
    else
    {
        //this.props.history.push('/home')
        window.location.href = '/home'
    }

    this.setState({
        error : error
    })

    console.log(valid)
}

change=(e)=>{
    console.log("change called")
    this.setState({
      [e.target.name]:e.target.value
    })
  }

// onSubmit = (e) =>{
//     e.preventDefault()
//     console.log(this.state)
//   }
onBlur=(event)=>{
    const {name,value}=event.target
    switch (name) 
    {

            case 'username':
            this.state.usernameError=(value.length == 0) ? '*Username is required' : ''
            break;

            case 'password':
            this.state.passwordError=(value.length == 0) ? "*password is required":""   
            break;

            default:
            break;

    }
    
                this.setState
                ({
                [name]:value
                })
                
}


// onBlur=(event) =>{

//     const {name,value} = event.target
//     let error = this.state

//     switch (name) {

//         case 'username':
//             error.usernameError = (value.length == 0) ? 'Username is required' : ''
//             break;

//         case 'password' :
//             error.passwordError = (value.length == 0) ? 'Password is required' : ''
//             break;
    
//         default:
//             break;
//     }

//     this.setState({error,[name]:value})

// }


    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler} noValidate >
                   <br/>
                   <div>
                       <p>WelCome to Login</p>
                   {/* <LabelElement name="UserName"></LabelElement> */}
                    <InputElement label="username"
                     name="username" 
                     type={"email"} 
                     value={this.state.username}
                     onChange={this.change} 
                     onBlur={this.onBlur}
                       
                     />
                   </div> <h6>{this.state.usernameError}</h6><br/>
                   
                   <div>
                    <InputElement label="password" 
                    name="password"
                    type={"password"}  
                    value={this.state.password}
                    onChange={this.change}
                    onBlur={this.onBlur}
                    />
                    </div>
                    <h6>{this.state.passwordError}</h6>
                    <br/>
                    <Button variant="outlined" 
                    type="submit"
                    color="primary"
                    >
                    Login </Button>
                    <h6>{this.state.error}</h6>
                </form>
            </div>
        )
    }
}

export default Login
