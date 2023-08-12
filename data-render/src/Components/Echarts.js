import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';


const Echart = ({ data=[] }) => {
    const [option,setOption]=useState({})
    // console.log('echart',data)

useEffect(()=>{
    const chartData = data.map(entry => ({
        name: new Date(entry[0]).toLocaleDateString(),
        value: entry[1],
      }));
    
      setOption({
        title: {
          text: 'Price Data',
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: chartData.map(entry => entry.name),
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            type: 'line',
            data: chartData.map(entry => entry.value),
            areaStyle: {}
          },
        ],
      });
},[data])

  return <ReactECharts option={option}/>;

};

export default Echart;