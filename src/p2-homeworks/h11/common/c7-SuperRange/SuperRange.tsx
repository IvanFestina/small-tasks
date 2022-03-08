import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Box, Slider, Stack} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    callbackSetValueArray: (newValue: number) => void
    firstValue: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        // onChange, onChangeRange,
        className,
        callbackSetValueArray,
        firstValue,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (event: Event, newValue: number | number[]) => {
        // onChange && onChange(newValue) // сохраняем старую функциональность
        callbackSetValueArray(newValue as number)
        console.log(event, newValue)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <Slider
                value={firstValue}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
            />

            {/*<Box sx={{ width: 300 }}>*/}
            {/*  <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">*/}
            {/*    <Slider color='secondary' value={firstValue} onChange={onChangeCallback} />*/}
            {/*  </Stack>*/}
            {/*</Box>*/}
            );
        </>
    )
}

export default SuperRange
