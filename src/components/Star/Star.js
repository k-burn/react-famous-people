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
        console.log( {starName : event.target.value });
        
    }

    

    render() {
      return (
        <div>
        <form>
            <input onChange={this.handleChangeName} />
            <input onChange={this.handleChangeFact} />
            <input type="submit" onClick={this.consoleLog}/>
        </form>
        <br />
        {this.state.starName} {this.state.starFact}
      </div>
         
      );
    }
  }

  
  export default Star;