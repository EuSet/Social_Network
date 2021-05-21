import React from "react";
import style from "./FormControl.module.css"

type PropsType = {
    type:string
    input:any
    meta:any
}

export const Input: React.FC<PropsType> = React.memo(({input, meta, type,...restProps}) => {
    const hasError = meta.touched && meta.error
    return <div>
        <div>
            <input className={hasError ? style.error : ''} {...input} {...restProps} type={type}/>
        </div>
            {hasError && <span className={hasError && style.errorSpan}>{meta.error}</span>}
    </div>
})
