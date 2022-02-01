import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options?.map((o, i) => (
        <MenuItem key={i} value={o}>{o}</MenuItem>
    )) || [];

    const onChangeCallback = (e: SelectChangeEvent<string | number | readonly string[]>) => {
        // onChange && onChange(e)
        onChangeOption && onChangeOption(e.target.value)
    }

    return (
        <FormControl style={{marginTop: '20px'}} fullWidth>
            <InputLabel id="demo-simple-select-label">Your options</InputLabel>
            <Select
                value={restProps.value}
                label="Your options"
                onChange={onChangeCallback}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
            >
                {mappedOptions}
            </Select>
        </FormControl>
    )
}

export default SuperSelect
