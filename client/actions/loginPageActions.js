
export const inSignUp = () => {
    console.log("action fired")
    return {
    type: 'IN_SIGN_UP',
    payload: ""
}}

export const inLogIn = ()=> ({
    type: 'IN_LOG_IN',
    payload: ""
})

export const closeLogIn = ()=> ({
    type: 'CLOSE_LOG_IN',
    payload: ""
})

export const logedIn = (userId)=> ({
    type: 'LOGED_IN',
    payload: userId
})
