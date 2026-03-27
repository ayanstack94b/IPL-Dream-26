import React, { use } from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';

const Players = ({ playersPromise }) => {
    const player = use(playersPromise)
    // console.log(players);
    return (
        <div>
            Players: {player.length}
            <AvailablePlayers player={player}/>
        </div>
    );
};

export default Players;