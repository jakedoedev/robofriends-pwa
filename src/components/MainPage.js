import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';

import ErrorBoundry from '../components/ErrorBoundry';
import './MainPage.css';

class MainPage extends Component{

  // Reduxed
  // constructor(){
  //   super();
  //   this.state = {
  //     robots: [],
  //     // searchField: '' // Reduxed
  //   }
  // }

  // Reduxed
  // onSearchChange = (event) => {
  //   this.setState({ searchField: event.target.value});
  // }

  componentDidMount(){
    this.props.onRequestRobots();

    // Reduxed
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users =>  this.setState({ robots: users}));
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;

    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  }

  render(){
    const { onSearchChange, isPending } = this.props;

    if(isPending){
      return <h1 className="tc"> Loading </h1>;
    }

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filterRobots()} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
