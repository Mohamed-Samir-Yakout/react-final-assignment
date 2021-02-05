const baseURL = "http://localhost:3000/students"

export const getAllStudents = async()=>{
   let payLoad;
   try {
       let res = await fetch(`${baseURL}`)
       payLoad = await res.json()
   }
   catch(err){
       console.log(err)
   }

   return {
       type : "STUDENT_LIST",
       payLoad
   }
}


export const getStudentDetails = async (sid)=>{
    let payLoad;
    try {
        let res = await fetch(`${baseURL}/${sid}`);
        payLoad = await res.json()
    }
    catch (err){
        console.log(err)
    }

    return {
        type : "STUDENT_DETAILS",
        payLoad
    }
}

export const addNewStudent = async (student)=>{
    let payLoad;
    try{
      let res = await fetch (`${baseURL}`, {method : 'POST', body:{id : student.id, name:student.name, age: student.age, phone: student.phone}})
      payLoad = await res.json()
    }
    catch (err){
       console.log(err)
    }
    return {
        type: "ADD_STUDENT",
        payLoad
    }
}