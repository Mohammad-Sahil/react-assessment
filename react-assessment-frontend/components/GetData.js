import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GetData = () => {
    const [data, setData] = useState([]);
    async function getData() {
       try {
            const response = await axios.get('http://localhost:8000/v1/student');
            setData(response.data);
            console.log(response.data);
       } catch (error) {
        console.log(error)
       }
    }
    useEffect(() => {
        getData()
    },[])
  return (
    <div style={{display: "grid"}}>
        
        {data.map((data) => {
            return <div style={{padding: "20px",margin: "10px",background: "#eee", width: "300px"}}>
            <div>Name: {data.name}</div>
            <div>Class: {data.classs}</div>
            <div>Section: {data.section}</div>
            <div>Peyment Status: {data.paidStatus ? <>Fee is Paid</> : <>Fee is not paid</>}</div>
            <div>Attendance Percent: {data.attendancePercent}</div>
            <div>Roll No.: {data.roll}</div>
            </div>
        })}
    
    </div>
  )
}

export default GetData