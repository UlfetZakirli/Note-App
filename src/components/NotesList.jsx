import AddNote from "./AddNote"
import Note from "./Note"

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {
        notes.map((note) => (
          <Note text={note.text} id={note.id} date={note.date} key={note.id} handleDeleteNote={handleDeleteNote}/>
        ))
      }
      <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList