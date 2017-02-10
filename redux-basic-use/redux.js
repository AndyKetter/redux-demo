import $ from 'jquery'
import {createStore} from 'redux'
function inc() {
    return {type:'INCREMENT'}
}
function dec() {
    return {type:'DECREMENT'}
}
const initstate = {counter:0}
function reducer(state=initstate,action) {
    switch (action.type) {
        case 'INCREMENT':
            return {counter:state.counter+1};
            break;
        case 'DECREMENT':
            return {counter:state.counter-1};
            break;
        default:
            return state;
    }
}
let store = createStore(reducer)
$('p').text(store.getState().counter)
store.subscribe(() => {
    $('p').text(store.getState().counter)
    console.log(store.getState());
})
$(function(){
    $('#inc').on('click', () => {
        store.dispatch(inc())
    })
    $('#dec').on('click', () => {
        store.dispatch(dec())
    })
})
