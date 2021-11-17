import '../styles/Note.scss';
import Note from './Note';

import axios from 'axios';
function Notes({notesEx,setnotesEx}) {
    
    // const [notes, setnotes] = useState(notesEx);
    async function deleteNote(_id){
        
        
       setnotesEx(notesEx.filter(note=>note._id!==_id))
        
       const res = await axios.delete('http://localhost:3001/api/notes/'+_id);
       const notes= res.data;
    }

    async function editNewNote(_id, title, body, important){
        // edit back
axios.put('http://localhost:3001/api/notes/'+_id,{title, body, important});
        // edit front
        console.log(_id, title, body, important);
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
            _id={note._id}
            like={note.like}
            comment={note.comment}
            key={note.id}
            imp={note.important}
            onDelete={(_id)=> deleteNote(_id)}
            onEdit={(_id, title, body, important)=>editNewNote(_id, title, body, important)}
            
            
            />
        ))
    }
    </>
  );
}

export default Notes;
