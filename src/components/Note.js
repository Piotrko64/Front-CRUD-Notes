import '../styles/Note.scss'
import {useState} from 'react';
function Note(props) {
    const [showmax, setshowmax] = useState(false)
  return (
      <>
<div className="Note p-2" style={props.imp ? {borderTop: "3px solid #dc3545", borderBottom: "3px solid #dc3545"} : null}>
        <div className="Note__max-width p-1">
            <h2 className="">{props.title}</h2>
            <p className=""><div style={showmax ? {maxHeight: "none"} : {maxHeight: "100px"}}>{props.body}{!showmax ? '...' : ''}</div>
           <span onClick={()=>{setshowmax(!showmax)}}>{showmax ? 'Hide' : 'Read more'}</span></p>
            <button type="button" className="btn btn-primary">Like</button>
            <button type="button" className="btn btn-warning">Comment</button>
            <button type="button" className="btn btn-info">Edit</button>
            <button type="button" className="btn btn-secondary" onClick={()=>{props.onDelete(props.id)}}>Delete</button>
        </div>
    </div>
        
    
    </>
  );
}

export default Note;
