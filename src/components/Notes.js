import '../styles/Note.scss'
function Notes() {
    const notes = [
        {
            id: '444',
            title: "API!",
            body: "body2"
        },
        {
            id: '444',
            title: "API!",
            body: "body2"
        },
    ]
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
        notes.map((note,index)=>(
<div className="Note p-2">
        <div className="Note__max-width">
            <h2 className="p-1">{note.title}</h2>
            <p className="p-1"> 
           {note.body}</p>
            <button type="button" class="btn btn-primary">Like</button>
            <button type="button" class="btn btn-warning">Comment</button>
            <button type="button" class="btn btn-info">Edit</button>
            <button type="button" class="btn btn-secondary">Delete</button>
        </div>
    </div>
        ))
    }
    </>
  );
}

export default Notes;
