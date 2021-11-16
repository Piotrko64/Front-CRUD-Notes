import Notes from './components/Notes';
import Header from './components/Header';
import NewNote from './components/newNote';
import { useState } from 'react';
import './App.css';

function App() {
  const [isNewNote, setIsNewNote] = useState(false);
  
const [notesEx, setnotesEx] = useState([
  {
      id: 44,
      title: "AAAAAAPI!",
      body: "body2",
      important: true,
      like: 1,
      comment: ['cool','Qui ea ipsum cupidatat occaecat dolor esse sunt velit Lorem.']
  },
  {
      id: 4,
      title: "API!",
      body: "body2 Minim dolore adipisicing nulla minim aliqua do velit adipisicing cillum id irure. Excepteur cillum consectetur sit minim est amet ex dolor in. Esse ad magna do exercitation laboris. In do qui est nostrud ad. Qui magna est tempor veniam deserunt Lorem labore. Eiusmod culpa ipsum sit quis exercitation consectetur proident incididunt et consectetur amet in sunt pariatur.",
      important: false,
      like: 2,
      comment: ['cool','Qui ea ipsum cupidatat occaecat dolor esse sunt velit Lorem.']
  },
  {
      id: 444555,
      title: "API!",
      body: "body2 Sit proident dolore tempor dolor ex est.",
      important: false,
      like: 0,
      comment: ['cool','Qui ea ipsum cupidatat occaecat dolor esse sunt velit Lorem.']
  }
]);
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
