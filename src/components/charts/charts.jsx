import React, {useState,useEffect} from 'react';
import {fetchDailyData} from './../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './charts.module.css';


const Charts = () => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(()=> {
        const callFetchDailyData = async () => {
            setDailyData(await fetchDailyData());
        }

        // console.log('chart.js')
        
 
        callFetchDailyData();
        

    });


    const lineChart = (
        dailyData.length?
        (<Line
            data={{
                labels:dailyData.map(({date})=>date),
                datasets: [{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:'infected',
                    borderColor:'#3333ff',
                    fill:true,
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:'infected',
                    borderColor:'red',
                    backgroundColor: 'red',
                    fill:true,
                }],
            }}
        />):null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts;