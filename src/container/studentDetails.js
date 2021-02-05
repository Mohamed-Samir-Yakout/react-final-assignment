import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getStudentDetails, clearStudentDetails}  from '../actions/index'
import { Navbar,
    NavbarToggler,
    NavbarBrand,
    NavbarText } from 'reactstrap'


const StudentDetails = ({getStudentDetails, clearStudentDetails ,details , match})=>{

    const id = match.params.id
    useEffect(()=>{
        
        getStudentDetails(id)
        return ()=>{
            clearStudentDetails()
        }
    },[])

    const renderStudentDetails = (details)=>{
        if (details && details.id){
            return (
                <div className="justify-content-between">
                    <h1>{details.name}</h1>
                    <h4>{details.age}</h4>
                    <h4>{details.phone}</h4>

                </div>
            )
        }
        return ""
    }
    return (
        <div>

               <Navbar color="dark" className="justify-content-between" light expand="md">
                  <NavbarBrand href='/'  className="text-white">Home</NavbarBrand>
        
       
                 <NavbarText className="text-white">Student Page</NavbarText>
        
                </Navbar>
         <div className="alert alert-danger">
            {renderStudentDetails(details)}
        </div>
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
        details : state.students.details
    }
}


const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators ({getStudentDetails, clearStudentDetails}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)