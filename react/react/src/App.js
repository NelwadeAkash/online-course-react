import React  from 'react';
 //import logo from './logo.svg';
 import './App.css';
//  import 'bootstrap/dist/css/bootstrap.min.css';
 import Input from './components/Form/InputElement';
import Comment from './components/Form/TextElement';
import  { Login } from './components/Form/Login';
import SelectElement from './components/Form/SelectElement';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Form/Home';
import {Button,Navbar,FormControl,Form,InputGroup,Nav,Image,Dropdown,DropdownButton} from 'react-bootstrap'
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import RouterElement from './components/Form/Router';
import Register from './components/Form/Register';
import RadioElement from './components/Form/RadioElement';
import TextElement from './components/Form/TextElement';
//import TestEmail from './components/TestEmail';
import Courselist from './components/Courselist';

//import login from './Login';

function App() {

  return (
    <div className="App">
 
            <i class="fa fa-creative-commons"></i>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href=""><strong>Code-Course</strong></Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                           Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Destop</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Database</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Android</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Nav.Link href="/about">About-us</Nav.Link>
                    <Nav.Link href="/Courselist">Course-list</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    <Button variant="outline-info" href="/login">Login</Button>
                    <Button variant="outline-info" href="/Register">Register</Button>
                    </Form>
                </Navbar>

           
     {/* <SelectElement></SelectElement> */}
      {/* <Login/> */}
      {/* <Comment></Comment> */}
       {/* <Input></Input> */}
       {/* <Home></Home> */}
       {/* <footer class="page-footer font-small mdb-color lighten-3 pt-4" style="background-color:lightblue;">
         </footer> */}
         <RouterElement/>
        {/* <Courselist></Courselist> */}
         {/* <TextElement></TextElement> */}
         {/* <Register></Register> */}
         {/* <RadioElement data={["male","female","s"]} /> */}
    </div>
  );
}
export default App;