import styled from '@emotion/styled'
import React from 'react'

const Text = styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    text-align: center;
    border-radius: 0.5rem;
`

const Error = ({children}) => {
    return (
        <Text>
            {children}
        </Text>
    )
}

export default Error
