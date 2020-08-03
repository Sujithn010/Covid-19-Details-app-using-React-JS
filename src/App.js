import React,{Component} from 'react';
import classes from './App.module.css';
import {Cards,Chart,CountryPicker} from './components';
import {fetchData} from './api'; 
import covid from './images/covid.png';

class App extends Component{

  state =  {
    data: {},
    country: ''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({data:fetchedData})
  }

  handleCountryChange = async (country) => {
    console.log(country);
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({data:fetchedData,country:country});
  }

  render(){
    return (
      <div className={classes.container}>
        <img className={classes.image} src={covid} alt="COVID-19" />
        <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    );
  }
}

export default App;
