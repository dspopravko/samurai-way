import React, {useState} from 'react';
import s from "./Note.module.css"
import {Button} from "../../../misc/Button";
import {Input} from "../../../misc/Input";

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

    let [note, setNote] = useState([...props.data.notes])

    let [title, setTitle] = useState("")

    const addNote = () => {
        let newNote = {id: 0, text: title}
        setNote([...note, newNote])
        setTitle("")
    }

    return (
        <>
            <div className={s.note}>
                {props.data.title}
                {note.map(n => {
                    return (
                            <li>
                                {n.text}
                                <Button name={'x'} callback={()=>{props.deleteNote(n.id, props.data.id)}}/>
                            </li>
                    )
                })}
                <Input title={title} setTitle={setTitle}/>
                <Button name={'add'} callback={addNote}/>
            </div>
        </>

    );
};