import {Button} from 'reactstrap'
const Student = ({stdentInfo, history})=> {

    const goToStudentDetails = ()=>{
        history.push(`/students/${stdentInfo.id}`)
    }
    return <div className="alert alert-dark d-flex justify-content-between">
        <h4 className="align-self-center">{stdentInfo.name}</h4> 
        <Button color="primary" size="lg" 
           onClick={goToStudentDetails}
        >Details</Button>
    </div>
}

export default Student;