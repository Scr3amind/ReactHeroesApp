import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
    const history = useHistory()
    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Isaac'
            }
            
        })
        history.replace(lastPath);
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-comic-pattern bg-repeat bg-contain ">
            <div className=" flex flex-col h-1/3 w-2/3 justify-evenly rounded-3xl shadow-2xl bg-gray-600 items-center animate__animated animate__bounceIn ">
                <h1 className="text-center text-6xl text-white">Login Screen</h1>
                
                <button 
                    className="text-white bg-gray-900 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 py-2 my-4 px-4" 
                    onClick={handleLogin}
                >
                    Login
                </button>
              
            </div>

        </div>

    )
}
