import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
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
                            <NavLink exact to="/login" activeClassName="text-white font-bold" className="p-3 hover:text-white">Login</NavLink>
                        </li>

                    </ul>

                </div>
            </div>

        </nav>
    )
}
