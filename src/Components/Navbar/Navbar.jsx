import React from 'react';
import coinIcon from '../../assets/coin.png'
import logo from '../../../src/assets/logo.png'
const Navbar = ({ coin }) => {
    return (
        <nav>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <img className='h-11 w-11' src={logo} alt="" />
                    </a>
                </div>
                <div className="flex-none">
                    <button className="flex justify-between items-center gap-2">
                        <p className="font-bold text-xl"><span id=''>{coin}</span> Coins</p>
                        <img className='h-7.5 w-7.5' src={coinIcon} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;  