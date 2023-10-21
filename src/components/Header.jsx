import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({ back }) => {
    return (
        <header className='header'>
            <div className='width'>
                {back && (<Link to={'/'}>
                    <span class="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </Link>)
                }
                <h1><Link to={'/'}>Crypto ent</Link></h1>
            </div>
        </header>
    )
}

export default Header;