import { useState } from "react"

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState("")
    const MaxRemining = 200
    const handleSaveBtn = () => {
        if (noteText.trim().length) {
            handleAddNote(noteText)
        }
        setNoteText('')
    }

    const handleChange = (e) => {
        if (MaxRemining - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }
    }
    return (
        <div className="note new">
            <textarea
                cols="10"
                rows="8"
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChange}

            />
            <div className="note-footer">
                <small>{MaxRemining - noteText.length} Remining</small>
                <button onClick={handleSaveBtn} className="save">Save</button>
            </div>
        </div>
    )
}

export default AddNote