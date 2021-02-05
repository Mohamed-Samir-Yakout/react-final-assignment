import Student from '../components/student'
import {connect} from 'react-redux'
import   {getAllStudents}   from '../actions'

const studentList = ({stList, history , getAllStudents})=>{

    // let sttudentList = getAllStudents()
    // console.log(sttudentList)
    if (stList){
        return <div className="alert">
            {stList.map((student)=>{
                return <Student key={student.id} studentInfo={student} history={history} />
            })}
        </div>
    }

    return <div>
        <h1>Search</h1>
    </div>
}

const mapStateToProps = (state)=>{
    return {
        list : state.students.list
    }
}

export default connect(mapStateToProps,null)(studentList)