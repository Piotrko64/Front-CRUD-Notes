import Notes from './components/Notes';
import Header from './components/Header';
import NewNote from './components/newNote';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {


const [isNewNote, setIsNewNote] = useState(false);
  
const [notesEx, setnotesEx] = useState([
  {
      
  },
  
]);

async function fetchNotes(){
  const res = await axios.get('http://localhost:3001/api/notes');
  const notes= res.data;
  
  await setnotesEx(notes.reverse());
  
}
useEffect(() => {
  fetchNotes();
  
});
  const showNewNote=()=>{
    setIsNewNote(true)
}
const hideNewNote=()=>{
  setIsNewNote(false)
}
async function addNewNote(ob){
  // add to BACK
  console.log(ob);
  const goodOB={title: ob.title, body: ob.title, important: ob.important}
  const res = await axios.post(`http://localhost:3001/api/notes/`,goodOB);
  const newNote = res.data;
  // add to FRONT
  setnotesEx([newNote,...notesEx]);
  setIsNewNote(false)

}


  return (
    <>
    <Header  showNewNote={()=>{showNewNote()}}/>
    <Notes notesEx={notesEx} setnotesEx={setnotesEx} />
    {isNewNote ? <NewNote hideNewNote={()=>{hideNewNote()}} addNewNote={(ob)=>{addNewNote(ob)}}/> : null}
    </>
  );
}

export default App;
