import Image from 'next/image'
'use client'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import EChartsChart from './components/Echart'


export default function Home() {

  let [data,setData]=useState<any>([])
  // console.log('prices',data['prices'])

  const getData=async()=>{
    let resp=await fetch(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=365&interval=daily `)
    let data=await resp.json()
    setData(data.prices)
    }

  useEffect(()=>{
  getData()
  },[])
  return (
    <main className={styles.main}>
      <h1>Welcome to Charts Data</h1>
      <EChartsChart data={data} />
    </main>
  )
}

// import React from 'react';
// // import EChartsChart from '../components/EChartsChart';

// const fetchDataFromAPI = async () => {
//   // Fetch data from your API
//   const response = await fetch('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=365&interval=daily');
//   const data = await response.json();
//   return data;
// };

// const Home = ({ data }:any) => {
//   console.log(data)
//   return (
//     <div>
//       <h1>Dynamic ECharts Chart</h1>
//       {/* <EChartsChart data={data} /> */}
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   const data = await fetchDataFromAPI();
//   return {
//     props: {
//       data,
//     },
//   };
// }

// export default Home;