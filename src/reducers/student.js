export const students = (state={},action)=>{
    switch (action.type){
        case 'STUDENT_LIST' :{
         return {...state, list:action.payLoad}
        }
        case 'STUDENT_DETAILS' :{
            return {...state, details: action.payLoad}
        }
 
    }

    return state
}