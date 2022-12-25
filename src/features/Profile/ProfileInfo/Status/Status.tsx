import React, {useEffect, useState} from 'react';
import s from './Status.module.css'

interface StatusProps {
    status: string
    updateStatus: (status: string) => void
}

export const Status = (props: StatusProps) => {

    const [editMode, setEditMode] = useState(false)
    const [input, updateInput] = useState(props.status)

    useEffect(() => {
        updateInput(props.status)
    }, [props.status])
    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }
    //
    // componentDidUpdate(prevProps: Readonly<StatusProps>, prevState: Readonly<any>, snapshot?: any) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //           status: this.props.status
    //         })
    //     }
    // }
    //
    // activateEditMode = () => {
    //     this.setState({
    //         editMode: true
    //     })
    // }
    // deactivateEditMode = () => {
    //     this.setState({
    //         editMode: false
    //     })
    //     this.props.updateStatus(this.state.status)
    // }
    // onStatusChange = (event: React.FormEvent<HTMLInputElement>) => {
    //     this.setState({
    //         status: event.currentTarget.value
    //     })
    // }
    // sendStatus = () => {
    //     this.props.updateStatus(this.state.status)
    // }
    const onBlurHandler = () => {
        setEditMode(false)
        props.updateStatus(input)
    }

    return (
        <div className={s.container}>
            {!editMode &&
                <div onDoubleClick={()=>setEditMode(true)}>
                    <span>{props.status || "Double click to edit status.."}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus onChange={(e)=> updateInput(e.currentTarget.value)} onBlur={()=>onBlurHandler()}
                           value={input}/>
                    <button onClick={()=>props.updateStatus(input)}>save status</button>
                </div>
            }
        </div>
    );

}
