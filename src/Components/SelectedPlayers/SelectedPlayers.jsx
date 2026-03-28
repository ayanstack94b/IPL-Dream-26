import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import SelectedCards from '../UI/SelectedCards';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log('selectedPlayers', selectedPlayers);

    const handleDeleteBtn = (player) => {
        console.log('deleted', player);
        const filteredPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName != player.playerName)
        setSelectedPlayers(filteredPlayers)
        setCoin(coin + player.price)
    }

    return (
        <div className='space-y-5 mb-20'>
            {selectedPlayers.length === 0 ? <div className='bg-base-300 text-center my-20 p-20 rounded'>
                <h2 className="font-semibold text-lg">No Players selected</h2>
                <p className="text-gray-400 font-medium">Go to available tab to select players</p>
            </div> :
                selectedPlayers.map((player, i) => {
                    return <SelectedCards player={player} key={i} handleDeleteBtn={handleDeleteBtn}></SelectedCards>
                })
            }
        </div>
    );
};

export default SelectedPlayers;