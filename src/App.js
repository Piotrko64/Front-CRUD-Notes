import Notes from './components/Notes';
import Header from './components/Header';
import NewNote from './components/newNote';
import axios from './axios';
import { CSSTransition } from 'react-transition-group'
import { useState, useEffect } from 'react';

import './App.css';

function App() {


const [isNewNote, setIsNewNote] = useState(false);
  
const [notesEx, setnotesEx] = useState([
  
  
]);

async function fetchNotes(){
  const res = await axios.get('/notes');
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
  const goodOB={title: ob.title, body: ob.body, important: ob.important, like: ob.like}
  const res = await axios.post(`/notes/`,goodOB);
  const newNote = res.data;
  // add to FRONT
  setnotesEx([newNote,...notesEx]);
  setIsNewNote(false)

}


  return (
    <>
    <Header  showNewNote={()=>{showNewNote()}}/>
    <Notes notesEx={notesEx} setnotesEx={setnotesEx} />
    <CSSTransition
                  in={isNewNote}
                  timeout={600}
                  classNames="newnote"
                  mountOnEnter
                >
                  
                
    <>{isNewNote ? <NewNote hideNewNote={()=>{hideNewNote()}} addNewNote={(ob)=>{addNewNote(ob)}}/> : null}</>
    </CSSTransition>
    </>
  );
}

export default App;
