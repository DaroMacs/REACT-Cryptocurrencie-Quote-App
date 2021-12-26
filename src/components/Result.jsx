import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 30px;
`

const Text = styled.p`
     font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
    
`

const Image = styled.img`
    display: block;
    width: 120px;
`

const Result = ({result}) => {
    
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result;

    return (
        <Container>
            <Image 
                src={`http://cryptocompare.com/${IMAGEURL}`} 
                alt='crypto image'
            />
            
            <div>
                <Price>The price is: <span>{PRICE}</span></Price>
                <Text>Today's highest price: <span>{HIGHDAY}</span></Text>
                <Text>Today's lowest price: <span>{LOWDAY}</span></Text>
                <Text>Last 24 hours' variation: <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Last update: <span>{LASTUPDATE}</span></Text>
            </div>
        </Container>
    )
}

export default Result
