import { nanoid } from "nanoid"
import { useState } from "react"
import NoteList from "./components/NoteList"
import Search from "./components/Search"

const App = () => {
  const [searchText, setSearchText] = useState("")
  const [notes, setNotes] = useState([
    { id: nanoid(), text: 'This is my first note!', date: '30/12/2022' },
    { id: nanoid(), text: 'This is my second note!', date: '30/12/2022' },
    { id: nanoid(), text: 'This is my third note!', date: '30/12/2022' },
    { id: nanoid(), text: 'This is my fourth note!', date: '30/12/2022' },
  ])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NoteList
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))}
        handleAddNote={addNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  )
}

export default App