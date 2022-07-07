import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import { useState } from 'react';
import UploadData from '../components/UploadData';
import GetData from '../components/GetData';
import Layout from '../components/layout';

export default function Home() {

  return (
    <div>
      <Layout>
        {/* <UploadData/> */}
        <GetData/>
      </Layout>
    </div>
  )
}
