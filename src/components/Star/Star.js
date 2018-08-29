import React, { Component } from 'react';

class Star extends Component {
    constructor() {
        
        super();
        
        this.state = { starName: '', starFact: '' };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeFact = this.handleChangeFact.bind(this);
    }

    handleChangeName = (event) => {
        this.setState({ starName: event.target.value });
    }
    
    handleChangeFact = (event) => {
        this.setState({ starFact: event.target.value });
    }

    consoleLog =(event) =>{
        console.log('hello', this.state.starName);
        
    }

    

    render() {
      return (
        <div>
            <input onChange={this.handleChangeName} />
            <input onChange={this.handleChangeFact} />
            <button onClick={this.consoleLog}>Submit</button>/>
        <br />
        {this.state.starName} {this.state.starFact}
      </div>
         
      );
    }
  }

  
  export default Star;