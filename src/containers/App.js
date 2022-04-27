import React,{Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBar from '../components/searchbar';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      // robots: robots,
      searchfield: ''
    };    
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json();
    }).then(user => {
      this.setState({robots:user});
    })
  }

  render() {  

    const {robots,searchfield} = this.state;
    const filteredRobots = robots.filter((robot) =>{
      return (robot.name.toLowerCase().includes(searchfield.toLowerCase()));
    })
    return !robots.length?
      (<h1 className="tc"> Loading...</h1>):
      (
        <div className="tc">
          <h1 className="f2"> RoboFriends</h1>
          <SearchBar searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }
}

export default App;