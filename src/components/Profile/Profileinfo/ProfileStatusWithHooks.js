import React, {useState} from 'react';
import s from './Profileinfo.module.css';
import PreLoader from '../../Command/preLoader.js';

const  ProfileStatusWithHooks  =(props) => {

  let [editMode , setEditMode] = useState(false);
    let [status , setEditStatus] = useState(props.status);

const activateEditMode= () => {
      setEditMode(true);
}
 const deActivateEdit =() =>   {

     setEditMode(false);
     props.updateStatus(status);
   }
  const  onStatusChange = (e) => {
     setEditStatus( e.currentTarget.value);
   }


    return (
      <div>
      { !editMode &&
        <div>
          <span   onDoubleClick ={activateEditMode}   > {props.status || "---"}</span>
        </div>
      }
      { editMode &&
        <div>
          <input onBlur ={deActivateEdit} onChange={onStatusChange}  value={status} autoFocus={true} />
        </div>
        }
        </div>
      );
    }


export default ProfileStatusWithHooks;
