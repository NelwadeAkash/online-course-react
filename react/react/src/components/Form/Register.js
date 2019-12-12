import React, { Component } from 'react'
import {Button,Navbar,FormControl,Radio,
    Form,Row,Col,InputGroupRadio,
    InputGroup,Nav,Image,Dropdown,DropdownButton} from 'react-bootstrap'
import InputElement from './InputElement'
import { object } from 'prop-types'
// import { InputGroupRadio } from 'react-bootstrap/InputGroup'




export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

            values:
            {
             fullname:'',    
             password:'',
             email:'',
             phone:''
            },

            error:
            {     
            fullname:'',
            password:'',
            email:'',
            phone:''
           
                    }
              }
            }


    change=(e)=>{
        // console.log("change called")
        const{name , value} = e.target

        this.setState({
          values:{
              ...this.state.values,
              [name]:value
          },
        })
      }






    submitHandler=(e)=>
    {
        console.log("inside submit")
          e.preventDefault();
    }

    onBlur=(event)=>{
        const {name,value}=event.target
        let errors=this.state.error

        switch (name) 
        {
            
 
                case 'fullname':
                errors.fullname = (value.length == 0) ? '*Username is required' : ''
                break;
    
                case 'password':
                errors.password = (value.length  == 0) ? "*password is required":''   
                break;
    
                case 'email':
                errors.email = (value.length ==0 ) ? 'Please Enter Your E-mail Id': 
                errors.email = (value.includes("@")) ? '': "*Enter valid Email"  
                break;

                case 'phone':
                errors.phone = (value.length == 0) ? '*Phone is required' : 
                errors.phone =  value.match(/^[0-9]{10}$/)  ? '' : 'Enter valid phone Number'
                break;



                default:
                break;
    
        }
         this.setState ({
            errors,[name]:value
                    })
                    
    }
        

         

     validateForm()
     {
         var v=0
         var e=0
         var valid=false
         var errors=this.state.error
         var values=this.state.values

         Object.values(errors).forEach(error => 
            {
             if(error.length != 0 )
             {
                 e++
             }
            })

            console.log("errors"+e)


            Object.values(values).forEach(values => 
                {
                if(values.length != 0)
                {
                   v++
                }
            })


            console.log("values"+v)


            if(v==4 && e==0)
            {
                valid=true
            }


            return valid
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
                              value={this.state.values.fullname}
                              onChange={this.change} 
                              onBlur={this.onBlur}
                              />
                                  <h6>{this.state.error.fullname}</h6>
                            <br/>
                           
                             <InputElement  
                              label="password"
                              name="password" 
                              type={"password"}
                              value={this.state.values.password}
                              onChange={this.change} 
                              onBlur={this.onBlur}
                              />
                               <h6>{this.state.error.password}</h6>
                            <br/>
                             <InputElement  
                              label="Email"
                              name="email" 
                              type={"email"}
                              value={this.state.values.email}
                              onChange={this.change} 
                              onBlur={this.onBlur}
                              />
                             <h6> {this.state.error.email}</h6>
                            <br/>
                             <InputElement  
                              label="Phone"
                              name="phone" 
                              type={"number"}
                              value={this.state.phone}
                              onChange={this.change} 
                              onBlur={this.onBlur}
                              />
                              <h6>{this.state.error.phone}</h6>
                            <br/>     
                        </Col>
                    </Row>
                            <br/>
                            <Button disabled={!this.validateForm()}
                                    variant="primary" 
                                    type="submit">
                                    Submit
                            </Button>
                </Form>
                                    
             </div>
        )
    }
}

export default Register
