import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{

  state = {
    nome: ''
  }

  moodificarNome = (event) => {
      this.setState({
        nome: event.target.value
      })
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.nome} onChange={this.moodificarNome} />
        <h1>{this.state.nome}</h1>
      </div>
    )
  }
}




function App2() {
  return (
    <div>
      Hello World
    </div>
  );
}

export default App;
