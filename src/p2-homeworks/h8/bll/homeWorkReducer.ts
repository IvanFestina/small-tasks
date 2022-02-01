import {initialPeople, UserType} from "../HW8";

export type HomeWorkReducerActionType = {type: 'SORT', payload: 'up' | 'down'}
| {type: 'CHECK', payload: number}

export const homeWorkReducer = (state = initialPeople, action: HomeWorkReducerActionType): UserType[] => {
    switch (action.type) {
        case 'SORT':
        const newState = [...state].sort( (a, b) => a.age > b.age ? 1 : -1)
        return action.payload === 'up' ? newState : newState.reverse()
        case 'CHECK': {
            return state.filter(u => u.age >= 18)
        }
        default: return state
    }
};