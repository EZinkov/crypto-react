import React, {useState, useEffect} from 'react'

const App = () => {
    const [searchedCoin, setSearchedCoin] = useState('')
    const [coinData, setCoinData] = useState({})
    const [exchangesData, setExchangesData] = useState([])

    useEffect(() => {
        const fetchCoinData = async () => {
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/${searchedCoin}`)
            const json = await res.json()
            setCoinData(json)
        }
        fetchCoinData()
    }, [searchedCoin])


    return (
    <div>
        <input
            type='text' 
            value={searchedCoin}
            onChange={e => setSearchedCoin(e.target.value)}
        />
    </div>
  )
}

export default App