import {INCREASE,DECREASE} from '../constants'

const initialState = {
    number:1
}

export default function update(state=initialState,action) {
    //reducer实际会被调用了两次，一次是store被创建时，一次是使用dispatch发送action
    //当store被创建时，redux立即调用reducer并获取到reducer返回的初始state
    //reducer在每次传递action时都会被调用
    // console.log(state)
    if (action.type === INCREASE) {
        return {
            number:state.number+action.amount
        }
    } else if(action.type === DECREASE){
        return {
            number:state.number-action.amount
        }
    }
    return state
}
