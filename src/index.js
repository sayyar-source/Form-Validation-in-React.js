import React from 'react';
import ReactDOM from 'react-dom';
const initialState={
  name:'',
  email:'',
  password:'',
  nameError:'',
  emailError:'',
  passwordError:'',
  select:"",
  area:"",
  isGoing:true
}
class NameForm extends React.Component {
  constructor(props){
    super(props)
    this.state=initialState;
      

    
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(ev)
  
  {
    const isCheckbox=ev.target.type==="checkbox";
    
    this.setState({
      [ev.target.name]:isCheckbox
      ? ev.target.checked
      : ev.target.value
    });
   

  }
  validate=()=>{
    let  nameErrorStr='';
    let emailErrorStr='';
    let passwordErrorStr='';
    if(!this.state.email.includes('@'))
    {
      emailErrorStr="invalid email address!"
    }
    if(emailErrorStr)
    {
      this.setState({emailError:emailErrorStr});
      return false;
    }
    if(this.state.password.length<6)
    {
      passwordErrorStr="you have to enter at least 6 digit "
      
    }
    if(passwordErrorStr)
    {
      this.setState({passwordError:passwordErrorStr})
      return false;
    }
    return true;
  }
  handleSubmit(ev)
  {
const isValid=this.validate();
if(isValid)
{
  console.log(this.state);
}


ev.preventDefault()
  }
render(){
  
  return(
    <div style={{margin:'50px'}}>
   <form onSubmit={this.handleSubmit}>
  <label>
    Name:
    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
  </label> 
  <label>
    <div style={{fontSize:12,color:"red"}}>
      {this.state.nameError}
    </div>
    Email:
    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
  </label> 
  <div style={{fontSize:12,color:"red"}}>
      {this.state.emailError}
    </div>
  <label>
    Password:
    <input type="password" value={this.state.password} name="password" onChange={this.handleChange} />
  </label> 
  <div style={{fontSize:12,color:"red"}}>
      {this.state.passwordError}
    </div>
  <br></br>
  <br></br>
  <label>
    Select:
  <select name="select" value={this.state.value} onChange={this.handleChange}>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
</label>
<br></br>
  <br></br>
  <label>
  text area:
  <textarea name='area' style={{height:100}} value={this.state.value} onChange={this.handleChange}>
  Hello there, this is some text in a text area
</textarea>
</label>
<br></br>
<br></br>
<label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleChange} />
        </label>
<br></br>
<br></br>

   <input type="submit" value="Submit" style={{marginLeft:'55px'}} />
</form>
    </div>
 
  )
}
}
ReactDOM.render(
  <NameForm />,
  document.getElementById("root")
)