import '../styles/Note.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NewNote.scss';
import {useState} from 'react'
function NewNote({hideNewNote, addNewNote}) {
    let [title, settitle] = useState('');
    let [content, setcontent] = useState('');
    let [check, setcheck] = useState(false);
    let [validation, setvalidation] = useState(false);
  return (
    <>
      <div className="backgroundclose" onClick={()=>{hideNewNote()}}></div>
      <div className="newNote  form-group">
          <h1 className="p-2">New Note</h1>
<label> Title: <br/>
<input type="text" onChange={(e)=>{settitle(e.target.value)}} value={title}/>
</label>
<br/>
<br/>
<label> Content: <br/>
<textarea onChange={(e)=>setcontent(e.target.value)} value={content}/>
</label>
<br/>
<br/>
<label> 
Important
<input type="checkbox" onClick={()=>{setcheck(!check); console.log(check)}} value={check}/>

</label><br/>{validation ? <span className="spanValidation">title and content must not be too short</span> : null }<br/>
<button className="btn btn-warning newNote__add" onClick={()=>{ if(title.length>5 && content.length>10){addNewNote({
  
  title: title,
  body: content,
  important: check,
  like: 0,
  comment: [],
})}
else{
  setvalidation(true)
}
}}><h2>Add</h2></button>
<h2 className="p-2" onClick={()=>{hideNewNote()}}>Close</h2>
    </div>
    </>
  );
}

export default NewNote;