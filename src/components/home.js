import StudentList   from '../container/studentList'
import Search from '../container/search'
import Students from '../container/cStudents'
const Home = (history)=>{
    return <div>
        {/* <h1 className="text-white bg-dark text-center">ٍStudents List</h1> */}


          <Students history={history}/>
        {/* <Search/>

        <StudentList history={history} /> */}
    </div>
}

export default Home;