import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloader from './bll/assets/preloader.svg'
import s from './HW10.module.css'

function HW10() {

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        console.log('loading...')
        setTimeout(() => dispatch(loadingAC(false)), 2000)
    };

    return (
        <div className={s.container}>
            <hr/>
            homeworks 10

            {loading
                ? (
                    <div className={s.loaderImage}>
                        <img alt={'loading'} src={preloader}/>
                    </div>
                ) : (
                    <div className={s.button}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
