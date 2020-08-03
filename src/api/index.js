import axios from 'axios';

export const fetchData = async (country) => {
    try{
        let changeableUrl = 'https://covid19.mathdro.id/api';
        if(country){
            changeableUrl = `https://covid19.mathdro.id/api/countries/${country}`;
        }
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);
        // console.log(response);
        return {confirmed,recovered,deaths,lastUpdate};
    }
    catch(error){
        console.log(error);
    }
}   

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get('https://covid19.mathdro.id/api/daily');
        // console.log(data);
        const modfiedData = data.map(dailyData=>({
            confirmed:dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modfiedData;
    }
    catch(error){
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try{
        const {data:{countries}} = await axios.get('https://covid19.mathdro.id/api/countries');
        // console.log(response);
        return countries.map(country=>country.name);
    }
    catch(error){
        console.log(error);
    }
}