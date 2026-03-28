import React, { use, useState } from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {
    const players = use(playersPromise)
    const [selectedType, setSelectedType] = useState('available');
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='container mx-auto mt-10'>

            <div className="flex justify-between items-center mb-5">
                {
                    selectedType === 'available' ?
                        (<h2 className='font-bold text-2xl'>Available Players</h2>)
                        : (<h2 className='font-bold text-2xl'> Selected Players ({selectedPlayers.length}/{players.length})</h2>)
                }

                <div className="">
                    <button onClick={() => setSelectedType('available')} className={`btn ${selectedType === "available" ? 'bg-[#e7fe29]' : 'bg-white'}  rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={() => setSelectedType('selected')} className={`btn ${selectedType === "selected" ? 'bg-[#e7fe29]' : 'bg-white'}  rounded-l-none rounded-r-xl`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>

            {selectedType === 'available' ?
                <AvailablePlayers players={players} setCoin={setCoin} coin={coin}
                    setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} /> :

                <SelectedPlayers selectedPlayers={selectedPlayers} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} ></SelectedPlayers>}
        </div>
    );
};

export default Players;