import Notes from './components/Notes';
import Header from './components/Header';
import NewNote from './components/newNote';
import axios from './axios';
import { useState, useEffect } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function App() {


const [isNewNote, setIsNewNote] = useState(false);
  
const [notesEx, setnotesEx] = useState([
  
  
]);

async function fetchNotes(){
  const res = await axios.get('/notes');
  const notes= res.data;
  
  await setnotesEx(notes.reverse());
  console.log('wait!')
  
  
}

useEffect(() => {
  fetchNotes();
  setInterval(() =>{fetchNotes()}, 400)
},[notesEx.length]);


  const showNewNote=()=>{
    setIsNewNote(true)
}
const hideNewNote=()=>{
  setIsNewNote(false)
}
async function addNewNote(ob){
  // add to BACK
  setIsNewNote(false);
  const goodOB={title: ob.title, body: ob.body, important: ob.important}
  const res = await axios.post(`/notes/`,goodOB);
  const newNote = res.data;
  // add to FRONT
  setnotesEx([newNote,...notesEx]);
  NotificationManager.success('', 'Note is add');


}


  return (
    <>
    <NotificationContainer/>
    <Header  showNewNote={()=>{showNewNote()}}/>
    <Notes notesEx={notesEx} setnotesEx={setnotesEx} />
    {isNewNote ? <NewNote hideNewNote={()=>{hideNewNote()}} addNewNote={(ob)=>{addNewNote(ob)}}/> : null}
    </>
  );
}

export default App;
