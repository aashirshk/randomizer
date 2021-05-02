import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component{
  constructor(){
    super();

    this.state = {
        users: [],
        searchField: '',
        results: 10,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch(`https://randomuser.me/api/?results=${this.state.results}`)
    .then(response => response.json())
    .then(users => this.setState({users: users.results}))
  }


  handleChange(e){
      this.setState({searchField: e.target.value})
  }

  changeUserResult = (e) => {
    let result = Number(e.target.value) === 0 ? 10 : Number(e.target.value)
    fetch(`https://randomuser.me/api/?results=${result}`)
    .then(response => response.json())
    .then(users => this.setState({users: users.results}))
  }

  render(){
    const {users, searchField} = this.state;
    const filteredUsers = users.filter(user => {
      return user.name.first.toLowerCase().includes(searchField.toLowerCase()) ||
             user.name.last.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
             user.name.title.toLowerCase().includes(searchField.toLocaleLowerCase()) 
    })

    return(
      <div className="App">
        <h1>Randomizers</h1>
        <SearchBox placeholder="Search by name" 
                   handleChange={this.handleChange}
                   changeUserResult={this.changeUserResult}
                   placeholder1="Increase users"/>
        <CardList users={filteredUsers} results={this.state.resultsField}/>
      </div>
    )
  }
}

export default App;
