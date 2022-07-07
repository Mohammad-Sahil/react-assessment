import axios from 'axios';
import { useState } from 'react';
import UploadData from '../components/UploadData';
import GetData from '../components/GetData';
import Layout from '../components/Layout';
import Button from '@mui/material/Button';
import EditData from '../components/EditData';
import DeleteData from '../components/DeleteData';

export default function Home() {
  const [navigation, setNevigation] = useState('get');
  return (
      <Layout>
        {/* <UploadData/> */}
        <div className="nav_button my-4 d-flex justify-content-center align-items-center">
          <Button onClick={() => setNevigation('get')} className='mx-2 text-dark' style={{borderColor: 'rgba(0,0,0,0.5)', borderRadius: "20px"}} variant="outlined">Students</Button>
          <Button onClick={() => setNevigation('post')} className='mx-2 text-dark' style={{borderColor: 'rgba(0,0,0,0.5)', borderRadius: "20px"}} variant="outlined">Upload</Button>
          <Button onClick={() => setNevigation('delete')} className='mx-2 text-dark' style={{borderColor: 'rgba(0,0,0,0.5)', borderRadius: "20px"}} variant="outlined">Delete</Button>
          <Button onClick={() => setNevigation('patch')} className='mx-2 text-dark' style={{borderColor: 'rgba(0,0,0,0.5)', borderRadius: "20px"}} variant="outlined">Edit</Button>
        </div>
        {navigation === 'get' && <GetData/>}
        {navigation === 'post' && <UploadData/>}
        {navigation === 'delete' && <DeleteData/>}
        {navigation === 'patch' && <EditData/>}
        {/* <GetData/> */}
      </Layout>
  )
}
