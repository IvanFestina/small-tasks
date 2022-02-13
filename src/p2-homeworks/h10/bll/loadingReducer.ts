const initState: LoadingReducerState = {
    isLoading: false
}
export type LoadingReducerState = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: ActionType): typeof initState=> {
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}


export type LoadingACType = {
    type: 'CHANGE-LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingACType   => {
    return {type: 'CHANGE-LOADING', isLoading,}
}

export type ActionType = LoadingACType