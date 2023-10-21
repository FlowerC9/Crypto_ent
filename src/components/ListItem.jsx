import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ coin }) => {
    return (
        <div className='home-crypto'>
            <Link to={`/${coin.id}`}>
                <div className='home-crypto-image'>
                    <img src={coin.image} />
                </div>
                <div className='home-crypto-name'>
                    {coin.name}
                </div>
                {coin.priceBtc && (<div className='home-crypto-prices'>
                    <span className='home-crypto-btc'>
                        <img src="/bitcoin.webp" />
                        {coin.priceBtc} BTC
                    </span>
                    <span className='home-crypto-inr'>({coin.priceinr}) INR</span>
                </div>)
                }
            </Link>
        </div>
    )
}

export default ListItem