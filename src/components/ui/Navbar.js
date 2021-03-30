import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
    const history = useHistory()
    const {user, dispatch} = useContext(AuthContext);
    const {name} = user;
    const handleLogout = () => {
        dispatch({
            type: types.logout,
            
        })

        history.replace('/login');
    }

    return (
        <nav className="bg-gradient-to-r from-gray-700 to-black shadow-2xl relative z-10 py-4 animate__animated animate__fadeInDown">
            <div className="container mx-auto">
                <div className="sm:flex justify-around">
                    {/* Site title */}
                    <Link to="/" className="text-white text-3xl font-bold p-3">
                        Heroes App
                    </Link>
                    {/* Items */}
                    <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
                        <li className="sm:inline">
                            <NavLink exact to="/marvel" activeClassName="text-white font-bold" className="p-3 hover:text-white">
                                Marvel
                            </NavLink>
                        </li>
                        <li className="sm:inline">
                            <NavLink exact to="/dc" activeClassName="text-white font-bold" className="p-3 hover:text-white">
                                DC
                            </NavLink>
                        </li>
                        <li className="sm:inline">
                            <NavLink exact to="/search" activeClassName="text-white font-bold" className="p-3 hover:text-white">Search</NavLink>
                        </li>
                        <li className="sm:inline">
                            <button className="p-3 hover:text-white" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                        <li className="sm:inline">
                            <span className="px-3 text-gray-700 bg-white rounded-lg bg-opacity-80 font-bold">{name}</span>
                        </li>

                    </ul>

                </div>
            </div>

        </nav>
    )
}
