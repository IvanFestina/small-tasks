const initState: InitialStateType = {
    themes: ['dark', 'red', 'some'],
    currentTheme: 'some'
};
type InitialStateType = {
    themes: string[]
    currentTheme: string
}

export const themeReducer = (state: InitialStateType = initState, action: ChangeThemeActionType): InitialStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
            ...state,
            currentTheme: action.theme
            }
        }
        default: return state;
    }
};

type ChangeThemeActionType = ReturnType<typeof ChangeThemeAC>
export const ChangeThemeAC = (theme: string) => ({type: "CHANGE-THEME", theme} as const);