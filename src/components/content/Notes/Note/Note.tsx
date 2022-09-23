import React, {useState} from 'react';
import s from "./Note.module.css"
import {Button} from "../../../misc/Button/Button";
import {Input} from "../../../misc/Input/Input";

type DataType = {
    data: NotePropsType
    deleteNote: (noteId: number, paleteId: number) => void
}

type NotePropsType = {
    id: number,
    title: string,
    notes: OneNotePropsType[]
}

type OneNotePropsType = {
    id: number
    text: string
}


export const Note = (props: DataType) => {

    const [note, setNote] = useState([...props.data.notes])

    const [title, setTitle] = useState("")

    const addNote = () => {
        const newNote = {id: 0, text: title}
        setNote([...note, newNote])
        setTitle("")
    }

    const deleteTask = (id: number) => {
        props.deleteNote(id, props.data.id)
    }

    return (
        <>
            <div className={s.note}>
                {props.data.title}
                {note.map(n => {
                    return (
                            <li key={n.id}>
                                {n.text}
                                <Button name={'x'} onClick={()=>{deleteTask(n.id)}}/>
                            </li>
                    )
                })}
                <Input
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Type note title"/>
                <Button
                    name={'add'}
                    onClick={addNote}/>
            </div>
        </>

    );
};