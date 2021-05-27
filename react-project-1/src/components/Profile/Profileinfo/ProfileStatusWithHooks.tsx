import React, {useEffect, useState} from "react";

type PropsType = {
    status:string
    updateProfileStatus:(status:string) => void
}

export const ProfileStatusWithHooks:React.FC<PropsType> = ({status, updateProfileStatus}) => {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(status)
    console.log(value)
    useEffect(() => {
        console.log(value)
        setValue(status)
    },[status])
    const changeMode = () => {
            setEditMode(true)
    }
        return (
            !editMode ?
                <div>
                    <span onDoubleClick={changeMode}>{status || 'status'}</span>
                </div>
                :
                <div onBlur={() => {
                    setEditMode(false)
                    updateProfileStatus(value)
                }}>
                    <input autoFocus value={value}
                           onChange={(e) => setValue(e.currentTarget.value)}/>
                </div>
        )
}
