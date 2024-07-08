'use client'

import ChartApex from "react-apexcharts";


const Chart = ({data}) => {

    const options = {
        chart: {
            id: "basic-bar",
            type: 'line',
            zoom: {
                enabled: false
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Product Trends by Month',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'],
                  opacity: 0.5
                },
              },
    
        }
    }

    const xaxis = {
        categories: data.map(({date}) => {
            const newDate = new Date(date*1000);
            const month = newDate.getMonth();
            const day = newDate.getDay();
            const year = newDate.getYear();
            return `${day}/${month}/${year}`
        })
    };
    
    const series = [{
        name: "Valor",
        data: data.map(({close}) => close)
    }]

    options.xaxis = xaxis;

    return (
        <div>
            <h1>Chart</h1>
            <ChartApex
                options={options}
                series={series}
            />
        </div>
    )
}

export default Chart;