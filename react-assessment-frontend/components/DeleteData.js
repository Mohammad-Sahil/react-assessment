import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const DeleteData = () => {
    const [findData, setFindData] = useState({});
    const [inputData, setInputData] = useState();

    const handleFindOne = async (e) => {
       try {
            const response = await axios.get(`https://assessmenttt-backend.herokuapp.com/v1/student/${inputData}`);
            setFindData(response.data);
            console.log(findData);
       } catch (error) {
        console.log(error)
       }
    }


    const deleteData = async () => {
      console.log(findData.roll)
        axios
          .delete(`https://assessmenttt-backend.herokuapp.com/v2/student/${findData.roll}`)
          .then(() => alert('Student Detail deleted'))
          .catch(err => {
            console.error(err);
          });
          setFindData({});
    }

  return (
    <div style={{display: "grid"}}>
       <div className="form_upload form_delete mx-auto">
       <TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Enter Roll No., you want to delete" variant="filled" onChange={(e) => setInputData(e.target.value)} type="text" name="name" required/>
        <Button onClick={handleFindOne} className='mx-2 text-dark' style={{borderColor: 'rgba(0,0,0,0.5)', borderRadius: "20px", marginTop: "10px", width: "50%", padding: "6px"}} variant="outlined">Submit</Button>
       </div>
      { findData.name && <div className="getdata_card deletedata_card" key={findData._id}>
            <p>Name: <span>{findData.name}</span></p>
            <p>Class: <span>{findData.classs}</span></p>
            <p>Section: <span>{findData.section}</span></p>
            <p>Peyment Status: <span>{findData.paidStatus ? <>Fee is Paid</> : <>Fee is not paid</>}</span></p>
            <p>Attendance Percent: <span>{findData.attendancePercent}</span></p>
            <p>Roll No: <span>{findData.roll}</span></p>
            <Button onClick={deleteData} className='mx-2 text-dark' style={{borderColor: 'rgba(0,0,0,0.5)', borderRadius: "20px", marginTop: "20px", width: "100%", padding: "6px"}} variant="outlined">Delete Data</Button>
            </div>}
        
    </div>
  )
}

export default DeleteData