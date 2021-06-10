import s from "./Paginator.module.css";
import React from "react";

type PropsType = {
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (count: number) => void
}

export const Paginator = (props:PropsType) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pageCount; i++) {
        pages = [...pages, i]
        // pages.push(i)
    }
    return  <div>
        {pages.map(p => {
            return props.currentPage + 3 > p && props.currentPage - 2 < p ?
                <span onClick={() => props.onPageChanged(p)}
                      className={props.currentPage === p ? s.currentPage : ''}>{p} </span> : ''
        })}
    </div>
}
