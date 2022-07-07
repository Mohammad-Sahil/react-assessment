import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const DeleteData = () => {
    const [findData, setFindData] = useState([]);
    const [inputData, setInputData] = useState(null);
    
    async function handleFindOne() {
       try {
            const response = await axios.get(`http://localhost:8000/v1/student/${inputData}`);
            setFindData(response.data);
            console.log(findData);
       } catch (error) {
        console.log(error)
       }
    }
    const deleteData = async () => {}
    // useEffect(() => {
    //   handleFindOne()
    // },[])
  return (
    <div style={{display: "grid"}}>
     <form onSubmit={handleFindOne} className="form_upload">
       <TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Enter Roll No., you want to delete" variant="filled" onChange={(e) => setInputData(e.target.value)} type="text" name="name" required/>
        <Button onClick={handleFindOne} className='mx-2 text-dark' style={{borderColor: 'rgba(0,0,0,0.5)', borderRadius: "20px", marginTop: "10px", width: "30%", padding: "6px"}} variant="outlined">Submit</Button>
        </form>
        {findData?.length > 0 && <>
          {findData?.map((data) => {
            return <div key={data._id} style={{padding: "20px",margin: "10px",background: "#eee", width: "300px"}}>
            <div>Name: {data.name}</div>
            <div>Class: {data.classs}</div>
            <div>Section: {data.section}</div>
            <div>Peyment Status: {data.paidStatus ? <>Fee is Paid</> : <>Fee is not paid</>}</div>
            <div>Attendance Percent: {data.attendancePercent}</div>
            <div>Roll No.: {data.roll}</div>
            <Button onClick={deleteData} className='mx-2 text-dark' style={{borderColor: 'rgba(0,0,0,0.5)', borderRadius: "20px", marginTop: "10px", width: "30%", padding: "6px"}} variant="outlined">Delete Data</Button>
            </div>
        })}
        </>}
    </div>
  )
}

export default DeleteData