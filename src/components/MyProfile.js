import React, {Component} from 'react';
import './myProfile.less';
import '../style/myProfile.css'

class MyProfile extends Component {
  state = {
    name: 'Your name',
    gender: '',
    description: 'description',
    tick: 'false',
  }

  handleOnChange = (field,event) => {
      this.setState({
        [field]: event.target.value,
      })                    
  }

  handleOncheck = (event) => {
    this.setState({
      tick: event.target.checked,
    })    
  }

  handleOnSubmit = (event) => {
    console.log(event);
    event.preventDefault();
  }

  render() {    
    return (
      <form id='myprofile' onSubmit ={this.handleOnSubmit}>
          <h3>
            <label htmlFor="name">Name</label>
          </h3>

          <input id = 'name' type = 'text' value = {this.state.name} onChange={() => this.handleOnChange("name",event)} id= 'name'/>

          <h3>
            <label htmlFor="gender">Gender</label>
          </h3>
          <select name= 'gender' value= {this.state.gender} onChange= {() => this.handleOnChange("gender",event)} id = 'gender'>
            <option>male</option>
            <option>female</option>
          </select>

          <p>
            <h3>
              Description      
            </h3>
          </p>
          <textarea id='description'name='description' value={this.state.description} onChange={() => this.handleOnChange("description",event)}/>

          <div>
            <input type = 'checkbox' value={this.state.checked} onChange={this.handleOncheck} id='tick'/>
            I hava read the terms of conduct
          </div>

          <div>
            <input type = 'submit' id='submit' value = 'Submit'
              disabled= {!this.state.name || !this.state.description || !this.state.tick} />
          </div>
      </form>
    );
  }
}

export default MyProfile;
