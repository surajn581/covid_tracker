import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    // console.log('api');
    // console.log(`${url}/daily`);
    try {
        const {data} = await axios.get(`${url}/daily`);
        return data.map((item)=>({
            confirmed:item.confirmed.total,
            deaths:item.deaths.total,
            date: item.reportDate,
        }));
    } catch (error) {
        console.log(error);
    }
}