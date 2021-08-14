import './App.css';
import React, { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  state = {
    monsters : []
  }

  componentDidMount() {
    fetch('https://book-set-task.herokuapp.com/api/list_books')
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
      monster.genre.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
         <h1> Book Store </h1>
        <SearchBox changed={this.inputChangeHandler} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
