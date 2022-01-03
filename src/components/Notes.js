import { useState, useEffect } from 'react';
import '../styles/Note.scss';
import Note from './Note';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import axios from '../axios';
function Notes({notesEx,setnotesEx}) {
    // Pagination
 const [slice, useslice] = useState(0);
 const [pages, usepages] = useState([]);
 const changeSlice=(e)=>{
useslice(e);
window.scroll(0,0);
 }
 useEffect(()=>{
const amount = Math.ceil(notesEx.length/6);
const spareArray = []
for(let am=1; am<=amount;  am++){
    spareArray.push(am)
    usepages(spareArray)
    
}
 },[notesEx])


    // REFRESH
    const refresh=()=>{
        window.location.reload(true);
    }
    // DELETE
    async function deleteNote(_id){
       
        await axios.delete('/notes/'+_id);
       setnotesEx(notesEx.filter(note=>note._id!==_id));
       NotificationManager.info('', 'Note is delete');
       
    }
    //EDIT 
    async function editNewNote(_id, title, body, important){
        console.log(title.length, 'color:red');
        
axios.put('/notes/'+_id,{title, body, important});
        // edit front
        
        const copyNotes=[...notesEx];
        const editNote=copyNotes.findIndex(copy=>copy._id===_id);
        const editNewNote = {
            _id: _id,
            title: title,
            body: body,
            important: important,
            like: copyNotes[editNote].like,
            comment: copyNotes[editNote].comment
        };
        copyNotes[editNote]=editNewNote;
        setnotesEx(copyNotes)
        }
        
    
  return (
      
      <>
    
    <NotificationContainer/>
    
    {notesEx.length!==0 ? 
        <TransitionGroup className="content">{notesEx.slice((slice*6), (slice*6)+6).map((note)=>(
            <CSSTransition
            in={true}
            key={note._id}
            timeout={300}
            classNames="show"
            >
            <Note
            title={note.title}
            body={note.body}
            _id={note._id}
            like={note.like}
            comment={note.comment}
            key={note.id}
            imp={note.important}
            onDelete={(_id)=> deleteNote(_id)}
            onEdit={(_id, title, body, important)=>editNewNote(_id, title, body, important)}
            />
            </CSSTransition>
        )) }
        </TransitionGroup> : <div style={{color: "white", textAlign:"center", fontSize:"2em"}}>Please wait!
        <br/>
        or
        <br/>
        <button className="btn btn-secondary" onClick={()=>refresh()}>Refresh Website</button>
        </div>
        
    }
    <div className="pages">
        {pages.map(s=> <button key={s} className="btn btn-primary" style={s-1===slice ? {transform: "scale(1.2)", background: "#1a51e7"} : {transform: "scale(1)"}} onClick={()=>{changeSlice(s-1)}}>{s}</button>)
}
    </div>
    </>
  );
}

export default Notes;
