import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold my-4">DC</h1>
            <HeroList publisher={'DC Comics'}/>
        </div>
    )
}
