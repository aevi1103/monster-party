import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({monsters: data}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='search mosters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }

}

export default App;
