import { Component } from "react";
import {Button} from 'reactstrap'
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Student from '../components/student'
import '../index.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input, FormText,
    NavbarText
  } from 'reactstrap';
  import { useRef } from 'react'

class students extends Component {

    

    constructor (){
        super()
        this.state= {
            modal : false,
            togle : false,
            
            age : 0,
            name : '',
            id : 0,
            phone : 0
            
        }
        console.log(this.state.age)
    }
   
    
    render(){
        console.log(this.props.history)
        return (
          <div className="p-3">
              <Navbar color="dark" className="justify-content-between" light expand="md">
                  <NavbarBrand  className="text-white">Home</NavbarBrand>
        
       
                 <NavbarText className="text-white"><Button color="primary" className="btn btn-primary"
                    onClick={
                        ()=>{
                            this.setState({modal: true})
                        }
                    }
                 >Add Student</Button></NavbarText>
        
                </Navbar>
              
               <Button color="Primary" className="btn btn-primary mb-5 mt-3" onClick={()=>{
                   this.props.getAllStudents()
               }
               }>Get Student List</Button>

               <div className="row">
               
               <div className="col-5">
                   {this.renderStudent(this.props)}
               </div>
               <img src='download.jpg' className='col-6 img'></img> 
                   
               </div>


               <Modal isOpen={this.state.modal}>
                   <ModalHeader >Add Student</ModalHeader>
                    <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="stID">id</Label>
                            <Input disabled ref={this.id} type="number" name="stId" id="stID" placeholder="Student ID" 
                            onChange={(el)=>{
                                this.setState({id : el.target.value})
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="stName">name</Label>
                            <Input ref={this.name} type="text" name="stName" id="stName" placeholder="Student Name"
                            onChange={(el)=>{
                                this.setState({name : el.target.value})
                            }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="stAge">Age</Label>
                            <Input ref={this.age} type="number" name="stAge" id="stAge" placeholder="Student Age" 
                            onChange={(el)=>{
                                this.setState({age : el.target.value})
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="stPhone">Phone</Label>
                            <Input ref={this.phone} type="number" name="stPhone" id="stPhone" placeholder="Student Phone" 
                            onChange={(el)=>{
                                this.setState({phone : el.target.value})
                            }}/>
                        </FormGroup>
                    </Form>
                    </ModalBody>
                  <ModalFooter>
                      <Button color="primary" onClick={()=>{
                          this.setState({modal: false})

                        this.props.addNewStudent({id: this.state.id, name: this.state.name, age: this.state.age, phone: this.state.phone})
                        }
                          } >Add</Button>
                      <Button color="secondary"  onClick={()=>{this.setState({modal: false})}}>Cancel</Button>
                   </ModalFooter>
                </Modal>
               
           </div>
        )
        
    }

    renderStudent ({list}){
        if(list){
            return list.map((student)=>{
                return(
                       <div key={student.id} className=" justify-content-center border-bottom alert alert-danger p-2 ">
                           {/* <h3>{student.name}</h3>
                          <Button color="success" className="btn btn-success">Details</Button>  */}
                          <Student key={student.id} stdentInfo={student} history={this.props.history}/>
                        </div>
                    
                )
            })
                
            
        }return (
            <p>Click to get Student List</p>
        )
    }


}

// const students = ({list,history})=>{
    
//     if(list){
//         return list.map((student)=>{
//             return (
//                 <div key={student.id} className=" justify-content-center border-bottom alert alert-danger p-2 ">
//                 {/* <h3>{student.name}</h3>
//                <Button color="success" className="btn btn-success">Details</Button>  */}
//                <Student key={student.id} stdentInfo={student} history={history}/>
//              </div>
//             )
//         })
//     }
// console.log(list)
//     return <p>Students</p>
// }

const mapStateToProps = (state)=>{
    return {
        list : state.students.list
    }
}

export default connect(mapStateToProps,actions)(students)