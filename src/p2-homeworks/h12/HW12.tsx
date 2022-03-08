import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {ChangeThemeAC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";


function HW12() {
    const themes = useSelector<AppStoreType, string[]>(state => state.theme.themes)
    const theme = useSelector<AppStoreType, string>(state => state.theme.currentTheme)
    const dispatch = useDispatch()
    const onChangeCallback = (e: any) => {
        console.log(e)
    // сохранение схемы в редакс
    dispatch(ChangeThemeAC(e))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />

            <hr/>
        </div>
    );
}

export default HW12;
