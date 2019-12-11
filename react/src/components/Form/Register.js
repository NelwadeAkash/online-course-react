import React, { Component } from 'react'
import {Button,Navbar,FormControl,Radio,
    Form,Row,Col,InputGroupRadio,
    InputGroup,Nav,Image,Dropdown,DropdownButton} from 'react-bootstrap'
import InputElement from './InputElement'
// import { InputGroupRadio } from 'react-bootstrap/InputGroup'




export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullname:'',
             password:'',
             email:'',
             phone:'',


        
                fullnameError:'',
                passwordError:'',
                emailError:'',
                phoneError:'',
                Error:''
             
                      }
              }


    change=(e)=>
    {
        console.log("inside change")
        this.setState({
            [e.targate.name]:e.targate.value
        })
    }
    submitHandler=(e)=>
    {
        console.log("inside submit")
          e.preventDefault();
    }

    onBlur=(event)=>{
        const {name,value}=event.target
        switch (name) 
        {
    
                case 'fullname':
                this.state. fullnameError=(value.length == 0) ? '*Username is required' : ''
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
    



    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler} noValidate>
                    <br/>
                    <h5>Please enter your details!!!</h5>
                    <Row>
                        <Col>
                         <br/>
                             <InputElement  
                              label="FullName"
                              name="fullname" 
                              type={"text"}
                              value={this.state.fullname}
                              onChange={this.change} 
                              onBlur={this.onBlur}
                              />
                            <br/>
                            {/* <InputElement  
                              label="username"
                              name="username" 
                              type={"text"}
                              value={this.state.username}  />
                            <br/> */}
                             <InputElement  
                              label="password"
                              name="password" 
                              type={"password"}
                              value={this.state.password}
                              onChange={this.change} 
                              onBlur={this.onBlur}
                              />
                            <br/>
                             <InputElement  
                              label="Email"
                              name="email" 
                              type={"email"}
                              value={this.state.email}
                              onChange={this.change} 
                              onBlur={this.onBlur}
                              />
                            <br/>
                             <InputElement  
                              label="Phone"
                              name="phone" 
                              type={"number"}
                              value={this.state.phone}
                              onChange={this.change} 
                              onBlur={this.onBlur}
                              />
                            <br/>
                            
                               
                                
                                
                        </Col>
                    </Row>
                            <br/>
                            <Button 
                                    variant="secondary" 
                                    type="submit">
                                    Submit
                            </Button>
                </Form>
                                    
             </div>
        )
    }
}

export default Register
