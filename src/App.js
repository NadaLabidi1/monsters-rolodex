import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}) );
  }
  handleChange = (e) => {
    this.setState({searchField : e.target.value});
  }

  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsterds = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1> Monsters rolodex </h1>
          <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
          />
        <CardList monsters = {filteredMonsterds}></CardList>
      
    </div>
    );
  }
}

export default App;
