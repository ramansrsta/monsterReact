import './App.css';
import React, { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  state = {
    monsters : []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users => this.setState({
      monsters : users,
      searchField : ''
    }))
  }
 
  inputChangeHandler = event => {
    this.setState({ searchField: event.target.value })
  }

  render () {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
         <h1> Monster Rolodex </h1>
        <SearchBox changed={this.inputChangeHandler} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
