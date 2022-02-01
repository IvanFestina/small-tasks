import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, SyntheticEvent} from 'react'
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange && onChange(e)
        onChangeOption && onChangeOption(e.target.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
            <FormControlLabel key={i} value={o} control={<Radio/>} label={o}/>

        )) :
        []

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Your options</FormLabel>
            <RadioGroup
                onChange={onChangeCallback}
                defaultValue={value}
                name={name}
                row
            >
                {mappedOptions}
            </RadioGroup>
        </FormControl>)
}

export default SuperRadio
