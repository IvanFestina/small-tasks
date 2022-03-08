import React from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    valueArray?: number[]
    setValueArray: (value: number[]) => void
    min?: number
    max?: number
    disable?: boolean
    // step
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, valueArray, setValueArray,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const updateRange = (e: Event, data: number | number[]) => {
        setValueArray(data as number[])
    }
    return (
        <>
                <Slider value={valueArray} onChange={updateRange}   disableSwap/>
        </>
    )
}

export default SuperDoubleRange
