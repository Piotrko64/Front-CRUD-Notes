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
      id: 999999,
      title: "LOADING...",
      body: "WAIT! I load a data!",
      important: true,
      like: 99,
      comment: ['data','datacomm']
  },
  
]);

async function fetchNotes(){
  const res = await axios.get('http://localhost:3001/api/notes');
  const notes= res.data;
  
  setnotesEx(notes)
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
const addNewNote=(ob)=>{

  setnotesEx([ob,...notesEx]);
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
