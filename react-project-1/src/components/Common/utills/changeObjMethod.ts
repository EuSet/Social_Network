
type newObjType<E> = {
    [key:string]:E
}

export const changeObjMethod = <C, P extends keyof C, T extends keyof C>(state:C[], prop:P, id: C[P], obj:newObjType<C[T]>):C[] => {
   return  state.map(c => {
        if (id === c[prop]) {
            return {...c, ...obj}
        }
        return c
    })
}

//key:string, value:C[T]
