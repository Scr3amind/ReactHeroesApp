import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <div >
            <div className="w-screen h-screen bg-comic-pattern bg-repeat bg-contain opacity-30 absolute z-0"></div>
            <Navbar />
            <div className="relative z-10">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/marvel/:heroeId" component={HeroScreen} />
                    <Route exact path="/dc" component={DcScreen} />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </div>
    )
}
