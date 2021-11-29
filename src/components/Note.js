import '../styles/Note.scss'
import {useState} from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import axios from '../axios'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'bootstrap/dist/css/bootstrap.min.css';
function Note(props) {
    const [showmax] = useState(false);
    const [like, setlike] = useState(false);
    const [edit, setedit] = useState(false);
    let frontLike = props.like
    async function updateLike(_id){
       
      let equal;
      
       if(!like){
      equal='plus';
      }
      else{
        equal='minus';
       }
       
              
      setlike(!like);
      await axios.put('/notes/like/'+_id+"/"+equal);
      if(equal==='plus'){
frontLike=frontLike+1
      }
      else{
        frontLike=frontLike-1
      }
       
      
  }
    
    
    const [editTitle, seteditTitle] = useState(props.title);
    const funEditTitle=(e)=>{
seteditTitle(e.target.value)
    }
    const [editBody, seteditBody] = useState(props.body);
    const funEditBody=(e)=>{
      seteditBody(e.target.value)
          }
    const [editImp, seteditImp] = useState(props.imp);
    const funEditImp=(e)=>{
      console.log(editImp)
      seteditImp(e.target.checked)
          }
    
  return (
      <>
      <NotificationContainer/>
      <div className="Note p-2" style={props.imp ? {borderTop: "3px solid #dc3545", borderBottom: "3px solid #dc3545"} : null}>
      <div className="Note__max-width p-1">
      {edit ? <>
      <label> Title:  <br/>
<input type="text" className="inputEdit" defaultValue={props.title} onChange={(e)=>funEditTitle(e)}/>
</label>
<br/>
<br/>
<label> Content:  <br/>
<textarea className="inputEdit" defaultValue={props.body} onChange={(e)=>funEditBody(e)}/>
</label>
<br/>
<br/>
<label> 
Important 
<input type="checkbox"  checked={props.important} onChange={(e)=>funEditImp(e)}/> </label> <br/> <br/><button className="btn btn-success" onClick={(_id, title, body, important)=>{ 
  if(editTitle.length>5 && editBody.length>10){
    props.onEdit(props._id, editTitle, editBody, editImp); setedit(false)
  }
  else if(editTitle.length<=5 && editBody.length<=10){
    NotificationManager.error('are too short', 'Title and Content');
  }
  else if(editTitle.length<=5){
    NotificationManager.warning('is too short', 'Title');
  }
  else if(editBody.length<=10){
    NotificationManager.warning('is too short', 'Content');
  }
  else{
    NotificationManager.succes('Everything is ok', 'Yeah!');
  }
  
}}>Save</button><button className="btn btn-warning" onClick={()=>setedit(false)}>Cancel</button></>
 : <><h2 className="">{props.title}</h2>
          <p className=""><div style={showmax ? {maxHeight: "none"} : null}>{props.body}
          {/* {!showmax && props.body.length>120 ? '...' : ''} */}
          </div>
         {/* <span onClick={()=>{setshowmax(!showmax)}}>{showmax ? 'Hide' : 'Read all'}</span>*/}
         </p> 
          <button type="button" className="btn btn-primary Note__like"  onClick={()=>{updateLike(props._id);}}>Like {like ? <AiFillHeart/> : <AiOutlineHeart/>}{like ? frontLike+1 : frontLike}</button>
          {/* <button type="button" className="btn btn-warning" >Comment</button> */}
          <button type="button" className="btn btn-info" onClick={()=>{
            setedit(true)
          }}>Edit</button>
          <button type="button" className="btn btn-secondary" onClick={()=>{props.onDelete(props._id)}}>Delete</button></>}
      </div>
  </div>

        
    
    </>
  );
}

export default Note;
