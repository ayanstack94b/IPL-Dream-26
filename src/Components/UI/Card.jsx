import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';


const Card = ({ player, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    // console.log('from card compo', player, setCoin);

    const { playerName, country, playerType, rating, battingStyle, bowlingStyle, price, image } = player;

    const [isSelected, setIsSelected] = useState(false)

    const handleChoosePlayer = () => {
        let newCoin = coin - price;
        if (newCoin >= 0) {
            setCoin(coin - price)
        } else {
            alert('not enough coin')
            return
        }

        alert(`${playerName}`, isSelected)
        setIsSelected(true); 
        setSelectedPlayers([...selectedPlayers, player])
    }

    return (
        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 ">
            <figure className="h-100 w-full overflow-hidden">
                <img className='w-full h-full object-cover' src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser />{playerName}</h2>

                <div className="flex justify-between gap-2 items-center">
                    <div className="flex  gap-2 items-center">
                        <FaFlag />
                        <p>{country}</p>
                    </div>
                    <button className="btn btn-ghost">{playerType}</button>
                </div>

                <span className="divider m-0"></span>
                <h2 className="font-bold">{rating}</h2>

                <div className="flex justify-between items-center ">
                    <span className="font-bold">{battingStyle}</span>
                    <span className="">{bowlingStyle}</span>
                </div>

                <div className="card-actions justify-between items-center">
                    <p className='font-bold'>Price: {price}</p>

                    <button className="btn" onClick={handleChoosePlayer} disabled={isSelected}  >
                        {
                            isSelected ? 'Selected' : 'Choose Player'
                        }
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Card;