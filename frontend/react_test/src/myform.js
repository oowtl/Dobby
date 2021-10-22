// import React, {useEffect} from 'react';
// import axios from 'axios';
// import './test.css';

// class Myform extends React.Component {

//   const [state, setState] = useEffect(0)

//   handleChange1 (event) {
//     this.setState({ name: this.target.value});
//   }
//   handleChange2 (event) {
//     this.setState({age: this.target.value})
//   }

//   handleSubmit(event) {
//     // 여기에 api 적어
//     const serverApi = "https://localhost:8000";
//     const good = axios.get(
//       serverApi, {
//         params: {
//           name : this.state.name,
//           age : this.state.age
//         }
//       })
//       .then(function (res) {
//         console.log("gg");
//       });
//     event.preventDefault();
//   }

//   render() {
//     return(
//       <form className="hhh" onSubmit={this.handleSubmit}>
//         <input text="text" name="name" value={this.state.name} onChange={this.handleChange1}/>
//         <input text="text" name="age" value={this.state.age} onChange={this.handleChange2} />
//         <input type="submit" value="submit" />
//       </form>
//     )
//   }
// }

// export default Myform;

import React, { useState } from 'react'
import axios from 'axios'

function Myform() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')

  const handleSubmit = () => {
    console.log(age, name, gender)
    axios
      .post('api', {
        age: age,
        name: name,
        gender: gender,
      })
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <form className="hhh">
      name
      <input
        text="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      age
      <input text="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <br />
      gender
      <input
        text="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit} type="button">
        submit
      </button>
    </form>
  )
}

export default Myform
