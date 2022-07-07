import { Button, Checkbox, TextField } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";

const UploadData = () => {
    const [postDetails, setPostDetails] =  useState({
        name: null,
        classs: null,
        section: null,
        paidStatus: null,
        roll: null,
        attendancePercent: null,
    })
      const handleInputChange = e => {
        setPostDetails({ ...postDetails, [e.target.name]: e.target.value});
      };
      console.log(postDetails)
    
      const handlePost  = (e) => {
        e.preventDefault();
    
        const { name, classs, section, paidStatus,roll, attendancePercent } = postDetails;
    
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
          .post('http://localhost:8000/v2/student', details)
          .then(() => alert('Student Details Posted'))
          .catch(err => {
            console.error(err);
          });
      }
      return (
        <div>    
        <form onSubmit={handlePost} className="form_upload mx-auto">
        <div><TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Name" variant="filled" onChange={handleInputChange} type="text" name="name" required/></div>
        <div><TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Class" variant="filled" onChange={handleInputChange} type="number" name="classs" required/></div>
        <div><TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Section" variant="filled" onChange={handleInputChange} type="text" name="section" required/></div>
        <div><TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Roll No." variant="filled" onChange={handleInputChange} type="text" name="roll" required/></div>
        <div><TextField id="filled-basic" style={{width: "100%", marginBottom: "15px"}} label="Attendance Percent" variant="filled" onChange={handleInputChange} type="number" name="attendancePercent" required/></div>
        <div><div>Has the Student paid the amount? <Checkbox onChange={handleInputChange} type="checkbox" name="paidStatus" defaultChecked required/></div></div>
       <div><Button onClick={handlePost} className='mx-2 text-dark' style={{borderColor: 'rgba(0,0,0,0.5)', borderRadius: "20px", marginTop: "10px", width: "30%", padding: "6px"}} variant="outlined">Submit</Button></div>
        </form>
        </div>
      )
}

export default UploadData