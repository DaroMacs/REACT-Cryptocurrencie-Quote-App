import React, { useState } from 'react'
import styled from '@emotion/styled'


const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    margin: 15px 0;
`

const Select = styled.select`
    width: 70%;
    font-size: 18px;
    padding: 5px;
    border-radius: 0.5rem;
`



const useSelectCurrency = (label, options) => {

    const [state, setState] = useState('')

    const SelectCurrency = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">- Select -</option>

                {options.map(option => (
                    <option 
                        key={option.id}
                        value={option.id}
                        >{option.name}</option>
                ))}
            </Select>
        </>
    )

    return [state, SelectCurrency]
}

export default useSelectCurrency
