import React from 'react';
import {Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';



class App extends React.Component {
  
state = {
  data: {},
}

  async componentDidMount(){
    const fetched_data = await fetchData();
    console.log(fetched_data);
    this.setState({data : fetched_data});
  }


  render() {
    const {data} = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Charts />
      </div>
    )
  }
}

export default App