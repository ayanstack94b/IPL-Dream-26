import React from 'react';
import coin from '../../assets/coin.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <button className="flex justify-between items-center gap-2">
                        <p className="font-bold"><span id=''>0</span>coins</p> 
                        <img className='h-[30px] w-[30px]' src={coin} alt="" srcset="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;  