import React from "react";
type PropsType = {
    status:string
    updateProfileStatus:(status:string) => void
}
type StateType = {
    editMode:boolean
    status:string
}
export class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    changeEditMode() {
        this.setState({editMode: !this.state.editMode})
    }
    componentDidUpdate(prevProps:PropsType, prevState:StateType): void {
        console.log('update')
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    updateStatus(status: string) {
        this.setState({
            status: status
        })
    }
    setStatus() {
        this.props.updateProfileStatus(this.state.status)
    }

    render(): React.ReactNode {
        return (
            !this.state.editMode ?
                <div>
                    <span onDoubleClick={() => {
                        this.changeEditMode()
                    }}>{this.state.status || 'status'}</span>
                </div>
                :
                <div onBlur={() => {
                    this.changeEditMode()
                    this.setStatus()
                }}>
                    <input autoFocus value={this.state.status}
                           onChange={(e) => this.updateStatus(e.currentTarget.value)} type="text"/>
                </div>
        )

    }


}