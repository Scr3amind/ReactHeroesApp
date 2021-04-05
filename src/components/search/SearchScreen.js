import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({history}) => {

    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({searchText: q})
    const {searchText} = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return (
        <div className="flex flex-col items-center  ">
            <h1 className="font-semibold text-2xl">Search</h1>
            
            <form className="text-white" onSubmit={handleSearch}>
                <input
                    className="h-14 w-80 outline-none text-xl bg-gray-700 opacity-80 shadow-lg rounded-xl px-2" 
                    type="text"   
                    placeholder="Find your hero"
                    name="searchText" 
                    autoComplete="off"
                    value={searchText}
                    onChange={handleInputChange}
                />                    
                <button 
                    className="ml-5 bg-gray-800 text-white px-5 py-2 rounded-xl shadow-lg"
                    type="submit"
                >
                    Search
                </button>
            </form>
            <div className="flex gap-4 justify-center my-10 flex-wrap ">
                {
                    (q !== '' && heroesFiltered.length === 0) && 
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 shadow-lg rounded-md">
                        <p className="font-bold">No Result</p>
                        <p>There is no hero {q}.</p>
                    </div>

                }
                {heroesFiltered.map(hero => <HeroCard key={hero.id} {...hero}/>)}
            </div>
            
        </div>
    )
}
