import React, {useState} from 'react'
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {Button, Checkbox} from "@mui/material";
import axios from "axios";
import {HW_Api} from "./Api/Api-HW13";

 let instance = axios.create({
        baseURL: 'https://neko-cafe-back.herokuapp.com/'
    })

export const Request = () => {
    const [success, setSuccess] = useState<boolean>(true)
    const [errorText, setErrorText] = useState<string>('')



    const onButtonSendClickHandler = () => {
    HW_Api.postAuth(success)
        .then(response => {
            setErrorText(response.data.errorText)
        })
        .catch(error => {
            setErrorText(error.response ? error.response.data.errorText : error.message)
        })
    }
    const onChangeCheckboxHandler = () => {
        setSuccess(!success)
    }


    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div>
            <Button onClick={onButtonSendClickHandler} variant="contained">Contained</Button>
            <Checkbox checked={success} onChange={onChangeCheckboxHandler} icon={<FavoriteBorder/>}
                      checkedIcon={<Favorite/>}/>
        </div>
        <div>
            <span>{errorText}</span>
        </div>
    </div>
}