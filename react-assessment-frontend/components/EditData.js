import { Button, Checkbox, TextField } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";

const EditData = () => {
    const [inputData, setInputData] = useState();
    const [rollData, setRollData] = useState(null);
    const [findData, setFindData] =  useState({
        name: null,
        classs: null,
        section: null,
        paidStatus: null,
        roll: null,
        attendancePercent: null,
    })
    const handleFindOne = async (e) => {
        try {
             const response = await axios.get(`https://assessmenttt-backend.herokuapp.com/v1/student/${inputData}`);
             setFindData(response.data);
             setRollData(response.data.roll);
              if(!response.data.name){
                alert('Roll not found')
            }
             console.log(findData);
        } catch (error) {
         console.log(error)
         alert('Roll not found')
        }
     }

      const handleInputChange = e => {
        setFindData({ ...findData, [e.target.name]: e.target.value});
      };
      console.log(findData)
    
      const handlePatch  = (e) => {
        e.preventDefault();
    
        const { name, classs, section, paidStatus,roll, attendancePercent } = findData;
    
        const details = {
          name,
          classs: Number(classs),
          section,
          paidStatus: Boolean(paidStatus),
          attendancePercent: Number(attendancePercent),
          roll,
        };
        console.log(details)
        axios
          .patch(`https://assessmenttt-backend.herokuapp.com/v2/student/${rollData}`, details)
          .then(() => alert('Student Details Updated'))
          .catch(err => {
            console.error(err)
            alert('Roll no. should be unique')
          });
      }
      return (
        <div>
         <div className="form_upload form_delete mx-auto">
             <TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Enter Roll No, you want to Update" variant="filled" onChange={(e) => setInputData(e.target.value)} type="text" name="name" required/>
            <Button onClick={handleFindOne} className='mx-2 text-dark' style={{borderColor: 'rgba(0,0,0,0.5)', borderRadius: "20px", marginTop: "10px", width: "50%", padding: "6px"}} variant="outlined">Submit</Button>
       </div>
    
      {findData.name && <>
        <form onSubmit={handlePatch} className="mt-5 form_upload mx-auto">
        <div><TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Name" variant="filled" onChange={handleInputChange} value={findData.name} type="text" name="name" required/></div>
        <div><TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Class" variant="filled" onChange={handleInputChange} value={findData.classs} type="number" name="classs" required/></div>
        <div><TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Section" variant="filled" onChange={handleInputChange} value={findData.section} type="text" name="section" required/></div>
        <div><TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Roll No." variant="filled" onChange={handleInputChange} value={findData.roll} type="text" name="roll" required/></div>
        <div><TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Attendance Percent" variant="filled" onChange={handleInputChange} value={findData.attendancePercent} type="number" name="attendancePercent" required/></div>
        <div><div>Has the Student paid the amount? {findData?.paidStatus ? <><Checkbox onChange={handleInputChange} type="checkbox" name="paidStatus" defaultChecked required/></> : <Checkbox onChange={handleInputChange} type="checkbox" name="paidStatus" required/>}</div></div>
       <div><Button onClick={handlePatch} className='mx-2 text-dark' style={{borderColor: 'rgba(0,0,0,0.5)', borderRadius: "20px", marginTop: "10px", width: "50%", padding: "6px"}} variant="outlined">Update Data</Button></div>
        </form>
      </>}
        </div>
      )
}

export default EditData