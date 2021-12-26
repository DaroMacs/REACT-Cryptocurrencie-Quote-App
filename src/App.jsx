import styled from "@emotion/styled"
import { useState, useEffect } from "react"
import Formular from "./components/Formular"
import Result from "./components/Result"
import Spinner from "./components/Spinner"
import imageCrypto from './img/imagen-criptos.png'

const Container =  styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 400;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 320px;
    height: 4px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
    border-radius: 0.5rem;
  }
`

function App() {

  const [currencies, setCurrencies] = useState({})
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(Object.keys(currencies).length > 0) {
      setLoading(true)
      setResult({})

      const  quoteCrypto = async () => {
        const {currency, cryptoCurrency} = currencies
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`
        const answer = await fetch(url)
        const result = await answer.json()  

        setResult(result.DISPLAY[cryptoCurrency][currency])
        setLoading(false)
      }
      quoteCrypto()
    }
  }, [currencies])

  return (
    <Container>
      <Image 
        src={imageCrypto}
        alt="Image Cryto"
      />
      <div>
        <Heading>Cryptocurrencies Quote</Heading>
        <Formular 
          setCurrencies = {setCurrencies}
        />
      {loading && <Spinner /> }
      {result.PRICE && <Result result = {result}/>}
      </div>

    </Container>
  )
}

export default App
