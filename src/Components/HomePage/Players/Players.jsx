import React, { use, useState } from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {
    const players = use(playersPromise)
    const [selectedType, setSelectedType] = useState('available')
    return (
        <div className='container mx-auto mt-10'>

            <div className="flex justify-between items-center mb-5">
                {
                    selectedType === 'available' ?
                        <h2 className='font-bold text-2xl'>Available Players</h2>
                        : <h2 className='font-bold text-2xl'> Selected Players</h2>
                }

                <div className="">
                    <btn onClick={() => setSelectedType('available')} className={`btn ${selectedType === "available" ? 'bg-[#e7fe29]' : 'bg-white'}  rounded-r-none rounded-l-xl`}>Available</btn>
                    <btn onClick={() => setSelectedType('selected')} className={`btn ${selectedType === "selected" ? 'bg-[#e7fe29]' : 'bg-white'}  rounded-l-none rounded-r-xl`}>Selected <span>(0)</span></btn>
                </div>
            </div>

            {selectedType === 'available' ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} /> : <SelectedPlayers></SelectedPlayers>}
        </div>
    );
};

export default Players;