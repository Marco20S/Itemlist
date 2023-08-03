import axios from 'axios'


const axios = require(axios)
const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const configueStore = redux.configueStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading: true,
    items: [],
    error: ''
}



function addItemReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        default:
            return state;
    }
}

const fetch_user_Request = "Fetching User Data"
const fetch_User_Items = "Items Are Added "
const fetch_User_Error = "User Not Found"


const fetchUserRequest = () => {
    return {
        type: fetch_user_Request
    }
}

const fectchUserItems = items => {
    return {
        type: fetch_User_Items,
        payload: items
    }
}

const fetchUserError = error => {
    return {
        type: fetch_User_Error,
        payload: error
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case fetchUserRequest:
            return {
                ...state,
                loading: true
            }
        case addUserItems:
            return {
                loading: false,
                items: action.payload,
                error: ''
            }
        case fetchUserError:
            return {
                loading: false,
                items: [],
                error: action.payload
            }
    }

}

const fetchItems = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const items = response.data.map((item) => item.id)
                dispatch(fectchUserItems(items))
            })
            .catch((error) => {
                error.message("error has occures");
                dispatch(fetchUserError(error.message))
            })
            

        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
    }
}

const store = configueStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchItems())