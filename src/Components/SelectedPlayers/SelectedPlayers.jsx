import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log('selectedPlayers', selectedPlayers);

    const handleDeleteBtn = (player) => {
        console.log('deleted', player);
        const filteredPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName != player.playerName )
        setSelectedPlayers(filteredPlayers)
        setCoin(coin + player.price)
    }

    return (
        <div className='space-y-5'>
            {
                selectedPlayers.map((player, i) => {
                    return <div key={i} className="flex justify-between items-center p-10 rounded-2xl gap-6  bg-base-300">

                        <div className="flex items-center gap-3">
                            <img className='h-20 w-20 rounded shadow-sm border-none hover:shadow-xl border transition-shadow border-gray-500 duration-300' src={player.image} alt="" />
                            <div className="">
                                <h2 className="flex font-semibold items-center gap-2"><FaUser></FaUser> {player.playerName}</h2>
                                <p className=" text-gray-400">{player.playerType}</p>
                            </div>
                        </div>
                        <button className='btn text-red-500 text-2xl' onClick={() => handleDeleteBtn(player)}>
                            <MdDelete />
                        </button>

                    </div>
                })
            }
        </div>
    );
};

export default SelectedPlayers;