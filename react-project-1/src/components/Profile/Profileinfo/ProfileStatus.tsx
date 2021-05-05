import React from "react";

export class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode:false,
        title:'Hello'
    }
    changeEditMode() {
        this.setState({editMode:!this.state.editMode})
    }
    render(): React.ReactNode {
        return (
            !this.state.editMode ?
            <div>
                <span onDoubleClick={() => {this.changeEditMode()}}>{this.state.title}</span>
            </div>
                :
                <div onBlur={() => {this.changeEditMode()}}>
                    <input autoFocus value={this.state.title} type="text"/>
                </div>
            )

    }


}