import '../styles/Note.scss';
import Note from './Note';
import { useState } from 'react';
import Modal from 'react-modal'

function Notes({notesEx,setnotesEx}) {
    
    const editNote=(id, title, body, important)=>{
        console.log(id)
       
    }
    // const [notes, setnotes] = useState(notesEx);
   const deleteNote=(id)=>{
        console.log(id)
       setnotesEx(notesEx.filter(note=>note.id!==id))
        console.log(notesEx)
    }

    const editNewNote=(id, title, body, important)=>{
        console.log(id, title, body, important);
        const copyNotes=[...notesEx];
        const editNote=copyNotes.findIndex(copy=>copy.id===id);
        const editNewNote = {
            id: id,
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
    {/* <div className="Note p-2">
        <div className="Note__max-width">
            <h2 className="p-1">title</h2>
            <p className="p-1"> 
            Voluptate elit proident dolor elit commodo officia. Nulla nostrud officia mollit aliqua labore. Ipsum incididunt pariatur consectetur aliquip reprehenderit velit tempor dolore culpa elit magna cillum enim veniam. Consectetur et elit aliquip aute mollit culpa amet anim cillum. Exercitation cupidatat commodo commodo nostrud velit officia magna nostrud ipsum ex cillum exercitation. Incididunt veniam ut qui eu veniam. Dolore reprehenderit exercitation duis veniam minim. Sunt ex tempor sit consequat laborum occaecat est fugiat tempor duis laborum.
            </p>
            <button type="button" class="btn btn-primary">Like</button>
            <button type="button" class="btn btn-warning">Comment</button>
            <button type="button" class="btn btn-info">Edit</button>
            <button type="button" class="btn btn-secondary">Delete</button>
        </div>
    </div> */}
    
    {
        notesEx.map((note,index)=>(
            <Note
            title={note.title}
            body={note.body}
            id={note.id}
            like={note.like}
            comment={note.comment}
            key={note.id}
            imp={note.important}
            onDelete={(id)=> deleteNote(id)}
            onEdit={(id, title, body, important)=>editNewNote(id, title, body, important)}
            
            
            />
        ))
    }
    </>
  );
}

export default Notes;
