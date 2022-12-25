import React, {useState} from "react";
import s from "./Notes.module.css"
import {Note} from "../../features/Notes/Note/Note";
import {Button} from "../../components/Button/Button";

const notesData = [
    {
        id: 0,
        title: "Learning notes",
        notes: [
            {id: 0, text: "Learn React"},
            {id: 1, text: "Leatn JS"},
            {id: 2, text: "Prep for interview"}]
    },
    {
        id: 1,
        title: "Cooking",
        notes: [
            {id: 0, text: "Prep launch"},
            {id: 1, text: "Boil potato"},
            {id: 2, text: "Wash some dishes"}]
    }
]

export const Notes = () => {

    let [notes, setNotes] = useState([...notesData])

    const addNewPalete = () => {
        setNotes([...notes,     {
            id: 1,
            title: "New Title",
            notes: [
                {id: 0, text: "..let's do smth!"},]
        }])
    }
    const deleteNote = (noteId: number, paleteId: number) => {
 console.log('doesnt work yet')
    }

    return (
        <>
            <div className={s.notes}>
                {notes.map(note => {
                    return <Note
                        key={note.id}
                        data={note}
                        deleteNote={deleteNote}/>
                })}

            </div>
            <Button name={"Add new palate"} onClick={addNewPalete}/>
        </>

    )
}