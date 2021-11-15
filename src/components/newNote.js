import '../styles/Note.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NewNote.scss'
function NewNote() {
    
  return (
      <div className="backgroundclose">
      <div class="newNote  form-group">
          <h1 className="p-2">New Note</h1>
<label> Title: <br/>
<input/>
</label>
<br/>
<br/>
<label> Contents: <br/>
<input/>
</label>
<br/>
<br/>
<label> 
Highlight 
<input type="checkbox"/>

</label><br/>    <br/>
<h2 className="p-2">Close</h2>
    </div>
    </div>
  );
}

export default NewNote;