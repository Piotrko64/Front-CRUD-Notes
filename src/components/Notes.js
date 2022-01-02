import '../styles/Note.scss';
import Note from './Note';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


import axios from '../axios';
function Notes({notesEx,setnotesEx}) {
    
    const refresh=()=>{
        window.location.reload(true);
    }
    async function deleteNote(_id){
       
        await axios.delete('/notes/'+_id);
       setnotesEx(notesEx.filter(note=>note._id!==_id));
       NotificationManager.info('', 'Note is delete');
       
    }

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
        console.log(copyNotes)
        setnotesEx(copyNotes)
        }

    

    


  return (
      
      <>
    
    <NotificationContainer/>
    
    { notesEx.length!==0 ? 
        notesEx.map((note,index)=>(
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
        )) : <div style={{color: "white", textAlign:"center", fontSize:"2em"}}>Please wait!
        <br/>
        or
        <br/>
        <button className="btn btn-secondary" onClick={()=>refresh()}>Refresh Website</button>
        </div>
    }
    </>
  );
}

export default Notes;
