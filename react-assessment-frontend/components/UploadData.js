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
          .then(() => console.log('Student Details Posted'))
          .catch(err => {
            console.error(err);
          });
      }
      return (
        <div>
          <Head>
            <title>React Assessment</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
        <form onSubmit={handlePost}>
       <div><input onChange={handleInputChange} type="text" name="name" required/></div>
       <div><input onChange={handleInputChange} type="number" name="classs" required/></div>
       <div><input onChange={handleInputChange} type="text" name="section" required/></div>
       <div><input onChange={handleInputChange} type="checkbox" name="paidStatus" required/></div>
       <div><input onChange={handleInputChange} type="text" name="roll" required/></div>
       <div><input onChange={handleInputChange} type="number" name="attendancePercent" required/></div>
       <div><input onClick={handlePost} type="submit"/></div>
        </form>
        </div>
      )
}

export default UploadData