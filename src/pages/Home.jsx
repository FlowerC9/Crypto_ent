import React from 'react'
import homeStore from '../stores/homeStore.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import ListItem from '../components/ListItem.jsx';
const Home = () => {

    const store = homeStore();
    useEffect(() => {
        store.fetchCoins();
    }, [])
    return (
        <div>
            <Header />
            <header className='header-search'>
                <div className='width'>
                    <h2>Search for a coin</h2>
                    <div className='home-search-input'>
                        <input type='text' value={store.query} onChange={store.setQuery} />
                    </div>
                </div>
            </header>
            <div className='home-cryptos'>
                <div className='width'>
                    <h2>Trending coins</h2>
                    <div className='home-cryptos-list'>
                        {store.coins.map(coin => {
                            return (
                                <ListItem key={coin.id} coin={coin} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home