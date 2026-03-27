import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const AvailablePlayers = ({ players }) => {
    console.log(players);



    return (
        <div className='my-10'>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                {
                    players.map((player) => {
                        const { id, playerName, country, playerType, rating, battingStyle, bowlingStyle, price, image } = player;
                        return (
                            <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 ">
                                <figure>
                                    <img className='' src={image} />
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
                                        <button className="btn btn-primary">Choose player</button>
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </div>


        </div>
    );
};

export default AvailablePlayers;