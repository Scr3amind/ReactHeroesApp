import React from 'react'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className="flex items-center justify-around h-52 w-72 shadow-lg rounded-xl bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="flex justify-center w-1/2">
                <img src={`./assets/heroes/${id}.jpg`} className="rounded-md shadow-lg h-48 animate__animated animate__fadeIn" alt={superhero}/>
            </div>
            <div className="flex flex-col justify-around h-full w-1/2 text-center">
                <p className="font-bold">{superhero}</p>
                <p>{alter_ego}</p>
                {
                    (characters != alter_ego) && <p className="text-sm">{characters}</p>
                }
               <p className="text-xs">{first_appearance}</p> 
            </div>
        </div>
    )
}
