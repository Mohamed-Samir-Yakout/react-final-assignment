import { useRef } from 'react'
import { getStudentDetails } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Input , Button} from 'reactstrap'

const Search = ({getStudentDetails}) => {
    const stName = useRef()
    const searchByName = ()=>{
        getStudentDetails(stName.current.value)
    }

    return <div className="col text-center">
    <div className="form-group">
    <Input type="textarea" name="text" id="exampleText" ref={stName} />
    </div>
    
    <Button color="primary" size="lg" className="btn btn-dark w-25" 
            onClick={searchByName}>Large Button</Button>
        {/* <Button className="btn btn-dark w-25" type="button" value="search"
            onClick={searchByName} /> */}
    
   </div>
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails }, dispatch)
}
export default connect(null, mapDispatchToProps)(Search)