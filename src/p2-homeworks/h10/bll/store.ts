import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

const RootReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
})

const store = createStore(RootReducer)

export default store

export type AppStoreType = ReturnType<typeof RootReducer>

// @ts-ignore
window.store = store
