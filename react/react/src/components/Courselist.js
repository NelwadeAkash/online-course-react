import React, { Component } from 'react'
import  Courselists from  './Courselist.json'
//import user from './Data.json'
import {Table} from 'react-bootstrap'

export class Courselist extends Component {
         
constructor(props) {
    super(props)

    this.state = {
        courses:Courselists
      
   }
       
}




    render() {
        return (
            <div>
                <br/>
                <br/>
               <h3 align="left">Courselist :</h3>
               <br/>
               <br/>
               <Table bordered  >
                   <thead>
                       <tr> 
                   
                        <th>Course Id </th>
                        <th>Course Name</th>
                        <th>Mentor Name</th>
                     
                        <th>Course Price</th>
                        <th>Course rating</th>
                        <th>Buy Now</th>
                       
                       </tr>
                   </thead>
                   <tbody>
                       {this.state.courses.map((course) =>{
                           return(
                            <tr>
                            <td>{course.courseId}</td>
                            <td><img src={course.courseImg} width="100px" height="50px"/></td>
                            <td>{course.Mentor}</td>
                           
                            <td>{course.coursePrice }</td>
                            <td>{course.courseRating}</td>
                            <td><a href="/">Buy_Now</a></td>
                            </tr>
                            
                        
                           )
                       }
                       )}
                   </tbody>
               </Table>
            </div>
        )
    }
}

export default Courselist
