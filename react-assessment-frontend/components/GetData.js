import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GetData = () => {
    const [data, setData] = useState([]);
    async function getData() {
       try {
            const response = await axios.get('https://assessmenttt-backend.herokuapp.com/v1/student');
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
    <div className='row mx-auto'>
        <div className='col-md-11 col-10 mx-auto'>
        <div className="row mx-auto">
        {data.map((data) => {
            return <div key={data._id} className="col-md-4 col-12 my-2">
            <div className='getdata_card'>
            <p>Name: <span>{data.name}</span></p>
            <p>Class: <span>{data.classs}</span></p>
            <p>Section: <span>{data.section}</span></p>
            <p>Peyment Status: <span>{data.paidStatus ? <>Paid</> : <>Unpaid</>}</span></p>
            <p>Attendance Percent: <span>{data.attendancePercent}</span></p>
            <p>Roll No.: <span>{data.roll}</span></p>
            </div>
            </div>
        })}
        </div>
        </div>
    </div>
  )
}

export default GetData