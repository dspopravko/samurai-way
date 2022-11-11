import React from 'react';
import s from './Status.module.css'

interface StatusProps {
    status: string
    updateStatus: (status: string) => void
}

export class Status extends React.Component<StatusProps, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<StatusProps>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
              status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    }
    sendStatus = () => {
        this.props.updateStatus(this.state.status)
    }

    render() {
        console.log(this.props.status)
        return (
            <div className={s.container}>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode}>
                        <span>{this.props.status || "Double click to edit status.."}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                        <button onClick={this.sendStatus}>save status</button>
                    </div>
                }
            </div>
        );
    }

}
