import React from 'react';
import axios from 'axios';
import './test.css';

class Myform extends React.Component {

  state = {
    name: "name",
    age : 0
  }

  handleChange1 (event) {
    this.setState({ name: this.target.value});
  }
  handleChange2 (event) {
    this.setState({age: this.target.value})
  }
  
  handleSubmit(event) {
    // 여기에 api 적어 
    const serverApi = "https://localhost:8000";
    const good = axios.get(
      serverApi, {
        params: {
          name : this.state.name,
          age : this.state.age
        }
      })
      .then(function (res) {
        console.log("gg");
      });
    event.preventDefault();
  }

  render() {
    return(
      <form className="hhh" onSubmit={this.handleSubmit}>
        <input text="text" name="name" value={this.state.name} onChange={this.handleChange1}/>
        <input text="text" name="age" value={this.state.age} onChange={this.handleChange2} />
        <input type="submit" value="submit" />
      </form>
    )
  }
}


export default Myform;