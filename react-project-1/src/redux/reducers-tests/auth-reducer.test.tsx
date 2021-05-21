import authReducer, {AuthType, initialState, setAuthData, signInSocNetwork} from "../auth-reducer";

let data:AuthType = {
    id:null,
    email:null,
    login:null,
    isAuth:false
}

beforeEach(() => {
   data = {
        id:10,
        email:'email@inbox.ru',
        login:'Login',
        isAuth:true
    }
})

test('response data should be added', () => {
    const newState = authReducer(initialState, setAuthData(data))
    expect(newState.isAuth).toBeTruthy()
    expect(newState.id).toBe(10)
})

test('response id should be added', () => {
    const newState = authReducer(initialState, signInSocNetwork(5))
    expect(newState.id).toBe(5)
})
