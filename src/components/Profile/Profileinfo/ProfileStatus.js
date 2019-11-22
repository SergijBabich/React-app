import React from 'react';
import s from './Profileinfo.module.css';
import PreLoader from '../../Command/preLoader.js';
class  ProfileStatus extends React.Component {
  state ={
    editMode: false
  }
  activateEdit = () =>   {
    
    //this is a react metod for rewriting
    this.setState( {
      editMode: true
    })
  }
  deActivateEdit =() =>   {
    //this is a react metod for rewriting
    this.setState( {
      editMode: false
    })
  }
  render(){
    return (
      <div>
      {!this.state.editMode &&
        <div>
          <span onDoubleClick = { this.activateEdit }> {this.props.status}</span>
        </div>
      }
      {this.state.editMode &&
        <div>
          <input autoFocus={true} onBlur = { this.deActivateEdit } value ={this.props.status}/>
        </div>
        }
        </div>
      );
    }
}
export default ProfileStatus;
