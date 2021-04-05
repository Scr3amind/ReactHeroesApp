import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
    // const history = useHistory();

    if(!hero) {
        return <Redirect to='/' />;
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;


    const handleReturn = () => {
        if(publisher === 'DC Comics') {
            history.push('/dc');
        }
        else {
            history.push('/marvel');
        }
    };

    return (
        <div className="flex flex-col items-center h-full my-5">
            <div className="flex w-auto bg-gradient-to-r from-gray-100 to-gray-300 py-2 rounded-xl shadow-2xl animate__animated animate__flipInX">

                <img src={`../assets/heroes/${heroeId}.jpg`} className="shadow-xlxl h-96 rounded-xl mx-2" alt={heroeId}/>
            
                <div className="flex flex-col justify-around mx-5 w-80">
                    <p className="font-bold text-xl"> {superhero} </p>
                    <p><b>Publisher: </b>{publisher}</p>
                    <p><b>Alter Ego: </b>{alter_ego}</p>
                    <p><b>First Appearance: </b>{first_appearance}</p>
                    <p><b>Characters: </b>{characters}</p>
                </div>
            </div>

            <button 
                className="bg-gray-700 text-white rounded-md my-5 py-2 px-5"
                onClick={handleReturn}
            >
                Return
            </button>
        </div>
    )
}
