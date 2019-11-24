import React from 'react';
import s from './Profileinfo.module.css';
import PreLoader from '../../Command/preLoader.js';
class  ProfileStatus extends React.Component {

  state ={
    editMode: false,
    status: this.props.status
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
    });
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e) => {
    this.setState({
      status:  e.currentTarget.value
    });
  }
/*we call the function when we writ the  text in the input*/
 componentDidUpdate(prevProps, prevState) {
   if ( prevProps.status !== prevState.status) {
     this.setState({
       status: this.props.status
     });
 }
 }

    render(){
    return (
      <div>
      {!this.state.editMode &&
        <div>
          <span onDoubleClick = { this.activateEdit }> {this.props.status || "---"}</span>
        </div>
      }
      {this.state.editMode &&
        <div>
          <input onChange ={ this.onStatusChange} autoFocus={true} onBlur = { this.deActivateEdit } value ={this.props.status}/>
        </div>
        }
        </div>
      );
    }
}
export default ProfileStatus;
