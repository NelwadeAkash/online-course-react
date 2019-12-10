import React, { Component } from 'react'
import {Button,Navbar,FormControl,Form,Row,Col,InputGroup,Nav,Image,Dropdown,DropdownButton} from 'react-bootstrap'
import InputElement from './InputElement'




export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullname:'',
             username:'',
             password:'',
             email:'',
             phone:''
                      }
              }
    change=(e)=>
    {
        console.log("inside change")
        this.setState({
            [e.targate.name]:e.targate.value
        })
    }





    render() {
        return (
            <div>
                <Form>
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
                              />
                            <br/>
                            <InputElement  
                              label="username"
                              name="username" 
                              type={"text"}
                              value={this.state.username}  />
                            <br/>
                             <InputElement  
                              label="password"
                              name="password" 
                              type={"password"}
                              value={this.state.password}
                              />
                            <br/>
                             <InputElement  
                              label="Email"
                              name="email" 
                              type={"email"}
                              value={this.state.email}
                              />
                            <br/>
                             <InputElement  
                              label="Phone"
                              name="phone" 
                              type={"number"}
                              value={this.state.phone}
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
