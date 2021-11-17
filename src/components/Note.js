import '../styles/Note.scss'
import {useState} from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
function Note(props) {
    const [showmax, setshowmax] = useState(false);
    const [edit, setedit] = useState(false);
    const [like, setlike] = useState(false);
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
      <><div className="Note p-2" style={props.imp ? {borderTop: "3px solid #dc3545", borderBottom: "3px solid #dc3545"} : null}>
      <div className="Note__max-width p-1">
      {edit ? <>
      <label> Title:  <br/>
<input type="text" className="inputEdit" defaultValue={editTitle} onChange={(e)=>funEditTitle(e)}/>
</label>
<br/>
<br/>
<label> Content:  <br/>
<textarea className="inputEdit" defaultValue={editBody} onChange={(e)=>funEditBody(e)}/>
</label>
<br/>
<br/>
<label> 
Important 
<input type="checkbox"  checked={editImp} onChange={(e)=>funEditImp(e)}/> </label> <br/> <br/><button className="btn btn-success" onClick={(_id, title, body, important)=>{props.onEdit(props._id, editTitle, editBody, editImp); setedit(false)}}>Save</button><button className="btn btn-warning" onClick={()=>setedit(false)}>Cancel</button></>
 : <><h2 className="">{props.title}</h2>
          <p className=""><div style={showmax ? {maxHeight: "none"} : null}>{props.body}
          {/* {!showmax && props.body.length>120 ? '...' : ''} */}
          </div>
         {/* <span onClick={()=>{setshowmax(!showmax)}}>{showmax ? 'Hide' : 'Read all'}</span>*/}
         </p> 
          <button type="button" className="btn btn-primary Note__like"  onClick={()=>{setlike(!like)}}>Like {like ? <AiFillHeart/> : <AiOutlineHeart/>}{like ? props.like+1 : props.like}</button>
          <button type="button" className="btn btn-warning" >Comment</button>
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
