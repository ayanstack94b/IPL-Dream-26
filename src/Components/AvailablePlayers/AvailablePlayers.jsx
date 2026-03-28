import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import Card from '../UI/Card';

const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    // console.log(players);



    return (
        <div className='my-10'>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                {
                    players.map((player) => {
                        const { id } = player
                        return (
                            <Card key={id} player={player} setCoin={setCoin} coin={coin}
                                setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}
                            ></Card>

                        )
                    })
                }
            </div>


        </div>
    );
};

export default AvailablePlayers;