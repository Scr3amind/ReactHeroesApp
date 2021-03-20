import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold my-4">Marvel</h1>
            <div className="flex">
                <HeroList publisher={'Marvel Comics'}/>
            </div>
        </div>
    )
}
