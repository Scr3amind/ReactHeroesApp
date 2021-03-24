import { heroes } from "../data/heroes";

export const getHeroById = (publisher) => {
    return heroes.find(hero => hero.id === publisher);
}