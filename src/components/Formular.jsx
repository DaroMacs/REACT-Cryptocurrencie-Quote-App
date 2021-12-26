import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectCurrency from '../hooks/useSelectCurrency'
import { currencies } from '../data/currencies'
import Error from './Error'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;   
`

const InputSubmit = styled.input`
     font-family: 'Lato', sans-serif;
     background-color: #7a7dfe;
     border: none;
     width: 70%;
     padding: 10px;
     color: #fff;
     font-weight: 700;
     text-transform: uppercase;
     font-size: 15px;
     border-radius: 0.5rem;
     transition: background-color .3s ease ;
     margin-top: 30px;

     &:hover {
         background-color: #9497ff;
         cursor: pointer;

     }

`

const Formular = ({setCurrencies}) => {

    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)

    const [currency, SelectCurrency] = useSelectCurrency('Choose currency', currencies)
    const [cryptoCurrency, SelectCryptoCurrency] = useSelectCurrency('Choose CryptoCurrency', cryptos)

    useEffect(() => {
        
        const queryAPI = async () => {
             const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
             const answer = await fetch(url)
             const result = await answer.json()
            
             const arrayCryptos = result.Data.map(crypto => {

                const object = {
                    id:  crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }       
                return object;
         })
         setCryptos(arrayCryptos)
        }
        queryAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        
        if([currency, cryptoCurrency].includes('')) {
            setError(true)

            return
        }
        setError(false)
        setCurrencies({
            currency,
            cryptoCurrency
        })
    }

    return (
        <>
            {error && <Error>All Fields are Required</Error> }
            
            <Form
                onSubmit={handleSubmit}
            >

                <SelectCurrency />
                <SelectCryptoCurrency 
                
                
                />

                <InputSubmit 
                    type="submit" 
                    value="Quote" 
                />
            </Form>
        </>
    )
}

export default Formular
